import Image from "next/image";

export function ScreenshotFrame({
  src,
  alt,
  label,
  aspect = "16/10",
  sizes = "100vw",
}: {
  src?: string;
  alt: string;
  label: string;
  aspect?: string;
  sizes?: string;
}) {
  if (src) {
    return (
      <div
        className="relative w-full overflow-hidden rounded-xl border border-border bg-background-elevated-2"
        style={{ aspectRatio: aspect }}
      >
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover object-top" />
      </div>
    );
  }

  return (
    <div
      className="flex w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border-strong bg-background-elevated-2/50 text-center"
      style={{ aspectRatio: aspect }}
    >
      <span className="font-mono-label text-[11px] uppercase tracking-wide text-muted-2">
        Screenshot
      </span>
      <span className="px-6 text-sm text-muted">{label}</span>
    </div>
  );
}
