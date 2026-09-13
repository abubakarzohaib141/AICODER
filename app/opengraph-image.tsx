import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background: "#faf7f5",
          color: "#201e1c",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
          <div
            style={{
              width: 26,
              height: 26,
              borderRadius: "50%",
              background: "#147D8A",
            }}
          />
          <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: -0.5 }}>AI CODERS</div>
        </div>
        <div style={{ fontSize: 58, fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.15, display: "flex" }}>
          We Build AI Systems That Do
        </div>
        <div
          style={{
            fontSize: 58,
            fontWeight: 800,
            letterSpacing: -1.5,
            lineHeight: 1.15,
            display: "flex",
            color: "#147D8A",
          }}
        >
          Real Work.
        </div>
        <div style={{ marginTop: 32, fontSize: 22, color: "#6b6560", display: "flex" }}>
          AI Engineering · Agentic AI · Automation
        </div>
      </div>
    ),
    { ...size }
  );
}
