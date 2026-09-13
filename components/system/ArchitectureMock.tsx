const nodes = ["Lead", "Automation", "CRM", "Reporting"];

export function ArchitectureMock() {
  return (
    <div className="flex w-full items-center justify-between gap-2">
      {nodes.map((node, i) => (
        <div key={node} className="flex flex-1 items-center gap-2">
          <div className="flex flex-1 flex-col items-center gap-2 rounded-xl border border-border bg-background-elevated px-3 py-4 text-center">
            <span
              className="h-2 w-2 rounded-full"
              style={{
                background: i % 2 === 0 ? "var(--accent-teal)" : "var(--accent-blue)",
              }}
            />
            <span className="text-xs font-medium text-foreground/80">{node}</span>
          </div>
          {i < nodes.length - 1 && <span className="shrink-0 text-muted-2">→</span>}
        </div>
      ))}
    </div>
  );
}
