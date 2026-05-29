"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import KaTeX from "@/components/ui/KaTeX"
import { useCanvasSize } from "@/hooks/useCanvasSize"

const range = { xMin: -2.5, xMax: 2.5, yMin: -0.5, yMax: 6.5 }

function f(x: number) {
  return x * x + 0.4
}

function toCanvas(x: number, y: number, width: number, height: number) {
  const px = ((x - range.xMin) / (range.xMax - range.xMin)) * width
  const py = height - ((y - range.yMin) / (range.yMax - range.yMin)) * height
  return { x: px, y: py }
}

export default function JensenViz() {
  const [weight, setWeight] = useState(50)
  const [proofPlaying, setProofPlaying] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { containerRef, width, height, dpr } = useCanvasSize({ maxWidth: 720, aspectRatio: 16 / 10 })
  const t = weight / 100
  const x1 = -1.7
  const x2 = 1.9
  const meanX = (1 - t) * x1 + t * x2
  const chordY = (1 - t) * f(x1) + t * f(x2)
  const curveY = f(meanX)
  const gap = chordY - curveY
  const formula = useMemo(() => "f((1-t)x_1+t x_2) \\leq (1-t)f(x_1)+t f(x_2)", [])

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
    gradient.addColorStop(1, "#1e1b4b")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)

    ctx.strokeStyle = "rgba(226,232,240,0.16)"
    ctx.lineWidth = 1
    for (let x = Math.ceil(range.xMin); x <= range.xMax; x++) {
      const p = toCanvas(x, 0, width, height)
      ctx.beginPath()
      ctx.moveTo(p.x, 0)
      ctx.lineTo(p.x, height)
      ctx.stroke()
    }
    for (let y = 0; y <= range.yMax; y++) {
      const p = toCanvas(0, y, width, height)
      ctx.beginPath()
      ctx.moveTo(0, p.y)
      ctx.lineTo(width, p.y)
      ctx.stroke()
    }

    const axisX = toCanvas(0, 0, width, height)
    const axisY = toCanvas(0, 0, width, height)
    ctx.strokeStyle = "rgba(255,255,255,0.34)"
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.moveTo(0, axisX.y)
    ctx.lineTo(width, axisX.y)
    ctx.moveTo(axisY.x, 0)
    ctx.lineTo(axisY.x, height)
    ctx.stroke()

    ctx.strokeStyle = "#38bdf8"
    ctx.lineWidth = 3
    ctx.beginPath()
    for (let i = 0; i <= 220; i++) {
      const x = range.xMin + (i / 220) * (range.xMax - range.xMin)
      const p = toCanvas(x, f(x), width, height)
      if (i === 0) ctx.moveTo(p.x, p.y)
      else ctx.lineTo(p.x, p.y)
    }
    ctx.stroke()

    const p1 = toCanvas(x1, f(x1), width, height)
    const p2 = toCanvas(x2, f(x2), width, height)
    const pmCurve = toCanvas(meanX, curveY, width, height)
    const pmChord = toCanvas(meanX, chordY, width, height)

    ctx.strokeStyle = "#fbbf24"
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(p1.x, p1.y)
    ctx.lineTo(p2.x, p2.y)
    ctx.stroke()

    ctx.strokeStyle = "#f97316"
    ctx.setLineDash([8, 8])
    ctx.beginPath()
    ctx.moveTo(pmCurve.x, pmCurve.y)
    ctx.lineTo(pmChord.x, pmChord.y)
    ctx.stroke()
    ctx.setLineDash([])

    for (const [point, color] of [[p1, "#fbbf24"], [p2, "#fbbf24"], [pmCurve, "#34d399"], [pmChord, "#fb7185"]] as const) {
      ctx.beginPath()
      ctx.fillStyle = color
      ctx.arc(point.x, point.y, 6, 0, Math.PI * 2)
      ctx.fill()
    }

    ctx.font = "16px Microsoft YaHei, sans-serif"
    ctx.fillStyle = "#e0f2fe"
    ctx.textAlign = "left"
    ctx.fillText("凸函数 f(x)=x²+0.4", 24, 30)

    // Chord description — position at midpoint of chord, above it
    ctx.fillStyle = "#fde68a"
    const chordMidX = (p1.x + p2.x) / 2
    const chordMidY = (p1.y + p2.y) / 2
    ctx.fillText("弦线在函数图像上方", Math.min(chordMidX - 80, width - 190), Math.max(28, chordMidY - 22))

    // f(平均值) label — below curve point
    ctx.fillStyle = "#bbf7d0"
    const curveLabelY = pmCurve.y + 20
    ctx.fillText("f(平均值)", pmCurve.x + 12, curveLabelY)

    // 平均函数值 label — above chord point, with gap check
    ctx.fillStyle = "#fecdd3"
    const labelGap = pmChord.y - curveLabelY
    if (labelGap < 36) {
      // Labels too close — put chord label above chord point
      ctx.fillText("平均函数值", pmChord.x + 12, pmChord.y - 14)
    } else {
      ctx.fillText("平均函数值", pmChord.x + 12, pmChord.y - 10)
    }
    ctx.textAlign = "start"
  }, [chordY, curveY, dpr, height, meanX, width, x1, x2])

  return (
    <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/70">
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-500">Jensen 凸函数实验室</p>
            <h3 className="text-xl font-semibold text-slate-950">拖动平均点，观察{'“'}函数值的平均{'”'}为什么更高</h3>
            <p className="text-sm leading-6 text-slate-600">黄色弦线连接两个端点。橙色虚线表示同一个平均点处，弦线高度与函数图像高度的差距。</p>
          </div>
          <button
            type="button"
            onClick={() => setProofPlaying((v) => !v)}
            className={`shrink-0 rounded-full px-3 py-2 text-sm font-medium text-white transition ${proofPlaying ? "bg-emerald-600 hover:bg-emerald-700" : "bg-sky-600 hover:bg-sky-700"}`}
          >
            {proofPlaying ? "证明播放中" : "播放证明"}
          </button>
        </div>
      </div>

      {proofPlaying && (
        <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4 text-sm text-sky-950">
          <p className="mb-3 font-semibold">Jensen 不等式的弦线证明：</p>
          <div className="space-y-2">
            <KaTeX math="x_t=(1-t)x_1+t x_2" display />
            <KaTeX math="f(x_t) \leq (1-t)f(x_1)+t f(x_2)" display />
            <p className="leading-6">图中黄色弦线位于凸函数图像上方，所以同一横坐标处的函数值不超过弦线高度。</p>
          </div>
        </div>
      )}

      <div ref={containerRef} className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-950">
        <canvas ref={canvasRef} role="img" aria-label="Jensen 不等式凸函数可视化" className="block max-w-full" />
      </div>

      <div className="grid gap-3 rounded-2xl bg-slate-50 p-3 text-sm text-slate-600 sm:grid-cols-2">
        <p><span className="font-semibold text-amber-600">黄色弦线</span>：弦线在函数图像上方，对应平均函数值。</p>
        <p><span className="font-semibold text-emerald-600">绿色点</span>：平均点处的函数值，也就是 f(平均值)。</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_260px]">
        <label className="space-y-2 text-sm font-medium text-slate-700">
          <span>拖动平均点：t = {t.toFixed(2)}</span>
          <input
            aria-label="调整平均点"
            type="range"
            min="5"
            max="95"
            value={weight}
            onChange={(event) => setWeight(Number(event.target.value))}
            className="w-full accent-sky-500"
          />
        </label>
        <div className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-600">
          <p className="font-medium text-slate-900">f(平均值) ≤ 平均函数值</p>
          <p>当前差距约为 {gap.toFixed(2)}，等号只在两点重合或函数退化为直线时出现。</p>
        </div>
      </div>

      <div className="rounded-2xl bg-sky-50 p-4 text-center text-sky-950">
        <KaTeX math={formula} display />
      </div>
    </div>
  )
}
