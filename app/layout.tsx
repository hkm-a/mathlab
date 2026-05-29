import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "MathLab - 书籍电子化学习台",
  description: "将《更高更妙的高中数学思想与方法》整理成可检索、可练习、可阅读的数字学习版本",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
