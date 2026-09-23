import { judgingBonus, judgingCriteria } from "@/lib/content";
import { SectionBackdrop } from "@/components/space/SectionBackdrop";

export function JudgingSection() {
  return (
    <section id="judging" className="section-pad relative z-[1] overflow-x-clip py-8 md:py-10">
      <SectionBackdrop variant="lower" />
      <div className="container-page relative">
        <div className="card-recall relative overflow-hidden p-8 md:p-10">
          <p className="eyebrow mb-3">Scoring</p>
          <h2 className="heading-lg mb-6 text-white">Judging criteria.</h2>

          <ul className="grid gap-3 md:grid-cols-2">
            {judgingCriteria.map((item) => (
              <li
                key={item.title}
                className="flex gap-4 rounded-xl border border-white/10 bg-black/20 px-4 py-4"
              >
                <span className="font-display shrink-0 text-2xl font-bold leading-none text-[var(--tatum-green)]">
                  {item.weight}
                </span>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-6 rounded-xl border border-[rgba(44,205,154,0.25)] bg-[rgba(44,205,154,0.08)] px-4 py-3 text-sm text-white/80">
            <span className="mr-2 text-[var(--tatum-green)]" aria-hidden>
              ★
            </span>
            <span className="font-semibold text-white">Bonus</span>{" "}
            {judgingBonus}
          </p>
        </div>
      </div>
    </section>
  );
}
