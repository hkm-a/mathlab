import type { Chapter, Section } from "./types"

// 全书结构：更高更妙的高中数学思想与方法 (第15版) by 蔡小雄
// ISBN 978-7-308-25441-0

export const chapters: Chapter[] = [
  {
    id: "ch-strategy",
    name: "更高更妙的高中数学解题策略",
    description: "夯实基础、防止定式、灵活策略、关注临界——全面提升解题能力。",
    category: "thinking-methods",
    sections: [
      "sec-1-1", "sec-1-2", "sec-1-3", "sec-1-4", "sec-1-5", "sec-1-6",
    ],
    icon: "🎯",
  },
  {
    id: "ch-thoughts",
    name: "高：善于用四大数学思想武装自己",
    description: "函数与方程、分类讨论、数形结合、化归转化——高考压轴的思想武器。",
    category: "thinking-methods",
    sections: [
      "sec-2-1", "sec-2-2", "sec-2-3", "sec-2-4", "sec-2-5",
    ],
    icon: "🧠",
  },
  {
    id: "ch-methods",
    name: "妙：妙用竞赛方法优化高考题解法",
    description: "递推、放缩、不等式、参数方程、曲线系——竞赛级方法让高考题迎刃而解。",
    category: "methods",
    sections: [
      "sec-3-1", "sec-3-2", "sec-3-3", "sec-3-4", "sec-3-5",
      "sec-3-6", "sec-3-7", "sec-3-8", "sec-3-9", "sec-3-10",
      "sec-3-11", "sec-3-12", "sec-3-13", "sec-3-14", "sec-3-15", "sec-3-16",
    ],
    icon: "✨",
  },
  {
    id: "ch-exam",
    name: "更高更妙的高考压轴题突破技巧",
    description: "函数、导数、数列、解析几何、新颖性问题——高考压轴题的全面解析。",
    category: "methods",
    sections: [
      "sec-4-1", "sec-4-2", "sec-4-3", "sec-4-4", "sec-4-5",
    ],
    icon: "🏆",
  },
  {
    id: "ch-examples",
    name: "用高妙思想解高考真题例说",
    description: "2022—2024 年高考真题的高妙解法示范。",
    category: "methods",
    sections: [
      "sec-5-1", "sec-5-2", "sec-5-3",
    ],
    icon: "📝",
  },
  {
    id: "ch-reference",
    name: "更高更妙的高中数学知识与公式大全",
    description: "必修与选修部分的核心知识、公式和图表汇编。",
    category: "reference",
    sections: [
      "sec-6-1", "sec-6-2", "sec-6-3",
    ],
    icon: "📋",
  },
]

