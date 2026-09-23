import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { caseStudies } from "@/lib/content/case-studies";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "How AI Coders builds AI systems for real businesses, from problem to production.",
};

const studyAccents = ["#147d8a", "#c2660b", "#16213e"];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Problem, Solution, Production"
        description="Each case study follows the same structure: the problem, the challenge, what we built, how it works, the technology used, and the results."
      />
      <section className="py-16 sm:py-24">
        <Container className="flex flex-col divide-y divide-border border-t border-border">
          {caseStudies.map((study, i) => (
            <Reveal key={study.slug} direction={i % 2 === 0 ? "left" : "right"}>
            <Link
              href={`/case-studies/${study.slug}`}
              className="group -mx-5 flex flex-col gap-4 px-5 py-10 transition-colors hover:bg-background-elevated-2/50 sm:flex-row sm:items-center sm:justify-between sm:gap-10"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] font-mono-label text-[11px] font-bold text-white"
                    style={{ backgroundColor: studyAccents[i % studyAccents.length] }}
                  >
                    {study.index}
                  </span>
                  <span className="font-mono-label text-[11px] uppercase tracking-wide text-teal-bright">
                    {study.category}
                  </span>
                </div>
                <h2 className="font-display text-2xl font-semibold text-foreground group-hover:text-teal transition-colors">
                  {study.title}
                </h2>
                <p className="max-w-xl text-sm leading-relaxed text-muted">{study.summary}</p>
              </div>
              <span className="shrink-0 text-sm text-foreground/80 transition-transform group-hover:translate-x-0.5">
                Read case study →
              </span>
            </Link>
            </Reveal>
          ))}
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
