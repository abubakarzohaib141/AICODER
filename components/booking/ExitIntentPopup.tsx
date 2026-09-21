"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { easeOut, tapScale } from "@/lib/motion";
import { useBooking } from "./BookingProvider";

const SESSION_KEY = "aic-exit-popup-shown";

export function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const { open: openBooking } = useBooking();

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

    // Trigger 2: engaged scroll — reached at least 60% down the page.
    function onScroll() {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      if (total > 0 && scrolled / total > 0.6) reveal();
    }
    window.addEventListener("scroll", onScroll, { passive: true });

    // Trigger 3: fallback — genuinely still reading after 45s.
    const timer = setTimeout(reveal, 45000);

    return () => {
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
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
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-border bg-background-elevated shadow-2xl"
          >
            <button
              type="button"
              onClick={dismiss}
              aria-label="Close"
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-[8px] text-lg leading-none text-muted transition-colors hover:bg-background-elevated-2 hover:text-foreground"
            >
              ×
            </button>

            <div className="flex flex-col items-start gap-4 p-7 sm:p-8">
              <span className="font-mono-label rounded-full border border-teal/30 bg-teal/[0.06] px-3 py-1 text-[10px] uppercase tracking-wide text-teal">
                Before you go
              </span>
              <h3 className="text-section text-2xl text-foreground">
                Have a Workflow Worth <span className="highlight-mark-teal">Automating?</span>
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                Tell us what you&apos;re trying to build and we&apos;ll tell you honestly where AI
                can actually help — no pitch, just a straight answer.
              </p>
              <div className="flex w-full flex-wrap items-center gap-3 pt-1">
                <motion.button
                  type="button"
                  onClick={() => {
                    dismiss();
                    openBooking();
                  }}
                  whileHover={{ y: -2 }}
                  whileTap={tapScale}
                  className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-foreground/25 bg-foreground px-5 py-3 text-sm font-semibold text-background shadow-[0_1px_1px_0_rgba(0,0,0,0.15),0_10px_22px_-10px_rgba(22,33,62,0.5)] transition-[filter] hover:brightness-125"
                >
                  Book a Call
                </motion.button>
                <Link
                  href="/contact"
                  onClick={dismiss}
                  className="text-sm font-medium text-muted transition-colors hover:text-foreground"
                >
                  Send a brief →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
