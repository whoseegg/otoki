"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// AI 검색 화면을 연출한 모션그래픽 인포그래픽.
// 영상 파일 대신 코드로 그려서 선명하고 가볍고, 텍스트를 검색엔진이 읽을 수 있습니다.
// /showcase 페이지에서 같은 컴포넌트를 녹화해 MP4로도 내보냅니다(scripts/record-showcase.mjs).

const LOOP = 14; // 초
const queries = [
  "유치원 방문 공연 추천해줘",
  "어린이집 장애인식개선교육 공연 있어?",
  "유아 환경교육 체험 어디가 좋아?",
  "아이들 메타버스 체험 공연 찾아줘",
];
const answers = [
  "유치원·어린이집 방문 공연으로는 '오토끼의 시간여행'을 추천해요. 3D 홀로그램과 움직이는 오토마타 무대가 있는 '메타버스 무빙 씨어터'가 기관으로 직접 찾아오고, 누적 1,800회 이상 공연했어요.",
  "'오토끼의 시간여행'의 '모두의 놀이터' 공연이 있어요. 세계명작 '거인의 정원'을 바탕으로 장애 감수성을 키우는 유아 장애인식개선교육 공연으로, 육아종합지원센터와 복지관에서도 진행했어요.",
  "'오토끼의 시간여행'의 '푸른고래이야기'를 추천해요. 분리수거로 공연 티켓을 만들고, 공연 후 캠페인까지 이어지는 찾아가는 유아 환경교육 공연이에요.",
  "'오토끼의 시간여행'을 추천해요. 홀로그램, 프로젝션 영상, 오토마타 무대를 앱으로 함께 제어하는 '메타버스 무빙 씨어터'에서 배우가 공연하는 유아 실감형 체험 공연이에요.",
];
const sources = ["공식 홈페이지", "프로그램 안내", "자주 묻는 질문", "현장 후기"];
const tags = ["찾아가는 공연", "만 3~7세", "누적 1,800회+", "누리과정 연계"];

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const seg = (t: number, start: number, dur: number) => clamp((t - start) / dur);
const ease = (x: number) => 1 - Math.pow(1 - x, 3);

