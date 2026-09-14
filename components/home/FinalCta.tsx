import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function FinalCta() {
  return (
    <section className="bg-dark-background py-24 sm:py-32">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-dark-foreground sm:text-5xl">
          Have a Workflow Worth <span className="text-orange">Automating?</span>
        </h2>
        <p className="max-w-lg text-base leading-relaxed text-dark-muted sm:text-lg">
          Tell us what you&apos;re trying to build or automate. We&apos;ll explore where AI
          agents, automation or custom AI engineering can create real value.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-dark-foreground px-7 py-3.5 text-sm font-medium text-dark-background transition-opacity hover:opacity-90"
          >
            Book a Call
          </Link>
        </div>
      </Container>
    </section>
  );
}
