import { ImageResponse } from "next/og";
import { getProjectBySlug, getProjectSlugs } from "@/lib/content";

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
          background: "#ffffff",
          color: "#171717",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 26, color: "#1d4ed8", fontWeight: 600 }}>
          Case study
        </div>
        <div style={{ fontSize: 60, fontWeight: 700, marginTop: 20 }}>
          {project?.name ?? "Project"}
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#52525b",
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
