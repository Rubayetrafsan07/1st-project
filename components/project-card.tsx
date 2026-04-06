import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";

import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(15,23,42,0.35)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_24px_80px_rgba(15,23,42,0.45)]">
      {project.image ? (
        <div className="relative">
          <Image
            src={project.image}
            alt={`${project.title} thumbnail`}
            width={800}
            height={450}
            className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </div>
      ) : (
        <div className="flex aspect-video w-full items-center justify-center bg-background/70 text-sm text-text-secondary">
          Project Thumbnail
        </div>
      )}

      <div className="flex flex-grow flex-col space-y-4 p-5 sm:p-6">
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
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-text-secondary"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-4 pt-1">
          {project.githubUrl ? (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-dark"
            >
              GitHub
              <Github className="h-4 w-4" />
            </Link>
          ) : null}

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-dark"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}