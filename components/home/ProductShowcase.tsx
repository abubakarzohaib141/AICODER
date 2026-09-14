import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { ScreenshotFrame } from "@/components/system/ScreenshotFrame";
import { products } from "@/lib/content/products";

function ProjectCard({ product }: { product: (typeof products)[number] }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border p-7">
      <ScreenshotFrame
        src={product.screenshots?.[0]}
        alt={`${product.name} screenshot`}
        label={product.name}
        aspect={product.screenshotAspect}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      />
      <div className="flex flex-col gap-1.5">
        <span className="font-mono-label text-[11px] uppercase tracking-wide text-teal">
          {product.category}
        </span>
        <span className="font-display text-lg font-semibold text-foreground">{product.name}</span>
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
  );
}

export function ProductShowcase() {
  const featured = products.find((p) => p.featured) ?? products[0];
  const rest = products.filter((p) => p.pinned && p.slug !== featured.slug);
  const [wide, ...grid] = rest;

  return (
    <section id="work" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Our work"
          title="What We've Built"
          description="Real AI systems and products built by the AI Coders team."
        />

        <div className="flex flex-col gap-6">
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
                aspect={featured.screenshotAspect}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>

          {wide && (
            <div className="grid gap-6 overflow-hidden rounded-2xl border border-border p-6 sm:grid-cols-[1.1fr_1fr] sm:p-7">
              <div className="flex flex-col gap-3">
                <span className="font-mono-label text-[11px] uppercase tracking-wide text-teal">
                  {wide.category}
                </span>
                <span className="font-display text-xl font-bold text-foreground">{wide.name}</span>
                <p className="text-sm leading-relaxed text-muted">{wide.description}</p>
                <div className="mt-auto flex items-center justify-between pt-4">
                  <span className="text-xs text-muted-2">Built by {wide.builtBy}</span>
                  {wide.links.length > 0 && (
                    <a
                      href={wide.links[0].href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-foreground transition-colors hover:text-teal"
                    >
                      {wide.links[0].label} →
                    </a>
                  )}
                </div>
              </div>
              <ScreenshotFrame
                src={wide.screenshots?.[0]}
                alt={`${wide.name} screenshot`}
                label={wide.name}
                aspect={wide.screenshotAspect ?? "4/3"}
                sizes="(min-width: 640px) 45vw, 100vw"
              />
            </div>
          )}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {grid.map((product) => (
              <ProjectCard key={product.slug} product={product} />
            ))}
          </div>

          <MoreWork excludeSlugs={[featured.slug, ...rest.map((p) => p.slug)]} />
        </div>
      </Container>
    </section>
  );
}

function MoreWork({ excludeSlugs }: { excludeSlugs: string[] }) {
  const more = products.filter((p) => !excludeSlugs.includes(p.slug)).slice(0, 6);
  if (more.length === 0) return null;

  return (
    <div className="flex flex-col gap-1 rounded-2xl border border-border pt-2">
      <div className="flex items-baseline justify-between px-6 pb-4 pt-4">
        <span className="font-mono-label text-[11px] uppercase tracking-wide text-muted-2">
          More work
        </span>
        <Link
          href="/products"
          className="text-sm text-foreground/80 transition-colors hover:text-teal"
        >
          View all {products.length} projects →
        </Link>
      </div>
      <div className="flex flex-col divide-y divide-border border-t border-border">
        {more.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="group flex items-center gap-4 px-6 py-4 transition-colors hover:bg-background-elevated-2/40"
          >
            <div className="relative hidden h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-background-elevated-2 sm:flex">
              {product.screenshots?.[0] ? (
                <Image
                  src={product.screenshots[0]}
                  alt=""
                  fill
                  sizes="56px"
                  className="object-cover object-top"
                />
              ) : (
                <span className="font-mono-label text-[10px] uppercase text-muted-2">
                  {product.category.split(" ")[0]}
                </span>
              )}
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-0.5">
              <span className="truncate font-display text-sm font-semibold text-foreground group-hover:text-teal">
                {product.name}
              </span>
              <span className="truncate text-xs text-muted-2">{product.category}</span>
            </div>
            <span className="hidden shrink-0 text-xs text-muted-2 sm:block">
              Built by {product.builtBy}
            </span>
            <span className="shrink-0 text-sm text-foreground/70 transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
