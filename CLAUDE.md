# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MathLab is a Chinese-language high-school math competition learning platform. It uses dynamic visualization, KaTeX-rendered math, and step-by-step solution views to teach olympiad-style topics.

The product language is Chinese (`zh-CN`). User-facing content, topic titles, problem statements, and solution text should stay in Chinese unless explicitly requested otherwise.

## Commands

- `npm run dev` — start the Next.js development server
- `npm run build` — production build plus type/lint validation
- `npm run start` — serve a production build
- `npm run lint` — run Next.js ESLint

There is currently no dedicated test runner configured. Use `npm run build` as the primary validation command until tests are added.

## Architecture

This is a Next.js 14 App Router project using TypeScript, Tailwind CSS, KaTeX, Zustand, and HTML5 Canvas.

- `app/` contains route-level pages. Pages are server components by default and import client components for interactive UI.
- `components/ui/` contains reusable shell and presentational UI.
- `components/problems/` renders problem cards, problem statements, and step-by-step solutions.
- `components/visualizers/` contains canvas-based visualizers.
- `lib/data/` is the static content/data layer for topics, problems, solutions, and visualization config.
- `lib/math/` contains reusable math and canvas drawing helpers.
- `hooks/` contains shared React hooks, including canvas sizing utilities.

## Data Model

Static learning content is driven by `lib/data/topics.ts` and `lib/data/problems.ts`.

- A `Topic` has an `id`, Chinese metadata, category, difficulty, and a list of problem IDs.
- A `Problem` belongs to a topic via `topicId`, has Chinese/LaTeX content, tags, optional visualization config, and one or more solutions.
- A `Solution` contains ordered `SolutionStep` entries plus an explanation.
- Visualization configs are typed by `type`: `inequality`, `geometry`, or `function`.

Keep topic `problems[]` and problem `topicId` values in sync when adding content.

## Visualization Conventions

Canvas visualizers should use responsive sizing rather than fixed canvas dimensions. Reuse `useCanvasSize` from `hooks/useCanvasSize.ts` and scale the drawing context for `devicePixelRatio`.

Use shared math types from `lib/math/types.ts` (`Point`, `Line`, `Circle`, `PlotRange`) instead of redefining them locally.

Function plotting should go through `lib/math/plotting.ts` helpers such as `drawGrid`, `evaluateFunction`, `toCanvasCoords`, and `drawFunction`.

## Current Takeover Notes

The repository history previously contained an unrelated Pixel Game Arcade project. The current working tree is MathLab and should be treated as the source of truth.

Current validated baseline: `npm run build` succeeds. Existing KaTeX warnings are content-format warnings from current problem statements, not TypeScript/build failures.
