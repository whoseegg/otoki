# 오토끼 무빙 씨어터 이미지 생성 프롬프트 모음

> 마그니픽(Magnific) 등 이미지 생성 도구에 그대로 붙여 넣어 쓰는 지시문 모음입니다.
> **이미지는 생성만 하고, 홈페이지 반영은 담당자 승인 후 진행합니다.**

---

## 1. 연출 방향

- **실사 사진처럼**: 그림이 아니라, 어두운 강당에서 실제 공연 순간을 시네마 카메라로 찍은 사진.
- **비현실적인 것은 빛뿐**: 홀로그램과 프로젝션 영상만 마법처럼, 무대·바닥·먼지·케이블은 현실 그대로.
- **오토끼는 홀로그램으로**: 장비 이름 *Metaverse Moving Theater*처럼, 중앙 홀로그램 팬에서 오토끼가 관객 쪽으로 튀어나옴. 3D 캐릭터가 실사 장면에 섞여도 어색하지 않은 이유.
- **화면을 뚫고 나오는 입체감**: 뒤쪽 프로젝션 스크린 속 고래(EP.1 푸른고래이야기)가 스크린 테두리를 넘어 객석으로 나옴. 길거리 3D 광고판(아나모픽 착시)처럼 **스크린 프레임이 보여야** "뚫고 나온다"가 읽힘.
- **색**: 남색(#14324A) 중심, 시계 금색(#D9B48C) 강조, 홀로그램·바다의 청록빛만 차가운 포인트. 네온 보라 그라데이션 금지.

## 2. 참고 이미지 (매번 같은 순서로 첨부)

| 순서 | 파일 | 역할 | 지켜야 할 것 |
|---|---|---|---|
| ① | 오토끼 캐릭터 (포즈 F 등) | 홀로그램 캐릭터 모양 | 흰 털, 연보라 귀 안쪽, 하늘색 헤드밴드와 태엽 열쇠, 보라 멜빵 반바지, 웃는 얼굴 |
| ② | 무빙 씨어터 일러스트 | 극장 구조 | 금색 로마숫자 시계, 검은 프레임 2층 선반, 보라·분홍 기어, 고래·거북이·물고기 오토마타, 큰 나무 바퀴 2개 |
| ③ | 실제 공연 무대 사진 | 실사 질감·조명 | 대형 프로젝션 스크린, 무대 조명, 바닥 반사 |

## 3. 사용법

1. 아래 **장면 프롬프트** 뒤에 **4. 공통 블록**을 이어 붙입니다.
2. 참고 이미지 3장을 위 순서대로 첨부합니다.
3. 모델: **Seedream 5 Pro**, 2K (실사감 비교용으로 Nano Banana Pro 1장).
4. 마음에 드는 결과는 seed를 고정하고 문장 한두 개만 바꿔 다듬습니다.

---

## 4. 공통 블록 (모든 프롬프트 끝에 붙이기)

```
REFERENCES: Image 1 = the white rabbit character; keep exactly the same face, lavender inner ears,
sky-blue headband with a small wind-up key, purple suspender shorts. Image 2 = the Metaverse Moving
Theater; keep its structure: matte black two-level steel frame, wooden shelves, golden Roman-numeral
automaton clock on top, purple and pink gears, whale / sea turtle / fish automata, two large wooden
wagon wheels. Image 3 = real stage lighting, rear-projection screen and floor reflections.
The rabbit appears ONLY as a semi-transparent volumetric hologram projected from a spinning LED
hologram fan (faint scan lines, radial fan-blade streaks, light particles at its edges).

REALISM: photorealistic, shot on a full-frame cinema camera, natural film grain, slight vignetting,
subtle chromatic aberration at the edges, mild motion blur on moving elements, dust in light beams,
real worn materials (brass, chipped paint, screws, taped cables), realistic exposure, no HDR look.

AVOID: illustration, CGI render look, plastic or waxy surfaces, over-smooth textures, oversaturated
neon gradients, excessive bloom, text, letters, logos, watermark, signage, visible faces of children,
anyone facing the camera, distorted rabbit, changed outfit colors.
```

---

## 5. 기본안 (1차 생성 완료: A~C)

1차 생성 결과는 마그니픽 폴더 **"오토끼의 시간여행 홈페이지"**에 있습니다. 구도와 연출 의도는 확정되었습니다.

| 안 | 연출 | 결과 |
|---|---|---|
| A. 기본 | 고래가 스크린을 뚫고 나오고, 오토끼 홀로그램이 손을 뻗음 | [A-1](https://www.magnific.com/app/creation/iGIHKPQ3uK) · [A-2](https://www.magnific.com/app/creation/N2oQbOU6D9) |
| B. 관객 시점 | 앞줄에 뒤돌아 앉은 아이들 실루엣 (얼굴 없음) | [B-1](https://www.magnific.com/app/creation/rgApB12xtc) · [B-2](https://www.magnific.com/app/creation/tCg6ZIMmZJ) |
| C. 우주편 | 별빛 고래가 스크린 밖 천장으로 솟아오름 | [C-1](https://www.magnific.com/app/creation/gOc8v7jSXO) · [C-2](https://www.magnific.com/app/creation/xSGe8gRjfW) |

### A. 기본 프롬프트 (전체본)

```
Photorealistic cinematic photograph, shot on a full-frame cinema camera, 35mm lens, f/2.8,
low-light event photography inside a darkened kindergarten auditorium just before a show begins.

CENTER: the "Metaverse Moving Theater" built exactly like image 2 — a real, physical two-level
mobile theater with a matte black steel frame, scuffed wooden shelves, a large golden Roman-numeral
automaton clock on top lit from within, purple and pink metal gears, hand-painted whale, sea turtle
and tropical fish automata on the shelves, two large wooden wagon wheels with visible wear.

HOLOGRAM: from a spinning holographic LED fan at the center of the theater, a volumetric hologram
of the white rabbit character from image 1 bursts forward toward the camera, leaning out of the
stage into the audience space, one hand reaching toward the viewer. Semi-transparent with faint
horizontal scan lines, radial streaks from the fan blades, cyan-white light spilling onto nearby
surfaces, tiny light particles drifting off its edges.

BACKGROUND: behind the theater, a huge rear-projection screen like in image 3 shows a deep-ocean
scene. A giant blue whale is breaking OUT of the screen — its head and front fin extend past the
physical screen frame into the room in forced-perspective 3D, like an anamorphic 3D billboard;
the screen's black border is clearly visible so the breakthrough reads as real. Water caustics,
bubbles and small glowing fish spill over the frame edge into the air and onto the stage floor.

ATMOSPHERE: light stage haze catching visible projector beams, volumetric light rays, warm golden
spotlight on the stage floor, cool deep-navy darkness, glossy floor reflections of the hologram
and the clock. Mysterious, magical, awe-inspiring, yet grounded and believable.

COMPOSITION: 16:9 wide. Theater and hologram slightly right of center (50–75% of width), whale
breaking out toward the upper left. Left 35% calm dark navy reserved for headline text. Bottom 20%
darker. Eye-level camera from the audience, slight low angle.
```

- **B안**: A에 다음 장면을 추가합니다. "the dark backs of a row of small seated children seen only from behind as soft, out-of-focus silhouettes, no faces, bottom 15% of the frame"
- **C안**: A의 바다를 "a deep starry cosmos with a swirling time-tunnel" 장면으로 바꾸고, 고래를 "a luminous whale made of starlight arcing over the theater into the ceiling" 장면으로 바꿉니다.

---

## 6. 분위기별 (첫 화면 후보, 16:9)

### 6-1. 막이 오르기 직전 · 고요한 기대감
궁금증을 만드는 첫 화면. 문구가 가장 잘 읽힙니다.
```
A darkened kindergarten auditorium in total silence, seconds before the show. Everything is black
except the golden automaton clock on the theater, glowing softly from within, and a thin beam of
haze-filled light from the projector. At the center the hologram fan has just switched on: the rabbit
hologram is only half-formed, flickering into existence from swirling cyan light particles, one ear
already complete. On the dark projection screen behind, the faint outline of a whale's eye is just
beginning to appear. Extremely low-key lighting, 80% of the frame in deep navy shadow, quiet tension
and wonder. 16:9, theater center-right, left 40% almost pure dark navy for headline text. 50mm lens.
```

### 6-2. 클라이맥스 · 폭발하는 경이
몰입감을 가장 강하게 보여 줍니다. 행사·SNS 메인용입니다.
```
The climax of the show in a darkened auditorium. Every effect at its peak at once: a giant whale
bursts fully out of the rear-projection screen, its body arching over the theater into the room,
water droplets and bubbles frozen mid-air; the rabbit hologram leaps forward toward the camera with
both arms wide open; the gears spin with motion blur; the clock hands whirl; beams of stage light cut
through thick haze in every direction. Explosive energy but a controlled navy-and-gold palette with
cyan ocean light. Slight low angle, 24mm wide lens for strong depth and scale. 16:9.
```

### 6-3. 따뜻한 동화 · 황금빛 아늑함
원장님·학부모에게 "안전하고 따뜻한 공연"이라는 신뢰를 줍니다.
```
A warm, intimate storybook moment in a small kindergarten hall lit mostly by amber stage light.
The golden clock glows like a fireplace. The rabbit hologram sits gently on the edge of the
theater's lower shelf, smiling and swinging its legs, softly glowing in warm white rather than cyan.
On the screen behind, a calm sunset sea with a whale slowly surfacing; its tail gently curls out past
the screen frame. Soft haze, warm bokeh lights, cozy and tender, like the opening of a bedtime story.
Warm gold 40%, navy 50%, pale cyan accents 10%. 85mm lens, shallow depth of field. 16:9.
```

### 6-4. 시간의 문 · 시계 포털
"시간여행"이라는 이름을 그대로 보여 주는 세계관 이미지입니다.
```
The golden Roman-numeral clock on top of the theater has transformed into a glowing time portal:
its face opens into a deep swirling tunnel of golden light and floating clock numerals, the hands
spinning so fast they blur into rings. The rabbit hologram stands at the center holding its wind-up
key up toward the portal, as if winding time itself. Golden light particles stream out of the portal
over the stage and toward the camera; gears on the theater rotate in sync. The projection screen
behind shows passing eras: a deep ocean, a playground, a starry sky, blending in a light trail.
Mysterious, epic but child-friendly. 16:9, slight low angle.
```

---

## 7. 상황(장소)별

### 7-1. 진짜 유치원 강당 · 낮
원장님이 "우리 원 강당에 이렇게 들어온다"를 바로 상상하게 합니다.
```
A real Korean kindergarten indoor gym during the daytime with blackout curtains drawn, thin lines of
daylight leaking at the curtain edges. Light wooden floor, colorful soft mats stacked at the side,
small child-size chairs neatly arranged in rows (empty), a folded basketball hoop on the wall.
The Metaverse Moving Theater stands at the front, the rabbit hologram glowing at its center, and a
portable projection screen behind shows an ocean with a whale swimming out past the frame edge.
Documentary photography style, natural and believable, slightly mixed color temperature
(warm stage light + cool daylight leaks). 16:9, 28mm lens, eye level.
```

### 7-2. 야외 축제 부스 · 해 질 녘
행사·부스 페이지용입니다. 지자체·기업 행사 기획자를 겨냥합니다.
```
An outdoor children's festival at blue hour. The Metaverse Moving Theater is set up inside a large
white canopy tent booth, string lights glowing overhead, the deep blue evening sky behind. The rabbit
hologram greets the crowd from the center of the theater; a projection screen at the back of the
tent shows the ocean, with a whale and glowing fish swimming out of it over the heads of the crowd.
In the foreground, families seen ONLY from behind as soft out-of-focus silhouettes, no faces.
Festival atmosphere, warm bulbs vs. cool dusk sky, lively but premium. 16:9, 35mm lens.
```

### 7-3. 도서관·문화센터 실내 행사
도서관·문화센터 등 공공 행사 담당자를 겨냥합니다.
```
A modern public library children's room converted into a small theater for a weekend event.
Tall wooden bookshelves line both sides, warm reading lamps dimmed, the ceiling lights off.
The Metaverse Moving Theater stands between the shelves; the rabbit hologram floats upward
holding an open glowing storybook, and pages of light flutter out of it into the room.
Behind the theater, a projection on the wall shows an underwater world, a whale swimming out
past the projection edge across the bookshelves. Calm, intelligent, magical. 16:9, 35mm lens.
```

### 7-4. 설치 장면 · 극장이 찾아온다
"이동형, 어디든 설치"라는 장점을 보여 줍니다. 공연 소개·설치 안내용입니다.
```
Early morning in a kindergarten hallway leading into the gym, soft daylight through windows.
Two staff members in plain dark work clothes, seen from behind only, roll the Metaverse Moving
Theater on its big wooden wheels through wide double doors. Inside the gym, the projection screen
is already up and testing: a whale swims out of the screen frame into the empty room, and a tiny
test version of the rabbit hologram flickers on the theater's fan, as if waking up.
Behind-the-scenes documentary photo, natural, honest, slightly candid. 16:9, 35mm lens.
```

---

## 8. 목적(페이지)별

### 8-1. EP.1 푸른고래이야기 · 환경편 (SDG 14)
```
Inside the darkened auditorium, the projection screen shows a polluted ocean: plastic bags and
bottles drifting in murky water. The rabbit hologram reaches out, and where its light touches,
the plastic dissolves into glowing particles that turn into small bright fish. A blue whale swims
OUT of the screen into the room, the water around it becoming clean and clear as it passes the
frame; coral-like light grows on the theater's shelves. A story of recovery and hope, not fear:
murky grey-green on the screen's far side, clean bright cyan on the room side. 16:9, 35mm.
```

### 8-2. EP.2 모두의 놀이터 · 장애인식개선편 (SDG 10)
```
The projection screen shows a warm, sunny inclusive playground: a wide ramp leading up to a slide,
a wheelchair-accessible swing, a sensory sound wall, a sand table at seated height. The playground
extends OUT of the screen into the dark auditorium as glowing holographic structures — a light ramp
and a slowly swinging light swing float in front of the theater. The rabbit hologram stands on the
glowing ramp, waving everyone in. No people, no real children; only the rabbit and the empty,
inviting playground. Message: everyone can play together. Warm sunlight tones meeting stage navy.
16:9, 35mm.
```

### 8-3. SDGs 페이지 · 17가지 약속의 빛
```
The darkened auditorium with the Metaverse Moving Theater at center. Seventeen small spheres of
softly colored light (red, gold, green, blue, orange, pink and other varied hues) slowly orbit the
golden clock in a ring, like planets around a sun; two of them (deep ocean blue and magenta-pink)
glow brighter and drift down toward the rabbit hologram, which cups them in its hands.
The projection screen behind shows Earth seen from space, with a whale swimming across the planet
and out of the frame. No text, no numbers, no logos or emblems. Hopeful and calm. 16:9.
```
> 실제 SDG 로고·숫자는 이미지에 넣지 않고 코드로 따로 올립니다(공식 사용 규정, UN 엠블럼 사용 금지).

### 8-4. 문의·마지막 CTA · 다음 무대로의 초대
```
After the show, the auditorium lights are slowly coming back up to a soft dim level. The rabbit
hologram turns toward the camera, waving goodbye with one hand and holding out a glowing golden
ticket-shaped beam of light toward the viewer with the other (no text on it). The whale on the
screen dives back into the ocean, its tail the last thing visible past the frame edge.
Gentle afterglow, warm gold light, inviting and friendly, a feeling of "come see us again."
Composition with large calm empty space on the left for a call-to-action. 16:9, 50mm.
```

---

## 9. 유형(포맷)별

### 9-1. 모바일 첫 화면 · 세로 9:16
```
Vertical composition. The Metaverse Moving Theater in the lower half of the frame, the rabbit
hologram bursting upward and forward from its center; above, the projection screen fills the top,
and a whale dives DOWN out of the screen toward the theater, crossing the screen frame. The top 25%
is calm dark navy with faint haze for headline text; the bottom 15% dark for buttons. Strong
vertical depth, 24mm lens, slight low angle. 9:16.
```

### 9-2. 장비 제품컷 · 무빙 씨어터 해부도용
"극장 구석구석 살펴보기" 섹션의 번호 핫스팟 바탕 이미지입니다.
```
Clean product photograph of the Metaverse Moving Theater alone, three-quarter front view, on a
seamless deep navy studio backdrop with a soft gradient floor. Every part clearly visible and
evenly lit: golden clock, both shelf levels, gears, whale / turtle / fish automata, hologram fan
(a faint rabbit hologram glowing at the center), wooden wheels. Soft key light from the left,
golden rim light from behind, subtle floor reflection. No projection screen, no effects clutter.
Premium product catalog photo. 16:9 with generous empty space around the theater.
```

### 9-3. 디테일 접사 · 질감 컷
섹션 배경, 장식 이미지, 영상 컷에 씁니다.
```
Macro close-up photograph of the theater's golden Roman-numeral clock and the purple and pink gears
beside it, brass texture, tiny scratches and fingerprints, shallow depth of field. In the soft
background bokeh, the cyan glow of the rabbit hologram and a hint of a whale on the screen.
Dust floating in a warm light beam. 100mm macro lens, f/2.8. 16:9 or 4:3.
```

### 9-4. SNS·공유 썸네일 (OG 1200×630)
```
Compact, centered composition for a social media thumbnail: the theater and the rabbit hologram
in the exact center, the whale breaking out of the screen right behind them, all key elements
within the central 70% of the frame so it survives cropping. High contrast, clear silhouette,
readable even at small sizes. Deep navy, gold clock, cyan hologram. 16:9 (crop to 1.91:1 later).
```

---

## 10. 추천 조합

| 쓰임 | 1순위 | 2순위 |
|---|---|---|
| 첫 화면 (PC) | 6-1 고요한 기대감 | 6-4 시간의 문 |
| 첫 화면 (모바일) | 9-1 | — |
| 무빙 씨어터 섹션 | 9-2 제품컷 | 7-4 설치 장면 |
| 행사·부스 페이지 | 7-2 야외 축제 | 7-3 도서관 |
| 공연 주제 페이지 | 8-1, 8-2 | — |
| SDGs 페이지 | 8-3 | — |
| 마지막 문의 영역 | 8-4 | 6-3 따뜻한 동화 |

## 11. 생성 설정과 비용

- 모델: Seedream 5 Pro / 해상도 2K / 안마다 2장
- 비용: 장당 100크레딧 (16안 × 2장 ≈ 3,200크레딧)
- 선택본만 업스케일(실사 모드, Creativity 낮게) → 필름 그레인 유지 → WebP 변환

## 12. 고를 때 점검표 (AI 티 점검)

- [ ] 극장 바퀴·나사·케이블 같은 현실 디테일이 살아 있다
- [ ] 극장 구조(시계, 2층 선반, 기어, 오토마타, 나무 바퀴)가 우리 장비와 같다
- [ ] 오토끼의 귀 색, 헤드밴드와 태엽 열쇠, 보라 멜빵이 원본과 같다
- [ ] 고래(또는 효과)가 **스크린 프레임 앞으로** 나와 있다
- [ ] 글자·가짜 로고·워터마크가 없다
- [ ] 문구를 올릴 빈 공간(왼쪽 또는 위쪽)이 있다
- [ ] **아이 얼굴이 하나도 보이지 않는다** (보이면 폐기 또는 블러)
- [ ] 과한 네온·번짐 없이 남색·금색 톤이 유지된다

## 13. 반영 절차

1. 생성 → 결과 링크를 담당자에게 공유
2. 담당자 승인
3. 업스케일 → WebP 변환 → `public/images/`에 저장
4. 해당 섹션 교체 → 390px·1440px 화면, 글자 대비 확인 → 빌드 통과 후 반영
