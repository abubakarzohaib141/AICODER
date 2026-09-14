import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/motion/Reveal";
import { faqs } from "@/lib/content/faqs";

export function FaqSection() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container className="flex flex-col gap-10">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="FAQ" title="Common Questions" />
          <Link
            href="/about#faq"
            className="whitespace-nowrap text-sm text-muted transition-colors hover:text-foreground"
          >
            More questions →
          </Link>
        </Reveal>
        <Reveal className="max-w-3xl">
          <Accordion items={faqs.slice(0, 6)} />
        </Reveal>
      </Container>
    </section>
  );
}
