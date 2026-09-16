type PlanetVariant = "purple" | "green" | "navy" | "mixed";
type PlanetSize = "sm" | "md" | "lg" | "xl";

const sizeMap: Record<PlanetSize, string> = {
  sm: "w-12 h-12",
  md: "w-20 h-20",
  lg: "w-32 h-32",
  xl: "w-44 h-44",
};

const variantMap: Record<PlanetVariant, string> = {
  purple: "planet-purple",
  green: "planet-green",
  navy: "planet-navy",
  mixed: "planet-mixed",
};

type DigitalPlanetProps = {
  variant?: PlanetVariant;
  size?: PlanetSize;
  ringed?: boolean;
  className?: string;
};

export function DigitalPlanet({
  variant = "purple",
  size = "md",
  ringed = false,
  className = "",
}: DigitalPlanetProps) {
  return (
    <div
      className={`digital-planet-wrap ${sizeMap[size]} ${className}`}
      aria-hidden
    >
      <div className={`digital-planet-base ${variantMap[variant]}`} />
      {ringed && <div className="planet-ring" />}
    </div>
  );
}
