import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";

export const Route = createFileRoute("/produkte")({
  head: () => ({
    meta: [
      { title: "Parfums — LAMISENT ESSENCE" },
      { name: "description", content: "Unsere komplette Düftekollektion folgt in Kürze." },
    ],
  }),
  component: () => <ComingSoon title="Parfums" intro="Unsere komplette Düftekollektion folgt in Kürze." />,
});
