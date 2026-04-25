"use client";

import { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion, useSpring } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

interface CardData {
  title: string;
  desc: string;
  gradientFrom: string;
  gradientTo: string;
  buttonLabel: string;
  buttonHref: string;
  price?: string;
  priceLabel?: string;
  glowColor?: string;
  isInnerCircle?: boolean;
}

const cards: CardData[] = [
  {
    title: "Free Community",
    desc: "A free Discord for traders serious about orderflow. No signals. No fluff. Real education, real conversations.",
    gradientFrom: "#ffbc00",
    gradientTo: "#ff0058",
    buttonLabel: "Join Free Discord",
    buttonHref: "https://discord.gg/d4xSrsWAK",
  },
  {
    title: "Inner Circle",
    desc: "Live sessions, priority feedback, exclusive recordings, and direct access to Amrit.",
    gradientFrom: "#03a9f4",
    gradientTo: "#ff0058",
    buttonLabel: "Join Inner Circle",
    buttonHref: "https://buy.stripe.com/cNi3cneRvdDscK45Uk9AA00",
    price: "$39 / mo",
    priceLabel: "Recurring Monthly",
    glowColor: "#03a9f4",
    isInnerCircle: true,
  },
];

/* ── Success toast ── */
function SuccessToast({ visible }: { visible: boolean }) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "2rem",
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      <AnimatePresence>
        {visible && (
          <motion.div
            key="toast"
            initial={{ opacity: 0, y: 28, scale: 0.93 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.96 }}
            transition={{ duration: 0.38, ease: EASE }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.65rem",
              padding: "0.8rem 1.5rem",
              borderRadius: "9999px",
              background: "rgba(var(--background-rgb),0.9)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(3,169,244,0.35)",
              boxShadow:
                "0 8px 32px rgba(0,0,0,0.18), 0 0 0 1px rgba(3,169,244,0.1), 0 0 24px rgba(3,169,244,0.12)",
            }}
          >
            {/* Animated check circle */}
            <motion.svg
              width="17" height="17" viewBox="0 0 24 24" fill="none"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3, ease: EASE }}
            >
              <circle cx="12" cy="12" r="10" stroke="#03a9f4" strokeWidth="2" />
              <path d="M8 12l3 3 5-6" stroke="#03a9f4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
            <span
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "var(--foreground)",
                letterSpacing: "-0.01em",
                whiteSpace: "nowrap",
              }}
            >
              Welcome to the Inner Circle — check your email.
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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
  const [toastVisible, setToastVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const triggerToast = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setToastVisible(true);
    timerRef.current = setTimeout(() => setToastVisible(false), 3200);
  };

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

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
                background: card.isInnerCircle
                  ? "rgba(255,255,255,0.1)"
                  : "rgba(255,255,255,0.06)",
                border: card.isInnerCircle
                  ? "1px solid rgba(255,255,255,0.22)"
                  : "1px solid rgba(255,255,255,0.12)",
                boxShadow: card.isInnerCircle
                  ? `0 4px 24px rgba(0,0,0,0.18), 0 0 40px rgba(3,169,244,0.08)`
                  : undefined,
              }}
            >
              <h2 className="text-2xl mb-2">{card.title}</h2>
              <p className="text-lg leading-relaxed mb-3">{card.desc}</p>

              {/* Price block for Inner Circle */}
              {card.price && (
                <div className="mb-4">
                  <span style={{ fontSize: "1.35rem", fontWeight: 700, color: "rgba(255,255,255,0.95)" }}>
                    {card.price}
                  </span>
                  {card.priceLabel && (
                    <p
                      style={{
                        fontSize: "0.68rem",
                        color: "rgba(255,255,255,0.42)",
                        letterSpacing: "0.07em",
                        marginTop: "0.18rem",
                        fontStyle: "italic",
                      }}
                    >
                      {card.priceLabel}
                    </p>
                  )}
                </div>
              )}

              <CardMagneticButton
                href={card.buttonHref}
                label={card.buttonLabel}
                glowColor={card.glowColor}
                onActivate={card.isInnerCircle ? triggerToast : undefined}
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

      <SuccessToast visible={toastVisible} />
    </>
  );
}
