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
      "We built tResolv, an AI support agent that lives in a Shopify store's own chat widget. It reads real order data, resolves common requests directly, and stages actions like cancellations for one-tap merchant approval instead of acting unsupervised.",
    workflow: ["Customer", "AI Agent", "Shopify Order Data", "Merchant Approval or Resolution"],
    technology: ["Shopify", "AI Agents", "RAG", "APIs"],
    results:
      "tResolv is live at tresolv.online. Detailed performance metrics will be published as more merchant data becomes available.",
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
      "A custom CRM that unifies sales, customers, revenue and support into one system, plus an AI hiring agent that automates the recruiting funnel.",
    problem:
      "Growing businesses often run sales, revenue, support and hiring across disconnected tools and manual spreadsheets, which slows the team down as volume grows.",
    challenge:
      "Off-the-shelf CRM and hiring tools rarely match a business's actual process, forcing teams to work around the software instead of with it.",
    solution:
      "We built a custom CRM that unifies sales, customers, revenue, payments, disputes and calls into one operational system with real-time dashboards and automated workflows — alongside an AI hiring agent that screens, scores and communicates with candidates through each stage of the funnel automatically.",
    workflow: ["Lead / Record Intake", "Automation Rules", "CRM", "Reporting & Handoff"],
    technology: ["CRM", "APIs", "Automation", "Database"],
    results:
      "Both systems are built and in use internally. Client details are shared only with permission.",
    builtBy: "Muhammad Bin Zohaib",
    builtBySlug: "muhammad",
  },
];
