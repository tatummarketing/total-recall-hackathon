type BlackHoleProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "w-16 h-16",
  md: "w-24 h-24",
  lg: "w-32 h-32",
};

export function BlackHole({ className = "", size = "md" }: BlackHoleProps) {
  return <div className={`black-hole ${sizes[size]} ${className}`} aria-hidden />;
}
