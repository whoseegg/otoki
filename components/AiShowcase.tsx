import AiSearchVideo from "./AiSearchVideo";

const points = [
  "원장님과 선생님이 실제로 묻는 질문에 맞춰 공연 정보를 정리했습니다.",
  "1,800회 공연 기록, 언론 보도, 함께한 기관을 그대로 공개합니다.",
  "비용·공간·인원처럼 꼭 궁금한 질문에 바로 답합니다.",
];

export default function AiShowcase() {
  return (
    <section id="ai-pick" className="mx-auto grid max-w-[1120px] items-center gap-12 px-5 py-24 md:grid-cols-12 md:py-32">
      <div className="md:col-span-5">
        <p className="inline-block -rotate-2 rounded-md border-2 border-gold-ink px-3 py-1">
          <span className="block text-[10px] font-semibold tracking-[0.25em] text-gold-ink">AI PICK</span>
          <span className="font-serif text-lg text-gold-ink">AI가 선택한 공연</span>
        </p>
        <h2 className="font-serif mt-6 text-[1.75rem] leading-[1.3] sm:text-[2.5rem]">
          요즘 선생님들은
          <br />
          AI에게 먼저 물어보세요
        </h2>
        <p className="mt-5 text-[17px] leading-[1.8] text-muted">
          “유치원 방문 공연 추천해 줘.” 검색창 대신 AI에게 묻는 시대입니다. 오토끼의 시간여행은 공연 정보와 진행 방식, 공연
          기록을 누구나 확인할 수 있게 공개해 검색 결과와 AI 답변에서 정확하게 소개되도록 준비했습니다.
        </p>
        <ul className="mt-6">
          {points.map((p) => (
            <li key={p} className="flex gap-3 border-t border-line py-3.5 text-[15px] leading-relaxed last:border-b">
              <span className="mt-[11px] h-px w-4 shrink-0 bg-gold-ink" aria-hidden />
              {p}
            </li>
          ))}
        </ul>
      </div>
      <div className="md:col-span-7">
        <AiSearchVideo />
        <p className="mt-3 text-xs text-muted">* 이해를 돕기 위해 연출한 화면입니다. 실제 AI 답변은 서비스와 질문에 따라 달라질 수 있습니다.</p>
      </div>
    </section>
  );
}
