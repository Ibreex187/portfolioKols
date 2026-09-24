import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/content/site-config";
import { aboutChapters } from "@/content/about";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name}.`,
};

export default function AboutPage() {
  return (
    <Container className="py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        About
      </h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        I&rsquo;m {siteConfig.name}, though most people call me{" "}
        {siteConfig.shortName}. Here&rsquo;s the short version of how I got
        here.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {aboutChapters.map((chapter) => (
          <Reveal key={chapter.title}>
            <Card className="h-full">
              <IconBadge icon={chapter.icon} />
              <h2 className="mt-4 text-lg font-semibold text-foreground">
                {chapter.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-foreground/80">
                {chapter.body}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>

      {siteConfig.rightToWork && (
        <p className="mt-8 text-sm text-muted-foreground">
          {siteConfig.rightToWork}
        </p>
      )}
    </Container>
  );
}
