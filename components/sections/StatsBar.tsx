"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;
const vp   = { once: true, margin: "-80px" } as const;
const MONO = "var(--font-jetbrains), 'JetBrains Mono', ui-monospace, monospace";

const stats = [
  { end: 40,  suffix: "+",     label: "Active Students"      },
  { end: 100, suffix: "%",     label: "Orderflow Focused"    },
  { end: 24,  suffix: "/7",    label: "Tape Reading Support" },
  { end: 100, suffix: " Days", label: "Mentorship Guarantee" },
];

function StatCounter({
  end, suffix, label, delay,
}: {
  end: number; suffix: string; label: string; delay: number;
}) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(0, end, {
      duration: 1.6,
      delay,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => ctrl.stop();
  }, [inView, end, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={vp}
      transition={{ duration: 0.6, delay, ease: EASE }}
      className="flex flex-col items-center text-center"
    >
      <span
        style={{
          fontFamily: "var(--font-inter), -apple-system, sans-serif",
          fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
          fontWeight: 800,
          color: "var(--foreground)",
          letterSpacing: "-0.05em",
          lineHeight: 1,
          marginBottom: "0.45rem",
        }}
      >
        {val}
        <span style={{ color: "rgba(var(--foreground-rgb),0.38)" }}>{suffix}</span>
      </span>
      <p
        style={{
          fontFamily: MONO,
          fontSize: "0.58rem",
          color: "var(--muted-foreground)",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </p>
    </motion.div>
  );
}

export default function StatsBar() {
  return (
    <section
      style={{
        background: "var(--surface-1)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="px-6 py-2"
              style={{
                borderLeft: i === 0 ? "none" : "1px solid var(--border)",
              }}
            >
              <StatCounter {...s} delay={i * 0.1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
