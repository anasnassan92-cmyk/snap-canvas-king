import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ChevronLeft, Truck, ShieldCheck, RotateCcw, Sparkles } from "lucide-react";

import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PRODUCTS, BUNDLE_INFO, EUR, type Product } from "@/data/products";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/produkte/$slug")({
  loader: ({ params }): { product: Product } => {
    const product = PRODUCTS.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    if (!p) return {};
    return {
      meta: [
        { title: `${p.name} — LAMISENT ESSENCE` },
        { name: "description", content: `${p.name} – ${p.inspired}. Extrait de Parfum in 30, 50 und 100 ML.` },
        { property: "og:title", content: `${p.name} — LAMISENT ESSENCE` },
        { property: "og:description", content: `${p.inspired}. Extrait de Parfum, ${p.family}.` },
        { property: "og:image", content: p.coverImage ?? p.image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: p.coverImage ?? p.image },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background text-center">
      <div>
        <p className="font-display text-4xl text-ivory">Duft nicht gefunden</p>
        <Link to="/produkte" className="mt-6 inline-flex items-center gap-2 text-gold hover:text-gold-soft">
          <ChevronLeft className="h-4 w-4" /> Zurück zur Kollektion
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="flex min-h-screen items-center justify-center bg-background text-center">
      <p className="text-ivory">{error.message}</p>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product: p } = Route.useLoaderData() as { product: Product };
  const [sizeIdx, setSizeIdx] = useState(0);
  const [qty, setQty] = useState(1);
  const add = useCart((s) => s.add);
  const size = p.sizes[sizeIdx];

  const related = PRODUCTS.filter((x) => x.slug !== p.slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <SiteHeader />

      <section className="pt-[150px]">
        <div className="mx-auto max-w-7xl px-6">
          <Link to="/produkte" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-luxury text-ivory-muted hover:text-gold">
            <ChevronLeft className="h-3.5 w-3.5" /> Alle Düfte
          </Link>

          <div className="mt-8 grid gap-12 md:grid-cols-2">
            {/* Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border bg-charcoal">
                <img src={p.coverImage ?? p.image} alt={p.name} className="h-full w-full object-cover" />
              </div>
              {p.coverImage && (
                <div className="grid grid-cols-3 gap-3">
                  <button className="aspect-square overflow-hidden rounded-sm border border-gold bg-charcoal">
                    <img src={p.coverImage} alt="" className="h-full w-full object-cover" />
                  </button>
                  <button className="aspect-square overflow-hidden rounded-sm border border-border bg-charcoal">
                    <img src={p.image} alt="" className="h-full w-full object-contain p-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              <p className="text-[11px] uppercase tracking-luxury text-gold">{p.family}</p>
              <h1 className="mt-3 font-display text-4xl uppercase text-ivory md:text-5xl">{p.name}</h1>
              <p className="mt-3 text-sm text-ivory-muted">{p.inspired}</p>

              <div className="mt-6 flex items-baseline gap-3">
                <p className="font-display text-3xl text-ivory">{EUR(size.price)}</p>
                <p className="text-xs text-ivory-muted">/ {size.ml} ML · inkl. MwSt</p>
              </div>

              <div className="mt-8">
                <p className="text-[10px] uppercase tracking-luxury text-ivory-muted">Größe wählen</p>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {p.sizes.map((s, i) => (
                    <button
                      key={s.ml}
                      onClick={() => setSizeIdx(i)}
                      className={`flex flex-col items-center border px-2 py-3 text-[11px] uppercase tracking-luxury transition-colors ${
                        i === sizeIdx ? "border-gold bg-gold text-ink" : "border-border text-ivory hover:border-gold hover:text-gold"
                      }`}
                    >
                      <span className="text-sm">{s.ml} ML</span>
                      <span className="mt-1 text-[10px]">{EUR(s.price)}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-stretch gap-3">
                <div className="inline-flex items-center border border-border">
                  <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-4 py-3 text-ivory-muted hover:text-gold" aria-label="Menge reduzieren">−</button>
                  <span className="min-w-10 px-2 text-center text-sm text-ivory">{qty}</span>
                  <button onClick={() => setQty((q) => q + 1)} className="px-4 py-3 text-ivory-muted hover:text-gold" aria-label="Menge erhöhen">+</button>
                </div>
                <button
                  onClick={() => add({ slug: p.slug, ml: size.ml, qty })}
                  className="flex-1 bg-gold px-7 py-3.5 text-[11px] uppercase tracking-luxury text-ink transition-colors hover:bg-gold-soft"
                  style={{ boxShadow: "var(--shadow-gold)" }}
                >
                  In den Warenkorb · {EUR(size.price * qty)}
                </button>
              </div>

              <ul className="mt-8 space-y-3 border-t border-border pt-6 text-sm text-ivory-muted">
                <li className="flex items-center gap-3"><Truck className="h-4 w-4 text-gold" /> Versand 1–3 Werktage · kostenlos ab 49,90 €</li>
                <li className="flex items-center gap-3"><RotateCcw className="h-4 w-4 text-gold" /> 14 Tage Rückgaberecht bei ungeöffnetem Flakon</li>
                <li className="flex items-center gap-3"><ShieldCheck className="h-4 w-4 text-gold" /> Sichere Zahlung mit Klarna, PayPal, Stripe, SEPA</li>
                <li className="flex items-center gap-3"><Sparkles className="h-4 w-4 text-gold" /> 25–30 % Duftöl-Konzentration · Extrait de Parfum</li>
              </ul>
            </div>
          </div>

          {/* Notes / story */}
          <div className="mt-20 grid gap-12 border-t border-border pt-16 md:grid-cols-2">
            <div>
              <p className="text-[11px] uppercase tracking-luxury text-gold">
                {p.no} — {p.inspired}
              </p>
              <h2 className="mt-3 text-2xl uppercase text-ivory">Beschreibung</h2>
              <p className="mt-5 text-sm leading-relaxed text-ivory-muted">{p.description}</p>

              <dl className="mt-8 space-y-4 text-sm">
                <div>
                  <dt className="text-[10px] uppercase tracking-luxury text-ivory-muted">Duftrichtung</dt>
                  <dd className="mt-1 text-ivory">{p.direction}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-luxury text-ivory-muted">Charakter</dt>
                  <dd className="mt-1 text-ivory">{p.character.join(" · ")}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-luxury text-ivory-muted">Ideal für</dt>
                  <dd className="mt-1 text-ivory">{p.idealFor.join(" · ")}</dd>
                </div>
              </dl>
            </div>
            <div className="rounded-sm border border-border bg-charcoal/40 p-8">
              <p className="text-[11px] uppercase tracking-luxury text-gold">
                {p.accords ? p.accords.label : "Duftpyramide"}
              </p>
              {p.accords ? (
                <>
                  <p className="mt-6 text-sm text-ivory">{p.accords.notes.join(" | ")}</p>
                  {p.accords.note && (
                    <p className="mt-5 border-t border-border pt-4 text-[11px] leading-relaxed text-ivory-muted">
                      {p.accords.note}
                    </p>
                  )}
                </>
              ) : (
                <dl className="mt-6 space-y-5 text-sm">
                  <div>
                    <dt className="text-[10px] uppercase tracking-luxury text-ivory-muted">Kopfnote</dt>
                    <dd className="mt-1 text-ivory">{p.top?.join(" | ")}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-luxury text-ivory-muted">Herznote</dt>
                    <dd className="mt-1 text-ivory">{p.heart?.join(" | ")}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-luxury text-ivory-muted">Basisnote</dt>
                    <dd className="mt-1 text-ivory">{p.base?.join(" | ")}</dd>
                    {p.baseNote && (
                      <dd className="mt-2 text-[11px] leading-relaxed text-ivory-muted">{p.baseNote}</dd>
                    )}
                  </div>
                </dl>
              )}
              <p className="mt-8 border-t border-border pt-4 text-[11px] leading-relaxed text-ivory-muted">
                <span className="uppercase tracking-luxury text-gold">Bundles:</span> {BUNDLE_INFO}
              </p>
            </div>
          </div>

          {/* Related */}
          <div className="mt-24 border-t border-border pt-16 pb-24">
            <p className="text-center text-[11px] uppercase tracking-luxury text-gold">Auch interessant</p>
            <h2 className="mt-3 text-center text-3xl uppercase text-ivory">Weitere Düfte</h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/produkte/$slug"
                  params={{ slug: r.slug }}
                  className="group block overflow-hidden rounded-sm border border-border bg-charcoal/40 transition-all hover:border-gold/40"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-charcoal">
                    <img src={r.coverImage ?? r.image} alt={r.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <p className="text-[10px] uppercase tracking-luxury text-gold">{r.family}</p>
                    <p className="mt-1 font-display text-base uppercase text-ivory">{r.name}</p>
                    <p className="mt-2 text-sm text-ivory">{EUR(r.sizes[0].price)}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link to="/produkte" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-luxury text-gold hover:text-gold-soft">
                Alle Düfte ansehen <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
