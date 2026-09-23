"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { viewport } from "@/lib/motion";

const accents = ["#147d8a", "#c2660b", "#16213e"];

type IconKey = "clock" | "flow" | "bolt" | "hourglass" | "stack" | "chat";

function MetricIcon({ icon }: { icon: IconKey }) {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (icon) {
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3.5 2" />
        </svg>
      );
    case "flow":
      return (
        <svg {...common}>
          <circle cx="5" cy="12" r="2.2" />
          <circle cx="19" cy="6" r="2.2" />
          <circle cx="19" cy="18" r="2.2" />
          <path d="M7.2 12h3.8m0 0 5.8-5.3M11 12l5.8 5.3" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...common}>
          <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
        </svg>
      );
    case "hourglass":
      return (
        <svg {...common}>
          <path d="M6 3h12M6 21h12M7 3c0 5 5 6.5 5 9s-5 4-5 9M17 3c0 5-5 6.5-5 9s5 4 5 9" />
        </svg>
      );
    case "stack":
      return (
        <svg {...common}>
          <path d="M12 3 3 8l9 5 9-5-9-5Z" />
          <path d="M3 16l9 5 9-5M3 12l9 5 9-5" />
        </svg>
      );
    case "chat":
      return (
        <svg {...common}>
          <path d="M21 12a8 8 0 1 1-3.4-6.5" />
          <path d="M21 3v6h-6" />
        </svg>
      );
  }
}

const metrics: { title: string; description: string; icon: IconKey }[] = [
  {
    title: "24/7 AI-Powered Support",
    description: "Handle repetitive customer requests automatically, around the clock.",
    icon: "clock",
  },
  {
    title: "100+ Workflows Built",
    description: "Custom AI systems designed around real business processes.",
    icon: "flow",
  },
  {
    title: "10× Faster Operations",
    description: "Automate slow, repetitive processes and move faster.",
    icon: "bolt",
  },
  {
    title: "40+ Hours Saved / Week",
    description: "Eliminate repetitive work with AI automation.",
    icon: "hourglass",
  },
  {
    title: "90%+ Less Manual Data Entry",
    description: "Automate repetitive copying, updating, and routing.",
    icon: "stack",
  },
  {
    title: "< 5 Min Response Time",
    description: "Respond to leads, customers, and internal requests instantly.",
    icon: "chat",
  },
];

const activity = [
  { tag: "n8n", text: "Workflow triggered for a new lead" },
  { tag: "CRM", text: "Record synced across systems" },
  { tag: "Email", text: "Follow-up sequence sent" },
  { tag: "Support", text: "Ticket auto-tagged and routed" },
  { tag: "Agent", text: "Customer query answered" },
  { tag: "Reports", text: "Weekly summary generated" },
];

export function ImpactStats() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % activity.length), 2600);
    return () => clearInterval(id);
  }, []);

  const visible = [0, 1, 2].map((offset) => activity[(index + offset) % activity.length]);

  return (
    <section className="border-y border-border bg-background-elevated py-16 sm:py-24">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <SectionHeading
            eyebrow="Impact"
            title="Real Automation, Real Results"
            description="Every system we ship is built to move a real number for the business running it."
          />
        </Reveal>

        <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric, i) => {
            const accent = accents[i % accents.length];
            return (
              <StaggerItem
                key={metric.title}
                hover
                className="flex flex-col gap-4 rounded-2xl border border-border bg-background p-6 transition-colors duration-300 hover:border-border-strong sm:p-7"
              >
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${accent}1a`, color: accent }}
                >
                  <MetricIcon icon={metric.icon} />
                </span>
                <span className="font-display text-xl font-extrabold leading-snug text-foreground sm:text-[22px]">
                  {metric.title}
                </span>
                <p className="text-sm leading-relaxed text-muted">{metric.description}</p>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        <Reveal className="grid gap-5 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col justify-center gap-6 rounded-[22px] border border-border bg-background p-7 sm:p-8">
            <span className="text-eyebrow text-[11px] text-muted-2">Manual vs. automated</span>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-foreground">Manual process</span>
                  <span className="text-muted-2">Baseline</span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-background-elevated-2">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={viewport}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    style={{ transformOrigin: "left" }}
                    className="h-full w-full rounded-full bg-[#c2660b]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-foreground">With AI Coders</span>
                  <span className="font-semibold text-teal">90%+ less manual work</span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-background-elevated-2">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 0.1 }}
                    viewport={viewport}
                    transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    style={{ transformOrigin: "left" }}
                    className="h-full w-full rounded-full bg-teal"
                  />
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted">
              Based on the repetitive, rule-based share of the workflows we automate for clients
              &mdash; the judgment calls still stay with your team.
            </p>
          </div>

          <div className="overflow-hidden rounded-[22px] border border-border bg-foreground px-5 py-6 text-dark-foreground sm:px-8 sm:py-7">
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-dark-muted">
                Delivered across production-ready systems &mdash; built to run, monitored, and
                maintained, not left as a one-off demo.
              </p>
              <div className="flex shrink-0 items-center gap-2">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-bright opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-bright" />
                </span>
                <span className="font-mono-label text-[11px] font-semibold uppercase tracking-wide text-dark-foreground">
                  In production
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <AnimatePresence mode="popLayout" initial={false}>
                {visible.map((item, i) => (
                  <motion.div
                    key={`${index}-${i}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/[0.06] px-3.5 py-2.5"
                  >
                    <span className="font-mono-label shrink-0 rounded-md bg-teal-bright/20 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-teal-bright">
                      {item.tag}
                    </span>
                    <span className="text-[13.5px] font-medium leading-snug text-dark-foreground">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
