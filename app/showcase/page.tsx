import type { Metadata } from "next";
import Image from "next/image";
import AiSearchVideo from "@/components/AiSearchVideo";

// 모션그래픽을 MP4로 녹화하기 위한 전용 화면 (검색 비노출). scripts/record-showcase.mjs에서 사용합니다.
export const metadata: Metadata = { title: "AI 검색 모션그래픽", robots: { index: false, follow: false } };

export default async function Showcase({ searchParams }: { searchParams: Promise<{ q?: string; tall?: string }> }) {
  const { q, tall } = await searchParams;
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-paper p-6 portrait:gap-10">
      <p className="font-serif text-center text-3xl leading-snug portrait:text-5xl">
        선생님, AI에게 물어보세요
      </p>
      <div className="w-[min(860px,92vw)] landscape:w-[min(860px,110vh)]">
        <AiSearchVideo startIndex={Number(q ?? 0)} showControls={false} tall={tall === "1"} />
      </div>
      <Image src="/brand/otoki-logo.svg" width={130} height={88} alt="오토끼의 시간여행" className="h-14 w-auto portrait:h-24" />
    </div>
  );
}
