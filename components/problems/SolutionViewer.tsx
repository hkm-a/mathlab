"use client"

import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Card from "@/components/ui/Card"
import Button from "@/components/ui/Button"
import KaTeX from "@/components/ui/KaTeX"
import type { Solution } from "@/lib/data/types"
import { useMathLabStore } from "@/lib/store"

interface SolutionViewerProps {
  solutions: Solution[]
  problemId: string
  nextProblemId?: string
}

function getSolutionDisplayTitle(index: number, total: number) {
  return total === 1 ? "参考解析" : `解法 ${index + 1}`
}

export default function SolutionViewer({ solutions, problemId, nextProblemId }: SolutionViewerProps) {
  const [mounted, setMounted] = useState(false)
  const [currentSolution, setCurrentSolution] = useState(0)
  const [expandedSteps, setExpandedSteps] = useState<number[]>([])
  const isCompleted = useMathLabStore((state) => state.isCompleted(problemId))
  const router = useRouter()
  const markCompleted = useMathLabStore((state) => state.markCompleted)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    setCurrentSolution(0)
    setExpandedSteps([])
  }, [problemId, solutions.length])

  const toggleStep = (stepIndex: number) => {
    setExpandedSteps((prev) =>
      prev.includes(stepIndex)
        ? prev.filter((i) => i !== stepIndex)
        : [...prev, stepIndex]
    )
  }

  const solution = solutions[currentSolution]
  const completed = mounted && isCompleted

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        {solutions.length > 1 && (
          <div className="flex gap-2 flex-wrap">
            {solutions.map((sol, i) => (
              <Button
                key={sol.id}
                variant={i === currentSolution ? "primary" : "outline"}
                size="sm"
                aria-pressed={i === currentSolution}
                onClick={() => {
                  setCurrentSolution(i)
                  setExpandedSteps([])
                }}
              >
                {getSolutionDisplayTitle(i, solutions.length)}
              </Button>
            ))}
          </div>
        )}
        <Button
          variant={completed ? "secondary" : "primary"}
          size="sm"
          onClick={() => markCompleted(problemId)}
        >
          {completed ? "已完成" : "标记完成"}
        </Button>
      </div>

      {solution && (
        <Card className="overflow-hidden p-1">
          <div className="grid gap-0 overflow-hidden rounded-[1.35rem] border border-slate-100 lg:grid-cols-[minmax(0,1fr)_280px]">
            <div className="p-5 sm:p-6">
              <div className="mb-5">
                {solution.steps.length > 0 && (
                  <div className="mb-2 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">分步解析</div>
                )}
                <h3 className="mb-2 text-xl font-semibold tracking-tight text-slate-950">{getSolutionDisplayTitle(currentSolution, solutions.length)}</h3>
                {solution.steps.length === 0 && solution.explanation && (
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <KaTeX math={solution.explanation} display />
                  </div>
                )}
              </div>

              {solution.steps.length > 0 && (
                <div className="space-y-3">
                  {solution.steps.map((step, i) => {
                    const expanded = expandedSteps.includes(i)
                    const stepContentId = `${problemId}-solution-${currentSolution}-step-${step.step}`
                    return (
                      <div key={step.step} className={`relative overflow-hidden rounded-2xl border transition-all duration-200 ${expanded ? "border-blue-200 bg-blue-50 shadow-sm shadow-blue-100" : "border-slate-200 bg-white hover:border-blue-200"}`}>
                        <button
                          type="button"
                          aria-expanded={expanded}
                          aria-controls={stepContentId}
                          onClick={() => toggleStep(i)}
                          className="flex w-full items-center justify-between p-4 text-left transition hover:bg-white/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                        >
                          <span className="flex items-center gap-3 font-medium text-slate-950">
                            <span className={`flex h-8 w-8 items-center justify-center rounded-full text-sm shadow-sm ${expanded ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"}`}>
                              {step.step}
                            </span>
                            步骤 {step.step}
                          </span>
                          <span className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-slate-500 shadow-sm">{expanded ? "收起" : "展开"}</span>
                        </button>
                        <div id={stepContentId} hidden={!expanded} className="border-t border-blue-100 bg-white/80 p-4">
                          <KaTeX math={step.content} display />
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            <aside className="border-t border-slate-200 p-5 lg:border-l lg:border-t-0 sm:p-6">
              {solution.steps.length > 0 && (
                <>
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-slate-950">解析进度</h3>
                    <span className="rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                      {expandedSteps.length}/{solution.steps.length}
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-violet-600 transition-all" style={{ width: `${solution.steps.length === 0 ? 0 : (expandedSteps.length / solution.steps.length) * 100}%` }} />
                  </div>
                  <p className="mt-3 text-xs leading-5 text-slate-500">按步骤展开解析，优先关注每一步使用的转化理由。</p>
                </>
              )}
              <div className="mt-5 rounded-2xl bg-slate-950 p-4 text-white">
                {solutions.length > 1 && (
                  <p className="text-sm leading-6 text-slate-300">当前解法: {getSolutionDisplayTitle(currentSolution, solutions.length)}</p>
                )}
                {nextProblemId ? (
                  <button
                    type="button"
                    onClick={() => router.push(`/problems/${nextProblemId}`)}
                    className="mt-4 w-full rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                  >
                    进入下一题
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => router.push("/topics")}
                    className="mt-4 w-full rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                  >
                    返回专题列表
                  </button>
                )}
              </div>
            </aside>
          </div>
        </Card>
      )}
    </div>
  )
}
