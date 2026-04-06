import { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Goose | Projects",
  description: "Check out my latest computer science projects and web applications.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
      <div className="mb-10 space-y-3 text-center">
        <span className="hover-float-y inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-text-secondary">
          Portfolio
        </span>
        <h2 className="hover-float-y text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          My Projects
        </h2>
        <p className="hover-float-y mx-auto max-w-2xl text-sm text-text-secondary sm:text-base">
          A collection of web, desktop, and software projects built while learning and improving my craft.
        </p>
      </div>
      
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ScrollReveal
            key={project.slug}
            effect="fade-up"
            delay={index * 0.1}
          >
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </main>
  );
}