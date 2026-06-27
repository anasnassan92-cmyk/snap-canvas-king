import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export function ComingSoon({ title, intro }: { title: string; intro: string }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-44 text-center">
        <p className="text-[11px] uppercase tracking-luxury text-gold">LAMISENT ESSENCE</p>
        <h1 className="mt-4 text-4xl uppercase text-ivory md:text-5xl">{title}</h1>
        <p className="mt-6 text-sm leading-relaxed text-ivory-muted">{intro}</p>
        <a
          href="/"
          className="mt-10 inline-flex items-center gap-3 border border-border px-7 py-3.5 text-[11px] uppercase tracking-luxury text-ivory transition-colors hover:border-gold hover:text-gold"
        >
          Zurück zur Startseite
        </a>
      </main>
      <SiteFooter />
    </div>
  );
}
