import type { Problem } from "./types"

const STATEMENT_PREFIXES = ["已知", "设", "若", "证明", "求", "如图", "在", "对于", "记", "定义", "正方形", "矩形", "三角形", "圆", "椭圆", "双曲线", "抛物线", "数列", "函数"]
const STATEMENT_MARKERS = ["__", "（）", "()", "?", "？", "则", "满足", "的值", "取值范围", "边长", "中点", "交于", "切线", "焦点", "顶点"]
const SOURCE_PREFIX_PATTERN = /^(\d{4}|例\s*\d+|习题|更高更妙|全国|浙江|上海|北京|高考)/
const MATH_MARKER_PATTERN = /\\[a-zA-Z]+|\$|\^|_|\{|\}|\frac|\sqrt|\left|\right/g
const ID_NUMBER_PATTERN = /prob-sec-(.+)/

export function getProblemDisplayTitle(problem: Problem, topicName?: string): string {
  const title = problem.title.trim()

  if (!isStatementLikeTitle(title, problem.content)) {
    return title
  }

  const tagSummary = formatTagSummary(problem.tags)
  const prefix = problem.source?.trim() || topicName?.trim() || "专题训练"
  const suffix = tagSummary || `第 ${getProblemIndex(problem.id)} 题`

  return `${prefix}：${suffix}`
}

export function getProblemEyebrow(problem: Problem, topicName?: string): string {
  const parts = [problem.source, topicName, problem.visualization ? "含可视化" : undefined]
    .filter((part): part is string => Boolean(part?.trim()))

  if (parts.length > 0) {
    return parts.slice(0, 2).join(" · ")
  }

  return `题目 ${getProblemIndex(problem.id)}`
}

export function isStatementLikeTitle(title: string, content: string): boolean {
  const compactTitle = normalizeText(title)
  const compactContent = normalizeText(content)

  if (compactTitle.length === 0) {
    return true
  }

  if (SOURCE_PREFIX_PATTERN.test(title) && title.includes("：") && title.length <= 42) {
    return false
  }

  if (compactTitle.length > 34) {
    return true
  }

  if (compactTitle.length >= 6 && compactContent.startsWith(compactTitle)) {
    return true
  }

  const mathMarkerCount = title.match(MATH_MARKER_PATTERN)?.length ?? 0
  if (mathMarkerCount >= 3) {
    return true
  }

  const startsLikeStatement = STATEMENT_PREFIXES.some((prefix) => title.startsWith(prefix))
  const hasStatementMarker = STATEMENT_MARKERS.some((marker) => title.includes(marker))

  if (startsLikeStatement) {
    return true
  }

  return hasStatementMarker && title.length > 12
}

function formatTagSummary(tags: string[]): string {
  const meaningfulTags = tags.filter((tag) => tag.trim().length > 0)
  return meaningfulTags.slice(0, 2).join("与")
}

function getProblemIndex(id: string): string {
  return id.match(ID_NUMBER_PATTERN)?.[1]?.replace(/-/g, ".") ?? id
}

function normalizeText(value: string): string {
  return value.replace(/\s+/g, "").replace(/[，。,.；;：:]/g, "")
}
