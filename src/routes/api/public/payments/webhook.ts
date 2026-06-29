import { createFileRoute } from "@tanstack/react-router";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import { type StripeEnv, verifyWebhook, createStripeClient } from "@/lib/stripe.server";

let _supabase: ReturnType<typeof createClient<Database>> | null = null;
function getSupabase() {
  if (!_supabase) {
    _supabase = createClient<Database>(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
  }
  return _supabase;
}

async function handleCheckoutCompleted(sessionObj: any, env: StripeEnv) {
  const stripe = createStripeClient(env);
  // Retrieve full session with line items expanded
  const session = await stripe.checkout.sessions.retrieve(sessionObj.id, {
    expand: ["line_items.data.price.product", "shipping_cost.shipping_rate"],
  });

  const items =
    session.line_items?.data.map((li: any) => ({
      price_id: li.price?.lookup_key || li.price?.id,
      product_id: typeof li.price?.product === "string" ? li.price?.product : li.price?.product?.id,
      product_name: typeof li.price?.product === "object" ? li.price?.product?.name : undefined,
      quantity: li.quantity,
      amount_subtotal: li.amount_subtotal,
      amount_total: li.amount_total,
      currency: li.currency,
    })) ?? [];

  const userId = (session.metadata?.userId as string | undefined) || null;
  const email = session.customer_details?.email || session.customer_email || "unknown@example.com";

  await getSupabase()
    .from("orders")
    .upsert(
      {
        stripe_session_id: session.id,
        stripe_payment_intent:
          typeof session.payment_intent === "string" ? session.payment_intent : session.payment_intent?.id,
        user_id: userId,
        email,
        status: session.payment_status === "paid" ? "paid" : (session.status ?? "pending"),
        amount_total: session.amount_total ?? 0,
        amount_subtotal: session.amount_subtotal ?? 0,
        amount_shipping: session.shipping_cost?.amount_total ?? 0,
        amount_tax: session.total_details?.amount_tax ?? 0,
        currency: session.currency ?? "eur",
        items,
        shipping_address: session.customer_details?.address ?? session.shipping_details?.address ?? null,
        environment: env,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "stripe_session_id" },
    );
}

export const Route = createFileRoute("/api/public/payments/webhook")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const rawEnv = new URL(request.url).searchParams.get("env");
        if (rawEnv !== "sandbox" && rawEnv !== "live") {
          return Response.json({ received: true, ignored: "invalid env" });
        }
        const env: StripeEnv = rawEnv;
        try {
          const event = await verifyWebhook(request, env);
          switch (event.type) {
            case "checkout.session.completed":
            case "checkout.session.async_payment_succeeded":
              await handleCheckoutCompleted(event.data.object, env);
              break;
            default:
              console.log("Unhandled webhook event:", event.type);
          }
          return Response.json({ received: true });
        } catch (e) {
          console.error("Webhook error:", e);
          return new Response("Webhook error", { status: 400 });
        }
      },
    },
  },
});
