import type { Problem } from "./types"

export const problems_chexamples: Problem[] = [
  {
    id: "prob-sec-5-1-1",
    topicId: "topic-sec-5-1",
    title: `2022 全国Ⅰ：指数对数三数大小比较`,
    content: `(2022年高考全国卷Ⅰ第7题)
设 $a=0.1e^{0.1}, b=\\frac{1}{9}, c=-\\ln0.9$ ，则（）

A. $a < b < c$

B. $c <   b <   a$

C. $c <   a <   b$

D. $a <   c <   b$`,
    preview: `设 a=0.1e^0.1, b=1/9, c=-0.9 ，则（） A. a < b < c B. c < b < a C. c < a < b D. a < c`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-5-1-1-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `直接利用本书“3.14 泰勒展开式的应用”中的结论, 可得

$$
\\mathrm{e} ^ {x} \\approx 1 + x + \\frac {x ^ {2}}{2}, \\ln (1 + x) \\approx x - \\frac {x ^ {2}}{2} + \\frac {x ^ {3}}{3},
$$

算得 $a=0.1e^{0.1}\\approx0.1105, b=\\frac{1}{9}\\approx0.1111,$

$$
c = - \\ln (1 - 0. 1) \\approx - \\left(- 0. 1 - \\frac {0 . 0 1}{2} - \\frac {0 . 0 0 1}{3}\\right) = 0. 1 0 5 3,
$$

所以 c < a < b，故选 C.`,
      },
      {
        id: "prob-sec-5-1-1-sol-1",
        title: `解法2`,
        method: "creative",
        steps: [],
        explanation: `高妙解法二
:构造函数.

设 $f(x) = \\ln (1 + x) - x (x > -1)$ ，因为 $f'(x) = \\frac{1}{1 + x} - 1 = -\\frac{x}{1 + x}$

当 $x \\in (-1,0)$ 时， $f'(x) > 0$ ，当 $x \\in (0, +\\infty)$ 时 $f'(x) < 0$

所以函数 $f(x)=\\ln(1+x)-x$ 在 $(0,+\\infty)$ 上单调递减，在 $(-1,0)$ 上单调递增，

所以 $f\\left(\\frac{1}{9}\\right)<f(0)=0$ , 所以 $\\ln\\frac{10}{9}-\\frac{1}{9}<0$ , 故 $\\frac{1}{9}>\\ln\\frac{10}{9}=-\\ln0.9$ , 即 b>c,

$f\\left(-\\frac{1}{10}\\right) < f(0) = 0$ ，所以 $\\ln \\frac{9}{10} +\\frac{1}{10} < 0$ ，故 $\\frac{9}{10} <  \\mathrm{e}^{-\\frac{1}{10}}$ ，所以 $\\frac{1}{10}\\mathrm{e}^{\\frac{1}{10}} <   \\frac{1}{9},$

故 $a < b$ .

设 $g(x) = xe^{x} + \\ln (1 - x)(0 < x < 1)$ ,

则 $g'(x)=(x+1)\\mathrm{e}^{x}+\\frac{1}{x-1}=\\frac{(x^{2}-1)\\mathrm{e}^{x}+1}{x-1}$ ,

令 $h(x) = \\mathrm{e}^{x}(x^{2} - 1) + 1, h^{\\prime}(x) = \\mathrm{e}^{x}(x^{2} + 2x - 1)$ ,

当 $0 < x < \\sqrt{2} - 1$ 时， $h'(x) < 0$

函数 $h(x)=\\mathrm{e}^{x}(x^{2}-1)+1$ 单调递减，

当 $\\sqrt{2}-1<x<1$ 时, $h'(x)>0$ ,

函数 $h(x)=\\mathrm{e}^{x}(x^{2}-1)+1$ 单调递增，

又 $h(0)=0$ ，所以当 $0<x<\\sqrt{2}-1$ 时， $h(x)<0$ ，

所以当 $0 < x < \\sqrt{2} - 1$ 时， $g'(x) > 0$ ，函数 $g(x) = xe^{x} + \\ln(1 - x)$ 单调递增，

所以 $g(0.1)>g(0)=0$ ，即 $0.1e^{0.1}>-\\ln0.9$ ，所以 a>c，故选 C.`,
      },
      {
        id: "prob-sec-5-1-1-sol-2",
        title: `解法3`,
        method: "geometric",
        steps: [],
        explanation: `高妙解法三
: 数形结合.

设 $f(x) = x\\mathrm{e}^{x},g(x) = \\frac{x}{1 - x},h(x) = -\\ln (1 - x),x\\in \\left(0,\\frac{1}{5}\\right),$

则 $a=f(0.1)$ , $b=g(0.1)$ , $c=h(0.1)$ ,

注意到 $f(0)=g(0)=h(0)=0$ ，即三个函数图像共起点.

如图 5-1-1 所示比较增长快慢即可(导数的几何意义).

![](images/c577777eab9863d51e4ac3a1b6dfad4c7d658611169d7b9baa0e6aec3180f558.jpg)

$$
f ^ {\\prime} (x) = \\mathrm{e} ^ {x} (1 + x) = \\frac {\\mathrm{e} ^ {x} (1 - x ^ {2})}{1 - x}, g ^ {\\prime} (x) = \\frac {1}{(1 - x) ^ {2}},
$$

$$
h ^ {\\prime} (x) = \\frac {1}{1 - x}.
$$`,
      },
      {
        id: "prob-sec-5-1-1-sol-4",
        title: `解法5`,
        method: "standard",
        steps: [],
        explanation: `高妙解法四
: $b-c=\\frac{1}{9}-\\ln\\frac{10}{9}=\\frac{1}{9}-\\ln\\left(1+\\frac{1}{9}\\right)$ ,

由切线不等式 $\\ln(1+x)\\leqslant x$ 得: $\\ln\\left(1+\\frac{1}{9}\\right)<\\frac{1}{9}$ ,

所以 b-c>0，所以 b>c.

又 $a - b = 0.1\\mathrm{e}^{0.1} - \\frac{1}{9} = 0.1\\mathrm{e}^{0.1} - \\frac{0.1}{0.9} = 0.1\\mathrm{e}^{0.1} - \\frac{0.1}{1 - 0.1} = 0.1\\left(\\mathrm{e}^{0.1} - \\frac{1}{1 - 0.1}\\right)$

![](images/c577777eab9863d51e4ac3a1b6dfad4c7d658611169d7b9baa0e6aec3180f558.jpg)
图5-1-1

当 $x < 1$ 时， $\\mathrm{e}^x < \\frac{1}{1 - x}$ ，所以 $\\mathrm{e}^{0.1} < \\frac{1}{1 - 0.1}$ ，所以 $a - b < 0$ ，所以 $a < b$ .

$$
a - c = 0. 1 \\mathrm{e} ^ {0. 1} + \\ln 0. 9 = 0. 1 \\mathrm{e} ^ {0. 1} + \\ln (1 - 0. 1),
$$

引入函数 $f(x)=xe^{x}+\\ln(1-x)(0<x\\leqslant0.1)$ ,

所以 $f'(x)=(x+1)\\mathrm{e}^{x}+\\frac{1}{x-1}=\\frac{(x^{2}-1)\\mathrm{e}^{x}+1}{x-1}$ ,

令 $r(x) = (x^{2} - 1)\\mathrm{e}^{x} + 1$ ，则 $r^{\\prime}(x) = (x^{2} - 1 + 2x)\\mathrm{e}^{x} <   0(0 <   x\\leqslant 0.1),$

所以 $r(x)$ 在 $(0,0.1]$ 单调递减，所以 $r(x)<r(0)=0$ ，所以 $f'(x)>0$ ，

所以 $f(x)$ 在 $(0,0.1]$ 单调递增，故 $f(x) > f(0) = 0$ ，

即 $f(x)=xe^{x}+\\ln(1-x)>0$ ，所以 a>c 。综上，b>a>c ，故选 C .`,
      },
      {
        id: "prob-sec-5-1-1-sol-5",
        title: `解法6`,
        method: "standard",
        steps: [],
        explanation: `高妙解法五
: 令 x=0.1, 则 $a=x\\mathrm{e}^{x}, b=\\frac{1}{9}=\\frac{0.1}{0.9}=\\frac{0.1}{1-0.1}=\\frac{x}{1-x}$ ,

$$
c = - \\ln 0. 9 = - \\ln (1 - 0. 1) = - \\ln (1 - x).
$$

于是问题转化为比较 $a = x e^{x}$ , $b = \\frac{x}{1 - x}$ , $c = -\\ln(1 - x) (0 < x < 1)$ 的大小.

由 $e^{x}>1+x\\Rightarrow e^{-x}>1-x\\Rightarrow e^{x}<\\frac{1}{1-x}(0<x<1)$ ，所以 $xe^{x}<\\frac{x}{1-x}$ ，所以 a<b；

由 $\\ln x > \\frac{x-1}{x}$ ，得 $\\ln(1-x) > \\frac{1-x-1}{1-x} = -\\frac{x}{1-x}$ ，即 $-\\ln(1-x) < \\frac{x}{1-x}$ ，所以 c < b；

比较 a, c 大小的方法同`,
      },
      {
        id: "prob-sec-5-1-1-sol-6",
        title: `解法四`,
        method: "standard",
        steps: [],
        explanation: `.

综上， $b > a > c$ ，故选C.`,
      },
    ],
    tags: [],
    source: `2022年高考全国卷Ⅰ第7题`,
  },
  {
    id: "prob-sec-5-1-2",
    topicId: "topic-sec-5-1",
    title: `2022 全国Ⅱ：函数方程求有限和`,
    content: `(2022 年高考全国卷Ⅱ第 8 题)
已知函数 $f(x)$ 的定义域为 $\\mathbf{R}$ ，且 $f(x + y) + f(x - y) = f(x)f(y), f(1) = 1$ ，则 $\\sum_{k=1}^{22} f(k) =$ （）

A. -3

B. -2

C. 0

D. 1`,
    preview: `已知函数 f(x) 的定义域为 R ，且 ，则 _k=1^22 f(k) = （） A. -3 B. -2 C. 0 D. 1`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-5-1-2-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `已知 $f(1)=1$ ，令 y=1，则有 $f(x+1)=f(x)-f(x-1)$ ，

令 y=0，则有 $2f(x)=f(x)f(0)$ ，显然 $f(0)=2$ ，

因为 $f(1)=1$ ，所以 $f(2)=-1, f(3)=-2, f(4)=-1, f(5)=1$ ，

$$
f (6) = 2, f (7) = 1, f (8) = - 1, f (9) = - 2,
$$

猜测 $f(n)$ 是以 6 为周期的数列，

故 $\\sum_{k=1}^{22} f(k) = f(1) + f(2) + f(3) + f(4) = -3$ ，故答案选 A.`,
      },
      {
        id: "prob-sec-5-1-2-sol-1",
        title: `解法2`,
        method: "standard",
        steps: [],
        explanation: `高妙解法二
: 令 y=1, 则有 $f(x+1)=f(x)-f(x-1)$ ,

即有 $f(x+2)=f(x+1)-f(x)$ 和 $f(x+3)=f(x+2)-f(x+1)$ ,

消元可得 $f(x+3)=-f(x)$ ，故 $f(x)$ 是以 6 为周期的函数，后面计算同`,
      },
    ],
    tags: [],
    source: `2022 年高考全国卷Ⅱ第 8 题`,
  },
  {
    id: "prob-sec-5-1-3",
    topicId: "topic-sec-5-1",
    title: `2022 全国乙理：函数对称关系求和`,
    content: `(2022年高考全国乙卷理科第12题)
已知函数 $f(x), g(x)$ 的定义域为 $\\mathbf{R}$ ，且 $f(x) + g(2 - x) = 5, g(x) - f(x - 4) = 7$ ，若 $y = g(x)$ 的图像关于直线 $x = 2$ 对称， $g(2) = 4$ ，则 $\\sum_{k=1}^{22} f(k) =$ （）

A. -21

B. -22

C. -23

D. -24`,
    preview: `已知函数 f(x), g(x) 的定义域为 R ，且 ，若 y = g(x) 的图像关于直线 x = 2 对称， g(2) = 4 ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-5-1-3-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `已知 $f(x)+g(2-x)=5$ ，可得 $f(x-4)+g(6-x)=5$ ，

又因为 $g(x)-f(x-4)=7$ ，两式相加得 $g(x)+g(6-x)=12$ ，

所以函数 $g(x)$ 的图像关于点 $(3,6)$ 对称，

又因为 $y=g(x)$ 的图像关于直线 x=2 对称，

所以 $g(x)$ 是以 4 为周期的周期函数, 所以 $g(3)=6$ ,

因为 $g(2)=4$ ，可得 $g(4)=8$ ， $g(1)=6$ ，

由 $f(x)+g(2-x)=5$ , 可得 $f(1)=-1, f(2)=-3, f(3)=-1, f(4)=1$

所以 $\\sum_{k=1}^{22}f(k)=-20+f(1)+f(2)=-24$ , 故选 D.`,
      },
    ],
    tags: [],
    source: `2022年高考全国乙卷理科第12题`,
  },
  {
    id: "prob-sec-5-1-4",
    topicId: "topic-sec-5-1",
    title: `2022 全国Ⅰ：函数与导函数偶性判断`,
    content: `(2022 高考全国卷Ⅰ第 12 题)
已知函数 $f(x)$ 及其导函数 $f'(x)$ 的定义域均为 $\\mathbf{R}$ ，记 $g(x) = f'(x)$ ，若 $f\\left(\\frac{3}{2} - 2x\\right)$ ， $g(2 + x)$ 均为偶函数，则 （）

A. $f(0) = 0$

B. $g\\left(-\\frac{1}{2}\\right)=0$

C. $f(-1) = f(4)$

D. $g(-1) = g(2)$`,
    preview: `已知函数 f(x) 及其导函数 f'(x) 的定义域均为 R ，记 g(x) = f'(x) ，若 f(3/2 - 2x) ， g(2 + x) 均为偶函数，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-5-1-4-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `因为 $f\\left(\\frac{3}{2}-2x\\right)$ , $g(2+x)$ 均为偶函数,

所以 $f\\left(\\frac{3}{2} - 2x\\right) = f\\left(\\frac{3}{2} + 2x\\right)$ , 即 $f\\left(\\frac{3}{2} - x\\right) = f\\left(\\frac{3}{2} + x\\right)$ ,

$$
g (2 + x) = g (2 - x),
$$

所以 $f(3-x)=f(x)$ , $g(4-x)=g(x)$ ，则 $f(-1)=f(4)$ ，故 C 正确；

函数 $f(x)$ , $g(x)$ 的图像分别关于直线 $x=\\frac{3}{2}$ , x=2 对称，

又 $g(x) = f'(x)$ ，且函数 $f(x)$ 可导，所以 $g\\left(\\frac{3}{2}\\right) = 0, g(3 - x) = -g(x)$ ，

所以 $g(4-x)=g(x)=-g(3-x)$ ，所以 $g(x+2)=-g(x+1)=g(x)$ ，

所以 $g\\left(-\\frac{1}{2}\\right)=g\\left(\\frac{3}{2}\\right)=0, g(-1)=g(1)=-g(2)$ ，故 B 正确，D 错误；

若函数 $f(x)$ 满足题设条件，则函数 $f(x) + c$ (c为常数)也满足题设条件，所以无法确定 $f(x)$ 的函数值，故A错误.

故选 BC.`,
      },
    ],
    tags: [],
    source: `2022 高考全国卷Ⅰ第 12 题`,
  },
  {
    id: "prob-sec-5-1-5",
    topicId: "topic-sec-5-1",
    title: `2022 全国甲：三角函数与常数大小比较`,
    content: `(2022 年高考全国甲卷第 12 题)
已知 $a=\\frac{31}{32}, b=\\cos\\frac{1}{4}, c=4\\sin\\frac{1}{4}$ ，则（）

A. $c > b > a$

B. $b > a > c$

C. $a > b > c$

D. $a > c > b$`,
    preview: `已知 a=31/32, b=1/4, c=41/4 ，则（） A. c > b > a B. b > a > c C. a > b > c D. a > c >`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-5-1-5-sol-0",
        title: `解法1`,
        method: "creative",
        steps: [],
        explanation: `构造函数.

$\\frac{c}{b}=4\\tan\\frac{1}{4}$ ，当 $x\\in\\left(0,\\frac{\\pi}{2}\\right)$ 时， $\\sin x<x<\\tan x$ ，所以 $\\tan\\frac{1}{4}>\\frac{1}{4}$ ，即 $\\frac{c}{b}>1$ ，所以c>b.

设 $f(x) = \\cos x + \\frac{1}{2} x^2 - 1, x \\in (0, +\\infty)$ ，则 $f'(x) = -\\sin x + x > 0$ ，所以 $f(x)$ 在区间 $(0, +\\infty)$ 单调递增，则 $f\\left(\\frac{1}{4}\\right) > f(0) = 0$ ，所以 $\\cos \\frac{1}{4} - \\frac{31}{32} > 0$ ，所以 $b > a$ .

所以 c > b > a，故选 A.`,
      },
      {
        id: "prob-sec-5-1-5-sol-1",
        title: `解法2`,
        method: "standard",
        steps: [],
        explanation: `高妙解法二
: 利用三角不等式.

当 $x \\in \\left(0, \\frac{\\pi}{2}\\right)$ 时， $\\sin x < x < \\tan x$ ，

$\\frac{c}{b} = \\frac{4\\sin\\frac{1}{4}}{\\cos\\frac{1}{4}} = 4\\tan \\frac{1}{4} > 1$ ，则 $c > b.$

$b=\\cos\\frac{1}{4}=1-2\\sin^{2}\\frac{1}{8}>1-2\\times\\left(\\frac{1}{8}\\right)^{2}=\\frac{31}{32}$ ，则b>a.

综上 c > b > a，选 A.`,
      },
      {
        id: "prob-sec-5-1-5-sol-2",
        title: `解法3`,
        method: "standard",
        steps: [],
        explanation: `高妙解法三
: 利用泰勒展开式.

$$
\\sin x = x - \\frac {x ^ {3}}{3 !} + \\frac {x ^ {5}}{5 !} - \\frac {x ^ {7}}{7 !} + \\dots ,
$$

$$
\\cos x = 1 - \\frac {x ^ {2}}{2 !} + \\frac {x ^ {4}}{4 !} - \\frac {x ^ {6}}{6 !} + \\dots ,
$$

则 $c=4\\sin\\frac{1}{4}=4\\left(\\frac{1}{4}-\\frac{1}{6}\\left(\\frac{1}{4}\\right)^{3}+\\cdots\\right)=\\frac{95}{96}+\\cdots,$

$b=\\cos\\frac{1}{4}=\\frac{31}{32}+\\cdots$ , 则 $a<b, b<c \\Rightarrow a<b<c.$`,
      },
    ],
    tags: [],
    source: `2022 年高考全国甲卷第 12 题`,
  },
  {
    id: "prob-sec-5-1-6",
    topicId: "topic-sec-5-1",
    title: `2022 浙江：递推数列第 100 项估计`,
    content: `(2022 年高考浙江卷第 10 题)
已知数列 $\\{a_{n}\\}$ 满足 $a_{1}=1,a_{n+1}=a_{n}-\\frac{1}{3}a_{n}^{2}(n\\in\\mathbf{Z}^{+})$ ，则()

A. $2 <   100a_{100} <   \\frac{5}{2}$

B. $\\frac{5}{2} < 100a_{100} < 3$

C. $3 <   100a_{100} <   \\frac{7}{2}$

D. $\\frac{7}{2} < 100a_{100} < 4$`,
    preview: `已知数列 满足 a_1=1,a_n+1=a_n-1/3a_n^2(n^+) ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-5-1-6-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `由 $a_{1}=1$ , 得 $a_{2}=\\frac{2}{3}\\in(0,1)$ , 依次类推可得 $a_{n}\\in(0,1)$ ,

由题意， $a_{n + 1} = a_n\\left(1 - \\frac{1}{3} a_n\\right)$ ，即 $\\frac{1}{a_{n + 1}} = \\frac{3}{a_n(3 - a_n)} = \\frac{1}{a_n} +\\frac{1}{3 - a_n},$

所以 $\\frac{1}{a_{n + 1}} -\\frac{1}{a_n} = \\frac{1}{3 - a_n} >\\frac{1}{3},$

即 $\\frac{1}{a_{2}}-\\frac{1}{a_{1}}>$ $\\frac{1}{3},\\frac{1}{a_{3}}-\\frac{1}{a_{2}}>$ $\\frac{1}{3},\\frac{1}{a_{4}}-\\frac{1}{a_{3}}>$ $\\frac{1}{3},\\cdots,\\frac{1}{a_{n}}-\\frac{1}{a_{n-1}}>$ $\\frac{1}{3},n\\geqslant2$

累加可得 $\\frac{1}{a_{n}}-1>\\frac{1}{3}(n-1)$ ，即 $\\frac{1}{a_{n}}>\\frac{1}{3}(n+2),n\\geqslant2$

所以 $a_{n}<\\frac{3}{n+2}, n\\geqslant2$ , 即 $a_{100}<\\frac{1}{34}, 100a_{100}<\\frac{100}{34}<3$

又 $\\frac{1}{a_{n + 1}} -\\frac{1}{a_n} = \\frac{1}{3 - a_n} <  \\frac{1}{3 - \\frac{3}{n + 2}} = \\frac{1}{3}\\left(1 + \\frac{1}{n + 1}\\right),n\\geqslant 2,$

所以 $\\frac{1}{a_2} -\\frac{1}{a_1} = \\frac{1}{3}\\left(1 + \\frac{1}{2}\\right),\\frac{1}{a_3} -\\frac{1}{a_2} <  \\frac{1}{3}\\left(1 + \\frac{1}{3}\\right),$

$$
\\frac {1}{a _ {4}} - \\frac {1}{a _ {3}} <   \\frac {1}{3} \\left(1 + \\frac {1}{4}\\right), \\dots , \\frac {1}{a _ {n}} - \\frac {1}{a _ {n - 1}} <   \\frac {1}{3} \\left(1 + \\frac {1}{n}\\right), n \\geqslant 3,
$$

累加可得 $\\frac{1}{a_{n}}-1<\\frac{1}{3}(n-1)+\\frac{1}{3}\\left(\\frac{1}{2}+\\frac{1}{3}+\\cdots+\\frac{1}{n}\\right),n\\geqslant3,$

所以 $\\frac{1}{a_{100}} - 1 <   33 + \\frac{1}{3}\\left(\\frac{1}{2} +\\frac{1}{3} +\\dots +\\frac{1}{99}\\right) <   33 + \\frac{1}{3}\\left(\\frac{1}{2}\\times 4 + \\frac{1}{6}\\times 94\\right) <   39,$

即 $\\frac{1}{a_{100}} < 40$ ，所以 $a_{100} > \\frac{1}{40}$ ，即 $100a_{100} > \\frac{5}{2}$

所以 $\\frac{5}{2} < 100a_{100} < 3.$`,
      },
      {
        id: "prob-sec-5-1-6-sol-1",
        title: `解法2`,
        method: "standard",
        steps: [],
        explanation: `高妙解法二
： $a_{n} - a_{n + 1} = \\frac{1}{3} a_{n}^{2} > 0$ ，所以 $a_{n} > a_{n + 1}$ ，所以 $a_{n}\\leqslant a_{1} = 1.$

又 $a_{n + 1} = a_n\\left(1 - \\frac{1}{3} a_n\\right)$ ，所以 $a_{n}$ 与 $a_{n + 1}$ 同号，故 $0 <   a_{n}\\leqslant 1$

所以 $a_{n} - a_{n + 1} = \\frac{1}{3} a_{n}^{2} > \\frac{1}{3} a_{n}a_{n + 1}$ ，即 $\\frac{1}{a_{n + 1}} -\\frac{1}{a_n} >\\frac{1}{3},$

所以 $\\frac{1}{a_{100}} >\\frac{1}{a_2} +(100 - 2)\\times \\frac{1}{3} = \\frac{3}{2} +\\frac{98}{3} = \\frac{205}{6}$ ，所以 $a_{100} <   \\frac{6}{205}$ ，所以 $100a_{100} <   \\frac{600}{205} < 3.$

于是 $a_{n + 1} = a_n - \\frac{1}{3} a_n^2\\Rightarrow 3a_{n + 1} = 3a_n - a_n^2 = a_n(3 - a_n)$

所以 $\\frac{1}{3a_{n + 1}} = \\frac{1}{a_n(3 - a_n)} = \\frac{1}{3}\\left(\\frac{1}{a_n} +\\frac{1}{3 - a_n}\\right)$ ，即 $\\frac{1}{a_{n + 1}} -\\frac{1}{a_n} = \\frac{1}{3 - a_n}.$

所以 $\\frac{1}{a_{100}} = \\frac{1}{a_1} +\\frac{1}{3 - a_1} +\\frac{1}{3 - a_2} +\\dots +\\frac{1}{3 - a_{99}} <   \\frac{1}{a_1} +\\frac{1}{3 - a_1} +\\frac{1}{3 - a_2} +\\frac{1}{3 - a_3}\\times 97,$

而 $a_1 = 1, a_2 = a_1 - \\frac{1}{3} a_1^2 = \\frac{2}{3}, a_3 = \\frac{14}{27}$ , 所以 $3 - a_3 = \\frac{67}{27}$ .

所以 $\\frac{1}{a_{100}} < 1 + \\frac{1}{2} +\\frac{3}{7} +\\frac{27}{67}\\times 97.$

所以 $a_{100} > \\frac{14 \\times 67}{27(67 + 97 \\times 14)} \\approx 0.024$ ，所以 $100a_{100} > 2.4$ ，故选 B.`,
      },
      {
        id: "prob-sec-5-1-6-sol-2",
        title: `解法3`,
        method: "standard",
        steps: [],
        explanation: `高妙解法三
:裂项放缩.

$a_{n} - a_{n + 1} = \\frac{1}{3} a_{n}^{2} > 0$ ，所以 $a_{n} > a_{n + 1}$ ，所以 $a_{n}\\leqslant a_{1} = 1.$

又 $a_{n + 1} = a_n\\left(1 - \\frac{1}{3} a_n\\right)$ ，所以 $a_{n}$ 与 $a_{n + 1}$ 同号，故 $0 <   a_{n}\\leqslant 1$

所以 $a_{n} - a_{n + 1} = \\frac{1}{3} a_{n}^{2} > \\frac{1}{3} a_{n}a_{n + 1}$ ，即 $\\frac{1}{a_{n + 1}} -\\frac{1}{a_n} >\\frac{1}{3},$

所以 $\\frac{1}{a_n} >\\frac{1}{a_1} +(n - 1)\\times \\frac{1}{3} = \\frac{n + 2}{2}$ ，所以 $a_{n} <   \\frac{3}{n + 2}$ ，所以 $100a_{100} <   \\frac{300}{102} < 3.$

又 $a_{n + 1} = a_n - \\frac{1}{3} a_n^2\\Rightarrow 3a_{n + 1} = 3a_n - a_n^2 = a_n(3 - a_n),$

所以 $\\frac{1}{3a_{n + 1}} = \\frac{1}{a_n(3 - a_n)} = \\frac{1}{3}\\left(\\frac{1}{a_n} +\\frac{1}{3 - a_n}\\right)$ ，即 $\\frac{1}{a_{n + 1}} -\\frac{1}{a_n} = \\frac{1}{3 - a_n},$

即 $\\frac{1}{a_{n + 1}} -\\frac{1}{a_n} = \\frac{1}{3 - a_n} <   \\frac{1}{3 - \\frac{3}{n + 2}} = \\frac{n + 2}{3n + 3} = \\frac{1}{3}\\times \\left(1 + \\frac{1}{n + 1}\\right).$

思路一：

$$
\\frac {1}{a _ {1 0 0}} - \\frac {1}{a _ {1}} <   \\frac {9 9}{3} + \\frac {1}{3} \\left(\\frac {1}{1 0 0} + \\frac {1}{9 9} + \\dots + \\frac {1}{2}\\right) <   \\frac {9 9}{3} + \\frac {1}{3} \\int_ {1} ^ {1 0 0} \\frac {1}{x} \\mathrm{d} x = \\frac {9 9}{3} + \\frac {1}{3} \\ln 1 0 0.
$$

所以 $\\frac{1}{a_{100}}<\\frac{102+\\ln100}{3}\\Rightarrow100a_{100}>\\frac{300}{102+\\ln100}>\\frac{300}{110}>\\frac{5}{2}.$

思路二：

又 $\\frac{1}{n + 1} < \\ln \\left(1 + \\frac{1}{n}\\right) < \\frac{1}{n},$

所以 $\\frac{1}{a_n} -\\frac{1}{a_1}\\leqslant \\frac{1}{3}\\left(1 + \\frac{1}{n}\\right) + \\frac{1}{3}\\left(1 + \\frac{1}{n - 1}\\right) + \\dots +\\frac{1}{3}\\left(1 + \\frac{1}{2}\\right)$

$$
\\begin{array}{l} = \\frac {n - 1}{3} + \\frac {1}{3} \\left(\\frac {1}{2} + \\frac {1}{3} + \\dots + \\frac {1}{n}\\right) \\\\ <   \\frac {n - 1}{3} + \\frac {1}{3} \\left(\\ln 2 + \\ln \\frac {3}{2} + \\dots + \\ln \\frac {n}{n - 1}\\right) = \\frac {n - 1 + \\ln n}{3}. \\\\ \\end{array}
$$

即 $\\frac{1}{a_{n}}\\leqslant\\frac{n+2+\\ln n}{3}$ ，所以 $\\frac{1}{a_{100}}<\\frac{102+\\ln100}{3}\\Rightarrow100a_{100}>\\frac{300}{102+\\ln100}>\\frac{300}{110}>\\frac{5}{2}$ .`,
      },
    ],
    tags: [],
    source: `2022 年高考浙江卷第 10 题`,
  },
  {
    id: "prob-sec-5-1-7",
    topicId: "topic-sec-5-1",
    title: `2022 全国Ⅱ：二次约束下的代数判断`,
    content: `(2022 年高考全国卷Ⅱ第 12 题)
对任意 $x, y, x^2 + y^2 - xy = 1$ ，则 （）

A. $x + y \\leqslant 1$

B. $x + y \\geqslant -2$

C. $x^{2} + y^{2}\\leqslant 2$

D. \${x}^{2} + {y}^{2} \\geq  1$`,
    preview: `对任意 x, y, x^2 + y^2 - xy = 1 ，则 （） A. x + y ≤ 1 B. x + y ≥ -2 C. x^2`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-5-1-7-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `将 $x^{2} + y^{2} - xy = 1$ 配方, 得 $(x + y)^{2} - 1 = 3xy \\leqslant 3\\left(\\frac{x + y}{2}\\right)^{2}$ ,

解得 $-2\\leqslant x+y\\leqslant2$ ，当且仅当x=y=-1时， $x+y=-2$ ，

当且仅当 x=y=1 时, $x+y=2$ , 所以 A 错误, B 正确.

由 $x^{2} + y^{2} - xy = 1$ 可变形为 $(x^{2} + y^{2}) - 1 = xy\\leqslant \\frac{x^{2} + y^{2}}{2}$ ，解得 $x^{2} + y^{2}\\leqslant 2,$

当且仅当 $x=y=\\pm1$ 时取等号, 所以 C 正确.

又由 $x^{2} + y^{2} - xy = 1$ ，配方得 $\\left(x - \\frac{y}{2}\\right)^{2} + \\frac{3}{4} y^{2} = 1,$

设 $x - \\frac{y}{2} = \\cos \\theta, \\frac{\\sqrt{3}}{2} y = \\sin \\theta$ ，则 $x = \\cos \\theta + \\frac{1}{\\sqrt{3}} \\sin \\theta, y = \\frac{2}{\\sqrt{3}} \\sin \\theta,$

因此 $x^{2} + y^{2} = \\cos^{2}\\theta +\\frac{5}{3}\\sin^{2}\\theta +\\frac{2}{\\sqrt{3}}\\sin^{2}\\theta +\\frac{2}{\\sqrt{3}}\\sin \\theta \\cos \\theta$

$$
= 1 + \\frac {1}{\\sqrt {3}} \\sin 2 \\theta - \\frac {1}{3} \\cos 2 \\theta + \\frac {1}{3} = \\frac {4}{3} + \\frac {2}{3} \\sin \\left(2 \\theta - \\frac {\\pi}{6}\\right) \\in \\left[ \\frac {2}{3}, 2 \\right],
$$

当 $x = \\frac{\\sqrt{3}}{3}, y = -\\frac{\\sqrt{3}}{3}$ 时满足等式，但是 $x^{2} + y^{2} \\geqslant 1$ 不成立，所以D错误.

综上可知选 BC.`,
      },
      {
        id: "prob-sec-5-1-7-sol-1",
        title: `解法2`,
        method: "standard",
        steps: [],
        explanation: `高妙解法二
: 易得 $\\left|xy\\right|\\leqslant\\frac{x^{2}+y^{2}}{2}$ ,

所以 $-\\frac{x^2 + y^2}{2} \\leqslant -xy \\leqslant \\frac{x^2 + y^2}{2}$ ,

由此得 $\\frac{x^2 + y^2}{2} \\leqslant x^2 + y^2 - xy \\leqslant \\frac{3(x^2 + y^2)}{2}$ ,

又 $x^{2} + y^{2} - xy = 1$

所以 $\\frac{2}{3} \\leqslant x^2 + y^2 \\leqslant 2$ ，当且仅当 $x = y = \\pm 1$ 时，不等式右边取等号，当 $x = y = \\pm \\frac{\\sqrt{3}}{3}$ 时，不等式左边取等号.

$-2 \\leqslant x + y \\leqslant 2$ 的解法同, 故选 BC.`,
      },
    ],
    tags: [],
    source: `2022 年高考全国卷Ⅱ第 12 题`,
  },
  {
    id: "prob-sec-5-1-8",
    topicId: "topic-sec-5-1",
    title: `2022 全国Ⅰ：椭圆焦点弦与三角形周长`,
    content: `(2022 年高考全国卷Ⅰ第 16 题)
已知椭圆 $C: \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1 (a > b > 0)$ , $C$ 的上顶点为 $A$ , 两个焦点为 $F_1, F_2$ , 离心率为 $\\frac{1}{2}$ . 过 $F_1$ 且垂直于 $AF_2$ 的直线与 $C$ 交于 $D, E$ 两点, $|DE| = 6$ , 则 $\\triangle ADE$ 的周长是 \\_\\_\\_\\_.`,
    preview: `已知椭圆 , C 的上顶点为 A , 两个焦点为 F_1, F_2 , 离心率为 1/2 . 过 F_1 且垂直于 AF_2 的直线与 C 交于 D, E 两点`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-5-1-8-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `如图5-1-2所示,由离心率 $e=\\frac{c}{a}=\\frac{1}{2}$ ,得a=2c,①

即 $AF_{2}=2OF_{2}$ ,

所以 $\\angle AF_{2}O=\\frac{\\pi}{3}$ ，所以 $\\triangle AF_{1}F_{2}$ 为正三角形，

由题知直线 DE 的斜率为 $\\frac{\\sqrt{3}}{3}$ ，倾斜角 $\\theta=30^{\\circ}$ ，

由椭圆的焦点弦长公式得 $|DE| = \\frac{2ab^2}{a^2 - c^2\\cos^2\\theta} = 6,$ ②

由①②及 $c^2 + b^2 = a^2$ 得 $a = \\frac{13}{4}$ .

![](images/720c3f32960c27e6cb4d073c737a442a445d10baf9aea8b068e5a3726e106ef7.jpg)

图5-1-2

因为 DE 为线段 $AF_{2}$ 的垂直平分线, 根据对称性, $AD = DF_{2}$ , $AE = EF_{2}$ ,

所以 $\\triangle ADE$ 的周长等于 $\\triangle F_{2}DE$ 的周长,所以 $\\triangle F_{2}DE$ 周长为

$$
\\begin{array}{l} | D F _ {2} | + | E F _ {2} | + | D E | = | D F _ {2} | + | E F _ {2} | + | D F _ {1} | + | E F _ {1} | \\\\ = | D F _ {1} | + | D F _ {2} | + | E F _ {1} | + | E F _ {2} | = 4 a = 1 3. \\\\ \\end{array}
$$

故答案为13.`,
      },
      {
        id: "prob-sec-5-1-8-sol-1",
        title: `解法2`,
        method: "standard",
        steps: [],
        explanation: `高妙解法二
:由离心率为 $\\frac{1}{2}$ 可知 $b=\\sqrt{3}c,a=2c$ ，所以 $AF_{2}$ 斜率为 $-\\sqrt{3},\\angle AF_{2}F_{1}=60^{\\circ}$ .

直线 DE 的斜率为 $\\frac{\\sqrt{3}}{3}$ ，所以不妨设直线 DE 为 $y=\\frac{\\sqrt{3}}{3}(x+c)$ ，

联立 $\\left\\{\\begin{aligned}y=\\frac{\\sqrt{3}}{3}(x+c),\\\\ \\frac{x^{2}}{4c^{2}}+\\frac{y^{2}}{3c^{2}}=1.\\end{aligned}\\right.$ 可得 $13x^{2}+8cx-32c^{2}=0$ ，所以 $\\left\\{\\begin{aligned}x_{D}+x_{E}&=-\\frac{8c}{13},\\\\ x_{D}\\cdot x_{E}&=-\\frac{32c^{2}}{13},\\end{aligned}\\right.$

所以 $\\left|DE\\right|=\\sqrt{1+k^{2}}\\left|x_{D}-x_{E}\\right|=6\\Rightarrow c=\\frac{13}{8}$

又 $\\triangle AF_{1}F_{2}$ 是等边三角形, 即 DE 为 $AF_{2}$ 的垂直平分线,

所以 $AE=EF_{2}$ ， $AD=DF_{2}$ ，

所以 $\\triangle ADE$ 的周长= $AE+DE+AD=EF_{2}+DE+DF_{2}=4a=8c=13.$`,
      },
      {
        id: "prob-sec-5-1-8-sol-2",
        title: `解法3`,
        method: "standard",
        steps: [],
        explanation: `高妙解法三
: $\\angle DF_{2}F_{1}=30^{\\circ}$ , 由焦点弦长公式可得

$|DE|=\\frac{2ab^{2}}{a^{2}-b^{2}\\sin^{2}\\theta}=6$ ，即 $\\frac{2\\times2c\\times3c^{2}}{4c^{2}-3c^{2}\\times\\frac{1}{4}}=6$ ，解得 $c=\\frac{13}{8}$

又 $\\triangle AF_{1}F_{2}$ 是等边三角形, 即 DE 为 $AF_{2}$ 的垂直平分线, 下同`,
      },
    ],
    tags: [],
    source: `2022 年高考全国卷Ⅰ第 16 题`,
  },
  {
    id: "prob-sec-5-1-9",
    topicId: "topic-sec-5-1",
    title: `2022 全国Ⅱ：椭圆弦与截距条件求直线`,
    content: `(2022 年高考全国卷Ⅱ第 16 题)
已知直线 l 与椭圆 $\\frac{x^{2}}{6} + \\frac{y^{2}}{3} = 1$ 在第一象限交于 A, B 两点，l 与 x 轴，y 轴分别交于 M, N 两点，且 $|MA| = |NB|$ ， $|MN| = 2\\sqrt{3}$ ，则 l 的方程为 \\_\\_\\_\\_.`,
    preview: `已知直线 l 与椭圆 x^26 + y^23 = 1 在第一象限交于 A, B 两点，l 与 x 轴，y 轴分别交于 M, N 两点，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-5-1-9-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `高妙解法: 令 AB 的中点为 E, 因为 $\\left|MA\\right| = \\left|NB\\right|$ , 所以 $\\left|ME\\right| = \\left|NE\\right|$ ,

设直线 $AB: y = kx + m, k < 0, m > 0,$

则 $M\\left(-\\frac{m}{k},0\\right)$ , $N(0,m)$ ，所以 $E\\left(-\\frac{m}{2k},\\frac{m}{2}\\right)$ ,

由点差法得 $k_{OE} \\cdot k_{AB} = -\\frac{1}{2}$ , 即 $k \\cdot \\frac{\\frac{m}{2}}{-\\frac{m}{2k}} = -\\frac{1}{2}$ , 解得 $k = -\\frac{\\sqrt{2}}{2}$ , 或 $k = \\frac{\\sqrt{2}}{2}$ (舍去),

又 $|MN|=\\sqrt{m^{2}+(\\sqrt{2}m)^{2}}=2\\sqrt{3}$ ，解得m=2或m=-2(舍去)，

所以直线 $AB: x + \\sqrt{2}y - 2\\sqrt{2} = 0$ ，故答案为 $x + \\sqrt{2}y - 2\\sqrt{2} = 0$ .

注:本题解法由杭州第十四中学朱成万提供.`,
      },
    ],
    tags: [],
    source: `2022 年高考全国卷Ⅱ第 16 题`,
  },
  {
    id: "prob-sec-5-1-10",
    topicId: "topic-sec-5-1",
    title: `2022 全国Ⅰ：双曲线割线与三角形面积`,
    content: `(2022 年高考全国卷 I 第 21 题)
已知点 $A(2,1)$ 在双曲线 $C: \\frac{x^2}{a^2} - \\frac{y^2}{a^2 - 1} = 1 (a > 1)$ 上，直线 $l$ 交 $C$ 于 $P, Q$ 两点，直线 $AP, AQ$ 的斜率之和为0.

(1) 求 l 的斜率；

(2) 若 $\\tan\\angle PAQ=2\\sqrt{2}$ ，求 $\\triangle PAQ$ 的面积.`,
    preview: `已知点 A(2,1) 在双曲线 上，直线 l 交 C 于 P, Q 两点，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-5-1-10-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1)如图5-1-3所示,由点A(2,1)在双曲线上,得 $\\frac{4}{a^{2}}-\\frac{1}{a^{2}-1}=1$ ,解得 $a^{2}=2$ ,

所以双曲线 C 的方程为 $\\frac{x^{2}}{2}-y^{2}=1$ .

设直线 l 的方程为 $y=kx+m, P(x_{1},y_{1}), Q(x_{2},y_{2})$ ,

由 $\\left\\{ \\begin{array}{l} \\frac{x^2}{2} - y^2 = 1, \\\\ y = kx + m \\end{array} \\right.$ 消去 $y$ ，得 $(1 - 2k^2)x^2 - 4kmx - 2$

$$
(m ^ {2} + 1) = 0, \\tag {*}.
$$

![](images/1ddb2163799a8cfe2ffa7f7d6bc497bad0fc61dc8d94390edcd29e0628290326.jpg)

图5-1-3

由题意知， $1-2k^{2}\\neq0,\\Delta=16k^{2}m^{2}+8(1-2k^{2})(m^{2}+1)=8(1-2k^{2}+m^{2})>0$

所以 $x_{1}+x_{2}=\\frac{4km}{1-2k^{2}},x_{1}\\cdot x_{2}=-\\frac{2(m^{2}+1)}{1-2k^{2}}$

所以 $k_{AP} + k_{AQ} = \\frac{y_1 - 1}{x_1 - 2} +\\frac{y_2 - 1}{x_2 - 2} = \\frac{kx_1 + m - 1}{x_1 - 2} +\\frac{kx_2 + m - 1}{x_2 - 2} = 0,$

所以 $2kx_{1}x_{2}+(m-1-2k)(x_{1}+x_{2})-4(m-1)=0$ ,

即 $-\\frac{4k(m^{2}+1)}{1-2k^{2}}+(m-1-2k)\\cdot\\frac{4km}{1-2k^{2}}-4(m-1)=0,$

整理得 $2k^{2}+k-1+m(k+1)=0$ ，即 $(2k-1+m)(k+1)=0$ ，

若 $2k-1+m=0$ ，则 $m=-2k+1$ ，直线 l 经过点 A，不合题意，舍去。

所以 $k+1=0$ ，即直线 l 的斜率 k=-1。

(2)思路一:由(1)知方程(\\*)即为 $x^{2}-4mx+2(m^{2}+1)=0$ ,

则 $x_{1}+x_{2}=4m, x_{1}x_{2}=2(m^{2}+1)$ .

不妨设直线 PA, AQ 的倾斜角为 $\\alpha, \\beta (\\alpha < \\beta)$ ，因为 $k_{AP} + k_{AQ} = 0$ ，所以 $\\alpha + \\beta = \\pi$ ，

因为 $\\tan\\angle PAQ=2\\sqrt{2}$ ，所以 $\\tan(\\beta-\\alpha)=2\\sqrt{2}$ ，即 $\\tan2\\alpha=-2\\sqrt{2}$ ，

即 $\\sqrt{2}\\tan^{2}\\alpha-\\tan\\alpha-\\sqrt{2}=0$ ，解得 $\\tan\\alpha=\\sqrt{2}$ ，

所以直线 AP 的方程为 $y=\\sqrt{2}(x-2)+1$ ，与 $x^{2}-2y^{2}-2=0$ 联立，

消去 y, 得 $3x^{2}-(16-4\\sqrt{2})x+20-8\\sqrt{2}=0$ ,

所以 $2x_{1}=\\frac{20-8\\sqrt{2}}{3}$ ，即 $x_{1}=\\frac{10-4\\sqrt{2}}{3}$ ， $x_{2}=\\frac{10+4\\sqrt{2}}{3}$ ，

所以 $m=\\frac{x_{1}+x_{2}}{4}=\\frac{5}{3}$ ，即直线 l 的方程为 $y=-x+\\frac{5}{3}$ ，

所以 $\\left|PQ\\right|=\\sqrt{2}\\sqrt{16m^{2}-8(m^{2}+1)}=\\frac{16}{3}$ ，又点 A 到直线 l 的距离为 $d=\\frac{2\\sqrt{2}}{3}$ ，

所以 $\\triangle PAQ$ 的面积为 $S=\\frac{1}{2}|PQ|\\cdot d=\\frac{16\\sqrt{2}}{9}$ .

思路二: 记 PA 交 x 轴于点 M, QA 交 x 轴于点 N,

由于直线 AP, AQ 的斜率之和为 0, 所以 $\\tan\\angle AMN = \\tan\\angle ANM$ ,

在 $\\triangle PMN$ 中,易知

$$
\\tan \\angle A M N + \\tan \\angle A N M + \\tan \\angle M A N
$$

$$
= \\tan \\angle A M N \\cdot \\tan \\angle A N M \\cdot \\tan \\angle M A N,
$$

为此记 $\\tan\\angle AMN=\\tan\\angle ANM=k_{0}>0$ ，又 $\\tan\\angle PAQ=2\\sqrt{2}$

于是 $2\\sqrt{2}+2k_{0}=2\\sqrt{2}k_{0}^{2}$ ，所以 $k_{0}=\\sqrt{2}$ 。下同思路一。`,
      },
    ],
    tags: [],
    source: `2022 年高考全国卷 I 第 21 题`,
  },
  {
    id: "prob-sec-5-1-11",
    topicId: "topic-sec-5-1",
    title: `2022 浙江：椭圆中过定点弦与直线交点`,
    content: `(2022 年高考浙江卷第 21 题)
如图 5-1-4 所示, 已知椭圆 $\\frac{x^{2}}{12} + y^{2} = 1$ , 设 A, B 是椭圆上异于 P(0,1) 的两点, 且点 $Q\\left(0, \\frac{1}{2}\\right)$ 在线段 AB 上, 直线 PA, PB 分别交直线 $y = -\\frac{1}{2}x + 3$ 于 C, D 两点.

![](images/a14d149a01f76bf846ddd558e537673fde31d6a1587ae4a764c587aab4dab9bd.jpg)

图5-1-4

(1) 求点 P 到椭圆上点的距离的最大值；

(2)求 $|CD|$ 的最小值.`,
    preview: `如图 5-1-4 所示, 已知椭圆 x^212 + y^2 = 1 , 设 A, B 是椭圆上异于 P(0,1) 的两点, 且点 Q(0, 1/2) 在线段 A`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-5-1-11-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1) 设 $E(x, y)$ 为椭圆上任意一点，

