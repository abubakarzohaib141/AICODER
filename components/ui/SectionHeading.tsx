import { ReactNode } from "react";

export function SectionLabel({ number, children }: { number?: string; children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 font-mono-label text-xs uppercase tracking-[0.18em] text-muted">
      {number && <span className="text-orange">{number}</span>}
      <span>{children}</span>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  eyebrowNumber,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  eyebrowNumber?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow && <SectionLabel number={eyebrowNumber}>{eyebrow}</SectionLabel>}
      <h2 className="text-section text-3xl text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && <p className="text-base leading-relaxed text-muted sm:text-lg">{description}</p>}
    </div>
  );
}
