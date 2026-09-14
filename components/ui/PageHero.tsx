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
    <section className="border-b border-border pb-14 pt-20 sm:pt-28">
      <Container>
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerFast}
          className="flex flex-col gap-5"
        >
          <motion.span
            variants={fadeUpFast}
            className="font-mono-label text-xs uppercase tracking-[0.18em] text-orange"
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
