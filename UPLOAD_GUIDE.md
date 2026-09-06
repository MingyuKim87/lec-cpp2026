# main 업로드 → gh-pages 자동 생성·배포

이 폴더의 **내용 전체**를 GitHub 저장소의 `main` 브랜치 루트에 올립니다. 포함된 `.github/workflows/deploy.yml`이 `main` 푸시마다 사이트를 빌드하고, `gh-pages` 브랜치를 자동으로 생성·갱신한 뒤 같은 빌드 결과를 GitHub Pages에 게시합니다.

```text
main: index.md · _config.yml · _layouts · assets · .github
  → Jekyll 빌드 및 공개 파일 검사
  → gh-pages: index.html · assets · .nojekyll 자동 생성·갱신
  → 같은 빌드 결과를 GitHub Pages에 배포
```

`ref4`의 섹션과 main → gh-pages 구성을 C++ 수업에 맞췄습니다. 실제 사이트 게시까지 한 워크플로에서 처리하도록 공식 Pages 배포 단계를 추가했습니다.

## 1. 새 저장소와 최초 Pages 설정

기본 배포 예시는 `mgyukim87/lec-cpp-programming2026`입니다. 이 작업에서는 GitHub 저장소를 생성하거나 업로드하지 않았습니다.

1. GitHub에서 사용할 빈 저장소를 만듭니다. 아래 명령 예시는 README 등을 자동 생성하지 않은 저장소를 기준으로 합니다.
2. 아래 방법으로 파일을 `main`에 올립니다.
3. 최초 한 번, **Settings → Pages → Build and deployment → Source → GitHub Actions**를 선택합니다.
4. 첫 실행이 Pages 설정 전에 시작되어 `deploy` 단계에서 실패했다면 **Actions → Build and publish C++ course site → Run workflow → main**으로 다시 실행합니다. 성공한 `build` 작업에서 이미 `gh-pages`를 만들었다면 직접 만들 필요가 없습니다.

이 구성의 Pages Source는 **GitHub Actions**입니다. `gh-pages`는 생성된 HTML을 보관하는 배포 브랜치이며, 실제 게시에는 동일한 빌드 결과를 공식 Pages 배포 Action으로 전달합니다. `ref4` 안내의 “Deploy from a branch” 설정 대신 위 설정을 사용합니다.

