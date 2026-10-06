import type { ReactNode } from "react";

// 섹션 머리: 라벨 + 세리프 제목 + 짧은 설명. 왼쪽 정렬이 기본입니다.
export function SectionHead({
  label,
  title,
  desc,
  className = "",
  dark = false,
}: {
  label: string;
  title: ReactNode;
  desc?: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div className={className}>
      <p className={`label ${dark ? "!text-gold" : ""}`}>{label}</p>
      <h2 className="font-serif mt-3 text-[1.75rem] leading-[1.3] sm:text-[2.5rem]">{title}</h2>
      {desc && <p className={`mt-4 max-w-[640px] text-[17px] leading-[1.8] ${dark ? "text-mist" : "text-muted"}`}>{desc}</p>}
    </div>
  );
}
