import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { demoPoints, productionPoints } from "@/lib/content/technologies";

export function ProductionMindset() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrowNumber="04"
          eyebrow="Production mindset"
          title="AI Is Easy to Demo. Making It Work Is Harder."
          align="center"
        />

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-5 rounded-2xl border border-border p-8">
            <span className="font-mono-label text-xs uppercase tracking-wide text-muted-2">Demo</span>
            <ul className="flex flex-col gap-3">
              {demoPoints.map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm text-muted">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-muted-2" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5 rounded-2xl border border-blue/40 bg-background-elevated/50 p-8">
            <span className="font-mono-label text-xs uppercase tracking-wide text-blue">
              Production
            </span>
            <ul className="flex flex-col gap-3">
              {productionPoints.map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm text-foreground/90">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-blue" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-center font-display text-xl font-semibold text-foreground sm:text-2xl">
          We build for production, not just the demo.
        </p>
      </Container>
    </section>
  );
}
