import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Plus, Minus, Trash2, ShieldCheck, Truck } from "lucide-react";

import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { EUR } from "@/data/products";
import { useCart, resolveLines, cartTotals, FREE_SHIPPING_THRESHOLD } from "@/lib/cart";

export const Route = createFileRoute("/warenkorb")({
  head: () => ({
    meta: [
      { title: "Warenkorb — LAMISENT ESSENCE" },
      { name: "description", content: "Dein Warenkorb bei LAMISENT ESSENCE." },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { lines, setQty, remove } = useCart();
  const resolved = resolveLines(lines);
  const { subtotal, shipping, total } = cartTotals(resolved);
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <SiteHeader />

      <section className="pt-[150px]">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="text-[11px] uppercase tracking-luxury text-gold">Warenkorb</p>
          <h1 className="mt-3 font-display text-4xl uppercase text-ivory md:text-5xl">Dein Warenkorb</h1>

          {resolved.length === 0 ? (
            <div className="mt-16 flex flex-col items-center rounded-sm border border-border bg-charcoal/40 py-20 text-center">
              <p className="font-display text-xl uppercase text-ivory">Dein Warenkorb ist leer</p>
              <p className="mt-3 max-w-md text-sm text-ivory-muted">
                Entdecke die LAMISENT-Kollektion — 10 Signature-Düfte, jeweils in 4 Größen.
              </p>
              <Link
                to="/produkte"
                className="mt-8 inline-flex items-center gap-3 bg-gold px-7 py-3.5 text-[11px] uppercase tracking-luxury text-ink hover:bg-gold-soft"
                style={{ boxShadow: "var(--shadow-gold)" }}
              >
                Zur Kollektion <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ) : (
            <div className="mt-12 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
              <div className="space-y-4">
                {resolved.map((l) => (
                  <article
                    key={`${l.slug}-${l.ml}`}
                    className="flex gap-4 rounded-sm border border-border bg-charcoal/40 p-4 sm:gap-6 sm:p-6"
                  >
                    <Link to="/produkte/$slug" params={{ slug: l.slug }} className="shrink-0">
                      <img src={l.product.image} alt={l.product.name} className="h-32 w-24 rounded-sm bg-charcoal object-contain" />
                    </Link>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-[10px] uppercase tracking-luxury text-gold">{l.product.family}</p>
                          <Link
                            to="/produkte/$slug"
                            params={{ slug: l.slug }}
                            className="mt-1 font-display text-lg uppercase text-ivory hover:text-gold"
                          >
                            {l.product.name}
                          </Link>
                          <p className="mt-1 text-[10px] uppercase tracking-luxury text-ivory-muted">{l.ml} ML · {EUR(l.unitPrice)}</p>
                        </div>
                        <p className="font-sans text-base font-semibold text-ivory">{EUR(l.lineTotal)}</p>
                      </div>
                      <div className="mt-auto flex items-center justify-between pt-4">
                        <div className="inline-flex items-center border border-border">
                          <button
                            onClick={() => setQty(l.slug, l.ml, l.qty - 1)}
                            className="px-3 py-2 text-ivory-muted hover:text-gold"
                            aria-label="Menge reduzieren"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="min-w-10 px-2 text-center text-sm text-ivory">{l.qty}</span>
                          <button
                            onClick={() => setQty(l.slug, l.ml, l.qty + 1)}
                            className="px-3 py-2 text-ivory-muted hover:text-gold"
                            aria-label="Menge erhöhen"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => remove(l.slug, l.ml)}
                          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-luxury text-ivory-muted hover:text-gold"
                        >
                          <Trash2 className="h-3.5 w-3.5" /> Entfernen
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <aside className="h-fit rounded-sm border border-border bg-charcoal/40 p-7">
                <p className="text-[11px] uppercase tracking-luxury text-gold">Zusammenfassung</p>
                <dl className="mt-5 space-y-2 text-sm">
                  <div className="flex justify-between text-ivory-muted">
                    <dt>Zwischensumme</dt><dd>{EUR(subtotal)}</dd>
                  </div>
                  <div className="flex justify-between text-ivory-muted">
                    <dt>Versand</dt><dd>{shipping === 0 ? "Kostenlos" : EUR(shipping)}</dd>
                  </div>
                  {remaining > 0 && (
                    <div className="rounded-sm border border-border bg-background p-3 text-[11px] text-ivory-muted">
                      Noch <span className="text-gold">{EUR(remaining)}</span> bis zum kostenlosen Versand.
                    </div>
                  )}
                  <div className="flex justify-between border-t border-border pt-4 font-display text-lg text-ivory">
                    <dt>Gesamt</dt><dd>{EUR(total)}</dd>
                  </div>
                  <p className="text-[10px] text-ivory-muted">inkl. MwSt</p>
                </dl>

                <Link
                  to="/checkout"
                  className="mt-6 flex w-full items-center justify-center gap-3 bg-gold px-7 py-3.5 text-[11px] uppercase tracking-luxury text-ink hover:bg-gold-soft"
                  style={{ boxShadow: "var(--shadow-gold)" }}
                >
                  Zur Kasse <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <p className="mt-3 text-center text-[10px] text-ivory-muted">
                  Sicher zahlen via Stripe · Klarna · PayPal · Apple/Google Pay
                </p>

                <ul className="mt-6 space-y-2 border-t border-border pt-5 text-[11px] text-ivory-muted">
                  <li className="flex items-center gap-2"><Truck className="h-3.5 w-3.5 text-gold" /> DHL/DPD · 1–3 Werktage</li>
                  <li className="flex items-center gap-2"><ShieldCheck className="h-3.5 w-3.5 text-gold" /> Klarna · PayPal · Stripe · SEPA</li>
                </ul>
              </aside>
            </div>
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
