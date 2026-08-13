import logoGold from "@/assets/lam/logo-gold-transparent.png.asset.json";
import { PaymentMethodLogos, ShippingLogos } from "@/components/site/PaymentIcons";
import { SOCIALS } from "@/data/products";
import { Instagram, Music2 } from "lucide-react";

const SHOP_LINKS = [
  { label: "Alle Düfte", href: "/produkte" },
  { label: "Discovery Box", href: "/discovery-box" },
];

const SERVICE_LINKS = [
  { label: "Kontakt", href: "/kontakt" },
  { label: "Versand & Zahlung", href: "/versand-zahlung" },
  { label: "Widerrufsbelehrung", href: "/widerruf" },
  { label: "AGB", href: "/agb" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "Impressum", href: "/impressum" },
];

const SHIPPING_LINES = [
  "Deutschland – 4,90 €",
  "Gratis ab 49,90 € (DE)",
  "Österreich – 9,90 €",
  "Schweiz – 14,90 €",
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-matte-black">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr_0.8fr]">
        <div>
          <img src={logoGold.url} alt="LAMISENT ESSENCE" className="h-9 w-auto" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory-muted">
            Extrait de Parfum, inspiriert von luxuriösen Vorbildern. Hergestellt in
            kleinen Chargen für anhaltende Präsenz.
          </p>
          <p className="mt-6 text-[11px] uppercase tracking-luxury text-gold">
            Impress. Inspire. Remain.
          </p>
        </div>

        <div>
          <h4 className="font-sans text-[11px] uppercase tracking-luxury text-gold">Shop</h4>
          <ul className="mt-6 space-y-3">
            {SHOP_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-sm text-ivory/85 transition-colors hover:text-gold">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-[11px] uppercase tracking-luxury text-gold">Versand</h4>
          <ul className="mt-6 space-y-3">
            {SHIPPING_LINES.map((l) => (
              <li key={l} className="text-sm text-ivory/85">
                {l}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-[11px] uppercase tracking-luxury text-gold">Kundenservice</h4>
          <ul className="mt-6 space-y-3">
            {SERVICE_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-sm text-ivory/85 transition-colors hover:text-gold">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-[11px] uppercase tracking-luxury text-gold">Folge uns</h4>
          <div className="mt-6 flex items-center gap-4">
            <a
              href={SOCIALS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center border border-border text-ivory/85 transition-colors hover:border-gold hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={SOCIALS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="flex h-10 w-10 items-center justify-center border border-border text-ivory/85 transition-colors hover:border-gold hover:text-gold"
            >
              <Music2 className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border bg-charcoal/40">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="font-sans text-[11px] uppercase tracking-luxury text-gold">
                Zahlungsmethoden
              </h4>
              <div className="mt-5">
                <PaymentMethodLogos />
              </div>
            </div>
            <div>
              <h4 className="font-sans text-[11px] uppercase tracking-luxury text-gold">Versand</h4>
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
