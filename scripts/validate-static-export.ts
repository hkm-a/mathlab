import { existsSync, readFileSync, readdirSync, statSync } from "node:fs"
import { join, relative } from "node:path"

const root = process.cwd()
const appDir = join(root, "app")
const failures: string[] = []

function walk(dir: string): string[] {
  if (!existsSync(dir)) return []

  return readdirSync(dir).flatMap((entry) => {
    const path = join(dir, entry)
    const stat = statSync(path)

    if (stat.isDirectory()) return walk(path)
    return [path]
  })
}

const appFiles = walk(appDir)
const sourceFiles = appFiles.filter((file) => /\.(ts|tsx|js|jsx)$/.test(file))

if (existsSync(join(appDir, "api"))) {
  failures.push("app/api is not compatible with static export")
}

for (const file of sourceFiles) {
  const rel = relative(root, file).replaceAll("\\\\", "/")
  const base = rel.split("/").pop()
  const source = readFileSync(file, "utf8")

  if (base === "route.ts" || base === "route.js") {
    failures.push(`${rel} defines a route handler`)
  }

  const forbiddenPatterns = [
    { label: "server action", pattern: /["']use server["']/ },
    { label: "next/headers import", pattern: /from\s+["']next\/headers["']/ },
    { label: "next/server import", pattern: /from\s+["']next\/server["']/ },
    { label: "cookies() usage", pattern: /\bcookies\s*\(/ },
    { label: "headers() usage", pattern: /\bheaders\s*\(/ },
    { label: "draftMode() usage", pattern: /\bdraftMode\s*\(/ },
  ]

  for (const check of forbiddenPatterns) {
    if (check.pattern.test(source)) {
      failures.push(`${rel} uses ${check.label}`)
    }
  }
}

const dynamicRoutes = [
  "app/topics/[topicId]/page.tsx",
  "app/problems/[problemId]/page.tsx",
]

for (const route of dynamicRoutes) {
  const path = join(root, route)
  if (!existsSync(path)) {
    failures.push(`${route} is missing`)
    continue
  }

  const source = readFileSync(path, "utf8")
  if (!source.includes("generateStaticParams")) {
    failures.push(`${route} must export generateStaticParams for static export`)
  }
}

if (failures.length > 0) {
  console.error("Static export validation failed:")
  for (const failure of failures) {
    console.error(`- ${failure}`)
  }
  process.exit(1)
}

console.log("Static export validation passed")
