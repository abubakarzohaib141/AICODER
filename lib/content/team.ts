export type TeamLink = { label: string; href: string };

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  focus: string[];
  selectedWork?: string[];
  currentWork?: { label: string; description: string };
  bio: string;
  links: TeamLink[];
  featured: boolean;
};

export const team: TeamMember[] = [
  {
    slug: "hafsa",
    name: "Syeda Hafsa",
    role: "Agentic AI Developer",
    focus: ["Agentic AI", "AI Agents", "SaaS", "AI Product Development"],
    selectedWork: ["tResolv", "AI CV & Job Application Platform"],
    bio: "Hafsa builds agentic AI systems and SaaS products end to end — from agent design and reasoning workflows through to a shipped product.",
    links: [],
    featured: true,
  },
  {
    slug: "muhammad",
    name: "Muhammad Bin Zohaib",
    role: "AI Automation Developer",
    focus: [
      "AI Automation",
      "CRM Systems",
      "Sales Automation",
      "Affiliate Systems",
      "HR AI Agents",
    ],
    selectedWork: [
      "CRM projects",
      "Sales systems",
      "Affiliate systems",
      "HR AI agents",
      "Client automation projects",
    ],
    currentWork: {
      label: "Sending AC",
      description: "Developing CRM, sales, affiliate and HR AI systems.",
    },
    bio: "Muhammad builds CRM and automation systems for business clients — connecting sales, affiliate and HR workflows into working software.",
    links: [],
    featured: true,
  },
  {
    slug: "abubakar",
    name: "Abubakar Bin Zohaib",
    role: "Agentic AI Developer",
    focus: ["AI Agents", "Agent SDKs", "AI Automation", "n8n", "OpenAI Agent SDK"],
    selectedWork: ["ABZ Agent SDK"],
    bio: "Abubakar builds developer infrastructure for AI agents, including the ABZ Agent SDK, and teaches AI automation as an educator and YouTube creator.",
    links: [],
    featured: true,
  },
  {
    slug: "bushra",
    name: "Bushra Zohaib",
    role: "AI Strategist / AI Educator / Agency Lead",
    focus: ["AI strategy", "AI education", "AI applications", "Business use of AI"],
    bio: "Bushra focuses on AI strategy and education — helping businesses understand where AI applies to their operations.",
    links: [],
    featured: false,
  },
];
