export function RecallBackdrop() {
  return (
    <div className="recall-backdrop pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="recall-sky" />
      <div className="recall-stipple recall-stipple-hero" />
      <div className="recall-terrain" />
      <div className="recall-grid-floor" />
      <div className="scan-line" />
    </div>
  );
}
