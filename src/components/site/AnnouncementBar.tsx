const ITEMS = [
  "Schneller Versand 1–3 Werktage",
  "Kostenloser Versand ab 49,90 €",
  "Extrait de Parfum",
  "Inspiriert von Luxus",
];

export function AnnouncementBar() {
  // duplicate items for a seamless marquee loop
  const loop = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div className="sticky top-0 z-50 w-full overflow-hidden border-b border-border bg-matte-black">
      <div className="flex animate-marquee whitespace-nowrap py-2 text-[11px] uppercase tracking-luxury text-ivory-muted">
        {loop.map((item, i) => (
          <span key={i} className="mx-8 inline-flex items-center gap-8">
            {item}
            <span aria-hidden className="text-gold">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
