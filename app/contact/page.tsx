import { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn } from "@/components/animations/fade-in";

export const metadata: Metadata = {
  title: "Goose | Contact",
  description: "Send me a message for a project or question.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-16 sm:py-24">
      <FadeIn>
        <SectionHeading
          title="Contact"
          subtitle="Have a project or question? Send me a message."
        />
      </FadeIn>
      <FadeIn delay={0.1}>
        <ContactForm />
      </FadeIn>
    </main>
  );
}