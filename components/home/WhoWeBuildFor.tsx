import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { industries } from "@/lib/content/technologies";

const accents = ["var(--accent-teal)", "#c2660b", "var(--accent-orange)", "#16213e"];

export function WhoWeBuildFor() {
  return (
    <section className="relative border-t border-border bg-background-elevated-2 py-20 sm:py-28">
      <Container className="relative flex flex-col gap-12">
        <Reveal>
          <SectionHeading
            eyebrow="Who we build for"
            title={
              <>
                <span className="highlight-mark-teal">Real Problems</span>, Not Generic Use Cases
              </>
            }
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
                direction={i % 2 === 0 ? "left" : "right"}
                className="group flex flex-col gap-5 rounded-2xl border border-border bg-background-elevated p-8 transition-colors duration-300 hover:border-border-strong sm:p-9"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] font-mono-label text-xs font-bold text-white"
                    style={{ backgroundColor: accent }}
                  >
                    {number}
                  </span>
                  <span className="font-display text-lg font-semibold text-foreground">{industry.name}</span>
                </div>

                <p className="max-w-md text-[14.5px] leading-relaxed text-muted">{industry.problem}</p>

                <div className="flex flex-wrap gap-2">
                  {industry.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>

                {industry.example && (
                  <Link
                    href={industry.example.href}
                    className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-[8px] border border-border-strong px-3 py-1.5 text-[12.5px] font-semibold text-foreground transition-colors hover:border-teal/50 hover:text-teal"
                  >
                    {industry.example.label}
                    <span aria-hidden="true" className="transition-transform duration-150 group-hover:translate-x-0.5">
                      →
                    </span>
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
