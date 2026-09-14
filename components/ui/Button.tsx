import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "gradient";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-150 whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-foreground text-background hover:opacity-85",
  secondary:
    "border border-border-strong text-foreground hover:border-blue hover:bg-background-elevated",
  ghost: "text-foreground/80 hover:text-foreground",
  gradient: "bg-gradient-brand text-white transition-transform hover:-translate-y-0.5",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}) {
  const classes = `${base} ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
