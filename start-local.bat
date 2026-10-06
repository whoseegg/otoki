@echo off
chcp 65001 >nul
title 오토끼의 시간여행 - 로컬 미리보기
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo [안내] Node.js가 설치되어 있지 않습니다.
  echo https://nodejs.org 에서 LTS 버전을 설치한 뒤 이 파일을 다시 실행해 주세요.
  start https://nodejs.org
  pause
  exit /b 1
)

if not exist node_modules (
  echo [1/2] 처음 실행이라 필요한 파일을 설치합니다. 1~3분 정도 걸립니다...
  call npm install
)

echo [2/2] 로컬 서버를 시작합니다. 잠시 뒤 브라우저가 열립니다.
echo 종료하려면 이 창에서 Ctrl+C 를 누르세요.
start "" cmd /c "timeout /t 6 >nul && start http://localhost:3000"
call npm run dev
