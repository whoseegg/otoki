import { faqs } from "./faq";
import type { Program } from "./programs";
import { site } from "./site";

const orgId = `${site.url}/#organization`;
const showId = `${site.url}/#show`;

const { org } = site;
const present = <T extends object>(o: T) =>
  Object.fromEntries(Object.entries(o).filter(([, v]) => v !== "" && v !== undefined && !(Array.isArray(v) && !v.length)));

export const organizationLd = present({
  "@type": "Organization",
  "@id": orgId,
  name: org.name,
  alternateName: [org.nameEn, "후즈에그", "WhoseEgg"],
  url: site.url,
  sameAs: [org.homepage, site.blog, site.instagram, site.naverPlace].filter(Boolean),
  logo: `${site.url}/images/logo-face.png`,
  foundingDate: org.founded,
  founder: org.ceo ? { "@type": "Person", name: org.ceo } : "",
  taxID: org.bizNumber,
  address: org.address
    ? { "@type": "PostalAddress", streetAddress: org.address, addressLocality: org.locality, addressRegion: org.region, addressCountry: "KR" }
    : "",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.phone,
    contactType: "공연 문의",
    areaServed: "KR",
    availableLanguage: "Korean",
  },
});

export const showLd = {
  "@type": "Service",
  "@id": showId,
  name: site.name,
  alternateName: [site.nameEn, "오토끼", "메타버스 무빙 씨어터 공연"],
  serviceType: "유치원·어린이집 방문 체험 공연",
  description: site.description,
  provider: { "@id": orgId },
  areaServed: { "@type": "Country", name: "대한민국" },
  audience: { "@type": "EducationalAudience", educationalRole: "유아 (만 3~7세)", audienceType: "유치원, 어린이집" },
  image: `${site.url}/images/theater-hero.webp`,
  url: site.url,
};

export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationLd,
      showLd,
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        inLanguage: "ko-KR",
        publisher: { "@id": orgId },
      },
    ],
  };
}

export function faqLd(items: { q: string; a: string }[] = faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "홈", path: "/" }, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path}`,
    })),
  };
}

export function programLd(p: Program) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${site.name} ${p.name} - ${p.title}`,
    serviceType: p.keywords[0],
    description: p.definition,
    provider: { "@id": orgId },
    isRelatedTo: { "@id": showId },
    areaServed: { "@type": "Country", name: "대한민국" },
    audience: { "@type": "EducationalAudience", educationalRole: "유아 (만 3~7세)" },
    url: `${site.url}/program/${p.slug}`,
    keywords: p.keywords.join(", "),
  };
}
