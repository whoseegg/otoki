import { site } from "@/lib/site";

// 검색엔진·AI가 한 번에 읽기 좋은 요약표 (GEO).
export default function QuickFacts() {
  const rows: [string, string][] = [
    ["공연명", "오토끼의 시간여행 (Otoki's Time Travel)"],
    ["형태", "유치원·어린이집 방문형 메타버스 체험 공연"],
    ["무대", "메타버스 무빙 씨어터: 3D 홀로그램 + 2D 프로젝션 월 + 오토마타 무대 + 배우"],
    ["대상", site.facts.age],
    ["시간", site.facts.duration],
    ["인원", site.facts.group],
    ["에피소드", "EP.1 푸른고래이야기(환경, SDG 14), EP.2 모두의 놀이터(장애인식개선, SDG 10) 공연 중 · 디지털 시민성(SDG 9), 다문화 이해(SDG 10) 제작 예정"],
    ["행사·부스", "지자체·도서관·복지관·기업·축제 행사 공연, 메타버스·홀로그램 체험 부스 운영"],
    ["교육 연계", "개정 누리과정, UN 지속가능발전목표(SDGs), 사전·사후 활동, PBL"],
    ["공연 실적", "2021년부터 누적 1,800회 이상, 전국 40곳 공연 지사망"],
    ["개발·주관", site.org.name],
  ];
  return (
    <section className="mx-auto max-w-[1120px] px-5 py-24" aria-labelledby="quick-facts">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="label">한눈에 보기</p>
          <h2 id="quick-facts" className="font-serif mt-3 text-[1.75rem] leading-snug sm:text-[2.5rem]">
            오토끼의 시간여행
            <br />
            공연 정보
          </h2>
        </div>
        <dl className="md:col-span-8">
          {rows.map(([k, v]) => (
            <div key={k} className="grid grid-cols-[6.5rem_1fr] gap-4 border-t border-line py-4 last:border-b">
              <dt className="text-[15px] font-semibold text-gold-ink">{k}</dt>
              <dd className="text-[15px] leading-relaxed">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
