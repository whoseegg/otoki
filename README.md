# 오토끼의 시간여행 홈페이지

유치원·어린이집 방문 메타버스 체험 공연 **오토끼의 시간여행** 공식 홈페이지입니다.

- 기획서: [docs/PLAN.md](docs/PLAN.md)
- 기술 스택: Next.js 16 (App Router, SSG) · Tailwind CSS 4 · Motion

## 개발

```bash
npm install
cp .env.example .env.local   # 도메인, 검색엔진 인증값 입력
npm run dev                  # http://localhost:3000
npm run build && npm start   # 프로덕션 빌드 확인
npm run lint                 # 타입 검사
```

## 콘텐츠 수정 위치
| 내용 | 파일 |
|---|---|
| 연락처, 회사 정보, 숫자, 함께한 기관 | `lib/site.ts` |
| 프로그램(공연 주제)별 카피·SEO 문구 | `lib/programs.ts` |
| 자주 묻는 질문 | `lib/faq.ts` |
| 언론 보도 | `lib/press.ts` |

## AI 검색 모션그래픽 영상 다시 만들기
```bash
npm run build && npm start   # 터미널 1
npm run video                # 터미널 2 → public/media/*.mp4
```
