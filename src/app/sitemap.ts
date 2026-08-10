import type { MetadataRoute } from "next";
import { PAGES, SITE } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: SITE.url, lastModified: now, changeFrequency: "monthly" as const, priority: 1 },
    ...PAGES.map((p) => ({
      url: `${SITE.url}${p.href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
