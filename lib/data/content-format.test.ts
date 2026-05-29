import assert from "node:assert/strict"

import { formatProblemPreview, splitContentBlocks } from "./content-format"

assert.deepEqual(splitContentBlocks("第一行\n第二行"), [
  { type: "paragraph", content: "第一行" },
  { type: "paragraph", content: "第二行" },
])

assert.deepEqual(splitContentBlocks("下列说法正确的是 A. 甲 B. 乙 C. 丙 D. 丁"), [
  {
    type: "options",
    lead: "下列说法正确的是",
    options: [
      { label: "A", content: "甲" },
      { label: "B", content: "乙" },
      { label: "C", content: "丙" },
      { label: "D", content: "丁" },
    ],
  },
])

assert.equal(formatProblemPreview("下列说法正确的是 A. 甲 B. 乙 C. 丙 D. 丁"), "下列说法正确的是（含 4 个选项）")


assert.equal(
  formatProblemPreview(String.raw`求最大值为 \_\_\_\_。`),
  "求最大值为 ____。",
)

assert.deepEqual(splitContentBlocks(String.raw`填空 \_\_，公式 $\lambda_{i}$ 不应被改写。`), [
  { type: "paragraph", content: String.raw`填空 __，公式 $\lambda_{i}$ 不应被改写。` },
])

assert.deepEqual(splitContentBlocks(String.raw`填空 \_\_，公式 \(\lambda_{i}\) 不应被改写。`), [
  { type: "paragraph", content: String.raw`填空 __，公式 \(\lambda_{i}\) 不应被改写。` },
])

assert.deepEqual(splitContentBlocks(String.raw`填空 \_\_，公式 $$\lambda_{i}$$ 不应被改写。`), [
  { type: "paragraph", content: String.raw`填空 __，公式 $$\lambda_{i}$$ 不应被改写。` },
])

assert.deepEqual(splitContentBlocks(String.raw`填空 \_\_，公式 \[\lambda_{i}\] 不应被改写。`), [
  { type: "paragraph", content: String.raw`填空 __，公式 \[\lambda_{i}\] 不应被改写。` },
])
