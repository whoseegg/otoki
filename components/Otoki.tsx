import Image from "next/image";

const poses = {
  wave: { src: "/images/otoki-wave.webp", w: 307, h: 651, alt: "손을 모으고 웃는 오토끼" },
  point: { src: "/images/otoki-point.webp", w: 496, h: 960, alt: "손가락으로 가리키는 오토끼" },
  run: { src: "/images/otoki-run.webp", w: 173, h: 365, alt: "신나게 달리는 오토끼" },
  hello: { src: "/images/otoki-hello.webp", w: 207, h: 455, alt: "인사하는 오토끼" },
  wow: { src: "/images/otoki-wow.webp", w: 213, h: 432, alt: "깜짝 놀란 오토끼" },
} as const;

export type OtokiPose = keyof typeof poses;

export default function Otoki({
  pose = "point",
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 40vw, 240px",
}: {
  pose?: OtokiPose;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const p = poses[pose];
  return (
    <Image
      src={p.src}
      width={p.w}
      height={p.h}
      alt={`${p.alt} - 오토끼의 시간여행 캐릭터`}
      className={className}
      priority={priority}
      sizes={sizes}
    />
  );
}
