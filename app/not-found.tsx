import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto grid max-w-[1120px] items-center gap-10 px-5 pb-24 pt-32 md:grid-cols-12 md:pt-40">
      <div className="md:col-span-6">
        <p className="label">404</p>
        <h1 className="font-serif mt-3 text-4xl leading-tight sm:text-5xl">
          이 페이지는
          <br />
          시간여행 중이에요
        </h1>
        <p className="mt-5 text-[17px] leading-[1.8] text-muted">주소가 바뀌었거나 없는 페이지입니다. 아래에서 다시 찾아보세요.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="rounded-md bg-stage px-6 py-3.5 font-semibold text-paper hover:bg-stage-deep">
            홈으로
          </Link>
          <Link href="/program" className="rounded-md border border-stage px-6 py-3.5 hover:bg-paper-deep">
            공연 주제 보기
          </Link>
        </div>
      </div>
      <div className="flex justify-center md:col-span-5 md:col-start-8">
        <Image src="/images/emoticon-worried.webp" width={420} height={480} alt="어떡하지 하며 안절부절하는 오토끼" className="h-72 w-auto" priority />
      </div>
    </section>
  );
}
