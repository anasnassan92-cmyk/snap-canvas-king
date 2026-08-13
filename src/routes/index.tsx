import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ArrowRight, Instagram, Music2, Plus, Minus } from "lucide-react";

import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

import boxDiscovery from "@/assets/lam/box-discovery-set.png.asset.json";
import bottle8 from "@/assets/lam/bottle-8ml-transparent.png.asset.json";
import deckCover from "@/assets/lam/deck-cover.png.asset.json";
import bannerLight from "@/assets/lam/banner-light.png.asset.json";
import bannerDark from "@/assets/lam/banner-dark.png.asset.json";
import bannerModel from "@/assets/lam/banner-model.png.asset.json";

import { PRODUCTS, DISCOVERY_BOX, SOCIALS, EUR, type Product } from "@/data/products";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LAMISENT ESSENCE — Extrait de Parfum, inspiriert von Luxus" },
      {
        name: "description",
        content:
          "10 Signature-Düfte als Extrait de Parfum in 30, 50 und 100 ML. Discovery Box mit 6 × 8 ML frei kombinierbar. Versand 1–3 Werktage, kostenlos ab 49,90 €.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "LAMISENT ESSENCE — Duft, der deine Geschichte erzählt" },
      {
        property: "og:description",
        content: "Extrait de Parfum, inspiriert von Luxus. 10 Signature-Düfte in 30, 50 und 100 ML.",
      },
      { property: "og:image", content: deckCover.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "LAMISENT ESSENCE" },
      { name: "twitter:image", content: deckCover.url },
    ],
  }),
  component: Home,
});

const HERO_SLIDES = [
  { src: bannerModel.url, alt: "LAMISENT ESSENCE — A Scent of Confidence" },
  { src: bannerLight.url, alt: "LAMISENT ESSENCE — Extrait de Parfum" },
  { src: bannerDark.url, alt: "LAMISENT ESSENCE — Extrait de Parfum" },
];

function HeroSlider() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % HERO_SLIDES.length), 4000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="relative w-full overflow-hidden bg-charcoal" style={{ aspectRatio: "1920 / 820" }}>
      {HERO_SLIDES.map((s, i) => (
        <div
          key={s.src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === idx ? 1 : 0 }}
          aria-hidden={i !== idx}
        >
          <img src={s.src} alt={s.alt} className="h-full w-full object-cover" fetchPriority={i === 0 ? "high" : "low"} />
        </div>
      ))}
      <div className="absolute inset-x-0 bottom-4 z-10 flex justify-center gap-2">
        {HERO_SLIDES.map((s, i) => (
          <button
            key={s.src}
            onClick={() => setIdx(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-gold" : "w-1.5 bg-white/50 hover:bg-white/80"}`}
          />
        ))}
      </div>
    </div>
  );
}

