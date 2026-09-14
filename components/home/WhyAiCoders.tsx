import { Container } from "@/components/ui/Container";
import { whyPoints } from "@/lib/content/technologies";

export function WhyAiCoders() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container className="flex flex-col gap-8">
        <h2 className="max-w-lg font-display text-2xl font-bold leading-snug text-foreground sm:text-3xl">
          Built around the way your business actually works.
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyPoints.map((point) => (
            <div
              key={point.name}
              className="group flex flex-col gap-2.5 border-t-2 border-border pt-5 transition-colors hover:border-teal"
            >
              <span className="text-gradient-brand font-mono-label text-xs font-bold">
                {point.number}
              </span>
              <span className="font-display text-base font-bold text-foreground">
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
