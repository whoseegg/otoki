import { Phone } from "lucide-react";
import { site } from "@/lib/site";

// 모바일에서만 화면 아래에 고정되는 전화 문의 바. 데스크톱은 헤더 버튼을 씁니다.
export default function FloatingCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-line bg-paper/95 p-3 backdrop-blur md:hidden">
      <a href={`tel:${site.phone}`} className="flex flex-1 items-center justify-center gap-2 rounded-md bg-gold py-3 font-semibold text-stage">
        <Phone size={18} strokeWidth={1.75} aria-hidden /> 공연 일정 전화 문의
      </a>
      {site.naverPlace && (
        <a
          href={site.naverPlace}
          target="_blank"
          rel="noopener"
          className="grid w-12 place-items-center rounded-md bg-naver font-black text-white"
          aria-label="네이버 플레이스에서 보기"
        >
          N
        </a>
      )}
    </div>
  );
}
