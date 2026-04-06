import { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { FadeIn } from "@/components/animations/fade-in";

export const metadata: Metadata = {
  title: "Goose | Contact",
  description: "Send me a message for a project or question.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-16 sm:py-24">
      <FadeIn>
        <div className="mb-10 space-y-3 text-center">
          <span className="hover-float-y inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-text-secondary">
            Portfolio
          </span>
          <h2 className="hover-float-y text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Contact
          </h2>
          <p className="hover-float-y mx-auto max-w-2xl text-sm text-text-secondary sm:text-base">
            Have a project or question? Send me a message and I will reply as soon as possible.
          </p>
        </div>
      </FadeIn>
      <FadeIn delay={0.1}>
        <ContactForm />
      </FadeIn>
    </main>
  );
}