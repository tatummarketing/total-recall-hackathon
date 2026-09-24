"use client";

import { bonusPrizes } from "@/lib/content";
import { BrandMark } from "@/components/space/BrandMark";
import { SectionBackdrop } from "@/components/space/SectionBackdrop";

const accentStyles = {
  green: "border-[rgba(44,205,154,0.4)] shadow-[0_0_40px_rgba(44,205,154,0.12)]",
  primary: "border-[rgba(79,55,253,0.45)] shadow-[0_0_40px_rgba(79,55,253,0.2)]",
  navy: "border-[rgba(126,115,253,0.35)] shadow-[0_0_40px_rgba(28,30,79,0.45)]",
};

export function PrizesSection() {
  return (
    <section id="prizes" className="section-pad relative z-[1] overflow-x-clip py-10 md:py-14">
      <SectionBackdrop variant="prizes" />
      <div className="container-page relative">
        <div className="mb-6 max-w-2xl">
          <p className="eyebrow mb-3">Special awards</p>
          <h2 className="heading-lg text-white">Craft bonuses on top.</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {bonusPrizes.map((prize) => (
            <div
              key={prize.title}
              className={`card-recall prize-tile relative overflow-hidden p-7 md:p-8 ${accentStyles[prize.accent]}`}
            >
              {prize.brand ? <BrandMark brand={prize.brand} /> : null}
              <p className="relative z-10 mb-2 pr-16 text-xs tracking-widest text-white/45 uppercase">
                {prize.title}
              </p>
              <p className="relative z-10 font-display text-5xl font-bold text-white">
                {prize.amount}
              </p>
              <p className="relative z-10 mt-3 max-w-sm text-white/60">{prize.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
