import { existsSync, readFileSync, readdirSync, statSync } from "node:fs"
import { join } from "node:path"
import { problems } from "../lib/data/problems"
import { getProblemDisplayTitle } from "../lib/data/problemDisplay"
import { topics, categories } from "../lib/data/topics"

const root = process.cwd()

const checks: Array<{ file: string; tokens: string[] }> = [
  {
    file: "app/page.tsx",
    tokens: ["全部专题", "书籍电子化", "开始学习", "查看全部"],
  },
  {
    file: "components/ui/Layout.tsx",
    tokens: ["学习工作台", "搜索题目", "继续学习", "bg-[#f7f8fb]", "书籍电子化学习台"],
  },
  {
    file: "app/topics/[topicId]/page.tsx",
    tokens: ["训练路线", "推荐题组", "原书题图", "开始专题训练"],
  },
  {
    file: "components/topics/TopicSearch.tsx",
    tokens: ["学习路径", "工具箱", "筛选结果", "含可视化", "htmlFor=\"problem-search\"", "id=\"problem-search\"", "aria-pressed={difficulty === option.id}", "role=\"group\"", "aria-label=\"难度筛选\"", "role=\"status\"", "aria-live=\"polite\""],
  },
  {
    file: "components/problems/ProblemViewer.tsx",
    tokens: ["题目阅读", "解题分析", "数学旁白", "虚拟学伴", "小挑战", "绘图设置", "下一步建议", "可视化演示", "aria-pressed={bookmarked}"],
  },
  {
    file: "components/problems/SolutionViewer.tsx",
    tokens: ["分步解析", "解析进度", "步骤", "进入下一题", "getSolutionDisplayTitle", "参考解析", "aria-pressed={i === currentSolution}", "aria-expanded={expanded}", "aria-controls={stepContentId}", "id={stepContentId}", "hidden={!expanded}", "focus-visible:ring-2"],
  },
  {
    file: "components/visualizers/ThreeAmGmViz.tsx",
    tokens: ["三元 AM-GM 均衡实验室", "调整三个正数", "算术平均值", "几何平均值", "均衡化后差距缩小", "aria-label=\"调整 a 的值\"", "<KaTeX math="],
  },
  {
    file: "components/visualizers/CauchyViz.tsx",
    tokens: ["柯西向量投影实验室", "调整夹角", "投影长度", "点积不会超过长度乘积", "|a·b| ≤ |a||b|", "aria-label=\"调整向量夹角\"", "<KaTeX math="],
  },
  {
    file: "components/visualizers/JensenViz.tsx",
    tokens: ["Jensen 凸函数实验室", "拖动平均点", "弦线在函数图像上方", "f(平均值) ≤ 平均函数值", "aria-label=\"调整平均点\"", "<KaTeX math="],
  },
  {
    file: "components/visualizers/ProblemVisualization.tsx",
    tokens: ["JensenViz", "CauchyViz", "ThreeAmGmViz", "ineq-jensen-1", "ineq-cauchy-1", "ineq-amgm-2"],
  },
  {
    file: "components/visualizers/InequalityViz.tsx",
    tokens: [
      "交互绘图区",
      "播放证明",
      "显示辅助线",
      "AM ≥ GM 恒成立",
      "onClick={() => setShowGuideLines",
      "aria-pressed={showGuideLines}",
      "aria-pressed={proofPlaying}",
      "辅助线已显示",
      "证明播放中",
      "proofPlaying &&",
      "几何图中设垂线长度为 h",
      "三元 AM-GM 的均衡化证明",
      "math=\"(\\\\sqrt{a} - \\\\sqrt{b})^2 \\\\ge 0\"",
      "h^2 = ab",
      "math=\"h = \\\\sqrt{ab}\"",
      "math=\"a + b \\\\ge 2\\\\sqrt{ab}\"",
      "math=\"\\\\frac{a+b}{2} \\\\ge \\\\sqrt{ab}\"",
      "<KaTeX math=",
    ],
  },
  {
    file: "components/ui/Button.tsx",
    tokens: ["focus-visible:outline", "focus-visible:ring-2", "focus-visible:ring-blue-600"],
  },
  {
    file: "components/ui/KaTeX.tsx",
    tokens: ["alt: string", "alt={seg.alt || \"题目原图\"}", "scope={cell.isHeader ? \"col\" : undefined}"],
  },
]

const failures: string[] = []
const videoReferencePattern = /\/videos\/[^"'`\s)]+\.mp4/g
const imageReferencePattern = /!\[([^\]]*)\]\(images\/([^)]+)\)/g
const imageFileNamePattern = /^[a-zA-Z0-9._-]+\.(?:png|jpe?g|webp|gif)$/i
const sourceRoots = ["app", "components", "lib"]
const sourceExtensions = new Set([".ts", ".tsx", ".js", ".jsx"])
const topicNameById = new Map(topics.map((topic) => [topic.id, topic.name]))

