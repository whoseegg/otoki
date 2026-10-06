import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";
import Otoki, { type OtokiPose } from "./Otoki";

export default function FinalCta({ pose = "g" }: { pose?: OtokiPose }) {
  return (
    <section className="on-stage relative overflow-hidden bg-stage text-paper">
      <div className="relative mx-auto grid max-w-[1120px] items-end gap-6 px-5 pt-20 md:grid-cols-12 md:pt-24">
        <div className="pb-20 md:col-span-7 md:pb-24">
          <p className="label !text-gold">공연 일정 문의</p>
          <h2 className="font-serif mt-4 text-[1.9rem] leading-[1.3] sm:text-[2.75rem]">
            “오토끼 또 언제 와요?”
            <br />
            그 질문을 우리 원에서도 들어 보세요
          </h2>
          <p className="mt-5 max-w-[520px] text-[17px] leading-[1.8] text-mist">
            원하는 날짜와 인원만 알려 주시면 공연 주제와 회차, 견적까지 맞춰 안내해 드립니다.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a href={`tel:${site.phone}`} className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3.5 text-[17px] font-semibold text-stage hover:bg-paper">
              <Phone size={18} strokeWidth={1.75} aria-hidden /> {site.phone}
            </a>
            <Link href="/contact" className="text-[15px] text-mist underline underline-offset-4 hover:text-paper">
              문의 전에 준비하면 좋은 정보
            </Link>
          </div>
        </div>
        <div className="hidden justify-end md:col-span-4 md:col-start-9 md:flex">
          <Otoki pose={pose} className="h-[340px] w-auto" sizes="240px" />
        </div>
      </div>
    </section>
  );
}
