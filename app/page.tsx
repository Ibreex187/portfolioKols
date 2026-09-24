import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site-config";

export default function Home() {
  return (
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
  );
}
