"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SplashScreen from "./SplashScreen";

/*
 * SplashWrapper — client shell that owns the splash state.
 *
 * Strategy:
 *   1. While !done: render only the SplashScreen (children are NOT mounted).
 *      This means the hero's initial/animate animations haven't started yet.
 *   2. When done fires (at 1.4 s): children mount fresh + AnimatePresence
 *      triggers the SplashScreen's exit (slide-up curtain).
 *   3. Children enter with a short opacity fade (0.25 s) so they don't
 *      pop in hard; the hero's own stagger-delays then play on top.
 *
 * Result: the rising splash literally reveals stagger-animating hero
 * elements underneath — no animation state is "used up" before reveal.
 */
export default function SplashWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [done, setDone] = useState(false);

  return (
    <>
      {/* AnimatePresence watches for SplashScreen removal */}
      <AnimatePresence>
        {!done && (
          <SplashScreen onComplete={() => setDone(true)} />
        )}
      </AnimatePresence>

      {/* Page content — only mounts once the splash fires onComplete */}
      {done && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}
