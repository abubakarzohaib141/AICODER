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
    slug: "ai-automation",
    number: "02",
    name: "AI Automation",
    summary:
      "AI-driven workflows that combine agents, tools and business logic to run a process end-to-end.",
    description:
      "Beyond a single agent, we build AI-driven automations that chain reasoning, tool calls and data together, so a whole workflow runs on its own with guardrails at every step.",
    bullets: [
      "Multi-step AI workflows",
      "Tool and API integration",
      "Retrieval-augmented reasoning",
      "Human handoff logic",
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
    slug: "agent-ticketing",
    number: "04",
    name: "Agent Ticketing Systems",
    summary: "AI agents that triage, route and resolve support and internal tickets.",
    description:
      "We build agent-based ticketing systems that read incoming requests, categorize and prioritize them, resolve the routine ones directly, and hand anything sensitive to the right person.",
    bullets: [
      "Ticket triage and categorization",
      "Automated first response",
      "Priority and SLA routing",
      "Human escalation",
    ],
  },
  {
    slug: "ai-product-development",
    number: "05",
    name: "AI Product Development",
    summary: "Turn an AI idea into a working product.",
    description:
      "From a rough idea to a shipped product, we handle the full path: prototyping the core AI behavior, building the product around it, and getting it into production.",
    bullets: ["Idea", "Prototype", "Product", "Deployment"],
  },
];
