"use client";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { goals } from "@/lib/sdgs";

// UN SDG 컬러 휠: 17개 공식 색 조각. 강조 목표는 바깥으로 튀어나오고, 휠은 천천히 회전합니다.
const R = 100;
const r = 62;
const GAP = 1.4; // 조각 사이 간격(도)

function arc(i: number) {
  const step = 360 / 17;
  const a0 = ((i * step + GAP / 2 - 90) * Math.PI) / 180;
  const a1 = (((i + 1) * step - GAP / 2 - 90) * Math.PI) / 180;
  const p = (rad: number, ang: number) => `${(Math.cos(ang) * rad).toFixed(3)} ${(Math.sin(ang) * rad).toFixed(3)}`;
  return `M ${p(R, a0)} A ${R} ${R} 0 0 1 ${p(R, a1)} L ${p(r, a1)} A ${r} ${r} 0 0 0 ${p(r, a0)} Z`;
}
function mid(i: number) {
  return (((i + 0.5) * (360 / 17) - 90) * Math.PI) / 180;
}

export default function SdgWheel({
  highlight = [],
  selected,
  onSelect,
  spin = true,
  className = "",
  center,
}: {
  highlight?: number[];
  selected?: number;
  onSelect?: (n: number) => void;
  spin?: boolean;
  className?: string;
  center?: ReactNode;
}) {
  const reduce = useReducedMotion();
  return (
    <div className={`relative aspect-square ${className}`}>
      <motion.svg
        viewBox="-112 -112 224 224"
        className="absolute inset-0 h-full w-full"
        animate={spin && !reduce ? { rotate: 360 } : undefined}
        transition={{ duration: 120, ease: "linear", repeat: Infinity }}
        role="img"
        aria-label="UN 지속가능발전목표 17개 목표 컬러 휠"
      >
        {goals.map((g, i) => {
          const on = highlight.includes(g.n) || selected === g.n;
          const push = selected === g.n ? 10 : highlight.includes(g.n) ? 6 : 0;
          const a = mid(i);
          return (
            <motion.path
              key={g.n}
              d={arc(i)}
              fill={g.color}
              stroke={on ? "#ffffff" : "none"}
              strokeWidth={on ? 2 : 0}
              initial={reduce ? false : { opacity: 0, scale: 0.4 }}
              whileInView={{ opacity: 1, scale: 1, x: Math.cos(a) * push, y: Math.sin(a) * push }}
              viewport={{ once: false, margin: "-40px" }}
              transition={{ delay: reduce ? 0 : i * 0.045, type: "spring", stiffness: 140, damping: 16 }}
              style={{ cursor: onSelect ? "pointer" : undefined, transformOrigin: "0px 0px" }}
              onClick={onSelect ? () => onSelect(g.n) : undefined}
            />
          );
        })}
      </motion.svg>
      {center && <div className="absolute inset-[22%] flex items-center justify-center overflow-visible [&>img]:max-h-full [&>img]:w-auto [&>img]:object-contain">{center}</div>}
    </div>
  );
}
