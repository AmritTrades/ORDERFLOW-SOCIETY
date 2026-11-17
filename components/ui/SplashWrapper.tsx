"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, MotionConfig } from "framer-motion";
import SplashScreen from "./SplashScreen";

/*
 * SplashWrapper — the page content is ALWAYS rendered (server-side too),
 * so search engines and AI crawlers (ChatGPT, Perplexity, Google) can read it.
 * The splash is an overlay on top, shown once per browser session and skipped
 * for visitors who ask for reduced motion.
 */
export default function SplashWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    try {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced || sessionStorage.getItem("ofs-splash-seen")) {
        setShowSplash(false);
        return;
      }
      sessionStorage.setItem("ofs-splash-seen", "1");
    } catch {
      /* storage blocked: just show the splash once */
    }
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>
      {children}
    </MotionConfig>
  );
}
