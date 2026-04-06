import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";

import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-border bg-surface/40 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {project.image ? (
        <Image
          src={project.image}
          alt={`${project.title} thumbnail`}
          width={800}
          height={450}
          className="aspect-video w-full object-cover"
        />
      ) : (
        <div className="flex aspect-video w-full items-center justify-center bg-background/70 text-sm text-text-secondary">
          Project Thumbnail
        </div>
      )}

      <div className="flex flex-col flex-grow space-y-4 p-5">
        <div>
          <h3 className="text-lg font-semibold text-text-primary">{project.title}</h3>
          <p className="mt-2 text-sm leading-6 text-text-secondary">
            {project.description}
          </p>
        </div>

        <ul className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border/70 px-2.5 py-1 text-xs text-text-secondary"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {project.githubUrl ? (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-dark"
            >
              GitHub
              <Github className="h-4 w-4" />
            </Link>
            
            
          ) : null}

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-dark"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}