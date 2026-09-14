export type TeamLink = { label: string; href: string };

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  /** Compact role shown in preview rows (team strip, cards). */
  shortRole: string;
  focus: string[];
  selectedWork?: string[];
  currentWork?: { label: string; description: string };
  bio: string;
  /** Optional secondary paragraph shown only on the individual profile page. */
  extra?: string;
  links: TeamLink[];
  featured: boolean;
  /** Path under /public to a real photo. Omit to show an honest placeholder until one is supplied. */
  photo?: string;
};

export const team: TeamMember[] = [
  {
    slug: "hafsa",
    name: "Syeda Hafsa",
    role: "Agentic AI Developer, Full-Stack Engineer & Founder of tResolv",
    shortRole: "Agentic AI Developer & Founder, tResolv",
    focus: [
      "Agentic AI",
      "AI Agents",
      "RAG & Knowledge Bases",
      "AI Automation",
      "Next.js & TypeScript",
      "OpenAI Agents SDK",
    ],
    selectedWork: ["tResolv", "Scope AI CV", "Lenny AI"],
    bio: "Hafsa is an Agentic AI Developer, Full-Stack Engineer and the founder of tResolv, an AI support employee for Shopify brands. She builds agentic AI systems end to end: agent design, RAG and knowledge bases, automation workflows and the product around them, using Python, FastAPI, Supabase, Next.js and TypeScript alongside the OpenAI Agents SDK, CrewAI, LangChain and LangGraph.",
    extra:
      "She previously built the technology behind Scope AI CV, an end to end AI powered CV optimization platform, and developed Lenny AI, a RAG based business intelligence agent using vector embeddings and prompt engineering. She also teaches Agentic AI as faculty and a teaching assistant at the Governor Sindh Initiative for GenAI, Web3 and Metaverse, holds Agentic AI Level 1 and Level 2 Developer certificates from PIAIC, and was featured on television as one of Pakistan's youngest Agentic AI developers.",
    links: [],
    featured: true,
    photo: "/team/hafsa.png",
  },
  {
    slug: "muhammad",
    name: "Muhammad Bin Zohaib",
    role: "AI Automation Engineer, Full-Stack Developer & Founder of AI Coders",
    shortRole: "AI Automation Engineer & Founder",
    focus: [
      "AI Agents & Automation",
      "n8n & API Integrations",
      "CRM & Lead Automation",
      "Voice AI",
      "Full-Stack Development",
    ],
    selectedWork: [
      "CRM & Business Automation Suite",
      "AI Hiring Agent",
      "LeadGen AI Platform",
      "AI Legal Case Intake System",
      "ReActivate",
      "AI WhatsApp Command Center",
    ],
    currentWork: {
      label: "sending.ac",
      description:
        "Working as an Automation and Knowledge Engineer, building automation and knowledge systems with n8n and Airtable to make business operations more scalable.",
    },
    bio: "Muhammad is an AI Automation Engineer and Full-Stack Developer who turns real business processes into reliable, scalable systems rather than demos. His work spans AI agents and autonomous systems, automation and workflow systems, n8n and API integrations, voice AI and conversational agents, CRM and lead automation, and full stack development with Python and modern AI tooling.",
    extra:
      "He is the founder of AI Coders, where he builds AI powered web solutions and custom GPT applications for businesses. His earlier work includes voice AI, customer support automation, real estate workflows and autonomous AI systems for teams across international markets, backed by training from Anthropic, n8n, IBM, Google Cloud, DeepLearning.AI, LangChain, CrewAI and freeCodeCamp.",
    links: [],
    featured: true,
    photo: "/team/muhammad.png",
  },
  {
    slug: "abubakar",
    name: "Abubakar Bin Zohaib",
    role: "AI Developer, AI Trainer & Founder of ABZ Agent SDK",
    shortRole: "AI Developer & Founder, ABZ Agent SDK",
    focus: [
      "Agentic AI & Multi-Agent Systems",
      "AI Automation",
      "Voice AI",
      "OpenAI Agents SDK",
      "Python & FastAPI",
    ],
    selectedWork: ["ABZ Agent SDK", "AI Content Factory"],
    bio: "Abubakar is an AI Developer, AI Trainer and the founder of ABZ Agent SDK, an agentic AI framework built to make it easier for developers to create AI agents and multi agent applications. His technical work covers multi agent systems, AI automation, voice AI, and backend development with Python, FastAPI, the OpenAI Agents SDK, Gemini, n8n and LangGraph.",
    extra:
      "He works as an AI Trainer at Saylani Mass IT Training (SMIT), teaching practical AI and technology skills, and built an AI Content Factory, a multi agent system that automates content creation from research and generation through validation and publishing. At tResolv, he contributes to business development and customer acquisition as the startup grows.",
    links: [],
    featured: true,
    photo: "/team/abubakar.png",
  },
  {
    slug: "bushra",
    name: "Bushra Zohaib",
    role: "Forward Deployed Engineer, AI Educator & GIAIC Faculty",
    shortRole: "Forward Deployed Engineer",
    focus: [
      "Agentic AI & Digital FTEs",
      "Pharma & Healthcare AI",
      "Workflow Automation",
      "AI Education",
    ],
    selectedWork: ["The AI Family (Founder)"],
    bio: "Bushra is a Forward Deployed Engineer working at the intersection of pharma, healthcare and agentic AI. She studies real business workflows, finds where time and effort are being lost, and builds AI powered systems, digital FTEs and automation for pharmaceutical and healthcare organizations.",
    extra:
      "With a background in pharmacy and experience across pharmaceutical production, marketing and product management, she brings domain knowledge alongside technical skill. She is an AI Educator and GIAIC faculty member with the Governor Sindh Initiative for GenAI, Web3 and Metaverse, studied AI and Cloud Engineering through PIAIC, and founded The AI Family, a family learning environment for exploring technology, AI, programming and entrepreneurship.",
    links: [],
    featured: true,
    photo: "/team/bushra.jpg",
  },
];
