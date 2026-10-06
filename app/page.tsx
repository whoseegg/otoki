import AiShowcase from "@/components/AiShowcase";
import Compare from "@/components/Compare";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import Journey from "@/components/Journey";
import PainPoints from "@/components/PainPoints";
import Playbill from "@/components/Playbill";
import Proof from "@/components/Proof";
import QuickFacts from "@/components/QuickFacts";
import TheaterAnatomy from "@/components/TheaterAnatomy";
import { faqLd } from "@/lib/jsonld";
import { faqs } from "@/lib/faq";

export default function Home() {
  return (
    <>
      <JsonLd data={faqLd(faqs)} />
      <Hero />
      <PainPoints />
      <TheaterAnatomy />
      <Journey />
      <Playbill />
      <Proof />
      <AiShowcase />
      <Compare />
      <QuickFacts />
      <Faq items={faqs} />
      <FinalCta />
    </>
  );
}
