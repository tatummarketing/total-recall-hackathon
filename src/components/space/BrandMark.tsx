type BrandMarkProps = {
  brand: "walrus" | "tatum";
  className?: string;
};

const brandAssets = {
  walrus: "/assets/walrus-drive/02_Walrus_Monogram/SVG/Walrus_Monogram_White.svg",
  tatum: "/assets/tatum/tatum-mark-white.svg",
};

/** Crisp monogram marks — SVG via native img for HD edges */
export function BrandMark({ brand, className = "" }: BrandMarkProps) {
  return (
    <div className={`absolute right-6 top-6 ${className}`} aria-hidden>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={brandAssets[brand]}
        alt=""
        width={56}
        height={56}
        className="h-14 w-14 object-contain"
        decoding="async"
      />
    </div>
  );
}
