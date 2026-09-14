"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { TeamPhotoFrame } from "@/components/system/TeamPhotoFrame";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { team } from "@/lib/content/team";

const accents = [
  "var(--accent-teal)",
  "var(--accent-blue)",
  "var(--accent-indigo)",
  "var(--accent-orange)",
];

export function TeamPreview() {
  return (
    <section className="border-t border-border py-16 sm:py-20">
      <Container className="flex flex-col gap-7">
        <Reveal className="flex flex-wrap items-baseline justify-between gap-5">
          <h2 className="font-display text-[22px] font-extrabold tracking-tight text-foreground sm:text-[28px]">
            The People Behind It
          </h2>
          <Link
            href="/team"
            className="whitespace-nowrap text-sm font-semibold text-muted transition-colors hover:text-foreground"
          >
            Meet the team →
          </Link>
        </Reveal>

        <StaggerGroup className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <StaggerItem key={member.slug} hover className="min-w-0">
              <Link
                href={`/team/${member.slug}`}
                className="flex min-w-0 items-center gap-3.5 rounded-2xl border border-border p-4 transition-colors hover:border-border-strong"
              >
                <motion.div whileHover={{ scale: 1.06 }} transition={{ duration: 0.2 }}>
                  <TeamPhotoFrame
                    photo={member.photo}
                    name={member.name}
                    accent={accents[i % accents.length]}
                    size="sm"
                    shape="circle"
                  />
                </motion.div>
                <div className="flex min-w-0 flex-col gap-0.5">
                  <span className="truncate text-sm font-bold text-foreground">
                    {member.name}
                  </span>
                  <span className="truncate text-xs text-muted-2">{member.shortRole}</span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
