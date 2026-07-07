import { useEffect, useSyncExternalStore } from "react";

const KEY = "lam-theme";
type Theme = "light" | "dark";

const listeners = new Set<() => void>();

function getInitial(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem(KEY);
  if (stored === "light" || stored === "dark") return stored;
  return "light";
}

function apply(theme: Theme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

export function setTheme(theme: Theme) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, theme);
  apply(theme);
  listeners.forEach((l) => l());
}

export function useTheme(): [Theme, (t: Theme) => void, () => void] {
  const theme = useSyncExternalStore<Theme>(
    subscribe,
    () => (typeof document !== "undefined" && document.documentElement.classList.contains("dark") ? "dark" : "light"),
    () => "light",
  );

  useEffect(() => {
    apply(getInitial());
    listeners.forEach((l) => l());
  }, []);

  const toggle = () => setTheme(theme === "dark" ? "light" : "dark");
  return [theme, setTheme, toggle];
}
