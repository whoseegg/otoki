import { site } from "@/lib/site";
import Reveal from "./Reveal";

// 검색엔진·AI가 한 번에 읽기 좋은 요약표 (GEO).
export default function QuickFacts() {
  const rows: [string, string][] = [
    ["공연명", "오토끼의 시간여행 (Otoki's Time Travel)"],
    ["형태", "유치원·어린이집 방문형 메타버스 체험 공연"],
    ["무대", "메타버스 무빙 씨어터: 3D 홀로그램 + 2D 프로젝션 월 + 오토마타 무대 + 배우"],
    ["대상", site.facts.age],
    ["시간", site.facts.duration],
    ["인원", site.facts.group],
    ["주제", "환경(푸른고래이야기), 장애인식개선(모두의 놀이터), 디지털 시민성, 다문화"],
    ["교육 연계", "개정 누리과정, UN 지속가능발전목표(SDGs), 사전·사후 활동, PBL"],
    ["공연 실적", "2021년부터 누적 1,800회 이상, 전국 40곳 공연 지사망"],
    ["운영", `${site.org.name} 개발·주관`],
  ];
  return (
    <section className="mx-auto max-w-4xl px-4 pb-8 sm:px-6" aria-labelledby="quick-facts">
      <Reveal>
        <div className="rounded-3xl bg-white p-6 ring-2 ring-ink sm:p-8">
          <h2 id="quick-facts" className="font-display text-2xl sm:text-3xl">한눈에 보는 오토끼의 시간여행</h2>
          <dl className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-[8rem_1fr]">
            {rows.map(([k, v]) => (
              <div key={k} className="contents">
                <dt className="font-bold text-grape">{k}</dt>
                <dd className="border-b border-dashed border-ink/10 pb-3 text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </section>
  );
}
