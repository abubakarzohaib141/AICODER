import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { caseStudies } from "@/lib/content/case-studies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};
  return { title: study.title, description: study.summary };
}

const sections = [
  { key: "problem", number: "01", label: "The Problem" },
  { key: "challenge", number: "02", label: "The Challenge" },
  { key: "solution", number: "03", label: "Our Solution" },
] as const;

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  return (
    <>
      <section className="border-b border-border pb-14 pt-20 sm:pt-28">
        <Container className="flex flex-col gap-5">
          <Link
            href="/case-studies"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            ← All case studies
          </Link>
          <span className="font-mono-label text-xs uppercase tracking-[0.18em] text-orange">
            {study.category}
          </span>
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            {study.title}
          </h1>
          <span className="w-fit text-sm text-muted">Engineered by AI Coders</span>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid gap-14 lg:grid-cols-[1fr_320px] lg:gap-16">
          <div className="flex flex-col gap-14">
            {sections.map((section) => (
              <div key={section.key} className="flex flex-col gap-3">
                <span className="font-mono-label text-xs text-muted-2">{section.number}</span>
                <h2 className="font-display text-2xl font-semibold text-foreground">
                  {section.label}
                </h2>
                <p className="max-w-2xl text-base leading-relaxed text-muted">
                  {study[section.key]}
                </p>
              </div>
            ))}

            <div className="flex flex-col gap-3">
              <span className="font-mono-label text-xs text-muted-2">04</span>
              <h2 className="font-display text-2xl font-semibold text-foreground">How It Works</h2>
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {study.workflow.map((step, i) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className="rounded-full border border-border-strong px-4 py-2 text-sm text-foreground/90">
                      {step}
                    </span>
                    {i < study.workflow.length - 1 && <span className="text-muted-2">→</span>}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <span className="font-mono-label text-xs text-muted-2">06</span>
              <h2 className="font-display text-2xl font-semibold text-foreground">Results</h2>
              <p className="max-w-2xl text-base leading-relaxed text-muted">{study.results}</p>
            </div>
          </div>

          <aside className="flex h-fit flex-col gap-4 rounded-2xl border border-border bg-background-elevated/40 p-7 lg:sticky lg:top-24">
            <span className="font-mono-label text-xs uppercase tracking-wide text-muted-2">
              05. Technology
            </span>
            <div className="flex flex-wrap gap-2">
              {study.technology.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
