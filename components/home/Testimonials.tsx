"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { testimonials } from "@/lib/content/testimonials";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const featured = testimonials[index];

  return (
    <section className="border-t border-border py-20 sm:py-28">
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
          <div className="relative flex flex-col justify-between gap-6 overflow-hidden rounded-[22px] border border-border bg-background-elevated-2 p-10">
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
      </Container>
    </section>
  );
}
