"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import KaTeX from "@/components/ui/KaTeX"
import { useCanvasSize } from "@/hooks/useCanvasSize"

function lerp(from: number, to: number, t: number) {
  return from + (to - from) * t
}

export default function ThreeAmGmViz() {
  const [a, setA] = useState(1)
  const [b, setB] = useState(2)
  const [c, setC] = useState(5)
  const [balance, setBalance] = useState(0)
  const [proofPlaying, setProofPlaying] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { containerRef, width, height, dpr } = useCanvasSize({ maxWidth: 720, aspectRatio: 16 / 10 })
  const product = a * b * c
  const geometricMean = Math.cbrt(product)
  const normalizedValues = useMemo(() => [a, b, c].map((value) => value / geometricMean), [a, b, c, geometricMean])
  const balancedValues = normalizedValues.map((value) => lerp(value, 1, balance / 100))
  const arithmeticMean = balancedValues.reduce((sum, value) => sum + value, 0) / 3
  const currentGap = arithmeticMean - 1
  const originalGap = normalizedValues.reduce((sum, value) => sum + value, 0) / 3 - 1

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = Math.round(width * dpr)
    canvas.height = Math.round(height * dpr)
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.clearRect(0, 0, width, height)

    const gradient = ctx.createLinearGradient(0, 0, width, height)
    gradient.addColorStop(0, "#0f172a")
    gradient.addColorStop(1, "#064e3b")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)

    ctx.strokeStyle = "rgba(226,232,240,0.14)"
    ctx.lineWidth = 1
    for (let x = 0; x < width; x += 42) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, height)
      ctx.stroke()
    }
    for (let y = 0; y < height; y += 42) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(width, y)
      ctx.stroke()
    }

    const baseY = height * 0.74
    const maxValue = Math.max(2.4, ...balancedValues) * 1.12
    const chartHeight = height * 0.48
    const startX = width * 0.16
    const gap = width * 0.055
    const barWidth = Math.min(72, (width * 0.44) / 3)
    const labels = ["a", "b", "c"]
    const colors = ["#38bdf8", "#fbbf24", "#a78bfa"]

    ctx.strokeStyle = "rgba(255,255,255,0.45)"
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(startX - 28, baseY)
    ctx.lineTo(startX + barWidth * 3 + gap * 2 + 28, baseY)
    ctx.stroke()

    balancedValues.forEach((value, index) => {
      const barHeight = (value / maxValue) * chartHeight
      const x = startX + index * (barWidth + gap)
      const y = baseY - barHeight
      const columnGradient = ctx.createLinearGradient(0, y, 0, baseY)
      columnGradient.addColorStop(0, colors[index])
      columnGradient.addColorStop(1, "rgba(255,255,255,0.18)")
      ctx.fillStyle = columnGradient
      ctx.fillRect(x, y, barWidth, barHeight)
      ctx.fillStyle = "#e0f2fe"
      ctx.font = "bold 15px Microsoft YaHei, sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(labels[index], x + barWidth / 2, baseY + 24)
      // Show bar value inside bar if too close to top edge
      const valueY = y - 10 < 16 ? y + 20 : y - 10
      ctx.fillText(value.toFixed(2), x + barWidth / 2, valueY)
    })

    const gmY = baseY - (1 / maxValue) * chartHeight
    const amY = baseY - (arithmeticMean / maxValue) * chartHeight
    const lineEnd = startX + barWidth * 3 + gap * 2 + 28

    ctx.strokeStyle = "#34d399"
    ctx.setLineDash([8, 7])
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(startX - 28, gmY)
    ctx.lineTo(lineEnd, gmY)
    ctx.stroke()

    ctx.strokeStyle = "#fb7185"
    ctx.beginPath()
    ctx.moveTo(startX - 28, amY)
    ctx.lineTo(lineEnd, amY)
    ctx.stroke()
    ctx.setLineDash([])

    ctx.fillStyle = "#bbf7d0"
    ctx.font = "bold 14px Microsoft YaHei, sans-serif"
    ctx.textAlign = "left"
    // Stagger GM/AM labels vertically when they are close
    const gmAmGap = Math.abs(amY - gmY)
    const labelSep = gmAmGap < 28
    ctx.fillText("几何平均值 = 1", lineEnd + 10, gmY + 5)
    ctx.fillStyle = "#fecdd3"
    const amLabelOffset = labelSep ? (amY < gmY ? -14 : 20) : 5
    ctx.fillText(`算术平均值 = ${arithmeticMean.toFixed(2)}`, lineEnd + 10, amY + amLabelOffset)

    const cubeX = width * 0.68
    const cubeY = height * 0.28
    const cubeSize = Math.min(width, height) * 0.18
    const depth = cubeSize * 0.38
    ctx.fillStyle = "rgba(52,211,153,0.2)"
    ctx.strokeStyle = "#34d399"
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.rect(cubeX, cubeY, cubeSize, cubeSize)
    ctx.stroke()
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(cubeX, cubeY)
    ctx.lineTo(cubeX + depth, cubeY - depth)
    ctx.lineTo(cubeX + cubeSize + depth, cubeY - depth)
    ctx.lineTo(cubeX + cubeSize, cubeY)
    ctx.moveTo(cubeX + cubeSize, cubeY)
    ctx.lineTo(cubeX + cubeSize + depth, cubeY - depth)
    ctx.lineTo(cubeX + cubeSize + depth, cubeY + cubeSize - depth)
    ctx.lineTo(cubeX + cubeSize, cubeY + cubeSize)
    ctx.stroke()
    ctx.fillStyle = "#d1fae5"
    ctx.font = "bold 16px Microsoft YaHei, sans-serif"
    ctx.fillText("体积 abc", cubeX, cubeY + cubeSize + 34)
    ctx.fillText("边长 ³√abc", cubeX, cubeY + cubeSize + 58)
  }, [arithmeticMean, balancedValues, dpr, height, width])

  return (
    <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/70">
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-500">三元 AM-GM 均衡实验室</p>
            <h3 className="text-xl font-semibold text-slate-950">调整三个正数，观察均衡化后差距缩小</h3>
            <p className="text-sm leading-6 text-slate-600">把 a、b、c 先除以几何平均值，让体积固定为 1；三根柱子越接近，算术平均值越靠近几何平均值。</p>
          </div>
          <button
            type="button"
            onClick={() => setProofPlaying((v) => !v)}
            className={`shrink-0 rounded-full px-3 py-2 text-sm font-medium text-white transition ${proofPlaying ? "bg-emerald-600 hover:bg-emerald-700" : "bg-emerald-600 hover:bg-emerald-700"}`}
          >
            {proofPlaying ? "证明播放中" : "播放证明"}
          </button>
        </div>
      </div>

      {proofPlaying && (
        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm text-emerald-950">
          <p className="mb-3 font-semibold">三元 AM-GM 的均衡化证明：</p>
          <div className="space-y-2">
            <KaTeX math="x=\frac{a}{\sqrt[3]{abc}},\quad y=\frac{b}{\sqrt[3]{abc}},\quad z=\frac{c}{\sqrt[3]{abc}}" display />
            <KaTeX math="xyz=1" display />
            <KaTeX math="\frac{x+y+z}{3}\geq 1" display />
            <KaTeX math="\frac{a+b+c}{3}\geq \sqrt[3]{abc}" display />
          </div>
        </div>
      )}

      <div ref={containerRef} className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-950">
        <canvas ref={canvasRef} role="img" aria-label="三元 AM-GM 柱状图与均衡化可视化" className="block max-w-full" />
      </div>

      <div className="grid gap-3 rounded-2xl bg-slate-50 p-3 text-sm text-slate-600 sm:grid-cols-2">
        <p><span className="font-semibold text-rose-600">红色虚线</span>：当前归一化后的算术平均值。</p>
        <p><span className="font-semibold text-emerald-600">绿色虚线</span>：归一化后的几何平均值，始终等于 1。</p>
      </div>

      <div className="grid gap-3 lg:grid-cols-4">
        <label className="space-y-2 text-sm font-medium text-slate-700">
          <span>a = {a.toFixed(1)}</span>
          <input aria-label="调整 a 的值" type="range" min="0.5" max="8" step="0.1" value={a} onChange={(event) => setA(Number(event.target.value))} className="w-full accent-emerald-500" />
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-700">
          <span>b = {b.toFixed(1)}</span>
          <input aria-label="调整 b 的值" type="range" min="0.5" max="8" step="0.1" value={b} onChange={(event) => setB(Number(event.target.value))} className="w-full accent-emerald-500" />
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-700">
          <span>c = {c.toFixed(1)}</span>
          <input aria-label="调整 c 的值" type="range" min="0.5" max="8" step="0.1" value={c} onChange={(event) => setC(Number(event.target.value))} className="w-full accent-emerald-500" />
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-700">
          <span>均衡化：{balance}%</span>
          <input aria-label="调整均衡化比例" type="range" min="0" max="100" value={balance} onChange={(event) => setBalance(Number(event.target.value))} className="w-full accent-emerald-500" />
        </label>
      </div>

      <div className="grid gap-3 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600 sm:grid-cols-3">
        <div>
          <p className="font-medium text-slate-900">算术平均值</p>
          <p>{arithmeticMean.toFixed(3)}</p>
        </div>
        <div>
          <p className="font-medium text-slate-900">几何平均值</p>
          <p>1.000</p>
        </div>
        <div>
          <p className="font-medium text-slate-900">均衡化后差距缩小</p>
          <p>{Math.max(0, originalGap - currentGap).toFixed(3)}</p>
        </div>
      </div>

      <div className="rounded-2xl bg-emerald-50 p-4 text-center text-emerald-950">
        <KaTeX math="\frac{a+b+c}{3} \geq \sqrt[3]{abc}" display />
      </div>
    </div>
  )
}
