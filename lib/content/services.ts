export type Service = {
  slug: string;
  number: string;
  name: string;
  summary: string;
  description: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "ai-agents",
    number: "01",
    name: "AI Agents",
    summary:
      "Intelligent agents designed to perform specific business tasks, interact with tools, access information and execute workflows.",
    description:
      "We design and build AI agents that go beyond conversation: agents that can look things up, call APIs, take actions and hand off to a human when a decision needs one.",
    bullets: [
      "Customer support agents",
      "Sales agents",
      "HR agents",
      "Research agents",
      "Internal knowledge agents",
    ],
  },
  {
    slug: "agentic-ai",
    number: "02",
    name: "Agentic AI Systems",
    summary:
      "Multi-step AI systems combining agents, APIs, tools, databases and business logic.",
    description:
      "Beyond a single agent, we build coordinated systems: multiple agents, tools and data sources working together against a real workflow, with guardrails at every step.",
    bullets: [
      "Multi-agent orchestration",
      "Tool and API integration",
      "Retrieval-augmented reasoning",
      "State, memory and handoff logic",
    ],
  },
  {
    slug: "automation",
    number: "03",
    name: "Business Automation",
    summary: "Automate repetitive business workflows across the systems you already run.",
    description:
      "Not every problem needs an agent. We also automate the repetitive, rule-based workflows that quietly consume a team's time.",
    bullets: [
      "CRM",
      "Sales",
      "Customer support",
      "HR",
      "Reporting",
      "Documentation",
      "Lead management",
    ],
  },
  {
    slug: "ai-product-development",
    number: "04",
    name: "AI Product Development",
    summary: "Turn an AI idea into a working product.",
    description:
      "From a rough idea to a shipped product, we handle the full path: prototyping the core AI behavior, building the product around it, and getting it into production.",
    bullets: ["Idea", "Prototype", "Product", "Deployment"],
  },
  {
    slug: "custom-ai-engineering",
    number: "05",
    name: "Custom AI Engineering",
    summary:
      "Build custom AI systems around the client's existing workflow, infrastructure and requirements.",
    description:
      "Every business runs differently. We design systems around your actual stack, data and process instead of forcing you into a generic template.",
    bullets: [
      "Works with your existing infrastructure",
      "Designed around your workflow",
      "Integrates with the tools you already use",
    ],
  },
];
