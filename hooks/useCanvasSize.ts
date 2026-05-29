"use client"

import { useEffect, useRef, useState } from "react"

interface CanvasSizeOptions {
  maxWidth: number
  aspectRatio: number
}

export function useCanvasSize({ maxWidth, aspectRatio }: CanvasSizeOptions) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ width: maxWidth, height: Math.round(maxWidth / aspectRatio) })

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const updateSize = () => {
      const containerWidth = container.clientWidth || maxWidth
      const width = Math.min(containerWidth, maxWidth)
      setSize({ width, height: Math.round(width / aspectRatio) })
    }

    updateSize()

    const resizeObserver = new ResizeObserver(updateSize)
    resizeObserver.observe(container)

    return () => resizeObserver.disconnect()
  }, [aspectRatio, maxWidth])

  return { containerRef, ...size, dpr: typeof window === "undefined" ? 1 : window.devicePixelRatio || 1 }
}
