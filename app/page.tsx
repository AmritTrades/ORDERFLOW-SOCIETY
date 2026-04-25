import { HeroGeometric }    from "@/components/ui/shape-landing-hero";
import Navbar               from "@/components/sections/Navbar";
import FinalCTA             from "@/components/sections/FinalCTA";
import StatsBar             from "@/components/sections/StatsBar";
import ImageCardsSection    from "@/components/sections/ImageCardsSection";
import TradingStack         from "@/components/sections/TradingStack";
import Comparison           from "@/components/sections/Comparison";
import Community            from "@/components/sections/Community";
import Guarantee            from "@/components/sections/Guarantee";
import PricingSection       from "@/components/sections/PricingSection";
import TapeMarquee          from "@/components/ui/tape-marquee";
import Footer               from "@/components/sections/Footer";
import { SectionReveal }    from "@/components/ui/section-reveal";

export default function Home() {
  return (
    <main style={{ background: "var(--background)" }}>

      {/* ── Always-visible chrome ── */}
      <Navbar />

      {/* 1 — Hero: The promise */}
      <HeroGeometric
        badge="Orderflow Society"
        title1="Master the"
        title2="Order Flow Edge."
        subtitle="Stop guessing the tape. Start reading it. Futures trading mentorship for serious traders ready to trade with institutional edge."
        primaryCTA={{ label: "Join Free Discord", href: "https://discord.gg/d4xSrsWAK" }}
        secondaryCTA={{ label: "View Mentorship", href: "#mentorship" }}
      />

      {/* 2 — Problem: Agitate the pain */}
      <SectionReveal>
        <FinalCTA />
      </SectionReveal>

      {/* 3 — Stats & Evidence: Social proof */}
      <SectionReveal>
        <StatsBar />
      </SectionReveal>
      <SectionReveal>
        <ImageCardsSection />
      </SectionReveal>

      {/* 3b — Trading Stack: Partner tools */}
      <SectionReveal>
        <TradingStack />
      </SectionReveal>

      {/* 4 — Honesty Filter: Qualify the lead */}
      <SectionReveal>
        <Comparison />
      </SectionReveal>

      {/* 5 — Community Tiers: The free entry point */}
      <SectionReveal>
        <Community />
      </SectionReveal>

      {/* 6 — Guarantee: Remove risk */}
      <SectionReveal>
        <Guarantee />
      </SectionReveal>

      {/* 7 — Final Pricing: Convert */}
      <SectionReveal>
        <PricingSection />
      </SectionReveal>

      {/* ── Footer chrome ── */}
      <TapeMarquee />
      <Footer />

    </main>
  );
}
