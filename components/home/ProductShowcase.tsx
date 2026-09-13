import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TicketMock } from "@/components/system/TicketMock";
import { DocumentMock } from "@/components/system/DocumentMock";
import { SdkMock } from "@/components/system/SdkMock";
import { Tag } from "@/components/ui/Tag";
import { products } from "@/lib/content/products";

export function ProductShowcase() {
  const [tresolv, cvPlatform, sdk] = products;

  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Products we've built"
          title="Products We've Built"
          description="Real AI products built by our engineering team."
        />

        <div className="grid gap-6 overflow-hidden rounded-3xl border border-border bg-background-elevated-2/40 p-2 lg:grid-cols-2 lg:p-3">
          <div className="flex flex-col gap-8 p-6 sm:p-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <span className="font-display text-2xl font-bold text-foreground">tResolv</span>
                <span className="font-mono-label text-[11px] uppercase tracking-wide text-muted-2">
                  {tresolv.category}
                </span>
              </div>
              <p className="max-w-sm text-base leading-relaxed text-muted">
                {tresolv.description}
              </p>
            </div>

            {tresolv.technology && (
              <div className="flex flex-wrap gap-2">
                {tresolv.technology.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            )}

            <div className="mt-auto flex items-center justify-between">
              <span className="text-sm text-muted-2">Built by {tresolv.builtBy}</span>
              <Link
                href={`/products/${tresolv.slug}`}
                className="text-sm font-medium text-foreground transition-colors hover:text-teal"
              >
                View Product →
              </Link>
            </div>
          </div>
          <div className="p-4 sm:p-6">
            <TicketMock />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-5">
          <Link
            href={`/products/${cvPlatform.slug}`}
            className="group flex flex-col gap-6 rounded-2xl border border-border p-7 transition-colors hover:border-teal/50 sm:col-span-2"
          >
            <span className="font-display text-lg font-semibold text-foreground">
              {cvPlatform.name}
            </span>
            <div className="h-40">
              <DocumentMock />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-2">Built by {cvPlatform.builtBy}</span>
              <span className="text-sm text-foreground/80 group-hover:text-teal">
                View Case Study →
              </span>
            </div>
          </Link>

          <div className="flex flex-col gap-6 rounded-2xl border border-border p-7 sm:col-span-3 sm:flex-row sm:items-center">
            <div className="h-32 sm:h-full sm:w-52 sm:shrink-0">
              <SdkMock />
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <span className="font-display text-lg font-semibold text-foreground">
                {sdk.name}
              </span>
              <p className="text-sm leading-relaxed text-muted">Agent infrastructure for building AI agent systems.</p>
              <span className="text-xs text-muted-2">Built by {sdk.builtBy}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
