"use client"

import FunctionPlotter from "@/components/visualizers/FunctionPlotter"
import GeometryCanvas from "@/components/visualizers/GeometryCanvas"
import CauchyViz from "@/components/visualizers/CauchyViz"
import InequalityViz from "@/components/visualizers/InequalityViz"
import JensenViz from "@/components/visualizers/JensenViz"
import ThreeAmGmViz from "@/components/visualizers/ThreeAmGmViz"
import type { FunctionState, GeometryState, VisualizationConfig } from "@/lib/data/types"

interface ProblemVisualizationProps {
  visualization: VisualizationConfig
}

type InequalityVisualizationConfig = Extract<VisualizationConfig, { type: "inequality" }>

function assertNever(value: never): never {
  throw new Error(`缺少可视化渲染器：${JSON.stringify(value)}`)
}

function GeometryVisualization({ state }: { state: GeometryState }) {
  const points = state.points ?? []
  const lines = state.lines ?? []
  const circles = state.circles ?? []

  return (
    <>
      <p className="mb-4 text-sm text-slate-500">观察圆、切线与关键点的位置关系。</p>
      <GeometryCanvas
        onDraw={(ctx, size) => {
          const scale = Math.min(size.width / 10, size.height / 8)

          ctx.save()
          ctx.translate(size.width / 2, size.height / 2)
          ctx.scale(scale, -scale)

          circles.forEach((circle) => {
            ctx.save()
            ctx.scale(1, -1)
            ctx.beginPath()
            ctx.strokeStyle = "#3b82f6"
            ctx.lineWidth = 2 / scale
            ctx.arc(circle.center.x, -circle.center.y, circle.radius, 0, Math.PI * 2)
            ctx.stroke()
            ctx.restore()
          })

          lines.forEach((line) => {
            ctx.beginPath()
            ctx.strokeStyle = "#8b5cf6"
            ctx.lineWidth = 3 / scale
            ctx.moveTo(line.p1.x, line.p1.y)
            ctx.lineTo(line.p2.x, line.p2.y)
            ctx.stroke()
          })

          points.forEach((point) => {
            ctx.beginPath()
            ctx.fillStyle = "#06b6d4"
            ctx.arc(point.x, point.y, 5 / scale, 0, Math.PI * 2)
            ctx.fill()
          })

          ctx.restore()
        }}
      />
    </>
  )
}

const functionLibrary: Record<string, { fn: (x: number) => number; color: string; label: string; discrete?: boolean }> = {
  quadratic: { fn: (x) => x * x, color: "#3b82f6", label: "f(x)=x²" },
  cubic: { fn: (x) => x * x * x, color: "#8b5cf6", label: "f(x)=x³" },
  abs: { fn: (x) => Math.abs(x), color: "#06b6d4", label: "f(x)=|x|" },
  sqrt: { fn: (x) => Math.sqrt(x), color: "#22c55e", label: "f(x)=√x" },
  reciprocal: { fn: (x) => (x === 0 ? NaN : 1 / x), color: "#f59e0b", label: "f(x)=1/x" },
  linear: { fn: (x) => x, color: "#ec4899", label: "f(x)=x" },
  exp2mod7: { fn: (x) => (x >= 0 && Number.isInteger(x) ? ((2 ** x) % 7) : NaN), color: "#a855f7", label: "2ˣ mod 7", discrete: true },
  sequence: { fn: (x) => (x >= 0 && Number.isInteger(x) ? 2 * x + 1 : NaN), color: "#14b8a6", label: "aₙ=2n+1", discrete: true },
}

function FunctionVisualization({ state }: { state: FunctionState }) {
  const range = state.range ?? { xMin: -5, xMax: 5, yMin: -5, yMax: 25 }
  const entry = functionLibrary[state.functionKey ?? "quadratic"] ?? functionLibrary.quadratic

  return (
    <>
      <p className="mb-4 text-sm text-slate-500">观察函数图像与题设约束的关系。</p>
      <FunctionPlotter
        range={range}
        functions={[entry]}
      />
    </>
  )
}

function InequalityVisualization({ visualization }: { visualization: InequalityVisualizationConfig }) {
  const preset = visualization.preset

  switch (preset) {
    case "amgm-2":
      return (
        <>
          <p className="mb-4 text-sm text-slate-500">调整参数，观察算术平均与几何平均的关系：</p>
          <InequalityViz type="amgm-2" initialState={visualization.initialState} />
        </>
      )
    case "amgm-3":
      return <ThreeAmGmViz />
    case "cauchy":
      return <CauchyViz />
    case "jensen":
      return <JensenViz />
    default:
      return assertNever(preset)
  }
}

export default function ProblemVisualization({ visualization }: ProblemVisualizationProps) {
  switch (visualization.type) {
    case "inequality":
      return <InequalityVisualization visualization={visualization} />
    case "geometry":
      return <GeometryVisualization state={visualization.initialState} />
    case "function":
      return <FunctionVisualization state={visualization.initialState} />
    default:
      return assertNever(visualization)
  }
}
