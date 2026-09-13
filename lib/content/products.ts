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
  /** Paths under /public to real screenshots. Omit to show an honest placeholder. */
  screenshots?: string[];
  /** The flagship item gets the large showcase treatment on the homepage. */
  featured?: boolean;
  /** Shown in the curated homepage grid. Everything else still appears on /products. */
  pinned?: boolean;
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
      "An AI-powered CV and job application platform built for a client — one CV upload, and the AI parses it, matches jobs and submits applications automatically.",
    builtBy: "Syeda Hafsa",
    builtBySlug: "hafsa",
    links: [
      { label: "Visit Scope AI CV", href: "https://scopeaicv.com/" },
      { label: "View Case Study", href: "/case-studies/cv-job-platform" },
    ],
    technology: ["AI Product Development", "Automation"],
    screenshots: ["/projects/scope-ai-cv.jpg"],
    pinned: true,
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
    screenshots: ["/projects/lenny-ai.jpg"],
    pinned: true,
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
    pinned: true,
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
    screenshots: ["/projects/crm-suite.jpg"],
    pinned: true,
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
    screenshots: ["/projects/ai-hiring-agent.jpg"],
    pinned: true,
  },
  {
    slug: "leadgen-ai-platform",
    index: "07",
    category: "Sales Automation / Lead Generation",
    name: "LeadGen AI Platform",
    title: "LeadGen AI Platform",
    description:
      "An AI-powered sales engine that finds leads from sources like Google Maps and LinkedIn, researches and scores them for fit, and writes personalized outreach — automating most of the manual prospecting work.",
    builtBy: "Syeda Hafsa",
    builtBySlug: "hafsa",
    links: [{ label: "Visit LeadGen AI", href: "https://lead-system.lovable.app/" }],
    technology: ["Lead Generation", "AI Scoring", "Automation"],
    screenshots: ["/projects/leadgen-ai.png"],
  },
  {
    slug: "legal-case-intake",
    index: "08",
    category: "Legal Tech / Document AI",
    name: "AI Legal Case Intake & Police Report Processing",
    title: "AI Legal Case Intake & Police Report Processing System",
    description:
      "A case-intake portal for law firms that extracts structured data from uploaded police reports, tracks statute-of-limitations deadlines, and gives attorneys a ready-to-review case dashboard.",
    builtBy: "Syeda Hafsa",
    builtBySlug: "hafsa",
    links: [],
    technology: ["Document AI", "Automation", "Case Management"],
    screenshots: ["/projects/legal-intake-1.png", "/projects/legal-intake-2.png"],
  },
  {
    slug: "dental-receptionist",
    index: "09",
    category: "Voice/Chat AI / Healthcare",
    name: "AI Dental Receptionist",
    title: "AI Dental Receptionist (WhatsApp)",
    description:
      "A WhatsApp-based AI receptionist for a dental clinic that books, reschedules and cancels appointments in natural conversation, syncing directly with the clinic's live calendar.",
    builtBy: "Syeda Hafsa",
    builtBySlug: "hafsa",
    links: [],
    technology: ["WhatsApp", "AI Agents", "Calendar Automation"],
    screenshots: ["/projects/dental-receptionist.png"],
  },
  {
    slug: "reactivate",
    index: "10",
    category: "Sales Automation / Email",
    name: "ReActivate",
    title: "ReActivate — AI Email Reactivation System",
    description:
      "An AI-driven email reactivation system for recruitment agencies that runs a four-email follow-up sequence, personalizes each message with Mistral AI, and stops automatically the moment a contact replies.",
    builtBy: "Syeda Hafsa",
    builtBySlug: "hafsa",
    links: [],
    technology: ["n8n", "Mistral AI", "Gmail", "Google Sheets"],
    screenshots: ["/projects/reactivate-1.png", "/projects/reactivate-2.png"],
  },
  {
    slug: "email-intelligence",
    index: "11",
    category: "Support Automation",
    name: "AI Email Intelligence Platform",
    title: "AI Email Intelligence Platform",
    description:
      "An AI email classification and reply engine that categorizes inbound support and sales emails by intent, drafts on-brand replies in seconds, and flags anything outside its scope.",
    builtBy: "Syeda Hafsa",
    builtBySlug: "hafsa",
    links: [],
    technology: ["AI Classification", "Email Automation"],
    screenshots: ["/projects/email-intelligence.png"],
  },
  {
    slug: "restaurant-receptionist",
    index: "12",
    category: "Voice AI / Hospitality",
    name: "AI Restaurant Receptionist",
    title: "AI Restaurant Receptionist (Voice-to-Order System)",
    description:
      "A fully autonomous voice agent that answers a restaurant's phone line, takes and confirms orders, and pushes them straight to the kitchen's live order dashboard with a call recording attached.",
    builtBy: "Syeda Hafsa",
    builtBySlug: "hafsa",
    links: [],
    technology: ["Voice AI", "Vapi", "Automation"],
    screenshots: ["/projects/restaurant-receptionist.png"],
  },
  {
    slug: "insurance-claims-assistant",
    index: "13",
    category: "Insurance / Document AI",
    name: "AI Insurance Claims Assistant",
    title: "AI Insurance Claims Assistant (WhatsApp)",
    description:
      "A WhatsApp claims concierge that walks users through submitting an insurance claim step by step, verifying each uploaded document — license, ID, vehicle ownership, police report — as it comes in.",
    builtBy: "Syeda Hafsa",
    builtBySlug: "hafsa",
    links: [],
    technology: ["WhatsApp", "Document Verification", "Automation"],
    screenshots: ["/projects/insurance-claims.png"],
  },
  {
    slug: "sales-scoreboard",
    index: "14",
    category: "Sales Intelligence",
    name: "Real-Time AI Sales Scoreboard",
    title: "Real-Time AI Sales Scoreboard (Gmail-Powered)",
    description:
      "A Gmail-connected sales dashboard that scores reply sentiment, surfaces prospects asking for follow-up, and generates a weekly AI performance review with a concrete action plan.",
    builtBy: "Syeda Hafsa",
    builtBySlug: "hafsa",
    links: [],
    technology: ["Gmail", "Sentiment Analysis", "Analytics"],
    screenshots: ["/projects/sales-scoreboard.png"],
  },
  {
    slug: "cleaning-ops-manager",
    index: "15",
    category: "Operations Automation",
    name: "AI Operations Manager",
    title: "AI Operations Manager (Home Cleaning Services)",
    description:
      "A WhatsApp-based operations assistant for a cleaning company that reads staff status updates from a group chat, confirms them instantly, and keeps the master job list in sync — in the client's own language.",
    builtBy: "Syeda Hafsa",
    builtBySlug: "hafsa",
    links: [],
    technology: ["WhatsApp", "Automation", "Multi-language"],
    screenshots: ["/projects/cleaning-ops.png"],
  },
  {
    slug: "invoice-tracker",
    index: "16",
    category: "Finance Automation",
    name: "Smart Invoice & Payment Tracker",
    title: "Smart Invoice & Payment Tracker",
    description:
      "An automation bridge that logs every new invoice into a central tracker the moment it's created, then sets a calendar payment reminder with a direct link to the invoice file.",
    builtBy: "Syeda Hafsa",
    builtBySlug: "hafsa",
    links: [],
    technology: ["Automation", "Google Sheets", "Calendar"],
    screenshots: ["/projects/invoice-tracker-1.png", "/projects/invoice-tracker-2.png"],
  },
  {
    slug: "content-engine",
    index: "17",
    category: "Agency Operations",
    name: "AI Content Engine & Agency Management",
    title: "AI Content Engine & Agency Management System",
    description:
      "An n8n-powered content engine that coordinates a marketing agency's video production pipeline — from creator handoff through client approval — without manual chasing between tools.",
    builtBy: "Syeda Hafsa",
    builtBySlug: "hafsa",
    links: [],
    technology: ["n8n", "Workflow Automation"],
  },
  {
    slug: "university-admissions",
    index: "18",
    category: "EdTech / Document AI",
    name: "AI University Admissions & Scholarship Evaluator",
    title: "AI University Admissions & Scholarship Evaluator",
    description:
      "An admissions evaluator that scores incoming applications on academics, essays and institutional fit, then automatically sends acceptance letters, interview invites, or personalized feedback based on the score.",
    builtBy: "Syeda Hafsa",
    builtBySlug: "hafsa",
    links: [],
    technology: ["GPT-4", "Jotform", "Automation"],
  },
  {
    slug: "graphic-design-agent",
    index: "19",
    category: "AI Design",
    name: "Autonomous Graphic Design Agent",
    title: "Autonomous Graphic Design Agent",
    description:
      "A chat-based design agent that turns a short brief into a finished graphic — extracting brand details through conversation and generating on-brand visuals in under a minute.",
    builtBy: "Syeda Hafsa",
    builtBySlug: "hafsa",
    links: [],
    technology: ["AI Image Generation", "Telegram Bot"],
    screenshots: ["/projects/graphic-design-agent.jpg"],
  },
  {
    slug: "whatsapp-command-center",
    index: "20",
    category: "Customer Support / Monitoring",
    name: "AI WhatsApp Command Center",
    title: "AI WhatsApp Command Center & Live Agent Dashboard",
    description:
      "A secure live-monitoring dashboard that lets admins watch AI-customer WhatsApp conversations in real time, covering shipping questions, returns and price-match requests handled autonomously.",
    builtBy: "Syeda Hafsa",
    builtBySlug: "hafsa",
    links: [],
    technology: ["WhatsApp", "Live Dashboard", "Customer Support"],
    screenshots: [
      "/projects/whatsapp-command-1.png",
      "/projects/whatsapp-command-2.png",
      "/projects/whatsapp-command-3.png",
    ],
  },
];
