import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LogoMark } from "@/components/ui/LogoMark";
import { BookCallButton } from "@/components/booking/BookCallButton";
import { CopyEmailChip } from "@/components/ui/CopyEmailChip";
import { siteConfig } from "@/lib/content/site";
import { products } from "@/lib/content/products";

const featuredProducts = products.filter((p) => p.pinned || p.featured).slice(0, 4);

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background-elevated">
      <Container className="flex flex-col gap-12 py-14 sm:py-16">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="col-span-2 flex flex-col gap-4 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <LogoMark className="h-7 w-7" />
              <span className="font-display text-base font-semibold tracking-tight text-foreground">
                AI CODERS
              </span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">{siteConfig.description}</p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <BookCallButton variant="secondary" className="w-fit !px-5 !py-2.5 text-sm">
                Book a Call
              </BookCallButton>
              <CopyEmailChip />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-mono-label text-xs uppercase tracking-wide text-muted-2">
              Company
            </span>
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {featuredProducts.length > 0 && (
            <div className="flex flex-col gap-3">
              <span className="font-mono-label text-xs uppercase tracking-wide text-muted-2">
                Systems
              </span>
              {featuredProducts.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {product.name}
                </Link>
              ))}
            </div>
          )}

          <div className="flex flex-col gap-3">
            <span className="font-mono-label text-xs uppercase tracking-wide text-muted-2">
              Legal
            </span>
            {siteConfig.footerLegal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            {siteConfig.socials.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-border pt-8 text-xs text-muted-2 sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} AI Coders. All rights reserved.</span>
          <span>{siteConfig.domain}</span>
        </div>
      </Container>
    </footer>
  );
}
