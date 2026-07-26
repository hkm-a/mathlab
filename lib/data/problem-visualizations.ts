import type { Problem, VisualizationConfig } from "./types"

export const visualizationByProblemId: Readonly<Record<string, VisualizationConfig>> = {
  "prob-sec-1-4-12": {
    type: "function",
    initialState: {
      functionKey: "quadratic",
      range: { xMin: -3, xMax: 3, yMin: -2, yMax: 10 },
    },
  },
  "prob-sec-2-5-6-13": {
    type: "inequality",
    preset: "jensen",
  },
  "prob-sec-3-3-2": {
    type: "inequality",
    preset: "amgm-2",
    initialState: { a: 1, b: 3 },
  },
  "prob-sec-3-3-2-9": {
    type: "geometry",
    initialState: {
      points: [{ x: 0, y: 0 }, { x: 3, y: 3 }, { x: 0.586, y: 3.414 }],
      circles: [{ center: { x: 3, y: 3 }, radius: 2.449 }],
      lines: [{ p1: { x: 0, y: 0 }, p2: { x: 0.586, y: 3.414 } }],
    },
  },
  "prob-sec-3-3-3": {
    type: "inequality",
    preset: "amgm-3",
  },
  "prob-sec-3-3-3-10": {
    type: "inequality",
    preset: "cauchy",
  },
}

/**
 * 为历史导入题库附加人工校验过的可视化配置。
 * 源题目若已声明配置则保持原样，避免集中映射覆盖更精确的题目数据。
 */
export function withProblemVisualization(problem: Problem): Problem {
  if (problem.visualization) return problem

  const visualization = visualizationByProblemId[problem.id]
  return visualization ? { ...problem, visualization } : problem
}
