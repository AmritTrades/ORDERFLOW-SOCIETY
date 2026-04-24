"use client";

import { motion } from "framer-motion";
import { fadeUp, slideLeft, slideRight, viewport } from "@/lib/motion";

const chips = [
  "Footprint Charts",
  "Market Profile",
  "Volume Profile",
  "Delta Divergence",
  "ES / NQ Futures",
  "Tape Reading",
];

export default function About() {
  return (
    <section id="about" className="py-36 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left — editorial pull quote */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <p className="label-mono mb-8">About the Mentor</p>

            <blockquote
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 300,
                lineHeight: 1.25,
                color: "#f5f5f5",
                letterSpacing: "-0.02em",
                marginBottom: "2rem",
              }}
            >
              "I stopped chasing lagging indicators. I learned to read what institutions
              actually do to move price."
            </blockquote>

            <div
              className="w-8 h-px mb-8"
              style={{ background: "rgba(255,255,255,0.2)" }}
            />

            <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              I&apos;m <span style={{ color: "#f5f5f5" }}>Amrit</span> — a full-time futures trader
              specialising in orderflow analysis, footprint charts, and market microstructure.
              After years of losing money chasing lagging indicators, I discovered what institutions
              actually do to move price.
            </p>
            <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.75, marginBottom: "2rem" }}>
              Now I teach serious traders how to read the tape — understanding aggressive buyers
              and sellers, identifying iceberg orders, absorbing imbalances, and positioning with
              the smart money instead of against it.
            </p>

            <div className="flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span
                  key={chip}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "0.3rem 0.85rem",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "9999px",
                    fontSize: "0.72rem",
                    color: "rgba(255,255,255,0.45)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — video card */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div
              className="relative overflow-hidden"
              style={{
                aspectRatio: "16/9",
                borderRadius: "1.25rem",
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              {/* Faint chart line */}
              <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
                <svg viewBox="0 0 640 360" style={{ width: "100%", height: "100%" }} preserveAspectRatio="xMidYMid slice">
                  <polyline
                    points="0,320 80,280 160,300 240,210 320,230 400,150 480,170 560,90 640,110"
                    fill="none"
                    stroke="#f5f5f5"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Play button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  className="cursor-pointer flex items-center justify-center"
                  style={{
                    width: "4rem",
                    height: "4rem",
                    borderRadius: "9999px",
                    background: "#fff",
                  }}
                >
                  <svg className="ml-1" width="18" height="18" viewBox="0 0 24 24" fill="#080808">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.div>
                <div className="text-center">
                  <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.8)", fontWeight: 500, marginBottom: "0.25rem" }}>
                    How I Read Order Flow — Full Breakdown
                  </p>
                  <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>
                    YouTube · @amrittrades
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
