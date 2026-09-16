import Image from "next/image";
import { pickWalrus } from "@/lib/walrus-assets";

type WalrusPeekProps = {
  index?: number;
  className?: string;
  size?: number;
};

export function WalrusPeek({ index = 0, className = "", size }: WalrusPeekProps) {
  const asset = pickWalrus(index);
  const w = size ?? asset.width;
  const h = size ?? asset.height;

  const isWide = w > h * 1.2;

  return (
    <div
      className={`pointer-events-none absolute select-none overflow-hidden ${isWide ? "rounded-xl" : ""} ${className}`}
      style={isWide ? { width: w, height: h } : undefined}
      aria-hidden
    >
      <Image
        src={asset.src}
        alt=""
        width={w}
        height={h}
        className={`drop-shadow-[0_8px_24px_rgba(79,55,253,0.4)] ${isWide ? "h-full w-full object-cover" : ""} ${asset.className ?? ""}`}
      />
    </div>
  );
}
