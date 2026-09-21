import { ToolLogo, toolList } from "./ToolLogo";

export function BuiltWithRow({ label = "Built with" }: { label?: string }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-eyebrow text-[10px] text-muted-2">{label}</span>
      <div className="flex flex-wrap items-center gap-2.5">
        {toolList.map((tool) => (
          <span
            key={tool}
            className="flex h-10 items-center rounded-full border border-border bg-background-elevated px-4"
          >
            <ToolLogo tool={tool} className="h-5 w-[72px]" />
          </span>
        ))}
      </div>
    </div>
  );
}
