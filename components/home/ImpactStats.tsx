"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";

const stats = [
  { value: "24/7", label: "Automated Workflows" },
  { value: "10,000+", label: "Tasks Automated" },
  { value: "40+", label: "Hours Saved / Week" },
  { value: "80%", label: "Less Manual Work" },
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
        <Reveal className="overflow-hidden rounded-[22px] border border-border bg-background shadow-[0_20px_50px_-30px_rgba(22,33,62,0.18)]">
          <StaggerGroup className="grid grid-cols-2 divide-x divide-y divide-border sm:grid-cols-4 sm:divide-y-0">
            {stats.map((stat) => (
              <StaggerItem
                key={stat.label}
                className="flex flex-col gap-1.5 px-5 py-7 sm:px-6 sm:py-9"
              >
                <span className="font-display text-3xl font-extrabold leading-none text-foreground sm:text-4xl">
                  {stat.value}
                </span>
                <span className="text-xs font-medium leading-snug text-muted-2 sm:text-sm">
                  {stat.label}
                </span>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <div className="border-t border-border bg-background-elevated-2/40 px-5 py-6 sm:px-8">
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted">
                Delivered across production-ready systems &mdash; built to run, monitored, and
                maintained, not left as a one-off demo.
              </p>
              <div className="flex shrink-0 items-center gap-2">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-bright opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-bright" />
                </span>
                <span className="font-mono-label text-[11px] uppercase tracking-wide text-muted-2">
                  In production
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 md:grid md:grid-cols-3">
              <AnimatePresence mode="popLayout" initial={false}>
                {visible.map((item, i) => (
                  <motion.div
                    key={`${index}-${i}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex items-center gap-2.5 rounded-xl border border-border bg-background-elevated px-3.5 py-2.5"
                  >
                    <span className="font-mono-label shrink-0 rounded-md bg-background-elevated-2 px-2 py-1 text-[10px] uppercase tracking-wide text-muted-2">
                      {item.tag}
                    </span>
                    <span className="text-[13px] leading-snug text-foreground">{item.text}</span>
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
