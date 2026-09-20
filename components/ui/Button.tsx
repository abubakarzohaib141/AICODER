"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { tapScale } from "@/lib/motion";

type Variant = "primary" | "secondary" | "ghost" | "orange" | "teal";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-150 whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-foreground text-background hover:opacity-85",
  secondary:
    "border border-border-strong text-foreground hover:border-blue hover:bg-background-elevated",
  ghost: "text-foreground/80 hover:text-foreground",
  orange: "bg-orange text-white hover:opacity-90",
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
