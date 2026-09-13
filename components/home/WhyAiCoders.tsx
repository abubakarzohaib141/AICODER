import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyPoints } from "@/lib/content/technologies";

export function WhyAiCoders() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrowNumber="06"
          eyebrow="Why AI Coders"
          title="Built for Real Business Workflows"
        />

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {whyPoints.map((point) => (
            <div key={point.name} className="flex flex-col gap-3 bg-background p-8">
              <p className="font-display text-lg font-semibold text-foreground">{point.name}</p>
              <p className="text-sm leading-relaxed text-muted">{point.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
