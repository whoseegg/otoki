import Reveal from "./Reveal";

const pains = [
  {
    icon: "😮‍💨",
    q: "\"기존 공연은 이제 너무 식상해요\"",
    desc: "해마다 비슷한 인형극, 비슷한 마술쇼. 아이들 반응도 예전 같지 않죠.",
    a: "인형극도 영상도 아닌, 홀로그램과 오토마타 무대가 함께 움직이는 처음 보는 공연",
  },
  {
    icon: "🤔",
    q: "\"새로운 건 좋은데, 아이들이 좋아할까요?\"",
    desc: "검증되지 않은 프로그램을 들이기엔 원장님도, 선생님도 부담이 커요.",
    a: "2021년부터 전국 유아교육기관과 센터, 지자체에서 누적 1,800회 이상 공연",
  },
  {
    icon: "🗂️",
    q: "\"행사도, 교육도 챙겨야 해요\"",
    desc: "행사 기획, 교육 계획, 학부모 안내까지. 결국 다 선생님 몫이었어요.",
    a: "환경·장애인식개선 같은 교육 주제를 공연 한 번에. 사전·사후 활동 자료까지",
  },
];

export default function PainPoints() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <p className="text-center font-bold text-coral">원장님, 선생님. 혹시 이런 고민 있으셨나요?</p>
        <h2 className="font-display mt-3 text-center text-3xl leading-snug sm:text-5xl">
          좋은 공연은 늘 필요한데,
          <br />
          고르기는 늘 어렵죠
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {pains.map((p, i) => (
          <Reveal key={p.q} delay={i * 0.12}>
            <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-2 ring-ink/10 transition hover:-translate-y-1 hover:ring-ink">
              <div className="p-7">
                <span className="text-4xl">{p.icon}</span>
                <h3 className="mt-4 text-xl font-extrabold leading-snug">{p.q}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{p.desc}</p>
              </div>
              <div className="mt-auto border-t-2 border-dashed border-ink/10 bg-grape-soft/60 p-6 transition group-hover:bg-grape-soft">
                <p className="text-sm font-bold text-grape">오토끼의 답</p>
                <p className="mt-1 font-bold leading-relaxed">{p.a}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
