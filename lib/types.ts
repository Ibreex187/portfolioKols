export interface ProjectLink {
  label: string;
  href: string;
}

export interface DiagramAsset {
  src: string;
  alt: string;
  /** Real pixel dimensions, so next/image renders it at its true aspect ratio. */
  width: number;
  height: number;
}

export interface VideoAsset {
  src: string;
  /** Accessible description of what the clip shows. */
  caption: string;
  /** Still frame shown before playback; falls back to the project's heroImage if omitted. */
  poster?: string;
}

export interface KeyFeature {
  title: string;
  description: string;
}

export type IconKey =
  | "shield"
  | "bolt"
  | "lock"
  | "chart"
  | "book"
  | "database"
  | "check"
  | "layers"
  | "users"
  | "briefcase"
  | "graduationCap"
  | "trophy"
  | "code"
  | "layout"
  | "flask"
  | "mapPin"
  | "laptop"
  | "mail"
  | "linkedin"
  | "github";

export interface Highlight {
  icon: IconKey;
  label: string;
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
  /** Big visual at the top of the case study. Renders a branded placeholder until supplied. */
  heroImage?: DiagramAsset;
  /** Preferred over heroImage when present. */
  heroVideo?: VideoAsset;
  /** Short, scannable icon + label tiles shown before the written sections. */
  highlights: Highlight[];
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
  /** Small thumbnail shown on its compact card. Renders a placeholder until supplied. */
  heroImage?: DiagramAsset;
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
  icon: IconKey;
  skills: string[];
}

export interface AboutChapter {
  icon: IconKey;
  title: string;
  body: string;
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
