"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Reveal from "./Reveal";

const spots = [
  { x: 49.5, y: 33, icon: "🕰️", title: "오토마타 시계", desc: "시간여행의 문을 여는 커다란 시계. 공연 흐름에 맞춰 바늘과 조명이 움직여요." },
  { x: 50, y: 66, icon: "✨", title: "3D 홀로그램", desc: "공중에 떠오르는 오토끼와 친구들. 홀로그램 팬이 캐릭터와 효과를 입체로 보여 줘요." },
  { x: 22, y: 22, icon: "🎞️", title: "2D 프로젝션 월", desc: "무대 뒤 대형 영상이 바닷속, 놀이터, 우주로 배경을 바꿔 현수막을 대신해요." },
  { x: 36, y: 50, icon: "⚙️", title: "기어 & 롤링볼", desc: "돌아가는 기어와 굴러가는 구슬로 과학 원리를 눈앞에서 보여 줘요." },
  { x: 59.5, y: 65, icon: "🐋", title: "고래·거북이·물고기", desc: "이야기에 맞춰 바다 친구들이 움직이는 오토마타 조각상이에요." },
  { x: 61, y: 88, icon: "🛞", title: "이동형 극장", desc: "바퀴 달린 조립식 프레임이라 강당과 유희실 어디든 설치할 수 있어요." },
  { x: 80, y: 30, icon: "📱", title: "앱 통합 제어", desc: "홀로그램, 영상, 오토마타, 음향, 조명을 앱 하나로 맞춰 움직여요. 배우 1명과 조작 1명이면 공연할 수 있어요." },
];

export default function TheaterAnatomy() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  useEffect(() => {
    if (!auto) return;
    const id = setInterval(() => setActive((a) => (a + 1) % spots.length), 3200);
    return () => clearInterval(id);
  }, [auto]);
  const s = spots[active];

  return (
    <section id="theater" className="bg-night relative overflow-hidden py-24 text-cream">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="font-bold text-sun">오토끼만의 이동형 극장 시스템</p>
          <h2 className="font-display mt-3 text-3xl leading-snug sm:text-5xl">
            극장이 통째로, 우리 원에 찾아와요
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-cream/75">
            <strong className="text-white">메타버스 무빙 씨어터</strong>는 홀로그램, 영상, 움직이는 오토마타 무대를 하나로 묶은
            오토끼만의 극장이에요. 반짝이는 점을 눌러 극장 구석구석을 살펴보세요.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-10 overflow-hidden rounded-[28px] ring-4 ring-white/15">
            <Image
              src="/images/theater-hero.webp"
              alt="메타버스 무빙 씨어터 일러스트: 오토마타 시계와 기어, 바다 친구들이 있는 이동형 극장 앞에 선 오토끼"
              width={1800}
              height={740}
              className="h-auto w-full"
              sizes="(max-width: 1200px) 100vw, 1152px"
            />
            {spots.map((p, i) => (
              <button
                key={p.title}
                onClick={() => {
                  setActive(i);
                  setAuto(false);
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
                aria-label={p.title}
              >
                <span className={`absolute inset-0 rounded-full bg-sun ${i === active ? "animate-ping" : ""}`} />
                <span
                  className={`relative grid h-7 w-7 place-items-center rounded-full text-xs font-black ring-2 transition sm:h-9 sm:w-9 sm:text-sm ${
                    i === active ? "scale-125 bg-sun text-ink ring-white" : "bg-white/90 text-ink ring-ink"
                  }`}
                >
                  {i + 1}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-6 grid gap-6 md:grid-cols-[1fr_1.4fr]">
          <AnimatePresence mode="wait">
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur"
              aria-live="polite"
            >
              <p className="text-3xl">{s.icon}</p>
              <h3 className="font-display mt-2 text-2xl text-sun">
                {active + 1}. {s.title}
              </h3>
              <p className="mt-2 leading-relaxed text-cream/85">{s.desc}</p>
            </motion.div>
          </AnimatePresence>
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {spots.map((p, i) => (
              <li key={p.title}>
                <button
                  onClick={() => {
                    setActive(i);
                    setAuto(false);
                  }}
                  className={`w-full rounded-2xl px-3 py-3 text-left text-sm font-bold transition ${
                    i === active ? "bg-sun text-ink" : "bg-white/5 text-cream/80 hover:bg-white/10"
                  }`}
                >
                  {p.icon} {p.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
