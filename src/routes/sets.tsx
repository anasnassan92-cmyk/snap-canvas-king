import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";

export const Route = createFileRoute("/sets")({
  head: () => ({
    meta: [
      { title: "Sets — LAMISENT ESSENCE" },
      { name: "description", content: "Discovery- und Tester-Sets folgen in Kürze." },
    ],
  }),
  component: () => <ComingSoon title="Sets" intro="Discovery- und Tester-Sets folgen in Kürze." />,
});
