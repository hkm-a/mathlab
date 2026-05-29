"use client"

import React, { useRef, useEffect, useState } from "react"
import KaTeX from "@/components/ui/KaTeX"
import { useCanvasSize } from "@/hooks/useCanvasSize"
import type { InequalityState } from "@/lib/data/types"

interface InequalityVizProps {
  type?: "amgm-2" | "amgm-3"
  initialState?: InequalityState
}

export default function InequalityViz({ type = "amgm-2", initialState }: InequalityVizProps) {
  const [a, setA] = useState(initialState?.a ?? 4)
  const [b, setB] = useState(initialState?.b ?? 9)
  const [c, setC] = useState(initialState?.c ?? 16)
  const [showGuideLines, setShowGuideLines] = useState(false)
  const [proofPlaying, setProofPlaying] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { containerRef, width, height, dpr } = useCanvasSize({
    maxWidth: 560,
    aspectRatio: 14 / 9,
  })

  const isThreeVariable = type === "amgm-3"
  const AM = isThreeVariable ? (a + b + c) / 3 : (a + b) / 2
  const GM = isThreeVariable ? Math.cbrt(a * b * c) : Math.sqrt(a * b)

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
    ctx.fillStyle = "#fbfcff"
    ctx.fillRect(0, 0, width, height)

    if (isThreeVariable) {
      drawThreeVariableChart(ctx, width, height, a, b, c, AM, GM, showGuideLines, proofPlaying)
      return
    }

    drawTwoVariableCircle(ctx, width, height, a, b, AM, GM, showGuideLines, proofPlaying)
  }, [AM, GM, a, b, c, dpr, height, isThreeVariable, proofPlaying, showGuideLines, width])

  const sliderClass = "w-full h-2 rounded-full appearance-none cursor-pointer accent-blue-600 bg-slate-200"

  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm shadow-slate-200/70">
      <div className="flex flex-col justify-between gap-4 border-b border-slate-200 px-5 py-5 sm:flex-row sm:items-center sm:px-6">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-950">交互绘图区</h2>
          <p className="mt-1 text-sm text-slate-500">拖动参数，观察算术平均与几何平均的动态关系。</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            aria-pressed={showGuideLines}
            onClick={() => setShowGuideLines((visible) => !visible)}
            className={`rounded-full border px-3 py-2 text-sm font-medium transition ${
              showGuideLines
                ? "border-blue-200 bg-blue-50 text-blue-700"
                : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            {showGuideLines ? "辅助线已显示" : "显示辅助线"}
          </button>
          <button
            type="button"
            aria-pressed={proofPlaying}
            onClick={() => setProofPlaying((playing) => !playing)}
            className={`rounded-full px-3 py-2 text-sm font-medium text-white transition ${
              proofPlaying ? "bg-emerald-600 hover:bg-emerald-700" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {proofPlaying ? "证明播放中" : "播放证明"}
          </button>
        </div>
      </div>

      <div className="grid gap-0 xl:grid-cols-[minmax(0,1fr)_300px]">
        <div className="p-4 sm:p-6">
          <div ref={containerRef} className="flex w-full justify-center overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[#fbfcff] p-2">
            <canvas
              ref={canvasRef}
              role="img"
              aria-label={isThreeVariable ? "三元均值不等式可视化图表" : "二元均值不等式半圆可视化"}
              className="block max-w-full rounded-3xl shadow-lg shadow-slate-200/80"
              style={{ backgroundColor: "#fbfcff" }}
            />
          </div>
        </div>

        <aside className="space-y-5 border-t border-slate-200 p-5 xl:border-l xl:border-t-0 sm:p-6">
          <div className="grid gap-4">
            <Slider label="a" value={a} onChange={setA} className={sliderClass} />
            <Slider label="b" value={b} onChange={setB} className={sliderClass} />
            {isThreeVariable && <Slider label="c" value={c} onChange={setC} className={sliderClass} />}
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <div className="mb-3 flex flex-wrap gap-2 text-xs font-medium">
              <span className={`rounded-full px-2.5 py-1 ${showGuideLines ? "bg-blue-100 text-blue-700" : "bg-white text-slate-500"}`}>
                {showGuideLines ? "辅助线已显示" : "辅助线隐藏"}
              </span>
              <span className={`rounded-full px-2.5 py-1 ${proofPlaying ? "bg-emerald-100 text-emerald-700" : "bg-white text-slate-500"}`}>
                {proofPlaying ? "证明播放中" : "证明已暂停"}
              </span>
            </div>
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-center">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <span className="mb-1 block text-xs font-medium text-slate-500">算术平均 (AM)</span>
                <span className="font-mono text-2xl font-semibold tracking-tight text-blue-600">{AM.toFixed(2)}</span>
              </div>
              <div className="text-2xl font-semibold text-emerald-600">≥</div>
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <span className="mb-1 block text-xs font-medium text-slate-500">几何平均 (GM)</span>
                <span className="font-mono text-2xl font-semibold tracking-tight text-violet-600">{GM.toFixed(2)}</span>
              </div>
            </div>
            <div className="mt-4 rounded-2xl bg-white px-4 py-3 text-center shadow-sm">
              <KaTeX
                math={isThreeVariable ? "\\frac{a + b + c}{3} \\geq \\sqrt[3]{abc}" : "\\frac{a + b}{2} \\geq \\sqrt{ab}"}
                display
              />
            </div>
            {proofPlaying && (
              <div className="mt-4 space-y-3 rounded-2xl bg-white p-4 text-sm text-slate-600 shadow-sm">
                <FormulaProofFallback isThreeVariable={isThreeVariable} />
              </div>
            )}
            <div className="mt-4 text-center">
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">AM ≥ GM 恒成立 ✓</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

function FormulaProofFallback({
  isThreeVariable,
}: {
  isThreeVariable: boolean
}) {
  if (isThreeVariable) {
    return (
      <div className="space-y-3">
        <p className="font-medium text-slate-800">三元 AM-GM 的均衡化证明：</p>
        <KaTeX math="AM \\ge GM" display />
        <KaTeX math="\\frac{a+b+c}{3} \\ge \\sqrt[3]{abc}" display />
      </div>
    )
  }

  return (
    <div className="space-y-3">
      <p className="font-medium text-slate-800">几何图中设垂线长度为 h，相似三角形给出：</p>
      <KaTeX math="h^2 = ab" display />
      <KaTeX math="h = \\sqrt{ab}" display />
      <p className="font-medium text-slate-800">代数形式也可从显然非负的平方开始：</p>
      <KaTeX math="(\\sqrt{a} - \\sqrt{b})^2 \\ge 0" display />
      <KaTeX math="a - 2\\sqrt{ab} + b \\ge 0" display />
      <KaTeX math="a + b \\ge 2\\sqrt{ab}" display />
      <KaTeX math="\\frac{a+b}{2} \\ge \\sqrt{ab}" display />
    </div>
  )
}

function drawTwoVariableCircle(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  a: number,
  b: number,
  AM: number,
  GM: number,
  showGuideLines: boolean,
  proofPlaying: boolean
) {
  const padding = 40
  const centerX = width / 2
  const centerY = height / 2 + 15
  const maxDimension = Math.min(width - padding * 2, height - padding * 2)
  const scale = maxDimension / (a + b + 4)
  const diameter = (a + b) * scale
  const radius = diameter / 2

  ctx.fillStyle = "#0f172a"
  ctx.fillRect(0, 0, width, height)

  const gradient = ctx.createLinearGradient(0, 0, width, height)
  gradient.addColorStop(0, "#fbfcff")
  gradient.addColorStop(1, "#eef2ff")
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, width, height)

  ctx.strokeStyle = "#475569"
  ctx.lineWidth = 1
  for (let i = 0; i < 6; i++) {
    const pos = padding + (width - padding * 2) * i / 5
    ctx.beginPath()
    ctx.moveTo(pos, padding)
    ctx.lineTo(pos, height - padding)
    ctx.stroke()
  }
  for (let i = 0; i < 5; i++) {
    const pos = padding + (height - padding * 2) * i / 4
    ctx.beginPath()
    ctx.moveTo(padding, pos)
    ctx.lineTo(width - padding, pos)
    ctx.stroke()
  }

  ctx.strokeStyle = "#94a3b8"
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(centerX - diameter / 2 - 25, centerY)
  ctx.lineTo(centerX + diameter / 2 + 25, centerY)
  ctx.stroke()

  ctx.fillStyle = "#94a3b8"
  ctx.font = "bold 14px 'Segoe UI', sans-serif"
  ctx.textAlign = "center"
  ctx.fillText("a", centerX - diameter / 2 - 25, centerY + 25)
  ctx.fillText("b", centerX + diameter / 2 + 25, centerY + 25)
  ctx.fillText(`${a}`, centerX - diameter / 2 - 25, centerY + 42)
  ctx.fillText(`${b}`, centerX + diameter / 2 + 25, centerY + 42)

  const splitX = centerX - radius + a * scale
  ctx.strokeStyle = "#94a3b8"
  ctx.setLineDash([6, 4])
  ctx.lineWidth = 1.5
  ctx.beginPath()
  ctx.moveTo(splitX, centerY - 45)
  ctx.lineTo(splitX, centerY + 45)
  ctx.stroke()
  ctx.setLineDash([])

  const arcGradient = ctx.createLinearGradient(
    centerX - radius, centerY,
    centerX + radius, centerY
  )
  arcGradient.addColorStop(0, "#1d4ed8")
  arcGradient.addColorStop(0.5, "#3b82f6")
  arcGradient.addColorStop(1, "#60a5fa")
  ctx.strokeStyle = arcGradient
  ctx.lineWidth = 4
  ctx.lineCap = "round"
  ctx.beginPath()
  ctx.arc(centerX, centerY, radius, Math.PI, 0)
  ctx.stroke()

  const radiusGradient = ctx.createLinearGradient(
    centerX, centerY,
    centerX, centerY - radius
  )
  radiusGradient.addColorStop(0, "#0891b2")
  radiusGradient.addColorStop(1, "#22d3ee")
  ctx.strokeStyle = radiusGradient
  ctx.lineWidth = 3
  ctx.beginPath()
  ctx.moveTo(centerX, centerY)
  ctx.lineTo(centerX, centerY - radius)
  ctx.stroke()

  ctx.fillStyle = "#22d3ee"
  ctx.font = "bold 14px 'Segoe UI', sans-serif"
  ctx.textAlign = "left"
  // Offset AM label right when split is close to center (a≈b)
  const amLabelDx = Math.abs(splitX - centerX) < 60 ? 60 : 10
  ctx.fillText(`AM = ${AM.toFixed(1)}`, centerX + amLabelDx, centerY - radius / 2 + 5)

  const gmHeight = GM * scale
  const gmGradient = ctx.createLinearGradient(
    splitX, centerY,
    splitX, centerY - gmHeight
  )
  gmGradient.addColorStop(0, "#7c3aed")
  gmGradient.addColorStop(1, "#a855f7")
  ctx.strokeStyle = gmGradient
  ctx.lineWidth = 3
  ctx.beginPath()
  ctx.moveTo(splitX, centerY)
  ctx.lineTo(splitX, centerY - gmHeight)
  ctx.stroke()

  ctx.fillStyle = "#a855f7"
  ctx.font = "bold 14px 'Segoe UI', sans-serif"
  // Offset GM label left when split is close to center (a≈b) to avoid AM label
  const gmLabelDx = Math.abs(splitX - centerX) < 60 ? -120 : 10
  ctx.fillText(`GM = ${GM.toFixed(1)}`, splitX + gmLabelDx, centerY - gmHeight / 2 + 5)

  ctx.fillStyle = "#0f172a"
  ctx.beginPath()
  ctx.arc(centerX, centerY - radius, 6, 0, Math.PI * 2)
  ctx.fill()
  ctx.beginPath()
  ctx.arc(splitX, centerY - gmHeight, 6, 0, Math.PI * 2)
  ctx.fill()
  ctx.beginPath()
  ctx.arc(splitX, centerY, 5, 0, Math.PI * 2)
  ctx.fill()

  ctx.strokeStyle = "#06b6d4"
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.arc(centerX, centerY, radius, -Math.PI / 6, -Math.PI / 3)
  ctx.stroke()
  ctx.fillStyle = "#06b6d4"
  ctx.font = "12px 'Segoe UI', sans-serif"
  ctx.textAlign = "center"
  ctx.fillText("半圆", centerX + radius * 0.6, centerY - radius * 0.8)

  if (showGuideLines) {
    ctx.strokeStyle = "#2563eb"
    ctx.setLineDash([4, 6])
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.moveTo(centerX - radius, centerY - radius)
    ctx.lineTo(centerX + radius, centerY - radius)
    ctx.moveTo(centerX - radius, centerY - gmHeight)
    ctx.lineTo(centerX + radius, centerY - gmHeight)
    ctx.stroke()
    ctx.setLineDash([])
    ctx.fillStyle = "#2563eb"
    ctx.font = "12px 'Segoe UI', sans-serif"
    ctx.textAlign = "right"
    ctx.fillText("AM", centerX - radius - 6, centerY - radius + 4)
    ctx.fillText("GM", centerX - radius - 6, centerY - gmHeight + 4)
    ctx.textAlign = "start"
  }

  if (proofPlaying) {
    ctx.fillStyle = "#047857"
    ctx.font = "bold 13px 'Segoe UI', sans-serif"
    ctx.textAlign = "left"
    ctx.fillText("证明：半径 AM 不小于弦高 GM", padding, padding - 14)
  }

  ctx.fillStyle = "#475569"
  ctx.font = "13px 'Segoe UI', sans-serif"
  ctx.textAlign = "center"
  ctx.fillText(`直径 = ${a} + ${b} = ${a + b}`, centerX, height - 30)
  ctx.fillText(`半径 = AM = ${AM.toFixed(1)}`, centerX, height - 12)
}

function drawThreeVariableChart(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  a: number,
  b: number,
  c: number,
  AM: number,
  GM: number,
  showGuideLines: boolean,
  proofPlaying: boolean
) {
  const padding = 50
  const values = [a, b, c]
  const labels = ["a", "b", "c"]
  const colors = ["#3b82f6", "#8b5cf6", "#06b6d4"]
  const maxValue = Math.max(...values, AM, GM)

  ctx.fillStyle = "#0f172a"
  ctx.fillRect(0, 0, width, height)

  const barWidth = Math.min(60, (width - padding * 2) / 5)
  const gap = Math.min(40, (width - padding * 2 - barWidth * 4) / 3)
  const startX = width / 2 - (barWidth * 4 + gap * 3) / 2
  const baseY = height - 60
  const chartHeight = height - padding - 80

  values.forEach((value, index) => {
    const barHeight = (value / maxValue) * chartHeight
    const x = startX + index * (barWidth + gap)
    const gradient = ctx.createLinearGradient(x, baseY - barHeight, x, baseY)
    gradient.addColorStop(0, colors[index])
    gradient.addColorStop(1, adjustColor(colors[index], -30))
    ctx.fillStyle = gradient
    ctx.beginPath()
    roundRect(ctx, x, baseY - barHeight, barWidth, barHeight, [8, 8, 0, 0])
    ctx.fill()

    ctx.strokeStyle = colors[index]
    ctx.lineWidth = 2
    ctx.stroke()

    ctx.fillStyle = "#e2e8f0"
    ctx.font = "bold 14px 'Segoe UI', sans-serif"
    ctx.textAlign = "center"
    ctx.fillText(labels[index], x + barWidth / 2, baseY + 22)
    ctx.fillText(`${value}`, x + barWidth / 2, baseY + 38)
  })

  const amX = startX + 3 * (barWidth + gap)
  const amHeight = (AM / maxValue) * chartHeight
  const amGradient = ctx.createLinearGradient(amX, baseY - amHeight, amX, baseY)
  amGradient.addColorStop(0, "#22c55e")
  amGradient.addColorStop(1, "#16a34a")
  ctx.fillStyle = amGradient
  ctx.beginPath()
  roundRect(ctx, amX, baseY - amHeight, barWidth, amHeight, [8, 8, 0, 0])
  ctx.fill()
  ctx.strokeStyle = "#22c55e"
  ctx.lineWidth = 2
  ctx.stroke()
  ctx.fillStyle = "#e2e8f0"
  ctx.font = "bold 14px 'Segoe UI', sans-serif"
  ctx.textAlign = "center"
  ctx.fillText("AM", amX + barWidth / 2, baseY + 22)
  ctx.fillText(`${AM.toFixed(1)}`, amX + barWidth / 2, baseY + 38)

  const gmY = baseY - (GM / maxValue) * chartHeight
  const gmGradient = ctx.createLinearGradient(startX - 20, gmY, startX + barWidth * 4 + gap * 3 + 20, gmY)
  gmGradient.addColorStop(0, "#f59e0b")
  gmGradient.addColorStop(0.5, "#fbbf24")
  gmGradient.addColorStop(1, "#f59e0b")
  ctx.strokeStyle = gmGradient
  ctx.lineWidth = 3
  ctx.setLineDash([8, 4])
  ctx.beginPath()
  ctx.moveTo(startX - 20, gmY)
  ctx.lineTo(startX + barWidth * 4 + gap * 3 + 20, gmY)
  ctx.stroke()
  ctx.setLineDash([])

  ctx.fillStyle = "#fbbf24"
  ctx.font = "bold 14px 'Segoe UI', sans-serif"
  ctx.textAlign = "left"
  ctx.fillText(`GM = ${GM.toFixed(2)}`, startX - 15, gmY - 8)

  if (showGuideLines) {
    const amY = baseY - amHeight
    ctx.strokeStyle = "#2563eb"
    ctx.setLineDash([4, 6])
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.moveTo(startX - 20, amY)
    ctx.lineTo(startX + barWidth * 4 + gap * 3 + 20, amY)
    ctx.stroke()
    ctx.setLineDash([])
    ctx.fillStyle = "#2563eb"
    // Stagger AM label when close to GM
    const amGmGap3 = Math.abs(amY - gmY)
    const amLabelY3 = amGmGap3 < 24 ? amY + 16 : amY - 8
    ctx.fillText(`AM = ${AM.toFixed(2)}`, startX - 15, amLabelY3)
  }

  if (proofPlaying) {
    ctx.fillStyle = "#047857"
    ctx.font = "bold 13px 'Segoe UI', sans-serif"
    ctx.textAlign = "left"
    ctx.fillText("证明：平均柱高始终不低于几何平均线", padding, padding - 16)
  }
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, radii: number[]) {
  if (typeof ctx.roundRect === "function") {
    ctx.roundRect(x, y, w, h, radii)
  } else {
    const [tl, tr, br, bl] = radii
    ctx.moveTo(x + tl, y)
    ctx.lineTo(x + w - tr, y)
    ctx.arcTo(x + w, y, x + w, y + tr, tr)
    ctx.lineTo(x + w, y + h - br)
    ctx.arcTo(x + w, y + h, x + w - br, y + h, br)
    ctx.lineTo(x + bl, y + h)
    ctx.arcTo(x, y + h, x, y + h - bl, bl)
    ctx.lineTo(x, y + tl)
    ctx.arcTo(x, y, x + tl, y, tl)
    ctx.closePath()
  }
}

function adjustColor(color: string, amount: number): string {
  const hex = color.replace("#", "")
  const r = Math.max(0, Math.min(255, parseInt(hex.substring(0, 2), 16) + amount))
  const g = Math.max(0, Math.min(255, parseInt(hex.substring(2, 4), 16) + amount))
  const b = Math.max(0, Math.min(255, parseInt(hex.substring(4, 6), 16) + amount))
  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`
}

function Slider({
  label,
  value,
  onChange,
  className,
}: {
  label: string
  value: number
  onChange: (value: number) => void
  className: string
}) {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-slate-600">
        {label} = <span className="font-mono text-xl font-semibold text-blue-600">{value}</span>
      </label>
      <input
        type="range"
        min="1"
        max="25"
        aria-label={`调整 ${label} 的值`}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className={className}
      />
    </div>
  )
}
