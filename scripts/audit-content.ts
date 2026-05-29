import type { Problem, Solution } from "../lib/data/types"

import { normalizeContentSignature } from "../lib/data/content-format"
import { problems } from "../lib/data/problems"
import { topics } from "../lib/data/topics"

type Severity = "error" | "warning"

interface Finding {
  severity: Severity
  code: string
  location: string
  message: string
}

interface AuditSummary {
  topics: number
  problems: number
  solutions: number
  explanationOnlySolutions: number
  steps: number
}

const findings: Finding[] = []

const choiceLinePattern = /(?:^|\s)(?:[（(]?[A-DＡ-Ｄ][)）.．]|[①-④])\s*.+\s+(?:[（(]?[A-DＡ-Ｄ][)）.．]|[①-④])\s*/
const subQuestionLinePattern = /(?:^|\s)\([1-9]\)\s*.+\s+\([1-9]\)\s*/
const keywordStopWords = new Set([
  "求", "证", "已知", "若", "则", "且", "或", "的", "和", "与", "为", "是", "在", "中", "有", "使", "其中", "关于", "一个", "满足",
])

function addFinding(severity: Severity, code: string, location: string, message: string): void {
  findings.push({ severity, code, location, message })
}

function countAllSteps(problem: Problem): number {
  return problem.solutions.reduce((total, solution) => total + solution.steps.length, 0)
}

function compactPreview(value: string, maxLength = 80): string {
  const compact = value.replace(/\s+/g, " ").trim()
  if (compact.length <= maxLength) return compact

  return `${compact.slice(0, maxLength - 1)}…`
}

function collectBySignature<T>(items: T[], getSignature: (item: T) => string): Map<string, T[]> {
  const grouped = new Map<string, T[]>()

  for (const item of items) {
    const signature = getSignature(item)
    if (signature.length < 12) continue

    grouped.set(signature, [...(grouped.get(signature) ?? []), item])
  }

  return grouped
}

function countToken(content: string, token: string): number {
  return content.split(token).length - 1
}

function hasUnbalancedLatex(content: string): boolean {
  const displayMath = countToken(content, "$$")
  const contentWithoutDisplayMath = content.replace(/\$\$[\s\S]*?\$\$/g, "")
  const inlineMath = countToken(contentWithoutDisplayMath, "$")

  return displayMath % 2 !== 0 ||
    inlineMath % 2 !== 0 ||
    countToken(content, "\\(") !== countToken(content, "\\)") ||
    countToken(content, "\\[") !== countToken(content, "\\]")
}

function extractKeywords(content: string): Set<string> {
  const normalized = content
    .replace(/!\[[^\]]*\]\([^)]+\)/g, " ")
    .replace(/[\\{}_$^=+\-*/<>≤≥，。；：、（）()[\]{}.,;:!?！？]/g, " ")

  const tokens = normalized.match(/[一-龥]{2,}|[A-Za-z][A-Za-z0-9]*|\d+/g) ?? []
  return new Set(tokens.filter((token) => !keywordStopWords.has(token)))
}

function keywordOverlapRatio(problem: Problem, solution: Solution): number {
  const problemKeywords = extractKeywords(`${problem.title} ${problem.content} ${problem.tags.join(" ")}`)
  if (problemKeywords.size === 0) return 1

  const solutionKeywords = extractKeywords(`${solution.title} ${solution.explanation} ${solution.steps.map((step) => step.content).join(" ")}`)
  let overlap = 0

  for (const keyword of problemKeywords) {
    if (solutionKeywords.has(keyword)) overlap += 1
  }

  return overlap / problemKeywords.size
}

function auditProblemStructure(problem: Problem): void {
  if (!problem.title.trim()) {
    addFinding("error", "empty-problem-title", problem.id, "Problem title is empty")
  }

  if (!problem.content.trim()) {
    addFinding("error", "empty-problem-content", problem.id, "Problem content is empty")
  }

  const tagSet = new Set(problem.tags)
  if (tagSet.size !== problem.tags.length) {
    addFinding("warning", "duplicate-tags", problem.id, `Problem has duplicate tags: ${problem.tags.join(", ")}`)
  }

  if (choiceLinePattern.test(problem.content) && !subQuestionLinePattern.test(problem.content) && !/\n\s*(?:[（(]?[A-DＡ-Ｄ][)）.．]|[①-④])/.test(problem.content)) {
    addFinding("warning", "inline-choice-options", problem.id, "Choice options appear to be crowded on one line")
  }

  if (hasUnbalancedLatex(problem.content)) {
    addFinding("warning", "latex-delimiter", problem.id, "Problem content has suspicious unbalanced LaTeX delimiters")
  }
}

