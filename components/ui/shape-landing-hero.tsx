"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useScroll,
  useTransform,
  useVelocity,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GenerativeArtScene } from "@/components/ui/anomalous-matter-hero";
import { Liquid, type Colors } from "@/components/ui/button-1";

/* ─── design tokens ─── */
const EASE = [0.16, 1, 0.3, 1] as const;
const MONO = "var(--font-geist-mono, var(--font-jetbrains), ui-monospace, monospace)";

/* ─── liquid primary CTA palette — Orderflow Green ─── */
const GREEN_LIQUID_COLORS: Colors = {
  color1: "#FFFFFF",
  color2: "#00FF66",
  color3: "#059669",
  color4: "#FCFCFE",
  color5: "#F9F9FD",
  color6: "#10B981",
  color7: "#004D25",
  color8: "#00CC52",
  color9: "#047857",
  color10: "#34D399",
  color11: "#00FF66",
  color12: "#A7F3D0",
  color13: "#065F46",
  color14: "#6EE7B7",
  color15: "#34D399",
  color16: "#047857",
  color17: "#059669",
};

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
   PRIMARY CTA — liquid gradient button
═══════════════════════════════════════════════ */
function LiquidPrimaryCTA() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="#mentorship"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById("mentorship")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative inline-block h-[4.6em] w-full max-w-[280px] rounded-xl border-2 border-black bg-black"
    >
      {/* soft ambient bloom */}
      <div className="absolute top-[8.57%] left-1/2 h-[128.57%] w-[112.81%] -translate-x-1/2 opacity-70 blur-[19px] filter">
        <span className="absolute inset-0 rounded-xl bg-[#062018] blur-[6.5px] filter" />
        <div className="relative h-full w-full overflow-hidden rounded-xl">
          <Liquid isHovered={isHovered} colors={GREEN_LIQUID_COLORS} />
        </div>
      </div>

      {/* inner dark backing */}
      <div className="absolute top-1/2 left-1/2 h-[112.85%] w-[92.23%] -translate-x-1/2 -translate-y-[40%] rounded-xl bg-[#01120b] blur-[7.3px] filter" />

      <div className="relative h-full w-full overflow-hidden rounded-xl">
        <span className="absolute inset-0 rounded-xl bg-[#062018]" />
        <span className="absolute inset-0 rounded-xl bg-black" />
        <Liquid isHovered={isHovered} colors={GREEN_LIQUID_COLORS} />
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className={`absolute inset-0 rounded-xl border-[3px] border-solid border-gradient-to-b from-transparent to-white mix-blend-overlay filter ${
              i <= 2 ? "blur-[3px]" : i === 3 ? "blur-[5px]" : "blur-[4px]"
            }`}
          />
        ))}
        <span className="absolute top-1/2 left-1/2 h-[42.85%] w-[70.8%] -translate-x-1/2 -translate-y-[40%] rounded-xl bg-[#003318] blur-[15px] filter" />
      </div>

      <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 rounded-xl px-6 text-center text-[0.82rem] font-extrabold uppercase leading-tight tracking-wider text-white transition-colors duration-200 group-hover:text-black">
        <span>Apply for 1-on-1 Mentorship</span>
        <ArrowRight aria-hidden className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1.5" />
      </span>
    </a>
  );
}

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
              {/* Row A — Primary + Discord */}
              <div className="flex flex-col sm:flex-row flex-wrap items-start gap-3">

                {/* Primary — liquid gradient terminal CTA */}
                <LiquidPrimaryCTA />

                {/* Discord — glassmorphic indigo capsule */}
                <motion.a
                  href="https://discord.gg/bZ2hVCrCMw"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                  className="group inline-flex items-center gap-2.5 rounded-xl border border-indigo-500/30 bg-zinc-900/60 px-5 py-3.5 text-[0.875rem] font-medium text-white/72 backdrop-blur-md transition-all duration-200 hover:border-indigo-400/80 hover:bg-indigo-950/30 hover:text-white hover:shadow-[0_0_20px_rgba(99,102,241,0.25)]"
                  style={{ fontFamily: MONO }}
                >
                  <span style={{ position: "relative", display: "flex", alignItems: "center", flexShrink: 0 }}>
                    <span
                      aria-hidden
                      style={{
                        position: "absolute", inset: "-5px",
                        background: "rgba(88,101,242,0.48)",
                        borderRadius: "50%",
                        filter: "blur(7px)",
                        opacity: 0.48,
                      }}
                    />
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#7289da", position: "relative" }} aria-hidden>
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.62.874-1.282 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                    </svg>
                  </span>
                  Join Free Discord
                  <span aria-hidden className="inline-block transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
                </motion.a>
              </div>

              {/* Row B — Inner Circle */}
              <div className="flex flex-col items-start gap-1.5">
                <motion.a
                  href="https://whop.com/orderflow-society/orderflow-society-membership/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/40 px-8 py-[0.9rem] text-[0.9375rem] font-medium tracking-[-0.01em] text-white/46 backdrop-blur-sm transition-all duration-200 hover:border-zinc-600 hover:text-white hover:shadow-[0_0_16px_rgba(255,255,255,0.1)]"
                >
                  Join Inner Circle
                </motion.a>
                <p style={{ fontSize: "0.71rem", color: "rgba(var(--foreground-rgb),0.24)", letterSpacing: "-0.005em", paddingLeft: "0.75rem" }}>
                  $49/mo — Cancel anytime.
                </p>
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
              <span style={{ color: "rgba(var(--foreground-rgb),0.7)" }}>50+ Funded Traders</span>{" "}
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
