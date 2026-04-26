import SplashWrapper    from "@/components/ui/SplashWrapper";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import Navbar            from "@/components/sections/Navbar";
import StatsBar          from "@/components/sections/StatsBar";
import TradingStack      from "@/components/sections/TradingStack";
import Community         from "@/components/sections/Community";
import Comparison        from "@/components/sections/Comparison";
import StudentSuccess    from "@/components/sections/StudentSuccess";
import PricingSection    from "@/components/sections/PricingSection";
import Guarantee         from "@/components/sections/Guarantee";
import ClosingQuote      from "@/components/sections/ClosingQuote";
import TapeMarquee       from "@/components/ui/tape-marquee";
import Footer            from "@/components/sections/Footer";
import { SectionReveal } from "@/components/ui/section-reveal";

export default function Home() {
  return (
    <SplashWrapper>
    <main style={{ background: "var(--background)" }}>

      {/* ── Fixed chrome ── */}
      <Navbar />

      {/* 1 — Hero */}
      <HeroGeometric
        badge="Orderflow Society"
        title1="Master the"
        subtitle="Stop guessing the tape. Start reading it. Futures trading mentorship for serious traders ready to trade with institutional edge."
      />

      {/* Stats bar */}
      <StatsBar />

      {/* 2 — Trading Stack: Build authority */}
      <SectionReveal>
        <TradingStack />
      </SectionReveal>

      {/* 3 — Community: Free & paid tiers */}
      <SectionReveal>
        <Community />
      </SectionReveal>

      {/* 4 — Honesty Filter: Qualify the lead */}
      <SectionReveal>
        <Comparison />
      </SectionReveal>

      {/* 5 — Social Proof: Student success */}
      <SectionReveal>
        <StudentSuccess />
      </SectionReveal>

      {/* 6 — Mentorship: The offer */}
      <SectionReveal>
        <PricingSection />
      </SectionReveal>

      {/* 7 — Guarantee: Remove final risk */}
      <SectionReveal>
        <Guarantee />
      </SectionReveal>

      {/* 7 — Closing Quote: The send-off */}
      <SectionReveal>
        <ClosingQuote />
      </SectionReveal>

      {/* ── Footer chrome ── */}
      <TapeMarquee />
      <Footer />

    </main>
    </SplashWrapper>
  );
}
