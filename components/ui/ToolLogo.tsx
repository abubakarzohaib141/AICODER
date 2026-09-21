import Image from "next/image";

export type ToolKey = "n8n" | "openai" | "supabase";

export const tools: Record<ToolKey, { src: string; label: string }> = {
  n8n: { src: "/logos/n8n.png", label: "n8n" },
  openai: { src: "/logos/openai.png", label: "OpenAI" },
  supabase: { src: "/logos/supabase.webp", label: "Supabase" },
};

export function ToolLogo({ tool, className = "" }: { tool: ToolKey; className?: string }) {
  const logo = tools[tool];
  return (
    <span className={`relative block ${className}`}>
      <Image src={logo.src} alt={logo.label} fill sizes="120px" className="object-contain" />
    </span>
  );
}
