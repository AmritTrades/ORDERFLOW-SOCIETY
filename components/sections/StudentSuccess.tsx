"use client";

import { useRef, useLayoutEffect, useState } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { Quote } from "lucide-react";

/* ─── Theme ───────────────────────────────────────────────── */
const EASE = [0.16, 1, 0.3, 1] as const;
const MONO = "var(--font-jetbrains),'JetBrains Mono','Fira Code',ui-monospace,monospace";
const SANS = "var(--font-inter),-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif";
const GOLD = "rgba(201,162,39,";
const EM   = "rgba(0,255,65,";     /* terminal / emerald green */

/* ─── Data ────────────────────────────────────────────────── */
const FEATURED = {
  name: "Harpreet",
  tag:  "1-on-1 Mentorship",
  text: "i just want to start by saying thank u for everything you're doing. the level of support u give is honestly not something u find everywhere. every time i have a problem or don't understand something, i can just text u and you're always available. i'm already starting to see some results — even in the last couple of days i took some really good trades thanks to the concepts you taught me. really solid experience so far.",
};

type Review = { name: string; text: string; tag?: string };

/* Strict purge — only these 5 in the wheel */
const ROW_1: Review[] = [
  { name: "Dhruv",    text: "finally understanding how the tape moves. i used to be so confused but the way u explain delta and footprint is actually simple. best mentor so far." },
  { name: "Nick",     text: "Top tier 1-on-1 mentorship. No fluff, just pure data. If you use ATAS, you need his templates. My execution is much cleaner now.", tag: "ATAS" },
  { name: "Harry S.", text: "Really organized guy. The sessions are intense but clear. I appreciate that he always stops to ask if i have doubts. Feeling confident for the first time." },
];

const ROW_2: Review[] = [
  { name: "Akhi", text: "had the first session and it was very informative. he talks about building a foundation and telling you to do things which makes you a trader. not just some random strategy." },
  { name: "Zaid", text: "shoutout to amrit for the atas templates. saved me so much time. now i can actually see where the big orders are sitting on the heatmap. solid.", tag: "ATAS" },
];

/* ─── Helper ──────────────────────────────────────────────── */
function initials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

/* ─── Marquee card ────────────────────────────────────────── */
function ReviewCard({ review }: { review: Review }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 380, damping: 28 }}
      style={{
        flexShrink:           0,
        width:                "clamp(240px, 28vw, 340px)",
        background:           "rgba(9,9,11,0.5)",
        border:               `1px solid ${EM}${hovered ? "0.6" : "0.2"})`,
        borderRadius:         "14px",
        padding:              "1.25rem",
        backdropFilter:       "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: hovered
          ? `0 0 22px ${EM}0.18), 0 0 44px ${EM}0.06), inset 0 0 18px ${EM}0.03)`
          : "0 0 0 transparent",
        transition:           "border-color 0.18s ease, box-shadow 0.18s ease",
        cursor:               "default",
        userSelect:           "none",
        position:             "relative",
        overflow:             "hidden",
      }}
    >
      {/* Top-edge glow beam — fades in on hover */}
      <div
        aria-hidden
        style={{
          position:      "absolute",
          top:           0,
          left:          "10%",
          right:         "10%",
          height:        "1px",
          background:    `linear-gradient(90deg, transparent, ${EM}0.9), transparent)`,
          opacity:       hovered ? 1 : 0,
          transition:    "opacity 0.18s ease",
          pointerEvents: "none",
        }}
      />

      {/* Name row */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.75rem" }}>

        {/* Avatar */}
        <div style={{
          width:          28,
          height:         28,
          borderRadius:   "50%",
          background:     `${EM}0.08)`,
          border:         `1px solid ${EM}0.22)`,
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
          flexShrink:     0,
        }}>
          <span style={{ fontFamily: MONO, fontSize: "0.55rem", fontWeight: 700, color: `${EM}0.72)` }}>
            {initials(review.name)}
          </span>
        </div>

        {/* Name */}
        <span style={{
          fontFamily:    MONO,
          fontSize:      "0.67rem",
          fontWeight:    700,
          letterSpacing: "0.1em",
          color:         "rgba(255,255,255,0.65)",
          textTransform: "uppercase",
          flex:          1,
        }}>
          {review.name}
        </span>

        {/* Tag */}
        {review.tag && (
          <span style={{
            fontFamily:    MONO,
            fontSize:      "0.52rem",
            fontWeight:    600,
            letterSpacing: "0.08em",
            color:         `${EM}0.65)`,
            textTransform: "uppercase",
            padding:       "0.18rem 0.5rem",
            borderRadius:  "999px",
            background:    `${EM}0.07)`,
            border:        `1px solid ${EM}0.15)`,
            whiteSpace:    "nowrap",
          }}>
            {review.tag}
          </span>
        )}
      </div>

      {/* Body */}
      <p style={{
        fontFamily: SANS,
        fontSize:   "0.84rem",
        color:      "rgba(255,255,255,0.45)",
        lineHeight: 1.65,
        margin:     0,
      }}>
        {review.text}
      </p>
    </motion.div>
  );
}

