import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@/lib/content/faqs";

export const metadata: Metadata = {
  title: "About",
  description: "AI Coders is an AI engineering and automation company focused on building practical AI systems for businesses.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="Building Practical AI for the Real World" />

      <section className="py-16 sm:py-24">
        <Container className="grid gap-14 lg:grid-cols-[1fr_320px] lg:gap-16">
          <div className="flex flex-col gap-6">
            <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              AI Coders is an AI engineering and automation company focused on building practical
              AI systems for businesses.
            </p>
            <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              We develop AI agents, agentic workflows, automation systems and AI-powered products
              that address real operational challenges.
            </p>
            <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Our team combines AI development, automation, software engineering and product
              development to take ideas from concept to working systems.
            </p>

            <div className="mt-6 flex flex-col gap-8 border-t border-border pt-8">
              <div>
                <span className="font-mono-label text-xs uppercase tracking-wide text-orange">
                  Mission
                </span>
                <p className="mt-3 font-display text-xl font-semibold text-foreground sm:text-2xl">
                  Make AI useful, actionable and accessible to businesses.
                </p>
              </div>
              <div>
                <span className="font-mono-label text-xs uppercase tracking-wide text-blue">
                  Vision
                </span>
                <p className="mt-3 font-display text-xl font-semibold text-foreground sm:text-2xl">
                  Build intelligent systems that can work alongside people and take ownership of
                  meaningful business workflows.
                </p>
              </div>
            </div>
          </div>

          <aside className="flex h-fit flex-col gap-4 rounded-2xl border border-border bg-background-elevated/40 p-7">
            <span className="font-mono-label text-xs uppercase tracking-wide text-muted-2">
              How we started
            </span>
            <p className="text-sm leading-relaxed text-muted">
              AI Coders came together as a small team of siblings who each brought a different
              engineering discipline (agentic AI, automation and CRM systems) into one studio
              focused on shipping working AI systems for real businesses.
            </p>
          </aside>
        </Container>
      </section>

      <section id="faq" className="scroll-mt-20 border-t border-border py-16 sm:py-24">
        <Container className="flex flex-col gap-10">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="max-w-3xl">
            <Accordion items={faqs} />
          </div>
        </Container>
      </section>
    </>
  );
}
