import assert from "node:assert/strict"

import type { Problem } from "../lib/data/types"
import { validateProblemContent } from "./validate-data"

const baseProblem: Problem = {
  id: "prob-test",
  topicId: "topic-test",
  title: "测试题",
  content: "求 $x$ 的值。",
  difficulty: "medium",
  tags: ["代数"],
  solutions: [
    {
      id: "sol-1",
      title: "解法一",
      method: "standard",
      steps: [],
      explanation: "由题意可得结论。",
    },
  ],
}

assert.deepEqual(validateProblemContent(baseProblem), [])
assert.deepEqual(validateProblemContent({ ...baseProblem, title: "" }), ["Problem prob-test has empty title"])
assert.deepEqual(validateProblemContent({ ...baseProblem, content: "" }), ["Problem prob-test has empty content"])
assert.deepEqual(
  validateProblemContent({ ...baseProblem, tags: ["代数", "代数"] }),
  ["Problem prob-test has duplicate tags: 代数"],
)
assert.deepEqual(
  validateProblemContent({ ...baseProblem, solutions: [{ ...baseProblem.solutions[0], explanation: "" }] }),
  ["Problem prob-test solution sol-1 has neither steps nor explanation"],
)
assert.deepEqual(
  validateProblemContent({
    ...baseProblem,
    solutions: [
      {
        ...baseProblem.solutions[0],
        steps: [
          { step: 1, content: "第一步" },
          { step: 3, content: "第三步" },
        ],
        explanation: "",
      },
    ],
  }),
  ["Problem prob-test solution sol-1 step numbers should be 1, 2, got 1, 3"],
)
