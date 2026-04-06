"use client";

import { FormEvent, useState } from "react";
import { z } from "zod";

import { ContactFormData } from "@/types";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  form?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  function updateField<K extends keyof ContactFormData>(
    field: K,
    value: ContactFormData[K]
  ) {
    setFormData((previous) => ({ ...previous, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({});
    setStatusMessage("");

    const validation = contactSchema.safeParse(formData);

    if (!validation.success) {
      const nextErrors: FormErrors = {};
      const fieldErrors = validation.error.flatten().fieldErrors;

      nextErrors.name = fieldErrors.name?.[0];
      nextErrors.email = fieldErrors.email?.[0];
      nextErrors.message = fieldErrors.message?.[0];

      setErrors(nextErrors);
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        setErrors({
          name: result.errors?.name?.[0],
          email: result.errors?.email?.[0],
          message: result.errors?.message?.[0],
          form: result.error || "Unable to send message. Please try again.",
        });
        return;
      }

      setStatusMessage("Message saved successfully. I will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setErrors({ form: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-lg border border-border bg-surface/40 p-6"
      noValidate
    >
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-text-primary">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(event) => updateField("name", event.target.value)}
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-text-primary placeholder:text-text-secondary/70"
          placeholder="Your name"
        />
        {errors.name ? (
          <p className="text-xs text-red-400">{errors.name}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-text-primary">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(event) => updateField("email", event.target.value)}
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-text-primary placeholder:text-text-secondary/70"
          placeholder="you@example.com"
        />
        {errors.email ? (
          <p className="text-xs text-red-400">{errors.email}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-text-primary">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-text-primary placeholder:text-text-secondary/70"
          placeholder="Write your message..."
        />
        {errors.message ? (
          <p className="text-xs text-red-400">{errors.message}</p>
        ) : null}
      </div>

      {errors.form ? <p className="text-sm text-red-400">{errors.form}</p> : null}
      {statusMessage ? (
        <p className="text-sm text-green-400">{statusMessage}</p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}