import type { CaseStudyProject } from "@/lib/types";

export const tyread: CaseStudyProject = {
  slug: "tyread",
  name: "Tyread",
  tagline:
    "A social reading platform for discovering books, tracking progress and self-publishing original fiction.",
  summary:
    "A social reading platform covering book discovery, in-browser reading, self-publishing and book clubs.",
  featured: true,
  liveUrl: "https://tbookyread.vercel.app/",
  repoLinks: [
    { label: "GitHub repo", href: "https://github.com/Ibreex187/Tbookyread" },
  ],
  techStack: [
    "Next.js 16",
    "TypeScript",
    "Tailwind CSS",
    "Prisma",
    "PostgreSQL",
    "NextAuth",
    "Zod",
    "UploadThing",
    "Resend",
    "Vitest",
    "Vercel",
  ],
  screenshots: [],
  overview:
    "Tyread is a social reading platform I built and deploy on Vercel. It's for readers and writers, not just one or the other. Readers can discover public-domain classics and books other members have uploaded, read them right in the browser, and track their progress on personal shelves. Writers draft original fiction chapter by chapter, get feedback from readers, and publish into the same public catalogue where admin picks and public-domain titles live. It's the biggest personal project I've built so far: a Prisma schema with more than 25 models, a layered NextAuth setup with optional OAuth, and a Vitest suite that runs against a real PostgreSQL instance in CI.",
  problem:
    "Most reading apps pick a side: a discovery app for readers, or a drafting tool for writers, rarely both. I wanted a public-domain classic, an admin-curated pick and an unpublished author's first chapter to all live in the same catalogue and get read with the same in-browser reader, while keeping the writer's side of things (drafts, revisions, feedback) properly separated from what's public.",
  role:
    "I designed and built Tyread on my own, end to end: the Prisma data model, the Next.js App Router app (server and client components, route handlers, server actions), authentication and role-based access, the external catalogue integrations, the writer tooling, and the Vitest suite and CI pipeline.",
  keyFeatures: [
    {
      title: "Aggregated catalogue with search",
      description:
        "The public catalogue combines admin-curated picks with books pulled from the Open Library API, Project Gutenberg (via the Gutendex API) and the Internet Archive, searchable by title and author. Genre tagging exists in the data model, but it isn't populated on the live catalogue yet, so it's not a working filter today.",
    },
    {
      title: "In-browser reading with saved position",
      description:
        "Public-domain classics and uploaded books can be read directly in the browser (EPUB through epub.js, PDF through react-pdf), and the reader's position saves automatically so you can pick up where you left off.",
    },
    {
      title: "Personal shelves and reading progress",
      description:
        "Readers organise books onto shelves (want to read, reading, finished, did-not-finish, or a custom shelf), with progress tracked separately per book.",
    },
    {
      title: "Writer drafting and serialised publishing",
      description:
        "Writers draft chapters in Markdown, previewed live through react-markdown with rehype-sanitize so the rendered HTML can't carry an XSS payload. Chapters keep their own revision history, and once a book is published its chapters appear serially in the public catalogue alongside reader comments for feedback. Publishing itself works at the book level, not per chapter.",
    },
    {
      title: "Book clubs",
      description:
        "Clubs have their own membership roles, discussion threads and book picks, with moderation actions (hide/unhide threads, block/unblock members) enforced by role and covered by integration tests.",
    },
    {
      title: "Authentication and role-based access",
      description:
        "NextAuth handles email/password sign-in (bcrypt-hashed) plus optional Google and GitHub OAuth, added conditionally when their credentials are configured. Member and admin areas sit in their own route groups, and access is enforced by a shared, unit-tested route-access policy applied consistently across layouts and API routes.",
    },
    {
      title: "Uploads and transactional email",
      description:
        "File uploads (book files and cover images) go through UploadThing. Resend handles transactional email: verification, password resets, account notices, with templates built in React.",
    },
  ],
  architecture: {
    description:
      "Tyread is a single Next.js 16 application using the App Router throughout. Server Components and Route Handlers talk to PostgreSQL through Prisma; NextAuth manages sessions and OAuth; UploadThing and Resend get called from server-side code for uploads and email. Member and admin areas sit in their own route groups, and every request into a protected area is checked against one shared route-access policy function. There's no middleware or proxy file in the project at all; that logic lives in ordinary, testable server code instead.",
    diagramKey: "tyread-architecture",
  },
  dataModel: {
    description:
      "I sketched the entity relationships in DrawSQL before writing the Prisma schema, which now runs to more than 25 models grouped roughly into identity (users, accounts, sessions), catalogue (books, chapters, authors, genres), reading (shelves, progress, saved reading positions, highlights), community (clubs, threads, posts, follows, reviews) and moderation (reports, audit log, badges). The diagram below is a simplified regrouping of that schema for readability, not the original DrawSQL export.",
    diagramKey: "tyread-data-model",
  },
  challenges: [
    {
      title: "Reconciling three external book sources into one catalogue",
      description:
        "Open Library, the Gutendex API (Project Gutenberg) and the Internet Archive each describe books differently: different identifiers, inconsistent author formatting, different levels of metadata completeness. I built a separate import and normalisation module for each source so they all map onto the same internal Book model, instead of letting API-specific shapes leak into the rest of the app.",
    },
    {
      title: "Sanitising user-authored Markdown safely",
      description:
        "Letting writers submit raw Markdown for chapters means the rendered output has to be treated as untrusted HTML. The chapter preview and the published output both go through react-markdown with rehype-raw and rehype-sanitize's default schema, so formatting is preserved but scripts and unsafe attributes get stripped before anything reaches another reader's browser.",
    },
    {
      title: "Centralising route access without middleware",
      description:
        "Instead of scattering auth checks across every admin and member page, I pulled the decision into one resolveRouteAccess function that every protected layout and route handler calls, and wrote a smoke test covering unauthenticated, non-admin and onboarding-redirect cases against it directly. It's a smaller surface to get right and test than middleware would've been. The trade-off is that it's a convention every new route has to follow on purpose, not something enforced automatically.",
    },
  ],
  testing:
    "Tyread uses Vitest across three layers: a single smoke-test file with 14 cases exercising the route-access policy directly, seven unit-test files validating each feature's Zod input schemas, and twelve integration-test files (clubs, moderation, search, reviews, social features, highlights) that run against a real, migrated PostgreSQL database, not mocks. All three layers, plus linting and the build itself, run through a `ci:verify` script in GitHub Actions against a Postgres 16 service container. There's no component or UI-level test coverage yet. Testing is concentrated on access control, input validation and cross-feature business logic.",
  improvements: [
    "Populate genre tagging so catalogue browsing by genre actually works on the live site, not just in the schema.",
    "Add a discrete per-chapter publish/unpublish action instead of the current book-level publish flag.",
    "Resolve the inconsistency between the sign-in page's OAuth buttons and the sign-up page's copy, so OAuth account creation is unambiguous.",
    "Add component-level tests for the reader, editor and shelf UI to complement the existing access-control and integration coverage.",
  ],
};
