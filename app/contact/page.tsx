import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}.`,
};

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

      <div className="mt-8 flex flex-col gap-2 text-sm">
        <a
          href={`mailto:${siteConfig.email}`}
          className="font-medium text-accent hover:underline"
        >
          {siteConfig.email}
        </a>
        <div className="flex gap-4">
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="text-accent hover:underline"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer noopener"
            className="text-accent hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="mt-10 max-w-xl">
        <ContactForm />
      </div>
    </Container>
  );
}
