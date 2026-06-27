import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin } from "lucide-react";

export const Route = createFileRoute("/author")({
  head: () => ({
    meta: [
      { title: "Chetan Kumar — Author of GTA VI Countdown" },
      {
        name: "description",
        content:
          "Meet Chetan Kumar, the developer behind the GTA VI Countdown — a fan project celebrating the wait for Vice City.",
      },
      { property: "og:title", content: "Chetan Kumar — Author" },
      {
        property: "og:description",
        content:
          "The developer behind the GTA VI Countdown fan project.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          url: "https://the-gta-6-countdown.lovable.app/author",
          mainEntity: {
            "@type": "Person",
            name: "Chetan Kumar",
            description: "Developer and lifelong Rockstar fan, author of the GTA VI Countdown.",
            sameAs: [
              "https://github.com/Chetan19988",
              "https://www.linkedin.com/in/askchetan/",
            ],
          },
        }),
      },
    ],
  }),
  component: AuthorPage,
});

function AuthorPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <div className="rounded-2xl border border-border/60 bg-card/60 p-8 backdrop-blur-md sm:p-12">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
          <div
            className="grid h-32 w-32 shrink-0 place-items-center rounded-full border-2 border-primary/60 font-display text-5xl text-primary"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, color-mix(in oklab, var(--neon-pink) 40%, transparent), transparent 70%)",
              boxShadow: "0 0 40px -10px var(--neon-pink)",
            }}
          >
            CK
          </div>
          <div className="text-center sm:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">
              The Author
            </p>
            <h1 className="mt-2 font-display text-5xl tracking-tight text-foreground sm:text-6xl">
              Chetan Kumar
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Developer · Gamer · Lifelong Rockstar fan
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3 sm:justify-start">
              <a
                href="https://github.com/Chetan19988"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-primary/60 bg-primary px-4 py-2 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/askchetan/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-foreground/40 bg-transparent px-4 py-2 text-sm font-semibold uppercase tracking-wider text-foreground hover:bg-foreground/10"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl tracking-wide text-primary">
              About Me
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              I'm a developer who grew up exploring Liberty City, San Andreas
              and Los Santos. Every Rockstar release shaped what I think games
              can be — so when GTA VI was announced, I had to build something
              to mark the wait.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl tracking-wide text-accent">
              Why This Site
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              A simple home for the countdown, the latest news and the
              community hype. No ads, no clutter — just the timer, the neon,
              and the wait.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}