import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { ScreenshotFrame } from "@/components/system/ScreenshotFrame";
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
      <section className="border-b border-border pb-14 pt-20 sm:pt-28">
        <Container className="flex flex-col gap-5">
          <Link href="/products" className="text-sm text-muted transition-colors hover:text-foreground">
            ← All products
          </Link>
          <span className="font-mono-label text-xs uppercase tracking-[0.18em] text-orange">
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
              <Button key={link.href} href={link.href} external>
                {link.label}
              </Button>
            ))}
            <Link
              href={`/team/${product.builtBySlug}`}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Built by {product.builtBy} →
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container className="flex flex-col gap-10">
          {product.screenshots && product.screenshots.length > 1 ? (
            <div className="grid gap-6 sm:grid-cols-2">
              {product.screenshots.map((src) => (
                <ScreenshotFrame
                  key={src}
                  src={src}
                  alt={`${product.name} screenshot`}
                  label={product.name}
                  aspect="16/10"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              ))}
            </div>
          ) : (
            <ScreenshotFrame
              src={product.screenshots?.[0]}
              alt={`${product.name} screenshot`}
              label={product.name}
              aspect="16/9"
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
      </section>
    </>
  );
}
