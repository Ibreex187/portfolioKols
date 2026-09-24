import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ScreenshotGallery } from "@/components/projects/ScreenshotGallery";
import { HeroVisual } from "@/components/projects/HeroVisual";
import { AtAGlanceStrip } from "@/components/projects/AtAGlanceStrip";
import { diagramRegistry } from "@/components/projects/diagrams";
import { getProjectBySlug, getProjectSlugs } from "@/lib/content";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.summary,
    openGraph: {
      title: project.name,
      description: project.summary,
    },
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const ArchitectureDiagram = project.architecture.diagramKey
    ? diagramRegistry[project.architecture.diagramKey]
    : undefined;
  const DataModelDiagram = project.dataModel?.diagramKey
    ? diagramRegistry[project.dataModel.diagramKey]
    : undefined;

  return (
    <div data-accent={project.slug}>
      <Container className="py-12">
        <p className="text-sm font-medium text-accent">Case study</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {project.name}
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          {project.tagline}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveUrl && (
            <Button href={project.liveUrl} external>
              Live demo
            </Button>
          )}
          {project.repoLinks.map((link) => (
            <Button
              key={link.href}
              href={link.href}
              external
              variant="secondary"
            >
              {link.label}
            </Button>
          ))}
          {project.apiUrl && (
            <Button href={project.apiUrl} external variant="secondary">
              API
            </Button>
          )}
        </div>

        {project.disclaimer && (
          <p className="mt-8 rounded-md border border-border bg-muted px-4 py-3 text-sm text-muted-foreground">
            {project.disclaimer}
          </p>
        )}

        <div className="mt-8">
          <HeroVisual
            image={project.heroImage}
            video={project.heroVideo}
            projectName={project.name}
          />
        </div>

        <div className="mt-8">
          <AtAGlanceStrip items={project.highlights} />
        </div>

        <div className="mt-12 flex flex-col gap-12">
          <Reveal>
            <Section title="Overview">
              <p>{project.overview}</p>
              <ScreenshotGallery screenshots={project.screenshots} />
            </Section>
          </Reveal>

          <Reveal>
            <Section title="The problem">
              <p>{project.problem}</p>
            </Section>
          </Reveal>

          <Reveal>
            <Section title="My role">
              <p>{project.role}</p>
            </Section>
          </Reveal>

          <Reveal>
            <Section title="Tech stack">
              <ul className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-border px-3 py-1 text-sm text-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </Section>
          </Reveal>

          <Reveal>
            <Section title="Key features">
              <dl className="flex flex-col gap-6">
                {project.keyFeatures.map((feature) => (
                  <div key={feature.title}>
                    <dt className="font-medium text-foreground">
                      {feature.title}
                    </dt>
                    <dd className="mt-1 text-foreground/80">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </Section>
          </Reveal>

          <Reveal>
            <Section title="Architecture and data model">
              <p>{project.architecture.description}</p>
              {ArchitectureDiagram && (
                <div className="mt-4">
                  <ArchitectureDiagram />
                </div>
              )}

              {project.dataModel && (
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-foreground">
                    {project.dataModel.heading ?? "Data model"}
                  </h3>
                  <p className="mt-2 text-foreground/80">
                    {project.dataModel.description}
                  </p>
                  {DataModelDiagram && (
                    <div className="mt-4">
                      <DataModelDiagram />
                    </div>
                  )}
                </div>
              )}
            </Section>
          </Reveal>

          <Reveal>
            <Section title="Challenges and how I solved them">
              <div className="flex flex-col gap-6">
                {project.challenges.map((challenge) => (
                  <div key={challenge.title}>
                    <h3 className="font-medium text-foreground">
                      {challenge.title}
                    </h3>
                    <p className="mt-1 text-foreground/80">
                      {challenge.description}
                    </p>
                  </div>
                ))}
              </div>
            </Section>
          </Reveal>

          <Reveal>
            <Section title="Testing and quality">
              <p>{project.testing}</p>
            </Section>
          </Reveal>

          <Reveal>
            <Section title="What I'd improve next">
              <ul className="flex list-disc flex-col gap-2 pl-5 text-foreground/80">
                {project.improvements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Section>
          </Reveal>
        </div>
      </Container>
    </div>
  );
}
