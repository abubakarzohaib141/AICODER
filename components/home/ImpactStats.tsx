"use client";

import { Container } from "@/components/ui/Container";
import { StaggerGroup, StaggerItem } from "@/components/motion/Reveal";

const stats = [
  { value: "40+", label: "Hours Saved / Week" },
  { value: "10,000+", label: "Tasks Automated" },
  { value: "100+", label: "Workflows Built" },
  { value: "24/7", label: "Automated Workflows" },
];

export function ImpactStats() {
  return (
    <section className="border-y border-border bg-background-elevated py-10 sm:py-12">
      <Container>
        <StaggerGroup className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6">
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="flex flex-col items-center gap-1 text-center sm:items-start sm:text-left">
              <span className="font-display text-3xl font-extrabold text-foreground sm:text-4xl">
                {stat.value}
              </span>
              <span className="text-xs font-medium text-muted-2 sm:text-sm">{stat.label}</span>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
