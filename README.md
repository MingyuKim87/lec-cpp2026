# C++ Programming · Fall 2026

An English Jekyll syllabus for Kookmin University, course `0192808-01`. The page follows the five-section structure in `7_Webpage/ref4`, with C++ textbooks, objectives, class format, schedule, and assessment.

Upload **the contents of this folder, including `.github`**, to the root of your GitHub repository on `main`.

1. Push to `main`: the workflow builds and checks the site, then creates or updates `gh-pages` automatically.
2. Once per repository, select **Settings → Pages → Source → GitHub Actions**. Rerun the workflow if the first deployment started before this setting was enabled.
3. The workflow publishes the same built site through the official Pages deployment action. Future pushes to `main` update both the generated branch and the live site.

No personal access token or custom secret is required. Edit `main`; `gh-pages` contains generated HTML, assets, and `.nojekyll`.

- `index.md`: Textbook, Course Overview, Course Format, Class Schedule & Activities, and Assessment.
- `_layouts/course.html`, `assets/css/course.css`, `assets/js/course.js`: Layout, responsive tables/cards, sticky navigation, and week links.
- `.github/workflows/deploy.yml`: Build, validate, update `gh-pages`, and deploy to GitHub Pages.
- `assets/docs`: Unmodified original syllabus and revised v2 PDF copies.

The schedule keeps 32 sessions and separate, unlinked HW, Lab, and Quiz columns. Unassigned cells remain empty, and quizzes appear only in odd-numbered sessions. Assessment remains **27 / 27 / 14 / 16 / 16 points**, including Lab16 and Quiz16.

See [UPLOAD_GUIDE.md](UPLOAD_GUIDE.md) for setup and update instructions. The configured repository, `mgyukim87/lec-cpp-programming2026`, is a deployment example; no GitHub repository has been created or published by this local preparation.
