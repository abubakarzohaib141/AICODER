"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { siteConfig } from "@/lib/content/site";
import { useBooking } from "@/components/booking/BookingProvider";

const emptySubscribe = () => () => {};

function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const mounted = useMounted();
  const { open: openBooking } = useBooking();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-[5px]"
      >
        <span
          className={`h-px w-5 bg-foreground transition-transform duration-200 ${
            open ? "translate-y-[3px] rotate-45" : ""
          }`}
        />
        <span
          className={`h-px w-5 bg-foreground transition-opacity duration-200 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`h-px w-5 bg-foreground transition-transform duration-200 ${
            open ? "-translate-y-[3px] -rotate-45" : ""
          }`}
        />
      </button>

      {open &&
        mounted &&
        createPortal(
          <div className="fixed inset-0 z-40 flex flex-col bg-background pt-24">
            <nav className="flex flex-col gap-1 px-6">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border py-4 font-display text-2xl font-medium text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto px-6 pb-10">
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  openBooking();
                }}
                className="flex w-full items-center justify-center rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background"
              >
                Book a Call
              </button>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
