import type { SiteConfig } from "@/lib/types";

export const siteConfig: SiteConfig = {
  name: "Yusuf Ibrahim Kolade",
  shortName: "Kols",
  headline: "Frontend & Full-Stack JavaScript Developer",
  tagline:
    "I build accessible, production-minded web applications with React, Next.js and Node.js.",
  location: "Middlesbrough, UK",
  locationNote: "Open to remote, hybrid and on-site roles across the UK",
  email: "ibrahim018.yi18@gmail.com",
  github: "https://github.com/Ibreex187",
  linkedin: "https://www.linkedin.com/in/yusuf-ibrahim-45a328336",
  cvPath: "/cv.pdf",
  // TODO: set NEXT_PUBLIC_SITE_URL to the production domain once deployed on Vercel.
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  // TODO: fill in a right-to-work statement (e.g. "I have the right to work in the UK.").
  // Left empty deliberately — never guess this.
  rightToWork: "",
};
