import { requirements } from "@/lib/content";
import { SectionBackdrop } from "@/components/space/SectionBackdrop";
import { WalrusCastPeek } from "@/components/WalrusCastPeek";

export function Requirements() {
  return (
    <section id="requirements" className="section-pad relative z-[1] overflow-x-clip py-8 md:py-10">
      <SectionBackdrop variant="lower" />
      <div className="container-page relative">
        <div className="card-recall relative overflow-hidden p-8 md:p-10">
          <WalrusCastPeek
            character="cool"
            size={64}
            className="right-4 top-4 opacity-90"
          />
          <p className="eyebrow mb-3">Submission checklist</p>
          <h2 className="heading-lg mb-6 max-w-[85%] text-white">What to deliver.</h2>
          <ul className="grid gap-3 md:grid-cols-2">
            {requirements.map((item, index) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/75"
              >
                <span className="font-mono text-[var(--tatum-green)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
