import { SectionHead } from "./Section";

const pains = [
  {
    q: "“기존 공연은 이제 너무 식상해요”",
    a: "인형극도 영상도 아닌, 홀로그램과 오토마타 무대가 함께 움직이는 처음 보는 공연입니다.",
  },
  {
    q: "“새로운 건 좋은데, 아이들이 좋아할까요?”",
    a: "2021년부터 유아교육기관, 육아종합지원센터, 지자체 행사에서 1,800회 넘게 공연했습니다.",
  },
  {
    q: "“행사도, 교육도 챙겨야 해요”",
    a: "환경·장애인식개선 같은 교육 주제를 공연 한 번에 담고, 사전·사후 활동 자료까지 드립니다.",
  },
];

export default function PainPoints() {
  return (
    <section className="mx-auto grid max-w-[1120px] gap-10 px-5 py-24 md:grid-cols-12 md:py-32">
      <SectionHead
        className="md:col-span-4"
        label="원장님, 선생님의 고민"
        title={
          <>
            좋은 공연은 늘 필요한데,
            <br />
            고르기는 늘 어렵죠
          </>
        }
      />
      <ol className="md:col-span-7 md:col-start-6">
        {pains.map((p, i) => (
          <li key={p.q} className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-t border-line py-7 last:border-b">
            <span className="font-serif text-xl text-gold-ink">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="text-lg font-semibold">{p.q}</h3>
              <p className="mt-2 leading-[1.8] text-muted">{p.a}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
