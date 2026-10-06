"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Clock, Cog, Fish, Projector, Smartphone, Sparkles, Truck, type LucideIcon } from "lucide-react";
import { SectionHead } from "./Section";

const spots: { x: number; y: number; Icon: LucideIcon; title: string; desc: string }[] = [
  { x: 49.5, y: 33, Icon: Clock, title: "오토마타 시계", desc: "시간여행의 문을 여는 커다란 시계. 공연 흐름에 맞춰 바늘과 조명이 움직입니다." },
  { x: 50, y: 66, Icon: Sparkles, title: "3D 홀로그램", desc: "홀로그램 팬이 오토끼와 친구들, 각종 효과를 공중에 입체로 띄웁니다." },
  { x: 22, y: 22, Icon: Projector, title: "2D 프로젝션 월", desc: "무대 뒤 대형 영상이 바닷속, 놀이터, 우주로 배경을 바꿉니다. 현수막이 필요 없습니다." },
  { x: 36, y: 50, Icon: Cog, title: "기어와 롤링볼", desc: "돌아가는 기어와 굴러가는 구슬로 과학 원리를 눈앞에서 보여 줍니다." },
  { x: 59.5, y: 65, Icon: Fish, title: "고래·거북이·물고기", desc: "이야기에 맞춰 움직이는 바다 친구들 오토마타 조각상입니다." },
  { x: 61, y: 88, Icon: Truck, title: "이동형 극장", desc: "바퀴 달린 조립식 프레임이라 강당과 유희실 어디든 설치합니다." },
  { x: 80, y: 30, Icon: Smartphone, title: "앱 통합 제어", desc: "홀로그램·영상·오토마타·음향·조명을 앱 하나로 맞춥니다. 배우 1명과 조작 1명이면 공연할 수 있습니다." },
];

export default function TheaterAnatomy() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  useEffect(() => {
    if (!auto || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActive((a) => (a + 1) % spots.length), 3600);
    return () => clearInterval(id);
  }, [auto]);
  const pick = (i: number) => {
    setActive(i);
    setAuto(false);
  };
  const s = spots[active];

  return (
    <section id="theater" className="on-stage scroll-mt-16 bg-stage py-24 text-paper md:py-32">
      <div className="mx-auto max-w-[1120px] px-5">
        <SectionHead
          dark
          label="메타버스 무빙 씨어터"
          title="극장이 통째로, 우리 원에 찾아와요"
          desc="홀로그램, 영상, 움직이는 오토마타 무대를 하나로 묶은 오토끼만의 이동형 극장입니다. 번호를 눌러 극장 구석구석을 살펴보세요."
        />
      </div>
      <div className="relative mx-auto mt-12 max-w-[1280px]">
        <Image
          src="/images/theater-hero.webp"
          alt="메타버스 무빙 씨어터 구조 일러스트: 오토마타 시계와 기어, 바다 친구들이 있는 이동형 극장"
          width={1800}
          height={740}
          className="h-auto w-full"
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
        {spots.map((p, i) => (
          <button
            key={p.title}
            onClick={() => pick(i)}
            className="absolute -translate-x-1/2 -translate-y-1/2 p-2"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            aria-label={`${i + 1}. ${p.title}`}
            aria-pressed={i === active}
          >
            {i === active && <span className="absolute inset-2 animate-ping rounded-full bg-gold/60" aria-hidden />}
            <span
              className={`relative grid h-7 w-7 place-items-center rounded-full text-xs font-semibold transition-colors sm:h-9 sm:w-9 sm:text-sm ${
                i === active ? "bg-gold text-stage" : "bg-stage/80 text-paper ring-1 ring-paper/60"
              }`}
            >
              {i + 1}
            </span>
          </button>
        ))}
      </div>
      <div className="mx-auto mt-10 grid max-w-[1120px] gap-10 px-5 md:grid-cols-12">
        <div className="min-h-[150px] md:col-span-5" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <s.Icon size={28} strokeWidth={1.5} className="text-gold" aria-hidden />
              <h3 className="font-serif mt-3 text-2xl">
                {active + 1}. {s.title}
              </h3>
              <p className="mt-2 leading-[1.8] text-mist">{s.desc}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <ul className="grid grid-cols-2 border-t border-white/15 sm:grid-cols-3 md:col-span-6 md:col-start-7">
          {spots.map((p, i) => (
            <li key={p.title} className="border-b border-white/15">
              <button
                onClick={() => pick(i)}
                className={`flex w-full items-center gap-2.5 py-3.5 text-left text-sm transition-colors ${
                  i === active ? "text-gold" : "text-mist hover:text-paper"
                }`}
              >
                <p.Icon size={18} strokeWidth={1.75} aria-hidden /> {p.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
