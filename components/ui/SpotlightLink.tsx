"use client";

import Link from "next/link";
import { ReactNode } from "react";

export function SpotlightLink({
  href,
  className = "",
  spotlightColor = "rgba(37,211,102,0.1)",
  children,
}: {
  href: string;
  className?: string;
  spotlightColor?: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
        event.currentTarget.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
      }}
      className={`group relative overflow-hidden ${className}`}
    >
      <span
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(240px circle at var(--spot-x, 50%) var(--spot-y, 50%), ${spotlightColor}, transparent 70%)`,
        }}
      />
      {children}
    </Link>
  );
}
