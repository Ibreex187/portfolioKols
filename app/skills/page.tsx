import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { skills } from "@/content/skills";

export const metadata: Metadata = {
  title: "Skills",
  description: "Languages, frameworks and tools used across my projects and roles.",
};

export default function SkillsPage() {
  return (
    <Container className="py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Skills
      </h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Everything listed here has been used in at least one of the projects
        or roles on this site.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category}>
            <h2 className="text-lg font-semibold text-foreground">
              {group.category}
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-border px-3 py-1 text-sm text-foreground"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  );
}
