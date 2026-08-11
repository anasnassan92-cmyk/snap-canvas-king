import { create } from "zustand";
import { persist } from "zustand/middleware";
import { PRODUCTS, DISCOVERY_BOX, BUNDLES, type Product } from "@/data/products";

export type LineKind = "single" | "box" | "bundle";

export type CartLine = {
  id: string;
  kind: LineKind;
  /** product slug for singles, box/bundle slug otherwise */
  slug: string;
  ml: number;
  qty: number;
  /** chosen fragrance slugs for box / bundle lines */
  picks?: string[];
};

export type ResolvedLine = CartLine & {
  title: string;
  subtitle: string;
  image: string;
  product?: Product;
  unitPrice: number;
  lineTotal: number;
  lookupKey: string;
};

function makeId(kind: LineKind, slug: string, ml: number, picks?: string[]) {
  return [kind, slug, ml, (picks ?? []).join("+")].join("|");
}

export function priceLookupKey(line: Pick<CartLine, "kind" | "slug" | "ml">) {
  if (line.kind === "single") return `${line.slug.replace(/-/g, "_")}_${line.ml}ml`;
  return line.slug.replace(/-/g, "_");
}

type AddInput = { kind?: LineKind; slug: string; ml: number; qty?: number; picks?: string[] };

type CartState = {
  lines: CartLine[];
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  add: (input: AddInput) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      lines: [],
      isOpen: false,
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
      toggle: () => set((s) => ({ isOpen: !s.isOpen })),
      add: ({ kind = "single", slug, ml, qty = 1, picks }) =>
        set((s) => {
          const id = makeId(kind, slug, ml, picks);
          const i = s.lines.findIndex((l) => l.id === id);
          if (i >= 0) {
            const lines = [...s.lines];
            lines[i] = { ...lines[i], qty: lines[i].qty + qty };
            return { lines, isOpen: true };
          }
          return { lines: [...s.lines, { id, kind, slug, ml, qty, picks }], isOpen: true };
        }),
      setQty: (id, qty) =>
        set((s) => ({
          lines:
            qty <= 0 ? s.lines.filter((l) => l.id !== id) : s.lines.map((l) => (l.id === id ? { ...l, qty } : l)),
        })),
      remove: (id) => set((s) => ({ lines: s.lines.filter((l) => l.id !== id) })),
      clear: () => set({ lines: [] }),
    }),
    { name: "lam-cart-v2" },
  ),
);

const nameOf = (slug: string) => PRODUCTS.find((p) => p.slug === slug)?.name ?? slug;

export function resolveLines(lines: CartLine[]): ResolvedLine[] {
  return lines
    .map((l): ResolvedLine | null => {
      if (l.kind === "single") {
        const product = PRODUCTS.find((p) => p.slug === l.slug);
        const size = product?.sizes.find((s) => s.ml === l.ml);
        if (!product || !size) return null;
        return {
          ...l,
          title: product.name,
          subtitle: `${l.ml} ML · Extrait de Parfum`,
          image: product.image,
          product,
          unitPrice: size.price,
          lineTotal: +(size.price * l.qty).toFixed(2),
          lookupKey: priceLookupKey(l),
        };
      }
      if (l.kind === "box") {
        return {
          ...l,
          title: DISCOVERY_BOX.name,
          subtitle: `${DISCOVERY_BOX.slots} × ${DISCOVERY_BOX.ml} ML · ${(l.picks ?? []).map(nameOf).join(", ")}`,
          image: PRODUCTS.find((p) => p.slug === (l.picks ?? [])[0])?.image ?? PRODUCTS[0].image,
          unitPrice: DISCOVERY_BOX.price,
          lineTotal: +(DISCOVERY_BOX.price * l.qty).toFixed(2),
          lookupKey: priceLookupKey(l),
        };
      }
      const bundle = BUNDLES.find((b) => b.slug === l.slug);
      if (!bundle) return null;
      return {
        ...l,
        title: bundle.name,
        subtitle: `${bundle.slots} × ${bundle.ml} ML · ${(l.picks ?? []).map(nameOf).join(", ")}`,
        image: PRODUCTS.find((p) => p.slug === (l.picks ?? [])[0])?.image ?? PRODUCTS[0].image,
        unitPrice: bundle.price,
        lineTotal: +(bundle.price * l.qty).toFixed(2),
        lookupKey: priceLookupKey(l),
      };
    })
    .filter((x): x is ResolvedLine => x !== null);
}

export const FREE_SHIPPING_THRESHOLD = 49.9;
export const SHIPPING_COST = 4.9;

export function cartTotals(resolved: ResolvedLine[]) {
  const subtotal = +resolved.reduce((s, l) => s + l.lineTotal, 0).toFixed(2);
  const shipping = subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const total = +(subtotal + shipping).toFixed(2);
  const count = resolved.reduce((s, l) => s + l.qty, 0);
  return { subtotal, shipping, total, count };
}
