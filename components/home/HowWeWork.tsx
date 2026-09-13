import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { process } from "@/lib/content/technologies";

export function HowWeWork() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrowNumber="05" eyebrow="How we work" title="From Problem to Production" />

        <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-0">
          <div className="absolute left-0 right-0 top-5 hidden h-px bg-border-strong lg:block" />
          {process.map((step) => (
            <div key={step.number} className="relative flex flex-col gap-3 lg:px-4 lg:first:pl-0 lg:last:pr-0">
              <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border-strong bg-background font-mono-label text-xs text-orange">
                {step.number}
              </div>
              <p className="font-display text-base font-semibold text-foreground">{step.name}</p>
              <p className="text-sm leading-relaxed text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
