import AiShowcase from "@/components/AiShowcase";
import Compare from "@/components/Compare";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import Journey from "@/components/Journey";
import Marquee from "@/components/Marquee";
import PainPoints from "@/components/PainPoints";
import ProgramGrid from "@/components/ProgramGrid";
import Proof from "@/components/Proof";
import QuickFacts from "@/components/QuickFacts";
import Stats from "@/components/Stats";
import TheaterAnatomy from "@/components/TheaterAnatomy";
import { faqLd } from "@/lib/jsonld";
import { faqs } from "@/lib/faq";

export default function Home() {
  return (
    <>
      <JsonLd data={faqLd(faqs)} />
      <Hero />
      <Marquee />
      <PainPoints />
      <TheaterAnatomy />
      <Stats />
      <Journey />
      <ProgramGrid />
      <AiShowcase />
      <Compare />
      <Proof />
      <QuickFacts />
      <Faq items={faqs} />
      <FinalCta />
    </>
  );
}
