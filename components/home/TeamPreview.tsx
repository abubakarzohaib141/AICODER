import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TeamPhotoFrame } from "@/components/system/TeamPhotoFrame";
import { team } from "@/lib/content/team";

const accents = [
  "var(--accent-teal)",
  "var(--accent-blue)",
  "var(--accent-indigo)",
  "var(--accent-orange)",
];

export function TeamPreview() {
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

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <Link
              key={member.slug}
              href={`/team/${member.slug}`}
              className="group flex flex-col gap-5 rounded-2xl border border-border p-7 transition-colors hover:border-border-strong"
            >
              <TeamPhotoFrame photo={member.photo} name={member.name} accent={accents[i % accents.length]} />
              <div>
                <p className="font-display text-lg font-semibold text-foreground">{member.name}</p>
                <p className="mt-1 text-sm text-muted">{member.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