/* ─── Infinite marquee track ──────────────────────────────── */
/*
 * 3× content → [A,B,C, A,B,C, A,B,C].  setWidth = scrollWidth / 3.
 * We keep x inside [-setWidth, 0).  At any point the visible window
 * shows content that is visually identical to x = 0, so the wrap is
 * seamless.  Right-moving rows start at -setWidth (= middle set).
 */
function MarqueeTrack({
  reviews,
  direction,
  speed = 55,
}: {
  reviews: Review[];
  direction: "left" | "right";
  speed?: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const x        = useMotionValue(0);
  const paused   = useRef(false);
  const setWidth = useRef(0);

  const tripled = [...reviews, ...reviews, ...reviews];

  useLayoutEffect(() => {
    if (!trackRef.current) return;
    setWidth.current = trackRef.current.scrollWidth / 3;
    if (direction === "right") x.set(-setWidth.current);
  }, [direction, x]);

  useAnimationFrame((_, delta) => {
    if (paused.current || setWidth.current === 0) return;
    const sign = direction === "left" ? -1 : 1;
    let next = x.get() + (sign * speed * delta) / 1000;
    if (next <= -setWidth.current) next += setWidth.current;
    if (next >= 0)                  next -= setWidth.current;
    x.set(next);
  });

  return (
    <div
      className="overflow-hidden"
      style={{ paddingBlock: "10px" }}     /* room for 1.02× scale */
      onMouseEnter={() => { paused.current = true;  }}
      onMouseLeave={() => { paused.current = false; }}
    >
      <motion.div
        ref={trackRef}
        style={{ x, display: "flex", gap: "0.875rem", width: "max-content" }}
      >
        {tripled.map((r, i) => <ReviewCard key={i} review={r} />)}
      </motion.div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════ */

export default function StudentSuccess() {
  return (
    <section
      id="student-success"
      className="py-36 relative overflow-hidden"
      style={{ background: "var(--background)", borderTop: "1px solid var(--border)" }}
    >
      {/* Terminal dot grid — 0.08 opacity for structural depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize:  "28px 28px",
        }}
      />
      {/* Radial vignette fades grid at edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 65% at 50% 50%, transparent 20%, var(--background) 100%)",
        }}
      />
      {/* Subtle green ambient bloom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 35% at 50% 72%, rgba(0,255,65,0.025) 0%, transparent 70%)",
        }}
      />

      {/* ── Header + Featured (max-width container) ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="mb-14"
        >
          {/* Label — terminal green */}
          <p
            className="label-mono mb-4"
            style={{ color: `${EM}0.55)`, letterSpacing: "0.18em" }}
          >
            Student Success
          </p>

          {/* Headline */}
          <div
            style={{
              fontSize:      "clamp(2.4rem, 5vw, 4rem)",
              fontWeight:    800,
              lineHeight:    1.05,
              letterSpacing: "-0.04em",
            }}
          >
            {/* Line 1 — pure white */}
            <span style={{ color: "#ffffff", display: "block" }}>
              what they&apos;re saying.
            </span>

            {/*
             * Line 2 — "no filters." with white→#00FF00 gradient.
             * The filter wrapper isolates the drop-shadow so it follows
             * the text contour, not the block bounds.
             */}
            <div style={{ filter: "drop-shadow(0 0 12px rgba(0,255,0,0.4))" }}>
              <span
                style={{
                  display:              "block",
                  background:           "linear-gradient(90deg, #ffffff 0%, #00FF00 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor:  "transparent",
                  backgroundClip:       "text",
                }}
              >
                no filters.
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── Harpreet — Lead Testimonial ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-14"
          style={{
            background:           "rgba(9,9,11,0.6)",
            border:               `1px solid ${GOLD}0.25)`,
            borderRadius:         "18px",
            padding:              "clamp(1.5rem, 3vw, 2.25rem)",
            backdropFilter:       "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            boxShadow:            `0 0 80px ${GOLD}0.06), inset 0 0 40px ${GOLD}0.02)`,
            position:             "relative",
            overflow:             "hidden",
          }}
        >
          {/* Gold corner bloom */}
          <div aria-hidden style={{
            position:      "absolute",
            top:           0,
            right:         0,
            width:         260,
            height:        260,
            background:    `radial-gradient(circle at top right, ${GOLD}0.1) 0%, transparent 65%)`,
            pointerEvents: "none",
          }} />
          {/* Gold top-edge beam */}
          <div aria-hidden style={{
            position:   "absolute",
            top:        0,
            left:       "15%",
            right:      "15%",
            height:     "1px",
            background: `linear-gradient(90deg, transparent, ${GOLD}0.7), transparent)`,
          }} />

          <Quote size={24} style={{ color: `${GOLD}0.4)`, marginBottom: "1rem" }} strokeWidth={1.5} />

          <p style={{
            fontFamily:   SANS,
            fontSize:     "clamp(0.975rem, 1.4vw, 1.1rem)",
            color:        "rgba(255,255,255,0.65)",
            lineHeight:   1.82,
            marginBottom: "1.5rem",
            maxWidth:     "72ch",
          }}>
            {FEATURED.text}
          </p>

          {/* Footer row */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{
              width:          40,
              height:         40,
              borderRadius:   "50%",
              background:     `${GOLD}0.12)`,
              border:         `1px solid ${GOLD}0.3)`,
              display:        "flex",
              alignItems:     "center",
              justifyContent: "center",
              flexShrink:     0,
            }}>
              <span style={{ fontFamily: MONO, fontSize: "0.68rem", fontWeight: 800, color: `${GOLD}0.9)` }}>
                {initials(FEATURED.name)}
              </span>
            </div>

            <div>
              <span style={{
                fontFamily:    MONO,
                fontSize:      "0.72rem",
                fontWeight:    700,
                letterSpacing: "0.12em",
                color:         "rgba(255,255,255,0.85)",
                textTransform: "uppercase",
                display:       "block",
              }}>
                {FEATURED.name}
              </span>
              <span style={{
                fontFamily:    MONO,
                fontSize:      "0.58rem",
                letterSpacing: "0.08em",
                color:         `${GOLD}0.55)`,
                textTransform: "uppercase",
              }}>
                {FEATURED.tag}
              </span>
            </div>

            <div style={{ marginLeft: "auto", display: "flex", gap: "2px" }}>
              {[0,1,2,3,4].map((i) => (
                <span key={i} style={{ color: "#c9a227", fontSize: "0.85rem", lineHeight: 1 }}>★</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Infinite wheel — full bleed ── */}
      <div className="relative">
        <div className="flex flex-col gap-5">
          <MarqueeTrack reviews={ROW_1} direction="left"  speed={55} />
          <MarqueeTrack reviews={ROW_2} direction="right" speed={46} />
        </div>

        {/* Left edge fade */}
        <div
          className="absolute inset-y-0 left-0 pointer-events-none z-10"
          style={{
            width:      "clamp(3rem, 8vw, 8rem)",
            background: "linear-gradient(90deg, var(--background) 0%, transparent 100%)",
          }}
        />
        {/* Right edge fade */}
        <div
          className="absolute inset-y-0 right-0 pointer-events-none z-10"
          style={{
            width:      "clamp(3rem, 8vw, 8rem)",
            background: "linear-gradient(270deg, var(--background) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* ── Hint ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-8 relative z-10">
        <p
          className="label-mono text-center"
          style={{ color: `${EM}0.22)`, letterSpacing: "0.14em" }}
        >
          hover to pause · all reviews are real
        </p>
      </div>
    </section>
  );
}
