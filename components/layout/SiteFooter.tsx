import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LogoMark } from "@/components/ui/LogoMark";
import { BookCallButton } from "@/components/booking/BookCallButton";
import { CopyEmailChip } from "@/components/ui/CopyEmailChip";
import { siteConfig } from "@/lib/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-10 py-14 sm:py-16">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex max-w-sm flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <LogoMark className="h-7 w-7" />
              <span className="font-display text-base font-semibold tracking-tight">
                AI CODERS
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted">{siteConfig.description}</p>
            <div className="flex flex-wrap items-center gap-3">
              <BookCallButton variant="secondary" className="w-fit !px-5 !py-2.5 text-sm">
                Book a Call
              </BookCallButton>
              <CopyEmailChip />
            </div>
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
