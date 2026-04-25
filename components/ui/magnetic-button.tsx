"use client";

import { useRef } from "react";
import { motion, useSpring } from "framer-motion";

interface MagneticButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  strength?: number;
}

export function MagneticButton({
  href,
  children,
  className = "",
  style = {},
  strength = 0.38,
}: MagneticButtonProps) {
  const wrapRef = useRef<HTMLDivElement>(null);

  const x = useSpring(0, { stiffness: 240, damping: 18, mass: 0.8 });
  const y = useSpring(0, { stiffness: 240, damping: 18, mass: 0.8 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = wrapRef.current!.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
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
        className={`inline-flex items-center font-semibold ${className}`}
        style={style}
        whileHover={{
          boxShadow:
            "0 0 22px rgba(var(--foreground-rgb),0.45), 0 0 55px rgba(var(--foreground-rgb),0.14), 0 0 100px rgba(var(--foreground-rgb),0.05)",
          borderColor: "rgba(var(--foreground-rgb),0.55)",
          color: "var(--foreground)",
          scale: 1.03,
        }}
        whileTap={{ scale: 0.96 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      >
        {children}
      </motion.a>
    </motion.div>
  );
}
