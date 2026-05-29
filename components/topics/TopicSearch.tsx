"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import Card from "@/components/ui/Card"
import KaTeX from "@/components/ui/KaTeX"
import { getProblemDisplayTitle, getProblemEyebrow } from "@/lib/data/problemDisplay"
import { formatProblemPreview } from "@/lib/data/content-format"
import type { Category, Difficulty, Problem, Topic } from "@/lib/data/types"

interface TopicSearchProps {
  topics: Topic[]
  problems: Problem[]
  categories: Category[]
}

const difficultyOptions: Array<{ id: "all" | Difficulty; label: string }> = [
  { id: "all", label: "全部" },
  { id: "easy", label: "简单" },
  { id: "medium", label: "中等" },
  { id: "hard", label: "困难" },
  { id: "olympiad", label: "拓展" },
]

export default function TopicSearch({ topics, problems, categories }: TopicSearchProps) {
  const [query, setQuery] = useState("")
  const [difficulty, setDifficulty] = useState<"all" | Difficulty>("all")

  const topicNameMap = useMemo(() => new Map(topics.map((t) => [t.id, t.name])), [topics])

  const filteredProblems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return problems.filter((problem) => {
      const displayTitle = getProblemDisplayTitle(problem, topicNameMap.get(problem.topicId))
      const eyebrow = getProblemEyebrow(problem, topicNameMap.get(problem.topicId))
      const matchesDifficulty = difficulty === "all" || problem.difficulty === difficulty
      const matchesQuery =
        normalizedQuery.length === 0 ||
        displayTitle.toLowerCase().includes(normalizedQuery) ||
        eyebrow.toLowerCase().includes(normalizedQuery) ||
        problem.title.toLowerCase().includes(normalizedQuery) ||
        problem.content.toLowerCase().includes(normalizedQuery) ||
        problem.source?.toLowerCase().includes(normalizedQuery) ||
        problem.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery))

      return matchesDifficulty && matchesQuery
    })
  }, [difficulty, problems, query, topicNameMap])

  const hasActiveFilter = query.trim().length > 0 || difficulty !== "all"
  const resultSummary = hasActiveFilter
    ? `找到 ${filteredProblems.length} 道匹配题目`
    : `共 ${problems.length} 道电子化题目`

  if (hasActiveFilter) {
    return (
      <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
        <LearningSidebar topics={topics} problems={problems} categories={categories} />
        <div className="space-y-6">
          <SearchControls
            query={query}
            difficulty={difficulty}
            resultSummary={resultSummary}
            onQueryChange={setQuery}
            onDifficultyChange={setDifficulty}
          />
          <div>
            <h2 className="mb-4 text-xl font-semibold tracking-tight text-slate-950">筛选结果</h2>
            {filteredProblems.length === 0 ? (
              <Card>
                <p className="text-slate-500">没有找到匹配的题目。</p>
              </Card>
            ) : (
              <div className="grid gap-4 md:grid-cols-2">
                {filteredProblems.map((problem) => (
                  <ProblemResultCard key={problem.id} problem={problem} topicName={topicNameMap.get(problem.topicId)} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
      <LearningSidebar topics={topics} problems={problems} categories={categories} />
      <div className="space-y-6">
        <SearchControls
          query={query}
          difficulty={difficulty}
          resultSummary={resultSummary}
          onQueryChange={setQuery}
          onDifficultyChange={setDifficulty}
        />
        {categories.map((category) => {
          const categoryTopics = topics.filter((topic) => topic.category === category.id)
          if (categoryTopics.length === 0) return null

          return (
            <div key={category.id} className="mb-8">
              <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold tracking-tight text-slate-950">
                <span className="text-2xl">{category.icon}</span>
                {category.name}
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {categoryTopics.map((topic) => {
                  const topicProblems = problems.filter((problem) => problem.topicId === topic.id)
                  return (
                    <Link key={topic.id} href={`/topics/${topic.id}`}>
                      <Card className="h-full cursor-pointer transition hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100">
                        <div className="mb-3 flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-lg font-semibold tracking-tight text-slate-950">{topic.name}</h3>
                            <p className="mt-2 text-sm leading-6 text-slate-600">{topic.description}</p>
                          </div>
                          <span className="shrink-0 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
                            {topicProblems.length} 题
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">学习路径</span>
                          <span className="rounded-full bg-violet-50 px-2.5 py-1 text-xs font-medium text-violet-700">含可视化</span>
                        </div>
                      </Card>
                    </Link>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function LearningSidebar({
  topics,
  problems,
  categories,
}: {
  topics: Topic[]
  problems: Problem[]
  categories: Category[]
}) {
  return (
    <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
      <Card className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-slate-950">学习路径</h2>
          <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">{problems.length} 题</span>
        </div>
        <div className="space-y-2">
          {topics.map((topic) => {
            const category = categories.find((item) => item.id === topic.category)
            return (
              <Link
                key={topic.id}
                href={`/topics/${topic.id}`}
                className="flex items-center gap-3 rounded-2xl border border-transparent px-3 py-3 transition hover:border-slate-200 hover:bg-slate-50"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-lg text-slate-700">
                  {category?.icon ?? "∑"}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium text-slate-800">{topic.name}</span>
                  <span className="block truncate text-xs text-slate-500">{topic.problems.length} 个训练节点</span>
                </span>
              </Link>
            )
          })}
        </div>
      </Card>

      <Card className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-slate-950">工具箱</h2>
          <span className="text-xs text-slate-400">绘图 · 动画</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {['拖拽点', '函数图', '辅助线', '动画证明'].map((tool) => (
            <div key={tool} className="rounded-2xl border border-slate-200 bg-white p-3 text-xs font-medium text-slate-700 transition hover:border-blue-300 hover:bg-blue-50">
              {tool}
            </div>
          ))}
        </div>
      </Card>
    </aside>
  )
}

function ProblemResultCard({ problem, topicName }: { problem: Problem; topicName?: string }) {
  const displayTitle = getProblemDisplayTitle(problem, topicName)
  const eyebrow = getProblemEyebrow(problem, topicName)

  return (
    <Link href={`/problems/${problem.id}`}>
      <Card className="h-full cursor-pointer transition hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100">
        <div className="mb-2 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-500">{eyebrow}</p>
            <h3 className="text-lg font-semibold tracking-tight text-slate-950">{displayTitle}</h3>
          </div>
          <span className="shrink-0 text-sm text-slate-500">{topicName}</span>
        </div>
        <div className="mb-3 line-clamp-2 text-sm text-slate-600">
          {formatProblemPreview(problem.preview || problem.content)}
        </div>
        <div className="flex flex-wrap gap-2">
          {problem.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
              {tag}
            </span>
          ))}
          {problem.visualization && (
            <span className="rounded-full bg-violet-50 px-2.5 py-1 text-xs font-medium text-violet-700">含可视化</span>
          )}
        </div>
      </Card>
    </Link>
  )
}

function SearchControls({
  query,
  difficulty,
  resultSummary,
  onQueryChange,
  onDifficultyChange,
}: {
  query: string
  difficulty: "all" | Difficulty
  resultSummary: string
  onQueryChange: (query: string) => void
  onDifficultyChange: (difficulty: "all" | Difficulty) => void
}) {
  return (
    <Card className="mb-8 bg-gradient-to-br from-white to-slate-50">
      <div className="space-y-4">
        <div>
          <label htmlFor="problem-search" className="mb-2 block text-sm font-semibold text-slate-950">搜索题目</label>
          <input
            id="problem-search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="搜索题目、标签、来源或内容"
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 shadow-sm placeholder:text-slate-400 focus:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-500/10"
          />
        </div>
        <p role="status" aria-live="polite" className="text-sm text-slate-500">{resultSummary}</p>
        <div role="group" className="flex flex-wrap gap-2" aria-label="难度筛选">
          {difficultyOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              aria-pressed={difficulty === option.id}
              onClick={() => onDifficultyChange(option.id)}
              className={`rounded-full border px-3 py-1 text-sm transition-colors ${
                difficulty === option.id
                  ? "border-blue-200 bg-blue-50 text-blue-700"
                  : "border-slate-200 bg-white text-slate-500 hover:border-blue-200 hover:text-slate-950"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </Card>
  )
}
