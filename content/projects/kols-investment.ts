import type { CaseStudyProject } from "@/lib/types";

export const kolsInvestment: CaseStudyProject = {
  slug: "kols-investment",
  name: "Kols Investment",
  tagline:
    "A demo investment workspace for tracking, buying and selling stocks and cryptocurrency.",
  summary:
    "A demo investment app for stocks and crypto, with portfolio tracking, alerts and admin-reviewed deposits.",
  featured: true,
  liveUrl: "https://kolskinv.vercel.app/",
  repoLinks: [
    {
      label: "Frontend repo",
      href: "https://github.com/Ibreex187/KOLski-investmentapp",
    },
    {
      label: "Backend repo",
      href: "https://github.com/Ibreex187/KOLski-investmentBackend",
    },
  ],
  apiUrl: "https://ko-lski-investment-backend.vercel.app",
  disclaimer:
    "Kols Investment is a fake-money simulation, as its backend documentation states explicitly: no real trades, deposits or withdrawals occur, and nothing here is financial advice.",
  techStack: [
    "React",
    "Redux Toolkit",
    "Vite",
    "React-Bootstrap",
    "JavaScript",
    "Node.js",
    "Express",
    "MongoDB (Mongoose)",
    "Redis",
    "Jest",
    "Supertest",
    "Alpha Vantage API",
    "GitHub Actions",
    "Vercel",
  ],
  screenshots: [],
  overview:
    "Kols Investment is a demo investment workspace for buying, selling and tracking stocks and cryptocurrency, built as a React/Redux single-page app on top of a separate Express REST API. Where Zurickh Bank is framed around transactional integrity, this project is framed around markets and backend engineering: caching third-party market data sensibly, reconciling a portfolio's recorded state against its transaction history, and running scheduled work (price-alert checks, a nightly demo-account reset) on a serverless, cron-limited hosting plan.",
  problem:
    "Market data APIs are rate-limited and occasionally unavailable, and a portfolio's cash and holdings can drift out of sync with its transaction history if a write fails partway or a bug slips through. I wanted a project that treated both as first-class problems: caching and gracefully degrading market data instead of assuming it's always there, and building a reconciliation process that can catch and correct drift instead of trusting the stored portfolio state blindly.",
  role:
    "I designed and built the backend API and the frontend client. That includes the JWT auth and session model, the portfolio and reconciliation logic, the Alpha-Vantage-backed market data layer with its Redis cache, the alerts and notifications system, the admin approval workflow for manual deposits/withdrawals, and the Jest/Supertest test suite.",
  keyFeatures: [
    {
      title: "Portfolio tracking with reconciliation",
      description:
        "Buy/sell, a dashboard, returns and allocation analytics, benchmark comparison, and performance history over time. A separate reconciliation service replays a user's transaction history to recompute their expected cash and holdings, flags mismatches against the live portfolio record, and can auto-correct them.",
    },
    {
      title: "Market data with a Redis cache and graceful fallback",
      description:
        "Live quotes, symbol search and historical prices come from the Alpha Vantage API, cached through ioredis. The Redis client is wrapped so that if Redis is unavailable, calls no-op instead of failing the request, so market data degrades gracefully instead of taking the app down with it.",
    },
    {
      title: "Price alerts and in-app notifications",
      description:
        "Users set above/below price alerts on a symbol; a scheduled job checks them and creates an in-app notification when triggered, with email as a best-effort secondary channel. The check itself runs on a GitHub Actions cron job rather than Vercel's own scheduler, because the Hobby plan's Vercel Cron only allows a daily run. That's a real hosting constraint, not an oversight.",
    },
    {
      title: "Manual deposits and withdrawals with admin approval",
      description:
        "Users submit manual deposit/withdrawal requests, which sit in a queue for an admin to approve or reject through role-gated admin routes. There's no direct, unreviewed path to changing a balance.",
    },
    {
      title: "Transaction history with export",
      description:
        "Paginated transaction history filterable by type, symbol and date range, with a CSV export endpoint for up to 1,000 records.",
    },
    {
      title: "Auth and session management",
      description:
        "JWT access and refresh tokens, bcrypt password hashing, and OTP email verification via Nodemailer. Users can list and revoke individual sessions or log out of every device at once. That's actually the feature behind what I used to call multi-account management: the app itself is one portfolio per user account, not multiple portfolios per user.",
    },
    {
      title: "Partial OpenAPI documentation",
      description:
        "A live OpenAPI spec at /api/v1/docs/openapi.json documents the core auth, portfolio and admin endpoints. It currently covers roughly half the real route surface (market and several portfolio routes aren't in it yet), so it's a useful reference, not a complete one.",
    },
  ],
  architecture: {
    description:
      "The frontend is a React/Redux Toolkit single-page app built with Vite. It talks to a separate Express REST API, deployed on Vercel as a serverless function, which reads and writes MongoDB through Mongoose, caches market data in Redis, and calls out to the Alpha Vantage API for prices. Scheduled work that a normal server would run through an internal cron (alert checks, a nightly demo-account reset) runs instead as GitHub Actions workflows calling secured internal endpoints, to get around the Hobby-plan Vercel Cron limit.",
    diagramKey: "kols-architecture",
  },
  challenges: [
    {
      title: "Keeping a portfolio consistent with its own history",
      description:
        "Trusting a portfolio's stored cash/holdings values directly risks silent drift if any write along the way is incomplete. The reconciliation service instead treats the transaction log as the source of truth: it replays every transaction to recompute the expected state, compares that against what's stored, and flags (or corrects) any mismatch instead of assuming the stored value is always right.",
    },
    {
      title: "Running scheduled jobs on a cron-limited host",
      description:
        "Vercel's Hobby plan only allows a daily cron trigger, which isn't frequent enough for price-alert checking. I moved the scheduling to GitHub Actions, which calls a secured internal API endpoint on its own schedule. That workaround also forced the free Alpha Vantage tier's rate limit (about 25 calls a day) to become an explicit design constraint on how often alerts can realistically be checked, instead of something I discovered the hard way in production.",
    },
    {
      title: "Degrading gracefully when Redis or the market API is unavailable",
      description:
        "Market data calls are wrapped so a Redis outage doesn't fail the request: cache reads and writes just no-op instead of throwing. There's also a demo-data fallback path for when live Alpha Vantage data isn't available at all, so the app stays usable through real third-party outages instead of erroring out.",
    },
  ],
  testing:
    "The backend test suite uses Jest, Supertest and mongodb-memory-server, with 28 test files organised by domain: auth and sessions, portfolio and trading (including dedicated reconciliation and manual deposit/withdrawal integration tests), market data, and alerts/analytics/admin/security. CI runs the full suite with mongodb-memory-server binaries cached between runs. The frontend's GitHub Actions workflows (ci.yml, deploy-pages.yml) run lint and build on every push, plus a secondary GitHub Pages deployment alongside the primary Vercel one. There's no frontend test suite yet.",
  improvements: [
    "Add a visible demo/no-real-money disclaimer to the live frontend itself, and replace the current placeholder pricing tiers and testimonials with copy that's honest about the project being a portfolio demo, not a commercial product.",
    "Extend the OpenAPI spec to cover the remaining routes (registration, refresh-token, the rest of portfolio and all of market) so it's a complete reference instead of a partial one.",
    "Add a frontend test suite alongside the existing lint/build CI checks.",
  ],
};
