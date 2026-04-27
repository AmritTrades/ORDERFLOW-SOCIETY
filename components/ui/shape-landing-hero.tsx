"use client";

import { motion } from "framer-motion";
import { GenerativeArtScene } from "@/components/ui/anomalous-matter-hero";
import { GreenCTAButton } from "@/components/ui/green-cta-button";

const EASE = [0.16, 1, 0.3, 1] as const;

interface HeroGeometricProps {
  badge?: string;
  title1?: string;
  subtitle?: string;
}

const avatars = [
  { char: "A", bg: "#e8e8e8", fg: "#111" },
  { char: "M", bg: "#d0d0d0", fg: "#111" },
  { char: "R", bg: "#b8b8b8", fg: "#111" },
  { char: "+", bg: "#2a2a2a", fg: "#777" },
];

function HeroGeometric({
  badge    = "Orderflow Society",
  title1   = "Master the",
  subtitle = "Stop guessing the tape. Start reading it. Futures trading mentorship for serious traders ready to trade with institutional edge.",
}: HeroGeometricProps) {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden flex items-center"
      style={{ background: "var(--background)" }}
    >
      {/* Generative background — no pointer events */}
      <div className="absolute inset-0 pointer-events-none">
        <GenerativeArtScene />
      </div>

      {/* Left-to-right scrim so text is always legible */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(var(--background-rgb),0.96) 0%, rgba(var(--background-rgb),0.75) 50%, rgba(var(--background-rgb),0.1) 100%)",
        }}
      />

      {/* Scanline / noise texture for tech feel */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(var(--foreground-rgb),0.012) 3px, rgba(var(--foreground-rgb),0.012) 4px)",
          zIndex: 1,
        }}
      />

      {/* Bottom fade into next section */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, var(--surface-1))" }}
      />

      {/* ── Hero content — relative z-10 guarantees text above every background layer ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-3xl">

          {/* Badge — fades in first */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.05, ease: EASE }}
            className="relative z-10 flex items-center gap-2.5 mb-10"
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "rgba(var(--foreground-rgb),0.6)" }}
            />
            <span className="label-mono" style={{ color: "rgba(var(--foreground-rgb),0.4)" }}>
              {badge}
            </span>
          </motion.div>

          {/* Headline — blur-fade, 0.15s delay */}
          <motion.h1
            initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.85, delay: 0.15, ease: EASE }}
            className="relative z-10"
            style={{
              fontSize: "clamp(3.5rem, 9vw, 8.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.045em",
              lineHeight: 0.95,
              color: "var(--foreground)",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{ display: "block", fontWeight: 300, color: "rgba(var(--foreground-rgb),0.45)" }}
            >
              {title1}
            </span>
            <span style={{ display: "block" }}>
              Order Flow{" "}
              {/* Gold shimmer on "Edge." — sweeps every ~5.5 s */}
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 0px transparent",
                    "0 0 18px rgba(245,200,66,0.65), 0 0 36px rgba(245,200,66,0.3)",
                    "0 0 28px rgba(245,200,66,0.9),  0 0 56px rgba(245,200,66,0.45)",
                    "0 0 18px rgba(245,200,66,0.65), 0 0 36px rgba(245,200,66,0.3)",
                    "0 0 0px transparent",
                  ],
                }}
                transition={{
                  duration: 1.9,
                  repeat: Infinity,
                  repeatDelay: 3.6,
                  ease: "easeInOut",
                  times: [0, 0.25, 0.5, 0.75, 1],
                }}
              >
                Edge.
              </motion.span>
            </span>
          </motion.h1>

          {/* Hairline */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.28, ease: EASE }}
            className="relative z-10 w-16 h-px mb-8 origin-left"
            style={{ background: "rgba(var(--foreground-rgb),0.15)" }}
          />

          {/* Subtitle — 0.2s after headline (delay 0.35s) */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
            className="relative z-10"
            style={{
              fontSize: "1.0625rem",
              color: "rgba(var(--foreground-rgb),0.5)",
              lineHeight: 1.75,
              maxWidth: "30rem",
              marginBottom: "2.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            {subtitle}
          </motion.p>

          {/* ── CTA group — 0.4s after subtitle (delay 0.75s) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease: EASE }}
          >
            {/* Wrapper that positions the breathing glow behind the buttons */}
            <div className="relative">

              {/* Breathing emerald glow — z-0, pointer-events-none, clipped by relative parent */}
              <motion.div
                aria-hidden
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute pointer-events-none"
                style={{
                  inset: "-2rem -3rem",
                  zIndex: 0,
                  background:
                    "radial-gradient(ellipse 85% 80% at 38% 55%, rgba(52, 211, 153, 0.10) 0%, transparent 68%)",
                }}
              />

              {/* Buttons — relative z-10 */}
              <div className="relative z-10">

                <div className="flex flex-col sm:flex-row flex-wrap items-start gap-3">

                  {/* Primary — green CTA */}
                  <GreenCTAButton
                    href="https://forms.gle/RC7TY65MEQDLE6Tp9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply for 1-on-1 Mentorship
                  </GreenCTAButton>

                  {/* Secondary + caption — stacked */}
                  <div className="flex flex-col items-start gap-1.5">
                    <motion.a
                      href="https://buy.stripe.com/cNi3cneRvdDscK45Uk9AA00"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ opacity: 0.72, borderColor: "rgba(var(--foreground-rgb),0.45)" }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      className="inline-flex items-center font-medium"
                      style={{
                        background: "transparent",
                        color: "rgba(var(--foreground-rgb),0.55)",
                        border: "1px solid rgba(var(--foreground-rgb),0.2)",
                        borderRadius: "9999px",
                        padding: "0.9rem 2rem",
                        fontSize: "0.9375rem",
                        letterSpacing: "-0.01em",
                        textDecoration: "none",
                      }}
                    >
                      Join Inner Circle
                    </motion.a>
                    <p
                      style={{
                        fontSize: "0.72rem",
                        color: "rgba(var(--foreground-rgb),0.32)",
                        letterSpacing: "-0.005em",
                        paddingLeft: "0.75rem",
                      }}
                    >
                      $39/mo — Cancel anytime.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>

          {/* Social proof — avatars + live dot */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: EASE }}
            className="relative z-10 flex items-center gap-3 mt-14"
          >
            <div className="flex -space-x-1.5">
              {avatars.map(({ char, bg, fg }, idx) => (
                <motion.div
                  key={char}
                  whileHover={{ scale: 1.32, y: -3, zIndex: 20 }}
                  transition={{ type: "spring", stiffness: 500, damping: 22 }}
                  className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-[0.6rem] font-bold cursor-default select-none"
                  style={{
                    background: bg,
                    color: fg,
                    borderColor: "var(--background)",
                    zIndex: idx,
                    position: "relative",
                  }}
                >
                  {char}
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
                <motion.span
                  className="absolute inline-flex h-full w-full rounded-full"
                  style={{ background: "#22c55e" }}
                  animate={{ scale: [1, 2.8, 1], opacity: [0.8, 0, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: "#22c55e" }} />
              </span>
              <span style={{ fontSize: "0.8125rem", color: "rgba(var(--foreground-rgb),0.4)", letterSpacing: "-0.01em" }}>
                Joined by{" "}
                <span style={{ color: "rgba(var(--foreground-rgb),0.65)" }}>40+ Funded Traders</span>{" "}
                Scaling Their Edge
              </span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <div
          style={{
            width: 22,
            height: 36,
            borderRadius: 11,
            border: "2px solid rgba(var(--foreground-rgb),0.22)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingTop: 5,
          }}
        >
          <motion.div
            animate={{ y: [0, 9, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: 3, height: 7, borderRadius: 2, background: "rgba(var(--foreground-rgb),0.32)" }}
          />
        </div>
      </motion.div>

    </div>
  );
}

export { HeroGeometric };
