export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border-strong px-3 py-1 font-mono-label text-[11px] uppercase tracking-wide text-muted">
      {children}
    </span>
  );
}
