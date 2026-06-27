import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Clock, Leaf, Truck, Quote } from "lucide-react";

import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

import bottle50 from "@/assets/lam/bottle-50ml-transparent.png.asset.json";
import bottle50flat from "@/assets/lam/bottle-50ml.png.asset.json";
import bottle8 from "@/assets/lam/bottle-8ml-transparent.png.asset.json";
import boxSingle from "@/assets/lam/box-single.png.asset.json";
import boxDiscovery from "@/assets/lam/box-discovery-set.png.asset.json";
import deckColour from "@/assets/lam/deck-colour.png.asset.json";
import deckCover from "@/assets/lam/deck-cover.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LAMISENT ESSENCE — Extrait de Parfum, inspiriert von Luxus" },
      {
        name: "description",
        content:
          "Herrenparfum als Extrait de Parfum, inspiriert von luxuriösen Vorbildern. Lang anhaltend, in kleinen Chargen gefertigt. Versand 1–3 Werktage, kostenlos ab 49,99 €.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "LAMISENT ESSENCE — Duft, der deine Geschichte erzählt" },
      {
        property: "og:description",
        content:
          "Extrait de Parfum, inspiriert von Luxus. Premium-Qualität, fairer Preis. Impress. Inspire. Remain.",
      },
      { property: "og:image", content: deckCover.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "LAMISENT ESSENCE" },
      { name: "twitter:image", content: deckCover.url },
    ],
  }),
  component: Home,
});

const EUR = (n: number) =>
  new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(n);

const BESTSELLERS = [
  {
    slug: "imagination",
    name: "Imagination",
    inspired: "Inspiriert von Louis Vuitton Imagination",
    family: "Holzig · Würzig",
    price: 29.9,
    image: bottle50.url,
  },
  {
    slug: "rouge-540",
    name: "Rouge 540",
    inspired: "Inspiriert von Baccarat Rouge 540",
    family: "Amber · Floral",
    price: 29.9,
    image: bottle50flat.url,
  },
  {
    slug: "naxos",
    name: "Naxos",
    inspired: "Inspiriert von Xerjoff Naxos",
    family: "Tabak · Honig",
    price: 29.9,
    image: bottle50.url,
  },
];

const NEW_ARRIVALS = [
  {
    slug: "althair",
    name: "Althaïr",
    inspired: "Inspiriert von Parfums de Marly Althaïr",
    family: "Vanille · Mandel",
    price: 29.9,
    image: bottle50.url,
  },
  {
    slug: "blonde-amber",
    name: "Blonde Amber",
    inspired: "Inspiriert von Clive Christian Blonde Amber",
    family: "Amber · Leder",
    price: 29.9,
    image: bottle50flat.url,
  },
  {
    slug: "kirke",
    name: "Kirke",
    inspired: "Inspiriert von Tiziana Terenzi Kirke",
    family: "Frucht · Patchouli",
    price: 29.9,
    image: bottle50.url,
  },
];

const SALE = [
  {
    slug: "angels-share",
    name: "Angels' Share",
    inspired: "Inspiriert von Kilian Angels' Share",
    family: "Cognac · Tonka",
    price: 25.42,
    compare: 29.9,
    image: bottle50.url,
  },
  {
    slug: "blue-talisman",
    name: "Blue Talisman",
    inspired: "Inspiriert von Ex Nihilo Blue Talisman",
    family: "Aquatisch · Iris",
    price: 25.42,
    compare: 29.9,
    image: bottle50flat.url,
  },
];

const USPS = [
  {
    icon: Sparkles,
    title: "Premium-Zutaten",
    desc: "Hochkonzentrierte Essenzen, bezogen aus etablierten Häusern.",
  },
  {
    icon: Clock,
    title: "Lang anhaltend",
    desc: "Extrait de Parfum mit 25–30 % Duftöl. Sillage bis zu 12 Stunden.",
  },
  {
    icon: Leaf,
    title: "Inspiriert von Luxus",
    desc: "Anlehnungen an niche und designer Originale — fair bepreist.",
  },
  {
    icon: Truck,
    title: "Schneller Versand",
    desc: "Aus Deutschland in 1–3 Werktagen, kostenlos ab 49,99 €.",
  },
];

