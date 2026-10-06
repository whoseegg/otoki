import type { Metadata, Viewport } from "next";
import { Gowun_Batang } from "next/font/google";
import FloatingCta from "@/components/FloatingCta";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import { siteGraph } from "@/lib/jsonld";
import { keywords, site } from "@/lib/site";
import "./globals.css";

const gowun = Gowun_Batang({ weight: "700", subsets: ["latin"], variable: "--font-gowun", display: "swap", preload: false });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "오토끼의 시간여행 | 유치원·어린이집 방문 메타버스 체험 공연",
    template: "%s | 오토끼의 시간여행",
  },
  description: site.description,
  keywords,
  applicationName: site.name,
  authors: [{ name: site.org.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: site.name,
    title: "오토끼의 시간여행 | 유치원·어린이집으로 찾아가는 메타버스 체험 공연",
    description: "3D 홀로그램과 움직이는 오토마타 무대, 배우가 함께하는 방문 공연. 누적 1,800회 이상 공연.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "오토끼의 시간여행 메타버스 무빙 씨어터" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION
      ? { "naver-site-verification": process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION }
      : undefined,
  },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = { themeColor: "#14324a" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={gowun.variable}>
      <head>
        {/* Pretendard (SIL OFL) 자체 호스팅: 화면에 쓰인 글자 묶음만 내려받습니다 */}
        <link rel="stylesheet" href="/fonts/pretendard/pretendardvariable-dynamic-subset.css" />
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-stage focus:px-4 focus:py-2 focus:text-paper">
          본문 바로가기
        </a>
        <JsonLd data={siteGraph()} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingCta />
      </body>
    </html>
  );
}
