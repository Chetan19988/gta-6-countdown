export type NewsCategory = "Trailers" | "Leaks" | "Official" | "Community";

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  category: NewsCategory;
  source: string;
  url: string;
}

export const NEWS: NewsItem[] = [
  {
    id: "1",
    title: "Release Window Reconfirmed for Late 2026",
    excerpt:
      "The studio reiterated its target launch window, citing polish and the scale of the open world as reasons for the timeline.",
    date: "2026-06-12",
    category: "Official",
    source: "Studio Newsroom",
    url: "#",
  },
  {
    id: "2",
    title: "Second Trailer Breaks Online Viewing Records",
    excerpt:
      "The latest trailer racked up record-breaking views within 24 hours, with fans dissecting every frame for Vice City easter eggs.",
    date: "2026-05-02",
    category: "Trailers",
    source: "Community Recap",
    url: "#",
  },
  {
    id: "3",
    title: "Leaked Map Details Suggest Expanded Everglades Region",
    excerpt:
      "Unverified imagery circulating on forums hints at a much larger southern wetlands area with dynamic weather systems.",
    date: "2026-04-18",
    category: "Leaks",
    source: "Forum Roundup",
    url: "#",
  },
  {
    id: "4",
    title: "Soundtrack Curators Hint at Genre Crossover",
    excerpt:
      "Industry insiders suggest the in-game radio will feature an unprecedented mix of Latin, hip-hop, and synthwave stations.",
    date: "2026-03-30",
    category: "Community",
    source: "Music Beat",
    url: "#",
  },
  {
    id: "5",
    title: "Pre-Order Pages Quietly Appear at Major Retailers",
    excerpt:
      "Several global retailers briefly listed pre-order placeholders before pulling them — pricing speculation begins.",
    date: "2026-03-14",
    category: "Official",
    source: "Retail Watch",
    url: "#",
  },
  {
    id: "6",
    title: "Dev Interview: 'Most Detailed City We've Ever Built'",
    excerpt:
      "A senior developer described unprecedented NPC behaviors, traffic AI, and interior detail throughout Vice City.",
    date: "2026-02-21",
    category: "Community",
    source: "Press Interview",
    url: "#",
  },
];