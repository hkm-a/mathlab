"use client"

import Image from "next/image"
import React from "react"
import katex from "katex"
import { splitContentBlocks } from "@/lib/data/content-format"
import "katex/dist/katex.min.css"

interface KaTeXProps {
  math: string
  display?: boolean
}

const mathDelimiterPattern = /(\$\$[\s\S]+?\$\$|\\\[[\s\S]+?\\\]|\\\([\s\S]+?\\\)|\$[^$\n]+\$)/g
const imagePattern = /!\[([^\]]*)\]\(images\/([^)]+)\)/g
const tablePattern = /<table>[\s\S]*?<\/table>/gi
const rowPattern = /<tr>([\s\S]*?)<\/tr>/gi
const cellPattern = /<t[dh]>([\s\S]*?)<\/t[dh]>/gi
const imageFileNamePattern = /^[a-zA-Z0-9._-]+\.(?:png|jpe?g|webp|gif)$/i

const structuredDisplayMarkers = ["（A）", "（B）", "(A)", "A.", "①", "②", "③", "④"]

function shouldRenderStructuredDisplay(content: string) {
  return (
    /\p{Script=Han}|[，。；：、？！]/u.test(content) ||
    content.includes("![") ||
    /<table>/i.test(content) ||
    structuredDisplayMarkers.some((marker) => content.includes(marker))
  )
}


function renderMath(math: string, displayMode: boolean) {
  return katex.renderToString(math, {
    throwOnError: false,
    displayMode,
  })
}

function parseDelimitedMath(part: string) {
  if (part.startsWith("$$") && part.endsWith("$$")) {
    return { source: part.slice(2, -2), displayMode: true }
  }
  if (part.startsWith("\\[") && part.endsWith("\\]")) {
    return { source: part.slice(2, -2), displayMode: true }
  }
  if (part.startsWith("\\(") && part.endsWith("\\)")) {
    return { source: part.slice(2, -2), displayMode: false }
  }
  return { source: part.slice(1, -1), displayMode: false }
}

function renderMathPart(part: string, key: string) {
  if (mathDelimiterPattern.test(part)) {
    mathDelimiterPattern.lastIndex = 0
    const { source, displayMode } = parseDelimitedMath(part)

    return (
      <span
        key={key}
        className={displayMode ? "block my-3" : undefined}
        dangerouslySetInnerHTML={{ __html: renderMath(source, displayMode) }}
      />
    )
  }
  mathDelimiterPattern.lastIndex = 0
  return <React.Fragment key={key}>{part.replace(/\\_/g, "_")}</React.Fragment>
}

function renderTextWithMath(content: string, baseKey: string) {
  const parts = content.split(mathDelimiterPattern)
  return parts.map((part, i) => {
    if (!part) return null
    return renderMathPart(part, `${baseKey}-m${i}`)
  })
}

interface TableCell {
  content: string
  isHeader: boolean
}

