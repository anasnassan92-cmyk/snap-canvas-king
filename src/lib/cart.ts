import { create } from "zustand";
import { persist } from "zustand/middleware";
import { PRODUCTS, type Product } from "@/data/products";

export type CartLine = {
  slug: string;
  ml: number;
  qty: number;
};

export type ResolvedLine = CartLine & {
  product: Product;
  unitPrice: number;
  lineTotal: number;
};

type CartState = {
  lines: CartLine[];
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  add: (slug: string, ml: number, qty?: number) => void;
  setQty: (slug: string, ml: number, qty: number) => void;
  remove: (slug: string, ml: number) => void;
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
      add: (slug, ml, qty = 1) =>
        set((s) => {
          const i = s.lines.findIndex((l) => l.slug === slug && l.ml === ml);
          if (i >= 0) {
            const lines = [...s.lines];
            lines[i] = { ...lines[i], qty: lines[i].qty + qty };
            return { lines, isOpen: true };
          }
          return { lines: [...s.lines, { slug, ml, qty }], isOpen: true };
        }),
      setQty: (slug, ml, qty) =>
        set((s) => ({
          lines:
            qty <= 0
              ? s.lines.filter((l) => !(l.slug === slug && l.ml === ml))
              : s.lines.map((l) => (l.slug === slug && l.ml === ml ? { ...l, qty } : l)),
        })),
      remove: (slug, ml) =>
        set((s) => ({ lines: s.lines.filter((l) => !(l.slug === slug && l.ml === ml)) })),
      clear: () => set({ lines: [] }),
    }),
    { name: "lam-cart-v1" },
  ),
);

export function resolveLines(lines: CartLine[]): ResolvedLine[] {
  return lines
    .map((l) => {
      const product = PRODUCTS.find((p) => p.slug === l.slug);
      if (!product) return null;
      const size = product.sizes.find((s) => s.ml === l.ml);
      if (!size) return null;
      return {
        ...l,
        product,
        unitPrice: size.price,
        lineTotal: +(size.price * l.qty).toFixed(2),
      };
    })
    .filter((x): x is ResolvedLine => x !== null);
}

export const FREE_SHIPPING_THRESHOLD = 49.99;
export const SHIPPING_COST = 4.9;

export function cartTotals(resolved: ResolvedLine[]) {
  const subtotal = +resolved.reduce((s, l) => s + l.lineTotal, 0).toFixed(2);
  const shipping = subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const total = +(subtotal + shipping).toFixed(2);
  const count = resolved.reduce((s, l) => s + l.qty, 0);
  return { subtotal, shipping, total, count };
}
