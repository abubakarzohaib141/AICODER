"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";

const stats = [
  { value: "24/7", label: "Automated Workflows" },
  { value: "10,000+", label: "Tasks Automated" },
  { value: "40+", label: "Hours Saved / Week" },
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
    <section className="border-y border-border bg-background-elevated py-16 sm:py-20">
      <Container>
        <Reveal className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
          <div className="flex flex-col justify-between gap-8 rounded-[22px] border border-border bg-background p-8 sm:p-10">
            <StaggerGroup className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {stats.map((stat) => (
                <StaggerItem key={stat.label} className="flex flex-col gap-1.5">
                  <span className="font-display text-4xl font-extrabold text-foreground sm:text-5xl">
                    {stat.value}
                  </span>
                  <span className="text-xs font-medium text-muted-2 sm:text-sm">{stat.label}</span>
                </StaggerItem>
              ))}
            </StaggerGroup>
            <p className="text-sm text-muted">
              Delivered across production-ready systems &mdash; built to run, monitored, and
              maintained, not left as a one-off demo.
            </p>
          </div>

          <div className="flex flex-col gap-5 rounded-[22px] border border-border bg-foreground p-8 text-dark-foreground sm:p-10">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-bright opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-bright" />
              </span>
              <span className="font-mono-label text-[11px] uppercase tracking-wide text-dark-muted">
                In production
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <AnimatePresence mode="popLayout" initial={false}>
                {visible.map((item, i) => (
                  <motion.div
                    key={`${index}-${i}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1 - i * 0.28, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3"
                  >
                    <span className="font-mono-label shrink-0 rounded-md bg-white/10 px-2 py-1 text-[10px] uppercase tracking-wide text-dark-muted">
                      {item.tag}
                    </span>
                    <span className="text-sm text-dark-foreground">{item.text}</span>
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
