import type { SkillGroup } from "@/lib/types";

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Redux Toolkit",
      "Vite",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    category: "Backend & Data",
    skills: [
      "Node.js",
      "Express",
      "RESTful APIs",
      "MongoDB",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Firebase/Firestore",
      "NextAuth",
      "Zod",
    ],
  },
  {
    category: "Testing & Tools",
    skills: ["Jest", "Vitest", "Supertest", "Git", "GitHub Actions", "Vercel"],
  },
];
