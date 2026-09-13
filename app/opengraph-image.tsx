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
          background: "#08090b",
          color: "#f3f2ef",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #FF8800, #4F7FF7)",
            }}
          />
          <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: -0.5 }}>AI CODERS</div>
        </div>
        <div style={{ fontSize: 60, fontWeight: 700, letterSpacing: -1.5, lineHeight: 1.1, display: "flex" }}>
          We Build AI Systems
        </div>
        <div
          style={{
            fontSize: 60,
            fontWeight: 700,
            letterSpacing: -1.5,
            lineHeight: 1.1,
            display: "flex",
            background: "linear-gradient(120deg, #22B6B0, #4F7FF7 55%, #FF8800)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          That Do Real Work.
        </div>
        <div style={{ marginTop: 32, fontSize: 24, color: "#a3a3a6", display: "flex" }}>
          AI Engineering • Agentic AI • Automation
        </div>
      </div>
    ),
    { ...size }
  );
}
