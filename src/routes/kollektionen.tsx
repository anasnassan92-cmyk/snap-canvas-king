import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";

export const Route = createFileRoute("/kollektionen")({
  head: () => ({
    meta: [
      { title: "Kollektionen — LAMISENT ESSENCE" },
      { name: "description", content: "Letter-codierte Kollektionen — bald verfügbar." },
    ],
  }),
  component: () => <ComingSoon title="Kollektionen" intro="Letter-codierte Kollektionen — bald verfügbar." />,
});
