#!/bin/bash
# macOS: 더블클릭으로 로컬 미리보기 실행
cd "$(dirname "$0")"
if ! command -v node >/dev/null 2>&1; then
  echo "Node.js가 없습니다. https://nodejs.org 에서 LTS 버전을 설치한 뒤 다시 실행해 주세요."
  open https://nodejs.org
  exit 1
fi
[ -d node_modules ] || { echo "처음 실행이라 필요한 파일을 설치합니다..."; npm install; }
(sleep 6 && open http://localhost:3000) &
npm run dev
