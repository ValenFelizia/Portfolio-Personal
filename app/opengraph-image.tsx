import { ImageResponse } from "next/og";
import { siteMetadata } from "@/lib/site";

export const dynamic = "force-static";

export const alt = siteMetadata.ogImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#111111",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: 900,
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 64,
              fontWeight: 600,
              color: "#e5e5e5",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            {siteMetadata.name}
          </p>
          <p
            style={{
              margin: "28px 0 0",
              fontSize: 30,
              fontWeight: 400,
              color: "#a3a3a3",
              lineHeight: 1.4,
            }}
          >
            Sitios y catálogos web para{" "}
            <span style={{ color: "#818cf8" }}>negocios locales</span>
          </p>
          <div
            style={{
              marginTop: 36,
              width: 96,
              height: 4,
              borderRadius: 2,
              background: "linear-gradient(90deg, #6366f1, #818cf8)",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
