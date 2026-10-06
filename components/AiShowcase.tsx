import AiSearchVideo from "./AiSearchVideo";
import Reveal from "./Reveal";

const points = [
  { icon: "🔎", t: "원장님, 선생님이 실제로 묻는 질문에 맞춰 공연 정보를 정리했어요" },
  { icon: "📚", t: "1,800회 공연 기록, 언론 보도, 함께한 기관을 투명하게 공개해요" },
  { icon: "💬", t: "비용, 공간, 인원처럼 꼭 궁금한 질문에 바로 답해 드려요" },
];

export default function AiShowcase() {
  return (
    <section id="ai-pick" className="relative overflow-hidden py-24">
      <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-grape-soft blur-3xl" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <div className="inline-flex -rotate-3 flex-col items-center rounded-2xl border-[3px] border-coral bg-white px-5 py-2 shadow-[4px_4px_0_#ff7a6b]">
            <span className="text-[10px] font-black tracking-[0.3em] text-coral">AI PICK</span>
            <span className="font-display text-2xl text-coral">AI가 선택한 공연</span>
          </div>
          <h2 className="font-display mt-6 text-3xl leading-snug sm:text-5xl">
            요즘 선생님들은
            <br />
            <span className="text-grape">AI에게 먼저</span> 물어보세요
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            &ldquo;유치원 방문 공연 추천해 줘.&rdquo; 검색창 대신 AI에게 묻는 시대예요. 오토끼의 시간여행은 공연 정보와 진행 방식,
            공연 기록을 누구나 확인할 수 있게 공개해서 검색 결과에서도, AI 답변에서도 정확하게 소개되도록 준비했어요.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p.t} className="flex gap-3 rounded-2xl bg-white p-4 font-semibold ring-1 ring-ink/10">
                <span className="text-xl">{p.icon}</span>
                <span>{p.t}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.15}>
          <AiSearchVideo />
          <p className="mt-3 text-xs text-ink-soft">
            * 이해를 돕기 위해 연출한 화면입니다. 실제 AI 답변은 서비스와 질문에 따라 달라질 수 있어요.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
