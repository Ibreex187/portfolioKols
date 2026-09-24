import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { Reveal } from "@/components/ui/Reveal";
import { icons } from "@/components/icons";
import { experience } from "@/content/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience as a full-stack and frontend developer.",
};

export default function ExperiencePage() {
  const TrophyIcon = icons.trophy;

  return (
    <Container className="py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Experience
      </h1>

      <div className="mt-10 flex flex-col gap-6">
        {experience.map((role) => (
          <Reveal key={`${role.company}-${role.startDate}`}>
            <Card>
              <div className="flex items-start gap-4">
                <IconBadge icon="briefcase" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {role.startDate} – {role.endDate}
                  </p>
                  <h2 className="mt-1 text-lg font-semibold text-foreground">
                    {role.title}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {role.company} — {role.location}
                  </p>
                </div>
              </div>

              <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 text-foreground/90">
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              {role.award && (
                <div className="mt-4 flex items-start gap-3 rounded-lg border border-accent/30 bg-accent/10 p-3">
                  <TrophyIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <p className="text-sm">
                    <span className="font-medium text-foreground">
                      {role.award.title}
                    </span>{" "}
                    <span className="text-muted-foreground">
                      ({role.award.date})
                    </span>
                    : {role.award.description}
                  </p>
                </div>
              )}
            </Card>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
