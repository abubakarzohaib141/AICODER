import { Container } from "@/components/ui/Container";
import { BookCallButton } from "@/components/booking/BookCallButton";
import { AgentFlowCard } from "@/components/system/AgentFlowCard";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 sm:pt-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-border" />
      <div className="pointer-events-none absolute left-1/2 top-24 hidden h-64 w-px -translate-x-1/2 bg-gradient-to-b from-border to-transparent sm:block" />

      <Container className="relative flex flex-col items-center gap-8 pb-16 text-center sm:pb-20">
        <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-7xl">
          We Build AI Systems That Do{" "}
          <span className="highlight-mark highlight-teal">Real Work.</span>
        </h1>

        <p className="max-w-lg text-base leading-relaxed text-muted sm:text-lg">
          AI Coders builds AI agents, automation workflows and AI-powered products around real
          business problems.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5 pt-2">
          <BookCallButton className="!px-7 !py-3.5 !text-base">Book a Call</BookCallButton>
          <a
            href="#work"
            className="text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            See Our Work ↓
          </a>
        </div>
      </Container>

      <Container className="relative pb-20 sm:pb-28">
        <AgentFlowCard className="mx-auto max-w-4xl" />
      </Container>
    </section>
  );
}
