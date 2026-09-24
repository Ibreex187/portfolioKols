import { ImageResponse } from "next/og";
import { getProjectBySlug, getProjectSlugs } from "@/lib/content";
import { projectAccentHex, DEFAULT_ACCENT_HEX } from "@/lib/project-accents";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const accent = projectAccentHex[slug] ?? DEFAULT_ACCENT_HEX;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#faf8f5",
          color: "#1c1917",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 26, color: accent, fontWeight: 600 }}>
          Case study
        </div>
        <div style={{ fontSize: 60, fontWeight: 700, marginTop: 20 }}>
          {project?.name ?? "Project"}
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#57534e",
            marginTop: 16,
            maxWidth: 900,
          }}
        >
          {project?.tagline ?? ""}
        </div>
      </div>
    ),
    { ...size }
  );
}
