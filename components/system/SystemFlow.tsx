"use client";

import { useEffect, useState } from "react";

const STAGES = [
  { label: "Input", detail: "Incoming request" },
  { label: "Understand", detail: "Parse intent & context" },
  { label: "Reason", detail: "Plan next step" },
  { label: "Tools", detail: "Retrieve / call API" },
  { label: "Action", detail: "Execute in system" },
  { label: "Result", detail: "Resolved or escalated" },
];

export function SystemFlow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setActive((v) => (v + 1) % STAGES.length);
    }, 1900);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="w-full rounded-2xl border border-border bg-background-elevated/60 p-5 sm:p-8"
      role="img"
      aria-label="Diagram of an AI system pipeline: input, understand, reason, tools, action, result"
    >
      <div className="mb-6 flex items-center justify-between">
        <span className="font-mono-label text-[11px] uppercase tracking-[0.16em] text-muted-2">
          system.trace
        </span>
        <span className="flex items-center gap-1.5 font-mono-label text-[11px] text-teal-bright">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-bright" />
          live
        </span>
      </div>

      <div className="flex flex-col gap-0 sm:flex-row sm:items-stretch sm:gap-0">
        {STAGES.map((stage, i) => {
          const isActive = i === active;
          const isPast = i < active;
          return (
            <div key={stage.label} className="flex flex-1 sm:flex-col">
              <div className="flex items-center sm:flex-col sm:items-start">
                <div className="flex flex-col items-center sm:w-full sm:flex-row sm:items-center">
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-mono-label text-[11px] transition-colors duration-500 ${
                      isActive
                        ? "border-orange bg-orange/15 text-orange"
                        : isPast
                          ? "border-teal-bright/60 bg-teal-bright/10 text-teal-bright"
                          : "border-border-strong text-muted-2"
                    }`}
                  >
                    {i + 1}
                  </div>
                  <div
                    className={`hidden h-px flex-1 sm:block transition-colors duration-500 ${
                      isPast ? "bg-teal-bright/50" : "bg-border-strong"
                    }`}
                  />
                </div>
              </div>
              <div className="mb-5 ml-3 mt-1 sm:mb-0 sm:ml-0 sm:mt-3">
                <p
                  className={`font-display text-sm font-semibold transition-colors duration-500 ${
                    isActive ? "text-foreground" : "text-muted"
                  }`}
                >
                  {stage.label}
                </p>
                <p className="mt-0.5 text-xs text-muted-2">{stage.detail}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