则 $|PE| = \\sqrt{x^2 + (y - 1)^2} = \\sqrt{-11y^2 - 2y + 13} = \\sqrt{-11\\left(y + \\frac{1}{11}\\right)^2 + \\frac{144}{11}}$

因为 $-1\\leqslant y\\leqslant1$ ，所以当 $y=-\\frac{1}{11}$ 时， $|PE|_{max}=\\sqrt{\\frac{144}{11}}=\\frac{12\\sqrt{11}}{11}$

即点 P 到椭圆上点的距离的最大值为 $\\frac{12\\sqrt{11}}{11}$ .

(2)`,
      },
      {
        id: "prob-sec-5-1-11-sol-1",
        title: `解法2`,
        method: "standard",
        steps: [],
        explanation: `高妙解法一
：

设点 $A(x_{1},y_{1}), B(x_{2},y_{2}), l_{AP}: y-1=\\frac{y_{1}-1}{x_{1}}x; l_{BP}: y-1=\\frac{y_{2}-1}{x_{2}}x,$

联立 $\\left\\{\\begin{aligned}y&=kx+\\frac{1}{2},\\\\ \\frac{x^{2}}{12}&+y^{2}=1\\end{aligned}\\right.$ 得 $\\left(\\frac{1}{12}+k^{2}\\right)x^{2}+kx-\\frac{3}{4}=0,$

有 $x_{1} + x_{2} = \\frac{-k}{\\frac{1}{12} + k^{2}} = \\frac{-12k}{1 + 12k^{2}}, x_{1}x_{2} = \\frac{-\\frac{3}{4}}{\\frac{1}{12} + k^{2}} = \\frac{-9}{1 + 12k^{2}},$ （\\*）

根据题意，过 $PA, PB$ 交点的曲线方程为 $\\left(y - 1 - \\frac{y_1 - 1}{x_1} x\\right) \\cdot \\left(y - 1 - \\frac{y_2 - 1}{x_2} x\\right) = 0$ ，与 $y = -\\frac{1}{2} x + 3$ 联立，得 $\\left(\\frac{1}{2} x - 2 + \\frac{y_1 - 1}{x_1} x\\right)\\left(\\frac{1}{2} x - 2 + \\frac{y_2 - 1}{x_2} x\\right) = 0$

$$
\\left(\\frac {1}{2} x - 2 + \\frac {k x _ {1} - \\frac {1}{2}}{x _ {1}} x\\right) \\left(\\frac {1}{2} x - 2 + \\frac {k x _ {2} - \\frac {1}{2}}{x _ {2}} x\\right) = 0,
$$

$$
\\left[ \\frac {(1 + 2 k) x _ {1} - 1}{2 x _ {1}} \\cdot x - 2 \\right] \\left[ \\frac {(1 + 2 k) x _ {2} - 1}{2 x _ {2}} \\cdot x - 2 \\right] = 0,
$$

$$
[ (1 + 2 k) x _ {1} - 1 ] [ (1 + 2 k) x _ {2} - 1 ] x ^ {2} - 4 [ 2 (1 + 2 k) x _ {1} x _ {2} - x _ {1} - x _ {2} ] x + 1 6 x _ {1} x _ {2} = 0,
$$

将 $(*)$ 式代入上式可得： $(3k+1)x^{2}-(12k+9)x+18=0$ ，

$$
x _ {C} + x _ {D} = \\frac {1 2 k + 9}{3 k + 1}, x _ {C} \\cdot x _ {D} = \\frac {1 8}{3 k + 1}, | x _ {C} - x _ {D} | = \\sqrt {(x _ {C} + x _ {D}) ^ {2} - 4 x _ {C} x _ {D}} = 3 \\sqrt {\\frac {1 6 k ^ {2} + 1}{(3 k + 1) ^ {2}}},
$$

$$
| C D | = \\sqrt {1 + k ^ {2}} | x _ {C} - x _ {D} | = \\frac {\\sqrt {5}}{2} | x _ {C} - x _ {D} | = \\frac {3 \\sqrt {5}}{2} \\sqrt {\\frac {1 6 k ^ {2} + 1}{(3 k + 1) ^ {2}}}.
$$

对此式进行求最值,令 $\\frac{16k^{2}+1}{9k^{2}+6k+1}=\\lambda$ ,

$(16 - 9\\lambda)k^{2} - 6\\lambda k + 1 - \\lambda = 0,\\Delta = (6\\lambda)^{2} - 4(16 - 9\\lambda)(1 - \\lambda)\\geqslant 0$ ，得 $\\lambda \\geqslant \\frac{16}{25}$

此时 $k = \\frac{3}{16}$ ，即 $|CD|_{\\min} = \\frac{3\\sqrt{5}}{2}\\times \\frac{4}{5} = \\frac{6\\sqrt{5}}{5}.$`,
      },
      {
        id: "prob-sec-5-1-11-sol-2",
        title: `解法3`,
        method: "standard",
        steps: [],
        explanation: `高妙解法二
：

设点 $A(x_{1},y_{1}),B(x_{2},y_{2})$ ，则 $k_{PA} = \\frac{y_1 - 1}{x_1},k_{PB} = \\frac{y_2 - 1}{x_2}$ ，且线段 $AB$ 斜率必存在，

设 $l_{AB}: y = kx + \\frac{1}{2}$ ，整理可得 $\\frac{y - 1 - kx}{-\\frac{1}{2}} = 1$ .

由 $\\frac{x^{2}}{12}+y^{2}=1$ , 得 $\\frac{x^{2}}{12}+\\left[(y-1)+1\\right]^{2}=1$ ,

即 $\\frac{x^2}{12} + (y - 1)^2 - 4(y - 1)[(y - 1) - kx] = 0, \\frac{x^2}{12} - 3(y - 1)^2 + 4kx(y - 1) = 0,$

$$
- 3 \\left(\\frac {y - 1}{x}\\right) + 4 k \\frac {y - 1}{x} + \\frac {1}{1 2} = 0,
$$

根据韦达定理有： $\\frac{y_{1}-1}{x_{1}}+\\frac{y_{2}-1}{x_{2}}=\\frac{4k}{3},\\frac{y_{1}-1}{x_{1}}\\cdot\\frac{y_{2}-1}{x_{2}}=-\\frac{1}{36}$

$$
\\left| \\frac {y _ {1} - 1}{x _ {1}} - \\frac {y _ {2} - 1}{x _ {2}} \\right| = \\frac {\\sqrt {1 6 k ^ {2} + 1}}{3}, \\tag {*}.
$$

$$
| C D | = \\sqrt {1 + k ^ {2}} | x _ {C} - x _ {D} | = \\frac {\\sqrt {5}}{2} | x _ {C} - x _ {D} |,
$$

$$
l _ {A P}: y - 1 = \\frac {y _ {1} - 1}{x _ {1}} x, l _ {B P}: y - 1 = \\frac {y _ {2} - 1}{x _ {2}} x,
$$

联立 $\\left\\{\\begin{aligned}y-1&=\\frac{y_{1}-1}{x_{1}}x,\\\\ y&=-\\frac{1}{2}x+3\\end{aligned}\\right.$ 可得 $x_{C}=\\frac{2}{\\frac{y_{1}-1}{x_{1}}+\\frac{1}{2}}$ ，同理 $x_{D}=\\frac{2}{\\frac{y_{2}-1}{x_{2}}+\\frac{1}{2}}$

则 $|CD| = \\frac{\\sqrt{5}}{2} |x_C - x_D| = \\frac{\\sqrt{5}}{2}\\left|\\frac{2}{\\frac{y_1 - 1}{x_1} + \\frac{1}{2}} -\\frac{2}{\\frac{y_2 - 1}{x_2} + \\frac{1}{2}}\\right|$

$$
= \\sqrt {5} \\left| \\frac {\\frac {y _ {2} - 1}{x _ {2}} - \\frac {y _ {1} - 1}{x _ {1}}}{\\frac {y _ {1} - 1}{x _ {1}} \\cdot \\frac {y _ {2} - 1}{x _ {2}} + \\frac {1}{2} \\left(\\frac {y _ {2} - 1}{x _ {2}} + \\frac {y _ {1} - 1}{x _ {2}}\\right) + \\frac {1}{4}} \\right|,
$$

将 $(*)$ 式代入, 可得: $|CD|=\\frac{3\\sqrt{5}}{2}\\left|\\frac{\\sqrt{16k^{2}+1}}{3k+1}\\right|$ ,

以下求最值同`,
      },
      {
        id: "prob-sec-5-1-11-sol-5",
        title: `解法6`,
        method: "standard",
        steps: [],
        explanation: `高妙解法三
：

以 C, D 的横坐标为变量，设 $C(2c, 3-c)$ , $D(2d, 3-d)$ ，所以 $\\left|CD\\right|=\\sqrt{5}\\left|c-d\\right|$ ,

所以直线 $PC: y = \\frac{2 - c}{2c}x + 1,$

与椭圆方程 $\\frac{x^{2}}{12}+y^{2}=1$ 联立得： $\\left(\\frac{1}{12}+\\frac{(2-c)^{2}}{4c^{2}}\\right)x^{2}+\\frac{2-c}{c}x=0.$

所以 $x_{A} = \\frac{3c(c - 2)}{c^{2} - 3c + 3}, y_{A} = \\frac{3c - 3 - \\frac{c^{2}}{2}}{c^{2} - 3c + 3}$ , 即 $A\\left(\\frac{3c(c - 2)}{c^{2} - 3c + 3}, \\frac{3c - 3 - \\frac{c^{2}}{2}}{c^{2} - 3c + 3}\\right)$ .

同理可得： $B\\left(\\frac{3d(d - 2)}{d^2 - 3d + 3},\\frac{3d - 3 - \\frac{d^2}{2}}{d^2 - 3d + 3}\\right)$

由 $A, Q\\left(0, \\frac{1}{2}\\right), B$ 三点共线，得

$$
\\frac {\\frac {3 c - 3 - \\frac {c ^ {2}}{2}}{c ^ {2} - 3 c + 3} - \\frac {1}{2}}{\\frac {3 c (c - 2)}{c ^ {2} - 3 c + 3} - 0} = \\frac {\\frac {3 d - 3 - \\frac {d ^ {2}}{2}}{d ^ {2} - 3 d + 3} - \\frac {1}{2}}{\\frac {3 d (d - 2)}{d ^ {2} - 3 d + 3} - 0} \\Rightarrow \\frac {\\frac {9}{2} c - \\frac {9}{2} - c ^ {2}}{c ^ {2} - 2 c} = \\frac {\\frac {9}{2} d - \\frac {9}{2} - d ^ {2}}{d ^ {2} - 2 d}.
$$

所以 $5cd-9(c+d)+18=0$ ，所以 $d=\\frac{9c-18}{5c-9}$

所以 $|CD| = \\sqrt{5} |c - d| = \\sqrt{5}\\left|c - \\frac{9c - 18}{5c - 9}\\right| = \\sqrt{5}\\left|\\left(c - \\frac{9}{5}\\right) + \\frac{9}{5} \\cdot \\frac{1}{5c - 9}\\right| \\geqslant \\frac{6}{5}\\sqrt{5}$ .

故 $|CD|$ 取到最小值 $\\frac{6\\sqrt{5}}{5}$ .`,
      },
    ],
    tags: [],
    source: `2022 年高考浙江卷第 21 题`,
  },
  {
    id: "prob-sec-5-2-1",
    topicId: "topic-sec-5-2",
    title: `2023 全国甲：椭圆焦点角求点到原点距离`,
    content: `(2023年高考全国甲卷第12题)
已知椭圆 $\\frac{x^{2}}{9}+\\frac{y^{2}}{6}=1,F_{1},F_{2}$ 为两个焦点，O为原点，P为椭圆上一点， $\\cos\\angle F_{1}PF_{2}=\\frac{3}{5}$ ，则 $|OP|=$ （）

A. $\\frac{2}{5}$

B. $\\frac{\\sqrt{30}}{2}$

C. $\\frac{3}{5}$

D. $\\frac{\\sqrt{35}}{2}$`,
    preview: `已知椭圆 x^29+y^26=1,F_1,F_2 为两个焦点，O为原点，P为椭圆上一点， ∠ F_1PF_2=3/5 ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-5-2-1-sol-1",
        title: `解法2`,
        method: "geometric",
        steps: [],
        explanation: `高妙解法二
: 利用几何性质+定义法.

因为 $|PF_1| + |PF_2| = 2a = 6$ ， ①

$$
\\left| P F _ {1} \\right| ^ {2} + \\left| P F _ {2} \\right| ^ {2} - 2 \\left| P F _ {1} \\right| \\cdot \\left| P F _ {2} \\right| \\cos \\angle F _ {1} P F = \\left| F _ {1} F _ {2} \\right| ^ {2},
$$

即 $|PF_1|^2 + |PF_2|^2 - \\frac{6}{5} |PF_1| \\cdot |PF_2| = 12,$ ②

联立①②，解得 $\\left|PF_{1}\\right|\\cdot\\left|PF_{2}\\right|=\\frac{15}{2},\\left|PF_{1}\\right|^{2}+\\left|PF_{2}\\right|^{2}=21.$

由中线定理可知， $(2|OP|)^{2}+|F_{1}F_{2}|^{2}=2(|PF_{1}|^{2}+|PF_{2}|^{2})=42$

而 $|F_1F_2| = 2\\sqrt{3}$ , 解得 $|OP| = \\frac{\\sqrt{30}}{2}$ , 故选 B.`,
      },
      {
        id: "prob-sec-5-2-1-sol-2",
        title: `解法3`,
        method: "standard",
        steps: [],
        explanation: `高妙解法三
: 向量法.

由知 $|PF_{1}| \\cdot |PF_{2}| = \\frac{15}{2}, |PF_{1}|^{2} + |PF_{2}|^{2} = 21$ ，而 $\\overrightarrow{PO} = \\frac{1}{2} (\\overrightarrow{PF_{1}} + \\overrightarrow{PF_{2}})$ ，

所以 $|\\overrightarrow{PO}| = \\frac{1}{2} |\\overrightarrow{PF_1} +\\overrightarrow{PF_2} |$

$= \\frac{1}{2}\\sqrt{|\\overrightarrow{PF_1}|^2 + 2\\overrightarrow{PF_1} \\cdot \\overrightarrow{PF_2} + |\\overrightarrow{PF_2}|^2} = \\frac{1}{2}\\sqrt{21 + 2 \\times \\frac{3}{5} \\times \\frac{15}{2}} = \\frac{\\sqrt{30}}{2}$ . 故选 B.`,
      },
    ],
    tags: [],
    source: `2023年高考全国甲卷第12题`,
  },
  {
    id: "prob-sec-5-2-2",
    topicId: "topic-sec-5-2",
    title: `2023 全国Ⅰ：双曲线向量垂直求离心率`,
    content: `(2023 年高考全国卷 I 第 16 题)
已知双曲线 $C: \\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1 (a > 0, b > 0)$ 的左、右焦点分别为 $F_1, F_2$ . 点 $A$ 在 $C$ 上，点 $B$ 在 $y$ 轴上， $\\overrightarrow{F_1A} \\perp \\overrightarrow{F_1B}, \\overrightarrow{F_2A} = -\\frac{2}{3}\\overrightarrow{F_2B}$ ，则 $C$ 的离心率为 \\_\\_\\_\\_.`,
    preview: `已知双曲线 的左、右焦点分别为 F_1, F_2 . 点 A 在 C 上，点 B 在 y 轴上，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-5-2-2-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `建立如图 5-2-1 所示坐标系.

依题意可以设 $F_{1}(-c,0)$ , $F_{2}(c,0)$ , $B(0,n)$ ,

由 $\\overrightarrow{F_{2}A}=-\\frac{2}{3}\\overrightarrow{F_{2}B}$ ，可得 $A\\left(\\frac{5}{3}c,-\\frac{2}{3}n\\right)$

又 $\\overrightarrow{F_1A} \\perp \\overrightarrow{F_1B}$ , 且 $\\overrightarrow{F_1A} = \\left(\\frac{8}{3} c, -\\frac{2}{3} n\\right)$ , $\\overrightarrow{F_1B} = (c, n)$ ,

则 $\\overrightarrow{F_{1}A}\\cdot\\overrightarrow{F_{1}B}=\\left(\\frac{8}{3}c,-\\frac{2}{3}n\\right)\\cdot(c,n)=\\frac{8}{3}c^{2}-\\frac{2}{3}n^{2}=0$ ，即 $n^{2}=4c^{2}$

![](images/3491895aec2d6cfda0dc2dcd54fadcd21daf4ef19fd8ee2abd61426cfed2d319.jpg)

图5-2-1

又点 A 在 C 上，则 $\\frac{\\frac{25}{9}c^{2}}{a^{2}}-\\frac{\\frac{4}{9}n^{2}}{b^{2}}=1$ ，整理可得 $\\frac{25c^{2}}{9a^{2}}-\\frac{4n^{2}}{9b^{2}}=1$ ，

代入 $n^2 = 4c^2$

可得 $\\frac{25c^{2}}{a^{2}}-\\frac{16c^{2}}{b^{2}}=9$ ，即 $25e^{2}-\\frac{16e^{2}}{e^{2}-1}=9$ ，解之得 $e^{2}=\\frac{9}{5}$ 或 $\\frac{1}{5}$ （舍去），故 $e=\\frac{3}{5}\\sqrt{5}$ .`,
      },
    ],
    tags: [],
    source: `2023 年高考全国卷 I 第 16 题`,
  },
  {
    id: "prob-sec-5-2-3",
    topicId: "topic-sec-5-2",
    title: `2023 全国Ⅰ：函数方程性质判断`,
    content: `(2023 年高考全国Ⅰ卷第 11 题)
已知函数 $f(x)$ 的定义域为 $\\mathbf{R}, f(xy) = y^2 f(x) + x^2 f(y)$ ，则（）

A. $f\\left( 0\\right)  = 0$

B. $f(1) = 0$

C. $f(x)$ 是偶函数

D. $x = 0$ 为 $f(x)$ 的极小值点`,
    preview: `已知函数 f(x) 的定义域为 R, f(xy) = y^2 f(x) + x^2 f(y) ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-5-2-3-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(举反例)对于 A, 令 x=y=0, 得 $f(0)=0$ , 故 A 正确.

对于 B, 令 x=y=1, 得 $f(1)=0$ , 故 B 正确.

对于 C, 令 x = y = -1, 得 $f(1) = 2f(-1)$ , 得 $f(-1) = 0$ . 令 y = -1, 得 $f(-x) = f(x) + x^{2}f(-1) = f(x)$ . 所以 $f(x)$ 为偶函数, 故 C 正确.

对于 D, 不妨取 $f(x)=0$ , 显然符合条件, 此时 $f(x)$ 无极小值点, 故 D 错误.`,
      },
    ],
    tags: [],
    source: `2023 年高考全国Ⅰ卷第 11 题`,
  },
  {
    id: "prob-sec-5-2-4",
    topicId: "topic-sec-5-2",
    title: `2023 全国乙理：圆切割线向量数量积最值`,
    content: `(2023 年高考全国乙卷数学理科第 12 题)
已知 $\\odot O$ 的半径为1,直线 $PA$ 与 $\\odot O$ 相切于点 $A$ ,直线 $PB$ 与 $\\odot O$ 交于 $B,C$ 两点, $D$ 为 $BC$ 的中点,若 $|PO|=\\sqrt{2}$ ,则 $\\overrightarrow{PA}\\cdot\\overrightarrow{PD}$ 的最大值为()

A. $\\frac{1 + \\sqrt{2}}{2}$

B. $\\frac{1 + 2\\sqrt{2}}{2}$

C. $1 + \\sqrt{2}$

D. $2 + \\sqrt{2}$`,
    preview: `已知 O 的半径为1,直线 PA 与 O 相切于点 A ,直线 PB 与 O 交于 B,C 两点, D 为 BC 的中点,若 |PO|=√2 ,则 →PA·→P`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-5-2-4-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `如图5-2-2所示，因为 $|PO| = \\sqrt{2}$ ，且 $|OA| = 1$ ，所以 $|PA| = 1$ ，所以 $\\triangle OAP$ 为等腰直角三角形，且 $OA \\perp AP$ ，又 $D$ 为 $BC$ 的中点，根据垂径定理可知 $OD \\perp PC$ ，所以 $O, A, P, D$ 四点共圆，设圆心为 $E$ .

又 $\\overrightarrow{PA}\\cdot\\overrightarrow{PD}=|\\overrightarrow{PD}|\\cos\\langle\\overrightarrow{PA},\\overrightarrow{PD}\\rangle$ ，所以 $\\overrightarrow{PA}\\cdot\\overrightarrow{PD}$ 的最大值转化为 $\\overrightarrow{PD}$ 在 $\\overrightarrow{PA}$ 方向上的投影，过E作 $ED_{1}\\parallel PA$ 交 $\\odot E$ 于 $D_{1}$ ，显然当D与 $D_{1}$ 重合时， $\\overrightarrow{PD}$ 在 $\\overrightarrow{PA}$ 方向上的投影最大，过E作 $EG\\perp PA$ 交PA于G，过 $D_{1}$ 作 $D_{1}H\\perp PA$ 交PA于H，所以

![](images/052675e5f3cf9f8c9d220d39473f55a23be2823340ef5621e4750267e98755d8.jpg)

图5-2-2

$$
\\overrightarrow {P A} \\cdot \\overrightarrow {P D} = | \\overrightarrow {P D} | \\cos \\langle \\overrightarrow {P A}, \\overrightarrow {P D} \\rangle = | P H |,
$$

而 $|PH| = |PG| + |HG| = |PE|\\cos 45^\\circ + |PE| = \\frac{\\sqrt{2}}{2} \\times \\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{2}}{2} = \\frac{1 + \\sqrt{2}}{2}$ ，故选A.`,
      },
      {
        id: "prob-sec-5-2-4-sol-1",
        title: `解法2`,
        method: "standard",
        steps: [],
        explanation: `高妙解法二
