import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { ScreenshotFrame } from "@/components/system/ScreenshotFrame";
import { products } from "@/lib/content/products";

export function ProductShowcase() {
  const featured = products.find((p) => p.featured) ?? products[0];
  const rest = products.filter((p) => p.pinned && p.slug !== featured.slug);

  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Our work"
          title="What We've Built"
          description="Real AI systems and products built by the AI Coders team."
        />

        <div className="grid gap-6 overflow-hidden rounded-3xl border border-border bg-background-elevated-2/40 p-2 lg:grid-cols-2 lg:p-3">
          <div className="flex flex-col gap-8 p-6 sm:p-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <span className="font-display text-2xl font-bold text-foreground">
                  {featured.name}
                </span>
                <span className="font-mono-label text-[11px] uppercase tracking-wide text-muted-2">
                  {featured.category}
                </span>
              </div>
              <p className="max-w-sm text-base leading-relaxed text-muted">
                {featured.description}
              </p>
            </div>

            {featured.technology && (
              <div className="flex flex-wrap gap-2">
                {featured.technology.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            )}

            <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
              <span className="text-sm text-muted-2">Built by {featured.builtBy}</span>
              <div className="flex flex-wrap gap-4">
                {featured.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith("/") ? undefined : "_blank"}
                    rel={link.href.startsWith("/") ? undefined : "noopener noreferrer"}
                    className="text-sm font-medium text-foreground transition-colors hover:text-teal"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="p-4 sm:p-6">
            <ScreenshotFrame
              src={featured.screenshots?.[0]}
              alt={`${featured.name} screenshot`}
              label={featured.name}
            />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((product) => (
            <div
              key={product.slug}
              className="flex flex-col gap-4 rounded-2xl border border-border p-7"
            >
              <ScreenshotFrame
                src={product.screenshots?.[0]}
                alt={`${product.name} screenshot`}
                label={product.name}
              />
              <div className="flex flex-col gap-1.5">
                <span className="font-mono-label text-[11px] uppercase tracking-wide text-teal">
                  {product.category}
                </span>
                <span className="font-display text-lg font-semibold text-foreground">
                  {product.name}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted">{product.description}</p>
              <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-2">
                <span className="text-xs text-muted-2">Built by {product.builtBy}</span>
                {product.links.length > 0 ? (
                  <a
                    href={product.links[0].href}
                    target={product.links[0].href.startsWith("/") ? undefined : "_blank"}
                    rel={product.links[0].href.startsWith("/") ? undefined : "noopener noreferrer"}
                    className="text-sm text-foreground/80 transition-colors hover:text-teal"
                  >
                    {product.links[0].label} →
                  </a>
                ) : (
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-sm text-foreground/80 transition-colors hover:text-teal"
                  >
                    Learn more →
                  </Link>
                )}
              </div>
            </div>
          ))}

          <Link
            href="/products"
            className="flex min-h-[220px] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border-strong p-7 text-center transition-colors hover:border-teal/50"
          >
            <span className="font-mono-label text-[11px] uppercase tracking-wide text-muted-2">
              More work
            </span>
            <span className="text-sm text-muted">
              This is a curated selection — see the full list of {products.length} projects.
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
