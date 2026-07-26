import assert from "node:assert/strict"

import { visualizationByProblemId, withProblemVisualization } from "./problem-visualizations"
import { problems } from "./problems"
import { inequalityVisualizationPresets, visualizationTypes, type Problem } from "./types"

const mappedEntries = Object.entries(visualizationByProblemId)
const visualizedProblems = problems.filter((problem) => problem.visualization)

assert.equal(mappedEntries.length, 6, "应保留六个经过内容核对的可视化映射")
assert.equal(visualizedProblems.length, mappedEntries.length, "每个映射都应进入最终题目数据")

for (const [problemId, visualization] of mappedEntries) {
  const problem = problems.find((item) => item.id === problemId)
  assert.ok(problem, `映射引用了不存在的题目：${problemId}`)
  assert.deepEqual(problem.visualization, visualization, `题目未挂载预期可视化：${problemId}`)
}

const reachablePresets = new Set(
  visualizedProblems
    .map((problem) => problem.visualization)
    .filter((visualization) => visualization?.type === "inequality")
    .map((visualization) => visualization.preset),
)

const reachableVisualizationTypes = new Set(
  visualizedProblems
    .map((problem) => problem.visualization)
    .filter((visualization): visualization is NonNullable<typeof visualization> => Boolean(visualization))
    .map((visualization) => visualization.type),
)

assert.deepEqual(
  [...reachableVisualizationTypes].sort(),
  [...visualizationTypes].sort(),
  "每种顶层可视化类型都应由至少一道真实题目触达",
)

assert.deepEqual(
  [...reachablePresets].sort(),
  [...inequalityVisualizationPresets].sort(),
  "每种不等式预设都应由至少一道真实题目触达",
)

const baseProblem: Problem = {
  id: "prob-unmapped",
  topicId: "topic-test",
  title: "未映射题目",
  content: "测试题干",
  difficulty: "easy",
  solutions: [],
  tags: [],
}

assert.equal(withProblemVisualization(baseProblem), baseProblem, "无映射题目不应产生无意义复制")

const sourceConfiguredProblem: Problem = {
  ...baseProblem,
  id: "prob-sec-3-3-2",
  visualization: {
    type: "function",
    initialState: { functionKey: "quadratic" },
  },
}

assert.equal(
  withProblemVisualization(sourceConfiguredProblem),
  sourceConfiguredProblem,
  "源题目已有配置时不应被集中映射覆盖",
)

console.log("题目可视化映射测试通过")
