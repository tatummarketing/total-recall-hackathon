type PartnerLockupProps = {
  size?: "sm" | "md";
  className?: string;
};

/** Crisp SVG lockup — native img so Next does not soft-rasterize the marks */
export function PartnerLockup({ size = "md", className = "" }: PartnerLockupProps) {
  const walrusH = size === "sm" ? 20 : 24;
  const tatumH = size === "sm" ? 16 : 18;

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/walrus-drive/01_Walrus_Logotype/SVG/Walrus_Logotype_White.svg"
        alt="Walrus"
        height={walrusH}
        className="w-auto"
        style={{ height: walrusH }}
        decoding="async"
      />
      <span className="text-[var(--tatum-green)]" aria-hidden>
        x
      </span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/tatum/tatum-logo-white.svg"
        alt="Tatum"
        height={tatumH}
        className="w-auto"
        style={{ height: tatumH }}
        decoding="async"
      />
    </div>
  );
}
