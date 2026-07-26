export interface ChoiceOption {
  label: string
  content: string
}

export type ContentBlock =
  | { type: "paragraph"; content: string }
  | { type: "options"; lead?: string; options: ChoiceOption[] }

const optionMarkerPattern = /(^|[\s\n，,；;：:])(?:[（(]?([A-HＡ-Ｈ])[)）.．]\s*)/g
const circledOptionPattern = /(^|[\s\n，,；;：:])([①-⑳])\s*/g
const mathDelimiterPattern = /(\$\$[\s\S]+?\$\$|\\\[[\s\S]+?\\\]|\\\([\s\S]+?\\\)|\$[^$\n]+\$)/g
const rawMathTextPattern = /[\p{Script=Han}，。；：、（）]+/uy
const circledNumberMap = new Map(Array.from("①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳", (value, index) => [value, String(index + 1)]))

function normalizeOptionLabel(label: string): string {
  const fullWidthStart = "Ａ".charCodeAt(0)
  const code = label.charCodeAt(0)

  if (code >= fullWidthStart && code <= fullWidthStart + 25) {
    return String.fromCharCode("A".charCodeAt(0) + code - fullWidthStart)
  }

  return label
}

function normalizeTextSegment(value: string): string {
  return value.replace(/\\_/g, "_")
}

function normalizeEscapedBlanksOutsideMath(value: string): string {
  const parts = value.split(mathDelimiterPattern)
  return parts.map((part) => {
    if (!part) return part
    mathDelimiterPattern.lastIndex = 0
    if (mathDelimiterPattern.test(part)) return part
    return normalizeTextSegment(part)
  }).join("")
}

function normalizeInlineWhitespace(value: string): string {
  return normalizeEscapedBlanksOutsideMath(value)
    .replace(/[ \t]+/g, " ")
    .replace(/\s+([，。；：、])/g, "$1")
    .trim()
}

function findOptionMarkers(content: string): Array<{ index: number; label: string; contentStart: number }> {
  const markers: Array<{ index: number; label: string; contentStart: number }> = []

  for (const pattern of [optionMarkerPattern, circledOptionPattern]) {
    pattern.lastIndex = 0
    for (const match of content.matchAll(pattern)) {
      const prefix = match[1] ?? ""
      const label = match[2] ?? ""
      const index = (match.index ?? 0) + prefix.length
      markers.push({
        index,
        label: normalizeOptionLabel(label),
        contentStart: index + match[0].length - prefix.length,
      })
    }
  }

  return markers.sort((left, right) => left.index - right.index)
}

function splitOptionContent(content: string): ContentBlock | null {
  const markers = findOptionMarkers(content)
  if (markers.length < 2) return null

  const labels = new Set(markers.map((marker) => marker.label))
  if (labels.size < 2) return null

  const lead = normalizeInlineWhitespace(content.slice(0, markers[0].index))
  const options = markers.map((marker, index) => {
    const next = markers[index + 1]
    return {
      label: marker.label,
      content: normalizeInlineWhitespace(content.slice(marker.contentStart, next?.index ?? content.length)),
    }
  }).filter((option) => option.content.length > 0)

  if (options.length < 2) return null

  return { type: "options", lead: lead || undefined, options }
}

function splitTextParagraphs(content: string): string[] {
  const paragraphs: string[] = []
  let start = 0
  let isDollarDisplayMath = false
  let isBracketDisplayMath = false

  for (let index = 0; index < content.length; index += 1) {
    const current = content[index]
    const next = content[index + 1]
    const previous = content[index - 1]

    if (current === "$" && next === "$") {
      isDollarDisplayMath = !isDollarDisplayMath
      index += 1
      continue
    }

    if (previous === "\\" && current === "[") {
      isBracketDisplayMath = true
      continue
    }

    if (previous === "\\" && current === "]") {
      isBracketDisplayMath = false
      continue
    }

    if (current === "\n" && !isDollarDisplayMath && !isBracketDisplayMath) {
      paragraphs.push(content.slice(start, index))
      while (content[index + 1] === "\n") {
        index += 1
      }
      start = index + 1
    }
  }

  paragraphs.push(content.slice(start))
  return paragraphs
}

export function splitContentBlocks(content: string): ContentBlock[] {
  const trimmed = content.trim()
  if (!trimmed) return []

  const optionBlock = splitOptionContent(trimmed)
  if (optionBlock) return [optionBlock]

  return splitTextParagraphs(trimmed)
    .map((paragraph) => normalizeInlineWhitespace(paragraph))
    .filter((paragraph) => paragraph.length > 0)
    .map((paragraph) => ({ type: "paragraph", content: paragraph }))
}

export function formatProblemPreview(content: string, maxLength = 96): string {
  const blocks = splitContentBlocks(content)
  const firstBlock = blocks[0]
  const text = firstBlock?.type === "options"
    ? `${firstBlock.lead ?? "选择题"}（含 ${firstBlock.options.length} 个选项）`
    : firstBlock?.content ?? ""

  const normalized = normalizeInlineWhitespace(text.replace(/!\[[^\]]*\]\(images\/[^)]+\)/g, "题目原图"))
  if (normalized.length <= maxLength) return normalized

  return `${normalized.slice(0, Math.max(0, maxLength - 1)).trim()}…`
}

export function normalizeContentSignature(content: string): string {
  return content
    .replace(/\s+/g, "")
    .replace(/[，。,.；;：:、]/g, "")
    .replace(/[（）()]/g, "")
    .toLowerCase()
}

/**
 * 将公式中的中文说明转为 KaTeX 文本节点，并把圈号转换为稳定的数字标签。
 * 已位于 `\text{}` 中的内容保持不变，避免生成嵌套文本命令。
 */
export function normalizeMathSource(content: string): string {
  const source = Array.from(content, (character) => circledNumberMap.get(character) ?? character).join("")
  let result = ""
  let index = 0

  while (index < source.length) {
    const textCommand = source.slice(index).match(/^\\text\s*\{/)

    if (textCommand) {
      let depth = 1
      let end = index + textCommand[0].length

      while (end < source.length && depth > 0) {
        if (source[end] === "{" && source[end - 1] !== "\\") depth += 1
        if (source[end] === "}" && source[end - 1] !== "\\") depth -= 1
        end += 1
      }

      result += source.slice(index, end)
      index = end
      continue
    }

    rawMathTextPattern.lastIndex = index
    const match = rawMathTextPattern.exec(source)

    if (match) {
      result += `\\text{${match[0]}}`
      index = rawMathTextPattern.lastIndex
      continue
    }

    result += source[index]
    index += 1
  }

  return result
}
