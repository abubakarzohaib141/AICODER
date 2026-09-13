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

const accents = ["var(--accent-teal)", "var(--accent-blue)", "var(--accent-indigo)"];

export default function TeamPage() {
  const featured = team.filter((m) => m.featured);
  const secondary = team.filter((m) => !m.featured);

  return (
    <>
      <PageHero eyebrow="Team" title="The Team Behind AI Coders" />
      <section className="py-16 sm:py-24">
        <Container className="flex flex-col gap-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((member, i) => (
              <Link
                key={member.slug}
                href={`/team/${member.slug}`}
                className="group flex flex-col gap-6 rounded-2xl border border-border p-8 transition-colors hover:border-border-strong"
              >
                <span
                  className="font-display text-5xl font-bold leading-none"
                  style={{ color: accents[i % accents.length] }}
                >
                  {member.name[0]}
                </span>
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

          {secondary.length > 0 && (
            <div className="flex flex-col gap-6 border-t border-border pt-8 sm:flex-row">
              {secondary.map((member) => (
                <Link
                  key={member.slug}
                  href={`/team/${member.slug}`}
                  className="flex flex-1 items-center gap-4 rounded-2xl border border-border p-6 transition-colors hover:border-border-strong"
                >
                  <div>
                    <p className="font-display text-lg font-semibold text-foreground">
                      {member.name}
                    </p>
                    <p className="mt-1 text-sm text-muted">{member.role}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
