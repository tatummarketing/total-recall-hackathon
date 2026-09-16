import { CtaFooter } from "@/components/CtaFooter";
import { FaqSection } from "@/components/FaqSection";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MissionSection } from "@/components/MissionSection";
import { PrizesSection } from "@/components/PrizesSection";
import { Requirements } from "@/components/Requirements";
import { TimelineSection } from "@/components/TimelineSection";
import { TracksSection } from "@/components/TracksSection";
import { PageSpaceMood } from "@/components/space/PageSpaceMood";

export default function Home() {
  return (
    <div className="noise relative min-h-full overflow-x-hidden">
      <Header />
      <PageSpaceMood />
      <main className="relative z-[1]">
        <Hero />
        <MissionSection />
        <TracksSection />
        <PrizesSection />
        <Requirements />
        <TimelineSection />
        <FaqSection />
        <CtaFooter />
      </main>
    </div>
  );
}
