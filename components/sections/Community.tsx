"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";
import SkewCards from "@/components/ui/gradient-card-showcase";

export default function Community() {
  return (
    <section id="community" className="py-36 relative overflow-hidden" style={{ background: "var(--background)", borderTop: "1px solid var(--border)" }}>
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
              color: "var(--foreground)",
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              maxWidth: "28rem",
            }}
          >
            Join the community.<br />
            <span style={{ color: "var(--muted-foreground)", fontWeight: 300 }}>
              Choose your level of edge.
            </span>
          </h2>
        </motion.div>

        <SkewCards />

      </div>
    </section>
  );
}
