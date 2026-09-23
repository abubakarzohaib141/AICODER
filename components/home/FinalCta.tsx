"use client";

import Link from "next/link";
import Script from "next/script";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/lib/content/site";

export function FinalCta() {
  const hasCalendly = siteConfig.calendlyUrl.length > 0;

  return (
    <section className="bg-dark-background py-24 sm:py-32">
      <Container>
        <div className="relative grid items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-[calc(41.6%-1px)] hidden w-px bg-white/10 lg:block"
          >
            <motion.span
              className="absolute left-1/2 h-8 w-px -translate-x-1/2 bg-gold"
              animate={{ top: ["4%", "88%", "4%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <Reveal direction="left" className="flex flex-col items-start gap-6 text-left">
            <h2 className="text-section max-w-lg text-3xl text-dark-foreground sm:text-5xl">
              Have a System Worth <span className="highlight-mark text-foreground">Building?</span>
            </h2>
            <p className="max-w-md text-base leading-relaxed text-dark-muted sm:text-lg">
              Tell us what you&apos;re trying to build or automate. We&apos;ll explore where AI
              agents, automation or custom engineering create real value.
            </p>
            <Link
              href="/contact"
              className="text-sm font-medium text-dark-muted transition-colors hover:text-dark-foreground"
            >
              Or send a message →
            </Link>
          </Reveal>

          <Reveal direction="right" className="relative">
            {hasCalendly ? (
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_30px_60px_-24px_rgba(0,0,0,0.5)]">
                <div
                  className="calendly-inline-widget"
                  data-url={`${siteConfig.calendlyUrl}?hide_event_type_details=1&hide_gdpr_banner=1`}
                  style={{ minWidth: "320px", height: "640px" }}
                />
                <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
              </div>
            ) : (
              <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-14 text-center">
                <span className="font-mono-label text-xs uppercase tracking-wide text-dark-muted">
                  Booking link coming soon
                </span>
                <p className="max-w-sm text-sm leading-relaxed text-dark-muted">
                  Our calendar isn&apos;t wired up here yet. Send us a message instead.
                </p>
                <Link
                  href="/contact"
                  className="mt-2 inline-flex items-center justify-center rounded-[10px] bg-dark-foreground px-6 py-3 text-sm font-semibold text-dark-background transition-opacity hover:opacity-90"
                >
                  Go to contact form
                </Link>
              </div>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