function decodeTableText(content: string) {
  return content
    .replace(/&amp;/g, "&")
    .replace(/&#x27;/g, "'")
    .trim()
}

function renderTable(table: string, baseKey: string) {
  const rows: TableCell[][] = Array.from(table.matchAll(rowPattern), (rowMatch) =>
    Array.from(rowMatch[1].matchAll(cellPattern), (cellMatch) => ({
      content: decodeTableText(cellMatch[1]),
      isHeader: cellMatch[0].startsWith("<th>"),
    })),
  )

  return (
    <div key={baseKey} className="my-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white/80 shadow-sm">
      <table className="min-w-full border-collapse text-sm text-slate-700">
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`${baseKey}-r${rowIndex}`} className={rowIndex === 0 ? "bg-slate-50 font-semibold text-slate-900" : undefined}>
              {row.map((cell, cellIndex) => {
                const CellTag = cell.isHeader ? "th" : "td"

                return (
                  <CellTag key={`${baseKey}-c${rowIndex}-${cellIndex}`} scope={cell.isHeader ? "col" : undefined} className="border border-slate-200 px-3 py-2 text-center align-middle">
                    {renderTextWithMath(cell.content, `${baseKey}-c${rowIndex}-${cellIndex}`)}
                  </CellTag>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function renderStructuredText(content: string, baseKey: string) {
  const blocks = splitContentBlocks(content)

  return blocks.map((block, index) => {
    const key = `${baseKey}-block-${index}`

    if (block.type === "options") {
      return (
        <div key={key} className="my-4 space-y-3">
          {block.lead && (
            <p className="leading-8 text-slate-800">
              {renderTextWithMath(block.lead, `${key}-lead`)}
            </p>
          )}
          <ol className="grid gap-2 sm:grid-cols-2" aria-label="选择题选项">
            {block.options.map((option) => (
              <li key={`${key}-${option.label}`} className="flex gap-2 rounded-2xl border border-slate-200 bg-white/80 px-3 py-2 leading-7 text-slate-800 shadow-sm">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-blue-700">
                  {option.label}
                </span>
                <span className="min-w-0">{renderTextWithMath(option.content, `${key}-${option.label}`)}</span>
              </li>
            ))}
          </ol>
        </div>
      )
    }

    return (
      <p key={key} className="my-3 leading-8 text-slate-800">
        {renderTextWithMath(block.content, key)}
      </p>
    )
  })
}

function renderTablesAndText(content: string, baseKey: string) {
  const parts: React.ReactNode[] = []
  let lastIndex = 0
  tablePattern.lastIndex = 0

  let match = tablePattern.exec(content)
  while (match) {
    if (match.index > lastIndex) {
      parts.push(<React.Fragment key={`${baseKey}-t${parts.length}`}>{renderStructuredText(content.slice(lastIndex, match.index), `${baseKey}-t${parts.length}`)}</React.Fragment>)
    }
    parts.push(renderTable(match[0], `${baseKey}-table${parts.length}`))
    lastIndex = match.index + match[0].length
    match = tablePattern.exec(content)
  }

  if (lastIndex < content.length) {
    parts.push(<React.Fragment key={`${baseKey}-t${parts.length}`}>{renderStructuredText(content.slice(lastIndex), `${baseKey}-t${parts.length}`)}</React.Fragment>)
  }

  return parts
}

function renderContent(content: string) {
  const segments: Array<{ type: "text"; value: string } | { type: "image"; value: string; alt: string }> = []
  let lastIndex = 0
  imagePattern.lastIndex = 0

  let match = imagePattern.exec(content)
  while (match) {
    if (match.index > lastIndex) {
      segments.push({ type: "text", value: content.slice(lastIndex, match.index) })
    }
    segments.push({ type: "image", value: match[2], alt: match[1].trim() })
    lastIndex = match.index + match[0].length
    match = imagePattern.exec(content)
  }
  if (lastIndex < content.length) {
    segments.push({ type: "text", value: content.slice(lastIndex) })
  }

  return segments.map((seg, i) => {
    if (seg.type === "image") {
      if (!imageFileNamePattern.test(seg.value)) {
        return <React.Fragment key={`fig-${i}`}>{`![题目原图](images/${seg.value})`}</React.Fragment>
      }

      return (
        <figure key={`fig-${i}`} className="my-5 overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
          <Image
            src={`/images/${seg.value}`}
            alt={seg.alt || "题目原图"}
            width={720}
            height={480}
            className="mx-auto h-auto max-h-[520px] w-auto max-w-full object-contain"
            sizes="(max-width: 768px) 100vw, 720px"
          />
        </figure>
      )
    }
    return <React.Fragment key={`t-${i}`}>{renderTablesAndText(seg.value, `s${i}`)}</React.Fragment>
  })
}

export default function KaTeX({ math, display = false }: KaTeXProps) {
  const hasImages = React.useMemo(() => {
    imagePattern.lastIndex = 0
    return imagePattern.test(math)
  }, [math])

  const hasTables = React.useMemo(() => {
    tablePattern.lastIndex = 0
    return tablePattern.test(math)
  }, [math])

  const content = React.useMemo(() => {
    try {
      if (hasImages) {
        imagePattern.lastIndex = 0
        return renderContent(math)
      }

      if (hasTables) {
        tablePattern.lastIndex = 0
        return renderTablesAndText(math, "c")
      }

      if (display && shouldRenderStructuredDisplay(math)) {
        return renderStructuredText(math, "c")
      }

      mathDelimiterPattern.lastIndex = 0
      if (mathDelimiterPattern.test(math)) {
        mathDelimiterPattern.lastIndex = 0
        return renderTextWithMath(math, "c")
      }

      mathDelimiterPattern.lastIndex = 0

      if (/\\_/.test(math)) {
        return math.replace(/\\_/g, "_")
      }

      if (/[一-鿿、①-⑳]/.test(math)) {
        return math
      }

      return (
        <span dangerouslySetInnerHTML={{ __html: renderMath(math, display) }} />
      )
    } catch (error) {
      console.error("KaTeX render error:", error)
      return math
    }
  }, [math, display, hasImages, hasTables])

  if (hasImages || hasTables || display) {
    return <div className="my-4">{content}</div>
  }

  return <span className="inline-block">{content}</span>
}
