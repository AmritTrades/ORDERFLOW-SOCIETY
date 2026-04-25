"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeSwitch } from "@/components/ui/theme-switch";
import { AnimatedLogo } from "@/components/ui/animated-logo";

const links = [
  { label: "Community",  href: "#community" },
  { label: "Mentorship", href: "#mentorship" },
  { label: "Guarantee",  href: "#guarantee" },
];

/* ── Border-beam CTA button ── */
function BorderBeamButton({ href, children, className = "" }: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative inline-flex ${className}`}
      style={{ padding: "1px", borderRadius: "9999px" }}
    >
      <style>{`
        @keyframes nav-shimmer {
          0%, 62%  { transform: translateX(-160%) skewX(-15deg); opacity: 0; }
          66%      { opacity: 1; }
          96%      { opacity: 1; }
          100%     { transform: translateX(160%) skewX(-15deg); opacity: 0; }
        }
        .nav-shimmer { animation: nav-shimmer 6s ease-in-out infinite; }
      `}</style>

      {/* Spinning conic gradient — visible only through the 1px padding gap */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        style={{
          borderRadius: "9999px",
          background:
            "conic-gradient(from 0deg, transparent 72%, #065f46 83%, #34d399 87%, #065f46 93%, transparent 100%)",
        }}
      />
      {/* Solid fill covers the center — only the 1px edge shows as the beam */}
      <div
        className="absolute inset-[1px]"
        style={{ borderRadius: "9999px", background: "var(--foreground)" }}
      />
      {/* Clickable link — overflow-hidden clips shimmer to pill shape */}
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="relative z-10 overflow-hidden inline-flex items-center rounded-full font-semibold transition-opacity duration-200 hover:opacity-75"
        style={{
          fontSize: "0.8125rem",
          color: "var(--background)",
          padding: "0.5rem 1.25rem",
          letterSpacing: "-0.01em",
        }}
      >
        {/* Shimmer sweep */}
        <span
          aria-hidden
          className="nav-shimmer absolute inset-y-0 w-1/3 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.22) 50%, transparent 100%)",
          }}
        />
        <span className="relative z-10">{children}</span>
      </a>
    </div>
  );
}

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
        background: atTop ? "transparent" : "var(--nav-bg)",
        backdropFilter: atTop ? "none" : "blur(20px)",
        WebkitBackdropFilter: atTop ? "none" : "blur(20px)",
        borderBottom: atTop ? "1px solid transparent" : "1px solid var(--nav-border)",
        transition: "background 0.4s ease, border-color 0.4s ease",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <AnimatedLogo />

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="transition-colors duration-200"
                style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", letterSpacing: "-0.01em" }}
                onMouseEnter={e => ((e.target as HTMLElement).style.color = "var(--foreground)")}
                onMouseLeave={e => ((e.target as HTMLElement).style.color = "var(--muted-foreground)")}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <ThemeSwitch className="hidden md:flex" />
            <BorderBeamButton href="#mentorship" className="hidden md:inline-flex">
              Apply Now
            </BorderBeamButton>

            <button
              onClick={() => setOpen(v => !v)}
              className="md:hidden p-2 transition-colors"
              style={{ color: "var(--muted-foreground)" }}
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
            style={{ borderTop: "1px solid var(--nav-border)", background: "var(--nav-bg)" }}
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  onClick={() => { if (!l.href.startsWith("http")) setOpen(false); }}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="py-2.5 transition-colors duration-200"
                  style={{ fontSize: "0.9375rem", color: "var(--muted-foreground)", letterSpacing: "-0.01em" }}
                >
                  {l.label}
                </motion.a>
              ))}
              <div className="flex items-center gap-3 mt-2">
                <ThemeSwitch />
                <span style={{ fontSize: "0.75rem", color: "var(--muted-foreground)" }}>Toggle theme</span>
              </div>
              <a
                href="#mentorship"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center rounded-full font-semibold"
                style={{ fontSize: "0.875rem", background: "var(--foreground)", color: "var(--background)", padding: "0.75rem 1.5rem" }}
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

