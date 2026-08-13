const ITEMS = [
  "Kostenloser Versand ab 49,90 € (DE)",
  "Versand 1–3 Werktage",
  "Extrait de Parfum",
];

export function AnnouncementBar() {
  // duplicate items for a seamless marquee loop
  const loop = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div className="sticky top-0 z-50 w-full overflow-hidden bg-gold">
      <div className="flex animate-marquee whitespace-nowrap py-2 text-[11px] uppercase tracking-luxury text-ink">
        {loop.map((item, i) => (
          <span key={i} className="mx-8 inline-flex items-center gap-8">
            {item}
            <span aria-hidden className="opacity-50">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
