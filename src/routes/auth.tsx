import { useState } from "react";
import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";

import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Anmelden — LAMISENT ESSENCE" },
      { name: "description", content: "Melde dich an oder erstelle dein LAMISENT-Konto." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"sign-in" | "sign-up">("sign-in");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      if (mode === "sign-up") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin, data: { full_name: fullName } },
        });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      }
      navigate({ to: "/konto" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Anmeldung fehlgeschlagen");
    } finally {
      setBusy(false);
    }
  };

  const onGoogle = async () => {
    setError(null);
    const result = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin });
    if (result.error) {
      setError(result.error instanceof Error ? result.error.message : String(result.error));
      return;
    }
    if (result.redirected) return;
    navigate({ to: "/konto" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <SiteHeader />
      <section className="pt-[150px]">
        <div className="mx-auto max-w-md px-6 py-16">
          <p className="text-[11px] uppercase tracking-luxury text-gold">Konto</p>
          <h1 className="mt-3 font-display text-3xl uppercase text-ivory md:text-4xl">
            {mode === "sign-in" ? "Anmelden" : "Konto erstellen"}
          </h1>

          <div className="mt-8 rounded-sm border border-border bg-charcoal/40 p-6">
            <button
              onClick={onGoogle}
              type="button"
              className="flex w-full items-center justify-center gap-3 border border-border bg-white px-5 py-3 text-[12px] font-medium text-ink hover:bg-ivory"
            >
              Mit Google fortfahren
            </button>
            <div className="my-5 flex items-center gap-3 text-[10px] uppercase tracking-luxury text-ivory-muted">
              <div className="h-px flex-1 bg-border" /> oder per E-Mail <div className="h-px flex-1 bg-border" />
            </div>

            <form onSubmit={onSubmit} className="space-y-3">
              {mode === "sign-up" && (
                <input
                  type="text"
                  placeholder="Vor- und Nachname"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full border border-border bg-background px-4 py-3 text-sm text-ivory placeholder:text-ivory-muted"
                />
              )}
              <input
                type="email"
                required
                placeholder="E-Mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-border bg-background px-4 py-3 text-sm text-ivory placeholder:text-ivory-muted"
              />
              <input
                type="password"
                required
                minLength={6}
                placeholder="Passwort"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-border bg-background px-4 py-3 text-sm text-ivory placeholder:text-ivory-muted"
              />
              {error && <p className="text-xs text-red-600">{error}</p>}
              <button
                type="submit"
                disabled={busy}
                className="flex w-full items-center justify-center gap-2 bg-gold px-7 py-3.5 text-[11px] uppercase tracking-luxury text-ink disabled:opacity-60"
                style={{ boxShadow: "var(--shadow-gold)" }}
              >
                {busy && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
                {mode === "sign-in" ? "Anmelden" : "Konto erstellen"}
              </button>
            </form>

            <p className="mt-5 text-center text-xs text-ivory-muted">
              {mode === "sign-in" ? (
                <>
                  Noch kein Konto?{" "}
                  <button onClick={() => setMode("sign-up")} className="text-gold underline">
                    Konto erstellen
                  </button>
                </>
              ) : (
                <>
                  Schon ein Konto?{" "}
                  <button onClick={() => setMode("sign-in")} className="text-gold underline">
                    Anmelden
                  </button>
                </>
              )}
            </p>
          </div>
          <p className="mt-6 text-center text-[10px] text-ivory-muted">
            Mit der Anmeldung stimmst du den <Link to="/agb" className="underline">AGB</Link> und der{" "}
            <Link to="/datenschutz" className="underline">Datenschutzerklärung</Link> zu.
          </p>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
