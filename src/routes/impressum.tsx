import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum — LAMISENT ESSENCE" },
      { name: "description", content: "Impressum gemäß § 5 TMG — Inhalt wird ergänzt." },
    ],
  }),
  component: () => <ComingSoon title="Impressum" intro="Impressum gemäß § 5 TMG — Inhalt wird ergänzt." />,
});
