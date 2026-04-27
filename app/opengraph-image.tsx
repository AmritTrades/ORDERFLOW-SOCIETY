import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Orderflow Society — Master the Order Flow Edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Subtle grid lines */}
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          background: "repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(0,255,65,0.04) 80px), repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(0,255,65,0.04) 80px)",
        }} />

        {/* Green bottom bar */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "5px",
          background: "#00ff41",
          display: "flex",
        }} />

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0px" }}>
          {/* Logo bars */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "14px", marginBottom: "52px" }}>
            <div style={{ width: "140px", height: "17px", borderRadius: "9px", background: "#00ff41", display: "flex" }} />
            <div style={{ width: "90px",  height: "17px", borderRadius: "9px", background: "#00ff41", display: "flex" }} />
            <div style={{ width: "120px", height: "17px", borderRadius: "9px", background: "#00ff41", display: "flex" }} />
            <div style={{ width: "55px",  height: "17px", borderRadius: "9px", background: "#00ff41", display: "flex" }} />
          </div>

          {/* Wordmark */}
          <div style={{
            display: "flex",
            color: "#ffffff",
            fontSize: "100px",
            fontWeight: 800,
            letterSpacing: "0.06em",
            lineHeight: 1,
            fontFamily: "monospace",
          }}>
            ORDERFLOW
          </div>

          <div style={{
            display: "flex",
            color: "#00ff41",
            fontSize: "42px",
            fontWeight: 700,
            letterSpacing: "0.55em",
            marginTop: "12px",
            fontFamily: "monospace",
          }}>
            SOCIETY
          </div>

          {/* Tagline */}
          <div style={{
            display: "flex",
            color: "rgba(255,255,255,0.35)",
            fontSize: "20px",
            letterSpacing: "0.22em",
            marginTop: "36px",
            fontFamily: "monospace",
          }}>
            MASTER THE ORDER FLOW EDGE
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
