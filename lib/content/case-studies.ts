export type CaseStudy = {
  slug: string;
  index: string;
  category: string;
  title: string;
  summary: string;
  problem: string;
  challenge: string;
  solution: string;
  workflow: string[];
  technology: string[];
  results: string;
  builtBy?: string;
  builtBySlug?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "tresolv",
    index: "01",
    category: "AI Customer Support / Shopify",
    title: "tResolv — AI Customer Support for Shopify Brands",
    summary:
      "An AI agent that handles repetitive Shopify customer support conversations so human agents can focus on the cases that need judgment.",
    problem:
      "Shopify brands field a high volume of repetitive support questions — order status, returns, shipping policy — that consume support-team time without needing a human decision.",
    challenge:
      "A generic chatbot can answer FAQs, but customer support requires reading store data, order history and policy, then deciding when to resolve a conversation versus escalate it.",
    solution:
      "We built tResolv, an AI support agent for Shopify stores that reads store and order context, resolves common conversations directly, and hands off to a human when a case falls outside its scope.",
    workflow: ["Customer", "AI Agent", "Shopify / Order Data", "Resolution or Human Escalation"],
    technology: ["Shopify", "AI Agents", "RAG", "APIs"],
    results:
      "tResolv is live and in active use by Shopify brands. Detailed performance metrics will be published as more merchant data becomes available.",
    builtBy: "Syeda Hafsa",
    builtBySlug: "hafsa",
  },
  {
    slug: "cv-job-platform",
    index: "02",
    category: "AI Product Development",
    title: "AI CV & Job Application Platform",
    summary:
      "An AI-powered platform that helps job seekers generate CVs and manage job application workflows.",
    problem:
      "Building an effective CV and managing applications across multiple roles is time-consuming and inconsistent to do manually.",
    challenge:
      "The system needed to generate genuinely useful, tailored output rather than a generic template filler, while keeping the workflow simple for the end user.",
    solution:
      "We designed and built an AI-powered platform that generates CVs and supports the surrounding job-application workflow, from a client concept through to a working product.",
    workflow: ["User Input", "AI Generation", "Review & Edit", "Export / Apply"],
    technology: ["AI Product Development", "Automation"],
    results:
      "The platform was delivered as a working product for the client. Usage metrics are the client's to share.",
    builtBy: "Syeda Hafsa",
    builtBySlug: "hafsa",
  },
  {
    slug: "crm-automation",
    index: "03",
    category: "Business Automation",
    title: "CRM & Business Automation Systems",
    summary:
      "Custom CRM and automation systems built for business clients, connecting sales, affiliate and HR workflows.",
    problem:
      "Growing businesses often run sales, affiliate and HR processes across disconnected tools and manual spreadsheets, which slows the team down as volume grows.",
    challenge:
      "Off-the-shelf CRM and automation tools rarely match a business's actual process, forcing teams to work around the software instead of with it.",
    solution:
      "We build custom CRM and automation systems designed around each client's actual sales, affiliate and HR workflows — including a CRM, sales and automation system currently in development for Sending AC.",
    workflow: ["Lead / Record Intake", "Automation Rules", "CRM", "Reporting & Handoff"],
    technology: ["CRM", "APIs", "Automation", "Database"],
    results:
      "This work is ongoing. Specific client details and metrics are shared only with permission.",
    builtBy: "Muhammad Bin Zohaib",
    builtBySlug: "muhammad",
  },
];
