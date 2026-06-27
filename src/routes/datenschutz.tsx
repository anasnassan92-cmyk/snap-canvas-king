import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz — LAMISENT ESSENCE" },
      { name: "description", content: "Datenschutzerklärung gemäß DSGVO — in Bearbeitung." },
    ],
  }),
  component: () => <ComingSoon title="Datenschutz" intro="Datenschutzerklärung gemäß DSGVO — in Bearbeitung." />,
});
