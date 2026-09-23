"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { caseStudies } from "@/lib/content/case-studies";

export function CaseStudiesProof() {
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
          {caseStudies.map((study) => (
            <StaggerItem key={study.slug}>
              <Link
                href={`/case-studies/${study.slug}`}
                className="group flex w-full flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
              >
                <div className="flex items-center gap-4 sm:gap-5">
                  {study.screenshot && (
                    <motion.div
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.25 }}
                      className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border border-border bg-background-elevated-2 sm:h-20 sm:w-32"
                    >
                      <Image
                        src={study.screenshot}
                        alt={`${study.title} screenshot`}
                        fill
                        sizes="128px"
                        className="object-cover"
                      />
                    </motion.div>
                  )}
                  <div className="flex flex-col gap-1.5">
                    <span className="font-mono-label text-[11px] uppercase tracking-wide text-teal">
                      {study.category}
                    </span>
                    <span className="font-display text-lg font-semibold text-foreground transition-colors group-hover:text-teal">
                      {study.title}
                    </span>
                    <p className="max-w-xl text-sm leading-relaxed text-muted">{study.summary}</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {study.technology.slice(0, 4).map((tech) => (
                        <Tag key={tech}>{tech}</Tag>
                      ))}
                    </div>
                  </div>
                </div>

                <span className="flex shrink-0 items-center gap-1.5 self-start whitespace-nowrap rounded-[8px] border border-border-strong px-3 py-1.5 text-[12.5px] font-semibold text-foreground transition-colors group-hover:border-teal/50 group-hover:text-teal sm:self-auto">
                  Read full case study
                  <span aria-hidden="true" className="transition-transform duration-150 group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
