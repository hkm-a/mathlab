import type { Problem } from "./types"

import { problems_chstrategy } from "./problems-ch-strategy"
import { problems_chthoughts } from "./problems-ch-thoughts"
import { problems_chmethods } from "./problems-ch-methods"
import { problems_chexam } from "./problems-ch-exam"
import { problems_chexamples } from "./problems-ch-examples"

export const problems: Problem[] = [
  ...problems_chstrategy,
  ...problems_chthoughts,
  ...problems_chmethods,
  ...problems_chexam,
  ...problems_chexamples,
]

const problemById = new Map(problems.map((p) => [p.id, p]))

const problemsByTopic = new Map<string, Problem[]>()
for (const p of problems) {
  const list = problemsByTopic.get(p.topicId)
  if (list) {
    list.push(p)
  } else {
    problemsByTopic.set(p.topicId, [p])
  }
}

export function getProblemById(id: string): Problem | undefined {
  return problemById.get(id)
}

export function getProblemsByTopic(topicId: string): Problem[] {
  return problemsByTopic.get(topicId) ?? []
}
