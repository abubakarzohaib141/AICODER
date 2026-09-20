"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useBooking } from "./BookingProvider";
import { tapScale } from "@/lib/motion";

type Variant = "primary" | "secondary" | "ghost" | "orange" | "teal";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-150 whitespace-nowrap cursor-pointer";

const variants: Record<Variant, string> = {
  primary: "bg-foreground text-background hover:opacity-85",
  secondary:
    "border border-border-strong text-foreground hover:border-blue hover:bg-background-elevated",
  ghost: "text-foreground/80 hover:text-foreground",
  orange: "bg-orange text-white hover:opacity-90",
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
      className={`${base} ${variants[variant]} ${className}`}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={tapScale}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {children}
    </motion.button>
  );
}
