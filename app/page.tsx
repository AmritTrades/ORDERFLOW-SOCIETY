import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import Navbar            from "@/components/sections/Navbar";
import TradingStack      from "@/components/sections/TradingStack";
import Comparison        from "@/components/sections/Comparison";
import PricingSection    from "@/components/sections/PricingSection";
import Community         from "@/components/sections/Community";
import Guarantee         from "@/components/sections/Guarantee";
import TapeMarquee       from "@/components/ui/tape-marquee";
import Footer            from "@/components/sections/Footer";
import { SectionReveal } from "@/components/ui/section-reveal";

export default function Home() {
  return (
    <main style={{ background: "var(--background)" }}>

      {/* ── Fixed chrome ── */}
      <Navbar />

      {/* 1 — Hero */}
      <HeroGeometric
        badge="Orderflow Society"
        title1="Master the"
        title2="Order Flow Edge."
        subtitle="Stop guessing the tape. Start reading it. Futures trading mentorship for serious traders ready to trade with institutional edge."
        primaryCTA={{ label: "Join Free Discord", href: "https://discord.gg/d4xSrsWAK" }}
        secondaryCTA={{ label: "View Mentorship", href: "#mentorship" }}
      />

      {/* 2 — Trading Stack: Build authority before the pitch */}
      <SectionReveal>
        <TradingStack />
      </SectionReveal>

      {/* 3 — Honesty Filter: Qualify the lead before showing price */}
      <SectionReveal>
        <Comparison />
      </SectionReveal>

      {/* 4 — Mentorship: The offer, for those who passed the filter */}
      <SectionReveal>
        <PricingSection />
      </SectionReveal>

      {/* 5 — Community: Secondary option under the main offer */}
      <SectionReveal>
        <Community />
      </SectionReveal>

      {/* 6 — Guarantee: Final objection handler before the footer */}
      <SectionReveal>
        <Guarantee />
      </SectionReveal>

      {/* ── Footer chrome ── */}
      <TapeMarquee />
      <Footer />

    </main>
  );
}
