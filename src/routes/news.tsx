import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { format } from "date-fns";
import { getNews } from "@/lib/news.functions";
import type { NewsCategory } from "@/lib/news-data";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "GTA VI News — Latest Updates, Trailers & Leaks" },
      {
        name: "description",
        content:
          "All the latest GTA VI news in one place: official announcements, trailer breakdowns, leaks and community theories.",
      },
      { property: "og:title", content: "GTA VI News — Latest Updates" },
      {
        property: "og:description",
        content:
          "Official announcements, trailer breakdowns and community theories about GTA VI.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          url: "https://the-gta-6-countdown.lovable.app/news",
          name: "GTA VI News",
          description:
            "Curated GTA VI news: official announcements, trailer breakdowns, leaks and community theories.",
        }),
      },
    ],
  }),
  component: NewsPage,
});

const FILTERS: ("All" | NewsCategory)[] = [
  "All",
  "Official",
  "Trailers",
  "Leaks",
  "Community",
];

function NewsPage() {
  const fetchNews = useServerFn(getNews);
  const { data, isLoading } = useQuery({
    queryKey: ["news"],
    queryFn: () => fetchNews(),
  });
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  const items = useMemo(() => {
    if (!data) return [];
    return filter === "All" ? data : data.filter((n) => n.category === filter);
  }, [data, filter]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <header className="mb-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">
          The Feed
        </p>
        <h1 className="mt-3 font-display text-5xl tracking-tight text-foreground sm:text-7xl">
          GTA VI <span className="text-primary">News</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Every update, leak and trailer breakdown — all in one place.
        </p>
      </header>

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {FILTERS.map((f) => {
          const active = f === filter;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                active
                  ? "border-primary bg-primary/15 text-primary"
                  : "border-border/60 text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      {isLoading ? (
        <p className="text-center text-muted-foreground">Loading news…</p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((n) => (
            <article
              key={n.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card/60 backdrop-blur-md transition-colors hover:border-primary/60"
            >
              <div
                className="relative h-40 w-full"
                style={{
                  background:
                    "linear-gradient(135deg, color-mix(in oklab, var(--neon-pink) 60%, transparent), color-mix(in oklab, var(--neon-cyan) 50%, transparent))",
                }}
              >
                <span className="absolute left-3 top-3 rounded-md bg-background/80 px-2 py-1 text-[0.6rem] font-semibold uppercase tracking-widest text-accent">
                  {n.category}
                </span>
                <span className="absolute right-3 bottom-3 font-display text-2xl tracking-widest text-background/80">
                  VI
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <time className="text-xs uppercase tracking-wider text-muted-foreground">
                  {format(new Date(n.date), "MMM d, yyyy")} · {n.source}
                </time>
                <h2 className="mt-2 font-display text-xl leading-tight tracking-tight text-foreground transition-colors group-hover:text-primary">
                  {n.title}
                </h2>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">
                  {n.excerpt}
                </p>
                <a
                  href={n.url}
                  className="mt-4 inline-flex w-fit text-xs font-semibold uppercase tracking-widest text-accent hover:text-primary"
                >
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}