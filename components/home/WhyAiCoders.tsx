import { Container } from "@/components/ui/Container";
import { whyPoints } from "@/lib/content/technologies";

export function WhyAiCoders() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container className="flex flex-col gap-10">
        <h2 className="max-w-lg font-display text-2xl font-bold leading-snug text-foreground sm:text-3xl">
          Built around the way your business actually works.
        </h2>

        <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {whyPoints.map((point) => (
            <div key={point.name} className="flex items-baseline gap-4 border-t border-border pt-4">
              <span className="w-40 shrink-0 font-display text-sm font-semibold text-foreground">
                {point.name}
              </span>
              <p className="text-sm leading-relaxed text-muted">{point.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
