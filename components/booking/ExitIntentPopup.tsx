"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { AnimatePresence, motion } from "framer-motion";
import { easeOut } from "@/lib/motion";
import { siteConfig } from "@/lib/content/site";
import { useBooking } from "./BookingProvider";

const SESSION_KEY = "aic-exit-popup-shown";

export function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const { open: openBooking } = useBooking();
  const hasCalendly = siteConfig.calendlyUrl.length > 0;
  const widgetRef = useRef<HTMLDivElement>(null);

  // The popup mounts long after widget.js has already loaded (it only fires
  // on exit-intent/scroll/timer), so Calendly's own load-time DOM scan never
  // sees this div — initialize it manually once it's visible.
  useEffect(() => {
    if (!visible || !hasCalendly) return;
    let cancelled = false;
    function init() {
      if (cancelled) return;
      const Calendly = (window as unknown as { Calendly?: { initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void } }).Calendly;
      if (Calendly && widgetRef.current) {
        widgetRef.current.innerHTML = "";
        Calendly.initInlineWidget({
          url: `${siteConfig.calendlyUrl}?hide_event_type_details=1&hide_gdpr_banner=1`,
          parentElement: widgetRef.current,
        });
      } else {
        setTimeout(init, 200);
      }
    }
    init();
    return () => {
      cancelled = true;
    };
  }, [visible, hasCalendly]);

  useEffect(() => {
    let shown = false;
    try {
      shown = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      // sessionStorage unavailable; fall back to showing once per page load.
    }
    if (shown) return;

    function reveal() {
      if (shown) return;
      shown = true;
      setVisible(true);
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        // ignore
      }
    }

    // Trigger 1: exit intent — cursor leaves toward the browser chrome.
    function onMouseLeave(event: MouseEvent) {
      if (event.clientY <= 0) reveal();
    }
    document.addEventListener("mouseleave", onMouseLeave);

    // Trigger 2: reached (or very near) the bottom of the page.
    function onScroll() {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      if (total > 0 && scrolled / total > 0.92) reveal();
    }
    window.addEventListener("scroll", onScroll, { passive: true });

    // Trigger 3: guaranteed fallback — shows within 10s no matter what, so
    // every visitor sees the conversion prompt even if they never scroll
    // to the bottom or move toward the browser chrome.
    const fallbackTimer = setTimeout(reveal, 10000);

    return () => {
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
      clearTimeout(fallbackTimer);
    };
  }, []);

  function dismiss() {
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Before you go"
          className="fixed inset-0 z-[70] flex items-end justify-center p-4 sm:items-center sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: easeOut }}
            onClick={dismiss}
            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.3, ease: easeOut }}
            className="relative grid w-full max-w-3xl grid-cols-1 overflow-hidden rounded-2xl border-2 border-gold/40 bg-background-elevated shadow-[0_30px_70px_-20px_rgba(245,194,66,0.35)] md:max-h-[85vh] md:grid-cols-[1fr_1.15fr]"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(245,194,66,0.28),rgba(245,194,66,0)_70%)]"
            />
            <button
              type="button"
              onClick={dismiss}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-[8px] bg-background-elevated text-lg leading-none text-muted transition-colors hover:bg-background-elevated-2 hover:text-foreground"
            >
              ×
            </button>

            <div className="relative flex flex-col items-start gap-4 p-7 sm:p-8">
              <span className="font-mono-label flex items-center gap-1.5 rounded-full border border-[#e3b81f] bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground animate-pulse-dot" />
                Before you go
              </span>
              <h3 className="text-section text-2xl text-foreground">
                Have a Workflow Worth <span className="highlight-mark">Automating?</span>
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                Tell us what you&apos;re trying to build and we&apos;ll tell you honestly where AI
                can actually help — no pitch, just a straight answer. Pick a time on the right, or
                send us a quick brief instead.
              </p>
              <div className="flex items-center gap-2 rounded-lg border border-gold/30 bg-gold/[0.08] px-3 py-2 text-xs font-semibold text-foreground">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal-bright" />
                Free discovery call, no pressure, no obligation.
              </div>
              <Link
                href="/contact"
                onClick={dismiss}
                className="text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                Send a brief →
              </Link>
            </div>

            <div className="border-t border-border md:border-l md:border-t-0">
              {hasCalendly ? (
                <>
                  <div ref={widgetRef} style={{ minWidth: "280px", height: "420px" }} />
                  <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
                </>
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-4 px-6 py-14 text-center">
                  <p className="max-w-sm text-sm leading-relaxed text-muted">
                    Our calendar isn&apos;t wired up here yet. Book a call and we&apos;ll follow up
                    to find a time.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      dismiss();
                      openBooking();
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-foreground/25 bg-foreground px-5 py-3 text-sm font-semibold text-background shadow-[0_1px_1px_0_rgba(0,0,0,0.15),0_10px_22px_-10px_rgba(22,33,62,0.5)] transition-[filter] hover:brightness-125"
                  >
                    Book a Call
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
