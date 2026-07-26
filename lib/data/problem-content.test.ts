import assert from "node:assert/strict"

import { withExtractedEmbeddedSolution } from "./problem-content"
import type { Problem } from "./types"

const baseProblem: Problem = {
  id: "prob-imported",
  topicId: "topic-imported",
  title: "导入题目",
  content: "求证结论。",
  difficulty: "hard",
  tags: [],
  solutions: [{
    id: "sol-1",
    title: "解答",
    method: "standard",
    steps: [],
    explanation: "评注：方法简洁。",
  }],
}

assert.equal(withExtractedEmbeddedSolution(baseProblem), baseProblem)

for (const marker of ["解析 (1) 第一步。", "证明 (1) 第一步。", "(1) 证法一 第一步。"]) {
  const normalized = withExtractedEmbeddedSolution({
    ...baseProblem,
    content: `求证结论。\n${marker}`,
  })

  assert.equal(normalized.content, "求证结论。")
  assert.equal(normalized.solutions[0].explanation, `${marker}\n\n评注：方法简洁。`)
}

const proofRequest = withExtractedEmbeddedSolution({
  ...baseProblem,
  content: "已知条件。\n(1) 证明结论；\n(2) 求最值。",
})

assert.equal(proofRequest.content, "已知条件。\n(1) 证明结论；\n(2) 求最值。")
