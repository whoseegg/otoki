# 오토끼의 시간여행 홈페이지

유치원·어린이집 방문 메타버스 체험 공연 **오토끼의 시간여행** 공식 홈페이지입니다.

- 기획서: [docs/PLAN.md](docs/PLAN.md)
- 기술 스택: Next.js 16 (App Router, SSG) · Tailwind CSS 4 · Motion

## 내 컴퓨터에서 바로 보기 (로컬 미리보기)
1. [Node.js LTS](https://nodejs.org) 설치 (처음 한 번)
2. 이 저장소를 내려받기: GitHub 저장소 화면 → 브랜치 `claude/charming-euler-mat1j1` 선택 → **Code → Download ZIP** → 압축 풀기
3. 실행: Windows는 `start-local.bat`, macOS는 `start-local.command`를 더블클릭
4. 브라우저에서 http://localhost:3000 이 자동으로 열립니다 (코드를 고치면 화면에 바로 반영)

> **최신 작업을 자동으로 받으려면** ZIP 대신 [GitHub Desktop](https://desktop.github.com)으로 저장소를 Clone하세요 (브랜치 `claude/charming-euler-mat1j1`).
> 그러면 `start-local.bat`을 실행할 때마다 최신 작업 내용을 자동으로 받아옵니다. 서버를 켜 둔 상태에서는 GitHub Desktop의 **Fetch origin → Pull** 버튼만 누르면 화면이 바로 바뀝니다.

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
