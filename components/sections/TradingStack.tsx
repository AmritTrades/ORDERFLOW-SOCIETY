"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;
const vp   = { once: true, margin: "-80px" } as const;

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

/* ── Footprint chart icon ── */
const chartBars = [
  [0,  0,  20, 5, "rgba(0,255,65,0.70)", 0.00],
  [22, 0,  8,  5, "rgba(239,68,68,0.38)", 0.30],
  [0,  7,  14, 5, "rgba(0,255,65,0.85)", 0.55],
  [16, 7,  6,  5, "rgba(239,68,68,0.32)", 0.80],
  [24, 7,  12, 5, "rgba(0,255,65,0.60)", 0.20],
  [0,  14, 30, 5, "rgba(0,255,65,1.00)", 0.00],
  [32, 14, 4,  5, "rgba(239,68,68,0.28)", 0.70],
  [0,  21, 10, 5, "rgba(0,255,65,0.55)", 0.40],
  [12, 21, 7,  5, "rgba(239,68,68,0.38)", 0.65],
  [21, 21, 15, 5, "rgba(0,255,65,0.65)", 0.10],
] as const;

function FootprintIcon() {
  return (
    <svg width="38" height="28" viewBox="0 0 36 26" fill="none" aria-hidden>
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

/* ══════════════════════════════════════════════════════════════════ */
export default function TradingStack() {
  return (
    <section
      id="tools"
      className="py-24"
      style={{ background: "var(--background)", borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="mb-10"
        >
          <motion.p variants={fadeUp} className="label-mono mb-4">
            Partner Tools
          </motion.p>
          <motion.h2
            variants={fadeUp}
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "var(--foreground)",
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
            }}
          >
            My Trading Stack
          </motion.h2>
        </motion.div>

        {/* ══ ATAS card — rebuilt from scratch ══ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.8, ease: EASE }}
          /*
           * overflow-hidden ensures the absolute background glow is
           * clipped at the card boundary and can never escape onto the page.
           */
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: "rgba(5, 8, 12, 0.92)",
            border: "1px solid rgba(255, 255, 255, 0.10)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
          }}
        >

          {/* ── Vapor glow — ABSOLUTE TOP-0 LEFT-0, Z-0, POINTER-EVENTS-NONE ──
               overflow-hidden on the card clips it at the card boundary.
               Opacity breath keeps it behind the content layer. */}
          <motion.div
            aria-hidden
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 20% 50%, rgba(0, 255, 0, 0.15) 0%, transparent 70%)",
            }}
          />

          {/* ── Card content — RELATIVE, Z-10 ──
               Explicit stacking context above the glow. */}
          <div className="relative z-10 p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-[88px_1fr] gap-6 md:gap-10 items-center">

              {/* Left column — icon + badge */}
              <div className="flex flex-row md:flex-col items-center md:items-start gap-3">
                <div
                  className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl"
                  style={{
                    background: "rgba(0, 255, 65, 0.08)",
                    border: "1px solid rgba(0, 255, 65, 0.20)",
                  }}
                >
                  <FootprintIcon />
                </div>

                <span
                  className="inline-flex items-center gap-1.5 label-mono whitespace-nowrap"
                  style={{
                    color: "#00ff41",
                    background: "rgba(0, 255, 65, 0.07)",
                    border: "1px solid rgba(0, 255, 65, 0.18)",
                    borderRadius: "9999px",
                    padding: "0.25rem 0.7rem",
                    fontSize: "0.56rem",
                    letterSpacing: "0.12em",
                  }}
                >
                  <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
                    <motion.span
                      className="absolute inline-flex h-full w-full rounded-full"
                      style={{ background: "#00ff41" }}
                      animate={{ scale: [1, 2.5, 1], opacity: [0.8, 0, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <span
                      className="relative inline-flex rounded-full h-1.5 w-1.5"
                      style={{ background: "#00ff41" }}
                    />
                  </span>
                  VERIFIED PARTNER
                </span>
              </div>

              {/* Right column — all text + CTA */}
              <div>
                <p
                  className="label-mono mb-2"
                  style={{ color: "rgba(255, 255, 255, 0.35)" }}
                >
                  ATAS Orderflow Platform
                </p>

                {/* Heading — white, bold, 2xl */}
                <h3
                  style={{
                    fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)",
                    fontWeight: 700,
                    color: "#ffffff",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.15,
                    marginBottom: "0.65rem",
                  }}
                >
                  Professional Orderflow Software
                </h3>

                {/* Description — gray-400 */}
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgb(156, 163, 175)",
                    lineHeight: 1.72,
                    marginBottom: "1.5rem",
                  }}
                >
                  The platform I use daily for footprint, DOM, and heatmap
                  analysis. Use our partner link to get started with the
                  industry standard.
                </p>

                {/* 21st-dev secondary button */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <motion.a
                    href="https://atas.net/pricing/?rs=partners_oft269464"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      background: "rgba(0, 255, 65, 0.14)",
                      borderColor: "rgba(0, 255, 65, 0.50)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="inline-flex items-center gap-2 font-semibold"
                    style={{
                      fontSize: "0.9rem",
                      color: "#00ff41",
                      background: "rgba(0, 255, 65, 0.06)",
                      border: "1px solid rgba(0, 255, 65, 0.28)",
                      borderRadius: "9999px",
                      padding: "0.7rem 1.5rem",
                      letterSpacing: "-0.01em",
                      textDecoration: "none",
                      width: "fit-content",
                    }}
                  >
                    Get ATAS with Edge
                    <ExternalLink className="w-3.5 h-3.5" strokeWidth={2} />
                  </motion.a>

                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "rgba(255, 255, 255, 0.28)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Free trial available · No credit card required
                  </span>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
