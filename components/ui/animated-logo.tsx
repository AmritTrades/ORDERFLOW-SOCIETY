"use client";

import { useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

/* Each bar: [maxWidth, opacityKeyframes, duration, delay] */
const bars = [
  { w: 28, anim: [0.40, 1.00, 0.60, 0.88, 0.40], dur: 2.5, delay: 0.00 },
  { w: 18, anim: [0.88, 0.38, 1.00, 0.42, 0.88], dur: 2.9, delay: 0.55 },
  { w: 24, anim: [0.50, 0.92, 0.32, 1.00, 0.50], dur: 2.1, delay: 1.05 },
  { w: 11, anim: [1.00, 0.28, 0.82, 0.48, 1.00], dur: 3.2, delay: 0.30 },
];

export function AnimatedLogo() {
  const wrapRef    = useRef<HTMLDivElement>(null);
  const [hov, setHov] = useState(false);

  /* Magnetic spring */
  const x = useSpring(0, { stiffness: 180, damping: 22, mass: 0.9 });
  const y = useSpring(0, { stiffness: 180, damping: 22, mass: 0.9 });

  const onMove = (e: React.MouseEvent) => {
    const r = wrapRef.current!.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width  / 2) * 0.22);
    y.set((e.clientY - r.top  - r.height / 2) * 0.22);
  };

  const onLeave = () => { x.set(0); y.set(0); setHov(false); };

  return (
    <motion.div
      ref={wrapRef}
      style={{ x, y, display: "inline-flex" }}
      onMouseMove={onMove}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={onLeave}
    >
      <a
        href="#"
        className="flex items-center select-none"
        style={{ gap: "0.6rem", textDecoration: "none" }}
      >
        {/* ── Animated bars icon ── */}
        <svg
          width="30" height="22" viewBox="0 0 30 22" fill="none"
          aria-label="Orderflow Society logo mark"
        >
          {bars.map(({ w, anim, dur, delay }, i) => (
            <motion.rect
              key={i}
              x={0}
              y={i * 6}
              width={w}
              height={3.5}
              rx={1.75}
              fill="#00ff41"
              animate={{ opacity: anim }}
              transition={{
                duration: dur,
                repeat: Infinity,
                delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>

        {/* ── Wordmark — hidden on mobile ── */}
        <motion.span
          /* Glitch-shake on hover enter, snap back on leave */
          animate={hov ? { x: [0, -1.5, 2.5, -1.5, 0] } : { x: 0 }}
          transition={{ duration: 0.13, ease: "easeInOut" }}
          className="hidden sm:block"
          style={{
            fontFamily:
              "var(--font-jetbrains), 'JetBrains Mono', ui-monospace, monospace",
            fontSize: "0.65rem",
            fontWeight: 800,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            /* CSS handles color — framer-motion can't interpolate CSS vars */
            color: hov ? "#00ff41" : "var(--foreground)",
            transition: "color 0.12s ease",
          }}
        >
          Orderflow Society
        </motion.span>
      </a>
    </motion.div>
  );
}
