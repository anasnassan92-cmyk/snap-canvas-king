import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, SlidersHorizontal } from "lucide-react";

import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PRODUCTS, EUR, type Product } from "@/data/products";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/produkte")({
  head: () => ({
    meta: [
      { title: "Parfums — LAMISENT ESSENCE" },
      {
        name: "description",
        content:
          "Die komplette LAMISENT ESSENCE Kollektion: 10 Signature-Düfte als Extrait de Parfum in 4 Größen — 8, 30, 50 und 100 ML.",
      },
      { property: "og:title", content: "Parfums — LAMISENT ESSENCE" },
      { property: "og:description", content: "10 Signature-Düfte, jeweils in 4 Größen. Extrait de Parfum, inspiriert von Luxus." },
    ],
  }),
  component: ProductsPage,
});

const FAMILIES = Array.from(new Set(PRODUCTS.map((p) => p.family))).sort();
const SIZE_OPTIONS = [8, 30, 50, 100];

type Sort = "featured" | "price-asc" | "price-desc" | "name";

function ProductsPage() {
  const [family, setFamily] = useState<string | "all">("all");
  const [size, setSize] = useState<number | "all">("all");
  const [sort, setSort] = useState<Sort>("featured");
  const [openFilters, setOpenFilters] = useState(false);

  const items = useMemo(() => {
    let list = [...PRODUCTS];
    if (family !== "all") list = list.filter((p) => p.family === family);
    if (size !== "all") list = list.filter((p) => p.sizes.some((s) => s.ml === size));
    if (sort === "price-asc") list.sort((a, b) => a.sizes[0].price - b.sizes[0].price);
    if (sort === "price-desc") list.sort((a, b) => b.sizes[0].price - a.sizes[0].price);
    if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [family, size, sort]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <SiteHeader />

      <section className="bg-charcoal/40 pb-12 pt-[150px]">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-[11px] uppercase tracking-luxury text-gold">Kollektion</p>
          <h1 className="mt-3 text-4xl uppercase text-ivory md:text-5xl">Alle Düfte</h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ivory-muted">
            10 Signature-Düfte, jeweils in 4 Größen — 8, 30, 50 und 100 ML. Extrait de Parfum, 25–30 % Konzentration.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-background">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <button
            onClick={() => setOpenFilters((v) => !v)}
            className="inline-flex items-center gap-2 border border-border px-4 py-2 text-[11px] uppercase tracking-luxury text-ivory hover:border-gold hover:text-gold md:hidden"
          >
            <SlidersHorizontal className="h-3.5 w-3.5" /> Filter
          </button>

          <div className={`flex-1 ${openFilters ? "flex" : "hidden"} flex-wrap items-center gap-3 md:flex`}>
            <Select label="Familie" value={family} onChange={(v) => setFamily(v as never)}>
              <option value="all">Alle Familien</option>
              {FAMILIES.map((f) => <option key={f} value={f}>{f}</option>)}
            </Select>
            <Select label="Größe" value={String(size)} onChange={(v) => setSize(v === "all" ? "all" : Number(v))}>
              <option value="all">Alle Größen</option>
              {SIZE_OPTIONS.map((s) => <option key={s} value={s}>{s} ML</option>)}
            </Select>
          </div>

          <Select label="Sortieren" value={sort} onChange={(v) => setSort(v as Sort)}>
            <option value="featured">Empfohlen</option>
            <option value="name">Name A–Z</option>
            <option value="price-asc">Preis aufsteigend</option>
            <option value="price-desc">Preis absteigend</option>
          </Select>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-8 text-[11px] uppercase tracking-luxury text-ivory-muted">
            {items.length} {items.length === 1 ? "Duft" : "Düfte"}
          </p>
          {items.length === 0 ? (
            <p className="py-20 text-center text-sm text-ivory-muted">Keine Düfte gefunden — passe die Filter an.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {items.map((p) => <ShopCard key={p.slug} product={p} />)}
            </div>
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Select({
  label, value, onChange, children,
}: { label: string; value: string; onChange: (v: string) => void; children: React.ReactNode }) {
  return (
    <label className="inline-flex items-center gap-2 text-[10px] uppercase tracking-luxury text-ivory-muted">
      {label}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-border bg-background px-3 py-2 text-[11px] uppercase tracking-luxury text-ivory focus:border-gold focus:outline-none"
      >
        {children}
      </select>
    </label>
  );
}

function ShopCard({ product: p }: { product: Product }) {
  const [sizeIdx, setSizeIdx] = useState(1);
  const add = useCart((s) => s.add);
  const size = p.sizes[sizeIdx];

  return (
    <article className="group flex flex-col overflow-hidden rounded-sm border border-border bg-charcoal/40 transition-all hover:border-gold/40">
      <Link to="/produkte/$slug" params={{ slug: p.slug }} className="relative block aspect-[4/5] overflow-hidden bg-charcoal">
        <img src={p.coverImage ?? p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <p className="text-[10px] uppercase tracking-luxury text-gold">{p.family}</p>
        <Link to="/produkte/$slug" params={{ slug: p.slug }} className="font-display text-xl uppercase text-ivory hover:text-gold">
          {p.name}
        </Link>
        <p className="text-xs text-ivory-muted">{p.inspired}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {p.sizes.map((s, i) => (
            <button
              key={s.ml}
              onClick={() => setSizeIdx(i)}
              className={`border px-2.5 py-1 text-[10px] uppercase tracking-luxury transition-colors ${
                i === sizeIdx ? "border-gold bg-gold text-ink" : "border-border text-ivory-muted hover:border-gold hover:text-gold"
              }`}
            >
              {s.ml} ML
            </button>
          ))}
        </div>

        <div className="mt-auto flex items-baseline justify-between pt-4">
          <div>
            <p className="font-sans text-base font-semibold text-ivory">{EUR(size.price)}</p>
            <p className="text-[10px] text-ivory-muted">inkl. MwSt</p>
          </div>
          <button
            onClick={() => add(p.slug, size.ml, 1)}
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
