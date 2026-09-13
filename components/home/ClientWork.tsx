import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

export function ClientWork() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrowNumber="03"
          eyebrow="Selected client work"
          title="AI Systems Built for Real Businesses"
        />

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-background-elevated/40 p-8">
            <span className="font-mono-label text-xs uppercase tracking-wide text-teal-bright">
              CRM &amp; Business Automation
            </span>
            <p className="text-base leading-relaxed text-muted">
              Custom CRM and automation systems developed for business clients, including sales,
              affiliate and HR workflows.
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <Tag>CRM</Tag>
              <Tag>Sales</Tag>
              <Tag>Affiliate</Tag>
              <Tag>HR</Tag>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-background-elevated/40 p-8">
            <span className="font-mono-label text-xs uppercase tracking-wide text-orange">
              Current Project — Sending AC
            </span>
            <p className="text-base leading-relaxed text-muted">
              AI-powered CRM, sales, affiliate and HR systems currently being developed for
              Sending AC.
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <Tag>In Development</Tag>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
