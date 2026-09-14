"use client";

import { ReactNode } from "react";
import { useBooking } from "./BookingProvider";

type Variant = "primary" | "secondary" | "ghost" | "inverse";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-150 whitespace-nowrap cursor-pointer";

const variants: Record<Variant, string> = {
  primary: "bg-foreground text-background hover:opacity-85",
  secondary:
    "border border-border-strong text-foreground hover:border-blue hover:bg-background-elevated",
  ghost: "text-foreground/80 hover:text-foreground",
  inverse: "bg-dark-foreground text-dark-background hover:opacity-90",
};

export function BookCallButton({
  children,
  variant = "primary",
  className = "",
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const { open } = useBooking();

  return (
    <button type="button" onClick={open} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}
