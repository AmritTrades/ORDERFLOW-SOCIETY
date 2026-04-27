"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useIsDark } from "@/lib/use-is-dark";

const MONO = "var(--font-jetbrains),'JetBrains Mono','Fira Code',ui-monospace,monospace";

interface GreenCTAButtonProps {
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  className?: string;
  onClick?: () => void;
}

export function GreenCTAButton({
  href,
  children,
  target,
  rel,
  className = "",
  onClick,
}: GreenCTAButtonProps) {
  const [hovered, setHovered] = useState(false);
  const isDark = useIsDark();

  /*
   * Dark mode:  bright #00FF41 bg + black text + neon glow
   * Light mode: black bg + #00FF41 text — stands out strongly on white page
   */
  const bg       = isDark ? "#00FF41" : "#000000";
  const fg       = isDark ? "#000000" : "#00FF41";
  const glowBase = isDark ? "rgba(0,255,65,0.22)" : "rgba(0,0,0,0.12)";
  const glowHov  = isDark ? "rgba(0,255,65,0.55), 0 0 60px rgba(0,255,65,0.22)" : "rgba(0,0,0,0.28)";
  const scanLine = isDark ? "rgba(0,0,0,0.18)" : "rgba(0,255,65,0.22)";

  return (
    <>
      <style>{`
        @keyframes green-scan {
          0%   { transform: translateY(-100%); opacity: 0; }
          8%   { opacity: 1; }
          92%  { opacity: 1; }
          100% { transform: translateY(400%); opacity: 0; }
        }
        .green-scan-line { animation: green-scan 2.6s linear infinite; }
      `}</style>

      <motion.a
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 420, damping: 26 }}
        className={`relative inline-flex items-center overflow-hidden select-none ${className}`}
        style={{
          background: bg,
          color:      fg,
          fontFamily: MONO,
          fontWeight: 800,
          fontSize:   "0.82rem",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          borderRadius: "9999px",
          padding:      "0.85rem 2rem",
          textDecoration: "none",
          boxShadow: hovered
            ? `0 0 28px ${glowHov}`
            : `0 0 12px ${glowBase}`,
          transition: "box-shadow 0.2s ease",
        }}
      >
        {/* Scanning line */}
        <span
          aria-hidden
          className="green-scan-line absolute inset-x-0 pointer-events-none"
          style={{ height: "2px", background: scanLine, top: 0 }}
        />

        {/* Text — jitters on hover */}
        <motion.span
          className="relative z-10"
          animate={hovered ? { x: [0, -0.5, 1, -1, 0.5, 0] } : { x: 0 }}
          transition={
            hovered
              ? { duration: 0.18, repeat: Infinity, ease: "linear" }
              : { duration: 0.1 }
          }
        >
          {children}
        </motion.span>
      </motion.a>
    </>
  );
}
