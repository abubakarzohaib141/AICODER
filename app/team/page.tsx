import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Tag } from "@/components/ui/Tag";
import { TeamPhotoFrame } from "@/components/system/TeamPhotoFrame";
import { team } from "@/lib/content/team";

export const metadata: Metadata = {
  title: "Team",
  description: "The engineers behind AI Coders.",
};

const accents = [
  "var(--accent-teal)",
  "var(--accent-blue)",
  "var(--accent-indigo)",
  "var(--accent-orange)",
];

export default function TeamPage() {
  return (
    <>
      <PageHero eyebrow="Team" title="The Team Behind AI Coders" />
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Link
                key={member.slug}
                href={`/team/${member.slug}`}
                className="group flex flex-col gap-6 rounded-2xl border border-border p-8 transition-colors hover:border-border-strong"
              >
                <TeamPhotoFrame
                  photo={member.photo}
                  name={member.name}
                  accent={accents[i % accents.length]}
                />
                <div>
                  <p className="font-display text-xl font-semibold text-foreground">
                    {member.name}
                  </p>
                  <p className="mt-1 text-sm text-muted">{member.role}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {member.focus.slice(0, 3).map((f) => (
                    <Tag key={f}>{f}</Tag>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
