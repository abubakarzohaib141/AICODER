"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { tapScale } from "@/lib/motion";

const STAGES = [
  "Exploring an idea",
  "Need a prototype",
  "Ready to build",
  "Existing system needs AI integration",
  "Need automation",
  "Other",
];

const inputClasses =
  "w-full rounded-[10px] border border-border-strong bg-background-elevated/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-2 outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setError(null);

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: `New project inquiry from ${data.name}`,
          from_name: data.name,
          name: data.name,
          email: data.email,
          company: data.company || "Not provided",
          "Looking to build": data.lookingToBuild,
          "Workflow / problem": data.workflow || "Not provided",
          "Project stage": data.stage || "Not provided",
          botcheck: data.botcheck,
        }),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error("Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-5 rounded-2xl border border-teal/30 bg-background-elevated px-8 py-12 text-center"
        >
          <motion.span
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-teal/10 text-teal"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </motion.span>

          <div className="flex flex-col gap-2">
            <span className="font-mono-label text-xs uppercase tracking-wide text-teal">
              Inquiry sent
            </span>
            <h3 className="font-display text-2xl font-semibold text-foreground sm:text-[28px]">
              You&apos;re all set.
            </h3>
            <p className="mx-auto max-w-md text-base leading-relaxed text-muted">
              Thank you for submitting the form. We will be contacting you in the next few hours,
              so please check your inbox. In the meantime, feel free to have a look at what
              we&apos;ve already shipped for other teams.
            </p>
          </div>

          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-teal"
          >
            See our work
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
          <input
            type="checkbox"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute left-[-9999px] h-0 w-0 opacity-0"
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm text-muted">
              Name
              <input required name="name" type="text" className={inputClasses} autoComplete="name" />
            </label>
            <label className="flex flex-col gap-2 text-sm text-muted">
              Company
              <input name="company" type="text" className={inputClasses} autoComplete="organization" />
            </label>
          </div>

          <label className="flex flex-col gap-2 text-sm text-muted">
            Work Email
            <input required name="email" type="email" className={inputClasses} autoComplete="email" />
          </label>

          <label className="flex flex-col gap-2 text-sm text-muted">
            What are you looking to build?
            <input required name="lookingToBuild" type="text" className={inputClasses} />
          </label>

          <label className="flex flex-col gap-2 text-sm text-muted">
            Tell us about the workflow or problem
            <textarea name="workflow" rows={5} className={`${inputClasses} resize-none`} />
          </label>

          <label className="flex flex-col gap-2 text-sm text-muted">
            Project stage
            <select name="stage" defaultValue="" className={inputClasses}>
              <option value="" disabled>
                Select a stage
              </option>
              {STAGES.map((stage) => (
                <option key={stage} value={stage}>
                  {stage}
                </option>
              ))}
            </select>
          </label>

          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-sm text-orange"
              >
                {error}
              </motion.p>
            )}
          </AnimatePresence>

          <motion.button
            type="submit"
            disabled={status === "submitting"}
            whileHover={{ y: -2 }}
            whileTap={tapScale}
            className="mt-2 inline-flex items-center justify-center rounded-[10px] bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-colors hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? "Sending…" : "Send Project Inquiry"}
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