：如图5-2-3所示，因为 $|PO| = \\sqrt{2}$ ，且 $|OA| = 1$ ，所以 $|PA| = 1$

所以 $\\triangle OAP$ 为等腰直角三角形,设 $\\angle OPD=\\theta$ ,

则 $|PD| = \\sqrt{2}\\cos \\theta$ ，所以

$$
\\overrightarrow {P A} \\cdot \\overrightarrow {P D} = | \\overrightarrow {P A} | \\cdot | \\overrightarrow {P D} | \\cdot \\cos \\left(\\theta + \\frac {\\pi}{4}\\right)
$$

$$
= \\sqrt {2} \\cos \\theta \\cos \\left(\\theta + \\frac {\\pi}{4}\\right) = \\frac {1}{2} - \\frac {\\sqrt {2}}{2} \\sin \\left(2 \\theta - \\frac {\\pi}{4}\\right) \\leqslant \\frac {1}{2} + \\frac {\\sqrt {2}}{2},
$$

故选 A.

注：以上解法由林威老师提供.

![](images/0b21c6898b3161970f600b8ea8651114623633c7e079935576900078dc958b7b.jpg)

图5-2-3`,
      },
    ],
    tags: [],
    source: `2023 年高考全国乙卷数学理科第 12 题`,
  },
  {
    id: "prob-sec-5-2-5",
    topicId: "topic-sec-5-2",
    title: `2023 全国甲理：三角形角平分线长度`,
    content: `(2023 年高考全国甲卷理科第 16 题)
在 $\\triangle ABC$ 中, $AB=2,\\angle BAC=60^{\\circ},BC=\\sqrt{6},D$ 为 $BC$ 上一点, $AD$ 为 $\\angle BAC$ 的平分线,则 $AD=$ \\_\\_\\_\\_.`,
    preview: `在 △ ABC 中, AB=2,∠ BAC=60°,BC=√6,D 为 BC 上一点, AD 为 ∠ BAC 的平分线,则 AD= \\_\\_\\_\\_.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-5-2-5-sol-1",
        title: `解法2`,
        method: "standard",
        steps: [],
        explanation: `高妙解法二
: 利用余弦定理 + 正弦定理.

由余弦定理得 $2^{2} + b^{2} - 2 \\times 2 \\times b \\times \\cos 60^{\\circ} = 6$ ，因为 $b > 0$ ，解得 $b = 1 + \\sqrt{3}$ ，

又由正弦定理可得 $\\frac{\\sqrt{6}}{\\sin 60^\\circ} = \\frac{b}{\\sin B} = \\frac{2}{\\sin C}$ ，解得 $\\sin B = \\frac{\\sqrt{6} + \\sqrt{2}}{4}, \\sin C = \\frac{\\sqrt{2}}{2}$ ，

因为 $1 + \\sqrt{3} >\\sqrt{6} >\\sqrt{2}$ ，所以 $b > a > c$ ，所以 $C = 45^{\\circ},B = 180^{\\circ} - 60^{\\circ} - 45^{\\circ} = 75^{\\circ}$ 又 $\\angle BAD = 30^{\\circ}$ ，所以 $\\angle ADB = 75^{\\circ},\\triangle ABD$ 为等腰三角形，故 $AD = AB = 2.$ 故答案为2.`,
      },
      {
        id: "prob-sec-5-2-5-sol-2",
        title: `解法3`,
        method: "standard",
        steps: [],
        explanation: `高妙解法三
:借助勾股定理.

如图 5-2-4 所示, 作 $BH \\perp AC$ 于 H, 则 $BH = \\sqrt{3}$ , AH = 1.

![](images/cab50ad9aeb637d5147d5dd69caf7a0730b873c5498e86c2a4f4673a8989d167.jpg)

所以 $CH=\\sqrt{BC^{2}-BH^{2}}=\\sqrt{3}$ . 所以 $\\angle C=45^{\\circ},\\angle BDA=\\angle DAC+\\angle C=75^{\\circ}$ ,
所以 $\\angle ADB=75^{\\circ},AD=AB=2.$`,
      },
      {
        id: "prob-sec-5-2-5-sol-3",
        title: `解法4`,
        method: "standard",
        steps: [],
        explanation: `高妙解法四
: 利用张角定理. 由余弦定理得

$2^{2}+b^{2}-2\\times2\\times b\\times\\cos60^{\\circ}=6$ , 因为 b>0, 解得 $b=1+\\sqrt{3}$ ,

由张角定理 $\\frac{\\sin\\angle BAD}{AC}+\\frac{\\sin\\angle CAD}{AB}=\\frac{\\sin\\angle BAC}{AD}$ ，得

$\\frac{\\sin 30^{\\circ}}{1 + \\sqrt{3}} +\\frac{\\sin 30^{\\circ}}{2} = \\frac{\\sin 60^{\\circ}}{AD} = \\frac{\\sqrt{3}}{4}$ 所以 $AD = 2$

注：张角定理的证明：因为 $S_{\\triangle ABD} + S_{\\triangle ACD} = S_{\\triangle ABC}$ ，

所以 $\\frac{1}{2} AB\\cdot AD\\cdot \\sin \\angle BAD + \\frac{1}{2} AC\\cdot AD\\cdot \\sin \\angle CAD$

$$
= \\frac {1}{2} A B \\cdot A C \\cdot \\sin \\angle B A C,
$$

两边同除以 $\\frac{1}{2}AB\\cdot AC\\cdot AD$ 得 $\\frac{\\sin\\angle BAD}{AC}+\\frac{\\sin\\angle CAD}{AB}=\\frac{\\sin\\angle BAC}{AD}$ .`,
      },
      {
        id: "prob-sec-5-2-5-sol-4",
        title: `解法5`,
        method: "standard",
        steps: [],
        explanation: `高妙解法五
: 利用斯特瓦尔特定理. 由余弦定理得

$2^{2} + b^{2} - 2 \\times 2 \\times b \\times \\cos 60^{\\circ} = 6$ ，因为 $b > 0$ ，解得 $b = 1 + \\sqrt{3}$

由角平分线定理及等比定理得

$$
\\frac {B D}{A B} = \\frac {C D}{A C} = \\frac {B D + C D}{A B + A C} = \\frac {B C}{A B + A C} = \\frac {\\sqrt {6}}{2 + (1 + \\sqrt {3})} = \\frac {\\sqrt {6} - \\sqrt {2}}{2},
$$

所以 $BD=\\frac{\\sqrt{6}-\\sqrt{2}}{2}AB=\\sqrt{6}-\\sqrt{2},CD=\\frac{\\sqrt{6}-\\sqrt{2}}{2}AC=\\sqrt{2}$ ,

由斯特瓦尔特定理得: $AB^{2}\\cdot DC+AC^{2}\\cdot DB=AD^{2}\\cdot BC+BD\\cdot DC\\cdot BC$ ,即

$2^{2} \\cdot \\sqrt{2} + (1 + \\sqrt{3})^{2} (\\sqrt{6} - \\sqrt{2}) = AD^{2} \\cdot \\sqrt{6} + (\\sqrt{6} - \\sqrt{2}) \\cdot \\sqrt{2} \\cdot \\sqrt{6}$ , 解得 $AD = 2$ .`,
      },
    ],
    tags: [],
    source: `2023 年高考全国甲卷理科第 16 题`,
  },
  {
    id: "prob-sec-5-2-6",
    topicId: "topic-sec-5-2",
    title: `2023 全国Ⅱ：等差数列与奇偶分段数列`,
    content: `(2023年高考全国Ⅱ卷第18题)
$\\{a_{n}\\}$ 为等差数列, $b_{n}=\\left\\{\\begin{aligned}&a_{n}-6,n\\text{为奇数},\\\\ &2a_{n},n\\text{为偶数},\\end{aligned}\\right.$ 记 $S_{n},T_{n}$ 分别为数列 $\\{a_{n}\\},\\{b_{n}\\}$ 的前n项和, $S_{4}=32,T_{3}=16$ .

(1) 求 $\\{a_{n}\\}$ 的通项公式；
(2) 证明: 当 n > 5 时, $T_{n} > S_{n}$ .`,
    preview: `为等差数列, 记 S_n,T_n 分别为数列 的前n项和, S_4=32,T_3=16 . (1) 求 的通项公式； (2) 证明: 当 n > 5 时, T_`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-5-2-6-sol-0",
        title: `高妙解法一`,
        method: "standard",
        steps: [],
        explanation: `设等差数列 $\\{a_{n}\\}$ 的公差为 d. 由 $b_1=a_1-6, b_2=2a_2=2a_1+2d, b_3=a_3-6=a_1+2d-6$ , 得 $\\left\\{\\begin{aligned}S_{4}&=4a_{1}+6d=32,\\ T_{3}&=4a_{1}+4d-12=16,\\end{aligned}
ight.$ 解得 $a_{1}=5,d=2$ , 故 $a_{n}=2n+3$ . 当 n 为偶数时, $T_{n}=\\frac{3}{2}n^{2}+\\frac{7}{2}n$ , 所以 $T_{n}-S_{n}=\\frac{1}{2}n(n-1)>0$ . 当 n 为奇数时, $T_{n}=\\frac{3}{2}n^{2}+\\frac{5}{2}n-5$ , 所以 $T_{n}-S_{n}=\\frac{1}{2}(n+2)(n-5)>0$ . 因此当 $n>5$ 时, $T_{n}>S_{n}$ .`,
      },

    ],
    tags: [],
    source: `2023年高考全国Ⅱ卷第18题`,
  },
  {
    id: "prob-sec-5-2-7",
    topicId: "topic-sec-5-2",
    title: `2023 全国Ⅰ：含指数函数的单调性与证明`,
    content: `(2023 年高考全国Ⅰ卷第 19 题)
已知函数 $f(x)=a(\\mathrm{e}^{x}+a)-x.$

(1) 讨论 $f(x)$ 的单调性；
(2)证明: 当 a>0 时, $f(x)>2\\ln a+\\frac{3}{2}$ .`,
    preview: `已知函数 f(x)=a(e^x+a)-x. (1) 讨论 f(x) 的单调性； (2)证明: 当 a>0 时, f(x)>2 a+3/2 .`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-5-2-7-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1) 因为 $f(x)=a(\\mathrm{e}^{x}+a)-x$ ，定义域为 R，所以 $f'(x)=ae^{x}-1$ ，

当 $a \\leqslant 0$ 时，由于 $e^{x} > 0$ ，则 $ae^{x} \\leqslant 0$ ，故 $f'(x) = ae^{x} - 1 < 0$ 恒成立，

所以 $f(x)$ 在 R 上单调递减；

当 a>0 时，令 $f'(x)=ae^{x}-1=0$ ，解得 $x=-\\ln a$ ，

当 $x < -\\ln a$ 时， $f'(x) < 0$ ，则 $f(x)$ 在 $(-∞, -\\ln a)$ 上单调递减；

当 $x > -\\ln a$ 时， $f'(x) > 0$ ，则 $f(x)$ 在 $(- \\ln a, +\\infty)$ 上单调递增.

综上，当 $a \\leqslant 0$ 时， $f(x)$ 在 $\\mathbf{R}$ 上单调递减；当 $a > 0$ 时， $f(x)$ 在 $(- \\infty, -\\ln a)$ 上单调递减， $f(x)$ 在 $(- \\ln a, +\\infty)$ 上单调递增.

(2)`,
      },
      {
        id: "prob-sec-5-2-7-sol-1",
        title: `解法2`,
        method: "standard",
        steps: [],
        explanation: `高妙解法一
:由(1)得, $f(x)_{\\min}=f(-\\ln a)=a(\\mathrm{e}^{-\\ln a}+a)+\\ln a=1+a^{2}+\\ln a$

要证 $f(x) > 2\\ln a + \\frac{3}{2}$ , 即证 $1 + a^2 + \\ln a > 2\\ln a + \\frac{3}{2}$ , 即证 $a^2 - \\frac{1}{2} - \\ln a > 0$ 恒成立.

令 $g(a) = a^{2} - \\frac{1}{2} -\\ln a(a > 0)$ ，则 $g^{\\prime}(a) = 2a - \\frac{1}{a} = \\frac{2a^{2} - 1}{a},$

令 $g^{\\prime}(a) < 0$ ，则 $0 < a < \\frac{\\sqrt{2}}{2}$ ；令 $g^{\\prime}(a) > 0$ ，则 $a > \\frac{\\sqrt{2}}{2}$ .

所以 $g(a)$ 在 $\\left(0,\\frac{\\sqrt{2}}{2}\\right)$ 上单调递减，在 $\\left(\\frac{\\sqrt{2}}{2},+\\infty\\right)$ 上单调递增，

所以 $g(a)_{\\min}=g\\left(\\frac{\\sqrt{2}}{2}\\right)=\\left(\\frac{\\sqrt{2}}{2}\\right)^{2}-\\frac{1}{2}-\\ln\\frac{\\sqrt{2}}{2}=\\ln\\sqrt{2}>0$ , 则 $g(a)>0$ 恒成立，

所以，当 $a > 0$ 时， $f(x) > 2\\ln a + \\frac{3}{2}$ 恒成立，证毕.`,
      },
      {
        id: "prob-sec-5-2-7-sol-2",
        title: `解法3`,
        method: "standard",
        steps: [],
        explanation: `高妙解法二
: 令 $h(x)=\\mathrm{e}^{x}-x-1$ ，则 $h'(x)=\\mathrm{e}^{x}-1$ ，

由于 $y=e^{x}$ 在 R 上单调递增，

所以 $h'(x)=\\mathrm{e}^{x}-1$ 在 R 上单调递增，

又 $h'(0)=\\mathrm{e}^{0}-1=0$ ，所以当 x<0 时， $h'(x)<0$ ；当 x>0 时， $h'(x)>0$

所以 $h(x)$ 在 $(-\\infty,0)$ 上单调递减，在 $(0,+\\infty)$ 上单调递增，

故 $h(x) \\geqslant h(0) = 0$ ，则 $e^{x} \\geqslant x + 1$ ，当且仅当 x = 0 时，等号成立，

因为 $f(x) = a(\\mathrm{e}^x +a) - x = ae^x +a^2 -x$

$$
= \\mathrm{e} ^ {x + \\ln a} + a ^ {2} - x \\geqslant x + \\ln a + 1 + a ^ {2} - x,
$$

当且仅当 $x + \\ln a = 0$ ，即 $x = -\\ln a$ 时，等号成立，

所以，要证 $f(x) > 2\\ln a + \\frac{3}{2}$

即证 $x + \\ln a + 1 + a^2 - x > 2\\ln a + \\frac{3}{2}$ ,

即证 $a^2 -\\frac{1}{2} -\\ln a > 0.$

令 $g(a) = a^{2} - \\frac{1}{2} -\\ln a(a > 0)$ ，则 $g^{\\prime}(a) = 2a - \\frac{1}{a} = \\frac{2a^{2} - 1}{a},$

令 $g^{\\prime}(a) < 0$ ，则 $0 < a < \\frac{\\sqrt{2}}{2}$

令 $g^{\\prime}(a) > 0$ ，则 $a > \\frac{\\sqrt{2}}{2}$

所以 $g(a)$ 在 $\\left(0, \\frac{\\sqrt{2}}{2}\\right)$ 上单调递减，在 $\\left(\\frac{\\sqrt{2}}{2}, +\\infty\\right)$ 上单调递增，

所以 $g(a)_{\\mathrm{min}} = g\\left(\\frac{\\sqrt{2}}{2}\\right) = \\left(\\frac{\\sqrt{2}}{2}\\right)^2 -\\frac{1}{2} -\\ln \\frac{\\sqrt{2}}{2} = \\ln \\sqrt{2} >0$ ，则 $g(a) > 0$ 恒成立，

所以，当 $a > 0$ 时， $f(x) > 2\\ln a + \\frac{3}{2}$ 恒成立，证毕.

评注 高妙解法三同上。`,
      },
      {
        id: "prob-sec-5-2-7-sol-5",
        title: `解法6`,
        method: "standard",
        steps: [],
        explanation: `高妙解法四
: 目标式 $a(\\mathrm{e}^{x} + a) - x > 2\\ln a + \\frac{3}{2}$ , 即 $\\mathrm{e}^{x + \\ln a} + a^{2} - x - 2\\ln a - \\frac{3}{2} > 0$ ,

$$
\\Leftrightarrow \\mathrm{e} ^ {x + \\ln a} - (x + \\ln a + 1) + a ^ {2} - \\ln a - \\frac {1}{2} > 0,
$$

$\\Leftrightarrow \\underbrace{\\mathrm{e}^{x + \\ln a} - (x + \\ln a + 1)}_{\\geqslant 0} + \\underbrace{\\frac{1}{2}(a^2 - \\ln a^2 - 1)}_{\\geqslant 0} + \\frac{a^2}{2} > 0,$ 证毕.

评注 本题的命题背景是凸函数的切线不等式,因此,可作如下考虑:

当 $a > 0$ 时，给出函数 $g(x) = ae^{x} + a^{2} - 2\\ln a$ 其在点 $\\left(\\ln \\frac{1}{a}, g\\left(\\ln \\frac{1}{a}\\right)\\right)$ 处的切线方程为

$$
y - g \\left(\\ln \\frac {1}{a}\\right) = g ^ {\\prime} \\left(\\ln \\frac {1}{a}\\right) \\left(x - \\ln \\frac {1}{a}\\right),
$$

又 $g^{\\prime}(x) = a\\mathrm{e}^{x},g^{\\prime}\\left(\\ln \\frac{1}{a}\\right) = a\\mathrm{e}^{\\ln \\frac{1}{a}} = 1,g\\left(\\ln \\frac{1}{a}\\right) = a^{2} - 2\\ln a + 1,$

因此， $y=x-\\ln\\frac{1}{a}+a^{2}-2\\ln a+1=x+a^{2}-\\ln a+1$ ，该切线与直线 $y=x+\\frac{3}{2}$ 平行，

且 $a^{2}-a+\\frac{1}{2}=\\left(a-\\frac{1}{2}\\right)^{2}+\\frac{1}{4}>0\\Rightarrow a^{2}-\\frac{1}{2}>a-1>\\ln a,$

即 $a^2 -\\ln a + 1 > \\frac{3}{2}$ ，得 $x + a^{2} - \\ln a + 1 > x + \\frac{3}{2},$

由凸函数的切线不等式可知 $g(x)=ae^{x}+a^{2}-2\\ln a\\geqslant x+1+a^{2}-\\ln a>x+\\frac{3}{2}$

即 $a(\\mathrm{e}^x + a) - x > 2\\ln a + \\frac{3}{2}$ .`,
      },
    ],
    tags: [],
    source: `2023 年高考全国Ⅰ卷第 19 题`,
  },
  {
    id: "prob-sec-5-2-8",
    topicId: "topic-sec-5-2",
    title: `2023 全国Ⅰ：等差数列与倒数型数列求参`,
    content: `(2023 年高考全国Ⅰ卷第 20 题)
设等差数列 $\\{a_{n}\\}$ 的公差为 $d$ ，且 $d > 1$ . 令 $b_{n} = \\frac{n^{2} + n}{a_{n}}$ ，记 $S_{n}, T_{n}$ 分别为数列 $\\{a_{n}\\}$ ， $\\{b_{n}\\}$ 的前 $n$ 项和.

(1) 若 $3a_{2}=3a_{1}+a_{3}, S_{3}+T_{3}=21$ ，求 $\\{a_{n}\\}$ 的通项公式；

(2) 若 $\\{b_{n}\\}$ 为等差数列，且 $S_{99}-T_{99}=99$ ，求 d.`,
    preview: `设等差数列 的公差为 d ，且 d > 1 . 令 b_n = n^2 + n{a_n} ，记 S_n, T_n 分别为数列 ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-5-2-8-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1) 因为 $3a_{2}=3a_{1}+a_{3}$ ，所以 $3d=a_{1}+2d$ ，解得 $a_{1}=d$ ，

所以 $S_{3} = 3a_{2} = 3(a_{1} + d) = 6d$ ，又 $T_{3} = b_{1} + b_{2} + b_{3} = \\frac{2}{d} +\\frac{6}{2d} +\\frac{12}{3d} = \\frac{9}{d},$

所以 $S_{3} + T_{3} = 6d + \\frac{9}{d} = 21$ ，即 $2d^{2} - 7d + 3 = 0$ ，解得 d = 3 或 $d = \\frac{1}{2}$ （舍去），

