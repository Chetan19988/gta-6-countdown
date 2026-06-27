export function ViBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      {/* gradient wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--neon-pink)_0%,_transparent_45%),radial-gradient(ellipse_at_bottom_right,_var(--neon-cyan)_0%,_transparent_40%)] opacity-25" />
      {/* giant VI */}
      <div className="absolute inset-0 grid place-items-center">
        <span
          className="font-display text-[42vw] leading-none tracking-tighter text-transparent opacity-[0.07] select-none"
          style={{
            WebkitTextStroke: "2px var(--neon-pink)",
          }}
        >
          VI
        </span>
      </div>
      {/* scanlines */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, white 0 1px, transparent 1px 3px)",
        }}
      />
      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_black_100%)] opacity-80" />
    </div>
  );
}