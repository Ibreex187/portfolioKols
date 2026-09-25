import Image from "next/image";
import type { OtherProject } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { ImagePlaceholder } from "./ImagePlaceholder";

export function OtherProjectCard({ project }: { project: OtherProject }) {
  return (
    <div data-accent={project.slug}>
      <Card className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="aspect-video w-full shrink-0 overflow-hidden rounded-lg border border-border bg-accent/5 sm:w-48">
          {project.heroImage ? (
            <Image
              src={project.heroImage.src}
              alt={project.heroImage.alt}
              width={project.heroImage.width}
              height={project.heroImage.height}
              className="h-full w-full object-cover"
            />
          ) : (
            <ImagePlaceholder className="h-full w-full" iconClassName="h-6 w-6" />
          )}
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <p className="font-medium text-foreground">
              {project.name}{" "}
              <span className="font-normal text-muted-foreground">
                ({project.date})
              </span>
            </p>
            <div className="flex gap-4 text-sm">
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
          </div>
          <p className="text-sm text-muted-foreground">{project.description}</p>
          <ul className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  );
}
