import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { episodeSdgs, goalName } from "@/lib/sdgs";
import { getProgram } from "@/lib/programs";
import SdgGrid from "./SdgGrid";
import { SectionHead } from "./Section";

export default function SdgsTeaser() {
  const live = episodeSdgs.filter((e) => e.status === "공연 중");
  return (
    <section id="sdgs" className="on-stage scroll-mt-16 bg-stage text-paper">
      <div className="mx-auto grid max-w-[1120px] gap-12 px-5 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-6">
          <SectionHead
            dark
            label="UN 지속가능발전목표(SDGs)"
            title={
              <>
                어려운 지구의 약속을
                <br />
                아이의 언어로
              </>
            }
            desc="에피소드마다 UN SDGs의 목표 하나를 맡습니다. 메타별에서 온 오토끼가 명작동화 친구들과 함께 지구의 문제를 풀며, 아이들은 이야기·실감형 무대·참여·가정 연계 실천의 네 단계로 목표를 자기 것으로 만듭니다."
          />
          <ul className="mt-8">
            {live.map((e) => (
              <li key={e.slug} className="grid grid-cols-[6rem_1fr] gap-4 border-t border-white/15 py-4 last:border-b">
                <span className="font-serif whitespace-nowrap text-2xl text-gold">SDG {e.base}</span>
                <span>
                  <span className="font-serif text-lg">
                    {e.ep} {getProgram(e.slug)?.title}
                  </span>
                  <span className="block text-sm text-mist">{goalName(e.base)}</span>
                </span>
              </li>
            ))}
          </ul>
          <Link href="/sdgs" className="mt-6 inline-flex items-center gap-1.5 text-gold underline-offset-4 hover:underline">
            SDGs 교육 자세히 보기 <ArrowRight size={16} strokeWidth={1.75} aria-hidden />
          </Link>
        </div>
        <div className="md:col-span-5 md:col-start-8 md:self-center">
          <SdgGrid dark compact />
          <p className="mt-4 text-sm leading-relaxed text-mist">17개 목표 모두를 에피소드로 만드는 것이 오토끼의 목표입니다. 현재 2편 공연 중, 나머지는 제작 예정.</p>
        </div>
      </div>
    </section>
  );
}
