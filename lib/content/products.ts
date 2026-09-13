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
  /** Path under /public to a real product screenshot. Omit to show an honest placeholder. */
  screenshot?: string;
};

export const products: Product[] = [
  {
    slug: "tresolv",
    index: "01",
    category: "AI Customer Support / Shopify",
    name: "tResolv",
    title: "tResolv — AI Customer Support Agent for Shopify",
    description:
      "tResolv answers Shopify customers directly in the storefront chat — looking up real order data and staging actions like cancellations for one-tap merchant approval.",
    builtBy: "Syeda Hafsa",
    builtBySlug: "hafsa",
    links: [{ label: "Visit tResolv", href: "http://tresolv.online/" }],
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