function walkSourceFiles(directory: string): string[] {
  const files: string[] = []

  for (const entry of readdirSync(join(root, directory))) {
    const relativePath = join(directory, entry)
    const absolutePath = join(root, relativePath)
    const stats = statSync(absolutePath)

    if (stats.isDirectory()) {
      files.push(...walkSourceFiles(relativePath))
      continue
    }

    if (sourceExtensions.has(relativePath.slice(relativePath.lastIndexOf(".")))) {
      files.push(relativePath)
    }
  }

  return files
}

for (const check of checks) {
  const source = readFileSync(join(root, check.file), "utf8")
  for (const token of check.tokens) {
    if (!source.includes(token)) {
      failures.push(`${check.file} missing ${token}`)
    }
  }
}

const problemTitleContractChecks: Array<{ file: string; tokens: string[]; forbidden?: string[] }> = [
  {
    file: "lib/data/problemDisplay.ts",
    tokens: ["getProblemDisplayTitle", "getProblemEyebrow", "isStatementLikeTitle"],
  },
  {
    file: "components/problems/ProblemViewer.tsx",
    tokens: ["getProblemDisplayTitle", "getProblemEyebrow"],
    forbidden: ["{problem.title}"],
  },
  {
    file: "components/problems/ProblemCard.tsx",
    tokens: ["getProblemDisplayTitle", "getProblemEyebrow"],
    forbidden: ["{problem.title}"],
  },
  {
    file: "components/topics/TopicSearch.tsx",
    tokens: ["getProblemDisplayTitle", "getProblemEyebrow"],
    forbidden: ["{problem.title}"],
  },
  {
    file: "app/topics/[topicId]/page.tsx",
    tokens: ["getProblemDisplayTitle"],
    forbidden: ["problem.title"],
  },
]

for (const check of problemTitleContractChecks) {
  const filePath = join(root, check.file)
  if (!existsSync(filePath)) {
    failures.push(`${check.file} missing display-title contract file`)
    continue
  }

  const source = readFileSync(filePath, "utf8")
  for (const token of check.tokens) {
    if (!source.includes(token)) {
      failures.push(`${check.file} missing ${token}`)
    }
  }

  for (const forbidden of check.forbidden ?? []) {
    if (source.includes(forbidden)) {
      failures.push(`${check.file} still uses raw problem title token ${forbidden}`)
    }
  }
}

const forbiddenProductPositioning = [
  "数学竞赛可视化学习",
  "高中数学竞赛中的抽象结构",
  "数学竞赛中的复杂概念",
  "竞赛分类",
]

for (const forbidden of forbiddenProductPositioning) {
  for (const file of ["app/layout.tsx", "app/page.tsx", "app/topics/page.tsx", "components/ui/Layout.tsx"]) {
    const source = readFileSync(join(root, file), "utf8")
    if (source.includes(forbidden)) {
      failures.push(`${file} still uses old competition positioning ${forbidden}`)
    }
  }
}

const problemTopicIds = new Set(problems.map((problem) => problem.topicId))
const topicIdsWithoutProblems = topics
  .filter((topic) => !problemTopicIds.has(topic.id))
  .map((topic) => topic.id)

if (topicIdsWithoutProblems.length > 0) {
  failures.push(`topics without problems still exist in visible source data: ${topicIdsWithoutProblems.join(", ")}`)
}

const emptyCategoryIds = categories
  .filter((category) => topics.every((topic) => topic.category !== category.id))
  .map((category) => category.id)

if (emptyCategoryIds.length > 0) {
  failures.push(`categories without visible topics still exist: ${emptyCategoryIds.join(", ")}`)
}

function normalizeForContract(value: string): string {
  return value.replace(/\s+/g, "").replace(/[，。,.；;：:]/g, "")
}

for (const problem of problems) {
  const displayTitle = getProblemDisplayTitle(problem, topicNameById.get(problem.topicId))
  const normalizedTitle = normalizeForContract(problem.title)
  const normalizedContent = normalizeForContract(problem.content)

  if (displayTitle === problem.title && normalizedTitle.length > 0 && normalizedContent.startsWith(normalizedTitle)) {
    failures.push(`${problem.id} still displays copied statement prefix title ${problem.title}`)
  }
}

for (const problem of problems) {
  const textFields = [problem.content, problem.preview, ...problem.solutions.flatMap((solution) => [solution.explanation, ...solution.steps.map((step) => step.content)])].filter(
    (text): text is string => typeof text === "string",
  )
  for (const text of textFields) {
    imageReferencePattern.lastIndex = 0
    for (const match of text.matchAll(imageReferencePattern)) {
      const imageFileName = match[2]
      if (!imageFileNamePattern.test(imageFileName)) {
        failures.push(`${problem.id} references invalid original image path ${imageFileName}`)
        continue
      }

      const publicPath = join(root, "public", "images", imageFileName)
      if (!existsSync(publicPath)) {
        failures.push(`${problem.id} references missing original image ${imageFileName}`)
      }
    }
  }
}

if (failures.length > 0) {
  console.error("UI contract failed:")
  for (const failure of failures) {
    console.error(`- ${failure}`)
  }
  process.exit(1)
}

console.log("UI contract passed")
