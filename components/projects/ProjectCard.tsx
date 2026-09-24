import Link from "next/link";
import type { CaseStudyProject } from "@/lib/types";

export function ProjectCard({ project }: { project: CaseStudyProject }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col rounded-lg border border-border p-6 transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
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
    </Link>
  );
}
