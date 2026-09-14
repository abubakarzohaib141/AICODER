import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { TeamPhotoFrame } from "@/components/system/TeamPhotoFrame";
import { ScreenshotFrame } from "@/components/system/ScreenshotFrame";
import { team } from "@/lib/content/team";
import { products } from "@/lib/content/products";
import { caseStudies } from "@/lib/content/case-studies";

const accents = [
  "var(--accent-teal)",
  "var(--accent-blue)",
  "var(--accent-indigo)",
  "var(--accent-orange)",
];

export function generateStaticParams() {
  return team.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);
  if (!member) return {};
  return { title: member.name, description: `${member.role} at AI Coders.` };
}

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);
  if (!member) notFound();

  const memberIndex = team.findIndex((m) => m.slug === member.slug);
  const accent = accents[memberIndex % accents.length];
  const relatedProducts = products.filter((p) => p.builtBySlug === member.slug);
  const relatedCaseStudies = caseStudies.filter((c) => c.builtBySlug === member.slug);

  return (
    <>
      <section className="border-b border-border pb-14 pt-20 sm:pt-28">
        <Container className="flex flex-col gap-6">
          <Link href="/team" className="text-sm text-muted transition-colors hover:text-foreground">
            ← All team
          </Link>
          <div className="flex items-center gap-6">
            <TeamPhotoFrame photo={member.photo} name={member.name} accent={accent} size="lg" />
            <div>
              <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {member.name}
              </h1>
              <p className="mt-1 text-base text-muted">{member.role}</p>
            </div>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-muted">{member.bio}</p>
          {member.extra && (
            <p className="max-w-xl text-base leading-relaxed text-muted">{member.extra}</p>
          )}

          {member.links.length > 0 && (
            <div className="flex flex-wrap gap-3 pt-1">
              {member.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-blue"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col gap-14">
          <div className="flex flex-col gap-5">
            <span className="font-mono-label text-xs uppercase tracking-wide text-muted-2">
              Focus
            </span>
            <div className="flex flex-wrap gap-2">
              {member.focus.map((f) => (
                <Tag key={f}>{f}</Tag>
              ))}
            </div>
          </div>

          {member.currentWork && (
            <div className="flex flex-col gap-3 rounded-2xl border border-orange/30 bg-background-elevated/40 p-8">
              <span className="font-mono-label text-xs uppercase tracking-wide text-orange">
                Current Work: {member.currentWork.label}
              </span>
              <p className="text-base leading-relaxed text-muted">
                {member.currentWork.description}
              </p>
            </div>
          )}

          {member.selectedWork && member.selectedWork.length > 0 && (
            <div className="flex flex-col gap-5">
              <span className="font-mono-label text-xs uppercase tracking-wide text-muted-2">
                Selected Work
              </span>
              <ul className="flex flex-col gap-2.5">
                {member.selectedWork.map((work) => (
                  <li key={work} className="flex items-center gap-3 text-sm text-foreground/90">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-blue" />
                    {work}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {(relatedProducts.length > 0 || relatedCaseStudies.length > 0) && (
            <div className="flex flex-col gap-5">
              <span className="font-mono-label text-xs uppercase tracking-wide text-muted-2">
                Real Work
              </span>
              <div className="grid gap-6 sm:grid-cols-2">
                {relatedProducts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/products/${p.slug}`}
                    className="group flex flex-col gap-4 rounded-2xl border border-border p-6 transition-colors hover:border-blue/60"
                  >
                    <ScreenshotFrame
                      src={p.screenshots?.[0]}
                      alt={`${p.name} screenshot`}
                      label={p.name}
                      aspect={p.screenshotAspect}
                      sizes="(min-width: 640px) 50vw, 100vw"
                    />
                    <div>
                      <span className="font-mono-label text-[11px] uppercase tracking-wide text-teal-bright">
                        Product
                      </span>
                      <p className="mt-2 font-display text-lg font-semibold text-foreground group-hover:text-teal">
                        {p.name}
                      </p>
                    </div>
                  </Link>
                ))}
                {relatedCaseStudies.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/case-studies/${c.slug}`}
                    className="rounded-2xl border border-border p-6 transition-colors hover:border-blue/60"
                  >
                    <span className="font-mono-label text-[11px] uppercase tracking-wide text-teal-bright">
                      Case Study
                    </span>
                    <p className="mt-2 font-display text-lg font-semibold text-foreground">
                      {c.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
