import { caseStudyProjects } from "@/content/projects";
import { otherProjects } from "@/content/projects/other-projects";
import type { CaseStudyProject, OtherProject } from "@/lib/types";

export function getCaseStudyProjects(): CaseStudyProject[] {
  return caseStudyProjects;
}

export function getProjectBySlug(slug: string): CaseStudyProject | undefined {
  return caseStudyProjects.find((project) => project.slug === slug);
}

export function getProjectSlugs(): string[] {
  return caseStudyProjects.map((project) => project.slug);
}

export function getOtherProjects(): OtherProject[] {
  return otherProjects;
}
