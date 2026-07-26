import { splitContentBlocks, type ContentBlock } from "./content-format"
import type { Solution, SolutionStep } from "./types"

const continuationPattern = /^(所以|故|因此|于是|从而|即|可得|解得|综上|同理|以下同|评注)/
const displayMathPattern = /^(?:\$\$[\s\S]*\$\$|\\\[[\s\S]*\\\])$/

function formatContentBlock(block: ContentBlock): string {
  if (block.type === "paragraph") return block.content

  const options = block.options.map((option) => `${option.label}. ${option.content}`)
  return [block.lead, ...options].filter(Boolean).join("\n")
}

function shouldJoinPrevious(content: string, previous: string): boolean {
  return (
    (content.length < 18 && !/[。！？.!?]$/.test(content)) ||
    continuationPattern.test(content) ||
    displayMathPattern.test(content) ||
    /[：:]$/.test(previous)
  )
}

/**
 * 将历史整段解析整理为可逐步展开的阅读单元。
 * 公式块、结论短句与引导句会并入相邻步骤，避免把数学推导切成碎片。
 */
export function deriveSolutionSteps(explanation: string): SolutionStep[] {
  const paragraphs = splitContentBlocks(explanation)
    .map(formatContentBlock)
    .map((content) => content.trim())
    .filter(Boolean)

  const grouped: string[] = []

  for (const paragraph of paragraphs) {
    const previous = grouped.at(-1)

    if (previous && shouldJoinPrevious(paragraph, previous)) {
      grouped[grouped.length - 1] = `${previous}\n\n${paragraph}`
    } else {
      grouped.push(paragraph)
    }
  }

  return grouped.map((content, index) => ({ step: index + 1, content }))
}

export function withDerivedSolutionSteps(solution: Solution): Solution {
  if (solution.steps.length > 0) return solution

  return {
    ...solution,
    steps: deriveSolutionSteps(solution.explanation),
  }
}
