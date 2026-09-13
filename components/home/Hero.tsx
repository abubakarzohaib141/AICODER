import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScreenshotFrame } from "@/components/system/ScreenshotFrame";
import { products } from "@/lib/content/products";

export function Hero() {
  const featured = products.find((p) => p.slug === "scope-ai-cv");

  return (
    <section className="pt-16 sm:pt-24">
      <Container className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10">
        <div className="flex max-w-xl flex-col gap-6">
          <span className="font-mono-label text-xs uppercase tracking-[0.16em] text-muted-2">
            AI Engineering · Agentic AI · Automation
          </span>
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-6xl">
            We Build AI Systems That Do <span className="highlight-mark highlight-teal">Real Work.</span>
          </h1>
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            AI Coders builds AI agents, automation workflows and AI-powered products around real
            business problems.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Button href="/contact">Start a Project</Button>
            <Button href="/products" variant="secondary">
              Explore Our Work
            </Button>
          </div>
        </div>

        {featured && (
          <div className="flex flex-col gap-3">
            <ScreenshotFrame
              src={featured.screenshots?.[0]}
              alt={`${featured.name} screenshot`}
              label={featured.name}
              aspect="4/3"
            />
            <span className="text-xs text-muted-2">
              {featured.name}, built by {featured.builtBy}
            </span>
          </div>
        )}
      </Container>
    </section>
  );
}
