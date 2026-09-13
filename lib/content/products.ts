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
  /** The flagship item gets the large showcase treatment; everything else sits in the grid below. */
  featured?: boolean;
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
    featured: true,
  },
  {
    slug: "scope-ai-cv",
    index: "02",
    category: "AI Product Development",
    name: "Scope AI CV",
    title: "Scope AI CV — AI CV & Job Application Platform",
    description:
      "An AI-powered CV and job application platform built for a client, from concept through a working product.",
    builtBy: "Syeda Hafsa",
    builtBySlug: "hafsa",
    links: [
      { label: "Visit Scope AI CV", href: "https://scopeaicv.com/" },
      { label: "View Case Study", href: "/case-studies/cv-job-platform" },
    ],
    technology: ["AI Product Development", "Automation"],
  },
  {
    slug: "lenny-ai",
    index: "03",
    category: "RAG / Business Intelligence",
    name: "Lenny AI",
    title: "Lenny AI — RAG Agent for Business Intelligence",
    description:
      "A specialized RAG (Retrieval-Augmented Generation) agent for business intelligence. Its vector embedding pipeline and prompt engineering framework give Lenny grounded, context-aware business responses.",
    builtBy: "Syeda Hafsa",
    builtBySlug: "hafsa",
    links: [],
    technology: ["RAG", "Vector Embeddings", "Prompt Engineering"],
  },
  {
    slug: "abz-agent-sdk",
    index: "04",
    category: "AI Developer Infrastructure",
    name: "ABZ Agent SDK",
    title: "ABZ Agent SDK",
    description: "An agent-development SDK created by Abubakar for building AI agent systems.",
    builtBy: "Abubakar Bin Zohaib",
    builtBySlug: "abubakar",
    links: [],
    technology: ["Agent SDKs", "OpenAI Agent SDK", "Python"],
  },
  {
    slug: "crm-suite",
    index: "05",
    category: "CRM · Sales · Payments · Automation",
    name: "CRM & Business Automation Suite",
    title: "CRM & Business Automation Suite",
    description:
      "A custom-built CRM that unifies sales, customers, revenue, payments, disputes, calls and automations into one operational system with real-time dashboards and automated workflows.",
    builtBy: "Muhammad Bin Zohaib",
    builtBySlug: "muhammad",
    links: [],
    technology: ["CRM", "Automation", "Dashboards"],
  },
  {
    slug: "ai-hiring-agent",
    index: "06",
    category: "HR Automation",
    name: "AI Hiring Agent",
    title: "AI Hiring Agent",
    description:
      "AI-powered hiring automation that screens, scores, communicates with, and moves candidates through each stage of the funnel automatically.",
    builtBy: "Muhammad Bin Zohaib",
    builtBySlug: "muhammad",
    links: [],
    technology: ["AI Agents", "Automation", "HR Tech"],
  },
];
