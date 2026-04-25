"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const EASE  = [0.16, 1, 0.3, 1] as const;
const vp    = { once: true, margin: "-80px" } as const;
const INTER = "var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
const MONO  = "var(--font-jetbrains), 'JetBrains Mono', ui-monospace, monospace";

const TYPEWRITER_TEXT = "TRADING IS DATA.  DATA IS TRUTH.  BECOME PROFITABLE.";

/* ── Typewriter reveal (triggers once on scroll-in) ── */
function TypeWriter({ text, delayMs = 0 }: { text: string; delayMs?: number }) {
  const ref    = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    let intervalId: ReturnType<typeof setInterval> | null = null;
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length && intervalId) clearInterval(intervalId);
      }, 32);
    }, delayMs);
    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [inView, text, delayMs]);

  return (
    <span ref={ref}>
      {displayed}
      {displayed.length < text.length && (
        <motion.span
          animate={{ opacity: [1, 1, 0, 0, 1] }}
          transition={{ duration: 1.0, repeat: Infinity, ease: "linear", times: [0, 0.45, 0.5, 0.95, 1] }}
          style={{ display: "inline-block", width: "0.5em", borderRight: "1.5px solid currentColor", marginLeft: "1px" }}
        />
      )}
    </span>
  );
}

const EMERALD_GLOW = "rgba(6,95,70,0.24)";
const EMERALD_DIM  = "rgba(16,185,129,0.18)";
const EMERALD_LABEL = "rgba(16,185,129,0.5)";

const HEADLINE_WORDS = "STOP GUESSING. START READING THE TAPE.".split(" ");

const WIDGETS = [
  { label: "MARKET SIGNAL", value: "DATA IS TRUTH"            },
  { label: "OUTCOME",       value: "BECOME PROFITABLE"        },
  { label: "METHOD",        value: "ORDERFLOW + MENTORSHIP"   },
];

/* ── Word blur-in reveal ── */
function RevealWords({ words, baseDelay = 0 }: { words: string[]; baseDelay?: number }) {
  return (
    <>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(16px)", y: 22 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={vp}
          transition={{ duration: 0.7, delay: baseDelay + i * 0.07, ease: EASE }}
          style={{ display: "inline-block", marginRight: "0.3em" }}
        >
          {word}
        </motion.span>
      ))}
    </>
  );
}

/* ── Pulsing HUD corner brackets ── */
function HudCorners({ size = 22, color = "rgba(16,185,129,0.55)" }: { size?: number; color?: string }) {
  const corners: Array<{ top?: number; bottom?: number; left?: number; right?: number; delay: number }> = [
    { top: 0,    left:  0, delay: 0    },
    { top: 0,    right: 0, delay: 0.75 },
    { bottom: 0, left:  0, delay: 1.5  },
    { bottom: 0, right: 0, delay: 2.25 },
  ];
  return (
    <>
      {corners.map(({ top, bottom, left, right, delay }, i) => (
        <motion.span
          key={i}
          aria-hidden
          animate={{ opacity: [0.35, 1, 0.35] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay }}
          style={{
            position: "absolute",
            top, bottom, left, right,
            width: size, height: size,
            borderTop:    top    !== undefined ? `1.5px solid ${color}` : undefined,
            borderBottom: bottom !== undefined ? `1.5px solid ${color}` : undefined,
            borderLeft:   left   !== undefined ? `1.5px solid ${color}` : undefined,
            borderRight:  right  !== undefined ? `1.5px solid ${color}` : undefined,
          }}
        />
      ))}
    </>
  );
}

