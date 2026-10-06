"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Otoki from "./Otoki";

const badges = [
  { t: "✨ 3D 홀로그램", c: "left-0 top-[18%]", d: 0.9 },
  { t: "⚙️ 움직이는 오토마타 무대", c: "-right-2 top-[46%]", d: 1.1 },
  { t: "🎟️ 누적 1,800회+ 공연", c: "left-[4%] bottom-[10%]", d: 1.3 },
];

const chips = ["만 3~7세 맞춤", "누리과정·UN SDGs 연계", "사전·사후 활동까지 한 번에"];

export default function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const yArt = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 100]);
  const rot = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 120]);

  return (
    <section className="bg-dream relative overflow-hidden pt-28 pb-16 sm:pt-32 md:pb-24">
      <div className="dot-bg absolute inset-0 opacity-50" aria-hidden />
      <Image
        src="/images/coral.webp"
        alt=""
        width={900}
        height={636}
        className="pointer-events-none absolute -bottom-10 -left-24 w-72 opacity-70 sm:w-96"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold ring-2 ring-ink"
          >
            🎪 유치원·어린이집으로 찾아가는 메타버스 체험 공연
          </motion.p>
          <h1 className="font-display mt-6 text-[2.7rem] leading-[1.15] sm:text-6xl md:text-[4.3rem]">
            <motion.span
              className="block"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              문을 열면,
            </motion.span>
            <motion.span
              className="block"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <span className="relative inline-block">
                <span className="relative z-10 text-grape">시간여행</span>
                <span className="absolute inset-x-0 bottom-1 z-0 h-4 rounded-full bg-sun/70 sm:h-5" aria-hidden />
              </span>
              이 시작돼요
            </motion.span>
          </h1>
          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl"
          >
            3D 홀로그램, 움직이는 오토마타 무대, 그리고 배우 오토끼.
            <br className="hidden sm:block" />{" "}
            강당 대관도 버스도 없이, <strong className="text-ink">아이들이 처음 만나는 공연</strong>이 우리 원으로 찾아갑니다.
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-coral px-7 py-4 text-lg font-bold text-white shadow-[4px_4px_0_#2a1f5c] ring-2 ring-ink transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#2a1f5c]"
            >
              우리 원 공연 일정 문의 →
            </Link>
            <Link
              href="/program"
              className="rounded-full bg-white px-7 py-4 text-lg font-bold ring-2 ring-ink transition hover:bg-grape-soft"
            >
              공연 주제 살펴보기
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-ink-soft">
            {chips.map((c) => (
              <li key={c} className="flex items-center gap-1.5">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-leaf text-[11px] text-white">✓</span>
                {c}
              </li>
            ))}
          </ul>
        </div>

        <motion.div style={{ y: yArt }} className="relative mx-auto aspect-square w-full max-w-[480px]">
          {/* time portal clock */}
          <motion.div style={{ rotate: rot }} className="absolute inset-0" aria-hidden>
            <div className="absolute inset-0 animate-spin-slow rounded-full border-[3px] border-dashed border-grape/50" />
            <div className="absolute inset-[8%] rounded-full bg-[conic-gradient(from_0deg,#ffd9ec,#d6e8ff,#e9e0ff,#ffe9b8,#d9f5e6,#ffd9ec)] ring-4 ring-white" />
            <div className="absolute inset-[14%] rounded-full bg-white/70 backdrop-blur" />
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className="absolute left-1/2 top-1/2 h-[41%] w-1.5 -translate-x-1/2 origin-top"
                style={{ transform: `rotate(${i * 30}deg)` }}
              >
                <span className={`absolute bottom-0 w-1.5 rounded-full ${i % 3 === 0 ? "h-5 bg-grape" : "h-2.5 bg-ink/30"}`} />
              </span>
            ))}
          </motion.div>
          <motion.div
            initial={reduce ? false : { scale: 0.3, opacity: 0, rotate: -25, y: 60 }}
            animate={{ scale: 1, opacity: 1, rotate: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 110, damping: 11, delay: 0.25 }}
            className="absolute inset-x-[24%] bottom-[4%] top-[6%] flex justify-center"
          >
            <Otoki pose="point" priority className="h-full w-auto animate-float object-contain drop-shadow-[0_20px_22px_rgba(42,31,92,.25)]" sizes="(max-width: 768px) 50vw, 260px" />
          </motion.div>
          {badges.map((b) => (
            <motion.span
              key={b.t}
              initial={reduce ? false : { opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: b.d, type: "spring" }}
              className={`absolute ${b.c} rounded-full bg-white px-3.5 py-2 text-xs font-bold shadow-lg ring-2 ring-ink sm:text-sm`}
            >
              {b.t}
            </motion.span>
          ))}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6 }}
            className="absolute right-0 top-0 rounded-2xl rounded-bl-none bg-grape px-4 py-3 text-sm font-bold text-white shadow-lg ring-2 ring-ink"
          >
            시계가 멈췄어!
            <br />
            같이 고치러 갈래? ⏰
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
