import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { ScreenshotFrame } from "@/components/system/ScreenshotFrame";
import { Reveal } from "@/components/motion/Reveal";
import { FinalCta } from "@/components/home/FinalCta";
import { products } from "@/lib/content/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return { title: product.name, description: product.description };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <>
      <section className="relative overflow-hidden border-b border-border pb-14 pt-20 sm:pt-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(245,194,66,0.16),rgba(245,194,66,0)_70%)]"
        />
        <Reveal>
        <Container className="relative flex flex-col gap-5">
          <Link href="/products" className="text-sm text-muted transition-colors hover:text-foreground">
            ← All products
          </Link>
          <span className="font-mono-label w-fit rounded-full border border-teal/30 bg-teal/[0.06] px-3.5 py-1.5 text-[11px] uppercase tracking-wide text-teal">
            {product.category}
          </span>
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            {product.title}
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {product.description}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            {product.links.map((link) => (
              <Button key={link.href} href={link.href} variant="primary" external>
                {link.label}
              </Button>
            ))}
            <span className="text-sm text-muted">Engineered by AI Coders</span>
          </div>
        </Container>
        </Reveal>
      </section>

      <section className="py-14 sm:py-20">
        <Reveal>
        <Container className="flex flex-col gap-10">
          {product.screenshots && product.screenshots.length > 1 ? (
            <div className="grid gap-6 sm:grid-cols-2">
              {product.screenshots.map((src) => (
                <ScreenshotFrame
                  key={src}
                  src={src}
                  alt={`${product.name} screenshot`}
                  label={product.name}
                  aspect={product.screenshotAspect ?? "16/10"}
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              ))}
            </div>
          ) : (
            <ScreenshotFrame
              src={product.screenshots?.[0]}
              alt={`${product.name} screenshot`}
              label={product.name}
              aspect={product.screenshotAspect ?? "16/9"}
            />
          )}

          {product.technology && (
            <div className="flex flex-col gap-6">
              <span className="font-mono-label text-xs uppercase tracking-wide text-muted-2">
                Technology
              </span>
              <div className="flex flex-wrap gap-2">
                {product.technology.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </div>
          )}
        </Container>
        </Reveal>
      </section>
      <FinalCta />
    </>
  );
}
