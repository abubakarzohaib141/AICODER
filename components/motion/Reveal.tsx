"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeUp, hoverLift, stagger, viewport } from "@/lib/motion";

export function Reveal({
  children,
  className,
  as = "div",
  id,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
  id?: string;
}) {
  const Comp = motion[as];
  return (
    <Comp
      id={id}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={fadeUp}
    >
      {children}
    </Comp>
  );
}

export function StaggerGroup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={stagger}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      {...(hover ? { whileHover: hoverLift, transition: { duration: 0.2 } } : {})}
    >
      {children}
    </motion.div>
  );
}
