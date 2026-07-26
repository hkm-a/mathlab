import assert from "node:assert/strict"

import { formatProblemPreview, normalizeMathSource, splitContentBlocks } from "./content-format"

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

assert.equal(normalizeMathSource(String.raw`x且y`), String.raw`x\text{且}y`)
assert.equal(normalizeMathSource(String.raw`\text{当} x>0`), String.raw`\text{当} x>0`)
assert.equal(normalizeMathSource(String.raw`S_{四边形}`), String.raw`S_{\text{四边形}}`)
assert.equal(normalizeMathSource(String.raw`A、B`), String.raw`A\text{、}B`)
assert.equal(normalizeMathSource(String.raw`x=1\tag{②}`), String.raw`x=1\tag{2}`)
assert.equal(normalizeMathSource(String.raw`x=20\tag{⑳}`), String.raw`x=20\tag{20}`)
