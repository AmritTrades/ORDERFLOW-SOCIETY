"use client";

import { motion } from "framer-motion";
import { fadeUp, slideRight, viewport } from "@/lib/motion";

const fullIncludes = [
  "Full orderflow curriculum access",
  "Weekly 1-on-1 screen-share sessions",
  "Custom trading plan built for you",
  "100-day money-back guarantee",
];

const splitIncludes = [
  "Everything included — same programme",
  "Flexible for your budget",
  "Start immediately upon first payment",
];

function Check({ bright }: { bright?: boolean }) {
  return (
    <svg
      width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      style={{ color: bright ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.25)", flexShrink: 0, marginTop: "2px" }}
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Mentorship() {
  return (
    <section id="mentorship" className="py-36 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Pricing cards */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
            {/* Full payment */}
            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                borderRadius: "1.25rem",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.04)",
                padding: "2rem",
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <p className="label-mono">Full Payment</p>
                <span
                  className="label-mono"
                  style={{ background: "rgba(255,255,255,0.07)", borderRadius: "9999px", padding: "0.2rem 0.65rem", color: "rgba(255,255,255,0.6)" }}
                >
                  Best Value
                </span>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(3rem, 6vw, 4.5rem)",
                  fontWeight: 300,
                  color: "#f5f5f5",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  marginBottom: "0.5rem",
                }}
              >
                $799
              </div>
              <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.28)", marginBottom: "1.5rem" }}>
                One-time · save vs split
              </p>
              <ul className="flex flex-col gap-2.5 mb-6">
                {fullIncludes.map(item => (
                  <li key={item} className="flex items-start gap-2.5" style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.65)" }}>
                    <Check bright />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => window.open("https://www.paypal.com/paypalme/amrittrades/799", "_blank", "noopener,noreferrer")}
                className="w-full font-semibold transition-all duration-200 hover:bg-white/90"
                style={{
                  background: "#fff",
                  color: "#080808",
                  borderRadius: "9999px",
                  padding: "0.85rem",
                  fontSize: "0.875rem",
                  letterSpacing: "-0.01em",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                Pay $799 via PayPal
              </button>
            </motion.div>

            {/* Split payment */}
            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                borderRadius: "1.25rem",
                border: "1px solid rgba(255,255,255,0.07)",
                background: "rgba(255,255,255,0.02)",
                padding: "2rem",
              }}
            >
              <p className="label-mono mb-4">Split Payment</p>
              <div className="flex items-end gap-2 mb-1" style={{ lineHeight: 1 }}>
                <span
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: "clamp(2.4rem, 5vw, 3.5rem)",
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.75)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  $400
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: "1.5rem",
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.3)",
                    marginBottom: "0.35rem",
                  }}
                >
                  × 2
                </span>
              </div>
              <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.25)", marginBottom: "1.5rem" }}>
                30 days between payments
              </p>
              <ul className="flex flex-col gap-2.5 mb-6">
                {splitIncludes.map(item => (
                  <li key={item} className="flex items-start gap-2.5" style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.38)" }}>
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => window.open("https://www.paypal.com/paypalme/amrittrades/400", "_blank", "noopener,noreferrer")}
                className="w-full font-semibold transition-all duration-200 hover:border-white/25 hover:text-white/70"
                style={{
                  background: "transparent",
                  color: "rgba(255,255,255,0.4)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "9999px",
                  padding: "0.85rem",
                  fontSize: "0.875rem",
                  letterSpacing: "-0.01em",
                  cursor: "pointer",
                }}
              >
                Start with $400 via PayPal
              </button>
            </motion.div>

            <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.18)", textAlign: "center" }}>
              Protected by 100-day profitability guarantee · Secure payments via PayPal
            </p>
        </motion.div>

      </div>
    </section>
  );
}
