import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { BookCallButton } from "@/components/booking/BookCallButton";
import { Reveal } from "@/components/motion/Reveal";

export function FinalCta() {
  return (
    <section className="bg-dark-background py-24 sm:py-32">
      <Container>
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-dark-foreground sm:text-5xl">
            Have a System Worth <span className="text-teal-bright">Building?</span>
          </h2>
          <p className="max-w-lg text-base leading-relaxed text-dark-muted sm:text-lg">
            Tell us what you&apos;re trying to build or automate. We&apos;ll explore where AI
            agents, automation or custom engineering create real value.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <BookCallButton variant="accent" className="!px-7 !py-3.5 text-sm">
              Book a Call
            </BookCallButton>
            <Link
              href="/contact"
              className="text-sm font-medium text-dark-muted transition-colors hover:text-dark-foreground"
            >
              Or send a message
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
