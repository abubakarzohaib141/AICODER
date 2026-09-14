import { Fragment } from "react";

const steps = [
  { label: "Customer request", detail: "Chat, email, WhatsApp", accent: "var(--accent-blue)" },
  { label: "AI agent", detail: "Reads context, decides", accent: "var(--accent-teal)" },
  { label: "Tools & APIs", detail: "Order data, systems", accent: "var(--accent-indigo)" },
  { label: "Human approval", detail: "Sensitive actions only", accent: "var(--accent-orange)" },
  { label: "Resolved", detail: "Logged and closed", accent: "var(--accent-teal)" },
];

export function AgentFlowCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-border bg-background-elevated/60 p-5 sm:p-6 ${className}`}
    >
      <div className="mb-5 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-teal" />
        <span className="font-mono-label text-[11px] uppercase tracking-wide text-muted-2">
          A real agent workflow pattern
        </span>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
        {steps.map((step, i) => (
          <Fragment key={step.label}>
            <div className="flex flex-col gap-1 rounded-xl border border-border bg-background-elevated p-3 sm:flex-1">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: step.accent }}
              />
              <span className="font-display text-sm font-semibold text-foreground">
                {step.label}
              </span>
              <span className="text-xs text-muted-2">{step.detail}</span>
            </div>
            {i < steps.length - 1 && (
              <span className="flex shrink-0 items-center justify-center text-muted-2">
                <span className="sm:hidden">↓</span>
                <span className="hidden sm:inline">→</span>
              </span>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
