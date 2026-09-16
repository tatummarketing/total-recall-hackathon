/** Animated supernova / nebula burst for dynamic space sections */
export function Supernova({ className = "" }: { className?: string }) {
  return (
    <div className={`supernova ${className}`} aria-hidden>
      <div className="supernova-core" />
      <div className="supernova-ring supernova-ring-a" />
      <div className="supernova-ring supernova-ring-b" />
      <div className="supernova-ring supernova-ring-c" />
      <div className="supernova-ring supernova-ring-d" />
      <div className="supernova-rays" />
      <div className="supernova-spark supernova-spark-1" />
      <div className="supernova-spark supernova-spark-2" />
      <div className="supernova-spark supernova-spark-3" />
      <div className="supernova-spark supernova-spark-4" />
      <div className="supernova-spark supernova-spark-5" />
      <div className="supernova-spark supernova-spark-6" />
    </div>
  );
}
