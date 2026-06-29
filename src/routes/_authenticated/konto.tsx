import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { LogOut, Package } from "lucide-react";

import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { supabase } from "@/integrations/supabase/client";
import { EUR } from "@/data/products";

export const Route = createFileRoute("/_authenticated/konto")({
  head: () => ({
    meta: [
      { title: "Konto — LAMISENT ESSENCE" },
      { name: "description", content: "Dein Kundenkonto und Bestellhistorie bei LAMISENT ESSENCE." },
    ],
  }),
  component: AccountPage,
});

type OrderRow = {
  id: string;
  stripe_session_id: string;
  status: string;
  amount_total: number;
  currency: string;
  created_at: string;
  items: Array<{ product_name?: string; price_id?: string; quantity: number; amount_total: number }>;
};

function AccountPage() {
  const [email, setEmail] = useState<string>("");
  const [orders, setOrders] = useState<OrderRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) setEmail(user.email ?? "");
      const { data } = await supabase
        .from("orders")
        .select("id, stripe_session_id, status, amount_total, currency, created_at, items")
        .order("created_at", { ascending: false });
      setOrders((data as unknown as OrderRow[]) ?? []);
      setLoading(false);
    })();
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <SiteHeader />
      <section className="pt-[150px]">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-luxury text-gold">Mein Konto</p>
              <h1 className="mt-3 font-display text-4xl uppercase text-ivory md:text-5xl">Willkommen</h1>
              {email && <p className="mt-2 text-sm text-ivory-muted">{email}</p>}
            </div>
            <button
              onClick={signOut}
              className="inline-flex items-center gap-2 border border-border px-5 py-3 text-[11px] uppercase tracking-luxury text-ivory hover:text-gold"
            >
              <LogOut className="h-3.5 w-3.5" /> Abmelden
            </button>
          </div>

          <h2 className="mt-12 font-display text-2xl uppercase text-ivory">Bestellungen</h2>

          {loading ? (
            <p className="mt-6 text-sm text-ivory-muted">Lade Bestellungen…</p>
          ) : orders.length === 0 ? (
            <div className="mt-6 flex flex-col items-center rounded-sm border border-border bg-charcoal/40 py-16 text-center">
              <Package className="h-8 w-8 text-gold" />
              <p className="mt-4 font-display text-lg uppercase text-ivory">Noch keine Bestellungen</p>
              <Link
                to="/produkte"
                className="mt-6 inline-flex items-center gap-3 bg-gold px-7 py-3 text-[11px] uppercase tracking-luxury text-ink"
              >
                Zur Kollektion
              </Link>
            </div>
          ) : (
            <ul className="mt-6 space-y-4">
              {orders.map((o) => (
                <li key={o.id} className="rounded-sm border border-border bg-charcoal/40 p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <div>
                      <p className="text-[10px] uppercase tracking-luxury text-ivory-muted">
                        {new Date(o.created_at).toLocaleDateString("de-DE")} · Ref {o.stripe_session_id.slice(-10)}
                      </p>
                      <p className="mt-1 font-display text-base uppercase text-ivory">
                        {o.items.length} {o.items.length === 1 ? "Artikel" : "Artikel"}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-sans text-base font-semibold text-ivory">{EUR(o.amount_total / 100)}</p>
                      <p className="text-[10px] uppercase tracking-luxury text-gold">{o.status}</p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-1 text-sm text-ivory-muted">
                    {o.items.map((it, i) => (
                      <li key={i} className="flex justify-between">
                        <span>{it.quantity}× {it.product_name ?? it.price_id}</span>
                        <span>{EUR(it.amount_total / 100)}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
