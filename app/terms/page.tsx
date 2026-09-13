import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing the use of the AI Coders website.",
};

const sections = [
  {
    title: "Use of This Site",
    body: "This website is provided to share information about AI Coders and its work. You may browse and use it for lawful, personal or business evaluation purposes.",
  },
  {
    title: "Project Inquiries",
    body: "Submitting a project inquiry does not create a contractual relationship. Any engagement is subject to a separate agreement between AI Coders and the client.",
  },
  {
    title: "Intellectual Property",
    body: "All content on this site, including copy, design and product names, belongs to AI Coders unless otherwise noted.",
  },
  {
    title: "No Warranty",
    body: "This site and its content are provided as-is, without warranties of any kind.",
  },
  {
    title: "Changes",
    body: "These terms may be updated from time to time. Continued use of the site constitutes acceptance of the current terms.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" />
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
