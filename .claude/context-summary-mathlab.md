## 项目上下文摘要（MathLab 真实可视化闭环）

生成时间：2026-07-26 14:24:13 +08:00

### 1. 目标、范围与验收条件

- 目标：让已有动态可视化真正绑定到题库中的真实题目，删除不可达的占位类型，并让测试验证数据与渲染链路，而不再只检查源码字符串。
- 范围：`lib/data` 的可视化配置、题目规范化链路、`ProblemVisualization` 分派、题目页调用和现有本地验证脚本。
- 交付物：代码、自动化测试、上下文摘要、操作日志和验证报告。
- 验收条件：至少四道真实题目覆盖二元均值、三元均值、柯西和 Jensen 四种预设；页面不依赖虚构题号；不存在“正在开发中”占位；新增类型未实现时由 TypeScript 穷尽检查阻止构建；原生全量构建通过。

### 2. 相似实现分析

- **题目内容规范化**：`lib/data/problem-content.ts:17`
  - 模式：纯函数接收 `Problem`，无变化时保持原对象，有变化时返回浅复制对象。
  - 可复用：`withExtractedEmbeddedSolution` 的转换器接口与不可变数据风格。
  - 需注意：转换顺序会影响后续索引中最终暴露的数据。
- **解析步骤派生**：`lib/data/solution-steps.ts:23`
  - 模式：把单一职责转换器接入 `lib/data/problems.ts` 的映射流水线。
  - 可复用：`withDerivedSolutionSteps` 的命名、返回协议和测试结构。
  - 需注意：已有结构化步骤必须保留，不能无条件覆盖源数据。
- **题目显示派生**：`lib/data/problemDisplay.ts:1`
  - 模式：集中封装从原始题目派生 UI 信息的规则，避免散落到页面组件。
  - 可复用：数据规则集中、调用方只消费结果的边界。
- **可视化渲染器**：`components/visualizers/CauchyViz.tsx:24`、`components/visualizers/JensenViz.tsx:19`、`components/visualizers/ThreeAmGmViz.tsx:11`、`components/visualizers/InequalityViz.tsx:13`
  - 模式：客户端组件独立维护交互状态，共用 `useCanvasSize`、KaTeX 与响应式画布约定。
  - 可复用：现有四个完整渲染器，无需新增绘图依赖或重复实现。
  - 需注意：当前入口按三个不存在的 `problemId` 分派，题库又没有任何 `visualization` 配置，因此全部不可达。

### 3. 真实题目与预设映射证据

- `prob-sec-3-3-2`：题设 `x + y = 1`，解析使用 `xy <= 1/4`，适合二元 AM-GM。
- `prob-sec-3-3-3`：三个正变量的乘积最值与相等取等条件，适合三元 AM-GM 的均衡直觉。
- `prob-sec-3-3-3-10`：单位向量与点积最值，解析明确使用柯西不等式，适合向量投影渲染器。
- `prob-sec-2-5-6-13`：解析明确以 `g(x)=x log_2 x` 使用琴生不等式，适合 Jensen 凸函数渲染器。
- `prob-sec-1-4-12`：以二次函数的下凸性为主题，适合二次函数图像。
- `prob-sec-3-3-2-9`：圆上斜率最值，适合圆、切线和关键点图形。

题库查询覆盖全部 581 道题；原先的 `ineq-cauchy-1`、`ineq-jensen-1`、`ineq-amgm-2` 均不存在于题库。

### 4. 项目约定

- **命名约定**：文件使用 kebab-case，转换函数使用 `with...`，类型和 React 组件使用 PascalCase，变量与函数使用 camelCase。
- **文件组织**：静态数据规则位于 `lib/data`，渲染器位于 `components/visualizers`，验证脚本位于 `scripts`。
- **导入顺序**：外部依赖在前，内部模块在后；类型导入使用 `import type`。
- **代码风格**：TypeScript 严格模式、双引号、无分号、两空格缩进；测试使用 `node:assert/strict` 与 `tsx` 直接执行。

