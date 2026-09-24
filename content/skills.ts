import type { SkillGroup } from "@/lib/types";

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    icon: "code",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    category: "Frontend",
    icon: "layout",
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
    icon: "database",
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
    icon: "flask",
    skills: ["Jest", "Vitest", "Supertest", "Git", "GitHub Actions", "Vercel"],
  },
];
