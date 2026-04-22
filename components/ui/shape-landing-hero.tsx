"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { GenerativeArtScene } from "@/components/ui/anomalous-matter-hero";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate: rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

interface HeroGeometricProps {
  badge?: string;
  title1?: string;
  title2?: string;
  subtitle?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

function HeroGeometric({
  badge = "Orderflow Society",
  title1 = "Master the",
  title2 = "Order Flow Edge.",
  subtitle = "Stop guessing the tape. Start reading it. Futures trading mentorship for serious traders ready to trade with institutional edge.",
  primaryCTA = { label: "Join Free Discord", href: "#community" },
  secondaryCTA = { label: "View Mentorship", href: "#mentorship" },
}: HeroGeometricProps) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#09090B]">
      {/* 3D generative art background */}
      <GenerativeArtScene />

      {/* Ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.05] via-transparent to-emerald-500/[0.05] blur-3xl" />

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-amber-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-emerald-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-amber-600/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />
        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-400/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />
        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-emerald-400/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-20">
        {/* Dark scrim so text stays readable over the 3D scene */}
        <div className="absolute inset-0 -z-10 bg-[#09090B]/55 rounded-3xl blur-2xl scale-110 pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
          >
            <Circle className="h-2 w-2 fill-emerald-500/80 text-emerald-500/80" />
            <span className="text-sm text-white/60 tracking-wide font-light font-body">
              {badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight font-heading">
              <span className="text-white drop-shadow-lg">
                {title1}
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-white to-emerald-300 drop-shadow-lg">
                {title2}
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-10 md:mb-12 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4 font-body">
              {subtitle}
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={primaryCTA.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm transition-all duration-200 shadow-[0_12px_32px_rgba(245,158,11,0.28)] font-heading tracking-wide group"
              >
                <DiscordIcon />
                {primaryCTA.label}
                <ArrowRight />
              </a>
              <a
                href={secondaryCTA.href}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 bg-transparent hover:bg-white/[0.05] border border-white/[0.12] hover:border-amber-500/30 text-white/70 hover:text-white font-semibold text-sm transition-all duration-200 font-heading tracking-wide"
              >
                {secondaryCTA.label}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Social proof avatars */}
          <motion.div
            custom={4}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center gap-4 mt-12"
          >
            <div className="flex -space-x-2.5">
              {[
                { bg: "#F59E0B", text: "#09090B", char: "A" },
                { bg: "#10B981", text: "#09090B", char: "M" },
                { bg: "#3B82F6", text: "#fff",    char: "R" },
                { bg: "#8B5CF6", text: "#fff",    char: "+" },
              ].map(({ bg, text, char }) => (
                <div
                  key={char}
                  className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold font-heading"
                  style={{ background: bg, borderColor: "#09090B", color: text }}
                >
                  {char}
                </div>
              ))}
            </div>
            <p className="text-sm text-white/30 font-body">
              Joined by{" "}
              <span className="text-white/60 font-medium">40+ traders</span>{" "}
              already building their edge
            </p>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-[#09090B]/80 pointer-events-none" />

      {/* Scroll indicator */}
      <div className="scroll-indicator absolute bottom-8 left-1/2 flex flex-col items-center gap-1.5">
        <span className="text-[0.62rem] text-zinc-600 uppercase tracking-widest font-body">
          Scroll
        </span>
        <svg className="w-3.5 h-3.5 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}

function DiscordIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.62.874-1.282 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

export { HeroGeometric, ElegantShape };
