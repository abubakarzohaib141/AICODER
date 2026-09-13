"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/content/services";

export function WhatWeBuild() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrowNumber="01"
          eyebrow="What we build"
          title="From AI Ideas to Working Systems"
        />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
          <div className="flex flex-col border-t border-border">
            {services.map((service, i) => (
              <button
                key={service.slug}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className={`group flex items-center justify-between border-b border-border py-4 text-left transition-colors ${
                  active === i ? "text-foreground" : "text-muted hover:text-foreground/80"
                }`}
              >
                <span className="flex items-center gap-4">
                  <span className="font-mono-label text-xs text-muted-2">{service.number}</span>
                  <span className="font-display text-lg font-medium">{service.name}</span>
                </span>
                <span
                  className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors ${
                    active === i ? "bg-orange" : "bg-transparent"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-6 rounded-2xl border border-border bg-background-elevated/50 p-8">
            <span className="font-mono-label text-xs uppercase tracking-wide text-teal-bright">
              {current.summary}
            </span>
            <p className="text-base leading-relaxed text-muted sm:text-lg">{current.description}</p>
            <ul className="mt-2 flex flex-col gap-2.5">
              {current.bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-3 text-sm text-foreground/90">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-blue" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
