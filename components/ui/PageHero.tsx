"use client";

import { Container } from "@/components/ui/Container";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUpFast, staggerFast } from "@/lib/motion";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border pb-14 pt-20 sm:pt-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(245,194,66,0.16),rgba(245,194,66,0)_70%)]"
      />
      <Container className="relative">
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerFast}
          className="flex flex-col gap-5"
        >
          <motion.span
            variants={fadeUpFast}
            className="font-mono-label w-fit rounded-full border border-teal/30 bg-teal/[0.06] px-3.5 py-1.5 text-[11px] uppercase tracking-wide text-teal"
          >
            {eyebrow}
          </motion.span>
          <motion.h1
            variants={fadeUpFast}
            className="max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              variants={fadeUpFast}
              className="max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            >
              {description}
            </motion.p>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
