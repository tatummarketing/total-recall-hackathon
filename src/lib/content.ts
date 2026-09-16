export const hackathon = {
  name: "Total Recall",
  subtitle: "Memory Hackathon",
  partners: ["Tatum", "Walrus"] as const,
  tagline: "Get your memory back. Build apps that learn on Mars time.",
  summary:
    "Three weeks. Three tracks. Ship something that remembers you. Walrus Memory stores the learning. Tatum powers the data. No crypto degree required.",
  dates: {
    label: "13 Oct to 3 Nov 2026",
    kickoff: "13 Oct",
    buildStart: "13 Oct",
    buildEnd: "3 Nov",
    submit: "3 Nov, 17:00 UTC",
    judging: "4 to 10 Nov",
    winners: "11 Nov",
    note: "",
  },
  location: "Online globally",
  prizePool: "$4,000",
  applyUrl: "#apply",
  discordUrl: "https://discord.gg/hR6NG7sNXE",
  docs: {
    tatumRpc: "https://docs.tatum.io/",
    aiBuilder: "https://ai.tatum.io/",
    walrusMemory: "https://walrus.xyz/",
    walrusDocs: "https://docs.wal.app/",
    previousHackathon: "https://tatum.io/tatum-x-walrus-hackathon",
  },
};

export const missionCards = [
  {
    id: "memory",
    label: "The brief",
    title: "Apps that remember",
    body: "Walrus Memory keeps scores, preferences, and reasoning across sessions. Your product gets sharper every week, not every login.",
    accent: "green",
  },
  {
    id: "web2",
    label: "Who it's for",
    title: "Web2 welcome",
    body: "Product people, AI builders, sports fans, fintech tinkerers. If you can ship a demo, you belong here.",
    accent: "primary",
  },
  {
    id: "stack",
    label: "Under the hood",
    title: "Real stack",
    body: "Memory on Mainnet. Tatum RPC when you need onchain data. AI Builder if you want a one prompt head start.",
    accent: "navy",
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
    title: "Consumer Apps People Use",
    blurb:
      "Money, planning, and social products that feel normal. Shared budgets, group trips, recommendation engines. Blockchain stays invisible. Memory makes the UX sticky.",
    bestFit:
      "Product designers optimizing for the first five minutes.",
    ideas: [
      "Group spending that remembers who owes what",
      "Subscription managers with learned spend limits",
      "Feeds that improve from explicit feedback",
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
];

export const timeline = [
  {
    date: "13 Oct",
    title: "Launch + build starts",
    detail: "Registration opens. Discord office hours go live.",
  },
  {
    date: "13 Oct to 3 Nov",
    title: "Build window",
    detail: "Three weeks to ship with Mainnet memory writes.",
  },
  {
    date: "3 Nov",
    title: "Submissions close",
    detail: "Repo, demo, and blog post due 17:00 UTC.",
  },
  {
    date: "4 to 10 Nov",
    title: "Judging",
    detail: "Same criteria across AI Builder and indie builds.",
  },
  {
    date: "11 Nov",
    title: "Winners announced",
    detail: "Results shared publicly with partners and community.",
  },
];

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
