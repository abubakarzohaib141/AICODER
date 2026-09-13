export function DocumentMock() {
  return (
    <div className="flex h-full w-full flex-col justify-between rounded-2xl border border-border bg-background-elevated p-6">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="h-2.5 w-24 rounded-full bg-foreground/15" />
          <span className="rounded-full bg-orange/10 px-2 py-0.5 font-mono-label text-[10px] uppercase tracking-wide text-orange">
            Draft
          </span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-background-elevated-2" />
        <div className="h-1.5 w-[85%] rounded-full bg-background-elevated-2" />
        <div className="h-1.5 w-[70%] rounded-full bg-background-elevated-2" />
        <div className="mt-2 h-1.5 w-full rounded-full bg-background-elevated-2" />
        <div className="h-1.5 w-[60%] rounded-full bg-background-elevated-2" />
      </div>
      <div className="mt-6 flex gap-2">
        <span className="rounded-full border border-border-strong px-2.5 py-1 text-[11px] text-muted">
          Experience
        </span>
        <span className="rounded-full border border-border-strong px-2.5 py-1 text-[11px] text-muted">
          Skills
        </span>
      </div>
    </div>
  );
}
