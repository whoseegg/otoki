import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// 검색엔진과 AI 검색 크롤러가 모두 읽을 수 있게 엽니다 (GEO).
const aiBots = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Yeti", // 네이버
  "Daumoa", // 다음
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/showcase"] },
      ...aiBots.map((ua) => ({ userAgent: ua, allow: "/", disallow: ["/api/", "/showcase"] })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
