import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Tag } from "@/components/ui/Tag";
import { TeamPhotoFrame } from "@/components/system/TeamPhotoFrame";
import { StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
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
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <StaggerItem key={member.slug} hover>
                <Link
                  href={`/team/${member.slug}`}
                  className="flex h-full flex-col gap-6 rounded-2xl border border-border p-8 transition-colors hover:border-teal/50 hover:shadow-[0_20px_40px_-18px_rgba(32,30,28,0.18)]"
                >
                  <TeamPhotoFrame
                    photo={member.photo}
                    name={member.name}
                    accent={accents[i % accents.length]}
                    size="lg"
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
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>
    </>
  );
}
