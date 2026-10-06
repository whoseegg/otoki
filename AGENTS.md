# AGENTS.md

AI 코딩 도구(Codex, Claude Code 등)가 이 저장소에서 작업할 때 먼저 읽는 안내입니다.

## 프로젝트
- 유치원·어린이집 방문 메타버스 체험 공연 **오토끼의 시간여행**(㈜후즈에그) 홈페이지
- Next.js 16 (App Router, 정적 생성) · Tailwind CSS 4 · Motion · Lucide 아이콘
- 작업 브랜치: `claude/charming-euler-mat1j1` (main에 아직 머지 전)

## 명령어
- 설치: `npm install`
- 개발 서버: `npm run dev` → http://localhost:3000
- 검사: `npm run lint` (TypeScript 타입 검사)
- 빌드: `npm run build` — 변경 후 반드시 통과 확인

## 화면(UI)·카피·이미지를 바꿀 때
- 먼저 `docs/DESIGN.md`를 읽고 따릅니다.
- 색·글꼴·모서리는 `app/globals.css`의 토큰만 사용합니다. 임의의 hex 색, 새 그림자, 새 모서리 값을 만들지 않습니다.
  - 예외: UN SDG 공식 색은 `lib/sdgs.ts`의 값만, SDG 컴포넌트 안에서만 사용
- 모든 내용을 둥근 카드에 넣지 않습니다. 번호 목록·구분선·표를 우선합니다.
- 아이콘은 `lucide-react`만, 이모지를 아이콘으로 쓰지 않습니다.
- 캐릭터 이미지는 `components/Otoki.tsx`(원본 포즈 a~j)만, 섹션당 한 번만.
- 현장 사진 속 아이 얼굴은 항상 블러 처리.
- UN 엠블럼은 사용 금지(SDG 로고·아이콘만 허용).
- 390px·1440px 화면, 키보드 초점, 글자 대비(4.5:1)를 확인합니다.

## 콘텐츠 위치
| 내용 | 파일 |
|---|---|
| 연락처·회사·숫자·함께한 기관 | `lib/site.ts` |
| 공연 주제별 카피·SEO | `lib/programs.ts` |
| SDGs 목표·에피소드 연결 | `lib/sdgs.ts` |
| 행사·부스 | `lib/events.ts` |
| FAQ | `lib/faq.ts` |
| 기획·검색 노출·확인 필요 항목 | `docs/PLAN.md`, `docs/REDESIGN.md` |

## 검색 노출(SEO·GEO)
- 페이지를 추가하면 `app/sitemap.ts`, `lib/llms.ts`에도 반영하고, 필요한 JSON-LD(`lib/jsonld.ts`)를 붙입니다.
- 사실이 아닌 숫자·후기·인증을 쓰지 않습니다. 확인되지 않은 값은 `// 확인 필요` 주석을 답니다.
