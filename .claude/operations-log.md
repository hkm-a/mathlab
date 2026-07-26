## MathLab 操作日志

### 需求与研究阶段

时间：2026-07-26 14:24:13 +08:00

- 目标：修复“组件存在、测试通过、真实题目却不可达”的功能缺口，并保持实现小而完整。
- 已检查：仓库状态、依赖脚本、581 道题数据、页面调用链、四个渲染器、类型定义、数据验证与 UI 契约。
- 工具链说明：当前环境未提供 sequential-thinking、shrimp-task-manager、Desktop Commander、Context7 与 GitHub MCP；使用结构化书面推理、任务契约、PowerShell/`rg`、`gh search code` 和本地原生测试补偿。协作代理接口也返回“不支持”，因此本阶段由主代理独立执行。
- 关键结论：不是补两个占位渲染器，而是需要让现有四个完整渲染器进入真实数据链路，并删除两个无数据、无实现的类型。

### 编码前检查——真实可视化闭环

时间：2026-07-26 14:24:13 +08:00

- [x] 已查阅上下文摘要：`.claude/context-summary-mathlab.md`。
- [x] 将复用 `withExtractedEmbeddedSolution` / `withDerivedSolutionSteps` 的纯转换器模式。
- [x] 将复用 `InequalityViz`、`ThreeAmGmViz`、`CauchyViz`、`JensenViz`，不新增绘图实现和依赖。
- [x] 将遵循 `withProblemVisualization`、`visualizationByProblemId`、`InequalityVisualizationPreset` 等既有命名风格。
- [x] 将遵循双引号、无分号、两空格缩进、`node:assert/strict` 的项目风格。
- [x] 已检索 `lib/data`、`components/visualizers` 与 `scripts`，确认不存在题目可视化挂载模块。

### 实施计划与验收契约

1. 收紧可视化判别联合，删除从未使用的向量变换占位类型，给不等式配置增加显式预设。
2. 新增集中映射转换器，把四个预设绑定到四道真实题目，接入题目规范化流水线。
3. 改为仅按配置穷尽分派，删除虚构题号和占位回退。
4. 新增映射单元测试，并把 UI 契约从字符串存在性提升为真实数据可达性检查。
5. 运行增量测试、类型检查、全量构建和真实页面冒烟；失败立即停止并修正。
6. 完成独立质量评分、提交、推送、PR 与本地合并后验证。

验收边界：不扩写题库内容，不新增依赖，不重做现有画布视觉，不修改无关页面。

### 验证暂停与复盘

时间：2026-07-26 14:35:08 +08:00

浏览器冒烟脚手架连续失败三次，已按准则暂停产品代码实施并复盘：

1. 首次失败：临时 `tsx` 脚本使用顶层 `await`，当前忽略目录按 CommonJS 转换，编译阶段终止。
2. 第二次失败：改为异步入口后，Windows 环境无法由 Node 子进程启动 Python 静态服务器，服务器就绪检查终止。
3. 第三次失败：改用 Node 内建静态服务器后成功进入浏览器启动阶段，但 Playwright 自带 Chromium 未安装。

结论：三次失败均发生在仅用于本地 QA 的 `.claude/browser-smoke.ts`，产品的单元测试、类型检查、数据/UI/发布契约和 621 页静态构建此前均已通过。停止继续调整产品代码；验证方案改为复用本机已确认存在的 `C:\Program Files\Google\Chrome\Application\chrome.exe`，通过 Playwright 的 `executablePath` 驱动，不下载依赖、不依赖 CI，也不降低原验收条件。

### 截图审查后的针对性修正

时间：2026-07-26 14:38:00 +08:00

- 浏览器冒烟恢复后，四个页面均成功加载，但截图显示 `CauchyViz`、`JensenViz`、`ThreeAmGmViz` 的画布最大宽度为 720px，而容器继续占满更宽卡片，造成右侧大块黑色空白。
- 三个组件使用相同的 `useCanvasSize({ maxWidth: 720 })` 模式，因此统一给画布容器增加 `mx-auto w-full max-w-[720px]`，使尺寸约束落在被观察的容器本身并保持居中。
- 该修正复用现有响应式尺寸逻辑，不更改绘图算法、状态或题目数据，也不引入新依赖。

### 类型可达性补齐

时间：2026-07-26 14:45:00 +08:00

- 将顶层可视化类型集中为 `visualizationTypes`，并以其派生类型约束解题步骤的可视化类型字段。
- 为下凸函数题 `prob-sec-1-4-12` 接入二次函数图像，为圆上斜率最值题 `prob-sec-3-3-2-9` 接入圆、切线和关键点图形。
- 函数与几何渲染分支增加题意导向说明；映射测试、UI 契约和浏览器冒烟同时检查三种顶层类型均有真实题目和渲染分支。

### 通用画布呈现修正

时间：2026-07-27 00:40:00 +08:00

- 浏览器截图显示函数和几何画布虽然已可达，但各自画布容器宽度仍撑满题目卡片，实际画布因 `useCanvasSize` 的最大宽度限制停在左侧，形成不平衡的大块留白。
- `FunctionPlotter` 与 `GeometryCanvas` 只有 `ProblemVisualization` 一个调用点，因此将容器本身约束到各自的 600px / 500px 上限并居中，不影响其他页面或绘图计算。
- 计划重新进行全量构建、六页交互/静态冒烟和截图审查后再提交。

### 编码后声明

时间：2026-07-27 00:45:00 +08:00

- 复用的既有组件：题目数据流水线、四个不等式可视化组件、`FunctionPlotter`、`GeometryCanvas` 与 `useCanvasSize`。
- 遵循的项目约定：数据转换函数保持 `with...` 命名和不可变返回；组件保持 TypeScript/React 与 Tailwind 写法；测试保持 `tsx + node:assert/strict`。
- 对比的实现：新增映射遵循 `withExtractedEmbeddedSolution` 和 `withDerivedSolutionSteps` 的串联方式；画布容器修正沿用三个不等式组件的 `mx-auto + max-w` 处理方式。
- 未重复造轮子：没有新增绘图、图形或数学依赖，所有映射均复用现有渲染器；通过集中配置避免修改五份历史题库导入文件。
- 最终验证：`npm run build`、`npx tsx .claude/browser-smoke.ts` 和截图复查均通过；依赖审计的已知残余风险已记录在验证报告。
