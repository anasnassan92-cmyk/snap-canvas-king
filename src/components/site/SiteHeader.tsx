import { Link } from "@tanstack/react-router";
import { Search, User, ShoppingBag } from "lucide-react";
import logoGold from "@/assets/lam/logo-gold.png.asset.json";

const NAV = [
  { label: "Parfums", href: "/produkte" },
  { label: "Kollektionen", href: "/kollektionen" },
  { label: "Sets", href: "/sets" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
];

export function SiteHeader() {
  return (
    <header className="absolute left-0 right-0 top-[34px] z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center">
          <img
            src={logoGold.url}
            alt="LAMISENT ESSENCE"
            className="h-8 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[11px] uppercase tracking-luxury text-ivory/85 transition-colors hover:text-gold"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5 text-ivory/85">
          <button aria-label="Suche" className="transition-colors hover:text-gold">
            <Search className="h-4 w-4" />
          </button>
          <a href="/konto" aria-label="Konto" className="transition-colors hover:text-gold">
            <User className="h-4 w-4" />
          </a>
          <a
            href="/warenkorb"
            aria-label="Warenkorb"
            className="relative transition-colors hover:text-gold"
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="absolute -right-2 -top-2 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[9px] font-semibold text-matte-black">
              0
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
