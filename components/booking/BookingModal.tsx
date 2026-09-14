"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Script from "next/script";
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

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Book a call with AI Coders"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" />

      <div
        ref={panelRef}
        className="relative flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-border bg-background-elevated shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <div>
            <p className="font-display text-lg font-semibold text-foreground">Book a Call</p>
            <p className="mt-0.5 text-sm text-muted">
              Tell us what you&apos;re building. 20 minutes, no pressure.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted transition-colors hover:bg-background-elevated-2 hover:text-foreground"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M2 2L14 14M14 2L2 14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {hasCalendly ? (
            <>
              <div
                className="calendly-inline-widget"
                data-url={siteConfig.calendlyUrl}
                style={{ minWidth: "320px", height: "630px" }}
              />
              <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
            </>
          ) : (
            <div className="flex flex-col items-center gap-4 px-6 py-14 text-center">
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
                className="mt-2 inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
              >
                Go to contact form
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
