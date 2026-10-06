# 이미지 제작 지침 (마그니픽)

> DESIGN.md의 색·분위기 규칙을 이미지에도 그대로 적용합니다. 이미지는 섹션 순서대로 하나씩 만들고 반영합니다.

## 01. 첫 화면(Hero) 키 비주얼

### 목적
원장님이 첫 화면에서 3초 안에 "아이들이 처음 보는 무대가 우리 원에 온다"를 느끼게 하는 장면. 기존 소개서 일러스트를 그대로 쓰면 초록 언덕·분홍 하늘의 채도가 높아 남색·금색 디자인과 따로 놀고, 그림 안의 로고 글자가 페이지 로고와 중복됩니다.

### 원본 레퍼런스
| 파일 | 역할 |
|---|---|
| `ref-otoki.png` (구글 드라이브 `오토끼 포즈/포즈F.png`) | 캐릭터 고정: 흰 털, 연보라 귀 안쪽, 하늘색 헤드밴드와 태엽 열쇠, 보라 멜빵 반바지, 두 손을 모은 웃는 포즈 |
| `ref-theater.png` (소개서 무빙 씨어터 일러스트 중앙부) | 극장 구조 고정: 위쪽 금색 로마숫자 시계, 검은 프레임 2층 선반, 보라·분홍 기어, 고래·거북이·물고기 오토마타, 아래 큰 나무 바퀴 2개 |
| `ref-stage.jpg` (실제 공연 무대 사진) | 실제 무대감: 뒤 대형 프로젝션 영상, 무대 조명, 바닥 반사 |

### 장면
- 밤의 극장. 깊은 남색(#14324A) 무대 위에 메타버스 무빙 씨어터가 서 있고, 오토끼가 극장 앞 중앙에서 은은한 홀로그램 빛에 감싸여 웃고 있다.
- 극장 뒤로 프로젝션 빛이 별이 흐르는 밤하늘처럼 번지고, 위쪽 금색 시계가 따뜻하게 빛난다(#D9B48C).
- 무대 바닥에 따뜻한 스포트라이트와 부드러운 반사.

### 구도 (웹 배치 기준)
- 16:9, 2K. 극장과 캐릭터는 화면 **가운데에서 약간 오른쪽**(가로 50~75% 구간).
- **왼쪽 35%는 비어 있는 남색 밤하늘**(문구가 올라갈 자리). 아래쪽 20%도 어둡게(숫자 줄이 올라감).
- 모바일에서는 같은 이미지를 가운데 기준으로 잘라 쓰므로 주인공이 잘리지 않게 중앙 근처에 둔다.

### 스타일
- 캐릭터와 같은 부드러운 3D 렌더(동화책 같은 프리미엄 느낌), 과한 네온·보라 그라데이션 금지.
- 색: 남색 70%, 금색 빛 15%, 캐릭터·기어의 연보라·하늘색 포인트 15%.

### 금지
- 글자, 로고, 워터마크(원본 일러스트의 "METAVERSE MOVING THEATER", "오토끼의 시간여행" 로고 포함)
- 실제 아이 얼굴, 관객
- 캐릭터 모양 변형(귀 색, 옷 색, 헤드밴드, 태엽 열쇠는 원본과 같게)

### 프롬프트 (영문, 생성용)
```
Cinematic key visual for a children's theater website hero. A night-time stage in deep navy blue (#14324A).
On the stage stands the "Metaverse Moving Theater" exactly as in the theater reference: a black-framed two-level
mobile theater on two large wooden wagon wheels, a glowing golden Roman-numeral clock on top, purple and pink gears,
whale, turtle and tropical fish automata on its shelves. In front of it, at center, the white rabbit character from
the character reference (lavender inner ears, sky-blue headband with a small wind-up key, purple suspender shorts,
hands clasped, big happy smile), softly wrapped in a gentle holographic glow. Behind the theater, projection light
spreads like a starry night sky; warm golden spotlight (#D9B48C) on the stage floor with soft reflections.
Composition: 16:9, theater and rabbit placed center-right (50–75% of width); the left 35% is calm, empty navy night sky
for headline text; bottom 20% dark. Premium storybook 3D render matching the character's style, cohesive navy and gold
palette, subtle lavender and sky-blue accents only on the character and gears. No text, no logos, no watermarks,
no people or audience.
```

### 생성 설정
- 모델: Seedream 5 Pro (레퍼런스 기반 구성·캐릭터 일관성) — 비교용으로 Nano Banana Pro 1장
- 비율 16:9, 해상도 2K, 2~4장 생성 후 선택
- 선택본 → 필요 시 업스케일 → WebP 변환 → `public/images/hero-stage.webp`로 교체
