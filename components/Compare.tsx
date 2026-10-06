import { SectionHead } from "./Section";

const rows = [
  ["진행 방식", "영상 초대장 → 본 공연 → 연계활동까지 이어지는 캠페인형 공연", "공연 관람 후 간단한 퀴즈"],
  ["무대", "3D 홀로그램, 프로젝션 영상, 움직이는 오토마타 무대, 앱 통합 제어", "현수막, 의상, 소품"],
  ["주제", "개정 누리과정과 UN 지속가능발전목표(SDGs) 기반 공익 주제", "동화, 일반 교육 주제"],
  ["새 콘텐츠", "환경·장애인식·디지털 시민성·다문화 주제를 계속 개발", "레퍼토리가 제한적"],
];

export default function Compare() {
  return (
    <section className="mx-auto max-w-[1120px] px-5 py-24 md:py-32">
      <SectionHead label="무엇이 다른가요" title="일반 방문 인형극과 비교해 보세요" />
      <div className="mt-10 overflow-x-auto">
        <table className="w-full min-w-[560px] text-left text-[15px]">
          <caption className="sr-only">오토끼의 시간여행과 일반 방문형 인형극 공연 비교</caption>
          <thead>
            <tr className="border-b-2 border-stage">
              <th scope="col" className="w-28 py-4 pr-4 font-semibold text-muted">구분</th>
              <th scope="col" className="py-4 pr-6 font-serif text-lg">오토끼의 시간여행</th>
              <th scope="col" className="py-4 font-semibold text-muted">일반 방문형 공연</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([k, a, b]) => (
              <tr key={k} className="border-b border-line align-top">
                <th scope="row" className="py-5 pr-4 font-semibold text-muted">{k}</th>
                <td className="py-5 pr-6 leading-relaxed">{a}</td>
                <td className="py-5 leading-relaxed text-muted">{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
