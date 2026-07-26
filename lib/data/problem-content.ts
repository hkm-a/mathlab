import type { Problem } from "./types"

const embeddedSolutionPatterns = [
  /\n(?=解析\s+\(1\))/,
  /\n(?=证明\s+\(1\))/,
  /\n(?=\(1\)\s*证法[一二三四五六七八九十])/,
]

function findEmbeddedSolutionStart(content: string): number {
  const indexes = embeddedSolutionPatterns
    .map((pattern) => content.search(pattern))
    .filter((index) => index >= 0)

  return indexes.length > 0 ? Math.min(...indexes) : -1
}

/**
 * 修正历史导入时混入题干的完整解析。
 * 仅处理带明确解答标题的边界，避免把“证明”类题目要求误判为答案。
 */
export function withExtractedEmbeddedSolution(problem: Problem): Problem {
  const solutionStart = findEmbeddedSolutionStart(problem.content)
  const firstSolution = problem.solutions[0]

  if (solutionStart < 0 || !firstSolution) return problem

  const embeddedSolution = problem.content.slice(solutionStart).trim()
  const explanation = [embeddedSolution, firstSolution.explanation.trim()].filter(Boolean).join("\n\n")

  return {
    ...problem,
    content: problem.content.slice(0, solutionStart).trim(),
    solutions: [
      { ...firstSolution, explanation },
      ...problem.solutions.slice(1),
    ],
  }
}
