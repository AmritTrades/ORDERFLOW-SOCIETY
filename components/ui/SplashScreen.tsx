"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

/* ─── Easing ──────────────────────────────────────────────── */
/* easeInOutQuart — sharp, decisive slide */
const SLIDE_EASE = [0.76, 0, 0.24, 1] as const;

/* ─── Film grain data-URI (fractalNoise SVG, tiled, 4% opacity) ── */
const GRAIN_URI =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E" +
  "%3Cfilter id='g'%3E" +
  "%3CfeTurbulence type='fractalNoise' baseFrequency='0.68' numOctaves='4' stitchTiles='stitch'/%3E" +
  "%3CfeColorMatrix type='saturate' values='0'/%3E" +
  "%3C/filter%3E" +
  "%3Crect width='200' height='200' filter='url(%23g)' opacity='1'/%3E" +
  "%3C/svg%3E\")";

/* ════════════════════════════════════════════════════════════ */

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  /* Stable ref so useEffect doesn't need onComplete in its deps */
  const cb = useRef(onComplete);
  useEffect(() => { cb.current = onComplete; }, [onComplete]);

  useEffect(() => {
    /* Lock body scroll for the entire duration of the splash */
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    /*
     * Timing:
     *   0 – 0.65 s   text blurs in + letter-spacing expands
     *   0.65 – 1.4 s text holds visible (~0.75 s ≈ 0.8 s requested)
     *   1.4 s        onComplete fires → AnimatePresence triggers slide-up
     */
    const t = setTimeout(() => cb.current(), 1400);

    return () => {
      clearTimeout(t);
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <motion.div
      key="splash"
      /*
       * Exit: whole panel slides UP (-100 vh).
       * Content is already mounting underneath — the rising panel
       * acts as a curtain to reveal the hero.
       */
      exit={{
        y: "-100%",
        transition: { duration: 0.55, ease: SLIDE_EASE },
      }}
      style={{
        position:       "fixed",
        inset:          0,
        background:     "#000000",
        display:        "flex",
        flexDirection:  "column",
        alignItems:     "center",
        justifyContent: "center",
        zIndex:         9999,
        overflow:       "hidden",
      }}
    >
      {/*
       * Film grain overlay — fractalNoise SVG tiled at 200 × 200 px,
       * drawn at 4 % opacity via screen blend so it's visible on black.
       * No neon lines, no grids — pure analogue texture.
       */}
      <div
        aria-hidden
        style={{
          position:        "absolute",
          inset:           0,
          backgroundImage: GRAIN_URI,
          backgroundSize:  "200px 200px",
          opacity:         0.045,
          mixBlendMode:    "screen",
          pointerEvents:   "none",
        }}
      />

      {/*
       * ORDERFLOW SOCIETY
       * Blur-in entrance: opacity 0 → 1, blur 14px → 0, letterSpacing tight → wide.
       * Subtle chromatic aberration via text-shadow (±0.5 px R / B shift).
       */}
      <motion.span
        initial={{
          opacity:       0,
          filter:        "blur(14px)",
          letterSpacing: "0.04em",
        }}
        animate={{
          opacity:       1,
          filter:        "blur(0px)",
          letterSpacing: "0.28em",
        }}
        transition={{
          duration: 0.65,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          fontFamily:    "var(--font-inter),-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",
          fontSize:      "clamp(0.65rem, 1.8vw, 0.95rem)",
          fontWeight:    800,
          color:         "#ffffff",
          textTransform: "uppercase",
          textAlign:     "center",
          whiteSpace:    "nowrap",
          userSelect:    "none",
          position:      "relative",
          zIndex:        1,
          /* Chromatic aberration — 0.5 px R / B split, barely perceptible */
          textShadow:    "-0.5px 0 rgba(255,50,50,0.18), 0.5px 0 rgba(50,50,255,0.18)",
        }}
      >
        Orderflow Society
      </motion.span>

      {/* Thin hairline below text — appears with a short delay, adds weight */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.45, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        style={{
          marginTop:       "1.5rem",
          width:           "2rem",
          height:          "1px",
          background:      "rgba(255,255,255,0.2)",
          transformOrigin: "center",
          position:        "relative",
          zIndex:          1,
        }}
      />
    </motion.div>
  );
}
