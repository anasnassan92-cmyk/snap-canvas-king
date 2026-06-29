import { Link } from "@tanstack/react-router";
import { X, Plus, Minus, Trash2, ArrowRight } from "lucide-react";
import { useCart, resolveLines, cartTotals, FREE_SHIPPING_THRESHOLD } from "@/lib/cart";
import { EUR } from "@/data/products";

export function CartDrawer() {
  const { isOpen, close, lines, setQty, remove } = useCart();
  const resolved = resolveLines(lines);
  const { subtotal, shipping, total } = cartTotals(resolved);
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  return (
    <>
      {/* backdrop */}
      <div
        onClick={close}
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-background shadow-2xl transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Warenkorb"
        role="dialog"
      >
        <header className="flex items-center justify-between border-b border-border px-6 py-5">
          <p className="text-[11px] uppercase tracking-luxury text-ivory">Warenkorb ({resolved.length})</p>
          <button onClick={close} aria-label="Schließen" className="text-ivory-muted hover:text-gold">
            <X className="h-5 w-5" />
          </button>
        </header>

        {/* free shipping bar */}
        {resolved.length > 0 && (
          <div className="border-b border-border px-6 py-4">
            <p className="text-[11px] text-ivory-muted">
              {remaining > 0
                ? <>Noch <span className="text-gold">{EUR(remaining)}</span> bis zum kostenlosen Versand</>
                : <span className="text-gold">Kostenloser Versand freigeschaltet</span>}
            </p>
            <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-charcoal">
              <div
                className="h-full bg-gold transition-all"
                style={{ width: `${Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100)}%` }}
              />
            </div>
          </div>
        )}

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {resolved.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="font-display text-lg uppercase text-ivory">Dein Warenkorb ist leer</p>
              <p className="mt-2 text-sm text-ivory-muted">Entdecke unsere Düfte.</p>
              <Link
                to="/produkte"
                onClick={close}
                className="mt-6 inline-flex items-center gap-3 bg-gold px-7 py-3 text-[11px] uppercase tracking-luxury text-ink"
              >
                Zur Kollektion <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ) : (
            <ul className="space-y-5">
              {resolved.map((l) => (
                <li key={`${l.slug}-${l.ml}`} className="flex gap-4">
                  <img src={l.product.image} alt={l.product.name} className="h-24 w-20 shrink-0 rounded-sm bg-charcoal object-contain" />
                  <div className="flex flex-1 flex-col">
                    <p className="font-display text-sm uppercase text-ivory">{l.product.name}</p>
                    <p className="text-[10px] uppercase tracking-luxury text-ivory-muted">{l.ml} ML</p>
                    <p className="mt-1 text-xs text-ivory-muted">{EUR(l.unitPrice)}</p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="inline-flex items-center border border-border">
                        <button
                          onClick={() => setQty(l.slug, l.ml, l.qty - 1)}
                          aria-label="Menge reduzieren"
                          className="px-2 py-1 text-ivory-muted hover:text-gold"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="min-w-8 px-2 text-center text-sm text-ivory">{l.qty}</span>
                        <button
                          onClick={() => setQty(l.slug, l.ml, l.qty + 1)}
                          aria-label="Menge erhöhen"
                          className="px-2 py-1 text-ivory-muted hover:text-gold"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => remove(l.slug, l.ml)}
                        aria-label="Entfernen"
                        className="text-ivory-muted hover:text-gold"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <p className="font-sans text-sm font-semibold text-ivory">{EUR(l.lineTotal)}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {resolved.length > 0 && (
          <footer className="border-t border-border px-6 py-5">
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between text-ivory-muted">
                <span>Zwischensumme</span><span>{EUR(subtotal)}</span>
              </div>
              <div className="flex justify-between text-ivory-muted">
                <span>Versand</span>
                <span>{shipping === 0 ? "Kostenlos" : EUR(shipping)}</span>
              </div>
              <div className="flex justify-between border-t border-border pt-3 font-display text-base text-ivory">
                <span>Gesamt</span><span>{EUR(total)}</span>
              </div>
            </div>
            <Link
              to="/checkout"
              onClick={close}
              className="mt-5 flex items-center justify-center gap-3 bg-gold px-7 py-3.5 text-[11px] uppercase tracking-luxury text-ink transition-colors hover:bg-gold-soft"
              style={{ boxShadow: "var(--shadow-gold)" }}
            >
              Zur Kasse <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <p className="mt-3 text-center text-[10px] text-ivory-muted">inkl. MwSt · DHL/DPD 1–3 Werktage</p>
          </footer>
        )}
      </aside>
    </>
  );
}
