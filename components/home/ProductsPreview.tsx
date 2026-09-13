import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { products } from "@/lib/content/products";

export function ProductsPreview() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrowNumber="02"
            eyebrow="Products we've built"
            title="Real AI products built by our engineering team."
          />
          <Link
            href="/products"
            className="whitespace-nowrap text-sm text-muted transition-colors hover:text-foreground"
          >
            View all products →
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group flex flex-col justify-between gap-8 rounded-2xl border border-border bg-background-elevated/40 p-7 transition-colors hover:border-blue/60"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono-label text-xs text-muted-2">{product.index}</span>
                  <span className="font-mono-label text-[11px] uppercase tracking-wide text-teal-bright">
                    {product.category}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">{product.name}</h3>
                <p className="text-sm leading-relaxed text-muted">{product.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-2">Built by {product.builtBy}</span>
                <span className="text-sm text-foreground/80 transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
