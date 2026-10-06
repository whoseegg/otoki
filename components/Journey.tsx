"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { SectionHead } from "./Section";

const steps = [
  {
    key: "d7",
    tag: "D-7",
    label: "공연 전",
    title: "오토끼의 영상 초대장이 도착해요",
    desc: "공연 일주일 전, 오토끼가 보낸 영상 초대장을 반에서 함께 봅니다. 가정연계활동지로 우리 집 분리수거 방법을 알아보고, 모은 것들로 공연 티켓을 만듭니다.",
    points: ["영상 초대장", "가정연계활동지", "관람 예절 교육"],
    img: { src: "/images/invitation.webp", w: 698, h: 364, alt: "오토끼의 시간여행 영상 초대장 화면" },
  },
  {
    key: "dday",
    tag: "D-DAY",
    label: "공연 당일",
    title: "직접 만든 티켓을 내고 극장에 들어가요",
    desc: "티켓을 매표소에 내고 입장하면 오토끼와 율동으로 공연을 시작합니다. 홀로그램과 오토마타 무대가 움직이는 본 공연이 끝나면 포토타임이 이어집니다.",
    points: ["티켓 제출과 입장", "오프닝 율동", "본 공연과 포토타임"],
    img: { src: "/images/stage-ocean.webp", w: 556, h: 344, alt: "바닷속 영상이 펼쳐진 메타버스 무빙 씨어터 공연 무대" },
  },
  {
    key: "after",
    tag: "AFTER",
    label: "공연 후",
    title: "공연이 끝나도 실천은 이어져요",
    desc: "공연에서 배운 것을 반에서, 집에서 이어 갑니다. 분리수거 캠페인, 모두의 놀이터 만들기, 도장 5개 모으기 같은 연계활동으로 아이들이 스스로 실천하는 습관을 만듭니다.",
    points: ["연계활동 자료", "캠페인 활동", "도장 5개 모으기"],
    img: { src: "/images/worksheet.webp", w: 667, h: 419, alt: "분리배출 안내와 칭찬 도장 활동지" },
  },
];

const head = (
  <SectionHead
    label="진행 방식"
    title="공연은 하루, 시간여행은 계속돼요"
    desc="한 번 보고 끝나는 공연이 아닙니다. 공연 일주일 전부터 공연 후까지 세 단계로 이어집니다."
  />
);

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
    <section id="story" className="scroll-mt-16 bg-paper-deep" aria-label="공연 전, 당일, 후 진행 흐름">
      {/* 모바일: 세로 목록 */}
      <div className="px-5 py-24 md:hidden">
        {head}
        <ol className="mt-10">
          {steps.map((st) => (
            <li key={st.key} className="border-t border-line py-8">
              <p className="label">
                {st.tag} · {st.label}
              </p>
              <Image src={st.img.src} width={st.img.w} height={st.img.h} alt={st.img.alt} className="mt-4 h-auto w-full rounded-md" />
              <h3 className="font-serif mt-5 text-2xl leading-snug">{st.title}</h3>
              <p className="mt-2 leading-[1.8] text-muted">{st.desc}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* 데스크톱: 스크롤에 따라 단계가 바뀌는 고정 화면 */}
      <div ref={ref} className="relative hidden h-[300vh] md:block">
        <div className="sticky top-0 flex min-h-screen items-center py-24">
          <div className="mx-auto w-full max-w-[1120px] px-5">
            {head}
            <div className="relative mt-12 h-px bg-line">
              <div className="absolute inset-y-0 left-0 bg-stage" style={{ width: `${progress * 100}%` }} />
            </div>
            <ol className="mt-4 grid grid-cols-3">
              {steps.map((st, i) => (
                <li key={st.key} className={`text-sm transition-colors ${i === idx ? "text-stage" : "text-muted/50"}`}>
                  <span className="font-semibold">{st.tag}</span> · {st.label}
                </li>
              ))}
            </ol>
            <div className="mt-10 grid grid-cols-12 items-center gap-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={s.key + "-img"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="col-span-6"
                >
                  <Image src={s.img.src} width={s.img.w} height={s.img.h} alt={s.img.alt} className="h-auto w-full rounded-md" />
                </motion.div>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.div
                  key={s.key}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35 }}
                  className="col-span-5 col-start-8"
                >
                  <p className="label">{s.tag}</p>
                  <h3 className="font-serif mt-3 text-3xl leading-snug">{s.title}</h3>
                  <p className="mt-4 leading-[1.8] text-muted">{s.desc}</p>
                  <ul className="mt-6 space-y-2 text-[15px]">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-3">
                        <span className="h-px w-5 bg-gold-ink" aria-hidden />
                        {p}
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
