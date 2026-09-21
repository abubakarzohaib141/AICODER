"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { tapScale } from "@/lib/motion";

type Variant = "primary" | "secondary" | "ghost" | "gold" | "teal";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[10px] px-5 py-3 text-sm font-semibold transition-colors duration-150 whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-foreground text-background border border-foreground/25 shadow-[0_1px_1px_0_rgba(0,0,0,0.15),0_10px_22px_-10px_rgba(22,33,62,0.5)] hover:brightness-125",
  secondary:
    "border border-border-strong text-foreground hover:border-teal hover:bg-background-elevated",
  ghost: "text-foreground/80 hover:text-foreground",
  gold: "bg-gold bg-[linear-gradient(rgba(255,255,255,0.42),rgba(255,255,255,0))] border border-[#e3b81f] text-foreground shadow-[0_1px_1px_0_rgba(93,78,19,0.12),0_8px_18px_-10px_rgba(180,130,13,0.5),inset_0_1px_0_0_rgba(255,255,255,0.6)] hover:brightness-105",
  teal: "bg-teal text-white hover:opacity-90",
};

const MotionLink = motion.create(Link);

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const hoverProps = { whileHover: { y: -2 }, whileTap: tapScale };
  if (external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...hoverProps}
      >
        {children}
      </motion.a>
    );
  }
  return (
    <MotionLink href={href} className={classes} {...hoverProps}>
      {children}
    </MotionLink>
  );
}
