export function SdkMock() {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-2xl border border-border bg-background-elevated p-6">
      <svg viewBox="0 0 160 90" className="h-full w-full max-w-[220px]" aria-hidden="true">
        <path d="M30 45 H80 M80 45 H130 M80 45 V20 M80 45 V70" stroke="var(--border-strong)" strokeWidth="1.5" />
        <circle cx="30" cy="45" r="7" fill="var(--accent-teal, #147D8A)" opacity="0.85" />
        <circle cx="80" cy="45" r="9" fill="var(--accent-blue, #4F7FF7)" />
        <circle cx="130" cy="45" r="7" fill="var(--accent-indigo, #2B1BBA)" opacity="0.85" />
        <circle cx="80" cy="20" r="6" fill="var(--accent-teal, #147D8A)" opacity="0.55" />
        <circle cx="80" cy="70" r="6" fill="var(--accent-indigo, #2B1BBA)" opacity="0.55" />
      </svg>
    </div>
  );
}
