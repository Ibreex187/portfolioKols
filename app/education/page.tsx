import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Timeline, TimelineItem } from "@/components/ui/Timeline";
import { education } from "@/content/education";

export const metadata: Metadata = {
  title: "Education",
  description: "Academic background.",
};

export default function EducationPage() {
  return (
    <Container className="py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Education
      </h1>

      <div className="mt-10">
        <Timeline>
          {education.map((entry) => (
            <TimelineItem
              key={entry.institution}
              title={entry.qualification}
              subtitle={`${entry.institution} · ${entry.location}`}
              dateRange={`${entry.startDate} – ${entry.endDate}`}
            />
          ))}
        </Timeline>
      </div>
    </Container>
  );
}
