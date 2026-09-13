import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { caseStudies } from "@/lib/content/case-studies";

export function CaseStudiesProof() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Proof" title="Systems in Production" />
          <Link
            href="/case-studies"
            className="whitespace-nowrap text-sm text-muted transition-colors hover:text-foreground"
          >
            All case studies →
          </Link>
        </div>

        <div className="flex flex-col divide-y divide-border border-t border-border">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group flex flex-col gap-2 py-6 transition-colors sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex flex-col gap-1">
                <span className="font-mono-label text-[11px] uppercase tracking-wide text-teal">
                  {study.category}
                </span>
                <span className="font-display text-lg font-semibold text-foreground group-hover:text-teal">
                  {study.title}
                </span>
              </div>
              <span className="text-sm text-foreground/70 transition-transform group-hover:translate-x-0.5">
                Read →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
