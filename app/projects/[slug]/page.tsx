import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SectionHeading } from "@/components/section-heading";
import { getProjectBySlug } from "@/lib/data";

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: ProjectDetailPageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    return { title: "Project Not Found | Goose" };
  }
  
  return {
    title: `${project.title} | Goose`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="hover-float-y mx-auto w-full max-w-4xl px-6 py-16 sm:py-24">
      <SectionHeading title={project.title} subtitle={project.description} />

      <section className="space-y-6 rounded-lg border border-border bg-surface/40 p-6">
        <div>
          <h2 className="text-lg font-semibold text-text-primary">Overview</h2>
          <p className="mt-2 leading-7 text-text-secondary">
            {project.longDescription}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-text-primary">Tech Stack</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-border/70 px-2.5 py-1 text-xs text-text-secondary"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-text-primary">Challenges</h2>
          <p className="mt-2 leading-7 text-text-secondary">{project.challenges}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-text-primary">What I Learned</h2>
          <p className="mt-2 leading-7 text-text-secondary">{project.learnings}</p>
        </div>

        <div className="hover-float-y flex flex-wrap gap-4">
          {project.githubUrl ? (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-border px-4 py-2 text-sm font-semibold text-text-primary hover:bg-background/60"
            >
              GitHub Repo
            </Link>
          ) : null}
        </div>
      </section>
    </main>
  );
}
