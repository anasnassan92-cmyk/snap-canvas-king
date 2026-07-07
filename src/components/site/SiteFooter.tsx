import logoGold from "@/assets/lam/logo-gold-transparent.png.asset.json";
import { PaymentMethodLogos, ShippingLogos } from "@/components/site/PaymentIcons";
import { Instagram } from "lucide-react";

const COLS = [
  {
    title: "Marke",
    links: [
      { label: "Über LAMISENT", href: "/ueber-uns" },
      { label: "Unsere Düfte", href: "/produkte" },
      { label: "Kollektionen", href: "/kollektionen" },
      { label: "Discovery Set", href: "/sets" },
    ],
  },
  {
    title: "Hilfe",
    links: [
      { label: "Kontakt", href: "/kontakt" },
      { label: "Versand & Zahlung", href: "/versand-zahlung" },
      { label: "Rücksendung", href: "/widerruf" },
      { label: "FAQ", href: "/kontakt" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
      { label: "AGB", href: "/agb" },
      { label: "Widerrufsbelehrung", href: "/widerruf" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-matte-black">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <img src={logoGold.url} alt="LAMISENT ESSENCE" className="h-9 w-auto" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory-muted">
            Extrait de Parfum, inspiriert von luxuriösen Vorbildern. Hergestellt in
            kleinen Chargen für anhaltende Präsenz.
          </p>
          <p className="mt-6 text-[11px] uppercase tracking-luxury text-gold">
            Impress. Inspire. Remain.
          </p>
          <div className="mt-6 flex items-center gap-4 text-ivory-muted">
            <a href="#" aria-label="Instagram" className="transition-colors hover:text-gold">
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="text-[11px] uppercase tracking-luxury transition-colors hover:text-gold"
            >
              TikTok
            </a>
          </div>
        </div>

        {COLS.map((col) => (
          <div key={col.title}>
            <h4 className="font-sans text-[11px] uppercase tracking-luxury text-gold">
              {col.title}
            </h4>
            <ul className="mt-6 space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-ivory/85 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border bg-charcoal/40">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="font-sans text-[11px] uppercase tracking-luxury text-gold">
                Zahlungsmethoden
              </h4>
              <p className="mt-3 text-xs leading-relaxed text-ivory-muted">
                Sichere Bezahlung über Stripe & Klarna. Kauf auf Rechnung, Ratenzahlung
                und Sofortüberweisung verfügbar.
              </p>
              <div className="mt-5">
                <PaymentMethodLogos />
              </div>
            </div>
            <div>
              <h4 className="font-sans text-[11px] uppercase tracking-luxury text-gold">
                Versand
              </h4>
              <p className="mt-3 text-xs leading-relaxed text-ivory-muted">
                Versand aus Deutschland mit DHL & DPD in 1–3 Werktagen. Kostenloser
                Versand ab 49,99 €. Klimaneutraler Versand inklusive.
              </p>
              <div className="mt-5">
                <ShippingLogos />
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-5 text-[11px] uppercase tracking-luxury text-ivory-muted">
            <p>© {new Date().getFullYear()} LAMISENT ESSENCE. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </div>

    </footer>
  );
}
