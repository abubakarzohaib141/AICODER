import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArchitectureMock } from "@/components/system/ArchitectureMock";

export function ClientWork() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Selected client work"
          title="AI Systems Built for Real Businesses"
        />

        <div className="flex flex-col gap-8 rounded-2xl border border-border bg-background-elevated-2/40 p-8 sm:p-10">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-display text-xl font-bold text-foreground">
                CRM + Business Automation
              </span>
              <span className="rounded-full bg-orange/10 px-2.5 py-1 font-mono-label text-[10px] uppercase tracking-wide text-orange">
                In Development
              </span>
            </div>
            <p className="text-sm text-muted-2">
              Sales automation · Affiliate workflows · HR systems · CRM
            </p>
            <p className="max-w-xl text-base leading-relaxed text-muted">
              Custom business systems built around real operational workflows — including a CRM,
              sales and automation system currently in development for Sending AC.
            </p>
          </div>

          <ArchitectureMock />
        </div>
      </Container>
    </section>
  );
}
