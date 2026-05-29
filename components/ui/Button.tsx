"use client"

import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"

  const variants = {
    primary: "bg-slate-950 text-white shadow-sm shadow-slate-300/60 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-md",
    secondary: "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-sm shadow-blue-200/70 hover:-translate-y-0.5 hover:from-blue-700 hover:to-violet-700 hover:shadow-md",
    outline: "border border-slate-200 bg-white text-slate-700 shadow-sm shadow-slate-200/60 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700",
  }

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
