"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;
const vp   = { once: true, margin: "-80px" } as const;

const imageCards = [
  {
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1280&q=80",
    title: "Read the Market",
    description:
      "Learn to read delta, footprint and tape — the way institutions actually trade.",
  },
  {
    image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=1280&q=80",
    title: "Your fastest path to consistency.",
    description:
      "Private, personalised coaching built around your charts and your specific edge.",
  },
];

export default function ImageCardsSection() {
  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
      style={{ background: "var(--surface-1)", borderTop: "1px solid var(--border)" }}
    >
      {/* Radial center lift */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 85% 70% at 50% 50%, var(--surface-2) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {imageCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.7, delay: i * 0.14, ease: EASE }}
              className="relative overflow-hidden"
              style={{
                minHeight: "500px",
                borderRadius: "1.25rem",
                backgroundImage: `url(${card.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark overlay — text on images is intentionally white */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.15) 100%)",
                  borderRadius: "1.25rem",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0" style={{ padding: "2.25rem" }}>
                <h3
                  style={{
                    fontFamily:
                      "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif",
                    fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                    fontWeight: 600,
                    color: "#ffffff",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.15,
                    marginBottom: "0.65rem",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: 1.65,
                    maxWidth: "28rem",
                  }}
                >
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
