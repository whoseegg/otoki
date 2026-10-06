import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { eventFormats } from "@/lib/events";

export default function EventsTeaser() {
  return (
    <section id="events" className="mx-auto grid max-w-[1120px] items-center gap-12 px-5 py-24 md:grid-cols-12 md:py-32">
      <div className="md:col-span-6">
        <Image src="/images/booth.webp" width={1007} height={566} alt="대학 축제 연계 메타버스 실감콘텐츠 체험 부스" className="aspect-[3/2] w-full rounded-md object-cover" sizes="(max-width: 768px) 100vw, 540px" />
      </div>
      <div className="md:col-span-5 md:col-start-8">
        <p className="label">어린이 행사·체험 부스</p>
        <h2 className="font-serif mt-3 text-[1.75rem] leading-snug sm:text-[2.5rem]">
          유치원 밖 축제와 행사에도
          <br />
          찾아갑니다
        </h2>
        <p className="mt-4 text-[17px] leading-[1.8] text-muted">
          지자체 어린이날 축제, 도서관·복지관 문화행사, 기업 가족 행사, 대학·지역 축제에서 공연과 메타버스·홀로그램 체험 부스를
          운영합니다.
        </p>
        <ul className="mt-6">
          {eventFormats.map((f) => (
            <li key={f.title} className="flex items-baseline justify-between gap-4 border-t border-line py-3 text-[15px] last:border-b">
              <span>{f.title}</span>
              <span className="text-sm text-gold-ink">{f.tag}</span>
            </li>
          ))}
        </ul>
        <Link href="/events" className="mt-6 inline-flex items-center gap-1.5 text-gold-ink underline-offset-4 hover:underline">
          행사 담당자 안내 보기 <ArrowRight size={16} strokeWidth={1.75} aria-hidden />
        </Link>
      </div>
    </section>
  );
}