function Home() {
  const [showAll, setShowAll] = useState(false);


  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <SiteHeader />

      {/* 1 — HERO BANNER */}
      <section className="relative isolate overflow-hidden bg-background pt-[92px]">
        <HeroSlider />
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-14 text-center">
          <p className="text-[11px] uppercase tracking-luxury text-gold">Extrait de Parfum</p>
          <h1 className="text-balance text-[34px] font-semibold uppercase leading-[1.05] tracking-[0.02em] text-ivory md:text-[56px]">
            Duft, der deine <span className="text-gold-gradient">Geschichte</span> erzählt.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-ivory-muted">
            10 Signature-Düfte in 30, 50 und 100 ML. Hergestellt in kleinen Chargen, mit kompromissloser Konzentration.
          </p>
          <p className="font-display text-sm uppercase tracking-luxury text-gold">Impress. Inspire. Remain.</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/produkte"
              className="group inline-flex items-center gap-3 rounded-sm bg-gold px-7 py-3.5 text-[11px] uppercase tracking-luxury text-ink transition-all hover:bg-gold-soft"
              style={{ boxShadow: "var(--shadow-gold)" }}
            >
              Jetzt entdecken
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/discovery-box"
              className="inline-flex items-center gap-3 border border-border px-7 py-3.5 text-[11px] uppercase tracking-luxury text-ivory transition-colors hover:border-gold hover:text-gold"
            >
              Discovery Box
            </Link>
          </div>
        </div>
      </section>

      {/* 2 — KOLLEKTION: 5 in einer Reihe, „Mehr anzeigen" enthüllt die restlichen 5 */}
      <section className="bg-background pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-[11px] uppercase tracking-luxury text-gold">Kollektion</p>
            <h2 className="mt-3 text-3xl uppercase text-ivory md:text-4xl">Unsere Düfte</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {PRODUCTS.slice(0, 5).map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
          {showAll && (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {PRODUCTS.slice(5).map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          )}
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="inline-flex items-center gap-3 border border-gold px-8 py-3.5 text-[11px] uppercase tracking-luxury text-gold transition-colors hover:bg-gold hover:text-ink"
            >
              {showAll ? "Weniger anzeigen" : "Mehr anzeigen"}
              {showAll ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
            </button>
          </div>
        </div>
      </section>

      {/* 3 — ÜBER LAMISENT ESSENCE */}
      <section className="border-y border-border bg-charcoal/40 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 aspect-[16/10] overflow-hidden rounded-sm border border-border bg-charcoal">
              <img
                src={PRODUCTS[0].coverImage ?? PRODUCTS[0].image}
                alt={PRODUCTS[0].name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            {[PRODUCTS[1], PRODUCTS[4]].map((p) => (
              <div key={p.slug} className="aspect-square overflow-hidden rounded-sm border border-border bg-charcoal">
                <img src={p.coverImage ?? p.image} alt={p.name} className="h-full w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-luxury text-gold">Über LAMISENT ESSENCE</p>
            <h2 className="mt-4 text-3xl uppercase leading-tight text-ivory md:text-4xl">
              Eine Hommage an die große <span className="text-gold-gradient">Parfümerie</span>.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-ivory-muted">
              LAMISENT ESSENCE entsteht aus dem Anspruch, große Parfümerie zugänglich zu machen. Wir arbeiten mit
              hochkonzentrierten Essenzen, füllen in kleinen Chargen ab und verzichten auf alles, was einen Duft
              teurer macht, ohne ihn besser zu machen.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ivory-muted">
              Jede Komposition ist von einem Original inspiriert und trägt trotzdem eine eigene Signatur: 25–30 %
              Duftöl, langer Nachhall, Abfüllung in Deutschland.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              <Stat n="25–30 %" label="Duftölanteil" />
              <Stat n="1–3 Tage" label="Versand" />
              <Stat n="10" label="Signature-Düfte" />
            </div>
          </div>
        </div>
      </section>

      {/* 4 — DISCOVERY SET */}
      <section className="bg-charcoal/40 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-[11px] uppercase tracking-luxury text-gold">Discovery Set</p>
            <h2 className="mt-4 text-3xl uppercase text-ivory md:text-4xl">Sechs Düfte, ein Ritual.</h2>
            <p className="mt-5 text-sm leading-relaxed text-ivory-muted">
              Stelle deine persönliche Box zusammen – sechs 8 ML Atomiseure, frei gewählt aus unseren zehn
              Signaturen.
            </p>
            <div className="mt-8 flex items-baseline gap-4">
              <span className="font-display text-3xl text-ivory">{EUR(DISCOVERY_BOX.price)}</span>
              <span className="text-sm text-ivory-muted">6 × 8 ML</span>
            </div>
            <p className="mt-6 border-l-2 border-gold bg-background/60 px-4 py-3 text-[12px] leading-relaxed text-ivory-muted">
              {DISCOVERY_BOX.voucher}
            </p>
            <Link
              to="/discovery-box"
              className="mt-8 inline-flex items-center gap-3 bg-gold px-7 py-3.5 text-[11px] uppercase tracking-luxury text-ink transition-all hover:bg-gold-soft"
              style={{ boxShadow: "var(--shadow-gold)" }}
            >
              Box zusammenstellen <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="relative">
            <img
              src={boxDiscovery.url}
              alt="LAMISENT Discovery Box"
              className="mx-auto h-auto w-full max-w-lg object-contain"
              loading="lazy"
            />
            <img
              src={bottle8.url}
              alt="8 ML Atomiseur"
              className="absolute -bottom-6 -right-2 h-40 w-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* 5 — INSTAGRAM */}
      <section className="border-t border-border bg-charcoal/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center text-center">
            <Instagram className="h-6 w-6 text-gold" />
            <a
              href={SOCIALS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 font-display text-2xl uppercase text-ivory hover:text-gold md:text-3xl"
            >
              @LAMISENT
            </a>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ivory-muted">
              Folge uns für neue Düfte, Behind-the-Scenes und limitierte Aktionen.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {PRODUCTS.slice(0, 6).map((p) => (
              <a
                key={p.slug}
                href={SOCIALS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-sm border border-border bg-charcoal"
              >
                <img
                  src={p.coverImage ?? p.image}
                  alt={`LAMISENT ESSENCE ${p.name} auf Instagram`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <Instagram className="h-5 w-5 text-white" />
                </span>
              </a>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={SOCIALS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-border px-7 py-3.5 text-[11px] uppercase tracking-luxury text-ivory transition-colors hover:border-gold hover:text-gold"
            >
              <Instagram className="h-3.5 w-3.5" /> Auf Instagram ansehen
            </a>
            <a
              href={SOCIALS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-border px-7 py-3.5 text-[11px] uppercase tracking-luxury text-ivory transition-colors hover:border-gold hover:text-gold"
            >
              <Music2 className="h-3.5 w-3.5" /> Auf TikTok folgen
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <p className="font-display text-2xl text-gold">{n}</p>
      <p className="mt-1 text-[10px] uppercase tracking-luxury text-ivory-muted">{label}</p>
    </div>
  );
}

function ProductCard({ product: p }: { product: Product }) {
  const [sizeIdx, setSizeIdx] = useState(0);
  const size = p.sizes[sizeIdx];
  const add = useCart((s) => s.add);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-sm border border-border bg-charcoal/40 transition-all hover:border-gold/40">
      <Link
        to="/produkte/$slug"
        params={{ slug: p.slug }}
        className="relative block aspect-[4/5] overflow-hidden bg-charcoal"
      >
        <img
          src={p.coverImage ?? p.image}
          alt={`${p.name} — ${p.inspired}`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-[10px] uppercase tracking-luxury text-gold">
          {p.no} · {p.family}
        </p>
        <Link
          to="/produkte/$slug"
          params={{ slug: p.slug }}
          className="font-display text-lg uppercase text-ivory hover:text-gold"
        >
          {p.name}
        </Link>
        <p className="text-xs text-ivory-muted">{p.inspired}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {p.sizes.map((s, i) => (
            <button
              key={s.ml}
              onClick={() => setSizeIdx(i)}
              className={`border px-2.5 py-1 text-[10px] uppercase tracking-luxury transition-colors ${
                i === sizeIdx
                  ? "border-gold bg-gold text-ink"
                  : "border-border text-ivory-muted hover:border-gold hover:text-gold"
              }`}
              aria-label={`${s.ml} ML wählen`}
            >
              {s.ml} ML
            </button>
          ))}
        </div>

        <div className="mt-auto flex items-end justify-between pt-4">
          <div>
            <p className="font-sans text-base font-semibold text-ivory">{EUR(size.price)}</p>
            <p className="text-[10px] text-ivory-muted">inkl. MwSt</p>
          </div>
          <button
            onClick={() => add({ slug: p.slug, ml: size.ml, qty: 1 })}
            aria-label={`${p.name} ${size.ml} ML in den Warenkorb`}
            className="inline-flex items-center gap-2 bg-gold px-3 py-2 text-[10px] uppercase tracking-luxury text-ink transition-colors hover:bg-gold-soft"
          >
            In den Warenkorb <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </div>
    </article>
  );
}
