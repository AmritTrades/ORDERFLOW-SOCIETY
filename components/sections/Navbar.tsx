"use client";

import { useState, useEffect } from "react";

const navLinks = [
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

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-zinc-400 hover:text-white text-[0.8rem] font-body transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#community"
              className="hidden md:inline-flex items-center gap-2 pulse-cta bg-amber-500 hover:bg-amber-400 text-zinc-950 rounded-lg px-4 py-2 font-heading font-bold text-[0.8rem] transition-colors duration-200"
            >
              <DiscordIcon />
              Join Discord
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
            {navLinks.map((link) => (
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
                href="#community"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 rounded-xl px-5 py-3 font-heading font-bold text-[0.85rem] transition-colors"
              >
                <DiscordIcon />
                Join Discord
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

function DiscordIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.62.874-1.282 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
    </svg>
  );
}
