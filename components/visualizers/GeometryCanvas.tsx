"use client"

import React, { useEffect, useRef } from "react"
import { useCanvasSize } from "@/hooks/useCanvasSize"

interface GeometryCanvasProps {
  width?: number
  height?: number
  onDraw?: (ctx: CanvasRenderingContext2D, size: { width: number; height: number }) => void
}

export default function GeometryCanvas({
  width = 500,
  height = 400,
  onDraw,
}: GeometryCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const onDrawRef = useRef(onDraw)
  const { containerRef, width: canvasWidth, height: canvasHeight, dpr } = useCanvasSize({
    maxWidth: width,
    aspectRatio: width / height,
  })

  onDrawRef.current = onDraw

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

    ctx.strokeStyle = "#334155"
    ctx.lineWidth = 1
    for (let x = 0; x <= canvasWidth; x += 50) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, canvasHeight)
      ctx.stroke()
    }
    for (let y = 0; y <= canvasHeight; y += 50) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(canvasWidth, y)
      ctx.stroke()
    }

    ctx.strokeStyle = "#64748b"
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(0, canvasHeight / 2)
    ctx.lineTo(canvasWidth, canvasHeight / 2)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(canvasWidth / 2, 0)
    ctx.lineTo(canvasWidth / 2, canvasHeight)
    ctx.stroke()

    onDrawRef.current?.(ctx, { width: canvasWidth, height: canvasHeight })
  }, [canvasWidth, canvasHeight, dpr])

  return (
    <div ref={containerRef} className="bg-surface rounded-lg overflow-hidden border border-surface/50 w-full">
      <canvas ref={canvasRef} role="img" aria-label="几何图形可视化" className="block max-w-full" />
    </div>
  )
}
