export interface ProjectLink {
  label: string;
  href: string;
}

export interface DiagramAsset {
  src: string;
  alt: string;
}

export interface KeyFeature {
  title: string;
  description: string;
}

export interface Challenge {
  title: string;
  description: string;
}

export interface CaseStudyProject {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  featured: true;
  liveUrl?: string;
  repoLinks: ProjectLink[];
  apiUrl?: string;
  disclaimer?: string;
  techStack: string[];
  screenshots: DiagramAsset[];
  overview: string;
  problem: string;
  role: string;
  keyFeatures: KeyFeature[];
  architecture: {
    description: string;
    /** Key into the diagram component registry (components/projects/diagrams). */
    diagramKey?: string;
  };
  dataModel?: {
    /** Defaults to "Data model" in the template when omitted. */
    heading?: string;
    description: string;
    diagramKey?: string;
  };
  challenges: Challenge[];
  testing: string;
  improvements: string[];
}

export interface OtherProject {
  slug: string;
  name: string;
  description: string;
  date: string;
  liveUrl?: string;
  repoUrl?: string;
  techStack: string[];
}

export interface Award {
  title: string;
  date: string;
  description: string;
}

export interface Role {
  company: string;
  location: string;
  title: string;
  startDate: string;
  endDate: string;
  bullets: string[];
  award?: Award;
}

export interface EducationEntry {
  institution: string;
  location: string;
  qualification: string;
  startDate: string;
  endDate: string;
}

export type SkillCategory =
  | "Languages"
  | "Frontend"
  | "Backend & Data"
  | "Testing & Tools";

export interface SkillGroup {
  category: SkillCategory;
  skills: string[];
}

export interface SiteConfig {
  name: string;
  shortName: string;
  headline: string;
  tagline: string;
  location: string;
  locationNote: string;
  email: string;
  github: string;
  linkedin: string;
  cvPath: string;
  siteUrl: string;
  /** Right-to-work statement. Empty by default until supplied. */
  rightToWork: string;
}
