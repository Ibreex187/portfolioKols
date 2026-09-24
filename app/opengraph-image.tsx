import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site-config";

export const alt = `${siteConfig.name} · ${siteConfig.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
        <div style={{ fontSize: 28, color: "#1d4ed8", fontWeight: 600 }}>
          {siteConfig.location}
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, marginTop: 20 }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 34, color: "#57534e", marginTop: 16 }}>
          {siteConfig.headline}
        </div>
      </div>
    ),
    { ...size }
  );
}
