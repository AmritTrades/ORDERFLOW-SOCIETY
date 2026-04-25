"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { viewport } from "@/lib/motion";

const stats = [
  { value: 40, suffix: "+", label: "Active Students", sublabel: "traders enrolled" },
  { value: 100, suffix: "%", label: "Free Community", sublabel: "no paid tiers" },
  { value: 24, suffix: "/7", label: "Discord Access", sublabel: "always online" },
  { value: 100, suffix: " days", label: "Guarantee", sublabel: "or teach free" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let frame: number;
    const duration = 1400;
    const start = performance.now();
    const animate = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(ease * target));
      if (t < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [started, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="py-0 overflow-hidden" style={{ background: "var(--surface-1)", borderTop: "1px solid var(--border)" }}>
      <motion.div
        className="flex overflow-x-auto no-scrollbar"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }}
            className="flex-1 min-w-[160px] flex flex-col items-center justify-center py-12 px-6 text-center"
            style={{ borderRight: i < stats.length - 1 ? "1px solid var(--border)" : "none" }}
          >
            <div
              className="font-serif-display leading-none mb-2"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
                fontWeight: 300,
                color: "var(--foreground)",
                letterSpacing: "-0.02em",
              }}
            >
              <CountUp target={s.value} suffix={s.suffix} />
            </div>
            <div className="label-mono mb-1">{s.label}</div>
            <div style={{ fontSize: "0.72rem", color: "var(--muted-foreground)" }}>{s.sublabel}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
