"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";
import { fadeUp, slideLeft, slideRight, viewport } from "@/lib/motion";
import { useState } from "react";

function BeamBorder({ color, speed = 3.5 }: { color: string; speed?: number }) {
  return (
    <motion.div
      aria-hidden
      animate={{ rotate: 360 }}
      transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      style={{
        position: "absolute",
        inset: 0,
        borderRadius: "inherit",
        background: `conic-gradient(from 0deg, transparent 58%, ${color} 74%, rgba(255,255,255,0.85) 80%, ${color} 84%, transparent 90%)`,
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

const forYou = [
  "You're serious about futures and ready to put in genuine work every day",
  "You're tired of lagging indicators and want to understand what's actually moving price",
  "You can commit 1–2 hours a day to learning and reviewing your trades",
  "You follow a structured system and trust the process even during drawdowns",
  "You want honest, direct feedback — even when it's uncomfortable to hear",
];

const notForYou = [
  "You want buy/sell signals or someone to trade for you",
  "You expect to be profitable in a week without putting in the learning",
  "You're trading money you cannot afford to lose",
  "You're not open to abandoning what's been losing you money",
  "You're looking for shortcuts — there aren't any in this craft",
];

const rowItem = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] },
  }),
};

const iconPop = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 420, damping: 16, delay: 0.15 + i * 0.07 },
  }),
};

