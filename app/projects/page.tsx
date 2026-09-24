import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { getCaseStudyProjects, getOtherProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies covering the three main projects I've built end to end, plus a shorter list of other work.",
};

export default function ProjectsPage() {
  const projects = getCaseStudyProjects();
  const others = getOtherProjects();

  return (
    <Container className="py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Projects
      </h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Three case studies covering projects I&rsquo;ve built end to end,
        plus a shorter list of other work.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <h2 className="mt-16 text-xl font-semibold text-foreground">
        Other projects
      </h2>
      <ul className="mt-6 flex flex-col divide-y divide-border border-t border-b border-border">
        {others.map((project) => (
          <li
            key={project.slug}
            className="flex flex-col gap-2 py-4 sm:flex-row sm:items-baseline sm:justify-between"
          >
            <div>
              <p className="font-medium text-foreground">
                {project.name}{" "}
                <span className="font-normal text-muted-foreground">
                  ({project.date})
                </span>
              </p>
              <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                {project.description}
              </p>
            </div>
            <div className="flex shrink-0 gap-4 text-sm">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-md font-medium text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Live
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-md font-medium text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Repo
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}
