import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";

export const Route = createFileRoute("/agb")({
  head: () => ({
    meta: [
      { title: "AGB — LAMISENT ESSENCE" },
      { name: "description", content: "Allgemeine Geschäftsbedingungen — in Bearbeitung." },
    ],
  }),
  component: () => <ComingSoon title="AGB" intro="Allgemeine Geschäftsbedingungen — in Bearbeitung." />,
});
