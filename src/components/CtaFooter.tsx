"use client";

import { hackathon } from "@/lib/content";
import { PartnerLockup } from "@/components/PartnerLockup";
import { HeroMascot } from "@/components/HeroMascot";
import { DigitalPlanet } from "@/components/space/DigitalPlanet";
import { SectionBackdrop } from "@/components/space/SectionBackdrop";
import { SubmitProjectButton } from "@/components/SubmitModal";

const footerCols = [
  {
    title: "Product",
    links: [
      { label: "Tatum website", href: hackathon.website },
      { label: "AI Builder", href: hackathon.docs.aiBuilder },
      { label: "Dashboard", href: hackathon.docs.dashboard },
      { label: "Pricing", href: hackathon.docs.pricing },
    ],
  },
  {
    title: "Docs & tools",
    links: [
      { label: "Documentation", href: hackathon.docs.tatumRpc },
      { label: "Get started", href: hackathon.docs.getStarted },
      { label: "RPC & APIs", href: hackathon.docs.rpc },
      { label: "Walrus docs", href: hackathon.docs.walrusDocs },
      { label: "Walrus Memory docs", href: hackathon.docs.walrusMemory },
      { label: "Walrus Memory for Claude", href: hackathon.docs.walrusMemoryClaude },
    ],
  },
  {
    title: "Hackathon",
    links: [
      { label: "Tatum Discord", href: hackathon.discordUrl },
      { label: "Walrus Discord", href: hackathon.docs.walrusDiscord },
      { label: "Last hackathon", href: hackathon.docs.previousHackathon },
    ],
  },
  {
    title: "Socials",
    links: [
      { label: "Tatum on X", href: hackathon.socials.tatumX },
      { label: "Tatum on LinkedIn", href: hackathon.socials.tatumLinkedIn },
      { label: "Walrus on X", href: hackathon.socials.walrusX },
      { label: "Walrus on LinkedIn", href: hackathon.socials.walrusLinkedIn },
    ],
  },
];

export function CtaBanner() {
  return (
    <section id="cta" className="section-pad relative z-[1] overflow-x-clip py-12 md:py-16">
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
            <SubmitProjectButton />
            <a href={hackathon.discordUrl} target="_blank" rel="noreferrer" className="btn-ghost">
              Join Discord
            </a>
            <a
              href={hackathon.docs.aiBuilder}
              target="_blank"
              rel="noreferrer"
              className="btn-accent"
            >
              AI Builder
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
  );
}

export function SiteFooter() {
  return (
    <>
      <section id="resources" className="section-pad relative z-[1] border-t border-[rgba(79,55,253,0.2)] py-10 md:py-12">
        <div className="container-page">
          <p className="eyebrow mb-6">Paths into Tatum & Walrus</p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerCols.map((col) => (
              <div key={col.title}>
                <h3 className="mb-3 text-sm font-semibold text-white">{col.title}</h3>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-white/55 no-underline transition-colors hover:text-[var(--tatum-green)]"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="section-pad relative z-[1] border-t border-[rgba(79,55,253,0.2)] py-8">
        <div className="container-page flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <a href={hackathon.website} target="_blank" rel="noreferrer" className="no-underline">
            <PartnerLockup size="sm" />
          </a>

          <p className="text-xs text-white/35">
            {hackathon.name} · Tatum x Walrus
          </p>
        </div>
      </footer>
    </>
  );
}

export function CtaFooter() {
  return (
    <>
      <CtaBanner />
      <SiteFooter />
    </>
  );
}
