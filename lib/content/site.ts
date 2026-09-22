export const siteConfig = {
  name: "AI Coders",
  domain: "aicoders.dev",
  url: "https://www.aicoders.dev",
  tagline: "AI Engineering • Agentic AI • Automation",
  email: "hello@aicoders.dev",
  description:
    "AI Coders builds AI agents, agentic systems, business automation and AI-powered products for companies looking to automate workflows, improve operations and build intelligent digital products.",
  nav: [
    { label: "Solutions", href: "/solutions" },
    { label: "Products", href: "/products" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Team", href: "/team", newTab: true },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] as { label: string; href: string; newTab?: boolean }[],
  footerLegal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  socials: [] as { label: string; href: string }[],
  /** Calendly scheduling link (e.g. "https://calendly.com/your-name/30min"). Empty until provided. */
  calendlyUrl: "https://calendly.com/aicoders123/30min",
};
