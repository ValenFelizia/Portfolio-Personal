import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 6,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: "#e5e5e5",
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            VF
          </span>
          <div
            style={{
              marginTop: 3,
              width: 14,
              height: 2,
              borderRadius: 1,
              background: "linear-gradient(90deg, #6366f1, #818cf8)",
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
