import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Privacy",
  description: "What this site collects and why.",
};

export default function PrivacyPage() {
  return (
    <Container className="py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Privacy
      </h1>

      <div className="mt-8 flex max-w-2xl flex-col gap-5 text-base leading-7 text-foreground/90">
        <p>
          This site doesn&rsquo;t use cookies, doesn&rsquo;t run any
          third-party analytics or tracking scripts, and doesn&rsquo;t build
          a profile of visitors. There&rsquo;s no cookie banner because
          there&rsquo;s nothing to consent to.
        </p>
        <p>
          The <a href="/contact" className="text-accent hover:underline">contact form</a>{" "}
          collects the name, email address and message you choose to submit,
          purely so I can reply to you. That message is sent directly to my
          inbox by email and is not stored in a database. I don&rsquo;t keep
          a copy of form submissions anywhere on this site.
        </p>
        <p>
          To deter spam, submissions are checked against a hidden honeypot
          field and a simple rate limit based on your connection&rsquo;s IP
          address at the moment of submission. That IP address is held
          briefly in server memory for this purpose and is not logged or
          stored.
        </p>
        <p>
          If you have any questions about this, email me at{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-accent hover:underline"
          >
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
    </Container>
  );
}
