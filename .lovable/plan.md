## Scope: Phase 1A — Home page only

You uploaded a multi-phase spec (Next.js + Stripe + Supabase). This project runs on **TanStack Start** (React 19 + TanStack Router), not Next.js. I'll keep every brand decision, copy, layout, and SEO requirement from your spec — only the framework primitives change (file-based routing under `src/routes/`, `<Link>` from `@tanstack/react-router`, `head()` for SEO meta instead of Next `metadata`). Stripe/Supabase/checkout come in later phases as separate plans.

This plan covers **Pass 1A** of Phase 1: global shell + Home page, matching the ESSVIA screenshot layout but rebranded LAMISENT (dark, gold, Cinzel/Montserrat). German copy throughout. No cart/DB/payments yet — placeholder product data.

## What gets built

**Brand foundation**
- Design tokens in `src/styles.css`: `matte-black #0D0D0D`, `charcoal #1C1C1E`, `gold #D4AF37`, `amber #7A4A1A`, `ivory #F5F2E9`, plus gold-on-black gradients and signature shadow.
- Cinzel (display) + Montserrat (body) loaded via `<link>` in `src/routes/__root.tsx` head, mapped to `--font-display` / `--font-sans` in `@theme`.
- Default page background switches to matte-black with ivory text.

**Assets**
- Unzip `LAMISENT_Assets_Bundle.zip`; copy `lamisent_assets/public/assets/**` into the project's `public/assets/` (logo, 50ML + 8ML transparent bottles, packaging, brand decks). The `_INTERNAL_REFERENCE_DO_NOT_PUBLISH/` folder is excluded.
- For each of the 10 fragrances (Imagination, Reflection, Naxos, Angels' Share, Blonde Amber, Blue Talisman, Side Effect, Althaïr, Rouge 540, Kirke), reuse the signature 50ML bottle silhouette tinted per scent family for now — real bottle renders come in Phase 2.

**Global shell** (used by Home and every later page)
- `src/components/site/AnnouncementBar.tsx` — sticky top bar, marquee: *"Schneller Versand 1–3 Werktage · Kostenloser Versand ab 49,99 € · Extrait de Parfum"*.
- `src/components/site/SiteHeader.tsx` — transparent-over-hero, gold wordmark left, nav (Parfums, Kollektionen, Sets, Über uns, Kontakt), search + account + cart icons right.
- `src/components/site/SiteFooter.tsx` — 4-column footer (Marke, Hilfe, Rechtliches, Newsletter), legal links (Impressum, Datenschutz, AGB, Widerruf, Versand & Zahlung), social placeholders, payment icons row.
- Layout route `src/routes/__root.tsx` updated to render announcement bar + header + `<Outlet />` + footer.

**Home page** (`src/routes/index.tsx`) — sections in order, matching the ESSVIA reference composition but on LAMISENT brand:

1. **Hero** — full-bleed dark cinematic; left: Cinzel headline *"DUFT, DER DEINE GESCHICHTE ERZÄHLT"* + tagline *"Impress. Inspire. Remain."* + CTA *"Jetzt entdecken"*; right: 50ML bottle on stone/mist; gold accent glow. Video-ready slot (poster image now, MP4 wired later).
2. **Trust / USP row** — 4 icons: Premium-Zutaten · Langanhaltend (Extrait) · Inspiriert von Luxus · Schneller Versand.
3. **Bestseller / "Kundenfavoriten"** — 3-card grid (Imagination, Rouge 540, Naxos) with name, "Inspiriert von …" line, price from €15,99, *In den Warenkorb* button (non-functional placeholder).
4. **Über LAMISENT** — split: bottle visual + short brand story + 3 mini USPs, link → `/ueber-uns` (placeholder route).
5. **Angebote — "15% auf ausgewählte Düfte"** — 2-card horizontal scroll (Angels' Share, Blue Talisman) with strike-through compare-at price.
6. **Neuheiten** — 3-card grid (Althaïr, Blonde Amber, Kirke).
7. **Stimmen unserer Kunden** — 3 testimonial cards with quote, name, city.
8. **Newsletter** — dark gradient panel, headline *"Erhalte 15% auf deine erste Bestellung"*, email input + *"Abonnieren"*, GDPR consent line ("Double-Opt-In, jederzeit kündbar").

**Placeholder route stubs** (so header links don't 404) — minimal "Coming soon" pages, real builds in later phases:
`/produkte`, `/kollektionen`, `/sets`, `/ueber-uns`, `/kontakt`, `/impressum`, `/datenschutz`, `/agb`, `/widerruf`, `/versand-zahlung`, `/warenkorb`, `/konto`.

**SEO (Home only this pass)**
- `head()` in `src/routes/index.tsx`: German `<title>` *"LAMISENT ESSENCE — Extrait de Parfum, inspiriert von Luxus"*, meta description, canonical, OG title/description/image (uses brand deck cover), Twitter card. Full structured-data + sitemap pass lands in Phase 5.

## Out of scope (explicitly later phases)

- Functional cart, checkout, Stripe — Phase 3.
- Supabase schema, real product data, variant size selector with live Grundpreis — Phase 2.
- Auth / `/konto` — Phase 4.
- JSON-LD, sitemap, cookie consent, real legal page copy — Phase 5.
- Shipping/VAT math, perf/a11y pass — Phase 6.

## Technical notes

- TanStack Start adaptation: routes are flat files in `src/routes/` (`produkte.tsx`, `kollektionen.index.tsx`, etc.); `<Link>` from `@tanstack/react-router`; per-route SEO via `head()` not Next `metadata`.
- All colors via semantic tokens in `src/styles.css` — no hardcoded hex in components, no Tailwind `text-white`/`bg-black`.
- Mobile-first responsive; hero collapses to stacked layout under `md`.
- Marquee uses pure CSS animation (no JS lib).

## Open question I will assume unless you say otherwise

Spec section 16 #5 asks "Next.js or Shopify". Lovable also offers a managed Shopify integration (real catalog, variants, cart, checkout, VAT-aware) that would replace Phases 2–3 entirely. **I'll proceed with custom build (your spec's default)**. If you'd rather use Shopify, say so before Phase 2 and I'll switch tracks.

Approve and I'll build Phase 1A.