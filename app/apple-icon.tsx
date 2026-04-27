import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "36px",
          gap: "12px",
        }}
      >
        <div style={{ width: "108px", height: "14px", borderRadius: "7px", background: "#00ff41", display: "flex" }} />
        <div style={{ width: "70px",  height: "14px", borderRadius: "7px", background: "#00ff41", display: "flex" }} />
        <div style={{ width: "93px",  height: "14px", borderRadius: "7px", background: "#00ff41", display: "flex" }} />
        <div style={{ width: "42px",  height: "14px", borderRadius: "7px", background: "#00ff41", display: "flex" }} />
      </div>
    ),
    { ...size }
  );
}
