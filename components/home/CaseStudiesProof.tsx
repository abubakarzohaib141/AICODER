"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { caseStudies } from "@/lib/content/case-studies";

export function CaseStudiesProof() {
  const [openSlug, setOpenSlug] = useState<string | null>(caseStudies[0]?.slug ?? null);

  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container className="flex flex-col gap-10">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Proof" title="Systems in Production" />
          <Link
            href="/case-studies"
            className="whitespace-nowrap text-sm text-muted transition-colors hover:text-foreground"
          >
            All case studies →
          </Link>
        </Reveal>

        <StaggerGroup className="flex flex-col divide-y divide-border border-t border-border">
          {caseStudies.map((study) => {
            const isOpen = openSlug === study.slug;
            return (
              <StaggerItem key={study.slug}>
                <button
                  type="button"
                  onClick={() => setOpenSlug(isOpen ? null : study.slug)}
                  aria-expanded={isOpen}
                  className="flex w-full flex-col gap-2 py-6 text-left sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex flex-col gap-1">
                    <span className="font-mono-label text-[11px] uppercase tracking-wide text-teal">
                      {study.category}
                    </span>
                    <span className="font-display text-lg font-semibold text-foreground">
                      {study.title}
                    </span>
                  </div>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border-strong text-foreground transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col gap-4 pb-6 sm:max-w-2xl">
                      <p className="text-sm leading-relaxed text-muted sm:text-base">
                        {study.summary}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {study.technology.map((tech) => (
                          <Tag key={tech}>{tech}</Tag>
                        ))}
                      </div>
                      <Link
                        href={`/case-studies/${study.slug}`}
                        className="w-fit text-sm font-medium text-foreground/80 transition-colors hover:text-teal"
                      >
                        Read full case study →
                      </Link>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Container>
    </section>
  );
}
