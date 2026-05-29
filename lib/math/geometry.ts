import type { Circle, Line, Point } from "./types"

export type { Circle, Line, Point } from "./types"

export function distance(p1: Point, p2: Point): number {
  return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2)
}

export function midpoint(p1: Point, p2: Point): Point {
  return {
    x: (p1.x + p2.x) / 2,
    y: (p1.y + p2.y) / 2,
  }
}

export function drawLine(
  ctx: CanvasRenderingContext2D,
  line: Line,
  color: string = "#fff",
  width: number = 2
) {
  ctx.strokeStyle = color
  ctx.lineWidth = width
  ctx.beginPath()
  ctx.moveTo(line.p1.x, line.p1.y)
  ctx.lineTo(line.p2.x, line.p2.y)
  ctx.stroke()
}

export function drawCircle(
  ctx: CanvasRenderingContext2D,
  circle: Circle,
  color: string = "#fff",
  fill?: string
) {
  ctx.strokeStyle = color
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.arc(circle.center.x, circle.center.y, circle.radius, 0, Math.PI * 2)
  ctx.stroke()
  if (fill) {
    ctx.fillStyle = fill
    ctx.fill()
  }
}

export function drawPoint(
  ctx: CanvasRenderingContext2D,
  point: Point,
  color: string = "#fff",
  radius: number = 4
) {
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.arc(point.x, point.y, radius, 0, Math.PI * 2)
  ctx.fill()
}
