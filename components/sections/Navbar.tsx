"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { label: "About",      href: "#about" },
  { label: "Community",  href: "#community" },
  { label: "Mentorship", href: "#mentorship" },
  { label: "Guarantee",  href: "#guarantee" },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop]     = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setAtTop(y < 40);
      setVisible(y < lastY.current || y < 80);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      animate={{ y: visible ? 0 : -80, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 inset-x-0 z-50"
      style={{
        background: atTop ? "rgba(8,8,8,0)" : "rgba(8,8,8,0.88)",
        backdropFilter: atTop ? "none" : "blur(20px)",
        WebkitBackdropFilter: atTop ? "none" : "blur(20px)",
        borderBottom: atTop ? "1px solid transparent" : "1px solid rgba(255,255,255,0.07)",
        transition: "background 0.4s ease, border-color 0.4s ease",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 select-none group">
            <Logo />
            <span
              className="font-semibold tracking-tight"
              style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.9)", letterSpacing: "-0.01em" }}
            >
              Orderflow Society
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="transition-colors duration-200"
                style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", letterSpacing: "-0.01em" }}
                onMouseEnter={e => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.9)")}
                onMouseLeave={e => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.45)")}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#mentorship"
              className="hidden md:inline-flex items-center rounded-full font-semibold transition-all duration-200 hover:bg-white/90"
              style={{
                fontSize: "0.8125rem",
                background: "#fff",
                color: "#080808",
                padding: "0.5rem 1.25rem",
                letterSpacing: "-0.01em",
              }}
            >
              Book 1-on-1
            </a>

            <button
              onClick={() => setOpen(v => !v)}
              className="md:hidden p-2 transition-colors"
              style={{ color: "rgba(255,255,255,0.6)" }}
              aria-label="Toggle menu"
            >
              {open ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)", background: "rgba(8,8,8,0.97)" }}
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="py-2.5 transition-colors duration-200"
                  style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.55)", letterSpacing: "-0.01em" }}
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="#mentorship"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center rounded-full font-semibold"
                style={{ fontSize: "0.875rem", background: "#fff", color: "#080808", padding: "0.75rem 1.5rem" }}
              >
                Book 1-on-1
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function Logo() {
  return (
    <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
      <rect x="2"  y="19" width="4" height="11" rx="1" fill="rgba(255,255,255,0.5)" />
      <rect x="8"  y="13" width="4" height="17" rx="1" fill="rgba(255,255,255,0.65)" />
      <rect x="14" y="7"  width="4" height="23" rx="1" fill="rgba(255,255,255,0.9)" />
      <rect x="20" y="11" width="4" height="19" rx="1" fill="rgba(255,255,255,0.55)" />
      <rect x="26" y="15" width="4" height="15" rx="1" fill="rgba(255,255,255,0.35)" />
      <polyline
        points="4,17 10,11 16,5 22,9 28,13"
        fill="none"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
