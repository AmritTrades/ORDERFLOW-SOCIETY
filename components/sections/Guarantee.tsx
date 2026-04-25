"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";
import { ShieldCheck } from "lucide-react";

/* ── Stagger container / line variants ── */
const EASE = [0.16, 1, 0.3, 1] as const;
const vp   = { once: true, margin: "-80px" } as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } },
};

const line = {
  hidden:   { opacity: 0, y: 36 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

/* ── Trust Seal with shiny sweep + ShieldCheck ── */
function TrustSeal() {
  return (
    <span
      className="inline-flex items-center gap-2 relative overflow-hidden"
      style={{
        borderRadius: "9999px",
        padding: "0.4rem 1.1rem",
        background: "rgba(var(--foreground-rgb),0.06)",
        border: "1px solid rgba(var(--foreground-rgb),0.14)",
      }}
    >
      <style>{`
        @keyframes trust-sweep {
          0%   { transform: translateX(-160%) skewX(-20deg); opacity: 0; }
          8%   { opacity: 1; }
          92%  { opacity: 1; }
          100% { transform: translateX(260%) skewX(-20deg); opacity: 0; }
        }
        .trust-sweep { animation: trust-sweep 3.8s ease-in-out infinite; }
      `}</style>
      {/* Shiny sweep */}
      <span
        aria-hidden
        className="trust-sweep absolute inset-y-0 w-2/5 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(var(--foreground-rgb),0.18) 50%, transparent 100%)",
        }}
      />
      <ShieldCheck
        width={14} height={14}
        className="relative z-10 flex-shrink-0"
        style={{ color: "#c9a227" }}
        strokeWidth={2}
      />
      <span
        className="label-mono relative z-10"
        style={{ color: "rgba(var(--foreground-rgb),0.65)" }}
      >
        Fully guaranteed · No fine print · Secure via PayPal
      </span>
    </span>
  );
}

/* ══════════════════════════════════════════════════ */
export default function Guarantee() {

  /* ── Mouse-tracking spotlight ── */
  const sectionRef = useRef<HTMLElement>(null);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current!.getBoundingClientRect();
    setMouse({
      x: ((e.clientX - rect.left) / rect.width)  * 100,
      y: ((e.clientY - rect.top)  / rect.height) * 100,
    });
  };

  /* ── Count-up: 0 → 100 on entry ── */
  const countRef    = useRef<HTMLDivElement>(null);
  const isInView    = useInView(countRef, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, 100, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setCount(Math.round(v)),
    });
    return controls.stop;
  }, [isInView]);

  return (
    <section
      id="guarantee"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="py-36 relative overflow-hidden"
      style={{ background: "var(--background)", borderTop: "1px solid var(--border)" }}
    >

      {/* ── Faint trading grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(var(--foreground-rgb),0.038) 1px, transparent 1px),
            linear-gradient(90deg, rgba(var(--foreground-rgb),0.038) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
      {/* Vignette fades grid at edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 35%, var(--background) 100%)",
        }}
      />

      {/* ── Mouse-tracking radial spotlight ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 36% 28% at ${mouse.x}% ${mouse.y}%, rgba(var(--foreground-rgb),0.07) 0%, transparent 70%)`,
          transition: "background 0.12s ease-out",
        }}
      />

      {/* ── Shimmer keyframe ── */}
      <style>{`
        @keyframes shimmer-gold {
          0%   { background-position: -300% center; }
          100% { background-position:  300% center; }
        }
        .shimmer-gold {
          background: linear-gradient(
            90deg,
            rgba(var(--foreground-rgb),0.22) 0%,
            #f5c842 30%,
            #ffe082 50%,
            #f5c842 70%,
            rgba(var(--foreground-rgb),0.22) 100%
          );
          background-size: 300% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer-gold 3.6s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">

        {/* Label */}
        <motion.p
          className="label-mono mb-10"
          variants={line}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          Risk-Free Investment
        </motion.p>

        {/* ── Staggered headline block ── */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >

          {/* 100 DAYS. PROFITABLE. — count-up */}
          <motion.div variants={line} ref={countRef} className="mb-5">
            <span
              style={{
                fontFamily:
                  "var(--font-jetbrains), 'JetBrains Mono', 'Fira Code', ui-monospace, monospace",
                fontSize: "clamp(0.75rem, 1.5vw, 0.9rem)",
                fontWeight: 700,
                letterSpacing: "0.22em",
                color: "#00ff41",
                textShadow: "0 0 18px rgba(0,255,65,0.5), 0 0 40px rgba(0,255,65,0.2)",
                textTransform: "uppercase",
              }}
            >
              {count} DAYS. PROFITABLE.
            </span>
          </motion.div>

          {/* "Or I teach you" */}
          <motion.div variants={line}>
            <h2
              style={{
                fontFamily:
                  "var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontSize: "clamp(3rem, 8vw, 8rem)",
                fontWeight: 800,
                color: "var(--foreground)",
                letterSpacing: "-0.045em",
                lineHeight: 0.95,
                marginBottom: "0.15em",
              }}
            >
              Or I teach you
            </h2>
          </motion.div>

          {/* "for free." — gold shimmer */}
          <motion.div variants={line} style={{ marginBottom: "2.75rem" }}>
            <span
              className="shimmer-gold"
              style={{
                fontFamily:
                  "var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontSize: "clamp(3rem, 8vw, 8rem)",
                fontWeight: 800,
                letterSpacing: "-0.045em",
                lineHeight: 0.95,
                display: "block",
              }}
            >
              for free.
            </span>
          </motion.div>

          {/* Hairline */}
          <motion.div
            variants={line}
            className="w-12 h-px mx-auto mb-8"
            style={{ background: "rgba(var(--foreground-rgb),0.15)" }}
          />

          {/* Body copy */}
          <motion.p
            variants={line}
            className="max-w-2xl mx-auto"
            style={{
              fontSize: "1.0625rem",
              color: "rgba(var(--foreground-rgb),0.55)",
              lineHeight: 1.75,
              marginBottom: "0.75rem",
            }}
          >
            Do the work. If you&apos;re not profitable within 100 days, I will{" "}
            <span style={{ color: "var(--foreground)" }}>
              personally teach you for free until you are.
            </span>{" "}
            No extra cost. No excuses.
          </motion.p>

          <motion.p
            variants={line}
            style={{
              fontSize: "0.875rem",
              color: "var(--muted-foreground)",
              marginBottom: "2.75rem",
            }}
          >
            The guarantee exists because the system works — if you do.
          </motion.p>

          {/* ── Seal of Trust ── */}
          <motion.div variants={line} className="flex justify-center">
            <TrustSeal />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
