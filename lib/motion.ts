import { Variants, Transition } from "framer-motion";

export const easeOut: Transition["ease"] = [0.16, 1, 0.3, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

// Directional entrances for grid layouts — cards arriving from a couple of
// different sides reads as more considered than everything fading up
// identically. Kept restrained: modest offsets, no rotation/scale gimmicks.
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -22 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: easeOut } },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 22 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: easeOut } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4, ease: easeOut } },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

// Faster variants for the hero: it must feel immediate on load, not like a scroll reveal.
export const fadeUpFast: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: easeOut } },
};

export const staggerFast: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

export const viewport = { once: true, margin: "-80px" };

export const tapScale = { scale: 0.97 };
export const hoverLift = { y: -4 };
