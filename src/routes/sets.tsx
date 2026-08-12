import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, X } from "lucide-react";

import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PRODUCTS, BUNDLES, DISCOVERY_BOX, EUR, type Bundle } from "@/data/products";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/sets")({
  head: () => ({
    meta: [
      { title: "Discovery Box & Bundles — LAMISENT ESSENCE" },
      {
        name: "description",
        content:
          "Discovery Box mit 6 × 8 ML frei kombinierbar für 44,90 € — plus Bundles mit 2 oder 3 × 50 ML. Stelle dein Set aus zehn Signature-Düften zusammen.",
      },
      { property: "og:title", content: "Discovery Box & Bundles — LAMISENT ESSENCE" },
      {
        property: "og:description",
        content: "6 × 8 ML frei kombinierbar für 44,90 €, inklusive 10 € Gutschein für deinen nächsten Duft.",
      },
    ],
  }),
  component: SetsPage,
});

function SetsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <SiteHeader />

      <section className="bg-charcoal/40 pb-12 pt-[150px]">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-[11px] uppercase tracking-luxury text-gold">Sets & Bundles</p>
          <h1 className="mt-3 font-display text-4xl uppercase text-ivory md:text-5xl">Stelle dein Set zusammen</h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ivory-muted">
            Wähle deine Düfte selbst — sechs 8 ML Atomiseure in der Discovery Box oder volle Flakons im Bundle.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SetBuilder
            title={DISCOVERY_BOX.name}
            subtitle={DISCOVERY_BOX.subtitle}
            price={DISCOVERY_BOX.price}
            slots={DISCOVERY_BOX.slots}
            ml={DISCOVERY_BOX.ml}
            slug={DISCOVERY_BOX.slug}
            kind="box"
            note={DISCOVERY_BOX.voucher}
          />
        </div>
      </section>

      <section className="border-t border-border bg-charcoal/40 py-20">
        <div className="mx-auto max-w-5xl space-y-16 px-6">
          <div className="text-center">
            <p className="text-[11px] uppercase tracking-luxury text-gold">Bundles</p>
            <h2 className="mt-3 font-display text-3xl uppercase text-ivory md:text-4xl">Volle Flakons, besserer Preis</h2>
          </div>
          {BUNDLES.map((b) => (
            <BundleBlock key={b.slug} bundle={b} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function BundleBlock({ bundle: b }: { bundle: Bundle }) {
  if (b.soldOut) {
    return (
      <div className="rounded-sm border border-border bg-background p-8 text-center opacity-70">
        <p className="font-display text-2xl uppercase text-ivory">{b.name}</p>
        <p className="mt-2 text-sm text-ivory-muted">{b.subtitle}</p>
        <p className="mt-4 font-sans text-lg font-semibold text-ivory">{EUR(b.price)}</p>
        <p className="mt-4 inline-flex items-center gap-2 border border-border px-4 py-2 text-[11px] uppercase tracking-luxury text-ivory-muted">
          <X className="h-3.5 w-3.5" /> Derzeit ausverkauft
        </p>
        <p className="mt-3 text-[11px] text-ivory-muted">Dieses Bundle ist nur zeitweise verfügbar.</p>
      </div>
    );
  }
  return (
    <SetBuilder
      title={b.name}
      subtitle={b.subtitle}
      price={b.price}
      compareAt={b.compareAt}
      slots={b.slots}
      ml={b.ml}
      slug={b.slug}
      kind="bundle"
    />
  );
}

function SetBuilder({
  title,
  subtitle,
  price,
  compareAt,
  slots,
  ml,
  slug,
  kind,
  note,
}: {
  title: string;
  subtitle: string;
  price: number;
  compareAt?: number;
  slots: number;
  ml: number;
  slug: string;
  kind: "box" | "bundle";
  note?: string;
}) {
  const add = useCart((s) => s.add);
  const [picks, setPicks] = useState<(string | null)[]>(Array.from({ length: slots }, () => null));
  const [active, setActive] = useState(0);
  const complete = picks.every((p) => p !== null);

  const choose = (productSlug: string) => {
    setPicks((prev) => {
      const next = [...prev];
      next[active] = productSlug;
      return next;
    });
    const nextEmpty = picks.findIndex((p, i) => p === null && i !== active);
    setActive(nextEmpty === -1 ? active : nextEmpty);
  };

  return (
    <div className="rounded-sm border border-border bg-background p-6 sm:p-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl uppercase text-ivory md:text-3xl">{title}</h2>
          <p className="mt-2 text-sm text-ivory-muted">{subtitle}</p>
        </div>
        <div className="text-right">
          {compareAt && <p className="text-sm text-ivory-muted line-through">{EUR(compareAt)}</p>}
          <p className="font-sans text-2xl font-semibold text-ivory">{EUR(price)}</p>
          <p className="text-[10px] text-ivory-muted">inkl. MwSt</p>
        </div>
      </div>

      {note && (
        <p className="mt-6 border-l-2 border-gold bg-charcoal/40 px-4 py-3 text-[12px] leading-relaxed text-ivory-muted">
          {note} Einlösbar ab 49,90 € Warenwert auf reguläre Einzelparfums. Nicht mit Bundles oder anderen
          Rabattaktionen kombinierbar.
        </p>
      )}

      {/* slots */}
      <p className="mt-8 text-[11px] uppercase tracking-luxury text-gold">Wähle deine Option</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {picks.map((pick, i) => {
          const product = PRODUCTS.find((p) => p.slug === pick);
          return (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex items-center gap-3 border border-dashed p-3 text-left transition-colors ${
                active === i ? "border-gold bg-gold/5" : "border-border hover:border-gold/60"
              }`}
            >
              {product ? (
                <img src={product.image} alt={product.name} className="h-14 w-10 shrink-0 object-contain" />
              ) : (
                <span className="flex h-14 w-10 shrink-0 items-center justify-center border border-border text-ivory-muted">
                  ?
                </span>
              )}
              <span className="min-w-0">
                <span className="block text-[10px] uppercase tracking-luxury text-ivory-muted">
                  Duft {i + 1} ({ml} ML)
                </span>
                <span className="block truncate font-display text-sm uppercase text-ivory">
                  {product ? product.name : "Wählen"}
                </span>
              </span>
              {product && <Check className="ml-auto h-4 w-4 shrink-0 text-gold" />}
            </button>
          );
        })}
      </div>

      {/* fragrance picker */}
      <p className="mt-8 text-[11px] uppercase tracking-luxury text-gold">
        Duft {active + 1} auswählen
      </p>
      <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((p) => (
          <button
            key={p.slug}
            onClick={() => choose(p.slug)}
            className={`flex items-center gap-3 border p-3 text-left transition-colors ${
              picks[active] === p.slug
                ? "border-gold bg-gold/5"
                : "border-border hover:border-gold/60"
            }`}
          >
            <img src={p.image} alt={p.name} className="h-12 w-9 shrink-0 object-contain" />
            <span className="min-w-0">
              <span className="block truncate font-display text-sm uppercase text-ivory">
                {p.no} · {p.name}
              </span>
              <span className="block truncate text-[11px] text-ivory-muted">{p.family}</span>
            </span>
          </button>
        ))}
      </div>

      <button
        disabled={!complete}
        onClick={() =>
          add({ kind, slug, ml, qty: 1, picks: picks.filter((p): p is string => p !== null) })
        }
        className="mt-8 inline-flex w-full items-center justify-center gap-3 bg-gold px-7 py-3.5 text-[11px] uppercase tracking-luxury text-ink transition-colors hover:bg-gold-soft disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
        style={{ boxShadow: "var(--shadow-gold)" }}
      >
        {complete ? `In den Warenkorb · ${EUR(price)}` : `Noch ${picks.filter((p) => !p).length} Duft(e) wählen`}
        <ArrowRight className="h-3.5 w-3.5" />
      </button>

      <p className="mt-4 text-[11px] text-ivory-muted">
        Alle zehn Signature-Düfte auch einzeln erhältlich —{" "}
        <Link to="/produkte" className="text-gold hover:underline">
          zur Kollektion
        </Link>
        .
      </p>
    </div>
  );
}
