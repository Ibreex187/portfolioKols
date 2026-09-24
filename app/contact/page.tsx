import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}.`,
};

const TILE_CLASSES =
  "group flex items-center gap-3 rounded-xl border border-border bg-background p-4 transition-all duration-300 motion-safe:hover:-translate-y-1 hover:border-accent hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export default function ContactPage() {
  return (
    <Container className="py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Contact
      </h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        The fastest way to reach me is the form below or email directly.
        I&rsquo;m also on LinkedIn and GitHub.
      </p>

      {siteConfig.rightToWork && (
        <p className="mt-4 text-sm text-muted-foreground">
          {siteConfig.rightToWork}
        </p>
      )}

      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <a href={`mailto:${siteConfig.email}`} className={TILE_CLASSES}>
          <IconBadge icon="mail" />
          <div className="min-w-0">
            <p className="text-sm font-medium text-foreground group-hover:text-accent">
              Email
            </p>
            <p className="truncate text-xs text-muted-foreground">
              {siteConfig.email}
            </p>
          </div>
        </a>

        <a
          href={siteConfig.linkedin}
          target="_blank"
          rel="noreferrer noopener"
          className={TILE_CLASSES}
        >
          <IconBadge icon="linkedin" />
          <div>
            <p className="text-sm font-medium text-foreground group-hover:text-accent">
              LinkedIn
            </p>
            <p className="text-xs text-muted-foreground">Connect with me</p>
          </div>
        </a>

        <a
          href={siteConfig.github}
          target="_blank"
          rel="noreferrer noopener"
          className={TILE_CLASSES}
        >
          <IconBadge icon="github" />
          <div>
            <p className="text-sm font-medium text-foreground group-hover:text-accent">
              GitHub
            </p>
            <p className="text-xs text-muted-foreground">See my code</p>
          </div>
        </a>
      </div>

      <div className="mt-10 max-w-xl">
        <Card>
          <ContactForm />
        </Card>
      </div>
    </Container>
  );
}
