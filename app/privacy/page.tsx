import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How AI Coders handles the information you share with us.",
};

const sections = [
  {
    title: "Information We Collect",
    body: "When you submit a project inquiry through our contact form, we collect the information you provide: your name, company, work email, and details about your project.",
  },
  {
    title: "How We Use Information",
    body: "We use the information you submit solely to respond to your inquiry and evaluate potential projects. We do not sell your information to third parties.",
  },
  {
    title: "Client Confidentiality",
    body: "Details about client projects are only published publicly with the client's permission. Where permission is uncertain, we describe work in general terms.",
  },
  {
    title: "Cookies",
    body: "This site does not use tracking or advertising cookies.",
  },
  {
    title: "Contact",
    body: "For questions about this policy or your data, reach out through our contact page.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="py-16 sm:py-24">
        <Container className="flex max-w-2xl flex-col gap-10">
          {sections.map((section) => (
            <div key={section.title} className="flex flex-col gap-2">
              <h2 className="font-display text-xl font-semibold text-foreground">{section.title}</h2>
              <p className="text-base leading-relaxed text-muted">{section.body}</p>
            </div>
          ))}
          <p className="text-sm text-muted-2">Last updated 2026.</p>
        </Container>
      </section>
    </>
  );
}
