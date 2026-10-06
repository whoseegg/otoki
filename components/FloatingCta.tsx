import { site } from "@/lib/site";

export default function FloatingCta() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2 sm:bottom-6 sm:right-6">
      {site.naverPlace && (
        <a
          href={site.naverPlace}
          target="_blank"
          rel="noopener"
          className="grid h-12 w-12 place-items-center rounded-full bg-[#03C75A] text-lg font-black text-white shadow-lg ring-2 ring-ink transition hover:-translate-y-1"
          aria-label="네이버 플레이스에서 보기"
        >
          N
        </a>
      )}
      <a
        href={`tel:${site.phone}`}
        className="flex items-center gap-2 rounded-full bg-coral px-5 py-3 font-bold text-white shadow-lg ring-2 ring-ink transition hover:-translate-y-1"
      >
        <span className="inline-block animate-wiggle">📞</span> 공연 일정 전화 문의
      </a>
    </div>
  );
}
