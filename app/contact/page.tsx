import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { CopyEmailChip } from "@/components/ui/CopyEmailChip";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us what you're trying to build or automate.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Have a Workflow Worth Automating?"
        description="Tell us what you're trying to build or automate. We'll explore where AI agents, automation or custom AI engineering can create real value."
      />
      <section className="py-16 sm:py-24">
        <Container className="max-w-2xl">
          <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-muted">
            <span>Prefer email?</span>
            <CopyEmailChip />
          </div>
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
