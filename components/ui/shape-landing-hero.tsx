"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useScroll,
  useTransform,
  useVelocity,
} from "framer-motion";
import { GenerativeArtScene } from "@/components/ui/anomalous-matter-hero";
import { ShinyButton } from "@/components/ui/shiny-button";

/* ─── design tokens ─── */
const EASE = [0.16, 1, 0.3, 1] as const;
const MONO = "var(--font-geist-mono, var(--font-jetbrains), ui-monospace, monospace)";

/* ─── social proof ─── */
const AVATARS = [
  { char: "H", bg: "#e8e8e8", fg: "#111" },
  { char: "A", bg: "#d0d0d0", fg: "#111" },
  { char: "K", bg: "#b8b8b8", fg: "#111" },
  { char: "+", bg: "#2a2a2a", fg: "#777" },
];

/* ─── trading tape ─── */
type TapeItem =
  | { side: "B" | "S"; qty: number; price: string }
  | { label: string; value: string };

const TAPE: TapeItem[] = [
  { side: "B",  qty: 142, price: "5,847.25" },
  { label: "ES",    value: "5,848.25 ▲ +12.50" },
  { side: "S",  qty:  38, price: "5,847.00" },
  { label: "DELTA", value: "+2,847 BID" },
  { side: "B",  qty: 215, price: "5,847.50" },
  { label: "NQ",    value: "21,204.75 ▲ +48.25" },
  { side: "B",  qty: 312, price: "5,848.25" },
  { label: "IMBAL", value: "70.3% BID DOM" },
  { side: "S",  qty:  67, price: "5,846.75" },
  { label: "MES",   value: "5,848.25 ▲" },
];

/* ─── global CSS injected once ─── */
const HERO_CSS = `
  @keyframes tape-run {
    from { transform: translateX(0) translateZ(0); }
    to   { transform: translateX(-50%) translateZ(0); }
  }
  .tape-run {
    animation: tape-run 32s linear infinite;
    will-change: transform;
  }
`;

/* ─── word reveal variants ─── */
const L1 = { hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1  } } };
const L2 = { hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.24 } } };
const WV = {
  hidden:  { y: "112%", opacity: 0 },
  visible: { y: "0%",   opacity: 1, transition: { duration: 0.62, ease: [0.16, 1, 0.3, 1] } },
};

/* ═══════════════════════════════════════════════
   MAIN HERO
═══════════════════════════════════════════════ */
interface HeroGeometricProps {
  badge?: string;
  title1?: string;
  subtitle?: string;
}