所以 $a_{n}=a_{1}+(n-1)\\cdot d=3n.$

(2)`,
      },
      {
        id: "prob-sec-5-2-8-sol-1",
        title: `解法2`,
        method: "standard",
        steps: [],
        explanation: `高妙解法一
:因为 $\\{b_{n}\\}$ 为等差数列,所以 $2b_{2}=b_{1}+b_{3}$ ,即 $\\frac{12}{a_{2}}=\\frac{2}{a_{1}}+\\frac{12}{a_{3}}$ ,

所以 $6\\left(\\frac{1}{a_2} -\\frac{1}{a_3}\\right) = \\frac{6d}{a_2a_3} = \\frac{1}{a_1}$ ，即 $a_1^2 -3a_1d + 2d^2 = 0$ ，解得 $a_1 = d$ 或 $a_1 = 2d$

因为 d>1，所以 $a_{n}>0$ ，又 $S_{99}-T_{99}=99$ ，由等差数列性质知

$99a_{50}-99b_{50}=99$ ，即 $a_{50}-b_{50}=1$ ，

所以 $a_{50}-\\frac{2550}{a_{50}}=1$ ，即 $a_{50}^{2}-a_{50}-2550=0$ ，解得 $a_{50}=51$ 或 $a_{50}=-50$ （舍去）.

当 $a_{1}=2d$ 时， $a_{50}=a_{1}+49d=51d=51$ ，解得 d=1，与 d>1 矛盾，无解；

当 $a_{1}=d$ 时， $a_{50}=a_{1}+49d=50d=51$ ，解得 $d=\\frac{51}{50}$ 。综上， $d=\\frac{51}{50}$ 。`,
      },
    ],
    tags: [],
    source: `2023 年高考全国Ⅰ卷第 20 题`,
  },
  {
    id: "prob-sec-5-2-9",
    topicId: "topic-sec-5-2",
    title: `2023 全国Ⅰ：抛物线轨迹与内接矩形周长`,
    content: `(2023 年高考全国Ⅰ卷第 22 题)
在直角坐标系 $xOy$ 中，点 $P$ 到 $x$ 轴的距离等于点 $P$ 到点 $\\left(0, \\frac{1}{2}\\right)$ 的距离，记动点 $P$ 的轨迹为 $W$ .

(1)求 W 的方程；
(2)已知矩形 ABCD 有三个顶点在 W 上，证明：矩形 ABCD 的周长大于 $3\\sqrt{3}$ .`,
    preview: `在直角坐标系 xOy 中，点 P 到 x 轴的距离等于点 P 到点 (0, 1/2) 的距离，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-5-2-9-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1) 设 $P(x, y)$ , 点 $P$ 到 $x$ 轴的距离等于点 $P$ 到点 $\\left(0, \\frac{1}{2}\\right)$ 的距离,

所以 $|y| = \\sqrt{(x - 0)^2 + (y - \\frac{1}{2})^2}$ ，两边平方化简得 $y = x^2 + \\frac{1}{4}$ .

(2)`,
      },
      {
        id: "prob-sec-5-2-9-sol-1",
        title: `解法2`,
        method: "standard",
        steps: [],
        explanation: `高妙解法一
: 如图 5-2-6 所示, 不妨设 A, B, C 在 W 上且依次从左到右排列.

设 $B(t, t^{2} + \\frac{1}{4})$ ，由对称设 k > 0，

