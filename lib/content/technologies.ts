export type TechGroup = { name: string; items: string[] };

export const technologies: TechGroup[] = [
  { name: "AI & Agents", items: ["OpenAI", "Agent SDKs", "LLMs", "RAG", "AI Agents"] },
  { name: "Automation", items: ["n8n", "APIs", "Webhooks", "Workflow Automation"] },
  { name: "Development", items: ["Python", "TypeScript", "Next.js", "Databases", "APIs"] },
  {
    name: "Integrations",
    items: ["Shopify", "CRM Systems", "Business Platforms", "Third-Party APIs"],
  },
];

export type Industry = {
  name: string;
  problem: string;
  items: string[];
  example?: { label: string; href: string };
};

export const industries: Industry[] = [
  {
    name: "E-commerce",
    problem: "Support teams field the same order, shipping and return questions all day.",
    items: ["Shopify support", "Customer service agents", "Sales automation", "Order workflows"],
    example: { label: "See tResolv", href: "/products/tresolv" },
  },
  {
    name: "Healthcare & Pharma",
    problem: "Clinical and admin staff lose hours to scheduling, documentation and repetitive intake.",
    items: [
      "AI assistants",
      "Documentation",
      "Internal knowledge systems",
      "Workflow automation",
      "Human-in-the-loop systems",
    ],
    example: { label: "See AI Dental Receptionist", href: "/products/dental-receptionist" },
  },
  {
    name: "Business Operations",
    problem: "Sales, CRM, hiring and reporting run across disconnected tools and manual spreadsheets.",
    items: ["CRM", "Sales", "HR", "Lead management", "Internal automation"],
    example: { label: "See CRM & Business Automation Suite", href: "/products/crm-suite" },
  },
  {
    name: "Education",
    problem: "Admissions, evaluation and research work is manual, repetitive and slow to scale.",
    items: ["AI knowledge systems", "Research assistants", "Educational automation"],
    example: { label: "See AI University Admissions Evaluator", href: "/products/university-admissions" },
  },
];

export type ProcessStep = { number: string; name: string; description: string };

export const process: ProcessStep[] = [
  { number: "01", name: "Discover", description: "Understand the business, workflow and problem." },
  {
    number: "02",
    name: "Design",
    description: "Define AI architecture, agent behavior, tools, integrations and human checkpoints.",
  },
  { number: "03", name: "Build", description: "Develop the AI system and required integrations." },
  {
    number: "04",
    name: "Test",
    description: "Test workflows, edge cases, reliability and human escalation.",
  },
  { number: "05", name: "Deploy", description: "Integrate the system into the client's environment." },
  {
    number: "06",
    name: "Improve",
    description: "Monitor, evaluate and continuously improve the system.",
  },
];

export type WhyPoint = { name: string; description: string };

export const whyPoints: WhyPoint[] = [
  {
    name: "Product-Minded",
    description:
      "We build systems intended for real users and business operations, not just demonstrations.",
  },
  {
    name: "Engineering-Focused",
    description:
      "Our work combines AI agents, automation, APIs, software development and business logic.",
  },
  {
    name: "Custom-Built",
    description:
      "We design systems around the client's actual workflow rather than forcing the business into a generic solution.",
  },
  {
    name: "Human-in-the-Loop",
    description:
      "For sensitive or high-impact workflows, human review and approval can remain part of the system.",
  },
];

export type ComparisonPoint = string;

export const demoPoints: ComparisonPoint[] = [
  "Static prompt",
  "API call",
  "Looks impressive",
  "No real data",
  "No failure handling",
  "No evaluation",
  "No business integration",
];

export const productionPoints: ComparisonPoint[] = [
  "Real data",
  "Retrieval",
  "Reasoning",
  "Tools",
  "APIs",
  "Guardrails",
  "Human approval",
  "Evaluation",
  "Fallbacks",
  "Monitoring",
  "Real business actions",
];
