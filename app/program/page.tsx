import type { Metadata } from "next";
import FinalCta from "@/components/FinalCta";
import JsonLd from "@/components/JsonLd";
import Otoki from "@/components/Otoki";
import { PlaybillList } from "@/components/Playbill";
import { breadcrumbLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "공연 주제·프로그램 | 환경·장애인식·디지털·다문화 유아 공연",
  description:
    "오토끼의 시간여행 공연 주제를 한눈에. 메타버스 무빙 씨어터 방문 공연, 유아 환경교육, 장애인식개선교육, 디지털 시민성·AI 교육, 다문화교육, 방문 체험 행사까지.",
  alternates: { canonical: "/program" },
};

export default function ProgramsPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "공연 주제", path: "/program" }])} />
      <section className="mx-auto grid max-w-[1120px] gap-12 px-5 pb-24 pt-32 md:grid-cols-12 md:pt-40">
        <div className="md:col-span-4">
          <p className="label">공연 주제</p>
          <h1 className="font-serif mt-3 text-4xl leading-[1.25] sm:text-5xl">
            어떤 시간여행을
            <br />
            떠나 볼까요?
          </h1>
          <p className="mt-5 text-[17px] leading-[1.8] text-muted">
            모든 공연은 개정 누리과정과 UN 지속가능발전목표(SDGs)를 바탕으로 후즈에그가 직접 개발하고 감수합니다.
          </p>
          <Otoki pose="j" priority className="mt-10 hidden h-72 w-auto md:block" sizes="220px" />
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <PlaybillList />
        </div>
      </section>
      <FinalCta pose="e" />
    </>
  );
}
