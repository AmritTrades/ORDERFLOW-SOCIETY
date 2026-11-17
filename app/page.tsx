import SplashWrapper    from "@/components/ui/SplashWrapper";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { FloatingDock }  from "@/components/ui/dock";
import StatsBar          from "@/components/sections/StatsBar";
import TradingStack      from "@/components/sections/TradingStack";
import Community         from "@/components/sections/Community";
import Comparison        from "@/components/sections/Comparison";
import StudentSuccess    from "@/components/sections/StudentSuccess";
import PricingSection    from "@/components/sections/PricingSection";
import TapeMarquee       from "@/components/ui/tape-marquee";
import Footer            from "@/components/sections/Footer";
import { SectionReveal } from "@/components/ui/section-reveal";
import FAQ               from "@/components/sections/FAQ";
import { faqs, SITE_URL } from "@/lib/faq";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#org`,
      name: "Orderflow Society",
      url: SITE_URL,
      logo: `${SITE_URL}/icon.svg`,
      founder: { "@id": `${SITE_URL}/#amrit` },
      sameAs: ["https://instagram.com/amrittrades", "https://discord.gg/bZ2hVCrCMw"],
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#amrit`,
      name: "Amrit",
      alternateName: "amrittrades",
      jobTitle: "Futures trader and orderflow trading mentor",
      knowsAbout: ["Orderflow trading", "Footprint charts", "ES futures", "NQ futures", "ATAS", "Volume profile", "Auction market theory"],
      sameAs: ["https://instagram.com/amrittrades"],
    },
    {
      "@type": "Service",
      name: "1-on-1 Orderflow Trading Mentorship",
      serviceType: "Futures trading mentorship",
      provider: { "@id": `${SITE_URL}/#org` },
      areaServed: "Worldwide",
      description: "10 private 1-on-1 orderflow trading sessions (60 to 90 minutes each) for ES and NQ futures traders, with ATAS templates, trade reviews and direct chat support.",
      offers: [
        { "@type": "Offer", name: "Full payment", price: "999", priceCurrency: "USD", url: `${SITE_URL}/#mentorship` },
        { "@type": "Offer", name: "Split payment, 2 x $500", price: "500", priceCurrency: "USD", url: `${SITE_URL}/#mentorship` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <SplashWrapper>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <main style={{ background: "var(--background)" }}>

      {/* ── Fixed chrome ── */}
      <FloatingDock />

      {/* 1 — Hero */}
      <HeroGeometric
        badge="Orderflow Society"
        title1="Master the"
        subtitle="Stop guessing the tape. Start reading it. 1-on-1 orderflow mentorship for ES and NQ futures traders: footprint, DOM and heatmap on ATAS, in 10 private sessions booked at your time."
      />

      {/* Stats bar */}
      <StatsBar />

      {/* 2 — Trading Stack: Build authority */}
      <SectionReveal>
        <TradingStack />
      </SectionReveal>

      {/* 3 — Mentorship: The offer (anchor #mentorship) */}
      <SectionReveal>
        <PricingSection />
      </SectionReveal>

      {/* 4 — Social Proof: Student reviews */}
      <SectionReveal>
        <StudentSuccess />
      </SectionReveal>

      {/* 5 — Honesty Filter: Qualify the lead */}
      <SectionReveal>
        <Comparison />
      </SectionReveal>

      {/* 6 — FAQ: plain-HTML answers for people and AI search */}
      <FAQ />

      {/* 7 — Community: Free Discord (anchor #community) */}
      <SectionReveal>
        <Community />
      </SectionReveal>

      {/* ── Footer chrome ── */}
      <TapeMarquee />
      <Footer />

    </main>
    </SplashWrapper>
  );
}
