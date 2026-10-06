import Image from "next/image";

// 원본 캐릭터 포즈 (구글 드라이브 '오토끼 포즈' A~J). 한 섹션에 한 번만 사용합니다.
const poses = {
  a: { w: 424, alt: "몸을 기울여 웃는 오토끼" },
  b: { w: 445, alt: "두 팔을 벌린 오토끼" },
  c: { w: 499, alt: "한 손을 들어 인사하는 오토끼" },
  d: { w: 423, alt: "걸어가는 오토끼" },
  e: { w: 464, alt: "손을 흔드는 오토끼" },
  f: { w: 407, alt: "두 손을 모으고 웃는 오토끼" },
  g: { w: 567, alt: "신나게 뛰는 오토끼" },
  h: { w: 575, alt: "깜짝 놀란 오토끼" },
  i: { w: 396, alt: "허리에 손을 얹은 오토끼" },
  j: { w: 518, alt: "생각하는 오토끼" },
} as const;

export type OtokiPose = keyof typeof poses;

export default function Otoki({
  pose = "f",
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 45vw, 320px",
  decorative = false,
}: {
  pose?: OtokiPose;
  className?: string;
  priority?: boolean;
  sizes?: string;
  decorative?: boolean;
}) {
  const p = poses[pose];
  return (
    <Image
      src={`/images/poses/pose-${pose}.webp`}
      width={p.w}
      height={900}
      alt={decorative ? "" : `${p.alt} - 오토끼의 시간여행 캐릭터`}
      className={className}
      priority={priority}
      sizes={sizes}
    />
  );
}
