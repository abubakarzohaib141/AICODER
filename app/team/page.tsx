import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Tag } from "@/components/ui/Tag";
import { team } from "@/lib/content/team";

export const metadata: Metadata = {
  title: "Team",
  description: "The engineers behind AI Coders.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero eyebrow="Team" title="The Team Behind AI Coders" />
      <section className="py-16 sm:py-24">
        <Container className="grid gap-6 sm:grid-cols-2">
          {team.map((member) => (
            <Link
              key={member.slug}
              href={`/team/${member.slug}`}
              className={`group flex flex-col gap-5 rounded-2xl border border-border p-8 transition-colors hover:border-blue/60 ${
                member.featured ? "bg-background-elevated/40" : "bg-background-elevated/15"
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border-strong font-display text-base font-semibold text-foreground">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div>
                <p className="font-display text-xl font-semibold text-foreground">{member.name}</p>
                <p className="mt-1 text-sm text-muted">{member.role}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {member.focus.slice(0, 3).map((f) => (
                  <Tag key={f}>{f}</Tag>
                ))}
              </div>
            </Link>
          ))}
        </Container>
      </section>
    </>
  );
}
