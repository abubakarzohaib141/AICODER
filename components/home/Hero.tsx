"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { BookCallButton } from "@/components/booking/BookCallButton";
import { fadeUpFast, staggerFast } from "@/lib/motion";
import { testimonials } from "@/lib/content/testimonials";

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const featured = testimonials[index];

  useEffect(() => {
    if (paused || testimonials.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col justify-center">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-border" />

      <motion.div initial="hidden" animate="show" variants={staggerFast}>
        <Container className="relative grid gap-14 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="flex flex-col items-start gap-8 text-left">
            <motion.span
              variants={fadeUpFast}
              className="font-mono-label rounded-full border border-teal/30 bg-teal/[0.06] px-3.5 py-1.5 text-[11px] uppercase tracking-wide text-teal"
            >
              AI Automation Agency
            </motion.span>

            <motion.h1
              variants={fadeUpFast}
              className="text-hero max-w-xl text-[42px] text-foreground sm:text-6xl"
            >
              We Build AI Systems That Do <span className="highlight-mark">Real Work.</span>
            </motion.h1>

            <motion.p
              variants={fadeUpFast}
              className="max-w-md text-base leading-relaxed text-muted sm:text-lg"
            >
              AI agents, automation and AI-powered products built around real business problems,
              engineered to run, not just to demo.
            </motion.p>

            <motion.div variants={fadeUpFast} className="flex flex-wrap items-center gap-4 pt-2">
              <BookCallButton variant="primary" className="!px-7 !py-3.5 !text-base">
                Book a Call
              </BookCallButton>
              <a
                href="#work"
                className="text-sm font-semibold text-muted transition-colors hover:text-[#c99a1f]"
              >
                See Our Work ↓
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUpFast}
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-16 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(245,194,66,0.22),rgba(245,194,66,0)_70%)]"
            />

            <div className="mb-4 flex items-center justify-between">
              <span className="text-eyebrow text-xs text-muted-2">Trusted by founders</span>
              <div className="flex -space-x-2.5">
                {testimonials.map((t, i) => (
                  <button
                    key={t.slug}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Show ${t.name}'s testimonial`}
                    className={`relative h-7 w-7 shrink-0 overflow-hidden rounded-full border-2 transition-[border-color] ${
                      i === index ? "border-gold" : "border-background-elevated"
                    }`}
                  >
                    <Image src={t.photo} alt="" fill sizes="28px" className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-border bg-background-elevated shadow-[0_30px_60px_-24px_rgba(22,33,62,0.16)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={featured.slug}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="p-6 sm:p-8"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-border">
                      <Image
                        src={featured.photo}
                        alt={featured.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-foreground">{featured.name}</span>
                      <span className="text-xs text-muted-2">{featured.role}</span>
                    </div>
                  </div>
                  <p className="mt-5 min-h-[5.5rem] font-display text-lg font-semibold leading-snug text-foreground sm:text-xl">
                    &ldquo;{featured.quote}&rdquo;
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-5 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold animate-pulse-dot" />
                Engineered by AI Coders
              </div>
              <div className="grid grid-cols-3 divide-x divide-border border-t border-border pt-3">
                {[
                  ["24/7", "AI-Powered Support"],
                  ["10×", "Faster Operations"],
                  ["40+", "Hours Saved / Week"],
                ].map(([value, label]) => (
                  <div key={label} className="flex flex-col gap-0.5 px-3 first:pl-0">
                    <span className="font-display text-lg font-extrabold leading-none text-foreground sm:text-xl">
                      {value}
                    </span>
                    <span className="text-[11px] leading-snug text-muted-2">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </Container>
      </motion.div>
    </section>
  );
}
