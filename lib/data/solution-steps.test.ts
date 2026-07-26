import assert from "node:assert/strict"

import { deriveSolutionSteps, withDerivedSolutionSteps } from "./solution-steps"
import type { Solution } from "./types"

assert.deepEqual(deriveSolutionSteps(""), [])

assert.deepEqual(
  deriveSolutionSteps("设 $t=x+y$。\n\n由条件得到 $t^2=4$。\n\n所以 $t=2$。"),
  [
    { step: 1, content: "设 $t=x+y$。" },
    { step: 2, content: "由条件得到 $t^2=4$。\n\n所以 $t=2$。" },
  ],
)

assert.deepEqual(
  deriveSolutionSteps("代入整理得：\n\n$$\nx^2+2x+1=0\n$$\n\n故 $x=-1$。"),
  [
    {
      step: 1,
      content: "代入整理得：\n\n$$\nx^2+2x+1=0\n$$\n\n故 $x=-1$。",
    },
  ],
)

const explicitSolution: Solution = {
  id: "sol-explicit",
  title: "显式步骤",
  method: "standard",
  steps: [{ step: 1, content: "保留原步骤" }],
  explanation: "不应覆盖",
}

assert.equal(withDerivedSolutionSteps(explicitSolution), explicitSolution)

const derivedSolution = withDerivedSolutionSteps({
  ...explicitSolution,
  id: "sol-derived",
  steps: [],
  explanation: "第一段。\n\n第二段。",
})

assert.deepEqual(derivedSolution.steps, [
  { step: 1, content: "第一段。" },
  { step: 2, content: "第二段。" },
])
