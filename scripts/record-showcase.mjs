// AI 검색 모션그래픽을 MP4로 녹화합니다.
// 사용법: npm run build && npm start (다른 터미널) → npm run video
// 결과: public/media/otoki-ai-search-16x9.mp4 (가로), public/media/otoki-ai-search-9x16.mp4 (세로, 릴스·쇼츠용)
import { execFileSync } from "node:child_process";
import { mkdtempSync, readdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

let chromium;
try {
  ({ chromium } = await import("playwright"));
} catch {
  ({ chromium } = await import("/opt/node-tools/node_modules/playwright/index.mjs"));
}

const base = process.env.SHOWCASE_URL || "http://localhost:3000";
const LOOP = 14; // AiSearchVideo의 LOOP와 같게 유지
const loops = Number(process.env.LOOPS || 4);
const formats = [
  { name: "16x9", width: 1280, height: 720, query: "q=0" },
  { name: "9x16", width: 720, height: 1280, query: "q=0&tall=1" },
];

for (const f of formats) {
  const dir = mkdtempSync(join(tmpdir(), "otoki-"));
  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    viewport: { width: f.width, height: f.height },
    recordVideo: { dir, size: { width: f.width, height: f.height } },
  });
  const page = await ctx.newPage();
  const t0 = Date.now();
  await page.goto(`${base}/showcase?${f.query}`, { waitUntil: "networkidle" });
  const lead = (Date.now() - t0) / 1000 + 0.3;
  await page.waitForTimeout(LOOP * loops * 1000 + 400);
  await ctx.close();
  await browser.close();
  const webm = join(dir, readdirSync(dir).find((n) => n.endsWith(".webm")));
  const out = `public/media/otoki-ai-search-${f.name}.mp4`;
  execFileSync("ffmpeg", [
    "-y", "-ss", String(lead), "-i", webm, "-t", String(LOOP * loops),
    "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "22", "-preset", "slow", "-movflags", "+faststart", "-an", out,
  ], { stdio: "inherit" });
  console.log("saved", out);
}
