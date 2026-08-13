import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, Sparkles, Clock, Truck, PackageCheck, X } from "lucide-react";

import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import boxDiscovery from "@/assets/lam/box-discovery-set.png.asset.json";
import { PRODUCTS, DISCOVERY_BOX, BESTSELLERS, EUR } from "@/data/products";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/discovery-box")({
  head: () => ({
    meta: [
      { title: "Discovery Box — 6 × 8 ML frei wählbar | LAMISENT ESSENCE" },
      {
        name: "description",
        content:
          "Discovery Box für 44,90 €: sechs 8 ML Atomiseure, frei gewählt aus zehn Signature-Düften. Inklusive 10 € Gutschein für deinen nächsten Duft.",
      },
      { property: "og:type", content: "product" },
      { property: "og:title", content: "Discovery Box — LAMISENT ESSENCE" },
      {
        property: "og:description",
        content: "Sechs Düfte, ein Ritual. 6 × 8 ML frei kombinierbar für 44,90 €.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DiscoveryBoxPage,
});

const USPS = [
  { icon: Sparkles, label: "Hochkonzentriertes Extrait de Parfum" },
  { icon: Clock, label: "Bis zu 12 Stunden Haltbarkeit" },
  { icon: Truck, label: "Schneller Versand 1–3 Werktage" },
  { icon: PackageCheck, label: "Gratis Versand ab 49,90 € (DE)" },
];

function DiscoveryBoxPage() {
  const add = useCart((s) => s.add);
  const slots = DISCOVERY_BOX.slots;
  const [picks, setPicks] = useState<(string | null)[]>(Array.from({ length: slots }, () => null));
  const [activeSlot, setActiveSlot] = useState<number | null>(null);
  const [qty, setQty] = useState(1);

  const filled = picks.filter(Boolean).length;
  const complete = filled === slots;

  const mixBestseller = () => {
    setPicks(BESTSELLERS.slice(0, slots));
    setActiveSlot(null);
  };

  const choose = (slug: string) => {
    if (activeSlot === null) return;
    setPicks((prev) => {
      const next = [...prev];
      next[activeSlot] = slug;
      return next;
    });
    setActiveSlot(null);
  };

  const clearSlot = (i: number) =>
    setPicks((prev) => {
      const next = [...prev];
      next[i] = null;
      return next;
    });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <SiteHeader />

      <section className="pt-[150px]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-2">
            {/* Visual */}
            <div>
              <div className="overflow-hidden rounded-sm border border-border bg-charcoal/40 p-8">
                <img
                  src={boxDiscovery.url}
                  alt="LAMISENT ESSENCE Discovery Box mit sechs 8 ML Atomiseuren"
                  className="mx-auto h-auto w-full max-w-md object-contain"
                />
              </div>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {USPS.map((u) => (
                  <li key={u.label} className="flex items-center gap-3 text-sm text-ivory-muted">
                    <u.icon className="h-4 w-4 shrink-0 text-gold" />
                    {u.label}
                  </li>
                ))}
              </ul>
            </div>

            {/* Configurator */}
            <div>
              <p className="text-[11px] uppercase tracking-luxury text-gold">Discovery Set</p>
              <h1 className="mt-3 font-display text-4xl uppercase text-ivory md:text-5xl">
                {DISCOVERY_BOX.name}
              </h1>
              <p className="mt-3 text-sm text-ivory-muted">
                6 × 8 ML — frei gewählt aus unseren zehn Signaturen.
              </p>

              <div className="mt-6 flex items-baseline gap-3">
                <p className="font-display text-3xl text-ivory">{EUR(DISCOVERY_BOX.price)}</p>
                <p className="text-xs text-ivory-muted">/ 6 × 8 ML · inkl. MwSt</p>
              </div>

              <p className="mt-6 border-l-2 border-gold bg-charcoal/40 px-4 py-3 text-[12px] leading-relaxed text-ivory-muted">
                <span className="text-gold">Inklusive 10 € Gutschein:</span> {DISCOVERY_BOX.voucher}
              </p>

              {/* Options */}
              <p className="mt-10 text-[11px] uppercase tracking-luxury text-gold">Wähle deine Option</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  onClick={mixBestseller}
                  className="border border-gold px-6 py-3 text-[11px] uppercase tracking-luxury text-gold transition-colors hover:bg-gold hover:text-ink"
                >
                  Mix Bestseller
                </button>
                <button
                  onClick={() => {
                    setPicks(Array.from({ length: slots }, () => null));
                    setActiveSlot(0);
                  }}
                  className="border border-border px-6 py-3 text-[11px] uppercase tracking-luxury text-ivory transition-colors hover:border-gold hover:text-gold"
                >
                  Eigene Box zusammenstellen
                </button>
              </div>

              {/* Slots */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {picks.map((pick, i) => {
                  const product = PRODUCTS.find((p) => p.slug === pick);
                  return (
                    <div
                      key={i}
                      className={`flex items-center gap-3 border border-dashed p-3 ${
                        activeSlot === i ? "border-gold bg-gold/5" : "border-border"
                      }`}
                    >
                      {product ? (
                        <img src={product.image} alt="" className="h-14 w-10 shrink-0 object-contain" />
                      ) : (
                        <span className="flex h-14 w-10 shrink-0 items-center justify-center border border-border text-ivory-muted">
                          ?
                        </span>
                      )}
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] uppercase tracking-luxury text-ivory-muted">
                          Duft {i + 1} ({DISCOVERY_BOX.ml} ML)
                        </p>
                        {product ? (
                          <>
                            <p className="truncate font-display text-sm uppercase text-ivory">{product.name}</p>
                            <p className="truncate text-[10px] text-ivory-muted">{product.inspired}</p>
                          </>
                        ) : (
                          <button
                            onClick={() => setActiveSlot(i)}
                            className="mt-1 inline-flex items-center gap-1 text-[11px] uppercase tracking-luxury text-gold hover:text-gold-soft"
                          >
                            Wählen <ArrowRight className="h-3 w-3" />
                          </button>
                        )}
                      </div>
                      {product ? (
                        <button
                          onClick={() => clearSlot(i)}
                          aria-label={`Duft ${i + 1} entfernen`}
                          className="shrink-0 text-ivory-muted transition-colors hover:text-gold"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      ) : (
                        <Check className="h-4 w-4 shrink-0 opacity-0" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Picker */}
              {activeSlot !== null && (
                <div className="mt-8 border border-gold/40 bg-charcoal/40 p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] uppercase tracking-luxury text-gold">
                      Duft {activeSlot + 1} auswählen
                    </p>
                    <button
                      onClick={() => setActiveSlot(null)}
                      aria-label="Auswahl schließen"
                      className="text-ivory-muted transition-colors hover:text-gold"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-4 grid max-h-[420px] gap-2 overflow-y-auto sm:grid-cols-2">
                    {PRODUCTS.map((p) => (
                      <button
                        key={p.slug}
                        onClick={() => choose(p.slug)}
                        className="flex items-center gap-3 border border-border p-3 text-left transition-colors hover:border-gold"
                      >
                        <img src={p.image} alt="" className="h-12 w-9 shrink-0 object-contain" />
                        <span className="min-w-0">
                          <span className="block truncate font-display text-sm uppercase text-ivory">
                            {p.no} · {p.name}
                          </span>
                          <span className="block truncate text-[10px] text-ivory-muted">{p.inspired}</span>
                          <span className="block truncate text-[10px] text-ivory-muted">{p.direction}</span>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Add to cart */}
              <div className="mt-8 flex items-stretch gap-3">
                <div className="inline-flex items-center border border-border">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="px-4 py-3 text-ivory-muted hover:text-gold"
                    aria-label="Menge reduzieren"
                  >
                    −
                  </button>
                  <span className="min-w-10 px-2 text-center text-sm text-ivory">{qty}</span>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    className="px-4 py-3 text-ivory-muted hover:text-gold"
                    aria-label="Menge erhöhen"
                  >
                    +
                  </button>
                </div>
                <button
                  disabled={!complete}
                  onClick={() =>
                    add({
                      kind: "box",
                      slug: DISCOVERY_BOX.slug,
                      ml: DISCOVERY_BOX.ml,
                      qty,
                      picks: picks.filter((p): p is string => p !== null),
                    })
                  }
                  className="flex-1 bg-gold px-7 py-3.5 text-[11px] uppercase tracking-luxury text-ink transition-colors hover:bg-gold-soft disabled:cursor-not-allowed disabled:opacity-40"
                  style={{ boxShadow: "var(--shadow-gold)" }}
                >
                  In den Warenkorb · {EUR(DISCOVERY_BOX.price * qty)}
                </button>
              </div>
              <p className="mt-3 text-[11px] uppercase tracking-luxury text-ivory-muted">
                {filled}/{slots} gewählt
              </p>

              <p className="mt-6 text-[11px] text-ivory-muted">
                Alle zehn Signature-Düfte auch einzeln erhältlich —{" "}
                <Link to="/produkte" className="text-gold hover:underline">
                  zur Kollektion
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
