import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { products } from "@/lib/content/products";

export const metadata: Metadata = {
  title: "Products",
  description: "Real AI products built by the AI Coders engineering team.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Products We've Built"
        description="Real AI products built by our engineering team."
      />
      <section className="py-16 sm:py-24">
        <Container>
        <StaggerGroup className="grid gap-6 sm:grid-cols-2">
          {products.map((product) => (
            <StaggerItem key={product.slug} hover>
              <Link
                href={`/products/${product.slug}`}
                className="flex h-full flex-col justify-between gap-10 rounded-2xl border border-border bg-background-elevated p-8 transition-colors hover:border-teal/50 hover:shadow-[0_20px_40px_-18px_rgba(20,125,138,0.2)]"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono-label text-xs text-muted-2">{product.index}</span>
                    <span className="font-mono-label text-[11px] uppercase tracking-wide text-teal-bright">
                      {product.category}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-foreground">
                    {product.name}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted">{product.description}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-2">Engineered by AI Coders</span>
                  <span className="text-sm text-foreground/80 transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
        </Container>
      </section>
    </>
  );
}
