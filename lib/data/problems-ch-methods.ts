import type { Problem } from "./types"

export const problems_chmethods: Problem[] = [
  {
    id: "prob-sec-3-1-1",
    topicId: "topic-sec-3-1",
    title: `数列递推 a_{n+1}=a_n+1/[n(n+1)] 求通项`,
    content: `在数列 $\\{a_{n}\\}$ 中， $a_{1}=3, a_{n+1}=a_{n}+\\frac{1}{n(n+1)}$ ，求通项公式 $a_{n}$ .`,
    preview: `在数列 中， a_1=3, a_n+1=a_n+1/n(n+1) ，求通项公式 a_n .`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-1-1-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `原递推式可化为: $a_{n+1}=a_{n}+\\frac{1}{n}-\\frac{1}{n+1}$ ,

则 $a_2 = a_1 + \\frac{1}{1} -\\frac{1}{2},a_3 = a_2 + \\frac{1}{2} -\\frac{1}{3},$

$$
a _ {4} = a _ {3} + \\frac {1}{3} - \\frac {1}{4}, \\dots , a _ {n} = a _ {n - 1} + \\frac {1}{n - 1} - \\frac {1}{n},
$$

逐项相加得: $a_{n}=a_{1}+1-\\frac{1}{n}$ . 故 $a_{n}=4-\\frac{1}{n}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-1-2",
    topicId: "topic-sec-3-1",
    title: `设数列 a_n 是首项为1的正项数列，且 (n + 1)a_n + 1^2 - na_n^2 + a_n + 1a_`,
    content: `设数列 $\\{a_{n}\\}$ 是首项为1的正项数列，且 $(n + 1)a_{n + 1}^{2} - na_{n}^{2} + a_{n + 1}a_{n} = 0$ ，求数列 $\\{a_{n}\\}$ 的通项公式 $a_{n}$`,
    preview: `设数列 是首项为1的正项数列，且 ，求数列 的通项公式 a_n`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-1-2-sol-0",
        title: `解答`,
        method: "creative",
        steps: [],
        explanation: `原递推式可化为: $\\left[(n+1)a_{n+1}-na_{n}\\right](a_{n+1}+a_{n})=0$ ,

因为 $a_{n + 1} + a_n > 0, \\frac{a_{n + 1}}{a_n} = \\frac{n}{n + 1}$ .

则 $\\frac{a_{2}}{a_{1}}=\\frac{1}{2},\\frac{a_{3}}{a_{2}}=\\frac{2}{3},\\frac{a_{4}}{a_{3}}=\\frac{3}{4},\\cdots,\\frac{a_{n}}{a_{n-1}}=\\frac{n-1}{n}$ .逐项相乘得: $\\frac{a_{n}}{a_{1}}=\\frac{1}{n}$ ,即 $a_{n}=\\frac{1}{n}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-1-3",
    topicId: "topic-sec-3-1",
    title: `设数列 a_n 的首项 a_1∈(0,1),a_n=3-a_n-12,n=2,3,4,…`,
    content: `设数列 $\\{a_{n}\\}$ 的首项 $a_{1}\\in(0,1),a_{n}=\\frac{3-a_{n-1}}{2},n=2,3,4,\\cdots.$
(1) 求 $\\{a_{n}\\}$ 的通项公式；(2) 设 $b_{n}=a_{n}\\sqrt{3-2a_{n}}$ ，证明： $b_{n}<b_{n+1}$ ，其中 n 为正整数.`,
    preview: `设数列 的首项 (1) 求 的通项公式；(2) 设 b_n=a_n√{3-2a_n} ，证明： b_n<b_n+1 ，其中 n 为正整数.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-1-3-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1)由类型三, 可知原递推式可化为 $1 - a_{n} = -\\frac{1}{2}(1 - a_{n-1})$ .

又 $1 - a_{1} \\neq 0$ ，所以 $\\{1 - a_{n}\\}$ 是首项为 $1 - a_{1}$ ，公比为 $-\\frac{1}{2}$ 的等比数列，得

$$
a _ {n} = 1 - (1 - a _ {1}) \\left(- \\frac {1}{2}\\right) ^ {n - 1}.
$$

(2)`,
      },
      {
        id: "prob-sec-3-1-3-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `由(1)可知 $0 < a_{n} < \\frac{3}{2}$ , 故 $b_{n} > 0$ . 那么,

$$
\\begin{array}{l} b _ {n + 1} ^ {2} - b _ {n} ^ {2} = a _ {n + 1} ^ {2} (3 - 2 a _ {n + 1}) - a _ {n} ^ {2} (3 - 2 a _ {n}) \\\\ = \\left(\\frac {3 - a _ {n}}{2}\\right) ^ {2} \\left(3 - 2 \\times \\frac {3 - a _ {n}}{2}\\right) - a _ {n} ^ {2} (3 - 2 a _ {n}) = \\frac {9 a _ {n}}{4} (a _ {n} - 1) ^ {2}. \\\\ \\end{array}
$$

又由(1)知 $a_{n} > 0$ 且 $a_{n}\\neq 1$ ，故 $b_{n + 1}^{2} - b_{n}^{2} > 0$ ，因此， $b_{n} <   b_{n + 1},n$ 为正整数.`,
      },
      {
        id: "prob-sec-3-1-3-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `由(1)可知 $0 < a_{n} < \\frac{3}{2}, a_{n} \\neq 1$ ，因为 $a_{n+1} = \\frac{3 - a_{n}}{2}$ ，

所以 $b_{n + 1} = a_{n + 1}\\sqrt{3 - 2a_{n + 1}} = \\frac{(3 - a_n)\\sqrt{a_n}}{2}.$

由 $a_{n} \\neq 1$ 可得 $a_{n}(3 - 2a_{n}) < \\left(\\frac{3 - a_{n}}{2}\\right)^{2}$ , 即 $a_{n}^{2}(3 - 2a_{n}) < \\left(\\frac{3 - a_{n}}{2}\\right)^{2} \\cdot a_{n}$ ,

两边开平方得 $a_{n}\\sqrt{3 - 2a_{n}} < \\frac{3 - a_{n}}{2}\\cdot \\sqrt{a_{n}}.$

即 $b_{n}<b_{n+1}$ ，n 为正整数.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-1-4",
    topicId: "topic-sec-3-1",
    title: `在数列 a_n 中， a_1 = -1, a_n + 1 = 2a_n + 4 × 3^n - 1，求通项 a_n`,
    content: `在数列 $\\{a_{n}\\}$ 中， $a_1 = -1, a_{n + 1} = 2a_n + 4 \\times 3^{n - 1}$ ，求通项 $a_{n}$ .`,
    preview: `在数列 中， ，求通项 a_n .`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-1-4-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `由原递推式可设 $a_{n + 1} + \\lambda \\times 3^n = 2(a_n + \\lambda \\times 3^{n - 1})$

比较系数得 $\\lambda = -4$ ，所以 $a_{n+1} - 4 \\times 3^{n} = 2(a_{n} - 4 \\times 3^{n-1})$ .

则数列 $\\{a_{n}-4\\times3^{n-1}\\}$ 是一个等比数列，其首项是 $a_{1}-4\\times3^{1-1}=-5$ ，公比是2.

所以 $a_{n} - 4 \\times 3^{n - 1} = -5 \\times 2^{n - 1}$ , 即 $a_{n} = 4 \\times 3^{n - 1} - 5 \\times 2^{n - 1}$ .

评注 本题也可通过如下变形再运用累加法求得 $\\frac{a_{n+1}}{2^{n+1}}=\\frac{a_{n}}{2^{n}}+\\left(\\frac{3}{2}\\right)^{n-1}$ ,

令 $b_{n} = \\frac{a_{n}}{2^{n}}$ ，则 $b_{n + 1} - b_n = \\left(\\frac{3}{2}\\right)^{n - 1}, b_n = \\sum_{i = 1}^{n - 1}(b_{i + 1} - b_i) + b_1 = \\sum_{i = 1}^{n - 1}\\left(\\frac{3}{2}\\right)^{i - 1} + \\frac{a_1}{2},$ 以下略.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-1-5",
    topicId: "topic-sec-3-1",
    title: `在数列 a_n 中， a_1=-1,a_2=2,a_n+2=5a_n+1-6a_n，求通项公式 a_n`,
    content: `在数列 $\\{a_{n}\\}$ 中， $a_{1}=-1,a_{2}=2,a_{n+2}=5a_{n+1}-6a_{n}$ ，求通项公式 $a_{n}$ .`,
    preview: `在数列 中， a_1=-1,a_2=2,a_n+2=5a_n+1-6a_n ，求通项公式 a_n .`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-1-5-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `$a_{n + 2} = 5a_{n + 1} - 6a_n$ 可化为 $a_{n + 2} + \\lambda a_{n + 1} = (5 + \\lambda)(a_{n + 1} + \\lambda a_n)$

比较系数得 $\\lambda = -3$ 或 $\\lambda = -2$ ，不妨取 $\\lambda = -2$ ，则 $a_{n+2} - 2a_{n+1} = 3(a_{n+1} - 2a_n)$ .

则 $\\{a_{n+1}-2a_{n}\\}$ 是一个等比数列，首项为 $a_{2}-2a_{1}=2-2(-1)=4$ ，公比为3.

所以 $a_{n + 1} - 2a_n = 4\\times 3^{n - 1}$ ，所以 $a_{n} = 4\\times 3^{n - 1} - 5\\times 2^{n - 1}$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-1-6",
    topicId: "topic-sec-3-1",
    title: `在数列 a_n 中， a_1 = 3/2, 2a_n - a_n-1 = 6n - 3，求通项公式 a_n`,
    content: `在数列 $\\{a_{n}\\}$ 中， $a_1 = \\frac{3}{2}, 2a_{n} - a_{n-1} = 6n - 3$ ，求通项公式 $a_{n}$`,
    preview: `在数列 中， ，求通项公式 a_n`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-1-6-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `$2a_{n}-a_{n-1}=6n-3$ 可化为 $2(a_{n}+\\lambda_{1}n+\\lambda_{2})=a_{n-1}+\\lambda_{1}(n-1)+\\lambda_{2}$

比较系数可得 $\\lambda_{1}=-6,\\lambda_{2}=9$ ，所以有 $2b_{n}=b_{n-1}$ ，

因此， $\\{b_{n}\\}$ 是一个等比数列，首项为 $b_{1}=a_{1}-6n+9=\\frac{9}{2}$ ，公比为 $\\frac{1}{2}$ .

所以 $b_{n}=\\frac{9}{2}\\left(\\frac{1}{2}\\right)^{n-1}$ ，即 $a_{n}-6n+9=9\\left(\\frac{1}{2}\\right)^{n}$ .

故 $a_{n} = 9\\left(\\frac{1}{2}\\right)^{n} + 6n - 9.$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-1-7",
    topicId: "topic-sec-3-1",
    title: `已知 a_1=a_2=a_3=1`,
    content: `已知 $a_{1}=a_{2}=a_{3}=1$ ，且 $a_{n+3}=\\frac{1+a_{n+1}a_{n+2}}{a_{n}}(n\\in\\mathbf{Z}^{+})$ ，求通项公式 $a_{n}$ .`,
    preview: `已知 a_1=a_2=a_3=1 ，且 a_n+3=1+a_{n+1a_n+2}{a_n}(n^+) ，求通项公式 a_n .`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-1-7-sol-0",
        title: `解答`,
        method: "creative",
        steps: [],
        explanation: `由原递归式可得 $\\left\\{\\begin{aligned}a_{n+1}a_{n-2}&=1+a_{n}a_{n-1},\\\\ a_{n}a_{n-3}&=1+a_{n-1}a_{n-2}\\end{aligned}\\right.$ $(n\\geqslant3,n\\in\\mathbf{Z}^{+})$ ，两式相减得

$$
a _ {n + 1} a _ {n - 2} - a _ {n} a _ {n - 3} = a _ {n} a _ {n - 1} - a _ {n - 1} a _ {n - 2} \\Rightarrow a _ {n - 2} (a _ {n + 1} + a _ {n - 1}) = a _ {n} (a _ {n - 1} + a _ {n - 3})
$$

$\\Rightarrow \\frac{a_{n + 1} + a_{n - 1}}{a_n} = \\frac{a_{n - 1} + a_{n - 3}}{a_{n - 2}}$ ，令 $b_{n} = \\frac{a_{n + 1} + a_{n - 1}}{a_{n}}$ ，则 $b_{3} = 3, b_{2} = 2, b_{n - 1} = b_{n - 3}$

所以对 $n \\geqslant 2, n \\in Z^{+}$ 都有 $b_{2n-1} = 3, b_{2n} = 2$ ,

所以 $\\left\\{\\begin{aligned}a_{2n+1}+a_{2n-1}&=2a_{2n},\\\\ a_{2n+2}+a_{2n}&=3a_{2n+1}\\end{aligned}\\right.\\Rightarrow\\left\\{\\begin{aligned}a_{2n+1}&=2a_{2n}-a_{2n-1},\\\\ a_{2n+2}&=3a_{2n+1}-a_{2n}.\\end{aligned}\\right.$ ①②

令 $a_0 = 3a_1 - a_2 = 2, a_{2n+1} + \\alpha a_{2n} = \\beta (a_{2n-1} + \\alpha a_{2n-2})$ , ③

将①代入后与②比较，由待定系数法可得 $\\left\\{\\begin{aligned}\\alpha_{1}&=-1+\\frac{\\sqrt{3}}{3},\\\\ \\beta_{1}&=2+\\sqrt{3},\\end{aligned}\\right.\\left\\{\\begin{aligned}\\alpha_{2}&=-1-\\frac{\\sqrt{3}}{3},\\\\ \\beta_{2}&=2-\\sqrt{3}.\\end{aligned}\\right.$

又由③得 $\\frac{a_{2n+1}+\\alpha a_{2n}}{a_{2n-1}+\\alpha a_{2n-2}}=\\beta,$

由等比数列得 $a_{2n + 1} + \\alpha_1a_{2n} = \\beta_1^n (a_1 + \\alpha_1a_0),a_{2n + 1} + \\alpha_2a_{2n} = \\beta_2^n (a_1 + \\alpha_2a_0),$

由上两式解得 $a_{n} = \\left\\{ \\begin{array}{l}\\frac{\\sqrt{3}}{6} [(-3 + 2\\sqrt{3})(2 + \\sqrt{3})^{m} + (3 + 2\\sqrt{3})(2 - \\sqrt{3})^{m}] (n = 2m),\\\\ \\frac{1}{6} [(3 - 2\\sqrt{3})(2 + \\sqrt{3})^{m - 1} + (3 + 2\\sqrt{3})(2 - \\sqrt{3})^{m - 1}](n = 2m - 1). \\end{array} \\right.$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-1-8",
    topicId: "topic-sec-3-1",
    title: `已知数列 a_n 满足 a_1=1, a_n+1=2a_n+1 (n∈Z^+)`,
    content: `已知数列 $\\{a_{n}\\}$ 满足 $a_{1}=1, a_{n+1}=2a_{n}+1 (n\\in\\mathbf{Z}^{+})$ .
(1)求数列 $\\{a_{n}\\}$ 的通项公式；

(2) 证明: $\\frac{n}{2} - \\frac{1}{3} < \\frac{a_1}{a_2} + \\frac{a_2}{a_3} + \\cdots + \\frac{a_n}{a_{n+1}} < \\frac{n}{2} (n \\in \\mathbf{Z}^+)$ .`,
    preview: `已知数列 满足 a_1=1, a_n+1=2a_n+1 (n^+) . (1)求数列 的通项公式； (2) 证明: .`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-1-8-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)递推数列 $a_{n + 1} = 2a_n + 1$ 对应的特征函数为 $f(x) = 2x + 1$ ，由 $f(x) = x$ ，得不动点为-1，因此， $a_{n + 1} + 1 = 2(a_n + 1)$ ，即 $\\{a_n + 1\\}$ 是以 $a_1 + 1 = 2$ 为首项，2为公比的等比数列.所以 $a_{n} + 1 = 2^{n}$ .即 $a_{n} = 2^{n} - 1(n\\in \\mathbf{Z}^{+})$

(2)由 $\\frac{a_{k}}{a_{k+1}}=\\frac{2^{k}-1}{2^{k+1}-1}=\\frac{2^{k}-1}{2\\left(2^{k}-\\frac{1}{2}\\right)}<\\frac{1}{2},k=1,2,\\cdots,n,$ 得 $\\frac{a_{1}}{a_{2}}+\\frac{a_{2}}{a_{3}}+\\cdots+\\frac{a_{n}}{a_{n+1}}<\\frac{n}{2}.$

另一方面， $\\frac{a_{k}}{a_{k+1}}=\\frac{2^{k}-1}{2^{k+1}-1}=\\frac{1}{2}-\\frac{1}{2(2^{k+1}-1)}=\\frac{1}{2}-\\frac{1}{3\\times2^{k}+2^{k}-2}\\geqslant\\frac{1}{2}-\\frac{1}{3}\\times\\frac{1}{2^{k}},$ $k=1,2,\\cdots,n,$

所以 $\\frac{a_{1}}{a_{2}}+\\frac{a_{2}}{a_{3}}+\\cdots+\\frac{a_{n}}{a_{n+1}}\\geqslant\\frac{n}{2}-\\frac{1}{3}\\left(\\frac{1}{2}+\\frac{1}{2^{2}}+\\cdots+\\frac{1}{2^{n}}\\right)=\\frac{n}{2}-\\frac{1}{3}\\left(1-\\frac{1}{2^{n}}\\right)>\\frac{n}{2}-\\frac{1}{3}$

综上可得 $\\frac{n}{2}-\\frac{1}{3}<\\frac{a_{1}}{a_{2}}+\\frac{a_{2}}{a_{3}}+\\cdots+\\frac{a_{n}}{a_{n+1}}<\\frac{n}{2}(n\\in\\mathbf{Z}^{+})$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-1-9",
    topicId: "topic-sec-3-1",
    title: `在数列 a_n 中， a_1 = 4, a_n + 1 = 3a_n + 2/a_n + 4，求通项 a_n`,
    content: `在数列 $\\{a_{n}\\}$ 中， $a_1 = 4, a_{n + 1} = \\frac{3a_n + 2}{a_n + 4}$ ，求通项 $a_{n}$`,
    preview: `在数列 中， ，求通项 a_n`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-1-9-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `先求出函数 $f(x)=\\frac{3x+2}{x+4}$ 的两个不动点 1 与 -2，

代入 $\\frac{x_{n}-p}{x_{n}-q}=k\\cdot\\frac{x_{n-1}-p}{x_{n-1}-q}$ ，其中 $k=\\frac{a-pc}{a-qc}$

得 $\\frac{a_{n}-1}{a_{n}+2}=k\\cdot\\frac{a_{n-1}-1}{a_{n-1}+2},k=\\frac{3-1\\times1}{3+2\\times1}=\\frac{2}{5}.$

所以 $\\frac{a_{n}-1}{a_{n}+2}=\\frac{a_{1}-1}{a_{1}+2}\\times\\left(\\frac{2}{5}\\right)^{n-1}=\\frac{1}{2}\\times\\left(\\frac{2}{5}\\right)^{n-1}$ ，由此解得 $a_{n}=\\frac{2^{n-1}+5^{n-1}}{5^{n-1}-2^{n-2}}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-1-10",
    topicId: "topic-sec-3-1",
    title: `已知 a_1=2，且 a_n+1=a_n^2+22a_n(n≥1)，求通项 a_n`,
    content: `已知 $a_{1}=2$ ，且 $a_{n+1}=\\frac{a_{n}^{2}+2}{2a_{n}}(n\\geqslant1)$ ，求通项 $a_{n}$ .`,
    preview: `已知 a_1=2 ，且 ，求通项 a_n .`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-1-10-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `所给数列的递归函数为 $f(x)=\\frac{x^{2}+2}{2x}$ ,

解方程 $f(x)=x$ 得 f 的两个不动点为 $\\pm\\sqrt{2}$ ,

由 $a_{n + 1} + \\sqrt{2} = \\frac{a_n^2 + 2}{2a_n} +\\sqrt{2} = \\frac{(a_n + \\sqrt{2})^2}{2a_n},$

$$
a _ {n + 1} - \\sqrt {2} = \\frac {a _ {n} ^ {2} + 2}{2 a _ {n}} - \\sqrt {2} = \\frac {(a _ {n} - \\sqrt {2}) ^ {2}}{2 a _ {n}},
$$

两式相除，得 $\\frac{a_{n + 1} + \\sqrt{2}}{a_{n + 1} - \\sqrt{2}} = \\left(\\frac{a_n + \\sqrt{2}}{a_n - \\sqrt{2}}\\right)^2,$

令 $b_{n + 1} = \\frac{a_{n + 1} + \\sqrt{2}}{a_{n + 1} - \\sqrt{2}}$ ，则 $b_{n + 1} = b_n^2$ ，解得 $b_{n} = \\left(\\frac{2 + \\sqrt{2}}{2 - \\sqrt{2}}\\right)^{2^{n - 1}}.$

所以 $a_{n} = \\sqrt{2}\\times \\frac{(2 + \\sqrt{2})^{2^{n - 1}} + (2 - \\sqrt{2})^{2^{n - 1}}}{(2 + \\sqrt{2})^{2^{n - 1}} - (2 - \\sqrt{2})^{2^{n - 1}}}.$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-1-11",
    topicId: "topic-sec-3-1",
    title: `已知数列 a_n 的各项均为正数，且前 n 项和 S_n 满足 S_n = 1/6 (a_n + 1)(a_n +`,
    content: `已知数列 $\\{a_{n}\\}$ 的各项均为正数，且前 $n$ 项和 $S_{n}$ 满足 $S_{n} = \\frac{1}{6} (a_{n} + 1)(a_{n} + 2)$ ，且 $a_{2}, a_{4}, a_{9}$ 成等比数列，求数列 $\\{a_{n}\\}$ 的通项公式.`,
    preview: `已知数列 的各项均为正数，且前 n 项和 S_n 满足 S_n = 1/6 (a_n + 1)(a_n + 2) ，且 a_2, a_4, a_9 成等比数列，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-1-11-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `因为对任意 $n \\in \\mathbf{Z}^{+}$ 有 $S_{n} = \\frac{1}{6}(a_{n} + 1)(a_{n} + 2)$ ，①

所以当 $n = 1$ 时， $S_{1} = a_{1} = \\frac{1}{6}(a_{1} + 1)(a_{1} + 2)$ ，解得 $a_{1} = 1$ 或 $a_{1} = 2$ ；

当 $n \\geqslant 2$ 时，有 $S_{n-1} = \\frac{1}{6}(a_{n-1} + 1)(a_{n-1} + 2)$ . ②

由①-②整理得 $(a_{n}+a_{n-1})(a_{n}-a_{n-1}-3)=0$ .

因为 $\\{a_{n}\\}$ 各项均为正数,所以 $a_{n}-a_{n-1}=3$ .

当 $a_{1}=1$ 时， $a_{n}=1+3(n-1)=3n-2$ ，此时， $a_{4}^{2}=a_{2}a_{9}$ 成立.

当 $a_1 = 2$ 时， $a_n = 2 + 3(n - 1) = 3n - 1$ .

此时， $a_{4}^{2}=a_{2}a_{9}$ 不成立，故 $a_{1}=2$ 舍去，所以， $a_{n}=3n-2$ .

评注 求得 $a_{n} - a_{n - 1} = 3$ 后，可设 $a_{n} = a_{1} + (n - 1)\\times 3$ ，将其代入 $a_4^2 = a_2a_9$ 得到 $a_1 = 1$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-1-12",
    topicId: "topic-sec-3-1",
    title: `设数列 a_n 的 n 前项和为 S_n，已知 ba_n-2^n=(b-1)S_n, b≠0`,
    content: `设数列 $\\{a_{n}\\}$ 的 n 前项和为 $S_{n}$ ，已知 $ba_{n}-2^{n}=(b-1)S_{n}, b\\neq0$ .
(1) 证明: 当 b=2 时, $\\{a_{n}-n\\cdot2^{n-1}\\}$ 是等比数列;

(2) 求 $\\{a_{n}\\}$ 的通项公式.`,
    preview: `设数列 的 n 前项和为 S_n ，已知 ba_n-2^n=(b-1)S_n, b≠0 . (1) 证明: 当 b=2 时, 是等比数列; (2) 求 的通项`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-1-12-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `由题意，在 $ba_{n} - 2^{n} = (b - 1)S_{n}$ 中，令 $n = 1$ ，得 $ba_{1} - 2 = (b - 1)a_{1},a_{1} = 2.$

由 $ba_{n}-2^{n}=(b-1)S_{n}$ ，得 $ba_{n-1}-2^{n-1}=(b-1)S_{n-1}(n\\geqslant2,n\\in\\mathbf{Z}^{+})$

两式相减得 $b(a_{n}-a_{n-1})-2^{n-1}=(b-1)a_{n}$ ,

即 $a_{n} = ba_{n - 1} + 2^{n - 1}(n\\geqslant 2,n\\in \\mathbf{Z}^{+}).$ ①

(1) 当 b=2 时，由①知， $a_{n}=2a_{n-1}+2^{n-1}$ ，于是

$$
a _ {n} - n \\cdot 2 ^ {n - 1} = 2 a _ {n - 1} - (n - 1) \\cdot 2 ^ {n - 1} = 2 [ a _ {n - 1} - (n - 1) \\cdot 2 ^ {n - 2} ] (n \\geqslant 2, n \\in \\mathbf {Z} ^ {+}).
$$

又 $a_1 - 1 \\times 2^{1-1} = 1 \\neq 0$ ，所以 $\\{a_n - n \\cdot 2^{n-1}\\}$ 是首项为 1，公比为 2 的等比数列.

(2) 当 b=2 时，由(1)知， $a_{n}-n\\cdot2^{n-1}=2^{n-1}$ ，即 $a_{n}=(n+1)\\cdot2^{n-1}$ .

当 $b \\neq 2$ 时，由①知， $a_{n} = ba_{n-1} + 2^{n-1}$ ，

两边同时除以 $2^{n}$ 得 $\\frac{a_n}{2^n} = \\frac{b}{2} \\cdot \\frac{a_{n-1}}{2^{n-1}} + \\frac{1}{2}$ , 可设 $\\frac{a_n}{2^n} + \\lambda = \\frac{b}{2} \\cdot \\left(\\frac{a_{n-1}}{2^{n-1}} + \\lambda\\right)$ , ②

展开②得 $\\frac{a_{n}}{2^{n}}=\\frac{b}{2}\\cdot\\frac{a_{n-1}}{2^{n-1}}+\\frac{b-2}{2}\\cdot\\lambda$ ，与 $\\frac{a_{n}}{2^{n}}=\\frac{b}{2}\\cdot\\frac{a_{n-1}}{2^{n-1}}+\\frac{1}{2}$ 比较，

得 $\\frac{b-2}{2}\\cdot\\lambda=\\frac{1}{2}$ ，所以 $\\lambda=\\frac{1}{b-2}$ ，所以 $\\frac{a_{n}}{2^{n}}+\\frac{1}{b-2}=\\frac{b}{2}\\cdot\\left(\\frac{a_{n-1}}{2^{n-1}}+\\frac{1}{b-2}\\right)$

所以 $\\left\\{\\frac{a_n}{2^n} +\\frac{1}{b - 2}\\right\\}$ 是等比数列，公比为 $\\frac{b}{2}$ ，首项为 $1 + \\frac{1}{b - 2} = \\frac{b - 1}{b - 2},$

所以 $\\frac{a_{n}}{2^{n}}+\\frac{1}{b-2}=\\frac{b-1}{b-2}\\cdot\\left(\\frac{b}{2}\\right)^{n-1}$ ，所以 $\\frac{a_{n}}{2^{n}}=\\frac{b-1}{b-2}\\cdot\\left(\\frac{b}{2}\\right)^{n-1}-\\frac{1}{b-2}$

所以 $a_{n} = 2^{n}\\left[\\frac{b - 1}{b - 2}\\cdot \\left(\\frac{b}{2}\\right)^{n - 1} - \\frac{1}{b - 2}\\right] = \\frac{2(b - 1)b^{n - 1} - 2^{n}}{b - 2}.$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-1-13",
    topicId: "topic-sec-3-1",
    title: `已知数列 a_n，其中 a_1 = 1, a_2 = 2，当 n ≥ 3 时， a_n - 2a_n-1 + a_n`,
    content: `已知数列 $\\{a_{n}\\}$ ，其中 $a_1 = 1, a_2 = 2$ ，当 $n \\geqslant 3$ 时， $a_{n} - 2a_{n-1} + a_{n-2} = 1$ ，求通项公式 $a_{n}$ .`,
    preview: `已知数列 ，其中 a_1 = 1, a_2 = 2 ，当 n ≥ 3 时， a_n - 2a_n-1 + a_n-2 = 1 ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-1-13-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `由 $a_{n} - 2a_{n - 1} + a_{n - 2} = 1$ 得 $(a_{n} - a_{n - 1}) - (a_{n - 1} - a_{n - 2}) = 1.$

令 $b_{n - 1} = a_n - a_{n - 1}$ ，则上式为 $b_{n - 1} - b_{n - 2} = 1$

因此 $\\{b_{n}\\}$ 是一个等差数列, $b_{1}=a_{2}-a_{1}=1$ ,公差为1.故 $b_{n}=n$ .

由于 $b_{1}+b_{2}+\\cdots+b_{n-1}=a_{2}-a_{1}+a_{3}-a_{2}+\\cdots+a_{n}-a_{n-1}=a_{n}-1.$

又 $b_{1}+b_{2}+\\cdots+b_{n-1}=\\frac{n(n-1)}{2}$ ，所以 $a_{n}-1=\\frac{1}{2}n(n-1)$ ，即 $a_{n}=\\frac{1}{2}(n^{2}-n+2)$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-1-14",
    topicId: "topic-sec-3-1",
    title: `数列 a_n 满足 beginarrayla_1 = 1, a_n + 1 = 1/16(1 + 4a_n + √1`,
    content: `数列 $\\{a_{n}\\}$ 满足 $\\left\\{ \\begin{array}{l}a_{1} = 1,\\\\ a_{n + 1} = \\frac{1}{16}(1 + 4a_{n} + \\sqrt{1 + 24a_{n}}), \\end{array} \\right.$ 求 $\\{a_{n}\\}$ 的通项公式.`,
    preview: `数列 满足 求 的通项公式.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-1-14-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `设 $b_{n}=\\sqrt{1+24a_{n}}$ ，则 $b_{1}=5, b_{n}^{2}=1+24a_{n}$ ，将 $a_{n}=\\frac{b_{n}^{2}-1}{24}$ 代入原式，

得 $\\frac{b_{n + 1}^2 - 1}{24} = \\frac{1}{16}\\left(1 + 4\\times \\frac{b_n^2 - 1}{24} +b_n\\right)$ ，所以 $(2b_{n + 1})^2 = (b_n + 3)^2.$

因为 $b_{n} > 0$ ，所以 $2b_{n + 1} = b_n + 3$ ，由待定系数法解得 $b_{n} = 3 + \\left(\\frac{1}{2}\\right)^{n - 2}$

所以 $a_{n}=\\frac{b_{n}^{2}-1}{24}=\\frac{1}{3}+\\left(\\frac{1}{2}\\right)^{n}+\\frac{2}{3}\\left(\\frac{1}{4}\\right)^{n}.$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-1-15",
    topicId: "topic-sec-3-1",
    title: `设正数列 a_0, a_1, a_n, ·s, a_n`,
    content: `设正数列 $a_{0}, a_{1}, a_{n}, \\cdots, a_{n}, \\cdots$ 满足 $\\sqrt{a_{n}a_{n-2}} - \\sqrt{a_{n-1}a_{n-2}} = 2a_{n-1} (n \\geqslant 2)$ 且 $a_{0} = a_{1} = 1$ ，求 $\\{a_{n}\\}$ 的通项公式.`,
    preview: `设正数列 a_0, a_1, a_n, ·s, a_n, ·s 满足 且 a_0 = a_1 = 1 ，求 的通项公式.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-1-15-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `将递推式两边同除以 $\\sqrt{a_{n-1}a_{n-2}}$ ，整理得 $\\sqrt{\\frac{a_{n}}{a_{n-1}}} - 2\\sqrt{\\frac{a_{n-1}}{a_{n-2}}} = 1$ .

设 $b_{n} = \\sqrt{\\frac{a_{n}}{a_{n - 1}}}$ ，则 $b_{1} = \\sqrt{\\frac{a_{1}}{a_{0}}} = 1, b_{n} - 2b_{n - 1} = 1.$

以下可用待定系数法解得.也可运用以下方法求得:

$$
b _ {2} - 2 b _ {1} = 1, \\tag {①}
$$

$$
b _ {3} - 2 b _ {2} = 1, \\tag {②}
$$

......

$$
b _ {n} - 2 b _ {n - 1} = 1, \\tag {③}
$$

由①×2 $^{n-2}$ +②×2 $^{n-3}$ +…+③×2 $^{0}$ 得

$b_{n}=1+2+2^{2}+\\cdots+2^{n-1}=2^{n}-1$ , 即 $\\sqrt{\\frac{a_{n}}{a_{n-1}}} = 2^{n}-1$ .

逐项相乘得 $a_{n}=(2-1)^{2}(2^{2}-1)^{2}\\cdot\\cdots\\cdot(2^{n}-1)^{2}$ ，考虑到 $a_{0}=1$ ，

得 $a_{n} = \\left\\{ \\begin{array}{ll}1, & n = 0,\\\\ (2 - 1)^{2}(2^{2} - 1)^{2}\\cdot \\dots \\cdot (2^{n} - 1)^{2}, & n\\geqslant 1. \\end{array} \\right.$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-1-16",
    topicId: "topic-sec-3-1",
    title: `已知数列 a_n 中， a_1 = 2, a_n = 1 + a_n-11 - a_n-1`,
    content: `已知数列 $\\{a_{n}\\}$ 中， $a_1 = 2, a_n = \\frac{1 + a_{n-1}}{1 - a_{n-1}}$ ，求 $\\{a_{n}\\}$ 的通项公式.`,
    preview: `已知数列 中， ，求 的通项公式.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-1-16-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `令 $a_{n-1} = \\tan \\theta$ , 则 $a_n = \\frac{\\tan \\frac{\\pi}{4} + \\tan \\theta}{1 - \\tan \\frac{\\pi}{4} \\cdot \\tan \\theta} = \\tan \\left(\\frac{\\pi}{4} + \\theta\\right)$ ,

注意到 $a_1 = 2 = \\tan (\\arctan 2)$ ，因此，有 $a_{n} = \\tan \\left[\\frac{(n - 1)\\pi}{4} +\\arctan 2\\right]$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-1-17",
    topicId: "topic-sec-3-1",
    title: `若数列 a_n 中， a_1 = 1, S_n 是数列 a_n 的前 n 项之和，且 S_n+1 = S_n/3 +`,
    content: `若数列 $\\{a_{n}\\}$ 中， $a_1 = 1, S_n$ 是数列 $\\{a_{n}\\}$ 的前 $n$ 项之和，且 $S_{n+1} = \\frac{S_n}{3 + 4S_n}$ ，求数列 $\\{a_{n}\\}$ 的通项公式.`,
    preview: `若数列 中， a_1 = 1, S_n 是数列 的前 n 项之和，且 S_n+1 = S_n/3 + 4S_n ，求数列 的通项公式.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-1-17-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `递推式 $S_{n+1} = \\frac{S_n}{3 + 4S_n}$ 可变形为 $\\frac{1}{S_{n+1}} = 3 \\cdot \\frac{1}{S_n} + 4.$ ①

设①式可化为 $\\frac{1}{S_{n+1}}+\\lambda=3\\left(\\frac{1}{S_{n}}+\\lambda\\right).$ ②

比较①式与②式的系数可得 $\\lambda = 2$ ，则有 $\\frac{1}{S_{n + 1}} + 2 = 3\\left(\\frac{1}{S_n} + 2\\right)$ . 故数列 $\\left\\{\\frac{1}{S_n} + 2\\right\\}$ 是以 $\\frac{1}{S_1} + 2 = 3$ 为首项、3为公比的等比数列. $\\frac{1}{S_n} + 2 = 3 \\times 3^{n - 1} = 3^n$ . 所以 $S_n = \\frac{1}{3^n - 2}$ .

当 $n\\geqslant 2$ 时， $a_{n} = S_{n} - S_{n - 1} = \\frac{1}{3^{n} - 2} -\\frac{1}{3^{n - 1} - 2} = \\frac{-2\\times 3^{n}}{3^{2n} - 8\\times 3^{n} + 12}.$

数列 $\\{a_{n}\\}$ 的通项公式是 $a_{n}=\\left\\{\\begin{aligned}&1,&n=1,\\\\ &-2\\times3^{n}\\\\ &\\frac{-2^{n}-8\\times3^{n}+12}{3^{2n}}&n\\geqslant2.\\end{aligned}\\right.$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-1-18",
    topicId: "topic-sec-3-1",
    title: `已知 a_1=b, a_n+1=pa_n+√(p^2-1)a_n^2+q，求 a_n`,
    content: `已知 $a_{1}=b, a_{n+1}=pa_{n}+\\sqrt{(p^{2}-1)a_{n}^{2}+q}$ ，求 $a_{n}$ .`,
    preview: `已知 ，求 a_n .`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-1-18-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `$a_{n+1}-pa_{n}=\\sqrt{(p^{2}-1)a_{n}^{2}+q}$ ,

两边平方后整理，得 $a_{n + 1}^2 -2pa_{n + 1}a_n + a_n^2 -q = 0$ ，用 $n - 1$ 替换 $n$ 得

$a_{n}^{2} - 2pa_{n}a_{n - 1} + a_{n - 1}^{2} - q = 0$ ，即 $a_{n - 1}^{2} - 2pa_{n - 1}a_{n} + a_{n}^{2} - q = 0,$

所以 $a_{n + 1}, a_{n - 1}$ 是方程 $x^{2} - 2pa_{n}x + a_{n}^{2} - q = 0$ 的两根.

由韦达定理, 可得 $a_{n+1} + a_{n-1} = 2pa_{n}$ , 以下可用特征方程求得通项, 略.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-1-19",
    topicId: "topic-sec-3-1",
    title: `数列 a_n 满足 a_1=1 且 8a_n+1a_n-16a_n+1+2a_n+5=0(n≥1)`,
    content: `数列 $\\{a_{n}\\}$ 满足 $a_{1}=1$ 且 $8a_{n+1}a_{n}-16a_{n+1}+2a_{n}+5=0(n\\geqslant1)$ .
记 $b_{n} = \\frac{1}{a_{n} - \\frac{1}{2}} (n\\geqslant 1)$ ，求数列 $\\{b_n\\}$ 的通项公式.`,
    preview: `数列 满足 a_1=1 且 . 记 b_n = 1/a_n - 1/2 (n≥ 1) ，求数列 的通项公式.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-1-19-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `(数学归纳法)

$a_1 = 1$ ，故 $b_{1} = \\frac{1}{1 - \\frac{1}{2}} = 2;a_{2} = \\frac{7}{8}$ 故 $b_{2} = \\frac{1}{\\frac{7}{8} - \\frac{1}{2}} = \\frac{8}{3};a_{3} = \\frac{3}{4}$ 故 $b_{3} = \\frac{1}{\\frac{3}{4} - \\frac{1}{2}} = 4;$

$a_{4} = \\frac{13}{20}$ 故 $b_{4} = \\frac{20}{3}$ .

所以 $\\left(b_{1}-\\frac{4}{3}\\right)\\left(b_{3}-\\frac{4}{3}\\right)=\\frac{2}{3}\\times\\frac{8}{3}=\\left(\\frac{4}{3}\\right)^{2},\\left(b_{2}-\\frac{4}{3}\\right)^{2}=\\left(\\frac{4}{3}\\right)^{2}$

$$
\\left(b _ {1} - \\frac {4}{3}\\right) \\left(b _ {3} - \\frac {4}{3}\\right) = \\left(b _ {2} - \\frac {4}{3}\\right) ^ {2},
$$

故猜想 $\\left\\{b_{n}-\\frac{4}{3}\\right\\}$ 是首项为 $\\frac{2}{3}$ 、公比q=2的等比数列.

因为 $a_{n} \\neq 2$ （否则将 $a_{n} = 2$ 代入递推公式会导致矛盾），故 $a_{n + 1} = \\frac{5 + 2a_n}{16 - 8a_n}$ .

因为 $b_{n + 1} - \\frac{4}{3} = \\frac{1}{a_{n + 1} - \\frac{1}{2}} -\\frac{4}{3} = \\frac{16 - 8a_n}{6a_n - 3} -\\frac{4}{3} = \\frac{20 - 16a_n}{6a_n - 3},$

$$
2 \\left(b _ {n} - \\frac {4}{3}\\right) = \\frac {2}{a _ {n} - \\frac {1}{2}} - \\frac {8}{3} = \\frac {2 0 - 1 6 a _ {n}}{6 a _ {n} - 3} = b _ {n + 1} - \\frac {4}{3}, b _ {1} - \\frac {4}{3} \\neq 0,
$$

故 $\\left\\{b_{n}-\\frac{4}{3}\\right\\}$ 是公比为q=2的等比数列.

因为 $b_{1}-\\frac{4}{3}=\\frac{2}{3}$ ，故 $b_{n}-\\frac{4}{3}=\\frac{1}{3}\\cdot2^{n}$ ， $b_{n}=\\frac{1}{3}\\cdot2^{n}+\\frac{4}{3}(n\\geqslant1)$ .`,
      },
      {
        id: "prob-sec-3-1-19-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `由 $b_{n} = \\frac{1}{a_{n} - \\frac{1}{2}}$ 得 $a_{n} = \\frac{1}{b_{n}} +\\frac{1}{2}$

代入递推关系 $8a_{n+1}a_{n}-16a_{n+1}+2a_{n}+5=0$ ,

整理得 $\\frac{4}{b_{n+1}b_n}-\\frac{6}{b_{n+1}}+\\frac{3}{b_n}=0$ ，即 $b_{n+1}=2b_n-\\frac{4}{3}$

由 $a_{1}=1$ ，有 $b_{1}=2$ ，

由 $b_{n + 1} = 2b_n - \\frac{4}{3}, b_{n + 1} - \\frac{4}{3} = 2\\left(b_n - \\frac{4}{3}\\right)$ , 有 $b_1 - \\frac{4}{3} = \\frac{2}{3} \\neq 0$ ,

所以 $\\left\\{b_{n}-\\frac{4}{3}\\right\\}$ 是首项为 $\\frac{2}{3}$ 、公比q=2的等比数列，故 $b_{n}-\\frac{4}{3}=\\frac{1}{3}\\cdot2^{n}$ ，即

$$
b _ {n} = \\frac {1}{3} \\times 2 ^ {n} + \\frac {4}{3} (n \\geqslant 1).
$$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-1-20",
    topicId: "topic-sec-3-1",
    title: `已知数列 a_n 满足条件 (n-1)a_n+1=(n+1)(a_n-1)，且 a_2=6，设 b_n=a_n+n(`,
    content: `已知数列 $\\{a_{n}\\}$ 满足条件 $(n-1)a_{n+1}=(n+1)(a_{n}-1)$ ，且 $a_{2}=6$ ，设 $b_{n}=a_{n}+n(n\\in\\mathbf{Z}^{+})$ ，求 $\\{b_{n}\\}$ 的通项公式.`,
    preview: `已知数列 满足条件 (n-1)a_n+1=(n+1)(a_n-1) ，且 a_2=6 ，设 b_n=a_n+n(n^+) ，求 的通项公式.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-1-20-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `将 $a_{n}=b_{n}-n$ 代入 $(n-1)a_{n+1}=(n+1)(a_{n}-1)$ ,

得 $(n-1)b_{n+1}=(n+1)b_{n}-2(n+1)$ ,

所以 $\\frac{b_{n+1}}{n(n+1)}=\\frac{b_{n}}{(n-1)n}-\\frac{2}{n(n-1)}(n\\geqslant2).$

令 $c_{n} = \\frac{b_{n}}{(n - 1)n} (n\\geqslant 2)$ ，则 $c_{n + 1} = c_n - \\frac{2}{n(n - 1)}$

得 $c_{n + 1} - c_n = -\\frac{2}{n(n - 1)} = 2\\left(\\frac{1}{n} -\\frac{1}{n - 1}\\right).$

$$
\\begin{array}{l} = 2 \\left(\\frac {1}{n - 1} - \\frac {1}{n - 2} + \\frac {1}{n - 2} - \\frac {1}{n - 3} + \\dots + \\frac {1}{2} - 1\\right) + c _ {2} \\\\ = 2 \\left(\\frac {1}{n - 1} - 1\\right) + \\frac {b _ {2}}{2} = \\frac {2}{n - 1} + 2, \\\\ \\end{array}
$$

所以 $c_{n} = (c_{n} - c_{n - 1}) + (c_{n - 1} - c_{n - 2}) + \\dots +(c_{3} - c_{2}) + c_{2}$

所以 $b_{n} = c_{n}\\cdot n(n - 1) = \\left(\\frac{2}{n - 1} +2\\right)\\cdot n(n - 1) = 2n^{2}.$

评注 本题也可根据递推式求出 $a_1 = 1, a_2 = 6, a_3 = 15, a_4 = 28$ ，由 $b_n = a_n + n$ 解得 $b_1 = 2, b_2 = 8, b_3 = 18, b_4 = 32$ ，利用不完全归纳法，猜测 $b_n = 2n^2$ ，再用数学归纳法证明.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-1-21",
    topicId: "topic-sec-3-1",
    title: `若数列 a_n 中， a_1=3 且 a_n+1=a_n^2 （n是正整数），求它的通项公式 a_n`,
    content: `若数列 $\\{a_{n}\\}$ 中， $a_{1}=3$ 且 $a_{n+1}=a_{n}^{2}$ （n是正整数），求它的通项公式 $a_{n}$ .`,
    preview: `若数列 中， a_1=3 且 a_n+1=a_n^2 （n是正整数），求它的通项公式 a_n .`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-1-21-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `由题意知 $a_{n} > 0$ ，将 $a_{n + 1} = a_n^2$ 两边取对数得 $\\lg a_{n + 1} = 2\\lg a_n$ ，即 $\\frac{\\lg a_{n + 1}}{\\lg a_n} = 2$ ，所以，数列 $\\{\\lg a_n\\}$ 是以 $\\lg a_1 = \\lg 3$ 为首项、公比为2的等比数列， $\\lg a_{n} = \\lg a_{1}\\cdot 2^{n - 1} = \\lg 3^{2^{n - 1}}$ ，即 $a_{n} = 3^{2^{n - 1}}$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-1-22",
    topicId: "topic-sec-3-1",
    title: `已知函数 f(x) = (x + 1)^4 + (x - 1)^4/(x + 1)^4 - (x - 1)^4 (x`,
    content: `已知函数 $f(x) = \\frac{(x + 1)^4 + (x - 1)^4}{(x + 1)^4 - (x - 1)^4} (x \\neq 0)$ . 在数列 $\\{a_n\\}$ 中, $a_1 = 2, a_{n+1} = f(a_n) (n \\in \\mathbf{Z}^+)$ , 求数列 $\\{a_n\\}$ 的通项公式.`,
    preview: `已知函数 . 在数列 中, , 求数列 的通项公式.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-1-22-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `$a_{n + 1} = \\frac{(a_n + 1)^4 + (a_n - 1)^4}{(a_n + 1)^4 - (a_n - 1)^4}\\Rightarrow \\frac{a_{n + 1} + 1}{a_{n + 1} - 1} = \\frac{(a_n + 1)^4}{(a_n - 1)^4} = \\left(\\frac{a_n + 1}{a_n - 1}\\right)^4,$

从而有 $\\ln\\frac{a_{n+1}+1}{a_{n+1}-1}=4\\ln\\frac{a_{n}+1}{a_{n}-1}$ ,

由此及 $\\ln\\frac{a_{1}+1}{a_{1}-1}=\\ln3\\neq0$ 知，数列 $\\left\\{\\ln\\frac{a_{n}+1}{a_{n}-1}\\right\\}$ 是首项为 $\\ln3$ 、公比为 4 的等比数列，

故有 $\\ln\\frac{a_{n}+1}{a_{n}-1}=4^{n-1}\\ln3\\Rightarrow\\frac{a_{n}+1}{a_{n}-1}=3^{4^{n-1}}\\Rightarrow a_{n}=\\frac{3^{4^{n-1}}+1}{3^{4^{n-1}}-1}(n\\in\\mathbf{Z}^{+})$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-1-23",
    topicId: "topic-sec-3-1",
    title: `已知数列 a_n 各项都是正数，且满足 a_0=1,a_n+1=1/2a_n(4-a_n),n∈N`,
    content: `已知数列 $\\{a_{n}\\}$ 各项都是正数，且满足 $a_{0}=1,a_{n+1}=\\frac{1}{2}a_{n}(4-a_{n}),n\\in\\mathbf{N}$ .
(1) 证明： $a_{n}<a_{n+1}<2, n\\in N;$

(2)求数列 $\\{a_{n}\\}$ 的通项公式 $a_{n}$ .

(1)证法一 先求通项,由于 $a_{n+1}=\\frac{1}{2}a_{n}(4-a_{n})=\\frac{1}{2}\\left[-(a_{n}-2)^{2}+4\\right]$ ,

因此， $2(2-a_{n+1})=(2-a_{n})^{2}$

令 $b_{n} = 2 - a_{n}$ ，则 $b_{n} = \\frac{1}{2} b_{n - 1}^{2} = \\frac{1}{2}\\left(\\frac{1}{2} b_{n - 2}^{2}\\right)^{2} = \\frac{1}{2}\\cdot \\left(\\frac{1}{2}\\right)^{2}b_{n - 1}^{2} = \\dots = \\left(\\frac{1}{2}\\right)^{1 + 2 + \\dots +2^{n - 1}}b_{0}^{2^{n}},$

又 $b_{0} = 1$ ，所以 $b_{n} = \\left(\\frac{1}{2}\\right)^{2^{n} - 1}$ ，即 $a_{n} = 2 - b_{n} = 2 - \\left(\\frac{1}{2}\\right)^{2^{n} - 1}$

由此易得 $a_{n}<a_{n+1}<2$ .

证法二 用数学归纳法证明如下：

(i) 当 $n = 1$ 时, $a_0 = 1, a_1 = \\frac{1}{2} a_0 (4 - a_0) = \\frac{3}{2}$ , 因此, $a_0 < a_1 < 2$ , 命题正确.

(ii) 假设 n=k 时，有 $a_{k-1}<a_{k}<2$ 成立.

则 $n = k + 1$ 时， $a_{k} - a_{k + 1} = \\frac{1}{2} a_{k - 1}(4 - a_{k - 1}) - \\frac{1}{2} a_{k}(4 - a_{k})$

$$
= 2 (a _ {k - 1} - a _ {k}) - \\frac {1}{2} (a _ {k - 1} - a _ {k}) (a _ {k - 1} + a _ {k})
$$

$$
= \\frac {1}{2} (a _ {k - 1} - a _ {k}) (4 - a _ {k - 1} - a _ {k}).
$$

而 $a_{k-1} - a_k < 0, 4 - a_{k-1} - a_k > 0$ ，所以 $a_k - a_{k+1} < 0$ .

又 $a_{k + 1} = \\frac{1}{2} a_k(4 - a_k) = \\frac{1}{2} [4 - (a_k - 2)^2 ] <   2,$

则 $n=k+1$ 时,命题正确.

由(i)(ii)知,对一切 $n \\in N$ ,有 $a_{n} < a_{n+1} < 2$ .

证法三 用数学归纳法另证如下：

(i) 当 $n = 1$ 时, $a_0 = 1, a_1 = \\frac{1}{2} a_0 (4 - a_0) = \\frac{3}{2}$ , 因此, $0 < a_0 < a_1 < 2$ ;

(ii) 假设 n=k 时，有 $a_{k-1}<a_{k}<2$ 成立，

令 $f(x) = \\frac{1}{2} x(4 - x)$

$f(x)$ 在 $[0,2]$ 上单调递增,所以由假设有:

$$
f (a _ {k - 1}) <   f (a _ {k}) <   f (2),
$$

即 $\\frac{1}{2} a_{k - 1}(4 - a_{k - 1}) <   \\frac{1}{2} a_k(4 - a_k) <   \\frac{1}{2}\\times 2\\times (4 - 2),$

也即当 $n=k+1$ 时， $a_{k}<a_{k+1}<2$ 成立，所以对一切 $n\\in N$ ，有 $a_{k}<a_{k+1}<2$ 。

(2) 见 (1) 证法一.`,
    preview: `已知数列 各项都是正数，且满足 a_0=1,a_n+1=1/2a_n(4-a_n),n . (1) 证明： a_n<a_n+1<2, n N; (2)求数列 的`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-1-23-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `先求通项. 由于 $a_{n + 1} = \\frac{1}{2} a_n(4 - a_n) = \\frac{1}{2}[-(a_n - 2)^2 +4]$ , 因此 $2(2-a_{n+1})=(2-a_{n})^{2}$ . 令 $b_{n} = 2 - a_{n}$ , 则 $b _ {n} = \\frac {1}{2} b _ {n - 1} ^ {2} = \\left(\\frac {1}{2}
ight) ^ {1 + 2 + \\dots + 2 ^ {n - 1}} b _ {0} ^ {2 ^ {n}}$ . 又 $b_{0} = 1$ , 所以 $b_{n} = \\left(\\frac{1}{2}
ight)^{2^{n} - 1}$ , 即 $a_{n} = 2 - \\left(\\frac{1}{2}
ight)^{2^{n} - 1}$ . 由此易得 $a_{n}<a_{n+1}<2$ .`,
      },

    ],
    tags: [],
  },
  {
    id: "prob-sec-3-1-24",
    topicId: "topic-sec-3-1",
    title: `设 a_0 为常数`,
    content: `设 $a_{0}$ 为常数，且 $a_{n}=3^{n-1}-2a_{n-1}(n\\in\\mathbf{Z}^{+})$ .
(1)`,
    preview: `设 a_0 为常数，且 a_n=3^n-1-2a_n-1(n^+) . (1) 证明: 对任意 ; (2) 假设对任意 n ≥ 1 ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-1-24-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `证明: 对任意 $n \\geqslant 1, a_{n} = \\frac{1}{5} [3^{n} + (-1)^{n-1} \\times 2^{n}] + (-1)^{n} \\times 2^{n} a_{0}$ ;
(2) 假设对任意 $n \\geqslant 1$ ，都有 $a_{n} > a_{n-1}$ ，求 $a_{0}$ 的取值范围.

(1)证法一 (数学归纳法)

(i) $a_{1}=3^{0}-2a_{0}=1-2a_{0}$ ，即 $a_{1}=1-2a_{0}$ ，所以当n=1时，等式成立.
(ii) 假设 $n=k(k \\geqslant 1)$ 时, 等式成立,

即 $a_{k} = \\frac{1}{5} [3^{k} + (-1)^{k - 1}2^{k}] + (-1)^{k}\\times 2^{k}a_{0},$

那么 $a_{k + 1} = 3^k -2a_k = 3^k -\\frac{2}{5} [3^k +(-1)^{k - 1}2^k ] - (-1)^k\\times 2^{k + 1}a_0$

$$
= \\frac {1}{5} [ 3 ^ {k + 1} + (- 1) ^ {k} \\times 2 ^ {k + 1} ] + (- 1) ^ {k + 1} \\times 2 ^ {k + 1} a _ {0},
$$

也就是说, 当 $n=k+1$ 时, 等式也成立.

根据(i)(ii)可知,等式对于任何 $n \\in Z^{+}$ 成立.

证法二 $a_{n} = 3^{n - 1} - 2a_{n - 1}\\Leftrightarrow \\frac{a_n}{3^{n - 1}} = -\\frac{2a_{n - 1}}{3^{n - 1}} +1\\Leftrightarrow 3\\times \\frac{a_n}{3^n} = -2\\times \\frac{a_{n - 1}}{3^{n - 1}} +1$

$$
\\Leftrightarrow 3 \\left(\\frac {a _ {n}}{3 ^ {n}} - \\frac {1}{5}\\right) = - 2 \\left(\\frac {a _ {n - 1}}{3 ^ {n - 1}} - \\frac {1}{5}\\right),
$$

所以， $\\left\\{\\frac{a_{n}}{3^{n}}-\\frac{1}{5}\\right\\}$ 是公比为 $-\\frac{2}{3}$ 、首项为 $a_{0}-\\frac{1}{5}$ 的等比数列，

所以， $\\frac{a_{n}}{3^{n}}-\\frac{1}{5}=\\left(a_{0}-\\frac{1}{5}\\right)\\left(-\\frac{2}{3}\\right)^{n}$

即 $a_{n} = \\frac{1}{5} [3^{n} + (-1)^{n - 1}\\times 2^{n}] + (-1)^{n}\\times 2^{n}a_{0}$

(2) $a_{n} - a_{n - 1} = \\frac{2\\times 3^{n - 1} + (-1)^{n - 1}\\times 3\\times 2^{n - 1}}{5} +(-1)^{n}\\times 3\\times 2^{n - 1}a_{0},$

所以 $a_{n} > a_{n - 1}(n\\in \\mathbf{Z}^{+})\\Leftrightarrow (-1)^{n - 1}(5a_{0} - 1) <   \\left(\\frac{3}{2}\\right)^{n - 2}(n\\in \\mathbf{Z}^{+}).$ ①

(i) 当 $n$ 为奇数时, ① 式为 $5a_{0} - 1 < \\left(\\frac{3}{2}\\right)^{n-2}$ ,

所以， $a_0 <   \\frac{1}{5}\\left(\\frac{3}{2}\\right)^{n - 2} + \\frac{1}{5}$ ，所以， $a_0 <   \\frac{1}{5}\\left(\\frac{3}{2}\\right)^{-1} + \\frac{1}{5} = \\frac{1}{3}.$

(ii) 当 n 为偶数时, ① 式为 $5a_{0}-1>-\\left(\\frac{3}{2}\\right)^{n-2}$ ,

所以 $a_0 > -\\frac{1}{5}\\left(\\frac{3}{2}\\right)^{n-2} + \\frac{1}{5},$

所以， $a_0 > -\\frac{1}{5}\\times 1 + \\frac{1}{5} = 0.$

综上所述，①式对任意 $n\\in \\mathbf{Z}^{+}$ 成立，有 $0 < a_0 < \\frac{1}{3}$

故 $a_0$ 的取值范围是 $\\left(0, \\frac{1}{3}\\right)$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-1-25",
    topicId: "topic-sec-3-1",
    title: `递推数列转化为 b_n 的单调有界证明`,
    content: `数列 $\\{a_{n}\\}$ 满足： $a_1 = \\frac{3}{2}, a_n = \\frac{3na_{n-1}}{2a_{n-1} + n-1} (n \\geqslant 2, n \\in \\mathbf{Z}^+)$ ，设 $b_n = \\frac{a_n}{n}$ .
求证: $b_{1}\\cdot b_{2}\\cdot\\cdots\\cdot b_{n}<2(n\\geqslant2)$ .`,
    preview: `数列 满足： ，设 b_n = a_n/n . 求证: b_1· b_2··s· b_n<2(n≥2) . 证明 因为 a_n=3na_n-1{2a`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-1-25-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `证明 因为 $a_{n}=\\frac{3na_{n-1}}{2a_{n-1}+n-1}$ ,

所以 $\\frac{n}{a_{n}}=\\frac{2a_{n-1}+n-1}{3a_{n-1}}=\\frac{2}{3}+\\frac{n-1}{3a_{n-1}}$

所以 $\\frac{n}{a_{n}}-1=\\frac{1}{3}\\left(\\frac{n-1}{a_{n-1}}-1\\right)$ ,

因为 $\\frac{1}{a_{1}}-1=-\\frac{1}{3}$ ，所以 $\\frac{n}{a_{n}}=1-\\frac{1}{3^{n}}$

得 $b_{n}=\\frac{3^{n}}{3^{n}-1}$ ，只要证 $b_{1}\\cdot b_{2}\\cdot\\cdots\\cdot b_{n}<2\\times\\frac{3^{n}-1}{3^{n}}(n\\geqslant2)$ .

以下用数学归纳法.

(1) 当 n=2 时, $b_{1} \\cdot b_{2}=\\frac{27}{16}<右边=2 \\times \\frac{8}{9}.$
(2) 假设 n=k 时， $b_{1} \\cdot b_{2} \\cdot \\cdots \\cdot b_{k} < 2 \\times \\frac{3^{k}-1}{3^{k}} (k \\geqslant 2)$ ,

则当 $n=k+1$ 时， $b_{1}\\cdot b_{2}\\cdot\\cdots\\cdot b_{k}\\cdot b_{k+1}<2\\times\\frac{3^{k}-1}{3^{k}}\\times\\frac{3^{k+1}}{3^{k+1}-1}(k\\geqslant2)$

只要证 $2 \\times \\frac{3^k - 1}{3^k} \\times \\frac{3^{k + 1}}{3^{k + 1} - 1} < 2 \\times \\frac{3^{k + 1} - 1}{3^{k + 1}}$ ,

只要证 $(3^{k}-1)\\times3^{k+2}<(3^{k+1}-1)^{2}$ ，化简知只要证 $3^{k+1}>-1$ .

显然成立,以上各步均可逆,得证.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-1-26",
    topicId: "topic-sec-3-1",
    title: `非线性递推数列的上界估计`,
    content: `设数列 $\\{a_{n}\\}$ 满足 $a_{0}=\\frac{1}{2},a_{n+1}=a_{n}+\\frac{a_{n}^{2}}{2012}(n=0,1,\\cdots)$ .
求整数 k，使得 $a_{k}<1<a_{k+1}$ .`,
    preview: `设数列 满足 . 求整数 k，使得 a_k<1<a_k+1 .`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-1-26-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `由题意知 $\\frac{1}{2}=a_{0}<a_{1}<\\cdots<a_{2012}$

由 $a_{n + 1} = a_n + \\frac{a_n^2}{2012}\\Rightarrow \\frac{1}{2012 + a_n} = \\frac{1}{a_n} -\\frac{1}{a_{n + 1}}\\Rightarrow \\frac{1}{a_0} -\\frac{1}{a_n} = \\sum_{i = 0}^{n - 1}\\frac{1}{a_i + 2012}$

$$
\\Rightarrow 2 - \\frac {1}{a _ {2 0 1 2}} = \\sum_ {i = 0} ^ {2 0 1 1} \\frac {1}{a _ {i} + 2 0 1 2} <   \\sum_ {i = 0} ^ {2 0 1 1} \\frac {1}{2 0 1 2} = 1 \\Rightarrow a _ {2 0 1 2} <   1.
$$

由 $a_0 < a_1 < \\cdots < a_{2012} < 1$ ，得 $2 - \\frac{1}{a_{2013}} = \\sum_{i=0}^{2012} \\frac{1}{a_i + 2012} > \\sum_{i=0}^{2012} \\frac{1}{1 + 2012} = 1 \\Rightarrow a_{2013} > 1.$

综上，k=2012.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-1-27",
    topicId: "topic-sec-3-1",
    title: `含参数 n 的非线性递推数列估计`,
    content: `设数列 $\\{a_{n}\\}$ 满足 $a_{0}=\\frac{1}{2},a_{k+1}=a_{k}+\\frac{a_{k}^{2}}{n}(k=0,1,\\cdots,n-1)$ .
证明： $1-\\frac{1}{n}<a_{n}<1$`,
    preview: `设数列 满足 . 证明： 1-1/n<a_n<1`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-1-27-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `由 $\\frac{1}{a_k} -\\frac{1}{a_{k + 1}} <   \\frac{1}{n}\\Rightarrow \\frac{1}{a_0} -\\frac{1}{a_n} = \\sum_{k = 0}^{n - 1}\\left(\\frac{1}{a_k} -\\frac{1}{a_{k + 1}}\\right) <   \\sum_{k = 0}^{n - 1}\\frac{1}{n} = 1\\Rightarrow a_n <   1.$

由 $a_{k + 1} = a_k + \\frac{a_k^2}{n} < a_k + \\frac{a_k}{n}\\Rightarrow a_k > \\frac{n}{n + 1} a_{k + 1}$

$$
\\begin{array}{l} \\Rightarrow a _ {k + 1} = a _ {k} + \\frac {a _ {k} ^ {2}}{n} > a _ {k} + \\frac {a _ {k}}{n} \\cdot \\frac {n}{n + 1} a _ {k + 1} = a _ {k} + \\frac {1}{n + 1} a _ {k} a _ {k + 1} \\Rightarrow \\frac {1}{a _ {k}} - \\frac {1}{a _ {k + 1}} > \\frac {1}{n + 1} \\\\ \\Rightarrow \\frac {1}{a _ {0}} - \\frac {1}{a _ {n}} = \\sum_ {k = 0} ^ {n - 1} \\left(\\frac {1}{a _ {k}} - \\frac {1}{a _ {k + 1}}\\right) > \\sum_ {k = 0} ^ {n - 1} \\frac {1}{n + 1} = \\frac {n}{n + 1} \\Rightarrow a _ {n} > 1 - \\frac {1}{n + 2} > 1 - \\frac {1}{n}. \\\\ \\end{array}
$$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-1-28",
    topicId: "topic-sec-3-1",
    title: `已知数列 a_n 满足 a_1 = 1/3, a_n+1 = a_n + a_n^2/n^2 (n ∈ Z^+)`,
    content: `已知数列 $\\{a_{n}\\}$ 满足 $a_1 = \\frac{1}{3}, a_{n+1} = a_n + \\frac{a_n^2}{n^2} (n \\in \\mathbf{Z}^+)$ .`,
    preview: `已知数列 满足 . 证明：对一切 n Z^+ ，有 (1) a_n<a_n+1<1 ; (2) a_n>1/2-1/4n. 证明 (1) 显然, . 对一切 .`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-1-28-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `证明：对一切 $n \\in \\mathbf{Z}^+$ ，有
(1) $a_{n}<a_{n+1}<1$ ; (2) $a_{n}>\\frac{1}{2}-\\frac{1}{4n}.$

证明 (1) 显然, $a_{n} > 0, a_{n+1} = a_{n} + \\frac{a_{n}^{2}}{n^{2}} > a_{n} (n \\in \\mathbf{Z}^{+})$ .

对一切 $k \\in \\mathbf{Z}^{+}, a_{k+1} = a_{k} + \\frac{a_{k}^{2}}{k^{2}} < a_{k} + \\frac{1}{k^{2}} a_{k} a_{k+1} \\Rightarrow \\frac{1}{a_{k}} - \\frac{1}{a_{k+1}} < \\frac{1}{k^{2}}$ .

因此，当 $n \\geqslant 2$ 时，

$$
\\begin{array}{l} \\frac {1}{a _ {n}} = \\frac {1}{a _ {1}} - \\sum_ {k = 1} ^ {n - 1} \\left(\\frac {1}{a _ {k}} - \\frac {1}{a _ {k + 1}}\\right) > \\frac {1}{a _ {1}} - \\sum_ {k = 1} ^ {n - 1} \\frac {1}{k ^ {2}} > 3 - \\left[ 1 + \\sum_ {k = 2} ^ {n - 1} \\frac {1}{k (k - 1)} \\right] \\\\ = 3 - \\left[ 1 + \\sum_ {k = 2} ^ {n - 1} \\left(\\frac {1}{k - 1} - \\frac {1}{k}\\right) \\right] = 3 - \\left(1 + 1 - \\frac {1}{n - 1}\\right) = \\frac {n}{n - 1} > 1. \\\\ \\end{array}
$$

所以， $a_{n} < 1$ .又 $a_1 = \\frac{1}{3} < 1$ ，故对一切 $n\\in \\mathbf{Z}^{+}$ ，有 $a_{n} < 1$

因此，对一切 $n\\in \\mathbf{Z}^{+}$ ，有 $a_{n} <   a_{n + 1} <   1.$

(2) 显然, $a_{1} = \\frac{1}{3} > \\frac{1}{4} = \\frac{1}{2} - \\frac{1}{4}$ .

由 $a_{n} < 1$ ，知 $a_{k + 1} = a_k + \\frac{a_k^2}{k^2} < a_k + \\frac{a_k}{k^2}\\Rightarrow a_k > \\frac{k^2}{k^2 + 1} a_{k + 1}$

$$
\\Rightarrow a _ {k + 1} = a _ {k} + \\frac {a _ {k} ^ {2}}{k ^ {2}} > a _ {k} + \\frac {1}{k ^ {2}} a _ {k} \\cdot \\frac {k ^ {2}}{k ^ {2} + 1} a _ {k + 1} = a _ {k} + \\frac {1}{k ^ {2} + 1} a _ {k} a _ {k + 1} \\Rightarrow \\frac {1}{a _ {k}} - \\frac {1}{a _ {k + 1}} > \\frac {1}{k ^ {2} + 1}.
$$

因此，当 $n \\geqslant 2$ 时，

$$
\\begin{array}{l} \\frac {1}{a _ {n}} = \\frac {1}{a _ {1}} - \\sum_ {k = 1} ^ {n - 1} \\left(\\frac {1}{a _ {k}} - \\frac {1}{a _ {k + 1}}\\right) <   \\frac {1}{a _ {1}} - \\sum_ {k = 1} ^ {n - 1} \\frac {1}{k ^ {2} + 1} <   3 - \\sum_ {k = 1} ^ {n - 1} \\frac {1}{k (k + 1)} \\\\ = 3 - \\sum_ {k = 1} ^ {n - 1} \\left(\\frac {1}{k} - \\frac {1}{k + 1}\\right) \\\\ = 3 - \\left(1 - \\frac {1}{n}\\right) = \\frac {2 n + 1}{n}. \\\\ \\end{array}
$$

则 $a_{n} > \\frac{n}{2n + 1} = \\frac{1}{2} -\\frac{1}{2(2n + 1)} >\\frac{1}{2} -\\frac{1}{4n}.$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-1-29",
    topicId: "topic-sec-3-1",
    title: `数列 a_n 各项均为正数,且对任意的 n∈ Z^+ 满足`,
    content: `数列 $\\{a_{n}\\}$ 各项均为正数,且对任意的 $n\\in Z^{+}$ 满足
$a_{n + 1} = a_n + ca_n^2$ （常数 $c > 0$ ）.`,
    preview: `数列 各项均为正数,且对任意的 n Z^+ 满足 a_n + 1 = a_n + ca_n^2 （常数 c > 0 ）. 证明:(1)对任意的正数 M, 存在`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-1-29-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `证明:(1)对任意的正数 M, 存在 $N \\in Z^{+}$ , 当 n > N 时, 有 $a_{n} > M$ ;

(2) 若 $b_n = \\frac{1}{1 + ca_n}$ , $S_n$ 是数列 $\\{b_n\\}$ 的前 $n$ 项和, 则对任意的 $d > 0$ , 存在 $N \\in \\mathbf{Z}^+$ , 当 $n > N$ 时, 有 $0 < \\left|S_n - \\frac{1}{ca_1}\\right| < d$ . ①

证明 (1) 对任意 $n \\in \\mathbf{Z}^{+}$ , 由 $a_{n} > 0, c > 0$ , 知 $a_{n+1} = a_{n} + ca_{n}^{2} > a_{n}$ ,

且 $a_{n + 1} - a_n = a_n - a_{n - 1} + ca_n^2 -ca_{n - 1}^2 >a_n - a_{n - 1} > \\dots >a_2 - a_1.$

则 $a_{n}=a_{n}-a_{n-1}+a_{n-1}-a_{n-2}+\\cdots+a_{2}-a_{1}+a_{1}>(n-1)(a_{2}-a_{1})=(n-1)ca_{1}^{2}.$

对任意正数 $M$ ，存在 $N = \\left[\\frac{M}{ca_1^2}\\right] + 2\\in \\mathbf{Z}^{+}$ ([x]表示不超过实数 $x$ 的最大整数)，当 $n>$ $N$ 时，有 $a_{n} > M$

(2)由 $a_{n + 1} = a_n + ca_n^2$ ，知 $\\frac{1}{1 + ca_n} = \\frac{1}{c}\\cdot \\frac{1}{\\frac{1}{c} + a_n} = \\frac{1}{c}\\left(\\frac{1}{a_n} -\\frac{1}{a_{n + 1}}\\right)$

$$
\\Rightarrow S _ {n} = \\sum_ {i = 1} ^ {n} b _ {i} = \\frac {1}{c a _ {1}} - \\frac {1}{c a _ {n + 1}} \\Rightarrow \\left| S _ {n} - \\frac {1}{c a _ {1}} \\right| = \\frac {1}{c a _ {n + 1}} > 0.
$$

由(1)知 $a_{n + 1} > nca_1^2$ .要使 $\\left|S_n - \\frac{1}{ca_1}\\right| = \\frac{1}{ca_{n + 1}} < d$ ，只要 $\\frac{1}{nc^2a_1^2} < d$ ，即 $n > \\frac{1}{dc^2a_1^2}$

故对任意 $d > 0$ ，存在 $N = \\left[\\frac{1}{dc^2a_1^2}\\right] + 1\\in \\mathbf{Z}^+$ ，当 $n > N$ 时，有式①成立.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-2-1",
    topicId: "topic-sec-3-2",
    title: `已知数列 a_1=3, a_n+1=(a_n-1)^2+1`,
    content: `已知数列 $a_{1}=3, a_{n+1}=(a_{n}-1)^{2}+1$ ，求证： $a_{1} \\cdot a_{2} \\cdot \\cdots \\cdot a_{n}<2^{2^{n}}$ .`,
    preview: `已知数列 a_1=3, a_n+1=(a_n-1)^2+1 ，求证： a_1 · a_2 · ·s · a_n<2°{2^n} .`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-2-1-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `根据递推关系式,运用迭代法求出通项,由通项放缩证得.

由原式得 $a_{n + 1} - 1 = (a_n - 1)^2$ ，采用迭代法，有

$$
a _ {n + 1} - 1 = (a _ {n} - 1) ^ {2} = \\left[ (a _ {n - 1} - 1) ^ {2} \\right] ^ {2} = \\dots = (a _ {1} - 1) ^ {2 ^ {n}} = 2 ^ {2 ^ {n}}.
$$

所以 $a_{n} = 2^{2^{n - 1}} + 1$ ，从而有

$$
\\begin{array}{l} a _ {1} a _ {2} a _ {3} \\dots a _ {n} = 3 \\times 5 \\times 1 7 \\times \\dots \\times (2 ^ {2 ^ {n - 1}} + 1) \\\\ = (2 - 1) (2 + 1) (2 ^ {2} + 1) (2 ^ {4} + 1) \\dots (2 ^ {2 ^ {n - 1}} + 1) = \\dots = 2 ^ {2 ^ {n}} - 1 <   2 ^ {2 ^ {n}}. \\\\ \\end{array}
$$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-2-2",
    topicId: "topic-sec-3-2",
    title: `数列 a_n 满足 S_n=n/2a_n(n∈Z^+), S_n 是 a_n 的前 n 项的和, a_2=1`,
    content: `数列 $\\{a_{n}\\}$ 满足 $S_{n}=\\frac{n}{2}a_{n}(n\\in\\mathbf{Z}^{+})$ , $S_{n}$ 是 $\\{a_{n}\\}$ 的前 n 项的和, $a_{2}=1$ .
(1) 求 $S_{n}$ ;
(2) 证明: $\\frac{3}{2} < \\left(1 + \\frac{1}{2a_{n+1}}\\right)^n < 2$ .`,
    preview: `数列 满足 S_n=n/2a_n(n^+) , S_n 是 的前 n 项的和, a_2=1 . (1) 求 S_n ; (2) 证明: 3/2 < (1 + 1`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-2-2-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 当 $n \\geqslant 2$ 时, 由 $\\left\\{ \\begin{array}{l} S_n = \\frac{n}{2} a_n, \\\\ S_{n+1} = \\frac{n+1}{2} a_{n+1} \\end{array} \\right.$ 两式相减得 $(n-1)a_{n+1} = na_n$ , 即 $\\frac{a_{n+1}}{a_n} = \\frac{n}{n-1}$ .

所以 $a_{n} = \\frac{a_{n}}{a_{n - 1}}\\cdot \\frac{a_{n - 1}}{a_{n - 2}}\\cdot \\dots \\cdot \\frac{a_3}{a_2}\\cdot a_2 = \\frac{n - 1}{n - 2}\\cdot \\frac{n - 2}{n - 3}\\cdot \\frac{2}{1}\\cdot 1 = n - 1$ ，又 $a_1 = \\frac{1}{2} a_1$ 得 $a_1 = 0$

故 $S_{n} = \\frac{n}{2} a_{n} = \\frac{n(n - 1)}{2}$

(2) $\\left(1 + \\frac{1}{2a_{n+1}}\\right)^n = \\left(1 + \\frac{1}{2n}\\right)^n$

$$
= 1 + C _ {n} ^ {1} \\cdot \\frac {1}{2 n} + C _ {n} ^ {2} \\cdot \\left(\\frac {1}{2 n}\\right) ^ {2} + \\dots + C _ {n} ^ {r} \\cdot \\left(\\frac {1}{2 n}\\right) ^ {r} + \\dots + C _ {n} ^ {n} \\cdot \\left(\\frac {1}{2 n}\\right) ^ {n}.
$$

因此， $\\left(1 + \\frac{1}{2n}\\right)^n > C_n^0 + C_n^1\\left(\\frac{1}{2n}\\right) = \\frac{3}{2}.$

另一方面，易证 $\\frac{2n + 1}{2n} < \\frac{2n - k}{2n - (k + 1)} (k = 0,1,\\dots ,n - 1),$

则 $\\left(1+\\frac{1}{2n}\\right)^{n}=\\left(\\frac{2n+1}{2n}\\right)^{n}<\\frac{2n}{2n-1}\\cdot\\frac{2n-1}{2n-2}\\cdot\\cdots\\cdot\\frac{n+1}{n}=2.$

因此，有 $\\frac{3}{2} < \\left(1 + \\frac{1}{2a_{n + 1}}\\right)^n < 2.$ 当 $n = 1$ 时， $\\frac{3}{2} = 1 + \\frac{1}{2\\times 1}$ ，左边等号成立.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-2-3",
    topicId: "topic-sec-3-2",
    title: `已知数列 a_n 满足 a_n > 0，且对一切 n∈ Z^+，有 sum_i = 1^na_i^3 = S_n^2`,
    content: `已知数列 $\\{a_{n}\\}$ 满足 $a_{n} > 0$ ，且对一切 $n\\in \\mathbf{Z}^{+}$ ，有 $\\sum_{i = 1}^{n}a_i^3 = S_n^2$
其中 $S_{n} = \\sum_{i=1}^{n} a_{i}$ , 其中 $\\sum_{i=1}^{n} a_{i}^{3} = a_{1}^{3} + a_{2}^{3} + a_{3}^{3} + \\cdots + a_{n}^{3}$ .

(1) 求证：对一切 $n \\in Z^{+}$ ，有 $a_{n+1}^{2} - a_{n+1} = 2S_{n}$ ;
(2) 求数列 $\\{a_{n}\\}$ 的通项公式；
(3) 求证: $\\sum_{k=1}^{n}\\frac{\\sqrt{k}}{a_{k}^{2}}<3.$`,
    preview: `已知数列 满足 a_n > 0 ，且对一切 n Z^+ ，有 _i = 1^na_i^3 = S_n^2 其中 S_n = _i=1^n a_i , 其中 .`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-2-3-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 由 $\\left\\{ \\begin{array}{l} \\sum_{i=1}^{n} a_i^3 = S_n^2, \\\\ \\sum_{i=1}^{n+1} a_i^3 = S_{n+1}^2 \\end{array} \\right.$ 得

$$
a _ {n + 1} ^ {3} = S _ {n + 1} ^ {2} - S _ {n} ^ {2} = (S _ {n + 1} + S _ {n}) (S _ {n + 1} - S _ {n}) = (2 S _ {n} + a _ {n + 1}) a _ {n + 1}.
$$

因为 $a_{n + 1} > 0$ ，所以 $a_{n + 1}^2 - a_{n + 1} = 2S_n$ .

(2)由 $a_{n + 1}^2 -a_{n + 1} = 2S_n$ ，及 $a_{n}^{2} - a_{n} = 2S_{n - 1}(n\\geqslant 2)$

两式相减，得 $(a_{n + 1} + a_n)(a_{n + 1} - a_n) = a_{n + 1} + a_n.$

因为 $a_{n+1} + a_{n} > 0$ ，所以 $a_{n+1} - a_{n} = 1 (n \\geqslant 2)$ .

当 n=1,2 时，易得 $a_{1}=1,a_{2}=2$ ，所以 $a_{n+1}-a_{n}=1(n\\geqslant1)$ .

所以 $\\{a_{n}\\}$ 为等差数列，首项 $a_{1}=1$ ，公差d=1，故 $a_{n}=n$ .

(3)证法一 $\\sum_{k=1}^{n} \\frac{\\sqrt{k}}{a_k^2} = \\sum_{k=1}^{n} \\frac{1}{\\sqrt{k^3}} < 1 + \\sum_{k=2}^{n} \\frac{1}{\\sqrt{(k-1)k(k+1)}}$

$$
\\begin{array}{l} <   1 + \\sum_ {k = 2} ^ {n} \\frac {2}{\\sqrt {(k - 1) (k + 1)} (\\sqrt {k + 1} + \\sqrt {k - 1})} \\\\ = 1 + \\sum_ {k = 2} ^ {n} \\frac {\\sqrt {k + 1} - \\sqrt {k - 1}}{\\sqrt {(k - 1) (k + 1)}} \\\\ = 1 + \\sum_ {k = 2} ^ {n} \\left(\\frac {1}{\\sqrt {k - 1}} - \\frac {1}{\\sqrt {k + 1}}\\right) \\\\ = 1 + 1 + \\frac {\\sqrt {2}}{2} - \\frac {1}{\\sqrt {n}} - \\frac {1}{\\sqrt {n + 1}} \\\\ <   2 + \\frac {\\sqrt {2}}{2} <   3. \\\\ \\end{array}
$$

证法二 $k + 1 > \\sqrt{k(k - 1)}\\Rightarrow 2k > \\sqrt{k(k - 1)} +(k - 1)$

$$
\\begin{array}{l} \\Rightarrow 2 k > \\sqrt {k - 1} (\\sqrt {k} + \\sqrt {k - 1}) \\\\ \\Rightarrow \\frac {1}{k \\cdot \\sqrt {k}} <   \\frac {2 (\\sqrt {k} - \\sqrt {k - 1})}{\\sqrt {k - 1} \\cdot \\sqrt {k}} = 2 \\Big (\\frac {1}{\\sqrt {k - 1}} - \\frac {1}{\\sqrt {k}} \\Big) (k \\geqslant 2) \\\\ \\Rightarrow \\sum_ {k = 1} ^ {n} \\frac {\\sqrt {k}}{a _ {k} ^ {2}} = \\sum_ {k = 1} ^ {n} \\frac {1}{\\sqrt {k ^ {3}}} <   1 + \\sum_ {k = 2} ^ {n} 2 \\Big (\\frac {1}{\\sqrt {k - 1}} - \\frac {1}{\\sqrt {k}} \\Big) (k \\geqslant 2) = 3 - \\frac {2}{\\sqrt {n}} <   3. \\\\ \\end{array}
$$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-2-4",
    topicId: "topic-sec-3-2",
    title: `已知不等式组 beginalignedx^2+√(2)ax+5&≥1/3, x^2+√(2)ax+5&≤7/2end`,
    content: `已知不等式组 $\\left\\{\\begin{aligned}x^{2}+\\sqrt{2}ax+5&\\geqslant\\frac{1}{3},\\\\ x^{2}+\\sqrt{2}ax+5&\\leqslant\\frac{7}{2}\\end{aligned}\\right.$ 有唯一解，则a=\\_\\_\\_\\_。`,
    preview: `已知不等式组 有唯一解，则a=\\_\\_\\_\\_。`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-2-4-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `配方, 可得 $\\frac{1}{2}a^{2}-\\frac{14}{3}\\leqslant\\left(x+\\frac{\\sqrt{2}}{2}a\\right)^{2}\\leqslant\\frac{1}{2}a^{2}-\\frac{3}{2}$ 只有唯一解,

所以 $\\frac{1}{2}a^{2}-\\frac{3}{2}=0$ ，得 $a=\\pm\\sqrt{3}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-2-5",
    topicId: "topic-sec-3-2",
    title: `若 x, y 为实数`,
    content: `（1）若 x, y 为实数， $4x^{2} + y^{2} + xy = 1$ ，则 $2x + y$ 的最大值是 \\_\\_\\_\\_.
(2)若实数 $x, y$ 满足 $x^{2} - 4xy + 4y^{2} + 4x^{2}y^{2} = 4$ , 则当 $x + 2y$ 取得最大值时, $\\frac{x}{y}$ 的值为 \\_\\_\\_\\_.
(3)若正数 x, y 满足 $3x - 3y + \\frac{4}{x} + y^{2} = 5$ ，则 $x + y$ 的最小值为 \\_\\_\\_\\_.`,
    preview: `若 x, y 为实数， 4x^2 + y^2 + xy = 1 ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-2-5-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 配方, 可得 $1=(2x+y)^{2}-3xy$ ,

而 $3xy = \\frac{3}{2} (2x)\\cdot y\\leqslant \\frac{3}{2}\\left(\\frac{2x + y}{2}\\right)^2 = \\frac{3}{8} (2x + y)^2,$

代入，得 $1 = (2x + y)^2 - 3xy \\geqslant (2x + y)^2 - \\frac{3}{8} (2x + y)^2 = \\frac{5}{8} (2x + y)^2,$

所以 $|2x + y|\\leqslant \\frac{2\\sqrt{10}}{5},2x + y$ 的最大值是 $\\frac{2\\sqrt{10}}{5}$

(2) 配方, 可得 $(x+2y)^{2}+4(xy-1)^{2}=8\\geqslant(x+2y)^{2}$ ,

所以当 xy=1 时， $x+2y$ 取得最大值，此时 $x=\\sqrt{2}$ ， $y=\\frac{\\sqrt{2}}{2}$ ，因此 $\\frac{x}{y}$ 的值为 2.

(3) 配方, 可得

$$
x + y + 5 = x + y + \\left(3 x - 3 y + \\frac {4}{x} + y ^ {2}\\right) = \\left(4 x + \\frac {4}{x}\\right) + (y - 1) ^ {2} - 1 \\geqslant 8 - 1 = 7,
$$

即 $x+y \\geqslant 2$ ，当且仅当 x=y=1 时取等号，

所以所求最小值为 2.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-2-6",
    topicId: "topic-sec-3-2",
    title: `若正数 x, y, z 满足 x^2 + y^2 +`,
    content: `若正数 x, y, z 满足 $x^{2} + y^{2} + z^{2} - xy - yz = 1$ ，则 z 的最大值为 \\_\\_\\_\\_.`,
    preview: `若正数 x, y, z 满足 x^2 + y^2 + z^2 - xy - yz = 1 ，则 z 的最大值为 \\_\\_\\_\\_.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-2-6-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `配方, 可得 $1 = \\left(x - \\frac{1}{2} y\\right)^2 + \\frac{3}{4} \\left(y - \\frac{2}{3} z\\right)^2 + \\frac{2}{3} z^2 \\geqslant \\frac{2}{3} z^2$ ,

所以 $z \\leqslant \\frac{\\sqrt{6}}{2}$ , 当 $x = \\frac{y}{2}, y = \\frac{2}{3} z, z = \\frac{\\sqrt{6}}{2}$ 时取等号, 因此, $z$ 的最大值为 $\\frac{\\sqrt{6}}{2}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-2-7",
    topicId: "topic-sec-3-2",
    title: `若正数 x, y 满足`,
    content: `若正数 x, y 满足 $(2xy-1)^{2}=(5y+2)(y-2)$ ，则 $x+\\frac{1}{2y}$ 的最大值为 \\_\\_\\_\\_.`,
    preview: `若正数 x, y 满足 (2xy-1)^2=(5y+2)(y-2) ，则 x+1/2y 的最大值为 \\_\\_\\_\\_.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-2-7-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `由已知式,变形配方得

$$
\\frac {(2 x y - 1) ^ {2}}{y ^ {2}} = 5 - 4 \\cdot \\frac {2}{y} - \\left(\\frac {2}{y}\\right) ^ {2} = 9 - \\left(2 + \\frac {2}{y}\\right) ^ {2},
$$

即 $\\left(\\frac{2xy - 1}{y}\\right)^2 +\\left(2 + \\frac{2}{y}\\right)^2 = 9$ ，再由柯西不等式或重要不等式“ $\\sqrt{\\frac{a^2 + b^2}{2}}\\geqslant \\frac{a + b}{2}$ ”，

得 $9 = \\left(\\frac{2xy - 1}{y}\\right)^2 +\\left(2 + \\frac{2}{y}\\right)^2\\geqslant \\frac{1}{2}\\left[\\left(2x - \\frac{1}{y}\\right) + \\left(2 + \\frac{2}{y}\\right)\\right]^2 = \\frac{1}{2}\\left(2x + \\frac{1}{y} +2\\right)^2,$

即 $\\frac{1}{2}\\left(2x + \\frac{1}{y} + 2\\right)^2 \\leqslant 9$ ，所以 $2x + \\frac{1}{y} + 2 \\leqslant 3\\sqrt{2}$ ，即 $x + \\frac{1}{2y} \\leqslant \\frac{3\\sqrt{2}}{2} - 1$

当且仅当 $x = \\frac{9\\sqrt{2} - 4}{8}, y = 8 + 6\\sqrt{2}$ 时取等号，

故所求最大值为 $\\frac{3\\sqrt{2}}{2}-1$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-2-8",
    topicId: "topic-sec-3-2",
    title: `已知实数 x, y 满足 x + y > 0`,
    content: `已知实数 x, y 满足 $x + y > 0$ ，则 $\\frac{3 + 2x^{2} + xy + y^{2}}{x + y}$ 的最小值为 \\_\\_\\_\\_.`,
    preview: `已知实数 x, y 满足 x + y > 0 ，则 3 + 2x^{2 + xy + y^2}x + y 的最小值为 \\_\\_\\_\\_.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-2-8-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `用待定系数法配方.

设 $3 + 2x^{2} + xy + y^{2} = 3 + a(x + y)^{2} + (2 - a)x^{2} + (1 - 2a)xy + (1 - a)y^{2}$ ，其中 $a$ 为待定系数，观察右三项的“判别式”，令 $(1 - 2a)^{2} - 4(2 - a)(1 - a) = 0$ ，解得 $a = \\frac{7}{8}$ ，

所以 $3 + 2x^{2} + xy + y^{2} = 3 + \\frac{7}{8} (x + y)^{2} + \\frac{9}{8} x^{2} - \\frac{3}{4} xy + \\frac{1}{8} y^{2}$

$$
= 3 + \\frac {7}{8} (x + y) ^ {2} + \\frac {9}{8} \\left(x - \\frac {1}{3} y\\right) ^ {2}
$$

$$
\\geqslant 3 + \\frac {7}{8} (x + y) ^ {2},
$$

因为 $x + y > 0$

所以 $\\frac{3 + 2x^2 + xy + y^2}{x + y} \\geqslant \\frac{3 + \\frac{7}{8}(x + y)^2}{x + y} = \\frac{3}{x + y} + \\frac{7(x + y)}{8} \\geqslant \\frac{\\sqrt{42}}{2}$ ,

当且仅当 $x-\\frac{1}{3}y=0, x+y=\\frac{2\\sqrt{42}}{7}$ ，即 $x=\\frac{\\sqrt{42}}{14}, y=\\frac{3\\sqrt{42}}{14}$ 时取等号，

故所求最小值为 $\\frac{\\sqrt{42}}{2}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-2-9",
    topicId: "topic-sec-3-2",
    title: `已知正数 a, b, c 满足 a^2 + b^2 +`,
    content: `已知正数 a, b, c 满足 $a^{2} + b^{2} + c^{2} = 1$ ，则 $3ab + bc$ 的最大值为 \\_\\_\\_\\_.`,
    preview: `已知正数 a, b, c 满足 a^2 + b^2 + c^2 = 1 ，则 3ab + bc 的最大值为 \\_\\_\\_\\_.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-2-9-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `直接配凑.

因为 $1 = a^{2} + \\frac{9}{10} b^{2} + \\frac{1}{10} b^{2} + c^{2}\\geqslant 2\\sqrt{\\frac{9}{10}} ab + 2\\sqrt{\\frac{1}{10}} bc,$

所以 $3ab + bc \\leqslant \\frac{\\sqrt{10}}{2}$ ，等号当且仅当 $a = \\sqrt{\\frac{9}{10}}b, c = \\sqrt{\\frac{1}{10}}b$ 时成立.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-2-10",
    topicId: "topic-sec-3-2",
    title: `设实数 x, y`,
    content: `设实数 x, y 满足 $3 \\leqslant xy^{2} \\leqslant 8, 4 \\leqslant \\frac{x^{2}}{y} \\leqslant 9$ ，则 $\\frac{x^{3}}{y^{4}}$ 的最大值是 \\_\\_\\_\\_.`,
    preview: `设实数 x, y 满足 ，则 x^3{y^4} 的最大值是 \\_\\_\\_\\_.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-2-10-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `利用已知式结构配凑. 首先将不等式 $4 \\leqslant \\frac{x^2}{y} \\leqslant 9$ 两边平方得 $16 \\leqslant \\frac{x^4}{y^2} \\leqslant 81$ . 利用倒数性质将不等式 $3 \\leqslant xy^{2} \\leqslant 8$ 变为 $\\frac{1}{8} \\leqslant \\frac{1}{xy^{2}} \\leqslant \\frac{1}{3}$ . 两式相乘得 $2 \\leqslant \\frac{x^{3}}{y^{4}} \\leqslant 27$ , 则 $\\frac{x^{3}}{y^{4}}$ 的最大值是 27.`,
      },

    ],
    tags: [],
  },
  {
    id: "prob-sec-3-2-11",
    topicId: "topic-sec-3-2",
    title: `设 a > b > c > 0`,
    content: `设 a > b > c > 0，则 $2a^{2} + \\frac{1}{ab} + \\frac{1}{a(a - b)} - 10ac + 25c^{2}$ 的最小值是 \\_\\_\\_\\_.
A. 2

B. 4

C. $2 \\sqrt{5}$

D. 5`,
    preview: `设 a > b > c > 0，则 的最小值是 \\_\\_\\_\\_. A. 2 B. 4 C. 2 √5 D. 5`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-2-11-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `按平方与倒数关系配凑.

$$
\\begin{array}{l} 2 a ^ {2} + \\frac {1}{a b} + \\frac {1}{a (a - b)} - 1 0 a c + 2 5 c ^ {2} \\\\ = (a - 5 c) ^ {2} + a ^ {2} - a b + a b + \\frac {1}{a b} + \\frac {1}{a (a - b)} \\\\ = (a - 5 c) ^ {2} + a b + \\frac {1}{a b} + a (a - b) + \\frac {1}{a (a - b)} \\\\ \\geqslant 0 + 2 + 2 = 4, \\\\ \\end{array}
$$

当且仅当 $a-5c=0, ab=1, a(a-b)=1$ 时等号成立，

如取 $a=\\sqrt{2}, b=\\frac{\\sqrt{2}}{2}, c=\\frac{\\sqrt{2}}{5}$ 满足条件.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-2-12",
    topicId: "topic-sec-3-2",
    title: `已知实数 x, y, x > 1, y > 0`,
    content: `（1）已知实数 x, y, x > 1, y > 0，且 $x + 4y + \\frac{1}{x - 1} + \\frac{1}{y} = 11$ ，求 $\\frac{1}{x - 1} + \\frac{1}{y}$ 的最大值.
(2)已知实数 $x, y \\in (1, +\\infty)$ , 且 $xy - 2x - y + 1 = 0$ , 求 $\\frac{3}{2} x^2 + y^2$ 的最小值.
(3)设非负实数 x, y 满足 $2x + y = 1$ ，求 $x + \\sqrt{x^{2} + y^{2}}$ 的最小值.`,
    preview: `已知实数 x, y, x > 1, y > 0，且 x + 4y + 1/x - 1 + 1/y = 11 ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-2-12-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1)由已知式配凑, 得 $\\frac{1}{x-1} + \\frac{1}{y} = 10 - [(x-1) + 4y]$ ,

所以 $\\left(\\frac{1}{x-1}+\\frac{1}{y}\\right)^{2}=10\\left(\\frac{1}{x-1}+\\frac{1}{y}\\right)-\\left[(x-1)+4y\\right]\\left(\\frac{1}{x-1}+\\frac{1}{y}\\right)$

$$
\\leqslant 1 0 \\left(\\frac {1}{x - 1} + \\frac {1}{y}\\right) - (5 + 2 \\sqrt {4}) = 1 0 \\left(\\frac {1}{x - 1} + \\frac {1}{y}\\right) - 9,
$$

解得 $1 \\leqslant \\frac{1}{x - 1} + \\frac{1}{y} \\leqslant 9$ ，当且仅当 $x = \\frac{4}{3}, y = \\frac{1}{6}$ 时取得最大值9.

(2)`,
      },
      {
        id: "prob-sec-3-2-12-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `配方法.

因为 $1=(x-1)(y-2)\\leqslant\\frac{1}{4}(x+y-3)^{2}$ ，所以 $x+y\\geqslant5$ .

所以 $\\left(\\frac{3}{2}x^{2}+3\\right)+(y^{2}-3)\\geqslant(x+1)^{2}+(y^{2}-3)\\geqslant\\frac{1}{2}(x+y+1)^{2}-3\\geqslant15,$

当且仅当 x=2, y=3 时等号成立，所以 $\\frac{3}{2}x^{2}+y^{2}$ 的最小值为 15.`,
      },
      {
        id: "prob-sec-3-2-12-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `换元并利用均值不等式. 设 x-1=t>0, 则

$$
\\begin{array}{l} \\frac {3}{2} x ^ {2} + y ^ {2} = \\frac {3}{2} (t + 1) ^ {2} + \\left(2 + \\frac {1}{t}\\right) ^ {2} \\\\ = t ^ {2} + \\frac {1}{t ^ {2}} + 3 \\left(t + \\frac {1}{t}\\right) + \\frac {1}{2} \\left(t ^ {2} + \\frac {1}{t} + \\frac {1}{t}\\right) + \\frac {1 1}{2} \\geqslant 2 + 6 + \\frac {3}{2} + \\frac {1 1}{2} = 1 5, \\\\ \\end{array}
$$

当且仅当 t=1 时等号成立, 所以 $\\frac{3}{2}x^{2}+y^{2}$ 的最小值为 15.`,
      },
      {
        id: "prob-sec-3-2-12-sol-3",
        title: `解法三`,
        method: "standard",
        steps: [],
        explanation: `配凑后利用柯西不等式求得.

因为 $1=(x-1)(y-2)$ ，所以

$$
\\frac {3}{2} x ^ {2} + y ^ {2} = \\frac {3}{5} \\left(\\frac {3}{2} x ^ {2} + y ^ {2}\\right) \\left(\\frac {2}{3} + 1\\right) \\geqslant \\frac {3}{5} (x + y) ^ {2} = \\frac {3}{5} [ (x - 1) + (y - 2) + 3 ] ^ {2} \\geqslant 1 5,
$$

当且仅当 $x - 1 = y - 2$ 时等号成立，所以 $\\frac{3}{2} x^2 +y^2$ 的最小值为15.

(3) 先设 $t = x + \\sqrt{x^{2} + y^{2}}$ ，则 $(t - x)^{2} = x^{2} + y^{2}$ .

因为 $2x+y=1$ ，所以 $(t-x)^{2}=x^{2}+(1-2x)^{2}$ ，

所以 $4x^{2}+(2t-4)x+1-t^{2}=0.$

在这个关于 x 的方程中， $\\Delta=(2t-4)^{2}-16(1-t^{2})\\geqslant0$ ，所以 $t\\geqslant\\frac{4}{5}$ .

所以 $x+\\sqrt{x^{2}+y^{2}}$ 的最小值为 $\\frac{4}{5}$ ，此时 $x=\\frac{3}{10}$ ， $y=\\frac{4}{5}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-2-13",
    topicId: "topic-sec-3-2",
    title: `函数 y= x+ x/1+ x 的最大值是`,
    content: `（1）函数 $y=\\frac{\\sin x+\\cos x}{1+\\sin x}$ 的最大值是 \\_\\_\\_\\_.
(2) 记 $F(x, y) = (x - y)^{2} + \\left(\\frac{x}{3} + \\frac{3}{y}\\right)^{2} (y \\neq 0)$ ，则 $F(x, y)$ 的最小值是 \\_\\_\\_\\_.
(3)已知 x, y 都在区间 $(-2, 2)$ 内，且 xy = -1，则函数 $u = \\frac{4}{4 - x^{2}} + \\frac{9}{9 - y^{2}}$ 的最小值为 \\_\\_\\_\\_.`,
    preview: `函数 y= x+ x/1+ x 的最大值是 \\_\\_\\_\\_. (2) 记 ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-2-13-sol-0",
        title: `解答`,
        method: "creative",
        steps: [],
        explanation: `构造可视为高层次的“配凑”，以上三小题可通过配凑，构造解析几何中的距离或利用向量来解决.

(1) $y = \\frac{\\sin x + \\cos x}{1 + \\sin x} = 1 + \\frac{\\cos x - 1}{\\sin x + 1}$ ,

令 $u = \\frac{\\cos x - 1}{\\sin x + 1}$ , 它表示动点 $(\\sin x, \\cos x)$ 与定点 $(-1, 1)$ 的连线的斜率, 即 $u$ 表示单位圆上的点与点 $(-1, 1)$ 的连线的斜率, 结合图像知 $u_{\\max} = 0$ , 所以 $y_{\\max} = 1$ .

(2)设动点 $P\\left(x,-\\frac{x}{3}\\right)$ 与 $Q\\left(y,\\frac{3}{y}\\right)$ ，则 $F(x,y)=|PQ|^{2}$

点 P 的轨迹为直线 $y = -\\frac{x}{3}$ ，点 Q 的轨迹为双曲线 $y = \\frac{3}{x}$ ，

双曲线上的任一点 $\\left(x_{0},\\frac{3}{x_{0}}\\right)$ 到直线 $x+3y=0$ 的距离 $d=\\frac{\\left|x_{0}+3\\cdot\\frac{3}{x_{0}}\\right|}{\\sqrt{10}}\\geqslant\\frac{6}{\\sqrt{10}}$

当 $x_{0}=\\pm3$ 时等号成立，故 $F(x,y)$ 的最小值为 $\\frac{18}{5}$ .

(3)构造向量 $\\boldsymbol{a}=\\left(\\frac{2}{\\sqrt{4-x^{2}}},\\frac{3}{\\sqrt{9-y^{2}}}\\right),\\boldsymbol{b}=(3\\sqrt{4-x^{2}},2\\sqrt{9-y^{2}})$ ,

其中 $|a|^2 = u, |b|^2 = 72 - (9x^2 + 4y^2)$ ，利用 $|a \\cdot b| \\leqslant |a| \\cdot |b|$ 得

$$
u \\geqslant \\frac {1 4 4}{7 2 - (9 x ^ {2} + 4 y ^ {2})} \\geqslant \\frac {1 4 4}{7 2 + 1 2 x y} = \\frac {1 2}{5}.
$$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-2-14",
    topicId: "topic-sec-3-2",
    title: `平方递推数列的放缩证明`,
    content: `已知数列 $\\{a_{n}\\}$ 满足 $a_{0}=\\frac{1}{2}, a_{n}=a_{n-1}+\\frac{1}{n^{2}}\\cdot a_{n-1}^{2}, n\\in N.$
求证： $\\frac{n+1}{n+2}<a_{n}<n.$`,
    preview: `已知数列 满足 求证： n+1/n+2<a_n<n.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-2-14-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `$a_{n}>a_{n-1}>0$ ,

又 $a_{n} = a_{n - 1} + \\frac{1}{n^{2}}\\cdot a_{n - 1}^{2} <   a_{n - 1} + \\frac{1}{n^{2}}\\cdot a_{n}a_{n - 1}\\Rightarrow \\frac{1}{a_{n - 1}} -\\frac{1}{a_n} <   \\frac{1}{n^2},$

所以 $\\frac{1}{a_0} -\\frac{1}{a_n} = \\left(\\frac{1}{a_0} -\\frac{1}{a_1}\\right) + \\dots +\\left(\\frac{1}{a_{n - 1}} -\\frac{1}{a_n}\\right) <   \\frac{1}{1^2} +\\frac{1}{2^2} +\\dots +\\frac{1}{n^2}$

$$
<   1 + \\frac {1}{1 \\times 2} + \\frac {1}{2 \\times 3} + \\dots + \\frac {1}{(n - 1) n} = 2 - \\frac {1}{n},
$$

化简得 $a_{n}<n$ .

又 $a_{n - 1} <   n - 1$ ，所以 $a_{n} = a_{n - 1} + \\frac{1}{n^{2}}\\cdot a_{n - 1}^{2} <   a_{n - 1} + \\frac{n - 1}{n^{2}} a_{n - 1},$

$a_{n - 1} > \\frac{n^2}{n^2 + n - 1} a_n$ ，所以 $a_{n} > a_{n - 1} + \\frac{1}{n^{2}}\\cdot a_{n - 1}\\cdot \\frac{n^2}{n^2 + n - 1} a_n,$

所以 $\\frac{1}{a_{n-1}}-\\frac{1}{a_{n}}>\\frac{1}{n^{2}+n-1}>\\frac{1}{n}-\\frac{1}{n+1}.$

所以 $\\frac{1}{a_1} -\\frac{1}{a_n} = \\left(\\frac{1}{a_1} -\\frac{1}{a_2}\\right) + \\dots +\\left(\\frac{1}{a_{n - 1}} -\\frac{1}{a_n}\\right) > \\left(\\frac{1}{2} -\\frac{1}{3}\\right) + \\dots +\\left(\\frac{1}{n} -\\frac{1}{n + 1}\\right) = \\frac{1}{2} -\\frac{1}{n + 1}.$

又因为 $a_{1}=\\frac{3}{4}$ ，所以 $\\frac{1}{a_{n}}<\\frac{5}{6}+\\frac{1}{n+1}<\\frac{n+2}{n+1}$ ，所以 $a_{n}>\\frac{n+1}{n+2}$ ，综上所述， $\\frac{n+1}{n+2}<a_{n}<n$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-2-15",
    topicId: "topic-sec-3-2",
    title: `数列 a_n 为等差数列， a_n 为正整数，其前 n 项和为 S_n，数列 b_n 为等比数列，且 a_1=3`,
    content: `数列 $\\{a_{n}\\}$ 为等差数列， $a_{n}$ 为正整数，其前 n 项和为 $S_{n}$ ，数列 $\\{b_{n}\\}$ 为等比数列，且 $a_{1}=3, b_{1}=1$ ，数列 $\\{b_{a_{n}}\\}$ 是公比为 64 的等比数列，且 $b_{2}S_{2}=64$ .
(1) 求 $a_{n}, b_{n}$ ;

(2) 求证 $\\frac{1}{S_{1}} + \\frac{1}{S_{2}} + \\cdots + \\frac{1}{S_{n}} < \\frac{3}{4}$ .`,
    preview: `数列 为等差数列， a_n 为正整数，其前 n 项和为 S_n ，数列 为等比数列，且 a_1=3, b_1=1 ，数列 是公比为 64 的等比数列，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-2-15-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 设 $\\{a_{n}\\}$ 的公差为 d, $\\{b_{n}\\}$ 的公比为 q, 则 d 为正整数,

$$
a _ {n} = 3 + (n - 1) d, b _ {n} = q ^ {n - 1}.
$$

依题意有 $\\left\\{\\begin{aligned}\\frac{b_{a_{n+1}}}{b_{a_{n}}}=\\frac{q^{3+nd}}{q^{3+(n-1)d}}=q^{d}=64=2^{6},\\\\ S_{2}b_{2}=(6+d)q=64,\\end{aligned}\\right.$ ①

由 $(6+d)q=64$ 知 q 为正有理数，

故 d 为 6 的因子 1,2,3,6 之一，

解①得 d=2, q=8，故 $a_{n}=3+2(n-1)=2n+1, b_{n}=8^{n-1}$

(2) $S_{n}=3+5+\\cdots+(2n+1)=n(n+2)$ ,

所以 $\\frac{1}{S_{1}}+\\frac{1}{S_{2}}+\\cdots+\\frac{1}{S_{n}}=\\frac{1}{1\\times3}+\\frac{1}{2\\times4}+\\frac{1}{3\\times5}+\\cdots+\\frac{1}{n(n+2)}$

$$
= \\frac {1}{2} \\left(1 - \\frac {1}{3} + \\frac {1}{2} - \\frac {1}{4} + \\frac {1}{3} - \\frac {1}{5} + \\dots + \\frac {1}{n} - \\frac {1}{n + 2}\\right)
$$

$$
= \\frac {1}{2} \\left(1 + \\frac {1}{2} - \\frac {1}{n + 1} - \\frac {1}{n + 2}\\right) <   \\frac {3}{4}.
$$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-2-16",
    topicId: "topic-sec-3-2",
    title: `在数列 a_n,b_n 中， a_1 = 2,b_1 = 4，且 a_n,b_n,a_n + 1 成等差数列， b_`,
    content: `在数列 $\\{a_{n}\\},\\{b_{n}\\}$ 中， $a_1 = 2,b_1 = 4$ ，且 $a_{n},b_{n},a_{n + 1}$ 成等差数列， $b_{n},a_{n + 1},b_{n + 1}$ 成等比数列 $(n\\in \\mathbf{Z}^{+})$
(1) 求 $a_{2}, a_{3}, a_{4}$ 及 $b_{2}, b_{3}, b_{4}$ ，由此猜测 $\\{a_{n}\\}, \\{b_{n}\\}$ 的通项公式，并证明你的结论；
(2) 证明: $\\frac{1}{a_1 + b_1} + \\frac{1}{a_2 + b_2} + \\cdots + \\frac{1}{a_n + b_n} < \\frac{5}{12}$ .`,
    preview: `在数列 中， a_1 = 2,b_1 = 4 ，且 a_n,b_n,a_n + 1 成等差数列，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-2-16-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)由条件得 $2b_{n}=a_{n}+a_{n+1}, a_{n+1}^{2}=b_{n}b_{n+1}$ ,

由此可得 $a_{2}=6, b_{2}=9, a_{3}=12, b_{3}=16, a_{4}=20, b_{4}=25$

猜测 $a_{n}=n(n+1)$ , $b_{n}=(n+1)^{2}$ .

用数学归纳法证明：

①当n=1时，由上可得结论成立.
②假设当 n=k 时，结论成立，即 $a_{k}=k(k+1)$ , $b_{k}=(k+1)^{2}$ ，那么当 $n=k+1$ 时，

$$
a _ {k + 1} = 2 b _ {k} - a _ {k} = 2 (k + 1) ^ {2} - k (k + 1) = (k + 1) (k + 2), b _ {k + 1} = \\frac {a _ {k + 1} ^ {2}}{b _ {k}} = (k + 2) ^ {2}.
$$

所以，当 $n = k + 1$ 时，结论也成立.

由①②可知 $a_{n}=n(n+1)$ , $b_{n}(n+1)^{2}$ 对一切正整数都成立.

(2) $\\frac{1}{a_{1}+b_{1}}=\\frac{1}{6}<\\frac{5}{12}.n\\geqslant2$ 时，由(1)知 $a_{n}+b_{n}=(n+1)(2n+1)>2(n+1)n.$

故 $\\frac{1}{a_1 + b_1} +\\frac{1}{a_2 + b_2} +\\dots +\\frac{1}{a_n + b_n} <  \\frac{1}{6} +\\frac{1}{2}\\left(\\frac{1}{2\\times 3} +\\frac{1}{3\\times 4} +\\dots +\\frac{1}{n(n + 1)}\\right)$

$$
= \\frac {1}{6} + \\frac {1}{2} \\left(\\frac {1}{2} - \\frac {1}{3} + \\frac {1}{3} - \\frac {1}{4} + \\dots + \\frac {1}{n} - \\frac {1}{n + 1}\\right) = \\frac {1}{6} + \\frac {1}{2} \\left(\\frac {1}{2} - \\frac {1}{n + 1}\\right) <   \\frac {1}{6} + \\frac {1}{4} = \\frac {5}{1 2}.
$$

综上，原不等式成立.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-2-17",
    topicId: "topic-sec-3-2",
    title: `对任意正整数 n`,
    content: `对任意正整数 n，设 $a_{n}$ 是方程 $x^{3}+\\frac{x}{n}=1$ 的实数根，求证：
(1) $a_{n+1}>a_{n}$ ;
(2) $\\sum_{i=1}^{n} \\frac{1}{(i+1)^{2} a_{i}} < a_{n}$ .`,
    preview: `对任意正整数 n，设 a_n 是方程 x^3+x/n=1 的实数根，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-2-17-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `由 $a_{n}^{3}+\\frac{a_{n}}{n}=1$ ，易得 $0<a_{n}<1$ .

(1) 又 $a_{n+1}^{3} + \\frac{a_{n+1}}{n+1} = 1$ ,

所以 $0 = a_{n + 1}^{3} - a_{n}^{3} + \\frac{a_{n + 1}}{n + 1} -\\frac{a_{n}}{n} < a_{n + 1}^{3} - a_{n}^{3} + \\frac{a_{n + 1}}{n} -\\frac{a_{n}}{n}$

$$
= (a _ {n + 1} - a _ {n}) \\left(a _ {n + 1} ^ {2} + a _ {n + 1} a _ {n} + a _ {n} ^ {2} + \\frac {1}{n}\\right).
$$

因为 $a_{n + 1}^2 +a_{n + 1}a_n + a_n^2 +\\frac{1}{n} >0$ ，故 $a_{n + 1} - a_n > 0$ ，即 $a_{n + 1} > a_n$

(2) 因为 $a_{n}\\left(a_{n}^{2}+\\frac{1}{n}\\right)=1$ ，所以 $a_{n}=\\frac{1}{a_{n}^{2}+\\frac{1}{n}}>\\frac{1}{1+\\frac{1}{n}}=\\frac{n}{n+1}$

从而 $\\frac{1}{(n+1)^{2}a_{n}}<\\frac{1}{n(n+1)}$ ,

$$
\\sum_ {i = 1} ^ {n} \\frac {1}{(i + 1) ^ {2} a _ {i}} <   \\sum_ {i = 1} ^ {n} \\frac {1}{i (i + 1)} = \\sum_ {i = 1} ^ {n} \\left(\\frac {1}{i} - \\frac {1}{i + 1}\\right) = 1 - \\frac {1}{n + 1} = \\frac {n}{n + 1} <   a _ {n}.
$$

故 $\\sum_{i=1}^{n} \\frac{1}{(i+1)^2 a_i} < a_n$ .

评注 这是浙江大学李胜宏教授给第三届中国东南数学竞赛提供的试题,题目叙述简洁,构思巧妙,解答不需要特殊技巧.既是一道很好的竞赛题,也可略做改动作为高考压轴题.如,2016年浙江省宁波市高三期末联考压轴题就是一道很好的改编题:

对任意正整数 n，设 $a_{n}$ 是方程 $x^{2}+\\frac{x}{n}=1$ 的正根.

(1) 求证: $a_{n+1} > a_{n}$ ;
(2) 求证: $\\frac{1}{2a_{2}} + \\frac{1}{3a_{3}} + \\cdots + \\frac{1}{na_{n}} < 1 + \\frac{1}{2} + \\frac{1}{3} + \\cdots + \\frac{1}{n}.$

讲解 根据题意有 $n a_{n}^{2} + a_{n} = n$ ，对此式进行适当变形来获得解题的突破口.

(1) 显然有 $0 < a_{n} < 1$ ，根据题意，有 $1 = a_{n}^{2} + \\frac{a_{n}}{n} > a_{n}^{2} + \\frac{a_{n}}{n+1}$ ,

从而有 $a_{n + 1}^2 +\\frac{a_{n + 1}}{n + 1} = 1 > a_n^2 +\\frac{a_n}{n + 1}$ ，整理得 $(a_{n + 1} - a_n)\\left(a_{n + 1} + a_n + \\frac{1}{n + 1}\\right) > 0,$

因为有 $a_{n + 1} + a_n + \\frac{1}{n + 1} >0$ ，从而有 $a_{n + 1} > a_n$

(2)用数列的界放缩,由于 $na_{n}^{2}+a_{n}=n$ ,于是 $na_{n}=\\frac{n}{a_{n}}-1>n-1$ ,

因此 $\\frac{1}{na_{n}}<\\frac{1}{n-1}$ ，累加得 $\\frac{1}{2a_{2}}+\\frac{1}{3a_{3}}+\\cdots+\\frac{1}{na_{n}}<1+\\frac{1}{2}+\\cdots+\\frac{1}{n-1}$ ，原不等式得证.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-2-18",
    topicId: "topic-sec-3-2",
    title: `设函数 f(x)=(1+1/n)^x(n,n>1,x)`,
    content: `设函数 $f(x)=\\left(1+\\frac{1}{n}\\right)^{x}(n\\in\\mathbf{N},n>1,x\\in\\mathbf{N})$ .
(1) 当 x=6 时，求 $\\left(1+\\frac{1}{n}\\right)^{x}$ 的展开式中二项式系数最大的项；
(2) 对任意的实数 $x$ , 证明 $\\frac{f(2x) + f(2)}{2} > f'(x)(f'(x)$ 是 $f(x)$ 的导函数);
（3）是否存在 $a \\in \\mathbf{N}$ ，使得 $an < \\sum_{k=1}^{n} \\left(1 + \\frac{1}{k}\\right)^k < (a+1)n$ 恒成立？若存在，试证明你的结论并求出 $a$ 的值；若不存在，请说明理由。`,
    preview: `设函数 f(x)=(1+1/n)^x(n,n>1,x) . (1) 当 x=6 时，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-2-18-sol-0",
        title: `解答`,
        method: "creative",
        steps: [],
        explanation: `(1)展开式中二项式系数最大的项是第4项,这项是 $C_{6}^{3}1^{3}\\left(\\frac{1}{n}\\right)^{3}=\\frac{20}{n^{3}}$ ,

(2)证法一 因 $f(2x)+f(2)=\\left(1+\\frac{1}{n}\\right)^{2x}+\\left(1+\\frac{1}{n}\\right)^{2}\\geqslant2\\sqrt{\\left(1+\\frac{1}{n}\\right)^{2x}\\left(1+\\frac{1}{n}\\right)^{2}}$

$$
\\begin{array}{l} = 2 \\left(1 + \\frac {1}{n}\\right) ^ {x} \\left(1 + \\frac {1}{n}\\right) = 2 \\left(1 + \\frac {1}{n}\\right) ^ {x + 1} \\\\ > 2 \\left(1 + \\frac {1}{n}\\right) ^ {x} \\ln \\left(1 + \\frac {1}{1}\\right) \\geqslant 2 \\left(1 + \\frac {1}{n}\\right) ^ {x} \\ln \\left(1 + \\frac {1}{n}\\right) \\\\ = 2 f ^ {\\prime} (x). \\\\ \\end{array}
$$

证法二 因 $f(2x) + f(2) = \\left(1 + \\frac{1}{n}\\right)^{2x} + \\left(1 + \\frac{1}{n}\\right)^2 \\geqslant 2\\sqrt{\\left(1 + \\frac{1}{n}\\right)^{2x} \\cdot \\left(1 + \\frac{1}{n}\\right)^2}$

$$
= 2 \\left(1 + \\frac {1}{n}\\right) ^ {x} \\cdot \\left(1 + \\frac {1}{n}\\right),
$$

而 $2f'(x) = 2\\left(1 + \\frac{1}{n}\\right)^x\\ln \\left(1 + \\frac{1}{n}\\right)$ ，故只需对 $\\left(1 + \\frac{1}{n}\\right)$ 和 $\\ln \\left(1 + \\frac{1}{n}\\right)$ 进行比较.

令 $g(x) = x - \\ln x (x \\geqslant 1)$ , 有 $g'(x) = 1 - \\frac{1}{x} = \\frac{x - 1}{x}$ , 由 $\\frac{x - 1}{x} = 0$ , 得 $x = 1$ .

因为当 0 < x < 1 时， $g'(x) < 0$ ， $g(x)$ 单调递减；

当 $1 < x < +\\infty$ 时， $g'(x) > 0, g(x)$ 单调递增。所以在 x = 1 处 $g(x)$ 有极小值 1。

故当 x>1 时， $g(x)>g(1)=1$ ，从而有 $x-\\ln x>1$ ，亦即 $x>\\ln x+1>\\ln x$ .

故有 $\\left(1+\\frac{1}{n}\\right)>\\ln\\left(1+\\frac{1}{n}\\right)$ 恒成立.所以 $f(2x)+f(2)\\geqslant2f'(x)$ ，原不等式成立.

(3) 对 $m \\in N$ ，且 m > 1，

有 $\\left(1+\\frac{1}{m}\\right)^{m}=C_{m}^{0}+C_{m}^{1}\\left(\\frac{1}{m}\\right)+C_{m}^{2}\\left(\\frac{1}{m}\\right)^{2}+\\cdots+C_{m}^{k}\\left(\\frac{1}{m}\\right)^{k}+\\cdots+C_{m}^{m}\\left(\\frac{1}{m}\\right)^{m}$

$$
= 1 + 1 + \\frac {m (m - 1)}{2 !} \\left(\\frac {1}{m}\\right) ^ {2} + \\dots + \\frac {m (m - 1) \\cdots (m - k + 1)}{k !} \\left(\\frac {1}{m}\\right) ^ {k}
$$

$$
+ \\dots + \\frac {m (m - 1) \\cdots 2 \\cdot 1}{m !} \\left(\\frac {1}{m}\\right) ^ {m}
$$

$$
= 2 + \\frac {1}{2 !} \\left(1 - \\frac {1}{m}\\right) + \\dots + \\frac {1}{k !} \\left(1 - \\frac {1}{m}\\right) \\left(1 - \\frac {2}{m}\\right) \\dots \\left(1 - \\frac {k - 1}{m}\\right)
$$

$$
+ \\dots + \\frac {1}{m !} \\left(1 - \\frac {1}{m}\\right) \\dots \\left(1 - \\frac {m - 1}{m}\\right)
$$

$$
<   2 + \\frac {1}{2 !} + \\frac {1}{3 !} + \\dots + \\frac {1}{k !} + \\dots + \\frac {1}{m !}
$$

$$
<   2 + \\frac {1}{2 \\times 1} + \\frac {1}{3 \\times 2} + \\dots + \\frac {1}{k (k - 1)} + \\dots + \\frac {1}{m (m - 1)}
$$

$$
= 2 + \\left(1 - \\frac {1}{2}\\right) + \\left(\\frac {1}{2} - \\frac {1}{3}\\right) + \\dots + \\left(\\frac {1}{k - 1} - \\frac {1}{k}\\right) + \\dots + \\left(\\frac {1}{m - 1} - \\frac {1}{m}\\right)
$$

$$
= 3 - \\frac {1}{m}
$$

$$
<   3.
$$

又因 $C_{m}^{k}\\left(\\frac{1}{m}\\right)^{k}>0(k=2,3,4,\\cdots,m)$ ，故 $2<\\left(1+\\frac{1}{m}\\right)^{m}<3.$

因为 $2 < \\left(1 + \\frac{1}{m}\\right)^m < 3$ ，从而有 $2n < \\sum_{k=1}^{n} \\left(1 + \\frac{1}{k}\\right)^k < 3n$ 成立，

即存在 $a = 2$ ，使得 $2n < \\sum_{k=1}^{n}\\left(1 + \\frac{1}{k}\\right)^{k} < 3n$ 恒成立.

评注 本题考查函数、不等式、导数、二项式定理、组合数计算公式等内容和数学思想方法. 考查综合推理论证与分析解决问题的能力及创新意识.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-2-19",
    topicId: "topic-sec-3-2",
    title: `求证: 1 + 1/2 + 1/3 + 1/4 + … + 1/2^n - 1 + 1/2^n > 1 + n/2`,
    content: `求证: $1 + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} + \\cdots + \\frac{1}{2^n - 1} + \\frac{1}{2^n} > 1 + \\frac{n}{2} (n \\geqslant 2, n \\in \\mathbf{Z}^+)$ .`,
    preview: `求证: .`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-2-19-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `先将原数列各项分别“组合”，得

左边 $= 1 + \\frac{1}{2} +\\left(\\frac{1}{3} +\\frac{1}{4}\\right) + \\left(\\frac{1}{5} +\\frac{1}{6} +\\frac{1}{7} +\\frac{1}{8}\\right) + \\left(\\frac{1}{9} +\\frac{1}{10} +\\dots +\\frac{1}{16}\\right)$

$$
\\begin{array}{l} + \\dots + \\left(\\frac {1}{2 ^ {n - 1} + 1} + \\frac {1}{2 ^ {n - 1} + 2} + \\dots + \\frac {1}{2 ^ {n}}\\right) \\\\ > 1 + \\frac {1}{2} + \\left(\\frac {1}{4} + \\frac {1}{4}\\right) + \\left(\\frac {1}{8} + \\frac {1}{8} + \\frac {1}{8} + \\frac {1}{8}\\right) + \\left(\\frac {1}{1 6} + \\frac {1}{1 6} + \\dots + \\frac {1}{1 6}\\right) \\\\ + \\dots + \\left(\\frac {1}{2 ^ {n}} + \\frac {1}{2 ^ {n}} + \\dots + \\frac {1}{2 ^ {n}}\\right) = 1 + \\underbrace {\\frac {1}{2} + \\frac {1}{2} + \\cdots + \\frac {1}{2}} _ {n \\text {个}} = 1 + \\frac {n}{2}. \\\\ \\end{array}
$$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-2-20",
    topicId: "topic-sec-3-2",
    title: `已知数列 a_n 的通项公式为 a_n = 3^n - (-2)^n，求证： sum_k=1`,
    content: `已知数列 $\\{a_{n}\\}$ 的通项公式为 $a_{n} = 3^{n} - (-2)^{n}$ ，求证： $\\sum_{k=1}^{n} \\frac{1}{a_{k}} < \\frac{1}{2}$ .`,
    preview: `已知数列 的通项公式为 a_n = 3^n - (-2)^n ，求证： _k=1^n 1/a_k < 1/2 .`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-2-20-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `本题若直接对通项进行放缩则很难达到目标. 如果采取“合二为一”的技巧, 再进行放缩则能出奇制胜. 用分析法易证明, 当 $k$ 为正奇数时, 有 $\\frac{1}{a_k} + \\frac{1}{a_{k+1}} < \\frac{4}{3^{k+1}}$ (用分析法可证).

(1) 当 n 为偶数时，有 $\\sum_{k=1}^{n}\\frac{1}{a_{k}}=\\left(\\frac{1}{a_{1}}+\\frac{1}{a_{2}}\\right)+\\left(\\frac{1}{a_{3}}+\\frac{1}{a_{4}}\\right)+\\cdots+\\left(\\frac{1}{a_{n-1}}+\\frac{1}{a_{n}}\\right)$

$$
<   \\frac {4}{3 ^ {2}} + \\frac {4}{3 ^ {4}} + \\frac {4}{3 ^ {6}} + \\dots + \\frac {4}{3 ^ {n}} = \\frac {1}{2} \\left(1 - \\frac {1}{3 ^ {n}}\\right) <   \\frac {1}{2}.
$$

(2) 当 n 为奇数时，有 $\\sum_{k=1}^{n}\\frac{1}{a_{k}}<\\left(\\frac{1}{a_{1}}+\\frac{1}{a_{2}}\\right)+\\left(\\frac{1}{a_{3}}+\\frac{1}{a_{4}}\\right)+\\cdots+\\left(\\frac{1}{a_{n}}+\\frac{1}{a_{n+1}}\\right)$

$$
<   \\frac {4}{3 ^ {2}} + \\frac {4}{3 ^ {4}} + \\frac {4}{3 ^ {6}} + \\dots + \\frac {4}{3 ^ {n + 1}} = \\frac {1}{2} \\left(1 - \\frac {1}{3 ^ {n + 1}}\\right) <   \\frac {1}{2}.
$$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-2-21",
    topicId: "topic-sec-3-2",
    title: `已知数列 a_n 的前 n 项和 S_n 满足 S_n=2a_n+(-1)^n, n≥1`,
    content: `已知数列 $\\{a_{n}\\}$ 的前 n 项和 $S_{n}$ 满足 $S_{n}=2a_{n}+(-1)^{n}, n\\geqslant1$ .
(1) 写出数列 $\\{a_{n}\\}$ 的前三项 $a_{1}, a_{2}, a_{3}$ ;
(2)求数列 $\\{a_{n}\\}$ 的通项公式；
(3)证明:对任意的整数 m>4,有 $\\frac{1}{a_{4}}+\\frac{1}{a_{5}}+\\cdots+\\frac{1}{a_{m}}<\\frac{7}{8}$ .`,
    preview: `已知数列 的前 n 项和 S_n 满足 S_n=2a_n+(-1)^n, n≥1 . (1) 写出数列 的前三项 a_1, a_2, a_3 ; (`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-2-21-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `（1）为了计算前三项 $a_{1}, a_{2}, a_{3}$ 的值，只要在递推式 $S_{n}=2a_{n}+(-1)^{n}, n \\geqslant 1$ 中，对 n 取特殊值 n=1,2,3，就可以消除解题目标与题设条件之间的差异.

由 $a_{1}=S_{1}=2a_{1}-1$ , 得 $a_{1}=1$ ;

由 $a_{1}+a_{2}=S_{2}=2a_{2}+(-1)^{2}$ ，得 $a_{2}=0$ ；

由 $a_1 + a_2 + a_3 = S_3 = 2a_3 + (-1)^3$ ，得 $a_3 = 2$

(2)`,
      },
      {
        id: "prob-sec-3-2-21-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `为了求出通项公式, 应先消除条件式中的 $S_{n}$ .

事实上，当 $n \\geqslant 2$ 时，有 $a_{n} = S_{n} - S_{n-1} = 2(a_{n} - a_{n-1}) + 2 \\times (-1)^{n}$ ，

即有 $a_{n} = 2a_{n - 1} + 2\\times (-1)^{n - 1}$ ，从而

$$
a _ {n - 1} = 2 a _ {n - 2} + 2 \\times (- 1) ^ {n - 2}, a _ {n - 2} = 2 a _ {n - 3} + 2 \\times (- 1) ^ {n - 3}, \\dots , a _ {2} = 2 a _ {1} - 2.
$$

接下来,逐步迭代就有

$$
\\begin{array}{l} a _ {n} = 2 ^ {n - 1} a _ {1} + 2 ^ {n - 1} \\times (- 1) + 2 ^ {n - 2} \\times (- 1) ^ {2} + \\dots + 2 \\times (- 1) ^ {n - 1} \\\\ = 2 ^ {n - 1} + (- 1) ^ {n} \\left[ (- 2) ^ {n - 1} + (- 2) ^ {n - 2} + \\dots + (- 2) \\right] \\\\ = 2 ^ {n - 1} - (- 1) ^ {n} \\frac {2 [ 1 - (- 2) ^ {n - 1} ]}{3} = \\frac {2}{3} [ 2 ^ {n - 2} + (- 1) ^ {n - 1} ]. \\\\ \\end{array}
$$

经验证 $a_{1}$ 也满足上式，故 $a_{n}=\\frac{2}{3}\\left[2^{n-2}+(-1)^{n-1}\\right], n\\geqslant1.$`,
      },
      {
        id: "prob-sec-3-2-21-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `将关系式 $a_{n}=2a_{n-1}+2\\times(-1)^{n-1}$ 两边同除以 $(-1)^{n}$ ，得

$$
\\frac {a _ {n}}{(- 1) ^ {n}} = - 2 \\times \\frac {a _ {n - 1}}{(- 1) ^ {n - 1}} - 2.
$$

令 $b_{n} = \\frac{a_{n}}{(-1)^{n}}$ ，就有 $b_{n} = -2b_{n - 1} - 2$ ，于是 $b_{n} + \\frac{2}{3} = -2\\left(b_{n - 1} + \\frac{2}{3}\\right)$ ，这说明数列 $\\left\\{b_n + \\frac{2}{3}\\right\\}$ 是等比数列，公比 $q = -2,b_1 = -1$ ，从而，得

$$
b _ {n} + \\frac {2}{3} = \\left(b _ {1} + \\frac {2}{3}\\right) (- 2) ^ {n - 1} = \\left(- \\frac {1}{3}\\right) (- 2) ^ {n - 1},
$$

即 $\\frac{a_n}{(-1)^n} +\\frac{2}{3} = \\left(-\\frac{1}{3}\\right)(-2)^{n - 1}$ ，故有 $a_{n} = \\frac{2}{3}[2^{n - 2} + (-1)^{n - 1}],n\\geqslant 1.$

(3)由通项公式得 $a_{4}=2$ .

当 $n \\geqslant 3$ 且 $n$ 为奇数时，

$$
\\begin{array}{l} \\frac {1}{a _ {n}} + \\frac {1}{a _ {n + 1}} = \\frac {3}{2} \\left(\\frac {1}{2 ^ {n - 2} + 1} + \\frac {1}{2 ^ {n - 1} - 1}\\right) \\\\ = \\frac {3}{2} \\times \\frac {2 ^ {n - 1} + 2 ^ {n - 2}}{2 ^ {2 n - 3} + 2 ^ {n - 1} - 2 ^ {n - 2} - 1} \\\\ <   \\frac {3}{2} \\times \\frac {2 ^ {n - 1} + 2 ^ {n - 2}}{2 ^ {2 n - 3}} = \\frac {3}{2} \\left(\\frac {1}{2 ^ {n - 2}} + \\frac {1}{2 ^ {n - 1}}\\right). \\\\ \\end{array}
$$

当 $m > 4$ 且 $m$ 为偶数时，

$$
\\begin{array}{l} \\frac {1}{a _ {4}} + \\frac {1}{a _ {5}} + \\dots + \\frac {1}{a _ {m}} = \\frac {1}{a _ {4}} + \\left(\\frac {1}{a _ {5}} + \\frac {1}{a _ {6}}\\right) + \\dots + \\left(\\frac {1}{a _ {m - 1}} + \\frac {1}{a _ {m}}\\right) \\\\ <   \\frac {1}{2} + \\frac {3}{2} \\left(\\frac {1}{2 ^ {3}} + \\frac {1}{2 ^ {4}} + \\dots + \\frac {1}{2 ^ {m - 2}}\\right) \\\\ = \\frac {1}{2} + \\frac {3}{2} \\times \\frac {1}{4} \\times \\left(1 - \\frac {1}{2 ^ {m - 4}}\\right) <   \\frac {1}{2} + \\frac {3}{8} = \\frac {7}{8}. \\\\ \\end{array}
$$

当 $m > 4$ 且 $m$ 为奇数时， $m + 1$ 为偶数，可以转化为上面的情景：

$$
\\frac {1}{a _ {4}} + \\frac {1}{a _ {5}} + \\dots + \\frac {1}{a _ {m}} <   \\frac {1}{a _ {4}} + \\frac {1}{a _ {5}} + \\dots + \\frac {1}{a _ {m}} + \\frac {1}{a _ {m + 1}} <   \\frac {7}{8}.
$$

故任意整数 m>4，有 $\\frac{1}{a_{4}}+\\frac{1}{a_{5}}+\\cdots+\\frac{1}{a_{m}}<\\frac{7}{8}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-2-22",
    topicId: "topic-sec-3-2",
    title: `求证: 对一切 n Z^+ , 都有 _k=1^n 1/k`,
    content: `求证: 对一切 $n \\in \\mathbf{Z}^{+}$ , 都有 $\\sum_{k=1}^{n} \\frac{1}{k \\sqrt{k}} < 3$ .`,
    preview: `求证: 对一切 n Z^+ , 都有 _k=1^n 1/k √k < 3 .`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-2-22-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `不等式左边是数列 $\\left\\{\\frac{1}{n\\sqrt{n}}\\right\\}$ 的前n项和,右边是一常数.因此,直接用数学归纳法是不可行的.

注意到 $\\sum_{k=1}^{n} \\frac{1}{k \\sqrt{k}} = 1 + \\sum_{k=2}^{n} \\frac{1}{k \\sqrt{k}}$ ，而 $\\frac{1}{k \\sqrt{k}} < \\frac{1}{k \\sqrt{k-1}} (k \\geqslant 2)$ ，故可先用放缩法证明以下加强不等式： $\\sum_{k=2}^{n} \\frac{1}{k \\sqrt{k-1}} < 2$ .

$$
\\begin{array}{l} = \\frac {\\sqrt {k} + \\sqrt {k - 1}}{\\sqrt {k}} \\left(\\frac {1}{\\sqrt {k - 1}} - \\frac {1}{\\sqrt {k}}\\right) \\\\ <   2 \\Big (\\frac {1}{\\sqrt {k - 1}} - \\frac {1}{\\sqrt {k}} \\Big) (k = 1, 2, 3, \\dots , n). \\\\ \\end{array}
$$

由 $\\frac{1}{k\\sqrt{k - 1}} = \\frac{1}{\\sqrt{k}\\cdot\\sqrt{k}\\cdot\\sqrt{k - 1}} = \\frac{1}{\\sqrt{k}}\\left(\\frac{1}{\\sqrt{k - 1}} -\\frac{1}{\\sqrt{k}}\\right)\\cdot \\frac{1}{\\sqrt{k} - \\sqrt{k - 1}}$

得 $\\sum_{k=2}^{n} \\frac{1}{k \\sqrt{k-1}} < 2 \\sum_{k=2}^{n} \\left( \\frac{1}{\\sqrt{k-1}} - \\frac{1}{\\sqrt{k}} \\right) = 2 \\left( 1 - \\frac{1}{\\sqrt{n}} \\right) < 2.$

故 $\\sum_{k=1}^{n} \\frac{1}{k\\sqrt{k}} = 1 + \\sum_{k=2}^{n} \\frac{1}{k\\sqrt{k}} < 1 + \\sum_{k=2}^{n} \\frac{1}{k\\sqrt{k-1}} < 1 + 2 = 3.$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-2-23",
    topicId: "topic-sec-3-2",
    title: `分式递推数列的黄金比上界证明`,
    content: `已知数列 $\\{a_{n}\\}$ 满足 $a_{1}=1$ 且 $a_{n+1}=\\frac{1+2a_{n}}{1+a_{n}}(n\\in\\mathbf{Z}^{+})$ . 求证: $a_{n}<\\frac{1+\\sqrt{5}}{2}$ .`,
    preview: `已知数列 满足 a_1=1 且 a_n+1=1+2a_n{1+a_n}(n^+) . 求证: a_n<1+√52 .`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-2-23-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `由于不等式右边为常数,因此,直接运用数学归纳法很难实现从 k 到 $k+1$ 的过渡.为此,可先证明原不等式的加强不等式 $0 < a_{n} < \\frac{1 + \\sqrt{5}}{2}$ .

用数学归纳法证明原不等式的加强命题 $0 < a_{n} < \\frac{1 + \\sqrt{5}}{2}$ .

(1) 当 n=1 时, $a_{1}=1\\in\\left(0,\\frac{1+\\sqrt{5}}{2}\\right)$ 命题成立;

(2) 假设 n=k 时命题成立，即 $0 < a_{k} < \\frac{1 + \\sqrt{5}}{2}$ ,

则当 $n=k+1$ 时,一方面有 $a_{k+1}=\\frac{1+2a_{k}}{1+a_{k}}>0$ ,另一方面，有 $a_{k + 1} = \\frac{1 + 2a_k}{1 + a_k} = 2 - \\frac{1}{a_k + 1} < 2 - \\frac{1}{\\frac{\\sqrt{5} + 1}{2} + 1} = \\frac{\\sqrt{5} + 1}{2},$

因此，当 $n = k + 1$ 时命题也成立.

由(1)(2)可知 $0 < a_{n} < \\frac{1 + \\sqrt{5}}{2}$ 对一切 $n \\in \\mathbf{Z}^{+}$ 都成立，

所以 $a_{n}<\\frac{1+\\sqrt{5}}{2}$ 得证.

评注 本题也可利用不动点求出数列 $\\{a_{n}\\}$ 的通项, 再运用放缩法证得. 求出函数 $f(x) = \\frac{1 + 2x}{1 + x}$ 的两个不动点 $\\frac{1 \\pm \\sqrt{5}}{2}$ , 可得

$$
\\frac {a _ {n + 1} - \\frac {1 + \\sqrt {5}}{2}}{a _ {n + 1} - \\frac {1 - \\sqrt {5}}{2}} = \\frac {7 - 3 \\sqrt {5}}{2} \\cdot \\frac {a _ {n} - \\frac {1 + \\sqrt {5}}{2}}{a _ {n} - \\frac {1 - \\sqrt {5}}{2}} = \\dots = \\left(\\frac {7 - 3 \\sqrt {5}}{2}\\right) ^ {n} \\cdot \\frac {a _ {1} - \\frac {1 + \\sqrt {5}}{2}}{a _ {1} - \\frac {1 - \\sqrt {5}}{2}}.
$$

所以， $\\frac{a_{n}-\\frac{1+\\sqrt{5}}{2}}{a_{n}-\\frac{1-\\sqrt{5}}{2}}=\\left(\\frac{7-3\\sqrt{5}}{2}\\right)^{n-1}\\cdot\\frac{1-\\sqrt{5}}{1+\\sqrt{5}}=-\\left(\\frac{3-\\sqrt{5}}{2}\\right)^{2n}<0,$

所以， $\\frac{1-\\sqrt{5}}{2}<a_{n}<\\frac{1+\\sqrt{5}}{2}.$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-2-24",
    topicId: "topic-sec-3-2",
    title: `设 0 < a < 1`,
    content: `设 0 < a < 1，定义 $a_{1} = 1 + a, a_{n} = \\frac{1}{a_{n-1}} + a, n \\geqslant 2$ ，证明：对 $n \\in Z^{+}$ ，都有 $a_{n} > 1$ .`,
    preview: `设 0 < a < 1，定义 ，证明：对 n Z^+ ，都有 a_n > 1 .`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-2-24-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `用数学归纳法证明以下加强命题: $1 < a_{n} < \\frac{1}{1 - a}$ .

(1) 当 $n = 1$ 时, $a_{1} = 1 + a$ , 由 $0 < a < 1$ 显然有 $1 < 1 + a < \\frac{1}{1 - a}$ 成立,

即当 n=1 时命题成立.

(2) 假设 n=k 时命题成立, 即 $1 < a_{k} < \\frac{1}{1-a}$ .

当 $n = k + 1$ 时，一方面， $a_{k + 1} = \\frac{1}{a_k} + a > \\frac{1}{\\frac{1}{1 - a}} + a = (1 - a) + a = 1,$

另一方面， $a_{k + 1} = \\frac{1}{a_k} + a <   1 + a = \\frac{1 - a^2}{1 - a} <   \\frac{1}{1 - a},$

因此，当 $n = k + 1$ 时，有 $1 < a_{k + 1} < \\frac{1}{1 - a}$ .

由(1)(2)可知,不等式 $1<a_{n}<\\frac{1}{1-a}$ 对 $n\\in Z^{+}$ 都成立.当然也就有 $a_{n}>1$ 成立.

评注 从表面看,加强命题似乎使原问题变复杂了,而实际上,通过加强命题可以换来一个较强的归纳假设,从而为归纳过渡的顺利完成奠定坚实的基础,反而有利于原问题的有效解决.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-2-25",
    topicId: "topic-sec-3-2",
    title: `递推数列 a_{n+1}=a_n+1/a_n 的范围估计`,
    content: `已知数列 $\\{a_{n}\\}$ 满足: $a_{1}=1,a_{n+1}=a_{n}+\\frac{1}{a_{n}}$ . 求证: $14<a_{100}<18$ .`,
    preview: `已知数列 满足: a_1=1,a_n+1=a_n+1/a_n . 求证: 14<a_100<18 .`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-2-25-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `用放缩法证明以下加强命题: $\\sqrt{2n-1}<a_{n}<\\sqrt{3n-2}(n>2)$ .

当 $k > 1$ 时， $a_{k}^{2} = \\left(a_{k-1} + \\frac{1}{a_{k-1}}\\right)^{2} > a_{k-1}^{2} + 2$ ，即 $a_{k}^{2} - a_{k-1}^{2} > 2$

所以 $a_{n}^{2} - a_{1}^{2} = \\sum_{k=2}^{n}(a_{k}^{2} - a_{k-1}^{2}) > 2(n-1)$ , 化简得 $a_{n} > \\sqrt{2n-1}$ .

同理，由 $a_{k}^{2} = \\left(a_{k - 1} + \\frac{1}{a_{k - 1}}\\right)^{2} < a_{k - 1}^{2} + 3$ 可证得右边 $a_{n} < \\sqrt{3n - 2} (n > 2)$

令 n=100，得 $\\sqrt{199}<a_{100}<\\sqrt{298}$ ，而 $14<\\sqrt{199},18>\\sqrt{298}$ .

所以 $14 < a_{100} < 18.$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-2-26",
    topicId: "topic-sec-3-2",
    title: `递推数列 a_{n+1}=a_n/2+1/a_n 的上界证明`,
    content: `数列 $\\{a_{n}\\}$ 满足: $a_{1}=2,a_{n+1}=\\frac{a_{n}}{2}+\\frac{1}{a_{n}}$ ,求证: $1<a_{n}<\\frac{3}{2}+\\frac{1}{n}$ .`,
    preview: `数列 满足: a_1=2,a_n+1=a_n2+1/a_n ,求证: 1<a_n<3/2+1/n .`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-2-26-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `数列 $\\{a_{n}\\}$ 的递归函数为 $f(x) = \\frac{x}{2} +\\frac{1}{x}$ ，由 $f(x) = x$ 求得其不动点为 $\\pm \\sqrt{2}$ ，为此，可求出通项公式再进行放缩证明，当然，也可不求通项公式，先证明其加强命题 $\\sqrt{2} < a_{n} < \\sqrt{2} +\\frac{1}{n}$ 而得证.

先用数学归纳法证明加强命题：对一切正整数 $n$ ，有 $\\sqrt{2} < a_n < \\sqrt{2} +\\frac{1}{n}$

(1) 当 n=1 时, $\\sqrt{2}<a_{1}=2<\\sqrt{2}+1$ 显然成立.

(2) 假设 n=k 时，有 $\\sqrt{2}<a_{k}<\\sqrt{2}+\\frac{1}{k}$ ，那么，

当 $n = k + 1$ 时，一方面由均值不等式，有 $a_{k + 1} = \\frac{a_k}{2} +\\frac{1}{a_k}\\geqslant 2\\sqrt{\\frac{1}{2}} = \\sqrt{2}$

等号当且仅当 $a_{k}=\\sqrt{2}$ 时取得，因此， $a_{k+1}>\\sqrt{2}$ .

另一方面， $a_{k + 1} = \\frac{a_k}{2} +\\frac{1}{a_k} <   \\frac{\\sqrt{2} + \\frac{1}{k}}{2} +\\frac{1}{\\sqrt{2}} = \\sqrt{2} +\\frac{1}{2k}\\leqslant \\sqrt{2} +\\frac{1}{k + 1}.$

当 $n=k+1$ 时， $\\sqrt{2}<a_{n}<\\sqrt{2}+\\frac{1}{n}$ 也成立.

因此， $1 <   \\sqrt{2} <  a_{n} <   \\sqrt{2} +\\frac{1}{n} <  \\frac{3}{2} +\\frac{1}{n}.$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-2-27",
    topicId: "topic-sec-3-2",
    title: `已知函数 f(x)=ax/bx+3(b≠0)`,
    content: `已知函数 $f(x)=\\frac{ax}{bx+3}(b\\neq0)$ 的图像过点(3,1)，且方程 $f(x)=x$ 有两个相等的实数根.
(1)求实数a,b的值;

(2)若正项数列 $\\{a_{n}\\}$ 满足: $a_{1}=\\frac{3}{2},a_{n+1}=f(a_{n})$ ,求通项 $a_{n}$ ;

(3)对满足(2)的数列 $\\{a_{n}\\}$ ，若数列 $b_{n}=\\left(\\frac{3}{2a_{n}}\\right)^{4}$ ， $T_{n}$ 为数列 $\\left\\{\\frac{1}{b_{n}}\\right\\}$ 前n项和，证明： $T_{n}<\\frac{11}{10}$ .`,
    preview: `已知函数 f(x)=ax/bx+3(b≠0) 的图像过点(3,1)，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-2-27-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)由函数 $f(x)=\\frac{ax}{bx+3}$ 的函数图像过点(3,1)，得 $1=\\frac{3a}{3b+3}$ .

又方程 $f(x)=x$ 有两个相等的实数根, 得

$x=\\frac{ax}{bx+3}\\Rightarrow bx^{2}+3x=ax\\Rightarrow x(bx-a+3)=0$ 有相等的实数根，故方程有等根 x=0，

则将 a=3 代入 $1=\\frac{3a}{3b+3}$ ，得 b=2，故 $f(x)=\\frac{3x}{2x+3}$ .

(2)由 $a_{n + 1} = f(a_n)$ ，得 $a_{n + 1} = \\frac{3a_n}{2a_n + 3}$ 即 $\\frac{1}{a_{n + 1}} = \\frac{1}{a_n} +\\frac{2}{3},$

因此， $\\frac{1}{a_{n}}=\\frac{1}{a_{1}}+(n-1)\\frac{2}{3}=\\frac{2}{3}n$ ，则 $a_{n}=\\frac{3}{2n}$ .

(3) $b_{n}=n^{4},\\frac{1}{b_{n}}=\\frac{1}{n^{4}}$ ,所以 $T_{n}=\\frac{1}{1^{4}}+\\frac{1}{2^{4}}+\\frac{1}{3^{4}}+\\cdots+\\frac{1}{n^{4}}$ .

证法一 由 $\\frac{1}{n^4} < \\frac{1}{n^4 - 1} = \\frac{1}{2}\\left(\\frac{1}{n^2 - 1} -\\frac{1}{n^2 + 1}\\right) <   \\frac{1}{2}\\left(\\frac{1}{n^2 - 1} -\\frac{1}{n^2 + n}\\right)$

$$
<   \\frac {1}{4} \\left(\\frac {1}{n - 1} - \\frac {1}{n + 1}\\right) - \\frac {1}{2} \\left(\\frac {1}{n} - \\frac {1}{n + 1}\\right)
$$

故 $T_{n} = \\frac{1}{1^{4}} +\\frac{1}{2^{4}} +\\frac{1}{3^{4}} +\\dots +\\frac{1}{n^{4}} <   1 + \\frac{1}{16} +\\frac{1}{81} +\\frac{1}{4}\\left(\\frac{1}{3} +\\frac{1}{4} -\\frac{1}{n} -\\frac{1}{n + 1}\\right) - \\frac{1}{2}\\left(\\frac{1}{4} -\\frac{1}{n + 1}\\right)$

$$
\\begin{array}{l} <   1 + \\frac {1}{1 6} + \\frac {1}{8 1} + \\frac {1}{1 2} + \\frac {1}{1 6} - \\frac {1}{8} - \\frac {1}{4} \\left(\\frac {1}{n} - \\frac {1}{n + 1}\\right) <   1 + \\frac {1}{1 6} + \\frac {1}{8 1} + \\frac {1}{1 2} + \\frac {1}{1 6} - \\frac {1}{8} \\\\ \\leqslant 1 + \\frac {1}{1 2} + \\frac {1}{8 1} <   \\frac {1 1}{1 0}. \\\\ \\end{array}
$$

证法二 $\\frac{1}{n^4} < \\frac{1}{(n - 3)(n - 2)(n - 1)n} < \\frac{1}{3}\\left[\\frac{1}{(n - 3)(n - 2)(n - 1)} -\\frac{1}{(n - 2)(n - 1)n}\\right].$

所以 $T_{n} <   1 + \\frac{1}{16} +\\frac{1}{81} +\\frac{1}{256} +\\frac{1}{3}\\left[\\frac{1}{2\\times 3\\times 4} -\\frac{1}{(n - 2)(n - 1)n}\\right]$

$$
<   1 + \\frac {1}{1 6} + \\frac {1}{8 1} + \\frac {1}{2 5 6} + \\frac {1}{7 2} <   \\frac {1 1}{1 0}.
$$

证法三 $T_{n}<1+\\frac{1}{16}+\\frac{1}{81}+\\frac{4}{4^{4}}+\\frac{8}{8^{4}}+\\frac{16}{16^{4}}+\\cdots=1+\\frac{1}{16}+\\frac{1}{81}+\\frac{1}{4^{3}}+\\frac{1}{8^{3}}+\\frac{1}{16^{3}}+\\cdots$

$$
= 1 + \\frac {1}{1 6} + \\frac {1}{8 1} + \\frac {\\frac {1}{4 ^ {3}}}{1 - \\frac {1}{8}} = 1 + \\frac {1}{1 6} + \\frac {1}{8 1} + \\frac {1}{5 6} = 1 + \\frac {8 4 1}{9 0 7 2} <   \\frac {1 1}{1 0}.
$$

证法四 当 n>5 时, $\\frac{1}{n^{4}}<\\frac{1}{n^{2}5^{2}}$ ,

则 $T_{n} <   1 + \\frac{1}{16} +\\frac{1}{81} +\\frac{1}{256} +\\frac{1}{5^2}\\left(\\frac{1}{5^2} +\\frac{1}{6^2} +\\dots +\\frac{1}{n^2}\\right)$

$$
\\begin{array}{l} <   1 + \\frac {1}{1 6} + \\frac {1}{8 1} + \\frac {1}{2 5 6} + \\frac {1}{5 ^ {2}} \\left(\\frac {1}{4} - \\frac {1}{5} + \\frac {1}{5} - \\frac {1}{6} + \\dots + \\frac {1}{n - 1} - \\frac {1}{n}\\right) \\\\ <   1 + \\frac {1}{1 6} + \\frac {1}{8 1} + \\frac {1}{2 5 6} + \\frac {1}{2 5} \\times \\frac {1}{4} <   1 + \\frac {1}{1 6} + \\frac {1}{8 1} + \\frac {1}{5 6} <   \\frac {1 1}{1 0}. \\\\ \\end{array}
$$
证法五 当 $n \\geqslant 4$ 时，

$$
\\begin{array}{l} \\frac {1}{n ^ {4}} = \\frac {1}{n ^ {2} n ^ {2}} <   \\frac {1}{n ^ {2} (n ^ {2} - 1)} = \\frac {1}{2 n - 1} \\left[ \\frac {1}{(n - 1) ^ {2}} - \\frac {1}{n ^ {2}} \\right] \\\\ <   1 + \\frac {1}{1 6} + \\frac {1}{8 1} + \\frac {1}{2 5 6} + \\frac {1}{7} \\left[ \\frac {1}{3 ^ {2}} - \\frac {1}{4 ^ {2}} + \\frac {1}{4 ^ {2}} - \\frac {1}{5 ^ {2}} + \\dots + \\frac {1}{(n - 1) ^ {2}} - \\frac {1}{n ^ {2}} \\right] \\\\ = 1 + \\frac {1}{1 6} + \\frac {1}{8 1} + \\frac {1}{2 5 6} + \\frac {1}{7} \\left(\\frac {1}{3 ^ {2}} - \\frac {1}{n ^ {2}}\\right) <   1 + \\frac {1}{1 6} + \\frac {1}{8 1} + \\frac {1}{6 3} <   \\frac {1 1}{1 0}. \\\\ \\end{array}
$$

证法六 当 $n \\geqslant 3$ 时，

$$
\\frac {1}{n ^ {4}} <   \\frac {1}{n ^ {4} - n ^ {2}} = \\frac {1}{2 n} \\left(\\frac {1}{n ^ {2} - n} - \\frac {1}{n ^ {2} + n}\\right),
$$

同时， $\\frac{1}{(n - 1)^2 + (n - 1)} = \\frac{1}{n(n - 1)} = \\frac{1}{n^2 - n},$

$$
\\begin{array}{l} <   1 + \\frac {1}{1 6} + \\frac {1}{6} \\left(\\frac {1}{3 ^ {2} - 3} - \\frac {1}{3 ^ {2} + 3} + \\frac {1}{4 ^ {2} - 4} - \\frac {1}{4 ^ {2} + 4} + \\dots + \\frac {1}{n ^ {2} - n} - \\frac {1}{n ^ {2} + n}\\right) \\\\ = 1 + \\frac {1}{1 6} + \\frac {1}{6} \\left(\\frac {1}{3 ^ {2} - 3} - \\frac {1}{n ^ {2} + n}\\right) <   1 + \\frac {1}{1 6} + \\frac {1}{3 6} = 1 + \\frac {1 3}{1 4 4} <   1 + \\frac {1}{1 0} = \\frac {1 1}{1 0}. \\\\ \\end{array}
$$

所以， $T_{n}<1+\\frac{1}{16}+\\frac{1}{6}\\left(\\frac{1}{3^{2}-3}-\\frac{1}{3^{2}+3}\\right)+\\frac{1}{8}\\left(\\frac{1}{4^{2}-4}-\\frac{1}{4^{2}+4}\\right)+\\cdots+\\frac{1}{2n}\\left(\\frac{1}{n^{2}-n}-\\frac{1}{n^{2}+n}\\right)$

评注 数学思维开拓性指的是对一个问题能从多方面考虑;对一个对象能从多种角度观察;对一个题目能想出多种不同的解法,即一题多解.在一题多解的训练中,我们要密切注意每种解法的特点,善于发现解题规律,从中发现最有意义的简洁解法.本题第3小题的六种不同解法主要区别在于放缩的角度与技巧不同,有些技巧十分巧妙,不是一朝一夕能够掌握的,它需要不断积累,细心品味,逐步提高.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-2-28",
    topicId: "topic-sec-3-2",
    title: `已知 n ∈ 正整数，求证： 1√1^3 + 1√2^3 + 1√3^3 + … + fra`,
    content: `已知 $n \\in Z^{+}$ ，求证： $\\frac{1}{\\sqrt{1^{3}}} + \\frac{1}{\\sqrt{2^{3}}} + \\frac{1}{\\sqrt{3^{3}}} + \\cdots + \\frac{1}{\\sqrt{n^{3}}} < 3.$`,
    preview: `已知 n Z^+ ，求证：`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-2-28-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `一般项为 $\\frac{1}{\\sqrt{k^3}}$ 的连续形式为 $x^{-\\frac{3}{2}}$ ，有导数 $(-2x^{-\\frac{1}{2}})' = x^{-\\frac{3}{2}}.$

故考虑如下放缩： $\\frac{1}{\\sqrt{k^3}} < -2\\left(\\frac{1}{\\sqrt{k}} -\\frac{1}{\\sqrt{k - 1}}\\right)(k\\geqslant 2).$

因为 $\\left[(1+2k)\\cdot\\sqrt{k-1}\\right]^{2}-\\left(2\\sqrt{k^{3}}\\right)^{2}=-3k-1<0.$

所以 $\\frac{1}{\\sqrt{k^3}} +\\frac{2}{\\sqrt{k}} = \\frac{1 + 2k}{\\sqrt{k^3}} <  \\frac{2}{\\sqrt{k - 1}},$

即 $\\frac{1}{\\sqrt{k^3}} < -2\\left(\\frac{1}{\\sqrt{k}} -\\frac{1}{\\sqrt{k - 1}}\\right)(k\\geqslant 2).$

所以 $\\sum_{k=1}^{n} \\frac{1}{\\sqrt{k^3}} = 1 + \\sum_{k=2}^{n} \\frac{1}{\\sqrt{k^3}} < 1 + \\sum_{k=2}^{n} - 2\\left(\\frac{1}{\\sqrt{k}} - \\frac{1}{\\sqrt{k-1}}\\right)$

$$
= 3 - \\frac {2}{\\sqrt {n}} <   3.
$$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-2-29",
    topicId: "topic-sec-3-2",
    title: `对于 n Z^+`,
    content: `对于 $n \\in Z^{+}$ ，设 $T_{n} = \\frac{1}{1^{4}} + \\frac{1}{2^{4}} + \\cdots + \\frac{1}{n^{4}}$ ，求证： $T_{n} < \\frac{11}{10}$ .`,
    preview: `对于 n Z^+ ，设 ，求证： T_n < 11/10 .`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-2-29-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `一般项 $\\frac{1}{n^4}$ 的连续形式为 $x^{-4}$ , 有导数 $\\left(-\\frac{1}{3} x^{-3}\\right)' = x^{-4}$ .

故考虑如下放缩： $\\frac{1}{n^{4}}<-\\frac{1}{3}\\left(\\frac{1}{n^{3}}-\\frac{1}{(n-1)^{3}}\\right)$ .

因为 $(n+3)(n-1)^{3}-n^{4}=-6n^{2}+8n-3<0.$

所以 $\\frac{3}{n^{4}}+\\frac{1}{n^{3}}=\\frac{3+n}{n^{4}}<\\frac{1}{(n-1)^{3}}$ ,

即 $\\frac{1}{n^{4}}<-\\frac{1}{3}\\left(\\frac{1}{n^{3}}-\\frac{1}{(n-1)^{3}}\\right)(n\\geqslant2).$

所以 $\\sum_{k=1}^{n} \\frac{1}{k^4} = 1 + \\sum_{k=2}^{n} \\frac{1}{k^4} < 1 + \\frac{1}{2^4} + \\frac{1}{3^4} + \\sum_{k=4}^{n} - \\frac{1}{3} \\left( \\frac{1}{k^3} - \\frac{1}{(k-1)^3} \\right)$

$$
= 1 + \\frac {1}{1 6} + \\frac {1}{8 1} + \\frac {1}{8 1} - \\frac {1}{3 n ^ {3}} <   1 + \\frac {1}{1 6} + \\frac {1}{8 1} + \\frac {1}{8 1} <   \\frac {1 1}{1 0}.
$$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-2-30",
    topicId: "topic-sec-3-2",
    title: `求证: 当 n 为正整数时, 1/n+1 + 1/n+2 + … + 1/3n+1 < 4/3`,
    content: `求证: 当 n 为正整数时, $\\frac{1}{n+1} + \\frac{1}{n+2} + \\cdots + \\frac{1}{3n+1} < \\frac{4}{3}$ .`,
    preview: `求证: 当 n 为正整数时, .`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-2-30-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `一般项 $\\frac{1}{k}$ 的连续形式为 $\\frac{1}{x}$ ，有导数 $(\\ln x)'=\\frac{1}{x}$ .

故考虑如下放缩： $\\frac{1}{k}<\\ln k-\\ln(k-1),k\\geqslant2.$

因为 $\\ln\\left(\\frac{k}{k-1}\\right)=\\ln\\left(1+\\frac{1}{k-1}\\right)>\\frac{\\frac{1}{k-1}}{1+\\frac{1}{k-1}}=\\frac{1}{k},$ （\\*）

所以 $\\frac{1}{k}<\\ln k-\\ln(k-1)(k\\geqslant2)$ ,

所以 $\\sum_{k = n + 1}^{3n + 1}\\frac{1}{k} < \\sum_{k = n + 1}^{3n + 1}\\left[\\ln k - \\ln (k - 1)\\right]$

$$
= \\ln \\frac {3 n + 1}{n} = \\ln \\left(3 + \\frac {1}{n}\\right) <   \\ln \\left(3 + \\frac {1}{2}\\right) \\approx 1. 2 5 <   \\frac {4}{3}.
$$

评注 （\\*）式放缩用到了常见不等式： $\\frac{x}{1+x}<\\ln(1+x)<x(x>0)$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-2-31",
    topicId: "topic-sec-3-2",
    title: `已知不等式 xe^x-a(x+1)≥ x`,
    content: `已知不等式 $xe^{x}-a(x+1)\\geqslant\\ln x$ 对任意正数 x 恒成立，则实数 a 的最大值为 \\_\\_\\_\\_.`,
    preview: `已知不等式 xe^x-a(x+1)≥ x 对任意正数 x 恒成立，则实数 a 的最大值为 \\_\\_\\_\\_.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-2-31-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `由题设条件得: $\\frac{\\mathrm{e}^{\\ln x + x} - \\ln x}{x + 1} \\geqslant a$ , 由 $\\mathrm{e}^{\\ln x + x} \\geqslant \\ln x + x + 1$ ,

则左边 $\\geqslant \\frac{(\\ln x + x + 1) - \\ln x}{x + 1} = 1,$

当且仅当 $\\ln x + x = 0$ 时，左边最小值为 $1 \\geqslant a$ ，所以 $a_{\\max} = 1$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-2-32",
    topicId: "topic-sec-3-2",
    title: `不等式 xe^x-1 ≥ kx + x 对 x`,
    content: `不等式 $xe^{x}-1 \\geqslant kx + \\ln x$ 对 $\\forall x \\in (0, +\\infty)$ 恒成立，则 k 的最大值是 \\_\\_\\_\\_.`,
    preview: `不等式 xe^x-1 ≥ kx + x 对 x (0, +∞) 恒成立，则 k 的最大值是 \\_\\_\\_\\_.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-2-32-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `分离参数进行放缩.

不等式 $xe^{x}-1\\geqslant kx+\\ln x$ 对 $\\forall x\\in(0,+\\infty)$ 恒成立，

即 $\\frac{xe^{x}-\\ln x-1}{x}\\geqslant k$ 恒成立，即 $\\frac{e^{x+\\ln x}-\\ln x-1}{x}\\geqslant k$ ，因为 $e^{x+\\ln x}\\geqslant x+\\ln x+1$ ，

故 $\\frac{\\mathrm{e}^{x+\\ln x}-\\ln x-1}{x}\\geqslant\\frac{x+\\ln x+1-\\ln x-1}{x}=1,$

当且仅当 $x + \\ln x = 0$ 时，等号成立，所以 k 的最大值为 1.`,
      },
      {
        id: "prob-sec-3-2-32-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `切线放缩.

不等式 $xe^{x}-1\\geqslant kx+\\ln x$ 对 $\\forall x\\in(0,+\\infty)$ 恒成立，即 $xe^{x}-\\ln x\\geqslant kx+1$ 恒成立.

令 $g(x) = x\\mathrm{e}^{x} - \\ln x,g^{\\prime}(x) = (x + 1)\\mathrm{e}^{x} - \\frac{1}{x},g^{\\prime \\prime}(x) = (x + 2)\\mathrm{e}^{x} + \\frac{1}{x^{2}} >0.$

设切点 $(x_{0},y_{0})$ ，则 $g^{\\prime}(x_{0})=(x_{0}+1)\\mathrm{e}^{x_{0}}-\\frac{1}{x_{0}}$ .

所以 $k = (x_0 + 1)\\mathrm{e}^{x_0} - \\frac{1}{x_0}$ ，所以 $(x_0 + 1)\\mathrm{e}^{x_0} - \\frac{1}{x_0} = \\frac{x_0\\mathrm{e}^{x_0} - \\ln x_0 - 1}{x_0}$ .

即 $x_0\\mathrm{e}^{x_0} = -\\frac{\\ln x_0}{x_0}$ 故 $\\mathrm{e}^{x_0}\\cdot \\ln \\mathrm{e}^{x_0} = \\frac{1}{x_0}\\cdot \\ln \\frac{1}{x_0}.$

由函数 $y=x\\cdot\\ln x$ 在 $[1,+\\infty)$ 单调递增，得 $e^{x_{0}}=\\frac{1}{x_{0}}$ ，所以 $k=(x_{0}+1)e^{x_{0}}-\\frac{1}{x_{0}}=1$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-2-33",
    topicId: "topic-sec-3-2",
    title: `已知 x_1 x_1=x_2 x_2=m(x_1<x_2)`,
    content: `已知 $x_{1}\\ln x_{1}=x_{2}\\ln x_{2}=m(x_{1}<x_{2})$ ，求证： $1+me<x_{2}-x_{1}<2m+1+e^{-2}$ .`,
    preview: `已知 x_1 x_1=x_2 x_2=m(x_1<x_2) ，求证： 1+me<x_2-x_1<2m+1+e^-2 .`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-2-33-sol-0",
        title: `解答`,
        method: "creative",
        steps: [],
        explanation: `设 $f(x)=x\\ln x, f'(x)=1+\\ln x,$

则 $f(x)$ 在 $\\left(0, \\frac{1}{\\mathrm{e}}\\right)$ 上单调递减，在 $\\left(\\frac{1}{\\mathrm{e}}, +\\infty\\right)$ 上单调递增，则 $f_{\\min} = f\\left(\\frac{1}{\\mathrm{e}}\\right) = -\\frac{1}{\\mathrm{e}}$ .

且当 $x > 1$ 时， $f(x) > 0$ ，故 $m \\in \\left(-\\frac{1}{\\mathrm{e}}, 0\\right)$ ，且 $0 < x_1 < \\frac{1}{\\mathrm{e}} < x_2 < 1$ .

(1) 割线放缩.

如图 3-2-3 所示, 设点 $B\\left(\\frac{1}{\\mathrm{e}}, -\\frac{1}{\\mathrm{e}}\\right)$ ,

直线 OB 的方程为 y = -x.

下面证明 $-x > x \\ln x \\left(0 < x < \\frac{1}{e}\\right)$ ,

因为 $0 < x < \\frac{1}{e}$ ，故 $\\ln x < \\ln \\frac{1}{e} = -1$ ，

![](images/2112dd5b51750953392cb101e4f03d015f3005f223d9aef6203d82c44d26f9a4.jpg)
图3-2-3

因此 $-x > x\\ln x$ ，故 $-x_{1} > x_{1}\\ln x_{1} = m.$ ①

同时直线 AB 的方程为 $y=\\frac{1}{\\mathrm{e}-1}(x-1)$ ，下面证明： $\\frac{1}{\\mathrm{e}-1}(x-1)>x\\ln x\\left(\\frac{1}{\\mathrm{e}}<x<1\\right)$ .

构造函数 $g(x)=\\frac{1}{\\mathrm{e}-1}(x-1)-x\\ln x\\left(\\frac{1}{\\mathrm{e}}<x<1\\right)$ ,

故 $g'(x)=\\frac{1}{e-1}-1-\\ln x, g'(x)$ 单调递减，

$$
g ^ {\\prime} \\left(\\frac {1}{\\mathrm{e}}\\right) = \\frac {1}{\\mathrm{e} - 1} - 1 + 1 > 0, g ^ {\\prime} (1) = \\frac {1}{\\mathrm{e} - 1} - 1 <   0,
$$

故在 $\\left(\\frac{1}{e},1\\right)$ 之间必存在一点 $x_{0}$ ，使得 $g'(x_{0})=0$ ，

故 $g(x)$ 在 $\\left(\\frac{1}{\\mathrm{e}}, x_{0}\\right)$ 上单调递增，在 $(x_{0}, 1)$ 上单调递减，且 $g\\left(\\frac{1}{\\mathrm{e}}\\right)=g(1)=0$ ，

故 $g(x) > 0$ ，即 $\\frac{1}{\\mathrm{e} - 1} (x - 1) > x\\ln x\\left(\\frac{1}{\\mathrm{e}} < x < 1\\right)$

因此 $\\frac{1}{\\mathrm{e}-1}(x_{2}-1)>x_{2}\\ln x_{2}=m,x_{2}>\\mathrm{e}m-m+1.$ ②

由①②可得 $x_{2}-x_{1}>1+me.$

(2) 切线放缩.

$f(x)$ 在 x=1 处的切线方程为 y=x-1，在 $x=\\frac{1}{e^{2}}$ 的切线方程为 $y=-x-\\frac{1}{e^{2}}$ .

同理可证明： $f(x)=x\\ln x>x-1$ ，则 $m=x_{2}\\ln x_{2}>x_{2}-1$ ，则 $x_{2}<m+1$ 。③

$f(x) = x\\ln x > -x - \\frac{1}{\\mathrm{e}^2}$ ，则 $m = x_{1}\\ln x_{1} > -x_{1} - \\frac{1}{\\mathrm{e}^{2}}$ ，则 $-x_{1} <   m + \\frac{1}{\\mathrm{e}^{2}}.$ ④

由③④可得: $x_{2}-x_{1}<2m+1+\\frac{1}{e^{2}}$ .

综上所述： $1+me<x_{2}-x_{1}<2m+1+e^{-2}$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-2-34",
    topicId: "topic-sec-3-2",
    title: `已知函数 f(x)=x x , e 为自然对数的底数`,
    content: `已知函数 $f(x)=x\\ln x$ , e 为自然对数的底数.
(1)求曲线 $y=f(x)$ 在 $x=e^{-2}$ 处的切线方程；
(2)关于 x 的不等式 $f(x) \\geqslant \\lambda (x - 1)$ 在 $(0, +\\infty)$ 上恒成立，求实数 $\\lambda$ 的值；
(3)关于 x 的方程 $f(x)=a$ 有两个实根 $x_{1}, x_{2}$ ，求证： $\\left|x_{1}-x_{2}\\right|<2a+1+\\mathrm{e}^{-2}$ .`,
    preview: `已知函数 f(x)=x x , e 为自然对数的底数. (1)求曲线 y=f(x) 在 x=e^-2 处的切线方程； (2)关于 x 的不等式 f(x) ≥qs`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-2-34-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 对函数求导得 $f'(x)=\\ln x+1 \\Rightarrow f'(\\mathrm{e}^{-2})=-1$ ,

又 $f(\\mathrm{e}^{-2})=-2\\mathrm{e}^{-2}$ ,

则曲线 $y=f(x)$ 在 $x=e^{-2}$ 处的切线方程为 $y=-x-e^{-2}$ .

(2) 记 $g(x)=f(x)-\\lambda(x-1)=x\\ln x-\\lambda(x-1), x>0.$

由题意知 $g(x) \\geqslant 0$ 在 $(0, +\\infty)$ 上恒成立，下面求 $g(x)$ 的最小值.

对 $g(x)$ 求导得 $g'(x)=\\ln x+1-\\lambda$ ，令 $g'(x)=0 \\Rightarrow x=e^{\\lambda-1}$ ，

易得 $g'(x)>0 \\Rightarrow x > e^{\\lambda-1}, g'(x) < 0 \\Rightarrow 0 < x < e^{\\lambda-1}$ ,

$$
g (x) _ {\\min} = g (\\mathrm{e} ^ {\\lambda - 1}) = \\lambda - \\mathrm{e} ^ {\\lambda - 1} \\geqslant 0.
$$

记 $G(\\lambda) = \\lambda -\\mathrm{e}^{\\lambda -1}$

则 $G'(\\lambda)=1-\\mathrm{e}^{\\lambda-1}$ ，令 $G'(x)=0\\Rightarrow\\lambda=1$ ，

由单调性可得 $G(\\lambda)_{\\max}=G(1)=0$ .

故 $\\lambda-e^{\\lambda-1}\\leqslant0$ ，当且仅当时 $\\lambda=1$ 取等号，又 $\\lambda-e^{\\lambda-1}\\geqslant0$ ，从而得到 $\\lambda=1$

(3) 先证 $f(x) \\geqslant -x - e^{-2}$ ，如图 3-2-4 所示，

![](images/b2849d6d4ffb284a1efdfaaea2a5c91754d91b07587262e6d9a063a385fa4ee0.jpg)
记 $h(x)=f(x)-(-x-e^{-2})=x\\ln x+x+e^{-2}$ ，
则 $h'(x)=\\ln x+2$ ，

$$
h ^ {\\prime} (x) > 0 \\Rightarrow x > \\mathrm{e} ^ {- 2}, h ^ {\\prime} (x) <   0 \\Rightarrow 0 <   x <   \\mathrm{e} ^ {- 2},
$$

所以 $h(x)_{\\mathrm{min}} = h(\\mathrm{e}^{-2}) = 0$ ，即 $h(x)\\geqslant 0$ 恒成立，记直线 $y = a$ 分别与 $y = -x - \\mathrm{e}^{-2},y = x - 1$ 交于 $(x_1',a),(x_2',a)$

设 $x_{1} <   x_{2}$ ，则 $a = -x_1^{\\prime} - \\mathrm{e}^{-2} = f(x_{1})\\geqslant -x_{1} - \\mathrm{e}^{-2},$

从而 $x_{1}^{\\prime} < x_{1}$ , 当且仅当时 $a = -2\\mathrm{e}^{-2}$ 取等号, 由(2)知, $f(x) \\geqslant x - 1$ , 则 $a = x_{2}^{\\prime} - 1 = f(x_{2}) \\geqslant x_{2} - 1$ , 从而 $x_{2}^{\\prime} \\geqslant x_{2}$ , 当且仅当时 $a = 0$ 取等号,

故 $|x_{1}-x_{2}|=x_{2}-x_{1}<x_{2}^{\\prime}-x_{1}^{\\prime}=a+1-(-a-\\mathrm{e}^{-2})=2a+1+\\mathrm{e}^{-2}$

因等号成立的条件不能同时满足，故 $|x_{1}-x_{2}|<2a+1+\\mathrm{e}^{-2}$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-2-35",
    topicId: "topic-sec-3-2",
    title: `已知函数 f(x)=x^2e^3x`,
    content: `已知函数 $f(x)=x^{2}e^{3x}$ .
(1) 若 x<0, 求证: $f(x)<\\frac{1}{9}$ ;

(2) 若 x > 0，恒有 $f(x) \\geqslant (k + 3)x + 2\\ln x + 1$ ，求实数 k 的取值范围.`,
    preview: `已知函数 f(x)=x^2e^3x . (1) 若 x<0, 求证: f(x)<1/9 ; (2) 若 x > 0，恒有 ，求实数 k 的取值范围.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-2-35-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1) 因为 $f(x) = x^{2} \\mathrm{e}^{3x}$ ，所以 $f'(x) = 2x \\mathrm{e}^{3x} + 3x^{2} \\mathrm{e}^{3x} = x(3x + 2) \\mathrm{e}^{3x}$ .

从而 $f(x)$ 在 $\\left(-\\infty, -\\frac{2}{3}\\right)$ 内单调递增，在 $\\left(-\\frac{2}{3}, 0\\right)$ 内单调递减，在 $(0, +\\infty)$ 内单调递增，故 $f(x)$ 的极大值为 $f\\left(-\\frac{2}{3}\\right) = \\frac{4}{9\\mathrm{e}^2}$ .

所以当 $x < 0$ 时， $f(x) \\leqslant f\\left(-\\frac{2}{3}\\right) = \\frac{4}{9\\mathrm{e}^2} < \\frac{4}{9 \\times 4} = \\frac{1}{9}$ .

![](images/b2849d6d4ffb284a1efdfaaea2a5c91754d91b07587262e6d9a063a385fa4ee0.jpg)

图3-2-4

(2)`,
      },
      {
        id: "prob-sec-3-2-35-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `由 $x^{2}\\mathrm{e}^{3x}\\geqslant (k + 3)x + 2\\ln x + 1, k\\leqslant \\frac{x^2\\mathrm{e}^{3x} - 3x - 2\\ln x - 1}{x}(x > 0)$ ,

令 $g(x) = \\frac{x^2\\mathrm{e}^{3x} - 3x - 2\\ln x - 1}{x}$ （ $x > 0$ ），

则 $g'(x)=\\frac{x^{2}(1+3x)\\mathrm{e}^{3x}+2\\ln x-1}{x^{2}}$ (x>0),

令 $h(x) = x^{2}(1 + 3x)\\mathrm{e}^{3x} + 2\\ln x - 1$ ，则可知函数 $h(x)$ 在 $(0, + \\infty)$ 上递增，

且 $x \\rightarrow 0_{+}$ 时， $h(x) \\rightarrow -\\infty, h(1) = 4e^{3} + 2\\ln1 - 1 > 0,$

从而存在 $x_{0} \\in (0, 1)$ ，使得 $h(x_{0}) = 0$ ，

所以当 $x \\in (0, x_{0})$ 时， $g'(x) < 0, g(x)$ 单调递减；

当 $x \\in (x_{0}, +\\infty)$ 时， $g'(x) > 0, g(x)$ 单调递增.

所以 $g(x)$ 在 $(0, +\\infty)$ 上的最小值为 $g(x_{0}) = \\frac{x_{0}^{2} e^{3x_{0}} - 3x_{0} - 2\\ln x_{0} - 1}{x_{0}}$ ,

由 $h(x_0) = x_0^2 (1 + 3x_0)\\mathrm{e}^{3x_0} + 2\\ln x_0 - 1 = 0$ ，得 $x_0^2\\mathrm{e}^{3x_0} = \\frac{1 - 2\\ln x_0}{1 + 3x_0},$

令 $x_0^2\\mathrm{e}^{3x_0} = \\frac{1 - 2\\ln x_0}{1 + 3x_0} = t_0$ ，则 $2\\ln x_0 + 3x_0 = \\ln t_0$ ，且 $1 - 2\\ln x_0 = t_0(1 + 3x_0)$

两式相加可得 $\\ln t_{0} + t_{0}(1 + 3x_{0}) - 1 - 3x_{0} = 0$ ,

记 $\\varphi(t)=\\ln t+t(1+3x_{0})-1-3x_{0}$ ，则 $\\varphi(t)$ 在 $(0,+\\infty)$ 上单调递增，且 $\\varphi(1)=0$ ，所以 t=1.

从而 $g(x_{0})=\\frac{x_{0}^{2}\\mathrm{e}^{3x_{0}}-3x_{0}-2\\ln x_{0}-1}{x_{0}}=\\frac{1-3x_{0}+3x_{0}-1}{x_{0}}=0,$

所以实数 k 的取值范围为 $(-\\infty, 0]$ .`,
      },
      {
        id: "prob-sec-3-2-35-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `（切线放缩） $x^{2}e^{3x}\\geqslant(k+3)x+2\\ln x+1\\Leftrightarrow(x^{2}e^{3x})-\\ln(x^{2}e^{3x})-1\\geqslant kx$ ，由不等式对 $\\forall t>0,\\ln t\\leqslant t-1$ 知 $(x^{2}e^{3x})-\\ln(x^{2}e^{3x})-1\\geqslant0$ ，所以 $k\\leqslant0$ 。`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-3-1",
    topicId: "topic-sec-3-3",
    title: `若 x, y 是正数`,
    content: `若 x, y 是正数，求 $\\left(x+\\frac{1}{2y}\\right)^{2}+\\left(y+\\frac{1}{2x}\\right)^{2}$ 的最小值.`,
    preview: `若 x, y 是正数，求 (x+1/2y)^2+(y+1/2x)^2 的最小值.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-3-1-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `利用基本不等式, $\\left(x + \\frac {1}{2 y}
ight) ^ {2} + \\left(y + \\frac {1}{2 x}
ight) ^ {2} = \\left(x ^ {2} + \\frac {1}{4 x ^ {2}}
ight) + \\left(y ^ {2} + \\frac {1}{4 y ^ {2}}
ight) + \\left(\\frac {x}{y} + \\frac {y}{x}
ight) \\geqslant 4$ . 当且仅当 $x=y=\\frac{\\sqrt{2}}{2}$ 时取等号, 故最小值为 4.`,
      },

    ],
    tags: [],
  },
  {
    id: "prob-sec-3-3-2",
    topicId: "topic-sec-3-3",
    title: `设 x, y 为正数`,
    content: `设 x, y 为正数，且 $x + y = 1$ ，求 $\\left(\\frac{1}{x^{2}} - 1\\right)\\left(\\frac{1}{y^{2}} - 1\\right)$ 的最小值.`,
    preview: `设 x, y 为正数，且 x + y = 1 ，求 (1/x^2 - 1)(1/y^2 - 1) 的最小值.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-3-2-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `由 $x+y=1$ 且 x, y 为正数, 得 $xy \\leqslant \\frac{1}{4}$ . 又 $\\left(\\frac{1}{x^{2}}-1
ight)\\left(\\frac{1}{y^{2}}-1
ight)=\\frac{(1-x^{2})(1-y^{2})}{x^{2}y^{2}}=\\frac{1 + x + y + xy}{xy}=1+\\frac{2}{xy} \\geqslant 9$ . 当且仅当 $x=y=\\frac{1}{2}$ 时取等号, 故最小值为 9.`,
      },

    ],
    tags: [],
  },
  {
    id: "prob-sec-3-3-3",
    topicId: "topic-sec-3-3",
    title: `已知 x_1, x_2, x_3 ∈ R^+, 1x_1 + 1 + 1x_2 + 1 +`,
    content: `已知 $x_{1}, x_{2}, x_{3} \\in \\mathbf{R}^{+}, \\frac{1}{x_{1} + 1} + \\frac{1}{x_{2} + 1} + \\frac{1}{x_{3} + 1} = 1$ ，求 $x_{1}x_{2}x_{3}$ 的最小值.`,
    preview: `已知 ，求 x_1x_2x_3 的最小值.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-3-3-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `设 $\\frac{1}{x_{1}+1}=\\frac{a}{a+b+c},\\frac{1}{x_{2}+1}=\\frac{b}{a+b+c},\\frac{1}{x_{3}+1}=\\frac{c}{a+b+c}(a,b,c\\in\\mathbf{R}^{+})$ ,

则 $x_{1} = \\frac{b + c}{a}\\geqslant \\frac{2\\sqrt{bc}}{a},x_{2} = \\frac{a + c}{b}\\geqslant \\frac{2\\sqrt{ac}}{b},x_{3} = \\frac{a + b}{c}\\geqslant \\frac{2\\sqrt{ab}}{c},$

所以 $x_{1}x_{2}x_{3}\\geqslant\\frac{2\\sqrt{bc}}{a}\\cdot\\frac{2\\sqrt{ac}}{b}\\cdot\\frac{2\\sqrt{ab}}{c}=8$ , 当且仅当 $x_{1}=x_{2}=x_{3}=2$ 时取等号.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-3-4",
    topicId: "topic-sec-3-3",
    title: `证明：对于任意正整数 n，有 (1 + 1/n)^n < (1 + 1/n + 1)^n + 1`,
    content: `证明：对于任意正整数 $n$ ，有 $\\left(1 + \\frac{1}{n}\\right)^n < \\left(1 + \\frac{1}{n + 1}\\right)^{n + 1}$`,
    preview: `证明：对于任意正整数 n ，有`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-3-4-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `原不等式等价于 $\\sqrt[n + 1]{\\left(1 + \\frac{1}{n}\\right)^n} < 1 + \\frac{1}{n + 1}$ , 故可设法使其左边转化为 $n$ 个数的几何平均, 而右边为其算术平均.

$$
\\begin{array}{l} \\sqrt [ n + 1 ]{\\left(1 + \\frac {1}{n}\\right) ^ {n}} = \\sqrt [ n + 1 ]{\\underbrace {\\left(1 + \\frac {1}{n}\\right) \\cdots \\left(1 + \\frac {1}{n}\\right)} _ {n \\text {个}} \\times 1} <   \\frac {\\left(1 + \\frac {1}{n}\\right) + \\cdots + \\left(1 + \\frac {1}{n}\\right) + 1}{n + 1} \\\\ = \\frac {n + 2}{n + 1} = 1 + \\frac {1}{n + 1}. \\\\ \\end{array}
$$

评注 要将 $n$ 个变量的积的形式变为 $n + 1$ 个的形式的基本思路是在 $n$ 个变量的积的基础上再乘1，变成 $n + 1$ 项，拼凑成均值不等式的形式。同理，要将 $n$ 个变量的积的形式变为 $n + m$ 个的形式的基本思路是在 $n$ 个变量的积的基础上再乘 $m$ 个1，变成 $n + m$ 项，拼凑成均值不等式的形式。类似地可证 $\\left(1 + \\frac{1}{n}\\right)^{n + 1} < \\left(1 + \\frac{1}{n + 1}\\right)^{n + 2}$ 。`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-3-5",
    topicId: "topic-sec-3-3",
    title: `若 a, b, c 是不全相等的正数，求证： lg a+b/2 + lg b+c/2 + lg c+a/2 > lg`,
    content: `若 a, b, c 是不全相等的正数，求证： $\\lg \\frac{a+b}{2} + \\lg \\frac{b+c}{2} + \\lg \\frac{c+a}{2} > \\lg a + \\lg b + \\lg c.$`,
    preview: `若 a, b, c 是不全相等的正数，求证：`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-3-5-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `要证原不等式, 只需证 $\\frac{a+b}{2}\\cdot\\frac{b+c}{2}\\cdot\\frac{c+a}{2}>abc$ . 因为 $\\frac{a + b}{2} \\geqslant \\sqrt{ab}$ , $\\frac{b + c}{2} \\geqslant \\sqrt{bc}$ , $\\frac{a + c}{2} \\geqslant \\sqrt{ac}$ , 所以乘积不小于 $abc$ . 又因为 a, b, c 是不全相等的正数, 等号不成立, 故原不等式成立.`,
      },

    ],
    tags: [],
  },
  {
    id: "prob-sec-3-3-6",
    topicId: "topic-sec-3-3",
    title: `若 a, b, c ∈ R^*，求证： 1/a + 1/b + 1/c ≤ a^8 + b^8 + c^8/a^3`,
    content: `若 $a, b, c \\in \\mathbf{R}^*$ ，求证： $\\frac{1}{a} + \\frac{1}{b} + \\frac{1}{c} \\leqslant \\frac{a^8 + b^8 + c^8}{a^3 b^3 c^3}$ .`,
    preview: `若 a, b, c R^* ，求证： .`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-3-6-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `从本题的结构特征分析,其形式是三项的和不小于三项的和,基本思路是利用三个均值不等式相加而成.

因为 $\\frac{1}{a}+\\frac{1}{b}+\\frac{1}{c}=\\frac{bc+ca+ab}{abc}\\leqslant\\frac{a^{2}+b^{2}+c^{2}}{abc}$

所以只需证 $a^2 + b^2 + c^2 \\leqslant \\frac{a^8 + b^8 + c^8}{a^2b^2c^2}$ 成立，

即证 $a^{2}b^{2}c^{2}(a^{2}+b^{2}+c^{2})\\leqslant a^{8}+b^{8}+c^{8}$

因为 $a^2 + b^2 \\geqslant 2ab, b^2 + c^2 \\geqslant 2bc, a^2 + c^2 \\geqslant 2ac$

所以 $a^2 + b^2 + c^2 \\geqslant ab + bc + ca$ ，所以 $a^8 + b^8 + c^8 \\geqslant a^4 b^4 + b^4 c^4 + c^4 a^4$ .

又 $a^4 b^4 + b^4 c^4 \\geqslant 2\\sqrt{a^4b^4b^4c^4} = 2a^2c^2b^4$

$$
b ^ {4} c ^ {4} + c ^ {4} a ^ {4} \\geqslant 2 \\sqrt {b ^ {4} c ^ {4} c ^ {4} a ^ {4}} = 2 a ^ {2} b ^ {2} c ^ {4}, a ^ {4} b ^ {4} + c ^ {4} a ^ {4} \\geqslant 2 \\sqrt {a ^ {4} b ^ {4} c ^ {4} a ^ {4}} = 2 b ^ {2} c ^ {2} a ^ {4},
$$

所以 $a^8 + b^8 + c^8 \\geqslant a^4 b^4 + b^4 c^4 + c^4 a^4 \\geqslant a^2 b^2 c^2 (a^2 + b^2 + c^2)$ .

评注 本题的难点是要多次应用均值不等式.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-3-7",
    topicId: "topic-sec-3-3",
    title: `正数乘积不等式与指数和上界`,
    content: `设 $x_{1}, x_{2}, \\cdots, x_{n} \\in R^{+}, M = \\sum_{i=1}^{n} x_{i}$ ，求证： $\\prod_{i=1}^{n} (1 + x_{i}) \\leqslant \\sum_{i=0}^{n} \\frac{M^{i}}{i!}$ .`,
    preview: `设正数 x_1,...,x_n 的和为 M，证明 ∏(1+x_i) 不超过指数型有限和。`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-3-7-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `根据均值不等式, 得

$$
\\begin{array}{l} \\prod_ {i = 1} ^ {n} (1 + x _ {i}) \\leqslant \\left(\\frac {n + x _ {1} + x _ {2} + \\cdots + x _ {n}}{n}\\right) ^ {n} = \\left(1 + \\frac {M}{n}\\right) ^ {n} \\\\ = 1 + C _ {n} ^ {1} \\left(\\frac {M}{n}\\right) + C _ {n} ^ {2} \\left(\\frac {M}{n}\\right) ^ {2} + \\dots + C _ {n} ^ {m} \\left(\\frac {M}{n}\\right) ^ {m} + \\dots + C _ {n} ^ {n} \\left(\\frac {M}{n}\\right) ^ {n} \\\\ \\end{array}
$$

因为 $n!=(n-m)!(n-m+1)\\cdots n\\leqslant(n-m)!n^{m}$ ,

$$
C _ {n} ^ {m} \\left(\\frac {M}{n}\\right) ^ {m} = \\frac {n !}{m ! (n - m) !} \\cdot \\frac {1}{n ^ {m}} M ^ {m} \\leqslant \\frac {M ^ {m}}{m !}.
$$

所以 $\\prod_{i=1}^{n}(1 + x_i) \\leqslant 1 + M + \\cdots + \\frac{M^m}{m!} + \\cdots + \\frac{M^n}{n!} = \\sum_{i=0}^{n} \\frac{M^i}{i!}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-3-8",
    topicId: "topic-sec-3-3",
    title: `若正数 a, b, c 满足 a + b + c = 1`,
    content: `若正数 a, b, c 满足 $a + b + c = 1$ ，求证：
$$
\\left(a + \\frac {1}{a}\\right) \\left(b + \\frac {1}{b}\\right) \\left(c + \\frac {1}{c}\\right) \\geqslant \\frac {1 0 0 0}{2 7}.
$$

证法一（运用均值不等式）注意到 $a = b = c = \\frac{1}{3}$ 时，不等式的等号成立，将原不等式变形为 $\\left(3a + \\frac{3}{a}\\right)\\left(3b + \\frac{3}{b}\\right)\\left(3c + \\frac{3}{c}\\right) \\geqslant 1000$

经观察要使不等式的等号成立，只需 $3a = \\frac{3}{ma} = 1$ ，解得 $m = 9$ .于是运用均值不等式得

$$
\\begin{array}{l} \\left(3 a + \\frac {3}{a}\\right) \\left(3 b + \\frac {3}{b}\\right) \\left(3 c + \\frac {3}{c}\\right) = \\left(3 a + \\underbrace {\\frac {1}{3 a} + \\cdots + \\frac {1}{3 a}} _ {9 \\text {个}}\\right) \\left(3 b + \\underbrace {\\frac {1}{3 b} + \\cdots + \\frac {1}{3 b}} _ {9 \\text {个}}\\right) \\cdot \\left(3 c + \\underbrace {\\frac {1}{3 c} + \\cdots + \\frac {1}{3 c}} _ {9 \\text {个}}\\right) \\\\ \\geqslant 1 0 \\sqrt [ 1 0 ]{\\left(\\frac {1}{3 a}\\right) ^ {8}} \\cdot 1 0 \\sqrt [ 1 0 ]{\\left(\\frac {1}{3 b}\\right) ^ {8}} \\cdot 1 0 \\sqrt [ 1 0 ]{\\left(\\frac {1}{3 c}\\right) ^ {8}} = 1 0 0 0 \\left(\\frac {1}{3 a \\cdot 3 b \\cdot 3 c}\\right) ^ {\\frac {4}{5}} \\\\ \\geqslant 1 0 0 0 \\left[ \\left(\\frac {3}{3 a + 3 b + 3 c}\\right) ^ {3} \\right] ^ {\\frac {4}{5}} = 1 0 0 0, \\\\ \\end{array}
$$

所以 $\\left(a+\\frac{1}{a}\\right)\\left(b+\\frac{1}{b}\\right)\\left(c+\\frac{1}{c}\\right)\\geqslant\\frac{1000}{27}.$

证法二 (仍用均值不等式)

注意到 $a = b = c = \\frac{1}{3}$ , 不等式的等号成立 (若从 $a + \\frac{1}{a} \\geqslant 2$ 出发, 不等式不能取等号, 故不能运用二元均值不等式), 应将 $\\frac{1}{a}$ 平均分成 $m$ 份, 使得不等式取等号时, 有 $a = b = c = \\frac{1}{3}$ , 此时必须有 $a = \\frac{1}{ma} = \\frac{1}{3}$ , 解得 $m = 9$ , 于是利用均值不等式得

$$
a + \\underbrace {\\left(\\frac {1}{9 a} + \\frac {1}{9 a} + \\cdots + \\frac {1}{9 a}\\right)} _ {9 \\text {个}} \\geqslant 1 0 \\times \\sqrt [ 1 0 ]{a \\cdot \\left(\\frac {1}{9 a}\\right) ^ {9}},
$$

同理，

$$
b + \\left(\\underbrace {\\frac {1}{9 b} + \\frac {1}{9 b} + \\cdots + \\frac {1}{9 b}} _ {9 \\text {个}}\\right) \\geqslant 1 0 \\times \\sqrt [ 1 0 ]{b \\cdot \\frac {1}{(9 b) ^ {9}}}, \\quad c + \\left(\\underbrace {\\frac {1}{9 c} + \\frac {1}{9 c} + \\cdots + \\frac {1}{9 c}} _ {9 \\text {个}}\\right) \\geqslant 1 0 \\times \\sqrt [ 1 0 ]{c \\cdot \\frac {1}{(9 c) ^ {9}}},
$$

于是 $\\left(a+\\frac{1}{a}\\right)\\left(b+\\frac{1}{b}\\right)\\left(c+\\frac{1}{c}\\right)\\geqslant1000\\cdot\\frac{1}{\\sqrt[10]{9^{27}(abc)^8}}$

而正数 $a, b, c$ 满足 $a + b + c = 1$ ，可得 $0 < abc \\leqslant \\frac{1}{27}$ ，于是 $\\frac{1}{abc} \\geqslant 27$ ，所以，

$$
\\left(a + \\frac {1}{a}\\right) \\left(b + \\frac {1}{b}\\right) \\left(c + \\frac {1}{c}\\right) \\geqslant 1 0 0 0 \\cdot \\frac {1}{\\sqrt [ 5 ]{3 ^ {2 7}}} \\left(\\frac {1}{a b c}\\right) ^ {\\frac {4}{5}} \\geqslant \\frac {1 0 0 0}{2 7}.
$$

证法三 $\\left(a + \\frac{1}{a}\\right)\\left(b + \\frac{1}{b}\\right)\\left(c + \\frac{1}{c}\\right) = abc + \\left(\\frac{bc}{a} +\\frac{ca}{b} +\\frac{ab}{c}\\right) + \\left(\\frac{a}{bc} +\\frac{b}{ca} +\\frac{c}{ab}\\right) + \\frac{1}{abc}$

$$
\\geqslant a b c + 3 \\sqrt [ 3 ]{a b c} + \\frac {3}{\\sqrt [ 3 ]{a b c}} + \\frac {1}{a b c} = \\left(\\sqrt [ 3 ]{a b c} + \\frac {1}{\\sqrt [ 3 ]{a b c}}\\right) ^ {3},
$$

令 $x = \\sqrt[3]{abc}$ , 考虑 $f(x) = \\left(x + \\frac{1}{x}\\right)^3$ 的单调性.

注意到 $x = \\sqrt[3]{abc} \\leqslant \\frac{a + b + c}{3} = \\frac{1}{3}$ , 所以 $x \\in \\left(0, \\frac{1}{3}\\right], f'(x) = 3\\left(x + \\frac{1}{x}\\right)^2\\left(1 - \\frac{1}{x^2}\\right) < 0$ ,

所以 $f(x)\\geqslant f\\left(\\frac{1}{3}\\right) = \\frac{1000}{27},$

得证.

证法四（用函数的凹凸性）

设 $g = \\left(a + \\frac{1}{a}\\right)\\left(b + \\frac{1}{b}\\right)\\left(c + \\frac{1}{c}\\right),$

则 $\\ln g=\\ln\\left(a+\\frac{1}{a}\\right)+\\ln\\left(b+\\frac{1}{b}\\right)+\\ln\\left(c+\\frac{1}{c}\\right).$

设 $f(x) = \\ln \\left(x + \\frac{1}{x}\\right)(0 < x < 1)$ .

$$
f ^ {\\prime} (x) = \\frac {x ^ {2} - 1}{(x ^ {2} + 1) \\cdot x}, f ^ {\\prime \\prime} (x) = \\left[ \\frac {x ^ {2} - 1}{(x ^ {2} + 1) \\cdot x} \\right] = \\frac {- (x ^ {4} - 4 x ^ {2} - 1)}{\\left[ (x ^ {2} + 1) x \\right] ^ {2}},
$$

令 $t = x^{2}, 0 < t < 1$ ，则 $x^{4} - 4x^{2} - 1 = t^{2} - 4t - 1$

结合二次函数图像可知 $x^{4} - 4x^{2} - 1 = t^{2} - 4t - 1 < 0$ ，故 $f''(x) > 0$ ，所以 $f(x)$ 在 $(0,1)$ 上为凹函数，根据琴生不等式有：

$$
\\ln g = \\ln \\left(a + \\frac {1}{a}\\right) + \\ln \\left(b + \\frac {1}{b}\\right) + \\ln \\left(c + \\frac {1}{c}\\right) \\geqslant 3 \\ln \\frac {a + \\frac {1}{a} + b + \\frac {1}{b} + c + \\frac {1}{c}}{3},
$$

而 $\\frac{1}{a} +\\frac{1}{b} +\\frac{1}{c} = \\left(\\frac{1}{a} +\\frac{1}{b} +\\frac{1}{c}\\right)(a + b + c)\\geqslant 3\\sqrt[3]{\\frac{1}{abc}}\\times 3\\sqrt[3]{abc} = 9,$

$a + \\frac{1}{a} + b + \\frac{1}{b} + c + \\frac{1}{c} \\geqslant 10 (a = b = c = \\frac{1}{3}$ 时取等号），

所以 $\\ln g \\geqslant 3 \\ln \\frac{10}{3}$ ，即 $g \\geqslant \\left(\\frac{10}{3}\\right)^{3} = \\frac{1000}{27}$ ,

不等式得证.`,
    preview: `若正数 a, b, c 满足 a + b + c = 1 ，求证： 证法一（运用均值不等式）注意到 a = b = c = 1/3 时，不等式的等号成立，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-3-8-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `评注 本题结论可作如下推广: 已知 $a_1, a_2, \\cdots, a_n \\in \\mathbf{R}^+$ 且 $\\sum_{i=1}^{n} a_i = 1$ , 则 $\\left(a_1 + \\frac{1}{a_1}\\right)\\left(a_2 + \\frac{1}{a_2}\\right) \\cdots\\left(a_n + \\frac{1}{a_n}\\right) \\geqslant \\left(n + \\frac{1}{n}\\right)^n$ . 证明方法同以上证法四.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-3-1-8",
    topicId: "topic-sec-3-3",
    title: `若正数 x, y 满足 x + 3y = 5xy`,
    content: `若正数 $x, y$ 满足 $x + 3y = 5xy$ ，则 $3x + 4y$ 的最小值是 （）
A. $\\frac{24}{5}$

B. $\\frac{28}{5}$

C. 5

D. 6`,
    preview: `若正数 x, y 满足 x + 3y = 5xy ，则 3x + 4y 的最小值是 （） A. 24/5 B. 28/5 C. 5 D. 6`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-3-1-8-sol-0",
        title: `解答`,
        method: "creative",
        steps: [],
        explanation: `若设 $3x + 4y = t$ ，可用判别式法求解；减少未知数，可构造均值不等式或导数法求解；条件 $x + 3y = 5xy$ 可变为 $\\frac{3}{x} +\\frac{1}{y} = 5$ ，构造柯西不等式 $(3x + 4y)\\left(\\frac{3}{x} +\\frac{1}{y}\\right)\\geqslant (3+$ $2)^{2},3x + 4y\\geqslant 5$ ，当且仅当 $x = 2y$ ，即 $x = 1,y = \\frac{1}{2}$ 时， $3x + 4y$ 的最小值是5.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-3-2-9",
    topicId: "topic-sec-3-3",
    title: `设 (x-3)^2+(y-3)^2=6`,
    content: `设 $(x-3)^{2}+(y-3)^{2}=6$ ，求 $\\frac{y}{x}$ 的最大值.`,
    preview: `设 (x-3)^2+(y-3)^2=6 ，求 y/x 的最大值.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-3-2-9-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `设 $k=\\frac{y}{x}$ ，则 kx-y=0，应用柯西不等式，得：

$$
[ (x - 3) ^ {2} + (y - 3) ^ {2} ] [ k ^ {2} + (- 1) ^ {2} ] \\geqslant [ k (x - 3) - (y - 3) ] ^ {2} = (3 - 3 k) ^ {2}.
$$

因为 $(x-3)^{2}+(y-3)^{2}=6$ ，所以 $6(k^{2}+1)\\geqslant(3-3k)^{2}$ ，即 $k^{2}-6k+1\\leqslant0$ ，

解得 $3 - 2\\sqrt{2} \\leqslant k \\leqslant 3 + 2\\sqrt{2}$ . 故 $k_{\\max} = 3 + 2\\sqrt{2}$ , 即 $\\left(\\frac{y}{x}\\right)_{\\max} = 3 + 2\\sqrt{2}$ .

评注 本题解法很多,其中利用柯西不等式求解如同神来之笔,值得细细品味和充分借鉴.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-3-3-10",
    topicId: "topic-sec-3-3",
    title: `已知向量 a, b, c 是单位向量`,
    content: `已知向量 a, b, c 是单位向量，且满足 $a \\cdot b = 0$ ，求 $(a - c) \\cdot (b - c)$ 的最大值和最小值.`,
    preview: `已知向量 a, b, c 是单位向量，且满足 a · b = 0 ，求 (a - c) · (b - c) 的最大值和最小值.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-3-3-10-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `设 $\\boldsymbol{c}=(x,y),\\boldsymbol{a}=(1,0),\\boldsymbol{b}=(0,1)$ ，则 $x^{2}+y^{2}=1$ .

令 $t = (a - c)\\cdot (b - c) = (1 - x, - y)\\cdot (-x,1 - y)$

$$
= (1 - x) (- x) + (- y) (1 - y) = x ^ {2} + y ^ {2} - (x + y) = 1 - (x + y),
$$

由柯西不等式得 $(1^{2}+1^{2})(x^{2}+y^{2})\\geqslant(x+y)^{2}$ ,

所以 $(x+y)^{2}\\leqslant2$ ，即 $-\\sqrt{2}\\leqslant x+y\\leqslant\\sqrt{2}$ ，

当 $\\left\\{\\begin{aligned}\\frac{x}{1}&=\\frac{y}{1},\\\\ x^{2}+y^{2}&=1,\\end{aligned}\\right.$ 即 $x=y=\\frac{\\sqrt{2}}{2}$ 时，不等式右边取等号；

当 $x = y = -\\frac{\\sqrt{2}}{2}$ 时，不等式左边取等号.所以 $1 - \\sqrt{2}\\leqslant 1 - (x + y)\\leqslant 1 + \\sqrt{2}$

当 $x = y = -\\frac{\\sqrt{2}}{2}$ 时， $t_{\\max} = 1 + \\sqrt{2}$ ；当 $x = y = \\frac{\\sqrt{2}}{2}$ 时， $t_{\\min} = 1 - \\sqrt{2}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-3-4-11",
    topicId: "topic-sec-3-3",
    title: `如图 3-3-1 所示, 椭圆中心在坐标原点`,
    content: `如图 3-3-1

![](images/1f73f1d54dea5cc5da656f82cee5d27ce2e3ed9cc212a6c610d6d865ad384f13.jpg) 所示, 椭圆中心在坐标原点, A(2,0), B(0,1) 是它的两个顶点, 直线 y=kx (k>0) 与 AB 相交于点 D, 与椭圆相交于 E、F 两点. 求四边形 AEBF 面积的最大值.`,
    preview: `如图 3-3-1 所示, 椭圆中心在坐标原点, A(2,0), B(0,1) 是它的两个顶点, 直线 y=kx (k>0) 与 AB 相交于点 D, 与椭圆相交`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-3-4-11-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `由题意知,椭圆的方程为 $\\frac{x^{2}}{4}+y^{2}=1,\\left|BO\\right|=1,\\left|AO\\right|=2$ ,如图所示,由椭圆的对称性易知四边形AEBF的面积等于四边形AOBF的面积的两倍.

设点 $F(x,y)(x>0)$ ,

所以四边形 AEBF 的面积 $S=2(S_{\\triangle OBF}+S_{\\triangle OAF})=x+2y.$

因为 $1 = \\frac{x^2}{4} + y^2 = \\frac{x^2}{4} + \\frac{(2y)^2}{4} \\geqslant \\frac{(x + 2y)^2}{4 + 4} = \\frac{(x + 2y)^2}{8}$ ,

所以 $x+2y \\leqslant 2\\sqrt{2}$ ,

当且仅当 $\\frac{x}{4} = \\frac{2y}{4},\\frac{x^2}{4} +y^2 = 1$ 且 $x > 0$ ，即 $x = \\sqrt{2}$ 时，上式取等号.

![](images/1f73f1d54dea5cc5da656f82cee5d27ce2e3ed9cc212a6c610d6d865ad384f13.jpg)

图3-3-1

故四边形 AEBF 面积的最大值为 $2\\sqrt{2}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-3-5-12",
    topicId: "topic-sec-3-3",
    title: `已知直线 y=(1-x)θ 与双曲线`,
    content: `已知直线 $y=(1-x)\\tan\\theta$ 与双曲线 $-x^{2}+y^{2}\\cos^{2}\\theta=1$ 相切 $\\left(-\\frac{\\pi}{2}<\\theta<\\frac{\\pi}{2}\\right)$ ，求切线方程和切点坐标.`,
    preview: `已知直线 y=(1-x)θ 与双曲线 -x^2+y^2^2θ=1 相切 (-π/2<θ<π/2) ，求切线方程和切点坐标.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-3-5-12-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `由柯西不等式,得

$$
\\begin{array}{l} y ^ {2} = (1 - x) ^ {2} \\tan^ {2} \\theta = [ 1 \\times 1 + (- 1) \\times x ] ^ {2} \\tan^ {2} \\theta \\\\ \\leqslant 2 (1 + x ^ {2}) \\tan^ {2} \\theta = 2 y ^ {2} \\cos^ {2} \\theta \\tan^ {2} \\theta \\\\ = 2 y ^ {2} \\sin \\theta \\\\ \\end{array}
$$

$\\Rightarrow \\sin^2\\theta \\geqslant \\frac{1}{2}$ , 当且仅当 $\\frac{-1}{1} = \\frac{x}{1}$ , 即 $x = -1$ 时, $\\sin^2\\theta = \\frac{1}{2}$ .

此时，由 $-\\frac{\\pi}{2}<\\theta<\\frac{\\pi}{2}$ ，得 $\\theta=\\pm\\frac{\\pi}{4}$ .

所以切线方程为 y=x-1 或 y=1-x，切点坐标为 $(-1,\\pm2)$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-3-6-13",
    topicId: "topic-sec-3-3",
    title: `设 a>0, b>0`,
    content: `设 a>0, b>0，求 $(a+2b)\\left(\\frac{1}{a}+\\frac{2}{b}\\right)$ 的最小值.`,
    preview: `设 a>0, b>0，求 (a+2b)(1/a+2/b) 的最小值.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-3-6-13-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `原式 $= \\left[(\\sqrt{a})^2 + (\\sqrt{2}\\sqrt{b})^2\\right]\\left[\\left(\\frac{1}{\\sqrt{a}}\\right)^2 + \\left(\\frac{\\sqrt{2}}{\\sqrt{b}}\\right)^2\\right]$

$$
\\geqslant \\left[ (\\sqrt {a}) \\cdot \\frac {1}{\\sqrt {a}} + \\sqrt {2} \\cdot \\sqrt {b} \\cdot \\frac {\\sqrt {2}}{\\sqrt {b}} \\right] ^ {2} = (1 + 2) ^ {2} = 9,
$$

所以 $(a+2b)\\left(\\frac{1}{a}+\\frac{2}{b}\\right)$ 的最小值为9.

评注 利用重要不等式的结构拼凑成取到最值是解决最值问题的基本思路,本题除柯西不等式外,也可以通过均值不等式解决.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-3-7-14",
    topicId: "topic-sec-3-3",
    title: `已知 a, b, c R, a + 2b + 3c = 6`,
    content: `已知 $a, b, c \\in R, a + 2b + 3c = 6$ ，则 $a^{2} + 4b^{2} + 9c^{2}$ 的最小值是 \\_\\_\\_\\_.`,
    preview: `已知 a, b, c R, a + 2b + 3c = 6 ，则 a^2 + 4b^2 + 9c^2 的最小值是 \\_\\_\\_\\_.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-3-7-14-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `由 $(a^{2}+4b^{2}+9c^{2})(1^{2}+1^{2}+1^{2})\\geqslant(a+2b+3c)^{2}$ 得

$a^{2}+4b^{2}+9c^{2}\\geqslant12$ , 当且仅当 a=2, b=1, $c=\\frac{2}{3}$ 时等号成立.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-3-8-15",
    topicId: "topic-sec-3-3",
    title: `求函数 y=3√x-1+√8-2x 的最大值`,
    content: `求函数 $y=3\\sqrt{x-1}+\\sqrt{8-2x}$ 的最大值.`,
    preview: `求函数 y=3√x-1+√8-2x 的最大值.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-3-8-15-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `$y=3\\sqrt{x-1}+\\sqrt{8-2x}\\leqslant\\sqrt{3^{2}+(\\sqrt{2})^{2}}\\cdot\\sqrt{(\\sqrt{x-1})^{2}+(\\sqrt{4-x})^{2}}=\\sqrt{33}$

当且仅当 $\\frac{3}{\\sqrt{2}}=\\frac{\\sqrt{x-1}}{\\sqrt{4-x}}$ ，即 $x=\\frac{38}{11}$ 时取等号，

所以 y 的最大值为 $\\sqrt{33}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-3-9",
    topicId: "topic-sec-3-3",
    title: `设 a、b、c、x、y、z 是正数`,
    content: `设 a、b、c、x、y、z 是正数，且 $a^{2} + b^{2} + c^{2} = 10, x^{2} + y^{2} + z^{2} = 40, ax + by + cz = 20$ ，则 $\\frac{a + b + c}{x + y + z}$ 等于（）
A. $\\frac{1}{4}$

B. $\\frac{1}{3}$

C. $\\frac{1}{2}$

D. $\\frac{3}{4}$`,
    preview: `设 a、b、c、x、y、z 是正数，且 ，则 a + b + c/x + y + z 等于（） A. 1/4 B. 1/3 C. 1/2 D. 3/4`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-3-9-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `由 $(a^{2} + b^{2} + c^{2})(x^{2} + y^{2} + z^{2}) = (ax + by + cz)^{2}$ 及柯西不等式取等条件得

$\\frac{a}{x} = \\frac{b}{y} = \\frac{c}{z}$ . 令 $\\frac{a}{x} = t$ ，则 $t^2 (x^2 + y^2 + z^2) = 10$ .

解得 $t^{2}=\\frac{1}{4}$ ，即 $t=\\frac{1}{2}$ .

又由等比性质，有 $\\frac{a+b+c}{x+y+z}=\\frac{a}{x}=\\frac{b}{y}=\\frac{c}{z}=\\frac{1}{2}$ .

故选 C.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-3-10",
    topicId: "topic-sec-3-3",
    title: `已知向量 a, b 满足 |a| = 1 , |b| =`,
    content: `已知向量 a, b 满足 $|a| = 1$ , $|b| = 2$ , 则 $|a + b| + |a - b|$ 的最小值是 \\_\\_\\_\\_ , 最大值是 \\_\\_\\_\\_.`,
    preview: `已知向量 a, b 满足 |a| = 1 , |b| = 2 , 则 |a + b| + |a - b| 的最小值是 \\_\\_\\_\\_ , 最大值是 \\_\\_\\`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-3-10-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `$|a+b|+|a-b|\\geqslant2|b|=4.$

$|a+b|^{2}+|a-b|^{2}=2(|a|^{2}+|b|^{2})=10$ ，根据柯西不等式，得

$$
(| a + b | + | a - b |) ^ {2} \\leqslant (1 ^ {2} + 1 ^ {2}) (| a + b | ^ {2} + | a - b | ^ {2}),
$$

化简，得 $|a+b|+|a-b|\\leqslant2\\sqrt{5}$ ，故原题两空分别填写4, $2\\sqrt{5}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-3-11",
    topicId: "topic-sec-3-3",
    title: `设 n 为自然数`,
    content: `设 n 为自然数，求证： $\\frac{1}{n+1}+\\frac{1}{n+2}+\\cdots+\\frac{1}{3n+1}>1$ .`,
    preview: `设 n 为自然数，求证： 1/n+1+1/n+2+·s+1/3n+1>1 .`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-3-11-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `由柯西不等式，得

$$
\\begin{array}{l} n (4 n + 1) \\left(\\frac {1}{n + 1} + \\frac {1}{n + 2} + \\dots + \\frac {1}{3 n}\\right) \\\\ = [ (n + 1) + (n + 2) + \\dots + (3 n) ] \\left(\\frac {1}{n + 1} + \\frac {1}{n + 2} + \\dots + \\frac {1}{3 n}\\right) > 4 n ^ {2}, \\\\ \\end{array}
$$

所以 $\\frac{1}{n+1}+\\frac{1}{n+2}+\\cdots+\\frac{1}{3n}>\\frac{4n}{4n+1}$ ,

所以 $\\frac{1}{n+1}+\\frac{1}{n+2}+\\cdots+\\frac{1}{3n}+\\frac{1}{3n+1}>\\frac{4n}{4n+1}+\\frac{1}{3n+1}=\\frac{12n^{2}+8n+1}{12n^{2}+7n+1}>1.$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-3-12",
    topicId: "topic-sec-3-3",
    title: `若 n 是不小于 2 的正整数,试证:`,
    content: `若 n 是不小于 2 的正整数,试证:
$$
\\frac {4}{7} <   1 - \\frac {1}{2} + \\frac {1}{3} - \\frac {1}{4} + \\dots + \\frac {1}{2 n - 1} - \\frac {1}{2 n} <   \\frac {\\sqrt {2}}{2}.
$$`,
    preview: `若 n 是不小于 2 的正整数,试证:`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-3-12-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `$1 - \\frac{1}{2} +\\frac{1}{3} -\\frac{1}{4} +\\dots +\\frac{1}{2n - 1} -\\frac{1}{2n} = \\left(1 + \\frac{1}{2} +\\dots +\\frac{1}{2n}\\right) - 2\\left(\\frac{1}{2} +\\frac{1}{4} +\\dots +\\frac{1}{2n}\\right)$

$$
= \\frac {1}{n + 1} + \\frac {1}{n + 2} + \\dots + \\frac {1}{2 n},
$$

所以只要证明： $\\frac{4}{7}<\\frac{1}{n+1}+\\frac{1}{n+2}+\\cdots+\\frac{1}{2n}<\\frac{\\sqrt{2}}{2}.$

由柯西不等式，有 $\\left(\\frac{1}{n+1}+\\frac{1}{n+2}+\\cdots+\\frac{1}{2n}\\right)\\left[(n+1)+(n+2)+\\cdots+2n\\right]>n^{2}$

所以 $\\frac{1}{n + 1} +\\frac{1}{n + 2} +\\dots +\\frac{1}{2n} >\\frac{n^2}{(n + 1) + (n + 2) + \\dots + 2n}$

$$
= \\frac {2 n}{3 n + 1} = \\frac {2}{3 + \\frac {1}{n}} \\geqslant \\frac {4}{7}.
$$

又由柯西不等式得

$$
\\begin{array}{l} \\frac {1}{n + 1} + \\frac {1}{n + 2} + \\dots + \\frac {1}{2 n} \\\\ <   \\sqrt {(1 ^ {2} + 1 ^ {2} + \\cdots + 1 ^ {2}) \\left[ \\frac {1}{(n + 1) ^ {2}} + \\frac {1}{(n + 2) ^ {2}} + \\cdots + \\frac {1}{(2 n) ^ {2}} \\right]} \\\\ <   \\sqrt {n \\left[ \\frac {1}{n (n + 1)} + \\frac {1}{(n + 1) (n + 2)} + \\cdots + \\frac {1}{(2 n - 1) \\cdot 2 n} \\right]} \\\\ = \\sqrt {n \\left(\\frac {1}{n} - \\frac {1}{2 n}\\right)} = \\frac {\\sqrt {2}}{2}. \\\\ \\end{array}
$$

评注 此不等式左式的证明可由

$1 - \\frac{1}{2} +\\frac{1}{3} -\\frac{1}{4} +\\dots +\\frac{1}{2n - 1} -\\frac{1}{2n}\\geqslant 1 - \\frac{1}{2} +\\frac{1}{3} -\\frac{1}{4} = \\frac{7}{12} >\\frac{4}{7}$ 证得.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-3-13",
    topicId: "topic-sec-3-3",
    title: `已知数列 a_n 的首项 a_1=3/5,a_n+1=3a_n2a_n+1,n=1,2,…`,
    content: `已知数列 $\\{a_{n}\\}$ 的首项 $a_{1}=\\frac{3}{5},a_{n+1}=\\frac{3a_{n}}{2a_{n}+1},n=1,2,\\cdots.$
(1) 求 $\\{a_{n}\\}$ 的通项公式；
(2)证明:对任意的 $x>0, a_{n}\\geqslant\\frac{1}{1+x}-\\frac{1}{(1+x)^{2}}\\left(\\frac{2}{3^{n}}-x\\right), n=1,2,\\cdots;$
(3)证明: $a_{1}+a_{2}+\\cdots+a_{n}>\\frac{n^{2}}{n+1}.$`,
    preview: `已知数列 的首项 (1) 求 的通项公式； (2)证明:对任意的 (3)证明: a_1+a_2+·s+a_n>n^2n+1.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-3-13-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1) 因为 $a_{n+1} = \\frac{3a_n}{2a_n + 1}$ , 所以 $\\frac{1}{a_{n+1}} = \\frac{2}{3} + \\frac{1}{3a_n}$ , 所以 $\\frac{1}{a_{n+1}} - 1 = \\frac{1}{3}\\left(\\frac{1}{a_n} - 1\\right)$ .

又 $\\frac{1}{a_{1}}-1=\\frac{2}{3}$ ，所以 $\\left(\\frac{1}{a_{n}}-1\\right)$ 是以 $\\frac{2}{3}$ 为首项， $\\frac{1}{3}$ 为公比的等比数列.

所以 $\\frac{1}{a_n} - 1 = \\frac{2}{3} \\times \\frac{1}{3^{n-1}} = \\frac{2}{3^n}$ , 所以 $a_n = \\frac{3^n}{3^n + 2}$ .

(2)`,
      },
      {
        id: "prob-sec-3-3-13-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `由(1)知 $a_{n} = \\frac{3^{n}}{3^{n} + 2} >0$

$$
\\frac {1}{1 + x} - \\frac {1}{(1 + x) ^ {2}} \\Big (\\frac {2}{3 ^ {n}} - x \\Big) = \\frac {1}{1 + x} - \\frac {1}{(1 + x) ^ {2}} \\Big (\\frac {2}{3 ^ {n}} + 1 - 1 - x\\left. \\right)
$$

$$
= \\frac {1}{1 + x} - \\frac {1}{(1 + x) ^ {2}} \\left[ \\frac {1}{a _ {n}} - (1 + x) \\right]
$$

$$
= - \\frac {1}{a _ {n}} \\cdot \\frac {1}{(1 + x) ^ {2}} + \\frac {2}{1 + x}
$$

$$
= - \\frac {1}{a _ {n}} \\left(\\frac {1}{1 + x} - a _ {n}\\right) ^ {2} + a _ {n} \\leqslant a _ {n},
$$

所以原不等式成立.`,
      },
      {
        id: "prob-sec-3-3-13-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `设 $f(x)=\\frac{1}{1+x}-\\frac{1}{(1+x)^{2}}\\left(\\frac{2}{3^{n}}-x\\right)$ ,

则 $f^{\\prime}(x) = -\\frac{1}{(1 + x)^{2}} -\\frac{-(1 + x)^{2} - \\left(\\frac{2}{3^{n}} - x\\right)\\times 2(1 + x)}{(1 + x)^{4}} = \\frac{2\\left(\\frac{2}{3^{n}} - x\\right)}{(1 + x)^{3}}.$

因为 $x > 0$ ，所以当 $x < \\frac{2}{3^n}$ 时， $f'(x) > 0$ ；当 $x > \\frac{2}{3^n}$ 时， $f'(x) < 0$ ；

所以当 $x=\\frac{2}{3^{n}}$ 时， $f(x)$ 取得最大值 $f\\left(\\frac{2}{3^{n}}\\right)=\\frac{1}{1+\\frac{2}{3^{n}}} = a_{n}$ .

所以原不等式成立.

(3)`,
      },
      {
        id: "prob-sec-3-3-13-sol-3",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `由(2)知,对任意的x>0,有

$$
\\begin{array}{l} a _ {1} + a _ {2} + \\dots + a _ {n} \\\\ \\geqslant \\frac {1}{1 + x} - \\frac {1}{(1 + x) ^ {2}} \\left(\\frac {2}{3} - x\\right) + \\frac {1}{1 + x} - \\frac {1}{(1 + x) ^ {2}} \\left(\\frac {2}{3 ^ {2}} - x\\right) + \\dots + \\frac {1}{1 + x} - \\frac {1}{(1 + x) ^ {2}} \\left(\\frac {2}{3 ^ {n}} - x\\right) \\\\ = \\frac {n}{1 + x} - \\frac {1}{(1 + x) ^ {2}} \\left(\\frac {2}{3} + \\frac {2}{3 ^ {2}} + \\dots + \\frac {2}{3 ^ {n}} - n x\\right). \\\\ \\end{array}
$$

取 $x=\\frac{1}{n}\\left(\\frac{2}{3}+\\frac{2}{3^{2}}+\\cdots+\\frac{2}{3^{n}}\\right)=\\frac{\\frac{2}{3}\\left(1-\\frac{1}{3^{n}}\\right)}{n\\left(1-\\frac{1}{3}\\right)}=\\frac{1}{n}\\left(1-\\frac{1}{3^{n}}\\right)$ ,

则 $a_1 + a_2 + \\dots + a_n \\geqslant \\frac{n}{1 + \\frac{1}{n} (1 - \\frac{1}{3^n})} = \\frac{n^2}{n + 1 - \\frac{1}{3^n}} > \\frac{n^2}{n + 1}$ .

所以原不等式成立.`,
      },
      {
        id: "prob-sec-3-3-13-sol-4",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `由柯西不等式，得 $\\left(\\sum_{i=1}^{n} a_i\\right)\\left(\\sum_{i=1}^{n} \\frac{1}{a_i}\\right) \\geqslant n^2$

而 $\\sum_{i=1}^{n} \\frac{1}{a_i} = \\sum_{i=1}^{n} \\frac{3^n + 2}{3^n} = n + 2 \\sum_{i=1}^{n} \\frac{1}{3^n} = n + 1 - \\frac{1}{3^n} < n + 1$ .

所以 $\\sum_{i=1}^{n} a_i \\geqslant \\frac{n^2}{\\sum_{i=1}^{n} \\frac{1}{a_i}} = \\frac{n^2}{n+1 - \\frac{1}{3^n}} > \\frac{n^2}{n+1}$ .

评注 本题(3)的解法一是高考命题者提供的, 解法二是笔者给出的.对比两种解法我们可以领略到柯西不等式在解题中的魅力.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-4-1",
    topicId: "topic-sec-3-4",
    title: `实数 x、y 满足 4x^2-5xy+4y^2=5`,
    content: `实数 x、y 满足 $4x^{2}-5xy+4y^{2}=5$ ，设 $S=x^{2}+y^{2}$ ，求 $\\frac{1}{S_{max}}+\\frac{1}{S_{min}}$ 的值.`,
    preview: `实数 x、y 满足 4x^2-5xy+4y^2=5 ，设 S=x^2+y^2 ，求 1/S_max+1/S_min 的值.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-4-1-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `设 $\\left\\{\\begin{aligned}x&=\\sqrt{S}\\cos\\alpha,\\\\ y&=\\sqrt{S}\\sin\\alpha,\\end{aligned}\\right.$ 代入条件得 $4S-5S\\sin\\alpha\\cos\\alpha=5$ ，解得 $S=\\frac{10}{8-5\\sin2\\alpha}$ .

因为 $-1\\leqslant\\sin2\\alpha\\leqslant1$ ，所以 $3\\leqslant8-5\\sin2\\alpha\\leqslant13$ ，所以 $\\frac{10}{13}\\leqslant\\frac{10}{8-5\\sin2\\alpha}\\leqslant\\frac{10}{3}$

所以 $\\frac{1}{S_{max}}+\\frac{1}{S_{min}}=\\frac{3}{10}+\\frac{13}{10}=\\frac{16}{10}=\\frac{8}{5}.$`,
      },
      {
        id: "prob-sec-3-4-1-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `由 $S = x^{2} + y^{2}$ , 设 $x^{2} = \\frac{S}{2} + t, y^{2} = \\frac{S}{2} - t, t \\in \\left[-\\frac{S}{2}, \\frac{S}{2}\\right]$ ,

则 $xy=\\pm\\sqrt{\\frac{S^{2}}{4}-t^{2}}$ ，代入已知式得 $4S\\pm5\\sqrt{\\frac{S^{2}}{4}-t^{2}}=5$ ，移项平方整理得

$$
1 0 0 t ^ {2} + 3 9 S ^ {2} - 1 6 0 S + 1 0 0 = 0.
$$

所以 $39S^{2} - 160S + 100 \\leqslant 0$ ，解得 $\\frac{10}{13} \\leqslant S \\leqslant \\frac{10}{3}$ ，所以 $\\frac{1}{S_{\\max}} + \\frac{1}{S_{\\min}} = \\frac{3}{10} + \\frac{13}{10} = \\frac{16}{10} = \\frac{8}{5}$ .`,
      },
      {
        id: "prob-sec-3-4-1-sol-2",
        title: `解法三`,
        method: "standard",
        steps: [],
        explanation: `设 $x = a + b, y = a - b$ ，代入条件整理得 $3a^2 + 13b^2 = 5$ ，则 $a^2 \\in \\left[0, \\frac{5}{3}\\right]$ ，所以

$$
S = x ^ {2} + y ^ {2} = (a + b) ^ {2} + (a - b) ^ {2} = 2 (a ^ {2} + b ^ {2}) = \\frac {1 0}{1 3} + \\frac {2 0}{1 3} a ^ {2} \\in \\left[ \\frac {1 0}{1 3}, \\frac {1 0}{3} \\right], \\text {所以} \\frac {1}{S _ {\\max}} + \\frac {1}{S _ {\\min}} = \\frac {8}{5}.
$$`,
      },
      {
        id: "prob-sec-3-4-1-sol-3",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `由 $S = x^{2} + y^{2}$ 联想到 $\\cos^2\\alpha +\\sin^2\\alpha = 1$ ，进行“三角换元”. $S$ 的最大值和最小值还可由 $\\sin 2\\alpha = \\frac{8S - 10}{5S}$ 的有界性求得，即解不等式 $\\left|\\frac{8S - 10}{5S}\\right| \\leqslant 1.$

评注 解法二为“均值换元”，将问题转化为二次函数(方程、不等式)问题. 解法三为“和差换元”，换元后能简化代数式.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-4-2",
    topicId: "topic-sec-3-4",
    title: `△ ABC 的三个内角 A`,
    content: `$\\triangle ABC$ 的三个内角 A、B、C 满足: $A+C=2B,\\frac{1}{\\cos A}+\\frac{1}{\\cos C}=-\\frac{\\sqrt{2}}{\\cos B}$ ,求 $\\cos\\frac{A-C}{2}$ 的值.`,
    preview: `△ ABC 的三个内角 A、B、C 满足: A+C=2B,1/ A+1/ C=-√2 B ,求 -C/2 的值.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-4-2-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `由 $A + C = 2B$ ，得 $\\left\\{ \\begin{array}{l} A + C = 120^{\\circ}, \\\\ B = 60^{\\circ}, \\end{array} \\right.$ 设 $\\left\\{ \\begin{array}{l} A = 60^{\\circ} + \\alpha, \\\\ C = 60^{\\circ} - \\alpha, \\end{array} \\right.$ 代入已知等式得

$$
\\begin{array}{l} \\frac {1}{\\cos A} + \\frac {1}{\\cos C} = \\frac {1}{\\cos (6 0 ^ {\\circ} + \\alpha)} + \\frac {1}{\\cos (6 0 ^ {\\circ} - \\alpha)} \\\\ = \\frac {1}{\\frac {1}{2} \\cos \\alpha - \\frac {\\sqrt {3}}{2} \\sin \\alpha} + \\frac {1}{\\frac {1}{2} \\cos \\alpha + \\frac {\\sqrt {3}}{2} \\sin \\alpha} \\\\ = \\frac {\\cos \\alpha}{\\frac {1}{4} \\cos^ {2} \\alpha - \\frac {3}{4} \\sin^ {2} \\alpha} = \\frac {\\cos \\alpha}{\\cos^ {2} \\alpha - \\frac {3}{4}} = - 2 \\sqrt {2}, \\\\ \\end{array}
$$

解得 $\\cos\\alpha=\\frac{\\sqrt{2}}{2}$ ，即 $\\cos\\frac{A-C}{2}=\\cos\\alpha=\\frac{\\sqrt{2}}{2}$ .`,
      },
      {
        id: "prob-sec-3-4-2-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `由 $A + C = 2B$ ，得 $A + C = 120^{\\circ}, B = 60^{\\circ}$

所以 $\\frac{1}{\\cos A}+\\frac{1}{\\cos C}=-\\frac{\\sqrt{2}}{\\cos B}=-2\\sqrt{2}$

设 $\\frac{1}{\\cos A} = -\\sqrt{2} + m, \\frac{1}{\\cos C} = -\\sqrt{2} - m,$

所以 $\\cos A=\\frac{1}{-\\sqrt{2}+m},\\cos C=\\frac{1}{-\\sqrt{2}-m}$ ,

两式分别相加、相减得

$$
\\cos A + \\cos C = 2 \\cos \\frac {A + C}{2} \\cos \\frac {A - C}{2} = \\cos \\frac {A - C}{2} = \\frac {2 \\sqrt {2}}{m ^ {2} - 2},
$$

$$
\\cos A - \\cos C = - 2 \\sin \\frac {A + C}{2} \\sin \\frac {A - C}{2} = - \\sqrt {3} \\sin \\frac {A - C}{2} = \\frac {2 m}{m ^ {2} - 2},
$$

即 $\\sin\\frac{A-C}{2}=-\\frac{2m}{\\sqrt{3}(m^{2}-2)},\\cos\\frac{A-C}{2}=-\\frac{2\\sqrt{2}}{m^{2}-2},$

代入 $\\sin^{2}\\frac{A-C}{2}+\\cos^{2}\\frac{A-C}{2}=1,$

整理得 $3m^{4}-16m^{2}-12=0$ ，解出 $m^{2}=6$ ，

所以 $\\cos\\frac{A-C}{2}=\\frac{2\\sqrt{2}}{m^{2}-2}=\\frac{\\sqrt{2}}{2}.$

评注 两解法均为“均值换元”，主要目的就是减少变量.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-4-3",
    topicId: "topic-sec-3-4",
    title: `实数 a、b、c 满足 a + b + c = 1`,
    content: `实数 a、b、c 满足 $a + b + c = 1$ ，求 $a^{2} + b^{2} + c^{2}$ 的最小值.`,
    preview: `实数 a、b、c 满足 a + b + c = 1 ，求 a^2 + b^2 + c^2 的最小值.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-4-3-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `由 $a + b + c = 1$ 想到“均值换元法”，引入新的参数，即设

$a = \\frac{1}{3} + t_1, b = \\frac{1}{3} + t_2, c = \\frac{1}{3} + t_3, t_1 + t_2 + t_3 = 0$ ，代入 $a^2 + b^2 + c^2$ 可求.

$$
\\begin{array}{l} a ^ {2} + b ^ {2} + c ^ {2} = \\left(\\frac {1}{3} + t _ {1}\\right) ^ {2} + \\left(\\frac {1}{3} + t _ {2}\\right) ^ {2} + \\left(\\frac {1}{3} + t _ {3}\\right) ^ {2} = \\frac {1}{3} + \\frac {2}{3} (t _ {1} + t _ {2} + t _ {3}) + t _ {1} ^ {2} + t _ {2} ^ {2} + t _ {3} ^ {2} \\\\ = \\frac {1}{3} + t _ {1} ^ {2} + t _ {2} ^ {2} + t _ {3} ^ {2} \\geqslant \\frac {1}{3}, \\text {即} a ^ {2} + b ^ {2} + c ^ {2} \\text {的最小值为} \\frac {1}{3}. \\\\ \\end{array}
$$

评注 由“均值换元法”引入了三个参数,将代数式进行了有效的简化.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-4-4",
    topicId: "topic-sec-3-4",
    title: `椭圆 x^216+y^24=1 上有两点P、Q`,
    content: `椭圆 $\\frac{x^{2}}{16}+\\frac{y^{2}}{4}=1$ 上有两点P、Q，O为原点。连接OP、OQ， $k_{OP}\\cdot k_{OQ}=-\\frac{1}{4}$ ，
(1) 求证: $\\left|OP\\right|^{2}+\\left|OQ\\right|^{2}$ 为一定值;

(2)求线段 PQ 中点 M 的轨迹方程.`,
    preview: `椭圆 x^216+y^24=1 上有两点P、Q，O为原点。连接OP、OQ， k_OP· k_OQ=-1/4 ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-4-4-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `由“换元法”引入新的参数, 即设 $\\left\\{ \\begin{array}{l} x = 4 \\cos \\theta, \\\\ y = 2 \\sin \\theta, \\end{array} \\right.$ 参数 $\\theta_{1}, \\theta_{2}$ 对应 $P, Q$ 两点, 先计算 $k_{OP} \\cdot k_{OQ}$ 得出一个结论, 再计算 $|OP|^2 + |OQ|^2$ , 并运用“参数法”求中点 $M$ 的坐标, 消参而得.

(1)由 $\\frac{x^{2}}{16}+\\frac{y^{2}}{4}=1$ ，设 $\\left\\{\\begin{aligned}x&=4\\cos\\theta,\\\\ y&=2\\sin\\theta,\\end{aligned}\\right.P(4\\cos\\theta_{1},2\\sin\\theta_{1}),Q(4\\cos\\theta_{2},2\\sin\\theta_{2})$

则 $k_{OP} \\cdot k_{OQ} = \\frac{2\\sin\\theta_1}{4\\cos\\theta_1} \\cdot \\frac{2\\sin\\theta_2}{4\\cos\\theta_2} = -\\frac{1}{4}$ ,

整理得: $\\cos\\theta_{1}\\cos\\theta_{2}+\\sin\\theta_{1}\\sin\\theta_{2}=0$ ,

即 $\\cos(\\theta_{1}-\\theta_{2})=0.$

$$
\\begin{array}{l} = 2 0 + 6 \\left(\\cos 2 \\theta_ {1} + \\cos 2 \\theta_ {2}\\right) = 2 0 + 1 2 \\cos \\left(\\theta_ {1} + \\theta_ {2}\\right) \\cos \\left(\\theta_ {1} - \\theta_ {2}\\right) \\\\ = 2 0, \\\\ \\end{array}
$$

所以 $|OP|^2 + |OQ|^2 = 16\\cos^2\\theta_1 + 4\\sin^2\\theta_1 + 16\\cos^2\\theta_2 + 4\\sin^2\\theta_2 = 8 + 12(\\cos^2\\theta_1 + \\cos^2\\theta_2)$

即 $\\left|OP\\right|^{2}+\\left|OQ\\right|^{2}$ 等于定值 20.

(2)由中点坐标公式得到线段 PQ 的中点 M 的坐标为 $\\left\\{\\begin{aligned}x_{M}&=2(\\cos\\theta_{1}+\\cos\\theta_{2}),\\\\ y_{M}&=\\sin\\theta_{1}+\\sin\\theta_{2},\\end{aligned}\\right.$

所以有 $\\left(\\frac{x}{2}\\right)^{2}+y^{2}=2+2\\left(\\cos\\theta_{1}\\cos\\theta_{2}+\\sin\\theta_{1}\\sin\\theta_{2}\\right)=2$ ，即所求线段PQ的中点M的轨迹方程为 $\\frac{x^{2}}{8}+\\frac{y^{2}}{2}=1$ .

评注 由椭圆方程,联想到 $a^2 + b^2 = 1$ , 于是可进行“三角换元”(得到的即是椭圆的参数方程), 通过换元引入新的参数, 转化成为三角问题进行研究. 本题还要求能够熟练使用三角公式和“平方法”, 在由中点坐标公式求出 $M$ 点的坐标后, 将所得方程组稍作变形, 再平方相加, 即 $(\\cos \\theta_1 + \\cos \\theta_2)^2 + (\\sin \\theta_1 + \\sin \\theta_2)^2$ , 这是求点 $M$ 轨迹方程“消参法”的关键一步. 一般地, 求动点的轨迹方程运用“参数法”时, 我们可以将点的 $x$ 、 $y$ 坐标分别表示成为一个或几个参数的函数, 再运用“消去法”消去所含的参数, 即得到了所求的轨迹方程.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-4-5",
    topicId: "topic-sec-3-4",
    title: `实数 x、y 满足 (x-1)^29+(y+1)^216=1`,
    content: `实数 x、y 满足 $\\frac{(x-1)^{2}}{9}+\\frac{(y+1)^{2}}{16}=1$ ，若 $x+y-k>0$ 恒成立，求 k 的取值范围.`,
    preview: `实数 x、y 满足 (x-1)^29+(y+1)^216=1 ，若 x+y-k>0 恒成立，求 k 的取值范围.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-4-5-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `由 $\\frac{(x - 1)^2}{9} +\\frac{(y + 1)^2}{16} = 1$ ，设 $\\left\\{ \\begin{array}{l}\\frac{x - 1}{3} = \\cos \\theta ,\\\\ \\frac{y + 1}{4} = \\sin \\theta , \\end{array} \\right.$ 则 $\\left\\{ \\begin{array}{l}x = 1 + 3\\cos \\theta ,\\\\ y = -1 + 4\\sin \\theta , \\end{array} \\right.$

代入不等式 $x + y - k > 0$ 得 $3\\cos\\theta + 4\\sin\\theta - k > 0$ ,

即 $k<3\\cos\\theta+4\\sin\\theta=5\\sin(\\theta+\\varphi)$ ，所以 k<-5。

评注 本题进行三角换元,将代数问题(或者是解析几何问题)转化为含参三角不等式恒成立的问题,再运用“分离参数法”转化为三角函数的值域问题,从而求出参数范围.一般地,在遇到与圆、椭圆、双曲线的方程相似的代数式时,或者在解决圆、椭圆、双曲线等有关问题时,经常使用“三角换元”.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-4-6",
    topicId: "topic-sec-3-4",
    title: `三角函数表达式的最大值与最小值`,
    content: `设 a>0，求 $f(x)=2a(\\sin x+\\cos x)-\\sin x\\cdot\\cos x-2a^{2}$ 的最大值和最小值.`,
    preview: `设 a>0，求 f(x)=2a( x+ x)- x· x-2a^2 的最大值和最小值.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-4-6-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `设 $\\sin x + \\cos x = t$ ，则 $t \\in [-\\sqrt{2}, \\sqrt{2}]$ ，由 $(\\sin x + \\cos x)^{2} = 1 + 2\\sin x \\cdot \\cos x$ 得 $\\sin x \\cdot \\cos x = \\frac{t^{2} - 1}{2}$ ，所以 $f(x) = g(t) = -\\frac{1}{2}(t - 2a)^{2} + \\frac{1}{2} (a > 0)$ ， $t \\in [-\\sqrt{2}, \\sqrt{2}]$ .

当 $t = -\\sqrt{2}$ 时， $g(t)$ 取最小值 $-2a^{2} - 2\\sqrt{2} a - \\frac{1}{2}$ ;

当 $2a \\geqslant \\sqrt{2}$ 时， $t = \\sqrt{2}, g(t)$ 取最大值 $-2a^2 + 2\\sqrt{2}a - \\frac{1}{2}$ ；

当 $0 < 2a \\leqslant \\sqrt{2}$ 时， $t = 2a, g(t)$ 取最大值 $\\frac{1}{2}$ .

所以 $f(x)$ 的最小值为 $-2a^{2}-2\\sqrt{2}a-\\frac{1}{2}$ ，最大值为 $\\left\\{\\begin{aligned}\\frac{1}{2}\\left(0<a<\\frac{\\sqrt{2}}{2}\\right),\\\\ -2a^{2}+2\\sqrt{2}a-\\frac{1}{2}\\left(a\\geqslant\\frac{\\sqrt{2}}{2}\\right).\\end{aligned}\\right.$

评注 此题属于局部换元法, 设 $\\sin x + \\cos x = t$ 后, 抓住 $\\sin x + \\cos x$ 与 $\\sin x \\cdot \\cos x$ 的内在联系, 将三角函数的值域问题转化为二次函数在闭区间上的值域问题. 换元过程中一定要注意参数的范围 ( $t \\in [-\\sqrt{2}, \\sqrt{2}]$ ) 与 $\\sin x + \\cos x$ 对应, 否则将会出错. 一般地, 在遇到题目已知和未知中含有 $\\sin x$ 与 $\\cos x$ 的和、差、积等而求三角式的最大值和最小值的题型时, 即函数为 $f(\\sin x \\pm \\cos x, \\sin x \\cos x)$ , 经常用到 $\\sin x \\pm \\cos x = t$ 这样设元的换元法, 转化为在闭区间上的二次函数或一次函数的研究.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-4-7",
    topicId: "topic-sec-3-4",
    title: `已知 sinθ/x=cosθ/y`,
    content: `已知 $\\frac{\\sin\\theta}{x}=\\frac{\\cos\\theta}{y}$ ，且 $\\frac{\\cos^{2}\\theta}{x^{2}}+\\frac{\\sin^{2}\\theta}{y^{2}}=\\frac{10}{3(x^{2}+y^{2})}$ ，求 $\\frac{x}{y}$ 的值.`,
    preview: `已知 θ/x=θ/y ，且 ，求 x/y 的值.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-4-7-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `设 $\\frac{\\sin\\theta}{x}=\\frac{\\cos\\theta}{y}=k$ ，则 $\\left\\{\\begin{aligned}\\sin\\theta&=kx,\\\\ \\cos\\theta&=ky,\\end{aligned}\\right.$ 且 $\\sin^{2}\\theta+\\cos^{2}\\theta=k^{2}(x^{2}+y^{2})=1$ ，则由条件，

得 $\\frac{k^2y^2}{x^2} +\\frac{k^2x^2}{y^2} = \\frac{10}{3(x^2 + y^2)} = \\frac{10k^2}{3}$ 即 $\\frac{y^2}{x^2} +\\frac{x^2}{y^2} = \\frac{10}{3},$

设 $\\frac{x^2}{y^2} = t$ ，则 $t + \\frac{1}{t} = \\frac{10}{3}$ 解得 $t = 3$ 或 $\\frac{1}{3}$ ，所以 $\\frac{x}{y} = \\pm \\sqrt{3}$ 或 $\\pm \\frac{\\sqrt{3}}{3}$

评注 将 $\\frac{\\sin\\theta}{x}=\\frac{\\cos\\theta}{y}$ 进行等量代换,减少了变量的个数.在解高次方程时,常使用换元法使方程次数降低.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-4-8",
    topicId: "topic-sec-3-4",
    title: `如图 3-4-1 所示,在扇形 OAB 中, ∠`,
    content: `如图 3-4-1

![](images/b712b1c3005b529ab626199d911102dedd325c1533edebb577cd9099444dec09.jpg) 所示,在扇形 OAB 中, $\\angle AOB=60^{\\circ},C$ 为弧 AB 上的一个动点, 若 $\\overrightarrow{OC}=x\\overrightarrow{OA}+y\\overrightarrow{OB}$ , 则 $x+3y$ 的取值范围是 \\_\\_\\_\\_.`,
    preview: `如图 3-4-1 所示,在扇形 OAB 中, ∠ AOB=60°,C 为弧 AB 上的一个动点, 若 →OC=x→OA+y→OB , 则 x+3y 的取值范围是`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-4-8-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `如图 3-4-2 所示建立直角坐标系，

不妨设扇形半径为1，

则 $A(1,0)$ , $B\\left(\\frac{1}{2},\\frac{\\sqrt{3}}{2}\\right)$ .

设 $\\angle AOC=\\theta$ ，则 $C(\\cos\\theta,\\sin\\theta)\\left(0\\leqslant\\theta\\leqslant\\frac{\\pi}{3}\\right)$ .

由 $\\overrightarrow{OC} = x\\overrightarrow{OA} +y\\overrightarrow{OB}$ 得 $\\cos \\theta = x + \\frac{1}{2} y,\\sin \\theta = \\frac{\\sqrt{3}}{2} y,$

则 $x+3y=\\cos\\theta+\\frac{5}{3}\\sqrt{3}\\sin\\theta=\\sqrt{\\frac{28}{3}}\\sin(\\theta+\\varphi)$ ，易知 $0<\\varphi<\\frac{\\pi}{6}$

故 $y = f(\\theta) = \\sqrt{\\frac{28}{3}}\\sin (\\theta +\\varphi)$ 在 $\\left[0,\\frac{\\pi}{3}\\right]$ 上单调递增，

故 $x + 3y\\in [1,3]$

![](images/205f5cd17132577092cf6f02c61d1ad29e41bd08f17c92aa7926bc381ce45280.jpg)

图3-4-1
![](images/b712b1c3005b529ab626199d911102dedd325c1533edebb577cd9099444dec09.jpg)

图3-4-2

评注 此题还可将问题转化为“已知 $x^{2} + xy + y^{2} = 1, 0 \\leqslant x \\leqslant 1, 0 \\leqslant y \\leqslant 1$ ，求 $x + 3y$ 的取值范围”。可由柯西不等式、均值不等式、判别式法等多种解法求得。`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-4-9",
    topicId: "topic-sec-3-4",
    title: `已知函数 f(x) = a x + 1/2 x^2 (a`,
    content: `已知函数 $f(x) = a \\ln x + \\frac{1}{2} x^2 (a > 0)$ ，若对任意两个不等的正实数 $x_1, x_2$ 都有 $\\frac{f(x_2) - f(x_1)}{x_2 - x_1} > 2$ 恒成立，求 $a$ 的取值范围.`,
    preview: `已知函数 f(x) = a x + 1/2 x^2 (a > 0) ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-4-9-sol-0",
        title: `解答`,
        method: "creative",
        steps: [],
        explanation: `不妨设 $x_{1} < x_{2}$ , 则由 $\\frac{f(x_2) - f(x_1)}{x_2 - x_1} > 2$ 得 $f(x_2) - f(x_1) > 2x_2 - 2x_1$ ,

即 $f(x_{2})-2x_{2}>f(x_{1})-2x_{1}$ ，则 $g(x)=f(x)-2x$ 在 $(0,+\\infty)$ 上为增函数，

$g(x) = a\\ln x + \\frac{1}{2} x^2 - 2x$ ，则 $g'(x) = \\frac{a}{x} + x - 2 \\geqslant 0$ 在 $(0, +\\infty)$ 上恒成立，

故 $a \\geqslant -x^{2} + 2x$ . 由 $-x^{2} + 2x \\leqslant 1$ , 得 $a \\geqslant 1$ .

评注 通过构造函数将问题转化为单调性问题,通过导数转化为不等式问题,再通过参变分离将问题转化为函数值域问题.此题在得到 $\\frac{a}{x}+x-2\\geqslant0$ 在 $(0,+\\infty)$ 上恒成立后也可以利用二次函数的图像分类来解决.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-4-10",
    topicId: "topic-sec-3-4",
    title: `若 f(x)=ax^3-3x+1 对于 x[-1,1]`,
    content: `若 $f(x)=ax^{3}-3x+1$ 对于 $x\\in[-1,1]$ 总有 $f(x)\\geqslant0$ 成立，求 a 的值.`,
    preview: `若 f(x)=ax^3-3x+1 对于 x[-1,1] 总有 f(x)≥0 成立，求 a 的值.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-4-10-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `若 x=0，则不论 a 取何值， $f(x)\\geqslant0$ 都成立.

当 $x > 0$ ，即 $x\\in (0,1]$ 时， $f(x)\\geqslant 0$ 可化为， $a\\geqslant \\frac{3}{x^2} -\\frac{1}{x^3}.$

设 $g(x) = \\frac{3}{x^2} -\\frac{1}{x^3}$ ，则 $g^{\\prime}(x) = \\frac{3(1 - 2x)}{x^{4}}$

所以 $g(x)$ 在区间 $\\left(0, \\frac{1}{2}\\right]$ 上单调递增，在区间 $\\left[\\frac{1}{2}, 1\\right]$ 上单调递减，

因此 $g(x)_{\\max} = g\\left(\\frac{1}{2}\\right) = 4$ ，从而 $a\\geqslant 4$

当 $x < 0$ ，即 $[-1,0)$ 时， $f(x) \\geqslant 0$ 可化为 $a \\leqslant \\frac{3}{x^2} - \\frac{1}{x^3}, g'(x) = \\frac{3(1 - 2x)}{x^4} > 0,$

$g(x)$ 在区间 $[-1,0)$ 上单调递增，因此 $g(x)_{\\min} = g(-1) = 4$ ，从而 $a\\leqslant 4$

综上 a=4.

评注 此题所求变量 a 较容易分离, 关键要注意分离过程中的分类讨论.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-4-11",
    topicId: "topic-sec-3-4",
    title: `若定义在 (0,+∞) 的函数 f(x) 满足`,
    content: `若定义在 $(0,+\\infty)$ 的函数 $f(x)$ 满足 $f(x)+f(y)=f(xy)$ ，且 x>1 时不等式 $f(x)<0$ 成立，若不等式 $f(\\sqrt{x^{2}+y^{2}})\\leqslant f(\\sqrt{xy})+f(a)$ 对于任意 $x,y\\in(0,+\\infty)$ 恒成立，求实数 a 的取值范围.`,
    preview: `若定义在 (0,+∞) 的函数 f(x) 满足 f(x)+f(y)=f(xy) ，且 x>1 时不等式 f(x)<0 成立，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-4-11-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `设 $0 < x_{1} < x_{2}$ , 则 $\\frac{x_2}{x_1} > 1$ , 有 $f\\left(\\frac{x_2}{x_1}\\right) < 0$ .

则 $f(x_{2}) - f(x_{1}) = f\\left(\\frac{x_{2}}{x_{1}}\\cdot x_{1}\\right) - f(x_{1}) = f\\left(\\frac{x_{2}}{x_{1}}\\right) + f(x_{1}) - f(x_{1}) = f\\left(\\frac{x_{2}}{x_{1}}\\right) <   0,$

即 $f(x_{2})<f(x_{1})$ ，函数 $f(x)$ 在 $(0,+\\infty)$ 为减函数.

因此， $f(\\sqrt{x^2 + y^2})\\leqslant f(\\sqrt{xy}) + f(a)\\Leftrightarrow f(\\sqrt{x^2 + y^2})\\leqslant f(a\\sqrt{xy})\\Leftrightarrow \\sqrt{x^2 + y^2}\\geqslant a\\sqrt{xy}$ $\\Leftrightarrow a\\leqslant \\frac{\\sqrt{x^2 + y^2}}{\\sqrt{xy}}$ ；而 $\\frac{\\sqrt{x^2 + y^2}}{\\sqrt{xy}}\\geqslant \\frac{\\sqrt{2xy}}{\\sqrt{xy}} = \\sqrt{2}$ （当且仅当 $x = y$ 时取等号），又 $a > 0$ ，所以 $a$ 的取值范围是 $(0,\\sqrt{2} ]$

评注 当不等式两边为同一函数在相同区间内的两个函数值时,可以巧妙利用此函数的单调性,把函数值大小关系化归为自变量的大小关系,则问题可以迎刃而解.此题的参数可直接分离.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-4-12",
    topicId: "topic-sec-3-4",
    title: `已知函数 f(x)=^2(1+x)-x^21+x`,
    content: `已知函数 $f(x)=\\ln^{2}(1+x)-\\frac{x^{2}}{1+x}$ ,
(1) 求函数 $f(x)$ 的单调区间；
(2) 若不等式 $\\left(1+\\frac{1}{n}\\right)^{n+a}\\leqslant e$ 对于任意 $n\\in\\mathbf{Z}^{+}$ 都成立（其中e是自然对数的底数），求a的最大值.

分析 对于(2)不等式 $\\left(1+\\frac{1}{n}\\right)^{n+a}\\leqslant e$ 中只有指数含有a,故可以将函数进行分离考虑.`,
    preview: `已知函数 f(x)=^2(1+x)-x^21+x , (1) 求函数 f(x) 的单调区间； (2) 若不等式 (1+1/n)^n+a≤ e 对于任`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-4-12-sol-0",
        title: `解答`,
        method: "creative",
        steps: [],
        explanation: `(1)(略)函数 $f(x)$ 的单调增区间为 $(-1,0)$ , $f(x)$ 的单调减区间为 $(0,+\\infty)$ .

(2) 不等式 $\\left(1+\\frac{1}{n}\\right)^{n+a}\\leqslant e$ 等价于不等式 $(n+a)\\ln\\left(1+\\frac{1}{n}\\right)\\leqslant1.$

由于 $1 + \\frac{1}{n} > 1$ ，知 $(n + a)\\ln \\left(1 + \\frac{1}{n}\\right) \\leqslant 1 \\Leftrightarrow a \\leqslant \\frac{1}{\\ln \\left(1 + \\frac{1}{n}\\right)} - n;$

设 $g(x)=\\frac{1}{\\ln(1+x)}-\\frac{1}{x}, x\\in(0,1]$ ,

则 $g^{\\prime}(x) = -\\frac{1}{(1 + x)\\ln^{2}(1 + x)} +\\frac{1}{x^{2}} = \\frac{(1 + x)\\ln^{2}(1 + x) - x^{2}}{x^{2}(1 + x)\\ln^{2}(1 + x)}.$

由(1)知， $\\ln^{2}(1+x)-\\frac{x^{2}}{1+x}\\leqslant0$ ，即 $(1+x)\\ln^{2}(1+x)-x^{2}\\leqslant0$ ;

于是， $g'(x) < 0 \\ x \\in (0,1]$ ，即 $g(x)$ 在区间 $(0,1]$ 上为减函数.

故 $g(x)$ 在 $(0,1]$ 上的最小值为 $g(1)=\\frac{1}{\\ln2}-1$ . 所以 a 的最大值为 $\\frac{1}{\\ln2}-1$ .

评注 不等式恒成立问题中,常常先将所求参数从不等式中分离出来,使参数和主元分别位于不等式的左右两边,然后再巧妙构造函数,最后化归为最值法求解.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-4-13",
    topicId: "topic-sec-3-4",
    title: `已知函数 p(x)=x^3+(k-1)x^2+(k+5)x-`,
    content: `已知函数 $p(x)=x^{3}+(k-1)x^{2}+(k+5)x-1$ (其中 $k\\in R$ ) 在区间 $(0,3)$ 上不单调，求 k 的取值范围.`,
    preview: `已知函数 p(x)=x^3+(k-1)x^2+(k+5)x-1 (其中 k R ) 在区间 (0,3) 上不单调，求 k 的取值范围.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-4-13-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `$p'(x)=3x^{2}+2(k-1)x+(k+5)$ ，因 $p(x)$ 在区间 $(0,3)$ 上不单调，所以

$p'(x)=0$ 在 $(0,3)$ 上有实数解且无重根，

由 $p^{\\prime}(x) = 0$ 得 $k(2x + 1) = -(3x^{2} - 2x + 5)$ ，当 $2x + 1 \\neq 0$ 时有

$k = -\\frac{(3x^2 - 2x + 5)}{2x + 1} = -\\frac{3}{4}\\left[(2x + 1) + \\frac{9}{2x + 1} - \\frac{10}{3}\\right]$ , 令 $t = 2x + 1$ , 有 $t \\in (1,7)$ ,

记 $h(t) = t + \\frac{9}{t}$ ，则 $h(t)$ 在(1,3]上单调递减，在[3,7)上单调递增，

所以有 $h(t) \\in [6,10)$ , 于是 $(2x + 1) + \\frac{9}{2x + 1} \\in [6,10)$ , 得 $k \\in (-5, -2]$ ,

而当 k=-2 时有 $p'(x)=0$ 在 $(0,3)$ 上有两个相等的实根 x=1，故舍去，

所以 $k \\in (-5, -2)$ .

评注 此题实际上是将方程根的问题转化为函数值域的问题, 是较为常见的参变量分离的问题.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-4-14",
    topicId: "topic-sec-3-4",
    title: `已知函数 f(x) = -x^3 + 6x^2 - 9x`,
    content: `已知函数 $f(x) = -x^{3} + 6x^{2} - 9x$ . 若过点 $P(-1, m)$ 可作曲线 $y = f(x)$ 的切线有三条, 求实数 m 的取值范围.`,
    preview: `已知函数 f(x) = -x^3 + 6x^2 - 9x . 若过点 P(-1, m) 可作曲线 y = f(x) 的切线有三条, 求实数 m 的取值范围.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-4-14-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `设过 P 点的切线切曲线于点 $(x_{0}, y_{0})$ ，则切线的斜率 $k = -3x_{0}^{2} + 12x_{0} - 9$ ，

所以切线方程为 $y=(-3x_{0}^{2}+12x_{0}-9)(x+1)+m$ ,

故 $y_0 = (-3x_0^2 + 12x_0 - 9)(x_0 + 1) + m = -x_0^3 + 6x_0^2 - 9x_0$ ,

要使过点 P 可作曲线 $y = f(x)$ 的切线有三条，

则方程 $(-3x_{0}^{2}+12x_{0}-9)(x_{0}+1)+m=-x_{0}^{3}+6x_{0}^{2}-9x_{0}$ 有三解，

即方程 $m=2x^{3}-3x^{2}-12x+9$ 有三解，

即直线 y=m 与曲线 $g(x)=2x^{3}-3x^{2}-12x+9$ 有三个不同的交点，

则 $g^{\\prime}(x) = 6x^{2} - 6x - 12 = 6(x + 1)(x - 2)$

易知-1,2为 $g(x)$ 的极大值点和极小值点，又 $g(x)_{\\text{极小}} = -11, g(x)_{\\text{极大}} = 16$ ，

故满足条件的 m 的取值范围是 -11 < m < 16.

评注 此题是通过参数分离将根的个数问题转化为两个图像的交点个数问题.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-4-15",
    topicId: "topic-sec-3-4",
    title: `已知函数 g(x) = ax - a/x - 5 x`,
    content: `已知函数 $g(x) = ax - \\frac{a}{x} - 5\\ln x$ ，其中 $a \\in \\mathbb{R}$ . 若 $g(x)$ 在其定义域内为增函数，求正实数 $a$ 的取值范围.`,
    preview: `已知函数 g(x) = ax - a/x - 5 x ，其中 a R . 若 g(x) 在其定义域内为增函数，求正实数 a 的取值范围.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-4-15-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `$g(x)$ 的定义域为 $(0, +\\infty), g'(x) = a + \\frac{a}{x^2} - \\frac{5}{x} = \\frac{ax^2 - 5x + a}{x^2}$ ,

因为 $g(x)$ 在其定义域内为增函数, 所以对任意 $x \\in (0, +\\infty)$ ,

$$
g ^ {\\prime} (x) \\geqslant 0 \\Leftrightarrow a x ^ {2} - 5 x + a \\geqslant 0 \\Leftrightarrow a (x ^ {2} + 1) \\geqslant 5 x \\Leftrightarrow a \\geqslant \\frac {5 x}{x ^ {2} + 1} \\Leftrightarrow a \\geqslant \\left[ \\frac {5 x}{x ^ {2} + 1} \\right] _ {\\max},
$$

而 $\\frac{5x}{x^{2}+1}=\\frac{5}{x+\\frac{1}{x}}\\leqslant\\frac{5}{2}$ ，当且仅当x=1时取等号，所以 $a\\geqslant\\frac{5}{2}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-4-16",
    topicId: "topic-sec-3-4",
    title: `已知函数 f(x)=mx-m/x-2 x(m)`,
    content: `已知函数 $f(x)=mx-\\frac{m}{x}-2\\ln x(m\\in\\mathbb{R})$ .
(1) 若 $y = f(x)$ 在 $[1, +\\infty)$ 上为单调函数，求 m 的取值范围；
(2) 设 $g(x) = \\frac{2\\mathrm{e}}{x}$ ，若在 $[1, \\mathrm{e}]$ 上至少存在一个 $x_0$ ，使得 $f(x_0) > g(x_0)$ 成立，求 $m$ 的取值范围.`,
    preview: `已知函数 f(x)=mx-m/x-2 x(m) . (1) 若 y = f(x) 在 [1, +∞) 上为单调函数，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-4-16-sol-0",
        title: `解法一`,
        method: "creative",
        steps: [],
        explanation: `(1) $f'(x)=\\frac{mx^{2}-2x+m}{x^{2}}$ ，由于 $y=f(x)$ 在 $[1,+\\infty)$ 上为单调函数，

则 $mx^{2} - 2x + m\\geqslant 0$ 或 $mx^{2} - 2x + m\\leqslant 0$ 在 $[1, + \\infty)$ 上恒成立，

即 $m \\geqslant \\frac{2x}{x^2 + 1}$ 或 $m \\leqslant \\frac{2x}{x^2 + 1}$ 在 $[1, +\\infty)$ 上恒成立，故 $m \\geqslant 1$ 或 $m \\leqslant 0$ .

综上，m 的取值范围是 $(-∞,0]∪[1,+∞)$ .

(2)构造函数 $F(x)=f(x)-g(x)$ ， $F(x)=mx-\\frac{m}{x}-2\\ln x-\\frac{2e}{x}$

当 $m \\leqslant 0$ 时，由 $x \\in [1, \\mathrm{e}]$ 得 $mx - \\frac{m}{x} \\leqslant 0, -2\\ln x - \\frac{2\\mathrm{e}}{x} < 0,$

所以在 $[1,e]$ 上不存在这样的 $x_{0}$ ，使得 $f(x_{0})>g(x_{0})$ ;

当 $m > 0$ 时， $F'(x) = \\frac{mx^2 - 2x + m + 2e}{x^2}$ ，

由 $x \\in [1, e]$ ， $2e - 2x \\geqslant 0$ ， $mx^{2} + m > 0$ ，

则 $F'(x)>0$ 在 $[1,+\\infty]$ 上恒成立，

故 $F(x)$ 在 $x \\in [1, \\mathrm{e}]$ 上单调递增，

$F(x)_{\\max}=me-\\frac{m}{e}-4$ ，由题意，只要 $F(x)_{\\max}=me-\\frac{m}{e}-4>0$ ，解得 $m>\\frac{4e}{e^{2}-1}$

故 m 的取值范围是 $\\left(\\frac{4e}{e^{2}-1},+\\infty\\right)$ .`,
      },
      {
        id: "prob-sec-3-4-16-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `(2)由 $f(x)>g(x)$ 可得 $m>\\frac{2e+2x\\ln x}{x^{2}-1}$ ，令 $F(x)=\\frac{2e+2x\\ln x}{x^{2}-1}$ ，

则当 $x \\in [1, e]$ 时， $F'(x) = \\frac{(-2x^{2}-2)\\ln x + (2x^{2}-4ex-2)}{(x^{2}-1)^{2}} < 0,$

则 $F(x)$ 在 $[1, e]$ 上单调递减，故 $F(x)_{\\min} = \\frac{4e}{e^{2}-1}$ ，所以 $m > \\frac{4e}{e^{2}-1}$ .

评注 参变量分离可以避免较复杂的分类讨论,对观察和分析问题的能力要求略低,但得到的函数有可能较为复杂,需要较强的计算能力.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-4-17",
    topicId: "topic-sec-3-4",
    title: `设函数 f(x)=e^x-1-x-ax^2`,
    content: `设函数 $f(x)=\\mathrm{e}^{x}-1-x-ax^{2}$ .
(1) 若 a=0，求 $f(x)$ 的单调区间；

(2)若当 $x \\geqslant 0$ 时, $f(x) \\geqslant 0$ , 求 a 的取值范围.`,
    preview: `设函数 f(x)=e^x-1-x-ax^2 . (1) 若 a=0，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-4-17-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `(1)a=0 时, $f(x)=\\mathrm{e}^{x}-1-x,f'(x)=\\mathrm{e}^{x}-1.$

当 $x \\in (-\\infty, 0)$ 时， $f'(x) < 0$ ；当 $x \\in (0, +\\infty)$ 时， $f'(x) > 0$ .

故 $f(x)$ 在 $(-\\infty, 0)$ 上单调递减，在 $(0, +\\infty)$ 上单调递增.

(2) $f'(x)=\\mathrm{e}^{x}-1-2ax$ ，由(1)知 $e^{x}\\geqslant1+x$ ，当且仅当x=0时等号成立.

故 $f'(x) \\geqslant x - 2ax = (1 - 2a)x$ ，从而当 $1 - 2a \\geqslant 0$ ，即 $a \\leqslant \\frac{1}{2}$ 时， $f'(x) \\geqslant 0 (x \\geqslant 0)$ ，

而 $f(0) = 0$ ，于是当 $x\\geqslant 0$ 时， $f(x)\\geqslant 0.$ 由 $\\mathrm{e}^x >1 + x(x\\neq 0)$ 可得 $\\mathrm{e}^{-x} > 1 - x(x\\neq 0)$

从而当 $a > \\frac{1}{2}$ 时， $f'(x) < \\mathrm{e}^x - 1 + 2a(\\mathrm{e}^{-x} - 1) = \\mathrm{e}^{-x}(\\mathrm{e}^x - 1)(\\mathrm{e}^x - 2a)$ ，

故当 $x \\in (0, \\ln 2a)$ 时， $f'(x) < 0$ ，而 $f(0) = 0$ ，于是当 $x \\in (0, \\ln 2a)$ 时， $f(x) < 0$ 。

综合得 a 的取值范围为 $\\left(-\\infty, \\frac{1}{2}\\right]$ .`,
      },
      {
        id: "prob-sec-3-4-17-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `(1)略

(2) 当 $x \\geqslant 0$ 时， $e^{x} - 1 - x - ax^{2} \\geqslant 0$ ，即 $e^{x} - 1 - x \\geqslant ax^{2} (*)$

当 $x = 0$ 时， $(*)$ 式显然成立，即 $a \\in \\mathbf{R}$ ；当 $x > 0$ 时， $a \\leqslant \\frac{\\mathrm{e}^x - 1 - x}{x^2}$ ，

令 $g(x) = \\frac{\\mathrm{e}^x - 1 - x}{x^2}$ ，则 $g'(x) = \\frac{x\\mathrm{e}^x - 2\\mathrm{e}^x + x + 2}{x^3}$ ，

令 $h(x)=xe^{x}-2e^{x}+x+2$ ，则 $h'(x)=(x-1)e^{x}+1, h''(x)=xe^{x}>0$

则 $h'(x)$ 在 $(0, +\\infty)$ 上单调递增，

由 $h'(0)=0$ , 得 $h'(x)>0$ , 则 $h(x)$ 在 $(0,+\\infty)$ 上单调递增，

由 $h(0)=0$ ，则 $h(x)>0$ ，即 $g'(x)>0$ ，则 $g(x)$ 在 $(0,+\\infty)$ 上单调递增.

由洛比达法则， $\\lim_{x\\to0}\\frac{e^{x}-1-x}{x^{2}}=\\lim_{x\\to0}\\frac{e^{x}-1}{2x}=\\lim_{x\\to0}\\frac{e^{x}}{2}=\\frac{1}{2}$ ，则 $a\\leqslant\\frac{1}{2}$ .

综上， $a\\leqslant \\frac{1}{2}$

评注 本题讲解二中参变分离后得到的函数较为复杂,值域(最值)不是很容易求出,需要连续求导和使用洛比达法则才能解决问题.“分离参数、连续求导、洛比达法则”是运用分离参数法解题的完整策略.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-4-18",
    topicId: "topic-sec-3-4",
    title: `直线 l_1: begincases x = 1 + t, y = -5 + √(3)t endcases (t 为`,
    content: `直线 $l_{1}: \\begin{cases} x = 1 + t, \\\\ y = -5 + \\sqrt{3}t \\end{cases}$ ( $t$ 为参数) 和直线 $l_{2}: x - y - 2\\sqrt{3} = 0$ 的交点 $P$ 的坐标，及点 $P$ 与 $Q(1, -5)$ 的距离.`,
    preview: `直线 ( t 为参数) 和直线 l_2: x - y - 2√3 = 0 的交点 P 的坐标，及点 P 与 Q(1, -5) 的距离.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-4-18-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `将 $\\left\\{\\begin{aligned}x&=1+t,\\\\ y&=-5+\\sqrt{3}t\\end{aligned}\\right.$ 代入 $x-y-2\\sqrt{3}=0$ 得 $t=2\\sqrt{3}$ ,

得 $P(1+2\\sqrt{3},1)$ ，而 $Q(1,-5)$ ，得 $\\left|PQ\\right|=\\sqrt{(2\\sqrt{3})^{2}+6^{2}}=4\\sqrt{3}$ .

评注 化直线的参数方程为一般方程是求解此类问题的基础. 本问题也可应用直线参数方程中 $t$ 的几何意义求解.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-4-19",
    topicId: "topic-sec-3-4",
    title: `求以椭圆 x^2+4y^2=16 内一点 M(1,-1)`,
    content: `求以椭圆 $x^{2}+4y^{2}=16$ 内一点 $M(1,-1)$ 为中点的弦所在的直线的方程.`,
    preview: `求以椭圆 x^2+4y^2=16 内一点 M(1,-1) 为中点的弦所在的直线的方程.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-4-19-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `设以点 $M(1, -1)$ 为中点的弦所在的直线 $l$ 的参数方程为 $\\left\\{ \\begin{array}{l} x = 1 + t \\cos \\theta, \\\\ y = -1 + t \\sin \\theta \\end{array} (t$ 为参数), 并将这一方程代入椭圆方程得:

$(1 + t\\cos \\theta)^{2} + 4(-1 + t\\sin \\theta)^{2} = 16$ ，化简得

$$
(\\cos^ {2} \\theta + 4 \\sin^ {2} \\theta) t ^ {2} + 2 (\\cos \\theta - 4 \\sin \\theta) t - 1 1 = 0.
$$

由于点 $M(1, -1)$ 为弦的中点，则交点的两参数 $t_1, t_2$ 的和为0，据韦达定理有 $\\cos \\theta - 4\\sin \\theta = 0$ ，即 $\\tan \\theta = \\frac{1}{4}$ ，故所求直线的方程为 $y + 1 = \\frac{1}{4}(x - 1)$ ，即 $x - 4y - 5 = 0$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-4-20",
    topicId: "topic-sec-3-4",
    title: `已知直线 l 过点 P(2,0)`,
    content: `已知直线 l 过点 $P(2,0)$ ，斜率为 $\\frac{4}{3}$ ，直线 l 和抛物线 $y^{2}=2x$ 相交于 A、B 两点，设线段 AB 的中点为 M，求：
(1)P、M两点间的距离|PM|；
(2)M点的坐标；
(3) 线段 AB 的长 $\\left|AB\\right|$ .`,
    preview: `已知直线 l 过点 P(2,0) ，斜率为 4/3 ，直线 l 和抛物线 y^2=2x 相交于 A、B 两点，设线段 AB 的中点为 M，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-4-20-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `(1)因为直线 l 过点 $P(2,0)$ ，斜率为 $\\frac{4}{3}$ ，设直线的倾斜角为 $\\alpha, \\tan\\alpha = \\frac{4}{3}$ ，

$\\cos \\alpha = \\frac{3}{5},\\sin \\alpha = \\frac{4}{5}$ ，所以直线 $l$ 的标准参数方程为 $\\left\\{ \\begin{array}{l}x = 2 + \\frac{3}{5} t,\\\\ y = \\frac{4}{5} t \\end{array} \\right.$ （ $t$ 为参数）（\\*）.

(1) 因为直线 l 和抛物线相交, 将直线的参数方程代入抛物线方程 $y^{2}=2x$ 中, 整理得 $8t^{2}-15t-50=0, \\Delta=15^{2}+4\\times8\\times50>0$ ,

设这个二次方程的两个根为 $t_{1}$ 、 $t_{2}$ ，

由韦达定理得 $t_1 + t_2 = \\frac{15}{8}$ , $t_1t_2 = -\\frac{25}{4}$ ,

由 M 为线段 AB 的中点, 根据 t 的几何意义,

得 $|PM| = \\left|\\frac{t_1 + t_2}{2}\\right| = \\frac{15}{16}.$

(2)因为中点 M 所对应的参数为 $t_{M}=\\frac{15}{16}$ ，将此值代入直线的标准参数方程（\\*），

M 点的坐标为 $x=2+\\frac{3}{5}\\times\\frac{15}{16}=\\frac{41}{16}, y=\\frac{4}{5}\\times\\frac{15}{16}=\\frac{3}{4}$ ，即 $M\\left(\\frac{41}{16},\\frac{3}{4}\\right)$ .

(3) $|AB| = |t_2 - t_1| = \\sqrt{(t_1 + t_2)^2 - 4t_1t_2} = \\frac{5}{8}\\sqrt{73}.$

评注 本题是向量与解析几何的综合题,有关直线与圆锥曲线关系的存在性问题,往往需要相应一元二次方程的判别式来判断.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-4-21",
    topicId: "topic-sec-3-4",
    title: `设椭圆的中心是坐标原点, 长轴在 x 轴上, 离心率`,
    content: `设椭圆的中心是坐标原点, 长轴在 x 轴上, 离心率 $e=\\frac{\\sqrt{3}}{2}$ , 点 $P\\left(0,\\frac{3}{2}\\right)$ 到椭圆上的点的最远距离是 $\\sqrt{7}$ , 求椭圆的方程并求椭圆上到点 P 距离等于 $\\sqrt{7}$ 的点的坐标.`,
    preview: `设椭圆的中心是坐标原点, 长轴在 x 轴上, 离心率 e=√32 , 点 P(0,3/2) 到椭圆上的点的最远距离是 √7 , 求椭圆的方程并求椭圆上到点 P`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-4-21-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `设椭圆的方程为 $\\begin{cases} x = a\\cos \\theta, \\\\ y = b\\sin \\theta \\end{cases} (a > b > 0, 0 \\leqslant \\theta < 2\\pi)$ , 由 $e^2 = 1 - \\left(\\frac{b}{a}\\right)^2 = \\frac{3}{4}$ , 得 $a = 2b$ . 设椭圆上点 $(x, y)$ 到 $P$ 的距离为 $d$ , 则

$$
d ^ {2} = x ^ {2} + \\left(y - \\frac {3}{2}\\right) ^ {2} = - 3 b ^ {2} \\left(\\sin \\theta + \\frac {1}{2 b}\\right) ^ {2} + 4 b ^ {2} + 3.
$$

若 $\\frac{1}{2b}>1$ ，即 $b<\\frac{1}{2}$ 时， $(\\sqrt{7})^{2}=\\left(b+\\frac{3}{2}\\right)^{2},b=\\sqrt{7}-\\frac{3}{2}>\\frac{1}{2}$ ，不符.

若 $\\frac{1}{2b}\\leqslant1$ ，即 $b\\geqslant\\frac{1}{2}$ 时，此时 $\\sin\\theta=-\\frac{1}{2b},d^{2}$ 有最大值，

故有 $(\\sqrt{7})^{2}=4b^{2}+3$ ，解得b=1,a=2.

即椭圆方程为 $\\left\\{\\begin{aligned}x=2\\cos\\theta,\\\\ y=\\sin\\theta.\\end{aligned}\\right.$

由 $\\sin\\theta=-\\frac{1}{2},\\cos\\theta=\\pm\\frac{\\sqrt{3}}{2}$ ，知所求点的坐标为 $\\left(-\\sqrt{3},-\\frac{1}{2}\\right),\\left(\\sqrt{3},-\\frac{1}{2}\\right)$ .

评注 本题主要是应用椭圆的参数方程, 将最值问题转化为二次函数在给定区间上的最值求解.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-4-22",
    topicId: "topic-sec-3-4",
    title: `如图 3-4-3 所示, 过抛物线`,
    content: `如图 3-4-3 所示, 过抛物线 $y^{2}=2px(p>0)$ 的顶点作两条互相垂直的弦 OA、OB.
![](images/824200f63fa7014d568e665fc58e38d7da7045bf9a582dd52c4883a68ffce094.jpg)

图3-4-3

(1) 设 OA 的斜率为 k，试用 k 表示点 A、B 坐标；
(2)求弦 AB 中点 M 的轨迹方程.`,
    preview: `如图 3-4-3 所示, 过抛物线 y^2=2px(p>0) 的顶点作两条互相垂直的弦 OA、OB. 图3-4-3 (1) 设 OA 的斜率为 k，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-4-22-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `（1）设 OA 的方程为 y=kx，

联立方程 $\\left\\{\\begin{aligned}y&=kx,\\\\ y^{2}&=2px,\\end{aligned}\\right.$ 解得 $x_{A}=\\frac{2p}{k^{2}},y_{A}=\\frac{2p}{k}.$

以 $-\\frac{1}{k}$ 替代上式中的k，解方程组 $\\left\\{\\begin{aligned}y&=-\\frac{1}{k}x,\\\\ y^{2}&=2px,\\end{aligned}\\right.$

得 $x_{B} = 2pk^{2},y_{B} = -2pk.$ 即 $A\\left(\\frac{2p}{k^2},\\frac{2p}{k}\\right),B(2pk^2, - 2pk).$

推广 已知椭圆 $E: \\frac{x^{2}}{m} + \\frac{y^{2}}{n} = 1 (m, n > 0)$ 的焦点在 x 轴上，A 是 E 的左顶点，斜率为 $k (k > 0)$ 的直线交 E 于 A, M 两点，点 N 在 E 上， $MA \\perp NA$ .

(1) 当 $\\left|AM\\right|=\\left|AN\\right|$ 时， $S_{\\triangle AMN}=\\frac{4mn^{2}}{(m+n)^{2}}$ .
(2) 当 $\\lambda|AM|=|AN|$ (其中 $\\lambda>1$ ) 时, $k\\in(\\sqrt[3]{\\lambda},\\lambda)$ .

讲解 易知 $A(-\\sqrt{m},0)$ 且 m>n. 设直线 AM 的倾斜角为 $\\alpha(0^{\\circ}<\\alpha<90^{\\circ})$ ,

则由 $MA \\perp NA$ 可知, 直线 AN 的倾斜角为 $\\alpha + 90^{\\circ}$ .

设过点 $A(-\\sqrt{m},0)$ 的直线 AM 的参数方程为 $\\left\\{\\begin{aligned}x&=-\\sqrt{m}+t\\cos\\alpha,\\\\ y&=t\\sin\\alpha\\end{aligned}\\right.$ (t 为参数)，

代入椭圆方程, 整理得 $t\\left[(n\\cos^{2}\\alpha + m\\sin^{2}\\alpha)t - 2n\\sqrt{m}\\cos\\alpha\\right] = 0.$

由 t 的几何意义知 $\\left|AM\\right|=\\left|t\\right|=\\left|\\frac{2n\\sqrt{m}\\cos\\alpha}{n\\cos^{2}\\alpha+m\\sin^{2}\\alpha}\\right|=\\frac{2n\\sqrt{m}\\cos\\alpha}{n+(m-n)\\sin^{2}\\alpha}.$

同理，由 $MA \\perp NA$ 可知，对于直线 AN，将 $\\alpha$ 换为 $\\alpha + 90^{\\circ}$ ，

即得到 $|AN| = \\frac{2n\\sqrt{m}\\sin\\alpha}{n + (m - n)\\cos^2\\alpha}.$

(1)当 $|AM|=|AN|$ 时, $\\frac{2n\\sqrt{m}\\cos\\alpha}{n+(m-n)\\sin^{2}\\alpha}=\\frac{2n\\sqrt{m}\\sin\\alpha}{n+(m-n)\\cos^{2}\\alpha}$ ,整理得

$n(\\sin \\alpha -\\cos \\alpha)[m + (m - n)\\sin \\alpha \\cos \\alpha ] = 0$ ，得 $\\sin \\alpha = \\cos \\alpha$ ，即 $\\alpha = 45^{\\circ}$

此时 $|AM| = |AN| = \\frac{2n\\sqrt{m}\\cos 45^{\\circ}}{n + (m - n)\\sin^{2}45^{\\circ}} = \\frac{2n\\sqrt{2m}}{m + n},$

$$
S _ {\\triangle A M N} = \\frac {1}{2} | A M | \\cdot | A N | = \\frac {1}{2} | A M | ^ {2} = \\frac {4 m n ^ {2}}{(m + n) ^ {2}}.
$$

(2) 当 $\\lambda|AM|=|AN|$ 时， $\\frac{\\lambda\\cos\\alpha}{n+(m-n)\\sin^{2}\\alpha}=\\frac{\\sin\\alpha}{n+(m-n)\\cos^{2}\\alpha}$

解得 $m - n = \\frac{n(\\lambda\\cos\\alpha - \\sin\\alpha)}{\\sin^3\\alpha - \\lambda\\cos^3\\alpha} > 0$ ，即 $\\frac{\\lambda - k}{k^3 - \\lambda} > 0$ ，解得 $k \\in (\\sqrt[3]{\\lambda}, \\lambda)$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-4-24",
    topicId: "topic-sec-3-4",
    title: `如图 3-4-4 所示, 过点 A( -2,m) 作直线`,
    content: `如图 3-4-4

![](images/79acf9ad372da1f39f16761e650581487f70c4ebcc4891a0171374b40bcfe67d.jpg) 所示, 过点 $A\\left( {-2,m}\\right)$ 作直线 $l$ 交椭圆 $\\frac{{x}^{2}}{2} + {y}^{2}$ $= 1$ 于 $B\\text{、}C$ . 点 $Q$ 在弦 \${BC}$ 上,且满足 $\\frac{BQ}{QC} = \\frac{AB}{AC}$ ,求动点 $Q$ 的轨迹方程.`,
    preview: `如图 3-4-4 所示, 过点 A( -2,m) 作直线 l 交椭圆 {x^2}2 + y^2 = 1 于 B、`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-4-24-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `设直线 l 的参数方程为 $\\left\\{\\begin{aligned} x &= -2 + t \\cos \\alpha, \\\\ y &= m + t \\sin \\alpha \\end{aligned}\\right.$ (t 为参数).

代入椭圆方程,并整理,得

$$
(2 \\sin^ {2} \\alpha + \\cos^ {2} \\alpha) t ^ {2} + 4 (m \\sin \\alpha - \\cos \\alpha) t + 2 (m ^ {2} + 1) = 0.
$$

所以 $t_1 + t_2 = -\\frac{4(m\\sin\\alpha - \\cos\\alpha)}{2\\sin^2\\alpha + \\cos^2\\alpha}, t_1t_2 = \\frac{2(m^2 + 1)}{2\\sin^2\\alpha + \\cos^2\\alpha}.$ ①

设 $AB = t_{1}, AC = t_{2}, AQ = t$ ，则由 $\\frac{BQ}{QC} = \\frac{AB}{AC}$ 得 $\\frac{t - t_1}{t_2 - t} = \\frac{t_1}{t_2}$

整理, 得 $t(t_{1}+t_{2})=2t_{1}t_{2}.$ ②

![](images/79acf9ad372da1f39f16761e650581487f70c4ebcc4891a0171374b40bcfe67d.jpg)

图3-4-4

(2) 设 AB 中点为 $M(x, y)$ ，则由中点坐标公式，得

$$
\\left\\{ \\begin{array}{l} x = p \\left(\\frac {1}{k ^ {2}} + k ^ {2}\\right), \\\\ y = p \\left(\\frac {1}{k} - k\\right), \\end{array} \\right.
$$

消去参数 $k$ ，得 $y^{2} = px - 2p^{2}$ ，即为 $M$ 点轨迹的普通方程.

评注 应用参数方程求曲线的轨迹或轨迹方程重要的是消参,消参之后应注意参数及其表达式的取值范围.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-4-23",
    topicId: "topic-sec-3-4",
    title: `已知椭圆 E: x^2t + y^23 = 1 的焦点在`,
    content: `已知椭圆 $E: \\frac{x^{2}}{t} + \\frac{y^{2}}{3} = 1$ 的焦点在 x 轴上，A 是 E 的左顶点，斜率为 $k (k > 0)$ 的直线交 E 于 A, M 两点，点 N 在 E 上， $MA \\perp NA$ .
(1) 当 t=4, $\\left|AM\\right|=\\left|AN\\right|$ 时, 求 $\\triangle AMN$ 的面积;
(2) 当 $2|AM|=|AN|$ 时, 求 k 的取值范围.`,
    preview: `已知椭圆 E: x^2t + y^23 = 1 的焦点在 x 轴上，A 是 E 的左顶点，斜率为 k (k > 0) 的直线交 E 于 A, M 两点，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-4-23-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `易知 $A(-\\sqrt{t}, 0)$ , 设直线 $AM$ 的倾斜角为 $\\alpha (0^{\\circ} < \\alpha < 90^{\\circ})$ , 则由 $MA \\perp NA$ 可知, 直线 $AN$ 的倾斜角为 $\\alpha + 90^{\\circ}$ .

设直线 AM 的参数方程为 $\\left\\{\\begin{aligned} x &= -\\sqrt{t} + \\lambda \\cos \\alpha, \\\\ y &= \\lambda \\sin \\alpha \\end{aligned}\\right.$ ( $\\lambda$ 为参数),

代入椭圆方程,整理得

$$
\\lambda [ (3 \\cos^ {2} \\alpha + t \\sin^ {2} \\alpha) \\lambda - 6 \\sqrt {t} \\cos \\alpha ] = 0.
$$

由 $\\lambda$ 的几何意义知 $|AM| = |\\lambda| = \\left|\\frac{6\\sqrt{t}\\cos\\alpha}{3\\cos^{2}\\alpha + t\\sin^{2}\\alpha}\\right| = \\frac{6\\sqrt{t}\\cos\\alpha}{3 + (t - 3)\\sin^{2}\\alpha}$ .

同理，由 $MA \\perp NA$ 可知，对于直线 AN，将 $\\alpha$ 换为 $\\alpha + 90^{\\circ}$ ，

即得到 $|AN| = \\frac{6\\sqrt{t}\\sin\\alpha}{3 + (t - 3)\\cos^2\\alpha}.$

(1) 当 t=4 时， $|AM|=|AN|$ ， $\\frac{\\cos\\alpha}{3+\\sin^{2}\\alpha}=\\frac{\\sin\\alpha}{3+\\cos^{2}\\alpha}$

整理得 $(\\sin\\alpha-\\cos\\alpha)(4+\\sin\\alpha\\cos\\alpha)=0$ ,

得 $\\sin\\alpha=\\cos\\alpha$ ，即 $\\alpha=45^{\\circ}$ ，

此时 $|AM| = |AN| = \\frac{12\\cos 45^\\circ}{3 + \\sin^2 45^\\circ} = \\frac{12\\sqrt{2}}{7}$

故 $S_{\\triangle AMN} = \\frac{1}{2} |AM| \\cdot |AN| = \\frac{1}{2} |AM|^2 = \\frac{144}{49}$ .

(2) 当 $2|AM| = |AN|$ 时， $\\frac{2\\cos\\alpha}{3 + (t - 3)\\sin^{3}\\alpha} = \\frac{\\sin\\alpha}{3 + (t - 3)\\cos^{2}\\alpha}$ ,

所以 $t-3=\\frac{6\\cos\\alpha-3\\sin\\alpha}{\\sin^{3}\\alpha-2\\cos^{3}\\alpha}>0,$

即 $\\frac{6-3k}{k^{3}-2}>0$ ，解得 $k\\in(\\sqrt[3]{2},2)$ .

评注 利用直线的参数方程,本题的两问均能轻松获解.一般涉及直线过定点的旋转问题,可以考虑用直线的参数方程轻松获解.

①代入②得 $-t(m\\sin\\alpha-\\cos\\alpha)=m^{2}+1$ ，则 $t=\\frac{m^{2}+1}{\\cos\\alpha-m\\sin\\alpha}$ . ③

得点 Q 的轨迹的参数方程为 $\\left\\{\\begin{aligned} x &= -2 + \\frac{(m^{2}+1)\\cos\\alpha}{\\cos\\alpha - m\\sin\\alpha}, \\\\ y &= m' + \\frac{(m^{2}+1)\\sin\\alpha}{\\cos\\alpha - m\\sin\\alpha}\\end{aligned}\\right.$ ( $\\alpha$ 为参数).

消去 $\\alpha$ ，得 $ym-(x+1)=0$ 。

(1) 当 m=0 时, 所求轨迹是 x=-1 (过左焦点) 被椭圆截下的弦;
(2) 当 m 变动时, 点 Q 的轨迹恒过定点 $F_{1}(-1,0)$ .

评注 (1)已知椭圆的左准线的方程为 $x = -2$ ，左焦点的坐标为 $F(-1,0)$ ，直线 $ym - (x + 1) = 0$ 是过点 $A(-2, m)$ 作椭圆的两条切线，切点连成的方程，不论点 $A$ 在左准线上的什么位置，过 $A$ 所作椭圆的切点弦总经过左焦点 $F$ ，反过来，若过椭圆的左焦点 $F$ 作动弦 $MN$ ，过 $MN$ 的端点 $M, N$ 作椭圆的切线，两切线的交点一定在左准线上。

(2) 过 $A$ 作椭圆的任意一条割线, 交椭圆于 $B 、 C$ , 交上述切点连线于 $Q$ , 则有性质 $\\frac{BQ}{QC} = \\frac{AB}{AC}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-4-25",
    topicId: "topic-sec-3-4",
    title: `双曲线 x^2{a^2}-y^2{b^2}=1(a>0,b>`,
    content: `双曲线 $\\frac{x^{2}}{a^{2}}-\\frac{y^{2}}{b^{2}}=1(a>0,b>0)$ ， $F_{1},F_{2}$ 是左、右焦点，P是右支上一点，且 $\\angle F_{1}PF_{2}=\\frac{\\pi}{3},S_{\\triangle F_{1}PF_{2}}=3\\sqrt{3}a^{2}$ .
(1)求离心率 $e$ ;

(2) 若 A 为双曲线左顶点, Q 为右支上任一点, 是否存在常数 $\\lambda$ 使 $\\angle QAF_{2} = \\lambda \\angle QF_{2}A$ 恒成立?`,
    preview: `双曲线 x^2{a^2}-y^2{b^2}=1(a>0,b>0) ， F_1,F_2 是左、右焦点，P是右支上一点，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-4-25-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)如图3-4-5所示,在 $\\triangle PF_{1}F_{2}$ 中,由余弦定理,得

$$
| F _ {1} F _ {2} | ^ {2} = | P F _ {1} | ^ {2} + | P F _ {2} | ^ {2} - 2 | P F _ {1} | \\cdot | P F _ {2} | \\cdot \\cos \\frac {\\pi}{3},
$$

$$
(2 c) ^ {2} = (| P F _ {1} | - | P F _ {2} |) ^ {2} + 2 | P F _ {1} | \\cdot | P F _ {2} | \\cdot \\left(1 - \\cos \\frac {\\pi}{3}\\right)
$$

$$
\\Rightarrow | P F _ {1} | \\cdot | P F _ {2} | = 4 c ^ {2} - 4 a ^ {2} = 4 b ^ {2}.
$$

$$
S _ {\\triangle P F _ {1} F _ {2}} = \\frac {1}{2} | P F _ {1} | \\cdot | P F _ {2} | \\cdot \\sin \\frac {\\pi}{3} = \\frac {1}{2} \\times 4 b ^ {2} \\times \\frac {\\sqrt {3}}{2} = 3 \\sqrt {3} a ^ {2}.
$$

所以 $b^{2} = 3a^{2}, c = \\sqrt{a^{2} + b^{2}} = 2a$ ，所以 $e = \\frac{c}{a} = 2$ .

![](images/360687f74662d427f849e54b3edc03e612fffd12e08f6808e620eccc992a2dc1.jpg)

图3-4-5

(2)由(1)，双曲线方程为 $\\frac{x^{2}}{a^{2}}-\\frac{y^{2}}{3a^{2}}=1$ 。若 $QF_{2}\\perp x$ 轴，此时 $Q(2a,3a),c=2a,\\triangle QAF_{2}$ 为等腰直角三角形， $\\angle QAF_{2}=\\frac{1}{2}\\angle QF_{2}A$ 。

下证 $\\lambda=\\frac{1}{2}$ . 设 $Q(a\\sec\\varphi,\\sqrt{3}a\\tan\\varphi)$ ,

$$
\\tan \\angle Q F _ {2} A = - k _ {Q F _ {2}} = - \\frac {\\sqrt {3} a \\tan \\varphi}{a \\sec \\varphi - 2 a} = \\frac {\\sqrt {3} \\tan \\varphi}{2 - \\sec \\varphi},
$$
$$
\\tan \\angle Q A F _ {2} = \\frac {\\sqrt {3} a \\tan \\varphi}{a \\sec \\varphi + a} = \\frac {\\sqrt {3} \\tan \\varphi}{\\sec \\varphi + 1},
$$

$$
\\begin{array}{l} \\tan 2 \\angle Q A F _ {2} = \\frac {\\frac {2 \\sqrt {3} \\tan \\varphi}{\\sec \\varphi + 1}}{1 - \\left(\\frac {\\sqrt {3} \\tan \\varphi}{\\sec \\varphi + 1}\\right) ^ {2}} = \\frac {2 \\sqrt {3} \\tan \\varphi (\\sec \\varphi + 1)}{(\\sec \\varphi + 1) ^ {2} - 3 \\tan^ {2} \\varphi} = \\frac {2 \\sqrt {3} \\tan \\varphi (\\sec \\varphi + 1)}{- 2 \\sec^ {2} \\varphi + 2 \\sec \\varphi + 4} \\\\ = \\frac {2 \\sqrt {3} \\tan \\varphi (\\sec \\varphi + 1)}{- 2 (\\sec \\varphi + 1) (\\sec \\varphi - 2)} = \\frac {\\sqrt {3} \\tan \\varphi}{2 - \\sec \\varphi} = \\tan \\angle Q F _ {2} A. \\\\ \\end{array}
$$

所以存在常数 $\\lambda = \\frac{1}{2}$ ，使 $\\angle QAF_{2} = \\frac{1}{2}\\angle QF_{2}A$ 恒成立.

评注 (2) 上设 $Q(a\\sec \\varphi, \\sqrt{3} a\\tan \\varphi)$ , 采用的是双曲线方程的参数形式, 有利于借助三角公式化简.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-4-26",
    topicId: "topic-sec-3-4",
    title: `若抛物线 y^2=2px(p>0)`,
    content: `若抛物线 $y^{2}=2px(p>0)$ 的准线与对称轴的交点为点 A，过点 A 作抛物线的一条割线交抛物线于 B, C 两点，过焦点 F 作与割线的倾斜角互补的直线交抛物线于 M, N 两点，证明 $|FM|\\cdot|FN|=e^{2}|AB|\\cdot|AC|$ .
![](images/80e16cb34c732b80e2cf83db627b5f2403daecce70590f129ae16fa96053e1f9.jpg)

图3-4-6`,
    preview: `若抛物线 y^2=2px(p>0) 的准线与对称轴的交点为点 A，过点 A 作抛物线的一条割线交抛物线于 B, C 两点，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-4-26-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `如图 3-4-6 所示, 易知 $A\\left(-\\frac{p}{2},0\\right), F\\left(\\frac{p}{2},0\\right)$ . 设割线 AC 的倾斜角为 $\\theta$ , 则直线 AC 的参数方程为

![](images/80e16cb34c732b80e2cf83db627b5f2403daecce70590f129ae16fa96053e1f9.jpg)

$$
\\left\\{ \\begin{array}{l l} x = - \\frac {p}{2} + t \\mathrm{cos} \\theta , \\\\ y = t \\mathrm{sin} \\theta \\end{array} \\right. (t \\text {为参数}).
$$

将其代入 $y^{2}=2px$ 中，化简得 $t^{2}\\sin^{2}\\theta-2pt\\cos\\theta+p^{2}=0$ ，

由参数 t 的几何意义可知 $\\left|AB\\right|\\cdot\\left|AC\\right|=t_{1}t_{2}=\\frac{p^{2}}{\\sin^{2}\\theta}.$ ①

又直线 $MN$ 的倾斜角与直线 $AC$ 的倾斜角互补，所以 $MN$ 的倾斜角为 $\\pi -\\theta$ ，则直线 $MN$ 的参数方程为

$$
\\left\\{ \\begin{array}{l} x = \\frac {p}{2} + t \\cos (\\pi - \\theta), \\\\ y = t \\sin (\\pi - \\theta) \\end{array} \\right. (t \\text {为参数}), \\text {即} \\left\\{ \\begin{array}{l} x = \\frac {p}{2} - t \\cos \\theta , \\\\ y = t \\sin \\theta \\end{array} \\right. (t \\text {为参数}).
$$

将其代入 $y^{2}=2px$ 中，化简得 $t^{2}\\sin^{2}\\theta+2pt\\cos\\theta-p^{2}=0$ .

由参数 $t$ 的几何意义可知

$$
| F M | \\cdot | F N | = | t _ {1} \\cdot t _ {2} | = \\frac {p ^ {2}}{\\sin^ {2} \\theta}. \\tag {②}
$$

由①②得 $|FM|\\cdot|FN|=|AB|\\cdot|AC|$ .

又抛物线的离心率 e=1，故 $\\left|FM\\right|\\cdot\\left|FN\\right|=e^{2}\\left|AB\\right|\\cdot\\left|AC\\right|$ .

评注 本题结论可推广为：

若圆锥曲线的一条准线与对称轴的交点为点 A，过点 A 作圆锥曲线的一条割线交曲线于 B, C 两点，过相应焦点 F 作与割线的倾斜角互补的直线交圆锥曲线于 M, N 两点，则 $\\left|FM\\right| \\cdot \\left|FN\\right| = e^{2} \\left|AB\\right| \\cdot \\left|AC\\right|$ . 其中 e 为圆锥曲线的离心率.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-4-27",
    topicId: "topic-sec-3-4",
    title: `已知椭圆 E: x^2a^2 + y^2b^2 = 1 (a > b > c) 的两个焦点与`,
    content: `已知椭圆 $E: \\frac{x^{2}}{a^{2}} + \\frac{y^{2}}{b^{2}} = 1 (a > b > c)$ 的两个焦点与短轴的一个端点是直角三角形的三个顶点，直线 $l: y = -x + 3$ 与椭圆 E 有且只有一个公共点 T.
(1) 求椭圆 E 的方程及点 T 的坐标.

(2) 设 O 是坐标原点, 直线 $l'$ 平行于 OT, 与椭圆 E 交于不同的两点 A, B, 且与直线 l 交于点 P. 证明: 存在常数 $\\lambda$ , 使得 $|PT|^{2} = \\lambda |PA| \\cdot |PB|$ , 并求 $\\lambda$ 的值.`,
    preview: `已知椭圆 的两个焦点与短轴的一个端点是直角三角形的三个顶点，直线 l: y = -x + 3 与椭圆 E 有且只有一个公共点 T. (1) 求椭圆 E 的方程及`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-4-27-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)椭圆 E 的方程为 $\\frac{x^{2}}{6}+\\frac{y^{2}}{3}=1, T(2,1)$ ，过程略.

(2) 设 $P(x_{1}, y_{1})$ ，由题意设 $l'$ 的参数方程为 $\\left\\{\\begin{aligned} x &= x_{1} + t \\cos \\theta, \\\\ y &= y_{1} + t \\sin \\theta \\end{aligned}\\right.$ (t 为参数).

代入椭圆 E 的方程, 整理得

$$
(\\cos^ {2} \\theta + 2 \\sin^ {2} \\theta) t ^ {2} + (2 x _ {1} \\cos \\theta + 4 y _ {1} \\sin \\theta) t + x _ {1} ^ {2} + y _ {1} ^ {2} - 6 = 0.
$$

又直线 $l'$ 与椭圆 E 交于两点 A, B, 这个方程必有两个实根 $t_{1}, t_{2}$ ,

所以 $t_1t_2 = \\frac{x_1^2 + y_1^2 - 6}{\\cos^2\\theta + 2\\sin^2\\theta},$

故 $|PA|\\cdot|PB|=|t_{1}t_{2}|=\\frac{|x_{1}^{2}+y_{1}^{2}-6|}{\\cos^{2}\\theta+2\\sin^{2}\\theta}.$

同理, 设 l 的参数方程为 $\\left\\{\\begin{aligned} x &= x_{1} + t \\cos \\alpha, \\\\ y &= y_{1} + t \\sin \\alpha \\end{aligned}\\right.$ (t 为参数).

代入椭圆 E 的方程, 整理得

$$
(\\cos^ {2} \\alpha + 2 \\sin^ {2} \\alpha) t ^ {2} + (2 x _ {1} \\cos \\alpha + 4 y _ {1} \\sin \\alpha) t + x _ {1} ^ {2} + y _ {1} ^ {2} - 6 = 0.
$$

又直线 l 与椭圆 E 有且只有一个点 T，这个方程必有两个相等实根 $t_{3}=t_{4}$ ，

所以 $t_3t_4 = t_3^2 = \\frac{x_1^2 + y_1^2 - 6}{\\cos^2\\alpha + 2\\sin^2\\alpha},$

故 $|PT|^2 = |t_3t_4| = \\frac{|x_1^2 + y_1^2 - 6|}{\\cos^2\\alpha + 2\\sin^2\\alpha}.$

故 $\\lambda=\\frac{|PT|^{2}}{|PA|\\cdot|PB|}=\\frac{\\cos^{2}\\theta+2\\sin^{2}\\theta}{\\cos^{2}\\alpha+2\\sin^{2}\\alpha}$

而 $T(2,1)$ , $\\alpha=135^{\\circ}$ ,

故 $\\cos^{2}\\theta=\\frac{4}{5},\\sin^{2}\\theta=\\frac{1}{5},\\cos^{2}\\alpha=\\sin^{2}\\alpha=\\frac{1}{2}.$

所以， $\\lambda=\\frac{4}{5}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-5-1",
    topicId: "topic-sec-3-5",
    title: `如图 3-5-1 所示, 设 F_1, F_2 分别是椭圆`,
    content: `如图 3-5-1

![](images/458fd74c96a324ad76def881da7b18de82e89cdccd30e134758065d914df10d2.jpg) 所示, 设 $F_{1}, F_{2}$ 分别是椭圆 $\\frac{x^{2}}{a^{2}} + \\frac{y^{2}}{b^{2}} = 1 (a > b > 0)$ 的左右焦点, 若在直线 $x = \\frac{a^{2}}{c}$ 上存在点 P 使线段 $PF_{1}$ 的中垂线过点 $F_{2}$ , 则此椭圆的离心率的取值范围为 \\_\\_\\_\\_.`,
    preview: `如图 3-5-1 所示, 设 F_1, F_2 分别是椭圆 的左右焦点, 若在直线 x = a^2c 上存在点 P 使线段 PF_1 的中垂线过点 F_2 ,`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-5-1-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `$\\left|PF_{2}\\right|=\\left|F_{1}F_{2}\\right|=2c,\\left|PF_{2}\\right|\\geqslant\\left|F_{2}Q\\right|$

所以 $2c \\geqslant \\frac{a^2}{c} - c$ ，所以 $3c^2 \\geqslant a^2$

所以 $e^{2}=\\frac{c^{2}}{a^{2}}\\geqslant\\frac{1}{3}$ ，所以 $e\\in\\left[\\frac{\\sqrt{3}}{3},1\\right)$ .

评注 若直接计算会异常烦琐. 运用“直角三角形斜边长大于直角边长”则可轻松解决. 此类题的核心在于将图中直线构成的封闭图形剥离出来, 再运用平面几何知识处理, 最后代入圆锥曲线的数值中计算, 从而轻松解决原题.

![](images/08975100df1f6429a7ba111ef6e9f36590aa265234f2cc10f0ffe8c0f0e820cc.jpg)

图3-5-1`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-5-2",
    topicId: "topic-sec-3-5",
    title: `如图 3-5-2 所示, 已知 F_1, F_2 是双曲线`,
    content: `如图 3-5-2

![](images/458fd74c96a324ad76def881da7b18de82e89cdccd30e134758065d914df10d2.jpg) 所示, 已知 $F_{1}, F_{2}$ 是双曲线 $\\frac{x^{2}}{a^{2}} - \\frac{y^{2}}{b^{2}} = 1 (a > 0, b > 0)$ 的左、右焦点, 点 P 在双曲线上且不与顶点重合, 过 $F_{1}$ 作 $\\angle F_{1} PF_{2}$ 的角平分线的垂线, 垂足为 A, 若 $|OA| = b$ , 则双曲线的离心率为 \\_\\_\\_\\_.`,
    preview: `如图 3-5-2 所示, 已知 F_1, F_2 是双曲线 的左、`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-5-2-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `如图 3-5-2 所示, 延长 $F_{1}A$ 交 $F_{2}P$ 于点 Q, 易知, $AQ = F_{1}A, PQ = PF_{1}$ .

![](images/458fd74c96a324ad76def881da7b18de82e89cdccd30e134758065d914df10d2.jpg)

图3-5-2

因为 $\\frac{|F_1O|}{|F_1F_2|} = \\frac{|F_1A|}{|F_1Q|}$ ，所以 $\\triangle F_1F_2Q\\sim \\triangle F_1OA$

因为 $|F_{2}P|-|F_{1}P|=|F_{2}Q|$ ,

所以 2a=2b，所以 $e=\\frac{c}{a}=\\sqrt{\\frac{a^{2}+b^{2}}{a^{2}}}=\\sqrt{2}$ .

评注 本题运用了相似三角形知识,解题过程巧妙而精美.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-5-3",
    topicId: "topic-sec-3-5",
    title: `设椭圆 x^225+y^216=1 上一点 P`,
    content: `设椭圆 $\\frac{x^{2}}{25}+\\frac{y^{2}}{16}=1$ 上一点 P 到左准线的距离为 10，F 是该椭圆的左焦点，若点 M 满足 $\\overrightarrow{OM}=\\frac{1}{2}(\\overrightarrow{OP}+\\overrightarrow{OF})$ ，则 $|\\overrightarrow{OM}|=$ \\_\\_\\_\\_ .`,
    preview: `设椭圆 x^225+y^216=1 上一点 P 到左准线的距离为 10，F 是该椭圆的左焦点，若点 M 满足 →OM=1/2(→OP+→OF) ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-5-3-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `如图 3-5-3 所示, 设 $F'$ 为椭圆的右焦点, 连接 $PF'$ .

因为 $\\overrightarrow{OM}=\\frac{1}{2}(\\overrightarrow{OP}+\\overrightarrow{OF})$ ，所以M是线段PF的中点，

从而 OM 为 $\\triangle PFF'$ 的中位线，则 $\\left|\\overrightarrow{OM}\\right|=\\frac{1}{2}\\left|\\overrightarrow{PF'}\\right|$ .

又因点 P 到椭圆左准线的距离为 10，椭圆离心率 $e=\\frac{3}{5}$ ，

所以 $|PF| = 10 \\times \\frac{3}{5} = 6$ ，则 $|PF'| = 10 - 6 = 4$ ，故 $|\\overrightarrow{OM}| = \\frac{1}{2} |\\overrightarrow{PF'}| = 2$ .

![](images/e023cf2c3c6130abcee565967faa046bbb450ff705c09f174a6d2b49f79b38da.jpg)
图3-5-3

评注 本解法巧妙地利用了三角形中位线的性质,揭示了题目的本质.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-5-4",
    topicId: "topic-sec-3-5",
    title: `如图3-5-4所示`,
    content: `如图3-5-4所示，椭圆 $C: \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ 的顶点为 $A_1, A_2, B_1, B_2$ ，焦点为 $F_1, F_2, |A_1B_1| = \\sqrt{7}, S_{\\square A_1B_1A_2B_2} = 2S_{\\square B_1F_1B_2F_2}$
![](images/fcff834bd7ecb0f5d6916419603de2e4d5064f4bbd9aaaf93952cf4966467fab.jpg)

图3-5-4

(1)求椭圆 C 的方程；

(2)设 $n$ 是过原点的直线, $l$ 是与 $n$ 垂直相交于 $P$ 点、与椭圆相交于 $A, B$ 两点的直线, $|\\overrightarrow{OP}| = 1$ , 是否存在上述直线 $l$ 使 $\\overrightarrow{AP} \\cdot \\overrightarrow{PB} = 1$ 成立? 若存在, 求直线 $l$ 的方程. 若不存在, 请说明理由.`,
    preview: `如图3-5-4所示，椭圆 C: x^2/a^2 + y^2/b^2 = 1 的顶点为 A_1, A_2, B_1, B_2 ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-5-4-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1)由 $|A_{1}B_{1}|=\\sqrt{7}$ 知 $a^{2}+b^{2}=7$ ，①

由 $S_{\\square A_1B_1A_2B_2} = 2S_{\\square B_1F_1B_2F_2}$ 知 $a = 2c$ ，

又 $b^{2} = a^{2} - c^{2}$ ， ③

由①②③解得 $a^{2}=4, b^{2}=3$ ，故椭圆 C 的方程为

$$
\\frac {x ^ {2}}{4} + \\frac {y ^ {2}}{3} = 1.
$$

(2)`,
      },
      {
        id: "prob-sec-3-5-4-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `设 $A(x_{1},y_{1}), B(x_{2},y_{2})$ ，假设使 $\\overrightarrow{AP} \\cdot \\overrightarrow{PB}=1$ 成立的直线 l 存在，当 l 不垂直于 x 轴时，设 l 的方程为 $y=kx+m$ ，

由 l 与 n 垂直相交于 P 点且 $\\left|\\overrightarrow{OP}\\right|=1$ 得 $\\frac{\\left|m\\right|}{\\sqrt{1+k^{2}}}=1$ ，即 $m^{2}=k^{2}+1$ ，

因为 $\\overrightarrow{AP}\\cdot\\overrightarrow{BP}=1,\\left|\\overrightarrow{OP}\\right|=1,$

所以 $\\overrightarrow{OA}\\cdot\\overrightarrow{OB}=(\\overrightarrow{OP}+\\overrightarrow{PA})(\\overrightarrow{OP}+\\overrightarrow{PB})=1+0+0-1=0$ ，即 $x_{1}x_{2}+y_{1}y_{2}=0$ ，

将 $y=kx+m$ 代入椭圆方程, 得 $(3+4k^{2})x^{2}+8kmx+(4m^{2}-12)=0$ ,

由求根公式可得 $x_{1} + x_{2} = \\frac{-8km}{3 + 4k^{2}}$ ， ④

$$
x _ {1} x _ {2} = \\frac {4 m ^ {2} - 1 2}{3 + 4 k ^ {2}}, \\tag {⑤}
$$

$$
\\begin{array}{l} 0 = x _ {1} x _ {2} + y _ {1} y _ {2} = x _ {1} x _ {2} + (k x _ {1} + m) (k x _ {2} + m) = x _ {1} x _ {2} + k ^ {2} x _ {1} x _ {2} + k m (x _ {1} + x _ {2}) + m ^ {2} \\\\ = (1 + k _ {2}) x _ {1} x _ {2} + k m \\left(x _ {1} + x _ {2}\\right) + m ^ {2}, \\\\ \\end{array}
$$

将④⑤代入上式并化简得 $(1+k^{2})(4m^{2}-12)-8k^{2}m^{2}+m^{2}(3+4k^{2})=0.$ ⑥

将 $m^{2}=1+k^{2}$ 代入⑥并化简得 $-5(k^{2}+1)=0$ ，矛盾。即此时直线 l 不存在。

当 l 垂直于 x 轴时，满足 $\\left|\\overrightarrow{OP}\\right|=1$ 的直线 l 的方程为 x=1 或 x=-1，

当 $x = 1$ 时， $A, B, P$ 的坐标分别为 $\\left(1, \\frac{3}{2}\\right), \\left(1, -\\frac{3}{2}\\right), (1, 0)$ ，

所以 $\\overrightarrow{AP}=\\left(0,-\\frac{3}{2}\\right),\\overrightarrow{PB}=\\left(0,-\\frac{3}{2}\\right)$ ,

所以 $\\overrightarrow{AP} \\cdot \\overrightarrow{PB} = \\frac{9}{4} \\neq 1$ .

当 x=-1 时，同理可得 $\\overrightarrow{AP} \\cdot \\overrightarrow{PB} \\neq 1$ ，矛盾，即此时直线 l 也不存在.

综上可知，使 $\\overrightarrow{AP}\\cdot\\overrightarrow{PB}=1$ 成立的直线l不存在.`,
      },
      {
        id: "prob-sec-3-5-4-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `设 $P(x_0, y_0), A(x_1, y_1), B(x_2, y_2)$ ，可知

$\\overrightarrow{AP} \\cdot \\overrightarrow{PB} = |\\overrightarrow{AP}| |\\overrightarrow{PB}| = 1 = |\\overrightarrow{OP}|^2$ ，在 $\\triangle OAB$ 中，有 $AP \\cdot PB = OP^2$ ，由直角三角形中射影定理的逆定理，可知 $\\triangle OAB$ 是直角三角形，于是由 $OA \\perp OB$ ，得 $\\overrightarrow{OA} \\cdot \\overrightarrow{OB} = 0$ ，因此， $x_1 x_2 + y_1 y_2 = 0$ .

又直线 $l \\perp n, |\\overrightarrow{OP}| = 1$ ，则 l 是单位圆的切线，其方程为 $x_{0}x + y_{0}y = 1$ .

由 $\\left\\{\\begin{aligned}x_{0}x+y_{0}y&=1\\\\ x_{0}^{2}+y_{0}^{2}&=1,\\\\ \\frac{x^{2}}{4}+\\frac{y^{2}}{3}&=1\\end{aligned}\\right.$ 得 $(3+x_{0}^{2})x^{2}-8x_{0}x+12x_{0}^{2}-8=0,$

由韦达定理，得 $x_{1} + x_{2} = \\frac{8x_{0}}{3 + x_{0}^{2}}, x_{1}x_{2} = \\frac{12x_{0}^{2} - 8}{3 + x_{0}^{2}}.$

所以 $y_{1}y_{2} = \\frac{1 - x_{0}x_{1}}{y_{0}}\\cdot \\frac{1 - x_{0}x_{2}}{y_{0}} = \\frac{1}{y_{0}^{2}} [1 - x_{0}(x_{1} + x_{2}) + x_{0}^{2}x_{1}x_{2}]$

$$
= \\frac {3 - 1 2 x _ {0} ^ {2}}{3 + x _ {0} ^ {2}}.
$$

由此，得 $x_{1}x_{2} + y_{1}y_{2} = \\frac{-5}{3 + x_{0}^{2}} < 0$ ，这与 $x_{1}x_{2} + y_{1}y_{2} = 0$ 矛盾.

所以,所求的直线 l 不存在.`,
      },
      {
        id: "prob-sec-3-5-4-sol-4",
        title: `解法二`,
        method: "geometric",
        steps: [],
        explanation: `根据 $AP \\cdot PB = OP^{2}$ , 借助平面几何的知识“直角三角形射影定理的逆定理”得出 $OA \\perp OB$ , 从而 $x_{1}x_{2} + y_{1}y_{2} = 0$ , 简化了计算, 使原问题得以巧妙解答.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-5-5",
    topicId: "topic-sec-3-5",
    title: `AB 是通过圆锥曲线的一个焦点 F 的一条弦`,
    content: `AB 是通过圆锥曲线的一个焦点 F 的一条弦，A, B 在焦点 F 相应准线 l 上的射影分别为 $A_{1}, B_{1}$ ，设 $A_{1}F, B_{1}F$ 的中点分别为 M, N，则直线 AM 与 BN 的交点 P 一定在准线 l 上.`,
    preview: `AB 是通过圆锥曲线的一个焦点 F 的一条弦，A, B 在焦点 F 相应准线 l 上的射影分别为 A_1, B_1 ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-5-5-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `如图 3-5-5 所示, 设 $A_{1}F, B_{1}F$ 的延长线分别与 $B_{1}B, A_{1}A$ 的延长线交于 C, D, 圆锥曲线的离心率为 e,

则 $\\frac{|FA|}{|AA_1|} = \\frac{|FB|}{|BB_1|} = e$ ，即 $\\frac{|FA|}{|FB|} = \\frac{|AA_1|}{|BB_1|}$ ①

又由 $AA_{1} \\parallel BB_{1}$ ，得 $\\frac{|FA|}{|FB|} = \\frac{|AA_{1}|}{|BC|}$ . ②

![](images/8b4a534b9bcec0f0a8ec46a316f28eba2f0fd158f1537944d4c11cc612658e06.jpg)

图3-5-5

由①②得 $|BB_{1}|=|BC|$ ，即B是 $B_{1}C$ 的中点.

而 N 是 $FB_{1}$ 的中点，故 $BN \\parallel CF$ ，即 $BN \\parallel CA_{1}$ ，

所以直线 BN 过 $A_{1}B_{1}$ 的中点.

同理, 直线 AM 过 $A_{1}B_{1}$ 的中点. 因此直线 AM 与 BN 的交点 P 一定在准线 l 上.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-5-6",
    topicId: "topic-sec-3-5",
    title: `如图 3-5-6 所示, 抛物线 C: x^2 = 2py`,
    content: `如图 3-5-6 所示, 抛物线 $C: x^{2} = 2py (p > 0)$ 的焦点为 F, 以 $A(x_{1}, y_{1}) (x_{1} \\geqslant 0)$ 为直角顶点的等腰直角 $\\triangle ABC$ 的三个顶点 A, B, C 均在抛物线 C 上.
(1) 过 $Q(0, -3)$ 作抛物线 C 的切线 l，切点为 R，点 F 到切线 l 的距离为 2，求抛物线 C 的方程；

![](images/d19e035fd6fa16aaaf403effafb8503cb4c8afc29254de62d017ab14436b671d.jpg)

图3-5-6

(2) 求 $\\triangle ABC$ 面积的最小值.`,
    preview: `如图 3-5-6 所示, 抛物线 C: x^2 = 2py (p > 0) 的焦点为 F, 以 A(x_1, y_1) (x_1 ≥ 0) 为直角顶`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-5-6-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1)设过点 $Q(0,-3)$ 的抛物线的切线方程 y=kx-3,

代入抛物线方程得 $x^{2}-2p kx+6p=0$ ，

有 $\\Delta=4p^{2}k^{2}-24p=0$ 得 $pk^{2}=6$ ，

焦点到切线的距离为 $d=\\frac{\\left|\\frac{p}{2}+3\\right|}{\\sqrt{k^{2}+1}}=2$ ,

化简得 $(p+6)^{2}=16(k^{2}+1)$ ，所以 $(p+6)=\\frac{16}{p}$ ，解得p=2，

所以抛物线的方程为 $x^{2}=4y$ .

(2)`,
      },
      {
        id: "prob-sec-3-5-6-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `设直线 $l_{AB}: y - y_{1} = k(x - x_{1}) (k > 0)$ ,

联立 $\\left\\{\\begin{aligned}y-y_{1}&=k(x-x_{1}),\\\\ x^{2}&=2py,\\end{aligned}\\right.$ 得 $x^{2}-2pkx+2p(kx_{1}-y_{1})=0,$

所以 $x_{1} + x_{B} = 2pk$ ，所以 $x_{B} = 2pk - x_{1}$ ，同理 $x_{C} = -\\frac{2p}{k} -x_{1}$

因为 $|AB| = |AC|$ ，所以 $\\sqrt{1 + k^2} |x_B - x_1| = \\sqrt{1 + \\frac{1}{k^2}} |x_C - x_1|$ ，即 $x_1 = \\frac{p(k^2 - \\frac{1}{k})}{k + 1}$ ，

所以 $|AB| = \\sqrt{1 + k^2} |x_B - x_1| = \\sqrt{1 + k^2} (2pk - 2x_1)$

$$
= 2 p \\frac {\\sqrt {1 + k ^ {2}} (k ^ {2} + 1)}{k (k + 1)} \\geqslant 2 \\sqrt {2} p,
$$

所以 $\\triangle ABC$ 面积的最小值为 $4p^{2}$ .`,
      },
      {
        id: "prob-sec-3-5-6-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `如图 3-5-7 所示，

设 $B\\left(x_{1} + a,\\frac{x_{1}^{2}}{2p} +b\\right),C\\left(x_{1} - b,\\frac{x_{1}^{2}}{2p} +a\\right),$

点 B, C 在抛物线上, 有 $\\left\\{\\begin{aligned}(x_{1}-b)^{2}&=x_{1}^{2}+2pa,\\\\ (x_{1}+a)^{2}&=x_{1}^{2}+2pb,\\end{aligned}\\right.$

消去 $x_{1}$ ，得 $ab(a + b) = 2p(a^{2} + b^{2})$

$$
2 p (a ^ {2} + b ^ {2}) = a b (a + b) \\leqslant \\frac {a ^ {2} + b ^ {2}}{2} \\cdot 2 \\sqrt {\\frac {a ^ {2} + b ^ {2}}{2}},
$$

解得 $S = \\frac{a^2 + b^2}{2} \\geqslant 4p^2$ .

![](images/f9a25b2389c1ab9155bba9720882146ae6216243592c8c7dba877b52f56ef4b1.jpg)

图3-5-7`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-5-7",
    topicId: "topic-sec-3-5",
    title: `已知 F_1, F_2 为椭圆 x^2a^2 + y^2b^2 = 1 (a > b > 0`,
    content: `已知 $F_{1}, F_{2}$ 为椭圆 $\\frac{x^{2}}{a^{2}} + \\frac{y^{2}}{b^{2}} = 1 (a > b > 0)$ 的两个焦点， $M$ 是椭圆上与 $F_{1}, F_{2}$ 不共线的任意一点， $I$ 是 $\\triangle MF_{1}F_{2}$ 的内心，延长 $MI$ 交 $F_{1}F_{2}$ 与点 $N$ ，求 $\\frac{|MI|}{|NI|}$ .`,
    preview: `已知 F_1, F_2 为椭圆 的两个焦点， M 是椭圆上与 F_1, F_2 不共线的任意一点， I 是 △ MF_1F_2 的内心，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-5-7-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `因为 $I$ 是 $\\triangle MF_{1}F_{2}$ 的内心, 所以 $MN$ 是 $\\angle F_{1}MF_{2}$ 的角平分线,

所以 $\\frac{|MF_1|}{|MF_2|} = \\frac{|NF_1|}{|NF_2|}$

所以 $\\frac{|MF_1| + |MF_2|}{|MF_2|} = \\frac{|NF_1| + |NF_2|}{|NF_2|},$

所以 $\\frac{2a}{|MF_2|} = \\frac{2c}{|NF_2|}$ ，所以 $\\frac{|MF_2|}{|NF_2|} = \\frac{a}{c}$ .

又因为 $IF_{2}$ 为 $\\angle NF_{2}M$ 的角平分线，所以 $\\frac{|MI|}{|NI|} = \\frac{|MF_{2}|}{|NF_{2}|} = \\frac{a}{c}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-5-8",
    topicId: "topic-sec-3-5",
    title: `过圆锥曲线 E 的一个焦点 F`,
    content: `过圆锥曲线 $E$ 的一个焦点 $F$ 的一直线(不与焦点所在的对称轴重合)交 $E$ 于不同两点 $A, B$ , 这两点和 $E$ 上任一点 $C$ 的连线 $AC, BC$ 分别和 $F$ 的对应准线 $l$ 交于 $M, N$ , 则以 $MN$ 为直径的圆必过焦点 $F$ .`,
    preview: `过圆锥曲线 E 的一个焦点 F 的一直线(不与焦点所在的对称轴重合)交 E 于不同两点 A, B , 这两点和 E 上任一点 C 的连线 AC, BC 分别和`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-5-8-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `如图 3-5-8 所示, 连接 MF, NF, 并作 $AA_{1} \\perp l, BB_{1} \\perp l, CC_{1} \\perp l, A_{1}, B_{1}, C_{1}$ 为垂足, D 为 CF 延长线上一点.

因为 $\\frac{|FA|}{|AA_{1}|}=\\frac{|FC|}{|CC_{1}|}=e(E$ 的离心率 $)$ ,

所以 $\\frac{|AA_1|}{|CC_1|} = \\frac{|FA|}{|FC|}$

又因为 $AA_{1} \\parallel CC_{1}$ ，所以 $\\frac{|AA_{1}|}{|CC_{1}|} = \\frac{|MA|}{|MC|}$ ，故 $\\frac{|MA|}{|MC|} = \\frac{|FA|}{|FC|}$ .

由三角形外角平分线性质定理的逆定理, 得 MF 平分 $\\angle AFD$ .

同理，NF平分∠BFD，且 $\\angle AFD+\\angle BFD=180^{\\circ}$

因此 $\\angle MFN=90^{\\circ}$ ，即以MN为直径的圆过焦点F.

![](images/d25ac42b4b86c094759cde182e53afe5072c7d8a069552e188c32bf61cb22e64.jpg)

图3-5-8`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-5-9",
    topicId: "topic-sec-3-5",
    title: `如图 3-5-9 所示, 已知直线 x - 2y + 2`,
    content: `如图 3-5-9 所示, 已知直线 $x - 2y + 2 = 0$ 经过椭圆 $C: \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1 (a > b > 0)$ 的左顶点 $A$ 和上顶点 $D$ , 椭圆 $C$ 的右顶点为 $B, S$ 为椭圆 $C$ 上位于 $x$ 轴上方的动点, 直线 $AS, BS$ 与直线 $l: x = \\frac{10}{3}$ 分别交于 $M, N$ 两点.
(1)求椭圆C的方程；

(2)求线段MN的长度的最小值；

(3) 当线段 MN 的长度最小时, 在椭圆 C 上是否存在点 T, 使得 $\\triangle TSB$ 的面积为 $\\frac{1}{5}$ ? 若存在, 确定点 T 的个数; 若不存在, 说明理由.

![](images/0bff0a61fbfc3ddad7b8764e84d0d518fbf041ca29f69d6a952eb3e0cce3caf9.jpg)

图3-5-9

解析 (1) $\\frac{x^2}{4} + y^2 = 1$ . (过程略)

(2)如图3-5-10所示,过点S作SE垂直于x轴,

设 $S(x_0,y_0)$ ，显然 $SE / / l$ ，则有 $\\frac{SE}{MI} = \\frac{AE}{AI},\\frac{SE}{NI} = \\frac{BE}{BI}$

即 $\\frac{y_{0}}{MI}=\\frac{2+x_{0}}{2+\\frac{10}{3}},\\frac{y_{0}}{NI}=\\frac{2-x_{0}}{\\frac{10}{3}-2}.$

所以 $\\frac{y_0^2}{MI\\cdot NI} = \\frac{2^2 - x_0^2}{\\left(\\frac{10}{3} - 2\\right)\\left(\\frac{10}{3} + 2\\right)}.$

![](images/96a85d9b7519c0b2ccdb8cdc915cfd625dde8bbb8ed042eab6519a68f2fede60.jpg)

图3-5-10

又由 $\\frac{x_{0}^{2}}{4}+y_{0}^{2}=1$ ，即 $y_{0}^{2}=1-\\frac{x_{0}^{2}}{4}=\\frac{4-x_{0}^{2}}{4}$ ，得 $MI\\cdot NI=\\frac{16}{9}$

所以由基本不等式得 $MI + NI \\geqslant 2\\sqrt{MI \\cdot NI} = \\frac{8}{3}$ ,

当且仅当 $MI = NI = \\frac{4}{3}$ 时取等号，即线段 $MN$ 的长度的最小值为 $\\frac{8}{3}$ .

(3)由(2)可得 $N\\left(\\frac{10}{3}, - \\frac{4}{3}\\right)$ , 此时 $BS$ 的方程为 $x + y - 2 = 0, S\\left(\\frac{6}{5}, \\frac{4}{5}\\right)$ , 所以 $|BS| = \\frac{4\\sqrt{2}}{5}$ , 要使椭圆 $C$ 上存在点 $T$ , 使得 $\\triangle TSB$ 的面积等于 $\\frac{1}{5}$ , 只需 $T$ 到直线 $BS$ 的距离等于 $\\frac{\\sqrt{2}}{4}$ , 所以 $T$ 在平行于 $BS$ 且与 $BS$ 距离等于 $\\frac{\\sqrt{2}}{4}$ 的直线 $l'$ 上, 设直线 $l': x + y + t = 0$ , 则由 $\\frac{|t + 2|}{\\sqrt{2}} = \\frac{\\sqrt{2}}{4}$ , 解得 $t = -\\frac{3}{2}$ 或 $t = -\\frac{5}{2}$ . 经检验 $t = -\\frac{5}{2}$ 不符合, 故只有两个.`,
    preview: `如图 3-5-9 所示, 已知直线 x - 2y + 2 = 0 经过椭圆 的左顶点 A 和上顶点 D , 椭圆 C 的右顶点为 B, S 为椭圆 C 上位于`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-5-9-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `评注 第(2)问巧妙运用平行线分线段成比例,找出线段与线段的相等关系,从而得到结论,大大减小了运算量,此解法体现的另一思路是圆锥曲线中与顶点相关的线段可以考虑将圆锥曲线的方程变形,然后用平方差公式得到相关比例,使解题的运算量大大减小.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-5-10",
    topicId: "topic-sec-3-5",
    title: `设圆 x^2 + y^2 - 4x - 5 = 0 的弦`,
    content: `设圆 $x^{2} + y^{2} - 4x - 5 = 0$ 的弦 $AB$ 的中点为 $Q(3,1)$ ，直线 $AB$ 交 $x$ 轴于点 $P$ ，求 $|PA| \\cdot |PB|$ .`,
    preview: `设圆 x^2 + y^2 - 4x - 5 = 0 的弦 AB 的中点为 Q(3,1) ，直线 AB 交 x 轴于点 P ，求 |PA| · |PB| .`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-5-10-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `由已知得圆心 $C(2,0)$ ，因为 $Q(3,1)$ 为弦 AB 的中点，所以 $CQ \\perp AB$ .

又因为 $k_{CQ}=1$ ，所以 $k_{AB}=-1$ ，可得直线 AB 的方程为 $x+y-4=0$ ，

所以直线 AB 交 x 轴于点 $P(4,0)$ .

又因为圆 C 与 x 轴的交点为 $M(-1,0)$ , $N(5,0)$ ，所以 $|PM|=5$ , $|PN|=1$ ,

由圆的相交弦定理得 $|PA|\\cdot |PB| = |PM|\\cdot |PN| = 5.$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-5-11",
    topicId: "topic-sec-3-5",
    title: `已知椭圆 x^2/16 +y^2/4 = 1`,
    content: `已知椭圆 $\\frac{x^2}{16} +\\frac{y^2}{4} = 1$ 的左右焦点分别为 $F_{1}$ 与 $F_{2}$ ，点 $P$ 在直线 $l:x - \\sqrt{3} y + 8$ $+2\\sqrt{3} = 0$ 上，当 $\\angle F_1PF_2$ 取最大值时，求 $\\frac{|PF_1|}{|PF_2|}$ 的值.`,
    preview: `已知椭圆 x^2/16 +y^2/4 = 1 的左右焦点分别为 F_1 与 F_2 ，点 P 在直线 l:x - √3 y + 8 +2√3 = 0 上，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-5-11-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `由平面几何知,要使 $\\angle F_{1}PF_{2}$ 最大,则过 $F_{1},F_{2},P$ 三点的圆必定和直线 $l$ 相切于 $P$ 点,设直线 $l$ 交 $x$ 轴于点 $A(-8-2\\sqrt{3},0)$ ,则 $\\angle APF_{1}=\\angle AF_{2}P$ ,即 $\\triangle APF_{1}\\sim\\triangle AF_{2}P$ ,即 $\\frac{|PF_{1}|}{|PF_{2}|}=\\frac{|AP|}{|AF_{2}|}$ .①

又由圆幂定理，得 $|AP|^2 = |AF_1|\\cdot |AF_2|$ ②

而 $F_{1}(-2\\sqrt{3},0)$ , $F_{2}(2\\sqrt{3},0)$ , $A(-8-2\\sqrt{3},0)$ ，从而有 $\\left|AF_{1}\\right|=8$ , $\\left|AF_{2}\\right|=8+4\\sqrt{3}$ ，代入①②得 $\\frac{\\left|PF_{1}\\right|}{\\left|PF_{2}\\right|}=\\sqrt{\\frac{\\left|AF_{1}\\right|}{\\left|AF_{2}\\right|}}=\\sqrt{\\frac{8}{8+4\\sqrt{3}}}=\\sqrt{4-2\\sqrt{3}}=\\sqrt{3}-1.$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-5-12",
    topicId: "topic-sec-3-5",
    title: `已知斜率为1的直线 l 与双曲线 C: x^2/a^2 - y^2/b^2 = 1 (a > 0, b > 0) 相`,
    content: `已知斜率为1的直线 $l$ 与双曲线 $C: \\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1 (a > 0, b > 0)$ 相交于 $B, D$ 两点，且 $BD$ 的中点 $M(1,3)$ .
(1) 求 C 的离心率；

(2) 设 C 的右顶点为 A, 右焦点为 $F, |DF| \\cdot |BF| = 17$ , 证明: 过 A、B、D 三点的圆与 x 轴相切.

(1)解法一 由题设知, l 的方程为 $y = x + 2$ , 代入 C 的方程, 并化简得

$(b^{2}-a^{2})x^{2}-4a^{2}x-4a^{2}-a^{2}b^{2}=0$ , 设 $B(x_{1},y_{1})$ 、 $D(x_{2},y_{2})$ ,

则 $x_{1} + x_{2} = \\frac{4a^{2}}{b^{2} - a^{2}}, x_{1}x_{2} = \\frac{4a^{2} + a^{2}b^{2}}{a^{2} - b^{2}}.$

由 $M(1,3)$ 为 $BD$ 的中点知 $\\frac{x_1 + x_2}{2} = 1$ ，故 $\\frac{1}{2} \\times \\frac{4a^2}{b^2 - a^2} = 1$ ，即 $b^2 = 3a^2$ . ①

故 $c = \\sqrt{a^2 + b^2} = 2a$ ，所以双曲线 $C$ 的离心率 $e = \\frac{c}{a} = 2.$`,
    preview: `已知斜率为1的直线 l 与双曲线 相交于 B, D 两点，且 BD 的中点 M(1,3) . (1) 求 C 的离心率； (2) 设 C 的右顶点为 A, 右焦`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-5-12-sol-0",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `设 $B(x_{1},y_{1}), D(x_{2},y_{2})$ ，则 $\\frac{x_1^2}{a^2} - \\frac{y_1^2}{b^2} = 1, \\frac{x_2^2}{a^2} - \\frac{y_2^2}{b^2} = 1$ ，两式相减并整理，得

$\\frac{b^2}{a^2} = \\frac{y_1 + y_2}{x_1 + x_2}\\cdot \\frac{y_1 - y_2}{x_1 - x_2} = \\frac{6}{2}\\times 1 = 3$ ，由此，得 $c^2 -a^2 = 3a^2$ ，所以解得 $e = \\frac{c}{a} = 2.$

(2)`,
      },
      {
        id: "prob-sec-3-5-12-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `由①知,C的方程为: $3x^{2}-y^{2}=3a^{2},A(a,0),F(2a,0)$ ,

$x_{1} + x_{2} = 2, x_{1}x_{2} = \\frac{4a^{2} + a^{2}b^{2}}{a^{2} - b^{2}} < 0$ ，故不妨设 $x_{1} \\leqslant -1, x_{2} \\geqslant a,$

$$
\\begin{array}{l} | B F | = \\sqrt {(x _ {2} - 2 a) ^ {2} + y _ {1} ^ {2}} = \\sqrt {(x _ {2} - 2 a) ^ {2} + 3 x _ {1} ^ {2} - 3 a ^ {2}} = a - 2 x _ {1}, \\\\ | F D | = \\sqrt {(x _ {2} - 2 a) ^ {2} + y _ {2} ^ {2}} = \\sqrt {(x _ {2} - 2 a) ^ {2} + 3 x _ {2} ^ {2} - 3 a ^ {2}} = 2 x _ {2} - a, \\\\ | B F | \\cdot | F D | = (a - 2 x _ {1}) (2 x _ {2} - a) \\\\ = - 4 x _ {1} x _ {2} + 2 a (x _ {1} + x _ {2}) - a ^ {2} = 5 a ^ {2} + 4 a + 8, \\\\ \\end{array}
$$

又 $|BF|\\cdot |FD| = 17$ ，故 $5a^{2} + 4a + 8 = 17$ ，解得 $a = 1$ ，或 $a = -\\frac{9}{5}$ （舍去），

故 $|BD| = \\sqrt{2} |x_1 - x_2| = \\sqrt{2}\\sqrt{(x_1 + x_2)^2 - 4x_1x_2} = 6,$

连接 MA，则由 $A(1,0)$ ， $M(1,3)$ 知 $|MA|=3$ ，从而 MA=MB=MD，且 $MA \\perp x$ 轴，

因此，以 $M$ 为圆心， $MA$ 为半径的圆经过 $A, B, D$ 三点，且在点 $A$ 处与 $x$ 轴相切，所以过 $A, B, D$ 三点的圆与 $x$ 轴相切.`,
      },
      {
        id: "prob-sec-3-5-12-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `过 A, B, D 的圆与 x 轴相切，则 A 应是切点，又 M 是弦 BD 的中点，可猜想 $MA \\perp Ox$ ，此时 $A(1,0)$ ，即 a = 1，且 $AB \\perp AD$ ，

事实上，当 $a = 1$ 时，设 $B(x_{1},y_{1}),D(x_{2},y_{2})$ ，由 $\\left\\{ \\begin{array}{l}y = x + 2,\\\\ 3x^{2} - y^{2} = 3 \\end{array} \\right.$ 得

$$
x _ {1} + x _ {2} = 2, x _ {1} x _ {2} = - \\frac {7}{2},
$$

$$
\\begin{array}{l} \\overrightarrow {A B} \\cdot \\overrightarrow {A D} = (x _ {1} - 1, y _ {1}) \\cdot (x _ {2} - 1, y _ {2}) = x _ {1} x _ {2} - (x _ {1} + x _ {2}) + 1 + (x _ {1} + 2) (x _ {2} + 2) \\\\ = 2 x _ {1} x _ {2} + (x _ {1} + x _ {2}) + 5 = - 7 + 2 + 5 = 0, \\\\ \\end{array}
$$

所以 $AB \\perp AD$ ，又 $MA \\perp Ox$ ，所以该圆以 BD 为直径，且与 x 轴相切于点 A，

评注 本题(1)的`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-5-13",
    topicId: "topic-sec-3-5",
    title: `如图 3-5-11 所示, 已知 m > 1, 直线 l:`,
    content: `如图 3-5-11 所示, 已知 m > 1, 直线 l: x - my - $\\frac{m^{2}}{2} = 0$ , 椭圆 $C: \\frac{x^{2}}{m^{2}} + y^{2} = 1$ , $F_{1}F_{2}$ 分别为椭圆 C 的左、右焦点.
![](images/618c7f6009ceeb686f5426c168b4f815f7a31102755f21b38dbe80aa19e7f1f9.jpg)

图3-5-11

(1) 当直线 l 过右焦点 $F_{2}$ 时, 求直线 l 的方程.

(2) 设直线 l 与椭圆 C 交于 A, B 两点, $\\triangle AF_{1}F_{2}, \\triangle BF_{1}F_{2}$ 的重心分别为 G, H. 若原点 O 在以线段 GH 为直径的圆内, 求实数 m 的取值范围.`,
    preview: `如图 3-5-11 所示, 已知 m > 1, 直线 l: x - my - m^22 = 0 , 椭圆 C: x^2{m^2} + y^2 = 1 , F_1`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-5-13-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1) 因为直线 $l: x - my - \\frac{m^{2}}{2} = 0$ 经过 $F_{2}(\\sqrt{m^{2}-1}, 0)$ ,

所以 $\\sqrt{m^2 - 1} = \\frac{m^2}{2}$ ，得 $m^2 = 2$

又因为 m>1，所以 $m=\\sqrt{2}$ ，

故直线 l 的方程为 $x - \\sqrt{2}y - 1 = 0$ .

(2)`,
      },
      {
        id: "prob-sec-3-5-13-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `设 $A(x_{1}, y_{1}), B(x_{2}, y_{2})$ ，由 $\\left\\{\\begin{aligned} x &= my + \\frac{m^{2}}{2}, \\\\ \\frac{x^{2}}{m^{2}} + y^{2} &= 1 \\end{aligned}\\right.$ 消去 x 得

$$
2 y ^ {2} + m y + \\frac {m ^ {2}}{4} - 1 = 0.
$$

由 $\\Delta = m^2 - 8\\left(\\frac{m^2}{4} - 1\\right) = -m^2 + 8 > 0,$

知 $m^2 < 8$ ，且有 $y_{1} + y_{2} = -\\frac{m}{2}, y_{1} \\cdot y_{2} = \\frac{m^{2}}{8} - \\frac{1}{2}$ .

由于 $F_{1}(-c,0)$ , $F_{2}(c,0)$ ，故 O 为 $F_{1}F_{2}$ 的中点.

由 $\\overrightarrow{AG} = 2\\overrightarrow{GO},\\overrightarrow{BH} = 2\\overrightarrow{HO}$ ，可知 $G\\left(\\frac{x_1}{3},\\frac{y_1}{3}\\right),H\\left(\\frac{x_2}{3},\\frac{y_2}{3}\\right),$

$$
| G H | ^ {2} = \\frac {(x _ {1} - x _ {2}) ^ {2}}{9} + \\frac {(y _ {1} - y _ {2}) ^ {2}}{9}.
$$

设 M 是 GH 的中点，则 $M\\left(\\frac{x_{1}+x_{2}}{6},\\frac{y_{1}+y_{2}}{6}\\right)$ .

由题意可知 $2|MO|<|GH|$ ,

即 $4\\left[\\left(\\frac{x_1 + x_2}{6}\\right)^2 +\\left(\\frac{y_1 + y_2}{6}\\right)^2\\right] <   \\frac{(x_1 - x_2)^2}{9} +\\frac{(y_1 - y_2)^2}{9},$

即 $x_{1}x_{2} + y_{1}y_{2} <   0,$

而 $x_{1}x_{2} + y_{1}y_{2} = \\left(my_{1} + \\frac{m^{2}}{2}\\right)\\left(my_{2} + \\frac{m^{2}}{2}\\right) + y_{1}y_{2} = (m^{2} + 1)\\left(\\frac{m^{2}}{8} -\\frac{1}{2}\\right),$

所以 $\\frac{m^{2}}{8}-\\frac{1}{2}<0$ ，即 $m^{2}<4$ ，又因为m>1且 $\\Delta>0$ ，所以1<m<2，

所以 m 的取值范围是 $(1,2)$ .`,
      },
      {
        id: "prob-sec-3-5-13-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `由 G 为 $\\triangle AF_{1}F_{2}$ 的重心, 知 O, G, A 三点共线, 同理, O, H, B 三点共线, 由原点 O 在以线段 GH 为直径的圆内, 可知 $\\angle GOH > 90^{\\circ}$ , 即 $\\angle AOB > 90^{\\circ}$ ,

设 $A(x_{1},y_{1}),B(x_{2},y_{2})$ ，则 $\\overrightarrow{OA}\\cdot \\overrightarrow{OB} < 0$ ，所以 $x_{1}x_{2} + y_{1}y_{2} < 0$

由 $\\left\\{\\begin{aligned}x&=my+\\frac{1}{2}m^{2},\\\\ \\frac{x^{2}}{m^{2}}&+y^{2}=0\\end{aligned}\\right.$ 得 $2y^{2}+my+\\frac{m^{2}-4}{4}=0;$

由 $\\Delta > 0$ ，得 $m^2 < 8$

将 $y_{1}+y_{2}=-\\frac{m}{2}, y_{1}y_{2}=\\frac{m^{2}-4}{8}$ ，代入 $x_{1}x_{2}+y_{1}y_{2}<0$ ，化简整理，可得 $m^{2}<4$ ，

因此,可得 m 的取值范围是 $(1,2)$ .

评注 本题是2010年浙江省高考试题.`,
      },
      {
        id: "prob-sec-3-5-13-sol-3",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `是命题者提供的答案, 条件中重心 $G, H$ 的转化较烦琐, 利用条件中“点 $O$ 在 $GH$ 为直径的圆内”, 写出“ $2 \\mid MO \\mid < |GH|$ ”不易想到, 且运算量较大,`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-5-14",
    topicId: "topic-sec-3-5",
    title: `如图 3-5-12 所示, 已知 O 为坐标原点, F`,
    content: `如图 3-5-12 所示, 已知 O 为坐标原点, F 为椭圆 C: $x^{2} + \\frac{y^{2}}{2} = 1$ 在 y 轴正半轴上的焦点, 过 F 且斜率为 $-\\sqrt{2}$ 的直线与 C 交于 A、B 两点, 点 P 满足 $\\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OP} = 0$ .
![](images/94b64e10053a331790cd9679b9c3712414cec708416a786991d5f9f1ba88f8ee.jpg)

图3-5-12

(1)证明:点P在C上;

(2)设点 P 关于点 O 的对称点为 Q，证明：A、P、B、Q 四点在同一圆上.`,
    preview: `如图 3-5-12 所示, 已知 O 为坐标原点, F 为椭圆 C: x^2 + y^22 = 1 在 y 轴正半轴上的焦点, 过 F 且斜率为 -√2 的直线`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-5-14-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)略.

(2)因为点 P 关于点 O 的对称点为 $Q, \\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OP} = 0$ ，所以 P、O、M、Q 四点共线，即点 M 在直线 PQ 上。设 $A(x_{1}, y_{1}), B(x_{2}, y_{2})$ ，线段 AB 的中点 $M(x_{0}, y_{0})$ 。

由 $x_{1}^{2} + \\frac{y_{1}^{2}}{2} = 1, x_{2}^{2} + \\frac{y_{2}^{2}}{2} = 1$ 得 $y_{2}^{2} - y_{1}^{2} = 2(x_{1}^{2} - x_{2}^{2})$ ，所以

$$
k _ {A B} = \\frac {y _ {2} - y _ {1}}{x _ {2} - x _ {1}} = - \\frac {2 (x _ {2} + x _ {1})}{y _ {2} + y _ {1}} = - \\frac {2}{k _ {O M}},
$$

所以 $k_{OM} = -\\frac{2}{k_{AB}} = \\sqrt{2}$ ，即 $k_{PQ} = \\sqrt{2}$

设直线 $AB$ 的参数方程为 $x = x_0 - \\frac{\\sqrt{3}}{3} t, y = y_0 + \\frac{\\sqrt{6}}{3} t$ ( $t$ 为参数),

代入椭圆方程 $x^{2} + \\frac{y^{2}}{2} = 1$ ，得 $4t^{2} + (2\\sqrt{6} y_{0} - 4\\sqrt{3} x_{0})t + 6x_{0}^{2} + 3y_{0}^{2} - 6 = 0.$

所以 $\\left|MA\\right|\\cdot\\left|MB\\right|=-\\frac{1}{4}(6x_{0}^{2}+3y_{0}^{2}-6)$ .

设直线 PQ 的参数方程为 $x = x_{0} + \\frac{\\sqrt{3}}{3}t, y = y_{0} + \\frac{\\sqrt{6}}{3}t$ (t 为参数),

代入椭圆方程 $x^{2} + \\frac{y^{2}}{2} = 1$ ，得 $4t^{2} + (2\\sqrt{6} y_{0} + 4\\sqrt{3} x_{0})t + 6x_{0}^{2} + 3y_{0}^{2} - 6 = 0.$

所以 $|MP|\\cdot |MQ| = -\\frac{1}{4} (6x_0^2 +3y_0^2 -6)$

因此， $|MA|\\cdot|MB|=|MP|\\cdot|MQ|$ ，

由相交弦定理的逆定理可知 A、P、B、Q 四点在同一圆上.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-6-1",
    topicId: "topic-sec-3-6",
    title: `求经过两直线 2x-3y=1, 3x+2y=2 的交点`,
    content: `求经过两直线 2x-3y=1, $3x+2y=2$ 的交点，且平行于直线 $y+3x=0$ 的直线方程.`,
    preview: `求经过两直线 2x-3y=1, 3x+2y=2 的交点，且平行于直线 y+3x=0 的直线方程.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-6-1-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `因为所求直线经过两直线 2x-3y=1、3x+2y=2 的交点, 所以可设为

$\\lambda_{1}(2x - 3y - 1) + \\lambda_{2}(3x + 2y - 2) = 0$ ，因为 $\\lambda_1\\neq 0$ ，整理可得

$$
\\left(2 + 3 \\frac {\\lambda_ {2}}{\\lambda_ {1}}\\right) x + \\left(- 3 + 2 \\frac {\\lambda_ {2}}{\\lambda_ {1}}\\right) y + \\left(- 1 - 2 \\frac {\\lambda_ {2}}{\\lambda_ {1}}\\right) = 0,
$$

由于已知直线 $y + 3x = 0$ 的斜率为-3，所以 $-\\frac{2 + 3\\frac{\\lambda_2}{\\lambda_1}}{-3 + 2\\frac{\\lambda_2}{\\lambda_1}} = -3$ ，解得 $\\frac{\\lambda_2}{\\lambda_1} = \\frac{11}{3}$

将 $\\frac{\\lambda_{2}}{\\lambda_{1}}=\\frac{11}{3}$ 代入 $\\lambda_{1}(2x-3y-1)+\\lambda_{2}(3x+2y-2)=0$ 化简得 $39x+13y-25=0$ ，此即为所求的直线方程.`,
      },
      {
        id: "prob-sec-3-6-1-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `因为所求直线与直线 $y+3x=0$ 平行, 故可设为 $y+3x+\\lambda=0(\\lambda\\neq0)$ ,

因为所求直线过两直线 2x-3y=1,3x+2y=2 的交点，

解方程组 $\\left\\{\\begin{aligned}2x-3y=1,\\\\ 3x+2y=2,\\end{aligned}\\right.$ 得 $\\left\\{\\begin{aligned}x=\\frac{8}{13},\\\\ y=\\frac{1}{13},\\end{aligned}\\right.$

把点 $\\left(\\frac{8}{13},\\frac{1}{13}\\right)$ 代入 $y+3x+\\lambda=0$ ，得 $\\lambda=-\\frac{25}{13}$

故所求直线方程为 $39x + 13y - 25 = 0$ .`,
      },
      {
        id: "prob-sec-3-6-1-sol-2",
        title: `解法三`,
        method: "standard",
        steps: [],
        explanation: `过两直线 2x-3y=1,3x+2y=2 的交点的直线系方程可设为

$$
\\lambda_ {1} (2 x - 3 y - 1) + \\lambda_ {2} (3 x + 2 y - 2) = 0 (\\lambda_ {1} \\neq 0),
$$

即 $\\left(2+3\\frac{\\lambda_{2}}{\\lambda_{1}}\\right)x+\\left(-3+2\\frac{\\lambda_{2}}{\\lambda_{1}}\\right)y+\\left(-1-2\\frac{\\lambda_{2}}{\\lambda_{1}}\\right)=0,$

而与直线 $y+3x=0$ 平行的直线系方程为 $y+3x+\\lambda=0(\\lambda\\neq0)$ ,

比较系数 $\\frac{2+3\\frac{\\lambda_{2}}{\\lambda_{1}}}{3}=\\frac{-3+2\\frac{\\lambda_{2}}{\\lambda_{1}}}{1}=\\frac{-1-2\\frac{\\lambda_{2}}{\\lambda_{1}}}{\\lambda}$ ，解出 $\\lambda=-\\frac{25}{13}$

故所求直线方程为 $39x + 13y - 25 = 0$ .

评注 本题难度不大,但它不仅能检测学生的基本运算能力,更能有效锻炼学生的发散性思维能力.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-6-2",
    topicId: "topic-sec-3-6",
    title: `在平面直角坐标系中, 设 △ ABC 的顶点分别为`,
    content: `在平面直角坐标系中, 设 $\\triangle ABC$ 的顶点分别为 A(0, a), B(b, 0), C(c, 0), 点 P(0, p) 在线段 AO 上 (异于端点), 设 a, b, c, p 均为非零实数, 直线 BP, CP 分别交 AC, AB 于点 E, F, 一同学已正确算得 OE 的方程:
$\\left(\\frac{1}{b} - \\frac{1}{c}\\right)x + \\left(\\frac{1}{p} - \\frac{1}{a}\\right)y = 0$ ，请你求 $OF$ 的方程： $(\\underline{\\hspace{2cm}})x + \\left(\\frac{1}{p} - \\frac{1}{a}\\right)y = 0.$`,
    preview: `在平面直角坐标系中, 设 △ ABC 的顶点分别为 A(0, a), B(b, 0), C(c, 0), 点 P(0, p) 在线段 AO 上 (异于端点),`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-6-2-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `由截距式得直线 $AB: \\frac{x}{b} + \\frac{y}{a} = 1$ ,

直线 $CP: \\frac{x}{c} + \\frac{y}{p} = 1,$

因为 F 可以看作是直线 CP 与 AB 的交点, 由一次曲线系方程可知,

可设直线 OF 的方程为 $\\left(\\frac{x}{b}+\\frac{y}{a}-1\\right)+\\lambda\\left(\\frac{x}{c}+\\frac{y}{p}-1\\right)=0$ ,

因为直线 OF 过原点 $O(0,0)$ ，代入可得 $\\lambda = -1$ ，故直线 OF 的方程为

$$
\\left(\\frac {1}{c} - \\frac {1}{b}\\right) x + \\left(\\frac {1}{p} - \\frac {1}{a}\\right) y = 0.
$$

评注 合理、恰当、准确地运用曲线系方程,往往可以使解题事半功倍,当然前提条件是必须熟悉各类曲线系.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-6-3",
    topicId: "topic-sec-3-6",
    title: `经过点(3,2)的一条动直线分别交 x 轴`,
    content: `经过点(3,2)的一条动直线分别交 x 轴，y 轴于 M, N 两点，设 Q 为 MN 的中点，连接 OQ 并延长到 P，使 $\\left|OP\\right|=2\\left|OQ\\right|$ ，求点 P 的轨迹方程.`,
    preview: `经过点(3,2)的一条动直线分别交 x 轴，y 轴于 M, N 两点，设 Q 为 MN 的中点，连接 OQ 并延长到 P，使 |OP|=2|OQ| ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-6-3-sol-0",
        title: `解答`,
        method: "creative",
        steps: [],
        explanation: `因为点 $(3,2)$ 为两条直线x-3=0和y-2=0的交点，

则过点 $(3,2)$ 的直线系方程为 $x-3+\\lambda(y-2)=0$ （不包括直线y-2=0）.

于是得 $M(3+2\\lambda,0)$ , $N\\left(0,2+\\frac{3}{\\lambda}\\right)$ ,

设点 Q, P 的坐标分别为 $(x_{0}, y_{0})$ 和 $(x, y)$ ，则 $\\left\\{\\begin{aligned} x &= 2x_{0}, \\\\ y &= 2y_{0}, \\end{aligned}\\right.$

因为点 Q 为 MN 的中点, 由中点公式得 $\\left\\{\\begin{aligned} x &= 3 + 2\\lambda, \\\\ y &= 2 + \\frac{3}{\\lambda}, \\end{aligned}\\right.$

消去参数 $\\lambda$ 得点 P 的轨迹方程为 $y=2+\\frac{6}{x-3}, x\\neq3$ ，即 xy-2x-3y=0, $x\\neq3$ .

评注 过定点的直线不一定非要设成点斜式方程,也可以创造性地构造两条过定点的直线,然后再用直线系方程表示.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-6-4",
    topicId: "topic-sec-3-6",
    title: `已知点 H(0, -3) , 点 P 在 x 轴上, 点`,
    content: `已知点 $H(0, -3)$ , 点 $P$ 在 $x$ 轴上, 点 $Q$ 在 $y$ 轴正半轴上, 点 $M$ 在直线 $PQ$ 上, 且满足 $\\overrightarrow{HP} \\cdot \\overrightarrow{PQ} = 0$ , $\\overrightarrow{PM} = -\\frac{3}{2}\\overrightarrow{MQ}$ .
(1) 当点 P 在 x 轴上移动时, 求动点 M 的轨迹 C 的方程;

(2) 过定点 $A(a, b)$ 的直线与曲线 C 相交于两点 S、R，求证：曲线 C 在 S、R 两点处的切线的交点 B 恒在一条直线上.`,
    preview: `已知点 H(0, -3) , 点 P 在 x 轴上, 点 Q 在 y 轴正半轴上, 点 M 在直线 PQ 上, 且满足 →HP · →PQ = 0 , →PM`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-6-4-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)(过程略去)曲线 C 的方程为 $y=\\frac{1}{4}x^{2}(x\\neq0)$ .

(2) 设 $S\\left(x_{1}, \\frac{1}{4} x_{1}^{2}\\right), R\\left(x_{2}, \\frac{1}{4} x_{2}^{2}\\right) (x_{1} \\neq x_{2})$ ，则直线 $SR$ 的方程为

$y - \\frac{x_1^2}{4} = \\frac{\\frac{x_2^2}{4} - \\frac{x_1^2}{4}}{x_2 - x_1} (x - x_1)$ ，即 $4y = (x_{1} + x_{2})x - x_{1}x_{2}$

因为点 A 在直线 SR 上, 所以 $4b=(x_{1}+x_{2})a-x_{1}x_{2}$ , ①

对 $y=\\frac{1}{4}x^{2}$ 求导，得 $y'=\\frac{1}{2}x$ ，所以曲线 C 上 S、R 处的切线方程为

$y - \\frac{x_1^2}{4} = \\frac{1}{2} x_1(x - x_1)$ ，即 $4y = 2x_{1}x - x_{1}^{2}$ ②

$y - \\frac{x_2^2}{4} = \\frac{1}{2} x_2(x - x_2)$ ，即 $4y = 2x_{2}x - x_{2}^{2}$

联立方程②③解得 $x=\\frac{x_{1}+x_{2}}{2}, y=\\frac{x_{1}x_{2}}{4}$ ，代入①得 ax-2y-2b=0，

故交点 B 恒在一条直线 ax-2y-2b=0 上.

评注 过点 A 有一直线系, 即直线 SR, 过点 S、R 又各有一直线系, 即切线 SB、RB, 但切线 SB、RB 上没有定点, 只与点 S、R 有关. 因此, 交点 B 的轨迹须由三个直线系方程共同确定.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-6-5",
    topicId: "topic-sec-3-6",
    title: `在四边形 ABCD 中, 对角线 AC 平分 ∠ BAD`,
    content: `在四边形 ABCD 中, 对角线 AC 平分 $\\angle BAD$ , 在 CD 上取一点 E, BE 与 AC 相交于 F, 延长 DF 交 BC 于 G. 求证: $\\angle GAC = \\angle EAC$ .`,
    preview: `在四边形 ABCD 中, 对角线 AC 平分 ∠ BAD , 在 CD 上取一点 E, BE 与 AC 相交于 F, 延长 DF 交 BC 于 G. 求证: ∠`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-6-5-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `如图 3-6-1 所示, 以 A 为原点, AC 所在直线为 x 轴建立直角坐标系.

设 $C(m,0)$ 、 $F(n,0)$ 、 $D(x_{1},kx_{1})$ .

因为 AC 平分 $\\angle BAD$ ，故设 $B(x_{2}, -kx_{2})$ ，

所以 $CD$ 的方程为

![](images/2397da334b8d437cee7dafe68a5253cc51a26773eb2c4c3e11a11c63b5eec56a.jpg)

图3-6-1

$(x-x_{1})(0-kx_{1})=(y-kx_{1})(m-x_{1})$ ，即 $kx_{1}x+(m-x_{1})y-kmx_{1}=0;$

BF 的方程为 $(x-x_{2})(0+kx_{2})=(y+kx_{2})(n-x_{2})$ ,

即 $kx_{2}x-(n-x_{2})y-knx_{2}=0;$

过点 E 的直线系方程为 $kx_{1}x+(m-x_{1})y-kmx_{1}+\\lambda(kx_{2}x-(n-x_{2})y-knx_{2})=0.$

又点 $A(0,0)$ ，代入上述方程得 $\\lambda = -\\frac{mx_1}{nx_2}$

整理直线 AE 方程得 $kx_{1}x_{2}(n-m)x+\\left[mn(x_{1}+x_{2})-x_{1}x_{2}(n+m)\\right]y=0.$

同理可得，直线 AG 的方程为 $kx_{1}x_{2}(m-n)x+\\left[mn(x_{1}+x_{2})-x_{1}x_{2}(n+m)\\right]y=0$ .

显然, 直线 AE、AG 的倾斜角互补, 由图 3-6-1 可知, E 在 x 轴上方, G 在 x 轴下方. 因此, $\\angle GAC = \\angle EAC$ 得证.

评注 解析法解决平面几何问题确实可以使试题的思维量大大下降,又因为直线系方程的巧妙运用,使得解析法证明过程中的计算量降到了最低.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-6-6",
    topicId: "topic-sec-3-6",
    title: `已知常数 a > 0`,
    content: `已知常数 a > 0，向量 $\\boldsymbol{c} = (0, a)$ ， $\\boldsymbol{i} = (1, 0)$ ，经过原点 O 以 $c + \\lambda i$ 为方向向量的直线与经过定点 A(0, a)，以 $i - 2\\lambda c$ 为方向向量的直线相交于点 P，其中 $\\lambda \\in R$ 。试问：是否存在两个定点 E、F，使得 $|PE| + |PF|$ 为定值，若存在，求出 E、F 的坐标；若不存在，说明理由。`,
    preview: `已知常数 a > 0，向量 c = (0, a) ， i = (1, 0) ，经过原点 O 以 c + λ i 为方向向量的直线与经过定点 A(0, a)，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-6-6-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `因为 $i=(1,0)$ , $c=(0,a)$ ，所以 $c+\\lambda i=(\\lambda,a)$ , $i-2\\lambda c=(1,-2\\lambda a)$ ,

所以直线 OP 和 AP 的方程分别为 $\\lambda y = ax$ ① 和 $y - a = -2\\lambda ax$ ②，

由②得 $y^{2}-ay=-2\\lambda yax$ ③，

将①代入③,消去 $\\lambda$ 得关于 x、y 的方程

$$
2 a ^ {2} x ^ {2} + \\left(y - \\frac {a}{2}\\right) ^ {2} = \\frac {a ^ {2}}{4}, \\text {即} \\frac {x ^ {2}}{\\frac {1}{8}} + \\frac {\\left(y - \\frac {a}{2}\\right) ^ {2}}{\\frac {a ^ {2}}{4}} = 1.
$$

因为 $(x,y)$ 即点P坐标,显然,P在以 $\\left(0,\\frac{a}{2}\\right)$ 为中心的椭圆或圆上,下面分情况说明.

当 $0 < a^{2} < \\frac{1}{2}$ 时， $E, F$ 的坐标分别为 $\\left(-\\sqrt{\\frac{1}{8} - \\frac{a^{2}}{4}}, \\frac{a}{2}\\right)$ 和 $\\left(\\sqrt{\\frac{1}{8} - \\frac{a^{2}}{4}}, \\frac{a}{2}\\right)$ ;

当 $a^2 > \\frac{1}{2}$ 时， $E, F$ 的坐标分别为 $\\left(0, -\\sqrt{\\frac{a^2}{4} - \\frac{1}{8}} + \\frac{a}{2}\\right)$ 和 $\\left(0, \\sqrt{\\frac{a^2}{4} - \\frac{1}{8}} + \\frac{a}{2}\\right)$ ;

当 $a^{2}=\\frac{1}{2}$ 时, 不存在满足条件的 E、F.

评注 利用曲线系方程可以减少计算量,但本题求出关于 x、y 的方程不仅仅是减少计算量问题,更是体现了在思维层面上的高要求,即过点 P 有一个直线系,随着 $\\lambda$ 的不同取值,点 P 在不断变换位置.因此,只有求出点 P 坐标满足的方程,才能展开对后续问题的求解,这是关键一环.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-6-7",
    topicId: "topic-sec-3-6",
    title: `已知圆 C: x^2 + y^2 - 2x + 4y -`,
    content: `已知圆 $C: x^{2} + y^{2} - 2x + 4y - 4 = 0$ ，问是否存在斜率为 1 的直线 l，使直线 l 被圆 C 截得的弦 AB 为直径的圆经过原点，若存在，写出直线 l 的方程；若不存在，说明理由.`,
    preview: `已知圆 C: x^2 + y^2 - 2x + 4y - 4 = 0 ，问是否存在斜率为 1 的直线 l，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-6-7-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `假设存在直线 l，其方程为 $y=x+b$ ，则以 AB 为弦的圆系方程为

$$
x ^ {2} + y ^ {2} - 2 x + 4 y - 4 + \\lambda (x - y + b) = 0,
$$

整理得 $x^{2}+y^{2}+(\\lambda-2)x+(4-\\lambda)y+\\lambda b-4=0$ ，因为圆过原点，所以 $\\lambda b-4=0$ .

又因为圆心 $\\left(\\frac{2-\\lambda}{2},\\frac{\\lambda-4}{2}\\right)$ 在直线 $y=x+b$ 上，所以 $\\frac{2-\\lambda}{2}-\\frac{\\lambda-4}{2}+b=0$ ，

解得 $\\lambda=b+3$ 代入 $\\lambda b-4=0$ 得 b=-4 或 b=1.

经检验 $y=x+1$ 和 y=x-4 都和圆 C 相交，

故存在满足条件的直线 l，其方程为 $y=x+1$ 或 y=x-4。

评注 恰当地使用圆系方程可以避免求交点坐标带来的烦琐运算,但使用圆系方程解题,最后结果必须加以验证,因为圆系方程的构成是建立在两曲线相交的前提条件下.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-6-8",
    topicId: "topic-sec-3-6",
    title: `求过两圆 C_1: x^2 + y^2 - 2x - 2y - 14 = 0 和 C_2: x^2 + y^`,
    content: `求过两圆 $C_{1}: x^{2} + y^{2} - 2x - 2y - 14 = 0$ 和 $C_{2}: x^{2} + y^{2} = 25$ 的两交点的圆中，面积最小的圆的方程.`,
    preview: `求过两圆 和 C_2: x^2 + y^2 = 25 的两交点的圆中，面积最小的圆的方程.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-6-8-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `设圆 $C_{1}$ 、 $C_{2}$ 相交于 A、B 两点，过 A、B 两点的曲线方程可设为

$$
x ^ {2} + y ^ {2} - 2 x - 2 y - 1 4 + \\lambda (x ^ {2} + y ^ {2} - 2 5) = 0.
$$

当 $\\lambda = -1$ 时，此方程表示过 A、B 两点的直线，即 $l_{AB}: 2x - 2y - 11 = 0$ .

当 $\\lambda \\neq -1$ 时, 此方程表示过 A、B 两点的所有圆(除 $C_{2}$ 以外).

显然, 当 AB 为直径时, 此圆面积取到最小.

因为 $C_{1}$ 、 $C_{2}$ 的圆心分别为 $(1,1)$ 和 $(0,0)$ ，即两圆心所在直线方程为 y-x=0。

解方程组 $\\left\\{\\begin{aligned}&2x-2y-11=0,\\\\ &y-x=0,\\end{aligned}\\right.$ 得 $\\left\\{\\begin{aligned}x=\\frac{11}{4},\\\\ &y=\\frac{11}{4},\\end{aligned}\\right.$ 即AB的中点为 $\\left(\\frac{11}{4},\\frac{11}{4}\\right)$ ,

而圆 $x^{2}+y^{2}-2x-2y-14+\\lambda(x^{2}+y^{2}-25)=0$ 的圆心为 $\\left(\\frac{1}{1+\\lambda},\\frac{1}{1+\\lambda}\\right)$ ,

则有 $\\frac{1}{1+\\lambda}=\\frac{11}{4}$ ，解得 $\\lambda=-\\frac{7}{11}$ ，代入圆方程得 $4x^{2}+4y^{2}-22x-22y+21=0$ ，

此圆半径 $r=\\sqrt{\\frac{79}{8}}<5$ ，故过两圆交点面积最小的圆的方程为

$$
4 x ^ {2} + 4 y ^ {2} - 2 2 x - 2 2 y + 2 1 = 0.
$$

评注 圆系方程的运用可以使求过两圆交点曲线问题大大简化,但如果为了运算方便而选择使用带一个参数的圆系方程,则切记讨论圆系中漏掉的那个圆,就好像过定点的直线方程假设,如果选用点斜式则必须讨论斜率不存在的情况.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-6-9",
    topicId: "topic-sec-3-6",
    title: `求与圆 x^2+y^2-4x-8y+15=0 切于点`,
    content: `求与圆 $x^{2}+y^{2}-4x-8y+15=0$ 切于点 A(3,6)，且过点 B(5,6) 的圆的方程.`,
    preview: `求与圆 x^2+y^2-4x-8y+15=0 切于点 A(3,6)，且过点 B(5,6) 的圆的方程.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-6-9-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `与圆 $x^{2} + y^{2} - 4x - 8y + 15 = 0$ 相切于点 $A(3,6)$ 的圆系方程可以设为

$$
x ^ {2} + y ^ {2} - 4 x - 8 y + 1 5 + \\lambda [ (x - 3) ^ {2} + (y - 6) ^ {2} ] = 0,
$$

又因为此圆经过点 $B(5,6)$ ，把点 $B(5,6)$ 代入圆系方程，得 $\\lambda = -2$ ，

故所求圆的方程为 $x^{2}+y^{2}-8x-16y+75=0$ .

评注 在本题的解题过程中是直接套用了与圆相切一点的圆系方程, 其实也可以将点 $(x_{0}, y_{0})$ 看成是半径为0的圆(点圆), 即 $(x-3)^{2}+(y-6)^{2}=0$ , 这种思想在椭圆中仍然适用.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-6-10",
    topicId: "topic-sec-3-6",
    title: `给定曲线族: 2(2sinθ - cosθ + 3)x^2 - (8sinθ + cosθ + 1)y = 0 (θ`,
    content: `给定曲线族: $2(2\\sin\\theta - \\cos\\theta + 3)x^{2} - (8\\sin\\theta + \\cos\\theta + 1)y = 0$ ( $\\theta$ 为参数). 求该曲线在直线 y = 2x 上所截得的弦长的最大值.`,
    preview: `给定曲线族: ( θ 为参数). 求该曲线在直线 y = 2x 上所截得的弦长的最大值.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-6-10-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `由已知得,该曲线族恒过原点,而直线 y=2x 也过原点,已知曲线族在 y=2x 上所截得弦长仅取决于曲线族与 y=2x 的另一个交点坐标.把 y=2x 代入曲线族方程得

$$
2 (2 \\sin \\theta - \\cos \\theta + 3) x ^ {2} - 2 (8 \\sin \\theta + \\cos \\theta + 1) x = 0,
$$

当 $x \\neq 0$ 时，有

$$
2 (2 \\sin \\theta - \\cos \\theta + 3) x - 2 (8 \\sin \\theta + \\cos \\theta + 1) = 0,
$$

则 $(2x-8)\\sin\\theta-(x+1)\\cos\\theta+3x-1=0$ ，令 $\\mu=\\cos\\theta,\\nu=\\sin\\theta$ ，得 $\\mu^{2}+\\nu^{2}=1$ ，

于是，问题转化为直线系 $(2x-8)\\nu-(x+1)\\mu+3x-1=0$ 与单位圆有交点.

因为圆心到直线距离不大于半径，即 $\\frac{|3x - 1|}{\\sqrt{(2x - 8)^2 + (x + 1)^2}} \\leqslant 1$ ，解得 $-8 \\leqslant x \\leqslant 2.$

把 x=-8 代入 y=2x，得 y=-16，所以 $\\left|x\\right|_{\\max}=8,\\left|y\\right|_{\\max}=16$ ，

因此弦长最大值为 $\\sqrt{8^{2}+16^{2}}=8\\sqrt{5}$ .

评注 看似高深的曲线族,通过逐层分解、数形结合和曲线系方程的运用,使得解题过程不仅流畅,更是简洁明了.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-6-11",
    topicId: "topic-sec-3-6",
    title: `求与双曲线 x^216-y^24=1 有共同的渐近线`,
    content: `求与双曲线 $\\frac{x^{2}}{16}-\\frac{y^{2}}{4}=1$ 有共同的渐近线，且与直线5x-6y-8=0相切的标准双曲线方程.`,
    preview: `求与双曲线 x^216-y^24=1 有共同的渐近线，且与直线5x-6y-8=0相切的标准双曲线方程.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-6-11-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `设所求双曲线的方程为 $\\frac{x^{2}}{16}-\\frac{y^{2}}{4}=\\lambda(\\lambda\\neq0)$ ,

因为其与直线 5x-6y-8=0 相切，

且显然其渐近线都不平行于直线 5x-6y-8=0，

故可由方程组 $\\left\\{\\begin{aligned}x^{2}-4y^{2}&=16\\lambda,\\\\ 5x-6y-8&=0\\end{aligned}\\right.$ 消去x，得 $4y^{2}-6y+25\\lambda-4=0$ ，

其判别式 $\\Delta=(-6)^{2}-4\\times4\\times(25\\lambda-4)=0$ , 解得 $\\lambda=\\frac{1}{4}$ .

故所求双曲线的标准方程为 $\\frac{x^{2}}{16}-\\frac{y^{2}}{4}=\\frac{1}{4}$ ，即 $\\frac{x^{2}}{4}-y^{2}=1$ .`,
      },
      {
        id: "prob-sec-3-6-11-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `设所求双曲线的方程为 $\\frac{x^{2}}{16}-\\frac{y^{2}}{4}=\\lambda(\\lambda\\neq0)$ ,

即 $x^{2}-4y^{2}=16\\lambda(\\lambda\\neq0)$ ,

设其与直线 5x-6y-8=0 相切的切点为 $(x_{0},y_{0})$ ,

则切线方程为 $x_{0}x-4y_{0}y-16\\lambda=0$ ，

所以有 $\\frac{5}{x_{0}}=\\frac{6}{4y_{0}}=\\frac{8}{16\\lambda}$ ,

所以 $x_{0}=10\\lambda, y_{0}=3\\lambda$ ，代入所求双曲线的方程中，化简得 $4\\lambda^{2}=\\lambda$ ，

又因为 $\\lambda \\neq 0$ ，所以 $\\lambda = \\frac{1}{4}$ .

故所求双曲线的标准方程为 $\\frac{x^{2}}{4}-y^{2}=1$ .`,
      },
      {
        id: "prob-sec-3-6-11-sol-2",
        title: `解法三`,
        method: "standard",
        steps: [],
        explanation: `设所求双曲线的方程为 $\\frac{x^{2}}{16\\lambda}-\\frac{y^{2}}{4\\lambda}=1(\\lambda\\neq0)$ ，因为已知切线的斜率为 $\\frac{5}{6}$ ，

故应用斜率为 m 的双曲线 $\\frac{x^{2}}{a^{2}} - \\frac{y^{2}}{b^{2}} = 1$ 的切线方程为 $y = mx \\pm \\sqrt{a^{2}m^{2} - b^{2}}$ ,

得切线方程为 $y=\\frac{5}{6}x\\pm\\frac{3}{8}\\sqrt{\\lambda}$ .

与已知切线方程 $y=\\frac{5}{6}x-\\frac{4}{3}$ 对比系数，得 $\\frac{3}{8}\\sqrt{\\lambda}=\\frac{4}{3}$ ，所以 $\\lambda=\\frac{1}{4}$ .

故所求双曲线的标准方程为 $\\frac{x^{2}}{4}-y^{2}=1$ .`,
      },
      {
        id: "prob-sec-3-6-11-sol-3",
        title: `解法四`,
        method: "creative",
        steps: [],
        explanation: `设所求双曲线的方程为 $\\frac{x^{2}}{16\\lambda}-\\frac{y^{2}}{4\\lambda}=1(\\lambda\\neq0)$ ,

再令过双曲线上一点 $(4\\sqrt{\\lambda}\\sec\\varphi,2\\sqrt{\\lambda}\\tan\\varphi)$ 的切线方程为

$\\frac{4\\sqrt{\\lambda}\\sec\\varphi\\cdot x}{16\\lambda}-\\frac{2\\sqrt{\\lambda}\\tan\\varphi\\cdot y}{4\\lambda}=1$ , 即

$$
\\sec \\varphi \\cdot x - 2 \\tan \\varphi \\cdot y = 4 \\sqrt {\\lambda},
$$

因为它和直线 5x-6y=8 重合，所以有 $\\frac{\\sec\\varphi}{5}=\\frac{\\tan\\varphi}{3}=\\frac{\\sqrt{\\lambda}}{2}$ ，即 $\\frac{\\sec^{2}\\varphi}{25}=\\frac{-\\tan^{2}\\varphi}{-9}=\\frac{\\lambda}{4}$

根据等比定理可得 $\\frac{\\sec^{2}\\varphi-\\tan^{2}\\varphi}{25-9}=\\frac{\\lambda}{4}$ ，即 $\\frac{1}{16}=\\frac{\\lambda}{4}$

把 $\\lambda=\\frac{1}{4}$ 代入原双曲线方程得 $\\frac{x^{2}}{4}-y^{2}=1$ .

所以所求双曲线的标准方程为 $\\frac{x^{2}}{4}-y^{2}=1$ .

评注 从上述四种解法可以看到,平时注意曲线系方程的研究,不仅可以巩固所学内容、理解课本知识,更能提高学习水平、启迪思维.这样的一道多解练习题不仅有利于提高综合运用知识能力,对于培养学生的探索精神和创新意识也会起到积极的作用.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-6-12",
    topicId: "topic-sec-3-6",
    title: `求与抛物线 y^2 = 5x + 9 相切于点`,
    content: `求与抛物线 $y^{2} = 5x + 9$ 相切于点 $P(0,3), Q(-1, -2)$ 两点，且过点 $A(-2,1)$ 的圆锥曲线方程.`,
    preview: `求与抛物线 y^2 = 5x + 9 相切于点 P(0,3), Q(-1, -2) 两点，且过点 A(-2,1) 的圆锥曲线方程.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-6-12-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `设过两点 P, Q 的切线方程为 $l_{1}, l_{2}$ ,

则 $l_{1}:3y=5\\times\\frac{x+0}{2}+9;l_{2}:-2y=5\\times\\frac{-1+x}{2}+9,$

化简得, $l_{1}:5x-6y+18=0;l_{2}:5x+4y+13=0.$

则过两切点的圆锥曲线系为

$$
5 x - y ^ {2} + 9 + \\lambda (5 x - 6 y + 1 8) (5 x + 4 y + 1 3) = 0.
$$

又因为曲线过点 $A(-2,1)$ ，所以 $\\lambda=\\frac{1}{7}$ .

代入圆锥曲线系方程可得所求圆锥曲线方程为

$$
2 5 x ^ {2} - 1 0 x y - 3 1 y ^ {2} + 1 9 0 x - 6 y + 2 9 7 = 0.
$$`,
      },
      {
        id: "prob-sec-3-6-12-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `过点 $P(0,3), Q(-1,-2)$ 两切点的直线方程为 $5x - y + 3 = 0$ ，则过两点的曲线系为 $y^2 - 5x - 9 + \\lambda (5x - y + 3)^2 = 0$ .

把点 $A(-2,1)$ 代入，得 $\\lambda=-\\frac{1}{32}$ ，故求得圆锥曲线方程为

$$
2 5 x ^ {2} - 1 0 x y - 3 1 y ^ {2} + 1 9 0 x - 6 y + 2 9 7 = 0.
$$

评注 该题是奥数集训题,用常规思维来解较难,但若通过现有直线系、圆系和圆锥曲线系等进行巧妙的合成,问题就显得简单多了.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-6-13",
    topicId: "topic-sec-3-6",
    title: `已知点 B(0,1), P, Q 为椭圆 x^2/4 +`,
    content: `已知点 $B(0,1), P, Q$ 为椭圆 $\\frac{x^2}{4} + y^2 = 1$ 上异于点 $B$ 的任意两点，且 $BP \\perp BQ$ . 若点 $B$ 在线段 $PQ$ 上的射影为 $M$ ，求点 $M$ 的轨迹方程.`,
    preview: `已知点 B(0,1), P, Q 为椭圆 x^2/4 + y^2 = 1 上异于点 B 的任意两点，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-6-13-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `易知, 直线 BP、BQ 的斜率均存在, 且不为 0,

设 $l_{BP}:y = kx + 1,l_{BQ}:y = -\\frac{1}{k} x + 1$ ，则经过 $B,P,Q$ 三点的曲线系方程为

$$
(k x - y + 1) \\left(\\frac {1}{k} x + y - 1\\right) + \\lambda \\left(\\frac {x ^ {2}}{4} + y ^ {2} - 1\\right) = 0,
$$

即 $x^{2} - (y - 1)^{2} + \\left(k - \\frac{1}{k}\\right)x(y - 1) + \\lambda \\left(\\frac{x^{2}}{4} + y^{2} - 1\\right) = 0.$ ①

取 $\\lambda = -4$ ，得 $\\left(k - \\frac{1}{k}\\right)x(y - 1) - (y - 1)^2 -4(y^2 -1) = 0,$

即 $(y-1)\\left[\\left(k-\\frac{1}{k}\\right)x-5y-3\\right]=0.$

因为 y-1=0 是过点 B 的椭圆的切线, 所以直线 PQ 的方程为

$$
\\left(k - \\frac {1}{k}\\right) x - 5 y - 3 = 0,
$$

即 $y=\\frac{1}{5}\\left(k-\\frac{1}{k}\\right)x-\\frac{3}{5}.$

所以直线 PQ 恒过定点 $N\\left(0,-\\frac{3}{5}\\right)$ .

如图3-6-2所示，由 $\\angle BMN = 90^{\\circ}$ 知，点 $M$ 的轨迹是以线段 $BN$ 为直径的圆（除去点 $B$ ），其方程为 $x^{2} + (y - 1)\\left(y + \\frac{3}{5}\\right) = 0$ ，即 $x^{2} + \\left(y - \\frac{1}{5}\\right)^{2} = \\left(\\frac{4}{5}\\right)^{2} (y \\neq 1)$ .

![](images/d70865f657d7e640f8dda3891018f2dbfd3fb5f6a60d71ec81ce45d8cba00ddb.jpg)

图3-6-2

评注 由于经过 B、P、Q 三点的曲线系中包含椭圆在点 B 处的切线和直线 PQ，所以只需将切线方程 y=1 代入①，得 $\\left(1+\\frac{\\lambda}{4}\\right)x^{2}=0$ .

因为 $x \\neq 0$ , 所以 $1 + \\frac{\\lambda}{4} = 0$ , 即 $\\lambda = -4$ . 这就是上述解题过程中取 $\\lambda = -4$ 的原因所在. 因此, 应用曲线系方程解答本题的关键是挖掘椭圆在点 $B$ 处的切线 $y = 1$ 这一隐含条件.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-6-14",
    topicId: "topic-sec-3-6",
    title: `设 A、B 是双曲线 x^2-y^22=λ(λ≠0)`,
    content: `设 A、B 是双曲线 $x^{2}-\\frac{y^{2}}{2}=\\lambda(\\lambda\\neq0)$ 上两点， $N(1,2)$ 是线段 AB 的中点，线段 AB 的垂直平分线交双曲线于 C、D 两点.
(1) 确定实数 $\\lambda$ 的取值范围；
(2)试判断 A、B、C、D 四点是否共圆？说明理由.`,
    preview: `设 A、B 是双曲线 x^2-y^22=λ(λ≠0) 上两点， N(1,2) 是线段 AB 的中点，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-6-14-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 设 $A(x_{1}, y_{1})$ 、 $B(x_{2}, y_{2})$ , 则 $x_{1}^{2} - \\frac{y_{1}^{2}}{2} = \\lambda, x_{2}^{2} - \\frac{y_{2}^{2}}{2} = \\lambda$ .

两试相减，得 $(x_{1} + x_{2})(x_{1} - x_{2}) - \\frac{1}{2} (y_{1} + y_{2})(y_{1} - y_{2}) = 0.$

由 $\\left\\{\\begin{aligned}\\frac{x_{1}+x_{2}}{2}&=1,\\\\ \\frac{y_{1}+y_{2}}{2}&=2,\\end{aligned}\\right.$ 所以 $2(x_{1}-x_{2})-2(y_{1}-y_{2})=0$ ，即 $k_{AB}=\\frac{y_{1}-y_{2}}{x_{1}-x_{2}}=1$ .

所以 $l_{AB}: y-2=x-1$ ，即 $y=x+1$ ，代入 $x^{2}-\\frac{y^{2}}{2}=\\lambda$ ，得 $x^{2}-2x-(1+2\\lambda)=0$ 。

由 $\\Delta_{1}=4+4(1+2\\lambda)>0$ , 得 $\\lambda>-1$ . 又 $l_{CD}:y-2=-(x-1)$ , 即 y=3-x,

代入 $x^{2} - \\frac{y^{2}}{2} = \\lambda$ ，得 $x^{2} + 6x - (9 + 2\\lambda) > 0.$

由 $\\Delta_{2}=36+4(9+2\\lambda)>0$ , 得 $\\lambda>-9$ .

综上， $\\lambda$ 的取值范围为 $(-1,0) \\cup (0, +\\infty)$ .

(2)由(1)知, $l_{AB}:y=x+1,l_{CD}:y=3-x$ ,所以经过A、B、C、D四点的曲线系方程为

$$
(x - y + 1) (x + y - 3) + t \\left(x ^ {2} - \\frac {y ^ {2}}{2} - \\lambda\\right) = 0,
$$

即 $(1+t)x^{2}-\\left(1+\\frac{t}{2}\\right)y^{2}-2x+4y-3-t\\lambda=0.$ ①

若 A、B、C、D 四点共圆，则有 $1+t=-\\left(1+\\frac{t}{2}\\right)\\neq0$ ，即 $t=-\\frac{4}{3}$ .

将 $t=-\\frac{4}{3}$ 代入①，得 $(x+3)^{2}+(y-6)^{2}=4(\\lambda+9)$ .

因为 $\\lambda\\in(-1,0)\\cup(0,+\\infty)$ ,

所以 A、B、C、D 均在以 $(-3,6)$ 为圆心， $2\\sqrt{\\lambda+9}$ 为半径的圆上.

评注 第(1)问是一个基本问题,第(2)问的关键是确定A、B、C、D四点既在曲线 $(x-y+1)(x+y-3)=0$ 上,也在双曲线 $x^{2}-\\frac{y^{2}}{2}=\\lambda$ 上,从而可设出经过这四点的曲线系方程①,然后由方程①表示圆的条件求得参数 $t=-\\frac{4}{3}$ ,问题得到解决.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-6-15",
    topicId: "topic-sec-3-6",
    title: `如图 3-6-3 所示, 抛物线 E: y^2 = 2px`,
    content: `如图 3-6-3 所示, 抛物线 $E: y^{2} = 2px (p > 0)$ 的焦点为 F, $\\triangle ABC$ 的三边 BC、CA、AB 所在直线与抛物线 E 分别相切于点 P、Q、R. 证明: A、B、C、F 四点共圆.
![](images/c602fd016c4330752392eaf84d8cd7f92efda71b43ac6a8e6fcf3eb32890f56b.jpg)

图3-6-3`,
    preview: `如图 3-6-3 所示, 抛物线 E: y^2 = 2px (p > 0) 的焦点为 F, △ ABC 的三边 BC、CA、`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-6-15-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `设 $P\\left(\\frac{y_{1}^{2}}{2p}, y_{1}\\right)$ , $Q\\left(\\frac{y_{2}^{2}}{2p}, y_{2}\\right)$ , $R\\left(\\frac{y_{3}^{2}}{2p}, y_{3}\\right)$ ,

则 $l_{BC}: y_{1}y = p\\left(x + \\frac{y_{1}^{2}}{2p}\\right)$ ，即 $px - y_{1}y + \\frac{y_{1}^{2}}{2} = 0$ .

同理， $l_{CA}:px-y_{2}y+\\frac{y_{2}^{2}}{2}=0,l_{AB}:px-y_{3}y+\\frac{y_{3}^{2}}{2}=0.$

于是,经过直线 AB、AC 交点 A 的直线系方程为

$$
\\left(p x - y _ {2} y + \\frac {y _ {2} ^ {2}}{2}\\right) + \\lambda \\left(p x - y _ {3} y + \\frac {y _ {3} ^ {2}}{2}\\right) = 0,
$$

即 $p(1 + \\lambda)x - (y_2 + \\lambda y_3)y + \\frac{y_2^2 + \\lambda y_3^2}{2} = 0.$ ①

因为 FA 是该直线系中的一条, 将点 $F\\left(\\frac{p}{2}, 0\\right)$ 代入上式, 得

$\\frac{p^2}{2} (1 + \\lambda) + \\frac{y_2^2 + \\lambda y_3^2}{2} = 0$ ，解得 $\\lambda = -\\frac{y_2^2 + p^2}{y_3^2 + p^2}$

所以， $k_{FA} = \\frac{p(1 + \\lambda)}{y_2 + \\lambda y_3} = \\frac{p\\left(1 - \\frac{y_2^2 + p^2}{y_3^2 + p^2}\\right)}{y_2 - \\frac{y_2^2 + p^2}{y_3^2 + p^2} y_3} = \\frac{p(y_2 + y_3)}{y_2y_3 - p^2}.$

同理, $k_{FC}=\\frac{p(y_{1}+y_{2})}{y_{1}y_{2}-p^{2}}$ .

所以， $\\tan \\angle AFC = \\frac{k_{FC} - k_{FA}}{1 + k_{FA} \\cdot k_{FC}} = \\frac{\\frac{p(y_1 + y_2)}{y_1y_2 - p^2} - \\frac{p(y_2 + y_3)}{y_2y_3 - p^2}}{1 + \\frac{p(y_1 + y_2)}{y_1y_2 - p^2} \\cdot \\frac{p(y_2 + y_3)}{y_2y_3 - p^2}}$

$$
= \\frac {p [ (y _ {1} + y _ {2}) (y _ {2} y _ {3} - p ^ {2}) - (y _ {2} + y _ {3}) (y _ {1} y _ {2} - p ^ {2}) ]}{(y _ {1} y _ {2} - p ^ {2}) (y _ {2} y _ {3} - p ^ {2}) + p ^ {2} (y _ {1} + y _ {2}) (y _ {2} + y _ {3})} = \\frac {p (y _ {3} - y _ {1})}{y _ {3} y _ {1} + p ^ {2}}.
$$

又 $\\tan\\angle ABC=\\frac{k_{BA}-k_{BC}}{1+k_{BA}\\cdot k_{BC}}=\\frac{\\frac{p}{y_{3}}-\\frac{p}{y_{1}}}{1+\\frac{p}{y_{3}}\\cdot\\frac{p}{y_{1}}}=-\\frac{p(y_{3}-y_{1})}{y_{3}y_{1}+p^{2}}$

所以 $\\tan\\angle AFC=-\\tan\\angle ABC$ ，则 $\\angle AFC+\\angle ABC=180^{\\circ}$ .
故 A、B、C、F 四点共圆.

评注 由于 $AF$ 是经过直线 $AB, AC$ 交点的直线系中的一条，所以将点 $F$ 的坐标 $\\left(\\frac{p}{2}, 0\\right)$ 代入①便求得参数 $\\lambda$ 的值.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-6-16",
    topicId: "topic-sec-3-6",
    title: `已知三角形三边所在直线方程分别为 x-6=0`,
    content: `已知三角形三边所在直线方程分别为 $x-6=0, x+2y=0$ 和 $x-2y+8=0$ . 求这个三角形的外接圆方程.`,
    preview: `已知三角形三边所在直线方程分别为 x-6=0, x+2y=0 和 x-2y+8=0 . 求这个三角形的外接圆方程.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-6-16-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `经过三角形三顶点的二次曲线系方程为

$$
(x - 6) (x + 2 y) + \\lambda_ {1} (x + 2 y) (x - 2 y + 8) + \\lambda_ {2} (x - 6) (x - 2 y + 8) = 0,
$$

整理得

$$
(1 + \\lambda_ {1} + \\lambda_ {2}) x ^ {2} + (2 - 2 \\lambda_ {2}) x y - 4 \\lambda_ {1} y ^ {2} + (8 \\lambda_ {1} + 2 \\lambda_ {2} - 6) x + (1 6 \\lambda_ {1} + 1 2 \\lambda_ {2} - 1 2) y - 4 8 \\lambda_ {2} = 0.
$$

此方程表示圆的充要条件是 $1 + \\lambda_{1} + \\lambda_{2} = -4\\lambda_{1}$ 和 $2 - 2\\lambda_{2} = 0$ 同时成立，得 $\\lambda_1 = -\\frac{2}{5}$ 且 $\\lambda_{2} = 1$ ，代入原方程，得 $x^{2} + y^{2} - \\frac{9}{2} x - 4y - 30 = 0$ ，此即为所求的外接圆方程.

评注 若三条直线 $A_{1}x + B_{1}y + C_{1} = 0, A_{2}x + B_{2}y + C_{2} = 0$ 和 $A_{3}x + B_{3}y + C_{3} = 0$ 两两相交于相异三点，则经过这三个点的二次曲线方程为 $(A_{1}x + B_{1}y + C_{1})(A_{2}x + B_{2}y + C_{2}) + \\lambda_{1}(A_{2}x + B_{2}y + C_{2})(A_{3}x + B_{3}y + C_{3}) + \\lambda_{2}(A_{3}x + B_{3}y + C_{3})(A_{1}x + B_{1}y + C_{1}) = 0,$ 第一个乘式上可以不设置参数.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-6-17",
    topicId: "topic-sec-3-6",
    title: `已知 O 为坐标原点, F 为椭圆 C: x^2 +`,
    content: `已知 O 为坐标原点, F 为椭圆 $C: x^{2} + \\frac{y^{2}}{2} = 1$ 在 y 轴正半轴上的焦点, 过 F 且斜率为 $-\\sqrt{2}$ 的直线 l 与 C 交于 A, B 两点, 点 P 满足 $\\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OP} = 0$ .
(1)证明:点P在C上;
(2)设点 P 关于点 O 的对称点为 Q，证明：A、P、B、Q 四点在同一圆上.`,
    preview: `已知 O 为坐标原点, F 为椭圆 C: x^2 + y^22 = 1 在 y 轴正半轴上的焦点, 过 F 且斜率为 -√2 的直线 l 与 C 交于 A, B`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-6-17-sol-0",
        title: `解答`,
        method: "creative",
        steps: [],
        explanation: `(1)略.

(2)由(1)得 $P\\left(-\\frac{\\sqrt{2}}{2}, - 1\\right)$ ，因为 $P,O,Q$ 三点共线，

易求得直线 PQ 的方程为 $\\sqrt{2}x - y = 0$ . 又直线 AB 的方程为 $y = -\\sqrt{2}x + 1$ , 即 $\\sqrt{2}x + y - 1 = 0$ ,

故直线 AB、PQ 的二次方程为 $(\\sqrt{2}x+y-1)(\\sqrt{2}x-y)=0$ .

由此可设过点 $A, P, B, Q$ 的曲线系方程为

$$
(\\sqrt {2} x + y - 1) (\\sqrt {2} x - y) + \\lambda (2 x ^ {2} + y ^ {2} - 2) = 0, \\tag {①}
$$

即 $(2\\lambda+2)x^{2}+(\\lambda-1)y^{2}-\\sqrt{2}x+y-2\\lambda=0.$

令 $2\\lambda + 2 = \\lambda - 1$ ，得 $\\lambda = -3$ 。

把 $\\lambda = -3$ 代入①式化简得 $4x^{2} + 4y^{2} - \\sqrt{2}x - y - 6 = 0$ ,

因为 $(- \\sqrt{2})^{2} + (-1)^{2} - 4 \\times 4 \\times (-6) > 0$ ，所以此方程表示一个圆，故 A、P、B、Q 四点在同一圆上.

评注 通过构造二次曲线系方程,然后运用二次方程表示圆的充要条件求解与四点共圆相关问题,不仅程序化、算法化,更具有操作性强便于掌握的特点.用此方法解题的难点和关键是要理解过交点曲线系方程这一方法所蕴含的数学思想.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-6-18",
    topicId: "topic-sec-3-6",
    title: `过圆 AB 弦的中点 M`,
    content: `（蝴蝶定理）过圆 AB 弦的中点 M，任意作两弦 CD 和 EF，CF 与 ED 交弦 AB 于 P、Q。求证：PM=QM。`,
    preview: `过圆 AB 弦的中点 M，任意作两弦 CD 和 EF，CF 与 ED 交弦 AB 于 P、Q。求证：PM=QM。`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-6-18-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `如图 3-6-4 所示, 以 M 为原点, AB 所在直线为 x 轴建立直角坐标系. 设圆方程 $x^{2} + (y - b)^{2} = r^{2} (|b| < r)$ .

设直线 CD、EF 的方程分别为 $y=k_{1}x, y=k_{2}x$ ,

将它们合并为 $(y-k_{1}x)(y-k_{2}x)=0$ ，

于是过点 $C, D, E, F$ 的曲线系方程为

$$
x ^ {2} + (y - b) ^ {2} - r ^ {2} + \\lambda (y - k _ {1} x) (y - k _ {2} x) = 0;
$$

令 y=0，得 $x^{2}(1+\\lambda k_{1}k_{2})+b^{2}-r^{2}=0$ ，即过点 C、D、E、F 的曲线系与 AB 交于点 P、Q 的横坐标是方程 $x^{2}(1+\\lambda k_{1}k_{2})+b^{2}-r^{2}=0$ 的两根，

![](images/64c0f5287368845d746be8af9238cb6d3c432131cef46e1b9e33128fed72e232.jpg)

图3-6-4

由韦达定理得 $x_{P} + x_{Q} = 0$ ，即 M 是 PQ 中点，故 PM = QM.

评注 事实上, 线段 AB 与圆相切或相离, 或将圆改为椭圆、双曲线、抛物线以上结论仍然成立.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-6-19",
    topicId: "topic-sec-3-6",
    title: `已知椭圆 C_1: x^2 + 9y^2 - 2x - 36y + 27 = 0 与双曲线 C_2: 4x^`,
    content: `已知椭圆 $C_{1}: x^{2} + 9y^{2} - 2x - 36y + 27 = 0$ 与双曲线 $C_{2}: 4x^{2} - y^{2} + 2y - 5 = 0$ 有四个交点，求证此四个交点共圆，并求出此圆的中心坐标.`,
    preview: `已知椭圆 与双曲线 C_2: 4x^2 - y^2 + 2y - 5 = 0 有四个交点，求证此四个交点共圆，并求出此圆的中心坐标.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-6-19-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `设过 $C_1$ 和 $C_2$ 交点的曲线系方程为

$x^{2} + 9y^{2} - 2x - 36y + 27 + \\lambda (4x^{2} - y^{2} + 2y - 5) = 0$ （不包括 $C_2$ ），

即 $(1+4\\lambda)x^{2}+(9-\\lambda)y^{2}-2x-(36-2\\lambda)y+27-5\\lambda=0$

显然当 $1+4\\lambda=9-\\lambda$ ，即 $\\lambda=\\frac{8}{5}$ 时，曲线系方程表示一个过 $C_{1}$ 和 $C_{2}$ 交点的圆，

将 $\\lambda=\\frac{8}{5}$ 代入曲线系化简得 $37x^{2}+37y^{2}-10x-164y+95=0$ ,

即椭圆与双曲线的四个交点共圆. 不难看出, 此圆的中心坐标为 $\\left(\\frac{5}{37}, \\frac{82}{37}\\right)$ .

评注 过曲线交点的曲线方程,一般都可以设成统一型曲线系方程,但是否一定要设成带两个参数方程应该具体问题具体分析,或直接采用分类讨论.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-6-20",
    topicId: "topic-sec-3-6",
    title: `自点 P_1 向椭圆引两条切线`,
    content: `自点 $P_{1}$ 向椭圆引两条切线，切点为 $Q_{1}$ 、 $R_{1}$ ，又自点 $P_{2}$ 向此椭圆引两条切线，切点为 $Q_{2}$ 、 $R_{2}$ 。证明： $P_{1}$ 、 $Q_{1}$ 、 $R_{1}$ 、 $P_{2}$ 、 $Q_{2}$ 、 $R_{2}$ 六点在一条二次曲线上。`,
    preview: `自点 P_1 向椭圆引两条切线，切点为 Q_1 、 R_1 ，又自点 P_2 向此椭圆引两条切线，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-6-20-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `设椭圆方程为 $ax^{2}+by^{2}=1(a>0,b>0)$ , $P_{1}(x_{1},y_{1})$ , $P_{2}(x_{1},y_{2})$ ,

则过切点 $Q_{1}, R_{1}$ 的直线方程为 $ax_{1}x + by_{1}y - 1 = 0$ ,

则过切点 $Q_{2}$ 、 $R_{2}$ 的直线方程为 $ax_{2}x + by_{2}y - 1 = 0$ ，

所以经过 $Q_{1}, R_{1}, Q_{2}, R_{2}$ 的二次曲线方程设为

$$
(a x _ {1} x + b y _ {1} y - 1) (a x _ {2} x + b y _ {2} y - 1) + \\lambda (a x ^ {2} + b y ^ {2} - 1) = 0.
$$

现令 $\\lambda = -(ax_1x_2 + by_1y_2 - 1)$ ，则有

$$
(a x _ {1} x + b y _ {1} y - 1) (a x _ {2} x + b y _ {2} y - 1) - (a x _ {1} x _ {2} + b y _ {1} y _ {2} - 1) (a x ^ {2} + b y ^ {2} - 1) = 0.
$$

显然 $P_{1}, P_{2}$ 的坐标满足此方程，而此方程又是二次方程，所以 $P_{1}, Q_{1}, R_{1}, P_{2}, Q_{2}, R_{2}$ 六点在一条二次曲线上.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-6-21",
    topicId: "topic-sec-3-6",
    title: `设 0 < a < b`,
    content: `设 0 < a < b，过两定点 A(a,0) 和 B(b,0) 分别引直线 l 和 m，使之与抛物线 $y^{2} = x$ 有四个不同交点。当这四个点共圆时，求直线 l 与 m 交点 P 的轨迹。`,
    preview: `设 0 < a < b，过两定点 A(a,0) 和 B(b,0) 分别引直线 l 和 m，使之与抛物线 y^2 = x 有四个不同交点。当这四个点共圆时，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-6-21-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `利用共交点曲线系方程求解. 设 l 的方程为 $y - k_{1}x + k_{1}a = 0$ , m 的方程为 $y - k_{2}x + k_{2}b = 0$ , 过 l、m 与 $y^{2} = x$ 的四个交点的二次曲线系方程可设为 $y^{2} - x + \\lambda (y - k_{1}x + k_{1}a)(y - k_{2}x + k_{2}b) = 0$ . 它为圆的充要条件是 $k_{2}=-k_{1}$ . 故 l 与 m 交点 $P(x,y)$ 的坐标为 $\\left(\\frac{a+b}{2},\\frac{k_{1}}{2}(b-a)
ight)$ , 因此点 P 的轨迹是直线 $x=\\frac{a+b}{2}$ （除去 y=0 和 $y^{2}=x$ 的交点）.`,
      },

    ],
    tags: [],
  },
  {
    id: "prob-sec-3-7-1",
    topicId: "topic-sec-3-7",
    title: `满足条件 AB=2, AC=√2BC 的 △ ABC`,
    content: `满足条件 $AB=2, AC=\\sqrt{2}BC$ 的 $\\triangle ABC$ 的面积的最大值是 \\_\\_\\_\\_.`,
    preview: `满足条件 AB=2, AC=√2BC 的 △ ABC 的面积的最大值是 \\_\\_\\_\\_.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-7-1-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `以 AB 中点为原点, 直线 AB 为 x 轴建立平面直角坐标系,

则 $A(-1,0), B(1,0)$ , 设 $C(x,y)$ ,

由 $AC=\\sqrt{2}BC$ 得 $\\sqrt{(x+1)^{2}+y^{2}}=\\sqrt{2}\\cdot\\sqrt{(x-1)^{2}+y^{2}}$

平方化简整理得 $y^{2} = -x^{2} + 6x - 1 = -(x - 3)^{2} + 8\\leqslant 8$ ，即 $\\mid y\\mid \\leqslant 2\\sqrt{2}$ ，则

$S_{\\triangle ABC} = \\frac{1}{2}\\times 2|y|\\leqslant 2\\sqrt{2}$ ，即 $S_{\\triangle ABC}$ 的最大值是 $2\\sqrt{2}$

变式 在 $\\triangle ABC$ 中,边 $BC$ 的中点为 $D$ ,若 $AB=2,BC=\\sqrt{2}AD$ ,则 $\\triangle ABC$ 的面积的最大值是\\_\\_\\_\\_.

讲解 以 AB 中点为原点, 直线 AB 为 x 轴建立平面直角坐标系,

则 $A(-1,0), B(1,0)$

由 BD=CD, $BC=\\sqrt{2}AD$ 知, $AD=\\sqrt{2}BD$ ,

D 的轨迹为阿波罗尼斯圆, 方程为 $(x-3)^{2}+y^{2}=8$ ,

设 $C(x,y)$ ，则 $BC$ 的中点 $D$ 为 $D\\left(\\frac{x + 1}{2},\\frac{y}{2}\\right)$

所以点 C 的轨迹方程为 $\\left(\\frac{x+1}{2}-3\\right)^{2}+\\left(\\frac{y}{2}\\right)^{2}=8$ ，即 $(x-5)^{2}+y^{2}=32$ ，

所以 $y^{2} = -(x - 5)^{2} + 32 \\leqslant 32$ ，即 $|y| \\leqslant 4\\sqrt{2}$ ，则

$$
S _ {\\triangle A B C} = \\frac {1}{2} \\times 2 | y | = | y | \\leqslant 4 \\sqrt {2},
$$

故 $S_{\\triangle ABC}$ 的最大值是 $4\\sqrt{2}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-7-2",
    topicId: "topic-sec-3-7",
    title: `在平面直角坐标系 xOy 中, 设点 A(1,0)`,
    content: `在平面直角坐标系 xOy 中, 设点 A(1,0), B(3,0), C(0,a), D(0,a+2), 若存在点 P, 使得 $PA=\\sqrt{2}PB$ , PC=PD, 则实数 a 的取值范围是 \\_\\_\\_\\_.`,
    preview: `在平面直角坐标系 xOy 中, 设点 A(1,0), B(3,0), C(0,a), D(0,a+2), 若存在点 P, 使得 PA=√2PB , PC=PD,`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-7-2-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `设 $P(x,y)$ ，则 $\\sqrt{(x-1)^{2}+y^{2}}=\\sqrt{2}\\cdot\\sqrt{(x-3)^{2}+y^{2}}$

整理得 $(x-5)^{2}+y^{2}=8$ ，即动点P在以(5,0)为圆心， $2\\sqrt{2}$ 为半径的圆上运动.

另一方面，由 $PC = PD$ 知动点 $P$ 在线段 $CD$ 的垂直平分线 $y = a + 1$ 上运动，

因而问题就转化为直线 $y = a + 1$ 与圆 $(x - 5)^2 + y^2 = 8$ 有交点，

所以 $|a + 1|\\leqslant 2\\sqrt{2}$ ，故实数 $a$ 的取值范围是 $[-2\\sqrt{2} -1,2\\sqrt{2} -1]$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-7-3",
    topicId: "topic-sec-3-7",
    title: `在平面直角坐标系 xOy 中`,
    content: `在平面直角坐标系 xOy 中，点 A(0,3)，直线 l: y=2x-4。设圆的半径为 1，圆心 C 在 l 上，若圆 C 上存在点 M，使 MA=2MO，求圆心 C 的横坐标 a 的取值范围。`,
    preview: `在平面直角坐标系 xOy 中，点 A(0,3)，直线 l: y=2x-4。设圆的半径为 1，圆心 C 在 l 上，若圆 C 上存在点 M，使 MA=2MO，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-7-3-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `设 $C(a,2a - 4)$ ，则圆方程为 $(x - a)^2 +(y - 2a + 4)^2 = 1.$

又设 $M(x_{0}, y_{0})$ ，因为 MA=2MO，所以 $x_{0}^{2}+(y_{0}-3)^{2}=4x_{0}^{2}+4y_{0}^{2}$

即 $x_0^2 +(y_0 + 1)^2 = 4$ ，这说明 $M$ 既在圆 $(x - a)^2 +(y - 2a + 4)^2 = 1$ 上，又在圆 $x^{2} + (y + 1)^{2} = 4$ 上，因而这两个圆必有交点，即两圆相交或相切，

所以 $2 - 1 \\leqslant \\sqrt{(a - 0)^2 + [2a - 4 - (-1)]^2} \\leqslant 2 + 1,$

解得 $0 \\leqslant a \\leqslant \\frac{12}{5}$ , 即 $a$ 的取值范围是 $\\left[0, \\frac{12}{5}\\right]$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-7-4",
    topicId: "topic-sec-3-7",
    title: `如图 3-7-3 所示, 已知平面 α 平面 β, A`,
    content: `如图 3-7-3 所示, 已知平面 $\\alpha \\perp$ 平面 $\\beta, A, B$ 是平面 $\\alpha$ 与平面 $\\beta$ 的交线上的两个定点, $DA \\subset \\beta, CB \\subset \\beta$ , 且 $DA \\perp \\alpha, CB \\perp \\alpha, AD = 4, BC = 8, AB = 6$ , 在平面 $\\alpha$ 上有一个动点 P, 使得 $\\angle APD = \\angle BPC$ , 求 $\\triangle PAB$ 的面积的最大值.
![](images/703888e937b3af023da932f098173ba5530494f88cb7545b105097ca502d53f7.jpg)

图3-7-3`,
    preview: `如图 3-7-3 所示, 已知平面 α 平面 β, A, B 是平面 α 与平面 β 的交线上的两个定点, DA β, CB β , 且 , 在平面 α 上有一`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-7-4-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `将空间几何体中的线、面、角的关系转化为平面内点 $P$ 所满足的几何条件.

因为 $DA \\perp \\alpha$ ，所以 $DA \\perp PA$ ，所以在 Rt△PAD 中， $\\tan \\angle APD = \\frac{AD}{AP} = \\frac{4}{AP}$ .

同理 $\\tan\\angle BPC=\\frac{BC}{BP}=\\frac{8}{BP}.$

因为 $\\angle APD=\\angle BPC$ ，所以BP=2AP.

在平面 $\\alpha$ 上, 以线段 AB 的中点为原点, AB 所在的直线为 x 轴, 建立平面直角坐标系, 则 $A(-3,0)$ , $B(3,0)$ ,

设 $P(x,y)$ ，则有 $\\sqrt{(x-3)^{2}+y^{2}}=2\\sqrt{(x+3)^{2}+y^{2}}(y\\neq0)$ ，

化简得： $(x + 5)^2 +y^2 = 16$ ，所以 $y^{2} = 16 - (x + 5)^{2}\\leqslant 16$ ，所以 $|y|\\leqslant 4.$

$\\triangle PAB$ 的面积为 $S_{\\triangle PAB} = \\frac{1}{2}|y|\\cdot |AB| = 3|y|\\leqslant 12,$

当且仅当 $x=-5, y=\\pm4$ 时取等号，则 $\\triangle PAB$ 的面积的最大值是 12.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-7-5",
    topicId: "topic-sec-3-7",
    title: `已知 O : x^2 + y^2 = 1 和点 M(`,
    content: `已知 $\\odot  {O} : {x}^{2} + {y}^{2} = 1$ 和点 $M\\left( {4,2}\\right)$ .
(1) 过点 M 向 $\\odot O$ 引切线 l，求直线 l 的方程；
(2) 求以点 M 为圆心，且被直线 y = 2x - 1 截得的弦长为 4 的 $\\odot M$ 的方程；
(3) 设 P 为 (2) 中 $\\odot M$ 上任一点, 过点 P 向 $\\odot O$ 引切线, 切点为 Q. 试探究: 平面内是否存在一定点 R, 使得 $\\frac{PQ}{PR}$ 为定值? 若存在, 请举出一例, 并指出相应的定值; 若不存在, 请说明理由.`,
    preview: `已知 O : x^2 + y^2 = 1 和点 M( 4,2) . (1) 过点 M 向 O 引切线 l，求直线 l 的方程； (2) 求以点 M 为圆心，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-7-5-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 设切线 l 方程为 $y - 2 = k(x - 4)$ ，易得 $\\frac{|4k - 2|}{\\sqrt{k^{2} + 1}} = 1$ ，解得 $k = \\frac{8 \\pm \\sqrt{19}}{15}$ ，

所以切线 l 方程为 $y-2=\\frac{8\\pm\\sqrt{19}}{15}(x-4)$ .

(2)圆心到直线 y=2x-1 的距离为 $\\sqrt{5}$ ，设圆的半径为 r，则 $r^{2}=2^{2}+(\\sqrt{5})^{2}=9$ ，所以 $\\odot M$ 的方程为 $(x-4)^{2}+(y-2)^{2}=9$ .
(3) 假设存在这样的点 $R(a, b)$ ，点 P 的坐标为 $(x, y)$ ，相应的定值为 $\\lambda$ .

根据题意可得 $PQ=\\sqrt{x^{2}+y^{2}-1}$ ，则 $\\frac{\\sqrt{x^{2}+y^{2}-1}}{\\sqrt{(x-a)^{2}+(y-b)^{2}}}=\\lambda$ ，

即 $x^{2}+y^{2}-1=\\lambda^{2}(x^{2}+y^{2}-2ax-2by+a^{2}+b^{2})$ . (\\*)

又点 P 在圆上, 所以 $(x-4)^{2}+(y-2)^{2}=9$ ,

即 $x^{2}+y^{2}=8x+4y-11$ ，代入(\\*)式得

$$
8 x + 4 y - 1 2 = \\lambda^ {2} [ (8 - 2 a) x + (4 - 2 b) y + (a ^ {2} + b ^ {2} - 1 1) ].
$$

若系数对应相等,则等式恒成立,则 $\\left\\{\\begin{aligned}\\lambda^{2}(8-2a)=8,\\\\ \\lambda^{2}(4-2b)=4,\\\\ \\lambda^{2}(a^{2}+b^{2}-11)=-12,\\end{aligned}\\right.$

解得 $a = 2, b = 1, \\lambda = \\sqrt{2}$ 或 $a = \\frac{2}{5}, b = \\frac{1}{5}, \\lambda = \\frac{\\sqrt{10}}{3}$ ,

所以可以找到这样的定点 R，使得 $\\frac{PQ}{PR}$ 为定值。如点 R 的坐标为 (2,1) 时，比值为 $\\sqrt{2}$ ；
点 R 的坐标为 $\\left(\\frac{2}{5},\\frac{1}{5}\\right)$ 时，比值为 $\\frac{\\sqrt{10}}{3}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-7-6",
    topicId: "topic-sec-3-7",
    title: `如图 3-7-4 所示, 已知 O: x^2 + y^2`,
    content: `如图 3-7-4 所示, 已知 $\\odot O: x^{2} + y^{2} = 4$ , 点 A 是直线 l: x = 4 上纵坐标为 t 的点, 求证: 存在一个异于点 A 的点 B, 对于 $\\odot O$ 上任意一点 P, 有 $\\frac{PB}{PA}$ 为定值, 且当点 A 在直线 l 上运动时, 点 B 在一个定圆上.
![](images/2025e04b128b2627a569567463f571e21790189a7d12680437c14cbbe702a1e1.jpg)

图3-7-4`,
    preview: `如图 3-7-4 所示, 已知 O: x^2 + y^2 = 4 , 点 A 是直线 l: x = 4 上纵坐标为 t 的点, 求证: 存在一个异于点 A 的点`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-7-6-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `设⊙O上任意一点 $P(x_{0},y_{0})$ ,

定点 $B(x,y)$ , $\\frac{PB^{2}}{PA^{2}}=\\lambda(\\lambda>0,\\lambda\\neq1)$ , l 上取一点 $A(4,t)$ ,

则 $(x_{0}-x)^{2}+(y_{0}-y)^{2}=\\lambda(x_{0}-4)^{2}+\\lambda(y_{0}-t)^{2}$

得 $x_0^2 + y_0^2 - 2x_0x - 2y_0y + x^2 + y^2 = \\lambda (x_0^2 + y_0^2 + 16 + t^2 - 8x_0 - 2ty_0)$ .

将 $x_{0}^{2}+y_{0}^{2}=4$ 代入，得 $-2x_{0}x-2y_{0}y+x^{2}+y^{2}+4=-8\\lambda x_{0}-2\\lambda ty_{0}+(20+t^{2})\\lambda.$

因为对任意的 P 点都有上式成立, 所以 $x=4\\lambda, y=t\\lambda, x^{2}+y^{2}+4=(20+t^{2})\\lambda$ .

消去 x, y, 得 $16\\lambda^{2} + t^{2}\\lambda^{2} + 4 = (20 + t^{2})\\lambda$ ,

整理得 $(16+t^{2})\\lambda^{2}-(20+t^{2})\\lambda+4=0$ ，即 $(\\lambda-1)\\left[(16+t^{2})\\lambda-4\\right]=0$ .

因为 $\\lambda \\neq 1$ ，所以 $\\lambda = \\frac{4}{16 + t^{2}}$ ，故存在一个异于点 A 的点，使 $\\frac{PB}{PA}$ 为定值.

将 $16 + t^2 = \\frac{4}{\\lambda}$ 代入 $x^{2} + y^{2} + 4 = (20 + t^{2})\\lambda$ 得 $x^{2} + y^{2} = 4\\lambda$ ，所以 $x^{2} + y^{2} = x$

故点 B 在圆心为 $\\left(\\frac{1}{2},0\\right)$ ，半径为 $\\frac{1}{2}$ 的定圆上.

评注 事实上,定值 $\\lambda$ 也可通过取特殊点求得,再验证.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-7-7",
    topicId: "topic-sec-3-7",
    title: `如图 3-7-5 所示, 已知椭圆 C: x^2{a^2}`,
    content: `如图 3-7-5 所示, 已知椭圆 $C: \\frac{x^{2}}{a^{2}} + \\frac{y^{2}}{4} = 1 (a > 2)$ , $\\odot O: x^{2} + y^{2} = 4$ , 点 A, B 分别为椭圆 C 的右顶点和右焦点, 对于 $\\odot O$ 上任意一点 P, 是否存在这样的椭圆 C, 使得 $\\frac{PB}{PA}$ 为定值? 如果存在, 试求椭圆 C 的方程; 如果不存在, 请说明理由.
![](images/91234b80a2730fb1e99f67d71a1721ab8cb5aed849d6cc07e142597520a6c0cc.jpg)

图3-7-5`,
    preview: `如图 3-7-5 所示, 已知椭圆 C: x^2{a^2} + y^24 = 1 (a > 2) , O: x^2 + y^2 = 4 , 点 A, B 分别为`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-7-7-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `设 $B(c,0)$ , $c^{2}=a^{2}-4$ ,

$P(x,y),\\frac{PB^{2}}{PA^{2}}=\\lambda(\\lambda \\text{ 为常数}),$

则有 $(x_0 - c)^2 + y_0^2 = \\lambda [(x_0 - a)^2 + y_0^2]$

即 $4-2cx_{0}+c^{2}=\\lambda(4-2ax_{0}+a^{2})$ ,

即对 $x_{0}\\in[-2,2]$ 恒成立，所以 $\\left\\{\\begin{aligned}4+c^{2}&=\\lambda(4+a^{2}),\\\\ c&=\\lambda a,\\end{aligned}\\right.$

消去 $\\lambda$ 得 $4a + ac^{2} = 4c + a^{2}c$ ，即 $(c - a)(ac - 4) = 0$ .

由 $c \\neq a$ ，得 ac = 4，又 $c^{2} = a^{2} - 4$ ，解得 $a^{2} = 2 + 2\\sqrt{5}$ ， $c^{2} = 2\\sqrt{5} - 2$ ，

故存在这样的椭圆 $C: \\frac{x^{2}}{2+2\\sqrt{5}}+\\frac{y^{2}}{4}=1$ 满足条件.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-7-8",
    topicId: "topic-sec-3-7",
    title: `在直角坐标系 xOy 中`,
    content: `在直角坐标系 xOy 中，椭圆 $\\frac{x^{2}}{9} + \\frac{y^{2}}{4} = 1$ 的左、右焦点分别为 $F_{1}, F_{2}$ ，点 A 为椭圆的左顶点。椭圆上的点 P 在第一象限， $PF_{1} \\perp PF_{2}$ 。 $\\odot O$ 的方程为 $x^{2} + y^{2} = 4$ 。
(1) 求点 P 坐标, 并判断直线 $PF_{2}$ 与 $\\odot O$ 的位置关系;

(2)是否存在不同于点 A 的定点 B, 对于 $\\odot O$ 上任意一点 M, 都有 $\\frac{MB}{MA}$ 为常数? 若存在, 求所有满足条件的点 B 的坐标; 若不存在, 说明理由.`,
    preview: `在直角坐标系 xOy 中，椭圆 x^29 + y^24 = 1 的左、右焦点分别为 F_1, F_2 ，点 A 为椭圆的左顶点。椭圆上的点 P 在第一象限，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-7-8-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 方法一: 设点 P 的坐标为 $(x, y)$ $(x > 0, y > 0)$ ,

则 $\\frac{x^{2}}{9}+\\frac{y^{2}}{4}=1.$ ①

因为 $F_{1}(-\\sqrt{5},0)$ , $F_{2}(\\sqrt{5},0)$ , $PF_{1}\\perp PF_{2}$ ，所以 $x^{2}+y^{2}=5$ . ②

由①②联立方程组解得 $x=\\frac{3\\sqrt{5}}{5}$ , $y=\\frac{4\\sqrt{5}}{5}$ ,

所以点 P 的坐标为 $\\left(\\frac{3\\sqrt{5}}{5}, \\frac{4\\sqrt{5}}{5}\\right)$ ,

所以直线 $PF_{2}$ 的方程为 $2x + y - 2\\sqrt{5} = 0$ .

因为 $\\odot O$ 的方程为 $x^{2}+y^{2}=4$ ，

所以圆心 $O(0,0)$ 到直线 $PF_{2}$ 的距离为 $d=\\frac{2\\sqrt{5}}{\\sqrt{5}}=2$ .

所以 $PF_{2}$ 与 $\\odot O$ 相切.

方法二:设点 P 的坐标为 $(x,y)(x>0,y>0)$ .

因为 $PF_{1} \\perp PF_{2}, c = \\sqrt{5}$ ，所以 $PF_{1}^{2} + PF_{2}^{2} = 4c^{2} = 20$ .

因为 $PF_{1} + PF_{2} = 2a = 6$ ，所以 $PF_{1} \\cdot PF_{2} = 8$ 。

因为 $2cy = PF_{1} \\cdot PF_{2}$ ，所以 $2\\sqrt{5}y = 8$ .

所以 $y=\\frac{4\\sqrt{5}}{5}, x=\\frac{3\\sqrt{5}}{5}$ . 所以点 P 的坐标为 $\\left(\\frac{3\\sqrt{5}}{5}, \\frac{4\\sqrt{5}}{5}\\right)$ .

所以 $PF_{2}$ 的方程为 $2x + y - 2\\sqrt{5} = 0$ .

因为 $\\odot O$ 的方程为 $x^{2}+y^{2}=4$ ，

所以圆心 $O(0,0)$ 到直线 $PF_{2}$ 的距离为 $d=\\frac{2\\sqrt{5}}{\\sqrt{5}}=2$ .

所以 $PF_{2}$ 与 $\\odot O$ 相切.

(2) 设点 M 的坐标为 $(x, y)$ ，则 $x^{2} + y^{2} = 4$ .

假设存在点 $B(m,n)$ ，对于 $\\odot O$ 上任意一点 M，都有 $\\frac{MB}{MA}$ 为常数，

则 $MB^{2}=(x-m)^{2}+(y-n)^{2},MA^{2}=(x+3)^{2}+y^{2}$

所以 $\\frac{(x-m)^{2}+(y-n)^{2}}{(x+3)^{2}+y^{2}}=\\lambda$ （常数）恒成立.

可得 $(6\\lambda+2m)x+2ny+13\\lambda-m^{2}-n^{2}-4=0$

所以 $\\left\\{\\begin{aligned}3\\lambda+m=0,\\\\ 2n=0,\\\\ 13\\lambda-m^{2}-n^{2}-4=0,\\end{aligned}\\right.$

解得 $\\left\\{\\begin{aligned}\\lambda&=\\frac{4}{9},\\\\ m&=-\\frac{4}{3},\\\\ n&=0,\\end{aligned}\\right.$ 或 $\\left\\{\\begin{aligned}\\lambda&=1,\\\\ m&=-3,\\\\ n&=0\\end{aligned}\\right.$ （舍）.

所以，存在满足条件的点 $B$ ，它的坐标为 $\\left(-\\frac{4}{3},0\\right)$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-8-1",
    topicId: "topic-sec-3-8",
    title: `已知 F 为抛物线 C: y^2=4x 的焦点, 过点 F`,
    content: `已知 F 为抛物线 C: $y^{2}=4x$ 的焦点, 过点 F 作两条相互垂直的直线 $l_{1}, l_{2}$ , 直线 $l_{1}$ 与抛物线交于 A, B 两点, 直线 $l_{2}$ 与抛物线交于 D, E 两点, 则 $AB+DE$ 的最小值为 \\_\\_\\_\\_.`,
    preview: `已知 F 为抛物线 C: y^2=4x 的焦点, 过点 F 作两条相互垂直的直线 l_1, l_2 , 直线 l_1 与抛物线交于 A, B 两点, 直线 l_`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-8-1-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `以焦点为极点,x 轴为极轴建立极坐标系,则 e=1,p=2,

抛物线的极坐标方程为 $\\rho=\\frac{2}{1-\\cos\\theta}$ ,

设直线 $AB$ 的倾斜角为 $\\theta$ ，直线 $DE$ 的倾斜角为 $\\theta +\\frac{\\pi}{2}$ ，则

$$
A B = F A + F B = \\frac {2}{1 - \\cos \\theta} + \\frac {2}{1 + \\cos \\theta} = \\frac {4}{1 - \\cos^ {2} \\theta} = \\frac {4}{\\sin^ {2} \\theta},
$$

用 $\\theta+\\frac{\\pi}{2}$ 代替上式中的 $\\theta$ ，得 $DE=\\frac{4}{\\sin^{2}\\left(\\theta+\\frac{\\pi}{2}\\right)}=\\frac{4}{\\cos^{2}\\theta}$

由柯西不等式,得

$$
AB + DE = \\frac{4}{\\sin^2\\theta} +\\frac{4}{\\cos^2\\theta} = \\left(\\frac{4}{\\sin^2\\theta} +\\frac{4}{\\cos^2\\theta}\\right)(\\sin^2\\theta +\\cos^2\\theta)\\geqslant (2 + 2)^2 = 16,
$$

当 $\\sin^{2}\\theta=\\cos^{2}\\theta=\\frac{1}{2}$ 时上式取等号，故 $AB+DE$ 的最小值为 16.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-8-2",
    topicId: "topic-sec-3-8",
    title: `A、B 是椭圆 x^29+y^24=1 上的两个动点`,
    content: `A、B 是椭圆 $\\frac{x^{2}}{9}+\\frac{y^{2}}{4}=1$ 上的两个动点，满足 $\\overrightarrow{OA}\\cdot\\overrightarrow{OB}=0$ .
(1)求证: $\\frac{1}{|OA|^2} + \\frac{1}{|OB|^2}$ 为定值；
(2)动点 P 在线段 AB 上, 满足 $\\overrightarrow{OP} \\cdot \\overrightarrow{AB} = 0$ , 求证: 点 P 在定圆上.`,
    preview: `A、B 是椭圆 x^29+y^24=1 上的两个动点，满足 →OA·→OB=0 . (1)求证: 1/|OA|^2 + 1/|OB|^2 为定值； (2)动点`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-8-2-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)如图3-8-1所示,以原点为极点,x轴正半轴为极轴建立极坐标系,

设 $|OA|=a,|OB|=b,\\angle AOx=\\theta,$

则点 $A(a\\cos\\theta, a\\sin\\theta)$ ,

则点 $B\\left(b\\cos\\left(\\theta+\\frac{\\pi}{2}\\right), b\\sin\\left(\\theta+\\frac{\\pi}{2}\\right)\\right)=(-b\\sin\\theta, b\\cos\\theta)$ ,

点 A、B 在椭圆上，把点坐标代入椭圆方程可得

$$
a ^ {2} \\left(\\frac {\\cos^ {2} \\theta}{9} + \\frac {\\sin^ {2} \\theta}{4}\\right) = 1 \\Rightarrow \\frac {1}{a ^ {2}} = \\frac {\\cos^ {2} \\theta}{9} + \\frac {\\sin^ {2} \\theta}{4},
$$

同理可得 $\\frac{1}{b^{2}}=\\frac{\\sin^{2}\\theta}{9}+\\frac{\\cos^{2}\\theta}{4}$

两式相加可得 $\\frac{1}{a^{2}}+\\frac{1}{b^{2}}=\\frac{1}{9}+\\frac{1}{4}=\\frac{13}{36}$ 为定值.

(2)由 $\\overrightarrow{OP}\\cdot\\overrightarrow{AB}=0$ 知 $OP\\perp AB$ ，所以

$$
\\left| O P \\right| \\cdot \\left| A B \\right| = \\left| O A \\right| \\cdot \\left| O B \\right|
$$

$\\Rightarrow |OP| = \\frac{|OA| \\cdot |OB|}{|AB|} = \\frac{ab}{\\sqrt{a^2 + b^2}} = \\frac{1}{\\sqrt{\\frac{1}{a^2} + \\frac{1}{b^2}}} = \\sqrt{\\frac{36}{13}}$ 为定值，

所以 P 在以 O 为圆心, 半径为 $\\sqrt{\\frac{36}{13}}$ 的定圆上.

![](images/cfeefdc0a4d4264de031f931d1a5bb6f58c73463890a7ad2611de599af586857.jpg)

图3-8-1

评注 本题也可利用 $OA \\perp OB$ ，设它们的斜率分别为 $k, -\\frac{1}{k}$ ，以 $k$ 为主变量进行运算，选用极坐标系，解题更简洁.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-8-3",
    topicId: "topic-sec-3-8",
    title: `在平面直角坐标系 xOy 中, 菱形 ABCD 的边长为`,
    content: `在平面直角坐标系 xOy 中, 菱形 ABCD 的边长为 4, 且 $\\left|OB\\right| = \\left|OD\\right| = 6$ .
(1) 求证: $\\left|OA\\right|\\cdot\\left|OC\\right|$ 为定值;
(2) 当点 A 在半圆 $(x-2)^{2}+y^{2}=4(2\\leqslant x\\leqslant4)$ 上运动时, 求点 C 的轨迹.`,
    preview: `在平面直角坐标系 xOy 中, 菱形 ABCD 的边长为 4, 且 |OB| = |OD| = 6 . (1) 求证: |OA|·|OC| 为定值; (2) 当`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-8-3-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `(1) 因为 $\\left|OB\\right|=\\left|OD\\right|$ , $\\left|AB\\right|=\\left|AD\\right|=\\left|BC\\right|=\\left|CD\\right|$ ,

所以 $O, A, C$ 三点共线，如图3-8-2所示，连接 $BD$ ，则 $BD$ 垂直平分线段 $AC$ ，设垂足为 $K$ ，于是有

![](images/64b780f4ada5ffd4b8fa75ff43e013b162411672c3353f074e06d8f2e95524b1.jpg)

$$
\\begin{array}{l} \\left| O A \\right| \\cdot \\left| O C \\right| = (\\left| O K \\right| - \\left| A K \\right|) (\\left| O K \\right| + \\left| A K \\right|) \\\\ = | O K | ^ {2} - | A K | ^ {2} \\\\ = (\\left| O B \\right| ^ {2} - \\left| B K \\right| ^ {2}) - (\\left| A B \\right| ^ {2} - \\left| B K \\right| ^ {2}) \\\\ = | O B | ^ {2} - | A B | ^ {2} = 6 ^ {2} - 4 ^ {2} = 2 0 (\\text {定值}). \\\\ \\end{array}
$$

(2)以原点为极点,x轴正半轴为极轴建立极坐标系.

设 $A(\\rho_1,\\theta),C(\\rho_2,\\theta)\\left(-\\frac{\\pi}{4}\\leqslant \\theta \\leqslant \\frac{\\pi}{4}\\right),$

则由(1)的结论可得: $\\rho_{1}\\cdot\\rho_{2}=20,$ （\\*）

而点 A 所在的半圆的极坐标方程为 $\\rho=4\\cos\\theta\\left(-\\frac{\\pi}{4}\\leqslant\\theta\\leqslant\\frac{\\pi}{4}\\right)$ ,

所以 $\\rho_{1} = 4\\cos \\theta$ ，代入（\\*）可得 $\\rho_{2} = \\frac{5}{\\cos\\theta}\\left(-\\frac{\\pi}{4}\\leqslant \\theta \\leqslant \\frac{\\pi}{4}\\right)$

再转化为直角坐标: $x=\\rho_{2}\\cos\\theta=5,y=\\rho_{2}\\sin\\theta=5\\tan\\theta\\in[-5,5]$

故点 C 的轨迹为线段 $x=5(-5 \\leqslant y \\leqslant 5)$ .

评注 根据图中的菱形和等腰三角形的性质可知 O、A、C 三点共线，结合菱形的对角线垂直可知边长关系，第(1)小题用平面几何方法可快速求解。第(2)小题由点 O、A、C 三点共线知三点的角度是一样的，只有长度不一样，加上(1)的结论可知， $|AO|$ 与 $|OC|$ 的长度之积为定值 20，可以用极坐标 $(\\rho, \\theta)$ 求解。`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-8-4",
    topicId: "topic-sec-3-8",
    title: `如图 3-8-3 所示, 已知圆 F: x^2 + y^2`,
    content: `如图 3-8-3 所示, 已知圆 $F: x^{2} + y^{2} - 4x = 0$ , 抛物线 G 的顶点是坐标系的原点, 焦点是已知圆的圆心 F, 过圆心且倾斜角为 $\\theta$ 的直线 l 与抛物线 G、圆 F 从上至下顺次交于 A、B、C、D 四点.
![](images/64b780f4ada5ffd4b8fa75ff43e013b162411672c3353f074e06d8f2e95524b1.jpg)

图3-8-2

(1) 当直线的斜率为 2 时, 求 $AB + CD$ ;
(2) 当 $\\theta$ 为何值时, $AB + CD$ 有最小值? 并求这个最小值.`,
    preview: `如图 3-8-3 所示, 已知圆 F: x^2 + y^2 - 4x = 0 , 抛物线 G 的顶点是坐标系的原点, 焦点是已知圆的圆心 F, 过圆心且倾斜角为`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-8-4-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `圆 $F: x^{2} + y^{2} - 4x = 0$ 的圆心坐标为 (2,0)，半径为 2，所以抛物线的焦点到准线的距离为 4。以圆心 F 为极点，Fx 为极轴建立极坐标系。则圆 F 的极坐标方程为 $\\rho = 2$ ，抛物线 G 的极坐标方程为 $\\rho = \\frac{4}{1 - \\cos\\theta}$ 。

![](images/31ee91d883dde56d51e63f42a1bbc3732c5fd470ed1cc8f070ccb6e9dbc6f3e6.jpg)

图3-8-3

设 $A(\\rho_{1},\\theta)$ 、 $D(\\rho_{2},\\theta+\\pi)$ ，所以 AB=AF-2, CD=FD-2,

即 $AB + CD = AF + FD - 4 = \\rho_{1} + \\rho_{2} - 4 = \\frac{4}{1 - \\cos\\theta} +\\frac{4}{1 - \\cos(\\theta + \\pi)} -4$

$$
= \\frac {4}{1 - \\cos \\theta} + \\frac {4}{1 + \\cos \\theta} - 4 = \\frac {8}{1 - \\cos^ {2} \\theta} - 4 = \\frac {8}{\\sin^ {2} \\theta} - 4.
$$

(1)由题意得 $\\tan\\theta=2$ ，所以 $\\sin^{2}\\theta=\\frac{4}{5}$ ，所以 $AB+CD=\\frac{8}{\\sin^{2}\\theta}-4=6$ .
(2) $AB+CD=\\frac{8}{\\sin^{2}\\theta}-4$ , 当 $\\sin^{2}\\theta=1$ , 即 $\\theta=\\frac{\\pi}{2}$ 时 $\\triangle ABF_{2}$ 的面积取到最小值 4.

评注 圆和抛物线的极坐标方程在求解有关距离问题时具有独特的优势,可以对线段长度和极角进行相互转化.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-8-5",
    topicId: "topic-sec-3-8",
    title: `已知椭圆 x^2/24 +y^2/16 = 1`,
    content: `已知椭圆 $\\frac{x^2}{24} +\\frac{y^2}{16} = 1$ ，直线 $l:\\frac{x}{12} +\\frac{y}{8} = 1,P$ 是 $l$ 上一点，射线 $OP$ 交椭圆于 $R$ ，又点 $Q$ 在 $OP$ 上，且满足 $|OQ|\\cdot |OP| = |OR|^2$ ，当点 $P$ 在 $l$ 上移动时，求点 $Q$ 的轨迹方程，并说明轨迹是什么曲线.`,
    preview: `已知椭圆 x^2/24 +y^2/16 = 1 ，直线 l:x/12 +y/8 = 1,P 是 l 上一点，射线 OP 交椭圆于 R ，又点 Q 在 OP 上，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-8-5-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `如图 3-8-4 所示, 以 O 为极点, Ox 为极轴, 建立极坐标系, 则:

椭圆的极坐标方程为 $\\rho^{2}=\\frac{48}{2\\cos^{2}\\theta+3\\sin^{2}\\theta}$ ,

直线 l 的极坐标方程为 $\\rho=\\frac{24}{2\\cos\\theta+3\\sin\\theta}$ .

![](images/4071f9936fbc446f770c8d4d7678a6d7b4e5a30f266b566778c27fe477a68a29.jpg)

图3-8-4

由于点 $Q, R, P$ 在同一射线上，可设点 $Q, R, P$ 的极坐标分别为 $(\\rho, \\theta), (\\rho_1, \\theta), (\\rho_2, \\theta)$ ，依题意，得

$$
\\rho_ {1} ^ {2} = \\frac {4 8}{2 \\cos^ {2} \\theta + 3 \\sin^ {2} \\theta}, \\tag {①}
$$

$$
\\rho_ {2} = \\frac {2 4}{2 \\cos \\theta + 3 \\sin \\theta}. \\tag {②}
$$

由 $|OQ|\\cdot |OP| = |OR|^2$ 得 $\\rho \\cdot \\rho_{2} = \\rho_{1}^{2}(\\rho \\neq 0)$

将①②代入，得 $\\rho\\cdot\\frac{24}{2\\cos\\theta+3\\sin\\theta}=\\frac{48}{2\\cos^{2}\\theta+3\\sin^{2}\\theta}$

则 $\\rho=\\frac{4\\cos\\theta+6\\sin\\theta}{2\\cos^{2}\\theta+3\\sin^{2}\\theta}(\\rho\\neq0)$ .

这就是点 Q 的轨迹的极坐标方程, 化为直角坐标方程, 得

$2x^{2}+3y^{2}=4x+6y$ ，即 $\\frac{(x-1)^{2}}{\\frac{5}{2}}+\\frac{(y-1)^{2}}{\\frac{5}{3}}=1(x,y$ 不同时为0），

所以点 $Q$ 的轨迹为以(1,1)为中心，长轴平行于 $x$ 轴，长、短半轴长分别为 $\\frac{\\sqrt{10}}{2},\\frac{\\sqrt{15}}{3}$ 的椭圆（去掉坐标原点）.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-8-6",
    topicId: "topic-sec-3-8",
    title: `过椭圆 x^2/a^2 +y^2/b^2 = 1(a > b > 0) 右焦点 F(1,0) 的直线（长轴除外）与椭`,
    content: `过椭圆 $\\frac{x^2}{a^2} +\\frac{y^2}{b^2} = 1(a > b > 0)$ 右焦点 $F(1,0)$ 的直线（长轴除外）与椭圆交于 $M,N$ 两点，自 $M,N$ 向右准线 $l:x = 4$ 做垂线，垂足分别为 $M_{1},N_{1}$ ，记 $\\triangle FMM_{1}$ $\\triangle FM_{1}N_{1},\\triangle FNN_{1}$ 的面积分别为 $S_{1},S_{2},S_{3}$ ，是否存在 $\\lambda$ ，使得 $S_2^2 = \\lambda S_1S_3$ 恒成立？若存在求出 $\\lambda$ 的值，若不存在，说明理由.`,
    preview: `过椭圆 右焦点 F(1,0) 的直线（长轴除外）与椭圆交于 M,N 两点，自 M,N 向右准线 l:x = 4 做垂线，垂足分别为 M_1,N_1 ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-8-6-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `如图 3-8-5 所示, 以右焦点 F 为极点, 以 x 轴正半轴为极轴建立极坐标系, 则椭圆的极坐标方程为 $\\rho = \\frac{ep}{1 + e\\cos\\theta}$ , 设 $|FM| = \\rho_{1}, |FN| = \\rho_{2}, \\angle MFx = \\alpha$ ,

则 $M(\\rho_1,\\alpha),N(\\rho_2,\\alpha -\\pi)$

易知椭圆的离心率 $e=\\frac{1}{2}$ ,

由椭圆的第二定义可知 $|MM_{1}| = 2\\rho_{1}, |NN_{1}| = 2\\rho_{2}$

![](images/69033515cb8bd40832d2e13f62da9dece5814ffaeeee6f630e6d6254a3e84db5.jpg)

图3-8-5

则 $S_{1} = \\frac{1}{2} |MF||MM_{1}|\\sin \\angle M_{1}MF = \\rho_{1}^{2}\\sin \\alpha ,$

同理 $S_{3} = \\frac{1}{2} |NF||NN_{1}|\\sin \\angle N_{1}NF = \\rho_{2}^{2}\\sin \\alpha ,$

而 $S_{3} = \\frac{1}{2}\\times 3(\\rho_{1}\\sin \\alpha +\\rho_{2}\\sin \\alpha) = \\frac{3}{2} (\\rho_{1} + \\rho_{2})\\sin \\alpha ,$

$\\lambda = \\frac{S_2^2}{S_1S_3} = \\frac{9(\\rho_1 + \\rho_2)^2}{4\\rho_1^2\\cdot\\rho_2^2} = \\frac{9}{4}\\times \\frac{\\left[\\frac{ep}{1 + e\\cos\\alpha} + \\frac{ep}{1 + e\\cos(\\pi - \\alpha)}\\right]^2}{\\left(\\frac{ep}{1 + e\\cos\\alpha}\\right)^2\\left(\\frac{ep}{1 + e\\cos(\\pi - \\alpha)}\\right)^2} = \\frac{9}{4}\\times \\frac{4}{(ep)^2} = 4$ 为定值.

所以存在实数 $\\lambda=4$ 使得 $S_{2}^{2}=4S_{1}S_{3}$ 恒成立.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-8-7",
    topicId: "topic-sec-3-8",
    title: `在平面直角坐标系 xOy 中, 双曲线 C:`,
    content: `在平面直角坐标系 xOy 中, 双曲线 $C: \\frac{x^{2}}{a^{2}} - \\frac{y^{2}}{b^{2}} = 1$ 的右焦点为 F, 过点 F 的直线 l 与双曲线 C 交于 A, B 两点, 若 $OF \\cdot AB = FA \\cdot FB$ , 求双曲线的离心率 e.`,
    preview: `在平面直角坐标系 xOy 中, 双曲线 C: x^2{a^2} - y^2{b^2} = 1 的右焦点为 F, 过点 F 的直线 l 与双曲线 C 交于 A,`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-8-7-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `当 $AB$ 斜率不存在时, $FA = FB = \\frac{b^2}{a}, AB = \\frac{2b^2}{a}$ , 因为 $OF \\cdot AB = FA \\cdot FB$ , 所以 $c \\cdot \\frac{2b^2}{a} = \\frac{b^2}{a} \\cdot \\frac{b^2}{a}$ , 化简得 $2ac = b^2$ , 即 $e^2 - 2e - 1 = 0$ , 因为 $e > 1$ , 故 $e = 1 + \\sqrt{2}$ .

当 AB 斜率存在时, 设直线 l 的方程为 $y = k(x - c)$ , 代入双曲线方程整理得

$(a^{2}k^{2} - b^{2})x^{2} - 2a^{2}k^{2}cx + a^{2}k^{2}c^{2} + a^{2}b^{2} = 0.$ 设 $A(x_{1},y_{1}),B(x_{2},y_{2}),$

则 $x_{1} + x_{2} = \\frac{2a^{2}k^{2}c}{a^{2}k^{2} - b^{2}}$ ， ①

$$
x _ {1} x _ {2} = \\frac {a ^ {2} k ^ {2} c ^ {2} + a ^ {2} b ^ {2}}{a ^ {2} k ^ {2} - b ^ {2}}. \\tag {②}
$$

因为 $OF \\cdot AB = FA \\cdot FB$ ,

所以 $c\\sqrt{1 + k^2}|x_1 - x_2| = \\sqrt{(x_1 - c)^2 + y_1^2}\\cdot \\sqrt{(x_2 - c)^2 + y_2^2},$

即 $c \\sqrt{1+k^{2}} |x_{1}-x_{2}| = \\sqrt{1+k^{2}} |x_{1}-c| \\cdot \\sqrt{1+k^{2}} |x_{2}-c|$ ,

即 $c\\sqrt{(x_1 + x_2)^2 - 4x_1x_2} = \\sqrt{1 + k^2}\\left|x_1x_2 - c(x_1 + x_2) + c^2\\right|$

将①②代入化简得 $2ac = b^{2}$ ，即 $e^2 - 2e - 1 = 0$ ，因为 $e > 1$ ，故 $e = 1 + \\sqrt{2}$ .`,
      },
      {
        id: "prob-sec-3-8-7-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `设直线 l 的方程为 $x=my+c$ ，代入双曲线得

$(a^{2} - b^{2}m^{2})y^{2} - 2mb^{2}cy - b^{4} = 0$ ，设 $A(x_{1},y_{1}),B(x_{2},y_{2})$

则 $y_{1} + y_{2} = \\frac{2mb^{2}c}{a^{2} - b^{2}m^{2}}$ ， ①

$$
y _ {1} y _ {2} = \\frac {- b ^ {4}}{a ^ {2} - b ^ {2} m ^ {2}}. \\tag {②}
$$

因为 $OF \\cdot AB = FA \\cdot FB$ ，所以 $c \\sqrt{1 + m^{2}} |y_{1} - y_{2}| = \\sqrt{(x_{1} - c)^{2} + y_{1}^{2}} \\cdot \\sqrt{(x_{2} - c)^{2} + y_{2}^{2}}$

即 $c\\sqrt{1 + m^2}|y_1 - y_2| = \\sqrt{m^2y_1^2 + y_1^2}\\cdot \\sqrt{m^2y_2^2 + y_2^2},$

即 $c(1 + m^2)[(y_1 + y_2)^2 - 4y_1y_2] = (1 + m^2)^2 (y_1y_2)^2,$

将①②代入化简得 $2ac=b^{2}$ ，即 $e^{2}-2e-1=0$ ，因为 e>1，故 $e=1+\\sqrt{2}$ .`,
      },
      {
        id: "prob-sec-3-8-7-sol-2",
        title: `解法三`,
        method: "standard",
        steps: [],
        explanation: `设 $A(x_{1}, y_{1})$ , $B(x_{2}, y_{2})$ , $\\overrightarrow{FA} = m \\overrightarrow{FB} (m < 0)$ ,

故 $(x_{1}-c,y_{1})=m(x_{2}-c,y_{2})$ ，则 $\\left\\{\\begin{aligned}x_{1}&=mx_{2}+(1-m)c,\\\\ y_{1}&=my_{2},\\end{aligned}\\right.$

所以 $C: \\frac{[mx_2 + (1 - m)c]^2}{a^2} - \\frac{(my_2)^2}{b^2} = 1$ ，又 $C: \\frac{x_2^2}{a^2} - \\frac{y_2^2}{b^2} = 1$

解得 $cx_{2} = \\frac{(m - 1)c^{2}}{2m} +\\frac{(m + 1)a^{2}}{2m},$ ②

因为 $OF \\cdot AB = FA \\cdot FB$ ,

所以 $c\\sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2} = \\sqrt{(x_1 - c)^2 + y_1^2}\\cdot \\sqrt{(x_2 - c)^2 + y_2^2},$

将①②代入化简得 $2ac(m-1)=b^{2}(m-1)$ ,

因为 m<0，所以 $2ac=b^{2}$ ，即 $e^{2}-2e-1=0$ ，因为 e>1，故 $e=1+\\sqrt{2}$ .`,
      },
      {
        id: "prob-sec-3-8-7-sol-3",
        title: `解法四`,
        method: "standard",
        steps: [],
        explanation: `由题意,双曲线的右焦点为 $F(c,0)$ , 设直线 $l$ 的方程为 $\\left\\{ \\begin{array}{l} x = c + t \\cos \\alpha, \\\\ y = t \\sin \\alpha \\end{array} \\right.$ ( $t$ 为参数), 代入双曲线的方程得 $(b^{2} \\cos^{2} \\alpha - a^{2} \\sin^{2} \\alpha) t^{2} + 2 b^{2} ct \\cos \\alpha + b^{4} = 0$ ,

即 $(c^{2}\\cos^{2}\\alpha-a^{2})t^{2}+2b^{2}ct\\cos\\alpha+b^{4}=0,$

故 $t_1t_2 = \\frac{b^4}{c^2\\cos^2\\alpha - a^2}$ ，且 $\\mid t_1 - t_2\\mid = \\frac{2ab^2}{\\mid c^2\\cos^2\\alpha - a^2\\mid},$

因为 $OF \\cdot AB = FA \\cdot FB$ ，即 $\\frac{2ab^{2}c}{\\left|c^{2}\\cos^{2}\\alpha - a^{2}\\right|} = \\frac{b^{4}}{\\left|c^{2}\\cos^{2}\\alpha - a^{2}\\right|}$

所以 $2ac = b^{2}$ ，即 $e^2 - 2e - 1 = 0$ ，因为 $e > 1$ ，故 $e = 1 + \\sqrt{2}$ .`,
      },
      {
        id: "prob-sec-3-8-7-sol-4",
        title: `解法五`,
        method: "standard",
        steps: [],
        explanation: `以双曲线的右焦点 F 为极点, x 轴正方向为极轴建立极坐标系, 则该双曲线的极坐标方程为 $\\rho = \\frac{ep}{1 - e\\cos\\theta}$ ,

设 $A(\\rho_1, \\theta), B(\\rho_2, \\theta + \\pi)$ ，所以 $AF = \\frac{ep}{1 - e\\cos \\theta}, BF = \\frac{ep}{1 + e\\cos \\theta}$

$$
A B = A F + B F = \\frac {e p}{1 + e \\cos \\theta} + \\frac {e p}{1 - e \\cos \\theta} = \\frac {2 e p}{1 - e ^ {2} \\cos^ {2} \\theta},
$$

由 $OF\\cdot AB = FA\\cdot FB$ ，所以 $ep = 2c$ ，而 $p = c - \\frac{a^2}{c}$ ，化简得 $2ac = b^{2}$

即 $e^2 - 2e - 1 = 0$ ，因为 $e > 1$ ，故 $e = 1 + \\sqrt{2}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-8-8",
    topicId: "topic-sec-3-8",
    title: `（2022 年高考全国Ⅰ卷第 16 题）已知椭圆 C: x^2a^2 + y^2b^2 =`,
    content: `（2022 年高考全国Ⅰ卷第 16 题）已知椭圆 $C: \\frac{x^{2}}{a^{2}} + \\frac{y^{2}}{b^{2}} = 1 (a > b > 0)$ ， $C$ 的上顶点为 $A$ ，两个焦点为 $F_{1}, F_{2}$ ，离心率为 $\\frac{1}{2}$ . 过 $F_{1}$ 且垂直于 $AF_{2}$ 的直线与 $C$ 交于 $D, E$ 两点， $|DE| = 6$ ，则 $\\triangle ADE$ 的周长是 \\_\\_\\_\\_.`,
    preview: `已知椭圆 ， C 的上顶点为 A ，两个焦点为 F_1, F_2 ，离心率为 1/2 . 过 F_1 且垂直于 AF_2 的直线与 C 交于 D, E 两点，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-8-8-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `如图 3-8-6 所示, 由离心率 $e=\\frac{c}{a}=\\frac{1}{2}$ , 得 a=2c, ①

即 $AF_{2} = 2OF_{2}$

所以 $\\angle AF_{2}O=\\frac{\\pi}{3}$ ，所以 $\\triangle AF_{1}F_{2}$ 为正三角形，

由题知直线 DE 的斜率为 $\\frac{\\sqrt{3}}{3}$ ，倾斜角 $\\theta=30^{\\circ}$ ，

由椭圆的焦点弦长公式得 $|DE| = \\frac{2ab^2}{a^2 - c^2\\cos^2\\theta} = 6$ ，②

由①②及 $c^2 + b^2 = a^2$ 得 $a = \\frac{13}{4}$ ,

因为 DE 为线段 $AF_{2}$ 的垂直平分线, 根据对称性,

$$
AD = DF_2, AE = EF_2,
$$

所以 $\\triangle ADE$ 的周长等于 $\\triangle F_{2}DE$ 的周长，而 $\\triangle F_{2}DE$ 周长为

$$
\\begin{array}{l} \\left| D F _ {2} \\right| + \\left| E F _ {2} \\right| + \\left| D E \\right| = \\left| D F _ {2} \\right| + \\left| E F _ {2} \\right| + \\left| D F _ {1} \\right| + \\left| E F _ {1} \\right| \\\\ = | D F _ {1} | + | D F _ {2} | + | E F _ {1} | + | E F _ {2} | = 4 a = 1 3. \\\\ \\end{array}
$$

故答案为 13.

![](images/0f4bab2fe51fd6c42a0faba4152ab5d71b87838a48c2bfc488200e03dc650b1a.jpg)

图3-8-6`,
      },
      {
        id: "prob-sec-3-8-8-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `由离心率为 $\\frac{1}{2}$ 可知 $b=\\sqrt{3}c,a=2c$ ，所以直线 $AF_{2}$ 斜率为 $-\\sqrt{3},\\angle AF_{2}F_{1}=60^{\\circ}$ .

直线 DE 斜率为 $\\frac{\\sqrt{3}}{3}$ ，所以不妨设直线 DE 为 $y=\\frac{\\sqrt{3}}{3}(x+c)$ ，

联立 $\\left\\{\\begin{aligned}y=\\frac{\\sqrt{3}}{3}(x+c),\\\\ \\frac{x^{2}}{4c^{2}}+\\frac{y^{2}}{3c^{2}}=1,\\end{aligned}\\right.$ 可得 $13x^{2}+8cx-32c^{2}=0$ ，所以 $\\left\\{\\begin{aligned}x_{D}+x_{E}&=-\\frac{8c}{13},\\\\ x_{D}\\cdot x_{E}&=-\\frac{32c^{2}}{13},\\end{aligned}\\right.$

所以 $|DE| = \\sqrt{1 + k^2} |x_D - x_E| = 6 \\Rightarrow c = \\frac{13}{8}$ ,

又 $\\triangle AF_{1}F_{2}$ 是等边三角形,即DE为 $AF_{2}$ 的垂直平分线,

所以 $AE=EF_{2}$ ， $AD=DF_{2}$ ，

所以 $\\triangle ADE$ 的周长= $AE+DE+AD=EF_{2}+DE+DF_{2}=4a=8c=13$ .`,
      },
      {
        id: "prob-sec-3-8-8-sol-2",
        title: `解法三`,
        method: "standard",
        steps: [],
        explanation: `$\\angle DF_{2}F_{1}=30^{\\circ}$ ，由焦点弦长公式可得 $\\left|DE\\right|=\\frac{2ab^{2}}{a^{2}-b^{2}\\sin^{2}\\theta}=6$ ，

即 $\\frac{2\\times 2c\\times 3c^2}{4c^2 - 3c^2\\times\\frac{1}{4}} = 6$ ，解得 $c = \\frac{13}{8}$

又 $\\triangle AF_{1}F_{2}$ 是等边三角形，即DE为 $AF_{2}$ 的垂直平分线，下同`,
      },
      {
        id: "prob-sec-3-8-8-sol-4",
        title: `解法四`,
        method: "standard",
        steps: [],
        explanation: `设 $\\theta=\\angle EF_{1}F_{2}$ ，由圆锥曲线统一极坐标方程，得

$$
| D E | = | F _ {1} D | + | F _ {1} E | = \\frac {e p}{1 - e \\cos \\theta} + \\frac {e p}{1 + e \\cos \\theta} = \\frac {2 e p}{1 - e ^ {2} \\cos^ {2} \\theta} = \\frac {4 p}{4 - \\cos^ {2} \\theta},
$$

注意到 $\\angle EF_{1}F_{2} = \\angle OAF_{2}$ ，所以 $\\cos \\theta = \\frac{b}{a} = \\sqrt{1 - e^2} = \\frac{\\sqrt{3}}{2},$

代入 $\\frac{4p}{4-\\cos^{2}\\theta}=6$ ，解得 $p=\\frac{39}{8}$ ，而 $p=\\frac{b^{2}}{c}=3c$ ，所以 $c=\\frac{13}{8}$

所以 $\\triangle ADE$ 的周长= $AE+DE+AD=EF_{2}+DE+DF_{2}=4a=8c=13$ .`,
      },
    ],
    tags: [],
    source: `2022 年高考全国Ⅰ卷第 16 题`,
  },
  {
    id: "prob-sec-3-9-1",
    topicId: "topic-sec-3-9",
    title: `若平面向量 a, b 满足 |2a-b|≤3`,
    content: `若平面向量 a, b 满足 $\\left|2a-b\\right|\\\leqslant3$ ，则 $a \\cdot b$ 的最小值是 \\_\\_\\_\\_.`,
    preview: `若平面向量 a, b 满足 |2a-b|≤3 ，则 a · b 的最小值是 \\_\\_\\_\\_.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-9-1-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `运用极化恒等式, 得 $a \\cdot b = \\frac{(2a + b)^{2} - (2a - b)^{2}}{8} \\geqslant -\\frac{(2a - b)^{2}}{8} \\geqslant -\\frac{9}{8}$ . 因此 $a \\cdot b$ 的最小值为 $-\\frac{9}{8}$ .`,
      },

    ],
    tags: [],
  },
  {
    id: "prob-sec-3-9-2",
    topicId: "topic-sec-3-9",
    title: `设 △ ABC, P_0 是边 AB 上一定点`,
    content: `设 $\\triangle ABC, P_{0}$ 是边 $AB$ 上一定点，满足 $P_{0}B=\\frac{1}{4}AB$ ，且对于边 $AB$ 上任一点 $P$ ，恒有 $\\overrightarrow{PB} \\cdot \\overrightarrow{PC} \\geqslant \\overrightarrow{P_{0}B} \\cdot \\overrightarrow{P_{0}C}$ ，则（）
A. $\\angle {ABC} = {90}^{ \\circ  }$

B. $\\angle {BAC} = {90}^{ \\circ  }$

C. \${AB} = {AC}$

D. \${AC} = {BC}$`,
    preview: `设 △ ABC, P_0 是边 AB 上一定点，满足 P_0B=1/4AB ，且对于边 AB 上任一点 P ，恒有 ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-9-2-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `设 $\\overrightarrow{PB}=\\lambda\\overrightarrow{AB}$ ，则 $\\overrightarrow{PC}=\\overrightarrow{PB}+\\overrightarrow{BC}=(\\lambda-1)\\overrightarrow{AB}+\\overrightarrow{AC}$

则 $\\overrightarrow{PB} \\cdot \\overrightarrow{PC} = \\lambda (\\lambda - 1)\\overrightarrow{AB^2} + \\lambda \\overrightarrow{AB} \\cdot \\overrightarrow{AC} = \\overrightarrow{AB^2}\\lambda^2 + (\\overrightarrow{AB} \\cdot \\overrightarrow{AC} - \\overrightarrow{AB^2})\\lambda,$

由题意，当 $\\lambda = \\frac{\\overrightarrow{AB} \\cdot \\overrightarrow{AC} - \\overrightarrow{AB^2}}{-2\\overrightarrow{AB^2}} = \\frac{1}{4}$ 时 $\\overrightarrow{PB} \\cdot \\overrightarrow{PC}$ 取最小值，即 $2\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = \\overrightarrow{AB^2}$ ，

则 $2\\overrightarrow{AB}\\cdot \\overrightarrow{AC} -\\overrightarrow{AB^2} = \\overrightarrow{AB}\\cdot (\\overrightarrow{AC} +\\overrightarrow{AC} -\\overrightarrow{AB}) = \\overrightarrow{AB}\\cdot (\\overrightarrow{AC} +\\overrightarrow{BC})$

$$
= (\\overrightarrow {A C} - \\overrightarrow {B C}) \\cdot (\\overrightarrow {A C} + \\overrightarrow {B C}) = \\overrightarrow {A C ^ {2}} - \\overrightarrow {B C ^ {2}} = 0,
$$

则 $\\overrightarrow{AC^{2}}=\\overrightarrow{BC^{2}}$ ，即 $|\\overrightarrow{AC}|=|\\overrightarrow{BC}|$ ，故选D.`,
      },
      {
        id: "prob-sec-3-9-2-sol-2",
        title: `解法三`,
        method: "standard",
        steps: [],
        explanation: `如图 3-9-2 所示, 以 A 为坐标原点, AB 为 x 轴建立直角坐标系, 设 $B(4t,0)$ , $P(x,0)$ , $C(m,n)$ , 则 $P_{0}(3t,0)$ ,

$$
\\overrightarrow {P B} \\cdot \\overrightarrow {P C} = (4 t - x) (m - x) = x ^ {2} - (m + 4 t) x + 4 t m.
$$

当 $m = 3t$ 时取最小值，故 $\\frac{m + 4t}{2} = 3t$ ，即 $m = 2t$

![](images/5afc62e8f1db176f9f0f7e0f0f108f91c3453f82de541ac61a30599d1c48655d.jpg)

图3-9-2

故点 C 在 AB 的垂直平分线上, 即 AC = BC, 故选 D.

与此题相类似的有:已知直线 AB 与抛物线 $y^{2}=4x$ 交于 A, B 两点, M 为 AB 的中点, C 为抛物线上一个动点, 若 $C_{0}$ 满足 $\\overrightarrow{C_{0}A} \\cdot \\overrightarrow{C_{0}B} = \\min\\{\\overrightarrow{CA} \\cdot \\overrightarrow{CB}\\}$ , 则下列一定成立的是 ( )

A. \${C}_{0}M \\bot  {AB}$

B. $C_0M \\perp l$ ，其中 $l$ 是抛物线过 $C_0$ 的切线

C. \${C}_{0}A \\bot  {C}_{0}B$

D. \${C}_{0}M = \\frac{1}{2}{AB}$

讲解 运用极化恒等式.

由 $\\overrightarrow{CA} \\cdot \\overrightarrow{CB} \\geqslant \\overrightarrow{C_0A} \\cdot \\overrightarrow{C_0B}$ 得

$$
(\\overrightarrow {C A} + \\overrightarrow {C B}) ^ {2} - (\\overrightarrow {C A} - \\overrightarrow {C B}) ^ {2} \\geqslant (\\overrightarrow {C _ {0} A} + \\overrightarrow {C _ {0} B}) ^ {2} - (\\overrightarrow {C _ {0} A} - \\overrightarrow {C _ {0} B}) ^ {2},
$$

即 $\\overrightarrow{CM^2} \\geqslant \\overrightarrow{C_0M^2}$ , 即 $|\\overrightarrow{CM}| \\geqslant |\\overrightarrow{C_0M}|$ ,

所以 $|\\overrightarrow{CM}|_{\\min} = |\\overrightarrow{C_0M}|$

当 l 是抛物线过 $C_{0}$ 的切线时， $C_{0}M \\perp l$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-9-3",
    topicId: "topic-sec-3-9",
    title: `如图 3-9-3 所示, 已知圆 O 的半径为 2, A`,
    content: `如图 3-9-3 所示, 已知圆 O 的半径为 2, A、B 是圆上两点且 $\\angle AOB = \\frac{2\\pi}{3}$ , MN 是一条直径, 点 C 在圆内且满足 $\\overrightarrow{OC} = \\lambda \\overrightarrow{OA} + (1 - \\lambda) \\overrightarrow{OB} (0 < \\lambda < 1)$ , 则 $\\overrightarrow{CM} \\cdot \\overrightarrow{CN}$ 的最小值为 ( )

![](images/beb2100b8d70b269dcf02bde0f9281c841191d501ffb461c131c6d7cfa7c69e8.jpg)
A. -2

B.-1

C.-3

D.-4`,
    preview: `如图 3-9-3 所示, 已知圆 O 的半径为 2, A、B 是圆上两点且 ∠ AOB = 2π/3 , MN 是一条直径, 点 C 在圆内且满足 , 则 →C`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-9-3-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `极化恒等式.

因为 $\\overrightarrow{OC}=\\lambda\\overrightarrow{OA}+(1-\\lambda)\\overrightarrow{OB}$ ,

所以 A, B, C 三点共线.

因为 O 为 MN 的中点，

所以 $\\overrightarrow{CM}\\cdot\\overrightarrow{CN}=\\overrightarrow{CO^{2}}-\\overrightarrow{OM^{2}}$

因为 $|\\overrightarrow{OM}| = 2$ ，而 $|\\overrightarrow{OC}|$ 的最小值显然是点 $O$ 到直线 $AB$ 的距离，

即为1,所以 $\\overrightarrow{CM}\\cdot\\overrightarrow{CN}$ 的最小值为-3,即选C.

![](images/beb2100b8d70b269dcf02bde0f9281c841191d501ffb461c131c6d7cfa7c69e8.jpg)

图3-9-3`,
      },
      {
        id: "prob-sec-3-9-3-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `特值法.

因为 $\\overrightarrow{CM}\\cdot\\overrightarrow{CN}=\\overrightarrow{CM}\\cdot(\\overrightarrow{CM}+\\overrightarrow{MN})=\\overrightarrow{CM^{2}}+\\overrightarrow{CM}\\cdot\\overrightarrow{MN}$

又因为 A、B、C 三点共线，显然当 CM 与 AB 垂直时，

$|CM|$ 可以达到最小值 1, 而此时 $\\overrightarrow{CM} \\cdot \\overrightarrow{MN} = -4$ ,

所以 $\\overrightarrow{CM}\\cdot\\overrightarrow{CN}$ 的最小值为-3,即选C.`,
      },
      {
        id: "prob-sec-3-9-3-sol-2",
        title: `解法三`,
        method: "standard",
        steps: [],
        explanation: `建系. 因为点 $A(2,0)$ , $B(-1,\\sqrt{3})$ ,

所以所在直线 AB 的方程为 $\\sqrt{3}y + x = 2$ .

设 M, N 的坐标分别为 $(a, b)$ , $(-a, -b)$ 且有 $a^{2} + b^{2} = 4$ ,

设点 C 坐标为 $(x_{0}, y_{0})$ ，则有 $\\overrightarrow{CM} \\cdot \\overrightarrow{CN} = x_{0}^{2} - a^{2} + y_{0}^{2} - b^{2}$

因为 $a^{2}+b^{2}=4$ ，而点 C 在直线 AB 上，所以当 $x_{0}\\in[-1,2]$ 时， $x_{0}^{2}+y_{0}^{2}$ 有最小值 1，

所以 $\\overrightarrow{CM}\\cdot\\overrightarrow{CN}$ 的最小值为-3,即选C.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-9-4",
    topicId: "topic-sec-3-9",
    title: `在平行四边形 ABCD 中`,
    content: `在平行四边形 ABCD 中， $AD=1,\\angle BAD=60^{\\circ}$ ，点 E 为 CD 的中点，若 $\\overrightarrow{AC}\\cdot\\overrightarrow{BE}=1$ ，则 AB 的长为 \\_\\_\\_\\_.`,
    preview: `在平行四边形 ABCD 中， AD=1,∠ BAD=60° ，点 E 为 CD 的中点，若 →AC·→BE=1 ，则 AB 的长为 \\_\\_\\_\\_.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-9-4-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `如图 3-9-4 所示,作 $\\overrightarrow{BF}=\\overrightarrow{AC}$ ,取EF的中点G,

则 $EG=\\frac{3}{4}AB.$

$$
BG = \\sqrt{BC^2 + CG^2 - 2BC\\cdot CG\\cos\\angle BCG} = \\sqrt{1 + \\frac{1}{16}AB^2 + \\frac{1}{4}AB},
$$

由命题知，

$$
\\begin{array}{l} \\overrightarrow {A C} \\cdot \\overrightarrow {B E} = \\overrightarrow {B F} \\cdot \\overrightarrow {B E} = \\overrightarrow {B G ^ {2}} - \\overrightarrow {E G ^ {2}} = 1 + \\frac {1}{1 6} A B ^ {2} + \\frac {1}{4} A B - \\frac {9}{1 6} A B ^ {2} \\\\ = 1, \\\\ \\end{array}
$$

解得 $AB=\\frac{1}{2}$ 或 AB=0 (舍去)，故 AB 的长为 $\\frac{1}{2}$ .

![](images/b5a86d1459c1fbcca8bc43d87bae8704efe375d7c6fcc6309478385f7d0cb25c.jpg)

图3-9-4

![](images/35a24bae4d72b2bfc9e357b3c1ad1b004727876cc4c8e35e90a62bc28fd7ae13.jpg)

图3-9-5`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-9-5",
    topicId: "topic-sec-3-9",
    title: `已知 AB 是半圆 O 的直径, AB = 2`,
    content: `已知 AB 是半圆 O 的直径, AB = 2, 等边三角形 OCD 的顶点 C、D 在半圆弧 $\\widehat{AB}$ 上, 且 $CD \\parallel AB$ , 点 P 是半圆弧 $\\widehat{AB}$ 上的动点, 则 $\\overrightarrow{PC} \\cdot \\overrightarrow{PD}$ 的取值范围是 ( )
A. $\\left[\\frac{3}{2}-\\sqrt{3},\\frac{3}{2}\\right]$

B. $\\left[\\frac{3}{2}, \\frac{3}{2} + \\sqrt{3}\\right]$

C. $\\left[\\frac{3}{2} -\\frac{\\sqrt{3}}{2},\\frac{3}{2}\\right]$

D. $\\left[\\frac{3}{2} - \\sqrt{3}, \\frac{3}{2} + \\sqrt{3}\\right]$`,
    preview: `已知 AB 是半圆 O 的直径, AB = 2, 等边三角形 OCD 的顶点 C、`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-9-5-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `如图 3-9-5 所示, 取线段 CD 的中点 M, 连接 PM.

![](images/35a24bae4d72b2bfc9e357b3c1ad1b004727876cc4c8e35e90a62bc28fd7ae13.jpg)

由极化恒等式, 得 $\\overrightarrow{PC} \\cdot \\overrightarrow{PD} = |\\overrightarrow{PM}|^{2} - |\\overrightarrow{MC}|^{2}$ ,

注意到 AB 是半圆 O 的直径, AB = 2, $\\triangle OCD$ 是等边三角形,

$OC=OD=CD=1$ , 所以 $\\left|\\overrightarrow{MC}\\right|^{2}=\\frac{1}{4}$ , 所以 $\\overrightarrow{PC}\\cdot\\overrightarrow{PD}=|\\overrightarrow{PM}|^{2}-\\frac{1}{4}$ .

如图所示, 连接 OM 并延长交半圆弧 $\\widehat{AB}$ 于 N, 连接 BM, 易知,

$$
M N = 1 - \\frac {\\sqrt {3}}{2}, B M = \\sqrt {O M ^ {2} + O B ^ {2}} = \\frac {\\sqrt {7}}{2}.
$$

点 P 是半圆弧 $\\widehat{AB}$ 上的动点, 当点 P 运动到 N 点时, 线段 PM 的长度最小, 其最小值等于线段 MN 的长度; 当点 P 运动到 B 点时, 线段 PM 的长度最大, 其最大值等于线段 BM 的长度.

于是 $|MN|\\leqslant |\\overrightarrow{PM} |\\leqslant |BM|$ ，即 $1 - \\frac{\\sqrt{3}}{2}\\leqslant |\\overrightarrow{PM} |\\leqslant \\frac{\\sqrt{7}}{2}$ ，所以 $\\frac{3}{2} -\\sqrt{3}\\leqslant |\\overrightarrow{PM}|^2 -\\frac{1}{4}\\leqslant \\frac{3}{2},$

即 $\\overrightarrow{PC}\\cdot\\overrightarrow{PD}$ 的取值范围是 $\\left[\\frac{3}{2}-\\sqrt{3},\\frac{3}{2}\\right]$ .故选A.

点评 本题难度较大,得分率偏低.若借用极化恒等式得出 $\\overrightarrow{PC}\\cdot\\overrightarrow{PD}=|\\overrightarrow{PM}|^{2}-\\frac{1}{4}$ ，便找到了解题的突破口,其余问题也就迎刃而解了.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-9-6",
    topicId: "topic-sec-3-9",
    title: `给定两个长度为 1 的平面向量 →OA 和 →OB`,
    content: `给定两个长度为 1 的平面向量 $\\overrightarrow{OA}$ 和 $\\overrightarrow{OB}$ ，它们的夹角为 $120^{\\circ}$ 。如图 3-9-7 所示，点 C 在以 O 为圆心的圆弧 $\\widehat{AB}$ 上变动，若 $\\overrightarrow{OC} = x\\overrightarrow{OA} + y\\overrightarrow{OB}$ ，其中 $x, y \\in R$ ，则 $x + y$ 的最大值是 \\_\\_\\_\\_。
![](images/90a83f28e8b37c1e60b55b3e1131d1f55d7da53d038fc91860eb726b58d605d8.jpg)
图3-9-6

![](images/64cf2dfae56b70cf06de4eefc34c1a30479fea1deee2d21d595180cae05420a9.jpg)
图3-9-7`,
    preview: `给定两个长度为 1 的平面向量 →OA 和 →OB ，它们的夹角为 120° 。如图 3-9-7 所示，点 C 在以 O 为圆心的圆弧 AB 上变动，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-9-6-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `如图 3-9-8 所示, 设 OC 与 AB 交于 D 点,

设 $\\overrightarrow{OC} = t\\overrightarrow{OD}$ ，由已知，得 $t\\overrightarrow{OD} = \\overrightarrow{OC} = x\\overrightarrow{OA} +y\\overrightarrow{OB},$

即 $\\overrightarrow{OD} = \\frac{x}{t}\\overrightarrow{OA} +\\frac{y}{t}\\overrightarrow{OB},$

因为 A, D, B 共线, 因此 $t = x + y$ .

由 $\\overrightarrow{OC}=t\\overrightarrow{OD}$ 知 $t=\\frac{1}{|\\overrightarrow{OD}|}\\leqslant2$ ，当OD垂直AB时取等号.

![](images/77164344ae6c2160254c73d647028eb20024caefe85e98bc04a35571f5d82d67.jpg)

图3-9-8`,
      },
      {
        id: "prob-sec-3-9-6-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `设 $\\angle AOC=\\alpha,\\left\\{\\begin{aligned}\\overrightarrow{OC}\\cdot\\overrightarrow{OA}&=x\\overrightarrow{OA}\\cdot\\overrightarrow{OA}+y\\overrightarrow{OB}\\cdot\\overrightarrow{OA},\\\\ \\overrightarrow{OC}\\cdot\\overrightarrow{OB}&=x\\overrightarrow{OA}\\cdot\\overrightarrow{OB}+y\\overrightarrow{OB}\\cdot\\overrightarrow{OB},\\end{aligned}\\right.$

即 $\\left\\{\\begin{aligned}\\cos\\alpha&=x-\\frac{1}{2}y,\\\\ \\cos(120^{\\circ}-\\alpha)&=-\\frac{1}{2}x+y,\\end{aligned}\\right.$

所以 $x + y = 2[\\cos\\alpha + \\cos(120^{\\circ} - \\alpha)]$

$$
\\begin{array}{l} = \\cos \\alpha + \\sqrt {3} \\sin \\alpha \\\\ = 2 \\sin \\left(\\alpha + \\frac {\\pi}{6}\\right) \\leqslant 2. \\\\ \\end{array}
$$`,
      },
      {
        id: "prob-sec-3-9-6-sol-2",
        title: `解法三`,
        method: "standard",
        steps: [],
        explanation: `建立如图 3-9-9 所示的坐标系, 则

$$
\\overrightarrow {O A} = (1, 0),
$$

$$
\\overrightarrow {O B} = \\left(- \\frac {1}{2}, \\frac {\\sqrt {3}}{2}\\right).
$$

设 $\\overrightarrow{OC}=(m,n)$ ,

则 $(m,n) = x(1,0) + y\\left(-\\frac{1}{2},\\frac{\\sqrt{3}}{2}\\right)$ ，可得

$$
m ^ {2} + n ^ {2} = 1, m + \\sqrt {3} n = x + y.
$$

由柯西不等式知 $(1+3)(m^{2}+n^{2})\\geqslant(m+\\sqrt{3}n)^{2}$ ,

则 $x + y \\leqslant 2$ .

![](images/e1ae261d09a359c9279575a05faec2591ac2cbee3655cf8e9c933ea664a730cf.jpg)

图3-9-9`,
      },
      {
        id: "prob-sec-3-9-6-sol-3",
        title: `解法四`,
        method: "standard",
        steps: [],
        explanation: `坐标系模型“移植”. 如图 3-9-10 所示建立斜坐标系, 则 $C(x, y)$ 在以 $O$ 为圆心的 $\\widehat{AB}$ 上变动, 则问题变成求斜坐标系下的目标函数 $z = x + y$ 在 $y$ 轴上的截距的最大值, 从而易知直线与 $AB$ 平行且与 $\\widehat{AB}$ 相切时最大, 最大值为 2.

![](images/79438e55279cc7d77eb12ecbffa721a1af6e0023fc0013ab3b451b9660ae0f2c.jpg)

图3-9-10`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-9-7",
    topicId: "topic-sec-3-9",
    title: `如图 3-9-11 所示, A, B, C 是圆 O`,
    content: `如图 3-9-11 所示, A, B, C 是圆 O 上的三点, 线段 CO 的延长线与线段 BA 的延长线交于圆 O 外一点 D, 若 $\\overrightarrow{OC} = m \\overrightarrow{OA} + n \\overrightarrow{OB}$ , 则 $m + n$ 的取值范围是 ( )

![](images/00bca055593d3d09850e7b8c1c66816eaab1f198e1239f66a5ce490d3e6c3637.jpg)
A. $(0,1)$ 1,0)

B. $(1,+\\infty)$

C. $(-∞,-1)$

D. (—`,
    preview: `如图 3-9-11 所示, A, B, C 是圆 O 上的三点, 线段 CO 的延长线与线段 BA 的延长线交于圆 O 外一点 D, 若 →OC = m →OA`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-9-7-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `可用分点恒等式, 令 $\\overrightarrow{OC}=t\\overrightarrow{OD}(-1<t<0)$ , 由已知条件, 知

$$
\\overrightarrow {O A} = \\frac {1}{m} \\overrightarrow {O C} - \\frac {n}{m} \\overrightarrow {O B} = \\frac {t}{m} \\overrightarrow {O D} - \\frac {n}{m} \\overrightarrow {O B},
$$

![](images/ba22be3c40da0f3a02a5d50a530e7965531d95603b91f880d10be5150526e5cd.jpg)

图3-9-11

因为 B, A, D 三点共线，所以 $\\frac{t}{m} - \\frac{n}{m} = 1$ ，即 $m + n = t \\in (-1, 0)$ .`,
      },
      {
        id: "prob-sec-3-9-7-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `构图法. 如图 3-9-12 所示, 过点 O 作直线 $EF \\parallel AB$ 交圆于 E, F, 延长 AO

![](images/00bca055593d3d09850e7b8c1c66816eaab1f198e1239f66a5ce490d3e6c3637.jpg)

交圆于 $G$ 点，则点 $C$ 在 $\\widehat{GF}$ （不含端点）上，由题意知：

当 C 在 F 点时, $m+n=0$ ;

当 C 在 G 点时, $m+n=-1$ , 因此, $m+n\\in(-1,0)$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-9-8",
    topicId: "topic-sec-3-9",
    title: `O 为 △ ABC 所在平面内一点`,
    content: `O 为 $\\triangle ABC$ 所在平面内一点，且满足 $\\overrightarrow{OA} + 2\\overrightarrow{OB} + 3\\overrightarrow{OC} = 0$ ，则 $\\triangle AOC$ 与 $\\triangle BOC$ 的面积的比值为（）
![](images/00bca055593d3d09850e7b8c1c66816eaab1f198e1239f66a5ce490d3e6c3637.jpg)

图3-9-12

A. $2 : 1$

B. 3:1

C. 4:1

D. 5:1`,
    preview: `O 为 △ ABC 所在平面内一点，且满足 →OA + 2→OB + 3→OC = 0 ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-9-8-sol-0",
        title: `解法一`,
        method: "creative",
        steps: [],
        explanation: `构图法. 如图 3-9-13 所示, 构造等边 $\\triangle ADE, O$ 为其中心, 则 $\\overrightarrow{OA} + \\overrightarrow{OD} + \\overrightarrow{OE} = \\mathbf{0}$ , 取点 $B, C$ , 使 $\\overrightarrow{OD} = 2\\overrightarrow{OB}, \\overrightarrow{OE} = 3\\overrightarrow{OC}$ ,

![](images/a1663749f7869d2658893f014d59f64125b8eeaa6c0b6a7e21cbfac781b9aca1.jpg)

则有 $\\frac{S_{\\triangle AOC}}{S_{\\triangle BOC}}=\\frac{AO}{BO}=2$ ，选A.`,
      },
      {
        id: "prob-sec-3-9-8-sol-1",
        title: `解法二`,
        method: "geometric",
        steps: [],
        explanation: `由 $\\overrightarrow{OA} + 2\\overrightarrow{OB} + 3\\overrightarrow{OC} = \\mathbf{0}$ 得

$$
- \\overrightarrow {O C} = \\frac {1}{1 + 2} \\overrightarrow {O A} + \\frac {2}{1 + 2} \\overrightarrow {O B},
$$

![](images/d15454b9080ebd3f4331f007a3eba33d611bb695f87b15ed61a246c44b10221b.jpg)

图3-9-13

故可按下列方法作出符合题意的一般图形.

如图 3-9-14 所示, 在 AB 上取点 D, 使 $\\overrightarrow{AD}=2\\overrightarrow{DB}$ ,

则有 $\\overrightarrow{OD} = \\frac{1}{1 + 2}\\overrightarrow{OA} +\\frac{2}{1 + 2}\\overrightarrow{OB},$

再作 $\\overrightarrow{OD}$ 的相反向量 $\\overrightarrow{OC}$ .

所以 $\\frac{S_{\\triangle AOC}}{S_{\\triangle BOC}}=\\frac{AD}{DB}=\\frac{2}{1}$ ，选A.

![](images/a1663749f7869d2658893f014d59f64125b8eeaa6c0b6a7e21cbfac781b9aca1.jpg)

图3-9-14`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-9-9",
    topicId: "topic-sec-3-9",
    title: `已知正三角形 ABC 的边长为 2, D 是边 BC`,
    content: `已知正三角形 ABC 的边长为 2, D 是边 BC 的中点, 动点 P 满足 $\\left|\\overrightarrow{PD}\\right| \\leqslant 1$ , 且 $\\overrightarrow{AP} = x \\overrightarrow{AB} + y \\overrightarrow{AC}$ , 其中 $x + y \\geqslant 1$ , 则 $2x + y$ 的取值范围是 \\_\\_\\_\\_.`,
    preview: `已知正三角形 ABC 的边长为 2, D 是边 BC 的中点, 动点 P 满足 |→PD| ≤ 1 , 且 →AP = x →AB + y →AC`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-9-9-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `因为 $\\overrightarrow{AP}=x\\overrightarrow{AB}+y\\overrightarrow{AC},|\\overrightarrow{PD}|\\leqslant1$ 且 $x+y\\geqslant1$ ，所以点P落在以点D为圆心，1为半径的圆内( $\\triangle ABC$ 的外侧部分，如图3-9-15所示).

因为 $\\overrightarrow{AP} = 2x\\cdot \\frac{\\overrightarrow{AB}}{2} +y\\overrightarrow{AC}$

$$
= 2 x \\cdot \\overrightarrow {A A ^ {\\prime}} + y \\overrightarrow {A C},
$$

所以,当点 P 在 C 点时, $2x+y$ 取到最小值 1;

当点 P 在 K 点(半圆与 $A^{\\prime}C$ 平行的切线的切点, 如图 3-9-16 所示)时, $2x + y$ 取到最大值, 由相似三角形知识可知最大值为 $\\frac{|AM|}{|AA'|} = \\frac{5}{2}$ .

![](images/67f40d04565278e11da7a599ce5ff3d458be1c33bb7c7b74354d9ab27260e4d8.jpg)

图3-9-15

![](images/7de5e3a37cfac4c53bab671dd318c50556fd8cbf3c2c78690c8e9e5fd72a0f66.jpg)

图3-9-16

所以 $2x+y$ 的范围为 $\\left[1,\\frac{5}{2}\\right]$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-9-10",
    topicId: "topic-sec-3-9",
    title: `在一个平面上, overrightarrowAB_1⊥overrightarrowAB_2,|overrightar`,
    content: `在一个平面上, $\\overrightarrow{AB_{1}}\\perp\\overrightarrow{AB_{2}},|\\overrightarrow{OB_{1}}|=|\\overrightarrow{OB_{2}}|=1,\\overrightarrow{AP}=\\overrightarrow{AB_{1}}+\\overrightarrow{AB_{2}}.$ 若 $|\\overrightarrow{OP}|<\\frac{1}{2}$ ,则 $|\\overrightarrow{OA}|$ 的取值范围是\\_\\_\\_\\_.`,
    preview: `在一个平面上, 若 |→OP|<1/2 ,则 |→OA| 的取值范围是\\_\\_\\_\\_.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-9-10-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `如图 3-9-19 所示，

$$
\\begin{array}{l} O A ^ {2} + O P ^ {2} = O B _ {1} ^ {2} + O B _ {2} ^ {2} = 2 \\\\ \\Rightarrow O A ^ {2} = 2 - O P ^ {2} > \\frac {7}{4}, \\\\ \\end{array}
$$

所以， $OA\\in \\left(\\frac{\\sqrt{7}}{2},\\sqrt{2}\\right]$

![](images/2eff8d72a7045a0220449d77d950acbc5a849e8e96237d96baa5d918f2ba9e88.jpg)

图3-9-19`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-9-11",
    topicId: "topic-sec-3-9",
    title: `已知向量 a, b 满足 |a|=1, |b|=2`,
    content: `已知向量 a, b 满足 $\\left|a\\right|=1, \\left|b\\right|=2$ ，则 $\\left|a+b\\right|+\\left|a-b\\right|$ 的最小值是 \\_\\_\\_\\_，最大值是 \\_\\_\\_\\_.`,
    preview: `已知向量 a, b 满足 |a|=1, |b|=2 ，则 |a+b|+|a-b| 的最小值是 \\_\\_\\_\\_，最大值是 \\_\\_\\_\\_.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-9-11-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `$\\left|a+b\\right|+\\left|a-b\\right|\\geqslant\\max\\left\\{\\begin{array}{l}\\left|\\left(a+b\\right)+\\left(a-b\\right)\\right|,\\\\ \\left|\\left(a+b\\right)-\\left(a-b\\right)\\right|\\end{array}\\right\\}=4,$

当且仅当 $a, b$ 共线时等号成立，

$$
\\left| \\boldsymbol {a} + \\boldsymbol {b} \\right| ^ {2} + \\left| \\boldsymbol {a} - \\boldsymbol {b} \\right| ^ {2} = 2 (\\left| \\boldsymbol {a} \\right| ^ {2} + \\left| \\boldsymbol {b} \\right| ^ {2}) = 1 0.
$$

所以 $|a + b| + |a - b|\\leqslant 2\\sqrt{\\frac{|a + b|^2 + |a - b|^2}{2}} = 2\\sqrt{5}.$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-9-12",
    topicId: "topic-sec-3-9",
    title: `已知点 M, N 在圆 O: x^2 + y^2 = 16`,
    content: `已知点 M, N 在圆 $O: x^{2} + y^{2} = 16$ ，点 $P(1, 2)$ ，且 $\\overrightarrow{PM} \\perp \\overrightarrow{PN}, \\overrightarrow{PQ} = \\overrightarrow{PM} + \\overrightarrow{PN}$ ，则 $|\\overrightarrow{PQ}|$ 的最小值为 \\_\\_\\_\\_.`,
    preview: `已知点 M, N 在圆 O: x^2 + y^2 = 16 ，点 P(1, 2) ，且 →PM →PN, →PQ = →PM + →PN ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-9-12-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `如图 3-9-20, 连接辅助线, 有

![](images/b9dfd07268122d8ce4157673a919de2e66e3805ddd46cf1a2fcafeef6cb569ab.jpg)

$$
O P ^ {2} + O Q ^ {2} = O M ^ {2} + O N ^ {2},
$$

解得 $OQ=3\\sqrt{3}$ ,

$$
P Q \\geqslant O Q - O P = 3 \\sqrt {3} - \\sqrt {5}.
$$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-9-13",
    topicId: "topic-sec-3-9",
    title: `在 △ ABC 中, 若 (4→AB-→AC)→CB`,
    content: `在 $\\triangle ABC$ 中, 若 $(4\\overrightarrow{AB}-\\overrightarrow{AC})\\perp\\overrightarrow{CB}$ , 则 $\\sin A$ 的最大值为 \\_\\_\\_\\_.`,
    preview: `在 △ ABC 中, 若 (4→AB-→AC)→CB , 则 A 的最大值为 \\_\\_\\_\\_.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-9-13-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `因为 $(4\\overrightarrow{AB}-\\overrightarrow{AC})\\perp\\overrightarrow{CB}$ ,

所以 $(4\\overrightarrow{AB}-\\overrightarrow{AC})\\cdot\\overrightarrow{CB}=0$

$$
\\begin{array}{l} \\Rightarrow 4 \\overrightarrow {A B} \\cdot \\overrightarrow {C B} - \\overrightarrow {A C} \\cdot \\overrightarrow {C B} = 0 \\\\ \\Rightarrow 4 \\overrightarrow {B A} \\cdot \\overrightarrow {B C} + \\overrightarrow {C A} \\cdot \\overrightarrow {C B} = 0, \\\\ \\end{array}
$$

依据向量数乘余弦定理有 $4 \\cdot \\frac{a^{2} + c^{2} - b^{2}}{2} + \\frac{b^{2} + a^{2} - c^{2}}{2} = 0$ ,

即 $a^2 = \\frac{3}{5} (b^2 -c^2),\\cos A = \\frac{b^2 + c^2 - a^2}{2bc} = \\frac{b^2 + 4c^2}{5bc}\\geqslant \\frac{4}{5},$

故 $\\sin A \\leqslant \\frac{3}{5}.$

![](images/b9dfd07268122d8ce4157673a919de2e66e3805ddd46cf1a2fcafeef6cb569ab.jpg)

图3-9-20

![](images/6f0177fd4e3c2b927052e50c675e8285f32827d1a8c5dee2db27be560d6e269a.jpg)

图3-9-21`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-9-14",
    topicId: "topic-sec-3-9",
    title: `在锐角 △ ABC 中`,
    content: `在锐角 $\\triangle ABC$ 中， $B=\\frac{\\pi}{3}$ ， $|\\overrightarrow{CB}|=2$ ，则 $\\overrightarrow{AB}\\cdot\\overrightarrow{AC}$ 的取值范围为 \\_\\_\\_\\_.`,
    preview: `在锐角 △ ABC 中， B=π/3 ， |→CB|=2 ，则 →AB·→AC 的取值范围为 \\_\\_\\_\\_.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-9-14-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `如图 3-9-22 所示, 根据向量数乘余弦定理有

$$
\\overrightarrow {A B} \\cdot \\overrightarrow {A C} = \\frac {b ^ {2} + c ^ {2} - 4}{2}.
$$

由余弦定理得: $b^{2}=a^{2}+c^{2}-2ac\\cos B=c^{2}-2c+4.$

所以 $\\overrightarrow{AB}\\cdot\\overrightarrow{AC}=c(c-1)>0\\Rightarrow c>1.$

$\\triangle ABC$ 为锐角三角形 $\\Rightarrow A\\in\\left(\\frac{\\pi}{6},\\frac{\\pi}{2}\\right)$ ,

由正弦定理得： $\\frac{a}{\\sin A}=\\frac{b}{\\sin B}\\Rightarrow b=\\frac{\\sqrt{3}}{\\sin A}\\in(\\sqrt{3},2\\sqrt{3})$

所以 $b^{2} \\in (3,12)$ ，所以 $3 < c^{2} - 2c + 4 < 12 \\Rightarrow 1 < c < 4, \\overrightarrow{AB} \\cdot \\overrightarrow{AC} \\in (0,12)$ .

![](images/b68b35192d2f54346082dac5d0484c344bca9af70066c16619112380f60e5905.jpg)
图3-9-22`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-9-15",
    topicId: "topic-sec-3-9",
    title: `在 △ ABC 中， overrightarrowAB cdot overrightarrowAC + 2overr`,
    content: `在 $\\triangle ABC$ 中， $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} + 2\\overrightarrow{BA} \\cdot \\overrightarrow{BC} = 3\\overrightarrow{CA} \\cdot \\overrightarrow{CB}$ ，求 $\\sin C$ 的最大值.`,
    preview: `在 △ ABC 中， ，求 C 的最大值.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-9-15-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `由向量数乘余弦定理,化简得 $a^{2}+2b^{2}=3c^{2}$ ,

代入 $\\cos C=\\frac{a^{2}+b^{2}-c^{2}}{2ab}=\\frac{\\frac{2}{3}a^{2}+\\frac{1}{3}b^{2}}{2ab}\\geqslant\\frac{\\sqrt{2}}{3}$ ,

所以 $\\sin C=\\sqrt{1-\\cos^{2}C}\\leqslant\\frac{\\sqrt{7}}{3}$ ，等号当且仅当 $a:b:c=\\sqrt{3}:\\sqrt{6}:\\sqrt{5}$ 时取得.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-9-16",
    topicId: "topic-sec-3-9",
    title: `如图 3-9-24 所示,已知平面四边形 ABCD, AB ⊥ BC, AB = BC = AD = 2, CD =`,
    content: `如图 3-9-24 所示,已知平面四边形 $ABCD, AB \\perp BC, AB = BC = AD = 2, CD = 3, AC$ 与 $BD$ 交于 $O$ . 若记 $I_1 = \\overrightarrow{OA} \\cdot \\overrightarrow{OB}, I_2 = \\overrightarrow{OB} \\cdot \\overrightarrow{OC}, I_3 = \\overrightarrow{OC} \\cdot \\overrightarrow{OD}$ , 则 ( )
A. \${I}_{1} < {I}_{2} < {I}_{3}$

B. \${I}_{1} < {I}_{3} < {I}_{2}$

C. $I_{3} <   I_{1} <   I_{2}$

D. $I_{2} <   I_{1} <   I_{3}$

![](images/4735fff88612e5a2011bf9be34a020f54d23c376821c4b9af6ce1af56ec864d9.jpg)
图3-9-24`,
    preview: `如图 3-9-24 所示,已知平面四边形 与 BD 交于 O . 若记 , 则 ( ) A. I_1 < I_2 < I_3 B. I_1 < I_3 < I_`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-9-16-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `由对角线向量定理得

$$
\\overrightarrow {A C} \\cdot \\overrightarrow {D B} = \\frac {(\\overrightarrow {A B ^ {2}} + \\overrightarrow {C D ^ {2}}) - (\\overrightarrow {A D ^ {2}} + \\overrightarrow {C B ^ {2}})}{2} = \\frac {5}{2} > 0,
$$

所以 $I_{2}-I_{1}=\\overrightarrow{OB}\\cdot\\overrightarrow{OC}-\\overrightarrow{OA}\\cdot\\overrightarrow{OB}=\\overrightarrow{OB}\\cdot\\overrightarrow{AC}=t\\overrightarrow{DB}\\cdot\\overrightarrow{AC}>0(t>0)$ ,

而 $I_{3} - I_{1} = \\overrightarrow{OC}\\cdot \\overrightarrow{OD} -\\overrightarrow{OA}\\cdot \\overrightarrow{OB}$

$$
= (| \\overrightarrow {O C} | | \\overrightarrow {O D} | - | \\overrightarrow {O A} | | \\overrightarrow {O B} |) \\cos \\angle A O B <   0,
$$

所以 $I_{3}<I_{1}<I_{2}$ ，选择 C.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-9-17",
    topicId: "topic-sec-3-9",
    title: `如图 3-9-25 所示, 在圆 O 中, 若弦`,
    content: `如图 3-9-25 所示, 在圆 O 中, 若弦 AB=3, 弦 AC=5, 则 $\\overrightarrow{AO} \\cdot \\overrightarrow{BC}$ 的值是 ( )

![](images/44202c8878a4ecb7fd7ab9346c4cf20d29d782e55d386a7a4661a19460185003.jpg)
A.-8

B.-1

C. 1

D. 8`,
    preview: `如图 3-9-25 所示, 在圆 O 中, 若弦 AB=3, 弦 AC=5, 则 →AO · →BC 的值是 ( ) A.-8 B.-1 C. 1 D. 8`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-9-17-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `如图 3-9-25 所示, 由对角线向量定理得

$$
\\overrightarrow {A O} \\cdot \\overrightarrow {B C} = \\frac {(\\overrightarrow {A C ^ {2}} + \\overrightarrow {O B ^ {2}}) - (\\overrightarrow {A B ^ {2}} + \\overrightarrow {O C ^ {2}})}{2} = 8,
$$

所以,选 D.

![](images/44202c8878a4ecb7fd7ab9346c4cf20d29d782e55d386a7a4661a19460185003.jpg)
图3-9-25`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-9-18",
    topicId: "topic-sec-3-9",
    title: `如图 3-9-28 所示, 在三棱锥 A-BCD 中`,
    content: `如图 3-9-28

![](images/f210ee7e15c107dedd4b6a49d1adcc3aac9158f5f0ce8c865cc1e2a142baf90d.jpg) 所示, 在三棱锥 A-BCD 中, AB=AC=BD=CD=3, AD=BC=2, 点 M, N 分别是 AD, BC 的中点, 则异面直线 AN, CM 所成的角的余弦值是 \\_\\_\\_\\_.`,
    preview: `如图 3-9-28 所示, 在三棱锥 A-BCD 中, AB=AC=BD=CD=3, AD=BC=2, 点 M, N 分别是 AD, BC 的中点, 则异面直线`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-9-18-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `设异面直线 AN, CM 所成的角为 $\\theta$ ,

由 $\\overrightarrow{AN}\\cdot\\overrightarrow{CM}=\\frac{AM^{2}+NC^{2}-AC^{2}-NM^{2}}{2}$ 得

![](images/f210ee7e15c107dedd4b6a49d1adcc3aac9158f5f0ce8c865cc1e2a142baf90d.jpg)

图3-9-28

$2\\sqrt{2}\\times2\\sqrt{2}\\times\\cos\\theta=-7$ , 故异面直线的夹角的余弦值为 $\\frac{7}{8}$ .

评注 运用对棱角公式,向量的运算关系直接转化为简单的线段长度运算,非常直观.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-9-19",
    topicId: "topic-sec-3-9",
    title: `如图 3-9-29 所示, 已知平面四边形 ABCD`,
    content: `如图 3-9-29 所示, 已知平面四边形 ABCD, AB = BC = 3, CD = 1, $AD = \\sqrt{5}$ , $\\angle ADC = 90^{\\circ}$ . 沿直线 AC 将 $\\triangle ACD$ 翻折成 $\\triangle ACD'$ , 直线 AC 与 $BD'$ 所成角的余弦的最大值是 \\_\\_\\_\\_.
![](images/efeb94ae94aec29c341beb73e72ac794907a835648481e7808d4ba8c8fcee782.jpg)
图3-9-29`,
    preview: `如图 3-9-29 所示, 已知平面四边形 ABCD, AB = BC = 3, CD = 1, AD = √5 , ∠ ADC = 90° . 沿直线 AC`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-9-19-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `由 $\\overrightarrow{AC} \\cdot \\overrightarrow{BD} = \\frac{AD^2 + BC^2 - AB^2 - CD^2}{2}$

得 $\\sqrt{6}\\times BD\\times\\cos\\theta=2.$

若 $BD$ 最小, 则夹角最大, 显然当 $D$ 翻折落入三角面时 $BD$ 最小, 计算得 $BD$ 最小值为 2. 所以夹角余弦的最大值是 $\\frac{\\sqrt{6}}{6}$ .

评注 动态的立体翻折问题,看似很难,经过对棱角公式的转化之后,要求的几何量非常明确,辅助线做得很少,直接转化为解三角形问题,直观明了.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-9-20",
    topicId: "topic-sec-3-9",
    title: `三棱柱 ABC-A_1B_1C_1 中`,
    content: `三棱柱 $ABC-A_{1}B_{1}C_{1}$ 中，底面边长和侧棱长都相等， $\\angle BAA_{1}=\\angle CAA_{1}=60^{\\circ}$ ，则异面直线 $AB_{1}$ 与 $BC_{1}$ 所成角的余弦值为 \\_\\_\\_\\_.`,
    preview: `三棱柱 ABC-A_1B_1C_1 中，底面边长和侧棱长都相等， ∠ BAA_1=∠ CAA_1=60° ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-9-20-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `如图 3-9-30 所示, 不妨设边长为 1, 欲求直线夹角, 采用对棱角公式得

![](images/4f3fe7c448038aee96aa420fa68e0ea4b6e875c4368f9c42a64e150d50fac60f.jpg)

图3-9-30

$$
\\begin{array}{l} \\overrightarrow {A B _ {1}} \\cdot \\overrightarrow {B C _ {1}} = \\frac {A C _ {1} ^ {2} + B _ {1} B ^ {2} - A B ^ {2} - B _ {1} C _ {1} ^ {2}}{2} \\\\ \\Rightarrow \\sqrt {3} \\times B C _ {1} \\times \\cos \\theta = 1. \\\\ \\end{array}
$$

现在来求 $BC_{1}$

$$
\\begin{array}{l} \\overrightarrow {A B} \\cdot \\overrightarrow {B _ {1} C _ {1}} = \\frac {A C _ {1} ^ {2} + B _ {1} B ^ {2} - A B _ {1} ^ {2} - B C _ {1} ^ {2}}{2} \\\\ \\Rightarrow 1 \\times 1 \\times \\cos \\frac {2 \\pi}{3} = \\frac {1 - B C _ {1} ^ {2}}{2}, \\\\ \\end{array}
$$

得 $BC_{1}$ 为 $\\sqrt{2}$ . 所以 $\\cos\\theta=\\frac{\\sqrt{6}}{6}$ .

评注 对于较复杂的倾斜的立体图形,可运用对棱角公式,在不添辅助线的情况下精准地求出需要的量.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-10-1",
    topicId: "topic-sec-3-10",
    title: `含根式取整和的数值计算`,
    content: `$\\left[\\frac{2 + \\sqrt{2}}{2}\\right] + \\left[\\frac{3 + \\sqrt{3}}{3}\\right] + \\dots +\\left[\\frac{2025 + \\sqrt{2025}}{2025}\\right]$ 的值为 （ ）
A. 2022

B. 2023

C. 2024

D. 2025`,
    preview: `的值为 （ ） A. 2022 B. 2023 C. 2024 D. 2025`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-10-1-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `当 $n \\geqslant 2$ 时, 因为 $1 = \\frac{n}{n} < \\frac{n + \\sqrt{n}}{n} < \\frac{n + n}{n} = 2$ ,

所以 $\\left[\\frac{n+\\sqrt{n}}{n}\\right]=1,$

因此，当 n 依次取 2,3,…,2025 时，共取了 2024 个值，故所求的和为 2024.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-10-2",
    topicId: "topic-sec-3-10",
    title: `已知 x, y 满足 beginaligned y &= 2[x] + 3, y &= 3[x - 2] + 5`,
    content: `已知 x, y 满足 $\\left\\{\\begin{aligned} y &= 2[x] + 3, \\\\ y &= 3[x - 2] + 5, \\end{aligned}\\right.$ 则 $x + y$ 的取值范围为 \\_\\_\\_\\_.`,
    preview: `已知 x, y 满足 则 x + y 的取值范围为 \\_\\_\\_\\_.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-10-2-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `$2[x]+3=3[x-2]+5$ ,

即 $[x]=4$ ，所以 $4\\leqslant x<5,y=11$ ，所以 $15\\leqslant x+y<16$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-10-3",
    topicId: "topic-sec-3-10",
    title: `函数 y = x^3 - [x] 的零点个数为 （）`,
    content: `函数 $y = x^{3} - [x]$ 的零点个数为 （）
A. 1

B. 2

C. 3

D. 4`,
    preview: `函数 y = x^3 - [x] 的零点个数为 （） A. 1 B. 2 C. 3 D. 4`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-10-3-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 当 $[x] \\geqslant 0$ 时, 因为 $x^{3} - [x] = 0$ , 即 $x^{3} = [x] \\geqslant [x]^{3}$ ,

所以 $[x]^{3}-[x]\\leqslant0$ ，解得 $0\\leqslant[x]\\leqslant1$ .

当 $[x]=0$ 时,x=0符合；当 $[x]=1$ 时,x=1符合.

(2) 当 $[x] < 0$ 时，由 $x^{3} - [x] = 0, [x] = x - \\{x\\}, 0 \\leqslant \\{x\\} < 1$ 得 $-1 < x^{3} - x \\leqslant 0$ ,

即 $-1 < x(x - 1)(x + 1) \\leqslant 0, x < -2$ 显然不满足该式.

若 $-1\\leqslant x<0$ ，则 $[x]=-1$ 代入得x=-1，符合.

若 $-2\\leqslant x<-1$ ，则 $[x]=-2$ ，所以 $x^{3}=-2$ ，解得 $x=-\\sqrt[3]{2}$ ，符合.

综上可知,零点有4个,选择D.

评注 本题也可利用图像法,考虑函数 $y_{1}=x^{3}, y_{2}=x$ 的交点个数.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-10-4",
    topicId: "topic-sec-3-10",
    title: `已知方程 8[3x]-5[2x]=3`,
    content: `（多选题）已知方程 $8[3x]-5[2x]=3$ ，则以下关于方程的解的说法正确的是（）
A. 有唯一解 B. 解的大小不小于 $\\frac{1}{2}$ C. 解的大小不超过 1 D. 有无数个解`,
    preview: `已知方程 8[3x]-5[2x]=3 ，则以下关于方程的解的说法正确的是（） A. 有唯一解 B. 解的大小不小于 1/2 C. 解的大小不超过 1 D. 有无`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-10-4-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `设 $[3x]=m$ ，则 $\\frac{m}{3}\\leqslant x<\\frac{m+1}{3}$ .

设 $[2x] = n$ ，则 $\\frac{n}{2} \\leqslant x < \\frac{n + 1}{2}$

所以 $8m - 5n = 3$ 且 $\\left\\{ \\begin{array}{l} \\frac{n}{2} < \\frac{m + 1}{3}, \\\\ \\frac{m}{3} < \\frac{n + 1}{2}, \\end{array} \\right.$

即 $\\left\\{\\begin{aligned}3n&<2m+2,\\\\ 3n&>2m-3,\\end{aligned}\\right.$

所以-3<3n-2m<2，

所以 3n-2m=-2,-1,0,1,

联立 8m-5n=3，

解得 m=1, n=1，代入得 $\\frac{1}{2} \\leqslant x < \\frac{2}{3}$ 即为所求方程的解，

所以选 BCD.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-10-5",
    topicId: "topic-sec-3-10",
    title: `方程 3^2x-[10×3^x+1]+√3^2x-[10×3^x+1]+82=-80 的解为 ____`,
    content: `方程 $3^{2x}-\\left[10\\times3^{x+1}\\right]+\\sqrt{3^{2x}-\\left[10\\times3^{x+1}\\right]+82}=-80$ 的解为 \\_\\_\\_\\_.`,
    preview: `方程 的解为 \\_\\_\\_\\_.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-10-5-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `令 $\\sqrt{3^{2x}-[10\\times3^{x+1}]+82}=t,$

则原方程可化为 $t^{2}+t-2=0$ .

因 t>0，所以 t=1，

即 $3^{2x} + 81 = [10\\times 3^{x + 1}]\\leqslant 10\\times 3^{x + 1}$

所以 $(3^{x}-27)(3^{x}-3)\\leqslant0$ ，

解得 $1 \\leqslant x \\leqslant 3$ .

将 x=1,2,3 代入检验知 x=2 不符, 所以 x=1 或 3.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-10-6",
    topicId: "topic-sec-3-10",
    title: `函数 f(x) = [x/15][-15/x] + 1 (0 < x < 100) 的值域为 ____`,
    content: `函数 $f(x) = \\left[\\frac{x}{15}\\right]\\left[\\frac{-15}{x}\\right] + 1 (0 < x < 100)$ 的值域为 \\_\\_\\_\\_.`,
    preview: `函数 的值域为 \\_\\_\\_\\_.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-10-6-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 当 0 < x < 15 时, 得 $0 < \\frac{x}{15} < 1$ , 则 $\\left[\\frac{x}{15}\\right] = 0$ , $f(x) = 1$ .

(2) 当 $15 \\leqslant x < 100$ 时， $-1 \\leqslant \\frac{-15}{x} < \\frac{-3}{50}$ ，所以 $f(x) = -\\left[\\frac{x}{15}\\right] + 1$ ，

因为 $1 \\leqslant \\frac{x}{15} < \\frac{100}{15} = 6\\frac{2}{3}$ , 所以 $\\left[\\frac{x}{15}\\right] = 1, 2, 3, 4, 5, 6$ ,

所以 $f(x)=0,-1,-2,-3,-4,-5.$

综上， $f(x)$ 的值域为 $\\{1,0, - 1, - 2, - 3, - 4, - 5\\}$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-10-7",
    topicId: "topic-sec-3-10",
    title: `阶乘分母取整方程求整数`,
    content: `已知 $x \\in N$ ，且 $[x] + \\left[\\frac{x}{3!}\\right] + \\left[\\frac{x}{5!}\\right] + \\left[\\frac{x}{7!}\\right] = 2021$ ，则 x = \\_\\_\\_\\_.`,
    preview: `已知 x N ，且 ，则 x = \\_\\_\\_\\_.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-10-7-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `因为 $x \\in N$ ，所以 $0 \\leqslant x \\leqslant 2021$ ，又因为 $7! = 5040 > 2021$ ，

所以 $\\left[\\frac{x}{7!}\\right]=0$ ，所以 $[x]+\\left[\\frac{x}{3!}\\right]+\\left[\\frac{x}{5!}\\right]=2021.$

又因为 $x - 1 < [x] \\leqslant x$ ，所以 $x - 1 + \\frac{x}{3!} - 1 + \\frac{x}{5!} - 1 < 2021 \\leqslant x + \\frac{x}{3!} + \\frac{x}{5!}$ ，

即 $\\frac{141}{120}x-3<2021\\leqslant\\frac{141}{120}x$ ，所以x=1720或x=1721或x=1722.

经检验,x=1721是原方程的解.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-10-8",
    topicId: "topic-sec-3-10",
    title: `若实数 x 满足 [x+19/100]+[x+20/100]+…+[x+91/100]=546，则 [100x]=`,
    content: `若实数 x 满足 $\\left[x+\\frac{19}{100}\\right]+\\left[x+\\frac{20}{100}\\right]+\\cdots+\\left[x+\\frac{91}{100}\\right]=546$ ，则 $[100x]=$ \\_\\_\\_\\_.`,
    preview: `若实数 x 满足 ，则 [100x]= \\_\\_\\_\\_.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-10-8-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `左边每一项为 $[x]$ 或 $[x+1]$ ，注意到 $73\\times7<546<73\\times8$ ，所以 $[x]=7$ .

左边共73项，设 $\\left[x+\\frac{k}{100}\\right]=7(19\\leqslant k\\leqslant m),\\left[x+\\frac{p}{100}\\right]=8(m+1\\leqslant p\\leqslant91)$ ,

则 $7(m-18)+8(91-m)=546$ ，所以 m=56，

所以 $\\left[x+\\frac{56}{100}\\right]=7$ ，即 $6.44\\leqslant x<7.44$ ; $\\left[x+\\frac{57}{100}\\right]=8$ ，即 $7.43\\leqslant x<8.43$ .

所以 $7.43 \\leqslant x < 7.44$ ，所以 $[100x] = 743$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-10-9",
    topicId: "topic-sec-3-10",
    title: `sum_n=1^100[23n/101] 的值为____`,
    content: `$\\sum_{n=1}^{100}\\left[\\frac{23n}{101}\\right]$ 的值为\\_\\_\\_\\_.`,
    preview: `_n=1^100[23n/101] 的值为\\_\\_\\_\\_.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-10-9-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `当 $n=1,2,\\cdots,100$ 时， $\\frac{23n}{101}\\notin Z$ ，而 $\\frac{23n}{101}+\\frac{23(101-n)}{101}=23$ ，

所以 $\\left\\{\\frac{23n}{101}\\right\\} +\\left\\{\\frac{23(101 - n)}{101}\\right\\} = 1,\\left[\\frac{23n}{101}\\right] + \\left[\\frac{23(101 - n)}{101}\\right] = 22,$

所以 $\\sum_{n=1}^{100}\\left[\\frac{23n}{101}\\right] = \\sum_{n=1}^{100}\\left[\\frac{23(101 - n)}{101}\\right] = \\frac{1}{2}\\sum_{n=1}^{100}\\left(\\left[\\frac{23n}{101}\\right] + \\left[\\frac{23(101 - n)}{101}\\right]\\right)$

$$
= \\frac {1}{2} \\times 2 2 \\times 1 0 0 = 1 1 0 0.
$$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-11-1",
    topicId: "topic-sec-3-11",
    title: `已知正整数 a, b 满足 a > b 且 (a -`,
    content: `已知正整数 a, b 满足 a > b 且 $(a - b)^{ab} = a^{b}b^{a}$ ，则 a = \\_\\_\\_\\_ , b = \\_\\_\\_\\_.`,
    preview: `已知正整数 a, b 满足 a > b 且 (a - b)^ab = a^bb^a ，则 a = \\_\\_\\_\\_ , b = \\_\\_\\_\\_.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-11-1-sol-0",
        title: `解答`,
        method: "creative",
        steps: [],
        explanation: `构造函数 $f(x)=\\frac{\\ln x}{x}(x>0)$ ，求导得 $f'(x)=\\frac{1-\\ln x}{x^{2}}$ .

当 0 < x < e 时， $f'(x) > 0$ ， $f(x)$ 单调递增；

当 x > e 时， $f'(x) < 0$ ， $f(x)$ 单调递减。故

$$
f (x) _ {\\max} = f (\\mathrm{e}) = \\frac {1}{\\mathrm{e}}.
$$

若 a-b=1，则 $a^{b}b^{a}=1$ ，

不符合题意,因此有 $a-b \\geqslant 2$ .

由已知 $(a-b)^{ab}=a^{b}b^{a}$ 及 $\\frac{\\ln x}{x}\\leqslant\\frac{1}{e}$

得 $\\ln(a-b)=\\frac{\\ln a}{a}+\\frac{\\ln b}{b}<\\frac{1}{2}+\\frac{1}{2}=1$ , 即

$$
a - b <   \\mathrm{e}.
$$

又因为 $a-b \\geqslant 2$ ，因此有 a-b=2。

当 b=1 时, a=3, 此时 $(a-b)^{ab} \\neq a^{b}b^{a}$ , 不符合题意;

当 b=2 时, a=4, 此时 $(a-b)^{ab}=a^{b}b^{a}$ , 符合题意;

当 b=3 时, a=5, 此时 $(a-b)^{ab} \\neq a^{b}b^{a}$ , 不符合题意;

当 $b \\geqslant 4$ 时， $\\ln 2 = \\ln (a - b) = \\frac{\\ln a}{a} + \\frac{\\ln b}{b} \\leqslant \\frac{\\ln 6}{6} + \\frac{\\ln 4}{4} < \\ln 2,$

矛盾,不符合题意.

综上得 a=4, b=2.

【例题2】若 $0 < x \\leqslant 1, a = \\left(\\frac{\\sin x}{x}\\right)^2, b = \\frac{\\sin x}{x}, c = \\frac{\\sin x^2}{x^2}$ ，则 $a, b, c$ 的大小关系为 \\_\\_\\_\\_.

解答 ①令 $f(x) = \\frac{\\sin x}{x}$ ，则 $f'(x) = \\frac{x\\cos x - \\sin x}{x^2}$ .

令 $h(x) = x\\cos x - \\sin x$ ，则

$$
h ^ {\\prime} (x) = - x \\sin x <   0 (0 <   x \\leqslant 1).
$$

因此 $h(x)$ 在 $(0,1]$ 上单调递减，故 $h(x) < h(0) = 0$ ，即 $f'(x) < 0$ ，因此 $f(x)$ 在 $(0,1]$ 上单调递减.当 $0 < x\\leqslant 1$ 时， $0 <   x^{2}\\leqslant x\\leqslant 1$ ，从而 $f(x)\\leqslant f(x^{2})$ ，即 $\\frac{\\sin x}{x}\\leqslant \\frac{\\sin x^2}{x^2}.$

②令 $g(x)=\\sin x-x$ ，则 $g'(x)=\\cos x-1<0$ .

因此 $g(x)$ 在 $(0,1)$ 上单调递减，有 $g(x)<g(0)=0$ ，即

$0 < \\frac{\\sin x}{x} < 1$ ，故 $\\left(\\frac{\\sin x}{x}\\right)^2 \\leqslant \\frac{\\sin x}{x}$

综上， $a <   b\\leqslant c$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-11-3",
    topicId: "topic-sec-3-11",
    title: `已知函数 f(x) = x^2 - 2x + a(e^x-1 + e^-x+1) 有唯一零点,则 a= ____`,
    content: `已知函数 $f(x) = x^{2} - 2x + a(e^{x-1} + e^{-x+1})$ 有唯一零点,则 $a=$ \\_\\_\\_\\_
A. $-\\frac{1}{2}$

B. $\\frac{1}{3}$

C. $\\frac{1}{2}$

D. 1`,
    preview: `已知函数 有唯一零点,则 a= \\_\\_\\_\\_ A. -1/2 B. 1/3 C. 1/2 D. 1`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-11-3-sol-0",
        title: `解答`,
        method: "creative",
        steps: [],
        explanation: `函数的零点满足 $x^{2}-2x=-a(e^{x-1}+e^{-x+1})$ .

设 $g(x) = \\mathrm{e}^{x - 1} + \\mathrm{e}^{-x + 1}$ ，则 $g'(x) = \\mathrm{e}^{x - 1} - \\mathrm{e}^{-x + 1} = \\mathrm{e}^{x - 1} - \\frac{1}{\\mathrm{e}^{x - 1}} = \\frac{\\mathrm{e}^{2(x - 1)} - 1}{\\mathrm{e}^{x - 1}}.$

当 $g'(x)=0$ 时, x=1, 当 x<1 时, $g'(x)<0$ , 函数 $g(x)$ 单调递减;

当 x>1 时, $g'(x)>0$ , 函数 $g(x)$ 单调递增.

当 x=1 时, 函数取得最小值 $g(1)=2$ .

设 $h(x)=x^{2}-2x$ ，当 x=1 时，函数取得最小值 -1，

若-a>0，函数 $h(x)$ 与函数 $ag(x)$ 没有交点，

当-a<0时，函数 $h(x)$ 与函数 $ag(x)$ 有一个交点，即 $-a\\times2=-1$ ，解得 $a=\\frac{1}{2}$

故选C.

评注 函数零点的应用主要表现在利用零点求参数范围,若方程可解,通过解方程即可得出参数的范围,若方程不易解或不可解,则将问题转化为构造两个函数,利用两个函数图像的关系求解,这样会使得问题变得直观、简单,这也体现了数形结合思想的应用.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-11-4",
    topicId: "topic-sec-3-11",
    title: `已知函数 f(x) 的定义域为 R`,
    content: `（2023 年高考新课标全国Ⅰ卷）已知函数 $f(x)$ 的定义域为 R, $f(xy)=y^{2}f(x)+x^{2}f(y)$ ，则 （）
A. $f(0) = 0$

B. $f(1) = 0$

C. $f(x)$ 是偶函数

D. x=0 为 $f(x)$ 的极小值点`,
    preview: `已知函数 f(x) 的定义域为 R, f(xy)=y^2f(x)+x^2f(y) ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-11-4-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `（特殊化思想）对于 A，令 x=y=0，得 $f(0)=0$ ，故 A 正确.

对于 B, 令 x = y = 1, 得 $f(1) = 0$ , 故 B 正确.

对于 C, 令 x = y = -1, 得 $f(-1) = 0$ . 令 y = -1, 得 $f(-x) = f(x) + x^{2}f(-1) = f(x)$ , 所以 $f(x)$ 为偶函数, 故 C 正确.

对于 D, 不妨取 $f(x)=0$ , 显然符合条件, 此时 $f(x)$ 无极小值点, 故 D 错误.`,
      },
      {
        id: "prob-sec-3-11-4-sol-1",
        title: `解法二`,
        method: "creative",
        steps: [],
        explanation: `（构造思想）对于 D，当 $x^{2}y^{2}\\neq0$ 时，

等式 $f(xy)=y^{2}f(x)+x^{2}f(y)$ 两边同除以 $x^{2}y^{2}$

得 $\\frac{f(xy)}{x^2y^2} = \\frac{f(x)}{x^2} +\\frac{f(y)}{y^2}$ 设 $g(x) = \\frac{f(x)}{x^2}$ ，则 $g(xy) = g(x) + g(y)$

满足此式的经典函数是对数函数.

构造 $g(x) = \\ln |x|(x\\neq 0),f(x) = \\left\\{ \\begin{array}{ll}x^{2}\\ln |x|, & x\\neq 0,\\\\ 0, & x = 0, \\end{array} \\right.$

易得答案为 A, B, C.`,
      },
    ],
    tags: [],
    source: `2023 年高考新课标全国Ⅰ卷`,
  },
  {
    id: "prob-sec-3-11-5",
    topicId: "topic-sec-3-11",
    title: `已知函数 f(x)=(x-2)e^x+a(x-1)^2`,
    content: `已知函数 $f(x)=(x-2)\\mathrm{e}^{x}+a(x-1)^{2}$ 有两个零点.
(1) 求 a 的取值范围；

(2) 设 $x_{1}, x_{2}$ 是 $f(x)$ 的两个零点，证明： $x_{1} + x_{2} < 2$ .`,
    preview: `已知函数 f(x)=(x-2)e^x+a(x-1)^2 有两个零点. (1) 求 a 的取值范围； (2) 设 x_1, x_2 是 f(x) 的两个零点，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-11-5-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1) 可用直接法求解, 对参数 $a$ 进行讨论, 利用导数判断单调性, 得出函数的值域, 确定 $a$ 的取值范围为 $(0, +\\infty)$ . 亦可用分离参数方法求解. 详解略.

(2)`,
      },
      {
        id: "prob-sec-3-11-5-sol-1",
        title: `解法一`,
        method: "creative",
        steps: [],
        explanation: `整体构造.

因为 $f(x)=(x-2)\\mathrm{e}^{x}+a(x-1)^{2}$ ，所以 $f'(x)=(x-1)(\\mathrm{e}^{x}+2a)$ ，所以 $x_{1}<1<x_{2}$ .

构造函数 $F(x) = f(x) - g(x) = (x - 2)\\mathrm{e}^x +a(x - 1)^2 -\\left[\\frac{\\mathrm{e} + 2a}{2} (x - 1)^2 -\\mathrm{e}\\right],$

所以 $F'(x)=(x-1)(\\mathrm{e}^{x}+2a)-( \\mathrm{e}+2a)(x-1)=(x-1)(\\mathrm{e}^{x}-\\mathrm{e})$ .

当 $x \\neq 1$ 时, $F'(x) > 0$ ,

所以 $F(x)$ 在 $(-\\infty,1)$ 上单调递增，在 $(1,+\\infty)$ 上单调递增，而 $F(1)=0$ .

所以当 $x \\in (-\\infty, 1)$ 时， $f(x) < g(x)$ ;

当 $x \\in (1, +\\infty)$ 时， $f(x) > g(x)$ .

设 $g(x) = \\frac{\\mathrm{e} + 2a}{2} (x - 1)^2 -\\mathrm{e}$ 的两个零点为 $x_{3},x_{4}$ ，则 $x_{3} + x_{4} = 2$

所以 $x_{1}<x_{3}<1<x_{2}<x_{4}$ ，则 $x_{1}+x_{2}<x_{3}+x_{4}=2$ ，得证.`,
      },
      {
        id: "prob-sec-3-11-5-sol-2",
        title: `解法二`,
        method: "creative",
        steps: [],
        explanation: `局部构造.

不妨设 $x_{1}<x_{2}$ ，由`,
      },
      {
        id: "prob-sec-3-11-5-sol-3",
        title: `解法一`,
        method: "creative",
        steps: [],
        explanation: `知 $x\\in(-\\infty,1)$ ， $x_{2}\\in(1,+\\infty)$ ， $2-x_{2}\\in(-\\infty,1)$ ，

又 $f(x)$ 在 $(-\\infty,1)$ 上单调递减，

所以 $x_{1}+x_{2}<2$ 等价于 $f(x_{1})>f(2-x_{2})$ ，即 $f(2-x_{2})<0$ 。

由于 $f(2 - x_2) = -x_2\\mathrm{e}^{2 - x_2} + a(x_2 - 1)^2$

而 $f(x_{2}) = (x_{2} - 2)\\mathrm{e}^{x_{2}} + a(x_{2} - 1)^{2} = 0,$

所以 $f(2-x_{2})=-x_{2}\\mathrm{e}^{2-x_{2}}-(x_{2}-2)\\mathrm{e}^{x_{2}}$

构造函数 $g(x) = -x\\mathrm{e}^{2 - x} - (x - 2)\\mathrm{e}^x$ ，则 $g^{\\prime}(x) = (x - 1)(\\mathrm{e}^{2 - x} - \\mathrm{e}^{x})$

所以当 x>1 时， $g'(x)<0$ ，而 $g(1)=0$ ，故当 x>1 时， $g(x)<0$ 。

从而 $g(x_{2}) = f(2 - x_{2}) < 0$ ，故 $x_{1} + x_{2} < 2$

评注 本题为高考压轴题,考查知识全面,难度较高,特别是第二问的证明.此题可以通过构造函数解决,普遍的想法进行整体构造,利用导数判断单调性,回归函数的值域求解,推荐的方法是先用分析法进行转换,再根据需要进行构造,以达到事半功倍.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-11-6",
    topicId: "topic-sec-3-11",
    title: `已知数列 x_n 满足： x_1 = 1, x_n = x_n + 1 + ln (1 + x_n + 1)(n∈`,
    content: `已知数列 $\\{x_{n}\\}$ 满足： $x_{1} = 1, x_{n} = x_{n + 1} + \\ln (1 + x_{n + 1})(n\\in \\mathbf{Z}^{+})$ .证明：当 $n\\in$ $\\mathbf{Z}^+$ 时，
(1) $x_{n}>x_{n+1}>0;$
(2) $2x_{n+1}-x_{n}\\leqslant\\frac{x_{n}x_{n+1}}{2};$
(3) $\\frac{1}{2^{n - 1}} \\leqslant x_n \\leqslant \\frac{1}{2^{n - 2}}$ .`,
    preview: `已知数列 满足： .证明：当 n Z^+ 时， (1) x_n>x_n+1>0; (2) 2x_n+1-x_n≤x_{nx_n+1}2; (3) .`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-11-6-sol-0",
        title: `解答`,
        method: "creative",
        steps: [],
        explanation: `(1)构造函数 $f(x)=\\ln(x+1)-x$ ,

因为 $f'(x)=\\frac{1}{x+1}-1$ ，所以 $f(x)\\leqslant f(0)=0$ ，所以 $\\ln(x+1)-x\\leqslant0$ 。

下面用反证法证明 $x_{n}>0$ .

假设存在 $n_{0} \\in Z^{+}$ 使得 $-1 < x_{n_{0}} \\leqslant 0$ ,

则 $x_{n_0 - 1} = x_{n_0} + \\ln (x_{n_0} + 1)\\leqslant 2x_{n_0}\\leqslant 0$ ，所以 $x_{n_0 - 1}\\leqslant 0$ ，所以 $x_{n_0 - 2}\\leqslant 0$

以此类推可得 $x_{1} \\leqslant 0$ ，这与已知条件矛盾，所以 $x_{n} > 0$ 。

所以 $x_{n}-x_{n+1}=\\ln(x_{n+1}+1)>0$ , 即 $x_{n}>x_{n+1}>0$

此小题也可用数学归纳法证明.

(2)由 $x_{n} = x_{n + 1} + \\ln (1 + x_{n + 1})$ 得

$$
x _ {n} x _ {n + 1} - 4 x _ {n + 1} + 2 x _ {n} = x _ {n + 1} ^ {2} - 2 x _ {n + 1} + (2 + x _ {n + 1}) \\ln (1 + x _ {n + 1}).
$$

构造函数 $g(x)=x^{2}-2x+(x+2)\\ln(1+x)(x\\geqslant0)$ ,

因为 $g'(x)=\\frac{2x^{2}+x}{x+1}+\\ln(1+x)>0,$

函数 $g(x)$ 在 $[0, +\\infty)$ 上单调递增，

所以 $x_{n+1}^{2}-2x_{n+1}+(2+x_{n+1})\\ln(1+x_{n+1})=f(x_{n+1})\\geqslant0,$

所以 $2x_{n + 1} - x_n\\leqslant \\frac{x_nx_{n + 1}}{2} (n\\in \\mathbf{Z}^+)$

(3)因为 $x_{n} = x_{n + 1} + \\ln (1 + x_{n + 1})\\leqslant x_{n + 1} + x_{n + 1} = 2x_{n + 1}$

所以 $x_{n} \\geqslant \\frac{1}{2^{n-1}}$ ,

由 $2x_{n + 1} - x_n\\leqslant \\frac{x_nx_{n + 1}}{2}$ 得 $\\frac{1}{x_{n + 1}} -\\frac{1}{2}\\geqslant 2\\left(\\frac{1}{x_n} -\\frac{1}{2}\\right) > 0,$

所以 $\\frac{1}{x_{n}}-\\frac{1}{2}\\geqslant2\\left(\\frac{1}{x_{n-1}}-\\frac{1}{2}\\right)\\geqslant\\cdots\\geqslant2^{n-1}\\left(\\frac{1}{x_{1}}-\\frac{1}{2}\\right)=2^{n-2}$

所以 $x_{n} \\leqslant \\frac{1}{2^{n-2}}$ ,

综上， $\\frac{1}{2^{n - 1}}\\leqslant x_n\\leqslant \\frac{1}{2^{n - 2}}.$

评注 本题为2017年浙江高考卷的最后一题,主要考查数列的概念、递推关系与单调性等基础知识,不等式及其应用,属于难题.构造函数的思想在本题中起到至关重要的作用,根据题知结构形式构造相应函数 $(f(x)=\\ln(x+1)-x,g(x)=x^{2}-2x+(x+2)\\ln(1+x))$ ,利用函数的性质判断数列的单调性,进而达到破解求证的效果.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-11-7",
    topicId: "topic-sec-3-11",
    title: `加权前缀和条件下的数列通项`,
    content: `数列 $\\{a_{n}\\}$ 满足: $a_{1}+2a_{2}+\\cdots+na_{n}=4-\\frac{n+2}{2^{n-1}},n\\in\\mathbf{Z}^{+}$ .
(1) 求 $a_{3}$ 的值；

(2)求数列 $\\{a_{n}\\}$ 的前n项和 $T_{n}$ ;

(3) 令 $b_{1} = a_{1}, b_{n} = \\frac{T_{n-1}}{n} + \\left(1 + \\frac{1}{2} + \\frac{1}{3} + \\cdots + \\frac{1}{n}\\right)a_{n} (n \\geqslant 2)$ ，数列 $\\{b_{n}\\}$ 的前 $n$ 项和为 $S_{n}$ . 求证： $S_{n} < 2 + 2\\ln n$ .`,
    preview: `数列 满足: . (1) 求 a_3 的值； (2)求数列 的前n项和 T_n ; (3) 令 ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-11-7-sol-0",
        title: `解答`,
        method: "creative",
        steps: [],
        explanation: `(1) $n$ 用2、3代入解方程可得 $a_3 = \\frac{1}{4}$ .

(2) 当 n=1 时, $a_{1}=4-\\frac{1+2}{2^{1-1}}=1$ ;

当 $n \\geqslant 2$ 时, $n$ 用 $n - 1$ 代入后两式相减得: $na_{n} = \\frac{n + 1}{2^{n - 2}} - \\frac{n + 2}{2^{n - 1}} = \\frac{n}{2^{n - 1}}$ ,

此时 $a_{n} = \\frac{1}{2^{n - 1}}$ .经检验知 $a_1 = 1$ 也满足，故 $T_{n} = \\frac{1\\times\\left[1 - \\left(\\frac{1}{2}\\right)^{n}\\right]}{1 - \\frac{1}{2}} = 2 - \\frac{1}{2^{n - 1}}.$

(3)由(1)(2)知, $b_{1}=a_{1}=1$ .

当 $n \\geqslant 2$ 时, $b_{n} = \\frac{2 - \\frac{1}{2^{n - 2}}}{n} + \\left(1 + \\frac{1}{2} + \\frac{1}{3} + \\cdots + \\frac{1}{n}\\right) \\times \\frac{1}{2^{n - 1}}$

$$
= \\frac {2}{n} + \\left(1 + \\frac {1}{2} + \\frac {1}{3} + \\dots + \\frac {1}{n - 1} - \\frac {1}{n}\\right) \\times \\frac {1}{2 ^ {n - 1}}.
$$

当 n=1 时， $S_{1}=1<2+2\\ln1=2$ ，成立；

当 $n \\geqslant 2$ 时, $S_{n} = 1 + \\left[\\frac{2}{2} + \\left(1 - \\frac{1}{2}\\right) \\times \\frac{1}{2^{1}}\\right] + \\left[\\frac{2}{3} + \\left(1 + \\frac{1}{2} - \\frac{1}{3}\\right) \\times \\frac{1}{2^{2}}\\right] + \\cdots$

$$
+ \\left[ \\frac {2}{n} + \\left(1 + \\frac {1}{2} + \\frac {1}{3} + \\dots + \\frac {1}{n - 1} - \\frac {1}{n}\\right) \\times \\frac {1}{2 ^ {n - 1}} \\right]
$$

$$
= 1 + 2 \\left(\\frac {1}{2} + \\frac {1}{3} + \\dots + \\frac {1}{n}\\right) + \\left(1 - \\frac {1}{2 ^ {n - 1}}\\right) + \\frac {1}{2} \\left(- \\frac {1}{2 ^ {n - 1}}\\right)
$$

$$
+ \\frac {1}{3} \\left(- \\frac {1}{2 ^ {n - 1}}\\right) + \\dots + \\frac {1}{n - 1} \\left(- \\frac {1}{2 ^ {n - 1}}\\right) + \\frac {1}{n} \\left(- \\frac {1}{2 ^ {n - 1}}\\right)
$$

$$
= 2 + 2 \\left(\\frac {1}{2} + \\frac {1}{3} + \\dots + \\frac {1}{n}\\right) - \\left(1 + \\frac {1}{2} + \\frac {1}{3} + \\dots + \\frac {1}{n}\\right) \\cdot \\frac {1}{2 ^ {n - 1}}
$$

$$
= \\left(1 + \\frac {1}{2} + \\frac {1}{3} + \\dots + \\frac {1}{n}\\right) \\left(2 - \\frac {1}{2 ^ {n - 1}}\\right) <   2 \\left(1 + \\frac {1}{2} + \\frac {1}{3} + \\dots + \\frac {1}{n}\\right)
$$

$$
<   2 + 2 \\left(\\frac {1}{2} + \\frac {1}{3} + \\dots + \\frac {1}{n}\\right).
$$

现只需证明： $\\frac{1}{2}+\\frac{1}{3}+\\cdots+\\frac{1}{n}<\\ln n.$

构造函数 $f(x)=\\ln(1+x)-\\frac{x}{1+x}(x>0)$ ,

$f^{\\prime}(x) = \\frac{x^{2}}{1 + x} >0,f(x)$ 在 $(0, + \\infty)$ 上单调递增，所以 $f(x) = \\ln (1 + x) - \\frac{x}{1 + x} >f(0) = 0,$

所以 $\\ln(1+x)>\\frac{x}{1+x}$ 在 $(0,+\\infty)$ 上恒成立，即 $\\frac{x}{1+x}<\\ln(1+x)$ ，

令 $x = \\frac{1}{n - 1}, n \\geqslant 2$ ，则 $\\frac{1}{n} < \\ln \\left(1 + \\frac{1}{n - 1}\\right)$ ，

从而可得 $\\frac{1}{2}<\\ln\\left(1+\\frac{1}{2-1}\\right),\\frac{1}{3}<\\ln\\left(1+\\frac{1}{3-1}\\right),\\cdots,\\frac{1}{n}<\\ln\\left(1+\\frac{1}{n-1}\\right)$

将以上 $n - 1$ 个式子同向相加即得

$$
\\begin{array}{l} \\frac {1}{2} + \\frac {1}{3} + \\dots + \\frac {1}{n} <   \\ln \\left(1 + \\frac {1}{2 - 1}\\right) + \\ln \\left(1 + \\frac {1}{3 - 1}\\right) + \\dots + \\ln \\left(1 + \\frac {1}{n - 1}\\right) \\\\ = \\ln \\left(\\frac {2}{1} \\times \\frac {3}{2} \\times \\dots \\times \\frac {n}{n - 1}\\right) = \\ln n, \\\\ \\end{array}
$$

故 $S_{n}<2+2\\left(\\frac{1}{2}+\\frac{1}{3}+\\cdots+\\frac{1}{n}\\right)<2+2\\ln n,$

综上可知， $S_{n}<2+2\\ln n$

评注 此题(1)(2)问难度不大,但第(3)问难度较大,应首先求得 $S_{n} = \\left(1 + \\frac{1}{2} +\\dots +\\frac{1}{n}\\right)\\left(2 - \\frac{1}{2^{n - 1}}\\right)$ ,并由 $2 - \\frac{1}{2^{n - 1}} < 2$ 得到 $S_{n} < 2 \\times \\left(1 + \\frac{1}{2} +\\dots +\\frac{1}{n}\\right)$ ,再用构造函数 $(f(x) = \\ln x + \\frac{1}{x} - 1 (x > 1))$ ,结合不等式 $\\left(\\ln \\frac{k}{k - 1} >\\frac{1}{k}\\right)$ 用放缩方法证 $1 + \\frac{1}{2} +\\frac{1}{3} +$ $\\dots +\\frac{1}{n} < 1 + \\ln n.$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-12-1",
    topicId: "topic-sec-3-12",
    title: `若 a>0, b>0`,
    content: `若 a>0, b>0，则 $\\frac{1}{a}+\\frac{a}{b^{2}}+b$ 的最小值为 \\_\\_\\_\\_.`,
    preview: `若 a>0, b>0，则 1/a+a/b^2+b 的最小值为 \\_\\_\\_\\_.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-12-1-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `因为 a>0, b>0,

所以 $\\frac{1}{a}+\\frac{a}{b^{2}}+b\\geqslant2\\sqrt{\\frac{1}{a}\\cdot\\frac{a}{b^{2}}}+b=\\frac{2}{b}+b\\geqslant2\\sqrt{\\frac{2}{b}\\cdot b}=2\\sqrt{2}$

当且仅当 $\\frac{1}{a}=\\frac{a}{b^{2}}$ 且 $\\frac{2}{b}=b$ ，即 $a=b=\\sqrt{2}$ 时等号成立，

所以 $\\frac{1}{a}+\\frac{a}{b^{2}}+b$ 的最小值为 $2\\sqrt{2}$ ，故填 $2\\sqrt{2}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-12-2",
    topicId: "topic-sec-3-12",
    title: `已知实数 a, b, c 满足 a^2 + b^2 +`,
    content: `已知实数 a, b, c 满足 $a^{2} + b^{2} + c^{2} = 1$ ，则 $ab + bc$ 的最大值是 \\_\\_\\_\\_.`,
    preview: `已知实数 a, b, c 满足 a^2 + b^2 + c^2 = 1 ，则 ab + bc 的最大值是 \\_\\_\\_\\_.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-12-2-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `$ab + bc = \\frac{ab + bc}{a^2 + b^2 + c^2} = \\frac{ab + bc}{a^2 + \\frac{1}{2}b^2 + \\frac{1}{2}b^2 + c^2}\\leqslant \\frac{ab + bc}{2\\sqrt{\\frac{1}{2}}ab + 2\\sqrt{\\frac{1}{2}}bc} = \\frac{\\sqrt{2}}{2},$

故当 $a = c = \\frac{\\sqrt{2}}{2} b = \\frac{1}{2}$ 时， $ab + bc$ 的最大值是 $\\frac{\\sqrt{2}}{2}$ .

(因为求 $ab+bc$ 的最大值, 所以只需考虑 a>0, b>0, c>0, 下同.)`,
      },
      {
        id: "prob-sec-3-12-2-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `设 $a^{2}+\\lambda b^{2}\\geqslant2\\sqrt{\\lambda}ab,(1-\\lambda)b^{2}+c^{2}\\geqslant2\\sqrt{1-\\lambda}bc,$

所以 $1 = a^{2} + b^{2} + c^{2}\\geqslant 2\\sqrt{\\lambda} ab + 2\\sqrt{1 - \\lambda} bc$ ，令 $\\sqrt{\\lambda} = \\sqrt{1 - \\lambda}$ ，则 $\\lambda = \\frac{1}{2}$

故当 $a = c = \\frac{\\sqrt{2}}{2} b = \\frac{1}{2}$ 时， $ab + bc$ 的最大值是 $\\frac{\\sqrt{2}}{2}$ .`,
      },
      {
        id: "prob-sec-3-12-2-sol-2",
        title: `解法三`,
        method: "standard",
        steps: [],
        explanation: `$\\frac{1}{ab + bc} = \\frac{a^2 + b^2 + c^2}{ab + bc} = \\frac{\\left(\\frac{a}{b}\\right)^2 + \\left(\\frac{c}{b}\\right)^2 + 1}{\\frac{a}{b} + \\frac{c}{b}},$

令 $x=\\frac{a}{b}, y=\\frac{c}{b}$ ，所以问题转化为求 $\\frac{x^{2}+y^{2}+1}{x+y}$ 的最小值.

因为 $x^{2} + y^{2}\\geqslant \\frac{(x + y)^{2}}{2}$ ，所以 $\\frac{x^2 + y^2 + 1}{x + y}\\geqslant \\frac{\\frac{1}{2}(x + y)^2 + 1}{x + y} = \\frac{1}{2} (x + y) + \\frac{1}{x + y}\\geqslant \\sqrt{2},$

故当 $a = c = \\frac{\\sqrt{2}}{2} b = \\frac{1}{2}$ 时， $ab + bc$ 的最大值是 $\\frac{\\sqrt{2}}{2}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-12-3",
    topicId: "topic-sec-3-12",
    title: `椭圆型约束下分式表达式最小值`,
    content: `对于 c>0，当非零实数 a, b 满足 $4a^{2}-2ab+4b^{2}-c=0$ 且使 $\\left|2a+b\\right|$ 最大时， $\\frac{3}{a}-\\frac{4}{b}+\\frac{5}{c}$ 的最小值为 \\_\\_\\_\\_.`,
    preview: `对于 c>0，当非零实数 a, b 满足 4a^2-2ab+4b^2-c=0 且使 |2a+b| 最大时，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-12-3-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `$c = 4a^{2} - 2ab + 4b^{2} = \\left(2a - \\frac{b}{2}\\right)^{2} + \\frac{15b^{2}}{4}$ , 由柯西不等式得
$$
\\left[ \\left(2 a - \\frac {b}{2}\\right) ^ {2} + \\frac {1 5 b ^ {2}}{4} \\right] \\left[ 1 ^ {2} + \\left(\\frac {3}{\\sqrt {1 5}}\\right) ^ {2} \\right] \\geqslant (2 a + b) ^ {2},
$$

得 $c \\geqslant \\frac{5(2a + b)^2}{8}$ , 当且仅当 $2a - \\frac{b}{2} = \\frac{5}{2}b$ , 即 $2a = 3b$ 时取等号.

当 $|2a + b|$ 最大时， $a = \\frac{3}{2} b$ 且 $c = 10b^2$ ，代入得 $\\frac{3}{a} -\\frac{4}{b} +\\frac{5}{c} = \\frac{1}{2b^2} -\\frac{2}{b}\\geqslant -2,$

当且仅当 $b = \\frac{1}{2}$ 时取等. 故填-2.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-12-4",
    topicId: "topic-sec-3-12",
    title: `设 x > y > 0, x + y = 1 , 求`,
    content: `设 x > y > 0, $x + y = 1$ , 求 $\\frac{2}{x + 3y} + \\frac{1}{x - y}$ 的最小值.`,
    preview: `设 x > y > 0, x + y = 1 , 求 2/x + 3y + 1/x - y 的最小值.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-12-4-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `由柯西不等式得

$$
\\frac {2}{x + 3 y} + \\frac {1}{x - y} = \\frac {1}{2} \\left(\\frac {2}{x + 3 y} + \\frac {1}{x - y}\\right) [ (x + 3 y) + (x - y) ] \\geqslant \\frac {1}{2} (\\sqrt {2} + 1) ^ {2} = \\frac {3}{2} + \\sqrt {2},
$$

当且仅当 $x=\\sqrt{2}-\\frac{1}{2}$ 时取等号.`,
      },
      {
        id: "prob-sec-3-12-4-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `$\\frac{2}{x+3y}+\\frac{1}{x-y}=\\frac{2}{3-2x}+\\frac{1}{2x-1}=\\frac{2x+1}{-4x^{2}+8x-3}$

$$
= \\frac {2 x + 1}{- (2 x + 1) ^ {2} + 6 (2 x + 1) - 8},
$$

令 $t = 2x + 1$ ，注意到 $\\frac{1}{2} < x < 1$ ，得 $2 < t < 3$

所以 $\\frac{2}{x + 3y} +\\frac{1}{x - y} = \\frac{t}{-t^2 + 6t - 8} = \\frac{1}{- \\left(t + \\frac{8}{t}\\right) + 6}\\geqslant \\frac{1}{-2\\sqrt{8} + 6} = \\frac{3}{2} +\\sqrt{2},$

等号当且仅当 $x=\\sqrt{2}-\\frac{1}{2}$ 时取得.`,
      },
      {
        id: "prob-sec-3-12-4-sol-3",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `, 令 $y = \\frac{t}{-t^2 + 6t - 8}$ , 化简得 $yt^2 - (6y - 1)t + 8y = 0$ , 由判别式可得最小值.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-12-5",
    topicId: "topic-sec-3-12",
    title: `若 x, y 是正数`,
    content: `若 x, y 是正数，求 $\\frac{x}{2x+y} + \\frac{y}{x+2y}$ 的最大值.`,
    preview: `若 x, y 是正数，求 x/2x+y + y/x+2y 的最大值.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-12-5-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `分母换元. 令 $s = 2x + y, t = x + 2y$ ，则 $x = \\frac{1}{3}(2s - t), y = \\frac{1}{3}(2t - s)$ ，

$$
\\frac {x}{2 x + y} + \\frac {y}{x + 2 y} = \\frac {4}{3} - \\frac {1}{3} \\left(\\frac {t}{s} + \\frac {s}{t}\\right) \\leqslant \\frac {2}{3}.
$$`,
      },
      {
        id: "prob-sec-3-12-5-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `令 $t = \\frac{y}{x}$ , 则 $\\frac{x}{2x + y} + \\frac{y}{x + 2y} = \\frac{1}{t + 2} + \\frac{t}{2t + 1}$ , 以下可用判别式法、求导法等求得.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-12-6",
    topicId: "topic-sec-3-12",
    title: `已知 a, b, c ∈ R^+, 求 a/b + 3c + b/8c + 4a + 9c/3a + 2b 的最小值`,
    content: `已知 $a, b, c \\in \\mathbf{R}^{+}$ , 求 $\\frac{a}{b + 3c} + \\frac{b}{8c + 4a} + \\frac{9c}{3a + 2b}$ 的最小值.`,
    preview: `已知 a, b, c R^+ , 求 的最小值.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-12-6-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `令 $b + 3c = x,8c + 4a = y,3a + 2b = z$ ，则

$$
\\frac {a}{b + 3 c} + \\frac {b}{8 c + 4 a} + \\frac {9 c}{3 a + 2 b} = \\frac {1}{8} \\left(\\frac {y}{x} + \\frac {4 x}{y}\\right) + \\frac {1}{6} \\left(\\frac {z}{x} + \\frac {9 x}{z}\\right) + \\frac {1}{1 6} \\left(\\frac {4 z}{y} + \\frac {9 y}{z}\\right) - \\frac {6 1}{4 8}.
$$

由均值不等式, 得

$$
\\frac {1}{8} \\left(\\frac {y}{x} + \\frac {4 x}{y}\\right) + \\frac {1}{6} \\left(\\frac {z}{x} + \\frac {9 x}{z}\\right) + \\frac {1}{1 6} \\left(\\frac {4 z}{y} + \\frac {9 y}{z}\\right) - \\frac {6 1}{4 8} \\geqslant \\frac {1}{8} \\times 4 + \\frac {1}{6} \\times 6 + \\frac {1}{1 6} \\times 1 2 - \\frac {6 1}{4 8} = \\frac {4 7}{4 8},
$$

等号当且仅当 $y = 2x, z = 3x$ 时取得.

因此，当 $a = 10c, b = 21c$ 时， $\\frac{a}{b + 3c} + \\frac{b}{8c + 4a} + \\frac{9c}{3a + 2b}$ 取得最小值 $\\frac{47}{48}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-12-7",
    topicId: "topic-sec-3-12",
    title: `已知正实数 x, y 满足 2x + y = 2`,
    content: `已知正实数 x, y 满足 $2x + y = 2$ ，则 $x + \\sqrt{x^{2} + y^{2}}$ 的最小值为（）
A. $\\frac{8}{5}$

B. $\\frac{4}{5}$

C. 2

D. $\\frac{2\\sqrt{2} + 2}{3}$`,
    preview: `已知正实数 x, y 满足 2x + y = 2 ，则 x + √{x^2 + y^2} 的最小值为（） A. 8/5 B. 4/5 C. 2 D. 2√2 +`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-12-7-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `设 $x^{2}+y^{2}=r^{2}(r>0)$ ，令 $\\left\\{\\begin{aligned}x&=r\\cos\\theta,\\\\ y&=r\\sin\\theta\\end{aligned}\\right.$ $\\left(0<\\theta<\\frac{\\pi}{2}\\right)$ ,

则 $x + \\sqrt{x^2 + y^2} = r(1 + \\cos \\theta)$ ，又因为 $2x + y = 2$ ，即 $r = \\frac{2}{2\\cos\\theta + \\sin\\theta}$

所以 $x+\\sqrt{x^{2}+y^{2}}=r(1+\\cos\\theta)=\\frac{2+2\\cos\\theta}{2\\cos\\theta+\\sin\\theta}$

$$
= \\frac {4 \\cos^ {2} \\frac {\\theta}{2}}{2 \\cos^ {2} \\frac {\\theta}{2} - 2 \\sin^ {2} \\frac {\\theta}{2} + 2 \\sin \\frac {\\theta}{2} \\cos \\frac {\\theta}{2}} = \\frac {4}{- 2 \\tan^ {2} \\frac {\\theta}{2} + 2 \\tan \\frac {\\theta}{2} + 2} = \\frac {4}{\\frac {5}{2} - 2 \\left(\\tan \\frac {\\theta}{2} - \\frac {1}{2}\\right) ^ {2}}
$$

当 $\\tan\\frac{\\theta}{2}=\\frac{1}{2}$ 时， $x+\\sqrt{x^{2}+y^{2}}$ 有最小值 $\\frac{8}{5}$ .`,
      },
      {
        id: "prob-sec-3-12-7-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `$x + \\sqrt{x^2 + y^2} = x + \\sqrt{\\frac{(Ax)^2}{A^2} + \\frac{(By)^2}{B^2}}$

$\\geqslant x + \\frac{Ax + By}{\\sqrt{A^2 + B^2}}$ （其中 $A,B,x,y$ 均为正数），

设 $\\frac{A}{\\sqrt{A^{2}+B^{2}}}=\\cos\\theta,\\frac{B}{\\sqrt{A^{2}+B^{2}}}=\\sin\\theta,$

所以 $x+\\frac{Ax+By}{\\sqrt{A^{2}+B^{2}}}=(1+\\cos\\theta)\\cdot x+\\sin\\theta\\cdot y,$

设 $\\frac{1+\\cos\\theta}{\\sin\\theta}=2$ ，解得 $\\sin\\theta=\\frac{4}{5},\\cos\\theta=\\frac{3}{5}$

所以 $x + \\sqrt{x^2 + y^2} = \\left(1 + \\frac{3}{5}\\right)x + \\frac{4}{5} y = \\frac{4}{5}(2x + y) = \\frac{8}{5}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-12-8",
    topicId: "topic-sec-3-12",
    title: `实数 x, y 满足 x^2-3xy-4y^2-2=0`,
    content: `实数 x, y 满足 $x^{2}-3xy-4y^{2}-2=0$ ，则 $x^{2}+y^{2}$ 的最小值为 \\_\\_\\_\\_.`,
    preview: `实数 x, y 满足 x^2-3xy-4y^2-2=0 ，则 x^2+y^2 的最小值为 \\_\\_\\_\\_.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-12-8-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `设 $x^{2}+y^{2}=t^{2}$ ，得 $x=t\\cos\\theta, y=t\\sin\\theta$ ，

所以 $x^{2}-3xy-4y^{2}=t^{2}\\cos^{2}\\theta-3t^{2}\\cos\\theta\\sin\\theta-4t^{2}\\sin^{2}\\theta$

$$
= t ^ {2} \\left(\\frac {5 \\cos 2 \\theta - 3 \\sin 2 \\theta - 3}{2}\\right) = 2,
$$

所以 $\\frac{4}{t^{2}}+3=5\\cos2\\theta-3\\sin2\\theta\\in[-\\sqrt{34},\\sqrt{34}]$ ，解之得 $t^{2}\\geqslant\\frac{12+4\\sqrt{34}}{25}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-12-9",
    topicId: "topic-sec-3-12",
    title: `已知正实数 x, y 满足 2x + y = 2`,
    content: `（同例 7）已知正实数 x, y 满足 $2x + y = 2$ ，则 $x + \\sqrt{x^{2} + y^{2}}$ 的最小值为 \\_\\_\\_\\_
A. $\\frac{8}{5}$

B. $\\frac{4}{5}$

C. 2

D. $\\frac{2\\sqrt{2} + 2}{3}$`,
    preview: `已知正实数 x, y 满足 2x + y = 2 ，则 x + √{x^2 + y^2} 的最小值为 \\_\\_\\_\\_ A. 8/5 B. 4/5 C. 2 D`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-12-9-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `设 $x+\\sqrt{x^{2}+y^{2}}=t\\Rightarrow x^{2}+y^{2}=(t-x)^{2}$ ,

又 $2x + y = 2$ ，所以 $x^{2} + (2 - 2x)^{2} = (t - x)^{2}$

展开化简得 $4x^{2}+(2t-8)x+4-t^{2}=0$ ,

所以 $\\Delta = (2t - 8)^2 - 16(4 - t^2) \\geqslant 0$ ，即 $5t^2 - 8t \\geqslant 0$ ，由于 $t > 0$ ，得 $t \\geqslant \\frac{8}{5}$ ，

当 $t = \\frac{8}{5}$ 时， $x = \\frac{3}{5}, y = \\frac{4}{5}$ ，所以 $x + \\sqrt{x^2 + y^2}$ 的最小值为 $\\frac{8}{5}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-12-10",
    topicId: "topic-sec-3-12",
    title: `实数 x, y 满足 x^2-3xy-4y^2-2=0`,
    content: `（同例 8）实数 x, y 满足 $x^{2}-3xy-4y^{2}-2=0$ ，则 $x^{2}+y^{2}$ 的最小值为 \\_\\_\\_\\_.`,
    preview: `实数 x, y 满足 x^2-3xy-4y^2-2=0 ，则 x^2+y^2 的最小值为 \\_\\_\\_\\_.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-12-10-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `设 $x^{2}+y^{2}=t$ ，得 $2(x^{2}+y^{2})=t(x^{2}-3xy-4y^{2})$ ，

整理得 $(2 - t)x^{2} + 3tyx + (4t + 2)y^{2} = 0$ ，则 $\\Delta = 9t^2 y^2 -4(2 - t)(4t + 2)y^2\\geqslant 0,$

解之得 $t \\geqslant \\frac{12 + 4\\sqrt{34}}{25}$ .`,
      },
      {
        id: "prob-sec-3-12-10-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `由 $x^{2} - 3xy - 4y^{2} - 2 = 0$ ，得 $(x - 4y)(x + y) = 2.$

设 $x - 4y = t$ ，则 $x + y = \\frac{2}{t}$ ，所以 $x = \\frac{1}{5}\\left(\\frac{8}{t} +t\\right),y = \\frac{1}{5}\\left(\\frac{2}{t} -t\\right),$

所以 $x^{2} + y^{2} = \\frac{1}{25}\\left(\\frac{8}{t} +t\\right)^{2} + \\frac{1}{25}\\left(\\frac{2}{t} -t\\right)^{2} = \\frac{1}{25}\\left(\\frac{68}{t^{2}} +2t^{2} + 12\\right)\\geqslant \\frac{12 + 4\\sqrt{34}}{25}.$`,
      },
      {
        id: "prob-sec-3-12-10-sol-2",
        title: `解法三`,
        method: "standard",
        steps: [],
        explanation: `$|2xy| = 2\\left|\\frac{x}{\\lambda}\\right| |\\lambda y| \\leqslant \\frac{x^2}{\\lambda^2} + \\lambda^2y^2$ ，即 $-\\left(\\frac{x^2}{\\lambda^2} + \\lambda^2y^2\\right) \\leqslant 2xy \\leqslant \\frac{x^2}{\\lambda^2} + \\lambda^2y^2$

所以 $x^{2} - 3xy - 4y^{2}\\leqslant \\left(1 + \\frac{3}{2\\lambda^{2}}\\right)x^{2} + \\left(\\frac{3}{2}\\lambda^{2} - 4\\right)y^{2}.$

故只需 $1 + \\frac{3}{2\\lambda^2} = \\frac{3}{2}\\lambda^2 -4$ ，则 $\\lambda^2 = \\frac{5 + \\sqrt{34}}{3}$ 得 $x^{2} + y^{2}\\geqslant \\frac{2}{\\frac{3}{2}\\lambda^{2} - 4} = \\frac{12 + 4\\sqrt{34}}{25}.$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-12-11",
    topicId: "topic-sec-3-12",
    title: `若正数 x, y 满足 1/2x+y + 1/y+1 =`,
    content: `若正数 x, y 满足 $\\frac{1}{2x+y} + \\frac{1}{y+1} = 1$ ，求 $x + 2y$ 的最小值.`,
    preview: `若正数 x, y 满足 1/2x+y + 1/y+1 = 1 ，求 x + 2y 的最小值.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-12-11-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `设 $x+2y=m(2x+y)+n(y+1)+t,$

解得 $m = \\frac{1}{2}, n = \\frac{3}{2}, t = -\\frac{3}{2}$

所以 $x + 2y = \\frac{1}{2} (2x + y) + \\frac{3}{2} (y + 1) - \\frac{3}{2}$

$$
= \\left[ \\frac {1}{2} (2 x + y) + \\frac {3}{2} (y + 1) \\right] \\left(\\frac {1}{2 x + y} + \\frac {1}{y + 1}\\right) - \\frac {3}{2} \\geqslant \\sqrt {3} + \\frac {1}{2},
$$

当且仅当 $x=\\frac{11}{6}$ , $y=\\frac{1}{3}$ 时取到等号.`,
      },
      {
        id: "prob-sec-3-12-11-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `$1 = \\frac{1}{2x + y} +\\frac{3}{3y + 3}\\geqslant \\frac{(1 + \\sqrt{3})^2}{2x + 4y + 3}$ ，从而 $2x + 4y + 3\\geqslant 4 + 2\\sqrt{3}$

所以 $x+2y\\geqslant\\sqrt{3}+\\frac{1}{2}$ ，当且仅当 $x=\\frac{11}{6}, y=\\frac{1}{3}$ 时取到等号.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-12-12",
    topicId: "topic-sec-3-12",
    title: `设 x, y, z 是不全为零的实数`,
    content: `设 x, y, z 是不全为零的实数，求 $\\frac{xy + 2yz}{x^{2} + y^{2} + z^{2}}$ 的最大值.`,
    preview: `设 x, y, z 是不全为零的实数，求 xy + 2yz/x^{2 + y^2 + z^2} 的最大值.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-12-12-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `引入待定系数 a, b, 从而有

$$
x y + 2 y z = 2 \\left(\\sqrt {\\frac {a}{2}} x\\right) \\left(\\sqrt {\\frac {1}{2 a}} y\\right) + 2 (\\sqrt {b} y) \\left(\\sqrt {\\frac {1}{b}} z\\right) \\leqslant \\left(\\frac {a}{2} x ^ {2} + \\frac {1}{2 a} y ^ {2}\\right) + \\left(b y ^ {2} + \\frac {1}{b} z ^ {2}\\right)
$$

$$
= \\frac {a}{2} x ^ {2} + \\left(\\frac {1}{2 a} + b\\right) y ^ {2} + \\frac {1}{b} z ^ {2},
$$

令 $\\frac{a}{2} = \\frac{1}{2a} + b = \\frac{1}{b}$ , 解得 $a = \\sqrt{5}, b = \\frac{2\\sqrt{5}}{5}$ .

所以 $xy + 2yz \\leqslant \\frac{\\sqrt{5}}{2}(x^{2} + y^{2} + z^{2})$ ，当 $10x = 2\\sqrt{5}y = 5z$ 时等号成立.

故 $\\frac{xy+2yz}{x^{2}+y^{2}+z^{2}}$ 的最大值为 $\\frac{\\sqrt{5}}{2}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-12-13",
    topicId: "topic-sec-3-12",
    title: `实数 x, y 满足 x^2 + (y - 2)^2`,
    content: `实数 $x, y$ 满足 $x^{2} + (y - 2)^{2} \\leqslant 1$ , 求 $\\frac{x + \\sqrt{3}y}{\\sqrt{x^2 + y^2}}$ 的最大值与最小值.
![](images/0d5366d6b17635e67d783c2ffb99fc86a64d871fd2656df6e501c0d58759e6d7.jpg)

图3-12-1`,
    preview: `实数 x, y 满足 x^2 + (y - 2)^2 ≤ 1 , 求 x + √3y{√x^2 + y^2} 的最大值与最小值. 图3-12-1`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-12-13-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `如图 3-12-1

![](images/0d5366d6b17635e67d783c2ffb99fc86a64d871fd2656df6e501c0d58759e6d7.jpg) 所示, 设 $\\overrightarrow{OA} = (1, \\sqrt{3}), \\overrightarrow{OB} = (x, y)$ , 则原式 $= \\frac{\\overrightarrow{OA} \\cdot \\overrightarrow{OB}}{|\\overrightarrow{OB}|}$ , 即向量 $\\overrightarrow{OA}$ 在 $\\overrightarrow{OB}$ 上的投影, 易得最小值为 1 , 最大值为 2 .`,
      },
      {
        id: "prob-sec-3-12-13-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `最大值利用柯西不等式.

$x + \\sqrt{3} y \\leqslant \\sqrt{(1^2 + \\sqrt{3}^2)(x^2 + y^2)} = 2\\sqrt{x^2 + y^2}$ , 所以 $\\frac{x + \\sqrt{3}y}{\\sqrt{x^2 + y^2}} \\leqslant 2$ .`,
      },
      {
        id: "prob-sec-3-12-13-sol-2",
        title: `解法三`,
        method: "standard",
        steps: [],
        explanation: `三角换元. $\\frac{y}{\\sqrt{x^2 + y^2}} = \\sin \\alpha, \\frac{x}{\\sqrt{x^2 + y^2}} = \\cos \\alpha$ ，由题意可得 $\\alpha \\in \\left[\\frac{\\pi}{3}, \\frac{2\\pi}{3}\\right]$ ，

所以，原式 $= \\cos \\alpha +\\sqrt{3}\\sin \\alpha = 2\\sin \\left(\\alpha +\\frac{\\pi}{6}\\right)\\in [1,2].$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-12-14",
    topicId: "topic-sec-3-12",
    title: `已知 x, y R, 4x^2 + y^2 + xy =`,
    content: `已知 $x, y \\in \\mathbf{R}, 4x^{2} + y^{2} + xy = 1$ ，则 $2x + y$ 的最大值为 \\_\\_\\_\\_.`,
    preview: `已知 x, y R, 4x^2 + y^2 + xy = 1 ，则 2x + y 的最大值为 \\_\\_\\_\\_.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-12-14-sol-0",
        title: `解答`,
        method: "creative",
        steps: [],
        explanation: `令 $\\boldsymbol{a}=\\left(\\frac{1}{2}x+y,\\frac{\\sqrt{15}}{2}x\\right)$ , $\\boldsymbol{b}=\\left(1,\\frac{3}{\\sqrt{15}}\\right)$ ,

则 $2x + y = a \\cdot b \\leqslant |a||b| = \\sqrt{\\left(\\frac{1}{2}x + y\\right)^2 + \\frac{15}{4}x^2} \\times \\sqrt{\\frac{8}{5}} = \\frac{2\\sqrt{10}}{5}$ .

评注 也可设 $a = \\left(2x + \\frac{1}{4} y, \\frac{\\sqrt{15}}{4} y\\right), b = \\left(1, \\frac{3}{\\sqrt{15}}\\right)$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-12-15",
    topicId: "topic-sec-3-12",
    title: `正实数 x, y 满足 (1 + √x^2 + 1)(√4y^2 + 1 - 2y) = x，则 log_2x cd`,
    content: `正实数 x, y 满足 $(1 + \\sqrt{x^{2} + 1})(\\sqrt{4y^{2} + 1} - 2y) = x$ ，则 $\\log_{2}x \\cdot \\log_{2}y$ 的最大值为 \\_\\_\\_\\_.`,
    preview: `正实数 x, y 满足 ，则 _2x · _2y 的最大值为 \\_\\_\\_\\_.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-12-15-sol-0",
        title: `解答`,
        method: "creative",
        steps: [],
        explanation: `由 $(1+\\sqrt{x^{2}+1})(\\sqrt{4y^{2}+1}-2y)=x$ ,

得 $\\frac{1}{x} +\\sqrt{\\frac{1}{x^2} + 1} = \\frac{1}{\\sqrt{4y^2 + 1} - 2y} = 2y + \\sqrt{4y^2 + 1}$ ，构造函数 $f(x) = x + \\sqrt{x^2 + 1}$

则 $f\\left(\\frac{1}{x}\\right)=f(2y)$ ，注意到该函数在 x>0 时单调递增，所以 $\\frac{1}{x}=2y$ ，即 2xy=1，

则 $\\log_{2}x \\cdot \\log_{2}y \\leqslant \\frac{(\\log_{2}x + \\log_{2}y)^{2}}{4} = \\frac{1}{4}$ ，当且仅当 $x = y = \\frac{\\sqrt{2}}{2}$ 时取等号.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-12-16",
    topicId: "topic-sec-3-12",
    title: `已知 a, b R`,
    content: `已知 $a, b \\in R$ ，且 $e^{x+1} \\geqslant ax + b$ 恒成立，则 ab 的最大值为（）
A. $\\frac{1}{2} \\mathrm{e}^{3}$

B. $\\frac{\\sqrt{2}}{2} \\mathrm{e}^{3}$

C. $\\frac{\\sqrt{3}}{2} \\mathrm{e}^{3}$

D. $\\mathrm{e}^3$`,
    preview: `已知 a, b R ，且 e^x+1 ≥ ax + b 恒成立，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-12-16-sol-0",
        title: `解法一`,
        method: "creative",
        steps: [],
        explanation: `构造函数 $f(x)=\\mathrm{e}^{x+1}-ax-b$ ，则 $f'(x)=\\mathrm{e}^{x+1}-a$ ，

若 $a \\leqslant 0$ ，则 $f'(x) > 0$ ，则 $f(x)$ 在 $\\mathbf{R}$ 上为增函数，

当 $x \\to -\\infty$ 时， $f(x) \\to -\\infty$ ，矛盾，舍去；

故必有 a>0，易知当 $x\\in(-\\infty,\\ln a-1)$ 时， $f'(x)<0,f(x)$ 为减函数，

当 $x \\in (\\ln a - 1, +\\infty)$ 时， $f'(x) > 0, f(x)$ 为增函数，所以 $f(x)_{\\min} = f(\\ln a - 1) \\geqslant 0$ ,

得 $b \\leqslant 2a - a\\ln a$ ，即 $ab \\leqslant 2a^2 - a^2\\ln a$

构造函数 $g(a)=2a^{2}-a^{2}\\ln a$ ，则 $g'(a)=3a-2a\\ln a=a(3-2\\ln a)$ ，

当 $a \\in (0, \\mathrm{e}^{\\frac{3}{2}})$ 时， $g(a)$ 为增函数，当 $a \\in (\\mathrm{e}^{\\frac{3}{2}}, +\\infty)$ 时， $g(a)$ 为减函数，

故 $g(a)$ 的最大值为 $g(\\mathrm{e}^{\\frac{3}{2}}) = \\frac{1}{2}\\mathrm{e}^3$ ，即 $ab$ 的最大值为 $\\frac{1}{2}\\mathrm{e}^3$`,
      },
      {
        id: "prob-sec-3-12-16-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `视动直线 $y=ax+b$ 恒在定曲线 $g(x)=\\mathrm{e}^{x+1}$ 的下方.

由于 $g''(x)=\\mathrm{e}^{x+1}>0$ 恒成立，故而 $g(x)$ 为下凸函数，

画出两者图像,如图 3-12-2 所示,

显然必有 $a \\geqslant 0$ ，直线 $y = ax + b$ 才可恒在 $g(x)$ 下方，

且斜率 a 固定、直线与 $y=g(x)$ 相切时，

可使得 b 达到最大, 此时 ab 才可以取到最大值.

也即此时 $y=ax+b$ 成为 $g(x)$ 的切线.

设 $g(x)$ 上在点 $(x_0, g(x_0))$ 处的切线方程为

$$
y = \\mathrm{e} ^ {x _ {0} + 1} (x - x _ {0}) + \\mathrm{e} ^ {x _ {0} + 1}, \\text {即} y = \\mathrm{e} ^ {x _ {0} + 1} x + (1 - x _ {0}) \\mathrm{e} ^ {x _ {0} + 1},
$$

因此， $a = \\mathrm{e}^{x_0 + 1},b = (1 - x_0)\\mathrm{e}^{x_0 + 1}$ ，则 $ab = (1 - x_0)\\mathrm{e}^{2x_0 + 2}$

设 $h(x) = (1 - x)\\mathrm{e}^{2x + 2}$ ，则 $h^{\\prime}(x) = (1 - 2x)\\mathrm{e}^{2x + 2}$

当 $x \\in \\left(-\\infty, \\frac{1}{2}\\right)$ 时， $h'(x) > 0, h(x)$ 为增函数；

当 $x \\in \\left(\\frac{1}{2}, +\\infty\\right)$ 时， $h'(x) < 0, h(x)$ 为减函数，

故 $h(x)$ 的最大值为 $h\\left(\\frac{1}{2}\\right) = \\frac{1}{2}\\mathrm{e}^3$ ，所以 $ab$ 的最大值为 $\\frac{1}{2}\\mathrm{e}^3$

![](images/f08ea35fbe78488123d03517f34f5993d012724021047034572d18376121f6c0.jpg)
图3-12-2`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-12-17",
    topicId: "topic-sec-3-12",
    title: `设正实数 x, y 满足`,
    content: `设正实数 x, y 满足 $\\frac{2}{x^{2}+2xy}+\\frac{1}{y^{2}+2xy}=1$ ，求 xy 的最大值.`,
    preview: `设正实数 x, y 满足 2/x^2+2xy+1/y^2+2xy=1 ，求 xy 的最大值.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-12-17-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `$xy=xy\\left(\\frac{2}{x^{2}+2xy}+\\frac{1}{y^{2}+2xy}\\right)=\\frac{2y}{x+2y}+\\frac{x}{2x+y}$ ，令 $t=\\frac{y}{x}$ ，则所求式转化为

$$
\\frac {2 t}{1 + 2 t} + \\frac {1}{2 + t} = 1 + \\frac {t - 1}{2 t ^ {2} + 5 t + 2} = 1 + \\frac {t - 1}{2 (t - 1) ^ {2} + 9 (t - 1) + 9} = 1 + \\frac {m}{2 m ^ {2} + 9 m + 9},
$$

其中 m=t-1.

因为是求最大值,只需考虑 m 为正数时即可,利用基本不等式或判别式法易求得:

当且仅当 $m=\\frac{3\\sqrt{2}}{2}$ ，即 $\\frac{y}{x}=1+\\frac{3\\sqrt{2}}{2}$ 时，xy 有最大值 $2-\\frac{2\\sqrt{2}}{3}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-12-18",
    topicId: "topic-sec-3-12",
    title: `已知 a, b, c R^+ , 求 a/b + c +`,
    content: `已知 $a, b, c \\in \\mathbf{R}^{+}$ , 求 $\\frac{a}{b + c} + \\frac{b}{c + a} + \\frac{c}{a + b}$ 的最小值.`,
    preview: `已知 a, b, c R^+ , 求 a/b + c + b/c + a + c/a + b 的最小值.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-12-18-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `对原式直接运用柯西不等式有些困难,而给每个式子配以常数1后,得:

$$
\\begin{array}{l} \\frac {a}{b + c} + \\frac {b}{c + a} + \\frac {c}{c + b} + 3 = \\left(\\frac {a}{b + c} + 1\\right) + \\left(\\frac {b}{a + c} + 1\\right) + \\left(\\frac {c}{c + b} + 1\\right) \\\\ = (a + b + c) \\left(\\frac {1}{b + c} + \\frac {1}{c + a} + \\frac {1}{a + b}\\right) \\\\ = \\frac {1}{2} [ (b + c) + (c + a) + (a + b) ] \\left(\\frac {1}{b + c} + \\frac {1}{c + a} + \\frac {1}{a + b}\\right) \\geqslant \\frac {1}{2} (1 + 1 + 1) ^ {2} = \\frac {9}{2}. \\\\ \\end{array}
$$

所以 $\\frac{a}{b+c}+\\frac{b}{a+c}+\\frac{c}{a+b}\\geqslant\\frac{9}{2}-3=\\frac{3}{2}$ ，当a=b=c时可取到等号，故所求最小值为 $\\frac{3}{2}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-12-19",
    topicId: "topic-sec-3-12",
    title: `已知 x, y 是正实数`,
    content: `已知 x, y 是正实数，则 $\\left(x + \\frac{1}{y}\\right)^{2} + \\left(y + \\frac{1}{x}\\right)^{2}$ 的最小值是 \\_\\_\\_\\_.`,
    preview: `已知 x, y 是正实数，则 (x + 1/y)^2 + (y + 1/x)^2 的最小值是 \\_\\_\\_\\_.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-12-19-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `$\\left(x+\\frac{1}{y}\\right)^{2}+\\left(y+\\frac{1}{x}\\right)^{2}=\\left(x+\\frac{1}{y}\\right)^{2}+\\left(\\frac{1}{x}+y\\right)^{2}$ 表示点 $(x,\\frac{1}{x})$ 与点 $(- \\frac{1}{y}, -y)$ 的距离平方和，函数 $y=\\frac{1}{x}$ 在第一象限上的点和第三象限上的点的距离的平方和，根据双曲线图像可知，当第一象限取点(1,1)，第三象限取点(-1,-1)时，距离的平方和最小为8.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-12-20",
    topicId: "topic-sec-3-12",
    title: `已知实数 x, y 满足 √(x+1)^2+y^2 cdot √(x-1)^2+y^2 = 4，则 x^2 + y^`,
    content: `已知实数 x, y 满足 $\\sqrt{(x+1)^{2}+y^{2}} \\cdot \\sqrt{(x-1)^{2}+y^{2}} = 4$ ，则 $x^{2} + y^{2}$ 的最大值为 \\_\\_\\_\\_.`,
    preview: `已知实数 x, y 满足 ，则 x^2 + y^2 的最大值为 \\_\\_\\_\\_.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-12-20-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `由已知式结构联想到距离公式, 即动点 $M(x,y)$ 到定点 $A(-1,0)$ , $B(1,0)$ 的距离乘积为 4, 所求为 M 到原点 O 的距离平方的范围.

由此将原问题转化为： $|MA|\\cdot|MB|=4$ ，求 $|MO|^{2}$ 的范围.

由向量极化恒等式可得

$$
\\overrightarrow {M A} \\cdot \\overrightarrow {M B} = | M O | ^ {2} - \\frac {1}{4} | A B | ^ {2} = | M O | ^ {2} - 1,
$$

又 $\\overrightarrow{MA}\\cdot\\overrightarrow{MB}=|\\overrightarrow{MA}|\\cdot|\\overrightarrow{MB}|\\cos\\theta=4\\cos\\theta,$

所以 $\\left|MO\\right|^{2}=4\\cos\\theta+1$ ，最大值为 5.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-12-21",
    topicId: "topic-sec-3-12",
    title: `已知正实数 x, y 满足 2x + y = 2`,
    content: `（同例 7）已知正实数 x, y 满足 $2x + y = 2$ ，则 $x + \\sqrt{x^{2} + y^{2}}$ 的最小值为（）
A. $\\frac{8}{5}$

B. $\\frac{4}{5}$

C. 2

D. $\\frac{2\\sqrt{2} + 2}{3}$`,
    preview: `已知正实数 x, y 满足 2x + y = 2 ，则 x + √{x^2 + y^2} 的最小值为（） A. 8/5 B. 4/5 C. 2 D. 2√2 +`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-12-21-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `如图 3-12-3 所示, 由题意, 设 $P(x,y)$ 为线段 AB: $2x+y=2(x>0,y>0)$ 上的点, x 为点 P 到 y 轴的距离为 PH,

而 $PO=\\sqrt{x^{2}+y^{2}}$ ，为 P 到原点的距离，

所以 $PH + PO = x + \\sqrt{x^{2} + y^{2}}$ ,

作 O 关于 AB 的对称点 $O'$ ,

则 $PO=PO'$ ,

所以 $x+\\sqrt{x^{2}+y^{2}}=PH+PO'$ ,

当 $O'$ , P, H 在同一直线上时, $x + \\sqrt{x^{2} + y^{2}}$ 最小,

即如图中 $O^{\\prime}H = O^{\\prime}B \\sin 2\\theta,$

因为 $\\sin\\theta=\\frac{\\sqrt{5}}{5},\\cos\\theta=\\frac{2\\sqrt{5}}{5}$ ,

所以 $O^{\\prime}H = O^{\\prime}B \\sin 2\\theta = \\frac{8}{5}$ .

![](images/1a9bbd4c62558a951963262a38530af1bf87d0b884bb41959113a8f521c4646a.jpg)

图3-12-3`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-13-1",
    topicId: "topic-sec-3-13",
    title: `函数 f(x)=max|x+1|,|x-2|(x∈R) 的最小值是 ____`,
    content: `函数 $f(x)=\\max\\{|x+1|,|x-2|\\}(x\\in\\mathbb{R})$ 的最小值是 \\_\\_\\_\\_.`,
    preview: `函数 的最小值是 \\_\\_\\_\\_.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-13-1-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `直接运用定理一可以秒杀,由定理一,得

$$
f (x) \\geqslant \\frac {1}{2} (| x + 1 | + | x - 2 |) \\geqslant \\frac {1}{2} | x + 1 - x + 2 | = \\frac {3}{2}.
$$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-13-2",
    topicId: "topic-sec-3-13",
    title: `设 a, b 为平面向量, 则`,
    content: `设 a, b 为平面向量, 则
A. $\\min\\{|a+b|, |a-b|\\} \\leqslant \\min\\{|a|, |b|\\}$
B. $\\min\\{|a+b|, |a-b|\\} \\geqslant \\min\\{|a|, |b|\\}$
C. $\\max \\{|a + b|^2, |a - b|^2\\} \\leqslant |a|^2 + |b|^2$
D. $\\max \\{|a + b|^2, |a - b|^2\\} \\geqslant |a|^2 + |b|^2$

![](images/4110dea6b8be6f48d7e1520e00a213ee5f8483b73d568340cf212bc254868b50.jpg)

图3-13-1`,
    preview: `设 a, b 为平面向量, 则 A. B. C. D. 图3-13-1`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-13-2-sol-0",
        title: `解法一`,
        method: "creative",
        steps: [],
        explanation: `构造如图 3-13-1

![](images/4110dea6b8be6f48d7e1520e00a213ee5f8483b73d568340cf212bc254868b50.jpg) 所示平行四边形, $\\overrightarrow{OA} = a$ , $\\overrightarrow{OB} = b$ , 则 $\\overrightarrow{OC} = a + b$ , $\\overrightarrow{BA} = a - b$ . 若向量 $a, b$ 的夹角为锐角, 则 $\\min\\{|a + b|, |a - b|\\} = |a - b|, |a - b|, |a|$ 、 $|b|$ 构成锐角 $\\triangle OAB$ 的三边, 不存在绝对的大小关系; 而 $\\max\\{|a + b|^2, |a - b|^2\\} = |a + b|^2$ ,此时 $|a + b|, |a|, |b|$ 构成钝角 $\\triangle OBC$ 的三边， $\\angle B$ 钝角， $|a + b|^2 > |a|^2 + |b|^2$ . 排除选项A、B、C，故选D.`,
      },
      {
        id: "prob-sec-3-13-2-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `直接运用定理一, 得

$$
\\max \\{| a + b | ^ {2}, | a - b | ^ {2} \\} \\geqslant \\frac {| a + b | ^ {2} + | a - b | ^ {2}}{2} = | a | ^ {2} + | b | ^ {2}.
$$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-13-3",
    topicId: "topic-sec-3-13",
    title: `已知 f(x) = x^2 + px + q 过 (α`,
    content: `已知 $f(x) = x^{2} + px + q$ 过 $(\\alpha, 0), (\\beta, 0)$ ，若存在整数 $n$ ，使 $n < \\alpha < \\beta < n + 1$ 则 $\\min \\{f(n), f(n + 1)\\}$ 与 $\\frac{1}{4}$ 的关系为 （）
A. $\\min \\{f(n), f(n + 1)\\} > \\frac{1}{4}$

B. $\\min \\{f(n), f(n + 1)\\} < \\frac{1}{4}$

C. $\\min \\{f(n), f(n + 1)\\} = \\frac{1}{4}$

D. 不能确定`,
    preview: `已知 f(x) = x^2 + px + q 过 (α, 0), (β, 0) ，若存在整数 n ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-13-3-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `由题意可知 $f(x)=x^{2}+px+q=(x-\\alpha)(x-\\beta)$ ,

$$
f (n) = (n - \\alpha) (n - \\beta), f (n + 1) = (n + 1 - \\alpha) (n + 1 - \\beta).
$$

运用定理一及均值不等式有

$$
\\min \\{f (n), f (n + 1) \\} \\leqslant \\sqrt {f (n) f (n + 1)}
$$

$$
= \\sqrt {(\\alpha - n) (\\beta - n) (n + 1 - \\alpha) (n + 1 - \\beta)}
$$

$$
<   \\sqrt {\\left(\\frac {1}{2}\\right) ^ {2} \\left(\\frac {1}{2}\\right) ^ {2}} = \\frac {1}{4},
$$

因此，选 B.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-13-4",
    topicId: "topic-sec-3-13",
    title: `设 0 < a < b < c < 1`,
    content: `（2024 年九省联考）设 0 < a < b < c < 1，已知 $b \\geqslant 2a$ 或 $a + b \\leqslant 1$ ，则 $\\max\\{b - a, c - b, 1 - c\\}$ 的最小值为 \\_\\_\\_\\_.`,
    preview: `设 0 < a < b < c < 1，已知 b ≥ 2a 或 a + b ≤ 1 ，则 的最小值为 \\_\\_\\_\\_.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-13-4-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `由 $M \\geqslant \\frac{b-a+c-b+1-c}{3} = \\frac{1-a}{3}$ 得 $a \\geqslant 1-3M$ ,

由 $M \\geqslant \\frac{c - b + 1 - c}{2} = \\frac{1 - b}{2}$ 得 $b \\geqslant 1 - 2M$ ,

若 $b \\geqslant 2a$ ，则 $M \\geqslant b - a \\geqslant a \\geqslant 1 - 3M$ ，所以 $M \\geqslant \\frac{1}{4}$

若 $a + b \\leqslant 1$ ，则 $1 - 2M \\leqslant b \\leqslant 1 - a \\leqslant 1 - (1 - 3M) = 3M$ ，所以 $M \\geqslant \\frac{1}{5}$

所以，当 $a = \\frac{2}{5}, b = \\frac{3}{5}, c = \\frac{4}{5}$ 时，所求最小值为 $\\frac{1}{5}$ .`,
      },
      {
        id: "prob-sec-3-13-4-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `若 $b \\geqslant 2a$ ，则 $b - a \\geqslant a$ ，

于是 $M = \\max \\{a, b - a, c - b, 1 - c\\} \\geqslant \\frac{a + b - a + c - b + 1 - c}{4} = \\frac{1}{4}$ ,

若 $a + b \\leqslant 1$ ，则 $M \\geqslant \\frac{(b - a) + 2(c - b) + 2(1 - c)}{5} = \\frac{2 - (a + b)}{5} \\geqslant \\frac{1}{5}$ ，

以下同`,
      },
    ],
    tags: [],
    source: `2024 年九省联考`,
  },
  {
    id: "prob-sec-3-13-5",
    topicId: "topic-sec-3-13",
    title: `已知 f(x) , g(x) 都是偶函数, 且在 [0`,
    content: `已知 $f(x)$ , $g(x)$ 都是偶函数, 且在 $[0, +\\infty)$ 上单调递增, 设函数 $F(x) = f(x) + g(1 - x) - |f(x) - g(1 - x)|$ , 若 $a > 0, b \\in R$ , 则有 ( )
A. $F(-a) \\geqslant F(a)$ 且 $F(1+a) \\geqslant F(1-a)$
B. $F(-a) \\geqslant F(a)$ 且 $F(1+a) \\leqslant F(1-a)$
C. $F(-a) \\leqslant F(a)$ 且 $F(1+a) \\geqslant F(1-a)$
D. $F(-a) \\leqslant F(a)$ 且 $F(1 + a) \\leqslant F(1 - a)$`,
    preview: `已知 f(x) , g(x) 都是偶函数, 且在 [0, +∞) 上单调递增, 设函数 , 若 a > 0, b R , 则有 ( ) A. F(-a) ≥qs`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-13-5-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `由题意知 $F(x)=2\\min\\{f(x),g(1-x)\\}$ ,

而 $f(x)$ , $g(x)$ 都是偶函数, 且在 $[0, +\\infty)$ 上单调递增,

所以 $g(1+a)\\geqslant g(|1-a|)=g(1-a)$ , $f(1+a)\\geqslant f(|1-a|)=f(1-a)$ ,

所以 $F(a)=2\\min\\{f(a),g(1-a)\\}\\leqslant2\\min\\{f(a),g(1+a)\\}=F(-a)$ ,

$$
F (1 + a) = 2 \\min \\{f (1 + a), g (a) \\} \\geqslant 2 \\min \\{f (1 - a), g (a) \\} = F (1 - a).
$$`,
      },
      {
        id: "prob-sec-3-13-5-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `特殊化法, 取 $f(x)=x^{4}$ , $g(x)=x^{2}$ , a=1,

则 $F(-a) = F(-1) = 2\\geqslant 0 = F(1) = F(a)$

且 $F(1+a)=F(2)=2>0=F(0)=F(1-a)$ .

评注 通过现象看出问题本质为两个函数的最小值,借助最值函数判断大小,方便快捷.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-13-6",
    topicId: "topic-sec-3-13",
    title: `已知 a R , 函数 f(x) = | x + 4/x`,
    content: `已知 $a \\in \\mathbf{R}$ , 函数 $f(x) = \\left| x + \\frac{4}{x} - a \\right| + a$ 在区间 $[1, 4]$ 上的最大值为 5 , 则 $a$ 的取值范围是 \\_\\_\\_\\_.`,
    preview: `已知 a R , 函数 f(x) = | x + 4/x - a | + a 在区间 [1, 4] 上的最大值为 5 , 则 a 的取值范围是 \\_\\_\\_\\_`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-13-6-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `$4 \\leqslant x + \\frac{4}{x} \\leqslant 5$ ，令 $t = x + \\frac{4}{x}$ ，则原题转化为求：

“函数 $g(t)=|t-a|+a, t\\in[4,5]$ ，当最大值为 5 时，a 的取值范围”.`,
      },
      {
        id: "prob-sec-3-13-6-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `由带绝对值的一次函数的性质,考虑两个端点的中点值 $\\frac{9}{2}$ 可知,

当 $a \\leqslant \\frac{9}{2}$ 时， $g(t)_{\\max} = g(5) = |5 - a| + a = 5$ 符合题意，

当 $a > \\frac{9}{2}$ 时， $g(t)_{\\max} = g(4) = |4 - a| + a = a - 4 + a = 2a - 4$ ，若 $2a - 4 = 5$

得 $a = \\frac{9}{2}$ 与前提矛盾，所以 $a \\leqslant \\frac{9}{2}$ .`,
      },
      {
        id: "prob-sec-3-13-6-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `考虑到 $g(t)=|t-a|+a, t\\in[4,5]$ 最大值必在端点处取得，

即 $\\max_{4\\leqslant t\\leqslant 5}g(t) = \\max_{4\\leqslant t\\leqslant 5}\\{g(4),g(5)\\} = \\max_{4\\leqslant t\\leqslant 5}\\{2a - 4,5\\} = 5$ ，所以 $2a - 4\\leqslant 5$ ，即 $a\\leqslant \\frac{9}{2}$`,
      },
      {
        id: "prob-sec-3-13-6-sol-3",
        title: `解法三`,
        method: "standard",
        steps: [],
        explanation: `直接分类讨论.

若 $a \\leqslant 4$ ，则 $\\max_{4 \\leqslant t \\leqslant 5} g(t) = \\max_{4 \\leqslant t \\leqslant 5} (t - a + a) = 5$ ，满足题意；

若 $a \\geqslant 5$ ，则 $\\max_{4 \\leqslant t \\leqslant 5} g(t) = \\max_{4 \\leqslant t \\leqslant 5} (a - t + a) = 2a - 4 = 5$ ，无解；

若 $4 < a < 5$ ，则 $\\max_{4\\leqslant t\\leqslant 5}g(t) = \\max_{4\\leqslant t\\leqslant 5}\\{g(4),g(5)\\} = \\max_{4\\leqslant t\\leqslant 5}\\{2a - 4,5\\} = 5,$

故 $2a - 4 \\leqslant 5, a \\leqslant \\frac{9}{2}$ . 综上所述， $a \\leqslant \\frac{9}{2}$ .`,
      },
      {
        id: "prob-sec-3-13-6-sol-4",
        title: `解法四`,
        method: "standard",
        steps: [],
        explanation: `如果从不等式恒成立与去绝对值的角度,还可做如下思考:

不等式 $|t - a| + a \\leqslant 5$ 对 $t \\in [4,5]$ 恒成立，所以 $\\left\\{ \\begin{array}{l} |t - a|^2 \\leqslant (5 - a)^2, \\\\ a \\leqslant 5 \\end{array} \\right.$ 恒成立，即 $\\left\\{ \\begin{array}{l} a \\leqslant \\frac{t + 5}{2}, \\\\ a \\leqslant 5 \\end{array} \\right.$ 对 $t \\in [4,5]$ 恒成立，所以 $a \\leqslant \\frac{9}{2}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-13-7",
    topicId: "topic-sec-3-13",
    title: `求 maxmin3+log_1/4x,log_2x`,
    content: `求 $\\max\\min\\{3+\\log_{\\frac{1}{4}}x,\\log_{2}x\\}$ .`,
    preview: `求 .`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-13-7-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `$\\min\\{3+\\log_{\\frac{1}{4}}x,\\log_{2}x\\}=\\begin{cases}3+\\log_{\\frac{1}{4}}x,x\\geqslant4,\\\\ \\log_{2}x,x<4,\\end{cases}$ 考虑分段的最值，

可得当 $x = 4$ 时取最大值2.`,
      },
      {
        id: "prob-sec-3-13-7-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `$3\\min \\{3 + \\log_{\\frac{1}{4}}x,\\log_2x\\} = 3\\min \\left\\{3 - \\frac{1}{2}\\log_2x,\\log_2x\\right\\}$

$$
\\leqslant 2 \\left(3 - \\frac {1}{2} \\log_ {2} x\\right) + \\log_ {2} x = 6,
$$

可得最大值为2.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-13-8",
    topicId: "topic-sec-3-13",
    title: `求 max_x > 0,,y > 0min x,y/x^2 + y^2`,
    content: `求 $\\max_{x > 0,\\,y > 0}\\min \\left\\{x,\\frac{y}{x^2 + y^2}\\right\\}.$`,
    preview: `求`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-13-8-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `记 $M=\\min_{x>0,y>0}\\left\\{x,\\frac{y}{x^{2}+y^{2}}\\right\\}$ ,

则 $M^2 \\leqslant \\frac{xy}{x^2 + y^2} \\leqslant \\frac{1}{2}$ ,

当且仅当 $x=y=\\frac{\\sqrt{2}}{2}$ 时取等号，

所以 $\\max_{x>0,y>0}\\left\\{x,\\frac{y}{x^{2}+y^{2}}\\right\\}=\\frac{\\sqrt{2}}{2}.$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-13-9",
    topicId: "topic-sec-3-13",
    title: `求 minmaxx^2+xy+x,4y^2+xy+2y`,
    content: `求 $\\min\\max\\{x^{2}+xy+x,4y^{2}+xy+2y\\}$ .`,
    preview: `求 .`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-13-9-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `记 $M=\\max\\{x^{2}+xy+x,4y^{2}+xy+2y\\}$ ,

则 $M \\geqslant \\frac{x^2 + 2xy + 4y^2 + x + 2y}{2}$

$$
\\begin{array}{l} = \\frac {(x + 2 y) ^ {2} + (x + 2 y) - 2 x y}{2} \\\\ \\geqslant \\frac {(x + 2 y) ^ {2} + (x + 2 y) - \\frac {(x + 2 y) ^ {2}}{4}}{2} \\\\ = \\frac {\\frac {3}{4} (x + 2 y) ^ {2} + (x + 2 y)}{2}, \\\\ \\end{array}
$$

令 $t=x+2y$ ，上式可视为关于 t 的二次函数，易求得最小值为 $-\\frac{1}{6}$ ，

所以 $\\min\\max\\{x^{2}+xy+x,4y^{2}+xy+2y\\}=-\\frac{1}{6}$ ，当 $x=-\\frac{1}{3},y=-\\frac{1}{6}$ 时取到最小值.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-13-10",
    topicId: "topic-sec-3-13",
    title: `设函数 f(x) = x^2 + ax + b (a, b`,
    content: `设函数 $f(x) = x^{2} + ax + b (a, b \\in \\mathbb{R})$ ，记 $M(a, b)$ 为 $y = |f(x)|$ 在 $[-1, 1]$ 上的最大值，已知 $|a| \\geqslant 2$ ，求证： $M(a, b) \\geqslant 2$ .`,
    preview: `设函数 f(x) = x^2 + ax + b (a, b R) ，记 M(a, b) 为 y = |f(x)| 在 [-1, 1] 上的最大值，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-13-10-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `证法一 由 $f(x) = \\left(x + \\frac{a}{2}\\right)^2 + b - \\frac{a^2}{4}$ 得对称轴为直线 $x = -\\frac{a}{2}$ ,

由 $|a|\\geqslant 2$ ，得 $\\left| - \\frac{a}{2}\\right|\\geqslant 1$ ，故 $f(x)$ 在[-1,1]上单调，

$$
M (a, b) = \\max \\{| f (1) |, | f (- 1) | \\} \\geqslant \\frac {| a + b + 1 | + | 1 - a + b |}{2} \\geqslant | a | \\geqslant 2.
$$

证法二 记 $M(a,b) = \\max_{x\\in [-1,1]}|x^2 +ax + b|$ ，运用定理四，则

$$
\\min M (a, b) = \\min _ {| a | \\geqslant 2, b \\in \\mathbf {R}} \\{\\max _ {x \\in [ - 1, 1 ]} | x ^ {2} + a x + b | \\} = \\frac {\\left| f _ {\\max} (x) - f _ {\\min} (x) \\right|}{2}.
$$

因为 $|a|\\geqslant 2$ ，所以 $\\left|\\frac{a}{2}\\right|\\geqslant 1$ ，所以对称轴在区间[-1,1]外，故 $f(x)$ 单调.

所以 $M(a,b)\\geqslant \\min M(a,b) = \\min_{|a|\\geqslant 2,b\\in \\mathbf{R}}\\{\\max_{x\\in [-1,1]}|x^2 +ax + b|\\}$

$$
= \\frac {\\left| f (1) - f (- 1) \\right|}{2} = | a | \\geqslant 2.
$$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-13-11",
    topicId: "topic-sec-3-13",
    title: `函数 f(x) = 2x^2 + bx + c (b, c`,
    content: `函数 $f(x) = 2x^{2} + bx + c (b, c \\in \\mathbf{R})$ 的定义域为 $[0, 2]$ ，记 $|f(x)|$ 的最大值是 $M$ ，求 $M$ 的最小值.`,
    preview: `函数 f(x) = 2x^2 + bx + c (b, c R) 的定义域为 [0, 2] ，记 |f(x)| 的最大值是 M ，求 M 的最小值.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-13-11-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `$4M \\geqslant |f(0)| + 2|f(1)| + |f(2)| \\geqslant |f(0) - 2f(1) + f(2)| = 4,$

所以 $M \\geqslant 1$ . 当且仅当 b = -4, c = 1 时, 取得等号.`,
      },
      {
        id: "prob-sec-3-13-11-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `$4M \\geqslant |f(0)| + |f(2)| + 2 \\left| f\\left(-\\frac{b}{4}\\right) \\right| \\geqslant |c| + |2b + c + 8| + 2 \\left| c - \\frac{b^2}{8} \\right|$

$$
\\geqslant \\left| 2 b + 8 + \\frac {b ^ {2}}{4} \\right| = \\left| \\left(\\frac {b}{2} + 2\\right) ^ {2} + 4 \\right| \\geqslant 4,
$$

所以 $M \\geqslant 1$ .`,
      },
      {
        id: "prob-sec-3-13-11-sol-2",
        title: `解法三`,
        method: "standard",
        steps: [],
        explanation: `$\\min_{c\\in\\mathbf{R}}\\max_{-1\\leqslant x\\leqslant1}\\left\\{\\left|2x^{2}+bx+c\\right|\\right\\}=\\min_{b\\in\\mathbf{R}}\\min_{c\\in\\mathbf{R}}\\max_{-1\\leqslant x\\leqslant1}\\left\\{\\left|(2x^{2}+bx)+c\\right|\\right\\}$

$$
= \\min _ {b \\in \\mathbf {R}} \\frac {\\{\\max _ {0 \\leqslant x \\leqslant 2} (2 x ^ {2} + b x) - \\min _ {0 \\leqslant x \\leqslant 2} (2 x ^ {2} + b x) \\}}{2}
$$

$$
= \\frac {1}{2} \\min _ {b \\in \\mathbf {R}} \\left\\{ \\begin{array}{l l} | 2 b + 8 |, b \\geqslant 0 \\text {或} b \\leqslant - 8, \\\\ \\left| 2 b + 8 + \\frac {b ^ {2}}{8} \\right|, - 4 \\leqslant b <   0, = \\frac {1}{2} \\min \\{8, 2, 2 \\} = 1. \\\\ \\frac {b ^ {2}}{8}, - 8 <   b <   - 4 \\end{array} \\right.
$$

所以 $M \\geqslant 1$ .`,
      },
      {
        id: "prob-sec-3-13-11-sol-3",
        title: `解法四`,
        method: "standard",
        steps: [],
        explanation: `$f(x)=2x^{2}+bx+c(b,c\\in\\mathbf{R})$ 与 $g(x)=2x^{2}+m$ 是“全等”函数，即图像可以通过平移得到.

因为 $|f(x)|$ 的最大值是 $M$ ，故 $-M\\leqslant f(x)\\leqslant M,$

$g(x)=2x^{2}+m$ 在区间 $[-1,1]$ 上的最大值为 $g(-1)$ ，最小值为 $g(0)$ ，

即 $2M \\geqslant g(-1) - g(0) = 2$ ，所以 $M \\geqslant 1$ .

\\* 3.13.2 切比雪夫最佳逼近定理

设 $f(x)$ 是定义在区间 $[m, n]$ 上的连续函数，称 $E = \\max_{m \\leqslant x \\leqslant n} |f(x) - (ax + b)|$ 为 $f(x)$ 与直线 $g(x) = ax + b$ 的偏差。若实数 $x_0 \\in [m, n]$ 满足 $|f(x_0) - (ax_0 + b)| = E$ ，则称 $x_0$ 为直线 $g(x) = ax + b$ 的偏差点。特别地，若有 $f(x_0) - (ax_0 + b) = E$ ，称 $x_0$ 为正偏差点；若有 $f(x_0) - (ax_0 + b) = -E$ ，则 $x_0$ 为负偏差点。

记集合 $A = \\{g(x) = ax + b, a \\in \\mathbf{R}, b \\in \\mathbf{R}\\}$ , 若存在函数 $g_0(x) \\in A$ 使得对任意 $g(x) \\in A$ , 恒有

$$
\\max _ {m \\leqslant x \\leqslant n} | f (x) - g _ {0} (x) | \\leqslant \\max _ {m \\leqslant x \\leqslant n} | f (x) - g (x) | \\tag {*}
$$

成立，则称 $g_0(x)$ 为函数 $f(x)$ 在切比雪夫意义下的最佳逼近直线，简称最佳逼近直线.

显然， $(*)$ 式也可改写成等式 $\\max_{m\\leqslant x\\leqslant n}|f(x) - g_0(x)| = \\min_{a,b\\in \\mathbf{R}m\\leqslant x\\leqslant n}|f(x) - g(x)|.$

对于切比雪夫最佳逼近直线,有如下常用结论:

结论1 若函数 $f(x)$ 是定义在区间 $[m, n]$ 上的连续函数，则 $f(x)$ 的最佳逼近直线存在且唯一.

结论2 直线 $g(x)$ 是连续函数 $y = f(x)(x \\in [m, n])$ 的最佳逼近直线的充要条件是 $g(x)$ 至少具有三个偏差点，且它们依次轮流为正负偏差点.

结论3 若函数 $f(x)$ 在区间 $[m, n]$ 上具有二阶导数，且 $f''(x)$ 在区间 $[m, n]$ 上不变号，则 $f(x)$ 的最佳逼近直线为

$$
g (x) = k \\left(x - \\frac {m + c}{2}\\right) + \\frac {f (m) + f (c)}{2},
$$

其中 $k = \\frac{f(m) - f(n)}{m - n}$ , 实数 $c$ 的值由方程 $f'(c) = \\frac{f(m) - f(n)}{m - n}$ 解得.

利用结论 3, 我们便可根据如下步骤作出凹、凸函数的最佳逼近直线 $g(x)$ (如图 3-13-2 所示):

![](images/140ea2c6bb942f45d437af662391d8e7c20dc50ee21e23f965563ca2e033b5a1.jpg)

图3-13-2

(1) 连接 MN;

(2) 在函数图像上找一点 C, 使得在该点的切线与直线 MN 平行;

(3) 过线段 MC 的中点 D 作直线 MN 的平行线 l.

这样的直线 $l$ 就是所求的最佳逼近直线 $g(x)$ , 点 $M, C, N$ 依次轮流为正负偏差点.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-13-12",
    topicId: "topic-sec-3-13",
    title: `设函数 f(x)=|√x-ax-b| ，其中 a,b R`,
    content: `设函数 $f(x)=|\\sqrt{x}-ax-b|$ ，其中 $a,b\\in R$ .
(1) 当 $a = 0, b = 1$ 时，写出函数 $f(x)$ 的单调区间；
(2) 当 $a=\\frac{1}{2}$ 时, 记函数 $f(x)$ 在 $[0,4]$ 上的最大值为 $g(b)$ , 当 b 变化时, 求 $g(b)$ 的最小值;
(3)若对任意实数 $a, b$ ，总存在实数 $x_0 \\in [0, 4]$ 使不等式 $f(x_0) \\geqslant m$ 成立，求实数 $m$ 的取值范围.`,
    preview: `设函数 f(x)=|√x-ax-b| ，其中 a,b R . (1) 当 a = 0, b = 1 时，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-13-12-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)、(2)略. 第(3)问等价于 $m \\leqslant \\min_{a, b \\in \\mathbb{R}^0 \\leqslant x \\leqslant 4} |\\sqrt{x} - ax - b|$ ,

而 $(\\sqrt{x})''=-\\frac{1}{4}x^{-\\frac{3}{2}}$ 在区间 $(0,4]$ 上恒小于0，由前面结论3可知：

函数 $y = \\sqrt{x} (x \\in [0,4])$ 的最佳逼近直线为 $y = \\frac{1}{2} x + \\frac{1}{4}$ ,

从而求得 $\\min_{a,b\\in \\mathbf{R}0\\leqslant x\\leqslant 4}|\\sqrt{x} -ax - b| = \\max_{0\\leqslant x\\leqslant 4}\\left|\\sqrt{x} -\\frac{1}{2} x - \\frac{1}{4}\\right| = \\frac{1}{4},0,1,4$ 是偏差点.

所以,实数 m 的取值范围是 $\\left(-\\infty,\\frac{1}{4}\\right]$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-13-13",
    topicId: "topic-sec-3-13",
    title: `设函数 f(x)=(x-1)^3-ax-b, x R`,
    content: `设函数 $f(x)=(x-1)^{3}-ax-b, x \\in \\mathbb{R}$ ，其中 $a, b \\in R$ .
(1) 求 $f(x)$ 的单调区间；
(2) 若 $f(x)$ 存在极值点 $x_{0}$ ，且 $f(x_{1}) = f(x_{0})$ ，其中 $x_{1} \\neq x_{0}$ ，求证： $x_{1} + 2x_{0} = 3$ ;
(3) 设 a > 0，函数 $g(x) = |f(x)|$ ，求证： $g(x)$ 在区间 [0, 2] 上的最大值不小于 $\\frac{1}{4}$ .`,
    preview: `设函数 f(x)=(x-1)^3-ax-b, x R ，其中 a, b R . (1) 求 f(x) 的单调区间； (2) 若 f(x) 存在极值点 x_0 ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-13-13-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)、(2)略. 对于第(3)问, 我们先证 $\\min_{a,b\\in \\mathbb{R}0\\leqslant x\\leqslant 2}|(x - 1)^2 -ax - b|\\geqslant \\frac{1}{4}$ .

取 $a = \\frac{3}{4}, b = -\\frac{3}{4}$ , 记 $H(x) = (x - 1)^{3} - \\frac{3}{4} x + \\frac{3}{4}$ ,

函数 $H(x)$ 的极值与单调性见下表：

<table><tr><td>x</td><td>0</td><td>(0,1/2)</td><td>1/2</td><td>(1/2,3/2)</td><td>3/2</td><td>(3/2,2)</td><td>2</td></tr><tr><td>H&#x27;(x)</td><td>9/4</td><td>+</td><td>0</td><td>-</td><td>0</td><td>+</td><td>9/4</td></tr><tr><td>H(x)</td><td>-1/4</td><td>↑</td><td>1/4</td><td>↓</td><td>-1/4</td><td>↑</td><td>1/4</td></tr></table>

利用前面结论 2 可知函数 $y=(x-1)^{3}(x\\in[0,2])$ 的最佳逼近直线为

$y=\\frac{3}{4}x-\\frac{3}{4},0,\\frac{1}{2},\\frac{3}{2},2$ 是四个依次轮流为正负的偏差点.

$$
\\min _ {a, b \\in \\mathbf {R} ^ {0} \\leqslant x \\leqslant 2} \\max | (x - 1) ^ {3} - a x - b | = \\max _ {0 \\leqslant x \\leqslant 2} \\left| (x - 1) ^ {3} - \\frac {3}{4} x + \\frac {3}{4} \\right| = \\frac {1}{4}.
$$

所以，当 $a > 0$ 时，

$$
\\max _ {0 \\leqslant x \\leqslant 2} | g (x) | = \\max _ {0 \\leqslant x \\leqslant 2} \\left| (x - 1) ^ {3} - a x - b \\right| \\geqslant \\frac {1}{4}.
$$

评注 本题第(3)问的难点是取 $a = \\frac{3}{4}, b = -\\frac{3}{4}$ , 得到函数 $H(x) = (x - 1)^{3} - \\frac{3}{4} x + \\frac{3}{4}$ . 实际上, 我们可以利用第(2)小题中的结论先猜出 $0, \\frac{1}{2}, \\frac{3}{2}, 2$ 可能是偏差点, 继而求出最佳逼近直线.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-14-1",
    topicId: "topic-sec-3-14",
    title: `证明不等式 ln(1+x) 的三阶上界`,
    content: `证明：$\\ln(1+x)\\leqslant x-\\frac{x^2}{2}+\\frac{x^3}{3}\\ (-1<x<1).$`,
    preview: `证明 ln(1+x) ≤ x - x²/2 + x³/3，其中 -1<x<1。`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-14-1-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `令 $f(x)=\\ln(1+x)$。在 $x=0$ 处作三阶泰勒展开，存在 $\\xi$ 介于 $0$ 与 $x$ 之间，使得

$$
\\ln(1+x)=x-\\frac{x^2}{2}+\\frac{x^3}{3}-\\frac{x^4}{4(1+\\xi)^4}.
$$

由于 $-1<x<1$，故 $1+\\xi>0$，从而

$$
-\\frac{x^4}{4(1+\\xi)^4}\\leqslant 0.
$$

因此

$$
\\ln(1+x)\\leqslant x-\\frac{x^2}{2}+\\frac{x^3}{3}.
$$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-14-2",
    topicId: "topic-sec-3-14",
    title: `已知函数 f(x)=e^x-(x+m)`,
    content: `已知函数 $f(x)=\\mathrm{e}^{x}-\\ln(x+m)$ ，当 $m \\leqslant 2$ 时，`,
    preview: `已知函数 f(x)=e^x-(x+m) ，当 m ≤ 2 时，证明： f(x) > 0 . 证明 由泰勒展开式易知 ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-14-2-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `证明： $f(x) > 0$ .
证明 由泰勒展开式易知 $\\mathrm{e}^x\\geqslant x + 1,x + 1\\geqslant \\ln (x + 2)\\geqslant \\ln (x + m)$ ，且这几个不等式的等号不能同时成立，所以当 $m\\leqslant 2$ 时， $f(x) > 0$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-14-3",
    topicId: "topic-sec-3-14",
    title: `设函数 f(x) = ae^x x + be^x - 1x`,
    content: `设函数 $f(x) = ae^{x}\\ln x + \\frac{be^{x - 1}}{x}$ ，曲线 $y = f(x)$ 在点(1, $f(1)$ )处的切线为 $y = e(x - 1) + 2$ .
(1) 求 a, b;
(2) 证明: $f(x) > 1$ .`,
    preview: `设函数 f(x) = ae^x x + be^x - 1x ，曲线 y = f(x) 在点(1, f(1) )处的切线为 y = e(x - 1) + 2 .`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-14-3-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) $f'(x)=a\\mathrm{e}^{x}\\left(\\ln x+\\frac{1}{x}\\right)+\\frac{be^{x-1}(x-1)}{x^{2}}$ ,

所以 $\\left\\{\\begin{aligned}f(1)=2,\\\\ f'(1)=e,\\end{aligned}\\right.$ 所以 $\\left\\{\\begin{aligned}a=1,\\\\ b=2.\\end{aligned}\\right.$

(2) $e^{x}\\ln x+\\frac{2e^{x-1}}{x}>1(x>0)$ 等价于 $\\mathrm{e}^{x}\\left(\\ln x+\\frac{2}{\\mathrm{e}x}\\right)>1(x>0)$ .

用 $x - 1$ 去换 $\\mathrm{e}^x\\geqslant x + 1$ 中的 $x$ ，得 $\\mathrm{e}^x\\geqslant \\mathrm{e}x$ （当且仅当 $x = 1$ 时等号成立）.

用 $-\\ln x$ 去换 $e^{x} \\geqslant ex$ 中的 x，得 $\\ln x \\geqslant -\\frac{1}{ex}$ （当且仅当 $x = \\frac{1}{e}$ 时等号成立）.

所以 $\\mathrm{e}^{x}\\left(\\ln x+\\frac{2}{\\mathrm{e}x}\\right)\\geqslant\\mathrm{e}^{x}\\left(\\frac{1}{\\mathrm{e}x}\\right)>1.$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-14-4",
    topicId: "topic-sec-3-14",
    title: `已知函数 f( x) = x`,
    content: `已知函数 $f\\left( x\\right)  = \\ln x$ .
(1) 求函数 $g(x)=f(x+1)-x$ 的最大值；
(2) 当 0 < a < b 时, 求证: $f(b) - f(a) > \\frac{2a(b - a)}{a^{2} + b^{2}}$ .`,
    preview: `已知函数 f( x) = x . (1) 求函数 g(x)=f(x+1)-x 的最大值； (2) 当 0 < a < b 时, 求证: .`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-14-4-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) $g(x)=f(x+1)-x=\\ln(x+1)-x,x\\in(-1,+\\infty)$ ,

由不等式 $\\ln (x + 1)\\leqslant x(x > - 1)$ 得

当 x=0 时, $g(x)$ 取得最大值, 且最大值为 0.

(2)由 $\\ln(x+1)\\leqslant x(x>-1)$ ，所以 $\\ln x\\leqslant x-1(x>0)$ .

令 $x = \\frac{a}{b}$ ，则 $-\\ln \\frac{a}{b} \\geqslant 1 - \\frac{a}{b} = \\frac{b - a}{b}$ .

因为 $\\frac{b - a}{b} -\\frac{2a(b - a)}{a^2 + b^2} = \\frac{(b - a)(a^2 + b^2) - 2ab(b - a)}{b(a^2 + b^2)}$

$$
= \\frac {(b - a) (a - b) ^ {2}}{b (a ^ {2} + b ^ {2})} > 0.
$$

所以 $\\frac{b-a}{b}>\\frac{2a(b-a)}{a^{2}+b^{2}}$ ,

所以 $f(b) - f(a) > \\frac{2a(b - a)}{a^2 + b^2}.$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-15-1",
    topicId: "topic-sec-3-15",
    title: `已知函数 f(x)=ae^x-1- x+ a`,
    content: `（2020 年高考新课标全国Ⅰ卷改编）已知函数 $f(x)=ae^{x-1}-\\ln x+\\ln a$ ，若 $f(x)\\geqslant1$ ，求 a 的取值范围.
![](images/df64687beee1eed9d177de61132d9ede0f274882adfebb3f6b5f1e1943f15f5f.jpg)
图3-15-1`,
    preview: `已知函数 f(x)=ae^x-1- x+ a ，若 f(x)≥1 ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-15-1-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `(1)当 $0 < a < 1$ 时,

$f(1)=a+\\ln a<1$ , 不符合, 舍去.

(2) 当 $a = 1$ 时, $f(x) = \\mathrm{e}^{x - 1} - \\ln x, f'(x) = \\mathrm{e}^{x - 1} - \\frac{1}{x}$ .

当 $x \\in (0,1)$ 时， $f'(x) < 0$ ; 当 $x \\in (1, +\\infty)$ 时， $f'(x) > 0$ .

所以，当 x=1 时， $f(x)$ 取得最小值，最小值为 $f(1)=1$ ，从而 $f(x)\\geqslant1$ 。

(3) 当 a > 1 时, $f(x) = ae^{x-1} - \\ln x + \\ln a \\geqslant e^{x-1} - \\ln x \\geqslant 1.$

综上，a 的取值范围是 $[1, +\\infty)$ .`,
      },
    ],
    tags: [],
    source: `2020 年高考新课标全国Ⅰ卷改编`,
  },
  {
    id: "prob-sec-3-15-2",
    topicId: "topic-sec-3-15",
    title: `函数 f(x)=xe^x-x- x 的最小值为`,
    content: `函数 $f(x)=xe^{x}-x-\\ln x$ 的最小值为 \\_\\_\\_\\_.`,
    preview: `函数 f(x)=xe^x-x- x 的最小值为 \\_\\_\\_\\_.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-15-2-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `直接利用朗博同构与切线放缩.

$$
f (x) = x \\mathrm{e} ^ {x} - x - \\ln x = \\mathrm{e} ^ {\\ln x + x} - x - \\ln x \\geqslant x + \\ln x + 1 - x - \\ln x = 1,
$$

(小题到这步可以截止)

当且仅当 $x_{0}+\\ln x_{0}=0$ 时等号成立.

令 $h(x)=x+\\ln x$ ，则 $h(x)$ 在 $(0,+\\infty)$ 上单调递增，

因为 $h\\left(\\frac{1}{\\mathrm{e}}\\right)=\\frac{1}{\\mathrm{e}}-1<0, h(1)=1>0$ ，所以 $h(x)$ 在 $x\\in\\left(\\frac{1}{\\mathrm{e}},1\\right)$ 上有 1 个零点，

所以使 $x_{0}+\\ln x_{0}=0$ 的 $x_{0}$ 存在，故 $f(x)$ 的最小值为 1.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-15-3",
    topicId: "topic-sec-3-15",
    title: `已知函数 f(x) = xe^x, g(x) = 2x`,
    content: `已知函数 $f(x) = x\\mathrm{e}^{x}, g(x) = 2x\\ln (2x)$ ，若 $f(x_{1}) = g(x_{2}) = t, t > 0$ ，则 $\\frac{\\ln t}{x_1x_2}$ 的最大值为 （）
A. $\\frac{1}{\\mathrm{e}^2}$

B. $\\frac{4}{\\mathrm{e}^2}$

C. $\\frac{1}{\\mathrm{e}}$

D. $\\frac{2}{\\mathrm{e}}$`,
    preview: `已知函数 f(x) = xe^x, g(x) = 2x (2x) ，若 f(x_1) = g(x_2) = t, t > 0 ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-15-3-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `由题意得, $x_{1}e^{x_{1}}=t,2x_{2}\\ln(2x_{2})=t$ ,

即 $2x_{2}\\ln(2x_{2})=\\mathrm{e}^{\\ln2x_{2}}\\cdot\\ln(2x_{2})=t,$

函数 $f(x) = x\\cdot \\mathrm{e}^{x}$ ，则 $f^{\\prime}(x) = (1 + x)\\mathrm{e}^{x}$

所以，当 x<-1 时， $f'(x)<0$ ，

$f(x)$ 在 $(-∞,-1)$ 上单调递减，

当 x > -1 时, $f'(x) > 0$ ,

$f(x)$ 在 $(-1, +\\infty)$ 上单调递增，

又当 $x \\in (-\\infty, 0)$ 时， $f(x) < 0$ ，

当 $x \\in (0, +\\infty)$ 时， $f(x) > 0$ ，

作函数 $f(x)=xe^{x}$ 的图像, 如图 3-15-2 所示.

由图可知, 当 t > 0 时, $f(x) = t$ 有唯一解,

故 $x_{1} = \\ln (2x_{2})$ ，且 $x_{1} > 0$

所以 $\\frac{\\ln t}{x_{1}x_{2}}=\\frac{2\\ln t}{2x_{2}\\ln(2x_{2})}=\\frac{2\\ln t}{t}.$

设 $h(t) = \\frac{2\\ln t}{t}, t > 0$ ，则 $h'(t) = \\frac{2(1 - \\ln t)}{t^2}$ ，

令 $h'(t)=0$ , 解得 t=e,

所以 $h(t)$ 在 $(0, e)$ 上单调递增，在 $(e, +\\infty)$ 上单调递减，

所以 $h(t) \\leqslant h(\\mathrm{e}) = \\frac{2}{\\mathrm{e}}$ ，即 $\\frac{\\ln t}{x_{1}x_{2}}$ 的最大值为 $\\frac{2}{e}$ .

故选 D.

![](images/6924670d4dedaf3d44c902cbb0267f321b804dbb16c60402182c8915e22fe19e.jpg)
图3-15-2`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-15-4",
    topicId: "topic-sec-3-15",
    title: `若函数 f(x) = x(e^2x - a) - x -`,
    content: `若函数 $f(x) = x(\\mathrm{e}^{2x} - a) - \\ln x - 1$ 无零点,则整数 $a$ 的最大值是 \\_\\_\\_\\_.`,
    preview: `若函数 f(x) = x(e^2x - a) - x - 1 无零点,则整数 a 的最大值是 \\_\\_\\_\\_.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-15-4-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `$f(x) = x\\left( {\\mathrm{e}}^{2x} - a\\right)  - \\ln x - 1$

$$
\\begin{array}{l} = \\mathrm{e} ^ {\\ln x + 2 x} - a x - \\ln x - 1 \\\\ = \\mathrm{e} ^ {\\ln x + 2 x} - (\\ln x + 2 x) - 1 + 2 x - a x \\\\ = \\mathrm{e} ^ {\\ln x + 2 x} - (\\ln x + 2 x) - 1 + (2 - a) x, \\\\ \\end{array}
$$

设 $g(x)=\\mathrm{e}^{\\ln x+2x}-(\\ln x+2x)-1$ ,

则 $f(x)=g(x)+(2-a)x,$

因为 $g(x) \\geqslant 0, x > 0$ ，所以要使 $f(x)$ 无零点，需 2 - a > 0，则 a < 2，

所以整数 a 的最大值是 1.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-15-5",
    topicId: "topic-sec-3-15",
    title: `已知函数 f(x)=(x/2-1/4)e^2x-x`,
    content: `（多选题）已知函数 $f(x)=\\left(\\frac{x}{2}-\\frac{1}{4}\\right)\\mathrm{e}^{2x}-x\\ln x-ax^{2}$ 是单调递增函数，则实数 a 的取值可以是 ( )
A. $\\frac{\\mathrm{e}}{2}$

B. 2

C. 1

D.-1`,
    preview: `已知函数 f(x)=(x/2-1/4)e^2x-x x-ax^2 是单调递增函数，则实数 a 的取值可以是 ( ) A. e2 B. 2 C. 1 D.-1`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-15-5-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `$f^{\\prime}(x) = \\frac{1}{2}\\mathrm{e}^{2x} + 2\\left(\\frac{2}{x} -\\frac{1}{4}\\right)\\mathrm{e}^{2x} - (\\ln x + 1) - 2ax$

$$
= x \\mathrm{e} ^ {2 x} - \\ln x - 1 - 2 a x
$$

$$
= \\mathrm{e} ^ {\\ln x + 2 x} - \\ln x - 1 - 2 a x
$$

$$
= \\mathrm{e} ^ {\\ln x + 2 x} - (\\ln x + 2 x) - 1 + (2 - 2 a) x,
$$

设 $g(x) = \\mathrm{e}^{\\ln x + 2x} - (\\ln x + 2x) - 1$ ，则 $g(x)\\geqslant 0.$

又 x>0，所以若 $f'(x)=g(x)+(2-2a)x\\geqslant0$ ，

则 $2-2a \\geqslant 0$ ，即 $a \\leqslant 1$ ，

故选 CD.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-15-6",
    topicId: "topic-sec-3-15",
    title: `若 x>0 时恒有 x^2e^3x-(k+3)x-2`,
    content: `若 x>0 时恒有 $x^{2}\\mathrm{e}^{3x}-(k+3)x-2\\ln x-1\\geqslant0$ 成立，则实数 k 的取值范围是 \\_\\_\\_\\_.`,
    preview: `若 x>0 时恒有 x^2e^3x-(k+3)x-2 x-1≥0 成立，则实数 k 的取值范围是 \\_\\_\\_\\_.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-15-6-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `先借助参变量分离,将原问题转化为最值问题,再利用朗博同构与切线放缩.

$$
(k + 3) x \\leqslant x ^ {2} \\mathrm{e} ^ {3 x} - 2 \\ln x - 1, k + 3 \\leqslant \\frac {x ^ {2} \\mathrm{e} ^ {3 x} - 2 \\ln x - 1}{x},
$$

$$
k + 3 \\leqslant \\left(\\frac {x ^ {2} \\mathrm{e} ^ {3 x} - 2 \\ln x - 1}{x}\\right) _ {\\min}.
$$

设 $f(x) = \\frac{x^2\\mathrm{e}^{3x} - 2\\ln x - 1}{x}$

$$
= \\frac {\\mathrm{e} ^ {2 \\ln x + 3 x} - 2 \\ln x - 1}{x}
$$

$$
\\geqslant \\frac {(2 \\ln x + 3 x) + 1 - 2 \\ln x - 1}{x} = 3,
$$

所以 $k+3 \\leqslant 3$ ，即 $k \\leqslant 0$ ，得 k 的取值范围为 $(-\\infty, 0]$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-16-1",
    topicId: "topic-sec-3-16",
    title: `已知椭圆 x^22+y^2=1`,
    content: `已知椭圆 $\\frac{x^{2}}{2}+y^{2}=1$ 上两个不同的点A,B关于直线 $y=mx+\\frac{1}{2}$ 对称.
(1)求实数 m 的取值范围；
(2) 求 $\\triangle AOB$ 面积的最大值 (O 为坐标原点).`,
    preview: `已知椭圆 x^22+y^2=1 上两个不同的点A,B关于直线 y=mx+1/2 对称. (1)求实数 m 的取值范围； (2) 求 △ AOB 面积的最大值 (`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-16-1-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `(1)由题意得 $m \\neq 0$ ，且直线 $AB$ 的斜率为 $k_{AB} = -\\frac{1}{m}$ .

设 \${AB}$ 的中点为 $M\\left( {{x}_{0},{y}_{0}}\\right)$ ,则由垂径定理,得

$k_{OM} \\cdot k_{AB} = -\\frac{1}{2}$ , 即 $\\frac{y_0}{x_0} \\cdot \\left(-\\frac{1}{m}\\right) = -\\frac{1}{2}$ , 所以 $y_0 = \\frac{m}{2} x_0$ . ①

又因为点 $M(x_0, y_0)$ 在直线 $y = mx + \\frac{1}{2}$ 上，所以 $y_0 = mx_0 + \\frac{1}{2}$ . ②

由①②可知 $x_{0}=-\\frac{1}{m}, y_{0}=-\\frac{1}{2}$ ，即 $M\\left(-\\frac{1}{m}, -\\frac{1}{2}\\right)$ .

因为点 $M\\left(-\\frac{1}{m}, -\\frac{1}{2}\\right)$ 在椭圆内，

所以 $\\frac{1}{2}\\left(-\\frac{1}{m}\\right)^2 +\\left(-\\frac{1}{2}\\right)^2 < 1$ ，解得 $m <   - \\frac{\\sqrt{6}}{3}$ 或 $m > \\frac{\\sqrt{6}}{3}$

故 $m$ 的取值范围为 $\\left(-\\infty, -\\frac{\\sqrt{6}}{3}\\right) \\cup \\left(\\frac{\\sqrt{6}}{3}, +\\infty\\right)$ .

(2)作伸缩变换 $\\varphi:\\left\\{\\begin{aligned}x^{\\prime}&=\\frac{x}{\\sqrt{2}},\\\\ y^{\\prime}&=y,\\end{aligned}\\right.$ 如图 3-16-1 中的椭圆 $\\frac{x^{2}}{2}+y^{2}=1$ 变为如图 3-16-2 的单位圆 $O^{\\prime}:x^{\\prime2}+y^{\\prime2}=1$ .

![](images/5f57f611b2a0cc3271f87bbe4fc0f0c126f54878fab3ea8f1f66f336b2135af7.jpg)

图3-16-1

![](images/a8d3aee9c1f2bf0ba23c34000f46ecea9df271c8785628f3bab36de3fcfdf2ae.jpg)

图3-16-2

在单位圆中， $S_{\\triangle A'O'B'}=\\frac{1}{2}\\cdot|O'A'|\\cdot|O'B'|\\cdot\\sin\\angle A'O'B'$

$$
\\begin{array}{l} = \\frac {1}{2} \\times 1 \\times 1 \\times \\sin \\angle A ^ {\\prime} O ^ {\\prime} B ^ {\\prime} \\\\ \\leqslant \\frac {1}{2}, \\\\ \\end{array}
$$

当且仅当 $O^{\\prime}A^{\\prime}\\perp O^{\\prime}B^{\\prime}$ 即 $|O^{\\prime}M^{\\prime}| = \\frac{\\sqrt{2}}{2}$ 时等号成立.

由于 $M^{\\prime}\\left(-\\frac{1}{\\sqrt{2}m}, - \\frac{1}{2}\\right)$

所以 $\\sqrt{\\left(-\\frac{1}{\\sqrt{2}m}\\right)^2 + \\left(-\\frac{1}{2}\\right)^2} = \\frac{\\sqrt{2}}{2},$

解得 $m = \\pm \\sqrt{2} \\in (-\\infty, -\\frac{\\sqrt{6}}{3}) \\cup (\\frac{\\sqrt{6}}{3}, +\\infty)$ .

根据伸缩变换的性质可知

$$
S _ {\\triangle A O B} = a b S _ {\\triangle A ^ {\\prime} O ^ {\\prime} B ^ {\\prime}} = \\sqrt {2} S _ {\\triangle A ^ {\\prime} O ^ {\\prime} B ^ {\\prime}} \\leqslant \\frac {\\sqrt {2}}{2},
$$

故 $\\triangle AOB$ 面积的最大值为 $\\frac{\\sqrt{2}}{2}$ .

评注 本题第(1)问属于解析几何中常见的对称问题,可是由直线方程和椭圆方程联立后的运算量较大,也可使用点差法求解,这里使用垂径定理显得简洁明快;第(2)问使用常规方法非常繁琐,不易求得结果,可以通过伸缩变换将椭圆中比较难处理的面积最值问题转化为圆的相关问题来解决,而圆内接三角形的面积运算量要小得多.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-16-2",
    topicId: "topic-sec-3-16",
    title: `已知动直线 l 与椭圆 C: x^2/3 + y^2/2`,
    content: `已知动直线 $l$ 与椭圆 $C: \\frac{x^2}{3} + \\frac{y^2}{2} = 1$ 交于两不同点 $P(x_1, y_1), Q(x_2, y_2)$ ，且 $\\triangle OPQ$ 的面积 $S_{\\triangle OPQ} = \\frac{\\sqrt{6}}{2}$ ，其中 $O$ 为坐标原点.
(1) 证明: $x_{1}^{2} + x_{2}^{2}$ 和 $y_{1}^{2} + y_{2}^{2}$ 均为定值;
(2)设线段 PQ 的中点为 M, 求 $\\left|OM\\right|\\cdot\\left|PQ\\right|$ 的最大值;

(3)椭圆 $C$ 上是否存在点 $D, E, G$ , 使得 $S_{\\triangle ODE} = S_{\\triangle ODG} = S_{\\triangle OEG} = \\frac{\\sqrt{6}}{2}$ ? 若存在, 判断 $\\triangle DEG$ 的形状; 若不存在, 请说明理由.`,
    preview: `已知动直线 l 与椭圆 C: x^2/3 + y^2/2 = 1 交于两不同点 P(x_1, y_1), Q(x_2, y_2) ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-16-2-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)作伸缩变换 $\\varphi: \\begin{cases} x' = \\frac{x}{\\sqrt{3}}, \\\\ y' = \\frac{y}{\\sqrt{2}}, \\end{cases}$ 如图 3-16-3 中的椭圆 $C: \\frac{x^2}{3} + \\frac{y^2}{2} = 1$ 变为如图 3-16-4 中的单位圆 $O': x'^2 + y'^2 = 1$ .

![](images/734ec4f5826016668e7cd394d17c9ed64f113ef172afdde3377b31a9029832af.jpg)

图3-16-3

![](images/150c12e18dabab1c45aad83012d1a8691c59ee4b4b2b380a842b9b9ec6e9f06e.jpg)

图3-16-4

由伸缩变换的性质, 可知 $S_{\\triangle OPQ}=abS_{\\triangle O^{\\prime}P^{\\prime}Q^{\\prime}}=\\sqrt{6}S_{\\triangle O^{\\prime}P^{\\prime}Q^{\\prime}}=\\frac{\\sqrt{6}}{2}$ ,

所以 $S_{\\triangle O'P'Q'}=\\frac{1}{2}$ ，即 $\\frac{1}{2}\\cdot|O'P'|\\cdot|O'Q'|\\cdot\\sin\\angle P'O'Q'=\\frac{1}{2}$

所以 $\\sin\\angle P'O'Q'=1$ ，即 $\\angle P'O'Q'=90^{\\circ}$ ，

从而 $x_{1}^{'2}=y_{2}^{'2},x_{2}^{'2}=y_{1}^{'2}$ ，又因为 $x_{1}^{'2}+y_{1}^{'2}=x_{2}^{'2}+y_{2}^{'2}=1$ ，

所以 $x_{1}^{2}+x_{2}^{2}=(\\sqrt{3}x_{1}^{\\prime})^{2}+(\\sqrt{3}x_{2}^{\\prime})^{2}=3(x_{1}^{\\prime})^{2}+3(y_{1}^{\\prime})^{2}=3,$

$$
y _ {1} ^ {2} + y _ {2} ^ {2} = (\\sqrt {2} y _ {1} ^ {\\prime}) ^ {2} + (\\sqrt {2} y _ {2} ^ {\\prime}) ^ {2} = 2 (x _ {2} ^ {\\prime}) ^ {2} + 2 (y _ {2} ^ {\\prime}) ^ {2} = 2.
$$

(2)由(1)得 $\\left|OP\\right|^{2}+\\left|OQ\\right|^{2}=(x_{1}^{2}+y_{1}^{2})+(x_{2}^{2}+y_{2}^{2})=5.$

因为 M 为线段 PQ 的中点，

所以 $10=2(|OP|^{2}+|OQ|^{2})=|PQ|^{2}+(2|OM|)^{2}\\geqslant4|PQ|\\cdot|OM|$ ,

即 $|PQ|\\cdot |OM|\\leqslant \\frac{5}{2}$ ，当且仅当 $|PQ| = 2|OM|$ 时，等号成立.

故 $|OM|\\cdot|PQ|$ 的最大值为 $\\frac{5}{2}$ .

(3)因为 $S_{\\triangle ODE}=S_{\\triangle ODG}=S_{\\triangle OEG}=\\frac{\\sqrt{6}}{2}$ ，所以 $S_{\\triangle O^{\\prime}D^{\\prime}E^{\\prime}}=S_{\\triangle O^{\\prime}D^{\\prime}G^{\\prime}}=S_{\\triangle O^{\\prime}E^{\\prime}G^{\\prime}}=\\frac{1}{2}$ ，所以 $\\angle D^{\\prime}O^{\\prime}E^{\\prime}=\\angle E^{\\prime}O^{\\prime}G^{\\prime}=\\angle D^{\\prime}O^{\\prime}G^{\\prime}=90^{\\circ}$ ，因此不存在满足题意的三角形.

评注 本题第(1)问利用伸缩变换改变斜率,使得 $O^{\\prime}P^{\\prime}\\perp O^{\\prime}Q^{\\prime}$ ,简化了运算;第(2)问属于三角形中线问题,利用平行四边形的性质或者阿波罗尼斯中线长定理可以快速解答;第(3)问在第(1)问的基础上,实现了秒杀.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-16-3",
    topicId: "topic-sec-3-16",
    title: `已知椭圆 E: x^2/a^2 + y^2/b^2 = 1 (a > b > 0) 的一个焦点与短轴的两个端点是正三`,
    content: `已知椭圆 $E: \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1 (a > b > 0)$ 的一个焦点与短轴的两个端点是正三角形的三个顶点，点 $P(\\sqrt{3}, \\frac{1}{2})$ 在椭圆 $E$ 上.
(1)求椭圆 E 的方程；

(2)设不过原点 $O$ 且斜率为 $\\frac{1}{2}$ 的直线 $l$ 与椭圆 $E$ 交于不同的两点 $A, B$ , 线段 $AB$ 的中点为 $M$ , 直线 $OM$ 与椭圆 $E$ 交于 $C, D$ , 证明: $|MA| \\cdot |MB| = |MC| \\cdot |MD|$ .`,
    preview: `已知椭圆 的一个焦点与短轴的两个端点是正三角形的三个顶点，点 P(√3, 1/2) 在椭圆 E 上. (1)求椭圆 E 的方程； (2)设不过原点 O 且斜率为`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-16-3-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)由已知可得 a=2b，又椭圆 $\\frac{x^{2}}{a^{2}}+\\frac{y^{2}}{b^{2}}=1(a>b>0)$ 过点 $P\\left(\\sqrt{3},\\frac{1}{2}\\right)$

故 $\\frac{3}{4b^{2}}+\\frac{1}{4b^{2}}=1$ ，解得 $b^{2}=1$ ，所以椭圆E的方程是 $\\frac{x^{2}}{4}+y^{2}=1$ .

(2)由垂径定理, 得 $k_{AB} \\cdot k_{CD} = -\\frac{1}{4}$ , 所以 $k_{CD} = -\\frac{1}{2}$ , 作伸缩变换 $\\varphi: \\begin{cases} x' = \\frac{x}{2}, \\\\ y' = y, \\end{cases}$ 如图 3-16-5 中的椭圆 $\\frac{x^2}{4} + y^2 = 1$ 变为如图 3-16-6 中的单位圆 $O': x'^2 + y'^2 = 1$ .

![](images/497f6667eb58f64a23ceb21e831012eb037bd7d66fd37d178fb7ceeaaff5690e.jpg)

图3-16-5

![](images/df1ac7ea75a8eae7738127c8186b57f0b815a9d0383d7d00c38bd02832724a6a.jpg)

图3-16-6

由伸缩变换的性质, 可知

$$
\\frac {| M ^ {\\prime} A ^ {\\prime} |}{| M A |} = \\frac {| M ^ {\\prime} B ^ {\\prime} |}{| M B |} = \\frac {\\sqrt {1 + 4 \\times \\left(\\frac {1}{2}\\right) ^ {2}}}{2 \\sqrt {1 + \\left(\\frac {1}{2}\\right) ^ {2}}}, \\frac {| M ^ {\\prime} C ^ {\\prime} |}{| M C |} = \\frac {| M ^ {\\prime} D ^ {\\prime} |}{| M D |} = \\frac {\\sqrt {1 + 4 \\times \\left(- \\frac {1}{2}\\right) ^ {2}}}{2 \\sqrt {1 + \\left(- \\frac {1}{2}\\right) ^ {2}}},
$$

所以 $\\frac{|M'A'|}{|MA|} = \\frac{|M'B'|}{|MB|} = \\frac{|M'C'|}{|MC|} = \\frac{|M'D'|}{|MD|}$ .

由相交弦定理, 得 $\\left|M^{\\prime}A^{\\prime}\\right|\\cdot\\left|M^{\\prime}B^{\\prime}\\right|=\\left|M^{\\prime}C^{\\prime}\\right|\\cdot\\left|M^{\\prime}D^{\\prime}\\right|$ ,

所以 $|MA|\\cdot|MB|=|MC|\\cdot|MD|$ .

评注 本题第(1)问属于常规计算;第(2)问使用垂径定理、伸缩变换的性质求得变换前后的弦长关系,再用圆幂定理快速解答.此题将椭圆中的弦长问题转化为圆中的弦长问题,借助圆的一些特殊性质来简化运算.

在伸缩变换的作用下,线段 AB 变为线段 $A^{\\prime}B^{\\prime}$ , 其长度 $|AB|$ 与 $|A^{\\prime}B^{\\prime}|$ 的关系如下:

$$
\\frac {| A ^ {\\prime} B ^ {\\prime} |}{| A B |} = \\frac {\\sqrt {1 + k ^ {\\prime 2}} \\cdot | x _ {A ^ {\\prime}} - x _ {B ^ {\\prime}} |}{\\sqrt {1 + k ^ {2}} \\cdot | x _ {A} - x _ {B} |} = \\frac {\\sqrt {1 + \\frac {a ^ {2}}{b ^ {2}} \\cdot k ^ {2}}}{a \\sqrt {1 + k ^ {2}}}.
$$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-3-16-4",
    topicId: "topic-sec-3-16",
    title: `如图3-16-7所示`,
    content: `如图3-16-7所示，椭圆 $\\frac{x^2}{a^2} +\\frac{y^2}{b^2} = 1(a > b > 0)$ 与过点 $A(2,0),B(0,1)$ 的直线有且只有一个公共点 $T$ ，且椭圆的离心率 $e = \\frac{\\sqrt{3}}{2}$
(1)求椭圆方程；

(2) 设 $F_{1}, F_{2}$ 分别为椭圆的左、右焦点, M 为线段 $AF_{2}$ 的中点, 求证: $\\angle ATM = \\angle AF_{1}T$ .

![](images/d771d12d87b263de63991a74a251b8aad3edb435da9f4fb13ea40d0cf981c60e.jpg)

图3-16-7

![](images/5b7482b71beac07c1057a8e2daaddc75557e39de2c18429e1d20efd4015a691b.jpg)

图3-16-8`,
    preview: `如图3-16-7所示，椭圆 与过点 A(2,0),B(0,1) 的直线有且只有一个公共点 T ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-3-16-4-sol-0",
        title: `解答`,
        method: "creative",
        steps: [],
        explanation: `(1)作伸缩变换 $\\varphi: \\left\\{ \\begin{array}{l} x' = \\frac{x}{a}, \\\\ y' = \\frac{y}{b}, \\end{array} \\right.$ 如图3-16-7中的椭圆上的点 $A, T, B$ 变为如图3-16-8中的单位圆 $O': x'^2 + y'^2 = 1$ 上的点 $A', T', B'$ ,

![](images/5b7482b71beac07c1057a8e2daaddc75557e39de2c18429e1d20efd4015a691b.jpg)

直线 $AB: \\frac{x}{2} + y = 1$ 变为直线 $A'B': \\frac{a}{2}x' + by' = 1$ .

由伸缩变换的性质, 可知直线 $A^{\\prime}B^{\\prime}$ 与圆 $O^{\\prime}$ 相切, 则 $\\frac{1}{\\sqrt{\\left(\\frac{a}{2}\\right)^{2}+b^{2}}} = 1$ , 即 $a^{2} + 4b^{2} = 4$ .

又因为 $\\frac{c}{a}=\\frac{\\sqrt{3}}{2}$ ，解得 $a^{2}=2,b^{2}=\\frac{1}{2}$ ，故椭圆的方程为 $\\frac{x^{2}}{2}+2y^{2}=1$ .

(2)由点 $A(2,0)$ , $B(0,1)$ 变换可得 $A'(\\sqrt{2},0)$ , $B'(0,\\sqrt{2})$ .

因为 $|O'A'|=|O'B'|,O'T'\\perp A'B'$ ，所以 $|A'T'|=\\frac{1}{2}|A'B'|$ .

由伸缩变换的性质, 可知 $\\left|AT\\right|=\\frac{1}{2}\\left|AB\\right|=\\frac{\\sqrt{5}}{2}$ ,

从而 $|AF_{2}| = 2 - \\frac{\\sqrt{6}}{2}, |AM| = 1 - \\frac{\\sqrt{6}}{4}, |AF_{1}| = 2 + \\frac{\\sqrt{6}}{2}$ ,

$|AT|^{2}=|AF_{1}|\\cdot|AM|$ ，即 $\\frac{|AT|}{|AF_{1}|}=\\frac{|AM|}{|AT|}$ .

又 $\\angle TAF_{1}=\\angle MAT$ ，从而 $\\triangle TAF_{1}\\sim\\triangle MAT$ ，故 $\\angle ATM=\\angle AF_{1}T$ .`,
      },
    ],
    tags: [],
  },
]
