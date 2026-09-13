import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FinalCta() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
          Have a Workflow Worth Automating?
        </h2>
        <p className="max-w-lg text-base leading-relaxed text-muted sm:text-lg">
          Tell us what you&apos;re trying to build or automate. We&apos;ll explore where AI
          agents, automation or custom AI engineering can create real value.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button href="/contact">Start a Project</Button>
          <Button href="/products" variant="secondary">
            View Our Work
          </Button>
        </div>
      </Container>
    </section>
  );
}
