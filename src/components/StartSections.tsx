import { tatumStartLinks, walrusStartLinks } from "@/lib/content";
import { AiBuilderPrompt } from "@/components/AiBuilderPrompt";
import { SectionBackdrop } from "@/components/space/SectionBackdrop";

const accentMap = {
  green: "border-[rgba(44,205,154,0.35)] from-[rgba(44,205,154,0.1)]",
  primary: "border-[rgba(79,55,253,0.4)] from-[rgba(79,55,253,0.15)]",
};

type StartLink = (typeof tatumStartLinks)[number];

function StartCards({ items }: { items: StartLink[] }) {
  return (
    <div className="mb-6 grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <a
          key={item.id}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className={`card-recall card-shimmer group relative flex flex-col bg-gradient-to-br p-6 no-underline md:p-7 ${accentMap[item.accent]}`}
        >
          <p className="mb-2 font-mono text-xs tracking-widest text-white/40 uppercase">
            {item.label}
          </p>
          <h3 className="mb-3 text-xl font-semibold text-white">{item.title}</h3>
          <p className="mb-5 text-sm leading-relaxed text-white/65">{item.body}</p>
          <span className="mt-auto text-sm font-semibold text-[var(--tatum-green)] group-hover:underline">
            {item.cta}
          </span>
        </a>
      ))}
    </div>
  );
}

export function TatumStartSection() {
  return (
    <section
      id="start-tatum"
      className="section-pad relative z-[1] overflow-x-clip py-10 md:py-14"
    >
      <SectionBackdrop variant="lower" />

      <div className="container-page relative z-10">
        <div className="mb-8 max-w-2xl md:mb-10">
          <p className="eyebrow mb-3">Resources</p>
          <h2 className="heading-lg text-white">How to start with Tatum.</h2>
          <p className="mt-4 max-w-xl text-white/65">
            Total Recall entries use Tatum RPC and Data APIs. Get an API key, keep the docs
            open, then optionally prompt AI Builder for a first draft. That path has its own
            $500 award.
          </p>
        </div>

        <StartCards items={tatumStartLinks} />

        <div className="card-recall border-[rgba(79,55,253,0.4)] from-[rgba(79,55,253,0.12)] bg-gradient-to-br p-6 md:p-8">
          <p className="mb-2 font-mono text-xs tracking-widest text-white/40 uppercase">
            03 · $500 Bonus
          </p>
          <h3 className="mb-2 text-xl font-semibold text-white">Prompt Tatum AI Builder</h3>
          <p className="mb-5 max-w-2xl text-sm leading-relaxed text-white/65">
            Describe a Total Recall app and we open it in AI Builder. Generate the shell, then
            add Walrus Memory and your Tatum key. Best AI Builder app wins $500 on top of track
            prizes.
          </p>
          <AiBuilderPrompt />
        </div>
      </div>
    </section>
  );
}

export function WalrusStartSection() {
  return (
    <section
      id="start-walrus"
      className="section-pad relative z-[1] overflow-x-clip py-10 md:py-14"
    >
      <SectionBackdrop variant="prizes" />

      <div className="container-page relative z-10">
        <div className="mb-8 max-w-2xl md:mb-10">
          <p className="eyebrow mb-3">Resources</p>
          <h2 className="heading-lg text-white">How to start with Walrus.</h2>
          <p className="mt-4 max-w-xl text-white/65">
            Every submission must write Walrus Memory on Mainnet. Open the dashboard to create
            an agent, then use the docs to store at least 10 memories before you submit.
          </p>
        </div>

        <StartCards items={walrusStartLinks} />

        <div className="card-recall border-[rgba(44,205,154,0.35)] from-[rgba(44,205,154,0.08)] bg-gradient-to-br p-6 md:p-8">
          <p className="mb-2 font-mono text-xs tracking-widest text-white/40 uppercase">
            03
          </p>
          <h3 className="mb-2 text-xl font-semibold text-white">Wire it into your tools</h3>
          <p className="mb-5 max-w-2xl text-sm leading-relaxed text-white/65">
            Add portable memory to Claude Code or Codex, or ask in Walrus Discord if you get
            stuck. Best Walrus Memory wins $500 on top of track prizes.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://blog.walrus.xyz/how-to-add-portable-memory-to-claude-code-and-codex-with-walrus-memory/"
              target="_blank"
              rel="noreferrer"
              className="btn-accent"
            >
              Memory for Claude
            </a>
            <a
              href="https://docs.wal.app/"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              Walrus docs
            </a>
            <a
              href="https://discord.gg/walrusprotocol"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              Walrus Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
