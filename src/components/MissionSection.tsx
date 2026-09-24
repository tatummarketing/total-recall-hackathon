import { missionCards } from "@/lib/content";
import { SectionBackdrop } from "@/components/space/SectionBackdrop";
import { Supernova } from "@/components/space/Supernova";
import { DigitalPlanet } from "@/components/space/DigitalPlanet";
import { BlackHole } from "@/components/space/BlackHole";

const accentMap = {
  green: "border-[rgba(44,205,154,0.35)] from-[rgba(44,205,154,0.1)]",
  primary: "border-[rgba(79,55,253,0.4)] from-[rgba(79,55,253,0.15)]",
  navy: "border-[rgba(126,115,253,0.3)] from-[rgba(28,30,79,0.5)]",
};

export function MissionSection() {
  return (
    <section
      id="mission"
      className="section-pad relative z-[1] overflow-x-clip pt-4 pb-10 md:pt-6 md:pb-12"
    >
      <SectionBackdrop variant="mission" />

      {/* Main dynamic element behind the heading */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 z-0 flex -translate-x-1/2 -translate-y-[18%] items-center justify-center opacity-80 md:-translate-y-[22%]"
        aria-hidden
      >
        <Supernova />
        <DigitalPlanet
          variant="green"
          size="md"
          ringed
          className="absolute -left-8 bottom-16 opacity-55 float-planet"
        />
        <DigitalPlanet
          variant="purple"
          size="sm"
          className="absolute -right-4 top-20 opacity-50 float-planet-delay"
        />
        <BlackHole size="sm" className="absolute right-[8%] bottom-8 opacity-50" />
      </div>

      <div className="container-page relative z-10">
        <div className="relative mb-8 max-w-2xl pt-2 md:mb-10 md:pt-4">
          <p className="eyebrow mb-3">Mission briefing</p>
          <h2 className="heading-lg text-white">Welcome to the colony.</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {missionCards.map((card) => (
            <article
              key={card.id}
              className={`card-recall card-shimmer relative flex flex-col bg-gradient-to-br p-6 md:p-7 ${accentMap[card.accent as keyof typeof accentMap]}`}
            >
              <p className="mb-2 font-mono text-xs tracking-widest text-white/40 uppercase">
                {card.label}
              </p>
              <h3 className="mb-3 text-xl font-semibold text-white">{card.title}</h3>
              <p className="text-sm leading-relaxed text-white/65">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
