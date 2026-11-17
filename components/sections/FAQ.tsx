import { faqs } from "@/lib/faq";

/* Server component: plain HTML so search engines and AI assistants can read every answer. */
export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-20 md:py-28"
      style={{ background: "var(--background)", borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <p className="label-mono mb-4">FAQ</p>
        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            color: "var(--foreground)",
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            marginBottom: "2.5rem",
          }}
        >
          Questions, answered.
        </h2>
        <div className="flex flex-col">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="faq-item group"
              style={{ borderTop: "1px solid var(--border)", padding: "1.25rem 0" }}
            >
              <summary
                className="flex cursor-pointer list-none items-center justify-between gap-6"
                style={{ fontSize: "1.0625rem", fontWeight: 600, color: "var(--foreground)", letterSpacing: "-0.01em" }}
              >
                <h3 style={{ font: "inherit" }}>{f.q}</h3>
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-open:rotate-45"
                  style={{ color: "var(--muted-foreground)", fontSize: "1.5rem", lineHeight: 1 }}
                >
                  +
                </span>
              </summary>
              <p style={{ marginTop: "0.85rem", fontSize: "0.9375rem", lineHeight: 1.7, color: "var(--muted-foreground)" }}>
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
