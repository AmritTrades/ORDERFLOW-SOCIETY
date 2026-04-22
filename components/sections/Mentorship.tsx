"use client";

import { WebGLShader } from "@/components/ui/web-gl-shader";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

const deliverables = [
  {
    num: "01",
    title: "Full Orderflow Curriculum",
    body: "Step-by-step system covering footprint charts, volume profile, delta divergence, and tape reading — structured for your pace and experience level.",
  },
  {
    num: "02",
    title: "Live Screen-Share Sessions",
    body: "Weekly 1-on-1 calls where we review your trades, break down your mistakes, and work on execution in real time with your actual charts.",
  },
  {
    num: "03",
    title: "Custom Rules-Based Trading Plan",
    body: "A personalised playbook built around your schedule, account size, and risk tolerance — so you never enter a trade without a defined edge again.",
  },
];

const fullIncludes = [
  "Full orderflow curriculum access",
  "Weekly 1-on-1 screen-share sessions",
  "Custom trading plan built for you",
  "100-day money-back guarantee",
];

const splitIncludes = [
  "Everything included — same programme",
  "Flexible for your budget",
  "Start immediately upon first payment",
];

function CheckIcon({ gold = false }: { gold?: boolean }) {
  return (
    <svg
      className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
      style={{ color: gold ? "#c9a96e" : "rgba(255,255,255,0.3)" }}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Mentorship() {
  return (
    <section id="mentorship" className="py-28 relative overflow-hidden">
      <div
        className="orb"
        style={{ width: 480, height: 480, background: "#F59E0B", top: "-8rem", right: "-8rem" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4" style={{ color: "#F59E0B" }}>
            <span className="w-6 h-px bg-amber-500 block" />
            <span className="text-[0.7rem] uppercase tracking-[0.12em] font-body">1-on-1 Mentorship</span>
            <span className="w-6 h-px bg-amber-500 block" />
          </div>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-zinc-100 mb-4">
            Your Fastest Path to{" "}
            <span className="gradient-text">Consistency</span>
          </h2>
          <p className="font-body text-zinc-400 text-[1.05rem] max-w-[32rem] mx-auto">
            Private, personalised coaching built around your charts, your mistakes,
            and your specific edge — not a generic course.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* ── Deliverables ── */}
          <div>
            <h3 className="font-heading font-semibold text-zinc-100 text-[1.1rem] mb-6">
              What you get:
            </h3>
            <div className="flex flex-col gap-3.5">
              {deliverables.map((d) => (
                <div
                  key={d.num}
                  className="rounded-2xl p-5 transition-all duration-200"
                  style={{ background: "rgba(24,24,27,.7)", border: "1px solid rgba(39,39,42,.8)" }}
                  onMouseOver={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor = "rgba(245,158,11,.22)")
                  }
                  onMouseOut={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor = "rgba(39,39,42,.8)")
                  }
                >
                  <div className="flex gap-4 items-start">
                    <div
                      className="w-8 h-8 rounded-[0.6rem] flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: "rgba(245,158,11,.08)",
                        border: "1px solid rgba(245,158,11,.2)",
                      }}
                    >
                      <span className="font-heading font-bold text-[0.7rem] text-amber-500">
                        {d.num}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-zinc-100 text-[0.95rem] mb-1.5">
                        {d.title}
                      </h4>
                      <p className="font-body text-zinc-400 text-[0.83rem] leading-relaxed">
                        {d.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Pricing — WebGL Shader + Liquid Glass ── */}
          <div className="relative overflow-hidden rounded-3xl" style={{ minHeight: 520 }}>

            {/* WebGL shader contained to this block */}
            <WebGLShader className="absolute inset-0 w-full h-full block" />

            {/* Dark overlay for legibility */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.55) 100%)",
              }}
            />

            {/* Top shimmer line */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(201,169,110,0.5), transparent)",
              }}
            />
            {/* Bottom shimmer line */}
            <div
              className="absolute bottom-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(201,169,110,0.2), transparent)",
              }}
            />

            {/* Content */}
            <div className="relative z-10 p-7 sm:p-9 flex flex-col gap-8">

              {/* Pricing header */}
              <div className="text-center">
                <p
                  className="font-body text-[0.65rem] uppercase tracking-[0.2em] mb-1"
                  style={{ color: "rgba(201,169,110,0.6)" }}
                >
                  Investment
                </p>
                <h3
                  className="font-display font-light text-white"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2.1rem)", letterSpacing: "-0.01em" }}
                >
                  Choose Your Path
                </h3>
              </div>

              {/* Two cards */}
              <div className="grid sm:grid-cols-2 gap-4">

                {/* ── Card 1: Full Payment ── */}
                <div
                  className="rounded-2xl p-6 flex flex-col gap-5"
                  style={{
                    background: "rgba(0,0,0,0.45)",
                    border: "1px solid rgba(201,169,110,0.25)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                  }}
                >
                  {/* Badge + price */}
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <p
                        className="font-body text-[0.62rem] uppercase tracking-widest"
                        style={{ color: "rgba(201,169,110,0.55)" }}
                      >
                        Full Payment
                      </p>
                      <span
                        className="text-[0.58rem] font-heading font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                        style={{
                          background: "rgba(201,169,110,0.1)",
                          border: "1px solid rgba(201,169,110,0.2)",
                          color: "#c9a96e",
                        }}
                      >
                        Best Value
                      </span>
                    </div>
                    <div className="flex items-end gap-1 leading-none">
                      <span
                        className="font-display font-light"
                        style={{
                          fontSize: "3.8rem",
                          color: "#c9a96e",
                          fontFamily: "var(--font-cormorant)",
                          lineHeight: 1,
                        }}
                      >
                        $799
                      </span>
                    </div>
                    <p
                      className="font-body text-[0.72rem] mt-1"
                      style={{ color: "rgba(255,255,255,0.3)" }}
                    >
                      One-time · save vs split
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="flex flex-col gap-2 flex-1">
                    {fullIncludes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 font-body text-[0.82rem]"
                        style={{ color: "rgba(255,255,255,0.65)" }}
                      >
                        <CheckIcon gold />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Liquid Glass CTA */}
                  <LiquidButton
                    asChild
                    size="xl"
                    className="w-full justify-center rounded-full font-heading font-semibold text-[0.85rem] tracking-wide"
                    style={{
                      color: "#c9a96e",
                      border: "1px solid rgba(201,169,110,0.35)",
                    }}
                  >
                    <a
                      href="https://www.paypal.com/paypalme/amrittrades/799"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pay $799 via PayPal
                    </a>
                  </LiquidButton>
                </div>

                {/* ── Card 2: Split Payment ── */}
                <div
                  className="rounded-2xl p-6 flex flex-col gap-5"
                  style={{
                    background: "rgba(0,0,0,0.28)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                  }}
                >
                  <div>
                    <p
                      className="font-body text-[0.62rem] uppercase tracking-widest mb-2"
                      style={{ color: "rgba(255,255,255,0.3)" }}
                    >
                      Split Payment
                    </p>
                    <div className="flex items-end gap-1.5 leading-none">
                      <span
                        className="font-display font-light"
                        style={{
                          fontSize: "3.8rem",
                          color: "rgba(255,255,255,0.82)",
                          fontFamily: "var(--font-cormorant)",
                          lineHeight: 1,
                        }}
                      >
                        $400
                      </span>
                      <span
                        className="font-display font-light mb-1.5"
                        style={{
                          fontSize: "1.5rem",
                          color: "rgba(255,255,255,0.3)",
                          fontFamily: "var(--font-cormorant)",
                        }}
                      >
                        ×2
                      </span>
                    </div>
                    <p
                      className="font-body text-[0.72rem] mt-1"
                      style={{ color: "rgba(255,255,255,0.25)" }}
                    >
                      30 days between payments
                    </p>
                  </div>

                  <ul className="flex flex-col gap-2 flex-1">
                    {splitIncludes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 font-body text-[0.82rem]"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                      >
                        <CheckIcon gold={false} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <LiquidButton
                    asChild
                    size="xl"
                    className="w-full justify-center rounded-full font-heading font-semibold text-[0.85rem] tracking-wide"
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <a
                      href="https://www.paypal.com/paypalme/amrittrades/400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Start with $400 via PayPal
                    </a>
                  </LiquidButton>
                </div>

              </div>

              {/* Guarantee footnote */}
              <p
                className="text-center font-body text-[0.7rem]"
                style={{ color: "rgba(255,255,255,0.2)" }}
              >
                Protected by 100-day profitability guarantee · Secure payments via PayPal
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
