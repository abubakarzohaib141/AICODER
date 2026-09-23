import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { services } from "@/lib/content/services";
import { industries } from "@/lib/content/technologies";
import { technologies } from "@/lib/content/technologies";
import { TiltTag } from "@/components/ui/TiltTag";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "Solutions",
  description: "AI agents, AI automation, business automation, agent ticketing systems and AI product development.",
};

const serviceAccents = ["#147d8a", "#16213e", "#c2660b", "#ff8800", "#147d8a"];
const stackAccents = ["#147d8a", "#c2660b", "#16213e", "#ff8800"];

type StackIconKey = "brain" | "flow" | "code" | "link";

function StackIcon({ icon }: { icon: StackIconKey }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (icon) {
    case "brain":
      return (
        <svg {...common}>
          <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-1 5.8V15a3 3 0 0 0 3 3h1V4Z" />
          <path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 1 5.8V15a3 3 0 0 1-3 3h-1V4Z" />
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
    case "code":
      return (
        <svg {...common}>
          <path d="m9 7-5 5 5 5M15 7l5 5-5 5" />
        </svg>
      );
    case "link":
      return (
        <svg {...common}>
          <path d="M9 15 15 9M8 6l1-1a4 4 0 0 1 6 6l-1 1M16 18l-1 1a4 4 0 0 1-6-6l1-1" />
        </svg>
      );
  }
}

const stackIcons: StackIconKey[] = ["brain", "flow", "code", "link"];

type IndustryIconKey = "cart" | "pulse" | "briefcase" | "cap";

function IndustryIcon({ icon }: { icon: IndustryIconKey }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (icon) {
    case "cart":
      return (
        <svg {...common}>
          <circle cx="9" cy="20" r="1.4" />
          <circle cx="18" cy="20" r="1.4" />
          <path d="M2 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.6L21 7H6" />
        </svg>
      );
    case "pulse":
      return (
        <svg {...common}>
          <path d="M3 12h4l2-7 4 14 2-7h6" />
        </svg>
      );
    case "briefcase":
      return (
        <svg {...common}>
          <rect x="3" y="8" width="18" height="12" rx="2" />
          <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" />
        </svg>
      );
    case "cap":
      return (
        <svg {...common}>
          <path d="m2 9 10-5 10 5-10 5-10-5Z" />
          <path d="M6 11v4c0 1.5 2.7 3 6 3s6-1.5 6-3v-4" />
        </svg>
      );
  }
}

const industryIcons: IndustryIconKey[] = ["cart", "pulse", "briefcase", "cap"];
const industryAccents = ["#147d8a", "#c2660b", "#16213e", "#ff8800"];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="From AI Ideas to Working Systems"
        description="Five ways we help businesses put AI to work, from a single agent to a full production system."
      />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col divide-y divide-border border-t border-border">
          {services.map((service, i) => (
            <Reveal
              key={service.slug}
              id={service.slug}
              direction={i % 2 === 0 ? "left" : "right"}
              className="grid gap-6 py-12 lg:grid-cols-[280px_1fr] lg:gap-16"
            >
              <div className="flex items-start gap-4">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] font-mono-label text-xs font-bold text-white"
                  style={{ backgroundColor: serviceAccents[i % serviceAccents.length] }}
                >
                  {service.number}
                </span>
                <h2 className="font-display text-2xl font-semibold text-foreground">
                  {service.name}
                </h2>
              </div>
              <div className="flex flex-col gap-4">
                <p className="max-w-2xl text-base leading-relaxed text-muted">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {service.bullets.map((b, bi) => (
                    <TiltTag key={b} index={bi}>
                      {b}
                    </TiltTag>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-24">
        <Container className="flex flex-col gap-12">
          <Reveal>
            <SectionHeading eyebrow="Industries" title="AI Across Business Operations" />
          </Reveal>
          <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, i) => {
              const accent = industryAccents[i % industryAccents.length];
              return (
                <StaggerItem
                  key={industry.name}
                  hover
                  direction={i % 2 === 0 ? "left" : "right"}
                  className="flex flex-col gap-4 rounded-2xl border border-border p-6 transition-colors duration-300 hover:border-border-strong"
                >
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${accent}1a`, color: accent }}
                  >
                    <IndustryIcon icon={industryIcons[i % industryIcons.length]} />
                  </span>
                  <p className="font-display text-base font-semibold text-foreground">{industry.name}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {industry.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border-strong px-2.5 py-1 text-[11.5px] text-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-24">
        <Container className="flex flex-col gap-12">
          <Reveal>
            <SectionHeading eyebrow="Stack" title="Our AI Engineering Stack" />
          </Reveal>
          <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {technologies.map((group, i) => {
              const accent = stackAccents[i % stackAccents.length];
              return (
                <StaggerItem
                  key={group.name}
                  hover
                  direction={i % 2 === 0 ? "left" : "right"}
                  className="flex flex-col gap-4 rounded-2xl border border-border bg-background-elevated p-6 transition-colors duration-300 hover:border-border-strong"
                >
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${accent}1a`, color: accent }}
                  >
                    <StackIcon icon={stackIcons[i % stackIcons.length]} />
                  </span>
                  <span className="font-display text-base font-semibold text-foreground">
                    {group.name}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border-strong px-2.5 py-1 text-[11.5px] text-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
