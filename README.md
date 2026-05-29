# MathLab

中文 | [English](#english)

MathLab 是一个面向中文高中数学竞赛学习的交互式学习平台，覆盖奥数风格专题、题目训练、KaTeX 数学公式渲染、分步解析和动态可视化。项目同时提供 Web 版本和基于 Tauri 的 Windows 桌面便携版。

仓库地址：<https://github.com/hkm-a/mathlab>

## 项目亮点

- 中文数学竞赛学习体验：内容、专题、题目、解析默认使用中文。
- 专题化题库：按代数、几何、函数、不等式、数列等专题组织学习内容。
- KaTeX 公式渲染：支持题干、选项、解析步骤中的 LaTeX 数学表达。
- 分步解析：每道题支持一个或多个解法，并以清晰步骤呈现。
- 动态可视化：包含函数图像、几何图形、不等式与专题可视化组件。
- 题目页右侧栏：加入“数学旁白 / 虚拟学伴”提示和一分钟小挑战，让页面不再空白。
- 内容格式修复：自动处理填空线、选项拆分、预览文本和导入内容里的常见格式问题。
- 桌面版支持：通过 Tauri 生成 Windows 便携版，无需安装即可运行。

## 截图

> 截图待补充。建议放置以下图片到 `public/screenshots/` 后更新链接。

| 页面 | 说明 |
|------|------|
| 首页 | 学习入口、专题概览和平台介绍 |
| 专题页 | 题目列表、搜索和筛选 |
| 题目页 | 题干、可视化、分步解析、右侧数学旁白 |
| 桌面版 | Tauri Windows 窗口运行效果 |

## 在线与桌面版

### Web 本地运行

```bash
npm install
npm run dev
```

默认开发地址：`http://localhost:3000`

### Windows 桌面便携版

已发布的桌面版可以直接下载：

- Release：<https://github.com/hkm-a/mathlab/releases/tag/v1.1.0-desktop>
- Windows portable ZIP：<https://github.com/hkm-a/mathlab/releases/download/v1.1.0-desktop/MathLab_1.1.0_x64_portable.zip>

使用方式：下载 ZIP，解压后双击 `MathLab.exe`。

## 技术栈

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- KaTeX
- Zustand
- HTML5 Canvas
- Tauri 2
- Rust

## 命令参考

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动 Next.js 开发服务器 |
| `npm test` | 运行内容格式和数据校验回归测试 |
| `npm run lint` | 运行 Next.js ESLint |
| `npm run build` | 运行测试、数据校验、UI 契约校验、静态导出校验、发布校验，并生成生产构建 |
| `npm run start` | 启动生产构建服务 |
| `npm run validate:data` | 校验专题、题目、解法和数据关系 |
| `npm run validate:ui` | 校验 UI 文案/展示契约，避免暴露导入噪声 |
| `npm run validate:static-export` | 校验静态导出配置 |
| `npm run validate:release` | 校验桌面发布版本与 workflow 配置 |
| `npm run audit:content` | 审计题库内容结构、重复内容和可疑格式 |
| `npm run desktop:dev` | 启动 Tauri 桌面开发模式 |
| `npm run desktop:build` | 生成 Tauri 桌面版可执行文件 |

## 本地开发

### 前置要求

- Node.js 20 或更高版本
- npm
- Rust stable toolchain（仅桌面版构建需要）
- Windows WebView2 Runtime（Windows 桌面版运行需要，现代 Windows 通常已内置）

### 安装依赖

```bash
npm install
```

### 启动 Web 开发服务

```bash
npm run dev
```

### 生产构建

```bash
npm run build
```

### 构建桌面版

```bash
npm run desktop:build
```

构建成功后，可执行文件位于：

```text
src-tauri/target/release/mathlab.exe
```

如需生成便携 ZIP，可参考 `.github/workflows/desktop-release.yml` 中的打包步骤。

## 项目结构

```text
app/                         Next.js App Router 页面
components/problems/          题目卡片、题目阅读器、解析阅读器
components/topics/            专题搜索和筛选组件
components/ui/                通用 UI 组件和页面布局
components/visualizers/       Canvas / 可视化组件
hooks/                        共享 React hooks
lib/data/                     静态专题、题目、解法和内容格式化逻辑
lib/math/                     数学类型、绘图和函数计算工具
scripts/                      数据、UI、发布和内容审计脚本
src-tauri/                    Tauri 桌面应用配置与 Rust 入口
.github/workflows/            GitHub Actions 桌面发布 workflow
```

## 内容与数据约定

静态学习内容主要由以下文件驱动：

- `lib/data/topics.ts`
- `lib/data/problems.ts`
- `lib/data/problems-ch-*.ts`

添加题目时需要注意：

- `Topic.problems[]` 与 `Problem.topicId` 保持一致。
- 用户可见内容保持中文，除非明确需要英文。
- 公式使用 LaTeX / KaTeX 支持的语法。
- 新增题目后运行 `npm run validate:data` 和 `npm run build`。

## KaTeX 警告说明

当前题库中有部分历史导入内容会在构建时触发 KaTeX warning，例如中文字符出现在 math mode 或圈号字符缺少字体指标。这些 warning 来自静态题目内容格式，不是 TypeScript 或构建失败。

当前基线：`npm run build` 可以成功完成。

## 发布流程

### Web 构建

```bash
npm run build
```

### 桌面版发布

本仓库包含 GitHub Actions workflow：

```text
.github/workflows/desktop-release.yml
```

手动触发 `Desktop Release` workflow 时，会：

1. 安装 Node 和 Rust。
2. 运行 `npm ci`。
3. 运行 `npm run build`。
4. 运行 `npm run desktop:build`。
5. 打包 `MathLab.exe` 为 portable ZIP。
6. 创建 GitHub Release 并上传 ZIP。

## English

[中文](#mathlab) | English

MathLab is an interactive Chinese-language learning platform for high-school math competition practice. It combines topic-based problem sets, KaTeX-rendered mathematics, step-by-step solutions, and dynamic visualizations. The project supports both a Web app and a portable Windows desktop app powered by Tauri.

Repository: <https://github.com/hkm-a/mathlab>

## Highlights

- Chinese-first learning experience: topics, problems, and solutions are written for `zh-CN` learners.
- Topic-based practice: algebra, geometry, functions, inequalities, sequences, and more.
- KaTeX rendering: LaTeX math in problem statements, options, and solution steps.
- Step-by-step solutions: multiple solution paths can be presented cleanly.
- Dynamic visualizations: canvas-based function, geometry, and inequality visualizers.
- Problem-page companion sidebar: a lightweight “数学旁白 / virtual study companion” panel with hints and mini challenges.
- Content formatting hardening: imported blanks, options, previews, and math delimiters are normalized safely.
- Desktop support: a portable Windows build is available through Tauri.

## Screenshots

> Screenshots are not included yet. Recommended future paths: `public/screenshots/`.

| Surface | Description |
|---------|-------------|
| Home | Learning entry, topic overview, and product intro |
| Topics | Searchable and filterable topic/problem lists |
| Problem | Statement, visualization, solution steps, and companion sidebar |
| Desktop | Tauri Windows app window |

## Web and Desktop

### Run the Web App Locally

```bash
npm install
npm run dev
```

Default development URL: `http://localhost:3000`

### Windows Portable Desktop Build

Download the released desktop build:

- Release: <https://github.com/hkm-a/mathlab/releases/tag/v1.1.0-desktop>
- Windows portable ZIP: <https://github.com/hkm-a/mathlab/releases/download/v1.1.0-desktop/MathLab_1.1.0_x64_portable.zip>

Usage: download the ZIP, unzip it, then double-click `MathLab.exe`.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- KaTeX
- Zustand
- HTML5 Canvas
- Tauri 2
- Rust

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Next.js development server |
| `npm test` | Run content-format and data-validation regression tests |
| `npm run lint` | Run Next.js ESLint |
| `npm run build` | Run tests, data validation, UI contract validation, static export validation, release validation, and production build |
| `npm run start` | Serve the production build |
| `npm run validate:data` | Validate topic, problem, solution, and data relationships |
| `npm run validate:ui` | Validate UI display contracts and prevent noisy imported labels from leaking |
| `npm run validate:static-export` | Validate static export configuration |
| `npm run validate:release` | Validate desktop release version and workflow configuration |
| `npm run audit:content` | Audit content structure, duplicates, and suspicious formatting |
| `npm run desktop:dev` | Start Tauri desktop development mode |
| `npm run desktop:build` | Build the Tauri desktop executable |

## Local Development

### Requirements

- Node.js 20 or newer
- npm
- Rust stable toolchain, required for desktop builds
- Windows WebView2 Runtime, required for the Windows desktop app and usually preinstalled on modern Windows systems

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Build Desktop App

```bash
npm run desktop:build
```

The generated executable is located at:

```text
src-tauri/target/release/mathlab.exe
```

For portable ZIP packaging, see `.github/workflows/desktop-release.yml`.

## Project Structure

```text
app/                         Next.js App Router pages
components/problems/          Problem cards, problem viewer, solution viewer
components/topics/            Topic search and filtering
components/ui/                Shared UI components and layout
components/visualizers/       Canvas and visualization components
hooks/                        Shared React hooks
lib/data/                     Static topics, problems, solutions, and content formatting
lib/math/                     Math types, plotting, and geometry helpers
scripts/                      Data, UI, release, and content audit scripts
src-tauri/                    Tauri desktop app configuration and Rust entry points
.github/workflows/            GitHub Actions desktop release workflow
```

## Content and Data Notes

Static learning content is primarily driven by:

- `lib/data/topics.ts`
- `lib/data/problems.ts`
- `lib/data/problems-ch-*.ts`

When adding content:

- Keep `Topic.problems[]` and `Problem.topicId` in sync.
- Keep user-facing learning content in Chinese unless a specific English version is required.
- Use LaTeX syntax supported by KaTeX.
- Run `npm run validate:data` and `npm run build` after editing content.

## KaTeX Warning Notes

Some historical imported problem statements currently produce KaTeX warnings during build, such as Chinese characters appearing in math mode or circled number glyphs missing metrics. These warnings come from static content formatting and are not TypeScript or build failures.

Current baseline: `npm run build` completes successfully.

## Release Flow

### Web Build

```bash
npm run build
```

### Desktop Release

The repository includes a GitHub Actions workflow:

```text
.github/workflows/desktop-release.yml
```

When manually triggered, the `Desktop Release` workflow:

1. Installs Node and Rust.
2. Runs `npm ci`.
3. Runs `npm run build`.
4. Runs `npm run desktop:build`.
5. Packages `MathLab.exe` as a portable ZIP.
6. Creates a GitHub Release and uploads the ZIP.
