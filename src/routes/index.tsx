import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { CountdownTimer } from "@/components/countdown-timer";
import { LiteYouTube } from "@/components/lite-youtube";
import { RELEASE_LABEL } from "@/lib/countdown";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GTA VI Countdown — Live Release Timer" },
      {
        name: "description",
        content:
          "Live countdown to GTA VI's release. Track days, hours, minutes and seconds in a neon Vice City aesthetic.",
      },
      { property: "og:title", content: "GTA VI Countdown — Live Release Timer" },
      {
        property: "og:description",
        content:
          "Live countdown to GTA VI's release in a neon Vice City aesthetic.",
      },
    ],
  }),
  component: Index,
});

const VIDEOS = [
  { id: "EiQEBYDox_k", title: "GTA VI — Trailer 1" },
  { id: "VQRLujxTm3c", title: "GTA VI — Trailer 2" },
  { id: "QdBZY2fkU-0", title: "GTA VI — Featured" },
] as const;

const PREORDER = [
  { label: "Rockstar Games", href: "https://www.rockstargames.com/VI" },
  { label: "PlayStation Store", href: "https://store.playstation.com/" },
  { label: "Xbox Store", href: "https://www.xbox.com/games/store" },
];

function Index() {
  return (
    <>
      {/* First fold: countdown is immediately visible */}
      <section className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-5xl flex-col items-center justify-center px-4 py-8 text-center sm:px-6">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-foreground sm:text-xs">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
          Releasing {RELEASE_LABEL}
        </span>
        <h1
          className="font-display text-5xl leading-[0.9] tracking-tight text-foreground sm:text-7xl md:text-8xl"
          style={{
            textShadow: "0 0 40px color-mix(in oklab, var(--rockstar-yellow) 35%, transparent)",
          }}
        >
          GTA VI Countdown
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
          The official-style countdown to Grand Theft Auto VI. Every second
          counts.
        </p>
        <div className="mt-6 w-full sm:mt-8">
          <CountdownTimer />
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:mt-8 sm:gap-3">
          {PREORDER.map((p) => (
            <a
              key={p.href}
              href={p.href}
              target="_blank"
              rel="noopener"
              className="rounded-md bg-primary px-4 py-2 font-display text-sm tracking-widest text-primary-foreground transition-transform hover:scale-105 sm:px-5 sm:text-base"
            >
              Pre-order · {p.label}
            </a>
          ))}
          <Link
            to="/news"
            className="rounded-md border border-primary/60 px-4 py-2 font-display text-sm tracking-widest text-primary transition-colors hover:bg-primary/10 sm:px-5 sm:text-base"
          >
            Latest News
          </Link>
        </div>
      </section>

      {/* Trailers — lazy facade, only loads YouTube on click */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <header className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
            Official Trailers
          </p>
          <h2 className="mt-2 font-display text-4xl tracking-tight text-foreground sm:text-5xl">
            Watch the hype
          </h2>
        </header>
        <div className="grid gap-5 md:grid-cols-3">
          {VIDEOS.map((v) => (
            <LiteYouTube key={v.id} id={v.id} title={v.title} />
          ))}
        </div>
      </section>

      {/* Official links */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="rounded-2xl border border-primary/30 bg-card/60 p-6 backdrop-blur-md sm:p-10">
          <h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
            Official Links
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            Straight to the source — pre-book, follow and stay tuned.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "Rockstar Games — GTA VI", href: "https://www.rockstargames.com/VI" },
              { label: "Rockstar Newswire", href: "https://www.rockstargames.com/newswire" },
              { label: "PlayStation Store", href: "https://store.playstation.com/" },
              { label: "Xbox Store", href: "https://www.xbox.com/games/store" },
              { label: "Rockstar on X", href: "https://x.com/RockstarGames" },
              { label: "Rockstar on YouTube", href: "https://www.youtube.com/@RockstarGames" },
            ].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-between rounded-md border border-border bg-background/60 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {l.label}
                  <span aria-hidden>↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
