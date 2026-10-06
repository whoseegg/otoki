# 이미지 소스 업로드 폴더

홈페이지에 쓸 원본 파일을 올리는 곳입니다. 올린 파일은 Claude가 웹용(WebP·SVG)으로 변환해 `public/images`에 넣습니다.
이 폴더 자체는 사이트에 공개되지 않습니다.

| 폴더 | 올릴 파일 | 권장 형식 |
|---|---|---|
| `01_logo` | 후즈에그 로고, 오토끼의 시간여행 로고(가로형·세로형·심볼) | SVG, AI, 투명 PNG |
| `02_character` | 오토끼 캐릭터 포즈, 친구 캐릭터 | 투명 PNG, PSD, AI |
| `03_photos` | 공연 현장, 무빙 씨어터, 체험 활동 사진 | 원본 JPG (아이 얼굴은 Claude가 블러 처리) |
| `04_illustration` | 배경 일러스트, 소품, 패턴 | PNG, SVG, PSD |
| `05_print` | 포스터, 리플릿, 활동지, 초대장 | PDF, PNG |
| `99_etc` | 그 밖의 자료 | 아무 형식 |

## 업로드 방법 (GitHub 웹)
1. 아래 링크에서 올릴 폴더를 엽니다. 브랜치가 `claude/charming-euler-mat1j1`인지 꼭 확인하세요.
2. 오른쪽 위 **Add file → Upload files**를 누르고 파일을 끌어다 놓습니다.
3. 아래 **Commit directly to the `claude/charming-euler-mat1j1` branch**를 선택하고 **Commit changes**를 누릅니다.

- 한 번에 100개, 파일 하나당 25MB까지 올릴 수 있습니다. 더 크면 나눠 올리거나 구글 드라이브를 이용하세요.
- 파일 이름은 영문·숫자를 권장합니다 (예: `otoki-wave.png`). 한글 이름도 괜찮습니다.
