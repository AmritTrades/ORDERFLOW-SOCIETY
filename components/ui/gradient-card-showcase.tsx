"use client";

import { useRef } from "react";
import { motion, useSpring } from "framer-motion";

interface CardData {
  title: string;
  desc: string;
  gradientFrom: string;
  gradientTo: string;
  buttonLabel: string;
  buttonHref: string;
  glowColor?: string;
}

const cards: CardData[] = [
  {
    title: "Free Community",
    desc: "A free Discord for traders serious about orderflow. No signals. No fluff. Real education, real conversations.",
    gradientFrom: "#ffbc00",
    gradientTo: "#ff0058",
    buttonLabel: "Join Free Discord",
    buttonHref: "https://discord.gg/bZ2hVCrCMw",
  },
];

/* ── Magnetic card button ── */
function CardMagneticButton({
  href,
  label,
  glowColor,
  onActivate,
}: {
  href: string;
  label: string;
  glowColor?: string;
  onActivate?: () => void;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 240, damping: 18, mass: 0.8 });
  const y = useSpring(0, { stiffness: 240, damping: 18, mass: 0.8 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = wrapRef.current!.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.38);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.38);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={wrapRef}
      style={{ x, y, display: "inline-flex" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onActivate}
        whileHover={
          glowColor
            ? {
                background: "rgba(255,255,255,1)",
                color: "#000000",
                boxShadow: `0 0 22px ${glowColor}88, 0 0 50px ${glowColor}44`,
              }
            : { background: "rgba(255,255,255,1)", color: "#000000" }
        }
        whileTap={{ scale: 0.96 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        style={{
          display: "inline-block",
          fontSize: "0.875rem",
          fontWeight: 700,
          color: "rgba(255,255,255,0.9)",
          background: "transparent",
          border: "1px solid rgba(255,255,255,0.4)",
          borderRadius: "0.375rem",
          padding: "0.5rem 0.875rem",
          cursor: "pointer",
          letterSpacing: "-0.01em",
          textDecoration: "none",
        }}
      >
        {label}
      </motion.a>
    </motion.div>
  );
}

export default function SkewCards() {
  return (
    <>
      <div className="flex justify-center items-center flex-wrap py-10">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="group relative w-[320px] h-[400px] m-[40px_30px] flex items-center"
          >
            {/* Solid gradient panel */}
            <motion.span
              animate={{ opacity: [0.7, 0.88, 0.7] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-[50px] w-1/2 h-full rounded-lg transform skew-x-[15deg] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[20px] group-hover:w-[calc(100%-90px)]"
              style={{ background: `linear-gradient(315deg, ${card.gradientFrom}, ${card.gradientTo})` }}
            />
            {/* Blurred glow panel */}
            <motion.span
              animate={{ opacity: [0.7, 0.88, 0.7] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-0 left-[50px] w-1/2 h-full rounded-lg transform skew-x-[15deg] blur-[30px] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[20px] group-hover:w-[calc(100%-90px)]"
              style={{ background: `linear-gradient(315deg, ${card.gradientFrom}, ${card.gradientTo})` }}
            />

            {/* Animated corner blurs */}
            <span className="pointer-events-none absolute inset-0 z-10">
              <span className="absolute top-0 left-0 w-0 h-0 rounded-lg opacity-0 bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-100 animate-blob group-hover:top-[-50px] group-hover:left-[50px] group-hover:w-[100px] group-hover:h-[100px] group-hover:opacity-100" />
              <span className="absolute bottom-0 right-0 w-0 h-0 rounded-lg opacity-0 bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-500 animate-blob animation-delay-1000 group-hover:bottom-[-50px] group-hover:right-[50px] group-hover:w-[100px] group-hover:h-[100px] group-hover:opacity-100" />
            </span>

            {/* Glass content card */}
            <div
              className="relative z-20 w-full left-0 p-[20px_40px] backdrop-blur-[32px] shadow-lg rounded-lg text-white transition-all duration-500 group-hover:left-[-25px] group-hover:p-[60px_40px]"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <h2 className="text-2xl mb-2">{card.title}</h2>
              <p className="text-lg leading-relaxed mb-3">{card.desc}</p>

              <CardMagneticButton
                href={card.buttonHref}
                label={card.buttonLabel}
                glowColor={card.glowColor}
              />
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translateY(10px); }
          50% { transform: translate(-10px); }
        }
        .animate-blob { animation: blob 2s ease-in-out infinite; }
        .animation-delay-1000 { animation-delay: -1s; }
      `}</style>
    </>
  );
}
