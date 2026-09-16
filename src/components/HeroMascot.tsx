import Image from "next/image";

type HeroMascotProps = {
  priority?: boolean;
  className?: string;
};

/** Main walrus mascot — holds Tatum mark on card */
export function HeroMascot({ priority = false, className = "" }: HeroMascotProps) {
  return (
    <div
      className={`float-mascot relative aspect-[4/5] w-full max-w-md overflow-visible ${className}`}
    >
      <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(79,55,253,0.22),transparent_70%)]" />
      <Image
        src="/assets/walrus-cast/walrus-hero.png"
        alt="Walrus mascot holding Tatum mark"
        fill
        priority={priority}
        className="object-contain object-bottom drop-shadow-[0_24px_80px_rgba(79,55,253,0.5)]"
        sizes="(max-width: 768px) 90vw, 420px"
      />
    </div>
  );
}
