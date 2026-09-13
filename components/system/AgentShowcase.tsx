const steps = [
  { label: "Customer identified", done: true },
  { label: "Shopify order checked", done: true },
  { label: "Tracking found", done: true },
];

export function AgentShowcase() {
  return (
    <div className="mx-auto w-full max-w-md">
      <div className="hidden items-end justify-between px-6 sm:flex">
        <div className="rounded-xl border border-border bg-background-elevated px-4 py-2.5 shadow-[0_1px_2px_rgba(32,30,28,0.04)]">
          <span className="font-display text-xs font-semibold text-foreground/80">Shopify</span>
        </div>
        <div className="rounded-xl border border-border bg-background-elevated px-4 py-2.5 shadow-[0_1px_2px_rgba(32,30,28,0.04)]">
          <span className="font-display text-xs font-semibold text-foreground/80">Gmail</span>
        </div>
      </div>

      <svg
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
        className="hidden h-10 w-full sm:block"
        aria-hidden="true"
      >
        <path d="M14 0 C 14 28, 40 28, 50 28" fill="none" stroke="var(--border-strong)" strokeWidth="1" />
        <path d="M86 0 C 86 28, 60 28, 50 28" fill="none" stroke="var(--border-strong)" strokeWidth="1" />
        <path d="M50 28 L50 40" fill="none" stroke="var(--border-strong)" strokeWidth="1" />
      </svg>

      <div className="rounded-2xl border border-border bg-background-elevated p-6 shadow-[0_20px_60px_-25px_rgba(32,30,28,0.25)] sm:p-7">
        <div className="mb-5 flex items-center justify-between">
          <span className="font-mono-label text-[11px] uppercase tracking-[0.14em] text-muted-2">
            AI Agent
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-teal/10 px-2.5 py-1 font-mono-label text-[10px] uppercase tracking-wide text-teal">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            Active
          </span>
        </div>

        <div className="mb-5 rounded-xl bg-background-elevated-2 px-4 py-3">
          <p className="text-sm text-foreground/90">&ldquo;Where is order #4821?&rdquo;</p>
        </div>

        <ul className="mb-5 flex flex-col gap-2.5">
          {steps.map((step) => (
            <li key={step.label} className="flex items-center gap-2.5 text-sm text-foreground/80">
              <svg viewBox="0 0 16 16" className="h-4 w-4 shrink-0 text-teal" aria-hidden="true">
                <circle cx="8" cy="8" r="7.25" fill="none" stroke="currentColor" strokeWidth="1.4" />
                <path
                  d="M5 8.3 L7 10.3 L11.2 5.8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {step.label}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between rounded-xl border border-blue/25 bg-blue/[0.06] px-4 py-3">
          <span className="text-sm font-medium text-foreground">Response ready</span>
          <span className="text-blue">→</span>
        </div>
      </div>
    </div>
  );
}
