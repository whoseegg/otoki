import { faqs } from "./faq";
import { press } from "./press";
import { programs } from "./programs";
import { site } from "./site";

// llms.txt: AI가 사이트를 빠르게 이해하도록 돕는 요약 문서 (https://llmstxt.org)
export function llmsTxt(full = false) {
  const lines: string[] = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    "## 핵심 정보",
    `- 형태: 유치원·어린이집 방문형 메타버스 체험 공연`,
    `- 무대: 메타버스 무빙 씨어터 (3D 홀로그램 팬, 2D 프로젝션 월, 오토마타 무대, 앱 통합 제어, 배우 공연)`,
    `- 대상: ${site.facts.age}`,
    `- 시간: ${site.facts.duration}`,
    `- 인원: ${site.facts.group}`,
    `- 운영 인력: ${site.facts.staff}`,
    `- 실적: 2021년부터 누적 1,800회 이상 공연, 전국 40곳 공연 지사망`,
    `- 교육 연계: 개정 누리과정, UN 지속가능발전목표(SDGs), 사전활동(영상 초대장, 가정연계활동지) → 본 공연 → 연계활동`,
    `- 개발·주관: ${site.org.name}${site.org.address ? ` (${site.org.address})` : ""}`,
    `- 함께한 기관: ${site.partners.join(", ")}`,
    `- 문의: ${site.url}/contact · 전화 ${site.phone}${site.naverPlace ? ` · 네이버 플레이스 ${site.naverPlace}` : ""}`,
    "",
    "## 프로그램",
    ...programs.map((p) => `- [${p.title} · ${p.name}](${site.url}/program/${p.slug})${p.status ? ` (${p.status})` : ""}: ${p.short}`),
    "",
    "## 더 보기",
    `- [자주 묻는 질문](${site.url}/faq)`,
    `- [공연 문의](${site.url}/contact)`,
  ];
  if (full) {
    lines.push("", "## 프로그램 상세");
    for (const p of programs) {
      lines.push("", `### ${p.title} (${p.name})`, "", p.definition, "", ...p.flow.map((f, i) => `${i + 1}. ${f.title}: ${f.desc}`));
      for (const f of p.faq) lines.push("", `Q. ${f.q}`, `A. ${f.a}`);
    }
    lines.push("", "## 자주 묻는 질문");
    for (const f of faqs) lines.push("", `Q. ${f.q}`, `A. ${f.a}`);
    lines.push("", "## 언론 보도", ...press.map((n) => `- ${n.media}: ${n.title}`));
  }
  return lines.join("\n") + "\n";
}
