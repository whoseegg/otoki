import type { Metadata } from "next";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import JsonLd from "@/components/JsonLd";
import QuickFacts from "@/components/QuickFacts";
import { breadcrumbLd, faqLd } from "@/lib/jsonld";
import { faqs } from "@/lib/faq";
import { programs } from "@/lib/programs";

const all = [...faqs, ...programs.flatMap((p) => p.faq)];

export const metadata: Metadata = {
  title: "자주 묻는 질문 | 유치원·어린이집 방문 공연 FAQ",
  description: "오토끼의 시간여행 공연 시간, 인원, 공간, 지역, 비용, 사전·사후 활동까지. 유치원·어린이집 원장님과 선생님이 자주 묻는 질문을 모았습니다.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqLd(all)} />
      <JsonLd data={breadcrumbLd([{ name: "자주 묻는 질문", path: "/faq" }])} />
      <div className="mx-auto max-w-[1120px] px-5 pt-32 md:pt-40">
        <p className="label">자주 묻는 질문</p>
        <h1 className="font-serif mt-3 text-4xl sm:text-5xl">무엇이든 물어보세요</h1>
        <p className="mt-4 text-[17px] text-muted">원장님과 선생님이 가장 많이 물어보신 질문을 모았습니다.</p>
      </div>
      <Faq items={all} title="공연 문의 전에 확인하세요" label="Q&A" />
      <QuickFacts />
      <FinalCta pose="h" />
    </>
  );
}
