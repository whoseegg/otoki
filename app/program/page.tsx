import type { Metadata } from "next";
import FinalCta from "@/components/FinalCta";
import JsonLd from "@/components/JsonLd";
import ProgramGrid from "@/components/ProgramGrid";
import { breadcrumbLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "공연 주제·프로그램 | 환경·장애인식·디지털·다문화 유아 공연",
  description:
    "오토끼의 시간여행 공연 주제를 한눈에. 메타버스 무빙 씨어터 방문 공연, 유아 환경교육, 장애인식개선교육, 디지털 시민성·AI 교육, 다문화교육, 방문 체험 행사까지.",
  alternates: { canonical: "/program" },
};

export default function ProgramsPage() {
  return (
    <div className="bg-dream pt-28">
      <JsonLd data={breadcrumbLd([{ name: "프로그램", path: "/program" }])} />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-bold text-coral">공연 주제 & 프로그램</p>
        <h1 className="font-display mt-3 text-4xl leading-snug sm:text-6xl">
          어떤 시간여행을
          <br />
          떠나 볼까요?
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          모든 공연은 개정 누리과정과 UN 지속가능발전목표(SDGs)를 바탕으로 후즈에그가 직접 개발하고 감수합니다.
        </p>
      </div>
      <ProgramGrid heading={false} />
      <FinalCta />
    </div>
  );
}
