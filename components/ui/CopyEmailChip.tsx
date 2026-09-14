"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/content/site";

export function CopyEmailChip({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable; the email is still visible as plain text.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`group inline-flex items-center gap-2 rounded-full border border-border-strong px-3.5 py-2 text-sm text-muted transition-colors hover:border-teal/40 hover:text-foreground ${className}`}
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="shrink-0 text-muted-2 transition-colors group-hover:text-teal"
        aria-hidden="true"
      >
        <rect x="2" y="4" width="20" height="16" rx="2.5" />
        <path d="m3 6.5 9 6 9-6" />
      </svg>
      <span>{copied ? "Copied!" : siteConfig.email}</span>
    </button>
  );
}
