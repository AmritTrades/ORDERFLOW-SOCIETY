"use client";

import { useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

const bars = [
  { w: 28, anim: [0.40, 1.00, 0.60, 0.88, 0.40], dur: 2.5, delay: 0.00 },
  { w: 18, anim: [0.88, 0.38, 1.00, 0.42, 0.88], dur: 2.9, delay: 0.55 },
  { w: 24, anim: [0.50, 0.92, 0.32, 1.00, 0.50], dur: 2.1, delay: 1.05 },
  { w: 11, anim: [1.00, 0.28, 0.82, 0.48, 1.00], dur: 3.2, delay: 0.30 },
];

/* Neon-sign boot flicker: dark → brief flashes → on */
const FLICKER = [0, 1, 0, 0.7, 0, 1, 0.4, 0, 1] as const;
const FTIMES  = [0, 0.08, 0.14, 0.22, 0.3, 0.46, 0.56, 0.66, 1] as const;

export function AnimatedLogo() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [hov, setHov] = useState(false);

  const x = useSpring(0, { stiffness: 180, damping: 22, mass: 0.9 });
  const y = useSpring(0, { stiffness: 180, damping: 22, mass: 0.9 });

  const onMove = (e: React.MouseEvent) => {
    const r = wrapRef.current!.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width  / 2) * 0.22);
    y.set((e.clientY - r.top  - r.height / 2) * 0.22);
  };

  const onLeave = () => { x.set(0); y.set(0); setHov(false); };

  return (
    <>
      <style>{`
        @keyframes society-pulse {
          0%, 78%, 100% { opacity: 1; }
          82%            { opacity: 0.45; }
          86%            { opacity: 1; }
          90%            { opacity: 0.55; }
          94%            { opacity: 1; }
        }
        .society-heartbeat {
          animation: society-pulse 4.5s ease-in-out infinite;
          animation-delay: 0.9s;
        }
      `}</style>

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
          {/* ── Bars icon — boot flicker on mount ── */}
          <motion.svg
            width="30" height="22" viewBox="0 0 30 22" fill="none"
            aria-label="Orderflow Society logo mark"
            initial={{ opacity: 0 }}
            animate={{ opacity: [...FLICKER] }}
            transition={{ duration: 0.85, ease: "linear", times: [...FTIMES] }}
          >
            {bars.map(({ w, anim, dur, delay }, i) => (
              <motion.rect
                key={i}
                x={0} y={i * 6} width={w} height={3.5} rx={1.75} fill="#00ff41"
                animate={{ opacity: anim }}
                transition={{ duration: dur, repeat: Infinity, delay: 0.85 + delay, ease: "easeInOut" }}
              />
            ))}
          </motion.svg>

          {/* ── Wordmark ── */}
          <motion.span
            animate={hov ? { x: [0, -1.5, 2.5, -1.5, 0] } : { x: 0 }}
            transition={{ duration: 0.13, ease: "easeInOut" }}
            className="hidden sm:inline-flex items-baseline"
            style={{
              fontFamily: "var(--font-jetbrains), 'JetBrains Mono', ui-monospace, monospace",
              fontSize: "0.65rem",
              fontWeight: 800,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: hov ? "#00ff41" : "var(--foreground)",
              transition: "color 0.12s ease",
            }}
          >
            {/* "Orderflow" flickers in on mount */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [...FLICKER] }}
              transition={{ duration: 0.85, ease: "linear", times: [...FTIMES] }}
            >
              Orderflow&nbsp;
            </motion.span>

            {/* "Society" flickers in slightly after + ongoing heartbeat */}
            <motion.span
              className="society-heartbeat"
              initial={{ opacity: 0 }}
              animate={{ opacity: [...FLICKER] }}
              transition={{ duration: 0.85, delay: 0.12, ease: "linear", times: [...FTIMES] }}
            >
              Society
            </motion.span>
          </motion.span>
        </a>
      </motion.div>
    </>
  );
}
