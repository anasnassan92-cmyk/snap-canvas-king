import { createServerFn } from "@tanstack/react-start";
import { type StripeEnv, createStripeClient, getStripeErrorMessage } from "@/lib/stripe.server";

export type CheckoutLineInput = { slug: string; ml: number; qty: number };

type CheckoutSessionResult = { clientSecret: string } | { error: string };

function priceIdFor(slug: string, ml: number): string {
  return `${slug.replace(/-/g, "_")}_${ml}ml`;
}

export const createCheckoutSession = createServerFn({ method: "POST" })
  .inputValidator(
    (data: {
      lines: CheckoutLineInput[];
      customerEmail?: string;
      userId?: string;
      returnUrl: string;
      environment: StripeEnv;
    }) => {
      if (!data.lines?.length) throw new Error("Cart is empty");
      for (const l of data.lines) {
        if (![8, 30, 50, 100].includes(l.ml)) throw new Error("Invalid size");
        if (!/^[a-z0-9-]+$/.test(l.slug)) throw new Error("Invalid slug");
        if (!Number.isInteger(l.qty) || l.qty < 1 || l.qty > 99) throw new Error("Invalid quantity");
      }
      return data;
    },
  )
  .handler(async ({ data }): Promise<CheckoutSessionResult> => {
    try {
      const stripe = createStripeClient(data.environment);

      // resolve lookup_keys → Stripe price IDs
      const lookupKeys = data.lines.map((l) => priceIdFor(l.slug, l.ml));
      const prices = await stripe.prices.list({ lookup_keys: lookupKeys, limit: 100 });
      const byKey = new Map(prices.data.map((p) => [p.lookup_key as string, p]));

      const line_items = data.lines.map((l) => {
        const key = priceIdFor(l.slug, l.ml);
        const price = byKey.get(key);
        if (!price) throw new Error(`Price not found: ${key}`);
        return { price: price.id, quantity: l.qty };
      });

      // Resolve / create customer with userId metadata
      let customerId: string | undefined;
      if (data.userId || data.customerEmail) {
        if (data.userId && !/^[a-zA-Z0-9_-]+$/.test(data.userId)) throw new Error("Invalid userId");
        if (data.userId) {
          const found = await stripe.customers.search({
            query: `metadata['userId']:'${data.userId}'`,
            limit: 1,
          });
          if (found.data.length) customerId = found.data[0].id;
        }
        if (!customerId && data.customerEmail) {
          const existing = await stripe.customers.list({ email: data.customerEmail, limit: 1 });
          if (existing.data.length) {
            const c = existing.data[0];
            customerId = c.id;
            if (data.userId && c.metadata?.userId !== data.userId) {
              await stripe.customers.update(c.id, { metadata: { ...c.metadata, userId: data.userId } });
            }
          }
        }
        if (!customerId) {
          const created = await stripe.customers.create({
            ...(data.customerEmail && { email: data.customerEmail }),
            ...(data.userId && { metadata: { userId: data.userId } }),
          });
          customerId = created.id;
        }
      }

      const session = await stripe.checkout.sessions.create({
        line_items,
        mode: "payment",
        ui_mode: "embedded_page",
        return_url: data.returnUrl,
        ...(customerId && { customer: customerId }),
        automatic_tax: { enabled: true },
        shipping_address_collection: { allowed_countries: ["DE", "AT", "CH", "NL", "BE", "LU", "FR", "IT", "ES"] },
        shipping_options: [
          {
            shipping_rate_data: {
              type: "fixed_amount",
              display_name: "DHL/DPD Standard (1–3 Werktage)",
              fixed_amount: { amount: 490, currency: "eur" },
              tax_behavior: "inclusive",
              tax_code: "txcd_92010001",
              delivery_estimate: {
                minimum: { unit: "business_day", value: 1 },
                maximum: { unit: "business_day", value: 3 },
              },
            },
          },
          {
            shipping_rate_data: {
              type: "fixed_amount",
              display_name: "Kostenloser Versand (ab 49,99 €)",
              fixed_amount: { amount: 0, currency: "eur" },
              tax_behavior: "inclusive",
              tax_code: "txcd_92010001",
              delivery_estimate: {
                minimum: { unit: "business_day", value: 1 },
                maximum: { unit: "business_day", value: 3 },
              },
            },
          },
        ],
        payment_intent_data: { description: `LAMISENT ESSENCE — Bestellung (${data.lines.length} Artikel)` },
        ...(data.userId && { metadata: { userId: data.userId } }),
      } as any);

      return { clientSecret: session.client_secret ?? "" };
    } catch (error) {
      console.error("createCheckoutSession error:", error);
      return { error: getStripeErrorMessage(error) };
    }
  });
