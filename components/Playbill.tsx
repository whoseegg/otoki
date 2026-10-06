import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { programs } from "@/lib/programs";
import Otoki from "./Otoki";
import { SectionHead } from "./Section";

// 공연 주제 목록. 카드 대신 공연 안내지(플레이빌)처럼 번호와 구분선으로 보여 줍니다.
export function PlaybillList({ exclude }: { exclude?: string }) {
  const list = programs.filter((p) => p.slug !== exclude);
  return (
    <ol>
      {list.map((p, i) => (
        <li key={p.slug} className="border-t border-line last:border-b">
          <Link
            href={`/program/${p.slug}`}
            className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 py-6 sm:grid-cols-[3rem_1fr_9rem]"
          >
            <span className="font-serif text-xl text-gold-ink">{String(i + 1).padStart(2, "0")}</span>
            <span>
              <span className="font-serif text-xl underline-offset-[6px] group-hover:underline sm:text-[1.4rem]">{p.title}</span>
              {p.status && (
                <span className="ml-2 inline-block translate-y-[-2px] rounded-full border border-gold-ink px-2 py-0.5 align-middle text-xs text-gold-ink">
                  {p.status}
                </span>
              )}
              <span className="mt-1.5 block text-[15px] leading-relaxed text-muted">{p.short}</span>
            </span>
            <span className="flex items-center justify-end gap-1.5 text-sm text-gold-ink">
              <span className="hidden sm:inline">{p.name}</span>
              <ArrowRight size={16} strokeWidth={1.75} className="transition-transform group-hover:translate-x-1" aria-hidden />
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}

export default function Playbill() {
  return (
    <section id="programs" className="mx-auto grid max-w-[1120px] gap-12 px-5 py-24 md:grid-cols-12 md:py-32">
      <div className="md:col-span-4">
        <div className="md:sticky md:top-28">
          <SectionHead
            label="공연 주제"
            title={
              <>
                우리 원에 필요한
                <br />
                시간여행을 골라 보세요
              </>
            }
            desc="모든 주제는 개정 누리과정과 UN 지속가능발전목표(SDGs)를 바탕으로 후즈에그가 직접 개발하고 감수합니다."
          />
          <Otoki pose="c" className="mt-10 hidden h-64 w-auto md:block" sizes="200px" />
        </div>
      </div>
      <div className="md:col-span-7 md:col-start-6">
        <PlaybillList />
      </div>
    </section>
  );
}
