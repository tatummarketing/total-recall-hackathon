export const hackathon = {
  name: "Total Recall",
  subtitle: "Memory Hackathon",
  partners: ["Tatum", "Walrus"] as const,
  tagline: "Get your memory back.",
  summary:
    "Three weeks. Three tracks. Ship something that remembers you. Walrus Memory stores the learning. Tatum AI Builder and RPCs power the build. No crypto degree required.",
  dates: {
    label: "20 Oct to 10 Nov 2026",
    kickoff: "20 Oct",
    buildStart: "20 Oct",
    buildEnd: "10 Nov",
    submit: "10 Nov, 17:00 UTC",
    judging: "11 to 16 Nov",
    winners: "17 Nov",
    note: "",
  },
  location: "Online globally",
  prizePool: "$4,500",
  applyUrl: "#apply",
  discordUrl: "https://discord.gg/hR6NG7sNXE",
  website: "https://tatum.io",
  docs: {
    tatumRpc: "https://docs.tatum.io/",
    aiBuilder: "https://ai.tatum.io/",
    dashboard: "https://dashboard.tatum.io/",
    getStarted: "https://docs.tatum.io/docs/getting-started",
    rpc: "https://docs.tatum.io/reference",
    pricing: "https://tatum.io/pricing",
    walrusSite: "https://walrus.xyz/",
    walrusMemory: "https://docs.wal.app/walrus-memory",
    walrusMemoryClaude:
      "https://blog.walrus.xyz/how-to-add-portable-memory-to-claude-code-and-codex-with-walrus-memory/",
    walrusMemoryDashboard: "https://memory.walrus.xyz/dashboard",
    walrusDocs: "https://docs.wal.app/",
    walrusDiscord: "https://discord.gg/walrusprotocol",
    previousHackathon: "https://tatum.io/tatum-x-walrus-hackathon",
  },
  socials: {
    tatumX: "https://x.com/tatum_io",
    tatumLinkedIn: "https://www.linkedin.com/company/tatumio",
    walrusX: "https://x.com/WalrusProtocol",
    walrusLinkedIn: "https://www.linkedin.com/company/walrus-foundation",
  },
  resources: [
    { label: "Tatum website", href: "https://tatum.io" },
    { label: "Docs", href: "https://docs.tatum.io/" },
    { label: "AI Builder", href: "https://ai.tatum.io/" },
    { label: "Dashboard", href: "https://dashboard.tatum.io/" },
    { label: "RPC & APIs", href: "https://docs.tatum.io/reference" },
    { label: "Get started", href: "https://docs.tatum.io/docs/getting-started" },
    { label: "Pricing", href: "https://tatum.io/pricing" },
    { label: "Walrus Memory docs", href: "https://docs.wal.app/walrus-memory" },
    { label: "Walrus Memory for Claude", href: "https://blog.walrus.xyz/how-to-add-portable-memory-to-claude-code-and-codex-with-walrus-memory/" },
    { label: "Walrus docs", href: "https://docs.wal.app/" },
    { label: "Walrus Discord", href: "https://discord.gg/walrusprotocol" },
  ],
};

export const aiBuilderPrompt = {
  builderUrl: "https://appbuilder.prototype.tatum.dev/",
  ref: "total-recall",
  placeholder: "Build an app that remembers its users with Walrus Memory…",
  examples: [
    {
      label: "Sports picks journal",
      prompt:
        "Build a sports prediction app where users log picks before each match. Use Walrus Memory to remember every pick and keep a credibility score for each analyst, so the app learns who to trust over time.",
    },
    {
      label: "Expense watchdog agent",
      prompt:
        "Build an expense watchdog agent that reviews my spending each week. Use Walrus Memory to remember my budgets, recurring bills, and past alerts so it picks up where it left off every session.",
    },
    {
      label: "Shared budget app",
      prompt:
        "Build a shared budget app for friends and roommates that tracks who owes what. Use Walrus Memory to remember balances, split rules, and spending habits across sessions, with Tatum RPCs for onchain payments.",
    },
  ],
};

export const tatumStartLinks = [
  {
    id: "apikey",
    label: "01",
    title: "Get your API key",
    body: "Create a free Tatum account. You need the dashboard account ID on the submission form.",
    href: "https://dashboard.tatum.io/",
    cta: "Sign up for an API key",
    accent: "green" as const,
  },
  {
    id: "docs",
    label: "02",
    title: "Read the docs",
    body: "RPC, Data APIs, and getting started. Use these when your app reads onchain data.",
    href: "https://docs.tatum.io/docs/getting-started",
    cta: "Open Tatum docs",
    accent: "primary" as const,
  },
];

export const walrusStartLinks = [
  {
    id: "memory-dash",
    label: "01",
    title: "Open the Memory dashboard",
    body: "Create a Walrus Memory agent. The public key under Delegate keys is the MEMWAL_AGENT_ID on the form.",
    href: "https://memory.walrus.xyz/dashboard",
    cta: "Open Memory dashboard",
    accent: "green" as const,
  },
  {
    id: "memory-docs",
    label: "02",
    title: "Read the Memory docs",
    body: "How portable memory works, how to write on Mainnet, and how to keep at least 10 memories.",
    href: "https://docs.wal.app/walrus-memory",
    cta: "Open Walrus Memory docs",
    accent: "primary" as const,
  },
];

