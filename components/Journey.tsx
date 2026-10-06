"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";

const steps = [
  {
    key: "d7",
    tag: "D-7",
    label: "공연 전",
    bg: "bg-berry-soft",
    accent: "bg-berry",
    title: "오토끼의 영상 초대장이 도착했어요",
    desc: "공연 일주일 전, 오토끼가 보낸 영상 초대장을 함께 봐요. 가정연계활동지로 우리 집 분리수거 방법을 알아보고, 분리수거로 모은 것들로 공연 티켓을 만들어요.",
    points: ["영상 초대장", "가정연계활동지", "공연 관람 예절 교육"],
    img: { src: "/images/invitation.webp", w: 698, h: 364, alt: "오토끼의 시간여행 영상 초대장 화면" },
  },
  {
    key: "dday",
    tag: "D-DAY",
    label: "공연 당일",
    bg: "bg-sky-soft",
    accent: "bg-sky",
    title: "티켓을 내고, 시간여행 극장으로 입장!",
    desc: "직접 만든 티켓을 매표소에 내고 입장하면, 오토끼와 신나는 율동으로 시작해요. 홀로그램과 오토마타 무대가 움직이는 본 공연 뒤에는 포토타임이 기다려요.",
    points: ["티켓 제출 & 입장", "오프닝 율동 타임", "본 공연 & 포토타임"],
    img: { src: "/images/stage-ocean.webp", w: 556, h: 344, alt: "바닷속 영상이 펼쳐진 메타버스 무빙 씨어터 공연 무대" },
  },
  {
    key: "after",
    tag: "AFTER",
    label: "공연 후",
    bg: "bg-leaf-soft",
    accent: "bg-leaf",
    title: "공연이 끝나도, 실천은 계속돼요",
    desc: "공연에서 배운 것을 반에서, 집에서 이어 가요. 분리수거 캠페인, 모두의 놀이터 만들기, 도장 5개 모으기 같은 연계활동으로 아이들이 스스로 실천하는 습관을 만들어요.",
    points: ["연계활동 자료", "캠페인 활동", "도장 5개 모으기"],
    img: { src: "/images/worksheet.webp", w: 667, h: 419, alt: "분리배출 안내와 칭찬 도장 활동지" },
  },
];

export default function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [idx, setIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setProgress(v);
    setIdx(Math.min(steps.length - 1, Math.floor(v * steps.length)));
  });
  const s = steps[idx];

  return (
    <section id="story" aria-label="공연 전, 당일, 후 진행 흐름">
      {/* 모바일: 세로로 쌓은 카드 */}
      <div className="bg-berry-soft/50 px-4 py-20 md:hidden">
        <p className="font-bold text-ink-soft">한 번 보고 끝나는 공연이 아니에요</p>
        <h2 className="font-display mt-2 text-3xl">공연은 하루, 시간여행은 계속돼요</h2>
        <ol className="mt-8 space-y-6">
          {steps.map((st) => (
            <li key={st.key} className={`rounded-3xl p-5 ring-2 ring-ink ${st.bg}`}>
              <span className={`inline-block rounded-full ${st.accent} px-3 py-1 text-sm font-black text-white`}>
                {st.tag} · {st.label}
              </span>
              <Image src={st.img.src} width={st.img.w} height={st.img.h} alt={st.img.alt} className="mt-4 h-auto w-full rounded-2xl ring-2 ring-ink/10" />
              <h3 className="font-display mt-4 text-2xl leading-snug">{st.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{st.desc}</p>
            </li>
          ))}
        </ol>
      </div>
      {/* 데스크톱: 스크롤에 따라 바뀌는 고정 화면 */}
      <div ref={ref} className="relative hidden h-[300vh] md:block">
      <div className={`sticky top-0 flex min-h-screen items-center overflow-hidden py-20 transition-colors duration-700 ${s.bg}`}>
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <p className="font-bold text-ink-soft">한 번 보고 끝나는 공연이 아니에요</p>
          <p className="font-display mt-2 text-3xl sm:text-5xl" role="heading" aria-level={2}>공연은 하루, 시간여행은 계속돼요</p>

          <div className="relative mt-10 h-2 rounded-full bg-ink/10">
            <div className="absolute inset-y-0 left-0 rounded-full bg-ink" style={{ width: `${progress * 100}%` }} />
            {steps.map((st, i) => (
              <span
                key={st.key}
                className={`absolute -top-3 grid h-8 min-w-8 -translate-x-1/2 place-items-center rounded-full px-2 text-xs font-black ring-2 ring-ink transition ${
                  i <= idx ? "bg-sun" : "bg-white"
                }`}
                style={{ left: `${(i / (steps.length - 1)) * 100}%` }}
              >
                {st.tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex justify-between text-sm font-bold">
            {steps.map((st, i) => (
              <span key={st.key} className={i === idx ? "text-ink" : "text-ink/40"}>
                {st.label}
              </span>
            ))}
          </div>

          <div className="mt-8 grid items-center gap-8 md:grid-cols-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={s.key + "-img"}
                initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
                animate={{ opacity: 1, scale: 1, rotate: -2 }}
                exit={{ opacity: 0, scale: 0.85, rotate: 4 }}
                transition={{ type: "spring", stiffness: 150, damping: 16 }}
                className="overflow-hidden rounded-3xl bg-white p-2 shadow-xl ring-[3px] ring-ink"
              >
                <Image src={s.img.src} width={s.img.w} height={s.img.h} alt={s.img.alt} className="h-auto w-full rounded-2xl" />
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={s.key}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
              >
                <span className={`inline-block rounded-full ${s.accent} px-4 py-1.5 font-black text-white`}>{s.tag}</span>
                <h3 className="font-display mt-3 text-3xl leading-snug sm:text-4xl">{s.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-ink-soft">{s.desc}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.points.map((p) => (
                    <li key={p} className="rounded-full bg-white px-4 py-2 text-sm font-bold ring-2 ring-ink">
                      ✓ {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
