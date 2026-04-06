import { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Goose | Projects",
  description: "Check out my latest computer science projects and web applications.",
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeading title="My Projects" />
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12">
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
    </div>
  );
}