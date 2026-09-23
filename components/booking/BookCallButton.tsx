"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useBooking } from "./BookingProvider";
import { tapScale } from "@/lib/motion";

type Variant = "primary" | "secondary" | "ghost" | "gold" | "teal";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[10px] px-5 py-3 text-sm font-semibold transition-[filter,box-shadow] duration-200 whitespace-nowrap cursor-pointer";

const variants: Record<Variant, string> = {
  primary:
    "bg-foreground bg-[linear-gradient(rgba(255,255,255,0.16),rgba(255,255,255,0))] text-background border border-foreground/25 shadow-[0_1px_1px_0_rgba(0,0,0,0.15),0_10px_22px_-10px_rgba(22,33,62,0.5)] hover:brightness-125 hover:shadow-[0_1px_1px_0_rgba(0,0,0,0.15),0_14px_28px_-8px_rgba(22,33,62,0.55),0_0_0_4px_rgba(247,197,74,0.2)]",
  secondary:
    "border border-border-strong text-foreground hover:border-teal hover:bg-background-elevated",
  ghost: "text-foreground/80 hover:text-foreground",
  gold: "bg-gold bg-[linear-gradient(rgba(255,255,255,0.42),rgba(255,255,255,0))] border border-[#e3b81f] text-foreground shadow-[0_1px_1px_0_rgba(93,78,19,0.12),0_8px_18px_-10px_rgba(180,130,13,0.5),inset_0_1px_0_0_rgba(255,255,255,0.6)] hover:brightness-105",
  teal: "bg-teal text-white hover:opacity-90",
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
    <motion.button
      type="button"
      onClick={open}
      className={`group ${base} ${variants[variant]} ${className}`}
      whileHover={{ y: -2, scale: 1.015 }}
      whileTap={tapScale}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {children}
      {(variant === "gold" || variant === "primary") && (
        <span aria-hidden="true" className="transition-transform duration-150 group-hover:translate-x-0.5">
          →
        </span>
      )}
    </motion.button>
  );
}
