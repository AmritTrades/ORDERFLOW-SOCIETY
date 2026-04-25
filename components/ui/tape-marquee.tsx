"use client";

const TAPE: Array<{
  instrument: string;
  price: string;
  size: string;
  side: "BUY" | "SELL";
  label: string;
  value: string;
}> = [
  { instrument: "ES",  price: "5234.50",  size: "523",   side: "BUY",  label: "CVD",   value: "+2,341" },
  { instrument: "NQ",  price: "18842.25", size: "1,240", side: "SELL", label: "DELTA", value: "−892"   },
  { instrument: "ES",  price: "5233.75",  size: "847",   side: "BUY",  label: "IMBAL", value: "78%"    },
  { instrument: "CL",  price: "78.42",    size: "2,100", side: "SELL", label: "CVD",   value: "−1,209" },
  { instrument: "ES",  price: "5234.25",  size: "315",   side: "BUY",  label: "DELTA", value: "+445"   },
  { instrument: "GC",  price: "2318.40",  size: "890",   side: "SELL", label: "IMBAL", value: "65%"    },
  { instrument: "ES",  price: "5233.50",  size: "1,876", side: "SELL", label: "CVD",   value: "−3,102" },
  { instrument: "NQ",  price: "18839.75", size: "567",   side: "BUY",  label: "DELTA", value: "+123"   },
  { instrument: "ES",  price: "5234.00",  size: "2,431", side: "BUY",  label: "CVD",   value: "+4,892" },
  { instrument: "RTY", price: "2087.60",  size: "445",   side: "SELL", label: "IMBAL", value: "71%"    },
  { instrument: "ES",  price: "5233.25",  size: "738",   side: "SELL", label: "DELTA", value: "−218"   },
  { instrument: "MES", price: "5234.50",  size: "10",    side: "BUY",  label: "CVD",   value: "+91"    },
];

function TapeItem({ instrument, price, size, side, label, value }: typeof TAPE[0]) {
  const isBuy = side === "BUY";
  return (
    <span
      className="inline-flex items-center gap-2.5 px-5"
      style={{ fontFamily: "'SF Mono','JetBrains Mono','Fira Code',ui-monospace,monospace" }}
    >
      {/* Instrument */}
      <span style={{ fontSize: "0.65rem", letterSpacing: "0.12em", color: "rgba(var(--foreground-rgb),0.35)", textTransform: "uppercase" }}>
        {instrument}
      </span>

      {/* Price */}
      <span style={{ fontSize: "0.75rem", color: "rgba(var(--foreground-rgb),0.55)", letterSpacing: "0.04em" }}>
        {price}
      </span>

      {/* Divider */}
      <span style={{ fontSize: "0.6rem", color: "rgba(var(--foreground-rgb),0.18)" }}>|</span>

      {/* Size + Side */}
      <span
        style={{
          fontSize: "0.65rem",
          letterSpacing: "0.08em",
          fontWeight: 600,
          color: isBuy ? "rgba(34,197,94,0.75)" : "rgba(239,68,68,0.7)",
        }}
      >
        {size}&nbsp;{side}
      </span>

      {/* Divider */}
      <span style={{ fontSize: "0.6rem", color: "rgba(var(--foreground-rgb),0.18)" }}>|</span>

      {/* Metric */}
      <span style={{ fontSize: "0.6rem", letterSpacing: "0.1em", color: "rgba(var(--foreground-rgb),0.28)", textTransform: "uppercase" }}>
        {label}
      </span>
      <span style={{ fontSize: "0.65rem", color: "rgba(var(--foreground-rgb),0.42)", letterSpacing: "0.04em" }}>
        {value}
      </span>

      {/* Separator dot */}
      <span style={{ fontSize: "0.55rem", color: "rgba(var(--foreground-rgb),0.15)", paddingLeft: "0.5rem" }}>
        ···
      </span>
    </span>
  );
}

export default function TapeMarquee() {
  return (
    <div
      style={{
        background: "var(--surface-1)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        overflow: "hidden",
        position: "relative",
        height: "44px",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Injected keyframes — scoped animation name avoids conflicts */}
      <style>{`
        @keyframes tape-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* Left fade mask */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 pointer-events-none z-10"
        style={{ background: "linear-gradient(to right, var(--surface-1), transparent)" }}
      />
      {/* Right fade mask */}
      <div
        className="absolute right-0 top-0 bottom-0 w-24 pointer-events-none z-10"
        style={{ background: "linear-gradient(to left, var(--surface-1), transparent)" }}
      />

      {/* Scrolling track — two copies for seamless loop */}
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "tape-scroll 38s linear infinite",
          willChange: "transform",
        }}
      >
        {/* Copy 1 */}
        <span className="inline-flex items-center">
          {TAPE.map((item, i) => <TapeItem key={`a-${i}`} {...item} />)}
        </span>
        {/* Copy 2 — identical, triggers seamless reset */}
        <span className="inline-flex items-center">
          {TAPE.map((item, i) => <TapeItem key={`b-${i}`} {...item} />)}
        </span>
      </div>
    </div>
  );
}
