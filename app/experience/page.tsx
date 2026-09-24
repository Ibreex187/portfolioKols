import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Timeline, TimelineItem } from "@/components/ui/Timeline";
import { experience } from "@/content/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience as a full-stack and frontend developer.",
};

export default function ExperiencePage() {
  return (
    <Container className="py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Experience
      </h1>

      <div className="mt-10">
        <Timeline>
          {experience.map((role) => (
            <TimelineItem
              key={`${role.company}-${role.startDate}`}
              title={role.title}
              subtitle={`${role.company} · ${role.location}`}
              dateRange={`${role.startDate} – ${role.endDate}`}
            >
              <ul className="flex list-disc flex-col gap-2 pl-5">
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              {role.award && (
                <p className="mt-4 rounded-md border border-border bg-muted px-4 py-3 text-sm">
                  <span className="font-medium text-foreground">
                    {role.award.title}
                  </span>{" "}
                  <span className="text-muted-foreground">
                    ({role.award.date})
                  </span>
                  : {role.award.description}
                </p>
              )}
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </Container>
  );
}
