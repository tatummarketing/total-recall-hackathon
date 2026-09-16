import { timeline } from "@/lib/content";
import { SectionBackdrop } from "@/components/space/SectionBackdrop";

export function TimelineSection() {
  return (
    <section id="dates" className="section-pad relative z-[1] overflow-x-clip py-10 md:py-14">
      <SectionBackdrop variant="lower" />
      <div className="container-page relative">
        <div className="mb-6 max-w-xl">
          <p className="eyebrow mb-3">Timeline</p>
          <h2 className="heading-lg text-white">Mission clock.</h2>
        </div>

        <div className="grid gap-3 md:grid-cols-5">
          {timeline.map((item, i) => (
            <div
              key={item.title}
              className="card-recall card-shimmer p-5"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <p className="mb-2 font-mono text-xs text-[var(--tatum-green)]">{item.date}</p>
              <h3 className="mb-2 text-sm font-semibold text-white leading-snug">
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed text-white/50">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
