"use client"

import React, { useEffect, useState } from "react"
import Card from "@/components/ui/Card"
import KaTeX from "@/components/ui/KaTeX"
import { getProblemDisplayTitle, getProblemEyebrow } from "@/lib/data/problemDisplay"
import type { Problem } from "@/lib/data/types"
import { useMathLabStore } from "@/lib/store"

interface ProblemViewerProps {
  problem: Problem
}

const mathCompanionNotes = [
  "欧拉常把复杂问题先换一个视角：如果式子太长，就先问它真正依赖几个方向。",
  "高斯少年时代擅长把重复计算折叠成结构；这题也可以先找对称与抵消。",
  "虚拟学伴ππ提醒：先别急着算，给每个条件贴上“长度、方向、约束”标签。",
  "笛卡尔会建议你画一张坐标草图：把几何语言翻译成可计算的对象。",
]

function getCompanionNote(problem: Problem) {
  const seed = Array.from(problem.id).reduce((total, char) => total + char.charCodeAt(0), 0)
  return mathCompanionNotes[seed % mathCompanionNotes.length]
}

function getThinkingPrompt(problem: Problem) {
  if (problem.content.includes("\\overrightarrow")) {
    return "向量题先找基底：能否只用两条边表示所有向量？"
  }

  if (problem.content.includes("最大") || problem.content.includes("最小")) {
    return "最值题先找变量范围，再判断边界还是内部取到。"
  }

  if (problem.content.includes("函数") || problem.content.includes("方程")) {
    return "把题目里的关系式改写成一个主变量的约束。"
  }

  return "先圈出已知、目标和隐藏约束，再展开参考解析。"
}

export default function ProblemViewer({ problem }: ProblemViewerProps) {
  const [mounted, setMounted] = useState(false)
  const markViewed = useMathLabStore((state) => state.markViewed)
  const isBookmarked = useMathLabStore((state) => state.isBookmarked(problem.id))
  const toggleBookmark = useMathLabStore((state) => state.toggleBookmark)

  useEffect(() => {
    setMounted(true)
    markViewed(problem.id)
  }, [markViewed, problem.id])

  const difficultyColors = {
    easy: "bg-emerald-50 text-emerald-700 border-emerald-200",
    medium: "bg-amber-50 text-amber-700 border-amber-200",
    hard: "bg-orange-50 text-orange-700 border-orange-200",
    olympiad: "bg-red-50 text-red-700 border-red-200",
  }

  const difficultyLabels = {
    easy: "简单",
    medium: "中等",
    hard: "困难",
    olympiad: "拓展",
  }

  const bookmarked = mounted && isBookmarked
  const displayTitle = getProblemDisplayTitle(problem)
  const eyebrow = getProblemEyebrow(problem)
  const companionNote = getCompanionNote(problem)
  const thinkingPrompt = getThinkingPrompt(problem)

  return (
    <Card className="mb-6 overflow-hidden p-0">
      <div
        className="border-b border-slate-800 bg-slate-950 px-5 py-6 text-white sm:px-6"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.35), transparent 28%), radial-gradient(circle at 80% 0%, rgba(139,92,246,0.26), transparent 30%)",
        }}
      >
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
          <div>
            <div className="mb-3 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-slate-200">
              {problem.visualization ? "可视化演示 · 解题分析" : "题目阅读 · 解题分析"}
            </div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-blue-200">{eyebrow}</p>
            <h1 className="text-3xl font-semibold tracking-tight">{displayTitle}</h1>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              aria-pressed={bookmarked}
              onClick={() => toggleBookmark(problem.id)}
              className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
                bookmarked
                  ? "border-blue-300 bg-blue-500/20 text-blue-100"
                  : "border-white/15 bg-white/10 text-slate-200 hover:bg-white/15"
              }`}
            >
              {bookmarked ? "已收藏" : "收藏"}
            </button>
            <span className={`rounded-full border px-3 py-1.5 text-sm font-medium ${difficultyColors[problem.difficulty]}`}>
              {difficultyLabels[problem.difficulty]}
            </span>
          </div>
        </div>
      </div>

      <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="p-5 sm:p-6">
          <div className="mb-5 flex flex-wrap gap-2">
            {problem.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                {tag}
              </span>
            ))}
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:24px_24px] p-6 shadow-inner shadow-slate-200/70">
            <div className="mb-4 inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-500 shadow-sm">题目内容</div>
            <KaTeX math={problem.content} display />
          </div>
        </div>

        <aside className="space-y-4 border-t border-slate-200 p-5 lg:border-l lg:border-t-0 sm:p-6">
          {problem.visualization && (
            <section className="rounded-2xl border border-slate-200 bg-white p-4">
              <h2 className="mb-3 text-sm font-semibold text-slate-950">绘图设置</h2>
              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-center justify-between"><span>辅助线</span><span className="text-blue-600">开启</span></div>
                <div className="flex items-center justify-between"><span>动画速度</span><span>1.2x</span></div>
                <div className="flex items-center justify-between"><span>网格密度</span><span>32px</span></div>
              </div>
            </section>
          )}
          <section className="overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-violet-50 p-4 shadow-sm">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-lg font-semibold text-white shadow-sm">π</div>
              <div>
                <h2 className="text-sm font-semibold text-slate-950">数学旁白</h2>
                <p className="text-xs text-slate-500">虚拟学伴 · 读题前 30 秒</p>
              </div>
            </div>
            <p className="rounded-2xl bg-white/80 p-3 text-sm leading-6 text-slate-700 shadow-sm">{companionNote}</p>
            <div className="mt-3 rounded-2xl border border-white/70 bg-white/60 p-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">小挑战</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">{thinkingPrompt}</p>
            </div>
          </section>

          <section className="rounded-2xl bg-slate-950 p-4 text-white">
            <h2 className="mb-2 text-sm font-semibold">下一步建议</h2>
            <p className="text-sm leading-6 text-slate-300">先独立梳理条件，再展开分步解析检查关键转化。</p>
          </section>
        </aside>
      </div>
    </Card>
  )
}
