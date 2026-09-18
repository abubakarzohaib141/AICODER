"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { viewport } from "@/lib/motion";
import { process } from "@/lib/content/technologies";

const accents = ["#25d366", "#4f7ff7", "#2b1bba"];

export function HowWeWork() {
  return (
    <section className="relative overflow-hidden border-t border-border py-20 sm:py-28">
      <div className="section-atmosphere-grid" aria-hidden="true" />
      <div className="section-atmosphere" aria-hidden="true">
        <span />
        <span />
      </div>
      <span
        aria-hidden="true"
        className="ambient-orange"
        style={{ width: 480, height: 480, bottom: "-14%", right: "-6%" }}
      />
      <Container className="relative flex flex-col gap-16">
        <Reveal>
          <SectionHeading eyebrow="How we work" title="From Problem to Production" />
        </Reveal>

        <StaggerGroup className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewport}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 right-0 top-6 hidden h-px bg-border lg:block"
          />
          {process.map((step, i) => (
            <StaggerItem key={step.number} className="relative flex flex-col gap-4">
              <motion.span
                className="font-display text-4xl font-bold leading-none"
                initial={{ color: "#928a84" }}
                whileInView={{ color: accents[i % accents.length] }}
                viewport={viewport}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                {step.number}
              </motion.span>
              <p className="font-display text-base font-semibold text-foreground">{step.name}</p>
              <p className="text-sm leading-relaxed text-muted">{step.description}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
