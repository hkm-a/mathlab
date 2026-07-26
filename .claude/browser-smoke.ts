import assert from "node:assert/strict"
import { existsSync } from "node:fs"
import { readFile, stat } from "node:fs/promises"
import { createServer } from "node:http"
import { extname, resolve } from "node:path"

import { chromium } from "playwright"

const specifications = [
  ["prob-sec-3-3-2", "交互绘图区", "amgm-2", "调整 a 的值", "5", "a = 5"],
  ["prob-sec-3-3-3", "三元 AM-GM 均衡实验室", "amgm-3", "调整均衡化比例", "100", "均衡化：100%"],
  ["prob-sec-3-3-3-10", "柯西向量投影实验室", "cauchy", "调整向量夹角", "90", "θ = 90°"],
  ["prob-sec-2-5-6-13", "Jensen 凸函数实验室", "jensen", "调整平均点", "25", "t = 0.25"],
] as const

const staticSpecifications = [
  ["prob-sec-1-4-12", "观察函数图像与题设约束的关系", "函数图像", "function"],
  ["prob-sec-3-3-2-9", "观察圆、切线与关键点的位置关系", "几何图形可视化", "geometry"],
] as const

const outputRoot = resolve("out")
const browserExecutable = [
  process.env.MATHLAB_BROWSER_PATH,
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
].find((candidate): candidate is string => Boolean(candidate && existsSync(candidate)))

assert.ok(browserExecutable, "未找到可供本地冒烟使用的 Chrome 或 Edge 浏览器")

const contentTypes: Readonly<Record<string, string>> = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
}

const server = createServer(async (request, response) => {
  const pathname = decodeURIComponent(new URL(request.url ?? "/", "http://127.0.0.1").pathname)
  const relativePath = pathname.replace(/^\/+/, "")
  let filePath = resolve(outputRoot, relativePath)

  if (!filePath.startsWith(outputRoot)) {
    response.writeHead(403).end("拒绝访问")
    return
  }

  try {
    let fileStats

    try {
      fileStats = await stat(filePath)
    } catch (error) {
      if (extname(filePath)) throw error
      filePath = `${filePath}.html`
      fileStats = await stat(filePath)
    }

    if (fileStats.isDirectory()) {
      filePath = resolve(filePath, "index.html")
    }

    const body = await readFile(filePath)
    response.writeHead(200, { "Content-Type": contentTypes[extname(filePath)] ?? "application/octet-stream" })
    response.end(body)
  } catch {
    response.writeHead(404).end("未找到")
  }
})

async function main() {
  await new Promise<void>((resolveListen, rejectListen) => {
    server.once("error", rejectListen)
    server.listen(4179, "127.0.0.1", resolveListen)
  })
  let browser: Awaited<ReturnType<typeof chromium.launch>> | undefined

  try {
    browser = await chromium.launch({ executablePath: browserExecutable, headless: true })
    const page = await browser.newPage({
      viewport: { width: 1440, height: 1100 },
      deviceScaleFactor: 1,
    })
    const pageErrors: string[] = []

    page.on("pageerror", (error) => pageErrors.push(error.message))

    for (const [problemId, expectedLabel, screenshotName, sliderLabel, sliderValue, expectedValue] of specifications) {
      const response = await page.goto(`http://127.0.0.1:4179/problems/${problemId}/`, {
        waitUntil: "networkidle",
      })

      assert.equal(response?.status(), 200, `页面响应异常：${problemId}`)
      await page.getByText(expectedLabel, { exact: false }).first().waitFor()

      const slider = page.getByLabel(sliderLabel)
      await slider.evaluate((element, value) => {
        const input = element as HTMLInputElement
        const valueSetter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")?.set
        valueSetter?.call(input, String(value))
        input.dispatchEvent(new Event("input", { bubbles: true }))
        input.dispatchEvent(new Event("change", { bubbles: true }))
      }, sliderValue)
      await page.getByText(expectedValue, { exact: false }).first().waitFor()

      await page.getByRole("button", { name: "播放证明" }).click()
      await page.getByRole("button", { name: "证明播放中" }).waitFor()

      const canvas = page.locator("canvas").first()
      await canvas.waitFor()
      const box = await canvas.boundingBox()

      assert.ok(box && box.width >= 300 && box.height >= 180, `画布尺寸异常：${problemId}`)
      await page.evaluate(() => window.scrollTo(0, 0))
      await page.screenshot({ path: `.claude/screenshots/${screenshotName}.png`, fullPage: true })
      console.log(`页面冒烟通过：${problemId} -> ${expectedLabel}`)
    }

    for (const [problemId, expectedText, canvasLabel, screenshotName] of staticSpecifications) {
      const response = await page.goto(`http://127.0.0.1:4179/problems/${problemId}/`, {
        waitUntil: "networkidle",
      })

      assert.equal(response?.status(), 200, `页面响应异常：${problemId}`)
      await page.getByText(expectedText, { exact: false }).first().waitFor()

      const canvas = page.getByRole("img", { name: canvasLabel })
      await canvas.waitFor()
      const box = await canvas.boundingBox()

      assert.ok(box && box.width >= 300 && box.height >= 180, `画布尺寸异常：${problemId}`)
      await page.evaluate(() => window.scrollTo(0, 0))
      await page.screenshot({ path: `.claude/screenshots/${screenshotName}.png`, fullPage: true })
      console.log(`页面冒烟通过：${problemId} -> ${expectedText}`)
    }

    assert.deepEqual(pageErrors, [], `页面脚本错误：${pageErrors.join(" | ")}`)
  } finally {
    await browser?.close()
    await new Promise<void>((resolveClose, rejectClose) => {
      server.close((error) => error ? rejectClose(error) : resolveClose())
    })
  }
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
