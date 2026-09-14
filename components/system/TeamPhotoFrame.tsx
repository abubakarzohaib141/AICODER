import Image from "next/image";

export function TeamPhotoFrame({
  photo,
  name,
  accent,
  size = "md",
  shape = "square",
  sizes = "100vw",
}: {
  photo?: string;
  name: string;
  accent: string;
  size?: "sm" | "md" | "lg";
  shape?: "square" | "circle";
  sizes?: string;
}) {
  const dimensions =
    size === "lg" ? "h-24 w-24 sm:h-28 sm:w-28" : size === "sm" ? "h-[52px] w-[52px]" : "h-16 w-16";
  const radius = shape === "circle" ? "rounded-full" : "rounded-2xl";

  if (photo) {
    return (
      <div
        className={`relative ${dimensions} shrink-0 overflow-hidden ${radius} border border-border bg-background-elevated-2`}
      >
        <Image src={photo} alt={name} fill sizes={sizes} className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className={`flex ${dimensions} shrink-0 items-center justify-center overflow-hidden ${radius} border border-dashed border-border-strong bg-background-elevated-2/50`}
    >
      <span
        className="font-display text-2xl font-bold leading-none sm:text-3xl"
        style={{ color: accent }}
      >
        {name[0]}
      </span>
    </div>
  );
}
