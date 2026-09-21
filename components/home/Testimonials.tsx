"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { ToolLogo, toolList } from "@/components/ui/ToolLogo";
import { testimonials } from "@/lib/content/testimonials";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const featured = testimonials[index];

  useEffect(() => {
    if (paused || testimonials.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section className="border-t border-border bg-background-elevated-2 py-20 sm:py-28">
      <Container className="flex flex-col gap-9">
        <Reveal className="flex flex-col gap-2.5">
          <span className="font-mono-label text-[11px] uppercase tracking-wide text-muted-2">
            Trust
          </span>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
            Trusted by Founders We&apos;ve Built With
          </h2>
          <p className="text-base text-muted">
            Real recommendations from people our team has worked with directly.
          </p>
        </Reveal>

        <Reveal className="grid gap-7 lg:grid-cols-[1.3fr_1fr]">
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="relative flex flex-col justify-between gap-6 overflow-hidden rounded-[22px] border border-border bg-background-elevated p-10"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={featured.slug}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-6"
              >
                <span className="font-display text-[19px] font-semibold leading-[1.45] text-foreground sm:text-[25px]">
                  &ldquo;{featured.quote}&rdquo;
                </span>
                <div className="flex items-center gap-3">
                  <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-border">
                    <Image
                      src={featured.photo}
                      alt={featured.name}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-bold text-foreground">{featured.name}</span>
                    <span className="text-[12.5px] text-muted-2">{featured.role}</span>
                    <span className="text-[11.5px] text-muted-2">{featured.context}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <StaggerGroup className="flex flex-col gap-2.5">
            {testimonials.map((t, i) => (
              <StaggerItem key={t.slug}>
                <motion.button
                  type="button"
                  onClick={() => setIndex(i)}
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition-colors ${
                    i === index
                      ? "border-teal bg-teal/[0.06]"
                      : "border-border hover:border-border-strong"
                  }`}
                >
                  <div className="relative h-[30px] w-[30px] shrink-0 overflow-hidden rounded-full border border-border">
                    <Image
                      src={t.photo}
                      alt={t.name}
                      fill
                      sizes="30px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex min-w-0 flex-col gap-0.5">
                    <span className="truncate text-[13px] font-semibold text-foreground">
                      {t.name}
                    </span>
                    <span className="truncate text-[11.5px] text-muted-2">{t.role}</span>
                  </div>
                </motion.button>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Reveal>

        <Reveal className="flex flex-col items-center gap-5 pt-4 text-center">
          <span className="text-eyebrow text-[10px] text-muted-2">Built Around With</span>
          <div className="relative flex flex-wrap items-center justify-center gap-4 py-2">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 hidden h-20 w-[calc(100%+4rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-border sm:block"
            />
            {toolList.map((tool, i) => (
              <motion.span
                key={tool}
                animate={{ y: [0, i % 2 === 0 ? -5 : 5, 0] }}
                transition={{ duration: 3.5 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 flex h-11 items-center rounded-full border border-border bg-background-elevated px-4 shadow-[0_12px_28px_-12px_rgba(22,33,62,0.2)]"
              >
                <ToolLogo tool={tool} className="h-5 w-[72px]" />
              </motion.span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
