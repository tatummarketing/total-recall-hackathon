export type CastCharacter = "plain" | "peek" | "wave" | "cool" | "hero";

export type CastAsset = {
  id: CastCharacter;
  src: string;
  width: number;
  height: number;
};

export const walrusCast: Record<CastCharacter, CastAsset> = {
  plain: {
    id: "plain",
    src: "/assets/walrus-cast/walrus-plain.png",
    width: 140,
    height: 228,
  },
  peek: {
    id: "peek",
    src: "/assets/walrus-cast/walrus-peek.png",
    width: 174,
    height: 212,
  },
  wave: {
    id: "wave",
    src: "/assets/walrus-cast/walrus-wave.png",
    width: 200,
    height: 280,
  },
  cool: {
    id: "cool",
    src: "/assets/walrus-cast/walrus-cool.png",
    width: 212,
    height: 261,
  },
  hero: {
    id: "hero",
    src: "/assets/walrus-cast/walrus-hero.png",
    width: 788,
    height: 982,
  },
};

export const castPeekOrder: CastCharacter[] = ["cool", "peek", "wave", "plain"];
