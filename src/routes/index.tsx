import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Sparkles, Clock, Leaf, Truck, Quote } from "lucide-react";

import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

import boxSingle from "@/assets/lam/box-single.png.asset.json";
import boxDiscovery from "@/assets/lam/box-discovery-set.png.asset.json";
import bottle8 from "@/assets/lam/bottle-8ml-transparent.png.asset.json";
import deckColour from "@/assets/lam/deck-colour.png.asset.json";
import deckCover from "@/assets/lam/deck-cover.png.asset.json";
import bannerLight from "@/assets/lam/banner-light.png.asset.json";
import bannerDark from "@/assets/lam/banner-dark.png.asset.json";
import heroVideo from "@/assets/lam/hero-video.mp4.asset.json";

import { PRODUCTS, EUR, type Product } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LAMISENT ESSENCE — Extrait de Parfum, inspiriert von Luxus" },
      {
        name: "description",
        content:
          "10 Signature-Düfte als Extrait de Parfum in 4 Größen — 8, 30, 50 und 100 ML. Inspiriert von luxuriösen Vorbildern. Versand 1–3 Werktage, kostenlos ab 49,99 €.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "LAMISENT ESSENCE — Duft, der deine Geschichte erzählt" },
      {
        property: "og:description",
        content:
          "Extrait de Parfum, inspiriert von Luxus. 10 Signature-Düfte, jeweils in 4 Größen. Impress. Inspire. Remain.",
      },
      { property: "og:image", content: deckCover.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "LAMISENT ESSENCE" },
      { name: "twitter:image", content: deckCover.url },
    ],
  }),
  component: Home,
});

const BESTSELLERS = PRODUCTS.slice(0, 3);
const NEW_ARRIVALS = PRODUCTS.slice(3, 6);
const SALE_SLUGS = ["angels-share", "blue-talisman"];

const USPS = [
  { icon: Sparkles, title: "Premium-Zutaten", desc: "Hochkonzentrierte Essenzen, bezogen aus etablierten Häusern." },
  { icon: Clock, title: "Lang anhaltend", desc: "Extrait de Parfum mit 25–30 % Duftöl. Sillage bis zu 12 Stunden." },
  { icon: Leaf, title: "Inspiriert von Luxus", desc: "Anlehnungen an niche und designer Originale — fair bepreist." },
  { icon: Truck, title: "Schneller Versand", desc: "Aus Deutschland in 1–3 Werktagen, kostenlos ab 49,99 €." },
];

