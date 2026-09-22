"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { BookCallButton } from "@/components/booking/BookCallButton";
import { fadeUpFast, staggerFast } from "@/lib/motion";

export function Hero() {
  return (
    <section
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
        event.currentTarget.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
      }}
      className="relative overflow-hidden pt-20 sm:pt-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          color: "var(--foreground)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mouse-x, 50%) var(--mouse-y, 0%), rgba(247,244,241,0.08), transparent 70%)",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-border" />
      <div className="pointer-events-none absolute left-1/2 top-24 hidden h-64 w-px -translate-x-1/2 bg-gradient-to-b from-border to-transparent sm:block" />
      <span
        aria-hidden="true"
        className="ambient-orange"
        style={{ width: 620, height: 620, top: "-14%", right: "8%" }}
      />

      <motion.div initial="hidden" animate="show" variants={staggerFast}>
        <Container className="relative flex flex-col items-center gap-8 pb-16 text-center sm:pb-20">
          <motion.span
            variants={fadeUpFast}
            className="font-mono-label rounded-full border border-teal/30 bg-teal/[0.06] px-3.5 py-1.5 text-[11px] uppercase tracking-wide text-teal shadow-[0_0_16px_-8px_rgba(46,230,115,0.35)]"
          >
            AI Engineering Studio
          </motion.span>

          <motion.h1
            variants={fadeUpFast}
            className="max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-[#F5F7FA] sm:text-7xl"
          >
            We Build AI Systems That Do Real Work.
          </motion.h1>

          <motion.p
            variants={fadeUpFast}
            className="max-w-lg text-base leading-relaxed text-muted sm:text-lg"
          >
            AI agents, automation and AI-powered products built around real business problems,
            engineered to run, not just to demo.
          </motion.p>

          <motion.div
            variants={fadeUpFast}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <BookCallButton variant="accent" className="!px-7 !py-3.5 !text-base">
              Book a Call
            </BookCallButton>
            <a
              href="#work"
              className="text-sm font-semibold text-muted transition-colors hover:text-foreground"
            >
              See Our Work ↓
            </a>
          </motion.div>

          <motion.div variants={fadeUpFast} className="relative mt-5 w-full max-w-2xl">
            <div
              className="pointer-events-none absolute -inset-10 -z-10 opacity-70 blur-3xl"
              style={{
                background:
                  "radial-gradient(60% 60% at 30% 20%, rgba(46,230,115,0.16), transparent 70%), radial-gradient(50% 50% at 80% 80%, rgba(79,127,247,0.2), transparent 70%)",
              }}
            />
            <div className="absolute -left-1.5 -top-4 z-10 flex items-center gap-2 rounded-xl border border-border bg-background-elevated px-3.5 py-2 text-xs font-semibold shadow-[0_20px_44px_-10px_rgba(32,30,28,0.2)]">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal-bright animate-pulse-dot" />
              AI Agents
            </div>
            <div className="absolute -bottom-4 right-0 z-10 flex items-center gap-2 rounded-xl border border-border bg-background-elevated px-3.5 py-2 text-xs font-semibold shadow-[0_20px_44px_-10px_rgba(32,30,28,0.2)]">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-indigo" />
              Business Systems
            </div>
            <div className="absolute -right-3 top-8 z-10 hidden items-center gap-2 rounded-xl border border-border bg-background-elevated/70 px-3.5 py-2 text-xs font-semibold shadow-[0_20px_44px_-10px_rgba(32,30,28,0.2)] backdrop-blur-sm sm:flex">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal-bright animate-pulse-dot" />
              Automation Active
            </div>
            <div className="absolute -left-3 bottom-10 z-10 hidden items-center gap-2 rounded-xl border border-border bg-background-elevated/70 px-3.5 py-2 text-xs font-semibold shadow-[0_20px_44px_-10px_rgba(32,30,28,0.2)] backdrop-blur-sm sm:flex">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
              Workflow Synced
            </div>
            <div className="-rotate-1 overflow-hidden rounded-[20px] border border-border shadow-[0_40px_70px_-24px_rgba(32,30,28,0.28)]">
              <Image
                src="/projects/tresolv-hero.png"
                alt="tResolv AI support employee built by AI Coders"
                width={1920}
                height={827}
                sizes="(min-width: 672px) 672px, 100vw"
                className="block w-full"
                priority
              />
            </div>
          </motion.div>
        </Container>
      </motion.div>
    </section>
  );
}
