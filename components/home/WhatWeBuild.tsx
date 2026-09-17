"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  MotionValue,
} from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
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

function BigCard({ service, color }: { service: Service; color: string }) {
  return (
    <div
      className="relative flex w-full max-w-3xl flex-col gap-6 overflow-hidden rounded-[24px] p-8 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.35)] sm:p-12"
      style={{
        background: `radial-gradient(120% 140% at 100% 0%, ${color}33, transparent 60%), linear-gradient(160deg, #0f1b2e, #141b26 60%)`,
      }}
    >
      <span className="font-mono-label text-xs uppercase tracking-[0.18em] text-dark-muted">
        {service.number}
      </span>
      <span
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
        style={{ backgroundColor: color }}
      >
        <ServiceIcon slug={service.slug} />
      </span>
      <div className="flex flex-col gap-3">
        <span className="font-display text-2xl font-extrabold text-dark-foreground sm:text-[32px]">
          {service.name}
        </span>
        <p className="max-w-lg text-[15px] leading-relaxed text-dark-muted sm:text-base">
          {service.description}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {service.bullets.map((bullet) => (
          <span
            key={bullet}
            className="rounded-full border border-white/[0.18] bg-white/[0.06] px-3 py-1.5 text-[12.5px] text-dark-foreground"
          >
            {bullet}
          </span>
        ))}
      </div>
    </div>
  );
}

function ScrollCard({
  service,
  color,
  index,
  total,
  progress,
}: {
  service: Service;
  color: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const segment = 1 / total;
  const start = index * segment;
  const end = start + segment;
  const fadeInStart = index === 0 ? start : Math.max(0, start - segment * 0.35);
  const fadeOutEnd = index === total - 1 ? end : Math.min(1, end + segment * 0.35);

  const opacity = useTransform(progress, [fadeInStart, start, end, fadeOutEnd], [0, 1, 1, 0]);
  const scale = useTransform(progress, [fadeInStart, start, end, fadeOutEnd], [0.92, 1, 1, 0.94]);
  const y = useTransform(progress, [fadeInStart, start, end, fadeOutEnd], [48, 0, 0, -32]);

  return (
    <motion.div
      style={{ opacity, scale, y }}
      className="absolute inset-0 flex items-center justify-center px-5"
    >
      <BigCard service={service} color={color} />
    </motion.div>
  );
}

export function WhatWeBuild() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

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
                <BigCard
                  service={service}
                  color={cardColors[service.slug] ?? "#147d8a"}
                />
              </StaggerItem>
            ))}
          </StaggerGroup>
        ) : (
          <div ref={containerRef} style={{ height: `${services.length * 90}vh` }}>
            <div className="sticky top-16 h-[80vh] overflow-hidden">
              {services.map((service, i) => (
                <ScrollCard
                  key={service.slug}
                  service={service}
                  color={cardColors[service.slug] ?? "#147d8a"}
                  index={i}
                  total={services.length}
                  progress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