/* ── Progress bar (fills once on scroll-in) ── */
function ProgressBar() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      style={{
        height: 2,
        background: "rgba(16,185,129,0.08)",
        borderRadius: 1,
        overflow: "hidden",
        marginTop: "3rem",
      }}
    >
      <motion.div
        initial={{ width: "0%" }}
        animate={inView ? { width: "100%" } : {}}
        transition={{ duration: 2.8, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
        style={{
          height: "100%",
          background:
            "linear-gradient(90deg, rgba(16,185,129,0.2) 0%, rgba(16,185,129,0.8) 55%, #34d399 100%)",
          boxShadow: "0 0 10px rgba(16,185,129,0.6)",
          borderRadius: 1,
        }}
      />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════ */
export default function ClosingQuote() {

  /* Mouse-tracking spotlight */
  const sectionRef = useRef<HTMLElement>(null);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [headlineHovered, setHeadlineHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current!.getBoundingClientRect();
    setMouse({
      x: ((e.clientX - rect.left)  / rect.width)  * 100,
      y: ((e.clientY - rect.top)   / rect.height) * 100,
    });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="py-36 relative overflow-hidden"
      style={{ background: "#000000", borderTop: "1px solid rgba(16,185,129,0.07)" }}
    >

      {/* ── Grid (5% opacity) ── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Grid vignette */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 85% 75% at 50% 50%, transparent 20%, #000000 100%)",
        }}
      />

      {/* ── Deep emerald spotlight — follows cursor ── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 44% 38% at ${mouse.x}% ${mouse.y}%, ${EMERALD_GLOW} 0%, transparent 70%)`,
          transition: "background 0.08s ease-out",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">

        {/* ── Section label ── */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.55, ease: EASE }}
          style={{
            fontFamily: MONO,
            fontSize: "0.6rem",
            color: EMERALD_LABEL,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            marginBottom: "3.5rem",
          }}
        >
          // THE ORDERFLOW EDGE
        </motion.p>

        {/* ── HUD frame + headline ── */}
        <div style={{ position: "relative", padding: "3rem 1.5rem 3.25rem" }}>
          <HudCorners size={24} color="rgba(16,185,129,0.5)" />

          {/* Chromatic aberration on hover — plain CSS transition, no FM textShadow interpolation */}
          <h2
            onMouseEnter={() => setHeadlineHovered(true)}
            onMouseLeave={() => setHeadlineHovered(false)}
            style={{
              fontFamily: INTER,
              fontSize: "clamp(2.4rem, 6.5vw, 5.75rem)",
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.035em",
              lineHeight: 1.08,
              cursor: "default",
              userSelect: "none",
              textShadow: headlineHovered
                ? "-1px 0 rgba(239,68,68,0.4), 1px 0 rgba(6,182,212,0.4)"
                : "none",
              transition: "text-shadow 0.08s ease",
            }}
          >
            <RevealWords words={HEADLINE_WORDS} baseDelay={0.08} />
          </h2>
        </div>

        {/* ── Glassmorphism widget row ── */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.7rem",
            justifyContent: "center",
            marginTop: "0.5rem",
          }}
        >
          {WIDGETS.map(({ label, value }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={vp}
              transition={{ duration: 0.65, delay: 0.35 + i * 0.11, ease: EASE }}
              whileHover={{ y: -4, boxShadow: "0 12px 36px rgba(6,95,70,0.3)" }}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${EMERALD_DIM}`,
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                borderRadius: 6,
                padding: "0.9rem 1.5rem",
                textAlign: "left",
                cursor: "default",
                transition: "box-shadow 0.25s ease",
              }}
            >
              <p
                style={{
                  fontFamily: MONO,
                  fontSize: "0.5rem",
                  color: EMERALD_LABEL,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  marginBottom: "0.3rem",
                }}
              >
                {label}
              </p>
              <p
                style={{
                  fontFamily: INTER,
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.82)",
                  letterSpacing: "-0.01em",
                  textTransform: "uppercase",
                }}
              >
                {value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── Progress bar ── */}
        <ProgressBar />

        {/* ── Closing line — typewriter ── */}
        <p
          style={{
            fontFamily: MONO,
            fontSize: "0.58rem",
            color: "rgba(255,255,255,0.28)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginTop: "1.75rem",
          }}
        >
          <TypeWriter text={TYPEWRITER_TEXT} delayMs={900} />
        </p>

      </div>
    </section>
  );
}