GitHub는 기본 `GITHUB_TOKEN`만으로 신규 Pages 사이트를 자동 활성화할 수 없으므로 최초 설정 한 번은 저장소에서 해야 합니다. 이후 `main` 수정·푸시·병합마다 자동으로 갱신됩니다. 개인 토큰이나 별도 Secrets 등록은 필요하지 않습니다. [Pages 최초 설정](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow), [configure-pages 활성화 권한](https://github.com/actions/configure-pages/blob/main/action.yml).

## 2. 업로드할 파일

ZIP 자체가 아니라 **압축을 푼 내용**을 저장소 루트에 올립니다. 저장소 안에 `docs/`나 `7_Webpage/` 폴더를 한 번 더 만들지 않습니다.

```text
lec-cpp-programming2026/       ← main 브랜치의 저장소 루트
├── .github/workflows/deploy.yml
├── .gitignore
├── _config.yml
├── _layouts/course.html
├── index.md
├── Gemfile
├── README.md
├── UPLOAD_GUIDE.md
└── assets/
    ├── css/course.css
    ├── js/course.js
    └── docs/
        ├── syllabus.pdf
        └── C++Programming_2026_Fall_Revised_Syllabus_v2.pdf
```

`.github`는 숨김 폴더이며 자동 배포에 필수입니다. macOS Finder에서는 `Command + Shift + .`로 숨김 파일을 볼 수 있습니다. 아래 `git add .`는 숨김 폴더도 함께 추가합니다. `.github`, README, 업로드 안내와 Gemfile은 웹사이트 빌드에서 제외됩니다.

아직 Git 저장소와 원격 주소를 설정하지 않은 로컬 폴더라면:

```bash
cd "/Users/mgyukim/Documents/Lectures/2026_Fall/2_C_Programming/7_Webpage/docs"
git init
git branch -M main
git add .
git commit -m "Add C++ course site and automatic gh-pages deployment"
git remote add origin https://github.com/mgyukim87/lec-cpp-programming2026.git
git push -u origin main
```

다른 저장소 이름을 쓸 경우 원격 주소와 `_config.yml`의 `url`, `baseurl`, `repository`를 함께 수정합니다. 기존 저장소에서는 `git init`이나 원격 추가를 반복하지 않고 해당 저장소의 `main`에 파일을 반영합니다.

## 3. 이후 수정과 배포 확인

수업 내용은 항상 **main의 `index.md`**에서 수정합니다. 페이지는 Textbook → Course Overview → Course Format → Class Schedule & Activities → Assessment 순서입니다. HW·Lab·Quiz는 링크 없는 개별 컬럼이며, 없는 회차는 공란입니다. 모바일 카드도 같은 데이터를 사용합니다.

```bash
git switch main
git pull --ff-only origin main
# index.md 등 필요한 파일 수정
git add index.md _config.yml _layouts assets .github README.md UPLOAD_GUIDE.md
git commit -m "Update C++ course syllabus"
git push origin main
```

GitHub 웹에서 `main`의 파일을 편집해 커밋해도 자동화가 실행됩니다. 다른 브랜치에서 작업한 경우 `main`에 병합될 때 시작됩니다. 필요하면 Actions의 **Run workflow**로 수동 재배포할 수 있습니다.

- **Actions → Build and publish C++ course site:** `build`와 `deploy`가 모두 성공했는지 확인합니다.
- **gh-pages:** 루트의 `index.html`, `assets/`, `.nojekyll`을 확인합니다. 이 브랜치는 빌드 결과 전용이므로 직접 수정하지 않습니다.
- **게시 주소:** 기본값은 `https://mgyukim87.github.io/lec-cpp-programming2026/`이며, 실제 주소는 Actions의 `github-pages` 배포 환경과 Settings → Pages에 표시됩니다.

빌드나 필수 공개 파일 검사가 실패하면 브랜치 갱신·사이트 배포 단계로 진행하지 않습니다. `gh-pages` 갱신 이후 Pages 배포만 실패한 경우에는 Actions 오류와 최초 Pages 설정을 확인한 뒤 다시 실행합니다.

## 4. 콘텐츠와 로컬 미리보기

기존 C++ 수업의 교재·실습 방식·32회차 일정과 **27 / 27 / 14 / 16 / 16점** 평가를 유지했습니다. Lab·HW 루브릭, 홀수 회차 Quiz, Quiz08·15의 시험 전 마감, Lab16·Quiz16의 평가 포함 조건도 같습니다. Week16 공개일과 마감일은 별도 공지입니다.

`assets/docs`의 PDF 두 개는 원본 보관본이며 수정하지 않았습니다. 이전 배점과 “개정 제안본” 표기가 원본에 남아 있으므로 웹페이지는 사용자가 선택한 개정 v2 배점을 적용합니다. 페이지에 PDF 다운로드 링크는 추가하지 않았습니다.

Ruby와 Bundler가 준비된 환경에서:

```bash
bundle install
bundle exec jekyll serve
```

기본 미리보기 주소는 `http://127.0.0.1:4000/lec-cpp-programming2026/`입니다. 루트 주소용 배포는 `_config.yml`의 `baseurl: ""`을 사용합니다. 과거 페이지 생성·ref2 적용 스크립트는 현재 원본에 다시 실행하지 않습니다.

## 참고

- [GitHub Pages 공식 배포 워크플로](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [Jekyll 빌드 Action](https://github.com/actions/jekyll-build-pages)
- [gh-pages 브랜치 생성·갱신 Action](https://github.com/peaceiris/actions-gh-pages)
