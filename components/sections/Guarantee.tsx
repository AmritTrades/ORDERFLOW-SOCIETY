"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";

export default function Guarantee() {
  return (
    <section id="guarantee" className="py-36 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">

        <motion.p
          className="label-mono mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          Risk-Free Investment
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              fontWeight: 300,
              color: "rgba(255,255,255,0.3)",
              letterSpacing: "0.08em",
              marginBottom: "1.5rem",
              textTransform: "uppercase",
            }}
          >
            100 Days. Profitable.
          </div>

          <h2
            style={{
              fontSize: "clamp(3rem, 8vw, 8rem)",
              fontWeight: 800,
              color: "#f5f5f5",
              letterSpacing: "-0.045em",
              lineHeight: 0.95,
              marginBottom: "2rem",
            }}
          >
            Or I teach you<br />
            <span style={{ color: "rgba(255,255,255,0.25)", fontWeight: 300 }}>for free.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="max-w-2xl mx-auto"
        >
          <div className="w-12 h-px mx-auto mb-8" style={{ background: "rgba(255,255,255,0.15)" }} />
          <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.48)", lineHeight: 1.75, marginBottom: "0.75rem" }}>
            Do the work. If you&apos;re not profitable within 100 days, I will{" "}
            <span style={{ color: "#f5f5f5" }}>personally teach you for free until you are.</span>{" "}
            No extra cost. No excuses.
          </p>
          <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.22)" }}>
            The guarantee exists because the system works — if you do.
          </p>

          <div className="flex items-center justify-center gap-3 mt-10">
            <div
              className="flex items-center justify-center"
              style={{
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.28)" }}>
              Fully guaranteed · No fine print · Secure via PayPal
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
