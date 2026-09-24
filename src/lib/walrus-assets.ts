export type WalrusAsset = {
  src: string;
  width: number;
  height: number;
  className?: string;
};

/** Rotating Walrus visuals: mascots, monograms, tokens, crew */
export const walrusAssets: WalrusAsset[] = [
  { src: "/assets/walrus/memwal-mascot.png", width: 120, height: 120 },
  { src: "/assets/walrus/walrus-token-full-color.png", width: 96, height: 96 },
  { src: "/assets/walrus/walrus-token-circle-full-color.png", width: 96, height: 96 },
  { src: "/assets/walrus/walrus-monogram-white.png", width: 100, height: 100 },
  { src: "/assets/promo/walrus-crew.jpg", width: 140, height: 72, className: "rounded-xl object-cover" },
  { src: "/assets/walrus/memwal-mascot.png", width: 80, height: 80, className: "scale-x-[-1]" },
];

export function pickWalrus(index: number): WalrusAsset {
  return walrusAssets[index % walrusAssets.length];
}
