import React from "react"

interface CardProps {
  children: React.ReactNode
  className?: string
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`rounded-3xl border border-slate-200/80 bg-white/95 p-6 shadow-sm shadow-slate-200/60 ring-1 ring-white/70 ${className}`}>
      {children}
    </div>
  )
}