export const sections: Section[] = [
  // 第一章 更高更妙的高中数学解题策略 (p.1-60)
  { id: "sec-1-1", chapterId: "ch-strategy", name: `夯实基础知识，争取"拾级而上"`, description: "夯实基础，循序渐进地提升解题能力。", topics: [], pageStart: 1 },
  { id: "sec-1-2", chapterId: "ch-strategy", name: `防止思维定式，实现"移花接木"`, description: "打破思维定式，灵活变换解题思路。", topics: [], pageStart: 13 },
  { id: "sec-1-3", chapterId: "ch-strategy", name: `灵活运用策略，尝试"借石攻玉"`, description: "归纳猜想、类比迁移、进退互化、整体处理、正难则反。", topics: [], pageStart: 21 },
  { id: "sec-1-4", chapterId: "ch-strategy", name: `关注临界问题，掌握"秘密武器"`, description: "临界法则、临界问题（定义新知型、高等数学背景型、学科交汇型、竞赛数学型）、临界方法。", topics: [], pageStart: 30 },
  { id: "sec-1-5", chapterId: "ch-strategy", name: `完善思维过程，达到"水到渠成"`, description: "关注解题过程与特殊策略。", topics: [], pageStart: 49 },
  { id: "sec-1-6", chapterId: "ch-strategy", name: `加强问题研究，做到"把根留住"`, description: "研究变式、优化解法、拓展应用、揭示背景。", topics: [], pageStart: 54 },

  // 第二章 高：善于用四大数学思想武装自己 (p.61-126)
  { id: "sec-2-1", chapterId: "ch-thoughts", name: "函数与方程思想", description: "显化、转换、构造函数关系；转换、构造方程形式；联用函数与方程思想。", topics: [], pageStart: 62 },
  { id: "sec-2-2", chapterId: "ch-thoughts", name: "分类讨论思想", description: "分类讨论的原则与方法；简化或避免分类讨论的途径。", topics: [], pageStart: 76 },
  { id: "sec-2-3", chapterId: "ch-thoughts", name: "数形结合思想", description: `数形结合的主要应用及"双刃剑"效应。`, topics: [], pageStart: 92 },
  { id: "sec-2-4", chapterId: "ch-thoughts", name: "化归与转化思想", description: "变量与变量、高维与低维、特殊与一般、局部与整体的转化。", topics: [], pageStart: 109 },
  { id: "sec-2-5", chapterId: "ch-thoughts", name: "综合运用数学思想解题", description: "多种数学思想的综合运用与实战演练。", topics: [], pageStart: 119 },

  // 第三章 妙：妙用竞赛方法优化高考题解法 (p.127-280)
  { id: "sec-3-1", chapterId: "ch-methods", name: "熟悉递推方法", description: "累加累乘法、待定系数法、不动点法、阶差法、直接代换法、变形转化法、数学归纳法、裂项分解法。", topics: [], pageStart: 133 },
  { id: "sec-3-2", chapterId: "ch-methods", name: "了解放缩技巧", description: "直接放缩、配方放缩、配凑放缩、裂项放缩、并项放缩、加强放缩、求导放缩、切线放缩。", topics: [], pageStart: 149 },
  { id: "sec-3-3", chapterId: "ch-methods", name: "掌握重要不等式", description: "均值不等式、柯西不等式。", topics: [], pageStart: 172 },
  { id: "sec-3-4", chapterId: "ch-methods", name: "引入参数或参数方程", description: "引参换元、分离参数、参数方程。", topics: [], pageStart: 182 },
  { id: "sec-3-5", chapterId: "ch-methods", name: "借助平面几何知识妙解解析几何题", description: "利用三角形性质、角平分线性质、平行线段成比例、圆的性质。", topics: [], pageStart: 198 },
  { id: "sec-3-6", chapterId: "ch-methods", name: "运用曲线系方程", description: "一次曲线系方程、二次曲线系方程、一般型过交点曲线系方程。", topics: [], pageStart: 208 },
  { id: "sec-3-7", chapterId: "ch-methods", name: "阿波罗尼斯圆的应用", description: "阿波罗尼斯圆的定义、性质及其在高考中的应用。", topics: [], pageStart: 222 },
  { id: "sec-3-8", chapterId: "ch-methods", name: "极坐标系的应用", description: "曲线的极坐标方程、极坐标方程与直角坐标方程的互化。", topics: [], pageStart: 228 },
  { id: "sec-3-9", chapterId: "ch-methods", name: "利用恒等式解向量题", description: "极化恒等式、分点恒等式、向量中值定理、向量数乘余弦定理、对角线向量定理、对棱角公式。", topics: [], pageStart: 235 },
  { id: "sec-3-10", chapterId: "ch-methods", name: "高斯函数", description: "高斯函数[x]的定义、性质与高考应用。", topics: [], pageStart: 245 },
  { id: "sec-3-11", chapterId: "ch-methods", name: "构造函数巧解题", description: "通过巧妙构造函数来解决各类问题。", topics: [], pageStart: 248 },
  { id: "sec-3-12", chapterId: "ch-methods", name: "多元最值问题", description: "利用基本不等式、权方和不等式、柯西不等式、消元法、换元法、判别式法等多种方法。", topics: [], pageStart: 254 },
  { id: "sec-3-13", chapterId: "ch-methods", name: "解最值函数问题的重要定理", description: "最值函数基本定理、切比雪夫最佳逼近定理。", topics: [], pageStart: 263 },
  { id: "sec-3-14", chapterId: "ch-methods", name: "泰勒展开式的应用", description: "泰勒（麦克劳林）展开式在高考中的应用。", topics: [], pageStart: 270 },
  { id: "sec-3-15", chapterId: "ch-methods", name: "朗博同构与切线放缩", description: "朗博W函数的同构技巧与切线放缩方法。", topics: [], pageStart: 273 },
  { id: "sec-3-16", chapterId: "ch-methods", name: "伸缩变换妙解一类高考题", description: "伸缩变换的方法及其在高考中的应用。", topics: [], pageStart: 276 },

  // 第四章 更高更妙的高考压轴题突破技巧 (p.281-455)
  { id: "sec-4-1", chapterId: "ch-exam", name: "函数综合问题", description: "二次函数综合、高次函数综合、分式函数综合、抽象函数综合。", topics: [], pageStart: 281 },
  { id: "sec-4-2", chapterId: "ch-exam", name: "导数综合问题", description: "三次或四次型、指数与一次或二次联袂型、对数与一次或二次联袂型、导数综合。", topics: [], pageStart: 294 },
  { id: "sec-4-3", chapterId: "ch-exam", name: "数列综合问题", description: "数列性质综合、函数与数列、数列不等式（递推等式型、递推不等式型）、点列问题。", topics: [], pageStart: 316 },
  { id: "sec-4-4", chapterId: "ch-exam", name: "解析几何综合问题", description: "弦长问题、范围(最值)问题、定值(点)问题、轨迹问题、探究性问题。", topics: [], pageStart: 347 },
  { id: "sec-4-5", chapterId: "ch-exam", name: "新颖性问题", description: "函数与导数背景、概率统计背景、数列背景、几何背景、数论与组合数学等背景。", topics: [], pageStart: 396 },

  // 第五章 用高妙思想解高考真题例说 (p.456-509)
  { id: "sec-5-1", chapterId: "ch-examples", name: "2022年高考真题", description: "2022年高考真题的高妙解法。", topics: [], pageStart: 456 },
  { id: "sec-5-2", chapterId: "ch-examples", name: "2023年高考真题", description: "2023年高考真题的高妙解法。", topics: [], pageStart: 471 },
  { id: "sec-5-3", chapterId: "ch-examples", name: "2024年高考真题", description: "2024年高考真题的高妙解法。", topics: [], pageStart: 484 },

  // 第六章 更高更妙的高中数学知识与公式大全 (p.510-549)
  { id: "sec-6-1", chapterId: "ch-reference", name: "必修部分", description: "集合与常用逻辑用语、一元二次函数方程和不等式、函数的概念与性质、指数函数与对数函数、三角函数、平面向量及其应用、复数、立体几何初步、统计、概率。", topics: [], pageStart: 510 },
  { id: "sec-6-2", chapterId: "ch-reference", name: "选修部分", description: "空间向量与立体几何、直线和圆的方程、圆锥曲线的方程、数列、一元函数的导数及其应用、计数原理、随机变量及其分布、成对数据的统计分析。", topics: [], pageStart: 530 },
  { id: "sec-6-3", chapterId: "ch-reference", name: "高妙图表", description: "高考常用公式与结论的图表化整理。", topics: [], pageStart: 547 },
]
