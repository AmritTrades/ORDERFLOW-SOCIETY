"use client";

import { useRef } from "react";
import { motion, useSpring } from "framer-motion";

const cards = [
  {
    title: 'Free Community',
    desc: 'A free Discord for traders serious about orderflow. No signals. No fluff. Real education, real conversations — free, forever.',
    gradientFrom: '#ffbc00',
    gradientTo: '#ff0058',
    buttonLabel: 'Join Free Discord',
    buttonHref: 'https://discord.gg/d4xSrsWAK',
  },
  {
    title: 'Inner Circle',
    desc: 'Live sessions, priority feedback, exclusive recordings, and direct access to Amrit. $39/month.',
    gradientFrom: '#03a9f4',
    gradientTo: '#ff0058',
    buttonLabel: 'Join Inner Circle',
    buttonHref: '#inner-circle',
  },
  {
    title: '1-on-1 Mentorship',
    desc: 'Direct access to Amrit. Your setups reviewed, your mistakes addressed, your progress tracked.',
    gradientFrom: '#4dff03',
    gradientTo: '#00d0ff',
    buttonLabel: 'Book a Session',
    buttonHref: '#mentorship',
  },
];

function CardMagneticButton({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external: boolean;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 240, damping: 18, mass: 0.8 });
  const y = useSpring(0, { stiffness: 240, damping: 18, mass: 0.8 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = wrapRef.current!.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.38);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.38);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={wrapRef}
      style={{ x, y, display: "inline-flex" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        whileHover={{ background: "rgba(255,255,255,1)", color: "#000000" }}
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
        {cards.map(({ title, desc, gradientFrom, gradientTo, buttonLabel, buttonHref }, idx) => (
          <div
            key={idx}
            className="group relative w-[320px] h-[400px] m-[40px_30px] flex items-center"
          >
            {/* Solid gradient panel — 30% reduced opacity, slow pulse */}
            <motion.span
              animate={{ opacity: [0.7, 0.88, 0.7] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-[50px] w-1/2 h-full rounded-lg transform skew-x-[15deg] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[20px] group-hover:w-[calc(100%-90px)]"
              style={{ background: `linear-gradient(315deg, ${gradientFrom}, ${gradientTo})` }}
            />
            {/* Blurred glow panel — offset pulse phase */}
            <motion.span
              animate={{ opacity: [0.7, 0.88, 0.7] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-0 left-[50px] w-1/2 h-full rounded-lg transform skew-x-[15deg] blur-[30px] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[20px] group-hover:w-[calc(100%-90px)]"
              style={{ background: `linear-gradient(315deg, ${gradientFrom}, ${gradientTo})` }}
            />

            {/* Animated corner blurs */}
            <span className="pointer-events-none absolute inset-0 z-10">
              <span className="absolute top-0 left-0 w-0 h-0 rounded-lg opacity-0 bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-100 animate-blob group-hover:top-[-50px] group-hover:left-[50px] group-hover:w-[100px] group-hover:h-[100px] group-hover:opacity-100" />
              <span className="absolute bottom-0 right-0 w-0 h-0 rounded-lg opacity-0 bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-500 animate-blob animation-delay-1000 group-hover:bottom-[-50px] group-hover:right-[50px] group-hover:w-[100px] group-hover:h-[100px] group-hover:opacity-100" />
            </span>

            {/* Glass content card — increased blur, 1px border at 0.1 opacity */}
            <div
              className="relative z-20 w-full left-0 p-[20px_40px] backdrop-blur-[28px] shadow-lg rounded-lg text-white transition-all duration-500 group-hover:left-[-25px] group-hover:p-[60px_40px]"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <h2 className="text-2xl mb-2">{title}</h2>
              <p className="text-lg leading-relaxed mb-4">{desc}</p>
              <CardMagneticButton
                href={buttonHref}
                label={buttonLabel}
                external={buttonHref.startsWith("http")}
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
