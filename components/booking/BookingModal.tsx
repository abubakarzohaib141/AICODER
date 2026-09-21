"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Script from "next/script";
import { AnimatePresence, motion } from "framer-motion";
import { easeOut } from "@/lib/motion";
import { siteConfig } from "@/lib/content/site";

export function BookingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const hasCalendly = siteConfig.calendlyUrl.length > 0;

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Book a call with AI Coders"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: easeOut }}
            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
          />

          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, scale: 0.97, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.25, ease: easeOut }}
            className="relative flex h-[min(720px,90vh)] w-[min(760px,100%)] flex-col overflow-hidden rounded-[20px] bg-background-elevated shadow-2xl"
          >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <p className="font-display text-sm font-bold text-foreground">
            Book a call with AI Coders
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-8 w-8 items-center justify-center rounded-[8px] text-lg leading-none text-muted transition-colors hover:bg-background-elevated-2 hover:text-foreground"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {hasCalendly ? (
            <>
              <div
                className="calendly-inline-widget"
                data-url={`${siteConfig.calendlyUrl}?hide_event_type_details=1&hide_gdpr_banner=1`}
                style={{ minWidth: "320px", height: "100%" }}
              />
              <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
            </>
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-4 px-6 py-14 text-center">
              <span className="font-mono-label text-xs uppercase tracking-wide text-muted-2">
                Booking link coming soon
              </span>
              <p className="max-w-sm text-base leading-relaxed text-muted">
                Our calendar isn&apos;t wired up here yet. Send us a message instead and
                we&apos;ll get back to you to find a time.
              </p>
              <Link
                href="/contact"
                onClick={onClose}
                className="mt-2 inline-flex items-center justify-center rounded-[10px] bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                Go to contact form
              </Link>
            </div>
          )}
        </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
