import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";

import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/checkout/return")({
  validateSearch: (search: Record<string, unknown>): { session_id?: string } => ({
    session_id: typeof search.session_id === "string" ? search.session_id : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Bestellung bestätigt — LAMISENT ESSENCE" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ReturnPage,
});

function ReturnPage() {
  const { session_id } = Route.useSearch();
  const clear = useCart((s) => s.clear);

  useEffect(() => {
    if (session_id) clear();
  }, [session_id, clear]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <SiteHeader />
      <section className="pt-[150px]">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center">
          <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
            <Check className="h-8 w-8 text-gold" />
          </div>
          <p className="mt-6 text-[11px] uppercase tracking-luxury text-gold">Danke für deine Bestellung</p>
          <h1 className="mt-3 font-display text-4xl uppercase text-ivory md:text-5xl">Bestellung bestätigt</h1>
          <p className="mt-5 text-sm text-ivory-muted">
            Wir haben deine Bestellung erhalten und versenden in Kürze mit DHL/DPD.
            Eine Bestätigungs-E-Mail ist unterwegs.
          </p>
          {session_id && (
            <p className="mt-3 text-[10px] uppercase tracking-luxury text-ivory-muted">Referenz · {session_id.slice(-12)}</p>
          )}
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/konto"
              className="inline-flex items-center gap-3 bg-gold px-7 py-3.5 text-[11px] uppercase tracking-luxury text-ink"
              style={{ boxShadow: "var(--shadow-gold)" }}
            >
              Meine Bestellungen <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              to="/produkte"
              className="inline-flex items-center gap-3 border border-border px-7 py-3.5 text-[11px] uppercase tracking-luxury text-ivory hover:text-gold"
            >
              Weiter shoppen
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