const REVIEWS = [
  { quote: "Endlich ein Extrait, das den Vergleich mit dem Original nicht scheut. Der Sillage ist beeindruckend, der Preis ehrlich.", name: "Lukas M.", place: "München" },
  { quote: "Imagination begleitet mich seit Wochen. Kompliment am ersten Tag, Kompliment am zehnten. Genau das, was ich gesucht habe.", name: "Daniel R.", place: "Hamburg" },
  { quote: "Das Discovery Set war der perfekte Einstieg. Verpackung wertig, Düfte präzise. LAMISENT ist jetzt fester Teil meiner Routine.", name: "Sebastian H.", place: "Berlin" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <SiteHeader />

      {/* HERO — landscape banner */}
      <section className="relative isolate overflow-hidden bg-background pt-[92px]">
        <div className="relative">
          <img src={bannerLight.url} alt="LAMISENT ESSENCE — Extrait de Parfum" className="block h-auto w-full object-cover" fetchPriority="high" />
        </div>
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-14 text-center">
          <p className="text-[11px] uppercase tracking-luxury text-gold">Extrait de Parfum · Made for Men</p>
          <h1 className="text-balance text-[34px] font-semibold uppercase leading-[1.05] tracking-[0.02em] text-ivory md:text-[56px]">
            Duft, der deine <span className="text-gold-gradient">Geschichte</span> erzählt.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-ivory-muted">
            10 Signature-Düfte, jeweils erhältlich in 4 Größen — 8, 30, 50 und 100 ML. Hergestellt in kleinen Chargen, mit kompromissloser Konzentration.
          </p>
          <p className="font-display text-sm uppercase tracking-luxury text-gold">Impress. Inspire. Remain.</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <a href="/produkte" className="group inline-flex items-center gap-3 rounded-sm bg-gold px-7 py-3.5 text-[11px] uppercase tracking-luxury text-ink transition-all hover:bg-gold-soft" style={{ boxShadow: "var(--shadow-gold)" }}>
              Jetzt entdecken
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/sets" className="inline-flex items-center gap-3 border border-border px-7 py-3.5 text-[11px] uppercase tracking-luxury text-ivory transition-colors hover:border-gold hover:text-gold">
              Discovery Set
            </a>
          </div>
        </div>
      </section>

      {/* CINEMATIC VIDEO */}
      <section className="relative isolate overflow-hidden bg-charcoal">
        <div className="relative mx-auto max-w-[1600px]">
          <video src={heroVideo.url} autoPlay muted loop playsInline poster={bannerDark.url} className="block h-auto w-full object-cover" />
          <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 60%, color-mix(in oklab, var(--ink) 35%, transparent) 100%)" }} />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 px-6 pb-8 text-center md:pb-14">
            <p className="font-display text-2xl uppercase tracking-luxury text-white md:text-4xl">A Scent of Confidence.</p>
            <p className="mt-2 text-[11px] uppercase tracking-luxury text-white/80">A Signature of You.</p>
          </div>
        </div>
      </section>

      {/* USP */}
      <section className="border-y border-border bg-charcoal/60">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 md:grid-cols-4">
          {USPS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                <Icon className="h-4 w-4" />
              </span>
              <div>
                <h3 className="font-sans text-[11px] uppercase tracking-luxury text-ivory">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory-muted">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ProductSection eyebrow="Bestseller" title="Kundenfavoriten" products={BESTSELLERS} />

      {/* ABOUT */}
      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2">
          <div className="aspect-[4/5] overflow-hidden rounded-sm border border-border bg-charcoal">
            <img src={deckColour.url} alt="LAMISENT Farbwelt" className="h-full w-full object-cover opacity-90" />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-luxury text-gold">Über LAMISENT</p>
            <h2 className="mt-4 text-3xl uppercase text-ivory md:text-4xl">
              Eine Hommage an die <span className="text-gold-gradient">große Parfümerie</span>.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-ivory-muted">
              LAMISENT ESSENCE entsteht in kleinen Chargen aus hochkonzentrierten Ölen — eine sorgfältige Übersetzung legendärer Düfte in ein Extrait, das auf der Haut bleibt.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ivory-muted">
              Wir glauben, dass exzellenter Duft kein Privileg sein sollte. Deshalb verzichten wir auf Werbespektakel und investieren in Rohstoffe, Konzentration und Verpackung.
            </p>
            <div className="mt-8 flex gap-8">
              <Stat n="25–30%" label="Duftöl-Konzentration" />
              <Stat n="≤ 12 h" label="Sillage" />
              <Stat n="10" label="Signature-Düfte" />
            </div>
            <a href="/ueber-uns" className="mt-10 inline-flex items-center gap-3 text-[11px] uppercase tracking-luxury text-gold transition-colors hover:text-gold-soft">
              Unsere Geschichte <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* SALE */}
      <section className="bg-charcoal/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-luxury text-gold">Aktion</p>
              <h2 className="mt-3 text-3xl uppercase text-ivory md:text-4xl">15% auf ausgewählte Düfte</h2>
            </div>
            <a href="/produkte" className="hidden text-[11px] uppercase tracking-luxury text-ivory-muted transition-colors hover:text-gold md:inline">
              Alle Angebote →
            </a>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {PRODUCTS.filter((p) => SALE_SLUGS.includes(p.slug)).map((p) => (
              <ProductCard key={p.slug} product={p} discount={0.15} />
            ))}
          </div>
        </div>
      </section>

      <ProductSection eyebrow="Neuheiten" title="Neu in der Kollektion" products={NEW_ARRIVALS} />

      {/* ALL 10 */}
      <ProductSection eyebrow="Kollektion" title="Alle 10 Signature-Düfte" products={PRODUCTS} />

      {/* DISCOVERY SET */}
      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-[11px] uppercase tracking-luxury text-gold">Discovery Set</p>
            <h2 className="mt-4 text-3xl uppercase text-ivory md:text-4xl">Fünf Düfte, ein Ritual.</h2>
            <p className="mt-5 text-sm leading-relaxed text-ivory-muted">
              Lerne die LAMISENT-Signaturen kennen — fünf 8 ML Atomiseure in edler Box. Der gezahlte Betrag wird beim Kauf eines vollen Flakons vollständig angerechnet.
            </p>
            <div className="mt-8 flex items-baseline gap-4">
              <span className="font-display text-3xl text-ivory">{EUR(39.9)}</span>
              <span className="text-sm text-ivory-muted">5 × 8 ML</span>
            </div>
            <a href="/sets" className="mt-8 inline-flex items-center gap-3 bg-gold px-7 py-3.5 text-[11px] uppercase tracking-luxury text-ink transition-all hover:bg-gold-soft" style={{ boxShadow: "var(--shadow-gold)" }}>
              Set ansehen <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="relative">
            <img src={boxDiscovery.url} alt="LAMISENT Discovery Set" className="mx-auto h-auto w-full max-w-lg object-contain" />
            <img src={bottle8.url} alt="8 ML Atomiseur" className="absolute -bottom-6 -right-2 h-40 w-auto object-contain" />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="border-y border-border bg-charcoal/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-[11px] uppercase tracking-luxury text-gold">Stimmen unserer Kunden</p>
            <h2 className="mt-3 text-3xl uppercase text-ivory md:text-4xl">Reflektionen</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {REVIEWS.map((r) => (
              <figure key={r.name} className="rounded-sm border border-border bg-background p-7">
                <Quote className="h-5 w-5 text-gold" />
                <blockquote className="mt-5 text-sm leading-relaxed text-ivory">„{r.quote}"</blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="font-sans text-[11px] uppercase tracking-luxury text-ivory">{r.name}</p>
                  <p className="mt-1 text-xs text-ivory-muted">{r.place}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="relative isolate overflow-hidden py-24">
        <div aria-hidden className="absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse at 30% 50%, color-mix(in oklab, var(--gold) 30%, transparent), transparent 60%), linear-gradient(180deg, var(--charcoal), var(--matte-black))" }} />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[1fr_1.1fr]">
          <div>
            <img src={boxSingle.url} alt="LAMISENT Verpackung" className="mx-auto h-auto w-full max-w-md object-contain" />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-luxury text-gold">Newsletter</p>
            <h2 className="mt-4 text-3xl uppercase leading-tight text-ivory md:text-4xl">
              Erhalte <span className="text-gold-gradient">15% Rabatt</span><br /> auf deine erste Bestellung.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ivory-muted">
              Neue Düfte, limitierte Editionen, exklusive Vorteile. Abmeldung jederzeit über einen Klick im Newsletter.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex w-full max-w-md overflow-hidden rounded-sm border border-border bg-background/60 backdrop-blur">
              <input type="email" required placeholder="deine@email.de" className="flex-1 bg-transparent px-5 py-3.5 text-sm text-ivory placeholder:text-ivory-muted focus:outline-none" />
              <button type="submit" className="bg-gold px-6 text-[11px] uppercase tracking-luxury text-ink transition-colors hover:bg-gold-soft">Abonnieren</button>
            </form>
            <p className="mt-4 text-[11px] text-ivory-muted">
              Double-Opt-In. Mit Absenden stimmst du der <a href="/datenschutz" className="underline hover:text-gold">Datenschutzerklärung</a> zu.
            </p>
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

function ProductSection({ eyebrow, title, products }: { eyebrow: string; title: string; products: Product[] }) {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-luxury text-gold">{eyebrow}</p>
          <h2 className="mt-3 text-3xl uppercase text-ivory md:text-4xl">{title}</h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product: p, discount = 0 }: { product: Product; discount?: number }) {
  const [sizeIdx, setSizeIdx] = useState(1); // default 30 ML
  const size = p.sizes[sizeIdx];
  const price = +(size.price * (1 - discount)).toFixed(2);
  const compare = discount > 0 ? size.price : null;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-sm border border-border bg-charcoal/40 transition-all hover:border-gold/40">
      <a href={`/produkte/${p.slug}`} className="relative block aspect-[4/5] overflow-hidden bg-charcoal">
        <img src={p.image} alt={p.name} className="h-full w-full object-contain p-10 transition-transform duration-700 group-hover:scale-105" />
        {discount > 0 && (
          <span className="absolute left-3 top-3 bg-gold px-2 py-1 text-[9px] uppercase tracking-luxury text-ink">
            -{Math.round(discount * 100)}%
          </span>
        )}
        <div aria-hidden className="absolute inset-0 -z-0 opacity-50" style={{ background: "radial-gradient(ellipse at center, color-mix(in oklab, var(--gold) 18%, transparent), transparent 70%)" }} />
      </a>
      <div className="flex flex-col gap-2 p-6">
        <p className="text-[10px] uppercase tracking-luxury text-gold">{p.family}</p>
        <h3 className="font-display text-xl uppercase text-ivory">{p.name}</h3>
        <p className="text-xs text-ivory-muted">{p.inspired}</p>

        {/* SIZE SELECTOR */}
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

        <div className="mt-3 flex items-baseline justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <p className="font-sans text-base font-semibold text-ivory">{EUR(price)}</p>
              {compare && <span className="text-xs text-ivory-muted line-through">{EUR(compare)}</span>}
            </div>
            <p className="text-[10px] text-ivory-muted">
              inkl. MwSt · {EUR((price / size.ml) * 100)} / 100 ml
            </p>
          </div>
          <button aria-label={`${p.name} ${size.ml} ML in den Warenkorb`} className="inline-flex items-center gap-2 border border-gold px-3 py-2 text-[10px] uppercase tracking-luxury text-gold transition-colors hover:bg-gold hover:text-ink">
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </div>
    </article>
  );
}