export const missionCards = [
  {
    id: "memory",
    label: "The brief",
    title: "Apps that remember",
    body: "Walrus Memory keeps scores, preferences, and reasoning across sessions. Your product gets sharper every week, not every login.",
    accent: "green",
  },
  {
    id: "builder",
    label: "Fast start",
    title: "Tatum AI Builder",
    body: "Optional path with its own $500 award. Generate a first version, then wire Walrus Memory and Tatum RPCs. See How to start with Tatum.",
    accent: "primary",
  },
  {
    id: "web2",
    label: "Who it's for",
    title: "Web2 welcome",
    body: "Product people, AI builders, sports fans, fintech tinkerers. If you can ship a demo, you belong here.",
    accent: "navy",
  },
  {
    id: "stack",
    label: "Under the hood",
    title: "Real stack",
    body: "Memory on Mainnet. Tatum Sui RPC and Data APIs when you need onchain reads. Indie builds and AI Builder paths compete on the same tracks.",
    accent: "green",
  },
];

export type Track = {
  id: string;
  number: string;
  title: string;
  blurb: string;
  bestFit: string;
  ideas: string[];
  accent: "primary" | "green" | "navy";
  walrusIndex: number;
};

export const trackPrizeTiers = [
  { place: "1st", amount: "$500" },
  { place: "2nd", amount: "$300" },
  { place: "3rd", amount: "$200" },
];

export const tracks: Track[] = [
  {
    id: "prediction",
    number: "01",
    title: "Markets & Sports Prediction",
    blurb:
      "Build a prediction app for sports, elections, culture, or markets. Compare bookmaker odds with onchain sources. Track which voices were right. Users log picks before events. Memory stores credibility scores so the app learns who to trust.",
    bestFit:
      "Fantasy leagues, sports fans, forecasters, and teams building consumer apps first.",
    ideas: [
      "Sports companion that learns your leagues and trusted analysts",
      "Odds dashboards that flag when sources disagree",
      "Pick journals with post game scorecards",
    ],
    accent: "primary",
    walrusIndex: 0,
  },
  {
    id: "agents",
    number: "02",
    title: "Smart Agents for Real Life",
    blurb:
      "Agents that monitor inboxes, expenses, habits, or workflows. Portable memory means they pick up where they left off across tools and sessions.",
    bestFit:
      "AI builders and anyone who wished their assistant remembered last Tuesday.",
    ideas: [
      "Research agent with source trust scores",
      "Expense watchdog with long term memory",
      "Workflow bots that learn your escalation rules",
    ],
    accent: "green",
    walrusIndex: 2,
  },
  {
    id: "consumer",
    number: "03",
    title: "Consumer Finance Apps",
    blurb:
      "Money products people actually open. Shared budgets, spend tracking, savings goals, and payment flows that feel normal. Blockchain stays invisible. Walrus Memory makes balances, habits, and preferences stick across sessions.",
    bestFit:
      "Fintech and product builders shipping everyday money tools: budgets, splits, and spend that learn with the user.",
    ideas: [
      "Group spending that remembers who owes what",
      "Subscription managers with learned spend limits",
      "Savings goals that adapt to real cash flow patterns",
    ],
    accent: "navy",
    walrusIndex: 4,
  },
];

export const requirements = [
  "Walrus Memory integrated and writing on Mainnet",
  "Tatum RPC used for onchain data where relevant",
  "At least 10 memories stored on Mainnet",
  "Published blog post: what it does, how it uses Tatum + Walrus, how it learned over time",
  "Working demo and public repo",
  "Optional build with Tatum AI Builder (ai.tatum.io) for the dedicated $500 bonus",
];

export const bonusPrizes = [
  {
    title: "Best Walrus Memory",
    amount: "$500",
    detail: "Deepest learning loop. Memories that visibly change the product.",
    accent: "green" as const,
    brand: "walrus" as const,
  },
  {
    title: "Best Tatum AI Builder app",
    amount: "$500",
    detail: "Best shippable product built primarily with ai.tatum.io.",
    accent: "primary" as const,
    brand: "tatum" as const,
  },
  {
    title: "Mystery bounty",
    amount: "$500",
    detail: "A $500 surprise brief, introduced closer to the event. Watch Discord for the reveal.",
    accent: "navy" as const,
    brand: null,
  },
];

export const timeline = [
  {
    date: "20 Oct",
    title: "Launch + build starts",
    detail: "Registration opens. Discord office hours go live.",
  },
  {
    date: "20 Oct to 10 Nov",
    title: "Build window",
    detail: "Three weeks to ship with Mainnet memory writes.",
  },
  {
    date: "10 Nov",
    title: "Submissions close",
    detail: "Repo, demo, and blog post due 17:00 UTC.",
  },
  {
    date: "11 to 16 Nov",
    title: "Judging",
    detail: "Same criteria across AI Builder and indie builds.",
  },
  {
    date: "17 Nov",
    title: "Winners announced",
    detail: "Results shared publicly with partners and community.",
  },
];