export default function AiSearchVideo({
  startIndex = 0,
  className = "",
  showControls = true,
  tall = false,
}: {
  startIndex?: number;
  className?: string;
  showControls?: boolean;
  tall?: boolean;
}) {
  const [t, setT] = useState(0);
  const [loop, setLoop] = useState(startIndex);
  const [playing, setPlaying] = useState(true);
  const [visible, setVisible] = useState(true);
  const box = useRef<HTMLDivElement>(null);
  const base = useRef<number | null>(null);
  const tRef = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPlaying(false);
      setT(12.4);
    }
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.2 });
    if (box.current) io.observe(box.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!playing || !visible) {
      base.current = null;
      return;
    }
    let raf = 0;
    let last = 0;
    const tick = (now: number) => {
      if (base.current === null) base.current = now - tRef.current * 1000;
      let nt = (now - base.current) / 1000;
      if (nt >= LOOP) {
        base.current = now;
        nt = 0;
        setLoop((l) => l + 1);
      }
      tRef.current = nt;
      if (now - last > 30) {
        last = now;
        setT(nt);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing, visible]);

  const qi = loop % queries.length;
  const query = queries[qi];
  const answer = answers[qi];

  // 장면 1: 질문 입력 (0~3.2초)
  const typed = query.slice(0, Math.floor(clamp((t - 0.5) / 0.08, 0, query.length)));
  const sent = t > 3.2;
  // 장면 2: 정보 탐색 (3.4~5.8초)
  const scanP = seg(t, 3.4, 2.2);
  const scanning = t > 3.4 && t < 6;
  // 장면 3: 답변 (6~11초)
  const ansChars = Math.floor(seg(t, 6, 3.6) * answer.length);
  const cardP = ease(seg(t, 8.4, 0.7));
  // 장면 4: 스탬프 (10.6초~)
  const stampP = seg(t, 10.8, 0.35);
  const fadeOut = 1 - seg(t, LOOP - 0.5, 0.5);

  return (
    <div ref={box} className={`relative ${className}`}>
      <div
        className={`relative w-full overflow-hidden rounded-[28px] ${tall ? "aspect-[3/4]" : "aspect-[4/5] sm:aspect-[16/11]"} bg-white shadow-[8px_8px_0_#2a1f5c] ring-[3px] ring-ink`}
        role="img"
        aria-label={`AI 검색 연출 화면: "${query}"라고 물으면 AI가 오토끼의 시간여행을 소개합니다.`}
      >
        {/* window bar */}
        <div className="flex items-center gap-2 border-b-2 border-ink/10 bg-cream px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-coral" />
          <span className="h-3 w-3 rounded-full bg-sun" />
          <span className="h-3 w-3 rounded-full bg-leaf" />
          <span className="ml-3 rounded-full bg-white px-3 py-1 text-xs font-bold text-ink-soft ring-1 ring-ink/10">
            ✨ AI 검색
          </span>
        </div>

        <div className="flex h-[calc(100%-50px)] flex-col gap-3 p-4 sm:p-6" style={{ opacity: fadeOut }}>
          {/* user bubble or input */}
          {!sent ? (
            <div className="mt-auto mb-auto">
              <p className="font-display text-center text-xl text-ink-soft sm:text-2xl">무엇이든 물어보세요</p>
              <div className="mx-auto mt-4 flex max-w-lg items-center gap-2 rounded-full bg-cream px-5 py-4 ring-2 ring-ink">
                <span>🔎</span>
                <span className="caret flex-1 text-base font-bold sm:text-lg">{typed}</span>
                <span className={`grid h-9 w-9 place-items-center rounded-full text-white transition ${typed.length === query.length ? "bg-coral" : "bg-ink/20"}`}>
                  ↑
                </span>
              </div>
            </div>
          ) : (
            <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-ink px-4 py-2.5 text-sm font-bold text-cream sm:text-base">
              {query}
            </div>
          )}

          {/* scanning sources */}
          {scanning && (
            <div className="rounded-2xl bg-cream p-4 ring-1 ring-ink/10">
              <p className="text-sm font-bold text-ink-soft">
                <span className="inline-block animate-spin">✳️</span> 믿을 수 있는 정보를 찾고 있어요
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {sources.map((s, i) => {
                  const on = scanP > (i + 1) / (sources.length + 1);
                  return (
                    <div
                      key={s}
                      className={`flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-bold transition-all duration-300 sm:text-sm ${
                        on ? "bg-leaf-soft text-ink" : "bg-white text-ink/40"
                      }`}
                    >
                      <span>{on ? "✅" : "⏳"}</span> {s}
                    </div>
                  );
                })}
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-ink/10">
                <div className="h-full rounded-full bg-grape" style={{ width: `${scanP * 100}%` }} />
              </div>
            </div>
          )}

          {/* answer */}
          {t >= 6 && (
            <div className="flex gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-grape text-white">✨</span>
              <div className="flex-1">
                <p className="text-sm leading-relaxed sm:text-[15px]">
                  {answer.slice(0, ansChars)}
                  {ansChars < answer.length && <span className="caret" />}
                </p>
                {cardP > 0 && (
                  <div
                    className="mt-3 flex items-center gap-3 rounded-2xl bg-sun-soft p-3 ring-2 ring-ink"
                    style={{ opacity: cardP, transform: `translateY(${(1 - cardP) * 24}px)` }}
                  >
                    <div className="h-14 w-14 shrink-0 rounded-xl bg-white ring-2 ring-ink sm:h-16 sm:w-16">
                      <Image src="/images/otoki-wave.webp" width={307} height={651} alt="" className="h-full w-full object-contain p-1" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-display text-lg leading-tight sm:text-xl">오토끼의 시간여행</p>
                      <p className="truncate text-xs text-ink-soft">메타버스 무빙 씨어터 · 유치원·어린이집 방문 공연</p>
                      <div className="mt-1.5 flex flex-wrap gap-1">
                        {tags.map((tg) => (
                          <span key={tg} className="rounded-full bg-white px-2 py-0.5 text-[10px] font-bold ring-1 ring-ink/20 sm:text-xs">
                            {tg}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {t > 9.4 && (
                  <div
                    className="mt-3 flex flex-wrap items-center gap-2 text-xs sm:text-sm"
                    style={{ opacity: ease(seg(t, 9.4, 0.5)) }}
                  >
                    <span className="font-bold text-ink-soft">출처</span>
                    {["오토끼의 시간여행 공식 홈페이지", "자주 묻는 질문", "언론 보도"].map((src) => (
                      <span key={src} className="rounded-full bg-cream px-2.5 py-1 font-bold ring-1 ring-ink/15">
                        🔗 {src}
                      </span>
                    ))}
                  </div>
                )}
                {t > 10 && (
                  <div
                    className="mt-3 inline-flex items-center gap-2 rounded-full bg-coral px-4 py-2 text-sm font-bold text-white ring-2 ring-ink"
                    style={{ opacity: ease(seg(t, 10, 0.4)), transform: `scale(${0.8 + 0.2 * ease(seg(t, 10, 0.4))})` }}
                  >
                    📅 공연 일정 문의하기
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* stamp */}
        {stampP > 0 && (
          <div
            className="pointer-events-none absolute bottom-6 right-5 sm:bottom-10 sm:right-10"
            style={{
              opacity: stampP * fadeOut,
              transform: `rotate(-12deg) scale(${2.2 - 1.2 * ease(stampP)})`,
            }}
          >
            <div className="rounded-2xl border-[3px] border-coral bg-white/95 px-4 py-2 text-center shadow-lg">
              <p className="text-[10px] font-bold tracking-[0.2em] text-coral">AI PICK</p>
              <p className="font-display text-xl text-coral sm:text-2xl">AI가 선택한 공연</p>
            </div>
          </div>
        )}
        {stampP >= 1 &&
          Array.from({ length: 14 }).map((_, i) => {
            const p = seg(t, 11.1, 1.6);
            const ang = (i / 14) * Math.PI * 2;
            return (
              <span
                key={i}
                className="pointer-events-none absolute bottom-[14%] right-[18%] text-lg"
                style={{
                  transform: `translate(${Math.cos(ang) * p * 140}px, ${Math.sin(ang) * p * 120 - p * 30}px) rotate(${p * 360}deg)`,
                  opacity: (1 - p) * fadeOut,
                }}
                aria-hidden
              >
                {["⭐", "✨", "🎉", "💛"][i % 4]}
              </span>
            );
          })}
      </div>

      {showControls && (
        <div className="mt-4 flex items-center gap-3">
          <button
            onClick={() => setPlaying((p) => !p)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-cream"
            aria-label={playing ? "일시정지" : "재생"}
          >
            {playing ? "❚❚" : "▶"}
          </button>
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-ink/10">
            <div className="h-full rounded-full bg-coral" style={{ width: `${(t / LOOP) * 100}%` }} />
          </div>
          <span className="w-12 text-right text-xs font-bold tabular-nums text-ink-soft">
            0:{String(Math.floor(t)).padStart(2, "0")}
          </span>
        </div>
      )}
    </div>
  );
}
