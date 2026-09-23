"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeUp, fadeInLeft, fadeInRight, hoverLift, stagger, viewport } from "@/lib/motion";

const directionVariants = { up: fadeUp, left: fadeInLeft, right: fadeInRight };

export function Reveal({
  children,
  className,
  as = "div",
  id,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
  id?: string;
  direction?: "up" | "left" | "right";
}) {
  const Comp = motion[as];
  return (
    <Comp
      id={id}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={directionVariants[direction]}
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
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  direction?: "up" | "left" | "right";
}) {
  return (
    <motion.div
      className={className}
      variants={directionVariants[direction]}
      {...(hover ? { whileHover: hoverLift, transition: { duration: 0.2 } } : {})}
    >
      {children}
    </motion.div>
  );
}
