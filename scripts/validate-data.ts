import type { Problem, Solution } from "../lib/data/types"

import { problems } from "../lib/data/problems"
import { categories, topics } from "../lib/data/topics"

export function validateProblemContent(problem: Problem): string[] {
  const errors: string[] = []

  if (!problem.title.trim()) {
    errors.push(`Problem ${problem.id} has empty title`)
  }

  if (!problem.content.trim()) {
    errors.push(`Problem ${problem.id} has empty content`)
  }

  const duplicateTags = problem.tags.filter((tag, index) => problem.tags.indexOf(tag) !== index)
  if (duplicateTags.length > 0) {
    errors.push(`Problem ${problem.id} has duplicate tags: ${Array.from(new Set(duplicateTags)).join(", ")}`)
  }

  const solutionIds = new Set<string>()
  for (const solution of problem.solutions) {
    if (solutionIds.has(solution.id)) {
      errors.push(`Problem ${problem.id} has duplicate solution id ${solution.id}`)
    }
    solutionIds.add(solution.id)

    errors.push(...validateSolutionContent(problem.id, solution))
  }

  return errors
}

function validateSolutionContent(problemId: string, solution: Solution): string[] {
  const errors: string[] = []

  if (!solution.title.trim()) {
    errors.push(`Problem ${problemId} solution ${solution.id} has empty title`)
  }

  if (solution.steps.length === 0 && !solution.explanation.trim()) {
    errors.push(`Problem ${problemId} solution ${solution.id} has neither steps nor explanation`)
  }

  if (solution.steps.length > 0) {
    const stepNumbers = solution.steps.map((step) => step.step)
    const expectedNumbers = Array.from({ length: solution.steps.length }, (_, index) => index + 1)

    if (stepNumbers.some((step, index) => step !== expectedNumbers[index])) {
      errors.push(
        `Problem ${problemId} solution ${solution.id} step numbers should be ${expectedNumbers.join(", ")}, got ${stepNumbers.join(", ")}`,
      )
    }
  }

  for (const step of solution.steps) {
    if (!step.content.trim()) {
      errors.push(`Problem ${problemId} solution ${solution.id} step ${step.step} has empty content`)
    }
  }

  return errors
}

function validateData(): string[] {
  const errors: string[] = []

  const topicIds = new Set<string>()
  const categoryIds = new Set<string>()
  const problemIds = new Set<string>()

  for (const category of categories) {
    if (categoryIds.has(category.id)) {
      errors.push(`Duplicate category id ${category.id}`)
    }
    categoryIds.add(category.id)
  }

  for (const topic of topics) {
    if (topicIds.has(topic.id)) {
      errors.push(`Duplicate topic id ${topic.id}`)
    }
    topicIds.add(topic.id)

    if (!categoryIds.has(topic.category)) {
      errors.push(`Topic ${topic.id} references missing category ${topic.category}`)
    }

    const referencedProblemIds = new Set<string>()
    for (const problemId of topic.problems) {
      if (referencedProblemIds.has(problemId)) {
        errors.push(`Topic ${topic.id} references problem ${problemId} more than once`)
      }
      referencedProblemIds.add(problemId)

      const problem = problems.find((item) => item.id === problemId)
      if (!problem) {
        errors.push(`Topic ${topic.id} references missing problem ${problemId}`)
      } else if (problem.topicId !== topic.id) {
        errors.push(`Topic ${topic.id} references problem ${problemId}, but problem.topicId is ${problem.topicId}`)
      }
    }
  }

  for (const problem of problems) {
    if (problemIds.has(problem.id)) {
      errors.push(`Duplicate problem id ${problem.id}`)
    }
    problemIds.add(problem.id)

    if (!topicIds.has(problem.topicId)) {
      errors.push(`Problem ${problem.id} references missing topic ${problem.topicId}`)
    }

    if (problem.solutions.length === 0) {
      errors.push(`Problem ${problem.id} has no solutions`)
    }

    errors.push(...validateProblemContent(problem))
  }

  for (const topic of topics) {
    const actualProblemIds = problems
      .filter((problem) => problem.topicId === topic.id)
      .map((problem) => problem.id)

    for (const problemId of actualProblemIds) {
      if (!topic.problems.includes(problemId)) {
        errors.push(`Problem ${problemId} belongs to topic ${topic.id}, but topic.problems does not include it`)
      }
    }
  }

  return errors
}

const isCli = process.argv[1]?.replace(/\\/g, "/").endsWith("scripts/validate-data.ts") ?? false

if (isCli) {
  const errors = validateData()

  if (errors.length > 0) {
    console.error("Data validation failed:")
    for (const error of errors) {
      console.error(`- ${error}`)
    }
    process.exit(1)
  }

  console.log(`Data validation passed: ${topics.length} topics, ${problems.length} problems`)
}