export default function Comparison() {
  const [beamL, setBeamL] = useState(false);
  const [beamR, setBeamR] = useState(false);
  return (
    <section
      id="filter"
      className="py-36 relative overflow-hidden"
      style={{ background: "var(--surface-1)", borderTop: "1px solid var(--border)" }}
    >
      {/* ── Trading-chart grid background ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(var(--foreground-rgb),0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(var(--foreground-rgb),0.055) 1px, transparent 1px),
            linear-gradient(rgba(var(--foreground-rgb),0.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(var(--foreground-rgb),0.018) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px, 80px 80px, 16px 16px, 16px 16px",
        }}
      />
      {/* Radial vignette to soften grid edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, var(--surface-1) 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-16"
        >
          <p className="label-mono mb-4">Is this right for you?</p>
          <h2
            style={{
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 700,
              color: "var(--foreground)",
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
            }}
          >
            Be honest with yourself
            <br />
            <span
              style={{
                fontWeight: 300,
                background: "linear-gradient(90deg, var(--foreground) 0%, var(--muted-foreground) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              before you apply.
            </span>
          </h2>
        </motion.div>

        {/* ── Bento comparison grid ── */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* ── LEFT: FOR YOU — green glow ── */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            onHoverStart={() => setBeamL(true)}
            onHoverEnd={() => setBeamL(false)}
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: "rgba(var(--background-rgb),0.55)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              border: "1px solid rgba(34,197,94,0.22)",
              boxShadow:
                "0 0 90px -24px rgba(34,197,94,0.22), inset 0 1px 0 rgba(34,197,94,0.1)",
            }}
          >
            <AnimatePresence>
              {beamL && (
                <motion.div key="beamL" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                  <BeamBorder color="rgba(34,197,94,0.9)" />
                </motion.div>
              )}
            </AnimatePresence>
            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-px pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(34,197,94,0.7) 50%, transparent 100%)",
              }}
            />
            {/* Corner radial glow */}
            <div
              className="absolute top-0 left-0 w-56 h-56 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at top left, rgba(34,197,94,0.13) 0%, transparent 70%)",
              }}
            />

            <div className="relative p-8">
              {/* Card header */}
              <div className="flex items-center gap-3 mb-8">
                <motion.div
                  initial={{ scale: 0, rotate: -120, opacity: 0 }}
                  whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                  viewport={viewport}
                  transition={{ type: "spring", stiffness: 380, damping: 15, delay: 0.1 }}
                  className="flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0"
                  style={{
                    background: "rgba(34,197,94,0.12)",
                    border: "1px solid rgba(34,197,94,0.35)",
                    boxShadow: "0 0 18px rgba(34,197,94,0.2)",
                  }}
                >
                  <Check className="w-4 h-4" style={{ color: "rgb(34,197,94)" }} strokeWidth={2.5} />
                </motion.div>
                <h3
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    color: "var(--foreground)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  This{" "}
                  <span
                    style={{
                      color: "rgb(34,197,94)",
                      textShadow: "0 0 20px rgba(34,197,94,0.5)",
                    }}
                  >
                    IS
                  </span>{" "}
                  for you if…
                </h3>
              </div>

              {/* List */}
              <ul className="flex flex-col">
                {forYou.map((item, i) => (
                  <motion.li
                    key={item}
                    custom={i}
                    variants={rowItem}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    className="flex items-start gap-4 py-3.5"
                    style={{
                      borderTop:
                        i === 0
                          ? "none"
                          : "1px solid rgba(34,197,94,0.09)",
                    }}
                  >
                    <motion.span
                      custom={i}
                      variants={iconPop}
                      initial="hidden"
                      whileInView="visible"
                      viewport={viewport}
                      className="flex-shrink-0 mt-0.5"
                    >
                      <Check
                        className="w-3.5 h-3.5"
                        style={{ color: "rgba(34,197,94,0.75)" }}
                        strokeWidth={2.5}
                      />
                    </motion.span>
                    <span
                      style={{
                        fontSize: "0.9rem",
                        color: "rgba(var(--foreground-rgb),0.72)",
                        lineHeight: 1.65,
                      }}
                    >
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* ── RIGHT: NOT FOR YOU — red glow ── */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            onHoverStart={() => setBeamR(true)}
            onHoverEnd={() => setBeamR(false)}
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: "rgba(var(--background-rgb),0.55)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              border: "1px solid rgba(239,68,68,0.16)",
              boxShadow:
                "0 0 90px -24px rgba(239,68,68,0.18), inset 0 1px 0 rgba(239,68,68,0.07)",
            }}
          >
            <AnimatePresence>
              {beamR && (
                <motion.div key="beamR" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                  <BeamBorder color="rgba(239,68,68,0.9)" />
                </motion.div>
              )}
            </AnimatePresence>
            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-px pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(239,68,68,0.6) 50%, transparent 100%)",
              }}
            />
            {/* Corner radial glow */}
            <div
              className="absolute top-0 right-0 w-56 h-56 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at top right, rgba(239,68,68,0.11) 0%, transparent 70%)",
              }}
            />

            <div className="relative p-8">
              {/* Card header */}
              <div className="flex items-center gap-3 mb-8">
                <motion.div
                  initial={{ scale: 0, rotate: 120, opacity: 0 }}
                  whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                  viewport={viewport}
                  transition={{ type: "spring", stiffness: 380, damping: 15, delay: 0.1 }}
                  className="flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0"
                  style={{
                    background: "rgba(239,68,68,0.1)",
                    border: "1px solid rgba(239,68,68,0.28)",
                    boxShadow: "0 0 18px rgba(239,68,68,0.14)",
                  }}
                >
                  <X className="w-4 h-4" style={{ color: "rgb(239,68,68)" }} strokeWidth={2.5} />
                </motion.div>
                <h3
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    color: "var(--muted-foreground)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  This is{" "}
                  <span
                    style={{
                      color: "rgba(239,68,68,0.85)",
                      textShadow: "0 0 20px rgba(239,68,68,0.35)",
                    }}
                  >
                    NOT
                  </span>{" "}
                  for you if…
                </h3>
              </div>

              {/* List */}
              <ul className="flex flex-col">
                {notForYou.map((item, i) => (
                  <motion.li
                    key={item}
                    custom={i}
                    variants={rowItem}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    className="flex items-start gap-4 py-3.5"
                    style={{
                      borderTop:
                        i === 0
                          ? "none"
                          : "1px solid rgba(239,68,68,0.07)",
                    }}
                  >
                    <motion.span
                      custom={i}
                      variants={iconPop}
                      initial="hidden"
                      whileInView="visible"
                      viewport={viewport}
                      className="flex-shrink-0 mt-0.5"
                    >
                      <X
                        className="w-3.5 h-3.5"
                        style={{ color: "rgba(239,68,68,0.65)" }}
                        strokeWidth={2.5}
                      />
                    </motion.span>
                    <span
                      style={{
                        fontSize: "0.9rem",
                        color: "rgba(var(--foreground-rgb),0.42)",
                        lineHeight: 1.65,
                      }}
                    >
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
