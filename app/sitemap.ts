import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site-config";
import { getProjectSlugs } from "@/lib/content";

const STATIC_ROUTES = [
  "",
  "/projects",
  "/experience",
  "/skills",
  "/education",
  "/about",
  "/contact",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = getProjectSlugs().map((slug) => `/projects/${slug}`);

  return [...STATIC_ROUTES, ...projectRoutes].map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
