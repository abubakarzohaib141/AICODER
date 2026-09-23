"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { viewport } from "@/lib/motion";
import { process } from "@/lib/content/technologies";

const accents = ["#147d8a", "#c2660b", "#16213e"];

export function HowWeWork() {
  return (
    <section className="relative overflow-hidden border-t border-border py-20 sm:py-28">
      <Container className="relative flex flex-col gap-16">
        <Reveal>
          <SectionHeading eyebrow="How we work" title="From Problem to Production" />
        </Reveal>

        <StaggerGroup className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
          <div className="absolute left-0 right-0 top-[7px] hidden h-px bg-border-strong lg:block" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewport}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 right-0 top-[6px] hidden h-[2px] bg-[linear-gradient(90deg,#147d8a,#c2660b_50%,#16213e)] lg:block"
          />
          {process.map((step, i) => (
            <StaggerItem key={step.number} className="relative flex flex-col gap-4">
              <span
                className="hidden h-3.5 w-3.5 rounded-full border-2 border-background-elevated lg:block"
                style={{ backgroundColor: accents[i % accents.length] }}
              />
              <motion.span
                className="font-display text-4xl font-bold leading-none"
                initial={{ color: "#8890a0" }}
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
