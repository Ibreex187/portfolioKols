import type { CaseStudyProject } from "@/lib/types";

export const zurickhBank: CaseStudyProject = {
  slug: "zurickh-bank",
  name: "Zurickh Bank",
  tagline:
    "A full-stack demo banking app built around core banking and transaction integrity.",
  summary:
    "A demo banking app with transfers, savings, beneficiaries and a simulated stock portfolio. No real money involved.",
  featured: true,
  liveUrl: "https://zurickh.vercel.app/",
  repoLinks: [
    { label: "Backend repo", href: "https://github.com/Ibreex187/ZurickhBank" },
    {
      label: "Frontend repo",
      href: "https://github.com/Ibreex187/ZurickhBank-frontend",
    },
  ],
  disclaimer:
    "Zurickh Bank is a fictional portfolio demo. It is not a licensed bank, is not insured, and does not hold, move or lend real money. Every balance, transfer, saving and investment you see is simulated.",
  techStack: [
    "React",
    "Vite",
    "JavaScript",
    "Node.js",
    "Express",
    "MongoDB (Mongoose)",
    "JWT",
    "Jest",
    "Supertest",
    "Vercel",
  ],
  screenshots: [],
  overview:
    "Zurickh Bank is a full-stack demo banking app covering the core of what a retail bank actually does day to day: accounts, transfers, savings, beneficiaries, a simulated stock portfolio, and an admin view over all of it. I built and deploy both the Express/MongoDB backend and the React/Vite frontend, and framed the whole project around one question: how do you move money between accounts without ever leaving the ledger in an inconsistent state, even under concurrent requests or mid-request failures?",
  problem:
    "Banking demos are common, but most stop at CRUD: create an account, update a balance. That doesn't test the part of banking that's actually hard: making sure a transfer either completes in full or not at all, that limits are enforced consistently per user tier, and that abuse paths (like claiming a signup bonus twice) are closed at the data-model level, not patched over in the UI. I wanted something where those guarantees hold under real conditions, not just in the happy path.",
  role:
    "I designed and built both the backend API and the frontend client on my own: the MongoDB schema and transactional logic, the tiered limits and PIN-based authorisation model, the ledger and its backfill tooling, the signup-bonus anti-abuse registry, and the Jest/Supertest test suite covering it.",
  keyFeatures: [
    {
      title: "Atomic money movement",
      description:
        "Deposits, withdrawals, transfers and savings operations all run inside a MongoDB session with mongoose.startSession() and session.withTransaction(), against a replica-set database. A transfer either completes in full (debit, credit and ledger entry together) or the whole operation rolls back. It can't leave one account debited without the matching credit.",
    },
    {
      title: "Ledger with statements and a backfill script",
      description:
        "Every transactional operation posts a double-entry journal record via a dedicated ledger service, which enforces that debits equal credits. Users can pull their ledger history and account statements (opening/closing balance, debits, credits, net movement) through a dedicated endpoint, and a standalone, idempotent backfill script can regenerate ledger entries for historical data.",
    },
    {
      title: "PIN-gated transactions and tiered limits",
      description:
        "A 4-digit transaction PIN, bcrypt-hashed, is required on every deposit, withdrawal, transfer and savings operation. Daily and monthly transfer/withdrawal limits vary by verification tier (unverified through tier 3), and a limits endpoint reports the limit, amount used and amount remaining for each operation type.",
    },
    {
      title: "Recipient lookup and self-transfer protection",
      description:
        "Before a transfer is submitted, the recipient's account number resolves to their name so the sender can confirm who they're paying, and the same endpoint stops a user transferring to themselves.",
    },
    {
      title: "Savings and a simulated stock portfolio",
      description:
        "Savings deposits and withdrawals are transactional and limit-checked like any other money movement, with a savings-insights endpoint surfacing account health and recommendations. A simulated stock feature supports buying and selling against mocked, randomly-fluctuating prices, with a portfolio view and trade history. The prices aren't real market data, and the app says so.",
    },
    {
      title: "Signup-bonus abuse prevention",
      description:
        "New accounts receive a signup bonus, but a normalised-email registry tracks every email that's ever claimed one, so changing a profile's email and re-registering the original address doesn't grant a second bonus. This exact scenario has its own integration test.",
    },
    {
      title: "Security fundamentals",
      description:
        "Helmet, a configurable CORS allowlist, express-rate-limit, express-validator on every input, and bcrypt for both account and transaction-PIN passwords.",
    },
  ],
  architecture: {
    description:
      "The frontend is a React single-page app built with Vite, calling a separate Express REST API. The API talks to MongoDB through Mongoose, and, because atomic transactions require it, the database runs as a replica set instead of a single standalone instance. JWT handles authentication between the two, and Nodemailer sends OTP verification emails from the backend.",
    diagramKey: "zurickh-architecture",
  },
  dataModel: {
    heading: "How a transfer flows",
    description:
      "Rather than a schema diagram, the more useful picture for this project is the path a transfer actually takes through the system: PIN verification, then a tiered limit check against the sender's daily and monthly usage, then the atomic MongoDB transaction that moves the money, and finally a ledger entry recording it. Each step can reject the transfer before anything is written.",
    diagramKey: "zurickh-transfer-flow",
  },
  challenges: [
    {
      title: "Making transfers genuinely atomic",
      description:
        "A naive implementation updates the sender's balance, then the recipient's, as two separate writes, which leaves a window where a crash or concurrent request corrupts the ledger. Every money-moving operation runs inside a single MongoDB session with withTransaction(), so the debit, credit and ledger write commit together or not at all. This only works against a replica-set deployment, which shaped how the app has to be hosted and tested: an in-memory replica set in CI, not a standalone Mongo instance.",
    },
    {
      title: "Tiered limits that stay consistent under concurrency",
      description:
        "Daily and monthly limits have to be checked against a running total of the user's own transfers, per tier, without letting two near-simultaneous requests both pass the check and jointly exceed the limit. The limit check happens inside the same transactional flow as the transfer itself, and a dedicated limits endpoint exposes the same used/remaining figures the check relies on, so the frontend and the enforcement logic can't drift apart.",
    },
    {
      title: "Closing the signup-bonus abuse path",
      description:
        "The obvious anti-abuse check (one bonus per account) doesn't survive a user changing their account email and re-registering the old one as a new account. I moved the check to a separate email-registry collection keyed on a normalised form of the email, independent of any single user record, and wrote an integration test that reproduces exactly that abuse path to prove it's closed.",
    },
  ],
  testing:
    "The backend uses Jest and Supertest. The default `npm test` run is mostly fast, DB-free logic and validation tests: request-validation rejection paths, pagination maths, Mongoose schema validation via validateSync(). A separate, opt-in `test:integration` script boots a real MongoDB replica set in memory and drives full HTTP requests through deposit, transfer, savings, ledger and signup-bonus flows end to end, including the changed-email bonus-abuse scenario above.",
  improvements: [
    "Move OTP and transactional email off the Ethereal fallback path in production configuration, so a missing SMTP setting can't silently swallow a real verification email.",
    "Fold more of the default test suite into the same in-memory-replica-set setup the integration suite uses, so a broader range of tests exercise real transactional behaviour, not just validation.",
    "Extend the admin view with the same limits/statement reporting that's available to individual users.",
  ],
};
