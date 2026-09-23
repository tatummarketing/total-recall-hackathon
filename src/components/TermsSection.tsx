import { eventRules, legalLinks } from "@/lib/content";
import { SectionBackdrop } from "@/components/space/SectionBackdrop";

export function TermsSection() {
  return (
    <section id="terms" className="section-pad relative z-[1] overflow-x-clip py-8 md:py-10">
      <SectionBackdrop variant="lower" />
      <div className="container-page relative">
        <div className="card-recall relative overflow-hidden p-8 md:p-10">
          <p className="eyebrow mb-3">{eventRules.eyebrow}</p>
          <h2 className="heading-lg mb-4 text-white">{eventRules.title}</h2>
          <p className="mb-6 max-w-3xl text-sm leading-relaxed text-white/65">
            {eventRules.intro}{" "}
            Related Walrus hackathon sessions:{" "}
            <a
              href={legalLinks.walrusSessions}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--tatum-green)]"
            >
              thewalrussessions.wal.app
            </a>
            .
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {eventRules.sections.map((section) => (
              <article
                key={section.title}
                className="rounded-xl border border-white/10 bg-black/20 px-4 py-4"
              >
                <h3 className="mb-2 text-sm font-semibold text-white">{section.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{section.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <a
              href={legalLinks.tatumTerms}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--tatum-green)] no-underline hover:underline"
            >
              Tatum Terms of Use
            </a>
            <a
              href={legalLinks.walrusTerms}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--tatum-green)] no-underline hover:underline"
            >
              Walrus General Terms
            </a>
            <a
              href={legalLinks.walrusPrivacy}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--tatum-green)] no-underline hover:underline"
            >
              Walrus Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
