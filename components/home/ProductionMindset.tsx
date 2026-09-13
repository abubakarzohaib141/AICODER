import { Container } from "@/components/ui/Container";
import { demoPoints, productionPoints } from "@/lib/content/technologies";

export function ProductionMindset() {
  const demo = demoPoints.slice(0, 4);
  const production = productionPoints.slice(0, 4);

  return (
    <section className="border-t border-border py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-8 text-center">
        <h2 className="max-w-lg font-display text-2xl font-bold leading-snug text-foreground sm:text-3xl">
          AI is easy to demo.
          <br />
          Making it work is harder.
        </h2>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
          <div className="flex flex-wrap justify-center gap-2">
            {demo.map((point) => (
              <span
                key={point}
                className="rounded-full border border-border-strong px-3 py-1.5 text-xs text-muted"
              >
                {point}
              </span>
            ))}
          </div>
          <span className="text-muted-2">→</span>
          <div className="flex flex-wrap justify-center gap-2">
            {production.map((point) => (
              <span
                key={point}
                className="rounded-full border border-teal/30 bg-teal/[0.06] px-3 py-1.5 text-xs text-teal"
              >
                {point}
              </span>
            ))}
          </div>
        </div>

        <p className="font-display text-lg font-semibold text-foreground">
          We build for production, not just the demo.
        </p>
      </Container>
    </section>
  );
}
