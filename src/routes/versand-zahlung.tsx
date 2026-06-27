import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";

export const Route = createFileRoute("/versand-zahlung")({
  head: () => ({
    meta: [
      { title: "Versand & Zahlung — LAMISENT ESSENCE" },
      { name: "description", content: "Informationen zu Versand und Zahlungsarten folgen." },
    ],
  }),
  component: () => <ComingSoon title="Versand & Zahlung" intro="Informationen zu Versand und Zahlungsarten folgen." />,
});
