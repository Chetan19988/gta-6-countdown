import { createServerFn } from "@tanstack/react-start";
import { NEWS, type NewsItem } from "./news-data";

// Returns curated news today. Swap the handler body to fetch a real
// news API later — the component contract stays the same.
export const getNews = createServerFn({ method: "GET" }).handler(
  async (): Promise<NewsItem[]> => {
    return NEWS;
  },
);