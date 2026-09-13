import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SystemFlow } from "@/components/system/SystemFlow";

const capabilities = ["AI Agents", "Agentic AI", "Automation", "AI Products", "Custom AI Engineering"];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-24">
      <div className="pointer-events-none absolute inset-0 grain-fade" />
      <Container className="relative flex flex-col gap-12">
        <div className="flex max-w-3xl flex-col gap-6">
          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-6xl">
            We Build AI Systems <span className="text-gradient">That Do Real Work.</span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            AI Coders builds AI agents, agentic systems, automation workflows and AI-powered
            products that help businesses automate operations and solve real-world problems.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Button href="/contact">Start a Project</Button>
            <Button href="/products" variant="secondary">
              Explore Our Work
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-2 font-mono-label text-xs uppercase tracking-wide text-muted-2">
            {capabilities.map((item, i) => (
              <span key={item} className="flex items-center gap-3">
                {i > 0 && <span className="text-border-strong">·</span>}
                {item}
              </span>
            ))}
          </div>
        </div>

        <SystemFlow />
      </Container>
    </section>
  );
}
