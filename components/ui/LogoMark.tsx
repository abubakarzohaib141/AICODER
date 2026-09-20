import Image from "next/image";

export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/logo-mark.png"
      alt=""
      width={64}
      height={64}
      className={`object-contain ${className ?? ""}`}
      aria-hidden="true"
    />
  );
}
