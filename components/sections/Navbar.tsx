"use client";

import { useState, useEffect } from "react";
import GradientNavMenu from "@/components/ui/gradient-menu";

const mobileLinks = [
  { label: "About",      href: "#about" },
  { label: "Community",  href: "#community" },
  { label: "Mentorship", href: "#mentorship" },
  { label: "Guarantee",  href: "#guarantee" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: "rgba(9,9,11,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled
          ? "1px solid rgba(245,158,11,0.2)"
          : "1px solid rgba(245,158,11,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 select-none">
            <OrderflowLogo />
            <span className="font-heading font-bold text-[0.82rem] tracking-[0.06em] uppercase">
              <span className="text-zinc-100">Orderflow</span>
              <span className="gradient-text"> Society</span>
            </span>
          </a>

          {/* Desktop gradient pill menu */}
          <div className="hidden md:flex items-center">
            <GradientNavMenu />
          </div>

          {/* Desktop CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#mentorship"
              className="hidden md:inline-flex items-center gap-2 pulse-cta bg-amber-500 hover:bg-amber-400 text-zinc-950 rounded-lg px-4 py-2 font-heading font-bold text-[0.8rem] transition-colors duration-200"
            >
              Book 1-on-1
            </a>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden text-zinc-400 hover:text-white p-2 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-zinc-800/70 bg-zinc-950/95">
          <div className="px-5 py-4 space-y-1">
            {mobileLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2.5 text-zinc-400 hover:text-white text-sm rounded-lg hover:bg-zinc-800/60 transition-all font-body"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 pb-1">
              <a
                href="#mentorship"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 rounded-xl px-5 py-3 font-heading font-bold text-[0.85rem] transition-colors"
              >
                Book 1-on-1
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function OrderflowLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="2"  y="19" width="4" height="11" rx="1" fill="#10B981" />
      <rect x="8"  y="13" width="4" height="17" rx="1" fill="#10B981" />
      <rect x="14" y="7"  width="4" height="23" rx="1" fill="#F59E0B" />
      <rect x="20" y="11" width="4" height="19" rx="1" fill="#EF4444" />
      <rect x="26" y="15" width="4" height="15" rx="1" fill="#EF4444" />
      <polyline
        points="4,17 10,11 16,5 22,9 28,13"
        fill="none"
        stroke="#F59E0B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {[
        [4,  17],
        [10, 11],
        [16, 5],
        [22, 9],
        [28, 13],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.5" fill="#F59E0B" />
      ))}
    </svg>
  );
}
