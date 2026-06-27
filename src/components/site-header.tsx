import { Link } from "@tanstack/react-router";
import { BrandMark } from "./brand-mark";

const links = [
  { to: "/", label: "Countdown" },
  { to: "/news", label: "News" },
  { to: "/author", label: "Author" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <BrandMark />
        <nav className="flex items-center gap-1 sm:gap-2">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{
                className:
                  "text-foreground border-primary/60 bg-primary/10",

              }}
              inactiveProps={{
                className:
                  "text-foreground border-transparent hover:text-foreground",

              }}
              className="rounded-md border px-3 py-1.5 text-sm font-medium tracking-wide uppercase transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}