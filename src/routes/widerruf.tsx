import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";

export const Route = createFileRoute("/widerruf")({
  head: () => ({
    meta: [
      { title: "Widerruf — LAMISENT ESSENCE" },
      { name: "description", content: "Widerrufsbelehrung und -formular folgen." },
    ],
  }),
  component: () => <ComingSoon title="Widerruf" intro="Widerrufsbelehrung und -formular folgen." />,
});
