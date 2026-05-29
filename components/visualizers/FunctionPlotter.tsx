"use client"

import React, { useEffect, useMemo, useRef } from "react"
import {
  drawFunction,
  drawGrid,
  evaluateFunction,
  toCanvasCoords,
  type PlotRange,
} from "@/lib/math/plotting"
import { useCanvasSize } from "@/hooks/useCanvasSize"

interface FunctionPlotterProps {
  functions: Array<{
    fn: (x: number) => number
    color?: string
    label?: string
    discrete?: boolean
  }>
  range: PlotRange
  width?: number
  height?: number
}

export default function FunctionPlotter({
  functions,
  range,
  width = 600,
  height = 400,
}: FunctionPlotterProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { containerRef, width: canvasWidth, height: canvasHeight, dpr } = useCanvasSize({
    maxWidth: width,
    aspectRatio: width / height,
  })
  const functionsKey = useMemo(
    () => functions.map(({ color, label }) => `${color ?? "#3b82f6"}:${label ?? ""}`).join("|"),
    [functions]
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = Math.round(canvasWidth * dpr)
    canvas.height = Math.round(canvasHeight * dpr)
    canvas.style.width = `${canvasWidth}px`
    canvas.style.height = `${canvasHeight}px`

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.fillStyle = "#1e293b"
    ctx.fillRect(0, 0, canvasWidth, canvasHeight)

    drawGrid(ctx, canvasWidth, canvasHeight, range)

    functions.forEach(({ fn, color = "#3b82f6", discrete }) => {
      if (discrete) {
        const points = evaluateFunction(fn, range, Math.round(range.xMax - range.xMin))
        ctx.fillStyle = color
        points.forEach((pt) => {
          const cp = toCanvasCoords(pt, canvasWidth, canvasHeight, range)
          ctx.beginPath()
          ctx.arc(cp.x, cp.y, 4, 0, Math.PI * 2)
          ctx.fill()
        })
      } else {
        drawFunction(ctx, fn, range, canvasWidth, canvasHeight, color)
      }
    })
  }, [canvasWidth, canvasHeight, dpr, functions, functionsKey, range])

  return (
    <div ref={containerRef} className="bg-surface rounded-lg overflow-hidden border border-surface/50 w-full">
      <canvas ref={canvasRef} role="img" aria-label="函数图像" className="block max-w-full" />
    </div>
  )
}