function auditSolutionStructure(problem: Problem): void {
  const solutionIds = new Set<string>()
  const solutionTexts = collectBySignature(problem.solutions, (solution) => normalizeContentSignature(
    `${solution.title} ${solution.explanation} ${solution.steps.map((step) => step.content).join(" ")}`,
  ))

  for (const solution of problem.solutions) {
    const location = `${problem.id}/${solution.id}`

    if (solutionIds.has(solution.id)) {
      addFinding("error", "duplicate-solution-id", location, `Solution id ${solution.id} is duplicated within the same problem`)
    }
    solutionIds.add(solution.id)

    if (!solution.title.trim()) {
      addFinding("error", "empty-solution-title", location, "Solution title is empty")
    }

    if (solution.steps.length === 0 && !solution.explanation.trim()) {
      addFinding("error", "empty-solution-text", location, "Solution has neither steps nor explanation")
    }

    auditSteps(problem, solution)

    if (hasUnbalancedLatex(`${solution.explanation} ${solution.steps.map((step) => step.content).join(" ")}`)) {
      addFinding("warning", "latex-delimiter", location, "Solution text has suspicious unbalanced LaTeX delimiters")
    }

    const overlap = keywordOverlapRatio(problem, solution)
    if (overlap < 0.08) {
      addFinding("warning", "low-keyword-overlap", location, `Solution shares few keywords with the problem (${Math.round(overlap * 100)}%)`)
    }
  }

  for (const [signature, duplicatedSolutions] of solutionTexts) {
    if (duplicatedSolutions.length > 1) {
      addFinding(
        "warning",
        "duplicate-solution-text",
        problem.id,
        `Solutions appear duplicated: ${duplicatedSolutions.map((solution) => solution.id).join(", ")} (${compactPreview(signature)})`,
      )
    }
  }
}

function auditSteps(problem: Problem, solution: Solution): void {
  const stepNumbers = solution.steps.map((step) => step.step)
  const duplicateStepNumbers = stepNumbers.filter((step, index) => stepNumbers.indexOf(step) !== index)
  const expectedNumbers = Array.from({ length: solution.steps.length }, (_, index) => index + 1)
  const location = `${problem.id}/${solution.id}`

  if (duplicateStepNumbers.length > 0) {
    addFinding("error", "duplicate-step-number", location, `Duplicate step numbers: ${duplicateStepNumbers.join(", ")}`)
  }

  if (stepNumbers.some((step, index) => step !== expectedNumbers[index])) {
    addFinding("error", "non-contiguous-step-numbers", location, `Step numbers should be ${expectedNumbers.join(", ")}, got ${stepNumbers.join(", ")}`)
  }

  const duplicatedStepText = collectBySignature(solution.steps, (step) => normalizeContentSignature(step.content))
  for (const [signature, duplicatedSteps] of duplicatedStepText) {
    if (duplicatedSteps.length > 1) {
      addFinding(
        "warning",
        "duplicate-step-text",
        location,
        `Steps appear duplicated: ${duplicatedSteps.map((step) => step.step).join(", ")} (${compactPreview(signature)})`,
      )
    }
  }

  for (const step of solution.steps) {
    if (!step.content.trim()) {
      addFinding("error", "empty-step-content", `${location}/step-${step.step}`, "Step content is empty")
    }
  }
}

function auditDuplicatesAcrossProblems(): void {
  const duplicatedProblems = collectBySignature(problems, (problem) => normalizeContentSignature(`${problem.title} ${problem.content}`))

  for (const [signature, duplicated] of duplicatedProblems) {
    if (duplicated.length > 1) {
      addFinding(
        "warning",
        "duplicate-problem-text",
        duplicated.map((problem) => problem.id).join(", "),
        `Problems appear duplicated (${compactPreview(signature)})`,
      )
    }
  }

  const allSolutions = problems.flatMap((problem) => problem.solutions.map((solution) => ({ problem, solution })))
  const duplicatedSolutions = collectBySignature(allSolutions, ({ solution }) => normalizeContentSignature(
    `${solution.title} ${solution.explanation} ${solution.steps.map((step) => step.content).join(" ")}`,
  ))

  for (const [signature, duplicated] of duplicatedSolutions) {
    const uniqueProblems = new Set(duplicated.map(({ problem }) => problem.id))
    if (uniqueProblems.size > 1) {
      addFinding(
        "warning",
        "cross-problem-duplicate-solution",
        duplicated.map(({ problem, solution }) => `${problem.id}/${solution.id}`).join(", "),
        `Solution text appears in multiple problems (${compactPreview(signature)})`,
      )
    }
  }
}

function summarize(): AuditSummary {
  const solutionCount = problems.reduce((total, problem) => total + problem.solutions.length, 0)
  const explanationOnlySolutions = problems.reduce(
    (total, problem) => total + problem.solutions.filter((solution) => solution.steps.length === 0 && solution.explanation.trim()).length,
    0,
  )

  return {
    topics: topics.length,
    problems: problems.length,
    solutions: solutionCount,
    explanationOnlySolutions,
    steps: problems.reduce((total, problem) => total + countAllSteps(problem), 0),
  }
}

for (const problem of problems) {
  auditProblemStructure(problem)
  auditSolutionStructure(problem)
}

auditDuplicatesAcrossProblems()

const summary = summarize()
const errors = findings.filter((finding) => finding.severity === "error")
const warnings = findings.filter((finding) => finding.severity === "warning")

console.log("Content audit summary:")
console.log(`- topics: ${summary.topics}`)
console.log(`- problems: ${summary.problems}`)
console.log(`- solutions: ${summary.solutions}`)
console.log(`- explanation-only solutions: ${summary.explanationOnlySolutions}`)
console.log(`- steps: ${summary.steps}`)
console.log(`- errors: ${errors.length}`)
console.log(`- warnings: ${warnings.length}`)

if (findings.length > 0) {
  console.log("\nContent audit findings:")
  for (const finding of findings) {
    console.log(`[${finding.severity.toUpperCase()}] ${finding.code} ${finding.location}: ${finding.message}`)
  }
}

if (errors.length > 0) {
  process.exit(1)
}
