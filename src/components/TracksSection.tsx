"use client";

import { useState } from "react";
import { trackPrizeTiers, tracks } from "@/lib/content";
import { SectionBackdrop } from "@/components/space/SectionBackdrop";

const tabAccent: Record<string, string> = {
  primary: "bg-[rgba(79,55,253,0.2)] border-[rgba(79,55,253,0.45)]",
  green: "bg-[rgba(44,205,154,0.12)] border-[rgba(44,205,154,0.4)]",
  navy: "bg-[rgba(28,30,79,0.6)] border-[rgba(126,115,253,0.35)]",
};

export function TracksSection() {
  const [active, setActive] = useState(0);
  const track = tracks[active];

  return (
    <section id="tracks" className="section-pad relative z-[1] overflow-x-clip py-10 md:py-14">
      <SectionBackdrop variant="tracks" />
      <div className="container-page relative">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow mb-3">Three tracks</p>
            <h2 className="heading-lg text-white">Pick your sector.</h2>
          </div>
          <div className="flex gap-2">
            {tracks.map((t, i) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActive(i)}
                className={`font-display h-11 w-11 rounded-xl border text-sm font-bold transition-all duration-300 ${
                  active === i
                    ? `${tabAccent[t.accent]} text-white scale-110`
                    : "border-white/10 bg-white/5 text-white/40 hover:border-white/25"
                }`}
              >
                {t.number}
              </button>
            ))}
          </div>
        </div>

        <div className="card-recall overflow-hidden md:grid md:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col border-b border-white/10 md:border-b-0 md:border-r">
            {tracks.map((t, i) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActive(i)}
                className={`group relative flex w-full items-start gap-4 px-6 py-5 text-left transition-all duration-300 ${
                  active === i ? tabAccent[t.accent] : "hover:bg-white/[0.03]"
                } ${i < tracks.length - 1 ? "border-b border-white/10" : ""}`}
              >
                <span
                  className={`relative z-10 font-mono text-sm ${
                    active === i ? "text-[var(--tatum-green)]" : "text-white/35"
                  }`}
                >
                  {t.number}
                </span>
                <span
                  className={`relative z-10 text-base font-semibold leading-snug ${
                    active === i ? "text-white" : "text-white/55"
                  }`}
                >
                  {t.title}
                </span>
              </button>
            ))}

            <div className="mt-auto flex flex-1 flex-col justify-end border-t border-white/10 px-6 py-8 md:min-h-[200px]">
              <p className="mb-1 text-[10px] font-semibold tracking-[0.2em] text-white/40 uppercase">
                Per track
              </p>
              <p className="font-display text-5xl font-bold leading-none tracking-tight text-[var(--tatum-green)] md:text-6xl lg:text-7xl">
                $1,000
              </p>
            </div>
          </div>

          <div key={track.id} className="track-panel-enter relative min-h-[440px] p-8 lg:p-10">
            <TrackDetail track={track} />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrackDetail({ track }: { track: (typeof tracks)[number] }) {
  return (
    <div className="relative z-10 flex h-full max-w-xl flex-col">
      <p className="mb-2 font-mono text-sm text-[var(--tatum-green)]">{track.number}</p>
      <h3 className="mb-3 text-2xl font-semibold tracking-tight text-white lg:text-3xl">
        {track.title}
      </h3>
      <p className="mb-6 text-white/70">{track.blurb}</p>

      <p className="mb-1 text-xs font-semibold tracking-[0.14em] text-white/40 uppercase">
        Best fit for
      </p>
      <p className="mb-6 text-white/80">{track.bestFit}</p>

      <ul className="mb-8 space-y-2">
        {track.ideas.map((idea) => (
          <li key={idea} className="flex gap-3 text-sm text-white/60">
            <span className="mt-1.5 text-[var(--tatum-primary)]">▸</span>
            {idea}
          </li>
        ))}
      </ul>

      <div className="mt-auto rounded-xl border border-white/10 bg-black/30 p-4">
        <p className="mb-3 text-xs tracking-widest text-white/45 uppercase">Track prizes</p>
        <div className="flex flex-wrap gap-3">
          {trackPrizeTiers.map((tier) => (
            <div
              key={tier.place}
              className="flex items-baseline gap-2 rounded-lg border border-[rgba(79,55,253,0.3)] bg-[rgba(79,55,253,0.1)] px-3 py-2"
            >
              <span className="text-xs text-white/50">{tier.place}</span>
              <span className="font-display text-lg font-bold text-[var(--tatum-green)]">
                {tier.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
