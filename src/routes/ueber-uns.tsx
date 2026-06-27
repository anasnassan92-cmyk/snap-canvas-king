import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    meta: [
      { title: "Über uns — LAMISENT ESSENCE" },
      { name: "description", content: "Die Geschichte von LAMISENT ESSENCE — bald hier." },
    ],
  }),
  component: () => <ComingSoon title="Über uns" intro="Die Geschichte von LAMISENT ESSENCE — bald hier." />,
});
