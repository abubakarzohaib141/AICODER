"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
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
  "w-full rounded-xl border border-border-strong bg-background-elevated/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-2 outline-none transition-colors focus:border-blue";

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
          email: data.workEmail,
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

  if (status === "success") {
    return (
      <div className="flex flex-col gap-3 rounded-2xl border border-teal-bright/30 bg-background-elevated/40 p-8">
        <span className="font-mono-label text-xs uppercase tracking-wide text-teal-bright">
          Inquiry sent
        </span>
        <p className="font-display text-xl font-semibold text-foreground">
          Thanks. We&apos;ll be in touch shortly.
        </p>
        <p className="text-sm text-muted">
          We review every project inquiry and typically respond within a few business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
        <input
          required
          name="workEmail"
          type="email"
          className={inputClasses}
          autoComplete="email"
        />
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

      {error && <p className="text-sm text-orange">{error}</p>}

      <motion.button
        type="submit"
        disabled={status === "submitting"}
        whileHover={{ y: -2 }}
        whileTap={tapScale}
        className="bg-gradient-brand mt-2 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium text-white disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Project Inquiry"}
      </motion.button>
    </form>
  );
}
