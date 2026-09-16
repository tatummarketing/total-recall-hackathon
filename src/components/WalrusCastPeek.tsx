import Image from "next/image";
import { castPeekOrder, walrusCast, type CastCharacter } from "@/lib/walrus-cast";

type WalrusCastPeekProps = {
  character?: CastCharacter;
  index?: number;
  size?: number;
  className?: string;
  flip?: boolean;
};

/** Small walrus peek for card corners / edges */
export function WalrusCastPeek({
  character,
  index = 0,
  size = 72,
  className = "",
  flip = false,
}: WalrusCastPeekProps) {
  const id = character ?? castPeekOrder[index % castPeekOrder.length];
  const asset = walrusCast[id];
  const aspect = asset.height / asset.width;
  const w = size;
  const h = Math.round(size * aspect);

  return (
    <div
      className={`pointer-events-none absolute z-[2] select-none ${className}`}
      aria-hidden
    >
      <Image
        src={asset.src}
        alt=""
        width={w}
        height={h}
        className={`drop-shadow-[0_10px_28px_rgba(79,55,253,0.45)] ${flip ? "scale-x-[-1]" : ""}`}
      />
    </div>
  );
}
