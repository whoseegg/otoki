import Reveal from "./Reveal";

const rows = [
  ["진행 방식", "영상 초대장 → 본 공연 → 연계활동까지 이어지는 캠페인형 공연", "공연 관람 후 간단한 퀴즈"],
  ["무대", "3D 홀로그램 · 프로젝션 영상 · 움직이는 오토마타 무대 · 앱 통합 제어", "현수막, 의상, 소품"],
  ["주제", "개정 누리과정 + UN 지속가능발전목표(SDGs) 기반 공익 주제", "동화, 일반 교육 주제"],
  ["새 콘텐츠", "환경·장애인식·디지털 시민성·다문화 등 주제를 계속 개발", "레퍼토리가 제한적"],
  ["아이들 반응", "\"이런 공연 처음 봐요!\"", "익숙한 형식"],
];

export default function Compare() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <Reveal>
        <p className="text-center font-bold text-coral">무엇이 다른가요?</p>
        <h2 className="font-display mt-3 text-center text-3xl leading-snug sm:text-5xl">
          인형극과 비교해 보세요
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-12 overflow-hidden rounded-3xl bg-white ring-2 ring-ink">
          <table className="w-full text-left text-sm sm:text-base">
            <caption className="sr-only">오토끼의 시간여행과 일반 방문형 인형극 공연 비교</caption>
            <thead>
              <tr className="bg-ink text-cream">
                <th scope="col" className="w-24 p-4 sm:w-32">구분</th>
                <th scope="col" className="bg-grape p-4">🐰 오토끼의 시간여행</th>
                <th scope="col" className="p-4 text-cream/70">일반 방문형 공연</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([k, a, b]) => (
                <tr key={k} className="border-t border-ink/10">
                  <th scope="row" className="p-4 font-bold text-ink-soft">{k}</th>
                  <td className="bg-grape-soft/50 p-4 font-bold">{a}</td>
                  <td className="p-4 text-ink-soft">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </section>
  );
}
