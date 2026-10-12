# Recursia · Learning to Compose

Public research project page for **Recursive Self-Improvement of Shared Executable Stacks for Zero-Shot Long-Horizon Robot Manipulation**.

Website: https://phosphene7.github.io/Recursia-Page/

This public repository contains the project website, illustrations, and the downloadable paper. The original `phosphene7/Recursia` repository is public and keeps the earlier website draft as a backup. It contains no robot or experiment implementation. Maintain the live website using this `Recursia-Page` repository. Authors are intentionally left blank; no arXiv link is included.

## Updating videos

Upload `task-1.mp4`, `task-2.mp4`, and `task-3.mp4` to the repository root, then set the matching `src` values in `site-config.js`. HTTPS video URLs also work. Empty sources keep the illustrated placeholders. Optional WebVTT captions can be supplied with `captions`.

## Updating the paper

Replace `Recursia.pdf`. The Paper PDF button opens it; Download PDF saves it.

## Deployment

GitHub Pages is configured to deploy from `main` / `(root)`. Commits to main update the website automatically. No build tools are needed. All asset paths are relative so the website works under a GitHub Pages project path.

## Content

Method figure and task descriptions are based on the supplied manuscript. Three task cover illustrations are schematic. Physical results are preliminary, with three trials per target task and method. Google Fonts have system font fallbacks.

Page structure was inspired by https://ganlin-yang.github.io/EventVLA.github.io/ . Laboratory link: https://github.com/cocacola-lab .

## 交给其他人维护

这个仓库是在线网站的主要源码仓库。授权编辑：Settings → Collaborators → Add people，邀请对方的 GitHub 账号；对方接受后即可提交修改。也可以让对方 Fork 后提交 Pull Request，由你审核合并。

- `index.html`：页面文字、任务名称、摘要和结果。
- `styles.css`：颜色、字体、间距和手机布局。
- `site-config.js`：作者、论文代码仓库链接、三个任务视频的地址及封面。
- `Recursia.pdf`：可查看和下载的论文；更新时用同名文件替换。
- `task-1.svg`、`task-2.svg`、`task-3.svg`：当前的演示封面。

GitHub Pages 网站随 main 分支提交自动更新。

官方协作者说明：https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/inviting-collaborators-to-a-personal-repository
