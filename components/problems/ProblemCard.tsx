"use client"

import Link from "next/link"
import React, { useEffect, useState } from "react"
import Card from "@/components/ui/Card"
import { getProblemDisplayTitle, getProblemEyebrow } from "@/lib/data/problemDisplay"
import { formatProblemPreview } from "@/lib/data/content-format"
import type { Problem } from "@/lib/data/types"
import { useMathLabStore } from "@/lib/store"

interface ProblemCardProps {
  problem: Problem
  topicName?: string
}

function ProblemCard({ problem, topicName }: ProblemCardProps) {
  const [mounted, setMounted] = useState(false)
  const isBookmarked = useMathLabStore((state) => state.isBookmarked(problem.id))
  const isCompleted = useMathLabStore((state) => state.isCompleted(problem.id))

  useEffect(() => {
    setMounted(true)
  }, [])

  const difficultyColors = {
    easy: "bg-emerald-50 text-emerald-700",
    medium: "bg-amber-50 text-amber-700",
    hard: "bg-orange-50 text-orange-700",
    olympiad: "bg-red-50 text-red-700",
  }

  const difficultyLabels = {
    easy: "简单",
    medium: "中等",
    hard: "困难",
    olympiad: "拓展",
  }

  const bookmarked = mounted && isBookmarked
  const completed = mounted && isCompleted
  const displayTitle = getProblemDisplayTitle(problem, topicName)
  const eyebrow = getProblemEyebrow(problem, topicName)

  return (
    <Link href={`/problems/${problem.id}`}>
      <Card className="group relative h-full cursor-pointer overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/80">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-400 opacity-80" />
        <div className="mb-3 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-500">{eyebrow}</p>
            <h3 className="text-lg font-semibold tracking-tight text-slate-950">{displayTitle}</h3>
            {(completed || bookmarked) && (
              <div className="mt-2 flex gap-2">
                {completed && (
                  <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">
                    已完成
                  </span>
                )}
                {bookmarked && (
                  <span className="rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                    已收藏
                  </span>
                )}
              </div>
            )}
          </div>
          <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${difficultyColors[problem.difficulty]}`}>
            {difficultyLabels[problem.difficulty]}
          </span>
        </div>
        <div className="mb-4 line-clamp-2 rounded-2xl bg-slate-50 px-3 py-2 text-sm leading-6 text-slate-600">
          {formatProblemPreview(problem.preview || problem.content)}
        </div>
        <div className="flex flex-wrap gap-2">
          {problem.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 transition group-hover:bg-white">
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

export default React.memo(ProblemCard)
