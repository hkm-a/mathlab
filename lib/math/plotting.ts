import type { PlotRange, Point } from "./types"

export type { PlotRange, Point } from "./types"

function clipY(y: number, range: PlotRange): number {
  return Math.min(Math.max(y, range.yMin), range.yMax)
}

export function evaluateFunction(
  fn: (x: number) => number,
  range: PlotRange,
  samples: number = 200
): Point[] {
  const points: Point[] = []
  const step = (range.xMax - range.xMin) / samples

  for (let i = 0; i <= samples; i++) {
    const x = range.xMin + i * step
    const y = fn(x)

    if (Number.isFinite(y)) {
      points.push({ x, y: clipY(y, range) })
    }
  }

  return points
}

export function drawGrid(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  range: PlotRange
) {
  ctx.strokeStyle = "#334155"
  ctx.lineWidth = 1

  const xStep = Math.pow(10, Math.floor(Math.log10((range.xMax - range.xMin) / 5)))
  const yStep = Math.pow(10, Math.floor(Math.log10((range.yMax - range.yMin) / 5)))

  for (let x = Math.ceil(range.xMin / xStep) * xStep; x <= range.xMax; x += xStep) {
    const px = ((x - range.xMin) / (range.xMax - range.xMin)) * width
    ctx.beginPath()
    ctx.moveTo(px, 0)
    ctx.lineTo(px, height)
    ctx.stroke()
  }

  for (let y = Math.ceil(range.yMin / yStep) * yStep; y <= range.yMax; y += yStep) {
    const py = height - ((y - range.yMin) / (range.yMax - range.yMin)) * height
    ctx.beginPath()
    ctx.moveTo(0, py)
    ctx.lineTo(width, py)
    ctx.stroke()
  }

  ctx.strokeStyle = "#64748b"
  ctx.lineWidth = 2

  if (range.yMin <= 0 && range.yMax >= 0) {
    const axisY = height - ((0 - range.yMin) / (range.yMax - range.yMin)) * height
    ctx.beginPath()
    ctx.moveTo(0, axisY)
    ctx.lineTo(width, axisY)
    ctx.stroke()
  }

  if (range.xMin <= 0 && range.xMax >= 0) {
    const axisX = ((0 - range.xMin) / (range.xMax - range.xMin)) * width
    ctx.beginPath()
    ctx.moveTo(axisX, 0)
    ctx.lineTo(axisX, height)
    ctx.stroke()
  }
}

export function toCanvasCoords(
  point: Point,
  width: number,
  height: number,
  range: PlotRange
): Point {
  return {
    x: ((point.x - range.xMin) / (range.xMax - range.xMin)) * width,
    y: height - ((point.y - range.yMin) / (range.yMax - range.yMin)) * height,
  }
}

export function drawFunction(
  ctx: CanvasRenderingContext2D,
  fn: (x: number) => number,
  range: PlotRange,
  width: number,
  height: number,
  color: string = "#3b82f6",
  samples: number = 200
) {
  const points = evaluateFunction(fn, range, samples)
  if (points.length < 2) return

  ctx.strokeStyle = color
  ctx.lineWidth = 2

  const ySpan = range.yMax - range.yMin
  const jumpThreshold = ySpan * 0.5

  let inPath = false
  for (let i = 0; i < points.length; i++) {
    const p = toCanvasCoords(points[i], width, height, range)
    if (!inPath) {
      ctx.beginPath()
      ctx.moveTo(p.x, p.y)
      inPath = true
    } else {
      const prevY = fn(points[i - 1].x)
      const currY = fn(points[i].x)
      if (Number.isFinite(prevY) && Number.isFinite(currY) && Math.abs(currY - prevY) > jumpThreshold) {
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(p.x, p.y)
      } else {
        ctx.lineTo(p.x, p.y)
      }
    }
  }
  ctx.stroke()
}