export const judgingCriteria = [
  {
    title: "Walrus and Tatum Integration",
    weight: "30%",
    detail:
      "Meaningful, creative use of Walrus Memory as well as building with Tatum RPCs or Data APIs.",
  },
  {
    title: "Technical Quality",
    weight: "30%",
    detail: "Clean code and successful Tatum Sui RPC integration.",
  },
  {
    title: "Creativity",
    weight: "20%",
    detail: "Original ideas and distinctive product direction.",
  },
  {
    title: "Presentation",
    weight: "20%",
    detail: "Clear docs and a working demo.",
  },
];

export const judgingBonus =
  "Share on X/LinkedIn tagging @Tatum_io and @WalrusFoundation";

export const faqs = [
  {
    q: "Who can join?",
    a: "Solo builders or teams. Crypto native or not. If you can ship a demo in three weeks, you are in.",
  },
  {
    q: "Must I use AI Builder?",
    a: "No. It is one path with its own $500 award. Indie builds compete on the same track prizes.",
  },
  {
    q: "What must submissions include?",
    a: "Mainnet Walrus Memory (10+ writes), Tatum RPC where relevant, blog post, demo, and repo.",
  },
  {
    q: "Are tracks prescriptive?",
    a: "They suggest direction. Execution beats novelty. Do not copy the brief verbatim.",
  },
  {
    q: "Online or in person?",
    a: "Fully online and open globally.",
  },
  {
    q: "Existing projects allowed?",
    a: "Yes if the submitted work is new progress during the build window.",
  },
];

/** Legal links referenced by Event Rules and submission acceptance */
export const legalLinks = {
  tatumTerms: "https://tatum.io/terms-of-use",
  walrusTerms: "https://docs.wal.app/docs/legal/walrus_general_tos",
  walrusPrivacy: "https://docs.wal.app/docs/legal/privacy",
  walrusSessions: "https://thewalrussessions.wal.app/index.html",
};

export const eventRules = {
  eyebrow: "Event rules",
  title: "Terms for Total Recall.",
  intro:
    "Total Recall (the “Hackathon”) is organized jointly by Tatum Technology LLC (“Tatum”) and the Walrus Foundation (“Walrus”, and together with Tatum, the “Sponsors”). By registering, submitting, or otherwise participating, you agree to these Event Rules, the Tatum Terms of Use, and the Walrus General Terms of Service.",
  sections: [
    {
      title: "Eligibility",
      body: "You must be at least 18 years old (or the age of majority where you live). You must not be a resident of a sanctioned or restricted jurisdiction. Employees, contractors, and immediate family of the Sponsors involved in running the Hackathon may be ineligible for prizes at the Sponsors’ sole discretion. Teams and solo builders are welcome.",
    },
    {
      title: "Submissions",
      body: "Your Submission must be your original work (or work you are authorized to submit), completed or materially advanced during the build window, and must meet the published requirements (including Walrus Memory and Tatum usage where stated). You keep ownership of your IP, and you grant the Sponsors a worldwide, royalty free license to review, demo, and publicly showcase your Submission for Hackathon and marketing purposes.",
    },
    {
      title: "Judging",
      body: "Submissions are scored against the published judging criteria by a panel appointed by the Sponsors. Panel decisions are final and binding. The Sponsors may disqualify Submissions that are incomplete, fraudulent, abusive, off brief, or that violate these Event Rules or applicable law.",
    },
    {
      title: "Prizes",
      body: "Any prize amounts listed on this site are estimates and may be paid in USD, stablecoins, or other forms the Sponsors choose. Prizes are awarded only if and when the Sponsors confirm winners. Prize Recipients must respond and provide any required payment or wallet details within 14 days of an official winner announcement (as determined by the Sponsors). If a winner is unreachable, ineligible, or fails to claim, the prize may be forfeited and an alternate selected. You accept all risk of loss from incorrect wallet addresses or incompatible wallets. Taxes and reporting obligations are solely the winner’s responsibility. Prizes have no cash alternative except as the Sponsors allow, and are not transferable without written consent.",
    },
    {
      title: "No guarantee; changes",
      body: "Participation does not guarantee a prize, placement, publicity, or future opportunity. The Sponsors may modify, suspend, or cancel the Hackathon, prize pool, timeline, or rules for any reason, including technical, legal, or operational issues, without liability. This Hackathon is a skill based event, not a lottery or game of chance.",
    },
    {
      title: "Liability",
      body: "To the maximum extent permitted by law, the Sponsors and their affiliates are not liable for any indirect, incidental, special, consequential, or punitive damages arising from the Hackathon or your Submission. Platforms and third party services (including Discord, GitHub, and blockchain networks) are used at your own risk.",
    },
  ],
};