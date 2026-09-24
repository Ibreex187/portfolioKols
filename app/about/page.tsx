import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/content/site-config";

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

      <div className="mt-8 flex max-w-2xl flex-col gap-5 text-base leading-7 text-foreground/90">
        <p>
          I&rsquo;m {siteConfig.name}, though most people call me{" "}
          {siteConfig.shortName}. I&rsquo;m a frontend and full-stack
          JavaScript developer originally from Lagos, Nigeria, where I spent
          over two years building web applications professionally: first as a
          frontend developer at Oxford College, then as a junior full-stack
          developer at Soft Quest Incorporated (SQI), working across React,
          Node.js and Express.
        </p>
        <p>
          I moved to the UK to study for an MSc in Computer Science with
          Advanced Practice at Teesside University, and I&rsquo;m based in
          Middlesbrough now. Outside coursework I keep building. The three
          case studies on this site are personal projects I designed and
          built from scratch, mainly to go deeper into full-stack engineering
          than day-to-day feature work usually allows: schema design,
          authentication, testing, and the less glamorous parts of keeping a
          real application running in production.
        </p>
        <p>
          I continue to work remotely as a junior full-stack developer at SQI
          alongside my studies. I&rsquo;m looking for graduate or junior
          full-stack and frontend roles in the UK, remote, hybrid or on-site,
          where I can keep growing as a developer while contributing from day
          one.
        </p>
        {siteConfig.rightToWork && <p>{siteConfig.rightToWork}</p>}
      </div>
    </Container>
  );
}
