import { useEffect, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from "@stripe/react-stripe-js";

import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PaymentTestModeBanner } from "@/components/PaymentTestModeBanner";
import { getStripe, getStripeEnvironment } from "@/lib/stripe";
import { useCart, resolveLines } from "@/lib/cart";
import { createCheckoutSession } from "@/lib/checkout.functions";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Kasse — LAMISENT ESSENCE" },
      { name: "description", content: "Sichere Bezahlung über Stripe, Klarna, PayPal und mehr." },
    ],
  }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const navigate = useNavigate();
  const lines = useCart((s) => s.lines);
  const resolved = resolveLines(lines);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (resolved.length === 0) {
      navigate({ to: "/warenkorb" });
    }
  }, [resolved.length, navigate]);

  const fetchClientSecret = async (): Promise<string> => {
    const { data: { user } } = await supabase.auth.getUser();
    const result = await createCheckoutSession({
      data: {
        lines: lines.map((l) => ({ slug: l.slug, ml: l.ml, qty: l.qty })),
        customerEmail: user?.email ?? undefined,
        userId: user?.id,
        returnUrl: `${window.location.origin}/checkout/return?session_id={CHECKOUT_SESSION_ID}`,
        environment: getStripeEnvironment(),
      },
    });
    if ("error" in result) {
      setError(result.error);
      throw new Error(result.error);
    }
    if (!result.clientSecret) throw new Error("Stripe did not return a client secret");
    return result.clientSecret;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PaymentTestModeBanner />
      <AnnouncementBar />
      <SiteHeader />
      <section className="pt-[150px]">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <p className="text-[11px] uppercase tracking-luxury text-gold">Kasse</p>
          <h1 className="mt-3 font-display text-4xl uppercase text-ivory md:text-5xl">Bezahlung</h1>

          {error && (
            <div className="mt-6 rounded-sm border border-red-300 bg-red-50 p-4 text-sm text-red-800">
              {error}
              <div className="mt-2">
                <Link to="/warenkorb" className="underline">Zurück zum Warenkorb</Link>
              </div>
            </div>
          )}

          {resolved.length > 0 && !error && (
            <div className="mt-8 overflow-hidden rounded-sm border border-border bg-white">
              <EmbeddedCheckoutProvider stripe={getStripe()} options={{ fetchClientSecret }}>
                <EmbeddedCheckout />
              </EmbeddedCheckoutProvider>
            </div>
          )}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
