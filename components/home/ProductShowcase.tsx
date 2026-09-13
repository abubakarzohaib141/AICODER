import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { ScreenshotFrame } from "@/components/system/ScreenshotFrame";
import { products } from "@/lib/content/products";

export function ProductShowcase() {
  const [tresolv, cvPlatform, sdk] = products;

  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Products we've built"
          title="Products We've Built"
          description="Real AI products built by our engineering team."
        />

        <div className="grid gap-6 overflow-hidden rounded-3xl border border-border bg-background-elevated-2/40 p-2 lg:grid-cols-2 lg:p-3">
          <div className="flex flex-col gap-8 p-6 sm:p-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <span className="font-display text-2xl font-bold text-foreground">tResolv</span>
                <span className="font-mono-label text-[11px] uppercase tracking-wide text-muted-2">
                  {tresolv.category}
                </span>
              </div>
              <p className="max-w-sm text-base leading-relaxed text-muted">
                {tresolv.description}
              </p>
            </div>

            {tresolv.technology && (
              <div className="flex flex-wrap gap-2">
                {tresolv.technology.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            )}

            <div className="mt-auto flex items-center justify-between">
              <span className="text-sm text-muted-2">Built by {tresolv.builtBy}</span>
              {tresolv.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-foreground transition-colors hover:text-teal"
                >
                  {link.label} →
                </a>
              ))}
            </div>
          </div>
          <div className="p-4 sm:p-6">
            <ScreenshotFrame
              src={tresolv.screenshot}
              alt="tResolv product screenshot"
              label="tResolv storefront chat widget"
            />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <Link
            href={`/products/${cvPlatform.slug}`}
            className="group flex flex-col gap-6 rounded-2xl border border-border p-7 transition-colors hover:border-teal/50"
          >
            <span className="font-display text-lg font-semibold text-foreground">
              {cvPlatform.name}
            </span>
            <ScreenshotFrame
              alt="AI CV & Job Application Platform screenshot"
              label="AI CV & Job Application Platform"
            />
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-2">Built by {cvPlatform.builtBy}</span>
              <span className="text-sm text-foreground/80 group-hover:text-teal">
                View Case Study →
              </span>
            </div>
          </Link>

          <div className="flex flex-col gap-4 rounded-2xl border border-border p-7">
            <span className="font-display text-lg font-semibold text-foreground">{sdk.name}</span>
            <p className="text-sm leading-relaxed text-muted">{sdk.description}</p>
            {sdk.technology && (
              <div className="flex flex-wrap gap-2">
                {sdk.technology.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            )}
            <span className="mt-auto text-xs text-muted-2">Built by {sdk.builtBy}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
