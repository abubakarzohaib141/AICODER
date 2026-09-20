import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { industries } from "@/lib/content/technologies";

const accents = ["var(--accent-teal)", "var(--accent-blue)", "var(--accent-orange)", "var(--accent-indigo)"];

export function WhoWeBuildFor() {
  return (
    <section className="relative border-t border-border py-20 sm:py-28">
      <Container className="relative flex flex-col gap-12">
        <Reveal>
          <SectionHeading
            eyebrow="Who we build for"
            title="Real Problems, Not Generic Use Cases"
            description="Different industries, the same pattern: repetitive work that quietly consumes a team's time."
          />
        </Reveal>

        <StaggerGroup className="grid gap-6 sm:grid-cols-2">
          {industries.map((industry, i) => {
            const accent = accents[i % accents.length];
            const number = String(i + 1).padStart(2, "0");
            return (
              <StaggerItem
                key={industry.name}
                hover
                className="group relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-border bg-background-elevated p-8 transition-colors duration-300 hover:border-border-strong sm:p-9"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-3 -top-8 select-none font-display text-8xl font-extrabold leading-none text-foreground/5"
                >
                  {number}
                </span>

                <div className="relative flex items-baseline gap-3">
                  <span className="font-display text-2xl font-bold leading-none" style={{ color: accent }}>
                    {number}
                  </span>
                  <span className="font-display text-lg font-semibold text-foreground">{industry.name}</span>
                </div>

                <p className="relative max-w-md text-[14.5px] leading-relaxed text-muted">{industry.problem}</p>

                <div className="relative flex flex-wrap gap-2">
                  {industry.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>

                {industry.example && (
                  <Link
                    href={industry.example.href}
                    className="relative mt-auto inline-flex w-fit items-center gap-1.5 rounded-full border border-border-strong px-3 py-1.5 text-[12.5px] font-semibold text-foreground transition-colors hover:border-teal/50 hover:text-teal"
                  >
                    {industry.example.label} →
                  </Link>
                )}
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Container>
    </section>
  );
}
