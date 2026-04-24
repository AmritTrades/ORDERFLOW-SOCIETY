"use client";

import { motion } from "framer-motion";
import { fadeUp, slideLeft, slideRight, stagger, viewport } from "@/lib/motion";

const forYou = [
  "You're serious about futures and ready to put in genuine work every day",
  "You're tired of lagging indicators and want to understand what's actually moving price",
  "You can commit 1–2 hours a day to learning and reviewing your trades",
  "You follow a structured system and trust the process even during drawdowns",
  "You want honest, direct feedback — even when it's uncomfortable to hear",
];

const notForYou = [
  "You want buy/sell signals or someone to trade for you",
  "You expect to be profitable in a week without putting in the learning",
  "You're trading money you cannot afford to lose",
  "You're not open to abandoning what's been losing you money",
  "You're looking for shortcuts — there aren't any in this craft",
];

const itemVariant = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function Comparison() {
  return (
    <section className="py-36 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-16"
        >
          <p className="label-mono mb-4">Is this right for you?</p>
          <h2
            style={{
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 700,
              color: "#f5f5f5",
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
            }}
          >
            Be honest with yourself<br />
            <span style={{ color: "rgba(255,255,255,0.3)", fontWeight: 300 }}>before you apply.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* For you */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="flex items-center gap-3 mb-8">
              <div
                className="flex items-center justify-center"
                style={{
                  width: "1.75rem",
                  height: "1.75rem",
                  borderRadius: "9999px",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 style={{ fontSize: "0.9375rem", fontWeight: 600, color: "rgba(255,255,255,0.8)", letterSpacing: "-0.02em" }}>
                This <span style={{ color: "#f5f5f5" }}>IS</span> for you if…
              </h3>
            </div>

            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="flex flex-col"
            >
              {forYou.map((item, i) => (
                <motion.li
                  key={item}
                  variants={itemVariant}
                  className="flex items-start gap-4 py-4"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: "2px" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.65 }}>
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Not for you */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="flex items-center gap-3 mb-8">
              <div
                className="flex items-center justify-center"
                style={{
                  width: "1.75rem",
                  height: "1.75rem",
                  borderRadius: "9999px",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 style={{ fontSize: "0.9375rem", fontWeight: 600, color: "rgba(255,255,255,0.45)", letterSpacing: "-0.02em" }}>
                This is <span style={{ color: "rgba(255,255,255,0.25)" }}>NOT</span> for you if…
              </h3>
            </div>

            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="flex flex-col"
            >
              {notForYou.map((item) => (
                <motion.li
                  key={item}
                  variants={itemVariant}
                  className="flex items-start gap-4 py-4"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: "2px" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.3)", lineHeight: 1.65 }}>
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