### 5. 可复用组件清单

- `components/visualizers/InequalityViz.tsx`：二元 AM-GM 交互图。
- `components/visualizers/ThreeAmGmViz.tsx`：三元 AM-GM 均衡实验室。
- `components/visualizers/CauchyViz.tsx`：柯西向量投影实验室。
- `components/visualizers/JensenViz.tsx`：Jensen 凸函数实验室。
- `hooks/useCanvasSize.ts`：响应式画布尺寸与像素密度处理。
- `lib/data/problems.ts`：题目规范化、索引和查询的唯一集成点。

### 6. 测试策略

- **测试框架**：Node 严格断言，由 `tsx` 顺序运行；Next.js 构建承担完整 TypeScript 与静态导出检查。
- **新增覆盖**：验证映射只引用真实题目、四种预设均实际挂载、无映射题目保持原对象、源配置不会被覆盖。
- **契约覆盖**：`validate-ui-contract.ts` 从真实 `problems` 数据检查预设可达性，并验证每个声明预设都有渲染分支且占位文本已删除。
- **完整验证**：`npm test`、`npm run validate:data`、`npm run validate:ui`、`npm run build`，再对四个静态页面进行本地浏览器冒烟。

### 7. 依赖与集成点

```text
五份源题库
  -> withExtractedEmbeddedSolution
  -> withProblemVisualization
  -> withDerivedSolutionSteps
  -> problems / problemById
  -> app/problems/[problemId]/page.tsx
  -> ProblemVisualization
  -> 四个现有交互渲染器
```

- **外部依赖**：仅复用 React、Next.js、KaTeX；不新增依赖。
- **配置来源**：集中题号映射，避免修改五份大型历史导入文件。
- **输入协议**：`Problem.visualization` 为判别联合；不等式配置增加显式 `preset`。
- **输出协议**：题目查询接口保持不变，页面只传 `VisualizationConfig`，不再传题号参与分派。

### 8. 技术选型与外部参考

- 选择判别联合与 `switch + never` 穷尽检查，理由是渲染器集合小且封闭，能在新增配置却遗漏 UI 时直接产生编译错误。
- 选择集中映射转换器，理由是五份历史数据文件体积大、由书籍导入，集中规则更易审计和测试。
- 通过 `gh search code` 查阅了 `janpaepke/ScrollMagic`、`bvaughn/react-window`、`jest-community/eslint-plugin-jest` 中 `satisfies Record<string, ...>` 的成熟用法，用于保持键值映射的类型约束。
- Context7、GitHub MCP、Desktop Commander、sequential-thinking 与 shrimp-task-manager 在当前会话未提供；已分别以本地源码深读、`gh` CLI、PowerShell/`rg`、书面推理和验收契约替代，不据此省略验证。

### 9. 关键风险点

- **内容匹配风险**：通用可视化必须服务题目所用定理，已逐题读取题干与解析后建立映射。
- **回归风险**：映射转换器不得覆盖未来直接写入源题库的配置，测试应固定这一优先级。
- **类型漂移风险**：删除从未使用的 `vector`、`transformation` 后，以穷尽分派约束未来扩展。
- **性能风险**：仅为 581 道题增加常数时间对象查找；静态导出页数和运行时 I/O 不变。
- **边界风险**：映射键拼写错误会使功能再次不可达，测试必须对每个键反查真实题目。

### 10. 上下文充分性检查

- [x] 能定义输入、输出、参数约束与返回类型。
- [x] 已分析至少三个项目内相似实现及四个可复用渲染器。
- [x] 已确认命名、格式、构建和测试约定。
- [x] 已确认没有现成的题目可视化挂载规则，不会重复造轮子。
- [x] 已识别数据流水线、页面调用和渲染分派三个集成点。
- [x] 已明确正常、边界与回归验证方法。
