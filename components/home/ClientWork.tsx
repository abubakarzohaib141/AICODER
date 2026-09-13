import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScreenshotFrame } from "@/components/system/ScreenshotFrame";
import { clientWork } from "@/lib/content/client-work";

export function ClientWork() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Selected client work"
          title="AI Systems Built for Real Businesses"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {clientWork.map((project) => (
            <div
              key={project.slug}
              className="flex flex-col gap-5 rounded-2xl border border-border bg-background-elevated-2/40 p-7 sm:p-8"
            >
              <ScreenshotFrame
                src={project.screenshot}
                alt={`${project.name} screenshot`}
                label={project.name}
              />
              <div className="flex flex-col gap-2">
                <span className="font-mono-label text-[11px] uppercase tracking-wide text-teal">
                  {project.category}
                </span>
                <span className="font-display text-xl font-bold text-foreground">
                  {project.name}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted">{project.description}</p>
              <span className="text-xs text-muted-2">Built by {project.builtBy}</span>
            </div>
          ))}

          <a
            href="/contact"
            className="flex min-h-[220px] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border-strong p-7 text-center transition-colors hover:border-teal/50 sm:p-8"
          >
            <span className="font-mono-label text-[11px] uppercase tracking-wide text-muted-2">
              More work
            </span>
            <span className="text-sm text-muted">
              Additional client systems are on the way — get in touch to see current work.
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}
