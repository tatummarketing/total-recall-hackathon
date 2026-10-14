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
      "Meaningful and creative use of Walrus Memory, as well as building with Tatum RPCs or Data APIs.",
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
    detail: "Clear documentation and a working demo.",
  },
];

export const judgingBonus =
  "Share your project on X or LinkedIn. Tagging @Tatum_io and @WalrusFoundation is optional and may earn extra points.";

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

/** PDF line kinds: title, section heading, paragraph, bullet depth, numbered item. */
export type RulesLine =
  | { kind: "title"; text: string }
  | { kind: "heading"; text: string }
  | { kind: "p"; text: string }
  | { kind: "b"; depth: 0 | 1 | 2; text: string }
  | { kind: "n"; n: number; text: string };

export const eventRules: RulesLine[] = [
  { kind: "title", text: "Walrus x Tatum: Total Recall Hackathon Rules" },
  {
    kind: "p",
    text: "The Walrus x Tatum Total Recall Hackathon event (the “Hackathon”) is organized and sponsored by the Walrus Foundation and Tatum Technology LLC (collectively, the “Sponsors”). The overarching goal of the Hackathon is to foster developer engagement with the Walrus protocol (the “Network”) resulting in the deployment and launch of a Network-native feedback and form platform that helps projects, teams, and the Sponsor collect structured feedback directly from their communities (each, a “Submission”) and the secondary goal is to foster the growth of the Network’s global developer community while embodying the Walrus Foundation’s values of openness, fairness and competition through tangible action that involves participants from the entire ecosystem.",
  },
  {
    kind: "p",
    text: "By participating in the Hackathon, you agree to the Walrus General Terms of Service, available at https://docs.wal.app/docs/legal/walrus_general_tos, the Walrus Privacy Policy available at https://docs.wal.app/docs/legal/privacy, the Terms of Total Recall available at https://recall-tatum-walrus.vercel.app/, the Tatum Terms of Use available at https://tatum.io/terms-of-use and these Walrus x Tatum: Total Recall Hackathon Rules (the “Event Rules”).",
  },
  { kind: "heading", text: "Key Information and Dates" },
  {
    kind: "p",
    text: "Hackathon Duration: October 20, 2026, to November 10, 2026 5:00 PM UTC (“Hackathon Duration”)",
  },
  { kind: "p", text: "Submission Deadline: November 10, 2026 5:00 PM UTC" },
  { kind: "p", text: "Results Announcement: November 17, 2026" },
  { kind: "heading", text: "Hackathon Eligibility" },
  {
    kind: "p",
    text: "You must be at least 18 years of age or the age of majority in the jurisdiction where you reside. You must not be a resident of a sanctioned or restricted jurisdiction. Employees and contractors of the Sponsors involved in running the Hackathon may be ineligible for prizes at the Sponsors’ sole discretion. You must not make more than one submission per person.",
  },
  {
    kind: "p",
    text: "You must complete the submission form at https://recall-tatum-walrus.vercel.app to participate in the Hackathon. Your Application must contain:",
  },
  { kind: "b", depth: 0, text: "Email" },
  { kind: "b", depth: 0, text: "Discord handle" },
  { kind: "b", depth: 0, text: "LinkedIn" },
  { kind: "b", depth: 0, text: "How did you hear about this event?" },
  { kind: "b", depth: 0, text: "Is this your first Web3 project?" },
  { kind: "b", depth: 0, text: "Tatum ID" },
  { kind: "b", depth: 0, text: "SUI address" },
  { kind: "b", depth: 0, text: "Account ID (SUI)" },
  { kind: "b", depth: 0, text: "MEMWAL_AGENT_ID" },
  { kind: "b", depth: 0, text: "Project description" },
  { kind: "b", depth: 0, text: "Short demo video (2 to 3 min)" },
  { kind: "b", depth: 0, text: "GitHub repo" },
  { kind: "b", depth: 0, text: "How was your experience building with Walrus?" },
  { kind: "b", depth: 0, text: "How was your experience building with the Tatum AI Builder?" },
  { kind: "heading", text: "Submissions" },
  {
    kind: "p",
    text: "Your Submission must be your original work (or work you are authorized to submit), completed or materially advanced during the Hackathon Duration and must meet the published requirements (including Walrus Memory and Tatum usage where stated). You keep ownership of your IP, and you grant the Sponsors a worldwide, royalty free license to review, demo, and publicly showcase your Submission for Hackathon and marketing purposes.",
  },
  { kind: "heading", text: "Submission Requirements" },
  { kind: "n", n: 1, text: "Walrus Memory integrated and writing on Mainnet." },
  { kind: "n", n: 2, text: "Tatum RPC used for onchain data where relevant." },
  { kind: "n", n: 3, text: "At least 10 memories stored on Mainnet." },
  {
    kind: "n",
    n: 4,
    text: "Published blog post: what it does, how it uses Tatum + Walrus, how it learned over time.",
  },
  { kind: "n", n: 5, text: "Working demo and public repo." },
  {
    kind: "n",
    n: 6,
    text: "Optional build with Tatum AI Builder (ai.tatum.io) for the dedicated $500 bonus described below under Prizes.",
  },
  { kind: "heading", text: "Submission Tracks" },
  {
    kind: "p",
    text: "The Hackathon will reward prizes for three (3) tracks listed below:",
  },
  { kind: "b", depth: 0, text: "Markets & Sports Prediction" },
  {
    kind: "b",
    depth: 1,
    text: "Task: Build a prediction app for sports, elections, culture, or markets. Compare bookmaker odds with onchain sources. Track which voices were right. Users log picks before events. Memory stores credibility scores so the app learns who to trust.",
  },
  {
    kind: "b",
    depth: 1,
    text: "Best Fit For: Fantasy leagues, sports fans, forecasters, and teams building consumer apps first.",
  },
  { kind: "b", depth: 2, text: "Sports companion that learns your leagues and trusted analysts" },
  { kind: "b", depth: 2, text: "Odds dashboards that flag when sources disagree" },
  { kind: "b", depth: 2, text: "Pick journals with post game scorecards" },
  { kind: "b", depth: 0, text: "Smart Agents for Real Life" },
  {
    kind: "b",
    depth: 1,
    text: "Task: Agents that monitor inboxes, expenses, habits, or workflows. Portable memory means they pick up where they left off across tools and sessions.",
  },
  {
    kind: "b",
    depth: 1,
    text: "Best Fit For: AI builders and anyone who wished their assistant remembered last Tuesday.",
  },
  { kind: "b", depth: 2, text: "Research agent with source trust scores" },
  { kind: "b", depth: 2, text: "Expense watchdog with long term memory" },
  { kind: "b", depth: 2, text: "Workflow bots that learn your escalation rules" },
  { kind: "b", depth: 0, text: "Consumer Finance Apps" },
  {
    kind: "b",
    depth: 1,
    text: "Task: Money products people actually open. Shared budgets, spend tracking, savings goals, and payment flows that feel normal. Blockchain stays invisible. Walrus Memory makes balances, habits, and preferences stick across sessions.",
  },
  {
    kind: "b",
    depth: 1,
    text: "Best Fit For: Money products people actually open. Shared budgets, spend tracking, savings goals, and payment flows that feel normal. Blockchain stays invisible. Walrus Memory makes balances, habits, and preferences stick across sessions.",
  },
  { kind: "b", depth: 2, text: "Group spending that remembers who owes what" },
  { kind: "b", depth: 2, text: "Subscription managers with learned spend limits" },
  { kind: "b", depth: 2, text: "Savings goals that adapt real cash flow patterns" },
  { kind: "heading", text: "Judgment of Submissions; Selection of the Winners" },
  {
    kind: "p",
    text: "Submissions are scored against the published judging criteria by a panel appointed by the Sponsors (the “Panel”). Panel decisions are final and binding.",
  },
  { kind: "p", text: "Submissions will be judged on the following criteria:" },
  {
    kind: "n",
    n: 1,
    text: "Walrus and Tatum integration (30%). Meaningful and creative use of Walrus Memory, as well as building with Tatum RPCs or Data APIs.",
  },
  {
    kind: "n",
    n: 2,
    text: "Technical quality (30%). Clean code and successful Tatum Sui RPC integration.",
  },
  { kind: "n", n: 3, text: "Creativity (20%). Original ideas and distinctive product direction." },
  { kind: "n", n: 4, text: "Presentation (20%). Clear documentation and a working demo." },
  {
    kind: "p",
    text: "Bonus: There is a bonus for sharing your project on X or LinkedIn. Tagging @Tatum_io and @WalrusFoundation is optional and may earn extra points.",
  },
  {
    kind: "p",
    text: "The Sponsors may disqualify Submissions that are incomplete, fraudulent, abusive, do not comply with these rules, or that violate these Event Rules or applicable law.",
  },
  { kind: "heading", text: "Prizes" },
  {
    kind: "p",
    text: "A prize (the “Prize”) will be awarded to Hackathon Team winners (each a “Prize Recipient”). Any prize amounts listed on this site are estimates and may be paid in USD, stablecoins, or other forms the Sponsors choose. For this Hackathon, the prizes will be denominated in a stablecoin of the Sponsors’ choosing such as U.S. Dollar Coin (USDC), issued by Circle. The Prize will be deposited into a Prize Recipient-owned wallet that is capable of accepting USDC (“Recipient Wallet”). In order to receive the prize, one member of the winning Team must confirm acceptance of the prize via email and provide to the Sponsors its unique Recipient Wallet address information within 14 days of an official announcement of results (as determined by the Sponsors).",
  },
  {
    kind: "p",
    text: "For the avoidance of doubt, the Sponsors shall determine if an announcement is an official announcement at their own discretion. Prizes are awarded only if and when the Sponsors confirm winners. Additionally, Prize Recipients must confirm via a de minimis test transaction that the Recipient Wallet is compatible with USDC.",
  },
  {
    kind: "p",
    text: "Each Prize Recipient accepts all risk of loss with respect to any transfer of USDC or other digital currency to an incompatible wallet or an incorrect wallet address provided by such Prize Recipient. Taxes and reporting obligations are solely the winner’s responsibility. Prizes have no cash alternative except as the Sponsors allow, and are not transferable without written consent.",
  },
  {
    kind: "p",
    text: "Prizes will be awarded to the Teams in each category whose Submission earns the highest total overall score(s) (if in a track that awards prizes to 1st, 2nd and 3rd place) as determined by the Panel. The prizes are as follows:",
  },
  {
    kind: "p",
    text: "Track Prizes - $1,000 per track, awarded in each of the three tracks:",
  },
  { kind: "b", depth: 0, text: "Markets & Sports Prediction" },
  { kind: "b", depth: 1, text: "Prizes: 1st Place, $500; 2nd place, $300; 3rd Place, $200." },
  { kind: "b", depth: 0, text: "Smart Agents for Real Life" },
  { kind: "b", depth: 1, text: "Prizes: 1st Place, $500; 2nd place, $300; 3rd Place, $200." },
  { kind: "b", depth: 0, text: "Consumer Finance Apps" },
  { kind: "b", depth: 1, text: "Prizes: 1st Place, $500; 2nd place, $300; 3rd Place, $200." },
  {
    kind: "p",
    text: "Best Walrus Memory Prize — $500: Selected by the Walrus team and awarded to the participant with the deepest learning loop. Memories that visibly change the product.",
  },
  {
    kind: "p",
    text: "Best Tatum AI Builder App Prize — $500: Awarded to the participant with the best shippable product built primarily with ai.tatum.io.",
  },
  {
    kind: "p",
    text: "Mystery Bounty — $500: This bounty will be introduced closer to the event, revealed on Discord.",
  },
  {
    kind: "p",
    text: "If a selected winning Team cannot be contacted via email, is ineligible, or fails to claim a prize within 14 days of the official announcement of results, the prize may be forfeited and an alternate winner may be selected from the remaining eligible Submissions as determined in the sole discretion of the Panel.",
  },
  { kind: "heading", text: "No guarantee; changes" },
  {
    kind: "p",
    text: "Participation does not guarantee a prize, placement, publicity, or future opportunity. The Sponsors may modify, suspend, or cancel the Hackathon, prize pool, timeline, or rules for any reason, including technical, legal, or operational issues, without liability. This Hackathon is a skill based event, not a lottery or game of chance.",
  },
  { kind: "heading", text: "Liability" },
  {
    kind: "p",
    text: "To the maximum extent permitted by law, the Sponsors and their affiliates are not liable for any indirect, incidental, special, consequential, or punitive damages arising from the Hackathon or your Submission. Platforms and third party services (including Discord, GitHub, and blockchain networks) are used at your own risk.",
  },
];