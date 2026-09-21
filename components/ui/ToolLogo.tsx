import Image from "next/image";

export type ToolKey = "n8n" | "openai" | "gemini" | "elevenlabs" | "supabase";

export const tools: Record<ToolKey, { src: string; label: string }> = {
  n8n: { src: "/logos/n8n.png", label: "n8n" },
  openai: { src: "/logos/openai.png", label: "OpenAI" },
  gemini: { src: "/logos/gemini.webp", label: "Gemini" },
  elevenlabs: { src: "/logos/elevenlabs.png", label: "ElevenLabs" },
  supabase: { src: "/logos/supabase.jpg", label: "Supabase" },
};

export const toolList = Object.keys(tools) as ToolKey[];

export function ToolLogo({ tool, className = "" }: { tool: ToolKey; className?: string }) {
  const logo = tools[tool];
  return (
    <span className={`relative block ${className}`}>
      <Image src={logo.src} alt={logo.label} fill sizes="120px" className="object-contain" />
    </span>
  );
}
