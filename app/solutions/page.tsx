import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { services } from "@/lib/content/services";
import { industries } from "@/lib/content/technologies";
import { technologies } from "@/lib/content/technologies";
import { Tag } from "@/components/ui/Tag";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Solutions",
  description: "AI agents, AI automation, business automation, agent ticketing systems and AI product development.",
};

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
          {services.map((service) => (
            <Reveal
              key={service.slug}
              id={service.slug}
              className="grid gap-6 py-12 lg:grid-cols-[280px_1fr] lg:gap-16"
            >
              <div className="flex items-start gap-4">
                <span className="font-mono-label text-xs text-orange">{service.number}</span>
                <h2 className="font-display text-2xl font-semibold text-foreground">
                  {service.name}
                </h2>
              </div>
              <div className="flex flex-col gap-4">
                <p className="max-w-2xl text-base leading-relaxed text-muted">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.bullets.map((b) => (
                    <Tag key={b}>{b}</Tag>
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
            {industries.map((industry) => (
              <StaggerItem
                key={industry.name}
                hover
                className="flex flex-col gap-3 rounded-2xl border border-border p-6"
              >
                <p className="font-display text-base font-semibold text-foreground">{industry.name}</p>
                <ul className="flex flex-col gap-2">
                  {industry.items.map((item) => (
                    <li key={item} className="text-sm text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-24">
        <Container className="flex flex-col gap-12">
          <Reveal>
            <SectionHeading eyebrow="Stack" title="Our AI Engineering Stack" />
          </Reveal>
          <StaggerGroup className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {technologies.map((group) => (
              <StaggerItem key={group.name} className="flex flex-col gap-3">
                <span className="font-mono-label text-xs uppercase tracking-wide text-muted-2">
                  {group.name}
                </span>
                <ul className="flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-foreground/90">
                      {item}
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>
    </>
  );
}
