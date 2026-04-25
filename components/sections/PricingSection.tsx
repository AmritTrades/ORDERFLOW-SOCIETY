"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;
const vp   = { once: true, margin: "-80px" } as const;

/* ── Shiny "Best Value" badge ── */
function ShinyBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="label-mono relative overflow-hidden"
      style={{
        borderRadius: "9999px",
        padding: "0.2rem 0.7rem",
        background: "rgba(var(--foreground-rgb),0.07)",
        border: "1px solid rgba(var(--foreground-rgb),0.15)",
        color: "rgba(var(--foreground-rgb),0.65)",
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      <style>{`
        @keyframes shiny-sweep {
          0%   { transform: translateX(-160%) skewX(-20deg); opacity: 0; }
          8%   { opacity: 1; }
          92%  { opacity: 1; }
          100% { transform: translateX(260%) skewX(-20deg); opacity: 0; }
        }
        .shiny-badge-sweep { animation: shiny-sweep 2.8s ease-in-out infinite; }
      `}</style>
      <span
        aria-hidden
        className="shiny-badge-sweep absolute inset-y-0 w-2/5 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(var(--foreground-rgb),0.22) 50%, transparent 100%)",
        }}
      />
      <span className="relative z-10">{children}</span>
    </span>
  );
}

/* ── Check icon ── */
function Check({ bright }: { bright?: boolean }) {
  return (
    <svg
      width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      style={{
        color: bright
          ? "rgba(var(--foreground-rgb),0.7)"
          : "rgba(var(--foreground-rgb),0.3)",
        flexShrink: 0,
        marginTop: "2px",
      }}
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

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

export default function PricingSection() {
  return (
    <section
      id="mentorship"
      className="py-36 relative overflow-hidden"
      style={{ background: "var(--surface-1)", borderTop: "1px solid var(--border)" }}
    >
      {/* Radial gradient: center slightly lifted, edges fade back */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 85% 70% at 50% 50%, var(--surface-2) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Section label */}
        <motion.p
          className="label-mono mb-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.55, ease: EASE }}
        >
          Choose your plan
        </motion.p>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Full payment — glow card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
            whileHover={{ scale: 1.015 }}
            style={{
              borderRadius: "1.25rem",
              border: "1px solid var(--border-bright)",
              background: "var(--surface-2)",
              padding: "2rem",
              boxShadow:
                "0 0 30px rgba(var(--foreground-rgb),0.05), 0 0 60px rgba(var(--foreground-rgb),0.025), inset 0 1px 0 rgba(var(--foreground-rgb),0.06)",
            }}
          >
            <div className="flex items-start justify-between mb-4">
              <p className="label-mono">Full Payment</p>
              <ShinyBadge>Best Value</ShinyBadge>
            </div>

            <div
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(3rem, 6vw, 4.5rem)",
                fontWeight: 300,
                color: "var(--foreground)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
                marginBottom: "0.5rem",
              }}
            >
              $799
            </div>

            <p style={{ fontSize: "0.78rem", color: "var(--muted-foreground)", marginBottom: "1.5rem" }}>
              One-time · save vs split
            </p>

            <ul className="flex flex-col gap-2.5 mb-6">
              {fullIncludes.map(item => (
                <li
                  key={item}
                  className="flex items-start gap-2.5"
                  style={{ fontSize: "0.875rem", color: "rgba(var(--foreground-rgb),0.7)" }}
                >
                  <Check bright />
                  {item}
                </li>
              ))}
            </ul>

            <button
              onClick={() =>
                window.open(
                  "https://www.paypal.com/paypalme/amrittrades/799",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="w-full font-semibold transition-opacity duration-200 hover:opacity-80"
              style={{
                background: "var(--foreground)",
                color: "var(--background)",
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
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.65, delay: 0.24, ease: EASE }}
            whileHover={{ scale: 1.015 }}
            style={{
              borderRadius: "1.25rem",
              border: "1px solid var(--border)",
              background: "var(--surface-2)",
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
                  color: "rgba(var(--foreground-rgb),0.75)",
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
                  color: "rgba(var(--foreground-rgb),0.3)",
                  marginBottom: "0.35rem",
                }}
              >
                × 2
              </span>
            </div>

            <p style={{ fontSize: "0.78rem", color: "var(--muted-foreground)", marginBottom: "1.5rem" }}>
              30 days between payments
            </p>

            <ul className="flex flex-col gap-2.5 mb-6">
              {splitIncludes.map(item => (
                <li
                  key={item}
                  className="flex items-start gap-2.5"
                  style={{ fontSize: "0.875rem", color: "rgba(var(--foreground-rgb),0.5)" }}
                >
                  <Check />
                  {item}
                </li>
              ))}
            </ul>

            <button
              onClick={() =>
                window.open(
                  "https://www.paypal.com/paypalme/amrittrades/400",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="w-full font-semibold transition-all duration-200 hover:opacity-70"
              style={{
                background: "transparent",
                color: "rgba(var(--foreground-rgb),0.5)",
                border: "1px solid var(--border-bright)",
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

        </div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={vp}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            fontSize: "0.72rem",
            color: "var(--muted-foreground)",
            textAlign: "center",
            marginTop: "1.25rem",
          }}
        >
          Protected by 100-day profitability guarantee · Secure payments via PayPal
        </motion.p>

      </div>
    </section>
  );
}
