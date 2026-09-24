import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/projects/ImagePlaceholder";
import { siteConfig } from "@/content/site-config";
import { getCaseStudyProjects } from "@/lib/content";

export default function Home() {
  const projects = getCaseStudyProjects();

  return (
    <>
      <Container className="flex min-h-[calc(100svh-4rem)] flex-col justify-center py-16">
        <p className="text-sm font-medium text-accent">{siteConfig.location}</p>

        <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {siteConfig.name}
        </h1>

        <p className="mt-2 max-w-2xl text-xl text-muted-foreground">
          {siteConfig.headline}
        </p>

        <p className="mt-6 max-w-xl text-base leading-7 text-foreground/80">
          {siteConfig.tagline}
        </p>

        <p className="mt-2 text-sm text-muted-foreground">
          {siteConfig.locationNote}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/projects">View projects</Button>
          <Button href={siteConfig.cvPath} download variant="secondary">
            Download CV
          </Button>
          <Button href="/contact" variant="secondary">
            Contact
          </Button>
        </div>
      </Container>

      <Container className="pb-16">
        <Reveal>
          <p className="text-sm font-medium text-muted-foreground">
            Recent work
          </p>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                data-accent={project.slug}
                className="group overflow-hidden rounded-lg border border-border transition-all duration-300 motion-safe:hover:-translate-y-1 hover:border-accent hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
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
                    <ImagePlaceholder className="h-full w-full" iconClassName="h-7 w-7" />
                  )}
                </div>
                <p className="p-3 text-sm font-medium text-foreground group-hover:text-accent">
                  {project.name}
                </p>
              </Link>
            ))}
          </div>
        </Reveal>
      </Container>
    </>
  );
}
