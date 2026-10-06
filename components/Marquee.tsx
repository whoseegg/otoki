const words = [
  "유치원 방문 공연",
  "어린이집 체험 공연",
  "메타버스 무빙 씨어터",
  "유아 환경교육",
  "장애인식개선교육",
  "디지털 시민성 교육",
  "다문화교육",
  "찾아가는 체험 행사",
  "누리과정 연계",
];

export default function Marquee() {
  const row = [...words, ...words];
  return (
    <div className="relative z-10 -rotate-1 overflow-hidden border-y-[3px] border-ink bg-grape py-4 text-white" aria-label="오토끼의 시간여행 프로그램 키워드">
      <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
        {row.map((w, i) => (
          <span key={i} className="font-display flex items-center gap-8 text-2xl" aria-hidden={i >= words.length}>
            {w} <span className="text-sun">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