function HeroGeometric({
  badge    = "Orderflow Society",
  title1   = "Master the",
  subtitle = "Stop guessing the tape. Start reading it. Futures trading mentorship for serious traders ready to trade with institutional edge.",
}: HeroGeometricProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  /* ── mouse: raw pixel coords + normalised -1..1 ── */
  const rawX  = useMotionValue(0);
  const rawY  = useMotionValue(0);
  const normX = useMotionValue(0);
  const normY = useMotionValue(0);

  /* spring-lagged spotlight trails the cursor organically */
  const spX = useSpring(rawX, { stiffness: 52, damping: 26 });
  const spY = useSpring(rawY, { stiffness: 52, damping: 26 });
  const spotlight = useMotionTemplate`radial-gradient(720px circle at ${spX}px ${spY}px, rgba(0,255,65,0.052) 0%, transparent 68%)`;

  /* globe parallax from mouse */
  const globeX = useTransform(normX, [-1, 1], [-26, 26]);
  const globeY = useTransform(normY, [-1, 1], [-13, 13]);

  /* ── scroll: velocity skew + parallax layers ── */
  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const vel        = useVelocity(scrollY);
  const rawSkew    = useTransform(vel, [-3500, 0, 3500], [3, 0, -3]);
  const skewY      = useSpring(rawSkew, { stiffness: 220, damping: 32 });

  const meshY      = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const globeScale = useTransform(scrollYProgress, [0, 1], [1,    1.24]);
  const headingY   = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const headingOp  = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.75, 0]);
  const ctaY       = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    rawX.set(e.clientX);
    rawY.set(e.clientY);
    const r = e.currentTarget.getBoundingClientRect();
    normX.set(((e.clientX - r.left) / r.width)  * 2 - 1);
    normY.set(((e.clientY - r.top)  / r.height) * 2 - 1);
  }

  const t1Words = (title1 ?? "Master the").split(" ");

  return (
    <div
      ref={heroRef}
      onMouseMove={onMouseMove}
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center"
      style={{ background: "var(--background)" }}
    >
      <style>{HERO_CSS}</style>

      {/* ══ LAYER 0 — globe: scroll scale + mouse parallax ══ */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ x: globeX, y: globeY, scale: globeScale, willChange: "transform", transform: "translateZ(0)", zIndex: 0 }}
      >
        <GenerativeArtScene />
      </motion.div>

      {/* ══ LAYER 1 — directional scrim ══ */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(105deg, rgba(var(--background-rgb),0.98) 0%, rgba(var(--background-rgb),0.88) 45%, rgba(var(--background-rgb),0.12) 100%)",
          zIndex: 1,
        }}
      />

      {/* ══ LAYER 2 — static deep glow (left-side warmth) ══ */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          top: "10%", left: "-8%",
          width: "55%", height: "65%",
          background: "radial-gradient(ellipse, rgba(0,255,65,0.038) 0%, transparent 72%)",
          filter: "blur(48px)",
          willChange: "transform",
          transform: "translateZ(0)",
          zIndex: 2,
        }}
      />

      {/* ══ LAYER 3 — spring-lagged mouse spotlight ══ */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: spotlight, zIndex: 3 }}
      />

      {/* ══ LAYER 4 — dot-grid mesh: scroll parallax ══ */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at center, rgba(0,255,0,0.026) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          y: meshY,
          willChange: "transform",
          transform: "translateZ(0)",
          zIndex: 4,
        }}
      />

      {/* ══ LAYER 5 — scanlines ══ */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(var(--foreground-rgb),0.011) 3px, rgba(var(--foreground-rgb),0.011) 4px)",
          zIndex: 5,
        }}
      />

      {/* ══ LAYER 6 — bottom section dissolve ══ */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-56 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, var(--surface-1))", zIndex: 5 }}
      />

      {/* ══ HERO CONTENT ══ */}
      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-36" style={{ zIndex: 10 }}>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.06, ease: EASE }}
          className="flex items-center gap-2.5 mb-10"
        >
          <motion.span
            animate={{ opacity: [0.38, 1, 0.38], boxShadow: ["0 0 4px #22c55e", "0 0 10px #22c55e", "0 0 4px #22c55e"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: "#22c55e" }}
          />
          <span className="label-mono" style={{ color: "rgba(var(--foreground-rgb),0.34)", letterSpacing: "0.15em" }}>
            {badge}
          </span>
        </motion.div>

        {/* ══ HEADING — velocity skew + scroll parallax ══ */}
        <motion.div className="text-left" style={{ y: headingY, opacity: headingOp }}>
          <motion.div style={{ skewY, willChange: "transform", transformOrigin: "left center" }}>
            <h1
              style={{
                fontSize: "clamp(3.1rem, 8vw, 8.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.05em",
                lineHeight: 0.88,
                color: "var(--foreground)",
                marginBottom: "2rem",
                maxWidth: "18ch",
                textAlign: "left",
              }}
            >
              {/* "Master the" */}
              <motion.span
                initial="hidden"
                animate="visible"
                variants={L1}
                style={{ display: "block", fontWeight: 300, color: "rgba(var(--foreground-rgb),0.36)" }}
              >
                {t1Words.map((w, i) => (
                  <span
                    key={i}
                    style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", marginRight: i < t1Words.length - 1 ? "0.26em" : 0 }}
                  >
                    <motion.span style={{ display: "inline-block" }} variants={WV}>{w}</motion.span>
                  </span>
                ))}
              </motion.span>

              {/* "Order Flow" — single unbreakable unit, never wraps */}
              <motion.span
                initial="hidden"
                animate="visible"
                variants={L2}
                className="whitespace-nowrap"
                style={{ display: "block" }}
              >
                <span style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}>
                  <motion.span style={{ display: "inline-block" }} variants={WV}>Order Flow</motion.span>
                </span>
              </motion.span>

              {/* "Edge." — slide-up entrance + ambient gold glow */}
              <span style={{ display: "block", paddingBottom: "0.2em" }}>
                <motion.span
                  initial={{ y: "30%", opacity: 0 }}
                  animate={{
                    y: "0%",
                    opacity: 1,
                    textShadow: [
                      "0 0 15px rgba(255,215,0,0.30), 0 0 30px rgba(255,215,0,0.15)",
                      "0 0 40px rgba(255,215,0,0.80), 0 0 70px rgba(255,215,0,0.40)",
                      "0 0 15px rgba(255,215,0,0.30), 0 0 30px rgba(255,215,0,0.15)",
                    ],
                  }}
                  transition={{
                    y:          { duration: 0.64, delay: 0.44, ease: EASE },
                    opacity:    { duration: 0.64, delay: 0.44, ease: EASE },
                    textShadow: { duration: 3.5, delay: 1.0, repeat: Infinity, ease: "easeInOut" },
                  }}
                  style={{ display: "inline-block" }}
                >
                  Edge.
                </motion.span>
              </span>
            </h1>
          </motion.div>
        </motion.div>

        {/* Hairline */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.56, ease: EASE }}
          className="w-20 h-px mb-8 origin-left"
          style={{ background: "rgba(var(--foreground-rgb),0.11)" }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.66, ease: EASE }}
          style={{ fontSize: "1.05rem", color: "rgba(var(--foreground-rgb),0.46)", lineHeight: 1.8, maxWidth: "30rem", marginBottom: "2.75rem", letterSpacing: "-0.01em" }}
        >
          {subtitle}
        </motion.p>

        {/* ══ CTA CLUSTER ══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.82, ease: EASE }}
          style={{ y: ctaY, willChange: "transform" }}
        >
          <div className="relative">
            {/* Breathing emerald aura */}
            <motion.div
              aria-hidden
              animate={{ opacity: [0.25, 0.85, 0.25] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute pointer-events-none"
              style={{
                inset: "-3rem -5rem",
                zIndex: 0,
                background: "radial-gradient(ellipse 75% 65% at 28% 55%, rgba(52,211,153,0.12) 0%, transparent 60%)",
              }}
            />

            <div className="relative z-10 flex flex-col gap-3.5">
              {/* Row A — Primary + IQ Capital, balanced ShinyButtons side-by-side */}
              <div className="flex flex-col sm:flex-row items-center gap-4">

                {/* Button 1 — Mentorship (scrolls to #mentorship) */}
                <ShinyButton className="h-14 min-w-[240px] px-8 text-sm" href="#mentorship" variant="emerald">
                  <span>Apply for 1-on-1 Mentorship</span>
                  <span className="text-base">→</span>
                </ShinyButton>

                {/* Button 2 — IQ Capital ($9 evaluation) */}
                <ShinyButton
                  className="h-14 min-w-[240px] px-8 text-sm"
                  href="https://checkout.iqcapital.io/products?aff=apsim"
                  rel="noopener noreferrer"
                  target="_blank"
                  variant="emerald"
                >
                  <span className="font-semibold text-sm tracking-wide text-white">Get Funded for $9</span>
                  <span className="text-base">↗</span>
                </ShinyButton>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ══ SOCIAL PROOF ══ */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.12, ease: EASE }}
          className="flex items-center gap-3 mt-12"
        >
          <div className="flex -space-x-1.5">
            {AVATARS.map(({ char, bg, fg }, idx) => (
              <motion.div
                key={char}
                whileHover={{ scale: 1.32, y: -4, zIndex: 20 }}
                transition={{ type: "spring", stiffness: 480, damping: 22 }}
                className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-[0.6rem] font-bold cursor-default select-none"
                style={{ background: bg, color: fg, borderColor: "var(--background)", zIndex: idx, position: "relative" }}
              >
                {char}
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
              <motion.span
                className="absolute inline-flex h-full w-full rounded-full bg-emerald-500"
                animate={{ scale: [1, 2.8, 1], opacity: [0.8, 0, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500 animate-pulse" />
            </span>
            <span style={{ fontSize: "0.8125rem", color: "rgba(var(--foreground-rgb),0.38)", letterSpacing: "-0.01em" }}>
              Joined by{" "}
              <span style={{ color: "rgba(var(--foreground-rgb),0.7)" }}>100+ Funded Traders</span>{" "}
              Scaling Their Edge
            </span>
          </div>
        </motion.div>
      </div>

      {/* ══ INFINITE TRADING TAPE — compositor-thread CSS ══ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="absolute left-0 right-0 overflow-hidden pointer-events-none"
        style={{
          bottom: 0,
          zIndex: 8,
          borderTop: "1px solid rgba(var(--foreground-rgb),0.055)",
          background: "rgba(var(--background-rgb),0.6)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
      >
        {/* Fade edges */}
        <div aria-hidden style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "5rem", background: "linear-gradient(to right, var(--background), transparent)", zIndex: 2, pointerEvents: "none" }} />
        <div aria-hidden style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: "5rem", background: "linear-gradient(to left, var(--background), transparent)", zIndex: 2, pointerEvents: "none" }} />

        <div className="tape-run flex" style={{ width: "max-content", padding: "0.5rem 0" }}>
          {[...TAPE, ...TAPE].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5"
              style={{
                padding: "0 1.5rem",
                fontFamily: MONO,
                fontSize: "0.63rem",
                letterSpacing: "0.07em",
                color: "rgba(var(--foreground-rgb),0.26)",
                flexShrink: 0,
                borderRight: "1px solid rgba(var(--foreground-rgb),0.05)",
              }}
            >
              {"side" in item ? (
                <>
                  <span style={{ color: item.side === "B" ? "#22c55e" : "#ef4444", fontWeight: 700 }}>{item.side}</span>
                  <span>{item.qty}</span>
                  <span style={{ color: "rgba(var(--foreground-rgb),0.16)" }}>@</span>
                  <span>{item.price}</span>
                </>
              ) : (
                <>
                  <span style={{ color: "rgba(var(--foreground-rgb),0.42)", fontWeight: 600 }}>{item.label}</span>
                  <span>{item.value}</span>
                </>
              )}
            </span>
          ))}
        </div>
      </motion.div>

    </div>
  );
}

export { HeroGeometric };
