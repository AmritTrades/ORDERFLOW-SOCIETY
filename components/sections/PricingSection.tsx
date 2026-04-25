"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Users } from "lucide-react";
import { useState } from "react";

function BeamBorder({ speed = 4 }: { speed?: number }) {
  return (
    <motion.div
      aria-hidden
      animate={{ rotate: 360 }}
      transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      style={{
        position: "absolute",
        inset: 0,
        borderRadius: "inherit",
        background:
          "conic-gradient(from 0deg, transparent 58%, rgba(var(--foreground-rgb),0.9) 74%, rgba(255,255,255,0.85) 80%, rgba(var(--foreground-rgb),0.9) 84%, transparent 90%)",
        WebkitMaskImage: "linear-gradient(#fff,#fff), linear-gradient(#fff,#fff)",
        WebkitMaskSize: "calc(100% - 2px) calc(100% - 2px)",
        WebkitMaskPosition: "center",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskComposite: "xor",
        maskImage: "linear-gradient(#fff,#fff), linear-gradient(#fff,#fff)",
        maskSize: "calc(100% - 2px) calc(100% - 2px)",
        maskPosition: "center",
        maskRepeat: "no-repeat",
        maskComposite: "exclude",
        pointerEvents: "none",
        zIndex: 40,
      }}
    />
  );
}

const EASE = [0.16, 1, 0.3, 1] as const;
const vp   = { once: true, margin: "-80px" } as const;

const APPLICATION_URL = "https://forms.gle/RC7TY65MEQDLE6Tp9";

/* ── Scarcity badge with subtle pulse ── */
function ScarcityBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={vp}
      transition={{ duration: 0.45, ease: EASE }}
      className="flex justify-center mb-10"
    >
      <motion.span
        animate={{ scale: [1, 1.025, 1] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        className="inline-flex items-center gap-2 relative overflow-hidden"
        style={{
          borderRadius: "9999px",
          padding: "0.38rem 1rem",
          background: "rgba(245,200,66,0.07)",
          border: "1px solid rgba(245,200,66,0.28)",
        }}
      >
        <style>{`
          @keyframes scarcity-sweep {
            0%   { transform: translateX(-200%) skewX(-20deg); opacity: 0; }
            6%   { opacity: 1; }
            94%  { opacity: 1; }
            100% { transform: translateX(300%) skewX(-20deg); opacity: 0; }
          }
          .scarcity-sweep { animation: scarcity-sweep 4s ease-in-out infinite 1s; }
        `}</style>
        <span
          aria-hidden
          className="scarcity-sweep absolute inset-y-0 w-1/3 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(245,200,66,0.22) 50%, transparent 100%)",
          }}
        />
        <Users
          width={11} height={11}
          className="relative z-10 flex-shrink-0"
          style={{ color: "#f5c842" }}
          strokeWidth={2.5}
        />
        <span
          className="relative z-10 label-mono"
          style={{ fontSize: "0.6rem", letterSpacing: "0.14em", color: "#f5c842" }}
        >
          LIMITED TO 5 STUDENTS PER MONTH
        </span>
      </motion.span>
    </motion.div>
  );
}

/* ── Shimmer CTA button ── */
function ShimmerButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <>
      <style>{`
        @keyframes btn-shimmer {
          0%, 58%  { transform: translateX(-220%) skewX(-18deg); opacity: 0; }
          63%      { opacity: 1; }
          95%      { opacity: 1; }
          100%     { transform: translateX(220%) skewX(-18deg); opacity: 0; }
        }
        .btn-shimmer-sweep { animation: btn-shimmer 5s ease-in-out infinite; }
      `}</style>
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{
          boxShadow:
            "0 0 24px rgba(var(--foreground-rgb),0.25), 0 0 50px rgba(var(--foreground-rgb),0.10)",
          scale: 1.018,
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="relative w-full overflow-hidden font-semibold"
        style={{
          background: "var(--foreground)",
          color: "var(--background)",
          borderRadius: "9999px",
          padding: "1.1rem",
          fontSize: "1rem",
          letterSpacing: "-0.01em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.55rem",
          textDecoration: "none",
          cursor: "pointer",
        }}
      >
        <span
          aria-hidden
          className="btn-shimmer-sweep absolute inset-y-0 w-1/3 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(var(--background-rgb),0.32) 50%, transparent 100%)",
          }}
        />
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </motion.a>
    </>
  );
}

