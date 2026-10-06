import { goals } from "@/lib/sdgs";

// UN SDG 공식 아이콘: 공식 색 배경 + 흰색 아이콘(public/sdgs/goal-N.svg)
export default function SdgIcon({ n, className = "", label = true }: { n: number; className?: string; label?: boolean }) {
  const g = goals.find((x) => x.n === n)!;
  return (
    <span className={`relative block aspect-square overflow-hidden ${className}`} style={{ backgroundColor: g.color }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/sdgs/goal-${n}.svg`}
        alt={label ? `UN 지속가능발전목표 ${n}번: ${g.name} (${g.en})` : ""}
        className="absolute inset-0 h-full w-full"
        loading="lazy"
        decoding="async"
      />
    </span>
  );
}
