import Link from "next/link";
import Image from "next/image";
import type { CaseStudyProject } from "@/lib/types";
import { ImagePlaceholder } from "./ImagePlaceholder";

export function ProjectCard({ project }: { project: CaseStudyProject }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      data-accent={project.slug}
      className="group flex flex-col overflow-hidden rounded-lg border border-border transition-all duration-300 motion-safe:hover:-translate-y-1 hover:border-accent hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <div className="aspect-video w-full overflow-hidden bg-accent/5">
        {project.heroImage ? (
          <Image
            src={project.heroImage.src}
            alt={project.heroImage.alt}
            width={project.heroImage.width}
            height={project.heroImage.height}
            className="h-full w-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-105"
          />
        ) : (
          <ImagePlaceholder className="h-full w-full" />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-accent">
          {project.name}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">{project.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.techStack.slice(0, 5).map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>
        <span className="mt-4 text-sm font-medium text-accent">
          View case study &rarr;
        </span>
      </div>
    </Link>
  );
}