const REVIEWS = [
  {
    quote:
      "Endlich ein Extrait, das den Vergleich mit dem Original nicht scheut. Der Sillage ist beeindruckend, der Preis ehrlich.",
    name: "Lukas M.",
    place: "München",
  },
  {
    quote:
      "Imagination begleitet mich seit Wochen. Kompliment am ersten Tag, Kompliment am zehnten. Genau das, was ich gesucht habe.",
    name: "Daniel R.",
    place: "Hamburg",
  },
  {
    quote:
      "Das Discovery Set war der perfekte Einstieg. Verpackung wertig, Düfte präzise. LAMISENT ist jetzt fester Teil meiner Routine.",
    name: "Sebastian H.",
    place: "Berlin",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <SiteHeader />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-hero pb-20 pt-44 md:pb-32 md:pt-52">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-60"
          style={{
            backgroundImage: `radial-gradient(circle at 75% 45%, color-mix(in oklab, var(--gold) 22%, transparent), transparent 55%)`,
          }}
        />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="mb-5 text-[11px] uppercase tracking-luxury text-gold">
              Extrait de Parfum · Made for Men
            </p>
            <h1 className="text-balance text-[44px] font-semibold uppercase leading-[1.05] tracking-[0.02em] text-ivory md:text-[68px]">
              Duft, der deine
              <br />
              <span className="text-gold-gradient">Geschichte</span> erzählt.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ivory-muted">
              LAMISENT ESSENCE übersetzt die Sprache großer Parfumeurshäuser in
              ein Extrait, das bleibt. Hergestellt in kleinen Chargen, mit
              kompromissloser Konzentration.
            </p>
            <p className="mt-8 font-display text-sm uppercase tracking-luxury text-gold">
              Impress. Inspire. Remain.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="/produkte"
                className="group inline-flex items-center gap-3 rounded-sm bg-gold px-7 py-3.5 text-[11px] uppercase tracking-luxury text-ink transition-all hover:bg-gold-soft"
                style={{ boxShadow: "var(--shadow-gold)" }}
              >
                Jetzt entdecken
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/sets"
                className="inline-flex items-center gap-3 border border-border px-7 py-3.5 text-[11px] uppercase tracking-luxury text-ivory transition-colors hover:border-gold hover:text-gold"
              >
                Discovery Set
              </a>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 mx-auto h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
              style={{ background: "var(--gradient-gold)" }}
            />
            <img
              src={bottle50.url}
              alt="LAMISENT ESSENCE 50 ML Flakon"
              className="mx-auto h-[520px] w-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* USP / TRUST */}
      <section className="border-y border-border bg-charcoal/60">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 md:grid-cols-4">
          {USPS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                <Icon className="h-4 w-4" />
              </span>
              <div>
                <h3 className="font-sans text-[11px] uppercase tracking-luxury text-ivory">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory-muted">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* KUNDENFAVORITEN */}
      <ProductSection
        eyebrow="Bestseller"
        title="Kundenfavoriten"
        products={BESTSELLERS}
      />

      {/* ABOUT */}
      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm border border-border bg-charcoal">
              <img
                src={deckColour.url}
                alt="LAMISENT Farbwelt"
                className="h-full w-full object-cover opacity-90"
              />
            </div>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-luxury text-gold">
              Über LAMISENT
            </p>
            <h2 className="mt-4 text-3xl uppercase text-ivory md:text-4xl">
              Eine Hommage an die <span className="text-gold-gradient">große Parfümerie</span>.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-ivory-muted">
              LAMISENT ESSENCE entsteht in kleinen Chargen aus hochkonzentrierten
              Ölen — eine sorgfältige Übersetzung legendärer Düfte in ein Extrait,
              das auf der Haut bleibt. Jedes Parfum wird einzeln komponiert, mit
              demselben Anspruch an Tiefe und Charakter.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ivory-muted">
              Wir glauben, dass exzellenter Duft kein Privileg sein sollte.
              Deshalb verzichten wir auf Werbespektakel und investieren in
              Rohstoffe, Konzentration und Verpackung.
            </p>
            <div className="mt-8 flex gap-8">
              <Stat n="25–30%" label="Duftöl-Konzentration" />
              <Stat n="≤ 12 h" label="Sillage" />
              <Stat n="10" label="Signature-Düfte" />
            </div>
            <a
              href="/ueber-uns"
              className="mt-10 inline-flex items-center gap-3 text-[11px] uppercase tracking-luxury text-gold transition-colors hover:text-gold-soft"
            >
              Unsere Geschichte
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* SALE */}
      <section className="bg-charcoal/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-luxury text-gold">
                Aktion
              </p>
              <h2 className="mt-3 text-3xl uppercase text-ivory md:text-4xl">
                15% auf ausgewählte Düfte
              </h2>
            </div>
            <a
              href="/produkte"
              className="hidden text-[11px] uppercase tracking-luxury text-ivory-muted transition-colors hover:text-gold md:inline"
            >
              Alle Angebote →
            </a>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {SALE.map((p) => (
              <article
                key={p.slug}
                className="group grid grid-cols-[200px_1fr] items-center gap-6 rounded-sm border border-border bg-background p-5 transition-colors hover:border-gold/40"
              >
                <div className="relative aspect-square overflow-hidden rounded-sm bg-charcoal">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 bg-gold px-2 py-1 text-[9px] uppercase tracking-luxury text-ink">
                    -15%
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-xl uppercase text-ivory">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-xs text-ivory-muted">{p.inspired}</p>
                  <p className="mt-3 text-[10px] uppercase tracking-luxury text-gold">
                    {p.family}
                  </p>
                  <div className="mt-5 flex items-baseline gap-3">
                    <span className="font-sans text-lg font-semibold text-ivory">
                      {EUR(p.price)}
                    </span>
                    <span className="text-sm text-ivory-muted line-through">
                      {EUR(p.compare)}
                    </span>
                  </div>
                  <p className="mt-1 text-[10px] text-ivory-muted">
                    inkl. 19% MwSt · ab 30 ML · Grundpreis {EUR((p.price / 30) * 100)} / 100 ml
                  </p>
                  <button className="mt-5 inline-flex items-center gap-2 border border-gold px-5 py-2.5 text-[10px] uppercase tracking-luxury text-gold transition-colors hover:bg-gold hover:text-ink">
                    In den Warenkorb
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NEUHEITEN */}
      <ProductSection eyebrow="Neuheiten" title="Neu in der Kollektion" products={NEW_ARRIVALS} />

      {/* DISCOVERY SET */}
      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-[11px] uppercase tracking-luxury text-gold">
              Discovery Set
            </p>
            <h2 className="mt-4 text-3xl uppercase text-ivory md:text-4xl">
              Fünf Düfte, ein Ritual.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-ivory-muted">
              Lerne die LAMISENT-Signaturen kennen — fünf 8 ML Atomiseure in
              edler Box. Der gezahlte Betrag wird beim Kauf eines vollen Flakons
              vollständig angerechnet.
            </p>
            <div className="mt-8 flex items-baseline gap-4">
              <span className="font-display text-3xl text-ivory">{EUR(39.9)}</span>
              <span className="text-sm text-ivory-muted">5 × 8 ML</span>
            </div>
            <a
              href="/sets"
              className="mt-8 inline-flex items-center gap-3 bg-gold px-7 py-3.5 text-[11px] uppercase tracking-luxury text-ink transition-all hover:bg-gold-soft"
              style={{ boxShadow: "var(--shadow-gold)" }}
            >
              Set ansehen
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="relative">
            <img
              src={boxDiscovery.url}
              alt="LAMISENT Discovery Set"
              className="mx-auto h-auto w-full max-w-lg object-contain"
            />
            <img
              src={bottle8.url}
              alt="8 ML Atomiseur"
              className="absolute -bottom-6 -right-2 h-40 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="border-y border-border bg-charcoal/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-[11px] uppercase tracking-luxury text-gold">
              Stimmen unserer Kunden
            </p>
            <h2 className="mt-3 text-3xl uppercase text-ivory md:text-4xl">
              Reflektionen
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {REVIEWS.map((r) => (
              <figure
                key={r.name}
                className="rounded-sm border border-border bg-background p-7"
              >
                <Quote className="h-5 w-5 text-gold" />
                <blockquote className="mt-5 text-sm leading-relaxed text-ivory">
                  „{r.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="font-sans text-[11px] uppercase tracking-luxury text-ivory">
                    {r.name}
                  </p>
                  <p className="mt-1 text-xs text-ivory-muted">{r.place}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="relative isolate overflow-hidden py-24">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, color-mix(in oklab, var(--gold) 30%, transparent), transparent 60%), linear-gradient(180deg, var(--charcoal), var(--matte-black))",
          }}
        />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[1fr_1.1fr]">
          <div className="relative">
            <img
              src={boxSingle.url}
              alt="LAMISENT Verpackung"
              className="mx-auto h-auto w-full max-w-md object-contain"
            />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-luxury text-gold">
              Newsletter
            </p>
            <h2 className="mt-4 text-3xl uppercase leading-tight text-ivory md:text-4xl">
              Erhalte <span className="text-gold-gradient">15% Rabatt</span>
              <br /> auf deine erste Bestellung.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ivory-muted">
              Neue Düfte, limitierte Editionen, exklusive Vorteile. Abmeldung
              jederzeit über einen Klick im Newsletter.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 flex w-full max-w-md overflow-hidden rounded-sm border border-border bg-background/60 backdrop-blur"
            >
              <input
                type="email"
                required
                placeholder="deine@email.de"
                className="flex-1 bg-transparent px-5 py-3.5 text-sm text-ivory placeholder:text-ivory-muted focus:outline-none"
              />
              <button
                type="submit"
                className="bg-gold px-6 text-[11px] uppercase tracking-luxury text-ink transition-colors hover:bg-gold-soft"
              >
                Abonnieren
              </button>
            </form>
            <p className="mt-4 text-[11px] text-ivory-muted">
              Double-Opt-In. Mit Absenden stimmst du der{" "}
              <a href="/datenschutz" className="underline hover:text-gold">
                Datenschutzerklärung
              </a>{" "}
              zu.
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
      <p className="mt-1 text-[10px] uppercase tracking-luxury text-ivory-muted">
        {label}
      </p>
    </div>
  );
}

type Product = {
  slug: string;
  name: string;
  inspired: string;
  family: string;
  price: number;
  image: string;
};

function ProductSection({
  eyebrow,
  title,
  products,
}: {
  eyebrow: string;
  title: string;
  products: Product[];
}) {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-luxury text-gold">{eyebrow}</p>
          <h2 className="mt-3 text-3xl uppercase text-ivory md:text-4xl">{title}</h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product: p }: { product: Product }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-sm border border-border bg-charcoal/40 transition-all hover:border-gold/40">
      <a href={`/produkte/${p.slug}`} className="relative block aspect-[4/5] overflow-hidden bg-charcoal">
        <img
          src={p.image}
          alt={p.name}
          className="h-full w-full object-contain p-10 transition-transform duration-700 group-hover:scale-105"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-0 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse at center, color-mix(in oklab, var(--gold) 18%, transparent), transparent 70%)",
          }}
        />
      </a>
      <div className="flex flex-col gap-2 p-6">
        <p className="text-[10px] uppercase tracking-luxury text-gold">{p.family}</p>
        <h3 className="font-display text-xl uppercase text-ivory">{p.name}</h3>
        <p className="text-xs text-ivory-muted">{p.inspired}</p>
        <div className="mt-3 flex items-baseline justify-between">
          <div>
            <p className="font-sans text-base font-semibold text-ivory">
              ab {EUR(p.price)}
            </p>
            <p className="text-[10px] text-ivory-muted">
              inkl. MwSt · Grundpreis {EUR((p.price / 30) * 100)} / 100 ml
            </p>
          </div>
          <button
            aria-label={`${p.name} in den Warenkorb`}
            className="inline-flex items-center gap-2 border border-border px-3 py-2 text-[10px] uppercase tracking-luxury text-ivory transition-colors hover:border-gold hover:text-gold"
          >
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </div>
    </article>
  );
}
