"use client";

import { hackathon } from "@/lib/content";
import { RecallBackdrop } from "@/components/RecallBackdrop";
import { DigitalPlanet } from "@/components/space/DigitalPlanet";
import { SubmitProjectButton } from "@/components/SubmitModal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-0 flex-col justify-start overflow-x-clip pb-6 pt-20 md:pb-8 md:pt-24"
    >
      <RecallBackdrop />

      <div className="section-pad relative z-10 mx-auto w-full max-w-[1200px]">
        <div className="fade-up mb-5 flex flex-wrap items-center gap-3 text-sm">
          <span className="rounded-full border border-[rgba(79,55,253,0.4)] bg-[rgba(79,55,253,0.12)] px-3 py-1 text-[var(--tatum-primary-400)]">
            {hackathon.dates.label}
          </span>
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/70">
            {hackathon.location}
          </span>
          <span className="rounded-full border border-[rgba(44,205,154,0.4)] bg-[rgba(44,205,154,0.1)] px-3 py-1 text-[var(--tatum-green)]">
            {hackathon.prizePool} prize pool
          </span>
        </div>

        <div className="relative max-w-4xl">
          <DigitalPlanet
            variant="purple"
            size="sm"
            className="absolute -right-4 top-0 hidden opacity-40 float-planet md:block"
          />
          <h1 className="hero-title fade-up mb-2">Hackathon</h1>
          <p className="heading-xl title-split fade-up-delay mb-5 max-w-4xl">
            <span>Total </span>
            <span>Recall</span>
          </p>
          <p className="fade-up-delay max-w-xl text-lg text-white/75 md:text-xl">
            {hackathon.tagline}
          </p>
          <div className="fade-up-delay-2 mt-7 flex flex-wrap gap-3">
            <SubmitProjectButton />
            <a href="#tracks" className="btn-ghost">
              Pick a track
            </a>
            <a href="#start-tatum" className="btn-ghost">
              How to start
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-8 border-y border-[rgba(79,55,253,0.2)] bg-[rgba(11,12,32,0.75)] py-3.5 backdrop-blur-sm">
        <div className="marquee">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex gap-12 whitespace-nowrap px-6">
                {[
                  "3 tracks · $1k each",
                  "Walrus Memory on Mainnet",
                  "Tatum AI Builder · ai.tatum.io",
                  "Tatum RPC & Data APIs",
                  "Web2 builders welcome",
                  "Apps that learn over time",
                ].map((item) => (
                  <span key={`${copy}-${item}`} className="flex items-center gap-12">
                    {item}
                    <span className="text-[var(--tatum-green)]">◆</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
