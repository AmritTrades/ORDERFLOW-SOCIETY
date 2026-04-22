import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import Navbar      from "@/components/sections/Navbar";
import StatsBar    from "@/components/sections/StatsBar";
import About       from "@/components/sections/About";
import Community   from "@/components/sections/Community";
import Mentorship  from "@/components/sections/Mentorship";
import Guarantee   from "@/components/sections/Guarantee";
import Comparison  from "@/components/sections/Comparison";
import FinalCTA    from "@/components/sections/FinalCTA";
import Footer      from "@/components/sections/Footer";

function Divider() {
  return <div className="section-divider" />;
}

export default function Home() {
  return (
    <main>
      <Navbar />

      <HeroGeometric
        badge="Orderflow Society"
        title1="Master the"
        title2="Order Flow Edge."
        subtitle="Stop guessing the tape. Start reading it. Futures trading mentorship for serious traders ready to trade with institutional edge."
        primaryCTA={{ label: "Join Free Discord", href: "#community" }}
        secondaryCTA={{ label: "View Mentorship", href: "#mentorship" }}
      />

      <StatsBar />
      <About />
      <Divider />
      <Community />
      <Divider />
      <Mentorship />
      <Divider />
      <Guarantee />
      <Divider />
      <Comparison />
      <Divider />
      <FinalCTA />
      <Footer />
    </main>
  );
}
