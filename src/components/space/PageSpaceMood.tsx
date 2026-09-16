/** Ambient digital-space layer for the page below the hero */
export function PageSpaceMood() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-[65vh] bottom-0 z-0 overflow-x-clip"
      aria-hidden
    >
      <div className="page-space-stars" />
      <div className="page-space-grid page-space-grid-a" />
      <div className="page-space-grid page-space-grid-b" />
      <div className="page-space-pyramid page-space-pyramid-1" />
      <div className="page-space-pyramid page-space-pyramid-2" />
      <div className="page-space-pyramid page-space-pyramid-3" />
      <div className="page-space-void page-space-void-1" />
      <div className="page-space-void page-space-void-2" />
      <div className="page-space-planet page-space-planet-1 float-planet" />
      <div className="page-space-planet page-space-planet-2 float-planet-delay" />
      <div className="page-space-planet page-space-planet-3 float-planet" />
      <div className="page-space-planet page-space-planet-4 float-planet-delay" />
      <div className="page-space-planet page-space-planet-5 float-planet" />
      <div className="page-space-orbit page-space-orbit-1" />
      <div className="page-space-orbit page-space-orbit-2" />
      <div className="page-space-supernova-glow" />
    </div>
  );
}
