const chips = [
  "Footprint Charts",
  "Market Profile",
  "Volume Profile",
  "Delta Divergence",
  "ES / NQ Futures",
  "Tape Reading",
];

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Copy */}
          <div>
            <div className="flex items-center gap-2 mb-4" style={{ color: "#F59E0B" }}>
              <span className="w-6 h-px bg-amber-500 block" />
              <span className="text-[0.7rem] uppercase tracking-[0.12em] font-body">
                About the Mentor
              </span>
            </div>

            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-zinc-100 leading-tight mb-6">
              From Retail Trader<br />
              to{" "}
              <span className="gradient-text">Orderflow Reader</span>
            </h2>

            <p className="font-body text-zinc-400 leading-relaxed mb-5">
              I&apos;m{" "}
              <span className="text-zinc-100 font-medium">Amrit</span> — a
              full-time futures trader specialising in orderflow analysis,
              footprint charts, and market microstructure. After years of losing
              money chasing lagging indicators, I discovered what institutions
              actually do to move price.
            </p>
            <p className="font-body text-zinc-400 leading-relaxed mb-8">
              Now I teach serious traders how to read the tape — understanding
              aggressive buyers and sellers, identifying iceberg orders, absorbing
              imbalances, and positioning with the smart money instead of against
              it.
            </p>

            <div className="flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-[0.7rem] text-zinc-300 transition-colors hover:border-amber-500/30 hover:text-white"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* YouTube placeholder */}
          <div>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl" style={{ aspectRatio: "16/9" }}>
              <div className="absolute top-0 right-0 h-48 w-48 -mr-12 -mt-12 rounded-full bg-white/[0.03] blur-3xl pointer-events-none" />

              {/* Faint chart */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg viewBox="0 0 640 360" style={{ width: "100%", height: "100%" }} preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <linearGradient id="chartfill" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#F59E0B" stopOpacity={0.5} />
                      <stop offset="100%" stopColor="#F59E0B" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <polyline
                    points="0,320 80,280 160,300 240,210 320,230 400,150 480,170 560,90 640,110"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <polygon
                    points="0,320 80,280 160,300 240,210 320,230 400,150 480,170 560,90 640,110 640,360 0,360"
                    fill="url(#chartfill)"
                  />
                </svg>
              </div>

              {/* Play button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div
                  className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer"
                  style={{ boxShadow: "0 0 32px rgba(245,158,11,0.5)" }}
                >
                  <svg className="w-6 h-6 text-zinc-950 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="font-heading font-semibold text-sm text-zinc-100">
                    How I Read Order Flow — Full Breakdown
                  </p>
                  <p className="font-body text-xs text-zinc-500 mt-1">
                    YouTube · @amrittrades
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
