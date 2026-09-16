import { BlackHole } from "./BlackHole";
import { DigitalPlanet } from "./DigitalPlanet";

type SectionBackdropProps = {
  variant?: "mission" | "tracks" | "prizes" | "lower";
};

/** Ambient grids only for mission — big supernova lives in the section itself */
export function SectionBackdrop({ variant = "mission" }: SectionBackdropProps) {
  if (variant === "mission") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-visible" aria-hidden>
        <div className="section-dot-grid opacity-35" />
        <div className="section-grid opacity-30" />
      </div>
    );
  }

  if (variant === "tracks") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-visible" aria-hidden>
        <div className="section-dot-grid opacity-35" />
        <div className="section-grid opacity-45" />
        <DigitalPlanet
          variant="purple"
          size="lg"
          ringed
          className="absolute right-10 top-8 opacity-50 float-planet"
        />
        <DigitalPlanet variant="green" size="md" className="absolute left-8 bottom-12 opacity-45 float-planet-delay" />
        <BlackHole size="md" className="absolute right-[24%] bottom-12 opacity-55" />
      </div>
    );
  }

  if (variant === "prizes") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-visible" aria-hidden>
        <div className="section-dot-grid opacity-30" />
        <div className="section-grid opacity-35" />
        <DigitalPlanet variant="mixed" size="md" className="absolute left-10 bottom-8 opacity-50 float-planet" />
        <DigitalPlanet variant="navy" size="sm" className="absolute right-10 top-10 opacity-40 float-planet-delay" />
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-visible" aria-hidden>
      <div className="section-dot-grid opacity-40" />
      <div className="section-grid opacity-40" />
      <DigitalPlanet variant="green" size="md" className="absolute right-10 top-6 opacity-45 float-planet" />
      <DigitalPlanet variant="purple" size="sm" className="absolute left-10 bottom-8 opacity-40 float-planet-delay" />
    </div>
  );
}
