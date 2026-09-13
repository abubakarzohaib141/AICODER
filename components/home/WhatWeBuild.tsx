import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/content/services";

export function WhatWeBuild() {
  const [primary, ...rest] = services;

  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow="What we build" title="From AI Ideas to Working Systems" />

        <div className="grid gap-4 lg:grid-cols-4 lg:grid-rows-2">
          <div className="flex flex-col justify-between gap-8 rounded-2xl border border-teal/25 bg-teal/[0.05] p-8 lg:col-span-2 lg:row-span-2">
            <div className="flex flex-col gap-4">
              <span className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                {primary.name}
              </span>
              <p className="max-w-sm text-base leading-relaxed text-muted">{primary.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {primary.bullets.map((bullet) => (
                <span
                  key={bullet}
                  className="rounded-full border border-teal/30 bg-background-elevated px-3 py-1.5 text-xs text-foreground/80"
                >
                  {bullet}
                </span>
              ))}
            </div>
          </div>

          {rest.map((service) => (
            <div
              key={service.slug}
              className="flex flex-col gap-3 rounded-2xl border border-border p-6"
            >
              <span className="font-display text-base font-semibold text-foreground">
                {service.name}
              </span>
              <p className="text-sm leading-relaxed text-muted">{service.summary}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
