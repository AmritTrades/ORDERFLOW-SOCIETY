"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/motion";

const bentoCards = [
  {
    id: "main",
    title: "Free Discord Community",
    body: "A free Discord for traders serious about orderflow. No signals. No fluff. Real education, real conversations — forever free.",
    tag: "100% Free",
    cta: { label: "Join Free Discord", href: "https://discord.gg/d4xSrsWAK" },
    large: true,
  },
  {
    id: "ideas",
    title: "Daily Trade Ideas",
    body: "Real-time setups, pre-market analysis, and live orderflow breakdowns on ES and NQ every trading day.",
    large: false,
  },
  {
    id: "edu",
    title: "Educational Resources",
    body: "Recorded lessons covering footprint charts, market profile, delta divergence, and tape reading from zero.",
    large: false,
  },
  {
    id: "active",
    title: "Active Community",
    body: "Ask questions, share charts, get honest feedback. 40+ traders at all levels helping each other grow — 24/7, no gatekeeping.",
    large: false,
  },
  {
    id: "paid",
    title: "Premium Tier",
    body: "Live sessions, priority feedback, exclusive recordings, and direct access. $39/month.",
    tag: "$39 / mo",
    large: false,
    premium: true,
  },
];

export default function Community() {
  return (
    <section id="community" className="py-36 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-16"
        >
          <p className="label-mono mb-4">Community</p>
          <h2
            style={{
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 700,
              color: "#f5f5f5",
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              maxWidth: "28rem",
            }}
          >
            Join the community.<br />
            <span style={{ color: "rgba(255,255,255,0.35)", fontWeight: 300 }}>
              It&apos;s free forever.
            </span>
          </h2>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {/* Large card */}
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.015 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="md:col-span-2 md:row-span-2 relative overflow-hidden flex flex-col justify-between"
            style={{
              borderRadius: "1.25rem",
              border: "1px solid rgba(255,255,255,0.09)",
              background: "rgba(255,255,255,0.03)",
              padding: "2.5rem",
              minHeight: "340px",
            }}
          >
            <div>
              <span
                className="label-mono mb-6 block"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                100% Free · No Credit Card
              </span>
              <h3
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  fontWeight: 700,
                  color: "#f5f5f5",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.15,
                  marginBottom: "1rem",
                }}
              >
                Free Discord Community
              </h3>
              <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, maxWidth: "32rem" }}>
                A free Discord for traders serious about orderflow. No signals. No fluff.
                Real education, real conversations — free, forever.
              </p>
            </div>
            <a
              href="https://discord.gg/d4xSrsWAK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 font-semibold transition-all duration-200 hover:bg-white/90 mt-8 self-start"
              style={{
                background: "#fff",
                color: "#080808",
                borderRadius: "9999px",
                padding: "0.8rem 1.75rem",
                fontSize: "0.875rem",
                letterSpacing: "-0.01em",
              }}
            >
              <svg className="w-4 h-4" style={{ color: "#5865F2" }} viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.62.874-1.282 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
              </svg>
              Join Free Discord — No Sign-up Required
            </a>
          </motion.div>

          {/* Small cards */}
          {[
            { title: "Daily Trade Ideas", body: "Real-time setups, pre-market analysis, and live orderflow breakdowns on ES and NQ every trading day." },
            { title: "Educational Resources", body: "Recorded lessons from zero — footprint charts, market profile, delta divergence, and tape reading." },
            { title: "Active Community", body: "40+ traders at all levels. Ask questions, share charts, get honest feedback. 24/7, no gatekeeping." },
          ].map((card) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              whileHover={{ scale: 1.015 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                borderRadius: "1.25rem",
                border: "1px solid rgba(255,255,255,0.07)",
                background: "rgba(255,255,255,0.02)",
                padding: "1.75rem",
              }}
            >
              <h4 style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#f5f5f5", marginBottom: "0.6rem", letterSpacing: "-0.02em" }}>
                {card.title}
              </h4>
              <p style={{ fontSize: "0.84rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.65 }}>
                {card.body}
              </p>
            </motion.div>
          ))}

          {/* Premium card */}
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.015 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="md:col-span-1"
            style={{
              borderRadius: "1.25rem",
              border: "1px solid rgba(255,255,255,0.18)",
              background: "rgba(255,255,255,0.04)",
              padding: "1.75rem",
            }}
          >
            <div className="flex items-start justify-between mb-3">
              <h4 style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#f5f5f5", letterSpacing: "-0.02em" }}>
                Premium Tier
              </h4>
              <span
                className="label-mono"
                style={{ color: "rgba(255,255,255,0.6)", background: "rgba(255,255,255,0.07)", borderRadius: "9999px", padding: "0.2rem 0.65rem" }}
              >
                $39/mo
              </span>
            </div>
            <p style={{ fontSize: "0.84rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.65 }}>
              Live sessions, priority feedback, exclusive recordings, and direct access.
            </p>
          </motion.div>

        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-6"
          style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.2)", textAlign: "center" }}
        >
          No credit card. No email. Just click and join.
        </motion.p>

      </div>
    </section>
  );
}
