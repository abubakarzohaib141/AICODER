import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { team } from "@/lib/content/team";

export function TeamPreview() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrowNumber="07"
            eyebrow="The team"
            title="The Team Behind AI Coders"
          />
          <Link
            href="/team"
            className="whitespace-nowrap text-sm text-muted transition-colors hover:text-foreground"
          >
            Meet the team →
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <Link
              key={member.slug}
              href={`/team/${member.slug}`}
              className={`group flex flex-col gap-4 rounded-2xl border border-border p-6 transition-colors hover:border-blue/60 ${
                member.featured ? "bg-background-elevated/40" : "bg-background-elevated/15"
              }`}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border-strong font-display text-sm font-semibold text-foreground">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div>
                <p className="font-display text-base font-semibold text-foreground">{member.name}</p>
                <p className="mt-1 text-xs text-muted">{member.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
