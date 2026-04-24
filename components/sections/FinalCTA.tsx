"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/motion";

export default function FinalCTA() {
  return (
    <section className="py-40 relative overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(255,255,255,0.04) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">

        <motion.p
          className="label-mono mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          Your Move
        </motion.p>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          style={{
            fontSize: "clamp(3rem, 9vw, 7.5rem)",
            fontWeight: 800,
            color: "#f5f5f5",
            letterSpacing: "-0.045em",
            lineHeight: 0.95,
            marginBottom: "2rem",
          }}
        >
          Stop Losing.<br />
          <span style={{ color: "rgba(255,255,255,0.28)", fontWeight: 300 }}>Start Reading</span><br />
          the Tape.
        </motion.h2>

        <div className="w-12 h-px mx-auto mb-8" style={{ background: "rgba(255,255,255,0.12)" }} />

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.75, maxWidth: "30rem", margin: "0 auto 3rem" }}
        >
          The market gives you a signal every single session. Most traders miss it.
          Join Orderflow Society and learn to see what others can&apos;t.
        </motion.p>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="https://discord.gg/d4xSrsWAK"
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="inline-flex items-center gap-2.5 font-semibold"
            style={{
              background: "#fff",
              color: "#080808",
              borderRadius: "9999px",
              padding: "1rem 2.25rem",
              fontSize: "0.9375rem",
              letterSpacing: "-0.015em",
            }}
          >
            <svg className="w-4 h-4" style={{ color: "#5865F2" }} viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.62.874-1.282 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
            </svg>
            Join Free Discord
          </motion.a>

          <motion.a
            href="#mentorship"
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="inline-flex items-center font-semibold transition-all duration-200"
            style={{
              border: "1px solid rgba(255,255,255,0.13)",
              color: "rgba(255,255,255,0.55)",
              borderRadius: "9999px",
              padding: "1rem 2.25rem",
              fontSize: "0.9375rem",
              letterSpacing: "-0.015em",
            }}
          >
            Get 1-on-1 Mentorship
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
