import { Container } from "@/components/ui/Container";
import { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
}) {
  return (
    <section className="border-b border-border pb-14 pt-20 sm:pt-28">
      <Container className="flex flex-col gap-5">
        <span className="font-mono-label text-xs uppercase tracking-[0.18em] text-orange">
          {eyebrow}
        </span>
        <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">{description}</p>
        )}
      </Container>
    </section>
  );
}
