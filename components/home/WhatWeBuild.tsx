"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
  useMotionValueEvent,
  type MotionValue,
} from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { stagger, fadeUp } from "@/lib/motion";
import { services, type Service } from "@/lib/content/services";

const cardColors: Record<string, string> = {
  "ai-agents": "#7bc05a",
  "ai-automation": "#2b1bba",
  automation: "#4f7ff7",
  "ai-product-development": "#ff8800",
};

function ServiceIcon({ slug }: { slug: string }) {
  if (slug === "ai-agents") {
    return (
      <span className="relative block h-[18px] w-[18px] rounded-full border-2 border-white">
        <span className="absolute inset-[4px] rounded-full bg-white" />
      </span>
    );
  }
  if (slug === "ai-automation") {
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
  return <span className="font-mono-label text-[15px] font-bold text-white">{"</>"}</span>;
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

// Renders one system inside the shared stack. Every card occupies the exact
// same central cell; only opacity/scale/blur/y (driven off scroll distance
// from this card's "turn") separate the active one from its neighbors, so
// the focal point never shifts left or right as the story progresses.
function StoryCard({
  progress,
  index,
  total,
  service,
  color,
}: {
  progress: MotionValue<number>;
  index: number;
  total: number;
  service: Service;
  color: string;
}) {
  const distance = useTransform(progress, (v) => v * total - (index + 0.5));
  const opacity = useTransform(distance, [-1, -0.5, 0, 0.5, 1], [0, 1, 1, 1, 0]);
  const scale = useTransform(distance, [-1, 0, 1], [0.92, 1, 0.92]);
  const y = useTransform(distance, [-1, 0, 1], [-64, 0, 64]);
  const blurPx = useTransform(distance, [-1, 0, 1], [7, 0, 7]);
  const filter = useTransform(blurPx, (b) => `blur(${b}px)`);
  const zIndex = useTransform(distance, (d) => Math.round(50 - Math.abs(d) * 10));

  return (
    <motion.div
      style={{ gridArea: "1 / 1", opacity, scale, y, filter, zIndex }}
      className="w-full justify-self-center self-center"
    >
      <BigCard service={service} color={color} animated={false} />
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

  const activeColor = cardColors[services[activeIndex].slug] ?? "#7bc05a";

  return (
    <div ref={containerRef} style={{ height: `${total * 80}vh` }}>
      <div className="sticky top-20 flex h-[75vh] flex-col items-center justify-center gap-8 px-5 py-8">
        <div className="relative grid w-full max-w-3xl place-items-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-8 -z-10 rounded-full blur-[90px] transition-colors duration-700"
            style={{ backgroundColor: activeColor, opacity: 0.14 }}
          />
          {services.map((service, i) => (
            <StoryCard
              key={service.slug}
              progress={smoothProgress}
              index={i}
              total={total}
              service={service}
              color={cardColors[service.slug] ?? "#7bc05a"}
            />
          ))}
        </div>

        <div className="flex items-center gap-2.5" aria-hidden="true">
          {services.map((service, i) => (
            <span
              key={service.slug}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === activeIndex ? "22px" : "6px",
                backgroundColor: i === activeIndex ? activeColor : "var(--dark-border)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function WhatWeBuild() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative border-t border-border py-20 sm:py-28">
      {/* Clipped in its own layer, not on the section itself: overflow-hidden
          on an ancestor of the scroll-story's sticky element would break
          position:sticky (it can no longer stick relative to the viewport). */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <span
          className="ambient-orange"
          style={{ width: 520, height: 520, bottom: "-12%", left: "-8%" }}
        />
      </div>
      <Container className="relative flex flex-col gap-12">
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
                <BigCard service={service} color={cardColors[service.slug] ?? "#7bc05a"} animated={false} />
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
