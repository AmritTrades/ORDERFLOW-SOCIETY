"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { fadeUp } from "@/lib/motion";

const EASE = [0.16, 1, 0.3, 1] as const;
const vp   = { once: true, margin: "-80px" } as const;

/* ── Animated footprint-chart icon ── */
const chartBars = [
  /* [x, y, w, h, fill, delay] */
  [0,  0,  20, 5, "rgba(0,255,65,0.70)", 0.00],
  [22, 0,  8,  5, "rgba(239,68,68,0.38)", 0.30],
  [0,  7,  14, 5, "rgba(0,255,65,0.85)", 0.55],
  [16, 7,  6,  5, "rgba(239,68,68,0.32)", 0.80],
  [24, 7,  12, 5, "rgba(0,255,65,0.60)", 0.20],
  [0,  14, 30, 5, "rgba(0,255,65,1.00)", 0.00], // POC — widest/brightest
  [32, 14, 4,  5, "rgba(239,68,68,0.28)", 0.70],
  [0,  21, 10, 5, "rgba(0,255,65,0.55)", 0.40],
  [12, 21, 7,  5, "rgba(239,68,68,0.38)", 0.65],
  [21, 21, 15, 5, "rgba(0,255,65,0.65)", 0.10],
] as const;

function FootprintIcon() {
  return (
    <svg width="36" height="26" viewBox="0 0 36 26" fill="none" aria-hidden>
      {chartBars.map(([x, y, w, h, fill, delay], i) => (
        <motion.rect
          key={i}
          x={x} y={y} width={w} height={h} rx={1.5}
          fill={fill}
          animate={{ opacity: [0.55, 1, 0.55] }}
          transition={{
            duration: 2.2 + (delay as number) * 0.6,
            repeat: Infinity,
            delay: delay as number,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}

/* ── Green-beam animated border CTA ── */
function GreenBeamButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <div className="relative inline-flex" style={{ padding: "1px", borderRadius: "9999px" }}>
      {/* Spinning green beam */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
        style={{
          borderRadius: "9999px",
          background:
            "conic-gradient(from 0deg, transparent 62%, #00ff41 78%, #aaffcc 85%, #00ff41 93%, transparent 100%)",
        }}
      />
      {/* Mask — fills interior so only 1px beam edge shows */}
      <div
        className="absolute inset-[1px]"
        style={{ borderRadius: "9999px", background: "var(--background)" }}
      />
      {/* Link */}
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ background: "rgba(0,255,65,0.08)" }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.15 }}
        className="relative z-10 inline-flex items-center gap-2.5 font-semibold"
        style={{
          fontSize: "0.9rem",
          color: "#00ff41",
          padding: "0.8rem 2rem",
          borderRadius: "9999px",
          letterSpacing: "-0.01em",
          textDecoration: "none",
        }}
      >
        {children}
      </motion.a>
    </div>
  );
}

/* ══════════════════════════════════════════════════ */
export default function TradingStack() {
  return (
    <section
      id="tools"
      className="py-24 relative overflow-hidden"
      style={{ background: "var(--background)", borderTop: "1px solid var(--border)" }}
    >
      {/* Subtle trading grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(var(--foreground-rgb),0.032) 1px, transparent 1px),
            linear-gradient(90deg, rgba(var(--foreground-rgb),0.032) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
      {/* Faint green ambient glow at center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(0,255,65,0.04) 0%, transparent 70%)",
        }}
      />
      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 85% 75% at 50% 50%, transparent 40%, var(--background) 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="mb-12"
        >
          <p className="label-mono mb-4">Partner Tools</p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "var(--foreground)",
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
            }}
          >
            My Trading Stack
          </h2>
        </motion.div>

        {/* ── ATAS card ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
          whileHover={{
            boxShadow:
              "0 0 50px rgba(0,255,65,0.10), 0 0 100px rgba(0,255,65,0.05), inset 0 1px 0 rgba(0,255,65,0.14)",
            borderColor: "rgba(0,255,65,0.22)",
            transition: { duration: 0.35, ease: "easeOut" },
          }}
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: "rgba(var(--background-rgb),0.65)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            border: "1px solid rgba(var(--foreground-rgb),0.08)",
            padding: "2.5rem",
            maxWidth: "56rem",
          }}
        >
          {/* Green top accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-px pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(0,255,65,0.55) 50%, transparent 100%)",
            }}
          />
          {/* TL corner ambient */}
          <div
            className="absolute top-0 left-0 w-72 h-72 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at top left, rgba(0,255,65,0.07) 0%, transparent 65%)",
            }}
          />

          <div className="relative flex flex-col md:flex-row md:items-center gap-8 lg:gap-12">

            {/* Left: icon + badge */}
            <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-5 flex-shrink-0">
              {/* Icon container */}
              <div
                className="flex items-center justify-center w-16 h-16 rounded-2xl"
                style={{
                  background: "rgba(0,255,65,0.07)",
                  border: "1px solid rgba(0,255,65,0.22)",
                  boxShadow: "0 0 24px rgba(0,255,65,0.1)",
                }}
              >
                <FootprintIcon />
              </div>

              {/* Verified partner badge */}
              <span
                className="inline-flex items-center gap-1.5 label-mono"
                style={{
                  color: "#00ff41",
                  background: "rgba(0,255,65,0.07)",
                  border: "1px solid rgba(0,255,65,0.18)",
                  borderRadius: "9999px",
                  padding: "0.28rem 0.8rem",
                  fontSize: "0.58rem",
                  letterSpacing: "0.13em",
                  whiteSpace: "nowrap",
                }}
              >
                {/* Pulsing dot */}
                <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
                  <motion.span
                    className="absolute inline-flex h-full w-full rounded-full"
                    style={{ background: "#00ff41" }}
                    animate={{ scale: [1, 2.5, 1], opacity: [0.8, 0, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: "#00ff41" }} />
                </span>
                VERIFIED PARTNER
              </span>
            </div>

            {/* Right: copy + CTA */}
            <div className="flex-1 min-w-0">
              <p
                className="label-mono mb-2"
                style={{ color: "rgba(var(--foreground-rgb),0.38)" }}
              >
                ATAS Orderflow Platform
              </p>

              <h3
                style={{
                  fontFamily:
                    "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                  fontSize: "clamp(1.4rem, 2.5vw, 1.875rem)",
                  fontWeight: 700,
                  color: "var(--foreground)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.15,
                  marginBottom: "0.75rem",
                }}
              >
                Professional Orderflow Software
              </h3>

              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "rgba(var(--foreground-rgb),0.55)",
                  lineHeight: 1.72,
                  maxWidth: "36rem",
                  marginBottom: "1.75rem",
                }}
              >
                The platform I use daily for footprint, DOM, and heatmap analysis.
                Use our partner link to get started with the industry standard.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <GreenBeamButton href="https://atas.net/pricing/?rs=partners_oft269464">
                  Get ATAS with Edge
                  <ExternalLink className="w-3.5 h-3.5" strokeWidth={2} />
                </GreenBeamButton>

                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(var(--foreground-rgb),0.3)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Free trial available · No credit card required
                </span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
