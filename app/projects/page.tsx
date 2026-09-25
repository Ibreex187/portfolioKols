import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { OtherProjectCard } from "@/components/projects/OtherProjectCard";
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
      <div className="mt-6 flex flex-col gap-4">
        {others.map((project) => (
          <OtherProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Container>
  );
}
