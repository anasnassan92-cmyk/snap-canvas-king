import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";

export const Route = createFileRoute("/konto")({
  head: () => ({
    meta: [
      { title: "Konto — LAMISENT ESSENCE" },
      { name: "description", content: "Kundenkonto und Bestellhistorie folgen in Phase 4." },
    ],
  }),
  component: () => <ComingSoon title="Konto" intro="Kundenkonto und Bestellhistorie folgen in Phase 4." />,
});
