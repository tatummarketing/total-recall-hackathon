import { hackathon } from "@/lib/content";
import { PartnerLockup } from "@/components/PartnerLockup";
import { HeroMascot } from "@/components/HeroMascot";
import { DigitalPlanet } from "@/components/space/DigitalPlanet";
import { SectionBackdrop } from "@/components/space/SectionBackdrop";

export function CtaFooter() {
  return (
    <>
      <section id="apply" className="section-pad relative z-[1] overflow-x-clip py-12 md:py-16">
        <SectionBackdrop variant="lower" />

        <div className="container-page relative z-10 grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-10">
          <div className="relative text-left">
            <DigitalPlanet
              variant="purple"
              size="sm"
              className="absolute -left-2 -top-8 opacity-45 float-planet"
            />
            <p className="eyebrow mb-3">Ready to build?</p>
            <h2 className="heading-lg mb-4 text-white">
              {hackathon.dates.label} · 3 tracks · {hackathon.prizePool}
            </h2>
            <p className="mb-8 max-w-xl text-white/70">{hackathon.summary}</p>
            <div className="flex flex-wrap gap-3">
              <a href={hackathon.discordUrl} target="_blank" rel="noreferrer" className="btn-primary">
                Join Discord
              </a>
              <a
                href={hackathon.docs.previousHackathon}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                Last hackathon
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md justify-self-end md:max-w-lg">
            <DigitalPlanet
              variant="green"
              size="md"
              ringed
              className="absolute -left-6 top-6 z-0 opacity-60 float-planet-delay"
            />
            <DigitalPlanet
              variant="purple"
              size="sm"
              className="absolute -right-2 bottom-16 z-0 opacity-50 float-planet"
            />
            <HeroMascot className="relative z-[1] ml-auto" />
          </div>
        </div>
      </section>

      <footer className="section-pad relative z-[1] border-t border-[rgba(79,55,253,0.2)] py-8">
        <div className="container-page flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <PartnerLockup size="sm" />

          <nav className="flex flex-wrap gap-5 text-sm text-white/50">
            <a href={hackathon.docs.aiBuilder} target="_blank" rel="noreferrer" className="no-underline hover:text-white">
              AI Builder
            </a>
            <a href={hackathon.docs.tatumRpc} target="_blank" rel="noreferrer" className="no-underline hover:text-white">
              Tatum Docs
            </a>
            <a href={hackathon.docs.walrusDocs} target="_blank" rel="noreferrer" className="no-underline hover:text-white">
              Walrus Docs
            </a>
          </nav>

          <p className="text-xs text-white/35">
            Partner draft · {hackathon.name} · Tatum x Walrus
          </p>
        </div>
      </footer>
    </>
  );
}
