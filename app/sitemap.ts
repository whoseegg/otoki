import type { MetadataRoute } from "next";
import { programs } from "@/lib/programs";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/program`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...programs.map((p) => ({
      url: `${site.url}/program/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p.status ? 0.6 : 0.9,
    })),
    { url: `${site.url}/sdgs`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/events`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
  ];
}
