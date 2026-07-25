"use client";

import { motion } from "framer-motion";
import { RulerCarousel, type CarouselItem } from "@/components/ui/ruler-carousel";

const EASE = [0.16, 1, 0.3, 1] as const;
const vp   = { once: true, margin: "-80px" } as const;

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const tradingTools: CarouselItem[] = [
  {
    id: 1,
    title: "ATAS ORDERFLOW",
    badge: "Verified Partner",
    description: "The platform I use daily for footprint, DOM, and heatmap analysis.",
    link: "https://atas.net/pricing/?rs=partners_oft269464",
  },
  {
    id: 2,
    title: "MRKT AI",
    badge: "Macro & Sentiment",
    description: "AI-powered market intelligence engine. Tracks macro releases, capital flows, headlines, and economic data in real-time.",
    link: "https://www.mrktedge.ai/?ref=amritpal",
  },
];

/* ══════════════════════════════════════════════════════════════════ */
export default function TradingStack() {
  return (
    <section
      id="tools"
      className="py-24"
      style={{ background: "var(--background)", borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="mb-10"
        >
          <motion.p variants={fadeUp} className="label-mono mb-4">
            Partner Tools
          </motion.p>
          <motion.h2
            variants={fadeUp}
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "var(--foreground)",
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
            }}
          >
            My Trading Stack
          </motion.h2>
        </motion.div>

        <RulerCarousel originalItems={tradingTools} />

      </div>
    </section>
  );
}
