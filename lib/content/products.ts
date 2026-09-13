export type Product = {
  slug: string;
  index: string;
  category: string;
  name: string;
  title: string;
  description: string;
  builtBy: string;
  builtBySlug: string;
  links: { label: string; href: string }[];
  technology?: string[];
};

export const products: Product[] = [
  {
    slug: "tresolv",
    index: "01",
    category: "AI Customer Support / Shopify",
    name: "tResolv",
    title: "tResolv — AI Customer Support Agent for Shopify",
    description:
      "An AI customer support agent designed for Shopify brands to automate repetitive customer conversations and support workflows.",
    builtBy: "Syeda Hafsa",
    builtBySlug: "hafsa",
    links: [],
    technology: ["Shopify", "AI Agents", "RAG", "APIs"],
  },
  {
    slug: "ai-cv-platform",
    index: "02",
    category: "AI Product Development",
    name: "AI CV & Job Application Platform",
    title: "AI CV & Job Application Platform",
    description:
      "An AI-powered platform for CV generation and job application workflows, developed for a client.",
    builtBy: "Syeda Hafsa",
    builtBySlug: "hafsa",
    links: [{ label: "View Case Study", href: "/case-studies/cv-job-platform" }],
    technology: ["AI Product Development", "Automation"],
  },
  {
    slug: "abz-agent-sdk",
    index: "03",
    category: "AI Developer Infrastructure",
    name: "ABZ Agent SDK",
    title: "ABZ Agent SDK",
    description: "An agent-development SDK created by Abubakar for building AI agent systems.",
    builtBy: "Abubakar Bin Zohaib",
    builtBySlug: "abubakar",
    links: [],
    technology: ["Agent SDKs", "OpenAI Agent SDK", "Python"],
  },
];
