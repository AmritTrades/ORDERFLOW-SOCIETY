"use client";

import { motion } from "framer-motion";
import { GenerativeArtScene } from "@/components/ui/anomalous-matter-hero";

interface HeroGeometricProps {
  badge?: string;
  title1?: string;
  title2?: string;
  subtitle?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

function HeroGeometric({
  badge = "Orderflow Society",
  title1 = "Master the",
  title2 = "Order Flow Edge.",
  subtitle = "Stop guessing the tape. Start reading it. Futures trading mentorship for serious traders ready to trade with institutional edge.",
  primaryCTA = { label: "Join Free Discord", href: "https://discord.gg/d4xSrsWAK" },
  secondaryCTA = { label: "View Mentorship", href: "#mentorship" },
}: HeroGeometricProps) {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden flex items-center"
      style={{ background: "#080808" }}
    >
      {/* Orange wireframe sphere — background right */}
      <div className="absolute inset-0 pointer-events-none">
        <GenerativeArtScene />
      </div>

      {/* Dark left scrim so text stays readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to right, rgba(8,8,8,0.96) 0%, rgba(8,8,8,0.75) 50%, rgba(8,8,8,0.1) 100%)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #080808)" }}
      />

      {/* Content — left aligned */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >

          {/* Badge */}
          <motion.div variants={item} className="flex items-center gap-2.5 mb-10">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "rgba(255,255,255,0.6)" }}
            />
            <span className="label-mono" style={{ color: "rgba(255,255,255,0.4)" }}>
              {badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            style={{
              fontSize: "clamp(3.5rem, 9vw, 8.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.045em",
              lineHeight: 0.95,
              color: "#f5f5f5",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{ display: "block", fontWeight: 300, color: "rgba(255,255,255,0.45)" }}
            >
              {title1}
            </span>
            <span style={{ display: "block" }}>{title2}</span>
          </motion.h1>

          {/* Hairline */}
          <motion.div
            variants={item}
            className="w-16 h-px mb-8"
            style={{ background: "rgba(255,255,255,0.15)" }}
          />

          {/* Subtitle */}
          <motion.p
            variants={item}
            style={{
              fontSize: "1.0625rem",
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.75,
              maxWidth: "30rem",
              marginBottom: "2.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            {subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-3 items-start"
          >
            <motion.a
              href={primaryCTA.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="inline-flex items-center gap-2.5 font-semibold"
              style={{
                background: "#fff",
                color: "#080808",
                borderRadius: "9999px",
                padding: "0.9rem 2rem",
                fontSize: "0.9375rem",
                letterSpacing: "-0.01em",
              }}
            >
              <svg className="w-4 h-4" style={{ color: "#5865F2" }} viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.62.874-1.282 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
              </svg>
              {primaryCTA.label}
            </motion.a>

            <motion.a
              href={secondaryCTA.href}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="inline-flex items-center gap-2 font-semibold transition-all duration-200"
              style={{
                border: "1px solid rgba(255,255,255,0.13)",
                color: "rgba(255,255,255,0.5)",
                borderRadius: "9999px",
                padding: "0.9rem 2rem",
                fontSize: "0.9375rem",
                letterSpacing: "-0.01em",
              }}
            >
              {secondaryCTA.label}
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            variants={item}
            className="flex items-center gap-3 mt-14"
          >
            <div className="flex -space-x-2">
              {[
                { char: "A", bg: "#e8e8e8", fg: "#111" },
                { char: "M", bg: "#d0d0d0", fg: "#111" },
                { char: "R", bg: "#b8b8b8", fg: "#111" },
                { char: "+", bg: "#2a2a2a", fg: "#777" },
              ].map(({ char, bg, fg }) => (
                <div
                  key={char}
                  className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-[0.6rem] font-bold"
                  style={{ background: bg, color: fg, borderColor: "#080808" }}
                >
                  {char}
                </div>
              ))}
            </div>
            <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.28)", letterSpacing: "-0.01em" }}>
              Joined by{" "}
              <span style={{ color: "rgba(255,255,255,0.55)" }}>40+ traders</span>{" "}
              already building their edge
            </span>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="label-mono" style={{ color: "rgba(255,255,255,0.2)" }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-3.5 h-3.5" style={{ color: "rgba(255,255,255,0.2)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>

    </div>
  );
}

export { HeroGeometric };
