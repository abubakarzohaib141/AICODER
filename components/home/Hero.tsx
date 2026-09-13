import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 sm:pt-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-border" />
      <div className="pointer-events-none absolute left-1/2 top-24 hidden h-64 w-px -translate-x-1/2 bg-gradient-to-b from-border to-transparent sm:block" />

      <Container className="relative flex flex-col items-center gap-8 pb-20 text-center sm:pb-28">
        <div className="flex flex-col items-center gap-1.5">
          <span className="font-mono-label text-xs uppercase tracking-[0.2em] text-teal">
            aicoders.dev
          </span>
          <span className="font-mono-label text-xs uppercase tracking-[0.2em] text-muted-2">
            Production AI Engineering Studio
          </span>
        </div>

        <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-6xl">
          We Build AI Systems That Do{" "}
          <span className="highlight-mark highlight-teal">Real Work.</span>
        </h1>

        <p className="max-w-lg text-base leading-relaxed text-muted sm:text-lg">
          AI Coders builds AI agents, automation workflows and AI-powered products around real
          business problems.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button href="/contact">Start an Engineering Project</Button>
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-blue hover:bg-background-elevated"
          >
            View Production Systems ↓
          </a>
        </div>
      </Container>
    </section>
  );
}
