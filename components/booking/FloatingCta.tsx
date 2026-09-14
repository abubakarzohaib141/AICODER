"use client";

import { useEffect, useState } from "react";
import { useBooking } from "./BookingProvider";

export function FloatingCta() {
  const [scrolled, setScrolled] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const { open } = useBooking();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 480);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!scrolled || dismissed) return null;

  return (
    <div className="fixed bottom-[22px] left-[22px] right-[22px] z-[60] ml-auto flex max-w-[400px] items-center gap-3 rounded-full border border-white/[0.08] bg-foreground/90 px-4 py-3.5 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.35)] backdrop-blur-md">
      <div className="flex min-w-0 flex-1 flex-col">
        <span className="truncate text-[12.5px] font-semibold text-background">
          Have a system in mind?
        </span>
        <span className="text-[11px] text-dark-muted">Let&apos;s build it.</span>
      </div>
      <button
        type="button"
        onClick={open}
        className="bg-gradient-brand shrink-0 whitespace-nowrap rounded-full px-4 py-2.5 text-[12.5px] font-bold text-white"
      >
        Book a call →
      </button>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        aria-label="Dismiss"
        className="shrink-0 px-0.5 text-base leading-none text-dark-muted"
      >
        ×
      </button>
    </div>
  );
}
