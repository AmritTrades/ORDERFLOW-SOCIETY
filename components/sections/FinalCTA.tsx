"use client";

export default function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-14 sm:p-20 text-center">
          {/* Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-24 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 -mr-20 -mb-20 h-64 w-64 rounded-full bg-white/[0.02] blur-3xl pointer-events-none" />
          {/* Top shimmer */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-7" style={{ color: "#F59E0B" }}>
              <span className="w-6 h-px bg-amber-500 block" />
              <span className="text-[0.7rem] uppercase tracking-[0.12em] font-body">Your Move</span>
              <span className="w-6 h-px bg-amber-500 block" />
            </div>

            <h2
              className="font-heading font-bold text-zinc-100 mb-6 leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2.4rem, 8vw, 5rem)" }}
            >
              Stop Losing.<br />
              <span className="gradient-text">Start Reading</span><br />
              the Tape.
            </h2>

            <p className="font-body text-zinc-400 text-[1.05rem] max-w-[30rem] mx-auto mb-12 leading-relaxed">
              The market gives you a signal every single session. Most traders miss
              it. Join Orderflow Society and learn to see what others can&apos;t.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://discord.gg/d4xSrsWAK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full font-heading font-bold text-base text-zinc-950 transition-all duration-200 group hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "#F59E0B",
                  padding: "1.1rem 2.5rem",
                  boxShadow: "0 16px 48px rgba(245,158,11,.3)",
                }}
                onMouseOver={(e) => ((e.currentTarget as HTMLElement).style.background = "#FBBF24")}
                onMouseOut={(e)  => ((e.currentTarget as HTMLElement).style.background = "#F59E0B")}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.62.874-1.282 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                </svg>
                Join Free Discord
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              <a
                href="#mentorship"
                className="inline-flex items-center justify-center rounded-full font-heading font-semibold text-base text-zinc-100 transition-all duration-200 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20"
                style={{ padding: "1.1rem 2.5rem" }}
              >
                Get 1-on-1 Mentorship
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
