import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/content/services";

const iconColors: Record<string, string> = {
  "agentic-ai": "#2b1bba",
  automation: "#4f7ff7",
  "ai-product-development": "#ff8800",
  "custom-ai-engineering": "#147d8a",
};

function ServiceIcon({ slug }: { slug: string }) {
  if (slug === "agentic-ai") {
    return (
      <span className="relative block h-4 w-5">
        <span className="absolute left-[7px] top-0 h-1.5 w-1.5 rounded-full bg-white" />
        <span className="absolute bottom-0 left-0 h-1.5 w-1.5 rounded-full bg-white" />
        <span className="absolute bottom-0 right-0 h-1.5 w-1.5 rounded-full bg-white" />
      </span>
    );
  }
  if (slug === "automation") {
    return <span className="block h-[18px] w-[18px] rounded-full border-[2.5px] border-white" />;
  }
  if (slug === "ai-product-development") {
    return <span className="font-mono-label text-[15px] font-bold text-white">{"</>"}</span>;
  }
  return (
    <span className="relative block h-4 w-[18px]">
      <span className="absolute left-0 top-0 h-[13px] w-[13px] rounded-[4px] bg-white/55" />
      <span className="absolute bottom-0 right-0 h-[13px] w-[13px] rounded-[4px] bg-white" />
    </span>
  );
}

export function WhatWeBuild() {
  const [primary, ...rest] = services;

  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="What we build"
          title={
            <>
              From AI Ideas to <span className="text-orange">Working Systems</span>
            </>
          }
        />

        <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          <div className="relative flex flex-col justify-between gap-7 overflow-hidden rounded-[20px] bg-[radial-gradient(120%_140%_at_100%_0%,rgba(79,127,247,0.35),transparent_60%),linear-gradient(160deg,#0f1b2e,#141b26_60%)] p-8 sm:col-span-2 sm:row-span-2">
            <span className="absolute right-[22px] top-[22px] flex h-[34px] w-[34px] items-center justify-center rounded-full border border-white/25 text-[15px] text-dark-foreground">
              →
            </span>
            <div className="flex flex-col gap-3.5">
              <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center gap-1 rounded-[13px] bg-gradient-to-br from-teal-bright to-blue">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </span>
              <span className="font-display text-[27px] font-extrabold text-dark-foreground">
                {primary.name}
              </span>
              <p className="max-w-sm text-[15px] leading-relaxed text-dark-muted">
                {primary.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {primary.bullets.map((bullet) => (
                <span
                  key={bullet}
                  className="rounded-full border border-white/[0.18] bg-white/[0.06] px-3 py-1.5 text-[12.5px] text-dark-foreground"
                >
                  {bullet}
                </span>
              ))}
            </div>
          </div>

          {rest.map((service) => {
            const color = iconColors[service.slug] ?? "#147d8a";
            return (
              <div
                key={service.slug}
                className="hover-lift group relative flex flex-col gap-4 overflow-hidden rounded-[20px] border border-border bg-background-elevated p-6.5 hover:shadow-[0_20px_40px_-18px_var(--tw-shadow-color)]"
                style={{ "--tw-shadow-color": `${color}55` } as React.CSSProperties}
              >
                <span
                  className="absolute -right-[30px] -top-[30px] h-[100px] w-[100px] rounded-full opacity-[0.08]"
                  style={{ backgroundColor: color }}
                />
                <div className="flex items-center justify-between">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                    style={{ backgroundColor: color }}
                  >
                    <ServiceIcon slug={service.slug} />
                  </span>
                  <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-border text-[13px] text-muted-2 transition-colors group-hover:border-transparent group-hover:bg-foreground group-hover:text-background">
                    →
                  </span>
                </div>
                <span className="font-display text-[17px] font-bold text-foreground">
                  {service.name}
                </span>
                <p className="text-sm leading-relaxed text-muted">{service.summary}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
