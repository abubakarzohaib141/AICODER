import Link from "next/link";
import { LogoMark } from "./LogoMark";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className ?? ""}`}
      aria-label="AI Coders home"
    >
      <LogoMark className="h-9 w-9 shrink-0" />
      <span className="font-display text-[17px] font-semibold tracking-tight text-foreground">
        AI CODERS
      </span>
    </Link>
  );
}
