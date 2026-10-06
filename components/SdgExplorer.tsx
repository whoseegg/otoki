"use client";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { goals, liveGoals, nextGoals } from "@/lib/sdgs";
import SdgIcon from "./SdgIcon";
import SdgWheel from "./SdgWheel";

const episodeFor: Record<number, { label: string; href?: string }[]> = {
  14: [{ label: "EP.1 푸른고래이야기 · 공연 중", href: "/program/environment" }],
  10: [
    { label: "EP.2 모두의 놀이터 · 공연 중", href: "/program/disability" },
    { label: "어깨동무 친구들 (다문화) · 제작 예정", href: "/program/multicultural" },
  ],
  9: [{ label: "화면 속 너와 나 (디지털 시민성) · 제작 예정", href: "/program/ai" }],
};

function badge(n: number) {
  if (liveGoals.includes(n)) return { t: "공연 중", cls: "bg-white text-stage" };
  if (nextGoals.includes(n)) return { t: "제작 예정", cls: "bg-stage text-white" };
  return null;
}

export default function SdgExplorer() {
  const [sel, setSel] = useState(14);
  const reduce = useReducedMotion();
  const g = goals.find((x) => x.n === sel)!;
  const eps = episodeFor[sel];

  return (
    <div className="grid gap-12 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <div className="lg:sticky lg:top-28">
          <SdgWheel
            highlight={liveGoals}
            selected={sel}
            onSelect={setSel}
            className="mx-auto w-full max-w-[420px]"
            center={
              <AnimatePresence mode="wait">
                <motion.div
                  key={sel}
                  initial={reduce ? false : { opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.25 }}
                  className="text-center"
                >
                  <p className="font-serif text-6xl leading-none" style={{ color: g.color, textShadow: "0 0 1px rgba(20,50,74,.35)" }} aria-hidden>
                    {g.n}
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-snug">{g.name}</p>
                </motion.div>
              </AnimatePresence>
            }
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={sel}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="mt-8 border-l-4 pl-5"
              style={{ borderColor: g.color }}
              aria-live="polite"
            >
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-muted">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: g.color }} aria-hidden />
                Goal {g.n} · {g.en}
              </p>
              <h3 className="font-serif mt-2 text-2xl">{g.name}</h3>
              <p className="mt-2 text-[15px] text-muted">
                오토끼 에피소드 교육 주제 · <span className="font-semibold text-stage">{g.theme}</span>
              </p>
              {eps ? (
                <ul className="mt-4 space-y-2">
                  {eps.map((e) => (
                    <li key={e.label}>
                      <Link href={e.href ?? "#"} className="inline-flex items-center gap-1.5 text-[15px] font-semibold underline-offset-4 hover:underline">
                        {e.label} <ArrowRight size={15} strokeWidth={1.75} aria-hidden />
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-[15px] text-muted">17편의 시간여행 계획에 포함된 주제입니다.</p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="lg:col-span-7">
        <ul className="grid grid-cols-3 gap-2 sm:grid-cols-6">
          {goals.map((x, i) => {
            const b = badge(x.n);
            const active = sel === x.n;
            return (
              <motion.li
                key={x.n}
                initial={reduce ? false : { opacity: 0, y: 24, scale: 0.85 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: reduce ? 0 : (i % 6) * 0.06 + Math.floor(i / 6) * 0.12, type: "spring", stiffness: 160, damping: 18 }}
              >
                <button
                  onClick={() => setSel(x.n)}
                  aria-pressed={active}
                  className={`group relative block w-full transition-transform duration-200 hover:-translate-y-1 ${
                    active ? "-translate-y-1 ring-4 ring-gold ring-offset-2 ring-offset-paper" : ""
                  } ${b ? "" : "opacity-90 hover:opacity-100"}`}
                >
                  <SdgIcon n={x.n} />
                  {b && (
                    <span className={`absolute bottom-1.5 right-1.5 rounded-full px-2 py-0.5 text-[10px] font-bold shadow ${b.cls}`}>
                      {b.t}
                    </span>
                  )}
                  {liveGoals.includes(x.n) && (
                    <span className="pointer-events-none absolute inset-0 animate-pulse ring-2 ring-inset ring-white/70" aria-hidden />
                  )}
                  <span className="sr-only">
                    {x.n}번 {x.name}: 오토끼 에피소드 주제 {x.theme}
                  </span>
                </button>
              </motion.li>
            );
          })}
          <motion.li
            initial={reduce ? false : { opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: reduce ? 0 : 0.6 }}
            className="grid aspect-square place-items-center bg-white p-2"
            aria-hidden
          >
            <SdgWheel spin={false} className="w-[70%]" />
          </motion.li>
        </ul>
        <p className="mt-4 text-sm text-muted">아이콘을 누르면 목표별 오토끼 에피소드 계획을 볼 수 있습니다.</p>
      </div>
    </div>
  );
}
