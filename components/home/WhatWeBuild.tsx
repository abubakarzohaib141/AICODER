"use client";

import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
  useMotionValueEvent,
} from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { easeOut, stagger, fadeUp } from "@/lib/motion";
import { services, type Service } from "@/lib/content/services";

const cardColors: Record<string, string> = {
  "ai-agents": "#1c98a6",
  "agentic-ai": "#2b1bba",
  automation: "#4f7ff7",
  "ai-product-development": "#ff8800",
  "custom-ai-engineering": "#147d8a",
};

function ServiceIcon({ slug }: { slug: string }) {
  if (slug === "ai-agents") {
    return (
      <span className="relative block h-[18px] w-[18px] rounded-full border-2 border-white">
        <span className="absolute inset-[4px] rounded-full bg-white" />
      </span>
    );
  }
  if (slug === "agentic-ai") {
    return (
      <span className="relative block h-4 w-5">
        <span className="absolute left-[7px] top-0 h-1.5 w-1.5 rounded-full bg-white" />
        <span className="absolute bottom-0 left-0 h-1.5 w-1.5 rounded-full bg-white" />
        <span className="absolute bottom-0 right-0 h-1.5 w-1.5 rounded-full bg-white" />
      </span>
    );
  }
  if (slug === "automation") {
    return <span className="block h-[18px] w-[18px] rounded-full border-[2.5px] border-white" />;
  }
  if (slug === "ai-product-development") {
    return <span className="font-mono-label text-[15px] font-bold text-white">{"</>"}</span>;
  }
  return (
    <span className="relative block h-4 w-[18px]">
      <span className="absolute left-0 top-0 h-[13px] w-[13px] rounded-[4px] bg-white/55" />
      <span className="absolute bottom-0 right-0 h-[13px] w-[13px] rounded-[4px] bg-white" />
    </span>
  );
}

function BigCard({ service, color, animated = true }: { service: Service; color: string; animated?: boolean }) {
  return (
    <motion.div
      initial={animated ? "hidden" : undefined}
      animate={animated ? "show" : undefined}
      variants={animated ? stagger : undefined}
      className="relative flex w-full max-w-3xl flex-col gap-6 overflow-hidden rounded-[24px] border border-border p-8 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.5)] sm:p-12"
      style={{
        background: `radial-gradient(120% 140% at 100% 0%, ${color}22, transparent 60%), linear-gradient(160deg, var(--background-elevated), var(--background-elevated-2) 65%)`,
      }}
    >
      <motion.span
        variants={animated ? fadeUp : undefined}
        className="font-mono-label text-xs uppercase tracking-[0.18em] text-dark-muted"
      >
        {service.number}
      </motion.span>
      <motion.span
        variants={animated ? fadeUp : undefined}
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
        style={{ backgroundColor: color }}
      >
        <ServiceIcon slug={service.slug} />
      </motion.span>
      <motion.div variants={animated ? fadeUp : undefined} className="flex flex-col gap-3">
        <span className="font-display text-2xl font-extrabold text-dark-foreground sm:text-[32px]">
          {service.name}
        </span>
        <p className="max-w-lg text-[15px] leading-relaxed text-dark-muted sm:text-base">
          {service.description}
        </p>
      </motion.div>
      <motion.div variants={animated ? fadeUp : undefined} className="flex flex-wrap gap-2">
        {service.bullets.map((bullet) => (
          <span
            key={bullet}
            className="rounded-full border border-white/[0.18] bg-white/[0.06] px-3 py-1.5 text-[12.5px] text-dark-foreground"
          >
            {bullet}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
}

function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const total = services.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  // Spring-smoothed progress gives the transition weight and momentum instead
  // of snapping 1:1 with every wheel/trackpad tick.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 26,
    mass: 0.5,
  });

  // A normal wheel/trackpad scroll changes progress gradually, so the spring
  // gives it weight. But an instant jump (End key, scrollbar drag) would
  // otherwise leave the spring chasing a stale value for ~1s — snap it
  // straight there instead so the content never looks out of sync.
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (Math.abs(v - smoothProgress.get()) > 0.15) {
      smoothProgress.jump(v);
    }
  });

  useMotionValueEvent(smoothProgress, "change", (v) => {
    const idx = Math.min(total - 1, Math.max(0, Math.floor(v * total)));
    setActiveIndex((prev) => (prev === idx ? prev : idx));
  });

  // A few pixels of continuous drift tied to raw scroll, layered underneath
  // the discrete crossfade so the section still feels alive between swaps.
  const drift = useTransform(smoothProgress, (v) => {
    const seg = 1 / total;
    const local = ((v % seg) + seg) % seg;
    return (local / seg - 0.5) * 10;
  });

  const active = services[activeIndex];
  const color = cardColors[active.slug] ?? "#147d8a";

  return (
    <div ref={containerRef} style={{ height: `${total * 80}vh` }}>
      <div className="sticky top-20 flex h-[75vh] items-center justify-center px-5 py-8">
        <div className="relative flex w-full max-w-3xl items-center justify-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-8 -z-10 rounded-full blur-[90px] transition-colors duration-700"
            style={{ backgroundColor: color, opacity: 0.14 }}
          />
          <motion.div style={{ y: drift }} className="w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: easeOut }}
              >
                <BigCard service={active} color={color} />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function WhatWeBuild() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <SectionHeading
            eyebrow="What we build"
            title={
              <>
                From AI Ideas to <span className="text-orange">Working Systems</span>
              </>
            }
          />
        </Reveal>

        {reduceMotion ? (
          <StaggerGroup className="flex flex-col gap-6">
            {services.map((service) => (
              <StaggerItem key={service.slug} className="flex justify-center">
                <BigCard service={service} color={cardColors[service.slug] ?? "#147d8a"} animated={false} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        ) : (
          <ScrollStory />
        )}
      </Container>
    </section>
  );
}
