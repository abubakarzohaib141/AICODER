import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { industries } from "@/lib/content/technologies";

const accents = ["var(--accent-teal)", "var(--accent-blue)", "var(--accent-orange)", "var(--accent-indigo)"];

export function WhoWeBuildFor() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Who we build for"
          title="Real Problems, Not Generic Use Cases"
          description="Different industries, the same pattern: repetitive work that quietly consumes a team's time."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {industries.map((industry, i) => (
            <div
              key={industry.name}
              className="flex flex-col gap-4 rounded-2xl border border-border p-7"
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: accents[i % accents.length] }}
                />
                <span className="font-display text-lg font-semibold text-foreground">
                  {industry.name}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted">{industry.problem}</p>
              <div className="flex flex-wrap gap-2">
                {industry.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
              {industry.example && (
                <Link
                  href={industry.example.href}
                  className="mt-auto pt-2 text-sm font-medium text-foreground/80 transition-colors hover:text-teal"
                >
                  {industry.example.label} →
                </Link>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
