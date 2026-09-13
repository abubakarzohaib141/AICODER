import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LogoMark } from "@/components/ui/LogoMark";
import { siteConfig } from "@/lib/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-10 py-14 sm:py-16">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex max-w-xs flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <LogoMark className="h-6 w-6" />
              <span className="font-display text-sm font-semibold tracking-tight">AI CODERS</span>
            </div>
            <p className="font-mono-label text-xs uppercase tracking-[0.14em] text-muted">
              {siteConfig.tagline}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:flex sm:gap-16">
            <div className="flex flex-col gap-3">
              <span className="font-mono-label text-xs uppercase tracking-wide text-muted-2">
                Navigate
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

            {siteConfig.socials.length > 0 && (
              <div className="flex flex-col gap-3">
                <span className="font-mono-label text-xs uppercase tracking-wide text-muted-2">
                  Social
                </span>
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
            </div>
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
