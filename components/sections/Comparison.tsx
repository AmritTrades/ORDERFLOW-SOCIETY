const forYou = [
  "You're serious about futures and ready to put in genuine work every day",
  "You're tired of lagging indicators and want to understand what's actually moving price",
  "You can commit 1–2 hours a day to learning and reviewing your trades",
  "You follow a structured system and trust the process even during drawdowns",
  "You want honest, direct feedback — even when it's uncomfortable to hear",
];

const notForYou = [
  "You want buy/sell signals or someone to trade for you",
  "You expect to be profitable in a week without putting in the learning",
  "You're trading money you cannot afford to lose",
  "You're not open to abandoning what's been losing you money",
  "You're looking for shortcuts — there aren't any in this craft",
];

export default function Comparison() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-zinc-100 mb-3">
            Is This{" "}
            <span className="gradient-text">Right for You?</span>
          </h2>
          <p className="font-body text-zinc-400 text-base">
            Be honest with yourself before you apply.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {/* FOR YOU */}
          <div
            className="rounded-2xl p-8"
            style={{
              background: "rgba(16,185,129,.04)",
              border: "1px solid rgba(16,185,129,.18)",
            }}
          >
            <div className="flex items-center gap-3.5 mb-7">
              <div
                className="w-10 h-10 rounded-[0.75rem] flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(16,185,129,.1)", border: "1px solid rgba(16,185,129,.22)" }}
              >
                <svg className="w-5 h-5" style={{ color: "#10B981" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-zinc-100 text-[1.1rem]">
                This{" "}
                <span className="gradient-text-green">IS</span>{" "}
                for you if…
              </h3>
            </div>
            <ul className="flex flex-col gap-3.5">
              {forYou.map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-zinc-300 text-[0.88rem] leading-relaxed">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#10B981" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* NOT FOR YOU */}
          <div
            className="rounded-2xl p-8"
            style={{
              background: "rgba(239,68,68,.04)",
              border: "1px solid rgba(239,68,68,.16)",
            }}
          >
            <div className="flex items-center gap-3.5 mb-7">
              <div
                className="w-10 h-10 rounded-[0.75rem] flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(239,68,68,.08)", border: "1px solid rgba(239,68,68,.2)" }}
              >
                <svg className="w-5 h-5" style={{ color: "#EF4444" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-zinc-100 text-[1.1rem]">
                This is{" "}
                <span style={{ color: "#EF4444" }}>NOT</span>{" "}
                for you if…
              </h3>
            </div>
            <ul className="flex flex-col gap-3.5">
              {notForYou.map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-zinc-400 text-[0.88rem] leading-relaxed">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#EF4444" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
