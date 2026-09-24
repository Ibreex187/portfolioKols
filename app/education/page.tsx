import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { Reveal } from "@/components/ui/Reveal";
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

      <div className="mt-10 flex flex-col gap-6">
        {education.map((entry) => (
          <Reveal key={entry.institution}>
            <Card>
              <div className="flex items-start gap-4">
                <IconBadge icon="graduationCap" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {entry.startDate} – {entry.endDate}
                  </p>
                  <h2 className="mt-1 text-lg font-semibold text-foreground">
                    {entry.qualification}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {entry.institution} — {entry.location}
                  </p>
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