/* ── Check icon ── */
function Check() {
  return (
    <svg
      width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      style={{
        color: "rgba(var(--foreground-rgb),0.55)",
        flexShrink: 0,
        marginTop: "2px",
      }}
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

const features = [
  "10 Private 1-on-1 Sessions with Amrit (60–90 mins each)",
  "Lifetime Inner Circle Discord Access",
  "Custom ATAS & TradingView Templates",
  "100-Day Profitability Guarantee",
];

/* Card stagger variants */
const cardVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const rowVariant = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

/* ══════════════════════════════════════════════════ */
export default function PricingSection() {
  const [beam, setBeam] = useState(false);
  return (
    <section
      id="mentorship"
      className="py-36 relative overflow-hidden"
      style={{ background: "var(--surface-1)", borderTop: "1px solid var(--border)" }}
    >
      {/* Radial center lift */}
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
          className="label-mono mb-4 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.55, ease: EASE }}
        >
          Apply for Mentorship
        </motion.p>

        {/* Scarcity badge */}
        <ScarcityBadge />

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
          className="text-center mb-12"
          style={{
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            fontWeight: 700,
            color: "var(--foreground)",
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
          }}
        >
          One programme.
          <br />
          <span style={{ fontWeight: 300, color: "var(--muted-foreground)", fontSize: "0.7em" }}>
            Mentorship by application only.
          </span>
        </motion.h2>

        {/* ── Single elite card ── */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            whileHover={{
              scale: 1.012,
              transition: { type: "spring", stiffness: 280, damping: 30 },
            }}
            onHoverStart={() => setBeam(true)}
            onHoverEnd={() => setBeam(false)}
            className="relative overflow-hidden"
            style={{
              width: "100%",
              maxWidth: "42rem",
              borderRadius: "1.5rem",
              border: "1px solid var(--border-bright)",
              background: "rgba(var(--background-rgb),0.6)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              padding: "2.5rem",
              boxShadow:
                "0 0 40px rgba(var(--foreground-rgb),0.06), 0 0 80px rgba(var(--foreground-rgb),0.03), inset 0 1px 0 rgba(var(--foreground-rgb),0.08)",
            }}
          >
            <AnimatePresence>
              {beam && (
                <motion.div key="beam" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                  <BeamBorder />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-px pointer-events-none"
              style={{
                borderRadius: "1.5rem 1.5rem 0 0",
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(var(--foreground-rgb),0.4) 50%, transparent 100%)",
              }}
            />

            {/* Staggered card content */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              className="flex flex-col"
            >
              {/* Card title */}
              <motion.p variants={rowVariant} className="label-mono mb-3">
                1-on-1 Orderflow Mentorship
              </motion.p>

              {/* Pricing */}
              <motion.div variants={rowVariant} className="mb-6">
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--muted-foreground)",
                    lineHeight: 1.6,
                  }}
                >
                  Investment:{" "}
                  <span style={{ color: "var(--foreground)", fontWeight: 600 }}>$799 Full</span>
                  {" "}or{" "}
                  <span style={{ color: "var(--foreground)", fontWeight: 600 }}>$400 × 2</span>
                  <span style={{ fontSize: "0.8rem", color: "var(--muted-foreground)", marginLeft: "0.4rem" }}>
                    (Split-Pay available)
                  </span>
                </p>
              </motion.div>

              {/* Divider */}
              <motion.div
                variants={rowVariant}
                style={{ height: "1px", background: "var(--border)", marginBottom: "1.5rem" }}
              />

              {/* Features list */}
              <motion.ul variants={rowVariant} className="flex flex-col gap-3 mb-8">
                {features.map(item => (
                  <li
                    key={item}
                    className="flex items-start gap-3"
                    style={{ fontSize: "0.9375rem", color: "rgba(var(--foreground-rgb),0.72)" }}
                  >
                    <Check />
                    {item}
                  </li>
                ))}
              </motion.ul>

              {/* CTA */}
              <motion.div variants={rowVariant}>
                <ShimmerButton href={APPLICATION_URL}>
                  Submit Your Application
                  <ExternalLink className="w-4 h-4" strokeWidth={2} />
                </ShimmerButton>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={vp}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            fontSize: "0.72rem",
            color: "var(--muted-foreground)",
            textAlign: "center",
            marginTop: "1.5rem",
          }}
        >
          Mentorship by application only · All sessions conducted via Discord / Zoom
        </motion.p>

      </div>
    </section>
  );
}
