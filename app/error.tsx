"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#000",
        color: "#fff",
        fontFamily: "ui-monospace, monospace",
        gap: "1.5rem",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", color: "rgba(255,255,255,0.4)" }}>
        RUNTIME ERROR
      </p>
      <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.85)", maxWidth: "40rem" }}>
        {error.message}
      </p>
      <button
        onClick={reset}
        style={{
          marginTop: "0.5rem",
          fontSize: "0.8rem",
          color: "#00ff41",
          background: "transparent",
          border: "1px solid rgba(0,255,65,0.3)",
          borderRadius: "9999px",
          padding: "0.5rem 1.5rem",
          cursor: "pointer",
          letterSpacing: "0.1em",
        }}
      >
        RETRY
      </button>
    </div>
  );
}
