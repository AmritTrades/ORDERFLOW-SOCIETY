import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import Navbar      from "@/components/sections/Navbar";
import StatsBar    from "@/components/sections/StatsBar";
import About       from "@/components/sections/About";
import Community   from "@/components/sections/Community";
import Guarantee   from "@/components/sections/Guarantee";
import Comparison  from "@/components/sections/Comparison";
import FinalCTA    from "@/components/sections/FinalCTA";
import Footer      from "@/components/sections/Footer";

export default function Home() {
  return (
    <main style={{ background: "#080808" }}>
      <Navbar />
      <HeroGeometric
        badge="Orderflow Society"
        title1="Master the"
        title2="Order Flow Edge."
        subtitle="Stop guessing the tape. Start reading it. Futures trading mentorship for serious traders ready to trade with institutional edge."
        primaryCTA={{ label: "Join Free Discord", href: "https://discord.gg/d4xSrsWAK" }}
        secondaryCTA={{ label: "View Mentorship", href: "#mentorship" }}
      />
      <StatsBar />
      <About />
      <Community />
      <Guarantee />
      <Comparison />
      <FinalCTA />
      <Footer />
    </main>
  );
}
