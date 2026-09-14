import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { process } from "@/lib/content/technologies";

const accents = ["var(--accent-teal)", "var(--accent-blue)", "var(--accent-indigo)"];

export function HowWeWork() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container className="flex flex-col gap-16">
        <Reveal>
          <SectionHeading eyebrow="How we work" title="From Problem to Production" />
        </Reveal>

        <StaggerGroup className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-border lg:block" />
          {process.map((step, i) => (
            <StaggerItem key={step.number} className="relative flex flex-col gap-4">
              <span
                className="font-display text-4xl font-bold leading-none"
                style={{ color: accents[i % accents.length] }}
              >
                {step.number}
              </span>
              <p className="font-display text-base font-semibold text-foreground">{step.name}</p>
              <p className="text-sm leading-relaxed text-muted">{step.description}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
