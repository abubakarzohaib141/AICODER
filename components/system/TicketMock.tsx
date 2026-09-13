export function TicketMock() {
  return (
    <div className="w-full rounded-2xl border border-border bg-background-elevated p-6 shadow-[0_20px_60px_-28px_rgba(32,30,28,0.28)] sm:p-7">
      <div className="mb-5 flex items-center justify-between">
        <span className="font-mono-label text-[11px] uppercase tracking-[0.14em] text-muted-2">
          Support Ticket
        </span>
        <span className="rounded-full bg-teal/10 px-2.5 py-1 font-mono-label text-[10px] uppercase tracking-wide text-teal">
          Resolved
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <div className="max-w-[85%] rounded-xl bg-background-elevated-2 px-4 py-3">
          <p className="text-xs text-muted-2">Customer</p>
          <p className="mt-1 text-sm text-foreground/90">
            &ldquo;Hey, when will my order arrive?&rdquo;
          </p>
        </div>

        <div className="flex justify-center text-muted-2">↓</div>

        <div className="ml-auto max-w-[85%] rounded-xl bg-teal/[0.07] px-4 py-3">
          <p className="text-xs text-teal">tResolv</p>
          <p className="mt-1 text-sm text-foreground/90">
            Your order ships tomorrow — tracking is attached below.
          </p>
        </div>

        <div className="flex justify-center text-muted-2">↓</div>

        <div className="flex items-center justify-between rounded-xl border border-blue/25 bg-blue/[0.06] px-4 py-3">
          <span className="text-sm font-medium text-foreground">Shopify order updated</span>
          <span className="text-blue">✓</span>
        </div>
      </div>
    </div>
  );
}
