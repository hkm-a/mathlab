"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import KaTeX from "@/components/ui/KaTeX"
import { useCanvasSize } from "@/hooks/useCanvasSize"

function drawArrow(ctx: CanvasRenderingContext2D, from: { x: number; y: number }, to: { x: number; y: number }, color: string) {
  const angle = Math.atan2(to.y - from.y, to.x - from.x)
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.lineWidth = 4
  ctx.beginPath()
  ctx.moveTo(from.x, from.y)
  ctx.lineTo(to.x, to.y)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(to.x, to.y)
  ctx.lineTo(to.x - 14 * Math.cos(angle - Math.PI / 7), to.y - 14 * Math.sin(angle - Math.PI / 7))
  ctx.lineTo(to.x - 14 * Math.cos(angle + Math.PI / 7), to.y - 14 * Math.sin(angle + Math.PI / 7))
  ctx.closePath()
  ctx.fill()
}

export default function CauchyViz() {
  const [angleDegree, setAngleDegree] = useState(45)
  const [proofPlaying, setProofPlaying] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { containerRef, width, height, dpr } = useCanvasSize({ maxWidth: 720, aspectRatio: 16 / 10 })
  const angle = (angleDegree / 180) * Math.PI
  const vectorALength = 2.7
  const vectorBLength = 2.25
  const dot = vectorALength * vectorBLength * Math.cos(angle)
  const projection = vectorBLength * Math.cos(angle)
  const product = vectorALength * vectorBLength
  const formula = useMemo(() => "|\\mathbf a\\cdot\\mathbf b| \\leq |\\mathbf a|\\,|\\mathbf b|", [])

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
    gradient.addColorStop(0, "#111827")
    gradient.addColorStop(1, "#172554")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)

    const origin = { x: width * 0.38, y: height * 0.62 }
    const scale = Math.min(width, height) * 0.16
    const aEnd = { x: origin.x + vectorALength * scale, y: origin.y }
    const bEnd = { x: origin.x + vectorBLength * Math.cos(angle) * scale, y: origin.y - vectorBLength * Math.sin(angle) * scale }
    const projectionEnd = { x: origin.x + projection * scale, y: origin.y }

    ctx.strokeStyle = "rgba(226,232,240,0.14)"
    ctx.lineWidth = 1
    for (let x = 0; x < width; x += 40) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, height)
      ctx.stroke()
    }
    for (let y = 0; y < height; y += 40) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(width, y)
      ctx.stroke()
    }

    ctx.strokeStyle = "rgba(255,255,255,0.35)"
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(40, origin.y)
    ctx.lineTo(width - 40, origin.y)
    ctx.moveTo(origin.x, height - 32)
    ctx.lineTo(origin.x, 32)
    ctx.stroke()

    drawArrow(ctx, origin, aEnd, "#38bdf8")
    drawArrow(ctx, origin, bEnd, "#fbbf24")

    ctx.strokeStyle = "#fb7185"
    ctx.setLineDash([8, 7])
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(bEnd.x, bEnd.y)
    ctx.lineTo(projectionEnd.x, projectionEnd.y)
    ctx.stroke()
    ctx.setLineDash([])

    drawArrow(ctx, origin, projectionEnd, "#34d399")

    ctx.strokeStyle = "rgba(255,255,255,0.8)"
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.arc(origin.x, origin.y, 42, -angle, 0, true)
    ctx.stroke()

    ctx.font = "16px Microsoft YaHei, sans-serif"

    // "向量 a" label — above endpoint
    ctx.fillStyle = "#bae6fd"
    ctx.textAlign = "center"
    ctx.fillText("向量 a", aEnd.x, aEnd.y - 18)

    // "向量 b" label — above endpoint, offset left at small angles
    ctx.fillStyle = "#fde68a"
    ctx.textAlign = "center"
    const bLabelX = angleDegree < 30 ? bEnd.x - 20 : bEnd.x
    const bLabelY = bEnd.y - 18
    ctx.fillText("向量 b", bLabelX, bLabelY)

    // "投影长度" label — below baseline, centered under projection segment
    ctx.fillStyle = "#bbf7d0"
    ctx.textAlign = "center"
    const projMidX = (origin.x + projectionEnd.x) / 2
    ctx.fillText("投影长度", projMidX, origin.y + 28)

    // "垂线表示" label — below the dashed perpendicular line
    ctx.fillStyle = "#fecdd3"
    ctx.textAlign = "center"
    const descX = (bEnd.x + projectionEnd.x) / 2
    const descY = (bEnd.y + projectionEnd.y) / 2 + 18
    ctx.fillText("垂线表示投影", Math.max(100, Math.min(descX, width - 100)), descY)

    // "夹角" label — place inside arc region, offset up at small angles
    ctx.fillStyle = "#ffffff"
    ctx.textAlign = "left"
    const arcLabelR = 58
    const arcMidAngle = -angle / 2
    const arcLabelX = origin.x + arcLabelR * Math.cos(arcMidAngle) + 8
    const arcLabelY = origin.y + arcLabelR * Math.sin(arcMidAngle) - (angleDegree < 30 ? 14 : 4)
    ctx.fillText(`夹角 ${angleDegree}°`, arcLabelX, arcLabelY)
    ctx.textAlign = "start"
  }, [angle, angleDegree, dpr, height, projection, width])

  return (
    <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/70">
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500">柯西向量投影实验室</p>
            <h3 className="text-xl font-semibold text-slate-950">调整夹角，观察点积为什么不会超过长度乘积</h3>
            <p className="text-sm leading-6 text-slate-600">点积等于一个向量长度乘以另一个向量在它方向上的投影长度；投影长度不可能超过原向量长度。</p>
          </div>
          <button
            type="button"
            onClick={() => setProofPlaying((v) => !v)}
            className={`shrink-0 rounded-full px-3 py-2 text-sm font-medium text-white transition ${proofPlaying ? "bg-emerald-600 hover:bg-emerald-700" : "bg-indigo-600 hover:bg-indigo-700"}`}
          >
            {proofPlaying ? "证明播放中" : "播放证明"}
          </button>
        </div>
      </div>

      {proofPlaying && (
        <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-4 text-sm text-indigo-950">
          <p className="mb-3 font-semibold">柯西不等式的投影证明：</p>
          <div className="space-y-2">
            <KaTeX math="\mathbf a\cdot\mathbf b = |\mathbf a|\,|\mathbf b|\cos\theta" display />
            <KaTeX math="|\cos\theta| \leq 1" display />
            <KaTeX math="|\mathbf a\cdot\mathbf b| \leq |\mathbf a|\,|\mathbf b|" display />
          </div>
        </div>
      )}

      <div ref={containerRef} className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-950">
        <canvas ref={canvasRef} role="img" aria-label="柯西不等式向量投影可视化" className="block max-w-full" />
      </div>

      <div className="grid gap-3 rounded-2xl bg-slate-50 p-3 text-sm text-slate-600 sm:grid-cols-2">
        <p><span className="font-semibold text-sky-600">蓝色向量</span>：作为投影方向，长度为 |a|。</p>
        <p><span className="font-semibold text-emerald-600">绿色投影</span>：投影长度始终不超过 |b|。</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
        <label className="space-y-2 text-sm font-medium text-slate-700">
          <span>调整夹角：θ = {angleDegree}°</span>
          <input
            aria-label="调整向量夹角"
            type="range"
            min="0"
            max="180"
            value={angleDegree}
            onChange={(event) => setAngleDegree(Number(event.target.value))}
            className="w-full accent-indigo-500"
          />
        </label>
        <div className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-600">
          <p className="font-medium text-slate-900">点积不会超过长度乘积</p>
          <p>当前 |a·b| ≈ {Math.abs(dot).toFixed(2)}，而 |a||b| = {product.toFixed(2)}。</p>
        </div>
      </div>

      <div className="rounded-2xl bg-indigo-50 p-4 text-center text-indigo-950">
        <p className="mb-2 text-sm font-medium">|a·b| ≤ |a||b|</p>
        <KaTeX math={formula} display />
      </div>
    </div>
  )
}
