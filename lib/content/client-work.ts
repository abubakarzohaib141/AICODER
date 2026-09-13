export type ClientProject = {
  slug: string;
  name: string;
  category: string;
  description: string;
  builtBy: string;
  builtBySlug: string;
  /** Path under /public to a real screenshot. Omit to show an honest placeholder. */
  screenshot?: string;
};

export const clientWork: ClientProject[] = [
  {
    slug: "crm-suite",
    name: "CRM & Business Automation Suite",
    category: "CRM · Sales · Payments · Automation",
    description:
      "A custom-built CRM that unifies sales, customers, revenue, payments, disputes, calls and automations into one operational system with real-time dashboards and automated workflows.",
    builtBy: "Muhammad Bin Zohaib",
    builtBySlug: "muhammad",
  },
  {
    slug: "ai-hiring-agent",
    name: "AI Hiring Agent",
    category: "HR Automation",
    description:
      "AI-powered hiring automation that screens, scores, communicates with, and moves candidates through each stage of the funnel automatically.",
    builtBy: "Muhammad Bin Zohaib",
    builtBySlug: "muhammad",
  },
];
