import { Link } from "@tanstack/react-router";

export function BrandMark() {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <span className="relative grid h-10 w-10 place-items-center rounded-md border border-primary/40 bg-background/60 shadow-[0_0_20px_-4px_var(--neon-pink)]">
        <span className="font-display text-xl leading-none text-primary">VI</span>
      </span>
      <span className="font-display text-xl tracking-[0.2em] text-foreground transition-colors group-hover:text-foreground">
        GTA VI <span className="text-foreground">COUNTDOWN</span>
      </span>
    </Link>
  );
}