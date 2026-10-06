"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CheckCircle2, Link2, Loader2, Pause, Phone, Play, Search, Sparkles } from "lucide-react";

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
        className={`relative w-full overflow-hidden rounded-md border border-line bg-white ${tall ? "aspect-[3/4]" : "aspect-[4/5] sm:aspect-[16/11]"}`}
        role="img"
        aria-label={`AI 검색 연출 화면: "${query}"라고 물으면 AI가 오토끼의 시간여행을 소개합니다.`}
      >
        <div className="flex items-center gap-2 border-b border-line bg-paper px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="ml-3 inline-flex items-center gap-1.5 text-xs font-semibold text-muted">
            <Sparkles size={13} strokeWidth={1.75} aria-hidden /> AI 검색
          </span>
        </div>

        <div className="flex h-[calc(100%-42px)] flex-col gap-3 p-4 sm:p-6" style={{ opacity: fadeOut }}>
          {!sent ? (
            <div className="my-auto">
              <p className="font-serif text-center text-xl text-muted sm:text-2xl">무엇이든 물어보세요</p>
              <div className="mx-auto mt-5 flex max-w-lg items-center gap-3 rounded-md border border-stage bg-paper px-4 py-3.5">
                <Search size={18} strokeWidth={1.75} className="text-muted" aria-hidden />
                <span className="caret flex-1 text-base font-semibold sm:text-lg">{typed}</span>
                <span className={`grid h-8 w-8 place-items-center rounded-md transition-colors ${typed.length === query.length ? "bg-gold text-stage" : "bg-line text-white"}`}>↑</span>
              </div>
            </div>
          ) : (
            <div className="ml-auto max-w-[85%] rounded-md bg-stage px-4 py-2.5 text-sm font-semibold text-paper sm:text-base">{query}</div>
          )}

          {scanning && (
            <div className="rounded-md bg-paper p-4">
              <p className="flex items-center gap-2 text-sm font-semibold text-muted">
                <Loader2 size={15} strokeWidth={1.75} className="animate-spin" aria-hidden /> 믿을 수 있는 정보를 찾고 있어요
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {sources.map((src, i) => {
                  const on = scanP > (i + 1) / (sources.length + 1);
                  return (
                    <div key={src} className={`flex items-center gap-2 rounded-sm px-3 py-2 text-xs transition-colors sm:text-sm ${on ? "bg-paper-deep text-stage" : "text-muted/50"}`}>
                      {on ? <CheckCircle2 size={15} strokeWidth={1.75} className="text-gold-ink" aria-hidden /> : <Loader2 size={15} strokeWidth={1.75} aria-hidden />}
                      {src}
                    </div>
                  );
                })}
              </div>
              <div className="mt-3 h-px bg-line">
                <div className="h-px bg-stage" style={{ width: `${scanP * 100}%` }} />
              </div>
            </div>
          )}

          {t >= 6 && (
            <div className="flex gap-3">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-stage text-gold">
                <Sparkles size={15} strokeWidth={1.75} aria-hidden />
              </span>
              <div className="flex-1">
                <p className="text-sm leading-relaxed sm:text-[15px]">
                  {answer.slice(0, ansChars)}
                  {ansChars < answer.length && <span className="caret" />}
                </p>
                {cardP > 0 && (
                  <div className="mt-3 flex items-center gap-3 rounded-md border border-line bg-paper p-3" style={{ opacity: cardP, transform: `translateY(${(1 - cardP) * 16}px)` }}>
                    <div className="h-14 w-14 shrink-0 rounded-sm bg-paper-deep sm:h-16 sm:w-16">
                      <Image src="/images/poses/pose-f.webp" width={407} height={900} alt="" className="h-full w-full object-contain p-1" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-serif text-lg leading-tight">오토끼의 시간여행</p>
                      <p className="truncate text-xs text-muted">메타버스 무빙 씨어터 · 유치원·어린이집 방문 공연</p>
                      <div className="mt-1.5 flex flex-wrap gap-1">
                        {tags.map((tg) => (
                          <span key={tg} className="rounded-sm border border-line bg-white px-1.5 py-0.5 text-[10px] text-muted sm:text-xs">{tg}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {t > 9.4 && (
                  <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted sm:text-sm" style={{ opacity: ease(seg(t, 9.4, 0.5)) }}>
                    <span className="font-semibold">출처</span>
                    {["공식 홈페이지", "자주 묻는 질문", "언론 보도"].map((src) => (
                      <span key={src} className="inline-flex items-center gap-1">
                        <Link2 size={12} strokeWidth={1.75} aria-hidden /> {src}
                      </span>
                    ))}
                  </div>
                )}
                {t > 10 && (
                  <div className="mt-3 inline-flex items-center gap-2 rounded-md bg-gold px-4 py-2 text-sm font-semibold text-stage" style={{ opacity: ease(seg(t, 10, 0.4)) }}>
                    <Phone size={14} strokeWidth={1.75} aria-hidden /> 공연 일정 문의하기
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {stampP > 0 && (
          <div
            className="pointer-events-none absolute bottom-6 right-5 sm:bottom-10 sm:right-10"
            style={{ opacity: stampP * fadeOut, transform: `rotate(-8deg) scale(${1.8 - 0.8 * ease(stampP)})` }}
          >
            <div className="rounded-md border-2 border-gold-ink bg-white/95 px-4 py-2 text-center">
              <p className="text-[10px] font-semibold tracking-[0.25em] text-gold-ink">AI PICK</p>
              <p className="font-serif text-xl text-gold-ink sm:text-2xl">AI가 선택한 공연</p>
            </div>
          </div>
        )}
      </div>

      {showControls && (
        <div className="mt-4 flex items-center gap-3">
          <button
            onClick={() => setPlaying((p) => !p)}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-stage text-paper"
            aria-label={playing ? "일시정지" : "재생"}
          >
            {playing ? <Pause size={14} strokeWidth={2} aria-hidden /> : <Play size={14} strokeWidth={2} aria-hidden />}
          </button>
          <div className="h-px flex-1 bg-line">
            <div className="h-px bg-gold-ink" style={{ width: `${(t / LOOP) * 100}%` }} />
          </div>
          <span className="w-10 text-right text-xs tabular-nums text-muted">0:{String(Math.floor(t)).padStart(2, "0")}</span>
        </div>
      )}
    </div>
  );
}