$$
\\left\\{ \\begin{array}{l l} {l _ {B C}: y - \\left(t ^ {2} + \\frac {1}{4}\\right) = k (x - t),} \\\\ {y = x ^ {2} + \\frac {1}{4},} \\end{array} \\right. \\text {得} x ^ {2} - k x + k t - t ^ {2} = 0,
$$

![](images/a57898de538db4879621164b7998bc90c93a6d01c7d6fba5fc873d2b5ce8ba0b.jpg)

图5-2-6

得 $x_{C} + t = k$ ，得 $x_{C} = k - t$ ，同理可得 $x_{A} = -\\frac{1}{k} -t,$

所以 $|BC| = \\sqrt{1 + k^2} |k - t - t| = \\sqrt{1 + k^2} |k - 2t|$

$$
\\left| A B \\right| = \\sqrt {1 + \\frac {1}{k ^ {2}}} \\left| - \\frac {1}{k} - t - t \\right| = \\sqrt {1 + \\frac {1}{k ^ {2}}} \\left| \\frac {1}{k} + 2 t \\right|,
$$

所以 $|AB| + |BC| = \\sqrt{1 + k^2} \\cdot \\left(|2t - k| + \\left|\\frac{2}{k} t + \\frac{1}{k^2}\\right|\\right)$ .

又 $\\left(|2t-k|+\\left|\\frac{2}{k}t+\\frac{1}{k^{2}}\\right|\\right)_{\\min}=\\left\\{\\begin{aligned}\\frac{1+k^{2}}{k^{2}},&t=\\frac{k}{2}\\text{时取到,}\\\\ \\frac{k^{2}+1}{k},&t=-\\frac{1}{2k}\\text{时取到,}\\end{aligned}\\right.$

当 $k \\geqslant 1$ 时， $\\frac{k^2 + 1}{k^2} \\leqslant \\frac{k^2 + 1}{k}$ ，所以原式 $\\geqslant \\sqrt{1 + k^2} \\cdot \\frac{k^2 + 1}{k^2} = \\sqrt{\\frac{(1 + k^2)^3}{k^4}}$ ，令 $t_0 = k^2 \\geqslant 1$

$$
g (t _ {0}) = \\frac {(1 + t _ {0}) ^ {3}}{t _ {0} ^ {2}} (t _ {0} \\geqslant 1), g ^ {\\prime} (t _ {0}) = \\frac {(1 + t _ {0}) ^ {2} (t _ {0} - 2)}{t _ {0} ^ {3}},
$$

$g(t_0)_{\\min} = g(2) = \\frac{27}{4}$ （等号当且仅当 $k = 1$ 且 $k = \\sqrt{2}$ 才成立，所以取不到），即证！

当 $0 < k < 1$ 时， $\\frac{k^2 + 1}{k^2} > \\frac{k^2 + 1}{|k|}$ ，原式 $> \\sqrt{1 + k^2} \\cdot \\frac{k^2 + 1}{k} = \\sqrt{\\frac{(1 + k^2)^3}{k^2}}$

令 $t_0 = k^2 \\in (0,1)$ ,

$h(t_0) = \\frac{(1 + t_0)^3}{t_0}, h'(t_0) = \\frac{(1 + t_0)^2(2t_0 - 1)}{t_0^2}, h(t_0)_{\\min} = h\\left(\\frac{1}{2}\\right) = \\frac{27}{4}$ （等号取不到），即证.`,
      },
      {
        id: "prob-sec-5-2-9-sol-2",
        title: `解法3`,
        method: "standard",
        steps: [],
        explanation: `高妙解法二
:不妨设 A, B, C 在 W 上且依次从左到右排列, 设 $B\\left(t, t^{2} + \\frac{1}{4}\\right)$ , 由对称不妨设 $1 \\geqslant k > 0$ , 由`,
      },
      {
        id: "prob-sec-5-2-9-sol-3",
        title: `解法一`,
        method: "creative",
        steps: [],
        explanation: `可得

$$
\\begin{array}{l} L = 2 (| A B | + | B C |) = 2 \\left(\\sqrt {1 + k ^ {2}} | 2 t - k | + \\frac {\\sqrt {1 + k ^ {2}}}{k} \\left| 2 t + \\frac {1}{k} \\right|\\right) \\\\ \\geqslant 2 \\sqrt {1 + k ^ {2}} \\left(| 2 t - k | + \\left| 2 t + \\frac {1}{k} \\right|\\right), \\\\ \\end{array}
$$

所以 $L \\geqslant 2\\left(\\sqrt{1 + k^2} + \\left|\\frac{1}{k} + k\\right|\\right) = 2 \\cdot \\frac{(1 + k^2)(\\sqrt{1 + k^2})}{k} = g(k)$ ,

$$
g ^ {\\prime} (k) = \\sqrt {k ^ {2} + 1} \\cdot \\left(2 - \\frac {1}{k ^ {2}}\\right),
$$

当 $k = \\frac{\\sqrt{2}}{2}$ 时， $L_{\\min} = 2 \\times \\frac{(1 + \\frac{1}{2})\\sqrt{1 + \\frac{1}{2}}}{\\frac{\\sqrt{2}}{2}} = \\frac{2 \\times \\frac{3}{2} \\times \\frac{\\sqrt{6}}{2}}{\\frac{\\sqrt{2}}{2}} = 3\\sqrt{3}$ .

等号不能同时成立,故得证.

或者也可换个代数结构构造函数求导.

$$
L \\geqslant 2 \\left(\\sqrt {1 + k ^ {2}} + \\left| \\frac {1}{k} + k \\right|\\right) = 2 \\cdot \\frac {(1 + k ^ {2}) (\\sqrt {1 + k ^ {2}})}{k} = 2 \\sqrt {\\frac {(1 + k ^ {2}) ^ {3}}{k ^ {2}}} = 2 \\sqrt {g (k)},
$$

$g^{\\prime}(k) = \\frac{(2k - 1)(k + 1)^{2}}{k^{2}}$ 在定义域中先减后增，最小值为 $g\\left(\\frac{1}{2}\\right) = \\frac{27}{4}$ ，所以 $L > 3\\sqrt{3}$ .`,
      },
      {
        id: "prob-sec-5-2-9-sol-4",
        title: `解法5`,
        method: "standard",
        steps: [],
        explanation: `高妙解法三
:设矩形的三个顶点 $A\\left(a,a^{2}+\\frac{1}{4}\\right)$ , $B\\left(t,t^{2}+\\frac{1}{4}\\right)$ , $C\\left(c,c^{2}+\\frac{1}{4}\\right)$ 在 W 上, 且 a<b<c,

$$
k _ {A B} k _ {B C} = - 1, a + t <   t + c, \\text {令} k _ {A B} = a + t = m <   0, k _ {B C} = t + c = n > 0, m n = - 1.
$$

设矩形周长为 $L$ ，由对称性不妨设 $\\mid m\\mid \\geqslant \\mid n\\mid ,c - a = n - m = n + \\frac{1}{n}$ 则

$$
\\begin{array}{l} \\frac {1}{2} L = | A B | + | B C | = (t - a) \\sqrt {1 + m ^ {2}} + (c - t) \\sqrt {1 + n ^ {2}} \\\\ \\geqslant (c - a) \\sqrt {1 + n ^ {2}} = \\left(n + \\frac {1}{n}\\right) \\sqrt {1 + n ^ {2}}. \\\\ \\end{array}
$$

令 $f(x) = \\left(x + \\frac{1}{x}\\right)^2 (1 + x^2), x > 0, f'(x) = 2\\left(x + \\frac{1}{x}\\right)^2\\left(2x - \\frac{1}{x}\\right)$ ,

故 $\\frac{1}{2} L\\geqslant \\sqrt{f(n)}\\geqslant \\sqrt{f\\left(\\frac{\\sqrt{2}}{2}\\right)} = \\frac{3\\sqrt{3}}{2}$ 即 $L\\geqslant 3\\sqrt{3}$

当 $L=3\\sqrt{3}$ 时， $n=\\frac{\\sqrt{2}}{2}$ ， $m=-\\sqrt{2}$ ，且 $(b-a)\\sqrt{1+m^{2}}=(b-a)\\sqrt{1+n^{2}}$ ，矛盾！

故 $L > 3\\sqrt{3}$ ，得证！`,
      },
      {
        id: "prob-sec-5-2-9-sol-5",
        title: `解法6`,
        method: "standard",
        steps: [],
        explanation: `高妙解法四
:不妨设 $A\\left(a,a^{2}+\\frac{1}{4}\\right), B\\left(t,t^{2}+\\frac{1}{4}\\right), C\\left(c,c^{2}+\\frac{1}{4}\\right)$ 在 W 上,且 $AB \\perp BC$ ,

则 $\\overrightarrow{AB} \\cdot \\overrightarrow{BC} = 0 \\Rightarrow (a + t)(t + c) = -1$ . 设 $a + t = m, t + c = n$ , 不妨设 $|n| \\leqslant |m|$ ,

则 $|AB| + |BC| = |a - b|\\sqrt{x^2 + 1} + |b - c|\\sqrt{y^2 + 1}\\geqslant (|a - b| + |b - c|)\\sqrt{x^2 + 1}$

$$
\\geqslant \\left| a - c \\right| \\sqrt {x ^ {2} + 1} = \\sqrt {(x - y) ^ {2} (x ^ {2} + 1)} = \\sqrt {\\left(x ^ {2} + \\frac {1}{4} y ^ {2} + \\frac {3}{4} y ^ {2} + 2\\right) (x ^ {2} + 1)}
$$

$$
\\geqslant \\sqrt {\\left(- x y + \\frac {3}{4} y ^ {2} + 2\\right) (x ^ {2} + 1)}
$$

$= \\sqrt{\\left(\\frac{3}{4}y^2 + 3\\right)(x^2 + 1)} \\geqslant -\\frac{\\sqrt{3}}{2}xy + \\sqrt{3} = \\frac{3\\sqrt{3}}{2}$ , 显然等号不能成立, 证毕.`,
      },
      {
        id: "prob-sec-5-2-9-sol-6",
        title: `解法7`,
        method: "standard",
        steps: [],
        explanation: `高妙解法五
:由平移的不变性,将抛物线化为 $y=x^{2}$ 考虑.

设 $A(a, a^2)$ , 直线 $AB$ 的参数方程为 $\\begin{cases} x = a + t \\cos \\theta, \\\\ y = a^2 + t \\sin \\theta \\end{cases} \\left(0 < \\theta < \\frac{\\pi}{2}\\right)$ .

代入 $y = x^{2}$ 得 $t = \\frac{\\sin\\theta - 2a\\cos\\theta}{\\cos^{2}\\theta}$ , 因此 $|AB| = \\frac{|\\sin\\theta - 2a\\cos\\theta|}{\\cos^{2}\\theta}$ .

直线 $AD$ 的参数方程为 $\\left\\{ \\begin{array}{l}x = a + t\\cos \\left(\\theta +\\frac{\\pi}{2}\\right),\\\\ y = a^{2} + t\\sin \\left(\\theta +\\frac{\\pi}{2}\\right). \\end{array} \\right.$

代入 $y = x^{2}$ 得 $t = \\frac{\\cos\\theta + 2a\\sin\\theta}{\\cos^{2}\\theta}$ , 因此 $|AD| = \\frac{|\\cos\\theta + 2a\\sin\\theta|}{\\cos^{2}\\theta}$ ,

因此，ABCD 的周长 $l=f(a,\\theta)=2\\left(\\frac{\\left|\\sin\\theta-2a\\cos\\theta\\right|}{\\cos^{2}\\theta}+\\frac{\\left|\\cos\\theta+2a\\sin\\theta\\right|}{\\cos^{2}\\theta}\\right)$ .

固定 $\\theta$ ，当 $2a=\\tan\\theta$ 或 $2a=-\\cot\\theta$ 时， $l=f(a,\\theta)$ 取最小值.

当 $2a=\\tan\\theta$ 时， $l=f(a,\\theta)=2\\cdot\\frac{|\\sin\\theta+\\tan\\theta\\sin\\theta|}{\\cos^{2}\\theta}=\\frac{2}{\\sin\\theta\\cos^{2}\\theta}.$

当 $2a = -\\cot \\theta$ 时, $l = f(a, \\theta) = 2 \\cdot \\frac{|\\sin \\theta + \\cot \\theta \\cos \\theta|}{\\cos^2 \\theta} = \\frac{2}{\\sin^2 \\theta \\cos \\theta}$ .

由均值不等式， $1 = \\sin^2\\theta +\\frac{1}{2}\\cos^2\\theta +\\frac{1}{2}\\cos^2\\theta \\geqslant 3\\left(\\sin^2\\theta \\cdot \\frac{1}{2}\\cos^2\\theta \\cdot \\frac{1}{2}\\cos^2\\theta\\right)^{\\frac{1}{3}}$

得 $\\sin\\theta\\cos^{2}\\theta\\leqslant\\frac{2\\sqrt{3}}{9}$ ，同理， $\\sin^{2}\\theta\\cos\\theta\\leqslant\\frac{2\\sqrt{3}}{9}$

所以两种情况都有 $l=f(a,\\theta)\\geqslant\\frac{2}{\\frac{2\\sqrt{3}}{9}}=3\\sqrt{3}$ .

由于上述不等式等号成立时,一条边长必须为0,所以等号不成立.

因此，ABCD 的周长大于 $3\\sqrt{3}$ .`,
      },
      {
        id: "prob-sec-5-2-9-sol-7",
        title: `解法8`,
        method: "geometric",
        steps: [],
        explanation: `高妙解法六
:为了计算方便,我们将抛物线向下移动 $\\frac{1}{4}$ 个单位得抛物线 $W^{\\prime}:y=x^{2}$ ,矩形ABCD变换为矩形 $A^{\\prime}B^{\\prime}C^{\\prime}D^{\\prime}$ ,则问题等价于矩形 $A^{\\prime}B^{\\prime}C^{\\prime}D^{\\prime}$ 的周长大于 $3\\sqrt{3}$ .如图5-2-7所示.

![](images/fb48c7d5bf86e387f73113fb924160f1bb91ad06a32e076ea3b08423b67f5dde.jpg)
图5-2-7

设 $B^{\\prime}(t_0,t_0^{2}),A^{\\prime}(t_{1},t_{1}^{2}),C^{\\prime}(t_{2},t_{2}^{2})$ ，根据对称性不妨设 $t_0\\geqslant 0$

则 $k_{A'B'} = t_1 + t_0, k_{B'C'} = t_2 + t_0$ ，由于 $A'B' \\perp B'C'$ ，则 $(t_1 + t_0)(t_2 + t_0) = -1$ .

由于 $|A'B'| = \\sqrt{1 + (t_1 + t_0)^2} |t_1 - t_0|$ ， $|B'C'| = \\sqrt{1 + (t_2 + t_0)^2} |t_2 - t_0|$ ，且 $t_0$ 介于 $t_1, t_2$ 之间，

则 $|A'B'| + |B'C'| = \\sqrt{1 + (t_1 + t_0)^2} |t_1 - t_0| + \\sqrt{1 + (t_2 + t_0)^2} |t_2 - t_0|$ .

令 $t_2 + t_0 = \\tan \\theta, t_1 + t_0 = -\\cot \\theta, \\theta \\in (0, \\frac{\\pi}{2})$ ，则 $t_2 = \\tan \\theta - t_0, t_1 = -\\cot \\theta - t_0$

从而 $|A'B'| + |B'C'| = \\sqrt{1 + \\cot^2\\theta}(2t_0 + \\cot \\theta) + \\sqrt{1 + \\tan^2\\theta} (\\tan \\theta - 2t_0)$ .

故 $|A'B'| + |B'C'| = 2t_0\\left(\\frac{1}{\\sin\\theta} -\\frac{1}{\\cos\\theta}\\right) + \\frac{\\sin\\theta}{\\cos^2\\theta} +\\frac{\\cos\\theta}{\\sin^2\\theta}$

$$
= \\frac {2 t _ {0} (\\cos \\theta - \\sin \\theta)}{\\sin \\theta \\cos \\theta} + \\frac {\\sin^ {3} \\theta + \\cos^ {3} \\theta}{\\sin^ {2} \\theta \\cos^ {2} \\theta}.
$$

① 当 $\\theta \\in \\left(0, \\frac{\\pi}{4}\\right]$ 时， $|A'B'| + |B'C'| \\geqslant \\frac{\\sin^3\\theta + \\cos^3\\theta}{\\sin^2\\theta\\cos^2\\theta} = \\frac{\\sin\\theta}{\\cos^2\\theta} + \\frac{\\cos\\theta}{\\sin^2\\theta}$

$$
\\geqslant 2 \\sqrt {\\frac {1}{\\sin \\theta \\cos \\theta}} = 2 \\sqrt {\\frac {2}{\\sin 2 \\theta}} \\geqslant 2 \\sqrt {2};
$$

② 当 $\\theta \\in \\left(\\frac{\\pi}{4}, \\frac{\\pi}{2}\\right)$ 时，由于 $t_1 < t_0 < t_2$ ，从而 $-\\cot \\theta - t_0 < t_0 < \\tan \\theta - t_0$ ，从而

$-\\frac{\\cot \\theta}{2} < t_0 < \\frac{\\tan \\theta}{2}$ , 又 $t_0 \\geqslant 0$ , 故 $0 \\leqslant t_0 < \\frac{\\tan \\theta}{2}$ .

由此 $|A'B'| + |B'C'| = \\frac{2t_0(\\cos\\theta - \\sin\\theta)}{\\sin\\theta\\cos\\theta} + \\frac{\\sin^3\\theta + \\cos^3\\theta}{\\sin^2\\theta\\cos^2\\theta}$

$$
> \\frac {\\sin \\theta (\\cos \\theta - \\sin \\theta) (\\sin \\theta \\cos \\theta)}{\\sin^ {2} \\theta \\cos^ {3} \\theta} + \\frac {\\sin^ {3} \\theta + \\cos^ {3} \\theta}{\\sin^ {2} \\theta \\cos^ {2} \\theta} = \\frac {1}{\\cos \\theta} + \\frac {\\cos \\theta}{\\sin^ {2} \\theta}
$$

$$
= \\sqrt {\\frac {2}{\\sin^ {2} \\theta \\sin^ {2} \\theta \\cdot 2 \\cos^ {2} \\theta}} \\geqslant \\sqrt {\\frac {2}{\\left(\\frac {2}{3}\\right) ^ {3}}} = \\frac {3 \\sqrt {3}}{2}.
$$

综合上述,矩形 $A'B'C'D'$ 的周长大于 $3\\sqrt{3}$ .

评注 在以上解法中求最值部分需要用到以下三个小知识：

(1) $a + b \\geqslant a \\pm b$ ;
(2) 若 $0 < k \\leqslant 1$ ，则 $\\frac{1}{k} \\geqslant k, \\sqrt{1 + \\frac{1}{k^{2}}} \\geqslant \\sqrt{1 + k^{2}}$ ;
(3) 若 $f(x)=|ax-c|+|bx-d|$ ，则 $f(x)_{\\min}=\\min\\left|\\frac{bc-ad}{a},\\frac{bc-ad}{b}\\right|$ .

另外,如果深入分析本题的命题背景,我们会发现一个值得思考的问题,此处称之为引理:

抛物线 $y^{2}=2px(p>0)$ 上点 $(p,\\pm\\sqrt{2}p)$ 的法线被抛物线所截得的弦长最短.

事实上,设抛物线 $y^{2} = 2px (p > 0)$ 上一点 $A(m, n)$ , 则该点的法线方程为 $y - n = -\\frac{n}{p}(x - m)$ , 代入抛物线方程得 $y^{2} + \\frac{2p^{2}y}{n} - 2p^{2} - 2pm = 0$ , 由弦长公式得弦长的平方 $L^{2}$ 为: $L^{2} = \\frac{8pm^{3} + 12p^{2}m^{2} + 6p^{3}m + p^{4}}{m^{2}}$ , 求导得 $m = p$ (另外一种情况舍去)时取得最小值, 所以所求的点为 $A(p, \\pm \\sqrt{2}p)$ .

结合本题,我们发现运动与变化是研究几何问题的基本观点,求矩形周长 $L=2(|AB|+|BC|)$ 的范围,因为 $AB \\perp BC$ ,则当 $BC \\to 0$ 时,直线 BC 变成过点 A 的切线,即为过点的法线被抛物线所截得的最短弦长的 2 倍.

所以,矩形ABCD的周长最小值的极端情况为法线被抛物线所截得的最短弦长的2倍(此时等号取不到),根据以上引理结论,本题中的点 $A\\left[-\\frac{\\sqrt{2}}{2},\\frac{3}{4}\\right]$ （由对称不妨取左边的点),求得法线方程为 $y=\\frac{\\sqrt{2}}{2}x+\\frac{5}{4}$ ,联立 $y=x^{2}+\\frac{1}{4}$ ,根据弦长公式求得弦长为 $\\frac{3\\sqrt{3}}{2}$ ,所以矩形ABCD的周长大于 $3\\sqrt{3}$ .

注：本题前五种解法由林威老师提供，`,
      },
    ],
    tags: [],
    source: `2023 年高考全国Ⅰ卷第 22 题`,
  },
  {
    id: "prob-sec-5-3-1",
    topicId: "topic-sec-5-3",
    title: `2024 新课标Ⅰ：分段函数单调性求参`,
    content: `(2024年高考新课标全国Ⅰ卷第6题)
已知函数 $f(x) = \\begin{cases} -x^2 - 2ax - a, & x < 0, \\\\ \\mathrm{e}^x + \\ln (x + 1), & x \\geqslant 0 \\end{cases}$ 在 $\\mathbf{R}$ 上单调递增，则 $a$ 的取值范围是

A. $(-∞,0]$

B. $[-1,0]$

C. $[-1, 1]$

D. $\\left[0,+\\infty\\right)$`,
    preview: `已知函数 在 R 上单调递增，则 a 的取值范围是 A. (-∞,0] B. [-1,0] C. [-1, 1] D. [0,+∞)`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-5-3-1-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `因为 $\\mathrm{e}^{x}$ 与 $\\ln(x+1)$ 在 $[0,+\\infty)$ 上单调递增，

所以 $\\mathrm{e}^{x}+\\ln(x+1)$ 在 $[0,+\\infty)$ 上单调递增.

而 $y=-x^{2}-2ax-a$ 在 $(-∞,0)$ 上单调递增可得 $-a≥0⇒a≤0$ .

在 x=0 时应有 $-x^{2}-2ax-a\\leqslant e^{x}+\\ln(x+1)$ ，解得 $a\\geqslant-1$ ，故 $-1\\leqslant a\\leqslant0$ .

故答案为 B.`,
      },
      {
        id: "prob-sec-5-3-1-sol-1",
        title: `解法2`,
        method: "standard",
        steps: [],
        explanation: `高妙解法二
: 当 $x \\geqslant 0$ 时, $f'(x) = e^{x} + \\frac{1}{1 + x} > 0$ , 故 $f(x)$ 在 $[0, +\\infty)$ 上单调递增.

而 $y = -x^{2} - 2ax - a$ 在 $(-\\infty,0)$ 上单调递增可得 $-a\\geqslant 0\\Rightarrow a\\leqslant 0.$

在 x=0 时应有 $-x^{2}-2ax-a\\leqslant e^{x}+\\ln(x+1)$ ，解得 $a\\geqslant-1$ ，故 $-1\\leqslant a\\leqslant0$ .

故答案为 B.`,
      },
    ],
    tags: [],
    source: `2024年高考新课标全国Ⅰ卷第6题`,
  },
  {
    id: "prob-sec-5-3-2",
    topicId: "topic-sec-5-3",
    title: `设函数 f(x)=a(x+1)^2-1 , g(x)=`,
    content: `(2024年高考新课标全国Ⅱ卷第6题) 设函数 $f(x)=a(x+1)^{2}-1$ , $g(x)=\\cos x+2ax$ , 当 $x\\in(-1,1)$ 时, 曲线 $y=f(x)$ 与 $y=g(x)$ 恰有一个交点, 则 a=
A. -1

B. $\\frac{1}{2}$

C. 1

D. 2`,
    preview: `设函数 f(x)=a(x+1)^2-1 , g(x)= x+2ax , 当 x(-1,1) 时, 曲线 y=f(x) 与 y=g(x) 恰有一个交点, 则 a=`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-5-3-2-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `令 $f(x)=g(x)$ ，即 $a(x+1)^{2}-1=\\cos x+2ax$ ，

可得 $ax^{2}+a-1=\\cos x$ ,

令 $F(x) = ax^{2} + a - 1, G(x) = \\cos x,$

原题意等价于当 $x \\in (-1,1)$ 时，曲线 $y = F(x)$ 与 $y = G(x)$ 恰有一个交点，

注意到 $F(x)$ , $G(x)$ 均为偶函数, 可知该交点只能在 y 轴上,

可得 $F(0)=G(0)$ ，即 a-1=1，解得 a=2，

若 a=2，令 $F(x)=G(x)$ ，可得 $2x^{2}+1-\\cos x=0$ 。

因为 $x \\in (-1,1)$ ，则 $2x^{2} \\geqslant 0, 1 - \\cos x \\geqslant 0$ ，当且仅当 x = 0 时，等号成立，

可得 $2x^{2}+1-\\cos x\\geqslant0$ ，当且仅当 x=0 时，等号成立，

则方程 $2x^{2}+1-\\cos x=0$ 有且仅有一个实根 0，

即曲线 $y=F(x)$ 与 $y=G(x)$ 恰有一个交点，所以 a=2 符合题意.

综上所述:a=2.`,
      },
      {
        id: "prob-sec-5-3-2-sol-1",
        title: `解法2`,
        method: "standard",
        steps: [],
        explanation: `高妙解法二
: 令 $h(x)=f(x)-g(x)=ax^{2}+a-1-\\cos x, x\\in(-1,1)$ ,

原题意等价于 $h(x)$ 有且仅有一个零点，

因为 $h(-x)=a(-x)^{2}+a-1-\\cos(-x)=ax^{2}+a-1-\\cos x=h(x)$ ,

则 $h(x)$ 为偶函数, 根据偶函数的对称性可知 $h(x)$ 的零点只能为 0,

即 $h(0)=a-2=0$ ，解得 a=2，若 a=2，则 $h(x)=2x^{2}+1-\\cos x, x\\in(-1,1)$ ，

又因为 $2x^{2} \\geqslant 0, 1 - \\cos x \\geqslant 0$ 当且仅当 x = 0 时等号成立，

可得 $h(x) \\geqslant 0$ ，当且仅当 x = 0 时等号成立，

即 $h(x)$ 有且仅有一个零点 0, 所以 a=2 符合题意. 故选: D.`,
      },
    ],
    tags: [],
    source: `2024年高考新课标全国Ⅱ卷第6题`,
  },
  {
    id: "prob-sec-5-3-3",
    topicId: "topic-sec-5-3",
    title: `2024 新课标Ⅱ：对数函数非负条件最值`,
    content: `(2024 年高考新课标全国Ⅱ卷第 8 题)
设函数 $f(x) = (x + a)\\ln (x + b)$ ，若 $f(x) \\geqslant 0$ ，则 $a^2 + b^2$ 的最小值为 （）

A. $\\frac{1}{8}$

B. $\\frac{1}{4}$

C. $\\frac{1}{2}$

D. 1`,
    preview: `设函数 f(x) = (x + a) (x + b) ，若 f(x) ≥ 0 ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-5-3-3-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `由题意可知 $f(x)$ 的定义域为 $(-b, +\\infty)$ ,

令 $x + a = 0$ 解得 $x = -a$ ; 令 $\\ln (x + b) = 0$ 解得 $x = 1 - b$ .

若 $-a\\leqslant-b$ ，当 $x\\in(-b,1-b)$ 时，可知 $x+a>0,\\ln(x+b)<0$ ，

此时 $f(x)<0$ , 不合题意.

若 $-b < -a < 1 - b$ ，当 $x \\in (-a, 1 - b)$ 时，可知 $x + a > 0, \\ln (x + b) < 0$

此时 $f(x)<0$ , 不合题意.

若 $-a = 1 - b$ ，当 $x\\in (-b,1 - b)$ 时，可知 $x + a <   0,\\ln (x + b) <   0$ ，此时 $f(x) > 0$

当 $x \\in [1 - b, +\\infty)$ 时，可知 $x + a \\geqslant 0, \\ln (x + b) \\geqslant 0$ ，此时 $f(x) \\geqslant 0$

可知若-a=1-b,符合题意.

若 $-a > 1 - b$ ，当 $x\\in (1 - b, - a)$ 时，可知 $x + a <   0,\\ln (x + b) > 0$

此时 $f(x)<0$ , 不合题意.

综上所述，-a=1-b，即 $b=a+1$ ，

则 $a^2 + b^2 = a^2 + (a + 1)^2 = 2\\left(a + \\frac{1}{2}\\right)^2 + \\frac{1}{2} \\geqslant \\frac{1}{2}$ ,

当且仅当 $a = -\\frac{1}{2}, b = \\frac{1}{2}$ 时，等号成立，所以 $a^2 + b^2$ 的最小值为 $\\frac{1}{2}$ .`,
      },
      {
        id: "prob-sec-5-3-3-sol-1",
        title: `解法2`,
        method: "standard",
        steps: [],
        explanation: `高妙解法二
:由题意可知 $f(x)$ 的定义域为 $(-b, +\\infty)$ ,

令 $x + a = 0$ 解得 $x = -a$ ; 令 $\\ln (x + b) = 0$ 解得 $x = 1 - b$ .

则当 $x \\in (-b, 1 - b)$ 时， $\\ln (x + b) < 0$ ，故 $x + a \\leqslant 0$ ，所以 $1 - b + a \\leqslant 0$ ；

当 $x \\in (1 - b, +\\infty)$ 时， $\\ln(x + b) > 0$ ，故 $x + a \\geqslant 0$ ，所以 $1 - b + a \\geqslant 0$ .

故 $1 - b + a = 0$ ，则 $a^2 +b^2 = a^2 +(a + 1)^2 = 2\\left(a + \\frac{1}{2}\\right)^2 +\\frac{1}{2}\\geqslant \\frac{1}{2},$

当且仅当 $a = -\\frac{1}{2}, b = \\frac{1}{2}$ 时等号成立，所以 $a^2 + b^2$ 的最小值为 $\\frac{1}{2}$ .

故选:C.`,
      },
    ],
    tags: [],
    source: `2024 年高考新课标全国Ⅱ卷第 8 题`,
  },
  {
    id: "prob-sec-5-3-4",
    topicId: "topic-sec-5-3",
    title: `2024 新课标Ⅰ：递推不等式函数判断`,
    content: `(2024 年高考新课标全国Ⅰ卷第 8 题)
已知函数 $f(x)$ 的定义域为 R, $f(x) > f(x-1) + f(x-2)$ ，且当 x < 3 时， $f(x) = x$ ，则下列结论中一定正确的是（）

A. $f(10)>100$

B. $f(20) > 1000$

C. $f(10) < 1000$

D. $f(20)<10000$`,
    preview: `已知函数 f(x) 的定义域为 R, f(x) > f(x-1) + f(x-2) ，且当 x < 3 时， f(x) = x ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-5-3-4-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `$f(1)=1, f(2)=2 \\Rightarrow f(3)>3 \\Rightarrow f(4)>5 \\Rightarrow f(5)>8 \\Rightarrow f(6)>13 \\Rightarrow \\cdots \\Rightarrow f(11)>143 \\Rightarrow f(12)>232 \\Rightarrow f(13)>300 \\Rightarrow f(14)>500 \\Rightarrow f(15)>800 \\Rightarrow f(16)>1000 \\Rightarrow \\cdots \\Rightarrow f(20)>1000$ , 故答案为 B.`,
      },
      {
        id: "prob-sec-5-3-4-sol-1",
        title: `解法2`,
        method: "standard",
        steps: [],
        explanation: `高妙解法二
: 设 $a_{n}=f(n)(n\\in\\mathbf{N}^{*})$ ，显然 $a_{n}>0$ 且单调递增，

所以当 $n \\geqslant 3$ 时， $a_{n} > a_{n-1} + a_{n-2} > 2a_{n-2}$ ，

所以 $a_{2n}>2a_{2n-1}$ ，累加得 $a_{2n}>2^{n-1}a_{2}=2^{n}$ ，

所以 $f(20)>2^{10}>1000.$`,
      },
    ],
    tags: [],
    source: `2024 年高考新课标全国Ⅰ卷第 8 题`,
  },
  {
    id: "prob-sec-5-3-5",
    topicId: "topic-sec-5-3",
    title: `造型可以做成美丽的丝带, 将其看作图 5-3-1 中曲线`,
    content: `(2024 年高考新课标全国Ⅰ卷第 11 题, 多选题) 造型可以做成美丽的丝带, 将其看作图 5-3-1 中曲线 C 的一部分. 已知 C 过坐标原点 O, 且 C 上的点满足横坐标大于 -2, 到点 F(2,0) 的距离与到定直线 x=a(a<0) 的距离之积为 4, 则 ( )
![](images/6dd64b161d1808c1e0e442045b489f769954d876e8b412614cd7a68a3c5b6578.jpg)

图5-3-1

A. $a = -2$

B. 点 $(2\\sqrt{2},0)$ 在 C 上

C. C 在第一象限的点的纵坐标的最大值为 1

D. 当点 $\\left(x_{0},y_{0}\\right)$ 在C上时， $y_{0}\\leqslant\\frac{4}{x_{0}+2}$`,
    preview: `造型可以做成美丽的丝带, 将其看作图 5-3-1 中曲线 C 的一部分. 已知 C 过坐标原点 O, 且 C 上的点满足横坐标大于 -2, 到点 F(2,0)`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-5-3-5-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `由原点 O 在曲线 C 上且 $\\left|OF\\right|=2$ 知 O 到直线 x=a 距离为 2, 由 a<0 知 a=-2, A 正确.

由 $x > -2$ 知 $C$ 上点满足 $(x + 2)\\sqrt{(x - 2)^2 + y^2} = 4$ ，①

代入 $(2\\sqrt{2},0)$ 知 B 正确.

由①得 $y^{2}=\\frac{16}{(x+2)^{2}}-(x-2)^{2}$ ,

将左边设为 $f(x)$ ，则 $f'(2)<0$ 。

又有 $f(2)=1$ ，故存在 $x_{0}\\in(0,2)$ 使 $f(x_{0})>1$ 。

此时 y>1 且在第一象限,C 错误.

又 $y^{2} = \\frac{16}{(x + 2)^{2}} -(x - 2)^{2}\\leqslant \\frac{16}{(x + 2)^{2}}$ 故 $y_0\\leqslant \\frac{4}{x_0 + 2},$ D正确.

![](images/ee8df3ba92a5707c4603bf8864e829cd1135db689b2a430bb860ecce885d650e.jpg)

图5-3-2`,
      },
      {
        id: "prob-sec-5-3-5-sol-1",
        title: `解法2`,
        method: "geometric",
        steps: [],
        explanation: `高妙解法二
:对于选项 D,如图 5-3-2 所示,作于 PA⊥OF,

![](images/ee8df3ba92a5707c4603bf8864e829cd1135db689b2a430bb860ecce885d650e.jpg)

由几何图形性质知 $PA \\leqslant PF$ ,

所以 $|y_0|\\leqslant \\frac{4}{x_0 + 2},\\mathrm{D}$ 正确.

故选 ABD.`,
      },
    ],
    tags: [],
    source: `2024 年高考新课标全国Ⅰ卷第 11 题, 多选题`,
  },
  {
    id: "prob-sec-5-3-6",
    topicId: "topic-sec-5-3",
    title: `2024 全国甲理：对数换底方程求参数`,
    content: `(2024 高考全国甲卷(理)第 15 题)
已知 $a>1,\\frac{1}{\\log_{8}a}-\\frac{1}{\\log_{a}4}=-\\frac{5}{2}$ ，则 a= \\_\\_\\_\\_.`,
    preview: `第 15 题) 已知 a>1,1/_8a-1/_a4=-5/2 ，则 a= \\_\\_\\_\\_.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-5-3-6-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `$\\frac{1}{\\log_8 a} - \\log_4 a = -\\frac{5}{2}$ ,

令 $f(x)=\\frac{1}{\\log_{8}x}-\\log_{4}x,$

$f(x)$ 在 $(1,+\\infty)$ 上单调递减，因为 $f(64)=\\frac{1}{2}-3=-\\frac{5}{2}$ ，所以a=64.`,
      },
      {
        id: "prob-sec-5-3-6-sol-1",
        title: `解法2`,
        method: "standard",
        steps: [],
        explanation: `高妙解法二
: 因为 $\\frac{1}{\\log_{8}a}-\\log_{4}a=-\\frac{5}{2}$ ,

所以 $3\\log_{a}2-\\frac{1}{2\\log_{a}2}=-\\frac{5}{2}$ ,

令 $\\log_{a}2=t,t>0,$

所以 $3t-\\frac{1}{2t}=-\\frac{5}{2}$ ,

所以 $6t^{2}+5t-1=0$ ，所以 $(6t-1)(t+1)=0$ ，

所以 $t=\\frac{1}{6}$ ,

所以 $a^{\\frac{1}{6}}=2$ ，所以 a=64。`,
      },
    ],
    tags: [],
    source: `2024 高考全国甲卷(理`,
  },
  {
    id: "prob-sec-5-3-7",
    topicId: "topic-sec-5-3",
    title: `2024 新课标Ⅰ：卡片比赛概率计算`,
    content: `(2024 年高考新课标全国Ⅰ卷第 14 题)
甲、乙两人各有四张卡片，每张卡片上标有一个数字，甲的卡片分别标有数字1,3,5,7,乙的卡片上分别标有数字2,4,6,8. 两人进行四轮比赛，在每轮比赛中，两个各自从自己持有的卡片中随机选一张，并比较所选卡片上的数字大小，数字大的人得1分，数字小的人得0分，然后各自弃置此轮所选的卡片（弃置的卡片在此后的轮次中不能使用），则四轮比赛后，甲的总得分不小于2的概率为\\_\\_\\_\\_。`,
    preview: `甲、乙两人各有四张卡片，每张卡片上标有一个数字，甲的卡片分别标有数字1,3,5,7,乙的卡片上分别标有数字2,4,6,8. 两人进行四轮比赛，在每轮比赛中，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-5-3-7-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `由对称性,不妨固定乙出卡片顺序依次为 $(2,4,6,8)$ ,

为了简便,设甲依次出 $(a,b,c,d),\\{a,b,c,d\\}\\in\\{1,3,5,7\\}$ .

首先注意到乙最后出的8是最大的,故甲不可能得4分.

若甲得3分，则从c到a均要求得分，则有c=7,b=5,a=3,d=1共1种情况.

若甲得2分,下面讨论在何处得分.

若在 b, c 处，则同样 c=7, b=5，进而 a=1, d=3，共 1 种.

若在 a, c 处，必有 $c=7, a \\neq 1, b \\neq 5$ ，则在 b=1 时有 2 种，在 d=1 时仅 1 种，共 3 种。

若在 a, b 处，则 $b \\in \\{5, 7\\}, a \\neq 1, c \\neq 7$ .

当 b=5 时，由上述限制，c=1 时有 2 种，d=1 时仅 1 种。

当 b=7 时，a,c,d 全排列 6 种中仅 a=1 的 2 种不行，则有 4 种，故 a,b 处共 7 种.

故共有 $1+1+3+7=12$ 种，又总数为 $4!=24$ ，故所求为 $1-\\frac{12}{24}=\\frac{1}{2}$ .`,
      },
      {
        id: "prob-sec-5-3-7-sol-1",
        title: `解法2`,
        method: "standard",
        steps: [],
        explanation: `高妙解法二
:枚举法,如下表所示.

<table><tr><td>乙</td><td>2</td><td>4</td><td>6</td><td>8</td><td></td><td>甲</td><td>2</td><td>4</td><td>6</td><td>8</td><td></td><td>甲</td><td>2</td><td>4</td><td>6</td><td>8</td><td></td></tr><tr><td>甲</td><td>1</td><td>3</td><td>5</td><td>7</td><td></td><td>乙</td><td>3</td><td>5</td><td>1</td><td>7</td><td>✓</td><td>乙</td><td>5</td><td>7</td><td>1</td><td>3</td><td>✓</td></tr><tr><td></td><td>1</td><td>3</td><td>7</td><td>5</td><td></td><td></td><td>3</td><td>5</td><td>7</td><td>1</td><td>✓</td><td></td><td>5</td><td>7</td><td>3</td><td>1</td><td>✓</td></tr><tr><td></td><td>1</td><td>5</td><td>3</td><td>7</td><td></td><td></td><td>3</td><td>7</td><td>1</td><td>5</td><td>✓</td><td></td><td>7</td><td>1</td><td>3</td><td>5</td><td></td></tr><tr><td></td><td>1</td><td>5</td><td>7</td><td>3</td><td>✓</td><td></td><td>3</td><td>7</td><td>5</td><td>1</td><td>✓</td><td></td><td>7</td><td>1</td><td>5</td><td>3</td><td></td></tr><tr><td></td><td>1</td><td>7</td><td>3</td><td>5</td><td></td><td></td><td>5</td><td>1</td><td>3</td><td>7</td><td></td><td></td><td>7</td><td>3</td><td>1</td><td>5</td><td></td></tr><tr><td></td><td>1</td><td>7</td><td>5</td><td>3</td><td></td><td></td><td>5</td><td>1</td><td>7</td><td>3</td><td>✓</td><td></td><td>7</td><td>3</td><td>5</td><td>1</td><td></td></tr><tr><td></td><td>3</td><td>1</td><td>7</td><td>5</td><td>✓</td><td></td><td>5</td><td>3</td><td>7</td><td>1</td><td>✓</td><td></td><td>7</td><td>5</td><td>1</td><td>3</td><td>✓</td></tr><tr><td></td><td>3</td><td>1</td><td>5</td><td>7</td><td></td><td></td><td>5</td><td>3</td><td>1</td><td>7</td><td></td><td></td><td>7</td><td>5</td><td>3</td><td>1</td><td>✓</td></tr></table>

由表格知满足条件的有12种，总数24种，概率为 $\\frac{1}{2}$

(以上试题解法由林威老师提供)`,
      },
    ],
    tags: [],
    source: `2024 年高考新课标全国Ⅰ卷第 14 题`,
  },
  {
    id: "prob-sec-5-3-8",
    topicId: "topic-sec-5-3",
    title: `2024 新课标Ⅰ：椭圆离心率与割线方程`,
    content: `(2024年高考新课标全国Ⅰ卷第16题)
已知 $A(0,3)$ 和 $P\\left(3,\\frac{3}{2}\\right)$ 为椭圆 $C:\\frac{x^{2}}{a^{2}}+\\frac{y^{2}}{b^{2}}=1(a>b>0)$ 上两点.

(1) 求 C 的离心率；
(2)若过 P 的直线 l 交 C 于另一点 B，且 $\\triangle ABP$ 的面积为 9，求 l 的方程.`,
    preview: `已知 A(0,3) 和 P(3,3/2) 为椭圆 C:x^2{a^2}+y^2{b^2}=1(a>b>0) 上两点. (1) 求 C 的离心率； (2)若过 P`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-5-3-8-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1)由题意得 $\\left\\{\\begin{aligned}b&=3,\\\\ \\frac{9}{a^{2}}+\\frac{9}{b^{2}}&=1,\\end{aligned}\\right.$ 解得 $\\left\\{\\begin{aligned}b^{2}&=9,\\\\ a^{2}&=12,\\end{aligned}\\right.$ 所以 $e=\\sqrt{1-\\frac{b^{2}}{a^{2}}}=\\sqrt{1-\\frac{9}{12}}=\\frac{1}{2}.$

(2)`,
      },
      {
        id: "prob-sec-5-3-8-sol-1",
        title: `解法2`,
        method: "standard",
        steps: [],
        explanation: `高妙解法一
: $k_{AP}=\\frac{3-\\frac{3}{2}}{0-3}=-\\frac{1}{2}$ ,

则直线 AP 的方程为 $y = -\\frac{1}{2}x + 3$ ，即 $x + 2y - 6 = 0$ ，

$|AP|=\\sqrt{(0-3)^{2}+\\left(3-\\frac{3}{2}\\right)^{2}}=\\frac{3\\sqrt{5}}{2}$ ，由(1)知 $C:\\frac{x^{2}}{12}+\\frac{y^{2}}{9}=1$

设点 B 到直线 AP 的距离为 d，则 $d=\\frac{2\\times9}{\\frac{3\\sqrt{5}}{2}}=\\frac{12\\sqrt{5}}{5}$ ,

则将直线 AP 沿着与 AP 垂直的方向平移 $\\frac{12\\sqrt{5}}{5}$ 单位即可，

此时该平行线与椭圆的交点即为点 B，设该平行线的方程为： $x+2y+C=0$ ，

则 $\\frac{|C + 6|}{\\sqrt{5}} = \\frac{12\\sqrt{5}}{5}$ , 解得 $C = 6$ 或 $C = -18$ ,

当 C=6 时，联立 $\\left\\{\\begin{aligned}\\frac{x^{2}}{12}+\\frac{y^{2}}{9}=1,\\\\ x+2y+6=0,\\end{aligned}\\right.$ 解得 $\\left\\{\\begin{aligned}x=0,\\\\ y=-3\\end{aligned}\\right.$ 或 $\\left\\{\\begin{aligned}x=-3,\\\\ y=-\\frac{3}{2},\\end{aligned}\\right.$

即 $B(0, -3)$ 或 $\\left(-3, -\\frac{3}{2}\\right)$ ,

当 $B(0, -3)$ 时，此时 $k_{l} = \\frac{3}{2}$ ，直线 $l$ 的方程为 $y = \\frac{3}{2} x - 3$ ，即 $3x - 2y - 6 = 0$ 当 $B\\left(-3, -\\frac{3}{2}\\right)$ 时，此时 $k_{l} = \\frac{1}{2}$ ，直线 $l$ 的方程为 $y = \\frac{1}{2} x$ ，即 $x - 2y = 0$

当 C = -18 时，联立 $\\left\\{\\begin{aligned}\\frac{x^{2}}{12} + \\frac{y^{2}}{9} &= 1, \\\\ x + 2y - 18 &= 0\\end{aligned}\\right.$ 得 $2y^{2} - 27y + 117 = 0$ ,

$\\Delta=27^{2}-4\\times2\\times117=-207<0$ , 此时该直线与椭圆无交点.

综上，直线 l 的方程为 3x-2y-6=0 或 x-2y=0.`,
      },
      {
        id: "prob-sec-5-3-8-sol-2",
        title: `解法3`,
        method: "standard",
        steps: [],
        explanation: `高妙解法二
:同法一得到直线 AP 的方程为 $x+2y-6=0$ ,

点 B 到直线 AP 的距离 $d=\\frac{12\\sqrt{5}}{5}$ ,

由 $a=2\\sqrt{3}, b=3,$

设 $B(2\\sqrt{3}\\cos \\theta ,3\\sin \\theta)$ ，其中 $\\theta \\in [0,2\\pi)$ ，则有 $\\frac{\\left|2\\sqrt{3}\\cos\\theta + 6\\sin\\theta - 6\\right|}{\\sqrt{5}} = \\frac{12\\sqrt{5}}{5},$

联立 $\\cos^{2}\\theta+\\sin^{2}\\theta=1$ , 解得 $\\left\\{\\begin{aligned}\\cos\\theta&=-\\frac{\\sqrt{3}}{2},\\\\ \\sin\\theta&=-\\frac{1}{2}\\end{aligned}\\right.$ 或 $\\left\\{\\begin{aligned}\\cos\\theta&=0,\\\\ \\sin\\theta&=-1,\\end{aligned}\\right.$

即 $B(0, -3)$ 或 $\\left(-3, -\\frac{3}{2}\\right)$ , 以下同法一.`,
      },
      {
        id: "prob-sec-5-3-8-sol-3",
        title: `解法4`,
        method: "standard",
        steps: [],
        explanation: `高妙解法三
: 当直线 AB 的斜率不存在时, 此时 $B(0, -3)$ ,

$S_{\\triangle PAB}=\\frac{1}{2}\\times6\\times3=9$ ,符合题意,

此时 $k_{l}=\\frac{3}{2}$ ，直线 l 的方程为 $y=\\frac{3}{2}x-3$ ，即 3x-2y-6=0。

当线 AB 的斜率存在时, 设直线 AB 的方程为 $y = kx + 3$ ,

联立椭圆方程有 $\\left\\{\\begin{aligned}y&=kx+3,\\\\ \\frac{x^{2}}{12}+\\frac{y^{2}}{9}&=1,\\end{aligned}\\right.$ 则 $(4k^{2}+3)x^{2}+24kx=0$ ，其中 $k\\neq k_{AP}$ ，即 $k\\neq-\\frac{1}{2}$

解得 $x = 0$ 或 $x = \\frac{-24k}{4k^2 + 3}, k \\neq 0, k \\neq -\\frac{1}{2}$ ,

令 $x = \\frac{-24k}{4k^2 + 3}$ , 则 $y = \\frac{-12k^2 + 9}{4k^2 + 3}$ , 则 $B\\left(\\frac{-24k}{4k^2 + 3}, \\frac{-12k^2 + 9}{4k^2 + 3}\\right)$

同法一得到直线 AP 的方程为 $x + 2y - 6 = 0$ ,

点 B 到直线 AP 的距离 $d=\\frac{12\\sqrt{5}}{5}$ ,

则 $\\frac{\\left|\\frac{-24k}{4k^2 + 3} + 2\\times\\frac{-12k^2 + 9}{4k^2 + 3} - 6\\right|}{\\sqrt{5}} = \\frac{12\\sqrt{5}}{5}$ , 解得 $k = \\frac{3}{2}$ ,此时 $B\\left(-3, - \\frac{3}{2}\\right)$ ，则得到此时 $k_{l} = \\frac{1}{2}$ ，直线 $l$ 的方程为 $y = \\frac{1}{2} x$ ，即 $x - 2y = 0$ 综上，直线 $l$ 的方程为 $3x - 2y - 6 = 0$ 或 $x - 2y = 0$`,
      },
      {
        id: "prob-sec-5-3-8-sol-4",
        title: `解法5`,
        method: "standard",
        steps: [],
        explanation: `高妙解法四
: 当 l 的斜率不存在时, $l: x = 3, B\\left(3, -\\frac{3}{2}\\right), |PB| = 3$ ,

A 到 PB 距离 d=3，

此时 $S_{\\triangle ABP}=\\frac{1}{2}\\times3\\times3=\\frac{9}{2}\\neq9$ 不满足条件.

当直线 l 斜率存在时, 设 $l: y = k(x - 3) + \\frac{3}{2}$ ,

设 $l$ 与 $y$ 轴的交点为 $Q$ , 令 $x = 0$ , 则 $Q\\left(0, -3k + \\frac{3}{2}\\right)$ ,

联立 $\\left\\{\\begin{aligned}y&=kx-3k+\\frac{3}{2},\\\\ 3x^{2}+4y^{2}&=36,\\end{aligned}\\right.$ 则有 $(3+4k^{2})x^{2}-8k\\left(3k-\\frac{3}{2}\\right)x+36k^{2}-36k-27=0,$

则 $\\Delta = 64k^{2}\\left(3k - \\frac{3}{2}\\right)^{2} - 4(3 + 4k^{2})(36k^{2} - 36k - 27) > 0$ ，且 $k\\neq -\\frac{1}{2}$

则 $x_{P}x_{B} = 3x_{B} = \\frac{36k^{2} - 36k - 27}{3 + 4k^{2}}$ ，得 $x_{B} = \\frac{12k^{2} - 12k - 9}{3 + 4k^{2}}$

则 $S = \\frac{1}{2} |AQ||x_{P} - x_{B}| = \\frac{1}{2}\\left|3k + \\frac{3}{2}\\right|\\left|\\frac{12k + 18}{3 + 4k^{2}}\\right| = 9$ ，解得 $k = \\frac{1}{2}$ 或 $k = \\frac{3}{2}$ 经代入判别式验证均满足题意.

则直线 $l$ 为 $y = \\frac{1}{2} x$ 或 $y = \\frac{3}{2} x - 3$ ，即 $3x - 2y - 6 = 0$ 或 $x - 2y = 0.$`,
      },
      {
        id: "prob-sec-5-3-8-sol-5",
        title: `解法6`,
        method: "standard",
        steps: [],
        explanation: `高妙解法五
: 设 $B(x_{0}, y_{0})$ ，则 $\\overrightarrow{PB} = (x_{0} - 3, y_{0} - \\frac{3}{2})$ ， $\\overrightarrow{PA} = (-3, \\frac{3}{2})$ ，

所以 $S_{\\triangle ABP}=\\frac{1}{2}\\left|\\overrightarrow{PB}\\right|\\left|\\overrightarrow{PA}\\right|\\sin\\langle\\overrightarrow{PA},\\overrightarrow{PB}\\rangle=\\frac{1}{2}\\left|\\frac{3}{2}(x_{0}-3)+3\\left(y_{0}-\\frac{3}{2}\\right)\\right|=9.$ （\\*）

又因为点 B 在椭圆上，联立 (\\*) 式可得 $B\\left(-3, -\\frac{3}{2}\\right)$ ，或 $B(0, -3)$ ，

所以直线 $l$ 的方程为 $y = \\frac{1}{2} x$ 或 $y = \\frac{3}{2} x - 3$`,
      },
      {
        id: "prob-sec-5-3-8-sol-6",
        title: `解法7`,
        method: "standard",
        steps: [],
        explanation: `高妙解法六
：B 到直线 AP 的距离为 d，AP 的直线方程为 $x + 2y - 6 = 0$ ，设经过 B 与 AP 平行的直线为 $l'$ ，

在 $\\triangle ABP$ 中， $|AP|=\\frac{3\\sqrt{5}}{2}$ ， $S_{\\triangle ABP}=\\frac{1}{2}|AP|\\cdot d=9$ ，则 $d=\\frac{12\\sqrt{5}}{5}$ .

又 $d_{O - AP} = \\frac{|6|}{\\sqrt{5}} = \\frac{6\\sqrt{5}}{5} = \\frac{1}{2} d = d_{O - l'}$

由对称性知: 点 A 和点 P 在椭圆上关于 O 的对称点即为所求,

分别记为: $B_{1}(0,-3)$ 或 $B_{2}\\left(-3,-\\frac{3}{2}\\right)$ .

所以 $l$ 的直线方程为 $3x - 2y - 6 = 0$ 或 $x - 2y = 0$ .`,
      },
      {
        id: "prob-sec-5-3-8-sol-7",
        title: `解法8`,
        method: "standard",
        steps: [],
        explanation: `高妙解法七
(向量叉积): 在 $\\triangle ABP$ 中, $A=(0,3)$ , $P=\\left(3,\\frac{3}{2}\\right)$ , 设 $B=(m,n)$ ,
由题意可知, 点 B 与原点 O 在直线 AP 的同侧, 故

$$
S _ {\\triangle A B C} = \\frac {1}{2} \\left| \\left| \\begin{array}{c c c} 0 & 3 & 1 \\\\ m & n & 1 \\\\ 3 & \\frac {3}{2} & 1 \\end{array} \\right| \\right| = 9 \\Rightarrow \\left\\{ \\begin{array}{l} m + 2 n = 6, \\\\ m + 2 n = 1 8. \\end{array} \\right.
$$

当 $m+2n=6$ 时，代入椭圆方程得 $B=(0,-3)$ 或 $B=\\left(-3,-\\frac{3}{2}\\right)$ 均符合题意；

当 $m+2n=18$ 时,代入椭圆方程,m,n 无解.

所以直线 l 的方程为 3x-2y-6=0 或 x-2y=0.`,
      },
      {
        id: "prob-sec-5-3-8-sol-8",
        title: `解法9`,
        method: "standard",
        steps: [],
        explanation: `高妙解法八
(仿射变换): 由 $C: \\frac{x^{2}}{12} + \\frac{y^{2}}{9} = 1$ ，令 $\\left\\{\\begin{aligned} x &= 2\\sqrt{3}x' \\\\ y &= 3y'\\end{aligned}\\right.$ ，则 $x'^{2} + y'^{2} = 1$ .

点 $A(0,3)$ 变为 $A^{\\prime}(0,1)$ ，点 $P\\left(3,\\frac{3}{2}\\right)$ 变为 $P^{\\prime}\\left(\\frac{\\sqrt{3}}{2},\\frac{1}{2}\\right)$ ，

且 $S_{\\triangle ABP} = 6\\sqrt{3} S_{\\triangle A'B'P'}, |A'P'| = 1, \\angle OA'P' = \\frac{\\pi}{3}$ .

设 $\\angle OA'B'=\\theta,\\theta\\in\\left(0,\\frac{\\pi}{2}\\right)$ ，则 $|A'B'|=2\\cos\\theta.$

所以 $S_{\\triangle ABP}=6\\sqrt{3}S_{\\triangle A'B'P'}$

$$
= 6 \\sqrt {3} \\times 2 \\times 1 \\times 2 \\cos \\theta \\cdot \\sin \\left(\\theta + \\frac {\\pi}{3}\\right) = 6 \\sqrt {3} \\sin \\left(\\theta + \\frac {\\pi}{3}\\right) \\cdot \\cos \\theta = 9,
$$

所以 $\\sin\\left(2\\theta+\\frac{\\pi}{3}\\right)=\\frac{\\sqrt{3}}{2}$ ，则 $\\theta=0$ 或 $\\frac{\\pi}{6}$ .

所以 $B^{\\prime}(0, - 1)$ 或 $\\left(-\\frac{\\sqrt{3}}{2}, - \\frac{1}{2}\\right)$ ，即 $B(0, - 3)$ 或 $B\\left(-3, - \\frac{3}{2}\\right)$

所以 l 的直线方程为 3x-2y-6=0 或 x-2y=0.`,
      },
      {
        id: "prob-sec-5-3-8-sol-9",
        title: `解法10`,
        method: "geometric",
        steps: [],
        explanation: `高妙解法九
(面积+图形对称): 当直线 AB 的斜率不存在时, 此时 $B_{1}(0,-3)$ , $S_{\\triangle PAB} = \\frac{1}{2} \\times 6 \\times 3 = 9$ , 符合题意. 过 $B(0,-3)$ 作直线 $l'$ 与直线 AB 平行, 由图形的对称性知 $l'$ 与椭圆的交点为 $B_{2}\\left(-3,-\\frac{3}{2}\\right)$ , 所以 l 的直线方程为 3x-2y-6=0 或 x-2y=0.

(以上法一至法八由浙江大学附属中学范虹燕老师提供,法九由林威老师提供)`,
      },
    ],
    tags: [],
    source: `2024年高考新课标全国Ⅰ卷第16题`,
  },
  {
    id: "prob-sec-5-3-9",
    topicId: "topic-sec-5-3",
    title: `2024 新课标Ⅰ：四棱锥中的垂直与体积`,
    content: `(2024 年高考新课标全国Ⅰ卷第 17 题)
如图 5-3-3 所示, 四棱锥 P-ABCD 中, $PA \\perp$ 底面 ABCD, PA = AC = 2, BC = 1, AB = $\\sqrt{3}$ .

![](images/13a479fe8210581ea0396ea4e3d75b4a9577c316d8742b9d921105adc7109f9f.jpg)

(1) 若 $AD \\perp PB$ ，证明： $AD \\parallel$ 平面 PBC；
(2) 若 $AD \\perp DC$ ，且二面角 A - CP - D 的正弦值为 $\\frac{\\sqrt{42}}{7}$ ，求 AD.

解析

(1)高妙解法一(几何法):因为PA⊥底面ABCD,

所以 $PA \\perp AD, PA \\perp BC,$

又因为 $AD \\perp PB$ ，所以 $AD \\perp$ 平面 PAB，从而 $AD \\perp AB$ .

(三垂线法:因为 $PA \\perp$ 底面 ABCD, $AD \\perp PB$ ,

而 AB 是 PB 在平面 ABCD 内的射影, 所以 $AD \\perp AB$ .)

(向量法:因为 $PA \\perp$ 底面 ABCD, 所以 $PA \\perp AD$ ,

又因为 $AD \\perp PB \\Rightarrow \\begin{cases} \\overrightarrow{PA} \\cdot \\overrightarrow{AD} = 0, \\\\ \\overrightarrow{PB} \\cdot \\overrightarrow{AD} = 0 \\end{cases} \\Rightarrow \\overrightarrow{AB} \\cdot \\overrightarrow{AD} = \\overrightarrow{AD} \\cdot (\\overrightarrow{PB} - \\overrightarrow{PA}) = 0,$

所以 $AD \\perp AB.$

在 $\\triangle ABC$ 中， $AB=\\sqrt{3}$ ，BC=1，AC=2，所以 $AB^{2}+BC^{2}=AC^{2}$ ，所以 $BC\\perp AB$ ，从而 $AD\\parallel BC$ ， $BC\\subset$ 平面PBC，所以 $AD\\parallel$ 平面PBC.

高妙解法二(几何法):

因为 $PA \\perp$ 底面 ABCD, 所以 $PA \\perp AD, PA \\perp BC$ ,

又因为 $AD \\perp PB$ ，所以 $AD \\perp$ 平面 PAB，

在 $\\triangle ABC$ 中， $AB=\\sqrt{3}$ ，BC=1，AC=2，所以 $AB^{2}+BC^{2}=AC^{2}$ ，所以 $BC\\perp AB$ ，又因为 $PA\\perp BC$ ，所以 $BC\\perp$ 平面PAB，所以 $AD\\parallel BC$ ，所以 $AD\\parallel$ 平面PBC.`,
    preview: `如图 5-3-3 所示, 四棱锥 P-ABCD 中, PA 底面 ABCD, PA = AC = 2, BC = 1, AB = √3 . (1) 若 AD P`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-5-3-9-sol-0",
        title: `解法1`,
        method: "geometric",
        steps: [],
        explanation: `高妙解法三
(几何法): 在 $\\triangle ABC$ 中, $AB=\\sqrt{3}$ , BC=1, AC=2,

所以 $AB^{2}+BC^{2}=AC^{2}$ ，所以 $BC\\perp AB$ ，

因为 $PA \\perp$ 底面 ABCD，所以 $PA \\perp BC$ ，所以 $BC \\perp$ 平面 PAB，从而 $BC \\perp PB$ ，又因为 $AD \\perp PB$ ，PB 不垂直于底面，从而 $AD \\parallel BC$ ，所以 $AD \\parallel$ 平面 PBC.`,
      },
      {
        id: "prob-sec-5-3-9-sol-1",
        title: `解法2`,
        method: "standard",
        steps: [],
        explanation: `高妙解法四
(坐标法):暴力建系1.

如图 5-3-4 所示, 以 AC 为 y 轴, AP 为 z 轴, x 轴垂直于 AC,

在 $\\triangle ABC$ 中, $AB=\\sqrt{3}$ ,BC=1,AC=2,

所以 $AB^{2}+BC^{2}=AC^{2}$ ，所以 $BC\\perp AB$ ，

则 $B\\left(\\frac{\\sqrt{3}}{2}, \\frac{3}{2}, 0\\right), C(0, 2, 0), P(0, 0, 2), \\overrightarrow{PB} = \\left(\\frac{\\sqrt{3}}{2}, \\frac{3}{2}, -2\\right)$ ,

$$
\\overrightarrow {P C} = (0, 2, - 2),
$$

设平面 PBC 的法向量为 $\\boldsymbol{n}=(x,y,z)$ ,

则 $\\left\\{\\begin{aligned}\\frac{\\sqrt{3}}{2}x+\\frac{3}{2}y-2z=0,\\\\ 2y-2z=0,\\end{aligned}\\right.$ 解得 $\\boldsymbol{n}=(1,\\sqrt{3},\\sqrt{3})$ .

设 $D(a,b,0)$ ，则 $\\overrightarrow{AD}\\cdot \\overrightarrow{PB} = 0\\Rightarrow \\frac{\\sqrt{3}}{2} a + \\frac{3}{2} b = 0,$

即 $\\overrightarrow{AD}\\cdot n=a+\\sqrt{3}b=0,$

所以 $AD \\parallel$ 平面 PBC.

![](images/86b447f7e374c11cc826e3993d61f1a9c7e061a85a7ae1d07d34156257f38b24.jpg)

图5-3-3

![](images/13a479fe8210581ea0396ea4e3d75b4a9577c316d8742b9d921105adc7109f9f.jpg)

图5-3-4`,
      },
      {
        id: "prob-sec-5-3-9-sol-2",
        title: `解法3`,
        method: "standard",
        steps: [],
        explanation: `高妙解法五
(坐标法):暴力建系2.

如图 5-3-4 所示, 以 AC 为 y 轴, AP 为 z 轴, x 轴垂直于 AC,

![](images/86b447f7e374c11cc826e3993d61f1a9c7e061a85a7ae1d07d34156257f38b24.jpg)

在 $\\triangle ABC$ 中， $AB=\\sqrt{3}$ ，BC=1，AC=2，所以 $AB^{2}+BC^{2}=AC^{2}$ ，所以 $BC\\perp AB$ ，

则 $B\\left(\\frac{\\sqrt{3}}{2}, \\frac{3}{2}, 0\\right), C(0, 2, 0), P(0, 0, 2), \\overrightarrow{PB} = \\left(\\frac{\\sqrt{3}}{2}, \\frac{3}{2}, -2\\right)$

设 $D(a,b,0)$ ，则 $\\overrightarrow{AD}\\cdot \\overrightarrow{PB} = 0\\Rightarrow \\frac{\\sqrt{3}}{2} a + \\frac{3}{2} b = 0$ ，即 $a = -\\sqrt{3} b,$

故 $\\overrightarrow{AD}=(-\\sqrt{3}b,b,0),\\overrightarrow{BC}=(-\\frac{\\sqrt{3}}{2},\\frac{1}{2},0)$ ,

则 $\\overrightarrow{AD}=2b\\overrightarrow{BC}$ ，故 $\\overrightarrow{AD}\\parallel\\overrightarrow{BC}$ ，所以 $AD\\parallel$ 平面PBC.

(2)`,
      },
      {
        id: "prob-sec-5-3-9-sol-3",
        title: `解法4`,
        method: "standard",
        steps: [],
        explanation: `高妙解法一
(坐标法):

如图 5-3-5 所示, 以 B 为坐标原点, BC 为 x 轴, BA 为 y 轴, z 轴平行于 AP,

则 $A(0,\\sqrt{3},0)$ , $C(1,0,0)$ , $P(0,\\sqrt{3},2)$ , 设 $D(m,n,0)$ ,

$$
\\overrightarrow {C P} = (- 1, \\sqrt {3}, 2), \\overrightarrow {A C} = (1, - \\sqrt {3}, 0), \\overrightarrow {C D} = (m - 1, n, 0),
$$

$$
A D \\perp D C \\Leftrightarrow \\left(m - \\frac {1}{2}\\right) ^ {2} + \\left(n - \\frac {\\sqrt {3}}{2}\\right) ^ {2} = 1
$$

$$
\\Leftrightarrow m ^ {2} - m + n ^ {2} - \\sqrt {3} n = 0.
$$

设平面 ACP 的法向量为 $\\boldsymbol{n}=(x,y,z)$ ,

则 $\\left\\{\\begin{aligned}n\\cdot\\overrightarrow{CP}&=0,\\\\ n\\cdot\\overrightarrow{AC}&=0,\\end{aligned}\\right.$ 即 $\\left\\{\\begin{aligned}-x+\\sqrt{3}y+2z&=0,\\\\ x-\\sqrt{3}y&=0,\\end{aligned}\\right.$

得 $\\boldsymbol{n}=(\\sqrt{3},1,0)$ .

设平面 DCP 的法向量为 $\\boldsymbol{m}=(x,y,z)$ ,

则 $\\left\\{\\begin{aligned}m\\cdot\\overrightarrow{CP}&=0,\\\\ m\\cdot\\overrightarrow{DC}&=0,\\end{aligned}\\right.$ 即 $\\left\\{\\begin{aligned}-x+\\sqrt{3}y+2z&=0,\\\\ (m-1)x+ny&=0,\\end{aligned}\\right.$

得 $m = \\left(1, \\frac{1 - m}{n}, \\frac{1}{2} \\left[1 - \\frac{\\sqrt{3}(1 - m)}{n}\\right]\\right)$ .

令 $t = \\frac{1 - m}{n}$

$$
\\cos \\alpha = \\frac {| n \\cdot m |}{| n | \\cdot | m |} = \\frac {\\sqrt {3} + t}{2 \\sqrt {1 + t ^ {2} + \\frac {1}{4} (1 - \\sqrt {3} t) ^ {2}}} = \\frac {1}{\\sqrt {7}},
$$

解得 $t = -\\frac{\\sqrt{3}}{3}$ , 即 $\\frac{1 - m}{n} = -\\frac{\\sqrt{3}}{3}$ , 即 $n = \\sqrt{3}(m - 1)$ ,

代入①得: $2m^{2}-5m+3=0$ ,

解得 $m = \\frac{3}{2}, n = \\frac{\\sqrt{3}}{2}, D\\left(\\frac{3}{2}, \\frac{\\sqrt{3}}{2}, 0\\right), AD = \\sqrt{3}$ .

![](images/db497ea6e8dd09c092000ad14a11b50431908d247b68d204a39a06346f7af5f1.jpg)

图5-3-5`,
      },
      {
        id: "prob-sec-5-3-9-sol-4",
        title: `解法5`,
        method: "standard",
        steps: [],
        explanation: `高妙解法二
(坐标法):以点 D 为原点建立如图 5-3-6 所示空间直角坐标系,

设 $A(x_0, 0, 0)$ , 则 $P(x_0, 0, 2), C(0, \\sqrt{4 - x_0^2}, 0)$ ,

设二面角 A-CP-D 的平面角为 $\\theta, \\sin\\theta=\\frac{\\sqrt{42}}{7}$ ,

则 $\\cos\\theta=\\frac{\\sqrt{7}}{7},\\overrightarrow{AP}=(0,0,2),\\overrightarrow{AC}=(-x_{0},\\sqrt{4-x_{0}^{2}},0)$ ,

设平面 APC 的法向量为 $\\boldsymbol{n}_{1}=(x_{1},y_{1},z_{1})$ ,

则 $\\left\\{\\begin{aligned}&2z_{1}=0\\Rightarrow z_{1}=0,\\\\ &-x_{0}x_{1}+\\sqrt{4-x_{0}^{2}}y_{1}=0,\\end{aligned}\\right.$ 令 $x_{1}=1,y_{1}=\\frac{x_{0}}{\\sqrt{4-x_{0}^{2}}}$

所以 $\\boldsymbol{n}_{1}=\\left(1,\\frac{x_{0}}{\\sqrt{4-x_{0}^{2}}},0\\right),\\overrightarrow{DP}=(x_{0},0,2),\\overrightarrow{DC}=(0,\\sqrt{4-x_{0}^{2}},0)$ ,

设平面 $CPD$ 的法向量为 $\\pmb{n}_2 = (x_2, y_2, z_2)$ ，则

$$
\\left\\{ \\begin{array}{l} x _ {0} x _ {2} + 2 z _ {2} = 0, \\\\ \\sqrt {4 - x _ {0} ^ {2}} y _ {2} = 0 \\Rightarrow y _ {2} = 0, \\end{array} \\right.
$$

令 $x_{2} = 1, z_{2} = -\\frac{x_{0}}{2}$ , 所以 $\\pmb{n}_{2} = (1, 0, -\\frac{x_{0}}{2})$ ,

$$
| \\cos \\theta | = \\frac {| n _ {1} \\cdot n _ {2} |}{| n _ {1} | \\cdot | n _ {2} |} = \\frac {1}{\\sqrt {1 + \\frac {x _ {0} ^ {2}}{4}} \\cdot \\sqrt {1 + \\frac {x _ {0} ^ {2}}{4 - x _ {0} ^ {2}}}} = \\frac {1}{\\sqrt {7}},
$$

解得 $x_{0}^{2}=3\\Rightarrow x_{0}=\\sqrt{3}$ ，即 $AD=\\sqrt{3}$ .

优化(双变量):上述方法中,我们令 DA=a,DC=b,

则 $A(a,0,0)$ , $C(0,b,0)$ , $P(a,0,2)$ , $D(0,0,0)$ ,

$\\overrightarrow{CP} = (a, -b, 2), \\overrightarrow{DC} = (0, b, 0), \\overrightarrow{AC} = (-a, b, 0)$ ，其中 $a^2 + b^2 = 4$ .

设平面 ACP 的法向量为 $\\boldsymbol{n}=(x,y,z)$ ,

则 $\\left\\{\\begin{aligned}n\\cdot\\overrightarrow{CP}&=0,\\\\ n\\cdot\\overrightarrow{AC}&=0,\\end{aligned}\\right.$ 即 $\\left\\{\\begin{aligned}ax-by+2z&=0,\\\\ -ax+by&=0,\\end{aligned}\\right.$

得 $\\boldsymbol{n}=(b,a,0)$ .

设平面 DCP 的法向量为 $\\boldsymbol{m}=(x,y,z)$ ,

则 $\\left\\{\\begin{aligned}m\\cdot\\overrightarrow{CP}&=0,\\\\ m\\cdot\\overrightarrow{DC}&=0,\\end{aligned}\\right.$ 即 $\\left\\{\\begin{aligned}ax-by+2z&=0,\\\\ by&=0,\\end{aligned}\\right.$

得 $\\boldsymbol{m}=(2,0,-a)$ .

$$
\\cos \\theta = \\frac {| \\boldsymbol {n} \\cdot \\boldsymbol {m} |}{| \\boldsymbol {n} | \\cdot | \\boldsymbol {m} |} = \\frac {b}{\\sqrt {a ^ {2} + 4}} = \\frac {1}{\\sqrt {7}} \\Rightarrow 7 b ^ {2} = a ^ {2} + 4
$$

$$
\\Rightarrow 7 (4 - a ^ {2}) = a ^ {2} + 4 \\Rightarrow a ^ {2} = 3, A D = \\sqrt {3}.
$$

![](images/c1bc7131164a66d4724115ff5a9a6aa3858f4406055864eca2f1ceeb6d29e87a.jpg)

图5-3-6`,
      },
      {
        id: "prob-sec-5-3-9-sol-5",
        title: `解法6`,
        method: "standard",
        steps: [],
        explanation: `高妙解法三
(坐标法):

如图 5-3-7 所示, 以 A 为原点, 以 AC 为 y 轴, x 轴垂直于 AC, AP 为 z 轴,

![](images/7ec844f0f6ec717ff430181b3abbe14b5506161458558b320d04e902338d7469.jpg)

设 $\\angle DAC=\\theta$ ,作 $DE\\perp AC$ ,垂足为E,

则 $AD=2\\cos\\theta, DE=2\\cos\\theta\\sin\\theta, AE=2\\cos^{2}\\theta,$

则 $D(-2\\cos\\theta\\sin\\theta,2\\cos^{2}\\theta,0)$

设平面 ACP 的法向量为 $\\boldsymbol{n}=(1,0,0)$ ,

$$
A D \\perp D C \\Leftrightarrow x ^ {2} + (y - 1) ^ {2} = 1,
$$

$$
\\overrightarrow {D C} = (2 \\cos \\theta \\sin \\theta , 2 \\sin^ {2} \\theta , 0), \\overrightarrow {C P} = (0, - 2, 2)
$$

设平面 DCP 的法向量为 $\\boldsymbol{m}=(x,y,z)$ ,

则 $\\left\\{\\begin{aligned}m\\cdot\\overrightarrow{CP}&=0,\\\\ m\\cdot\\overrightarrow{DC}&=0,\\end{aligned}\\right.$ 即 $\\left\\{\\begin{aligned}-2y+2z&=0,\\\\ 2\\cos\\theta\\sin\\theta\\cdot x+2\\sin^{2}\\theta\\cdot y&=0,\\end{aligned}\\right.$

得 $\\boldsymbol{m}=(\\sin\\theta,-\\cos\\theta,-\\cos\\theta)$ .

$$
\\cos \\alpha = \\frac {\\left| \\boldsymbol {n} \\cdot \\boldsymbol {m} \\right|}{\\left| \\boldsymbol {n} \\right| \\cdot \\left| \\boldsymbol {m} \\right|} = \\frac {\\sin \\theta}{\\sqrt {\\sin^ {2} \\theta + 2 \\cos^ {2} \\theta}} = \\frac {1}{\\sqrt {7}},
$$

解得： $\\sin\\theta=\\frac{1}{2},D\\left(-\\frac{\\sqrt{3}}{2},\\frac{3}{2},0\\right),AD=\\sqrt{3}.$`,
      },
      {
        id: "prob-sec-5-3-9-sol-6",
        title: `解法7`,
        method: "standard",
        steps: [],
        explanation: `高妙解法四
(坐标法):如图5-3-8所示,以AC的中点O为坐标原点,AC为x轴,y轴垂直于AC,z轴平行于AP,

![](images/afc1cc90fec2ebd80d6fdbeaa6a439df40dd025c19eca184d6cbb75fa3dc6130.jpg)

则 $A(-1,0,0)$ , $C(1,0,0)$ , $P(-1,0,2)$ , $D(\\cos\\theta,\\sin\\theta,0)$ ,

$$
\\overrightarrow {C P} = (- 2, 0, 2), \\overrightarrow {D C} = (1 - \\cos \\theta , - \\sin \\theta , 0)
$$

设平面 ACP 的法向量为 $\\boldsymbol{n}=(0,1,0)$ .

设平面 DCP 的法向量为 $\\boldsymbol{m}=(x,y,z)$ ,

则 $\\left\\{\\begin{aligned}m\\cdot\\overrightarrow{CP}&=0,\\\\ m\\cdot\\overrightarrow{DC}&=0,\\end{aligned}\\right.$ 即 $\\left\\{\\begin{aligned}-2x+2z&=0,\\\\ (1-\\cos\\theta)x-\\sin\\theta\\cdot y&=0,\\end{aligned}\\right.$ 得 $m=(\\sin\\theta,1-\\cos\\theta,\\sin\\theta)$ ,

$$
\\cos \\alpha = \\frac {\\left| \\boldsymbol {n} \\cdot \\boldsymbol {m} \\right|}{\\left| \\boldsymbol {n} \\right| \\cdot \\left| \\boldsymbol {m} \\right|} = \\frac {1 - \\cos \\theta}{\\sqrt {2 \\sin^ {2} \\theta + (1 - \\cos \\theta) ^ {2}}} = \\frac {1}{\\sqrt {7}},
$$

解得: $\\cos\\theta=\\frac{1}{2},D\\left(\\frac{1}{2},\\frac{\\sqrt{3}}{2},0\\right),AD=\\sqrt{3}.$`,
      },
      {
        id: "prob-sec-5-3-9-sol-7",
        title: `解法8`,
        method: "geometric",
        steps: [],
        explanation: `高妙解法五
(几何法): 因为 $AD \\perp DC, PA \\perp CD,$

所以 $CD \\perp$ 平面 PAD,

所以平面 PAD⊥平面 PCD,

所以过点 A 作 $AH \\perp PD$ 交 PD 于点 H，

则 $AH \\perp$ 平面 PCD, 过点 H 作 $HE \\perp PC$ 交 PC 于点 E, 连接 AE,

则 $\\angle HEA$ 即为二面角 $A-CP-D$ 的平面角,如图5-3-9所示,

所以 $\\sin\\angle HEA=\\frac{\\sqrt{42}}{7}$ ,

![](images/c0d8b4b2ace4df5a514a239992abe5052931792edcd07f6cf30f10c59f6081c1.jpg)

图5-3-7

![](images/7ec844f0f6ec717ff430181b3abbe14b5506161458558b320d04e902338d7469.jpg)

图5-3-8

![](images/afc1cc90fec2ebd80d6fdbeaa6a439df40dd025c19eca184d6cbb75fa3dc6130.jpg)

图5-3-9
因为 $AE \\perp PC$ ，所以 E 为 PC 的中点，所以 $AE = PE = \\sqrt{2}$ ，

所以 $\\sin\\angle HEA=\\frac{AH}{AE}=\\frac{AH}{\\sqrt{2}}=\\frac{\\sqrt{42}}{7}$ ，所以 $AH=\\frac{2\\sqrt{3}}{\\sqrt{7}}$

所以 $HE=\\sqrt{AE^{2}-AH^{2}}=\\sqrt{2-\\frac{12}{7}}=\\frac{\\sqrt{2}}{\\sqrt{7}}$ ,

所以 $PH = \\sqrt{PE^2 + HE^2} = \\sqrt{2 + \\frac{2}{7}} = \\frac{4}{\\sqrt{7}}$

$\\frac{HE}{CD} = \\frac{PH}{PC}$ ，所以 $\\frac{\\frac{\\sqrt{2}}{\\sqrt{7}}}{CD} = \\frac{\\frac{4}{\\sqrt{7}}}{2\\sqrt{2}}$ 所以 $CD = 1,AD = \\sqrt{3}$`,
      },
      {
        id: "prob-sec-5-3-9-sol-8",
        title: `解法9`,
        method: "geometric",
        steps: [],
        explanation: `高妙解法六
(几何法): 因为 $PA \\perp$ 底面 ABCD, $PA \\subset$ 平面 PAC,

所以平面 PAC⊥平面 ABCD, 如图 5-3-10 所示,

![](images/45a22bbcdf977a0859d69f00d71dafb443ee1a826acf35ea9f61cc9522f3fb06.jpg)

过点 D 作 $DE \\perp AC$ 于点 E，则 $DE \\perp$ 平面 PAC，

过点 E 作 $EF \\perp PC$ 交 PC 于点 F，连接 DF，

则 $PC \\perp DF$ (三垂线定理),

则 $\\angle DFE$ 即为二面角 $A - CP - D$ 的平面角.

我们令 DA=a, DC=b, 则 $DE=\\frac{ab}{2}$ , $DF=\\frac{b\\sqrt{a^{2}+4}}{2\\sqrt{2}}$ ,

$\\sin \\angle DFE = \\frac{DE}{DF} = \\frac{\\sqrt{2}a}{\\sqrt{a^2 + 4}} = \\frac{\\sqrt{42}}{7}$ 解得 $a = \\sqrt{3}$`,
      },
      {
        id: "prob-sec-5-3-9-sol-9",
        title: `解法10`,
        method: "geometric",
        steps: [],
        explanation: `高妙解法七
(几何法): 等体积转化. 如图 5-3-11 所示,

$$
V _ {P - A C D} = \\frac {1}{3} S _ {\\triangle A C D} \\cdot P A = \\frac {1}{3} A D \\cdot D C
$$

$$
V _ {A - P C D} = \\frac {1}{3} S _ {\\triangle P C D} \\cdot h = \\frac {1}{6} D C \\cdot P D \\cdot h
$$

$$
= \\frac {1}{6} D C \\cdot P D \\cdot A E \\cdot \\sin \\angle A E H,
$$

$$
V _ {P - A C D} = V _ {A - P C D},
$$

$$
2 A D = P D \\cdot A E \\cdot \\sin \\angle A E H,
$$

$$
\\frac {A D}{P D} = \\frac {\\sqrt {2} \\cdot \\frac {\\sqrt {4 2}}{7}}{2} = \\frac {\\sqrt {2 1}}{7} = \\sin \\angle P D A,
$$

因为 $PA \\perp AD$ ，所以 $\\tan \\angle PDA = \\frac{2}{\\sqrt{3}} = \\frac{PA}{AD}$ ，所以 $AD = \\sqrt{3}$ .

另解: 设 AD = x，点 A 到直线 PC 的距离为 $d_{A-PC} = \\sqrt{2}$ ， $d_{A-PCD} = \\frac{2x}{\\sqrt{x^{2} + 4}}$ ，

设二面角 A-CP-D 平面角为 $\\theta$ ，则

$\\sin \\theta = \\frac{d_{A - PCD}}{d_{A - PC}} = \\frac{\\sqrt{42}}{7}$ , 即 $\\frac{\\sqrt{2}x}{\\sqrt{x^2 + 4}} = \\frac{\\sqrt{42}}{7}$ , 故 $AD = \\sqrt{3}$ .

![](images/b1670c63c83b6e4f892e5fa004c5256b1859e43cfbaf32808cb286e7383dd1aa.jpg)

图5-3-10

![](images/45a22bbcdf977a0859d69f00d71dafb443ee1a826acf35ea9f61cc9522f3fb06.jpg)

图5-3-11`,
      },
      {
        id: "prob-sec-5-3-9-sol-10",
        title: `解法11`,
        method: "geometric",
        steps: [],
        explanation: `高妙解法八
(几何法): 射影面积法.

因为 $PA \\perp$ 底面 ABCD, $PA \\subset$ 平面 PAC,

所以平面 PAC⊥平面 ABCD，

如图 5-3-12 所示, 过点 D 作 $DE \\perp AC$ 于点 E,

则 $DE \\perp$ 平面 PAC, 故平面 PCD 在平面 PAC 上的射影面为 $\\triangle PCE$ , 令 DA = a, DC = b, 则 $DE = \\frac{ab}{2}$ , $CE = b \\sqrt{1 - \\frac{a^{2}}{4}}$ ,

则 $\\cos\\theta=\\frac{S_{\\triangle PCE}}{S_{\\triangle PCD}}=\\frac{\\frac{1}{2}b\\sqrt{1-\\frac{a^{2}}{4}}\\times2}{\\frac{1}{2}b\\sqrt{a^{2}+4}}=\\frac{2\\sqrt{1-\\frac{a^{2}}{4}}}{\\sqrt{a^{2}+4}}=\\frac{1}{\\sqrt{7}}$ ，解得 $a=\\sqrt{3}$ .

![](images/b6b83427b8f5ce423ffbfb3f844ae82d2f68f1b6ec6622cc2a9d374f38b504db.jpg)

图5-3-12`,
      },
      {
        id: "prob-sec-5-3-9-sol-11",
        title: `解法12`,
        method: "geometric",
        steps: [],
        explanation: `高妙解法九
(几何法):三射线定理法.

三射线定理:如图 5-3-13 所示,以点 O 为顶点分别发出三条射线 OA、OB、OH,其中 OA 与 OB 的夹角是 $\\theta$ ,OA 与 OH 的夹角是 $\\theta_{1}$ ,OB 与 OH 的夹角是 $\\theta_{2}$ ,则二面角 A-OH-B 的大小 $\\varphi$ 满足

$$
\\cos \\varphi = \\frac {\\cos \\theta - \\cos \\theta_ {1} \\cos \\theta_ {2}}{\\sin \\theta_ {1} \\sin \\theta_ {2}}.
$$

![](images/45c6a828fee0b6e35e56420465b0ca15f25c4029c019de98273c95e9aeaccf10.jpg)

图5-3-13

注: 当二面角 A-OH-B 的大小 $\\varphi=\\frac{\\pi}{2}$ 时,
三射线定理退化为三余弦定理, 即

$$
\\cos \\theta = \\cos \\theta_ {1} \\cos \\theta_ {2}.
$$

如图 5-3-14 所示, 因为 PA⊥底面 ABCD,

所以 $PA \\perp DC, PA \\perp AC.$

因为 $AD \\perp DC, PA \\cap AD = A,$

所以 $DC \\perp$ 平面 APD, 所以 $DC \\perp PD$ .

因为 PA=AC=2，所以 $PC=2\\sqrt{2}$ ，

设 $AD=t,\\angle ACD=\\theta,\\angle PCD=\\theta_{1},\\angle PCA=\\theta_{2}$

所以 $DC=\\sqrt{4-t^{2}}$ , $PD=\\sqrt{4+t^{2}}$ ,

则 $\\cos\\theta=\\frac{\\sqrt{4-t^{2}}}{2},\\cos\\theta_{1}=\\frac{\\sqrt{4-t^{2}}}{2\\sqrt{2}},$

$$
\\sin \\theta_ {1} = \\frac {\\sqrt {4 + t ^ {2}}}{2 \\sqrt {2}}, \\cos \\theta_ {2} = \\sin \\theta_ {2} = \\frac {\\sqrt {2}}{2}.
$$

设二面角 A-CP-D 的大小为 $\\varphi$ ,

则 $\\cos\\varphi=\\frac{\\sqrt{7}}{7}.$

![](images/3a07126d76a77cc33feabead477f108b85c2abe1094b46f2138ce5570607036c.jpg)

图5-3-14

$\\cos \\varphi = \\frac{\\cos\\theta - \\cos\\theta_1\\cos\\theta_2}{\\sin\\theta_1\\sin\\theta_2} = \\frac{\\frac{\\sqrt{4 - t^2}}{2} - \\frac{\\sqrt{4 - t^2}}{2\\sqrt{2}}\\times\\frac{\\sqrt{2}}{2}}{\\frac{\\sqrt{4 + t^2}}{2\\sqrt{2}}\\times\\frac{\\sqrt{2}}{2}} = \\frac{\\sqrt{4 - t^2}}{\\sqrt{4 + t^2}} = \\frac{\\sqrt{7}}{7}$ ，解得 $t = \\sqrt{3}$`,
      },
      {
        id: "prob-sec-5-3-9-sol-12",
        title: `解法13`,
        method: "geometric",
        steps: [],
        explanation: `高妙解法十
: 几何法＋对称性.

先求二面角 B-PC-A，因为 $PA \\perp$ 底面 ABCD， $PA \\subset$ 平面 PAC，

所以平面 PAC⊥平面 ABCD，

如图 5-3-15 所示, 过点 B 作 $BK \\perp AC$ 于点 K,

则 $BK \\perp$ 平面 PAC,

过点 K 作 $KQ \\perp PC$ 交 PC 于点 Q，连接 BQ，

则 $PC \\perp BQ$ (三垂线定理)，

则 $\\angle BQK$ 即为二面角 $B - PC - A$ 的平面角.

$$
B K = \\frac {\\sqrt {3}}{2}, C K = \\frac {1}{2}, K Q = \\frac {\\sqrt {2}}{4}, B Q = \\frac {\\sqrt {1 4}}{4},
$$

$$
\\sin \\angle B Q K = \\frac {\\sqrt {4 2}}{7} = \\sin \\langle A - P C - D \\rangle .
$$

因为 $AD \\perp DC$ ，二面角 A - CP - D 的正弦值也为 $\\frac{\\sqrt{42}}{7}$ ，

故 D 与 B 关于 AC 对称, 因此 $AD = AB = \\sqrt{3}$ .

(以上解法由杭州市余杭中学程建新提供)

![](images/970d19c77f80ff658f199eabb38df03ff85eb4b74eebf578f27bcdaee9060cf9.jpg)

图5-3-15`,
      },
    ],
    tags: [],
    source: `2024 年高考新课标全国Ⅰ卷第 17 题`,
  },
  {
    id: "prob-sec-5-3-10",
    topicId: "topic-sec-5-3",
    title: `2024 新课标Ⅰ：对数函数导数与中心对称`,
    content: `(2024 年高考新课标全国Ⅰ卷第 18 题)
已知函数 $f(x) = \\ln \\frac{x}{2 - x} + ax + b(x - 1)^3$ .

(1) 若 b=0，且 $f'(x)\\geqslant0$ ，求 a 的最小值；

(2) 证明: 曲线 $y = f(x)$ 是中心对称图形;

(3) 若 $f(x) > -2$ 当且仅当 $1 < x < 2$ ，求 $b$ 的取值范围.

解析

(1)高妙解法一: 当 b=0 时, $f'(x)=\\frac{1}{x}+\\frac{1}{2-x}+a, x \\in (0,2)$ ,

$$
\\frac {1}{x} + \\frac {1}{2 - x} = \\frac {1}{2} \\left(\\frac {2}{x} + \\frac {2 - x + x}{2 - x}\\right) = \\frac {1}{2} \\left(2 + \\frac {2 - x}{x} + \\frac {x}{2 - x}\\right) \\geqslant \\frac {1}{2} \\left(2 + 2 \\sqrt {\\frac {2 - x}{x} \\cdot \\frac {x}{2 - x}}\\right) = 2,
$$

而 $f'(x) \\geqslant 0$ ，得 $a \\geqslant -2$ ，故 $a$ 的最小值为 -2。`,
    preview: `已知函数 . (1) 若 b=0，且 f'(x)≥0 ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-5-3-10-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `当 b=0 时, $f'(x)=\\frac{2}{x(2-x)}+a \\geqslant 0, x \\in (0,2)$ ,

参变分离得 $a \\geqslant \\frac{2}{x(x - 2)}$ ，令 $g(x) = \\frac{2}{x(x - 2)}, x \\in (0, 2)$ ，

由于 $g(x)$ 在 $(0,1)$ 上单调递增，在 $(1,2)$ 上单调递减，

所以 $a \\geqslant g(x)_{\\max} = g(1) = -2.$

(2)`,
      },
      {
        id: "prob-sec-5-3-10-sol-1",
        title: `解法2`,
        method: "geometric",
        steps: [],
        explanation: `高妙解法一
:分块分析.

$$
f (x) = \\ln \\frac {x}{2 - x} + a x + b (x - 1) ^ {3} = \\ln \\frac {x}{2 - x} + a (x - 1) + b (x - 1) ^ {3} + a,
$$

易知函数 $\\ln \\frac{x}{2 - x}, a(x - 1) + b(x - 1)^3$ 的图像关于(1,0)中心对称，

则函数 $g(x) = \\ln \\frac{x}{2 - x} + a(x - 1) + b(x - 1)^3$ 的图像关于(1,0)中心对称，

所以曲线 $y = f(x)$ 是关于(1, a)的中心对称图形.`,
      },
      {
        id: "prob-sec-5-3-10-sol-2",
        title: `解法3`,
        method: "standard",
        steps: [],
        explanation: `高妙解法二
:由特殊到一般.

思路1 由 $f(1) = a$ ，猜想 $f(x)$ 关于 $(1, a)$ 中心对称. 函数 $y = \\ln \\left(\\frac{x}{2 - x}\\right)$ 关于 $(1, 0)$ 中心对称， $y = ax$ 关于 $(1, a)$ 中心对称， $y = b(1 - x)^3$ 关于 $(1, 0)$ 中心对称，则 $f(x)$ 关于 $(1, a)$ 中心对称，下证其成立.

$$
f (1 + x) + f (1 - x) = \\ln \\frac {1 + x}{1 - x} + a (1 + x) + b x ^ {3} + \\ln \\frac {1 - x}{1 + x} + a (1 - x) + b (- x) ^ {3} = 2 a,
$$

故结论成立.

思路2 从定义域考虑. 函数的定义域为 $(0,2)$ , 若 $f(x)$ 关于某一点中心对称, 则该点的横坐标只能是 $x = 1$ , 代入得 $f(1) = a$ , 下面只须证明 $f(x + 1) + f(1 - x) = 2a$ 即可.`,
      },
      {
        id: "prob-sec-5-3-10-sol-3",
        title: `解法4`,
        method: "creative",
        steps: [],
        explanation: `高妙解法三
:换元构造奇函数.

思路1 令 $t = x - 1$ ，则 $f(x - 1) = g(t) = \\ln \\frac{1 + t}{1 - t} + at + bt^3 + a,$

因为 $h(t) = \\ln \\frac{1 + t}{1 - t} + at + bt^3$ 为奇函数，则 $h(t)$ 关于(0,0)对称，

则 $g(t)$ 关于 $(0,a)$ 中心对称， $f(x)$ 关于 $(1,a)$ 中心对称.

思路2 从图像平移角度考虑. $f(x + 1) = \\ln \\frac{1 + x}{1 - x} + ax + bx^3 + a$ 关于 $(0, a)$ 中心对称, 则 $f(x)$ 关于 $(1, a)$ 中心对称.`,
      },
      {
        id: "prob-sec-5-3-10-sol-4",
        title: `解法5`,
        method: "geometric",
        steps: [],
        explanation: `高妙解法四
:高数视角.

若 $f(x)$ 为中心对称图形，则其对称中心为拐点（凹凸分界点），令 $f''(x) = 0$ ，则 $2(x - 1)\\left[\\frac{2}{[x(2 - x)]^2} +3b\\right] = 0$ ，解得 $x = 1,f(1) = a$ ，则 $f(x)$ 关于 $(1,a)$ 中心对称.

(3)由函数的连续性及题意知: $f(1)=-2$ ,代入原函数,得a=-2.

下面严格证明：

① 若 $a < -2$ ，因为 $f(1) = a$ ，当 $x \\to 2$ 时， $f(x) \\to +\\infty$ ，而 $f(1) = a < \\frac{a}{2} - 1$

由连续函数的介值定理,存在 $x_{1}\\in(1,2)$ , $f(x_{1})=\\frac{a}{2}-1<-2$ , 不满足题意.

②若 $a > -2$ ，当 $x\\to 0$ 时， $f(x)\\rightarrow -\\infty ;f(1) = a > \\frac{a}{2} -1,$

由连续函数的介值定理,存在 $x_{2}\\in(0,1)$ , $f(x_{1})=\\frac{a}{2}-1>-2$ , 不满足题意.`,
      },
      {
        id: "prob-sec-5-3-10-sol-5",
        title: `解法6`,
        method: "geometric",
        steps: [],
        explanation: `高妙解法一
: 直接讨论.

因为 $y=f(x)$ 为中心对称图形, 当且仅当 1<x<2 时, $f(x)>-2$ ,

所以当 0 < x < 1 时， $f(x) < -2$ ，所以 $f(1) = -2$ ，即 a = -2。

此时， $f'(x)=\\frac{(x-1)^{2}(-3bx^{2}+6bx+2)}{x(2-x)}$ ，令 $h(x)=-3bx^{2}+6bx+2$ .

i) 当 $b = 0$ 时, $h(x) = 2 > 0$ , 此时 $f'(x) \\geqslant 0, f(x) > f(1) = -2$ 成立.

ii) 当 b > 0 时， $h(x)$ 在 (1, 2) 上单调递减， $h(1) = 3b + 2 > 0, h(x) = 2 > 0,$

此时 $f'(x) \\geqslant 0, f(x) > f(1) = -2$ 成立.

iii) 当 b<0 时, $h(x)$ 在 $(1,2)$ 上单调递增, $h(1)=3b+2$ .

①当 $3b + 2 \\geqslant 0$ 时，即 $b \\geqslant -\\frac{2}{3}$ 时， $h(x) > 0$ ，此时 $f'(x) \\geqslant 0$

则 $f(x)$ 在 $(1,2)$ 上单调递增，故 $f(x)>f(1)=-2$ 成立；

② 当 $3b + 2 < 0$ 时, $b < -\\frac{2}{3}$ 时, $h(1) < 0, h(2) > 0$ , 因此 $\\exists x_0 \\in (1,2)$ , 使得 $h(x_0) = 0$ , 所以 $f(x)$ 在 $(1, x_0)$ 上单调递减, 此时 $f(x) < f(1) = -2$ , 不成立.

综上所述, $b\\geqslant-\\frac{2}{3}$ .

【优化讨论】

$f^{\\prime}(x) = (x - 1)^{2}\\left[\\frac{2}{x(2 - x)} +3b\\right] = 0$ ，定义域为(1,2)，注意到 $\\frac{2}{x(2 - x)} > 2.$

①当 $3b+2 \\geqslant 0$ 时，即 $b \\geqslant -\\frac{2}{3}$ 时， $f'(x) \\geqslant 0$ ，

则 $f(x)$ 在 $(1,2)$ 上单调递增，故 $f(x)>f(1)=-2$ 成立；

②当 $3b+2<0$ , 即 $b<-\\frac{2}{3}$ 时，

$$
f ^ {\\prime} (1) = 0, f ^ {\\prime} (x) = (x - 1) ^ {2} \\left(\\frac {2}{x (2 - x)} + 3 b\\right) = (x - 1) ^ {2} \\frac {- 3 b x ^ {2} + 6 b x + 2}{x (2 - x)},
$$

令 $f'(x)=0$ ，即 $3bx^{2}-6bx-2=0$ ，

解得 $x_{2} = 1 + \\sqrt{1 + \\frac{2}{3b}}\\in (1,2),x_{1} = 1 - \\sqrt{1 + \\frac{2}{3b}} < 1,$

从而 $f(x)$ 在 $(1, x_{2})$ 上单调递减，此时 $f(x) < f(1) = -2$ ，不符合题意.`,
      },
      {
        id: "prob-sec-5-3-10-sol-6",
        title: `解法7`,
        method: "creative",
        steps: [],
        explanation: `高妙解法二
: 参变分离+洛必达法则.

问题转化为 $h(t)=\\ln\\frac{1+t}{1-t}-2t+bt^{3}>0$ 恒成立，当且仅当 $t\\in(0,1)$ .

参变分离: $b>\\frac{-2-\\ln\\frac{1+t}{1-t}+2(t+1)}{t^{3}}=\\frac{2t-\\ln\\frac{1+t}{1-t}}{t^{3}}.$

构造函数: 令 $\\varphi(t)=\\frac{2t-\\ln\\frac{1+t}{1-t}}{t^{3}}$ ，则 $\\varphi'(t)=\\frac{3\\ln\\frac{1+t}{1-t}-\\frac{2t}{1-t^{2}}-4t}{t^{4}}=0.$

再次构造函数: 令 $p(t)=3\\ln\\frac{1+t}{1-t}-\\frac{2t}{1-t^{2}}-4t,$

则 $p^{\\prime}(t) = \\frac{4 - 8t^{2}}{(1 - t^{2})^{2}} -4 = \\frac{-4t^{4}}{(1 - t^{2})^{2}} < 0,$

于是 $p(t)$ 在 $(0,1)$ 内单调递减，则 $p(t)<p(0)=0$ ，

从而 $\\varphi'(t)<0,\\varphi(t)$ 在 $(0,1)$ 内单调递减，

从而得 $\\varphi(t)<\\varphi(0)=\\lim_{t\\to0}\\frac{2t-\\ln\\frac{1+t}{1-t}}{t^{3}}=\\lim_{t\\to0}\\frac{-2}{3(1-t^{2})^{2}}=-\\frac{2}{3}$ ,

因此 b 的取值范围为 $b \\geqslant -\\frac{2}{3}$ .`,
      },
      {
        id: "prob-sec-5-3-10-sol-7",
        title: `解法8`,
        method: "standard",
        steps: [],
        explanation: `高妙解法三
:换元+端点效应.令 t=x-1, 则 $g(t)=\\ln\\frac{1+t}{1-t}-2t+bt^{3}-2>-2$ ,

于是问题转化为 $h(t)=\\ln\\frac{1+t}{1-t}-2t+bt^{3}>0$ 恒成立，当且仅当 $t\\in(0,1)$ .

注意到 $h(0) = 0$ ，回归原点：导数是研究函数局部性质的工具，聚焦函数的局部性质的研究，我们得知，存在很小的正数 $\\delta_{1}$ ，使得在 $x = 0$ 的局部小邻域 $(0,\\delta_1)$ 内，函数 $f(x)$ 单调递增（倘若不然，必定会出现小于0的函数值，与恒大于0矛盾）.

则 $h^{\\prime}(0)\\geqslant 0,h^{\\prime}(t) = \\frac{2}{1 - t^{2}} -2 + 3bt^{2}$ ，发现无法得到 $b$ 的取值范围，再次转化为：

$h'(t)=\\frac{2}{1-t^{2}}-2+3bt^{2}\\geqslant0$ 在小邻域 $(0,\\delta_{1})$ 内恒成立，

再次利用端点效应得到： $h''(t)=\\frac{4t}{(1-t^{2})^{2}}+6bt\\geqslant0$ 恒成立，

即 $\\frac{2}{(1 - t^2)^2} + 3b \\geqslant 0$ 恒成立， $3b \\geqslant -\\frac{2}{(1 - t^2)^2}$ ，得 $b \\geqslant -\\frac{2}{3}$ .

下面证明充分性: 当 $b \\geqslant -\\frac{2}{3}$ 时,

$$
h ^ {\\prime} (t) = \\frac {2}{1 - t ^ {2}} - 2 + 3 b t ^ {2} \\geqslant \\frac {2}{1 - t ^ {2}} - 2 - 2 t ^ {2} = \\frac {2 (t ^ {4} - t ^ {2} + 1)}{1 - t ^ {2}} > 0,
$$

从而 $h(t)$ 在 $(0,1)$ 内单调递增，故 $h(t) > h(0) = 0$ 成立，

因此 b 的取值范围为 $b \\geqslant -\\frac{2}{3}$ .

(以上解法由杭州市余杭中学程建新、杭州市余杭高级中学林威提供)`,
      },
    ],
    tags: [],
    source: `2024 年高考新课标全国Ⅰ卷第 18 题`,
  },
  {
    id: "prob-sec-5-3-11",
    topicId: "topic-sec-5-3",
    title: `2024 新课标Ⅰ：等差数列可分性构造证明`,
    content: `(2024 年高考新课标全国Ⅰ卷第 19 题)
设 m 为正整数，数列 $a_{1}, a_{2}, \\cdots, a_{4m+2}$ 是公差不为 0 的等差数列，若从中删去两项 $a_{i}$ 和 $a_{j} (i < j)$ 后剩余的 4m 项可被平均分为 m 组，且每组的 4 个数都能构成等差数列，则称数列 $a_{1}, a_{2}, \\cdots, a_{4m+2}$ 是 $(i, j)$ — 可分数列.

(1) 写出所有的 $(i,j)$ , $1 \\leqslant i < j \\leqslant 6$ , 使得数列 $a_{1}, a_{2}, \\cdots, a_{6}$ 是 $(i,j)$ — 可分数列;

(2) 当 $m \\geqslant 3$ 时, 证明: 数列 $a_{1}, a_{2}, \\cdots, a_{4m+2}$ 是 (2, 13) — 可分数列;

(3)从 $1,2,\\cdots,4m+2$ 中一次任取两个数 i 和 $j(i<j)$ ，记数列 $a_{1},a_{2},\\cdots,a_{4m+2}$ 是 $(i,j)$ — 可分数列的概率为 $P_{m}$ ，证明： $P_{m}>\\frac{1}{8}$ .`,
    preview: `设 m 为正整数，数列 a_1, a_2, ·s, a_4m+2 是公差不为 0 的等差数列，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-5-3-11-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1)当 m=1 时等差数列共 6 项,去掉 2 项后剩余的 4 项仍然成等差数列,显然只要去掉前 2 项、最后 2 项或者首尾 2 项即可,所求的结果为(1,2),(5,6),(1,6).

(2) 数列删除 $a_{2}, a_{13}$ 后还有 4m 项，剩余的前 12 项按 $a_{1}, a_{4}, a_{7}, a_{10}; a_{5}, a_{8}, a_{11}, a_{14}; a_{3}, a_{6}, a_{9}, a_{12}$ 分成三组，之后剩余的 $4(m-3)$ 项按照原来的顺序 4 项一组，则数列 $a_{1}, a_{2}, \\cdots, a_{4m+2}$ 是 (2,13)—可分数列.

(3) 若 $0 \\leqslant n \\leqslant k \\leqslant m$ ，则 $1, 2, \\cdots, 4m + 2$ 删除 $4n + 1$ 和 $4k + 2$ 后，前 4n、中间 $4(k - n)$ 、后 $4(m - k)$ 顺序 4 项一组，可得 $1, 2, \\cdots, 4m + 2$ 是 $(4n + 1, 4k + 2)$ — 可分数列；

若 $0 \\leqslant k \\leqslant n \\leqslant m$ 且 $n - k \\geqslant 2$ ，则 $1, 2, \\cdots, 4m + 2$ 删除 $4k + 2$ 和 $4n + 1$ 后，前 4k、中间 $4(n - k)$ 、后 $4(m - n)$ 顺序 4 项一组，可得 $1, 2, \\cdots, 4m + 2$ 是 $(4k + 2, 4n + 1)$ — 可分数列；

可行的 $(4n + 1,4k + 2)$ -与 $(4k + 2,4n + 1)$ -至少有 $\\frac{(m + 1)(m + 2)}{2} +\\frac{(m - 1)m}{2} =$ $m^2 +m + 1$ 组，

所以 $P_{m}\\geqslant \\frac{m^{2} + m + 1}{C_{4m + 2}^{2}} = \\frac{m^{2} + m + 1}{8m^{2} + 6m + 1} >\\frac{m^{2} + m + 1}{8m^{2} + 8m + 8} = \\frac{1}{8}.$`,
      },
      {
        id: "prob-sec-5-3-11-sol-1",
        title: `解法2`,
        method: "standard",
        steps: [],
        explanation: `高妙解法二
: 记 $\\{a_{n}\\}$ 的公差为 d.

(3)一方面,任取两个i,j(i<j)共有 $C_{4m+2}^{2}$ 种可能.

另一方面,再考虑一种较为平凡的情况:i-1,j-i-1均可被4整除,

此时,只要依次将剩下的4m项按原顺序从头到尾排一列,每四个截取一段,

得到 m 组公差为 d 的数列, 则满足题意, 故此时确实是 $(i, j)$ — 可分的.

接着计算此时的方法数.

设 $i=4k+1(0\\leqslant k\\leqslant m)$ ,

对于每个 k, j 有 $\\frac{(4m+2)-(4k+1)-1}{4}+1=m-k+1$ (种),

因此方法数为

$$
\\sum_ {k = 1} ^ {m} (m - k + 1) = \\frac {(m + 1) (m + 2)}{2}.
$$

当 $m = 1,2$ 时，已经有 $\\frac{\\frac{(m + 1)(m + 2)}{2}}{C_{4m + 2}^2} >\\frac{1}{8}$

下面考虑 $m \\geqslant 3$ .

我们证明: 当 $i-2, j-i+1$ 被 4 整除, 且 $j-i+1>4$ 时, 数列是 $(i,j)$ — 可分的.

首先将 $a_{1}, a_{2}, \\cdots, a_{i-2}$ ，及 $a_{j+2}, a_{j+3}, \\cdots, a_{4m+2}$ 顺序排成一列，每 4 个排成一段，得到一些公差为 d 的四元数组，

因此只需考虑 $a_{i-1}, a_{i+1}, a_{i+2}, \\cdots, a_{j-1}, a_{j+1}$ 这 $j-i+1$ 个数即可.

为书写方便, 记 j-i=4t-1(t>1), 并记 $b_{n}=a_{n+i-2}$ ,

即证 $b_{1}, b_{3}, b_{4}, \\cdots, b_{4t}, b_{4t+2}$ 可被划分成若干组.

引理: 设 j-1 能被 4 整除. 若 $b_{1}, b_{2}, \\cdots, b_{j+1}$ 是 $(2, j)$ — 可分的, 则 $b_{1}, b_{2}, \\cdots, b_{j+9}$ 是 $(2, j+8)$ — 可分的.

引理证明: 将 $b_{1}, b_{2}, \\cdots, b_{j+1}$ 去掉 $b_{2}, b_{j}$ 后的 $\\frac{j-1}{4}$ 组四元组再并上 $(b_{j}, b_{j+2}, b_{j+4}, b_{j+6}), (b_{j+3}, b_{j+5}, b_{j+7}, b_{j+9})$ 即证.

回原题. 由(2), $b_{1},\\cdots,b_{14}$ 是(2,13)-可分数列，且 $(b_{1},b_{3},b_{5},b_{7})$ 和 $(b_{4},b_{6},b_{8},b_{10})$ 知 $b_{1},\\cdots,b_{10}$ 是(2,9)-可分数列，因而结合引理知 $b_{1},b_{3},b_{4},\\cdots,b_{4t},b_{4t+2}$ 可被划分成若干组，由此结论成立.

计算此时的方法数.

设 $i = 4k + 2(0\\leqslant k\\leqslant m - 1)$ ，则此时 $j$ 有 $\\frac{(4m + 2) - (4k + 2)}{4} -1 = m - k - 1$ （种），

因此方法数为

$$
\\sum_ {k = 0} ^ {m - 1} (m - k - 1) = \\frac {m (m - 1)}{2}.
$$

因此我们有

$$
P _ {m} \\geqslant \\frac {m (m - 1) + (m + 1) (m + 2)}{2 C _ {m + 1} ^ {2}} > \\frac {1}{8}.
$$`,
      },
      {
        id: "prob-sec-5-3-11-sol-2",
        title: `解法3`,
        method: "standard",
        steps: [],
        explanation: `高妙解法三
:(3)定义集合 $A=\\{4k+1 \\mid k=0,1,2,\\cdots,m\\}=\\{1,5,9,13,\\cdots,4m+1\\}$ ， $B=\\{4k+2 \\mid k=0,1,2,\\cdots,m\\}=\\{2,6,10,14,\\cdots,4m+2\\}$ .

下面证明,对 $1 \\leqslant i < j \\leqslant 4m + 2$ , 如果下面两个命题同时成立,

则数列 $1,2,\\cdots,4m+2$ 一定是 $(i,j)$ — 可分数列.

命题 1: $i \\in A, j \\in B$ 或 $i \\in B, j \\in A;$

命题 2: j-i≠3.

我们分两种情况证明这个结论.

第一种情况: 如果 $i \\in A, j \\in B$ , 且 $j - i \\neq 3$ .

此时设 $i=4k_{1}+1, j=4k_{2}+2, k_{1}, k_{2}\\in\\{0,1,2,\\cdots,m\\}$ .

则由 $i < j$ 可知 $4k_{1} + 1 < 4k_{2} + 2$ ，即 $k_{2} - k_{1} > -\\frac{1}{4}$ ，故 $k_{2} \\geqslant k_{1}$ .

此时，由于从数列 $1,2,\\cdots,4m+2$ 中取出 $i=4k_{1}+1$ 和 $j=4k_{2}+2$ 后，

剩余的 4m 个数可以分为以下三个部分, 共 m 组, 使得每组成等差数列:

① $\\{1,2,3,4\\},\\{5,6,7,8\\},\\cdots,\\{4k_{1}-3,4k_{1}-2,4k_{1}-1,4k_{1}\\}$ ，共 $k_{1}$ 组；
② $\\{4k_{1}+2,4k_{1}+3,4k_{1}+4,4k_{1}+5\\},\\{4k_{1}+6,4k_{1}+7,4k_{1}+8,4k_{1}+9\\},\\cdots,\\{4k_{2}-2,4k_{2}-1,4k_{2},4k_{2}+1\\}$ ，共 $k_{2}-k_{1}$ 组；
③ $\\{4k_{2}+3,4k_{2}+4,4k_{2}+5,4k_{2}+6\\},\\{4k_{2}+7,4k_{2}+8,4k_{2}+9,4k_{2}+10\\},\\cdots,\\{4m-1,4m,4m+1,4m+2\\}$ ，共 $m-k_{2}$ 组.

(如果某一部分的组数为0,则忽略之)

故此时数列 $1,2,\\cdots,4m+2$ 是 $(i,j)$ — 可分数列.

第二种情况: 如果 $i \\in B, j \\in A$ ，且 $j - i \\neq 3$ .

此时设 $i=4k_{1}+2, j=4k_{2}+1, k_{1}, k_{2}\\in\\{0,1,2,\\cdots,m\\}$ .

则由 $i < j$ 可知 $4k_{1} + 2 < 4k_{2} + 1$ ，即 $k_{2} - k_{1} > \\frac{1}{4}$ 故 $k_{2} > k_{1}$

由于 $j - i \\neq 3$ ，故 $(4k_{2} + 1) - (4k_{1} + 2) \\neq 3$ ，从而 $k_{2} - k_{1} \\neq 1$ ，这就意味着 $k_{2} - k_{1} \\geqslant 2$ .

此时，由于从数列 $1,2,\\cdots,4m+2$ 中取出 $i=4k_{1}+2$ 和 $j=4k_{2}+1$ 后，

剩余的 4m 个数可以分为以下四个部分, 共 m 组, 使得每组成等差数列:

① $\\{1,2,3,4\\},\\{5,6,7,8\\},\\cdots,\\{4k_{1}-3,4k_{1}-2,4k_{1}-1,4k_{1}\\}$ ，共 $k_{1}$ 组；
② $\\{4k_{1} + 1,3k_{1} + k_{2} + 1,2k_{1} + 2k_{2} + 1,k_{1} + 3k_{2} + 1\\},\\{3k_{1} + k_{2} + 2,2k_{1} + 2k_{2} + 2,k_{1} +$ $3k_{2} + 2,4k_{2} + 2\\}$ ，共2组；
③全体 $\\{4k_{1}+p,3k_{1}+k_{2}+p,2k_{1}+2k_{2}+p,k_{1}+3k_{2}+p\\}$ ，其中 $p=3,4,\\cdots,k_{2}-k_{1}$ ，共 $k_{2}-k_{1}-2$ 组；
④ $\\{4k_{2}+3,4k_{2}+4,4k_{2}+5,4k_{2}+6\\},\\{4k_{2}+7,4k_{2}+8,4k_{2}+9,4k_{2}+10\\},\\cdots,\\{4m-1,4m,4m+1,4m+2\\}$ ，共 $m-k_{2}$ 组.

(如果某一部分的组数为0,则忽略之)

这里对②和③进行一下解释:将③中的每一组作为一个横排,排成一个包含 $k_{2}-k_{1}-2$ 个行,4个列的数表以后,4个列分别是下面这些数:

$$
\\begin{array}{r} \\{4 k _ {1} + 3, 4 k _ {1} + 4, \\dots , 3 k _ {1} + k _ {2} \\}, \\{3 k _ {1} + k _ {2} + 3, 3 k _ {1} + k _ {2} + 4, \\dots , 2 k _ {1} + 2 k _ {2} \\}, \\{2 k _ {1} + 2 k _ {2} + \\\\ 3, 2 k _ {1} + 2 k _ {2} + 3, \\dots , k _ {1} + 3 k _ {2} \\}, \\{k _ {1} + 3 k _ {2} + 3, k _ {1} + 3 k _ {2} + 4, \\dots , 4 k _ {2} \\}. \\end{array}
$$

可以看出每列都是连续的若干个整数，它们再取并以后，将取遍 $\\{4k_{1} + 1,4k_{1} + 2,\\dots ,4k_{2} + 2\\}$ 中除开五个集合 $\\{4k_1 + 1,4k_1 + 2\\} ,\\{3k_1 + k_2 + 1,3k_1 + k_2 + 2\\} ,\\{2k_1 + 2k_2 + 1,$ $2k_{1} + 2k_{2} + 2\\} ,\\{k_{1} + 3k_{2} + 1,k_{1} + 3k_{2} + 2\\} ,\\{4k_{2} + 1,4k_{2} + 2\\}$ 中的十个元素以外的所有数.

而这十个数中，除开已经去掉的 $4k_{1} + 2$ 和 $4k_{2} + 1$ 以外，剩余的八个数恰好就是②中出现的八个数.

这说明我们给出的分组方式满足要求,故此时数列 $1,2,\\cdots,4m+2$ 是 $(i,j)$ — 可分数列.

至此,我们证明了:对 $1 \\leqslant i < j \\leqslant 4m + 2$ , 如果前述命题 1 和命题 2 同时成立, 则数列 $1, 2, \\cdots, 4m + 2$ 一定是 $(i, j)$ — 可分数列.

然后我们来考虑这样的 $(i,j)$ 的个数.

首先,由于 $A \\cap B = \\varnothing$ , A 和 B 各有 $m + 1$ 个元素,

故满足命题1的 $(i,j)$ 总共有 $(m+1)^{2}$ 个；

而如果 j-i=3，假设 $i \\in A, j \\in B$ ，

则可设 $i = 4k_{1} + 1, j = 4k_{2} + 2$ ，代入得 $(4k_{2} + 2) - (4k_{1} + 1) = 3$ .

但这导致 $k_{2} - k_{1} = \\frac{1}{2}$ ，矛盾，所以 $i\\in B,j\\in A$

设 $i=4k_{1}+2, j=4k_{2}+1, k_{1}, k_{2}\\in\\{0,1,2,\\cdots,m\\}$ ,

则 $(4k_{2}+1)-(4k_{1}+2)=3$ ，即 $k_{2}-k_{1}=1$ .

所以可能的 $(k_{1},k_{2})$ 恰好就是 $(0,1),(1,2),\\cdots,(m-1,m)$ ，对应的 $(i,j)$ 分别是 $(2,5),(6,9),\\cdots,(4m-2,4m+1)$ ，总共m个.

所以这 $(m+1)^{2}$ 个满足命题1的 $(i,j)$ 中,不满足命题2的恰好有m个.

这就得到同时满足命题1和命题2的 $(i,j)$ 的个数为 $(m+1)^{2}-m$ .

当我们从 $1,2,\\cdots,4m+2$ 中一次任取两个数 i 和 $j(i<j)$ 时，总的选取方式的个数等于 $\\frac{(4m+2)(4m+1)}{2}=(2m+1)(4m+1)$ .

而根据之前的结论,使得数列 $a_{1}, a_{2}, \\cdots, a_{4m+2}$ 是 $(i, j)$ — 可分数列的 $(i, j)$ 至少有 $(m+1)^{2}-m$ 个.

所以数列 $a_{1}, a_{2}, \\cdots, a_{4m+2}$ 是 $(i, j)$ — 可分数列的概率 $P_{m}$ 一定满足

$$
\\begin{array}{l} P _ {m} \\geqslant \\frac {(m + 1) ^ {2} - m}{(2 m + 1) (4 m + 1)} = \\frac {m ^ {2} + m + 1}{(2 m + 1) (4 m + 1)} \\\\ > \\frac {m ^ {2} + m + \\frac {1}{4}}{(2 m + 1) (4 m + 2)} = \\frac {\\left(m + \\frac {1}{2}\\right) ^ {2}}{2 (2 m + 1) (2 m + 1)} = \\frac {1}{8}. \\\\ \\end{array}
$$

这就证明了结论.`,
      },
      {
        id: "prob-sec-5-3-11-sol-3",
        title: `解法4`,
        method: "standard",
        steps: [],
        explanation: `高妙解法四
：

当 m=1，由(1)知数列 $a_{1}, a_{2}, \\cdots, a_{4m+2}$ 是 $(i, j)$ — 可分数列的个数为 3.

当 m=2 时，数列 $a_{1}, a_{2}, \\cdots, a_{4m+2}$ 是 $(i, j)$ — 可分数列的个数比 m=1 时的可分组增加了 $(1, 10), (2, 9), (5, 10), (9, 10)$ 4 组.

当 m=3 时，数列 $a_{1}, a_{2}, \\cdots, a_{4m+2}$ 是 $(i, j)$ — 可分数列的个数比 m=2 时的可分组增加了 $(1, 14), (2, 13), (5, 14), (6, 13), (9, 14), (13, 14)$ 6 组.

归纳分析得,m 增加 1,数列 $a_{1},a_{2},\\cdots,a_{4m+2}$ 是 $(i,j)$ — 可分数列的个数至少增加 2m 个可分组,所以数列 $a_{1},a_{2},\\cdots,a_{4m+2}$ 是 $(i,j)$ — 可分数列的个数至少为

$$
\\begin{array}{l} 3 + 4 + 6 + \\dots + 2 m = m ^ {2} + m + 1 \\\\ P _ {m} \\geqslant \\frac {m ^ {2} + m + 1}{C _ {4 m + 2} ^ {2}} = \\frac {m ^ {2} + m + 1}{8 m ^ {2} + 6 m + 1} > \\frac {m ^ {2} + m + 1}{8 m ^ {2} + 8 m + 8} = \\frac {1}{8}. \\\\ \\end{array}
$$`,
      },
    ],
    tags: [],
    source: `2024 年高考新课标全国Ⅰ卷第 19 题`,
  },
  {
    id: "prob-sec-5-3-12",
    topicId: "topic-sec-5-3",
    title: `2024 新课标Ⅱ：双曲线迭代点列与极限`,
    content: `(2024 年高考新课标全国Ⅱ卷第 19 题)
已知双曲线 $C: x^{2} - y^{2} = m (m > 0)$ ，点 $P_{1}(5,4)$ 在 C 上，k 为常数，0 < k < 1。如图 5-3-16 所示，按照如下方式依次构造点 $P_{n} (n = 2, 3, \\cdots)$ ，过 $P_{n-1}$ 作斜率为 k 的直线与 C 的左支交于点 $Q_{n-1}$ ，令 $P_{n}$ 为 $Q_{n-1}$ 关于 y 轴的对称点，记 $P_{n}$ 的坐标为 $(x_{n}, y_{n})$ 。

![](images/55294752903d993104cd8930615a368fa6bece876ef4b8da26ecee19c6c25500.jpg)

图5-3-16

(1) 若 $k=\\frac{1}{2}$ ，求 $x_{2}, y_{2}$ ;
(2) 证明: 数列 $\\{x_{n}-y_{n}\\}$ 是公比为 $\\frac{1+k}{1-k}$ 的等比数列;
(3) 设 $S_{n}$ 为 $\\triangle P_{n}P_{n+1}P_{n+2}$ 的面积, 证明: 对任意的正整数 $n, S_{n}=S_{n+1}$ .

解析 (1) 根据已知有 $m = 5^{2} - 4^{2} = 9$ ，故 $C$ 的方程为 $x^{2} - y^{2} = 9$ .

当 $k = \\frac{1}{2}$ 时，过 $P_{1}(5,4)$ 且斜率为 $\\frac{1}{2}$ 的直线为 $y = \\frac{x + 3}{2}$ ，

与 $x^{2}-y^{2}=9$ 联立得到 $x^{2}-\\left(\\frac{x+3}{2}\\right)^{2}=9$ ，解得 x=-3 或 x=5，

所以该直线与 C 的不同于 $P_{1}$ 的交点为 $Q_{1}(-3,0)$ ，该点显然在 C 的左支上.

故 $P_{2}(3,0)$ ，从而 $x_{2}=3, y_{2}=0$ .

(2)高妙解法一:由于过 $P_{n}(x_{n},y_{n})$ 且斜率为 k 的直线为

$$
y = k (x - x _ {n}) + y _ {n},
$$

与 $x^{2}-y^{2}=9$ 联立，得到方程 $x^{2}-(k(x-x_{n})+y_{n})^{2}=9$ .

展开即得

$$
(1 - k ^ {2}) x ^ {2} - 2 k (y _ {n} - k x _ {n}) x - (y _ {n} - k x _ {n}) ^ {2} - 9 = 0,
$$

由于 $P_{n}(x_{n}, y_{n})$ 是直线 $y = k(x - x_{n}) + y_{n}$ 和 $x^{2} - y^{2} = 9$ 的公共点，

故方程必有一根 $x=x_{n}$ .

根据韦达定理, 另一根 $x=\\frac{2k(y_{n}-kx_{n})}{1-k^{2}}-x_{n}=\\frac{2ky_{n}-x_{n}-k^{2}x_{n}}{1-k^{2}}$ ,

相应的 $y = k(x - x_{n}) + y_{n} = \\frac{y_{n} + k^{2}y_{n} - 2kx_{n}}{1 - k^{2}}$ .

所以该直线与 C 的不同于 $P_{n}$ 的交点为 $Q_{n}\\left(\\frac{2ky_{n}-x_{n}-k^{2}x_{n}}{1-k^{2}},\\frac{y_{n}+k^{2}y_{n}-2kx_{n}}{1-k^{2}}\\right)$ ,

而注意到 $Q_{n}$ 的横坐标亦可通过韦达定理表示为 $\\frac{-(y_n - kx_n)^2 - 9}{(1 - k^2)x_n}$ ,

故 $Q_{n}$ 一定在 $C$ 的左支上.

所以 $P_{n + 1}\\Big(\\frac{x_n + k^2x_n - 2ky_n}{1 - k^2},\\frac{y_n + k^2y_n - 2kx_n}{1 - k^2}\\Big)$

这就得到 $x_{n + 1} = \\frac{x_n + k^2x_n - 2ky_n}{1 - k^2},y_{n + 1} = \\frac{y_n + k^2y_n - 2kx_n}{1 - k^2}.$

所以 $x_{n + 1} - y_{n + 1} = \\frac{x_n + k^2x_n - 2ky_n}{1 - k^2} -\\frac{y_n + k^2y_n - 2kx_n}{1 - k^2}$

$$
= \\frac {x _ {n} + k ^ {2} x _ {n} + 2 k x _ {n}}{1 - k ^ {2}} - \\frac {y _ {n} + k ^ {2} y _ {n} + 2 k y _ {n}}{1 - k ^ {2}}
$$

$$
= \\frac {1 + k ^ {2} + 2 k}{1 - k ^ {2}} (x _ {n} - y _ {n}) = \\frac {1 + k}{1 - k} (x _ {n} - y _ {n}).
$$

再由 $x_{1}^{2} - y_{1}^{2} = 9$ ，就知道 $x_{1} - y_{1}\\neq 0$ ，所以数列 $\\{x_n - y_n\\}$ 是公比为 $\\frac{1 + k}{1 - k}$ 的等比数列.`,
    preview: `已知双曲线 C: x^2 - y^2 = m (m > 0) ，点 P_1(5,4) 在 C 上，k 为常数，0 < k < 1。如图 5-3-16 所示，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-5-3-12-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `因为 $P_{n}(x_{n}, y_{n})$ 关于 y 轴的对称点是 $Q_{n-1}(-x_{n}, y_{n})$ ,

设 $P_{n - 1}(x_{n - 1},y_{n - 1})$

而 $P_{n - 1},Q_{n - 1}$ 都在同一条斜率为 $k$ 的直线上，所以 $x_{n - 1}\\neq -x_n$

所以 $\\frac{y_{n}-y_{n-1}}{-x_{n}-x_{n-1}}=k$ ，因为 $P_{n-1},Q_{n-1}$ 都在双曲线上，所以 $\\left\\{\\begin{aligned}x_{n}^{2}-y_{n}^{2}&=9,\\\\ x_{n-1}^{2}-y_{n-1}^{2}&=9,\\end{aligned}\\right.$

两式相减得 $(x_{n} - x_{n - 1})(x_{n} + x_{n - 1}) = (y_{n} - y_{n - 1})(y_{n} + y_{n - 1}).$

而 $y_{n} - y_{n - 1} = -k(x_{n} + x_{n - 1}),$

$$
x _ {n} - x _ {n - 1} = - k (y _ {n} + y _ {n - 1}),
$$

以上两式相减得 $x_{n} - y_{n} - (x_{n - 1} - y_{n - 1}) = k(x_{n} - y_{n}) + k(x_{n - 1} - y_{n - 1})$

所以 $(1-k)(x_{n}-y_{n})=(1+k)(x_{n-1}-y_{n-1})$ ，所以 $\\frac{x_{n}-y_{n}}{x_{n-1}-y_{n-1}}=\\frac{1+k}{1-k}$

即数列 $\\{x_{n} - y_{n}\\}$ 是公比为 $\\frac{1 + k}{1 - k}$ 的等比数列.`,
      },
      {
        id: "prob-sec-5-3-12-sol-1",
        title: `解法2`,
        method: "standard",
        steps: [],
        explanation: `高妙解法三
: 因为 $P_{n}, Q_{n-1}$ 都在双曲线上, 对于 $P_{n+1}$ 而言, 这条过 $P_{n}$ 的直线方程为 $y - y_{n} = k(x - x_{n})$ .

它的解为 $Q_{n}(-x_{n+1},y_{n+1})$ ，也就是有 $\\left\\{\\begin{aligned}y_{n+1}-y_{n}&=k(-x_{n+1}-x_{n}),\\\\ x_{n}^{2}-y_{n}^{2}&=9,\\\\ x_{n+1}^{2}-y_{n+1}^{2}&=9,\\end{aligned}\\right.$ ①

②

③

②-③得 $(y_{n+1}+y_{n})(y_{n+1}-y_{n})=(x_{n+1}-x_{n})(x_{n+1}+x_{n})$ ,

$$
\\frac {x _ {n + 1} - x _ {n}}{y _ {n + 1} + y _ {n}} = \\frac {y _ {n + 1} - y _ {n}}{x _ {n + 1} + x _ {n}} = - k,
$$

由合比定理知 $\\frac{x_{n+1}-x_{n}+y_{n+1}-y_{n}}{y_{n+1}+y_{n}+x_{n+1}+x_{n}}=\\frac{x_{n+1}-x_{n}-y_{n+1}+y_{n}}{y_{n+1}+y_{n}-x_{n+1}-x_{n}}=-k,$

所以 $\\frac{x_n - y_n}{x_{n-1} - y_{n-1}} = \\frac{1 + k}{1 - k},$

又因为 $x_{1}^{2}-y_{1}^{2}=9$ ，知道 $x_{1}-y_{1}\\neq0$ ，

所以数列 $\\{x_{n} - y_{n}\\}$ 是公比为 $\\frac{1 + k}{1 - k}$ 的等比数列.

(3)`,
      },
      {
        id: "prob-sec-5-3-12-sol-2",
        title: `解法3`,
        method: "standard",
        steps: [],
        explanation: `高妙解法一
: 因为 $x_{n+1}=\\frac{x_{n}+k^{2}x_{n}-2ky_{n}}{1-k^{2}}, y_{n+1}=\\frac{y_{n}+k^{2}y_{n}-2kx_{n}}{1-k^{2}}$ ,

所以 $x_{n + 1} + y_{n + 1} = \\frac{x_n + k^2x_n - 2ky_n}{1 - k^2} +\\frac{y_n + k^2y_n - 2kx_n}{1 - k^2}$

$$
= \\frac {1 + k ^ {2} - 2 k}{1 - k ^ {2}} (x _ {n} + y _ {n})
$$

$$
= \\frac {1 - k}{1 + k} (x _ {n} + y _ {n}).
$$

再由 $x_{1}^{2} - y_{1}^{2} = 9$ ，知道 $x_{1} + y_{1}\\neq 0$ ，所以数列 $\\{x_n + y_n\\}$ 是公比为 $\\frac{1 - k}{1 + k}$ 的等比数列.所以对任意的正整数 $m$ ，都有

$$
x _ {n} y _ {n + m} - y _ {n} x _ {n + m}
$$

$$
= \\frac {1}{2} \\left[ (x _ {n} x _ {n + m} - y _ {n} y _ {n + m}) + (x _ {n} y _ {n + m} - y _ {n} x _ {n + m}) \\right]
$$

$$
- \\frac {1}{2} \\big [ (x _ {n} x _ {n + m} - y _ {n} y _ {n + m}) - (x _ {n} y _ {n + m} - y _ {n} x _ {n + m}) \\big ]
$$

$$
= \\frac {1}{2} (x _ {n} - y _ {n}) (x _ {n + m} + y _ {n + m}) - \\frac {1}{2} (x _ {n} + y _ {n}) (x _ {n + m} - y _ {n + m})
$$

$$
= \\frac {1}{2} \\left(\\frac {1 - k}{1 + k}\\right) ^ {m} (x _ {n} - y _ {n}) (x _ {n} + y _ {n}) - \\frac {1}{2} \\left(\\frac {1 + k}{1 - k}\\right) ^ {m} (x _ {n} + y _ {n}) (x _ {n} - y _ {n})
$$

$$
= \\frac {1}{2} \\left[ \\left(\\frac {1 - k}{1 + k}\\right) ^ {m} - \\left(\\frac {1 + k}{1 - k}\\right) ^ {m} \\right] (x _ {n} ^ {2} - y _ {n} ^ {2})
$$

$$
= \\frac {9}{2} \\left[ \\left(\\frac {1 - k}{1 + k}\\right) ^ {m} - \\left(\\frac {1 + k}{1 - k}\\right) ^ {m} \\right].
$$

而又有 $\\overrightarrow{P_{n + 1}P_n} = (-(x_{n + 1} - x_n), -(y_{n + 1} - y_n))$

$$
\\overrightarrow {P _ {n + 1} P _ {n + 2}} = (x _ {n + 2} - x _ {n + 1}, y _ {n + 2} - y _ {n + 1}),
$$

因此,利用前面已经证明的结论即得

$$
\\begin{array}{l} S _ {n} = S _ {\\triangle P _ {n} P _ {n + 1} P _ {n + 2}} = \\frac {1}{2} \\left| - (x _ {n + 1} - x _ {n}) (y _ {n + 2} - y _ {n + 1}) + (y _ {n + 1} - y _ {n}) (x _ {n + 2} - x _ {n + 1}) \\right| \\\\ = \\frac {1}{2} \\left| (x _ {n + 1} - x _ {n}) (y _ {n + 2} - y _ {n + 1}) - (y _ {n + 1} - y _ {n}) (x _ {n + 2} - x _ {n + 1}) \\right| \\\\ = \\frac {1}{2} \\left| (x _ {n + 1} y _ {n + 2} - y _ {n + 1} x _ {n + 2}) + (x _ {n} y _ {n + 1} - y _ {n} x _ {n + 1}) - (x _ {n} y _ {n + 2} - y _ {n} x _ {n + 2}) \\right| \\\\ = \\frac {1}{2} \\left| \\frac {9}{2} \\left(\\frac {1 - k}{1 + k} - \\frac {1 + k}{1 - k}\\right) + \\frac {9}{2} \\left(\\frac {1 - k}{1 + k} - \\frac {1 + k}{1 - k}\\right) - \\frac {9}{2} \\left[ \\left(\\frac {1 - k}{1 + k}\\right) ^ {2} - \\left(\\frac {1 + k}{1 - k}\\right) ^ {2} \\right] \\right|. \\\\ \\end{array}
$$

所以 $S_{n}$ 的取值是与 n 无关的定值, 所以 $S_{n}=S_{n+1}$ .`,
      },
      {
        id: "prob-sec-5-3-12-sol-3",
        title: `解法4`,
        method: "standard",
        steps: [],
        explanation: `高妙解法二
:由高妙解法一
有

$$
x _ {n} y _ {n + m} - y _ {n} x _ {n + m} = \\frac {9}{2} \\Big [ \\Big (\\frac {1 - k}{1 + k} \\Big) ^ {m} - \\Big (\\frac {1 + k}{1 - k} \\Big) ^ {m} \\Big ].
$$

可得 $x_{n + 2}y_{n + 3} - y_{n + 2}x_{n + 3} = \\frac{9}{2}\\left(\\frac{1 - k}{1 + k} -\\frac{1 + k}{1 - k}\\right) = x_ny_{n + 1} - y_nx_{n + 1},$

以及 $x_{n + 1}y_{n + 3} - y_{n + 1}x_{n + 3} = \\frac{9}{2}\\left[\\left(\\frac{1 - k}{1 + k}\\right)^2 -\\left(\\frac{1 + k}{1 - k}\\right)^2\\right] = x_ny_{n + 2} - y_nx_{n + 2}.$

两式相减,即得

$$
\\begin{array}{l} (x _ {n + 2} y _ {n + 3} - y _ {n + 2} x _ {n + 3}) - (x _ {n + 1} y _ {n + 3} - y _ {n + 1} x _ {n + 3}) \\\\ = (x _ {n} y _ {n + 1} - y _ {n} x _ {n + 1}) - (x _ {n} y _ {n + 2} - y _ {n} x _ {n + 2}). \\\\ \\end{array}
$$

移项得到

$$
\\begin{array}{l} x _ {n + 2} y _ {n + 3} - y _ {n} x _ {n + 2} - x _ {n + 1} y _ {n + 3} + y _ {n} x _ {n + 1} \\\\ = y _ {n + 2} x _ {n + 3} - x _ {n} y _ {n + 2} - y _ {n + 1} x _ {n + 3} + x _ {n} y _ {n + 1}. \\\\ \\end{array}
$$

故 $(y_{n + 3} - y_n)(x_{n + 2} - x_{n + 1}) = (y_{n + 2} - y_{n + 1})(x_{n + 3} - x_n)$

而 $\\overrightarrow{P_nP_{n + 3}} = (x_{n + 3} - x_n,y_{n + 3} - y_n),\\overrightarrow{P_{n + 1}P_{n + 2}} = (x_{n + 2} - x_{n + 1},y_{n + 2} - y_{n + 1}).$

所以 $\\overrightarrow{P_nP_{n + 3}}$ 和 $\\overrightarrow{P_{n + 1}P_{n + 2}}$ 平行，这就得到 $S_{\\triangle P_nP_{n + 1}P_{n + 2}} = S_{\\triangle P_{n + 1}P_{n + 2}P_{n + 3}}$ ，即 $S_{n} = S_{n + 1}$`,
      },
      {
        id: "prob-sec-5-3-12-sol-5",
        title: `解法6`,
        method: "standard",
        steps: [],
        explanation: `高妙解法三
：要证 $S_{n} = S_{n + 1}$ ，只需证 $P_{n + 1}P_{n + 2} / / P_nP_{n + 3}$ ，即证 $k_{P_{n + 1}P_{n + 2}} = k_{P_nP_{n + 3}}$ 令 $t = \\frac{1 + k}{1 - k},0 <   k <   1$ ，所以 $t > 1$

所以 $x_{n}-y_{n}=(x_{1}-y_{1})\\left(\\frac{1+k}{1-k}\\right)^{n-1}=t^{n-1}$ ,

而 $x_{n}^{2} - y_{n}^{2} = 9$ ，所以 $x_{n} + y_{n} = 9t^{1 - n}$ ，所以 $y_{n} = \\frac{1}{2} (-t^{n - 1} + 9t^{1 - n})$

$$
\\begin{array}{l} = 1 + \\frac {2 t ^ {n} (t - 1)}{(- t ^ {n + 1} + 9 t ^ {- 1 - n}) - (- t ^ {n} + 9 t ^ {- n})} \\\\ = 1 + \\frac {2 t ^ {n} (t - 1)}{(- 9 t ^ {- 1 - n} - t ^ {n}) (t - 1)} = 1 - \\frac {2 t ^ {n}}{9 t ^ {- 1 - n} + t ^ {n}}, \\\\ \\end{array}
$$

所以 $\\frac{1}{k_{P_{n + 1}P_{n + 2}}} = \\frac{x_{n + 2} - x_{n + 1}}{y_{n + 2} - y_{n + 1}} = \\frac{y_{n + 2} + t^{n + 1} - y_{n + 1} - t^n}{y_{n + 2} - y_{n + 1}}$

$$
\\begin{array}{l} \\frac {1}{k _ {P _ {n} P _ {n + 3}}} = \\frac {y _ {n + 3} + t ^ {n + 2} - y _ {n} - t ^ {n - 1}}{y _ {n + 3} - y _ {n}} = 1 + \\frac {2 t ^ {n - 1} (t ^ {3} - 1)}{(- t ^ {n + 2} + 9 t ^ {- 2 - n}) - (- t ^ {n - 1} + 9 t ^ {1 - n})} \\\\ = 1 + \\frac {2 t ^ {n - 1} (t ^ {3} - 1)}{(- 9 t ^ {- 2 - n} - t ^ {n - 1}) (t ^ {3} - 1)} = 1 - \\frac {2 t ^ {n - 1}}{9 t ^ {- 2 - n} + t ^ {n - 1}} = 1 - \\frac {2 t ^ {n}}{9 t ^ {- 1 - n} + t ^ {n}}, \\\\ \\end{array}
$$

所以 $k_{P_{n + 1}P_{n + 2}} = k_{P_nP_{n + 3}}$ ，所以 $P_{n + 1}P_{n + 2} / / P_nP_{n + 3}$ ，所以 $S_{n} = S_{n + 1}$`,
      },
      {
        id: "prob-sec-5-3-12-sol-6",
        title: `解法7`,
        method: "standard",
        steps: [],
        explanation: `高妙解法四
：令 $q = \\frac{1 + k}{1 - k}, a_{n} = x_{n} - y_{n}, b_{n} = x_{n} + y_{n}$ ，由(2)知 $a_{n} = a_{1}q^{n - 1}, b_{n} = b_{1}q^{n - 1}$ ，

所以 $\\left\\{ \\begin{array}{l}x_{n} = \\frac{a_{n} + b_{n}}{2} = \\frac{a_{1}q^{n - 1} + \\frac{b_{1}}{q^{n - 1}}}{2},\\\\ y_{n} = \\frac{b_{n} - a_{n}}{2} = \\frac{\\frac{b_{1}}{q^{n - 1}} - a_{1}q^{n - 1}}{2}, \\end{array} \\right.$

$$
l _ {P _ {n} P _ {n + 2}}: y - y _ {n} = \\left(\\frac {y _ {n + 2} - y _ {n}}{x _ {n + 2} - x _ {n}}\\right) (x - x _ {n}),
$$

整理得 $(y-y_{n})(x_{n+2}-x_{n})=(y_{n+2}-y_{n})(x-x_{n})$ ,

即 $(x_{n+2}-x_{n})y-y_{n}x_{n+2}=(y_{n+2}-y_{n})x-y_{n+2}x_{n}$

即 $(x_{n+2}-x_{n})y-y_{n}x_{n+2}-(y_{n+2}-y_{n})x+y_{n+2}x_{n}=0,$

所以 $h = \\frac{(y_{n + 2} - y_n)x_{n + 1} - (x_{n + 2} - x_n)y_{n + 1} + y_nx_{n + 2} - y_{n + 2}x_n}{\\sqrt{(y_{n + 2} - y_n)^2 + (x_{n + 2} - x_n)^2}},$

$$
\\begin{array}{l} = \\frac {1}{8} (b _ {n + 2} - a _ {n + 2} - b _ {n} + a _ {n}) (b _ {n + 1} - a _ {n + 1}) - \\frac {1}{8} (b _ {n + 2} + a _ {n + 2} - b _ {n} - a _ {n}) (b _ {n + 1} + a _ {n + 1}) \\\\ + \\frac {1}{8} (b _ {n} - a _ {n}) (b _ {n + 2} + a _ {n + 2}) - \\frac {1}{8} (b _ {n} + a _ {n}) (b _ {n + 2} - a _ {n + 2}) \\\\ = \\frac {a _ {1} b _ {1}}{4} \\left(q + q ^ {2} + \\frac {1}{q} - q - \\frac {1}{q ^ {2}} - \\frac {1}{q}\\right) \\\\ = \\frac {a _ {1} b _ {1}}{4} \\left(q ^ {2} - \\frac {1}{q ^ {2}}\\right). \\\\ \\end{array}
$$

所以 $S_{n} = \\frac{1}{2}\\cdot h\\cdot P_{n}P_{n + 2} = \\frac{1}{2} [(y_{n + 2} - y_n)x_{n + 1} - (x_{n + 2} - x_n)y_{n + 1} + y_nx_{n + 2} - y_{n + 2}x_n]$

因为 $a_1, b_1, q$ 都为定值，所以 $S_n$ 是个跟 $n$ 无关的定值，即 $S_n = S_{n+1}$ .`,
      },
    ],
    tags: [],
    source: `2024 年高考新课标全国Ⅱ卷第 19 题`,
  },
]
