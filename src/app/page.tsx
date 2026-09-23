import { CtaBanner, SiteFooter } from "@/components/CtaFooter";
import { FaqSection } from "@/components/FaqSection";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { JudgingSection } from "@/components/JudgingSection";
import { MissionSection } from "@/components/MissionSection";
import { PrizesSection } from "@/components/PrizesSection";
import { Requirements } from "@/components/Requirements";
import { SubmitModalProvider } from "@/components/SubmitModal";
import { TimelineSection } from "@/components/TimelineSection";
import { TracksSection } from "@/components/TracksSection";
import { PageSpaceMood } from "@/components/space/PageSpaceMood";

export default function Home() {
  return (
    <SubmitModalProvider>
      <div className="noise relative min-h-full overflow-x-hidden">
        <Header />
        <PageSpaceMood />
        <main className="relative z-[1]">
          <Hero />
          <MissionSection />
          <TracksSection />
          <PrizesSection />
          <Requirements />
          <JudgingSection />
          <TimelineSection />
          <FaqSection />
          <CtaBanner />
          <SiteFooter />
        </main>
      </div>
    </SubmitModalProvider>
  );
}
