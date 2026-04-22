const footerLinks = [
  { label: "Discord",    href: "#community" },
  { label: "Mentorship", href: "#mentorship" },
  { label: "Guarantee",  href: "#guarantee" },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(39,39,42,.7)", padding: "2.5rem 0" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 select-none">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <rect x="2"  y="19" width="4"  height="11" rx="1" fill="#10B981" />
              <rect x="8"  y="13" width="4"  height="17" rx="1" fill="#10B981" />
              <rect x="14" y="7"  width="4"  height="23" rx="1" fill="#F59E0B" />
              <rect x="20" y="11" width="4"  height="19" rx="1" fill="#EF4444" />
              <rect x="26" y="15" width="4"  height="15" rx="1" fill="#EF4444" />
              <polyline
                points="4,17 10,11 16,5 22,9 28,13"
                fill="none"
                stroke="#F59E0B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-heading font-semibold text-[0.82rem] tracking-[0.06em] uppercase">
              <span className="text-zinc-100">Orderflow</span>
              <span className="gradient-text"> Society</span>
            </span>
          </a>

          {/* Nav */}
          <div className="flex items-center gap-7">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-[0.8rem] text-zinc-500 hover:text-zinc-100 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Instagram */}
          <a
            href="https://instagram.com/amrittrades"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 group"
          >
            <div
              className="w-8 h-8 rounded-[0.6rem] flex items-center justify-center transition-colors duration-200"
              style={{ background: "rgba(39,39,42,.8)", border: "1px solid rgba(63,63,70,.6)" }}
            >
              <svg
                className="w-4 h-4 text-zinc-400 group-hover:text-zinc-100 transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </div>
            <span className="font-body text-[0.82rem] text-zinc-400 group-hover:text-zinc-100 transition-colors">
              @amrittrades
            </span>
          </a>

        </div>

        <div
          className="mt-8 pt-6 text-center"
          style={{ borderTop: "1px solid rgba(24,24,27,.8)" }}
        >
          <p className="font-body text-[0.72rem] text-zinc-600">
            © 2025 Orderflow Society. All rights reserved.{" "}
            Trading futures involves substantial risk of loss. Past performance is
            not indicative of future results.
          </p>
        </div>

      </div>
    </footer>
  );
}
