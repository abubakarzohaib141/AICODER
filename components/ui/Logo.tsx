import Link from "next/link";
import { LogoMark } from "./LogoMark";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className ?? ""}`}
      aria-label="AI Coders home"
    >
      <LogoMark className="h-7 w-7 shrink-0" />
      <span className="font-display text-[15px] font-semibold tracking-tight text-foreground">
        AI CODERS
      </span>
    </Link>
  );
}
