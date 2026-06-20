import { ImageResponse } from "next/og";
import { siteMetadata } from "@/lib/site";

export const dynamic = "force-static";

export const alt = siteMetadata.ogImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadInterSemiBold(): Promise<ArrayBuffer> {
  const response = await fetch(
    "https://fonts.bunny.net/inter/files/inter-latin-600-normal.woff",
  );

  if (!response.ok) {
    throw new Error("No se pudo cargar la fuente Inter para Open Graph");
  }

  return response.arrayBuffer();
}

export default async function OpenGraphImage() {
  const interSemiBold = await loadInterSemiBold();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#111111",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 520,
            height: 520,
            marginTop: -260,
            marginLeft: -260,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(99,102,241,0.28) 0%, rgba(17,17,17,0) 72%)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 220,
              fontWeight: 600,
              color: "#e5e5e5",
              letterSpacing: "-0.06em",
              lineHeight: 1,
            }}
          >
            VF
          </p>
          <div
            style={{
              marginTop: 28,
              width: 112,
              height: 6,
              borderRadius: 3,
              background: "linear-gradient(90deg, #6366f1, #818cf8)",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: interSemiBold,
          style: "normal",
          weight: 600,
        },
      ],
    },
  );
}
