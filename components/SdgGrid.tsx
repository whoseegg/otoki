import { goals, liveGoals, nextGoals } from "@/lib/sdgs";

// 17개 목표 중 오토끼가 다루는 목표를 표시하는 격자. 공식 SDG 아이콘 대신 사이트 토큰 색만 씁니다.
export default function SdgGrid({ dark = false, compact = false }: { dark?: boolean; compact?: boolean }) {
  return (
    <div>
      <ol className={`grid gap-1.5 ${compact ? "grid-cols-6 sm:grid-cols-9" : "grid-cols-3 sm:grid-cols-6"}`}>
        {goals.map((g) => {
          const covered = liveGoals.includes(g.n);
          const planned = nextGoals.includes(g.n);
          const cls = covered
            ? dark
              ? "bg-gold text-stage"
              : "bg-stage text-paper"
            : planned
              ? dark
                ? "border border-dashed border-gold text-gold"
                : "border border-dashed border-stage text-stage"
              : dark
                ? "border border-white/15 text-mist/80"
                : "border border-line text-muted";
          return (
            <li key={g.n} className={`flex flex-col justify-between rounded-sm p-2 ${compact ? "aspect-square" : "min-h-[84px]"} ${cls}`}>
              <span className="font-serif text-lg leading-none sm:text-xl">{g.n}</span>
              {!compact && <span className="mt-2 text-[11px] leading-snug sm:text-xs">{g.theme}</span>}
              <span className="sr-only">
                {g.name}
                {covered ? " — 공연 중인 에피소드의 기반 목표" : planned ? " — 다음 제작 에피소드의 기반 목표" : ` — 에피소드 계획: ${g.theme}`}
              </span>
            </li>
          );
        })}
      </ol>
      <p className={`mt-4 flex flex-wrap gap-x-5 gap-y-1 text-xs ${dark ? "text-mist" : "text-muted"}`}>
        <span className="inline-flex items-center gap-1.5">
          <span className={`h-3 w-3 rounded-sm ${dark ? "bg-gold" : "bg-stage"}`} /> 공연 중 (EP.1·EP.2)
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className={`h-3 w-3 rounded-sm border border-dashed ${dark ? "border-gold" : "border-stage"}`} /> 다음 제작 에피소드
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className={`h-3 w-3 rounded-sm border ${dark ? "border-white/20" : "border-line"}`} /> 목표별 에피소드 계획
        </span>
      </p>
    </div>
  );
}
