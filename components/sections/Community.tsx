"use client";

const benefits = [
  {
    color: "emerald" as const,
    icon: (
      <svg className="w-6 h-6" style={{ color: "#10B981" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Daily Trade Ideas",
    body: "Real-time setups, pre-market analysis, and live orderflow breakdowns on ES and NQ every trading day — so you always know what to watch.",
  },
  {
    color: "amber" as const,
    icon: (
      <svg className="w-6 h-6" style={{ color: "#F59E0B" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Educational Resources",
    body: "Recorded lessons covering footprint charts, market profile, delta divergence, and tape reading from zero — structured so beginners can follow and veterans can level up.",
  },
  {
    color: "amber" as const,
    icon: (
      <svg className="w-6 h-6" style={{ color: "#F59E0B" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    title: "Active Community",
    body: "Ask questions, share charts, get honest feedback. 40+ traders at all levels helping each other grow — 24/7, no gatekeeping.",
  },
];

const iconStyles = {
  emerald: { bg: "rgba(16,185,129,.08)", border: "rgba(16,185,129,.2)" },
  amber:   { bg: "rgba(245,158,11,.08)", border: "rgba(245,158,11,.2)" },
};

export default function Community() {
  return (
    <section id="community" className="py-28 relative overflow-hidden">
      <div
        className="orb"
        style={{ width: 320, height: 320, background: "#10B981", bottom: "-5rem", left: "-5rem" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4" style={{ color: "#10B981" }}>
            <span className="w-6 h-px block" style={{ background: "#10B981" }} />
            <span className="text-[0.7rem] uppercase tracking-[0.12em] font-body">100% Free</span>
            <span className="w-6 h-px block" style={{ background: "#10B981" }} />
          </div>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-zinc-100 mb-4">
            Join the{" "}
            <span className="gradient-text-green">Community</span>
          </h2>
          <p className="font-body text-zinc-400 text-[1.05rem] max-w-[32rem] mx-auto">
            A free Discord for traders serious about orderflow. No signals. No fluff.
            Real education, real conversations.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="card-glass card-hover rounded-2xl p-7"
              style={{ borderColor: b.color === "emerald" ? "rgba(16,185,129,.12)" : "rgba(245,158,11,.10)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={iconStyles[b.color]}
              >
                {b.icon}
              </div>
              <h3 className="font-heading font-semibold text-zinc-100 text-base mb-3">
                {b.title}
              </h3>
              <p className="font-body text-zinc-400 text-[0.85rem] leading-relaxed">
                {b.body}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 rounded-xl px-9 py-4 transition-all duration-200 group emerald-glow font-heading font-semibold text-[0.95rem] text-zinc-100"
            style={{
              background: "rgba(24,24,27,.9)",
              border: "1px solid rgba(16,185,129,.25)",
            }}
            onMouseOver={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor = "rgba(16,185,129,.5)")
            }
            onMouseOut={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor = "rgba(16,185,129,.25)")
            }
          >
            <svg className="w-5 h-5" style={{ color: "#10B981" }} viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.62.874-1.282 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
            </svg>
            Join Free Discord — No Sign-up Required
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="font-body text-[0.75rem] text-zinc-600 mt-3">
            No credit card. No email. Just click and join.
          </p>
        </div>

      </div>
    </section>
  );
}
