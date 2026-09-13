import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { team } from "@/lib/content/team";

const accents = ["var(--accent-teal)", "var(--accent-blue)", "var(--accent-indigo)"];

export function TeamPreview() {
  const featured = team.filter((m) => m.featured);
  const secondary = team.filter((m) => !m.featured);

  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="The team" title="The Team Behind AI Coders" />
          <Link
            href="/team"
            className="whitespace-nowrap text-sm text-muted transition-colors hover:text-foreground"
          >
            Meet the team →
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {featured.map((member, i) => (
            <Link
              key={member.slug}
              href={`/team/${member.slug}`}
              className="group flex flex-col gap-6 rounded-2xl border border-border p-7 transition-colors hover:border-border-strong"
            >
              <span
                className="font-display text-5xl font-bold leading-none"
                style={{ color: accents[i % accents.length] }}
              >
                {member.name[0]}
              </span>
              <div>
                <p className="font-display text-lg font-semibold text-foreground">{member.name}</p>
                <p className="mt-1 text-sm text-muted">{member.role}</p>
              </div>
            </Link>
          ))}
        </div>

        {secondary.length > 0 && (
          <div className="flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:gap-6">
            {secondary.map((member) => (
              <Link
                key={member.slug}
                href={`/team/${member.slug}`}
                className="flex items-baseline gap-3 text-sm text-muted transition-colors hover:text-foreground"
              >
                <span className="font-display font-semibold text-foreground/80">
                  {member.name}
                </span>
                <span>{member.role}</span>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
