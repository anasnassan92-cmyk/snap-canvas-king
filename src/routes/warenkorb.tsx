import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";

export const Route = createFileRoute("/warenkorb")({
  head: () => ({
    meta: [
      { title: "Warenkorb — LAMISENT ESSENCE" },
      { name: "description", content: "Dein Warenkorb wird in einer späteren Phase aktiviert." },
    ],
  }),
  component: () => <ComingSoon title="Warenkorb" intro="Dein Warenkorb wird in einer späteren Phase aktiviert." />,
});
