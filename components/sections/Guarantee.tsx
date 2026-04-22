export default function Guarantee() {
  return (
    <section id="guarantee" className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
          {/* Glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 h-80 w-80 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-white/[0.02] blur-3xl pointer-events-none" />
          {/* Top shimmer */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
          {/* Bottom shimmer */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 p-10 sm:p-14">

            {/* Shield */}
            <div className="flex-shrink-0">
              <div
                className="w-24 h-24 rounded-2xl flex items-center justify-center"
                style={{
                  background: "rgba(245,158,11,.07)",
                  border: "1px solid rgba(245,158,11,.22)",
                  boxShadow: "0 0 40px rgba(245,158,11,0.12), 0 0 80px rgba(245,158,11,0.04)",
                }}
              >
                <svg
                  className="w-12 h-12"
                  style={{ color: "#F59E0B" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
            </div>

            {/* Text */}
            <div>
              <div className="flex items-center gap-2 mb-3" style={{ color: "#F59E0B" }}>
                <span className="w-4 h-px bg-amber-500 block" />
                <span className="text-[0.7rem] uppercase tracking-[0.12em] font-body">
                  Risk-Free Investment
                </span>
              </div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-zinc-100 mb-4">
                100-Day{" "}
                <span className="gradient-text">Guarantee</span>
              </h2>
              <p className="font-body text-zinc-400 leading-relaxed mb-3">
                Do the work. If you&apos;re not profitable within 100 days, I will{" "}
                <span className="text-zinc-100 font-medium">
                  personally teach you for free until you are.
                </span>{" "}
                No extra cost. No excuses.
              </p>
              <p className="font-body text-zinc-600 text-[0.85rem] leading-relaxed">
                The guarantee exists because the system works — if you do.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
