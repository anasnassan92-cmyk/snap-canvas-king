import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — LAMISENT ESSENCE" },
      { name: "description", content: "Kontaktformular und Service-Informationen folgen." },
    ],
  }),
  component: () => <ComingSoon title="Kontakt" intro="Kontaktformular und Service-Informationen folgen." />,
});
