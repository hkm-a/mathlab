import type { Problem } from "./types"

export const problems_chexam: Problem[] = [
  {
    id: "prob-sec-4-1-1",
    topicId: "topic-sec-4-1",
    title: `设 f(x)=ax^2+bx+c 且 a≠0`,
    content: `设 $f(x)=ax^{2}+bx+c(a\\neq0)$ .
(1) 若 $\\left|f(0)\\right|\\leqslant1,\\left|f(1)\\right|\\leqslant1,\\left|f(-1)\\right|\\leqslant1$ ,试证明：

对任意 $|x|\\leqslant 1$ ，有 $|f(x)|\\leqslant \\frac{5}{4}$

(2) 若 $\\left|x\\right|\\leqslant1$ 时，有 $\\left|f(x)\\right|\\leqslant1$ ，求证：当 $\\left|x\\right|\\leqslant1$ 时， $\\left|2ax+b\\right|\\leqslant4$ .`,
    preview: `设 f(x)=ax^2+bx+c 且 a≠0，已知 f(-1)、f(0)、f(1) 的界，证明二次函数和导数的区间估计。`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-1-1-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)由 $f(-1)=a-b+c, f(1)=a+b+c, f(0)=c,$

可解得 $a = \\frac{1}{2} (f(1) + f(-1) - 2f(0)), b = \\frac{1}{2} (f(1) - f(-1)), c = f(0)$ ,

因此， $f(x)=f(1)\\left(\\frac{x^{2}+x}{2}\\right)+f(-1)\\left(\\frac{x^{2}-x}{2}\\right)+f(0)(1-x^{2})$ .

①当 $-1\\leqslant x\\leqslant0$ 时，

$$
\\begin{array}{l} \\mid f (x) \\mid \\leqslant \\mid f (1) \\mid \\cdot \\left| \\frac {x ^ {2} + x}{2} \\right| + \\mid f (- 1) \\mid \\cdot \\left| \\frac {x ^ {2} - x}{2} \\right| + \\mid f (0) \\mid \\cdot \\mid 1 - x ^ {2} \\mid \\\\ \\leqslant \\left| \\frac {x ^ {2} + x}{2} \\right| + \\left| \\frac {x ^ {2} - x}{2} \\right| + \\left| 1 - x ^ {2} \\right| \\\\ = - \\left(\\frac {x ^ {2} + x}{2}\\right) + \\left(\\frac {x ^ {2} - x}{2}\\right) + (1 - x ^ {2}) \\\\ = - x ^ {2} - x + 1 = - \\left(x + \\frac {1}{2}\\right) ^ {2} + \\frac {5}{4} \\\\ \\leqslant \\frac {5}{4}. \\\\ \\end{array}
$$

②当 $0 \\leqslant x \\leqslant 1$ 时，

$$
\\begin{array}{l} \\mid f (x) \\mid \\leqslant \\mid f (1) \\mid \\cdot \\left| \\frac {x ^ {2} + x}{2} \\right| + \\mid f (- 1) \\mid \\cdot \\left| \\frac {x ^ {2} - x}{2} \\right| + \\mid f (0) \\mid \\cdot \\left| 1 - x ^ {2} \\right| \\\\ \\leqslant \\left| \\frac {x ^ {2} + x}{2} \\right| + \\left| \\frac {x ^ {2} - x}{2} \\right| + \\left| 1 - x ^ {2} \\right| = \\left(\\frac {x ^ {2} + x}{2}\\right) + \\left(\\frac {- x ^ {2} + x}{2}\\right) + \\left(1 - x ^ {2}\\right) \\\\ = - x ^ {2} + x + 1 = - \\left(x - \\frac {1}{2}\\right) ^ {2} + \\frac {5}{4} \\leqslant \\frac {5}{4}. \\\\ \\end{array}
$$

$$
\\begin{array}{l} = \\left| \\left(x + \\frac {1}{2}\\right) f (1) + \\left(x - \\frac {1}{2}\\right) f (- 1) - 2 x f (0) \\right| \\\\ \\leqslant \\left| x + \\frac {1}{2} \\right| + \\left| x - \\frac {1}{2} \\right| + 2 \\leqslant 4. \\\\ \\end{array}
$$

(2)由(1)知 $|2ax + b| = \\left|(f(1) + f(-1) - 2f(0))x + \\frac{1}{2} (f(1) - f(-1))\\right|$

综上,问题获证.

评注 本题所给条件并不足以确定参数 $a, b, c$ 的值，注意到所要求的结论不是 $|f(x)|$ 的确定值，而是与条件相对应的“取值范围”，因此，可以把 $|f(0)| \\leqslant 1, |f(1)| \\leqslant 1, |f(-1)| \\leqslant 1$ 当成三个独立条件，用 $f(-1), f(0)$ 和 $f(1)$ 来表示 $a, b, c$ ，再利用绝对值不等式放缩达到目标。(2)上所述不等式又称为马尔可夫不等式，更一般地，设有 $n$ 次多项式函数 $f(x)$ 满足 $|x| \\leqslant 1, |f(x)| \\leqslant M$ ，则当 $|x| \\leqslant 1$ 时，有 $|f'(x)| \\leqslant n^2 M$ 成立.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-1-2",
    topicId: "topic-sec-4-1",
    title: `已知 f(x)=|x^2-1|+x^2+kx`,
    content: `已知 $f(x)=|x^{2}-1|+x^{2}+kx$ .
(1) 若 k=2，求方程 $f(x)=0$ 的解；
(2)若关于 $x$ 的方程 $f(x) = 0$ 在 $(0,2)$ 上有两个解 $x_{1}, x_{2}$ , 求 $k$ 的取值范围, 并证明 $\\frac{1}{x_1} + \\frac{1}{x_2} < 4$ .`,
    preview: `已知 f(x)=|x^2-1|+x^2+kx . (1) 若 k=2，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-1-2-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1) 当 k=2 时, $f(x)=|x^{2}-1|+x^{2}+2x=0$ .

①当 $x^{2}-1 \\geqslant 0$ ，即 $x \\leqslant -1$ 或 $x \\geqslant 1$ 时，

方程可化为 $2x^{2}+2x-1=0$ ，

解得 $x = \\frac{-1\\pm\\sqrt{3}}{2}$ ，而 $0 <   \\frac{-1 + \\sqrt{3}}{2} <  1$ （舍去）.

②当 $x^{2}-1<0$ , 即 -1<x<1 时，

方程可化为 $2x+1=0$ ，解得 $x=-\\frac{1}{2}$ .

由①②得，当 $k = 2$ 时，方程 $f(x) = 0$ 的解为 $x = \\frac{-1 - \\sqrt{3}}{2}$ 或 $x = -\\frac{1}{2}$ .

(2)`,
      },
      {
        id: "prob-sec-4-1-2-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `方程 $f(x)=|x^{2}-1|+x^{2}+kx=0$ 在 $(0,2)$ 上有两个解 $x_{1}, x_{2}$

$\\Leftrightarrow -k = g(x) = \\left|x - \\frac{1}{x}\\right| + x$ 在(0,2)上有两个解 $x_{1},x_{2}$

$\\Leftrightarrow -k = g(x) = \\left\\{ \\begin{array}{l}\\frac{1}{x}, 0 < x \\leqslant 1, \\\\ 2x - \\frac{1}{x}, 1 < x < 2 \\end{array} \\right.$ 在(0,2)上有两个解 $x_{1}, x_{2}$ .

如图 4-1-1 所示作出函数 $y=g(x)$ 的图像，由图像可知：当且仅当 $1<-k<\\frac{7}{2}$ ，即 $-\\frac{7}{2}<k<-1$ 时， $-k=g(x)$ 在 $(0,2)$ 上有两个解 $x_{1}, x_{2}$ ，故当 $-\\frac{7}{2}<k<-1$ 时，方程 $f(x)=0$ 在 $(0,2)$ 上有两个解 $x_{1}, x_{2}$ ，且 $\\frac{1}{x_{1}}=-k, 2x_{2}-\\frac{1}{x_{2}}=-k$ ，所以 $\\frac{1}{x_{1}}+\\frac{1}{x_{2}}=2x_{2}<4$ .

评注 通过数形结合,把方程有解的问题转化为两函数图像有公共点的问题,是解决方程根的分布情况的常用方法之一,但在操作过程中要注意对方程的再加工,使函数图像尽可能简单一些,如本题的动态函数是一条上下平移的直线,能使方程解的情况一目了然.

![](images/7524cb1bae6fd063fc0d55de78c53144a25fee244904ae739eee04637957789b.jpg)
图4-1-1`,
      },
      {
        id: "prob-sec-4-1-2-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `$f(x) = \\begin{cases} kx + 1, & 0 < x \\leqslant 1, \\\\ 2x^2 + kx - 1, & 1 < x < 2, \\end{cases}$ 结合图像可知 $\\left\\{ \\begin{array}{l} f(1) < 0, \\\\ f(2) > 0, \\end{array} \\right.$ 解得 $-\\frac{7}{2} < k < -1$ . $\\frac{1}{x_1} + \\frac{1}{x_2} = -k + \\frac{k + \\sqrt{k^2 + 8}}{2} = \\frac{\\sqrt{k^2 + 8} - k}{2}$ , 由 $k$ 的范围结合单调性可得所证.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-1-3",
    topicId: "topic-sec-4-1",
    title: `已知二次函数 f(x) = ax^2 + bx + c (a, b, c ∈ R, a ≠ 0)，满足 f(-1)`,
    content: `已知二次函数 $f(x) = ax^{2} + bx + c (a, b, c \\in \\mathbb{R}, a \\neq 0)$ ，满足 $f(-1) = 0$ ，对于任意的 $x \\in \\mathbb{R}$ ，都有 $f(x) - x \\geqslant 0$ ，并且当 $x \\in (0, 2)$ 时有 $f(x) \\leqslant \\left(\\frac{x + 1}{2}\\right)^{2}$ .
(1) 求 $f(x)$ 的表达式；
(2) 当 $x \\in [-1,1]$ 时， $g(x) = f(x) - mx (x \\in \\mathbf{R})$ 是单调的，求证： $m \\leqslant 0$ 或 $m \\geqslant 1$ .`,
    preview: `已知二次函数 ，满足 f(-1) = 0 ，对于任意的 x R ，都有 f(x) - x ≥ 0 ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-1-3-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)由 $f(1) = 1, f(-1) = 0$ 解得 $b = \\frac{1}{2}$ , 对于任意的 $x \\in \\mathbb{R}$ , 都有 $f(x) - x \\geqslant 0$ , 所以 $a > 0, \\Delta = (b - 1)^2 - 4ac \\leqslant 0$ ,

所以 $ac \\geqslant \\frac{1}{16}$ .

又 $\\frac{1}{2} = a + c\\geqslant 2\\sqrt{ac}$ ，得 $ac\\leqslant \\frac{1}{16}$

故 $ac=\\frac{1}{16}$ 时， $a=\\frac{1}{4}, c=\\frac{1}{4}$ ，所以 $f(x)=\\frac{1}{4}x^{2}+\\frac{1}{2}x+\\frac{1}{4}$ .

(2) $g(x) = \\frac{1}{4} x^2 +\\left(\\frac{1}{2} -m\\right)x + \\frac{1}{4} = \\frac{1}{4}\\left[x + 2\\left(\\frac{1}{2} -m\\right)\\right]^2 +\\frac{1}{4} -\\left(\\frac{1}{2} -m\\right)^2.$

因为 $x \\in [-1,1]$ 时， $g(x)$ 为单调函数，

所以 $\\left|2\\left(\\frac{1}{2}-m\\right)\\right|\\geqslant1$ , 解得 $m\\leqslant0$ 或 $m\\geqslant1$

变式 已知二次函数 $f(x)=ax^{2}+bx+c(a,b,c\\in\\mathbf{R},a\\neq0)$ ，满足：

(1) 当 $x \\in R$ 时, $f(x - 4) = f(2 - x)$ , 且 $f(x) \\geqslant x$ ;
(2) 当 $x \\in (0,2)$ 时， $f(x) \\leqslant \\left(\\frac{x+1}{2}\\right)^{2}$ ;
(3) $f(x)$ 在 $R$ 上的最小值为0. 求最大的 $m(m > 1)$ , 使得存在 $t \\in \\mathbb{R}$ , 只要 $x \\in [1, m]$ , 就有 $f(x + t) \\leqslant x$ .

讲解 同例3可得 $f(x) = \\frac{1}{4} x^2 + \\frac{1}{2} x + \\frac{1}{4}$ ，假设存在 $t \\in \\mathbb{R}$ ，只要 $x \\in [1, m]$ ，就有 $f(x + t) \\leqslant x$ ，取 $x = 1$ ，有 $f(t + 1) \\leqslant 1$ ，即 $\\frac{1}{4}(t + 1)^2 + \\frac{1}{2}(t + 1) + \\frac{1}{4} \\leqslant 1$ 得 $-4 \\leqslant t \\leqslant 0$ .

对固定的 $t \\in [-4, 0]$ , 取 $x = m$ , 有

$$
f (t + m) \\leqslant m \\Rightarrow \\frac {1}{4} (t + m) ^ {2} + \\frac {1}{2} (t + m) + \\frac {1}{4} \\leqslant m,
$$

化简得 $m^2 - 2(1 - t)m + (t^2 + 2t + 1) \\leqslant 0 \\Rightarrow 1 - t - \\sqrt{-4t} \\leqslant m \\leqslant 1 - t + \\sqrt{-4t}$ ,

$$
m \\leqslant 1 - t + \\sqrt {- 4 t} \\leqslant 1 - (- 4) + \\sqrt {- 4 (- 4)} = 9.
$$

当 t = -4 时，对任意的 $x \\in [1, 9]$ ，

恒有 $f(x - 4) - x = \\frac{1}{4} (x^{2} - 10x + 9) = \\frac{1}{4} (x - 1)(x - 9)\\leqslant 0$ ，故 $m$ 的最大值为9.

评注 二次函数 $f(x) = ax^{2} + bx + c (a \\neq 0)$ 的图像为抛物线，具有许多优美的性质，如对称性、单调性、凹凸性等. 结合这些图像特征解决有关二次函数的问题，可以化难为易，形象直观.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-1-4",
    topicId: "topic-sec-4-1",
    title: `已知 f(x)=ax^2+bx+c`,
    content: `已知 $f(x)=ax^{2}+bx+c$ ，其中 $a\\in Z^{+}, b, c\\in Z$ .
(1) 当 $b > 2a$ 时，在 $[-1, 1]$ 上是否存在 $x$ ，使得 $|f(x)| > b$ 成立？

(2) 当方程 $f(x)-x=0$ 的根在 $(0,1)$ 上时，试求 a 的最小值.`,
    preview: `已知 f(x)=ax^2+bx+c ，其中 a Z^+, b, c Z . (1) 当 b > 2a 时，在 [-1, 1] 上是否存在 x ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-1-4-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)由 $b > 2a, a \\in \\mathbf{Z}^{+}$ , 得 $-\\frac{b}{2a} < -1$ ,

则 $f(x)$ 在 $[-1,1]$ 上递增且 b>0，

因此， $f(x)\\in(a-b+c,a+b+c)$ .

①当 $a+c>0$ 时， $a+b+c>b>0$ ，此时有 $\\left|f(1)\\right|>b$ ，

即存在 x=1，使得 $\\left|f(x)\\right|>b$ 成立.

②当 $a+c<0$ 时， $a-b+c<-b<0$ ，此时有 $\\left|f(-1)\\right|>b$ ，

即存在 x = -1，使得 $\\left|f(x)\\right| > b$ 成立.

③当 $a+c=0$ 时， $f(x)\\in(-b,b)$ ，不存在 x 使得 $\\left|f(x)\\right|>b$ 成立.

(2) 设 $g(x)=f(x)-x=0$ 的两根为 $x_{1}, x_{2}$ ，则 $g(x)=a(x-x_{1})(x-x_{2})$ ,

由于 $g(0)g(1) = a^{2}x_{1}x_{2}(1 - x_{1})(1 - x_{2})\\leqslant a^{2}\\left(\\frac{x_{1} + 1 - x_{1}}{2}\\right)^{2}\\left(\\frac{x_{2} + 1 - x_{2}}{2}\\right)^{2} = \\frac{a^{2}}{16},$

其中当 $x_{1}=x_{2}=\\frac{1}{2}$ 时上述等号成立，所以 $g(0)g(1)\\leqslant\\frac{a^{2}}{16}$ .

由于方程 $f(x)-x=0$ 的根在 $(0,1)$ 上，所以 $g(0)>0, g(1)>0$ ，

又已知 a, b, c 为整数，则 $g(0)=c \\geqslant 1$ , $g(1)=a+b-1+c \\geqslant 1$ ,

则 $\\frac{a^{2}}{16}\\geqslant g(0)g(1)\\geqslant1$ ，即 $a^{2}\\geqslant16(a\\in\\mathbf{Z}^{+})$ ，则 $a\\geqslant4$ 。经检验，a的最小值为4。

评注 第(1)小题在得到 $f(x)\\in(a-b+c,a+b+c)$ 时，针对 $a+c$ 进行分类讨论，从而使原问题明确化；第(2)小题利用二次函数与二次方程的关系，巧妙地设“两点式” $g(x)=a(x-x_{1})(x-x_{2})$ ，并且对 $g(0)g(1)=a^{2}x_{1}x_{2}(1-x_{1})(1-x_{2})$ 进行合理搭配后，运用均值不等式，将“四元”问题转化为“二元”问题，从而顺利突破难点.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-1-5",
    topicId: "topic-sec-4-1",
    title: `已知函数 f(x) = x^2 + ax + b (a`,
    content: `已知函数 $f(x) = x^{2} + ax + b (a, b \\in \\mathbb{R})$ ，记 $M(a, b)$ 是 $|f(x)|$ 在区间 $[-1, 1]$ 上的最大值.
(1)证明:当 $|a|\\geqslant2$ 时, $M(a,b)\\geqslant2$ ;
(2) 当 a、b 满足 $M(a,b) \\leqslant 2$ ，求 $|a| + |b|$ 的最大值.`,
    preview: `已知函数 f(x) = x^2 + ax + b (a, b R) ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-1-5-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `由 $f(x)=\\left(x+\\frac{a}{2}\\right)^{2}+b-\\frac{a^{2}}{4}$ ，得对称轴为直线 $x=-\\frac{a}{2}$ .

因为 $|a|\\geqslant 2$ ，得 $\\left| - \\frac{a}{2}\\right|\\geqslant 1,$

故 $f(x)$ 在 $[-1, 1]$ 上是单调函数，所以 $M(a, b) = \\max \\{|f(1)|, |f(-1)|\\}$ .

而 $|f(-1)| = |1 - a + b| = |1 + b - a| = |a - (1 + b)|$

$$
| f (1) | = | 1 + a + b | = | 1 + b + a | = | a + (1 + b) |,
$$

所以 $|f(-1)| + |f(1)| = |a - (1 + b)| + |a + (1 + b)| \\geqslant 2|a| \\geqslant 4,$

所以 $|f(-1)| + |f(1)| \\geqslant 4$ .

根据抽屉原理， $|f(-1)|$ 与 $|f(1)|$ 中至少有一个不小于 2，

所以 $M(a,b)=\\max\\{|f(1)|,|f(-1)|\\}\\geqslant2.$`,
      },
      {
        id: "prob-sec-4-1-5-sol-2",
        title: `解法二`,
        method: "geometric",
        steps: [],
        explanation: `由题意知 $M(a,b)\\geqslant|f(1)|=|(b+1)+a|$ ,

$$
M (a, b) \\geqslant | f (- 1) | = | (b + 1) - a |.
$$

结合绝对值的几何意义可知，当且仅当 $b + 1$ 在 $[-|a|, |a|]$ 时， $|f(1)| + |f(-1)|$ 有最小值 $2|a|$ ，即 $M(a, b) \\geqslant 2$ .`,
      },
      {
        id: "prob-sec-4-1-5-sol-3",
        title: `解法三`,
        method: "standard",
        steps: [],
        explanation: `$M(a,b)=\\max\\{|f(-1)|$ ,

$$
| f (1) | \\} = \\max \\{| 1 - a + b |, | 1 + a + b | \\}.
$$

设 $x=b+1$ ，则问题可化为 $M(a,b)=\\max\\{|x+a|,|x-a|\\}$ ,

这就变成了常见问题,如图 4-1-2 所示,

可直接证得 $M(a,b)\\geqslant|a|\\geqslant2.$

![](images/3e4fe2ab23594141468e57fbd1e05d2280065f903bdea3e3e7386aa8a5605c65.jpg)
图4-1-2`,
      },
      {
        id: "prob-sec-4-1-5-sol-4",
        title: `解法四`,
        method: "standard",
        steps: [],
        explanation: `由函数 $f(x)=\\left(x+\\frac{a}{2}\\right)^{2}+b-\\frac{a^{2}}{4}$ ，得对称轴为直线 $x=-\\frac{a}{2}$ .

因为 $|a|\\geqslant2$ ，故 $f(x)$ 在 $[-1,1]$ 上单调，所以

$$
M (a, b) = \\max \\{| f (- 1) |, | f (1) | \\}.
$$

当 $a \\geqslant 2$ 时，由 $f(1) - f(-1) = 2a \\geqslant 4$ ，得

$\\max \\{f(1), - f(-1)\\} \\geqslant \\frac{f(1) - f(-1)}{2} \\geqslant 2$ ，即 $M(a,b) \\geqslant 2$

当 $a \\leqslant -2$ 时，由 $f(-1) - f(1) = -2a \\geqslant 4$ ，得

$\\max \\{f(-1), - f(1)\\} \\geqslant \\frac{f(-1) - f(1)}{2} = -a \\geqslant 2$ ，即 $M(a, b) \\geqslant 2$ .

综上，当 $|a|\\geqslant2$ 时， $M(a,b)\\geqslant2$ .

(2)`,
      },
      {
        id: "prob-sec-4-1-5-sol-5",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `因为 $\\left\\{\\begin{aligned}f(-1)=1-a+b,\\\\ f(1)=1+a+b,\\end{aligned}\\right.$ 所以 $a=\\frac{f(1)-f(-1)}{2},b=\\frac{f(1)+f(-1)}{2}-1.$

所以 $|a| + |b| = \\left|\\frac{f(1) - f(-1)}{2}\\right| + \\left|\\frac{f(1) + f(-1)}{2} - 1\\right|$

$$
\\begin{array}{l} \\leqslant \\frac {1}{2} [ | f (1) - f (- 1) | + | f (1) + f (- 1) | ] + 1 \\\\ = \\left\\{ \\begin{array}{l} | f (1) | + 1, f ^ {2} (1) - f ^ {2} (- 1) \\geqslant 0, \\\\ | f (- 1) | + 1, f ^ {2} (1) - f ^ {2} (- 1) \\leqslant 0, \\end{array} \\right. \\\\ \\end{array}
$$

所以 $|a| + |b|\\leqslant M(a,b) + 1\\leqslant 3.$

（可知 $M(a,b)\\leqslant 2$ ，当且仅当 $\\frac{f(1) + f(-1)}{2}\\leqslant 0$ 时， $|f(1)| = 2$ ，或 $|f(-1)| = 2$ ，且 $M(a,b) = 2$ ，即 $a = \\pm 2,b = -1$ 时取等号）`,
      },
      {
        id: "prob-sec-4-1-5-sol-6",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `由(1)知 $M(a,b)\\leqslant 2$ 时， $\\mid a\\mid \\leqslant 2$

由 $|f(-1)| = |1 - a + b|\\leqslant 2$ 及 $|f(1)| = |1 + a + b|\\leqslant 2,$

可得 $\\left\\{\\begin{aligned}a-3&\\leqslant b\\leqslant a+1,\\\\ -a-3&\\leqslant b\\leqslant-a+1.\\end{aligned}\\right.$ （\\*）

所以 $-3 \\leqslant b \\leqslant 1$ .

(i) 若 $0 < b \\leqslant 1$ ，由 $|a| \\leqslant 2$ ，得 $|a| + |b| \\leqslant 3$ ，结合条件 (\\*) 知此时 $|a| + |b| \\leqslant 1$ ；
(ii) 若 $-3 \\leqslant b < 0$ ，考虑到 $x = -\\frac{a}{2} \\in [-1, 1]$ ， $f\\left(-\\frac{a}{2}\\right) = -\\frac{a^{2}}{4} + b \\geqslant -M(a, b) \\geqslant -2$

所以 $\\frac{a^{2}}{4}-2\\leqslant b\\leqslant0$ ，得 $|b|\\leqslant2-\\frac{a^{2}}{4}$ ，因此 $|a|+|b|\\leqslant|a|+2-\\frac{a^{2}}{4}=3-\\left(\\frac{|a|}{2}-1\\right)^{2}\\leqslant3$

当且仅当 $a=\\pm2, b=-1$ 时取等号，故 $|a|+|b|$ 的最大值为 3.`,
      },
      {
        id: "prob-sec-4-1-5-sol-7",
        title: `解法三`,
        method: "standard",
        steps: [],
        explanation: `由(1)及 $M(a,b)$ 定义知 $|f(-1)|\\leqslant M(a,b),|f(1)|\\leqslant M(a,b)$ .

由于 $M(a,b)\\leqslant2$ ，有 $\\left|1-a+b\\right|\\leqslant2,\\left|1+a+b\\right|\\leqslant2$

故 $-3\\leqslant-a+b\\leqslant1,-3\\leqslant a+b\\leqslant1$ ，故 $|a-b|\\leqslant3,|a+b|\\leqslant3.$

考虑到所求式 $|a| + |b| = \\begin{cases} |a + b|, & ab \\geqslant 0, \\\\ |a - b|, & ab \\leqslant 0, \\end{cases}$ 所以 $|a| + |b| \\leqslant 3$ .

下面只要验证这样的 $a, b$ 存在即可. 事实上, 当 $a = 2, b = -1$ 时, $|a| + |b| = 3$ , 此时 $f(x) = |x^2 + 2x - 1| = |(x + 1)^2 - 2|$ 在 $[-1, 1]$ 上的最大值为 2; 当 $a = -2, b = -1$ 时, $|a| + |b| = 3$ , 此时 $f(x) = |x^2 - 2x - 1| = |(x - 1)^2 - 2|$ 在 $[-1, 1]$ 上的最大值为 2.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-1-6",
    topicId: "topic-sec-4-1",
    title: `奇三次函数在半轴单调的参数问题`,
    content: `已知 $x \\in R$ ，奇函数 $f(x) = x^{3} - ax^{2} - bx + c$ 在 $[1, +\\infty)$ 上单调.
(1) 求 a、c 的值及 b 的范围；
(2) 设 $x_{0} \\geqslant 1, f(x_{0}) \\geqslant 1$ ，且满足 $f(f(x_{0})) = x_{0}$ ，求证： $f(x_{0}) = x_{0}$ .`,
    preview: `已知 x R ，奇函数 f(x) = x^3 - ax^2 - bx + c 在 [1, +∞) 上单调. (1) 求 a、`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-1-6-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1) 因为 $x \\in \\mathbb{R}, f(x) = x^3 - ax^2 - bx + c$ 为奇函数, 所以 $f(-x) = -f(x)$ ,

即 $(-x)^{3}-a(-x)^{2}-b(-x)+c=-(x^{3}-ax^{2}-bx+c)$ 恒成立，因此a=c=0.

又 $f(x)$ 在 $[1, +\\infty)$ 上单调，若 $f(x)$ 在 $[1, +\\infty)$ 上单调递减，则 $f'(x) \\leqslant 0$ 恒成立，

但 $f'(x)=3x^{2}-b\\leqslant0$ 在 $[1,+\\infty)$ 上不恒成立；

若 $f(x)$ 在 $[1, +\\infty)$ 上单调递增，则 $f'(x)=3x^{2}-b\\geqslant0$ 恒成立.

在 $[1,+\\infty)$ 上 $f'(x)=3x^{2}-b$ 最小值为3-b，故只要 $3-b\\geqslant0$ ，即 $b\\leqslant3$ .

综上可知， $a = c = 0, b \\leqslant 3$

(2)`,
      },
      {
        id: "prob-sec-4-1-6-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `假设 $f(x_{0}) \\neq x_{0}$ .

若 $f(x_{0})>x_{0}\\geqslant1$ ，由(1)知 $f(x)$ 在 $[1,+\\infty)$ 上单调递增，

则 $f(f(x_{0})) > f(x_{0})$ 且 $f(x_{0}) > x_{0}$ ，有 $f(f(x_{0})) > x_{0}$ ，与 $f(f(x_{0})) = x_{0}$ 矛盾；

若 $1 \\leqslant f(x_0) < x_0$ ，同理有 $f(f(x_0)) < f(x_0)$ 且 $f(x_0) < x_0$ ，有 $f(f(x_0)) < x_0$

与 $f(f(x_{0}))=x_{0}$ 矛盾.

所以假设错误. 因此 $f(x_{0})=x_{0}$ .`,
      },
      {
        id: "prob-sec-4-1-6-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `由(1)知 $f(x)=x^{3}-bx$ .

设 $f(x_0) = m$ ，由 $f(f(x_0)) = x_0$ 有 $f(m) = x_0$

于是 $\\left\\{\\begin{aligned}x_{0}^{3}-bx_{0}&=m,\\\\ m^{3}-bm&=x_{0}.\\end{aligned}\\right.$ 两式相减，得 $(x_{0}^{3}-m^{3})-b(x_{0}-m)=m-x_{0}$ ，

即 $(x_{0}-m)(x_{0}^{2}+mx_{0}+m^{2}+1-b)=0.$

因为 $x_{0} \\geqslant 1, f(x_{0}) \\geqslant 1, b \\leqslant 3$ ，所以 $x_{0}^{2} + mx_{0} + m^{2} + 1 - b \\geqslant 4 - b \\geqslant 1 > 0$ ，

所以 $x_{0}-m=0$ ，即 $f(x_{0})=x_{0}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-1-7",
    topicId: "topic-sec-4-1",
    title: `点 P(t,y) 在函数`,
    content: `点 $P(t,y)$ 在函数 $f(x)=\\frac{x}{x+1}(x\\neq-1)$ 的图像上，且有
$$
t ^ {2} - c ^ {2} a t + 4 c ^ {2} = 0 (c \\neq 0).
$$

求证：

(1) $|ac| \\geqslant 4;$
(2)在 $(-1,+\\infty)$ 上 $f(x)$ 单调递增；
(3) $f(|a|)+f(|c|)>1.$`,
    preview: `点 P(t,y) 在函数 f(x)=x/x+1(x≠-1) 的图像上，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-1-7-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `（1）因为 $t \\in R, t \\neq -1$ ，所以 $\\Delta = (-c^{2}a)^{2} - 16c^{2} = c^{4}a^{2} - 16c^{2} \\geqslant 0.$

因为 $c \\neq 0$ ，所以 $c^{2}a^{2} \\geqslant 16$ ，所以 $|ac| \\geqslant 4$ .

(2) 由已知得 $f(x)=1-\\frac{1}{x+1}$ .`,
      },
      {
        id: "prob-sec-4-1-7-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `设 $- 1 < {x}_{1} < {x}_{2}$ ,

则 $f(x_{2}) - f(x_{1}) = 1 - \\frac{1}{x_{2} + 1} -1 + \\frac{1}{x_{1} + 1} = \\frac{x_2 - x_1}{(x_2 + 1)(x_1 + 1)}.$

因为 $-1<x_{1}<x_{2}$ ，所以 $x_{2}-x_{1}>0,\\quad x_{1}+1>0,\\quad x_{2}+1>0$

所以 $f(x_{2}) - f(x_{1}) > 0$ ，即 $f(x_{2}) > f(x_{1})$ ，所以当 $x > -1$ 时， $f(x)$ 单调递增.`,
      },
      {
        id: "prob-sec-4-1-7-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `$f'(x)=\\frac{1}{(x+1)^{2}}>0$ 得 $x\\neq-1$ ，所以当 x>-1 时， $f(x)$ 单调递增.

(3)由 $f(x)$ 在 x > -1 时单调递增， $|c| \\geqslant \\frac{4}{|a|} > 0$ ，

得 $f(|c|)\\geqslant f\\left(\\frac{4}{|a|}\\right) = \\frac{\\frac{4}{|a|}}{\\frac{4}{|a|} + 1} = \\frac{4}{|a| + 4},$

$$
f (| a |) + f (| c |) = \\frac {| a |}{| a | + 1} + \\frac {4}{| a | + 4} > \\frac {| a |}{| a | + 4} + \\frac {4}{| a | + 4} = 1.
$$

即 $f(|a|)+f(|c|)>1.$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-1-8",
    topicId: "topic-sec-4-1",
    title: `设 a > 0，函数 f(x) = (x/a + 1 - 1)^2 + (a/x - 1)^2 - 2/3 (x >`,
    content: `设 $a > 0$ ，函数 $f(x) = \\left(\\frac{x}{a + 1} - 1\\right)^2 + \\left(\\frac{a}{x} - 1\\right)^2 - \\frac{2}{3} (x > 0)$ .
(1) 当 $a=\\frac{1}{3}$ 时, 求函数 $f(x)$ 的最小值;

(2) 证明: 当 $a \\geqslant \\frac{1}{5}$ 时, 函数 $f(x)$ 有零点.`,
    preview: `设 a > 0 ，函数 . (1) 当 a=1/3 时, 求函数 f(x) 的最小值; (2) 证明: 当 a ≥ 1/5 时, 函数 f(x) 有`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-1-8-sol-0",
        title: `解答`,
        method: "creative",
        steps: [],
        explanation: `(1)当 $a = \\frac{1}{3}$ 时，

$$
\\begin{array}{l} f (x) = \\left(\\frac {3 x}{4} - 1\\right) ^ {2} + \\left(\\frac {1}{3 x} - 1\\right) ^ {2} - \\frac {2}{3} = \\left(\\frac {3 x}{4}\\right) ^ {2} + \\left(\\frac {1}{3 x}\\right) ^ {2} - 2 \\left(\\frac {3 x}{4} + \\frac {1}{3 x}\\right) + \\frac {4}{3} \\\\ = \\left(\\frac {3 x}{4} + \\frac {1}{3 x}\\right) ^ {2} - 2 \\left(\\frac {3 x}{4} + \\frac {1}{3 x}\\right) + \\frac {5}{6} = \\left(\\frac {3 x}{4} + \\frac {1}{3 x} - 1\\right) ^ {2} - \\frac {1}{6} \\geqslant - \\frac {1}{6}, \\\\ \\end{array}
$$

所以，当 $\\frac{3x}{4}+\\frac{1}{3x}=1$ ，即 $x=\\frac{2}{3}$ 时，函数 $f(x)$ 取到最小值 $-\\frac{1}{6}$ .

(2) 因为 $f\\left(\\frac{a}{2}\\right) = \\left[\\frac{a}{2(a + 1)} - 1\\right]^2 + \\frac{1}{3} > 0$ ，所以欲证当 $a \\geqslant \\frac{1}{5}$ 时，函数 $f(n)$ 有零点，只需证明，当 $a \\geqslant \\frac{1}{5}$ 时，函数 $f(x)$ 的最小值小于等于零即可.

$$
\\begin{array}{l} f (x) = \\left(\\frac {x}{a + 1} - 1\\right) ^ {2} + \\left(\\frac {a}{x} - 1\\right) ^ {2} - \\frac {2}{3} = \\left(\\frac {x}{a + 1}\\right) ^ {2} + \\left(\\frac {a}{x}\\right) ^ {2} - 2 \\left(\\frac {x}{a + 1} + \\frac {a}{x}\\right) + \\frac {4}{3} \\\\ = \\left(\\frac {x}{a + 1} + \\frac {a}{x}\\right) ^ {2} - 2 \\left(\\frac {x}{a + 1} + \\frac {a}{x}\\right) + \\frac {4}{3} - \\frac {2 a}{a + 1} = \\left(\\frac {x}{a + 1} + \\frac {a}{x} - 1\\right) ^ {2} + \\frac {1}{3} - \\frac {2 a}{a + 1}. \\\\ \\end{array}
$$

考察方程: $\\frac{x}{a+1}+\\frac{a}{x}-1=0$ , 即 $x^{2}-(a+1)x+a(a+1)=0$ .

①当 $x^{2}-(a+1)x+a(a+1)=0$ 有实数根时，

此时 $a \\leqslant \\frac{1}{3}$ ，函数 $f(x)$ 的最小值是 $\\frac{1}{3} - \\frac{2a}{a+1}$ .

因为 $a \\geqslant \\frac{1}{5}$ ，所以 $\\frac{1}{3} - \\frac{2a}{a+1} \\leqslant 0$ .

②当 $x^{2}-(a+1)x+a(a+1)=0$ 无实数根时，此时 $a>\\frac{1}{3}$ .

因为 $\\frac{x}{a+1}+\\frac{a}{x}\\geqslant2\\sqrt{\\frac{a}{a+1}}>1,$

所以，函数 $f(x)$ 的最小值是 $\\left(2\\sqrt{\\frac{a}{a+1}}-1\\right)^{2}+\\frac{1}{3}-\\frac{2a}{a+1}=2\\left(\\sqrt{\\frac{a}{a+1}}-1\\right)^{2}-\\frac{2}{3}$ .

因为 $\\frac{1}{2}<\\sqrt{\\frac{a}{a+1}}<1$ ，所以 $2\\left(\\sqrt{\\frac{a}{a+1}}-1\\right)^{2}-\\frac{2}{3}<-\\frac{1}{6}<0.$

由①②可知，当 $a\\geqslant\\frac{1}{5}$ 时，函数 $f(x)$ 的最小值小于等于零.

因此，当 $a \\geqslant \\frac{1}{5}$ 时，函数 $f(x)$ 有零点.

评注 本题重点考查函数的性质、基本不等式、零点存在性等知识,对考生的逻辑推理能力与创新意识要求较高.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-1-9",
    topicId: "topic-sec-4-1",
    title: `若函数 f(x) 的定义域为 R`,
    content: `（2022 年高考全国卷Ⅱ）若函数 $f(x)$ 的定义域为 R，且 $f(x+y)+f(x-y)=f(x)f(y)$ ， $f(1)=1$ ，则 $\\sum_{k=1}^{22}f(k)=$ （）
A. -3

B.-2

C. 0

D. 1`,
    preview: `若函数 f(x) 的定义域为 R，且 f(x+y)+f(x-y)=f(x)f(y) ， f(1)=1 ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-1-9-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `因为 $f(x+y)+f(x-y)=f(x)f(y)$ ,

令 x=1, y=0，可得 $2f(1)=f(1)f(0)$ ，所以 $f(0)=2$ ，

令 x=0，可得 $f(y)+f(-y)=2f(y)$ ，即 $f(y)=f(-y)$ ，

所以函数 $f(y)$ 为偶函数, 令 y=1,

得 $f(x+1)+f(x-1)=f(x)f(1)=f(x)$ ，即有 $f(x+2)+f(x)=f(x+1)$ ，

从而可知 $f(x+2)=-f(x-1)$ , $f(x-1)=-f(x-4)$ ,

故 $f(x+2)=f(x-4)$ ，即 $f(x)=f(x+6)$ ，所以函数 $f(x)$ 的一个周期为 6.

因为 $f(2)=f(1)-f(0)=1-2=-1$ , $f(3)=f(2)-f(1)=-1-1=-2$ ,

$$
f (4) = f (- 2) = f (2) = - 1, f (5) = f (- 1) = f (1) = 1, f (6) = f (0) = 2,
$$

所以一个周期内的 $f(1)+f(2)+\\cdots+f(6)=0$ .

由于 22 除以 6 余 4，

所以 $\\sum_{k=1}^{22} f(k) = f(1) + f(2) + f(3) + f(4) = 1 - 1 - 2 - 1 = -3$ . 故选 A.`,
      },
    ],
    tags: [],
    source: `2022 年高考全国卷Ⅱ`,
  },
  {
    id: "prob-sec-4-1-10",
    topicId: "topic-sec-4-1",
    title: `设 f(x) 是定义在 R 上的偶函数, 其图像关于直线`,
    content: `设 $f(x)$ 是定义在 R 上的偶函数, 其图像关于直线 x=1 对称, 对任意 $x_{1}$ , $x_{2} \\in \\left[0, \\frac{1}{2}\\right]$ 都有 $f(x_{1} + x_{2}) = f(x_{1}) \\cdot f(x_{2})$ , 且 $f(1) = a > 0$ .
(1) 求 $f\\left(\\frac{1}{2}\\right)$ 及 $f\\left(\\frac{1}{4}\\right)$ ; (2) 证明: $f(x)$ 是周期函数; (3) 记 $a_{n}=f\\left(2n+\\frac{1}{2n}\\right)$ , 求 $a_{n}$ .`,
    preview: `设 f(x) 是定义在 R 上的偶函数, 其图像关于直线 x=1 对称, 对任意 x_1 , x_2 [0, 1/2] 都有 f(x_1 + x_2) = f(`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-1-10-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 因为 $x_{1}, x_{2} \\in \\left[0, \\frac{1}{2}\\right]$ , 都有 $f(x_{1} + x_{2}) = f(x_{1}) \\cdot f(x_{2})$ ,

所以 $f(x)=f\\left(\\frac{x}{2}\\right)\\cdot f\\left(\\frac{x}{2}\\right)\\geqslant0,x\\in[0,1].$

$$
f (1) = f \\Big (\\frac {1}{2} + \\frac {1}{2} \\Big) = f \\Big (\\frac {1}{2} \\Big) \\cdot f \\Big (\\frac {1}{2} \\Big) = \\Big [ f \\Big (\\frac {1}{2} \\Big) \\Big ] ^ {2},
$$

$$
f \\left(\\frac {1}{2}\\right) = f \\left(\\frac {1}{4} + \\frac {1}{4}\\right) = f \\left(\\frac {1}{4}\\right) \\cdot f \\left(\\frac {1}{4}\\right) = \\left[ f \\left(\\frac {1}{4}\\right) \\right] ^ {2},
$$

$$
f (1) = a > 0, f \\Big (\\frac {1}{2} \\Big) = a ^ {\\frac {1}{2}}, f \\Big (\\frac {1}{4} \\Big) = a ^ {\\frac {1}{4}}.
$$

(2) 证明: 依题意, $y = f(x)$ 关于直线 $x = 1$ 对称, 故 $f(x) = f(1 + 1 - x)$ , 即

$f(x) = f(2 - x), x \\in \\mathbf{R}$ , 又由 $f(x)$ 是偶函数知 $f(-x) = f(x), x \\in \\mathbf{R}$ ,

$f(-x)=f(2-x),x\\in\\mathbf{R}$ ，将式中的-x以x代换，得 $f(x)=f(x+2),x\\in\\mathbf{R}$

这表明 $f(x)$ 是 R 上的周期函数, 且 2 是它的一个周期.

(3)由(1)知 $f(x)\\geqslant0,x\\in[0,1]$ .

$$
\\begin{array}{l} f \\left(\\frac {1}{2}\\right) = f \\left(n \\cdot \\frac {1}{2 n}\\right) = f \\left(\\frac {1}{2 n} + (n - 1) \\cdot \\frac {1}{2 n}\\right) = f \\left(\\frac {1}{2 n}\\right) \\cdot f \\left((n - 1) \\cdot \\frac {1}{2 n}\\right) \\\\ = \\dots = f \\left(\\frac {1}{2 n}\\right) \\cdot f \\left(\\frac {1}{2 n}\\right) \\dots f \\left(\\frac {1}{2 n}\\right) = \\left[ f \\left(\\frac {1}{2 n}\\right) \\right] ^ {n}. \\\\ \\end{array}
$$

所以 $f\\left(\\frac{1}{2}\\right)=a^{\\frac{1}{2}}$ ，从而 $f\\left(\\frac{1}{2n}\\right)=a^{\\frac{1}{2n}}$ .

因为 $f(x)$ 的一个周期是2，所以 $f\\left(2n + \\frac{1}{2n}\\right) = f\\left(\\frac{1}{2n}\\right)$ ，因此 $a_{n} = a^{\\frac{1}{2n}}$

评注 本小题主要考查函数的概念、图像, 函数的奇偶性和周期性以及数列极限等基础知识; 考查运算能力和逻辑思维能力. 认真分析处理好各知识的相互联系, 抓住条件 $f(x_1 + x_2) = f(x_1) \\cdot f(x_2)$ 找到问题的突破口. 技巧与方法主要体现在由 $f(x_1 + x_2) = f(x_1) \\cdot f(x_2)$ 变形为 $f(x) = f\\left(\\frac{x}{2} + \\frac{x}{2}\\right) = f\\left(\\frac{x}{2}\\right) \\cdot f\\left(\\frac{x}{2}\\right)$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-1-11",
    topicId: "topic-sec-4-1",
    title: `设函数 y = f(x)(x R)`,
    content: `设函数 $y = f(x)(x \\in \\mathbb{R})$ ，当 $x > 0$ 时， $f(x) > 1$ ，且对任意实数 $x_1, x_2$ 满足 $f(x_1 + x_2) = f(x_1) \\cdot f(x_2)$ ，当 $x_1 \\neq x_2$ 时， $f(x_1) \\neq f(x_2)$ .
(1) 求 $f(0)$ 的值；
(2) 求证: $y = f(x)$ 在 R 上为单调递增函数;
(3) 判断 $y = f(x)$ 的奇偶性；
(4) 当 $x_{1} \\neq x_{2}$ 时，试比较 $\\frac{1}{2}[f(x_1) + f(x_2)]$ 与 $f\\left(\\frac{x_1 + x_2}{2}\\right)$ 的大小.`,
    preview: `设函数 y = f(x)(x R) ，当 x > 0 时， f(x) > 1 ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-1-11-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 令 $x_{1} = x_{2} = x$ ，则 $f(2x) = [f(x)]^{2} > 0$ ，令 $x_{1} = x_{2} = 0$

则有 $f(0)=f(0)\\cdot f(0)$ ，得到 $f(0)=0$ 或 1.

若 $f(0)=0$ ，则有 $f(1)=f(0)\\cdot f(1)$ ，

所以 $f(1)=0$ ，与已知矛盾，即 $f(0)=1$ 。

(2)由(1)得 $f(0)=1$ ，令 $x_{1}=-x, x_{2}=x (x>0)$ ，

则 $f(-x+x)=f(-x)\\cdot f(x)=1$ ，故 $f(-x)=\\frac{1}{f(x)}$

$\\frac{f(x_2)}{f(x_1)} = f(x_2) \\cdot f(-x_1) = f(x_2 - x_1)$ , 又 $x_1 < x_2$ , 得 $x_2 - x_1 > 0$ ,

因为当 $x > 0$ 时， $f(x) > 1$ ，所以 $f(x_2 - x_1) > 1$ ，从而有 $\\frac{f(x_2)}{f(x_1)} > 1$

故 $f(x_{2}) > f(x_{1})$ ，即 $f(x)$ 是增函数.

(3) $f(x)$ 是非奇非偶函数. $f(0)=1,f(x)$ 不是奇函数；

若 $f(x)$ 是偶函数, 即有 $f(-x)=f(x)$ , $f(0)=f(x)\\cdot f(-x)=[f(x)]^{2}=1$ ,

$f(x)=1$ 或-1(舍去)，这与“当x>0时， $f(x)>1$ ”相矛盾.

(4) $f(x_{1})=f\\left(\\frac{x_{1}}{2}+\\frac{x_{1}}{2}\\right)=\\left[f\\left(\\frac{x_{1}}{2}\\right)\\right]^{2}$ ，同理， $f(x_{2})=\\left[f\\left(\\frac{x_{2}}{2}\\right)\\right]^{2}$

$$
\\frac {1}{2} [ f (x _ {1}) + f (x _ {2}) ] = \\frac {1}{2} \\left\\{\\left[ f \\left(\\frac {x _ {1}}{2}\\right) \\right] ^ {2} + \\left[ f \\left(\\frac {x _ {2}}{2}\\right) \\right] ^ {2} \\right\\},
$$

而 $f\\left(\\frac{x_{1}+x_{2}}{2}\\right)=f\\left(\\frac{x_{1}}{2}\\right)\\cdot f\\left(\\frac{x_{2}}{2}\\right)$ ,

又 $\\frac{1}{2}\\left\\{\\left[f\\left(\\frac{x_1}{2}\\right)\\right]^2 +\\left[f\\left(\\frac{x_2}{2}\\right)\\right]^2\\right\\} >f\\left(\\frac{x_1}{2}\\right)\\cdot f\\left(\\frac{x_2}{2}\\right),$

故前者大于后者.

评注 由题目条件“函数 $y = f(x) (x \\in \\mathbb{R})$ ，当 $x > 0$ 时， $f(x) > 1$ ，且对任意实数 $x_1, x_2$ 满足 $f(x_1 + x_2) = f(x_1) \\cdot f(x_2)$ ”，可试着把函数 $y = f(x)$ 归为指数函数 $f(x) = a^x (a > 1)$ ，从而利用其性质来指导我们对问题的解决，特别是对 $f(0) = 0$ 的排除。`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-1-12",
    topicId: "topic-sec-4-1",
    title: `已知函数 f(x) 对于任意 x, y R 都有 f(x`,
    content: `已知函数 $f(x)$ 对于任意 $x, y \\in \\mathbb{R}$ 都有 $f(x + y) = f(x) + f(y)$ ，且当 $x > 0$ 时，有 $f(x) < 0$ .
(1) 判断 $f(x)$ 的奇偶性与单调性, 并证明你的结论;
(2)设不等式 $\\frac{f(x^{2}+1)}{f(x-1)}<2k$ 对于一切 $x\\in[-1,1)$ 恒成立，求整数k的最小值.`,
    preview: `已知函数 f(x) 对于任意 x, y R 都有 f(x + y) = f(x) + f(y) ，且当 x > 0 时，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-1-12-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1)令 x=y=0，得 $f(0)=f(0)+f(0)$ ，

解得 $f(0)=0$ .

令 y = -x，得 $f(0) = f(x) + f(-x) \\Rightarrow f(-x) = -f(x)$ ，

所以， $f(x)$ 是奇函数.

设 $x_{1}>x_{2}$ ，则 $x_{1}-x_{2}>0$ ，由条件得 $f(x_{1}-x_{2})<0$ ，

因此， $f(x_{1})+f(-x_{2})<0$ ，即 $f(x_{1})<-f(-x_{2})=f(x_{2})$

所以， $f(x)$ 在 $(-∞,+∞)$ 上为减函数.

(2)由 $x \\in [-1,1)$ ，得 x-1<0，因此， $f(x-1)>0$ ，

所以有 $f(x^{2}+1)<2kf(x-1)$ .

①当 $k \\in Z^{+}$ 时，由数学归纳法可证得 $2kf(x) = f(2kx)$ . (\\*)

②当k=0时，(\\*)式显然成立；当k<0时，由奇函数性质可证明(\\*)式也成立.

所以有 $f(x^{2}+1)<f(2kx-2k)$ ,

由单调性得 $x^{2}-2kx+1+2k>0$ ，对于 $x\\in[-1,1)$ 恒成立.`,
      },
      {
        id: "prob-sec-4-1-12-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `由 $k > \\frac{x^{2} + 1}{2x - 2}$ 恒成立，

令 $y = \\frac{x^2 + 1}{2x - 2} = -\\left[\\frac{1}{2}(1 - x) + \\frac{1}{1 - x}\\right] + 1, 1 - x \\in (0, 2]$ .

由基本不等式可得 $y \\leqslant 1 - \\sqrt{2}$ ，因此 $k > y_{\\max} = 1 - \\sqrt{2}$ ，又由 $k \\in Z$ ，得 $k_{\\min} = 0$ 。`,
      },
      {
        id: "prob-sec-4-1-12-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `设 $g(x)=x^{2}-2kx+1+2k=(x-k)^{2}-k^{2}+2k+1>0$

$g(x)$ 对于 $x\\in[-1,1)$ 恒成立.

①若 $k \\leqslant -1$ , $g(x)_{\\min} = g(-1) = 4k + 2 > 0$ , 此时 k 无解.

②若 $-1<k\\leqslant1,g(x)_{\\min}=g(k)=-k^{2}+2k+1>0\\Rightarrow1-\\sqrt{2}<k\\leqslant1.$

③若 $k>1$ , $g(x)>g(1)=2>0$ .

综上可得: $k>1-\\sqrt{2}$ ，又 $k\\in Z$ ，所以 $k_{\\min}=0$ 。`,
      },
      {
        id: "prob-sec-4-1-12-sol-3",
        title: `解法三`,
        method: "standard",
        steps: [],
        explanation: `由已知易得 $\\frac{f(x^{2}+1)}{f(x-1)}<0,$

令 x = -1，得 $\\frac{f(2)}{f(-2)} = -1$ ，因此，2k > -1，

即 $k > -\\frac{1}{2}$ ，又由于 k 可取到 0，所以 $k_{\\min} = 0$ .

评注 利用函数的单调性化抽象为具体是解决抽象函数问题的常用技巧,本例将原问题转化为二次不等式 $x^{2}-2kx+1+2k>0$ 对于 $x\\in[-1,1)$ 恒成立问题.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-2-1",
    topicId: "topic-sec-4-2",
    title: `已知 a, b 是实数`,
    content: `已知 $a, b$ 是实数，函数 $f(x) = x^3 + ax, g(x) = x^2 + bx, f'(x)$ 和 $g'(x)$ 是 $f(x)$ 和 $g(x)$ 的导函数。若 $f'(x)g'(x) \\geqslant 0$ 在区间 $I$ 上恒成立，则称 $f(x)$ 和 $g(x)$ 在区间 $I$ 上单调性一致。
(1) 设 a > 0，若 $f(x)$ 和 $g(x)$ 在区间 $[-1, +\\infty)$ 上单调性一致，求实数 b 的取值范围；
(2) 设 a < 0 且 $a \\neq b$ ，若 $f(x)$ 和 $g(x)$ 在以 a, b 为端点的开区间上单调性一致，求 $|a - b|$ 的最大值.`,
    preview: `已知 a, b 是实数，函数 和 g'(x) 是 f(x) 和 g(x) 的导函数。若 f'(x)g'(x) ≥ 0 在区间 I 上恒成立，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-2-1-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 因为函数 $f(x)$ 和 $g(x)$ 在区间 $[-1, +\\infty)$ 上单调性一致，

所以， $\\forall x\\in[-1,+\\infty),f'(x)g'(x)\\geqslant0,$

即 $\\forall x\\in[-1,+\\infty),(3x^{2}+a)(2x+b)\\geqslant0.$

因为 a>0，所以 $\\forall x\\in[-1,+\\infty),2x+b\\geqslant0,$

得 $b \\geqslant -2x$ ，所以 $b \\geqslant 2$ .

(2) 当 b < a 时, 因为函数 $f(x)$ 和 $g(x)$ 在区间 $(b, a)$ 上单调性一致,

所以， $\\forall x \\in (b, a), f'(x)g'(x) \\geqslant 0$ ，即 $\\forall x \\in (b, a), (3x^2 + a)(2x + b) \\geqslant 0$ .

因为 b < a < 0，所以 $\\forall x \\in (b, a), 2x + b < 0$ ，

所以 $\\forall x\\in(b,a),a\\leqslant-3x^{2}$ ,

所以 $b < a < -3b^{2}$ .

设 $z = a - b$ ，考虑 $(b, a)$ 的可行域，函数 $y = -3x^{2}$ 的斜率为1的切线的切点设为 $(x_{0}, y_{0})$ ，则 $-6x_{0} = 1, x_{0} = -\\frac{1}{6}, y_{0} = -\\frac{1}{12}$ ，所以 $z_{\\max} = -\\frac{1}{12} - \\left(-\\frac{1}{6}\\right) = \\frac{1}{12}$ .

当 a<b<0 时，因为函数 $f(x)$ 和 $g(x)$ 在区间 $(a,b)$ 上单调性一致，

所以， $\\forall x \\in (a, b), f'(x)g'(x) \\geqslant 0$ ，即 $\\forall x \\in (a, b), (3x^2 + a)(2x + b) \\geqslant 0$ .

因为 b<0，所以 $\\forall x\\in(a,b),2x+b<0$ ，所以 $\\forall x\\in(a,b),a\\leqslant-3x^{2}$

所以 $a \\leqslant -3a^{2}$ ，所以 $-\\frac{1}{3} \\leqslant a \\leqslant 0$ ，所以 $(b-a)_{\\max} = \\frac{1}{3}$ .

当 a<0<b 时, 因为函数 $f(x)$ 和 $g(x)$ 在区间 $(a,b)$ 上单调性一致,

所以， $\\forall x\\in(a,b),f'(x)g'(x)\\geqslant0$ ，即 $\\forall x\\in(a,b),(2x+b)(3x^{2}+a)\\geqslant0.$

因为 b>0，而 x=0 时， $(3x^{2}+a)(2x+b)=ab<0$ ，不符合题意。

当 a<0=b 时，由题意： $\\forall x\\in(a,0),2x(3x^{2}+a)\\geqslant0,$

所以 $\\forall x\\in (a,0),3x^{2} + a\\leqslant 0$ ，所以 $3a^{2} + a <   0$ ，所以 $-\\frac{1}{3} <  a <   0$ ，所以 $b - a <   \\frac{1}{3}$

综上可知， $|a-b|_{\\max}=\\frac{1}{3}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-2-2",
    topicId: "topic-sec-4-2",
    title: `已知 f(x) = x^3 + bx^2 + cx + d`,
    content: `已知 $f(x) = x^{3} + bx^{2} + cx + d$ 在 $(-\\infty, 0]$ 上是增函数，在 $[0, 2]$ 上是减函数，且 $f(x) = 0$ 有三个根： $\\alpha, 2, \\beta (\\alpha \\leqslant 2 \\leqslant \\beta)$ .
(1) 求 c 的值, 并求出 b 和 d 的取值范围;
(2) 求证: $f(1) \\geqslant 2$ ;
(3) 求 $\\left|\\beta-\\alpha\\right|$ 的取值范围，并写出当 $\\left|\\beta-\\alpha\\right|$ 取最小值时 $f(x)$ 的解析式.`,
    preview: `已知 f(x) = x^3 + bx^2 + cx + d 在 (-∞, 0] 上是增函数，在 [0, 2] 上是减函数，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-2-2-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 因为 $f(x)$ 在 $(-\\infty, 0]$ 上是增函数，在 $(0, 2]$ 上是减函数，

所以 x=0 是 $f'(x)=0$ 的根，

又因为 $f'(x)=3x^{2}+2bx+c$ ，所以 $f'(0)=0$ ，所以 c=0，

又因为 $f(x)=0$ 的根为 $\\alpha,2,\\beta$ ，所以 $f(2)=0$ ，所以 $8+4b+d=0$ ，

又因为 $f'(2) \\leqslant 0$ ，所以 $12 + 4b \\leqslant 0$ ，所以 $b \\leqslant -3$ ，又 d = -8 - 4b，所以 $d \\geqslant 4$ 。

(2) 因为 $f(1)=1+b+d, f(2)=0,$

所以 $d = -8 - 4b$ 且 $b \\leqslant -3$ , 所以 $f(1) = 1 + b - 8 - 4b = -7 - 3b \\geqslant 2$ .

(3) 因为 $f(x)=0$ 有三个根 $\\alpha,2,\\beta,$

所以 $f(x)=(x-\\alpha)(x-2)(x-\\beta)=x^{3}-(\\alpha+\\beta+2)\\cdot x^{2}-2\\alpha\\beta,$

所以 $\\left\\{\\begin{aligned}\\alpha+\\beta+2&=-b,\\\\ \\alpha\\beta&=-\\frac{d}{2},\\end{aligned}\\right.$

所以 $|\\beta -\\alpha|^2 = (\\alpha +\\beta)^2 -4\\alpha \\beta = (b + 2)^2 +2d$

$$
\\begin{array}{l} = b ^ {2} + 4 b + 4 - 1 6 - 8 b \\\\ = b ^ {2} - 4 b - 1 2 = (b - 2) ^ {2} - 1 6. \\\\ \\end{array}
$$

又因为 $b \\leqslant -3$ ，所以 $|\\beta - \\alpha| \\geqslant 3$ ，

当且仅当 b=-3 时取最小值, 此时 d=4,

所以 $f(x)=x^{3}-3x^{2}+4.$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-2-3",
    topicId: "topic-sec-4-2",
    title: `设曲线 y = ax^3/3 + 1/2 bx^2 + cx (a ≠ 0) 在点 x 处的切线斜率为 k(x)，且`,
    content: `设曲线 $y = \\frac{ax^3}{3} + \\frac{1}{2} bx^2 + cx (a \\neq 0)$ 在点 $x$ 处的切线斜率为 $k(x)$ ，且 $k(-1) = 0$ ，对一切实数 $x$ ，不等式 $x \\leqslant k(x) \\leqslant \\frac{1}{2}(x^2 + 1)$ 恒成立.
(1) 求 $k(1)$ 的值；
(2) 求函数 $k(x)$ 的表达式；
(3) 求证: $\\sum_{i=1}^{n}\\frac{1}{k(i)}>\\frac{2n}{n+2}.$`,
    preview: `设曲线 在点 x 处的切线斜率为 k(x) ，且 k(-1) = 0 ，对一切实数 x ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-2-3-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 由 $k(x) = ax^{2} + bx + c, x \\leqslant k(x) \\leqslant \\frac{1}{2}(x^{2} + 1)$ ,

令 $x = 1$ ，得 $1\\leqslant k(1)\\leqslant \\frac{1}{2} (1 + 1) = 1$ ，所以， $k(1) = 1$

(2) $\\left\\{\\begin{aligned}k(-1)=0,\\\\ k(1)=1\\end{aligned}\\right.\\Rightarrow\\left\\{\\begin{aligned}a-b+c=0,\\\\ a+b+c=1\\end{aligned}\\right.\\Rightarrow\\left\\{\\begin{aligned}b=\\frac{1}{2},\\\\ a+c=\\frac{1}{2}.\\end{aligned}\\right.$

又 $k(x) \\geqslant x$ ，所以 $ax^2 + \\frac{1}{2} x + c \\geqslant x$ ，即 $ax^2 - \\frac{1}{2} x + c \\geqslant 0$

由 $\\Delta = \\frac{1}{4} - 4ac \\leqslant 0$ ，解得 $ac \\geqslant \\frac{1}{16}$ ，又 $ac \\leqslant \\frac{(a + c)^2}{4} = \\frac{1}{16}$ ，即 $\\frac{1}{16} \\leqslant ac \\leqslant \\frac{1}{16}$

所以 $ac = \\frac{1}{16}, a = c = \\frac{1}{4}$ . 所以, $k(x) = \\frac{1}{4} x^2 + \\frac{1}{2} x + \\frac{1}{4} = \\frac{1}{4} (x + 1)^2$ .

(3) $\\frac{1}{k(x)} = \\frac{4}{(x + 1)^2}$ ,

$$
\\begin{array}{l} = 4 \\left[ \\frac {1}{2 ^ {2}} + \\frac {1}{3 ^ {2}} + \\frac {1}{4 ^ {2}} + \\dots + \\frac {1}{(n + 1) ^ {2}} \\right] \\\\ > 4 \\left[ \\frac {1}{2 \\times 3} + \\frac {1}{3 \\times 4} + \\frac {1}{4 \\times 5} + \\dots + \\frac {1}{(n + 1) (n + 2)} \\right] \\\\ = 4 \\left(\\frac {1}{2} - \\frac {1}{3} + \\frac {1}{3} - \\frac {1}{4} + \\frac {1}{4} - \\frac {1}{5} + \\dots + \\frac {1}{n + 1} - \\frac {1}{n + 2}\\right) \\\\ = 4 \\left(\\frac {1}{2} - \\frac {1}{n + 2}\\right) = 4 \\times \\frac {n}{2 (n + 2)} = \\frac {2 n}{n + 2}. \\\\ \\end{array}
$$

原式 $= \\frac{4}{(1 + 1)^2} +\\frac{4}{(2 + 1)^2} +\\frac{4}{(3 + 1)^2} +\\dots +\\frac{4}{(n + 1)^2}$

评注 三次函数图像的切线问题涉及高中数学中较多的知识点和数学思想方法,是新旧教材知识与方法的契合点,也是高考命题的热点.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-2-4",
    topicId: "topic-sec-4-2",
    title: `已知实数 a 满足 0 < a ≤ 2, a`,
    content: `已知实数 $a$ 满足 $0 < a \\leqslant 2, a \\neq 1$ , 设函数 $f(x) = \\frac{1}{3} x^3 - \\frac{a + 1}{2} x^2 + ax$ .
(1) 当 a=2 时, 求 $f(x)$ 的极小值;
(2) 若函数 $g(x) = x^3 + bx^2 - (2b + 4)x + \\ln x (b \\in \\mathbf{R})$ 的极小值点与 $f(x)$ 的极小值点相同. 求证: $g(x)$ 的极大值小于等于 $\\frac{5}{4}$ .`,
    preview: `已知实数 a 满足 0 < a ≤ 2, a ≠ 1 , 设函数 . (1) 当 a=2 时, 求 f(x) 的极小值; (2) 若函数 的极小值`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-2-4-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 当 $a = 2$ 时, $f'(x) = x^2 - 3x + 2 = (x - 1)(x - 2)$ . 列表如下:

<table><tr><td>x</td><td>(-∞,1)</td><td>1</td><td>(1,2)</td><td>2</td><td>(2,+∞)</td></tr><tr><td>f&#x27;(x)</td><td>+</td><td>0</td><td>-</td><td>0</td><td>+</td></tr><tr><td>f(x)</td><td>单调递增</td><td>极大值</td><td>单调递减</td><td>极小值</td><td>单调递增</td></tr></table>

所以， $f(x)$ 极小值为 $f(2) = \\frac{2}{3}$

(2) $f'(x)=x^{2}-(a+1)x+a=(x-1)(x-a).$

$$
g ^ {\\prime} (x) = 3 x ^ {2} + 2 b x - (2 b + 4) + \\frac {1}{x} = \\frac {(x - 1) [ 3 x ^ {2} + (2 b + 3) x - 1 ]}{x}.
$$

令 $p(x)=3x^{2}+(2b+3)x-1.$

①当 $1 < a \\leqslant 2$ 时， $f(x)$ 的极小值点 x = a，则 $g(x)$ 的极小值点也为 x = a，所以 $p(a) = 0$ ，即 $3a^{2} + (2b + 3)a - 1 = 0$ ，即 $b = \\frac{1 - 3a^{2} - 3a}{2a}$ ，

此时 $g(x)_{\\text{极大值}} = g(1) = 1 + b - (2b + 4)$

$$
\\begin{array}{l} = - 3 - b = - 3 + \\frac {3 a ^ {2} + 3 a - 1}{2 a} \\\\ = \\frac {3}{2} a - \\frac {1}{2 a} - \\frac {3}{2}. \\\\ \\end{array}
$$

由于 $1 < a \\leqslant 2$ ，故 $\\frac{3}{2}a - \\frac{1}{2a} - \\frac{3}{2} \\leqslant \\frac{3}{2} \\times 2 - \\frac{1}{4} - \\frac{3}{2} = \\frac{5}{4}$ .

②当 $0 < a < 1$ 时, $f(x)$ 的极小值点 $x = 1$ , 则 $g(x)$ 的极小值点为 $x = 1$ , 由于 $p(x) = 0$ 有一正一负两实根, 不妨设 $x_{2} < 0 < x_{1}$ , 所以 $0 < x_{1} < 1$ , 即 $p(1) = 3 + 2b + 3 - 1 > 0$ , 故 $b > -\\frac{5}{2}$ . 此时 $g(x)$ 的极大值点 $x = x_{1}$ , 有

$$
\\begin{array}{l} g (x _ {1}) = x _ {1} ^ {3} + b x _ {1} ^ {2} - (2 b + 4) x _ {1} + \\ln x _ {1} <   1 + b x _ {1} ^ {2} - (2 b + 4) x _ {1} \\\\ = (x _ {1} ^ {2} - 2 x _ {1}) b - 4 x _ {1} + 1 (x _ {1} ^ {2} - 2 x _ {1} <   0) <   - \\frac {5}{2} (x _ {1} ^ {2} - 2 x _ {1}) - 4 x _ {1} + 1 \\\\ = - \\frac {5}{2} x _ {1} ^ {2} + x _ {1} + 1 = - \\frac {5}{2} \\left(x _ {1} - \\frac {1}{5}\\right) ^ {2} + 1 + \\frac {1}{1 0} (0 <   x _ {1} <   1) \\leqslant \\frac {1 1}{1 0} <   \\frac {5}{4}. \\\\ \\end{array}
$$

综上所述， $g(x)$ 的极大值小于等于 $\\frac{5}{4}$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-2-5",
    topicId: "topic-sec-4-2",
    title: `已知函数 f(x)=x^3+ax 与`,
    content: `已知函数 $f(x)=x^{3}+ax$ 与 $g(x)=bx^{2}+c$ 的图像有一个公共点 $P(t,0)$ $(t>0)$ ，且这两函数的图像在点 P 处有相同的切线.
(1)求 $\\frac{a}{b}+\\frac{c}{a}$ 的值；
(2) 若函数 $y = f(x) - g(x)$ 在区间 $[0, 3]$ 上的最小值为 0，求 t 的取值范围；
(3) 设 $h(x)=|f(x)|, x \\in [-1,1]$ ，求 $h(x)$ 最大值 $H(a)$ 的解析式.`,
    preview: `已知函数 f(x)=x^3+ax 与 g(x)=bx^2+c 的图像有一个公共点 P(t,0) (t>0) ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-2-5-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 因为函数 $f(x), g(x)$ 的图像都过点 $(t,0)$ ，所以 $f(t) = 0$ ，即 $t^3 + at = 0$ . 因为 $t \\neq 0$ ，所以 $a = -t^2$ .

$g(t) = 0$ ，即 $bt^{2} + c = 0$ ，所以 $c = -bt^{2}$

又因为 $f(x)$ , $g(x)$ 在点 $(t,0)$ 处有相同的切线，所以 $f'(t)=g'(t)$ .

而 $f'(x)=3x^{2}+a, g'(x)=2bx$ ，所以 $3t^{2}+a=2bt$ .

将 $a = -t^{2}$ 代入上式, 得 b = t. 因此, $c = -bt^{2} = -t^{3}$ .

故 $a = -t^2, b = t, c = -t^3$ . 因此， $\\frac{a}{b} + \\frac{c}{a} = 0$ .

(2) $y=f(x)-g(x)=x^{3}-t^{2}x-tx^{2}+t^{3},y^{\\prime}=3x^{2}-2tx-t^{2}=(3x+t)(x-t),$

①当 $0 < t < 3$ 时，该函数在 $[0, t]$ 上递减，在 $(t, 3]$ 上递增，因此 $y_{\\min} = f(t) - g(t) = 0$ .
② 当 $t \\geqslant 3$ 时，该函数在 $[0,3]$ 上递减，因此， $y_{\\min} = f(3) - g(3) = 27 - 3t^2 - 9t + t^3$ ，由已知条件知 $27 - 3t^2 - 9t + t^3 = 0$ ，因式分解，得 $(t - 3)^2 (t + 3) = 0$ ，由 $t > 0$ 得 $t = 3$ .

综上所述，t 的取值范围为 $(0,3]$ .

另解 $y=f(x)-g(x)=x^{3}-t^{2}x-tx^{2}+t^{3}=(x-t)^{2}(x+t)\\geqslant0$ ，而 $x+t>0$ ，

因此，x=t，又 t>0，故 t 的取值范围为 $(0,3]$ .

(3) $f(x)$ 为奇函数且 $f'(x)=3x^{2}+a$ ，由(1)知a<0，此时 $f'(x)=3x^{2}+a=0$ 有两个不同的实数根 $x_{1}=-\\sqrt{-\\frac{a}{3}},x_{2}=\\sqrt{-\\frac{a}{3}}$ ，且 $f(x)$ 分别在 $x_{1}=-\\sqrt{-\\frac{a}{3}},x_{2}=\\sqrt{-\\frac{a}{3}}$ 处取得极大值与极小值，注意到 $h(x)$ 为偶函数，因此，只要考虑 $h(x)$ 在 $[0,1]$ 上的最大值.

易知 $h(x)$ 在 $\\left[0, \\sqrt{-\\frac{a}{3}}\\right]$ 和 $\\left[\\sqrt{-a}, +\\infty\\right)$ 单调递增，而在 $\\left[\\sqrt{-\\frac{a}{3}}, \\sqrt{-a}\\right]$ 单调递减.

(i) 当 $\\sqrt{-\\frac{a}{3}} \\geqslant 1$ ，即 $a \\leqslant -3$ 时，

$h(x)$ 在 $[0,1]$ 单调递增，此时， $H(a)=|f(\\pm1)|=|1+a|=-1-a$

(ii) 当 $\\sqrt{-\\frac{a}{3}} < 1 < \\sqrt{-a}$ ，即 -3 < a < -1 时，

$$
H (a) = \\left| f \\left(\\pm \\sqrt {- \\frac {a}{3}}\\right) \\right| = \\left| \\frac {2}{3} a \\sqrt {- \\frac {a}{3}} \\right| = - \\frac {2}{3} a \\sqrt {- \\frac {a}{3}}.
$$

(iii) 当 $\\sqrt{-a} \\leqslant 1$ ，即 $-1 \\leqslant a < 0$ 时，

$$
H (a) = \\max \\left\\{| f (\\pm 1) |, \\left| f \\left(\\pm \\sqrt {- \\frac {a}{3}}\\right) \\right| \\right\\} = \\max \\left\\{| 1 + a |, \\left| \\frac {2}{3} a \\sqrt {- \\frac {a}{3}} \\right| \\right\\},
$$

令 $t = \\sqrt{-\\frac{a}{3}}$ ，则 $0 < t \\leqslant \\frac{\\sqrt{3}}{3}, |1 + a| = 1 - 3t^2, \\left|\\frac{2}{3} a \\sqrt{-\\frac{a}{3}}\\right| = 2t^3,$

$$
2 t ^ {3} - (1 - 3 t ^ {2}) = (t + 1) ^ {2} (2 t - 1),
$$

所以，当 $0 < t \\leqslant \\frac{1}{2}$ ，即 $-\\frac{3}{4} \\leqslant a < 0$ 时， $2t^3 \\leqslant (1 - 3t^2)$ ，此时 $H(a) = 1 + a$ .

当 $\\frac{1}{2}<t\\leqslant\\frac{\\sqrt{3}}{3}$ ，即 $-1<a\\leqslant-\\frac{3}{4}$ 时， $2t^{3}>(1-3t^{2})$ ，此时 $H(a)=-\\frac{2}{3}a\\sqrt{-\\frac{a}{3}}$ .

综上所述， $H(a)=\\left\\{\\begin{aligned}&1+a\\left(-\\frac{3}{4}\\leqslant a<0\\right),\\\\ &-\\frac{2}{3}a\\sqrt{-\\frac{a}{3}}\\left(-3<a<-\\frac{3}{4}\\right),\\\\ &-1-a\\left(a\\geqslant-3\\right).\\end{aligned}\\right.$

评注 本题系笔者为杭二中2009年5月月考命制的压轴题,巧的是与2012年浙江省高考压轴题无论是考查知识点还是考查方法都有几分“神似”.更让人振奋的是,2013年高考浙江卷理科压轴题与本题几乎同源,将2013年高考题中的函数 $f(x)=x^{3}-3x^{2}+3ax-3a+3$ 的图像向左平移1个单位,再向下平移1个单位,可得函数 $y=x^{3}+3(a-1)x$ ,令 $b=3(a-1)$ ,则 $y=x^{3}+bx$ ,同本题系同一函数.

▲附 2013 年高考浙江卷第 22 题：

已知 $a \\in \\mathbf{R}$ , 函数 $f(x) = x^3 - 3x^2 + 3ax - 3a + 3$ .

(1) 求曲线 $y = f(x)$ 在点 $(1, f(1))$ 处的切线方程；

(2) 当 $x \\in [0,2]$ 时，求 $|f(x)|$ 的最大值.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-2-6",
    topicId: "topic-sec-4-2",
    title: `设函数 f(x)=1-e^-x`,
    content: `设函数 $f(x)=1-\\mathrm{e}^{-x}$ ,
(1) 当 x > -1 时, 证明: $f(x) \\geqslant \\frac{x}{x+1}$ ;

(2)设当 $x \\geqslant 0$ 时, $f(x) \\leqslant \\frac{x}{ax + 1}$ , 求 $a$ 的取值范围.`,
    preview: `设函数 f(x)=1-e^-x , (1) 当 x > -1 时, 证明: f(x) ≥ x/x+1 ; (2)设当 x ≥ 0 时,`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-2-6-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 当 $x > -1$ 时, $f(x) \\geqslant \\frac{x}{x + 1}$ 当且仅当 $\\mathrm{e}^x \\geqslant 1 + x$ .

令 $g(x) = \\mathrm{e}^{x} - x - 1$ ，则 $g^{\\prime}(x) = \\mathrm{e}^{x} - 1.$

当 $x \\geqslant 0$ 时， $g'(x) \\geqslant 0, g(x)$ 在 $[0, +\\infty)$ 是增函数；

当 $x \\leqslant 0$ 时， $g'(x) \\leqslant 0, g(x)$ 在 $(- \\infty, 0]$ 是减函数.

于是 $g(x)$ 在 $x = 0$ 处达到最小值，因而，当 $x \\in \\mathbb{R}$ 时， $g(x) \\geqslant g(0), e^x \\geqslant 1 + x$ .

所以当 x > -1 时, $f(x) \\geqslant \\frac{x}{x+1}$ .

(2)由题设 $x \\geqslant 0$ ，此时 $f(x) \\geqslant 0$ .

当 $a < 0$ 时，若 $x > -\\frac{1}{a}$ ，则 $\\frac{x}{ax + 1} < 0, f(x) \\leqslant \\frac{x}{ax + 1}$ 不成立.

当 $a \\geqslant 0$ 时，令 $h(x) = axf(x) + f(x) - x$ ，则 $f(x) \\leqslant \\frac{x}{ax + 1}$ 当且仅且 $h(x) \\leqslant 0$ .

$$
h ^ {\\prime} (x) = a f (x) + a x f ^ {\\prime} (x) + f ^ {\\prime} (x) - 1 = a f (x) - a x f (x) + a x - f (x).
$$

(i) 当 $0 \\leqslant a \\leqslant \\frac{1}{2}$ 时，由(1)知 $x \\leqslant (x + 1)f(x)$ ，

$$
h ^ {\\prime} (x) \\leqslant a f (x) - a x f (x) + a (x + 1) f (x) - f (x) = (2 a - 1) f (x) \\leqslant 0,
$$

$h(x)$ 在 $[0,+\\infty)$ 是减函数， $h(x)\\leqslant h(0)=0$ ，即 $f(x)\\leqslant\\frac{x}{ax+1}$ .

(ii) 当 $a > \\frac{1}{2}$ 时，由(1)知 $x \\geqslant f(x)$ .

$$
\\begin{array}{l} h ^ {\\prime} (x) = a f (x) - a x f (x) + a x - f (x) \\\\ \\geqslant a f (x) - a x f (x) + a f (x) - f (x) = (2 a - 1 - a x) f (x). \\\\ \\end{array}
$$

当 $0 < x < \\frac{2a - 1}{a}$ 时， $h'(x) > 0$ ，所以 $h(x) > h(0) = 0$ ，即 $f(x) > \\frac{x}{ax + 1}$ .

综上，a 的取值范围是 $[0, \\frac{1}{2}]$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-2-7",
    topicId: "topic-sec-4-2",
    title: `已知函数 f(x)=e^x-ax 且 a≠0`,
    content: `已知函数 $f(x)=\\mathrm{e}^{x}-ax(a\\neq0)$ .
(1) 讨论 $f(x)$ 的零点个数.

(2) 若 $f(x)$ 有两个零点 $x_{1}, x_{2}$ ，且 $x_{1} < x_{2}$ ，证明： $x_{1} + x_{2} > 2$ .`,
    preview: `已知函数 f(x)=e^x-ax 且 a≠0，讨论零点个数，并证明两个零点之和大于 2。`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-2-7-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1) 对已知函数求导, 得 $f'(x)=\\mathrm{e}^{x}-a$ .

①若 a<0，则 $f'(x)>0$ ， $f(x)$ 单调递增.

又 $f(0) = 1 > 0, f\\left(\\frac{1}{a}\\right) = \\mathrm{e}^{\\frac{1}{a}} - 1 < 0$ ，此时 $f(x)$ 有一个零点.

②若 $a > 0$ ，当 $x < \\ln a$ 时， $f'(x) < 0, f(x)$ 单调递减；当 $x > \\ln a$ 时， $f'(x) > 0, f(x)$ 单调递增. 从而 $f(x)_{\\min} = f(\\ln a) = a(1 - \\ln a)$ .

(i) 当 0 < a < e 时, $f(x) > 0$ , 故 $f(x)$ 无零点;

(ii) 当 a=e 时, $f(x)_{\\min}=0$ , 故 $f(x)$ 有唯一零点;

(iii) 当 $a > \\mathrm{e}$ 时, $f(0) = 1 > 0$ , $f(\\ln a) < 0$ , $f(a) = \\mathrm{e}^a - a^2 > 0$ , 故 $f(x)$ 有两个零点.

(2)`,
      },
      {
        id: "prob-sec-4-2-7-sol-1",
        title: `解法一`,
        method: "creative",
        steps: [],
        explanation: `(构造函数后利用单调性)

由 $f(x) = 0$ ，得 $\\frac{x}{\\mathrm{e}^x} = \\frac{1}{a}$ .令 $g(x) = \\frac{x}{\\mathrm{e}^x}$ ，得 $g^{\\prime}(x) = \\frac{1 - x}{\\mathrm{e}^{x}}.$

当 x<1 时， $g'(x)>0$ ， $g(x)$ 单调递增；当 x>1 时， $g'(x)<0$ ， $g(x)$ 单调递减.

由(1)知 $0 < \\frac{1}{a} < \\frac{1}{e}$ ,

而 $g(0)=0$ ，因此有 $0<x_{1}<1<x_{2},2-x_{2}<1$ .

要证 $x_{1} + x_{2} > 2$ ，可证 $x_{1} > 2 - x_{2}$ ，只需证 $g(x_{1}) > g(2 - x_{2})$

即证 $g(x_{2})>g(2-x_{2})$ .

构造函数 $h(x)=g(x)-g(2-x)$ , x>1,

求导得 $h'(x)=(x-1)(\\mathrm{e}^{x-2}-\\mathrm{e}^{-x})>0$ ,

因此 $h(x) > h(1) = 0$ . 得证.`,
      },
      {
        id: "prob-sec-4-2-7-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `(变双变量为新变量)

由于 $f(x)=0$ 有两个不等实根，则有 $\\left\\{\\begin{aligned}e^{x_{1}}&=ax_{1},\\\\ e^{x_{2}}&=ax_{2},\\end{aligned}\\right.$ $x_{2}-x_{1}=\\ln\\frac{x_{2}}{x_{1}}$

令 $t = \\frac{x_2}{x_1} > 1$ ，由上式有 $\\begin{cases} x_1 = \\frac{\\ln t}{t-1}, \\\\ x_2 = \\frac{t\\ln t}{t-1}, \\end{cases}$

即证 $\\frac{(t+1)\\ln t}{t-1}>2$ ，即 $\\ln t>\\frac{2(t-1)}{t+1}$ ，

显然成立.`,
      },
      {
        id: "prob-sec-4-2-7-sol-3",
        title: `解法三`,
        method: "standard",
        steps: [],
        explanation: `(变常数或参数为双变量)

处理极值点偏移问题时,还可以将不等号右侧的常数或参数通过零点的相关性质变为双变量的形式,与不等号左侧的双变量形式一同处理,找到结构的共性后换元处理.

由 $f(x) = 0$ 有两个不等实根，得 $\\left\\{ \\begin{array}{l} \\mathrm{e}^{x_1} = ax_1, \\\\ e^{x_2} = ax_2, \\end{array} \\right.$

从而 $x_{2} - x_{1} = \\ln \\frac{x_{2}}{x_{1}}$ ，即 $\\frac{x_2 - x_1}{\\ln\\frac{x_2}{x_1}} = 1.$

要证 $x_{1} + x_{2} > 2$ ，即证 $x_{1} + x_{2} > \\frac{2(x_{2} - x_{1})}{\\ln\\frac{x_{2}}{x_{1}}}$ 即

$\\ln \\frac{x_2}{x_1} >\\frac{2(x_2 - x_1)}{x_2 + x_1} = \\frac{2\\left(\\frac{x_2}{x_1} - 1\\right)}{\\frac{x_2}{x_1} + 1}.$ 令 $t = \\frac{x_2}{x_1} >1$ ，即证 $\\ln t > \\frac{2(t - 1)}{t + 1}$

显然成立.`,
      },
      {
        id: "prob-sec-4-2-7-sol-4",
        title: `解法二`,
        method: "creative",
        steps: [],
        explanation: `是将原本的零点双变量所构成的一个整体替换为一个新的变量,通过换元构造了新函数,进而研究新函数的性质.我们也可以熟记一个重要的不等式:

$\\ln x > \\frac{2(x - 1)}{x + 1}$ （其中 $x > 1$ ）.

另一种处理方式: 令 $z = x_{2} - x_{1} > 0$ ，因此 $e^{z} = 1 + \\frac{z}{x_{1}}$ ，则有 $\\left\\{\\begin{aligned} & x_{1} = \\frac{z}{e^{z}-1}, \\\\ & x_{2} = z + \\frac{z}{e^{z}-1},\\end{aligned}\\right.$

即证 $\\frac{z}{e^{z}-1}+z+\\frac{z}{e^{z}-1}>2$ ，整理有 $2+z>(2-z)e^{z}$ ，构造函数求导即可.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-2-8",
    topicId: "topic-sec-4-2",
    title: `函数 f(x) 是定义在 [-1, 1] 上的偶函数`,
    content: `函数 $f(x)$ 是定义在 $[-1, 1]$ 上的偶函数；当 $x \\in [-1, 0]$ 时， $f(x) = \\frac{1}{\\mathrm{e}^{2x}} - \\frac{a}{\\mathrm{e}^x}$ ，其中 $a \\in \\mathbf{R}$ .
(1) 求 $f(x)$ 在 $[0,1]$ 上的解析式，并求出函数 $f(x)$ 的最大值.

(2) 当 $a \\neq 0, x \\in [0,1]$ 时，函数 $g(x) = \\left(\\frac{x^2}{a} + x - 2 - \\frac{3}{a}\\right)\\left[\\mathrm{e}^{2x} - f(x)\\right]$ ，若 $g(x)$ 的图像恒在直线 $y = \\mathrm{e}$ 上方，求实数 $a$ 的取值范围（ $\\mathrm{e}$ 为自然对数的底数， $\\mathrm{e} = 2.71828\\cdots$ ）.

(1)解法一 任取 $x \\in [0,1]$ , 则 $-x \\in [-1,0], f(-x) = \\frac{1}{\\mathrm{e}^{-2x}} - \\frac{a}{\\mathrm{e}^{-x}} = \\mathrm{e}^{2x} - a\\mathrm{e}^x$ ,

又 $f(x)$ 是偶函数，故 $x \\in [0,1]$ 时， $f(x) = f(-x) = \\mathrm{e}^{2x} - a\\mathrm{e}^x$ .

由 $f(x)$ 是定义域为 $[-1, 1]$ 的偶函数可知， $f(x)$ 在 $x \\in [0, 1]$ 的最大值即可为 $f(x)$ 的最大值.

当 $x \\in [0,1]$ 时，令 $t = \\mathrm{e}^x \\in [1,\\mathrm{e}], f(x) = h(t) = \\left(t - \\frac{a}{2}\\right)^2 -\\frac{a^2}{4}$ .

当 $\\frac{a}{2}\\leqslant\\frac{e+1}{2}$ ，即 $a\\leqslant e+1$ 时， $f_{\\max}(x)=h(e)=f(1)=e^{2}-ae;$

当 $\\frac{a}{2} >\\frac{\\mathrm{e} + 1}{2}$ ，即 $a > \\mathrm{e} + 1$ 时， $f_{\\max}(x) = h(1) = f(0) = 1 - a.$

综上可知：

$a \\leqslant e + 1$ 时， $f_{\\max}(x) = f(1) = e^2 - ae; a > e + 1$ 时， $f_{\\max}(x) = f(0) = 1 - a.$`,
    preview: `函数 f(x) 是定义在 [-1, 1] 上的偶函数；当 x [-1, 0] 时， f(x) = 1/e^2x - a/e^x ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-2-8-sol-0",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `由 $f(x)$ 是定义域为 $[-1, 1]$ 的偶函数可知， $f(x)$ 在 $x \\in [0, 1]$ 的最大值，即可为 $f(x)$ 的最大值.

当 $x \\in [0,1]$ 时， $f(x) = \\mathrm{e}^{2x} - a\\mathrm{e}^x \\Rightarrow f'(x) = 2\\mathrm{e}^{2x} - a\\mathrm{e}^x = \\mathrm{e}^x (2\\mathrm{e}^x - a)$ ，

当 $a \\leqslant 0$ 时， $f'(x)$ 恒大于0，故 $f(x)$ 在区间[0,1]单调递增.

此时， $f_{\\max}(x)=f(1)=\\mathrm{e}^{2}-ae$

当 $a > 0$ 时， $f'(x) = \\mathrm{e}^x (2\\mathrm{e}^x - a) = 0 \\Rightarrow x = \\ln \\frac{a}{2}$ .

①当 $\\ln\\frac{a}{2}\\leqslant0$ , 即 $0<a\\leqslant2$ 时, 可得 $x\\in[0,1]$ 时 $f'(x)>0$

故 $f(x)$ 在区间 $[0,1]$ 单调递增. 此时 $f_{\\max}(x)=f(1)=\\mathrm{e}^{2}-a\\mathrm{e}$ .

② 当 $0 < \\ln \\frac{a}{2} \\leqslant 1$ ，即 $2 < a \\leqslant 2\\mathrm{e}$ 时，可得当 $x \\in \\left[0, \\ln \\frac{a}{2}\\right]$ 时 $f'(x) \\leqslant 0$ ，当 $x \\in \\left[\\ln \\frac{a}{2}, 1\\right]$ 时 $f'(x) \\geqslant 0$ ，可知 $f(x)$ 在区间 $\\left[0, \\ln \\frac{a}{2}\\right]$ 上单调递减，在区间 $\\left[\\ln \\frac{a}{2}, 1\\right]$ 上单调递增.

又 $f(1)>f(0)\\Rightarrow a<\\mathrm{e}+1$ ; 故 $2<a\\leqslant e+1$ 时 $f_{\\max}(x)=f(1)=\\mathrm{e}^{2}-ae$ ;

$e+1<a\\leqslant2e$ 时 $f_{\\max}(x)=f(0)=1-a.$

③ $\\ln\\frac{a}{2}>1$ , 即 a>2e 时, 可得 $x\\in[0,1]$ 时 $f(x)<0$ ,

可知 $f(x)$ 在区间 $[0,1]$ 单调递减. 此时 $f_{\\max}(x)=f(0)=1-a$ .

综上可知： $a\\leqslant \\mathrm{e} + 1$ 时， $f_{\\max}(x) = f(1) = \\mathrm{e}^2 -a\\mathrm{e};a > \\mathrm{e} + 1$ 时， $f_{\\max}(x) = f(0) = 1 - a.$

(2)`,
      },
      {
        id: "prob-sec-4-2-8-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `$g(x)=\\left(\\frac{x^{2}}{a}+x-2-\\frac{3}{a}\\right)\\left[\\mathrm{e}^{2x}-f(x)\\right]$

$$
= \\left(\\frac {x ^ {2}}{a} + x - 2 - \\frac {3}{a}\\right) \\cdot a \\mathrm{e} ^ {x} = (x ^ {2} + a x - 2 a - 3) \\mathrm{e} ^ {x}.
$$

要 $x \\in [0,1]$ 时，函数 $g(x)$ 的图像恒在直线 y = e 上方，则 $(x^{2} + ax - 2a - 3)e^{x} > e$ ，

当 $x \\in [0,1]$ 时，恒成立. 所以 $a < \\frac{-x^{2} + 3 + e^{1-x}}{x - 2}$ ,

$h(x) = \\frac{-x^2 + 3 + \\mathrm{e}^{1 - x}}{x - 2}$ , 令 $1 - x = t$ , 所以 $x = 1 - t$ ,

因为 $e^{t} \\geqslant t + 1$ ，所以，

$$
h (x) = m (t) = \\frac {- (1 - t) ^ {2} + 3 + \\mathrm{e} ^ {t}}{- t - 1} \\geqslant \\frac {- (1 - t) ^ {2} + 3 (t + 1)}{- t - 1} = \\frac {t ^ {2} - 5 t - 2}{t + 1},
$$

所以， $h(t)=(t+1)+\\frac{4}{t+1}-7\\geqslant-3$ ，当 $t+1=2,t=1,x=0$ 时等号成立.

当 a<-3 时, $g(x)$ 的图像恒在直线 y=e 上方.`,
      },
      {
        id: "prob-sec-4-2-8-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `$g(x) = \\left(\\frac{x^2}{a} + x - 2 - \\frac{3}{a}\\right)\\left[\\mathrm{e}^{2x} - f(x)\\right]$

$$
= \\left(\\frac {x ^ {2}}{a} + x - 2 - \\frac {3}{a}\\right) \\cdot a \\mathrm{e} ^ {x} = (x ^ {2} + a x - 2 a - 3) \\mathrm{e} ^ {x}.
$$

当 $x \\in [0,1]$ 时，函数 $g(x)$ 的图像恒在直线 y = e 上方，即 $x \\in [0,1]$ 时， $g_{\\min}(x) > e$ 恒成立.

$g^{\\prime}(x) = (x + a + 3)(x - 1)\\mathrm{e}^{x}$ ，令 $g^{\\prime}(x) = 0$ ，解得 $x_{1} = -a - 3,x_{2} = 1$

①当 $-a-3\\leqslant0$ ，即 $a\\geqslant-3$ 且 $a\\neq0$ 时，可得 $x\\in[0,1]$ 时 $g'(x)\\leqslant0$ ，

故 $g(x)$ 在区间 $[0,1]$ 单调递减.

此时， $g_{\\min}(x)=g(1)=(-2-a)e>e\\Rightarrow a<-3$ ，与 $a\\geqslant-3$ 且 $a\\neq0$ 矛盾.

②当 0<-a-3<1, 即 -4<a<-3 时,

可得 $x \\in [0, -a-3]$ 时 $g'(x) \\geqslant 0, x \\in [-a-3,1]$ 时 $g'(x) \\leqslant 0,$

可知 $g(x)$ 在区间 $[0, -a-3]$ 单调递增，在区间 $[-a-3,1]$ 单调递减.

此时 $g_{\\min}(x) > e \\Leftrightarrow g(0) > e$ ，且 $g(1) > e$ ，

又 $g(0) = -2a - 3 > \\mathrm{e} \\Rightarrow a < \\frac{-\\mathrm{e} - 3}{2}, g(1) > \\mathrm{e} \\Rightarrow a < -3$ ，故 $-4 < a < -3$ 时可满足题意.

③ $-a-3\\geqslant1$ ，即 $a\\leqslant-4$ 时，可得 $x\\in[0,1]$ 时 $g'(x)\\geqslant0$ ，

可知 $g(x)$ 在区间 $[0,1]$ 单调递增.

此时 $g_{\\min}(x)=g(0)=-2a-3>\\mathrm{e}\\Rightarrow a<\\frac{-\\mathrm{e}-3}{2}$ ，又 $a\\leqslant-4$ ，故 $a\\leqslant-4$ 时可满足题意.

综上可知: 当 a<-3 时, $g(x)$ 的图像恒在直线 y=e 上方.

事实上,可对函数 $y=(ax^{2}+bx+c)\\mathrm{e}^{x+m}$ 的性质进行深入的研究:

函数 $y = (ax^2 + bx + c)e^{x + m} (a \\neq 0, x \\in \\mathbf{R})$ 与二次函数 $y = ax^2 + bx + c (a \\neq 0, x \\in \\mathbf{R})$ 有着千丝万缕的关系，下面讨论函数 $y = (ax^2 + bx + c)e^{x + m} (a \\neq 0, x \\in \\mathbf{R})$ 的性质和图像以及运用.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-2-9",
    topicId: "topic-sec-4-2",
    title: `已知函数 f(x)=ax ln x 且 a≠0`,
    content: `已知函数 $f(x)=ax\\ln x(a\\neq0)$ .
(1) 求函数 $f(x)$ 的单调区间和最值；
(2) 若 $m > 0, n > 0, a > 0$ ，证明： $f(m) + f(n) \\geqslant f(m + n) - a(m + n)\\ln 2$ .`,
    preview: `已知函数 f(x)=ax ln x 且 a≠0，求单调区间和最值，并证明相关对数不等式。`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-2-9-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) $f'(x)=a\\ln x+a(x>0)$ ,

当 $a > 0$ 时，令 $f^{\\prime}(x)\\geqslant 0$ ，即 $\\ln x\\geqslant -1 = \\ln \\mathrm{e}^{-1}$

所以 $x \\geqslant \\mathrm{e}^{-1} = \\frac{1}{\\mathrm{e}}$ ，所以 $x \\in \\left[\\frac{1}{\\mathrm{e}}, +\\infty\\right)$ . 同理，令 $f'(x) \\leqslant 0$ ，可得 $x \\in \\left(0, \\frac{1}{\\mathrm{e}}\\right]$ .

所以 $f(x)$ 单调递增区间为 $\\left[\\frac{1}{\\mathrm{e}}, + \\infty\\right)$ ，单调递减区间为 $\\left(0, \\frac{1}{\\mathrm{e}}\\right]$ .

由此可知 $y = f(x)_{\\min} = f\\left(\\frac{1}{\\mathrm{e}}\\right) = -\\frac{a}{\\mathrm{e}}, f(x)$ 无最大值.

当 $a < 0$ 时，令 $f'(x) \\geqslant 0$ ，即 $\\ln x \\leqslant -1 = \\ln e^{-1}$ ，所以 $x \\leqslant e^{-1} = \\frac{1}{e}$ ，所以 $x \\in \\left(0, \\frac{1}{e}\\right]$ .

同理，令 $f^{\\prime}(x)\\leqslant 0$ 可得 $x\\in \\left[\\frac{1}{\\mathrm{e}}, + \\infty\\right)$

所以 $f(x)$ 单调递增区间为 $\\left(0, \\frac{1}{\\mathrm{e}}\\right]$ ，单调递减区间为 $\\left[\\frac{1}{\\mathrm{e}}, +\\infty\\right)$ .

由此可知 $y = f(x)_{\\max} = f\\left(\\frac{1}{\\mathrm{e}}\\right) = -\\frac{a}{\\mathrm{e}}$ ，此时 $f(x)$ 无最小值.

(2)证法一 不妨设 $m \\geqslant n > 0$ ，令 n = x，

记 $g(x) = am\\ln m + ax\\ln x - a(m + x)\\ln \\frac{m + x}{2} (x > 0),$

$g^{\\prime}(x) = a\\ln x + a - a\\ln \\frac{m + x}{2} -a = a\\ln \\frac{2x}{m + x}.$ 因为 $m + x\\geqslant 2x$ ，所以 $\\frac{2x}{m + x}\\leqslant 1,$

所以 $a \\ln \\frac{2x}{m + x} \\leqslant 0$ ，所以 $g'(x) \\leqslant 0$ ，所以 $g(x)$ 是减函数。

因为 $m \\geqslant x > 0$ ，所以 $g(x) \\geqslant g(m) = 0$ ，

所以 $g(x)=am\\ln m+ax\\ln x-a(m+x)\\ln\\frac{m+x}{2}\\geqslant0$ , 即得证.

证法二 不妨设 $m \\geqslant n > 0$ ，则 $m = kn (k \\geqslant 1)$ ，

左边一右边 $= a[m\\ln m + n\\ln n + (m + n)\\ln 2 - (m + n)\\ln (m + n)]$

$$
= a \\left[ k n \\ln k n + n \\ln n + (k + 1) n \\ln \\frac {2}{(k + 1) n} \\right]
$$

$$
= a \\Big [ k n \\ln k + (k + 1) n \\ln \\frac {2}{(k + 1)} \\Big ] = a n \\Big [ k \\ln k + (k + 1) \\ln \\frac {2}{(k + 1)} \\Big ].
$$

令 $g(k) = k\\ln k + (k + 1)\\ln \\frac{2}{(k + 1)}$ ，则

$$
g ^ {\\prime} (x) = \\ln k + 1 + \\ln \\frac {2}{(k + 1)} + (k + 1) \\cdot \\frac {(k + 1)}{2} \\cdot \\left(- \\frac {2}{(k + 1) ^ {2}}\\right)
$$

$$
= \\ln k + \\ln \\frac {2}{(k + 1)} = \\ln \\frac {2 k}{(k + 1)} \\geqslant 0,
$$

所以 $g(k) \\geqslant g(1) = 0$ . 又因为 $a > 0, n > 0$ , 所以左边一右边 $\\geqslant 0$ , 得证.

证法三 利用凸函数的性质, $f(m)+f(n)\\geqslant f(m+n)-a(m+n)\\ln2$ 等价于 $\\frac{m\\ln m+n\\ln n}{2}\\geqslant\\frac{m+n}{2}\\ln\\frac{m+n}{2}$ ，令 $g(x)=x\\ln x$ ，注意到 $g''(x)=\\frac{1}{x}$ ，

当 x>0 时， $g''(x)>0$ ，所以 $g(x)$ 为定义域上的下凸函数。

由琴生不等式, 得 $\\frac{g(m)+g(n)}{2}>g\\left(\\frac{m+n}{2}\\right)$ , 代入证得.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-2-10",
    topicId: "topic-sec-4-2",
    title: `设函数 f(x)=(x-a)^2 x, a`,
    content: `设函数 $f(x)=(x-a)^{2}\\ln x, a\\in\\mathbb{R}$ .
(1) 若 x = e 为 $y = f(x)$ 的极值点, 求实数 a;
(2) 求实数 a 的取值范围, 使得对任意的 $x \\in (0, 3e]$ , 恒有 $f(x) \\leqslant 4e^{2}$ 成立.`,
    preview: `设函数 f(x)=(x-a)^2 x, a . (1) 若 x = e 为 y = f(x) 的极值点, 求实数 a; (2) 求实数 a 的取值范围, 使得对`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-2-10-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)求导得 $f'(x)=2(x-a)\\ln x+\\frac{(x-a)^{2}}{x}=(x-a)\\left(2\\ln x+1-\\frac{a}{x}\\right)$ .

因为 x=e 是 $f(x)$ 的极值点，所以 $f'(\\mathrm{e})=(\\mathrm{e}-a)\\left(3-\\frac{a}{\\mathrm{e}}\\right)=0$ ，解得 a=e 或 a=3e.

经检验,符合题意,所以 a=e 或 a=3e.

(2)①当 $0 < x \\leqslant 1$ 时, 对于任意的实数 a, 恒有 $f(x) \\leqslant 0 < 4e^{2}$ 成立.

②当 $1 < x \\leqslant 3e$ 时，由题意，首先有 $f(3e) = (3e - a)^{2} \\ln(3e) \\leqslant 4e^{2}$ ,

解得 $3\\mathrm{e} - \\frac{2\\mathrm{e}}{\\sqrt{\\ln(3\\mathrm{e})}}\\leqslant a\\leqslant 3\\mathrm{e} + \\frac{2\\mathrm{e}}{\\sqrt{\\ln(3\\mathrm{e})}}.$ 由(1)知 $f^{\\prime}(x) = (x - a)\\left(2\\ln x + 1 - \\frac{a}{x}\\right),$

令 $h(x) = 2\\ln x + 1 - \\frac{a}{x}$ ，则 $h(1) = 1 - a < 0, h(a) = 2\\ln a > 0$

且 $h(3\\mathrm{e}) = 2\\ln (3\\mathrm{e}) + 1 - \\frac{a}{3\\mathrm{e}}\\geqslant 2\\ln (3\\mathrm{e}) + 1 - \\frac{3\\mathrm{e} + \\frac{2\\mathrm{e}}{\\sqrt{\\ln(3\\mathrm{e})}}}{3\\mathrm{e}} = 2\\left[\\ln (3\\mathrm{e}) - \\frac{1}{3\\sqrt{\\ln(3\\mathrm{e})}}\\right] > 0.$

又 $h(x)$ 在 $(0, +\\infty)$ 上单调递增，所以函数 $h(x)$ 在 $(0, +\\infty)$ 上有唯一零点，记此零点为 $x_0$ ，则 $1 < x_0 < 3\\mathrm{e}, 1 < x_0 < a$ .

从而，当 $x \\in (0, x_0)$ 时， $f'(x_1) > 0$ ；当 $x \\in (x_0, a)$ 时， $f'(x) < 0$ ；当 $x \\in (a, +\\infty)$ 时， $f'(x) > 0$ 。即 $f(x)$ 在 $(0, x_0)$ 上单调递增，在 $(x_0, a)$ 上单调递减，在 $(a, +\\infty)$ 上单调递增。

所以要使 $f(x) \\leqslant 4e^{2}$ 对 $x \\in (1, 3e]$ 恒成立，只要

$$
\\left\\{ \\begin{array}{l l} f (x _ {0}) = (x _ {0} - a) ^ {2} \\ln x _ {0} \\leqslant 4 \\mathrm{e} ^ {2}, & \\\\ f (3 \\mathrm{e}) = (3 \\mathrm{e} - a) ^ {2} \\ln (3 \\mathrm{e}) \\leqslant 4 \\mathrm{e} ^ {2} & \\end{array} \\right. \\tag {①}
$$

成立.

由 $h(x_0) = 2\\ln x_0 + 1 - \\frac{a}{x_0} = 0$ ，知 $a = 2x_{0}\\ln x_{0} + x_{0}$

将③代入①，得 $4x_0^2\\ln^3 x_0 \\leqslant 4\\mathrm{e}^2$ 。又 $x_0 > 1$ ，注意到函数 $x^2\\ln^3 x$ 在 $[1, +\\infty)$ 上单调递增，故 $1 < x_0 \\leqslant \\mathrm{e}$ 。

再由③以及函数 $2x\\ln x + x$ 在 $(1, +\\infty)$ 上单调递增，可得 $1 < a \\leqslant 3e$ .

由②解得， $3e-\\frac{2e}{\\sqrt{\\ln(3e)}}\\leqslant a\\leqslant3e+\\frac{2e}{\\sqrt{\\ln(3e)}}$ . 所以 $3e-\\frac{2e}{\\sqrt{\\ln(3e)}}\\leqslant a\\leqslant3e.$

综上，a 的取值范围为 $3e-\\frac{2e}{\\sqrt{\\ln(3e)}}\\leqslant a\\leqslant3e.$

另解 事实上第(2)小题用“分离参数”做更简洁：

当 $0 < x \\leqslant 1$ 时， $\\ln x \\leqslant 0, f(x) \\leqslant 4e^{2} \\Leftrightarrow (x - a)^{2} \\ln x \\leqslant 4e^{2}$ 对任意 $a \\in R$ 恒成立；

当 $1 < x \\leqslant 3\\mathrm{e}$ 时， $f(x) \\leqslant 4\\mathrm{e}^2 \\Leftrightarrow (x - a)^2 \\ln x \\leqslant 4\\mathrm{e}^2 \\Rightarrow |x - a| \\leqslant \\frac{2\\mathrm{e}}{\\sqrt{\\ln x}}$

$\\Rightarrow \\left\\{ \\begin{array}{l}a\\geqslant x - \\frac{2\\mathrm{e}}{\\sqrt{\\ln x}},\\\\ a\\leqslant x + \\frac{2\\mathrm{e}}{\\sqrt{\\ln x}}, \\end{array} \\right.$ 以下只要考虑 $\\left\\{ \\begin{array}{l}a\\geqslant \\left[x - \\frac{2\\mathrm{e}}{\\sqrt{\\ln x}}\\right]_{\\max},\\\\ a\\leqslant \\left[x + \\frac{2\\mathrm{e}}{\\sqrt{\\ln x}}\\right]_{\\min}, \\end{array} \\right.$ 令 $h(x) = x - \\frac{2\\mathrm{e}}{\\sqrt{\\ln x}}$ ，可得

$h^{\\prime}(x) > 0(1 < x \\leqslant 3\\mathrm{e})$ ，因此， $[h(x)]_{\\max} = h(3\\mathrm{e}) = 3\\mathrm{e} - \\frac{2\\mathrm{e}}{\\sqrt{\\ln 3\\mathrm{e}}}.$

令 $g(x) = x + \\frac{2\\mathrm{e}}{\\sqrt{\\ln x}}, g'(x) = 1 - \\frac{\\mathrm{e}}{(\\ln x)^{\\frac{3}{2}}x}$ , 由 $g'(x) = 0$ 解得 $x = \\mathrm{e}$ .

当 1 < x < e 时， $g'(x) < 0$ ，当 $e \\leqslant x \\leqslant 3e$ 时， $g'(x) > 0$ ，

所以 $\\left[g(x)\\right]_{\\min}=g(e)=e+\\frac{2e}{\\sqrt{\\ln e}}=3e.$

综上所述，也可得 $3e-\\frac{2e}{\\sqrt{\\ln3e}}\\leqslant a\\leqslant3e.$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-2-11",
    topicId: "topic-sec-4-2",
    title: `若方程 x - x - m = 0 (m < -2)`,
    content: `若方程 $\\ln x - x - m = 0 (m < -2)$ 有两个相异实根 $x_{1}, x_{2}$ ，且 $x_{1} < x_{2}$ ，`,
    preview: `若方程 x - x - m = 0 (m < -2) 有两个相异实根 x_1, x_2 ，且 x_1 < x_2 ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-2-11-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `证明： $x_{1}x_{2}^{2} < 2$ .
证明 证法一 令 $f(x) = \\ln x - x - m$ ，则 $f'(x) = \\frac{1 - x}{x}$ .

当 $0 < x < 1$ 时， $f'(x) > 0, f(x)$ 单调递增；当 $x > 1$ 时， $f'(x) < 0, f(x)$ 单调递减。又 $f(2) = \\ln 2 - 2 - m > 0$ ，因此

$$
0 <   x _ {1} <   1, x _ {2} > 2, 0 <   \\frac {2}{x _ {2} ^ {2}} <   \\frac {1}{2}.
$$

构造函数 $g(x)=f(x)-f\\left(\\frac{2}{x^{2}}\\right)=3\\ln x-x+\\frac{2}{x^{2}}-\\ln2(x>2)$ ,

求导得 $g'(x) = -\\frac{(x-2)^{2}(x+1)}{x^{3}} < 0.$

因此 $g(x)$ 单调递减, 从而 $g(x) < g(2) = 2\\ln2 - \\frac{3}{2} < 0.$

因此有 $f(x) < f\\left(\\frac{2}{x^2}\\right), f(x_1) = f(x_2) < f\\left(\\frac{2}{x_2^2}\\right), x_1 < \\frac{2}{x_2^2}$ ，即 $x_1 x_2^2 < 2$ .

证法二 由题意知 $\\ln x_{1} - x_{1} = \\ln x_{2} - x_{2}$ , 即有 $\\ln \\frac{x_2}{x_1} = x_2 - x_1$ .

令 $t=\\frac{x_{2}}{x_{1}}(t>1)$ ，则 $\\ln t=tx_{1}-x_{1}$ ，故 $x_{1}=\\frac{\\ln t}{t-1}, x_{2}=\\frac{t\\ln t}{t-1}$ .

要证明 $x_{1}x_{2}^{2}<2$ , 即证明 $\\ln^{3}t-\\frac{2(t-1)^{3}}{t^{2}}<0$

令 $f(t) = \\ln^3 t - \\frac{2(t - 1)^3}{t^2}$ ，则 $f'(t) = \\frac{3\\ln^2 t - 2\\left(t + \\frac{2}{t^2} - \\frac{3}{t}\\right)}{t}$ .

令 $h(t) = 3\\ln^2 t - 2\\left(t + \\frac{2}{t^2} -\\frac{3}{t}\\right)$ ，则

$$
\\begin{array}{l} h ^ {\\prime} (t) = \\frac {2}{t} \\left(3 \\ln t - t - \\frac {3}{t} + \\frac {4}{t ^ {2}}\\right) <   \\frac {2}{t} \\left[ 3 \\times \\left(\\sqrt {t} - \\frac {1}{\\sqrt {t}}\\right) - t - \\frac {3}{t} + \\frac {4}{t ^ {2}} \\right] \\\\ = \\frac {2 (1 - t) (t + \\sqrt {t} + 1) (\\sqrt {t} - 2) ^ {2}}{t ^ {3}} \\leqslant 0, \\\\ \\end{array}
$$

因此 $h(t)$ 单调递减，从而 $h(t)<h(1)=0, f(t)$ 单调递减，即 $f(t)<f(1)=0.$

得证.

证法三 同证法二,证明原不等式即证明 $\\frac{\\ln t}{t-1}\\cdot\\left(\\frac{t\\ln t}{t-1}\\right)^{2}<2$ ,即证明

$$
t ^ {\\frac {2}{3}} \\ln t - 2 ^ {\\frac {1}{3}} (t - 1) <   0.
$$

令 $h(t) = t^{\\frac{2}{3}}\\ln t - 2^{\\frac{1}{3}}(t - 1)$ ，则

$$
\\begin{array}{l} h ^ {\\prime} (t) = t ^ {- \\frac {1}{3}} \\left[ 2 \\ln \\left(\\frac {1}{4} t\\right) ^ {\\frac {1}{3}} + 1 - (2 t) ^ {\\frac {1}{3}} + 2 \\ln 4 ^ {\\frac {1}{3}} \\right] \\\\ \\leqslant t ^ {- \\frac {1}{3}} \\left[ 2 \\left(\\frac {1}{4} t\\right) ^ {\\frac {1}{3}} - 2 + 1 - (2 t) ^ {\\frac {1}{3}} + 2 \\ln 4 ^ {\\frac {1}{3}} \\right] = \\left(\\frac {2}{3} \\ln 4 - 1\\right) t ^ {- \\frac {1}{3}} <   0. \\\\ \\end{array}
$$

因此 $h(t)$ 在 $(1, +\\infty)$ 上单调递减，从而 $h(t) < h(1) = 0$ 。原不等式得证。`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-2-12",
    topicId: "topic-sec-4-2",
    title: `已知函数 f(x)=a x+x^2-(a+2)x(a)`,
    content: `已知函数 $f(x)=a\\ln x+x^{2}-(a+2)x(a\\in\\mathbf{R})$ .
(1) 当 a=1 时, 求 $f(x)$ 的极值.
(2) 设 $g(x) = (a - 1)\\ln x + (1 + a)x^2 - 4x, h(x) = f(x) - g(x)$ ，若方程 $h(x) = m$ 有两个不同的解 $x_1, x_2$ ，证明： $h'\\left(\\frac{x_1 + x_2}{2}\\right) < 0$ .`,
    preview: `已知函数 f(x)=a x+x^2-(a+2)x(a) . (1) 当 a=1 时, 求 f(x) 的极值. (2) 设 ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-2-12-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1)由题意知 $f(x)=\\ln x+x^{2}-3x$ ，求导得

$$
f ^ {\\prime} (x) = \\frac {(2 x - 1) (x - 1)}{x}.
$$

当 $0 < x < \\frac{1}{2}$ 时， $f'(x) > 0, f(x)$ 单调递增；当 $\\frac{1}{2} < x < 1$ 时， $f'(x) < 0, f(x)$ 单调递减；当 $x > 1$ 时， $f'(x) > 0, f(x)$ 单调递增.

故 $f(x)$ 的极大值为 $f\\left(\\frac{1}{2}\\right)=-\\frac{5}{4}-\\ln2$ ，极小值为 $f(1)=-2$ .

(2)`,
      },
      {
        id: "prob-sec-4-2-12-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `$h(x)=\\ln x+(2-a)x-ax^{2}$ ，求导得

$$
h ^ {\\prime} (x) = \\frac {(2 x + 1) (1 - a x)}{x}.
$$

若 $a \\leqslant 0$ ，则 $h'(x) > 0, h(x)$ 单调递增，不符合题意。

若 $a > 0$ ，则当 $0 < x < \\frac{1}{a}$ 时， $h'(x) > 0, h(x)$ 单调递增；当 $x > \\frac{1}{a}$ 时， $h'(x) < 0, h(x)$ 单调递减.

不妨设 $0 < x_{1} < \\frac{1}{a} < x_{2}$ , 由 $h(x) = m$ 有两不同实数根, 得

$$
\\left\\{ \\begin{array}{l} \\ln x _ {1} + (2 - a) x _ {1} - a x _ {1} ^ {2} = m, \\\\ \\ln x _ {2} + (2 - a) x _ {2} - a x _ {2} ^ {2} = m. \\end{array} \\right.
$$

因此有 $\\ln\\frac{x_{2}}{x_{1}}+(2-a)(x_{2}-x_{1})-a(x_{2}-x_{1})(x_{2}+x_{1})=0.$

整理得 $2 - a - a(x_{2} + x_{1}) = -\\frac{\\ln\\frac{x_{2}}{x_{1}}}{x_{2} - x_{1}}.$

$$
h ^ {\\prime} \\left(\\frac {x _ {1} + x _ {2}}{2}\\right) = \\frac {2}{x _ {1} + x _ {2}} - a (x _ {1} + x _ {2}) + 2 - a = \\frac {2}{x _ {1} + x _ {2}} - \\frac {\\ln \\frac {x _ {2}}{x _ {1}}}{x _ {2} - x _ {1}} = \\frac {1}{x _ {2} - x _ {1}} \\left[ \\frac {2 \\left(\\frac {x _ {2}}{x _ {1}} - 1\\right)}{\\frac {x _ {2}}{x _ {1}} + 1} - \\ln \\frac {x _ {2}}{x _ {1}} \\right].
$$

令 $t = \\frac{x_2}{x_1} > 1, \\frac{2(t - 1)}{t + 1} < \\ln t$ ，则 $h' \\left(\\frac{x_1 + x_2}{2}\\right) < 0$ .

得证.`,
      },
      {
        id: "prob-sec-4-2-12-sol-2",
        title: `解法二`,
        method: "creative",
        steps: [],
        explanation: `对 $h(x)$ 求导, 得 $h'(x)=\\frac{1}{x}+(2-a)-2ax$ .

若 $a \\leqslant 0$ ，则 $h'(x) > 0, h(x)$ 单调递增，不符合题意。因此必有 $a > 0$ ，此时 $h'(x)$ 单调递减，且 $h'\\left(\\frac{1}{a}\\right) = 0$ 。

要证 $h^{\\prime}\\left(\\frac{x_{1} + x_{2}}{2}\\right) < 0$ ，可证 $h^{\\prime}\\left(\\frac{x_{1} + x_{2}}{2}\\right) < h^{\\prime}\\left(\\frac{1}{a}\\right)$ ，即证 $x_{1} + x_{2} > \\frac{2}{a}$ .

不妨设 $0 < x_{1} < \\frac{1}{a} < x_{2}$ ，即证 $x_{2} > \\frac{2}{a} - x_{1}$ ，

其中 $\\frac{1}{a}<\\frac{2}{a}-x_{1}<\\frac{2}{a}$ ，只需证 $h(x_{2})<h\\left(\\frac{2}{a}-x_{1}\\right)$ .

又 $h(x_{1}) = h(x_{2})$ ，即证 $h(x_{1}) < h\\left(\\frac{2}{a} -x_{1}\\right)$

构造函数 $\\varphi(x)=h(x)-h\\left(\\frac{2}{a}-x\\right)$ ,

其中 $0 < x < \\frac{1}{a}$ , 求导得 $\\varphi'(x) = \\frac{2(ax - 1)^2}{x(2 - ax)} > 0$ ,

因此 $\\varphi(x)$ 单调递增, 从而 $\\varphi(x)<\\varphi\\left(\\frac{1}{a}\\right)=0$ . 得证.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-2-13",
    topicId: "topic-sec-4-2",
    title: `设 l 为曲线 C: y = x/x 在点 (1,0)`,
    content: `设 l 为曲线 $C: y = \\frac{\\ln x}{x}$ 在点 (1,0) 处的切线.
(1) 求 l 的方程；

(2) 证明: 除切点 $(1,0)$ 之外, 曲线 C 在直线 l 的下方.`,
    preview: `设 l 为曲线 C: y = x/x 在点 (1,0) 处的切线. (1) 求 l 的方程； (2) 证明: 除切点 (1,0) 之外, 曲线 C 在直线 l`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-2-13-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1) 设 $f(x) = \\frac{\\ln x}{x}$ ，则 $f'(x) = \\frac{1 - \\ln x}{x^2}$ ，所以 $f'(1) = 1$ ，所以 $l$ 的方程为 $y = x - 1$ .

(2)`,
      },
      {
        id: "prob-sec-4-2-13-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `令 $g(x)=x-1-f(x)$ ，则除切点之外，

曲线 C 在直线 l 的下方等价于 $g(x)>0(\\forall x>0,x\\neq1)$ .

$g(x)$ 满足 $g(1) = 0$ ，且 $g^{\\prime}(x) = 1 - f^{\\prime}(x) = \\frac{x^{2} - 1 + \\ln x}{x^{2}}.$

当 0 < x < 1 时， $x^{2} - 1 < 0, \\ln x < 0$ ，所以 $g'(x) < 0$ ，故 $g(x)$ 单调递减；

当 x>1 时， $x^{2}-1>0,\\ln x>0$ ，所以 $g'(x)>0$ ，故 $g(x)$ 单调递增.

所以， $g(x) > g(1) = 0 (x > 0, x \\neq 1)$ .

所以除切点之外,曲线 C 在直线 l 的下方.`,
      },
      {
        id: "prob-sec-4-2-13-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `令 $g(x) = x - 1 - f(x), g(x) > 0$ 即 $x - 1 - \\frac{\\ln x}{x} > 0$ , 变形为 $x^2 - x - \\ln x > 0$ .

记 $h(x) = x^{2} - x - \\ln x$ ，则 $h^{\\prime}(x) = 2x - 1 - \\frac{1}{x} = \\frac{2x^{2} - x - 1}{x} = \\frac{(2x + 1)(x - 1)}{x},$

所以当 0 < x < 1 时， $h'(x) < 0, h(x)$ 在 $(0,1)$ 上单调递减；

当 x>1 时， $h'(x)>0$ , $h(x)$ 在 $(1,+\\infty)$ 上单调递增.

所以 $h(x) > h(1) = 0.$`,
      },
      {
        id: "prob-sec-4-2-13-sol-3",
        title: `解法三`,
        method: "standard",
        steps: [],
        explanation: `由题意, 只需证明 $x \\neq 1$ 时, $\\frac{\\ln x}{x} < x - 1$ . 因为 $x > 0$ , 只需证明 $\\ln x < x^2 - x$ .

令 $f(x) = \\ln x - (x^2 - x)$ ，则 $f'(x) = \\frac{1}{x} - 2x + 1 = \\frac{-(x - 1)(2x + 1)}{x}$ .

当 0 < x < 1 时， $f'(x) > 0$ ， $f(x)$ 单调递增，

所以 $f(x)<f(1)=0$ , 即 $\\ln x<x^{2}-x$

当 x>1 时， $f'(x)<0$ ， $f(x)$ 单调递减，所以 $f(x)<f(1)=0$ ，即 $\\ln x<x^{2}-x$ 。

综上所述，除切点之外， $\\ln x < x^{2} - x$ .

所以当 $x \\neq 1$ 时, $\\frac{\\ln x}{x} < x - 1$ , 即除切点(1,0)之外, 曲线 $C$ 在直线 $l$ 的下方.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-2-14",
    topicId: "topic-sec-4-2",
    title: `已知函数 f(x)=2/3x+1/2, h(x)=√x`,
    content: `已知函数 $f(x)=\\frac{2}{3}x+\\frac{1}{2}, h(x)=\\sqrt{x}$ .
(1) 设函数 $F(x)=f(x)-h(x)$ ，求 $F(x)$ 的单调区间与极值；

(2) 设 $a \\in \\mathbf{R}$ , 解关于 $x$ 的方程 $\\log_4\\left[\\frac{3}{2} f(x-1) - \\frac{3}{4}\\right] = \\log_2 h(a-x) - \\log_2 h(4-x)$ ;

(3)试比较 $f(100)h(100)-\\sum_{k=1}^{100}h(k)$ 与 $\\frac{1}{6}$ 的大小.`,
    preview: `已知函数 f(x)=2/3x+1/2, h(x)=√x . (1) 设函数 F(x)=f(x)-h(x) ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-2-14-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1) 由 $F(x) = \\frac{2}{3} x + \\frac{1}{2} - \\sqrt{x} (x \\geqslant 0)$ 知 $F'(x) = \\frac{4\\sqrt{x} - 3}{6\\sqrt{x}}$ ，令 $F'(x) = 0$ ，得 $x = \\frac{9}{16}$ .

当 $x \\in \\left(0, \\frac{9}{16}\\right)$ 时， $F'(x) < 0$ ；当 $x \\in \\left(\\frac{9}{16}, +\\infty\\right)$ 时， $F'(x) > 0$ .

故当 $x \\in \\left[0, \\frac{9}{16}\\right)$ 时， $F(x)$ 是减函数；当 $x \\in \\left[\\frac{9}{16}, +\\infty\\right)$ 时， $F(x)$ 是增函数.

函数 $F(x)$ 在 $x = \\frac{9}{16}$ 处有极小值 $F\\left(\\frac{9}{16}\\right) = \\frac{1}{8}$ .

(2)`,
      },
      {
        id: "prob-sec-4-2-14-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `原方程可化为 $\\log_{4}(x-1)=\\log_{2}h(a-x)-\\log_{2}h(4-x)$ ,

即为 $\\log_{4}(x-1)=\\log_{2}\\sqrt{a-x}-\\log_{2}\\sqrt{4-x}=\\log_{2}\\frac{\\sqrt{a-x}}{\\sqrt{4-x}}$ ，且 $\\left\\{\\begin{aligned}x&<a,\\\\ 1&<x<4.\\end{aligned}\\right.$

①当 $1 < a \\leqslant 4$ 时， $1 < x < a$ ，则 $x - 1 = \\frac{a - x}{4 - x}$ ，即 $x^2 - 6x + a + 4 = 0$

$\\Delta = 36 - 4(a + 4) = 20 - 4a > 0$ ，此时 $x = \\frac{6\\pm\\sqrt{20 - 4a}}{2} = 3\\pm \\sqrt{5 - a}$

由 1 < x < a，知此时方程仅有一解 $x = 3 - \\sqrt{5 - a}$ .

② 当 $a > 4$ 时， $1 < x < 4$ ，由 $x - 1 = \\frac{a - x}{4 - x}$ ，得 $x^2 - 6x + a + 4 = 0$

$$
\\Delta = 3 6 - 4 (a + 4) = 2 0 - 4 a,
$$

若 4<a<5，则 $\\Delta>0$ ，方程有两解 $x=3\\pm\\sqrt{5-a}$ ；

若 a=5，则 $\\Delta=0$ ，方程有一解 x=3；

若 $a \\leqslant 1$ 或 a > 5，原方程无解.`,
      },
      {
        id: "prob-sec-4-2-14-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `原方程可化为 $\\log_{4}(x-1)+\\log_{2}h(4-x)=\\log_{2}h(a-x)$ ,

即 $\\frac{1}{2}\\log_2(x - 1) + \\log_2\\sqrt{4 - x} = \\log_2\\sqrt{a - x}$

$$
\\Leftrightarrow \\left\\{ \\begin{array}{l} x - 1 > 0, \\\\ 4 - x > 0, \\\\ a - x > 0, \\\\ (x - 1) (4 - x) = a - x \\end{array} \\right. \\Leftrightarrow \\left\\{ \\begin{array}{l} 1 <   x <   4 \\\\ x <   a, \\\\ a = - (x - 3) ^ {2} + 5. \\end{array} \\right.
$$

如图 4-2-15 所示：

①当 $1 < a \\leqslant 4$ 时, 原方程有一解 $x = 3 - \\sqrt{5 - a}$ ;
②当 4<a<5 时, 原方程有二解 $x=3\\pm\\sqrt{5-a}$ ;
③当 a=5 时, 原方程有一解 x=3;
④当 $a \\leqslant 1$ 或 $a > 5$ 时，原方程无解.

(3)由已知得 $\\sum_{k=1}^{100}h(k)=\\sum_{k=1}^{100}\\sqrt{k}$ .

设数列 $\\{a_{n}\\}$ 的前 $n$ 项和为 $S_{n}$ ，且 $S_{n} = f(n)h(n) - \\frac{1}{6} (n\\in \\mathbf{Z}^{+})$

从而 $a_{1}=S_{1}=1$ ,

当 $2 \\leqslant k \\leqslant 100$ 时， $a_{k} = S_{k} - S_{k-1} = \\frac{4k+3}{6}\\sqrt{k} - \\frac{4k-1}{6}\\sqrt{k-1}$ .

又 $a_{k} - \\sqrt{k} = \\frac{1}{6} [(4k - 3)\\sqrt{k} -(4k - 1)\\sqrt{k - 1}] = \\frac{1}{6}\\cdot \\frac{(4k - 3)^{2}k - (4k - 1)^{2}(k - 1)}{(4k - 3)\\sqrt{k} + (4k - 1)\\sqrt{k - 1}}$

$$
= \\frac {1}{6} \\cdot \\frac {1}{(4 k - 3) \\sqrt {k} + (4 k - 1) \\sqrt {k - 1}} > 0.
$$

即对任意满足 $2 \\leqslant k \\leqslant 100$ 的 k，有 $a_{k} > \\sqrt{k}$ ，

又因为 $a_1 = 1 = \\sqrt{1}$ ，所以 $\\sum_{k=1}^{100} a_k > \\sum_{k=1}^{100} \\sqrt{k}$ .

故 $f(100)h(100) - \\sum_{k=1}^{100} h(k) > \\frac{1}{6}$ .

![](images/f6707be18d1d8046f9c46f5fb1456d04f3e98c03f7953b7d0f08882f237bfdea.jpg)
图4-2-15`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-2-15",
    topicId: "topic-sec-4-2",
    title: `已知函数 f(x) = e^2x - a x`,
    content: `已知函数 $f(x) = \\mathrm{e}^{2x} - a\\ln x$ .
(1) 讨论 $f(x)$ 的导函数 $f'(x)$ 的零点个数.
(2)证明:当a>0时, $f(x)\\geqslant2a+a\\ln\\frac{2}{a}.$`,
    preview: `已知函数 f(x) = e^2x - a x . (1) 讨论 f(x) 的导函数 f'(x) 的零点个数. (2)证明:当a>0时, f(x)≥2`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-2-15-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)对已知函数求导,得 $f'(x)=2\\mathrm{e}^{2x}-\\frac{a}{x}(x>0)$ .

当 $a \\leqslant 0$ 时， $f'(x) > 0$ ，此时 $f'(x)$ 没有零点。

当 $a > 0$ 时， $y = \\mathrm{e}^{2x}$ 单调递增， $y = -\\frac{a}{x}$ 单调递增，所以 $f'(x)$ 在 $(0, +\\infty)$ 上单调递增.

又 $f^{\\prime}(a) > 0, f^{\\prime}\\left(\\frac{a}{2(a + 1)}\\right) < 0$ ，故 $f^{\\prime}(x)$ 存在唯一零点.

(2)证法一 令 $g(a) = \\mathrm{e}^{2x} - a\\ln x - 2a - a\\ln \\frac{2}{a}$ , 则 $g'(a) = \\ln \\frac{a}{2x} - 1$ .

当 $a \\in (0, 2\\mathrm{ex})$ 时， $g'(a) < 0, g(a)$ 单调递减；当 $a \\in (2\\mathrm{ex}, +\\infty)$ 时， $g'(a) > 0, g(a)$ 单调递增。从而当 $a > 0$ 时，

$$
g (a) \\geqslant g (2 \\mathrm{e} x) = \\mathrm{e} ^ {2 x} - 2 \\mathrm{e} x \\ln x - 4 \\mathrm{e} x + 2 \\mathrm{e} x \\ln \\mathrm{e} x = \\mathrm{e} ^ {2 x} - 2 \\mathrm{e} x \\geqslant 0.
$$

证法二 要证 $f(x) \\geqslant 2a + a\\ln \\frac{2}{a}$ , 即证 $\\mathrm{e}^{2x - \\ln a} - \\ln 2x \\geqslant 2 - \\ln a$ .

结合不等式 $e^{2x-\\ln a}\\geqslant2x-\\ln a+1$ 及 $\\ln2x\\leqslant2x-1$

则有 $\\mathrm{e}^{2x - \\ln a} - \\ln 2x\\geqslant 2x - \\ln a + 1 - (2x - 1) = 2 - \\ln a.$

得证.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-2-16",
    topicId: "topic-sec-4-2",
    title: `函数 y=f(x) 在区间 (0,+∞) 上可导`,
    content: `函数 $y=f(x)$ 在区间 $(0,+\\infty)$ 上可导，导函数 $f'(x)$ 是减函数，且 $f'(x)>0$ 。设 $x_{0}\\in(0,+\\infty)$ ， $y=kx+m$ 是曲线 $y=f(x)$ 在点 $(x_{0},f(x_{0}))$ 处的切线方程，并设函数 $g(x)=kx+m$ 。
(1) 用 $x_{0}$ 、 $f(x_{0})$ 、 $f'(x_{0})$ 表示 m;
(2) 证明: 当 $x_{0} \\in (0, +\\infty)$ 时, $g(x) \\geqslant f(x)$ ;

(3)若关于 $x$ 的不等式 $x^{2} + 1\\geqslant ax + b\\geqslant \\frac{3}{2} x^{\\frac{2}{3}}$ 在 $[0, + \\infty)$ 上恒成立，其中 $a,b$ 为实数，求 $b$ 的取值范围及 $a$ 与 $b$ 所满足的关系.`,
    preview: `函数 y=f(x) 在区间 (0,+∞) 上可导，导函数 f'(x) 是减函数，且 f'(x)>0 。设 x_0(0,+∞) ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-2-16-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1) $m=f(x_{0})-x_{0}f'(x_{0})$ .

(2) 令 $h(x) = g(x) - f(x)$ , 则 $h'(x) = f'(x_0) - f'(x), h'(x_0) = 0$ .

因为 $f'(x)$ 递减，所以 $h'(x)$ 递增，

因此，当 $x > x_0$ 时， $h'(x) > 0$ ；当 $x < x_0$ 时， $h'(x) < 0$ .

所以 $x_0$ 是 $h(x)$ 唯一的极值点，且是极小值点，可知 $h(x)$ 的最小值为0，

因此 $h(x) \\geqslant 0$ ，即 $g(x) \\geqslant f(x)$ .

(3)`,
      },
      {
        id: "prob-sec-4-2-16-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `$0 \\leqslant b \\leqslant 1, a > 0$ 是不等式成立的必要条件，以下讨论. 设此条件成立. $x^{2} + 1 \\geqslant ax + b$ ，即 $x^{2} - ax + (1 - b) \\geqslant 0$ 对任意 $x \\in [0, +\\infty)$ 成立的充要条件是 $a \\leqslant 2(1 - b)^{\\frac{1}{2}}$ .

另一方面，由于 $f(x) = \\frac{3}{2} x^{\\frac{2}{3}}$ 满足前述题设中关于函数 $y = f(x)$ 的条件，利用(2)的结果可知， $ax + b\\geqslant \\frac{3}{2} x^{\\frac{2}{3}}$ 的充要条件是：过点 $(0,b)$ 与曲线 $y = \\frac{3}{2} x^{\\frac{2}{3}}$ 相切的直线的斜率不大于 $a$ ，该切线的方程为 $y = (2b)^{-\\frac{1}{2}}x + b.$ 于是 $ax + b\\geqslant \\frac{3}{2} x^{\\frac{2}{3}}$ 的充要条件是 $a\\geqslant (2b)^{\\frac{1}{2}}$

综上，不等式 $x^{2} + 1\\geqslant ax + b\\geqslant \\frac{3}{2} x^{\\frac{2}{3}}$ 对任意 $x\\in [0, + \\infty)$ 成立的充要条件是

$(2b)^{-\\frac{1}{2}} \\leqslant a \\leqslant 2(1 - b)^{\\frac{1}{2}}.$ ①

显然,存在a、b使①式成立的充要条件是:不等式

$(2b)^{-\\frac{1}{2}} \\leqslant 2(1 - b)^{\\frac{1}{2}}$ ②

有解.

解不等式②，得 $\\frac{2 - \\sqrt{2}}{4} \\leqslant b \\leqslant \\frac{2 + \\sqrt{2}}{4}$ . ③

因此，③式即为 b 的取值范围，①式即为实数 a 与 b 所满足的关系.`,
      },
      {
        id: "prob-sec-4-2-16-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `$0 \\leqslant b \\leqslant 1, a > 0$ 是不等式成立的必要条件，以下讨论中设此条件成立.

$x^{2} + 1\\geqslant ax + b$ ，即 $x^{2} - ax + (1 - b)\\geqslant 0$ 对任意 $x\\in [0, + \\infty)$ 成立的充要条件是

$a \\leqslant 2(1 - b)^{\\frac{1}{2}}$ . 令 $\\varphi(x) = ax + b - \\frac{3}{2} x^{\\frac{2}{3}}$ ,

于是 $ax + b \\geqslant \\frac{3}{2} x^{\\frac{2}{3}}$ 对任意 $x \\in [0, +\\infty)$ 成立的充要条件是 $\\varphi(x) \\geqslant 0$ .

由 $\\varphi'(x)=a-x^{-\\frac{1}{3}}=0$ 得 $x=a^{-3}$ .

当 $0 < x < a^{-3}$ 时， $\\varphi'(x) < 0$ ；当 $x > a^{-3}$ 时， $\\varphi'(x) > 0$ 。

所以，当 $x = a^{-3}$ 时， $\\varphi(x)$ 取最小值.

因此 $\\varphi(x)\\geqslant0$ 成立的充要条件是 $\\varphi(a^{-3})\\geqslant0$ ，即 $a\\geqslant(2b)^{-\\frac{1}{2}}$ .

综上，不等式 $x^{2} + 1\\geqslant ax + b\\geqslant \\frac{3}{2} x^{\\frac{2}{3}}$ 对任意 $x\\in [0, + \\infty)$ 成立的充要条件是

$(2b)^{-\\frac{1}{2}} \\leqslant a \\leqslant 2(1 - b)^{\\frac{1}{2}}.$ ①

显然,存在 a、b 使①式成立的充要条件是:不等式

$(2b)^{-\\frac{1}{2}} \\leqslant 2(1 - b)^{\\frac{1}{2}}$ ②

有解.

解不等式②得 $\\frac{2 - \\sqrt{2}}{4} \\leqslant b \\leqslant \\frac{2 + \\sqrt{2}}{4}$ . ③

因此，③式即为 b 的取值范围，①式即为实数在 a 与 b 所满足的关系.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-3-1",
    topicId: "topic-sec-4-3",
    title: `已知数列 a_n 中各项为`,
    content: `已知数列 $\\{a_{n}\\}$ 中各项为
$$
1 2, 1 1 2 2, 1 1 1 2 2 2, \\dots , \\underbrace {1 1 \\cdots 1} _ {n \\text {个}} \\underbrace {2 2 \\cdots 2} _ {n \\text {个}}, \\dots
$$

(1) 证明: 这个数列中的每一项都是两个相邻整数的积.
(2)求这个数列的前 n 项之和 $S_{n}$ .`,
    preview: `已知数列 中各项为 (1) 证明: 这个数列中的每一项都是两个相邻整数的积. (2)求这个数列的前 n 项之和 S_n .`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-3-1-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `先要通过观察,找出所给的一列数的特征,求出数列的通项,进一步再求和.

(1) $a_{n} = \\frac{1}{9} (10^{n} - 1)\\times 10^{n} + \\frac{2}{9}\\times (10^{n} - 1) = \\frac{1}{9} (10^{n} - 1)(10^{n} + 2)$

$$
= \\left(\\frac {1 0 ^ {n} - 1}{3}\\right) \\left(\\frac {1 0 ^ {n} - 1}{3} + 1\\right),
$$

记 $A = \\frac{10^n - 1}{3}$ , 则 $A = \\underbrace{33\\cdots\\cdots3}_{n\\text{个}}$ 为整数, 所以 $a_n = A(A + 1)$ , 得证.

(2) $a_{n}=\\frac{1}{9}10^{2n}+\\frac{1}{9}10^{n}-\\frac{2}{9},$

$$
\\begin{array}{l} S _ {n} = \\frac {1}{9} (1 0 ^ {2} + 1 0 ^ {4} + \\dots + 1 0 ^ {2 n}) + \\frac {1}{9} (1 0 + 1 0 ^ {2} + \\dots + 1 0 ^ {n}) - \\frac {2}{9} n \\\\ = \\frac {1}{8 9 1} (1 0 ^ {2 n + 2} + 1 1 \\times 1 0 ^ {n + 1} - 1 9 8 n - 2 1 0). \\\\ \\end{array}
$$

评注 本题难点在于求出数列的通项,再将这个通项“分成”两个相邻正数的积,解决此题需要一定的观察能力和逻辑推理能力.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-3-2",
    topicId: "topic-sec-4-3",
    title: `在数列 a_n 与 b_n 中， a_1=1, b_1=4，数列 a_n 的前 n 项和 S_n 满足：`,
    content: `在数列 $\\{a_{n}\\}$ 与 $\\{b_{n}\\}$ 中， $a_{1}=1, b_{1}=4$ ，数列 $\\{a_{n}\\}$ 的前 n 项和 $\\{S_{n}\\}$ 满足：
$nS_{n+1}-(n+3)S_{n}=0,2a_{n+1}$ 为 $b_{n}$ 与 $b_{n+1}$ 的等比中项， $n\\in Z^{+}$

(1) 求 $a_{2}, b_{2}$ 的值；
(2)求数列 $\\{a_{n}\\}$ 与 $\\{b_{n}\\}$ 的通项公式.`,
    preview: `在数列 与 中， a_1=1, b_1=4 ，数列 的前 n 项和 满足： nS_n+1-(n+3)S_n=0,2a_n+1 为 b_n 与 b_n+1 的等比`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-3-2-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1)由题设有 $a_{1}+a_{2}-4a_{1}=0, a_{1}=1$ ，解得 $a_{2}=3$ .

由题设又有 $4a_{2}^{2}=b_{2}b_{1}, b_{1}=4$ ，解得 $b_{2}=9$ 。

(2)`,
      },
      {
        id: "prob-sec-4-3-2-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `由题设 $nS_{n+1}-(n+3)S_{n}=0, a_{1}=1, b_{1}=4$ 及 $a_{2}=3, b_{2}=9$ ,

进一步可得 $a_{3}=6, b_{3}=16, a_{4}=10, b_{4}=25$ ,

猜想 $a_{n} = \\frac{n(n + 1)}{2}, b_{n} = (n + 1)^{2}, n \\in \\mathbf{Z}^{+}$ .

先证 $a_{n} = \\frac{n(n + 1)}{2}, n \\in \\mathbf{Z}^{+}$ .

当 n=1 时, $a_{1}=\\frac{1\\times(1+1)}{2}$ , 等式成立.

当 $n \\geqslant 2$ 时用数学归纳法证明如下：

(i) 当 n=2 时, $a_{2}=\\frac{2\\times(2+1)}{2}$ , 等式成立.

(ii) 假设当 n=k 时等式成立，即 $a_{k}=\\frac{k(k+1)}{2}, k\\geqslant2.$

由题设有 $kS_{k+1}=(k+3)S_{k}$ ，①

$$
(k - 1) S _ {k} = (k + 2) S _ {k - 1}. \\tag {②}
$$

①的两边分别减去②的两边,整理得 $ka_{k+1}=(k+2)a_{k}$ ,从而

$$
a _ {k + 1} = \\frac {k + 2}{k} a _ {k} = \\frac {k + 2}{k} \\cdot \\frac {k (k + 1)}{2} = \\frac {(k + 1) [ (k + 1) + 1 ]}{2}.
$$

这就是说, 当 $n = k + 1$ 时等式也成立. 根据 (i) 和 (ii) 可知, 等式 $a_{n} = \\frac{n(n + 1)}{2}$ 对任何的 $n \\geqslant 2$ 成立. 综上所述, 等式 $a_{n} = \\frac{n(n + 1)}{2}$ 对任何的 $n \\in \\mathbf{Z}^{+}$ 都成立.

再用数学归纳法证明 $b_{n}=(n+1)^{2}, n\\in\\mathbf{Z}^{+}$ .

(i) 当 n=1 时, $b_{1}=(1+1)^{2}$ , 等式成立.

(ii) 假设当 n=k 时等式成立，即 $b_{k}=(k+1)^{2}$ ，那么

$$
b _ {k + 1} = \\frac {4 a _ {k + 1} ^ {2}}{b _ {k}} = \\frac {(k + 1) ^ {2} (k + 2) ^ {2}}{(k + 1) ^ {2}} = [ (k + 1) + 1 ] ^ {2}.
$$

这就是说,当 $n=k+1$ 时等式也成立.

根据(i)和(ii)可知,等式 $b_{n}=(n+1)^{2}$ 对任何的 $n\\in Z^{+}$ 都成立.`,
      },
      {
        id: "prob-sec-4-3-2-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `由题设 $nS_{n + 1} = (n + 3)S_n$ ， ①

$$
(n - 1) S _ {n} = (n + 2) S _ {n - 1}. \\tag {②}
$$

①的两边分别减去②的两边,整理得 $na_{n+1}=(n+2)a_{n}, n \\geqslant 2$ , 所以 $2a_{3}=4a_{2}, 3a_{4}=5a_{3}, \\cdots, (n-1)a_{n}=(n+1)a_{n-1}, n \\geqslant 3$ .

将以上各式左右两端分别相乘, 得 $(n-1)!$ $a_{n}=\\frac{(n+1)!}{6}a_{2}$ ,

由(1)并化简得 $a_{n}=\\frac{n(n+1)}{6}a_{2}=\\frac{n(n+1)}{2}, n\\geqslant3.$

上式对 n=1,2 也成立.

由题设有 $b_{n+1}b_{n}=4a_{n+1}^{2}$ ，所以 $b_{n+1}b_{n}=(n+2)^{2}(n+1)^{2}$ ，

即 $\\frac{b_{n}}{(n+1)^{2}}\\cdot\\frac{b_{n+1}}{(n+2)^{2}}=1,n\\in\\mathbf{Z}^{+}.$

令 $x_{n} = \\frac{b_{n}}{(n + 1)^{2}}$ ，则 $x_{n}x_{n + 1} = 1$ ，即 $x_{n + 1} = \\frac{1}{x_n}$ .由 $x_{1} = 1$ 得 $x_{n} = 1,n\\geqslant 1.$

所以 $\\frac{b_n}{(n + 1)^2} = 1$ 即 $b_{n} = (n + 1)^{2}, n \\geqslant 1$ .`,
      },
      {
        id: "prob-sec-4-3-2-sol-3",
        title: `解法三`,
        method: "standard",
        steps: [],
        explanation: `由题设有 $nS_{n+1}=(n+3)S_{n}, n\\in\\mathbf{Z}^{+}$ ，所以 $S_{2}=4S_{1}, 2S_{3}=5S_{2}, \\cdots$

$(n-1)S_{n}=(n+2)S_{n-1},n\\geqslant2.$ 将以上各式左右两端分别相乘，得

$$
1 \\times 2 \\times \\dots \\times (n - 1) S _ {n} = 4 \\times 5 \\times \\dots \\times (n + 2) S _ {1},
$$

化简得 $S_{n}=\\frac{n(n+1)(n+2)}{2\\times3}a_{1}=\\frac{n(n+1)(n+2)}{6}, n\\geqslant3.$

由(1)，上式对 n=1,2 也成立，

所以 $a_{n} = S_{n} - S_{n - 1} = \\frac{n(n + 1)}{2}, n \\geqslant 2$ . 上式对 $n = 1$ 也成立.

以下同`,
      },
      {
        id: "prob-sec-4-3-2-sol-4",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `,可得 $b_{n}=(n+1)^{2}, n \\geqslant 1$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-3-3",
    topicId: "topic-sec-4-3",
    title: `已知数列 a_n 满足 a_n+2=3a_n-2a_n-1(n≥2)`,
    content: `已知数列 $\\{a_{n}\\}$ 满足 $a_{n+2}=3a_{n}-2a_{n-1}(n\\geqslant2)$ ,
(1) 令 $b_{n} = a_{n+1} - a_{n}$ 且 $b_{1} \\neq b_{2}$ ，证明：数列 $\\{b_{n+1} - b_{n}\\}$ 是等比数列；
(2)若对任意的 $n\\in \\mathbf{Z}^{+}$ 总存在一常数，使得 $|a_{n}|\\leqslant M$ ，证明：数列 $\\{a_n\\}$ 为常数数列.`,
    preview: `已知数列 满足 a_n+2=3a_n-2a_n-1(n≥2) , (1) 令 b_n = a_n+1 - a_n 且 b_1 ≠ b_2 ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-3-3-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1)由已知式 $a_{n + 2} = 3a_n - 2a_{n - 1}(n\\geqslant 2)$ 得

$$
a _ {n + 2} - a _ {n + 1} = 2 (a _ {n} - a _ {n - 1}) - (a _ {n + 1} - a _ {n}),
$$

即 $b_{n + 1} = 2b_{n - 1} - b_n$ ，所以 $b_{n + 1} - b_n = -2(b_n - b_{n - 1})$ ，又 $b_{1}\\neq b_{2}$ ，得 $b_{2} - b_{1}\\neq 0$

所以数列 $\\{b_{n+1}-b_{n}\\}$ 是等比数列.

(2)`,
      },
      {
        id: "prob-sec-4-3-3-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `由(1) 可知令 $b_n = a_{n+1} - a_n$ ，则 $b_{n+1} = 2b_{n-1} - b_n$ ，其特征方程为 $x^2 + x - 2 = 0$ ，两根为 -2, 1，因此，可设通项公式为 $b_n = k_1(-2)^n + k_2, k_1, k_2$ 为常数.

$$
\\begin{array}{l} a _ {n} = (a _ {n} - a _ {n - 1}) + (a _ {n - 1} - a _ {n - 2}) + \\dots + (a _ {2} - a _ {1}) + a _ {1} \\\\ = b _ {n - 1} + b _ {n - 2} + \\dots + b _ {1} + a _ {1} = k _ {1} [ 1 + (- 2) + \\dots + (- 2) ^ {n - 2} ] + k _ {2} (n - 1) + a _ {1}, \\\\ \\end{array}
$$

由数列 $\\{a_{n}\\}$ 有界，知 $k_{1}=k_{2}=0$ ，所以 $a_{n}=a_{1}$ ，数列 $\\{a_{n}\\}$ 为常数数列.`,
      },
      {
        id: "prob-sec-4-3-3-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `由 $\\left. \\begin{array}{l}b_{n + 1} - b_n = (b_2 - b_1)(-2)^{n - 1}\\\\ b_n - b_{n - 1} = (b_2 - b_1)(-2)^{n - 2}\\\\ \\dots \\\\ b_2 - b_1 = (b_2 - b_1)(-2)^0 \\end{array} \\right\\} \\Rightarrow b_{n + 1} - b_1 = (b_2 - b_1)\\frac{1 - (-2)^n}{3}$

$$
\\Rightarrow b _ {n + 1} = (b _ {2} - b _ {1}) \\frac {1 - (- 2) ^ {n}}{3} + b _ {1} \\Rightarrow b _ {n} = (b _ {2} - b _ {1}) \\frac {1 - (- 2) ^ {n - 1}}{3} + b _ {1}
$$

则有： $a_{n + 1} - a_n = (b_2 - b_1)\\frac{1 - (-2)^{n - 1}}{3} +b_1,$

$$
\\begin{array}{l} a _ {n} - a _ {n - 1} = (b _ {2} - b _ {1}) \\frac {1 - (- 2) ^ {n - 2}}{3} + b _ {1}, \\\\ a _ {3} - a _ {2} = (a _ {2} - b _ {1}) \\frac {1 - (- 2) ^ {1}}{3} + b _ {1}, \\\\ a _ {2} - a _ {1} = (b _ {2} - b _ {1}) \\frac {1 - (- 2) ^ {0}}{3} + b _ {1}, \\\\ \\end{array}
$$

以上 n 个式子相加: $a_{n+1}-a_{1}=nb_{1}+\\frac{n}{3}(b_{2}-b_{1})-\\frac{(b_{2}-b_{1})}{3}\\frac{1-(-2)^{n}}{3}$ ,

$$
\\begin{array}{l} a _ {n + 1} = \\frac {n (b _ {2} + 2 b _ {1})}{3} - \\frac {(b _ {2} - b _ {1})}{3} \\frac {1 - (- 2) ^ {n}}{3} + a _ {1} \\\\ = \\frac {n (b _ {2} + 2 b _ {1})}{3} + \\frac {b _ {2} - b _ {1}}{9} \\cdot (- 2) ^ {n} - \\frac {b _ {2} - b _ {1}}{9} + a _ {1}. \\\\ \\end{array}
$$

因为 $|a_{n}|\\leqslant M$ ，所以a与n无关，

所以 $\\left\\{\\begin{aligned}b_{2}-b_{1}&=0\\\\ b_{2}+2b_{1}&=0\\end{aligned}\\right.\\Rightarrow b_{2}=b_{1}=0$ ，所以 $a_{n}=a_{1}$ ，所以 $\\{a_{n}\\}$ 为常数数列.

评注 本题是笔者给杭州师范大学附属中学2016届高三6月适应性考试命制的理科压轴题.主要是想让学生了解与掌握形式如“ $a_{n + 2} = 3a_n - 2a_{n - 1}(n\\geqslant 2)$ ”缺项数列的差分变形技巧，即令 $b_{n} = a_{n + 1} - a_{n}$ ，将缺项数列变形为不缺项数列 $b_{n + 1} = 2b_{n - 1} - b_{n}$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-3-4",
    topicId: "topic-sec-4-3",
    title: `已知函数 f(x)=x^2+x-1,α,β 是方程`,
    content: `已知函数 $f(x)=x^{2}+x-1,\\alpha,\\beta$ 是方程 $f(x)=0$ 的两个根 $(\\alpha>\\beta), f'(x)$ 是 $f(x)$ 的导数；设 $a_{1}=1, a_{n+1}=a_{n}-\\frac{f(a_{n})}{f'(a_{n})}(n=1,2,\\cdots)$ .
(1) 求 $\\alpha, \\beta$ 的值；
(2) 证明: 对任意的正整数 n, 都有 $a_{n} > \\alpha$ ;
(3) 记 $b_{n}=\\ln\\frac{a_{n}-\\beta}{a_{n}-\\alpha}(n=1,2,\\cdots)$ ，求数列 $\\{b_{n}\\}$ 的前 n 项和 $S_{n}$ .`,
    preview: `已知函数 f(x)=x^2+x-1,α,β 是方程 f(x)=0 的两个根 (α>β), f'(x) 是 f(x) 的导数；设 . (1) 求 α, β 的值；`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-3-4-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 因为 $f(x) = x^{2} + x - 1, \\alpha, \\beta$ 是方程 $f(x) = 0$ 的两个根 $(\\alpha > \\beta)$ ,

所以 $\\alpha=\\frac{-1+\\sqrt{5}}{2},\\beta=\\frac{-1-\\sqrt{5}}{2}.$

$$
\\begin{array}{l} a _ {n + 1} = a _ {n} - \\frac {a _ {n} ^ {2} + a _ {n} - 1}{2 a _ {n} + 1} = a _ {n} - \\frac {\\frac {1}{2} a _ {n} (2 a _ {n} + 1) + \\frac {1}{4} (2 a _ {n} + 1) - \\frac {5}{4}}{2 a _ {n} + 1} \\\\ = \\frac {1}{4} (2 a _ {n} + 1) + \\frac {\\frac {5}{4}}{2 a _ {n} + 1} - \\frac {1}{2}. \\\\ \\end{array}
$$

(2) $f'(x)=2x+1,$

因为 $a_{1}=1$ ，所以由基本不等式可知 $a_{2}\\geqslant\\frac{\\sqrt{5}-1}{2}>0$ （当且仅当 $a_{1}=\\frac{\\sqrt{5}-1}{2}$ 时取等号），所以 $a_{2}>\\frac{\\sqrt{5}-1}{2}>0$ ，同样 $a_{3}>\\frac{\\sqrt{5}-1}{2},\\cdots,a_{n}>\\frac{\\sqrt{5}-1}{2}=\\alpha(n=1,2,\\cdots)$ .

(3) $a_{n + 1} - \\beta = a_n - \\beta -\\frac{(a_n - \\alpha)(a_n - \\beta)}{2a_n + 1} = \\frac{a_n - \\beta}{2a_n + 1} (a_n + 1 + \\alpha),$

而 $\\alpha+\\beta=-1$ , 即 $\\alpha+1=-\\beta$

所以 $a_{n + 1} - \\beta = \\frac{(a_n - \\beta)^2}{2a_n + 1}$ . 同理, $a_{n + 1} - \\alpha = \\frac{(a_n - \\alpha)^2}{2a_n + 1}$ , 所以 $b_{n + 1} = 2b_n$ .

又 $b_{1} = \\ln \\frac{1 - \\beta}{1 - \\alpha} = \\ln \\frac{3 + \\sqrt{5}}{3 - \\sqrt{5}} = 2\\ln \\frac{3 + \\sqrt{5}}{2}$ ，所以 $S_{n} = 2(2^{n} - 1)\\ln \\frac{3 + \\sqrt{5}}{2}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-3-5",
    topicId: "topic-sec-4-3",
    title: `函数 f(x) 对任意 x R 都有 f(x) + f(1`,
    content: `函数 $f(x)$ 对任意 $x \\in R$ 都有 $f(x) + f(1 - x) = \\frac{1}{2}$ .
(1)数列 $\\{a_{n}\\}$ 满足: $a_{n}=f(0)+f\\left(\\frac{1}{n}\\right)+f\\left(\\frac{2}{n}\\right)+\\cdots+f\\left(\\frac{n-1}{n}\\right)+f(1)$ ，数列 $\\{a_{n}\\}$ 是等差数列吗？请给予证明.

(2) 令 $b_{n} = \\frac{4}{4a_{n} - 1}, T_{n} = b_{1}^{2} + b_{2}^{2} + b_{3}^{2} + \\dots + b_{n}^{2}, S_{n} = 32 - \\frac{16}{n}$ ，试比较 $T_{n}$ 与 $S_{n}$ 的大小.`,
    preview: `函数 f(x) 对任意 x R 都有 f(x) + f(1 - x) = 1/2 . (1)数列 满足: ，数列 是等差数列吗？请给予证明. (2) 令 ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-3-5-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 令 $x = \\frac{1}{n}$ , 得 $f\\left(\\frac{1}{n}\\right) + f\\left(1 - \\frac{1}{n}\\right) = \\frac{1}{2}$ , 即 $f\\left(\\frac{1}{n}\\right) + f\\left(\\frac{n - 1}{n}\\right) = \\frac{1}{2}$ .

$$
a _ {n} = f (0) + f \\Big (\\frac {1}{n} \\Big) + \\dots + f \\Big (\\frac {n - 1}{n} \\Big) + f (1),
$$

又 $a_{n} = f(1) + f\\left(\\frac{n - 1}{n}\\right) + \\dots +f\\left(\\frac{1}{n}\\right) + f(0),$

两式相加得

$$
2 a _ {n} = [ f (0) + f (1) ] + \\left[ f \\left(\\frac {1}{n}\\right) + f \\left(\\frac {n - 1}{n}\\right) \\right] + \\dots + [ f (1) + f (0) ] = \\frac {n + 1}{2}.
$$

所以 $a_{n} = \\frac{n + 1}{4}, n \\in \\mathbf{Z}^{+}$ , 又 $a_{n + 1} - a_{n} = \\frac{n + 1 + 1}{4} - \\frac{n + 1}{4} = \\frac{1}{4}$ , 故数列 $\\{a_{n}\\}$ 是等差数列.

(2) $b_{n}=\\frac{4}{4a_{n}-1}=\\frac{4}{n}$ ,

$$
\\begin{array}{l} T _ {n} = b _ {1} ^ {2} + b _ {2} ^ {2} + \\dots + b _ {n} ^ {2} = 1 6 \\left(1 + \\frac {1}{2 ^ {2}} + \\frac {1}{3 ^ {2}} + \\dots + \\frac {1}{n ^ {2}}\\right) \\leqslant 1 6 \\left[ 1 + \\frac {1}{1 \\times 2} + \\frac {1}{2 \\times 3} + \\dots + \\frac {1}{n (n - 1)} \\right] \\\\ = 1 6 \\left[ 1 + \\left(1 - \\frac {1}{2}\\right) + \\left(\\frac {1}{2} - \\frac {1}{3}\\right) + \\dots + \\left(\\frac {1}{n - 1} - \\frac {1}{n}\\right) \\right] = 1 6 \\left(2 - \\frac {1}{n}\\right) = 3 2 - \\frac {1 6}{n} = S _ {n}, \\\\ \\end{array}
$$

所以 $T_{n} \\leqslant S_{n}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-3-6",
    topicId: "topic-sec-4-3",
    title: `已知函数 f(x)=1/3x^3+x^2-2`,
    content: `已知函数 $f(x)=\\frac{1}{3}x^{3}+x^{2}-2$ .
(1) 设 $\\{a_{n}\\}$ 是正数组成的数列，前 n 项和为 $S_{n}$ ，其中 $a_{1}=3$ 。若点 $(a_{n}, a_{n+1}^{2}-2a_{n+1})$ $(n\\in\\mathbf{Z}^{+})$ 在函数 $y=f'(x)$ 的图像上，求证：点 $(n, S_{n})$ 也在 $y=f'(x)$ 的图像上。

(2) 求函数 $f(x)$ 在区间 $(a-1, a)$ 上的极值.`,
    preview: `已知函数 f(x)=1/3x^3+x^2-2 . (1) 设 是正数组成的数列，前 n 项和为 S_n ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-3-6-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 因为 $f(x) = \\frac{1}{3} x^3 + x^2 - 2$ ，所以 $f'(x) = x^2 + 2x$ .

点 $(a_{n},a_{n+1}^{2}-2a_{n+1})(n\\in\\mathbf{Z}^{+})$ 在函数 $y=f'(x)$ 的图像上，

则 $a_{n + 1}^2 - 2a_{n + 1} = a_n^2 + 2a_n$ ，又 $a_n > 0$ ，所以 $a_{n + 1} - a_n = 2$

所以 $\\{a_{n}\\}$ 是首项为3,公差为2的等差数列,

所以 $S_{n} = 3n + \\frac{n(n - 1)}{2}\\times 2 = n^{2} + 2n,$

又因为 $f'(n)=n^{2}+2n$ ，所以 $S_{n}=f'(n)$ ，

故点 $(n,S_{n})$ 也在函数 $y=f'(x)$ 的图像上.

(2) $f'(x)=x^{2}+2x=x(x+2)$ ，由 $f'(x)=0$ ，得x=0或x=-2.

当 x 变化时, $f'(x)$ 、 $f(x)$ 的变化情况见下表:

<table><tr><td>x</td><td>(-∞,-2)</td><td>-2</td><td>(-2,0)</td><td>0</td><td>(0,+∞)</td></tr><tr><td>f&#x27;(x)</td><td>+</td><td>0</td><td>-</td><td>0</td><td>+</td></tr><tr><td>f(x)</td><td>↗</td><td>极大值</td><td>↘</td><td>极小值</td><td>↗</td></tr></table>

注意到 $\\left|(a-1)-a\\right|=1<2$ ，从而有：

①当 $a - 1 < -2 < a$ ，即 $-2 < a < -1$ 时， $f(x)$ 的极大值为 $f(-2) = -\\frac{2}{3}$ ，此时 $f(x)$ 无极小值；

②当 $a - 1 <   0 <   a$ ，即 $0 <   a <   1$ 时， $f(x)$ 的极小值为 $f(0) = -2$ ，此时 $f(x)$ 无极大值；
③当 $a \\leqslant -2$ 或 $-1 \\leqslant a \\leqslant 0$ 或 $a \\geqslant 1$ 时， $f(x)$ 既无极大值又无极小值.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-3-7",
    topicId: "topic-sec-4-3",
    title: `数列 a_n 满足 a_1=1,a_n+1a_n-1=a_n^2(n∈Z^+)`,
    content: `数列 $\\{a_{n}\\}$ 满足 $a_{1}=1,a_{n+1}a_{n}-1=a_{n}^{2}(n\\in\\mathbf{Z}^{+})$ .
(1) 求证: $a_{n} \\geqslant \\sqrt{2n-1} (n \\in \\mathbf{Z}^{+})$ ;
(2) 求证: $\\frac{1}{a_{1}^{2}a_{2}^{2}}+\\frac{1}{a_{2}^{2}a_{3}^{2}}+\\cdots+\\frac{1}{a_{n-1}^{2}a_{n}^{2}}<\\frac{5}{12}(n\\geqslant2,n\\in\\mathbf{Z}^{+})$ .`,
    preview: `数列 满足 a_1=1,a_n+1a_n-1=a_n^2(n^+) . (1) 求证: a_n ≥ √2n-1 (n Z^+) ; (2) 求证:`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-3-7-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 由 $a_{k+1}^{2} = \\left(a_{k} + \\frac{1}{a_{k}}\\right)^{2} = a_{k}^{2} + 2 + \\frac{1}{a_{k}^{2}} \\geqslant a_{k}^{2} + 2$ ，得 $a_{k+1}^{2} - a_{k}^{2} \\geqslant 2$

因此， $a_{n}^{2}=(a_{n}^{2}-a_{n-1}^{2})+(a_{n-1}^{2}-a_{n-2}^{2})+\\cdots+(a_{2}^{2}-a_{1}^{2})+a_{1}^{2}\\geqslant2(n-1)+1=2n-1.$

(2)由(1)知 $a_{k-1}^{2}a_{k}^{2}\\geqslant(2k-1)(2k-3)$ ,

所以 $\\frac{1}{a_{k-1}^2 a_k^2} \\leqslant \\frac{1}{(2k-3)(2k-1)} = \\frac{1}{2}\\left(\\frac{1}{2k-3} - \\frac{1}{2k-1}\\right)$ ,

$$
\\begin{array}{l} \\frac {1}{a _ {1} ^ {2} a _ {2} ^ {2}} + \\frac {1}{a _ {2} ^ {2} a _ {3} ^ {2}} + \\dots + \\frac {1}{a _ {n - 1} ^ {2} a _ {n} ^ {2}} \\leqslant \\frac {1}{a _ {1} ^ {2} a _ {2} ^ {2}} + \\frac {1}{2} \\left[ \\left(\\frac {1}{3} - \\frac {1}{5}\\right) + \\left(\\frac {1}{5} - \\frac {1}{7}\\right) + \\dots + \\left(\\frac {1}{2 n - 3} - \\frac {1}{2 n - 1}\\right) \\right] \\\\ = \\frac {1}{4} + \\frac {1}{6} - \\frac {1}{4 n - 2} <   \\frac {5}{1 2}. \\\\ \\end{array}
$$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-3-8",
    topicId: "topic-sec-4-3",
    title: `二阶递推数列的通项与结构分析`,
    content: `已知数列 $\\{a_{n}\\}$ 满足 $a_{1}=1,a_{2}=3,a_{n+1}=\\frac{a_{n}^{2}-a_{n-1}+2a_{n}}{a_{n-1}+1}(n\\geqslant2)$ .
(1) 求证: 数列 $\\{a_{n}+1\\}$ 是等比数列;
(2)求证: $\\frac{1}{a_{1}}+\\frac{1}{a_{2}}+\\cdots+\\frac{1}{a_{n}}<2.$`,
    preview: `已知数列 满足 . (1) 求证: 数列 是等比数列; (2)求证: 1/a_1+1/a_2+·s+1/a_n<2.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-3-8-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 由 $a_{n+1} = \\frac{a_n^2 - a_{n-1} + 2a_n}{a_{n-1} + 1} = \\frac{(a_n + 1)^2 - (a_{n-1} + 1)}{a_{n-1} + 1} = \\frac{(a_n + 1)^2}{a_{n-1} + 1} - 1$ , 得

$$
\\frac {a _ {n + 1} + 1}{a _ {n} + 1} = \\frac {a _ {n} + 1}{a _ {n - 1} + 1} = \\dots = \\frac {a _ {2} + 1}{a _ {1} + 1} = 2,
$$

所以数列 $\\{a_{n}+1\\}$ 是以2为首项，以2为公比的等比数列.

(2)由(1)知, $a_{n}+1=(a_{1}+1)\\cdot2^{n-1}=2^{n}$ ，所以 $a_{n}=2^{n}-1$ .

证法一 $\\frac{1}{a_{n}}=\\frac{1}{2^{n}-1}<\\frac{1}{2^{n}-2}=\\frac{1}{2}\\cdot\\frac{1}{2^{n-1}-1}<\\cdots<\\left(\\frac{1}{2}\\right)^{n-1}\\cdot\\frac{1}{2-1}=\\left(\\frac{1}{2}\\right)^{n-1},$

所以 $\\frac{1}{a_1} +\\frac{1}{a_2} +\\dots +\\frac{1}{a_n} < 1 + \\frac{1}{2} +\\frac{1}{2^2} +\\dots +\\frac{1}{2^{n - 1}} = \\frac{1 - \\frac{1}{2^n}}{1 - \\frac{1}{2}} = 2 - \\frac{1}{2^{n - 1}} <   2.$

证法二 可裂项 $\\frac{1}{a_n} = \\frac{1}{2^n - 1} = \\frac{2^{n + 1} - 1}{(2^n - 1)(2^{n + 1} - 1)} < \\frac{2^{n + 1}}{(2^n - 1)(2^{n + 1} - 1)}$

$$
= 2 \\left(\\frac {1}{2 ^ {n} - 1} - \\frac {1}{2 ^ {n + 1} - 1}\\right),
$$

所以 $\\frac{1}{a_{1}}+\\frac{1}{a_{2}}+\\cdots+\\frac{1}{a_{n}}<2\\left(1-\\frac{1}{2^{n+1}-1}\\right)<2.$

证法三 利用糖水不等式,有

$\\frac{1}{a_n} = \\frac{1}{2^n - 1} < \\frac{1 + 1}{2^n - 1 + 1} = \\frac{1}{2^{n-1}}$ ，所以 $\\frac{1}{a_1} + \\frac{1}{a_2} + \\cdots + \\frac{1}{a_n} < \\frac{1 - \\frac{1}{2^n}}{1 - \\frac{1}{2}} = 2\\left(1 - \\frac{1}{2^n}\\right) < 2.$

评注 可以将原题结论进一步加强: $\\frac{1}{a_{n}}=\\frac{1}{2^{n}-1}$ ，证明: $\\frac{1}{a_{1}}+\\frac{1}{a_{2}}+\\cdots+\\frac{1}{a_{n}}<\\frac{5}{3}$ .

证法一 可裂项 $\\frac{1}{a_n} = \\frac{1}{2^n - 1} = \\frac{2^{n + 1} - 1}{(2^n - 1)(2^{n + 1} - 1)} < \\frac{2^{n + 1}}{(2^n - 1)(2^{n + 1} - 1)}$

$$
= 2 \\left(\\frac {1}{2 ^ {n} - 1} - \\frac {1}{2 ^ {n + 1} - 1}\\right).
$$

证法二 利用糖水不等式有 $\\frac{1}{a_n} = \\frac{1}{2^n - 1} < \\frac{1 + 1}{2^n - 1 + 1} = \\frac{1}{2^{n - 1}}.$

但这个放缩力度偏大，经尝试，仅保留1、2、3、4项，放缩不会成功。当 $n \\geqslant 6, n \\in \\mathbf{Z}^{+}$ 时，

左端 $< \\frac{1}{2 - 1} +\\frac{1}{2^2 - 1} +\\frac{1}{2^3 - 1} +\\frac{1}{2^4 - 1} +\\frac{1}{2^5 - 1} +\\left(\\frac{1}{2^5} +\\frac{1}{2^6} +\\dots +\\frac{1}{2^{n - 1}}\\right)$

$$
= 1 + \\frac {1}{3} + \\frac {1}{7} + \\frac {1}{1 5} + \\frac {1}{3 1} + \\frac {1}{1 6} \\left(1 - \\frac {1}{2 ^ {n - 5}}\\right)
$$

$<1+\\frac{1}{3}+\\frac{1}{7}+\\frac{1}{15}+\\frac{1}{31}+\\frac{1}{16}<\\frac{5}{3}$ ，放缩成功.

证法三 其实我们可以更巧妙地、创造性地使用糖水不等式.

当 $n \\geqslant 4$ 时， $\\frac{1}{2^{n}-1} \\leqslant \\frac{1}{15} \\times \\frac{15+1}{(2^{n}-1)+1} = \\frac{1}{15 \\times 2^{n-4}}$ .

左端 $<\\frac{1}{2-1}+\\frac{1}{2^{2}-1}+\\frac{1}{2^{3}-1}+\\frac{1}{15}\\left(\\frac{1}{2^{0}}+\\frac{1}{2^{1}}+\\cdots+\\frac{1}{2^{n-4}}\\right)$

$$
= 1 + \\frac {1}{3} + \\frac {1}{7} + \\frac {2}{1 5} \\left(1 - \\frac {1}{2 ^ {n - 3}}\\right) <   1 + \\frac {1}{3} + \\frac {1}{7} + \\frac {2}{1 5} <   \\frac {5}{3}.
$$

证法四 当 $n \\geqslant 2$ 时， $a_{n} = 2^{n} - 1 = 3 \\times 2^{n-2} + (2^{n-2} - 1) \\geqslant 3 \\times 2^{n-2}$ .

左端 $= \\frac{1}{2 - 1} +\\frac{1}{2^2 - 1} +\\frac{1}{2^3 - 1} +\\dots +\\frac{1}{2^n - 1}$

$$
\\leqslant 1 + \\frac {1}{3} \\left(1 + \\frac {1}{2} + \\dots + \\frac {1}{2 ^ {n - 2}}\\right) = 1 + \\frac {2}{3} \\left(1 - \\frac {1}{2 ^ {n - 1}}\\right) <   \\frac {5}{3}.
$$

检验, 当 n=1 时, 命题也成立.

变式 若 $c_{n}=\\frac{1}{3^{n}-2^{n}}$ ，求证： $c_{1}+c_{2}+\\cdots+c_{n}\\leqslant\\frac{3}{2}-\\frac{1}{2\\times3^{n-1}}(n\\in\\mathbf{Z}^{+})$ .

证法一 提幂放缩法.

$$
c _ {n} = \\frac {1}{3 ^ {n} - 2 ^ {n}} = \\frac {1}{3 ^ {n} \\left[ 1 - \\left(\\frac {2}{3}\\right) ^ {n} \\right]} \\leqslant \\frac {1}{3 ^ {n} \\left[ 1 - \\left(\\frac {2}{3}\\right) ^ {n} \\right] _ {\\mathrm{min}}} = \\frac {1}{3 ^ {n - 1}}, \\text {即} c _ {n} \\leqslant \\frac {1}{3 ^ {n - 1}},
$$

所以 $c_{1} + c_{2} + \\dots + c_{n} \\leqslant \\frac{1 - \\frac{1}{3^{n}}}{1 - \\frac{1}{3}} = \\frac{3}{2}\\left(1 - \\frac{1}{3^{n}}\\right) =$ 右边.

证法二 比通项法(把两边看成数列的求和).

把右边看成数列的和，记数列 $\\{b_{n}\\}$ 的和 $T_{n}=\\frac{3}{2}-\\frac{1}{2\\times3^{n-1}}(n\\in\\mathbf{Z}^{+})$ ，

求得 $b_{n} = T_{n} - T_{n - 1} = \\frac{1}{3^{n - 1}} (n\\geqslant 2),b_{1} = 1$ 也符合 $(n\\in \\mathbf{Z}^{+})$

只要证 $\\frac{1}{3^{n - 1}}\\geqslant \\frac{1}{3^n - 2^n}$ ，只要证 $3^{n} - 2^{n}\\geqslant 3^{n - 1}$ ，只要证 $2\\times 3^{n - 1}\\geqslant 2^n = 2\\times 2^{n - 1}$ ，显然成立.

证法三 待定系数法.

$c_{n} = \\frac{1}{3^{n} - 2^{n}}\\leqslant \\frac{k}{3^{n - 1}}$ ，所以 $k\\geqslant \\left(\\frac{3^{n - 1}}{3^n - 2^n}\\right)_{\\max} = \\frac{1}{3}\\left[\\frac{1}{1 - \\left(\\frac{2}{3}\\right)^n}\\right]_{\\max} = 1$ ，即 $c_{n}\\leqslant \\frac{1}{3^{n - 1}}$

所以 $c_{1} + c_{2} + \\dots + c_{n} \\leqslant \\frac{1 - \\frac{1}{3^{n}}}{1 - \\frac{1}{3}} = \\frac{3}{2}\\left(1 - \\frac{1}{3^{n}}\\right) =$ 右边.

证法四 大幂拆分法. $c_{n} = \\frac{1}{3^{n} - 2^{n}} = \\frac{1}{3^{n - 1} + 2\\times 3^{n - 1} - 2\\times 2^{n - 1}}\\leqslant \\frac{1}{3^{n - 1}}$ ，后面略

证法五 整体变等比法.

$$
\\frac {c _ {n + 1}}{c _ {n}} = \\frac {3 ^ {n} - 2 ^ {n}}{3 ^ {n + 1} - 2 ^ {n + 1}} = \\frac {1}{3} \\times \\frac {3 ^ {n} - 2 ^ {n}}{3 ^ {n} - \\frac {2 ^ {n + 1}}{3}} \\leqslant \\frac {1}{3} \\times \\frac {3 ^ {n} - 2 ^ {n}}{3 ^ {n} - 2 ^ {n}} = \\frac {1}{3},
$$

即 $c_{1}+c_{2}+\\cdots+c_{n}$ 数列相邻项之比 $\\leqslant\\frac{1}{3}$ ，所以其和小于等于首项为 1，公比为 $\\frac{1}{3}$ 的数列之和，

所以 $c_{1}+c_{2}+\\cdots+c_{n}\\leqslant1+\\frac{1}{3}+\\cdots+\\frac{1}{3^{n-1}}=\\frac{3}{2}-\\frac{1}{2\\times3^{n-1}}(n\\in\\mathbf{Z}^{+})$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-3-9",
    topicId: "topic-sec-4-3",
    title: `（2015 年高考浙江卷理科）已知数列 a_n 满足`,
    content: `（2015 年高考浙江卷理科）已知数列 $\\{a_{n}\\}$ 满足
$a_1 = \\frac{1}{2}$ 且 $a_{n + 1} = a_n - a_n^2 (n\\in \\mathbf{Z}^+)$

(1)求证: $1\\leqslant\\frac{a_{n}}{a_{n+1}}\\leqslant2;$
(2)设数列 $\\{a_{n}^{2}\\}$ 的前n项和为 $S_{n}$ ，证明： $\\frac{1}{2(n+2)}\\leqslant\\frac{S_{n}}{n}\\leqslant\\frac{1}{2(n+1)}(n\\in\\mathbf{Z}^{+})$ .`,
    preview: `已知数列 满足 a_1 = 1/2 且 a_n + 1 = a_n - a_n^2 (n Z^+) (1)求证: 1≤a_n{a_n+1}≤qsla`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-3-9-sol-0",
        title: `解答`,
        method: "creative",
        steps: [],
        explanation: `（1）由题意得 $a_{n+1}-a_{n}=-a_{n}^{2}\\leqslant0$ ，即 $a_{n+1}\\leqslant a_{n}$ ，故 $a_{n}\\leqslant\\frac{1}{2}$ .

又由 $a_{n}=(1-a_{n-1})a_{n-1}$ 得 $a_{n}=(1-a_{n-1})(1-a_{n-2})\\cdots(1-a_{1})a_{1}>0.$

由 $0 < a_{n} \\leqslant \\frac{1}{2}$ 得 $\\frac{a_n}{a_{n+1}} = \\frac{a_n}{a_n - a_n^2} = \\frac{1}{1 - a_n} \\in [1, 2]$ , 即 $1 \\leqslant \\frac{a_n}{a_{n+1}} \\leqslant 2$ .

(2) 因为 $a_{n+1}=a_{n}-a_{n}^{2}$ ，所以 $a_{n}^{2}=a_{n}-a_{n+1}$ ，

累差叠加,可得

$$
\\begin{array}{l} S _ {n} = a _ {1} ^ {2} + a _ {2} ^ {2} + \\dots + a _ {n} ^ {2} = (a _ {1} - a _ {2}) + (a _ {2} - a _ {3}) + \\dots + (a _ {n} - a _ {n + 1}) \\\\ = a _ {1} - a _ {n + 1} = \\frac {1}{2} - a _ {n + 1}. \\\\ \\end{array}
$$

由此可得，欲证 $\\frac{1}{2(n + 2)}\\leqslant \\frac{S_n}{n}\\leqslant \\frac{1}{2(n + 1)}$ ，即证 $\\frac{1}{2(n + 1)}\\leqslant a_{n + 1}\\leqslant \\frac{1}{n + 2}.$

证法一 因为 $\\frac{1}{a_{n+1}}=\\frac{1}{a_{n}-a_{n}^{2}}=\\frac{1}{a_{n}(1-a_{n})}=\\frac{1}{a_{n}}+\\frac{1}{1-a_{n}}$ ，所以 $\\frac{1}{a_{n+1}}-\\frac{1}{a_{n}}=\\frac{1}{1-a_{n}}$ .

累差叠加，得 $\\frac{1}{a_{n+1}}-\\frac{1}{a_{1}}=\\frac{1}{1-a_{1}}+\\frac{1}{1-a_{2}}+\\cdots+\\frac{1}{1-a_{n}}$

因为 $\\frac{a_n}{a_{n + 1}} = \\frac{1}{1 - a_n}\\in [1,2]$ ，所以 $\\frac{1}{a_{n + 1}} -\\frac{1}{a_1}\\in [n,2n]$ ，即 $n + 2\\leqslant \\frac{1}{a_{n + 1}}\\leqslant 2n + 2$

所以可证 $\\frac{1}{2(n + 1)}\\leqslant a_{n + 1}\\leqslant \\frac{1}{n + 2}.$

证法二 用数学归纳法证明.

① 当 $n = 1$ 时， $\\frac{1}{2 \\times 1} \\leqslant a_1 \\leqslant \\frac{1}{1 + 1}$ ，因此，不等式成立.
② 假设当 $n = k$ 时， $\\frac{1}{2k} \\leqslant a_k \\leqslant \\frac{1}{k + 1}$ 成立，

则当 $n = k + 1$ 时， $a_{k + 1} = a_k(1 - a_k) = -\\left(a_k - \\frac{1}{2}\\right)^2 + \\frac{1}{4}$ 在 $\\left[\\frac{1}{2k}, \\frac{1}{k + 1}\\right]$ 上单调递增，

所以 $\\frac{1}{2k}\\left(1 - \\frac{1}{2k}\\right) \\leqslant a_{k+1} \\leqslant \\frac{1}{k+1}\\left(1 - \\frac{1}{k+1}\\right)$ , 即 $\\frac{2k-1}{4k^2} \\leqslant a_{k+1} \\leqslant \\frac{k}{(k+1)^2}$ .

因为 $\\frac{2k - 1}{4k^2} -\\frac{1}{2k + 2} = \\frac{2k - 2}{4k^2(2k + 2)}\\geqslant 0,\\frac{k}{(k + 1)^2} -\\frac{1}{k + 2} = \\frac{-1}{(k + 1)^2(k + 2)} <   0,$

所以 $\\frac{1}{2k + 2} \\leqslant a_{k + 1} \\leqslant \\frac{1}{k + 2}$ 成立.

由①②可知,结论对 $n \\in Z^{+}$ 都成立.

证法三 由条件得

$$
\\begin{array}{l} \\frac {1}{a _ {n + 1}} = \\frac {1}{a _ {n} (1 - a _ {n})} = \\frac {1}{a _ {n}} + \\frac {1}{1 - a _ {n}} = \\frac {1}{a _ {n - 1}} + \\frac {1}{1 - a _ {n - 1}} + \\frac {1}{1 - a _ {n}} = \\dots \\\\ = \\frac {1}{a _ {1}} + \\frac {1}{1 - a _ {1}} + \\frac {1}{1 - a _ {2}} + \\dots + \\frac {1}{1 - a _ {n}}, \\\\ \\end{array}
$$

又因为 $\\frac{1}{1 - a_n} = \\frac{a_n}{a_{n + 1}}\\in [1,2]$ ，所以 $\\frac{1}{a_1} +n <   \\frac{1}{a_{n + 1}} <   \\frac{1}{a_1} +2n$ ，即 $2 + n <   \\frac{1}{a_{n + 1}} <   2 + 2n.$ 由此可证结论成立.

评注 二次递推数列的命题背景一般是高中数学最常见的二次函数,本题的第(1)题可以借助二次函数揭示其背景:根据 $a_{n+1}=a_{n}-a_{n}^{2}(n\\in\\mathbf{Z}^{+})$ ,可构造二次函数 $y=x-x^{2}\\left(0<x<\\frac{1}{2}\\right)$ ,原题即可转化为证明 $\\frac{1}{2}\\leqslant\\frac{y}{x}\\leqslant1$ ,结合图4-3-1所示的函数关系不难知,函数 $y=x-x^{2}\\left(0<x<\\frac{1}{2}\\right)$ 的图像在直线y=x与 $y=\\frac{1}{2}x$ 之间,从而可证结论成立.

![](images/d4f5e7d25c587bf69c555107c453bc3ed9512cb5ed49cde1497f20b70bab9b31.jpg)

图4-3-1

第(2)题的多种解法中,数学归纳法是解决数列不等式比较常见的方法,其难点在于根据n=k时成立的式子如何向欲证 $n=k+1$ 时成立的式子转化,本题将其转化为求二次函数值域问题;证法一和证法三都用到了累差叠加将所求的不等式进行转化的策略,同时结合 $\\frac{1}{a_{n+1}}-\\frac{1}{a_{n}}=\\frac{1}{1-a_{n}}=d_{n}\\in[1,2]$ 这一类似等差数列递推关系的特征,进行叠加,表示出 $\\frac{1}{a_{n+1}}$ ,进而求证结论.

【变式】已知数列 $\\{a_{n}\\}$ 满足 $a_{1}=\\frac{1}{2},a_{n+1}=a_{n}^{2}+a_{n}$ .

(1) 求证: $a_{n+1} > a_{n}$ ;
(2) 求证: $1 < \\frac{1}{1 + a_1} + \\frac{1}{1 + a_2} + \\cdots + \\frac{1}{1 + a_n} < 2$ , 其中 $n \\geqslant 2, n \\in \\mathbf{Z}^+$ .

讲解 (1) 因为 $a_{n+1} = a_n^2 + a_n$ ，所以 $a_{n+1} - a_n = a_n^2 \\geqslant 0$ .

又因为 $a_{1}=\\frac{1}{2}>0$ ,

所以 $a_{n} \\geqslant a_{1} > 0$ ，即 $a_{n+1} - a_{n} > 0$ ，所以 $a_{n+1} > a_{n}$ .

(2) 因为 $a_{n+1}=a_{n}^{2}+a_{n}$ ，所以 $\\frac{1}{a_{n+1}}=\\frac{1}{a_{n}^{2}+a_{n}}=\\frac{1}{a_{n}(a_{n}+1)}=\\frac{1}{a_{n}}-\\frac{1}{a_{n}+1}$

即 $\\frac{1}{1+a_{n}}=\\frac{1}{a_{n}}-\\frac{1}{a_{n+1}}$ ，累差叠加得

$$
\\frac {1}{1 + a _ {1}} + \\frac {1}{1 + a _ {2}} + \\dots + \\frac {1}{1 + a _ {n}} = \\frac {1}{a _ {1}} - \\frac {1}{a _ {n + 1}} = 2 - \\frac {1}{a _ {n + 1}}.
$$

因为 $a_{n+1} \\geqslant a_{3} = \\left(\\frac{3}{4}\\right)^{2} + \\frac{3}{4} = \\frac{21}{16}$ ，所以 $0 < \\frac{1}{a_{n+1}} \\leqslant \\frac{16}{21} < 1$ ，所以 $1 < 2 - \\frac{1}{a_{n+1}} < 2$ ，即可证结论成立.`,
      },
    ],
    tags: [],
    source: `2015 年高考浙江卷理科`,
  },
  {
    id: "prob-sec-4-3-10",
    topicId: "topic-sec-4-3",
    title: `已知数列 a_n 的首项 a_1=3/5,a_n+1=3a_n2a_n+1,n∈正整数`,
    content: `已知数列 $\\{a_{n}\\}$ 的首项 $a_{1}=\\frac{3}{5},a_{n+1}=\\frac{3a_{n}}{2a_{n}+1},n\\in\\mathbf{Z}^{+}$ .
(1)求 $\\{a_{n}\\}$ 的通项公式；
(2)证明:对任意的 $x>0, a_{n}\\geqslant\\frac{1}{1+x}-\\frac{1}{(1+x)^{2}}\\left(\\frac{2}{3^{n}}-x\\right), n\\in\\mathbf{Z}^{+}$ ;
(3)证明: $a_{1}+a_{2}+\\cdots+a_{n}>\\frac{n^{2}}{n+1}.$`,
    preview: `已知数列 的首项 a_1=3/5,a_n+1=3a_n{2a_n+1},n^+ . (1)求 的通项公式； (2)证明:对任意的 ; (3)证明: a_1+a_`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-3-10-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 因为 $a_{n+1} = \\frac{3a_n}{2a_n + 1}$ , 所以 $\\frac{1}{a_{n+1}} = \\frac{2}{3} + \\frac{1}{3a_n}$ , 所以 $\\frac{1}{a_{n+1}} - 1 = \\frac{1}{3} \\left( \\frac{1}{a_n} - 1 \\right)$ ,

又 $\\frac{1}{a_{1}}-1=\\frac{2}{3}$ ，所以 $\\left\\{\\frac{1}{a_{n}}-1\\right\\}$ 是以 $\\frac{2}{3}$ 为首项， $\\frac{1}{3}$ 为公比的等比数列.

所以 $\\frac{1}{a_{n}}-1=\\frac{2}{3}\\times\\frac{1}{3^{n-1}}=\\frac{2}{3^{n}}$ ，所以 $a_{n}=\\frac{3^{n}}{3^{n}+2}$ .

(2)证法一 由(1)知 $a_{n} = \\frac{3^{n}}{3^{n} + 2} >0$

$$
\\begin{array}{l} \\frac {1}{1 + x} - \\frac {1}{(1 + x) ^ {2}} \\left(\\frac {2}{3 ^ {n}} - x\\right) = \\frac {1}{1 + x} - \\frac {1}{(1 + x) ^ {2}} \\left(\\frac {2}{3 ^ {n}} + 1 - 1 - x\\right) \\\\ = \\frac {1}{1 + x} - \\frac {1}{(1 + x) ^ {2}} \\left[ \\frac {1}{a _ {n}} - (1 + x) \\right] \\\\ = - \\frac {1}{a _ {n}} \\cdot \\frac {1}{(1 + x) ^ {2}} + \\frac {2}{1 + x} \\\\ = - \\frac {1}{a _ {n}} \\left(\\frac {1}{1 + x} - a _ {n}\\right) ^ {2} + a _ {n} \\leqslant a _ {n}, \\\\ \\end{array}
$$

所以原不等式成立.

证法二 设 $f(x)=\\frac{1}{1+x}-\\frac{1}{(1+x)^{2}}\\left(\\frac{2}{3^{n}}-x\\right)$ ,

则 $f^{\\prime}(x) = -\\frac{1}{(1 + x)^{2}} -\\frac{-(1 + x)^{2} - \\left(\\frac{2}{3^{n}} - x\\right)\\times 2(1 + x)}{(1 + x)^{2}} = \\frac{2\\left(\\frac{2}{3^{n}} - x\\right)}{(1 + x)^{2}}.$

因为 $x > 0$ ，所以当 $x < \\frac{2}{3^n}$ 时， $f'(x) > 0$ ；当 $x > \\frac{2}{3^n}$ 时， $f'(x) < 0$

所以当 $x = \\frac{2}{3^n}$ 时， $f(x)$ 取得最大值 $f\\left(\\frac{2}{3^n}\\right) = \\frac{1}{1 + \\frac{2}{3^n}} = a_n.$

所以原不等式成立.

(3)由(2)知,对任意的x>0,有

$$
\\begin{array}{l} a _ {1} + a _ {2} + \\dots + a _ {n} \\geqslant \\frac {1}{1 + x} - \\frac {1}{(1 + x) ^ {2}} \\left(\\frac {2}{3} - x\\right) + \\frac {1}{1 + x} - \\frac {1}{(1 + x) ^ {2}} \\left(\\frac {2}{3 ^ {2}} - x\\right) \\\\ + \\dots + \\frac {1}{1 + x} - \\frac {1}{(1 + x) ^ {2}} \\left(\\frac {2}{3 ^ {n}} - x\\right) \\\\ = \\frac {n}{1 + x} - \\frac {1}{(1 + x) ^ {2}} \\left(\\frac {2}{3} + \\frac {2}{3 ^ {2}} + \\dots + \\frac {2}{3 ^ {n}} - n x\\right). \\\\ \\end{array}
$$

所以取 $x=\\frac{1}{n}\\left(\\frac{2}{3}+\\frac{2}{3^{2}}+\\cdots+\\frac{2}{3^{n}}\\right)=\\frac{\\frac{2}{3}\\left(1-\\frac{1}{3^{n}}\\right)}{n\\left(1-\\frac{1}{3}\\right)}=\\frac{1}{n}\\left(1-\\frac{1}{3^{n}}\\right)$ ,

则 $a_1 + a_2 + \\dots + a_n \\geqslant \\frac{n}{1 + \\frac{1}{n}\\left(1 - \\frac{1}{3^n}\\right)} = \\frac{n^2}{n + 1 - \\frac{1}{3^n}} > \\frac{n^2}{n + 1}$ .

所以原不等式成立.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-3-11",
    topicId: "topic-sec-4-3",
    title: `设 b > 0，数列 a_n`,
    content: `设 $b > 0$ ，数列 $\\{a_{n}\\}$ 满足 $a_1 = b, a_n = \\frac{nba_{n-1}}{a_{n-1} + 2n - 2} (n \\geqslant 2)$ .
(1)求数列 $\\{a_{n}\\}$ 的通项公式；
(2)求证:对于一切正整数 $n, a_{n} \\leqslant \\frac{b^{n+1}}{2^{n+1}} + 1$ .`,
    preview: `设 b > 0 ，数列 满足 . (1)求数列 的通项公式； (2)求证:对于一切正整数 .`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-3-11-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)由 $a_{n} = \\frac{nba_{n - 1}}{a_{n - 1} + 2n - 2}$ 得 $\\frac{n}{a_n} = \\frac{2}{b}\\cdot \\frac{n - 1}{a_{n - 1}} +\\frac{1}{b},$

当 b=2 时， $\\frac{n}{a_{n}}-\\frac{n-1}{a_{n-1}}=\\frac{1}{2}$ ，所以 $\\left\\{\\frac{n}{a_{n}}\\right\\}$ 是首项为 $\\frac{1}{a_{1}}=\\frac{1}{2}$ ，公差为 $\\frac{1}{2}$ 的等差数列，

所以 $\\frac{n}{a_{n}}=\\frac{1}{2}+(n-1)\\times\\frac{1}{2}=\\frac{n}{2}$ ，从而 $a_{n}=2$ .

当 $b \\neq 2$ 时， $\\frac{n}{a_n} + \\frac{1}{2 - b} = \\frac{2}{b}\\left(\\frac{n - 1}{a_{n-1}} + \\frac{1}{2 - b}\\right)$ ，

所以 $\\left\\{\\frac{n}{a_{n}}+\\frac{1}{2-b}\\right\\}$ 是首项为 $\\frac{1}{a_{1}}+\\frac{1}{2-b}=\\frac{2}{b(2-b)}$ ，公比为 $\\frac{2}{b}$ 的等比数列，

所以 $\\frac{n}{a_{n}}+\\frac{1}{2-b}=\\frac{2}{b(2-b)}\\cdot\\left(\\frac{2}{b}\\right)^{n-1}=\\frac{2^{n}}{b^{n}(2-b)}$ ，从而 $a_{n}=\\frac{nb^{n}(2-b)}{2^{n}-b^{n}}$ .

综上所述，数列 $\\{a_{n}\\}$ 的通项公式为 $a_{n} = \\left\\{ \\begin{array}{l}2,b = 2,\\\\ \\frac{nb^{2}(2 - b)}{2^{n} - b^{n}},b\\neq 2. \\end{array} \\right.$

(2) 当 b=2 时, 不等式显然成立;

当 $b \\neq 2$ 时，要证 $a_{n} \\leqslant \\frac{b^{n+1}}{2^{n+1}} + 1$ ，只需证 $\\frac{nb^n(2 - b)}{2^n - b^n} \\leqslant \\frac{b^{n+1}}{2^{n+1}} + 1,$

即证 $n \\cdot 2^{n+1} \\cdot b^n \\leqslant (2^{n+1} + b^{n+1}) \\cdot \\frac{b^n - 2^n}{b - 2}$ . (\\*)

因为 $(2^{n + 1} + b^{n + 1})\\cdot \\frac{b^n - 2^n}{b - 2} = (2^{n + 1} + b^{n + 1})(b^{n - 1} + 2b^{n - 2} + 2^2 b^{n - 3} + \\dots +2^{n - 1})$

$$
= (2 ^ {n + 1} b ^ {n - 1} + 2 ^ {n + 2} b ^ {n - 2} + \\dots + 2 ^ {2 n}) + (b ^ {2 n} + 2 b ^ {2 n - 1} + \\dots + 2 ^ {n - 1} b ^ {n + 1})
$$

$$
= 2 ^ {n + 1} b ^ {n} \\left[ \\left(\\frac {1}{b} + \\frac {2}{b ^ {2}} + \\dots + \\frac {2 ^ {n - 1}}{b ^ {n}}\\right) + \\left(\\frac {b ^ {n}}{2 ^ {n + 1}} + \\frac {b ^ {n - 1}}{2 ^ {n}} + \\dots + \\frac {b}{2 ^ {2}}\\right) \\right]
$$

$$
= 2 ^ {n + 1} b ^ {n} \\left[ \\left(\\frac {1}{b} + \\frac {b}{2 ^ {2}}\\right) + \\left(\\frac {2}{b ^ {2}} + \\frac {b ^ {2}}{2 ^ {3}}\\right) + \\dots + \\left(\\frac {2 ^ {n - 1}}{b ^ {n}} + \\frac {b ^ {n}}{2 ^ {n + 1}}\\right) \\right]
$$

$$
\\geqslant 2 ^ {n + 1} b ^ {n} \\left(2 \\sqrt {\\frac {1}{b} \\cdot \\frac {b}{2 ^ {2}}} + 2 \\sqrt {\\frac {2}{b ^ {2}} \\cdot \\frac {b ^ {2}}{2 ^ {3}}} + \\dots + 2 \\sqrt {\\frac {2 ^ {n - 1}}{b ^ {n}} \\cdot \\frac {b ^ {n}}{2 ^ {n + 1}}}\\right)
$$

$$
= 2 ^ {n + 1} b ^ {n} (1 + 1 + \\dots + 1) = n 2 ^ {n + 1} b ^ {n},
$$

所以,不等式(\\*)成立,从而原不等式成立.

综上所述，当 $b > 0$ 时，对于一切正整数 $n, a_{n} \\leqslant \\frac{b^{n + 1}}{2^{n + 1}} + 1$ .

评注 事实上,如果利用多元均值不等式更简单:

$$
\\begin{array}{l} (2 ^ {n + 1} + b ^ {n + 1}) (b ^ {n - 1} + 2 b ^ {n - 2} + 2 ^ {2} b ^ {n - 3} + \\dots + 2 ^ {n - 1}) \\geqslant 2 \\sqrt {2 ^ {n + 1} b ^ {n + 1}} \\cdot n \\sqrt [ n ]{2 ^ {\\frac {n (n - 1)}{2}} b ^ {\\frac {n (n - 1)}{2}}} \\\\ = n \\cdot 2 ^ {n + 1} \\cdot b ^ {n}. \\\\ \\end{array}
$$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-3-12",
    topicId: "topic-sec-4-3",
    title: `设数列 a_n 满足 a_1=0,a_n+1=ca_n^3+1-c,n∈Z^+，其中c为实数`,
    content: `设数列 $\\{a_{n}\\}$ 满足 $a_{1}=0,a_{n+1}=ca_{n}^{3}+1-c,n\\in\\mathbf{Z}^{+}$ ，其中c为实数.
(1) 求证: $a_{n} \\in [0,1]$ 对任意 $n \\in Z^{+}$ 成立的充分必要条件是 $c \\in [0,1]$ ;

(2) 设 $0 < c < \\frac{1}{3}$ , 求证: $a_{n} \\geqslant 1 - (3c)^{n-1}, n \\in \\mathbf{Z}^{+}$ ;

(3) 设 $0 < c < \\frac{1}{3}$ ，求证： $a_{1}^{2} + a_{2}^{2} + \\cdots + a_{n}^{2} > n + 1 - \\frac{2}{1 - 3c}, n \\in Z^{+}$ .`,
    preview: `设数列 满足 a_1=0,a_n+1=ca_n^3+1-c,n^+ ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-3-12-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `（1）必要性：因为 $a_{1}=0$ ，所以 $a_{2}=1-c$ 。

又因为 $a_{2} \\in [0,1]$ ，所以 $0 \\leqslant 1 - c \\leqslant 1$ ，即 $c \\in [0,1]$ .

充分性: 设 $c \\in [0,1]$ ，对 $n \\in Z^{+}$ 用数学归纳法证明 $a_{n} \\in [0,1]$ .

当 n=1 时， $a_{1}=0\\in[0,1]$ . 假设 $a_{k}\\in[0,1](k\\geqslant1)$ ,

则 $a_{k + 1} = ca_k^3 +1 - c\\leqslant c + 1 - c = 1$ ，且 $a_{k + 1} = ca_k^3 +1 - c\\geqslant 1 - c\\geqslant 0.$

所以 $a_{k+1} \\in [0,1]$ .

由数学归纳法知 $a_{n} \\in [0,1]$ 对所有 $n \\in Z^{+}$ 成立.

(2) 设 $0 < c < \\frac{1}{3}$ ，当 n = 1 时， $a_{1} = 0$ ，结论成立，当 $n \\geqslant 2$ 时，

因为 $a_{n} = ca_{n - 1}^{3} + 1 - c$ ，所以 $1 - a_{n} = c(1 - a_{n - 1})(1 + a_{n - 1} + a_{n - 1}^{2})$

因为 $0 < c < \\frac{1}{3}$ , 由(1)知 $a_{n-1} \\in [0,1]$ , 所以 $1 + a_{n-1} + a_{n-1}^2 \\leqslant 3$ 且 $1 - a_{n-1} \\geqslant 0$ .

所以 $1-a_{n}\\leqslant3c(1-a_{n-1})\\leqslant(3c)^{2}(1-a_{n-2})\\leqslant\\cdots\\leqslant(3c)^{n-1}(1-a_{1})=(3c)^{n-1}$

所以 $a_{n} \\geqslant 1 - (3c)^{n - 1} (n \\in \\mathbf{Z}^{+})$ .

(3) 设 $0 < c < \\frac{1}{3}$ ，当 n = 1 时， $a_{1}^{2} = 0 > 2 - \\frac{2}{1 - 3c}$ ，结论成立.

当 $n \\geqslant 2$ 时，由(2)知 $a_{n} \\geqslant 1 - (3c)^{n-1} > 0$ .

所以 $a_{n}^{2}\\geqslant (1 - (3c)^{n - 1})^{2} = 1 - 2(3c)^{n - 1} + (3c)^{2(n - 1)} > 1 - 2(3c)^{n - 1}.$

所以 $a_{1}^{2}+a_{2}^{2}+\\cdots+a_{n}^{2}=a_{2}^{2}+\\cdots+a_{n}^{2}>n-1-2\\left[3c+(3c)^{2}+\\cdots+(3c)^{n-1}\\right]$

$$
= n + 1 - \\frac {2 (1 - (3 c) ^ {n})}{1 - 3 c} > n + 1 - \\frac {2}{1 - 3 c}.
$$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-3-13",
    topicId: "topic-sec-4-3",
    title: `数列 a_n 满足 a_1 = 1 且 a_n + 1 = (1 + 1/n^2 + n)a_n + 1/2^n(n`,
    content: `数列 $\\{a_{n}\\}$ 满足 $a_1 = 1$ 且 $a_{n + 1} = \\left(1 + \\frac{1}{n^2 + n}\\right)a_n + \\frac{1}{2^n}(n\\geqslant 1)$
(1) 证明: $a_{n} \\geqslant 2 (n \\geqslant 2)$ ;

(2)已知不等式 $\\ln(1+x)<x$ 对 x>0 成立, 证明: $a_{n}<\\mathrm{e}^{2}(n\\geqslant1)$ , 其中无理数 $e=2.71828\\cdots$ .

(1) 证法一 由 $a_{n+1} = \\left(1 + \\frac{1}{n^2 + n}\\right)a_n + \\frac{1}{2^n} \\geqslant a_n (n \\geqslant 1)$ , 且 $a_2 = 2$ , 所以, 有 $a_n \\geqslant 2 (n \\geqslant 2)$ .

证法二 (i) 当 n=2 时, $a_{2}=2 \\geqslant 2$ , 不等式成立.

(ii) 假设当 $n=k(k \\geqslant 2)$ 时不等式成立，即 $a_{k} \\geqslant 2 (k \\geqslant 2)$ ,

那么 $a_{k + 1} = \\left(1 + \\frac{1}{k(k + 1)}\\right)a_k + \\frac{1}{2^k}\\geqslant 2.$

这就是说, 当 $n=k+1$ 时不等式成立.

根据(i)(ii)可知: $a_{k}\\geqslant2$ 对所有 $n\\geqslant2$ 成立.

(2)证法一 由递推公式及(1)的结论有

$$
a _ {n + 1} = \\left[ 1 + \\frac {1}{n ^ {2} + n} \\right] a _ {n} + \\frac {1}{2 ^ {n}} \\leqslant \\left(1 + \\frac {1}{n ^ {2} + n} + \\frac {1}{2 ^ {n}}\\right) a _ {n} (n \\geqslant 1).
$$

两边取对数,并利用已知不等式,得

$$
\\ln a _ {n + 1} \\leqslant \\ln \\left(1 + \\frac {1}{n ^ {2} + n} + \\frac {1}{2 ^ {n}}\\right) + \\ln a _ {n} <   \\ln a _ {n} + \\frac {1}{n ^ {2} + n} + \\frac {1}{2 ^ {n}}.
$$

因此， $\\ln a_{n+1}-\\ln a_{n}<\\frac{1}{n(n+1)}+\\frac{1}{2^{n}}\\quad(n\\geqslant1).$

上式从1到 $n - 1$ 求和，可得

$$
\\begin{array}{l} \\ln a _ {n} - \\ln a _ {1} \\leqslant \\frac {1}{1 \\times 2} + \\frac {1}{2 \\times 3} + \\dots + \\frac {1}{(n - 1) n} + \\frac {1}{2} + \\frac {1}{2 ^ {2}} + \\dots + \\frac {1}{2 ^ {n - 1}} \\\\ = 1 - \\frac {1}{2} + \\left(\\frac {1}{2} - \\frac {1}{3}\\right) + \\dots + \\frac {1}{n - 1} - \\frac {1}{n} + \\frac {1}{2} \\times \\frac {1 - \\frac {1}{2 ^ {n - 1}}}{1 - \\frac {1}{2}} = 1 - \\frac {1}{n} + 1 - \\frac {1}{2 ^ {n - 1}} <   2. \\\\ \\end{array}
$$

即 $\\ln a_{n}<2$ , 故 $a_{n}<\\mathrm{e}^{2}(n\\geqslant1)$ .

证法二 由数学归纳法, 易证 $2^{n} > n(n-1)$ 对 $n \\geqslant 2$ 成立, 故

$$
a _ {n + 1} = \\Big (1 + \\frac {1}{n ^ {2} + n} \\Big) a _ {n} + \\frac {1}{2 ^ {n}} <   \\Big [ 1 + \\frac {1}{n (n - 1)} \\Big ] a _ {n} + \\frac {1}{n (n - 1)} (n \\geqslant 2).
$$

$$
\\begin{array}{l} a _ {n + 1} <   (a _ {n} + 1) \\frac {1}{n (n - 1)} + a _ {n} = (a _ {n} + 1) \\left(1 + \\frac {1}{n (n - 1)}\\right) - (a _ {n} + 1) + a _ {n} \\\\ = (a _ {n} + 1) \\left(1 + \\frac {1}{n (n - 1)}\\right) - 1. \\\\ \\end{array}
$$

令 $b_{n} = a_{n} + 1 (n \\geqslant 2)$ ，则 $b_{n+1} < \\left(1 + \\frac{1}{n(n-1)}\\right)b_{n} (n \\geqslant 2)$ .

取对数，并利用已知不等式，得 $\\ln b_{n + 1} < \\ln \\left[1 + \\frac{1}{n(n - 1)}\\right] + \\ln b_n < \\ln b_n + \\frac{1}{n(n - 1)} (n\\geqslant 2)$

上式从2到 $n$ 求和得 $\\ln b_{n + 1} - \\ln b_2\\leqslant \\frac{1}{1\\times 2} +\\frac{1}{2\\times 3} +\\dots +\\frac{1}{n(n - 1)}$

$$
= 1 - \\frac {1}{2} + \\frac {1}{2} - \\frac {1}{3} + \\dots + \\frac {1}{n - 1} - \\frac {1}{n} <   1.
$$

又 $b_{2} = a_{2} + 1 = 3$ 故 $\\ln b_{n + 1} < 1 + \\ln 3, b_{n + 1} < \\mathrm{e}^{1 + \\ln 3} = 3\\mathrm{e}(n\\geqslant 2)$

故 $a_{n + 1} < 3\\mathrm{e} - 1 < \\mathrm{e}^2, n \\geqslant 2$ ，又显然 $a_1 < \\mathrm{e}^2, a_2 < \\mathrm{e}^2$ ，故 $a_n < \\mathrm{e}^2$ 对一切 $n \\geqslant 1$ 成立.`,
    preview: `数列 满足 a_1 = 1 且 (1) 证明: a_n ≥ 2 (n ≥ 2) ; (2)已知不等式 (1+x)<x 对 x>0 成立,`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-3-13-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `评注 两小题的证法一都未用数学归纳法,其中第一小题利用数列的单调性得到结论,第二小题则巧用递推,累加相消,得到结果.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-3-14",
    topicId: "topic-sec-4-3",
    title: `已知数列 a_n 各项均不为 0，其前 n 项和为 S_n，且对任意 n ∈ Z^+ 都有 (1-p)S_n=p-p`,
    content: `已知数列 $\\{a_{n}\\}$ 各项均不为 0，其前 n 项和为 $S_{n}$ ，且对任意 $n \\in Z^{+}$ 都有 $(1-p)S_{n}=p-pa_{n}$ （p 为大于 1 的常数），记 $f(n)=\\frac{1+C_{n}^{1}a_{1}+C_{n}^{2}a_{2}+\\cdots+C_{n}^{n}a_{n}}{2^{n}S_{n}}$ .
(1) 求 $a_{n}$ ; (2) 试比较 $f(n+1)$ 与 $\\frac{p+1}{2p}f(n)$ 的大小 $(n \\in \\mathbf{Z}^{+})$ ;
(3) 求证: $(2n-1)f(n)\\leqslant f(1)+f(2)+\\cdots+f(2n-1)\\leqslant\\frac{p+1}{p-1}\\left[1-\\left(\\frac{p+1}{2p}\\right)^{2n-1}\\right].$`,
    preview: `已知数列 各项均不为 0，其前 n 项和为 S_n ，且对任意 n Z^+ 都有 (1-p)S_n=p-pa_n （p 为大于 1 的常数），`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-3-14-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `（1）因为 $(1-p)S_{n}=p-pa_{n}$ ，①

所以 $(1 - p)S_{n + 1} = p - pa_{n + 1}$ ②

②-①，得 $(1-p)a_{n+1}=-pa_{n+1}+pa_{n}$ ，即 $a_{n+1}=pa_{n}$ .

在①中令 n=1，可得 $a_{1}=p$ .

所以 $\\{a_{n}\\}$ 是首项为 $a_{1}=p$ ，公比为p的等比数列，则 $a_{n}=p^{n}$ .

(2)由(1)可得 $S_{n} = \\frac{p(1 - p^{n})}{1 - p} = \\frac{p(p^{n} - 1)}{p - 1}$ .

$$
1 + C _ {n} ^ {1} a _ {1} + C _ {n} ^ {2} a _ {2} + \\dots + C _ {n} ^ {n} a _ {n} = 1 + p C _ {n} ^ {1} + p ^ {2} C _ {n} ^ {2} + \\dots + C _ {n} ^ {n} p ^ {n} = (1 + p) ^ {n} = (p + 1) ^ {n}.
$$

所以 $f(n) = \\frac{1 + C_n^1 a_1 + C_n^2 a_2 + \\cdots + C_n^n a_n}{2^n S_n} = \\frac{p - 1}{p} \\cdot \\frac{(p + 1)^n}{2^n (p^n - 1)}$ ,

$$
f (n + 1) = \\frac {p - 1}{p} \\cdot \\frac {(p + 1) ^ {n + 1}}{2 ^ {n + 1} (p ^ {n + 1} - 1)}.
$$

而 $\\frac{p + 1}{2p} f(n) = \\frac{p - 1}{p}\\cdot \\frac{(p + 1)^{n + 1}}{2^{n + 1}(p^{n + 1} - p)}$ ，且 $p > 1$

所以 $p^{n + 1} - 1 > p^{n + 1} - p > 0, p - 1 > 0.$ 所以 $f(n + 1) < \\frac{p + 1}{2p} f(n)(n \\in \\mathbf{Z}^+)$ .

(3)由(2)知 $f(1) = \\frac{p + 1}{2p}, f(n + 1) < \\frac{p + 1}{2p} f(n) (n \\in \\mathbf{Z}^{+})$

所以当 $n \\geqslant 2$ 时，

$$
f (n) <   \\frac {p + 1}{2 p} f (n - 1) <   \\left(\\frac {p + 1}{2 p}\\right) ^ {2} f (n - 2) <   \\dots <   \\left(\\frac {p + 1}{2 p}\\right) ^ {n - 1} f (1) = \\left(\\frac {p + 1}{2 p}\\right) ^ {n}.
$$

所以 $f(1) + f(2) + \\dots + f(2n - 1) \\leqslant \\frac{p + 1}{2p} + \\left(\\frac{p + 1}{2p}\\right)^2 + \\dots + \\left(\\frac{p + 1}{2p}\\right)^{2n - 1}$

$= \\frac{p + 1}{p - 1}\\left[1 - \\left(\\frac{p + 1}{2p}\\right)^{2n - 1}\\right]$ (当且仅当 $n = 1$ 时取等号).

另一方面，当 $n \\geqslant 2, k = 1, 2, \\cdots, 2n - 1$ 时，

$$
f (k) + f (2 n - k) = \\frac {p - 1}{p} \\left[ \\frac {(p + 1) ^ {k}}{2 ^ {k} (p ^ {k} - 1)} + \\frac {(p + 1) ^ {2 n - k}}{2 ^ {2 n - k} (p ^ {2 n - k} - 1)} \\right]
$$

$$
\\geqslant \\frac {p - 1}{p} \\cdot 2 \\sqrt {\\frac {(p + 1) ^ {k}}{2 ^ {k} (p ^ {k} - 1)} \\cdot \\frac {(p + 1) ^ {2 n - k}}{2 ^ {2 n - k} (p ^ {2 n - k} - 1)}} = \\frac {p - 1}{p} \\cdot \\frac {2 (p + 1) ^ {n}}{2 ^ {n}} \\sqrt {\\frac {1}{(p ^ {k} - 1) (p ^ {2 n - k} - 1)}}
$$

$$
= \\frac {p - 1}{p} \\cdot \\frac {2 (p + 1) ^ {n}}{2 ^ {n}} \\sqrt {\\frac {1}{p ^ {2 n} - p ^ {k} - p ^ {2 n - k} + 1}}.
$$

因为 $p^k + p^{2n - k} \\geqslant 2p^n$ ，所以 $p^{2n} - p^k - p^{2n - k} + 1 \\leqslant p^{2n} - 2p^n + 1 = (p^n - 1)^2$ .

所以 $f(k) + f(2n - k)\\geqslant \\frac{p - 1}{p}\\cdot \\frac{2(p + 1)^n}{2^n(p^n - 1)} = 2f(n)$ （当且仅当 $k = n$ 时取等号）.

所以 $\\sum_{k=1}^{2n-1} f(k) = \\frac{1}{2} \\sum_{k=1}^{2n-1} [f(k) + f(2n-k)] \\geqslant \\sum_{k=1}^{2n-1} f(n) = (2n-1)f(n)$

(当且仅当 n = 1 时取等号).

综上所述， $(2n - 1)f(n)\\leqslant \\sum_{k = 1}^{2n - 1}f(k)\\leqslant \\frac{p + 1}{p - 1}\\Big[1 - \\left(\\frac{p + 1}{2p}\\right)^{2n - 1}\\Big](n\\in \\mathbf{Z}^{+}).$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-3-15",
    topicId: "topic-sec-4-3",
    title: `设数列 a_n 的前 n 项和为 S_n, a_1=1, a_2=6, a_3=11`,
    content: `设数列 $\\{a_{n}\\}$ 的前 n 项和为 $S_{n}, a_{1}=1, a_{2}=6, a_{3}=11$ ,
且 $(5n-8)S_{n+1}-(5n+2)S_{n}=An+B,n=1,2,3,\\cdots$ ，其中A,B为常数.

(1)求 A 与 B 的值;
(2)证明:数列 $\\{a_{n}\\}$ 为等差数列;
(3)证明:不等式 $\\sqrt{5a_{mn}}-\\sqrt{a_{m}a_{n}}>1$ 对任何正整数m,n都成立.`,
    preview: `设数列 的前 n 项和为 S_n, a_1=1, a_2=6, a_3=11 , 且 ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-3-15-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)由 $a_{1}=1, a_{2}=6, a_{3}=11$ ，得 $S_{1}=1, S_{2}=7, S_{3}=18$ .

把 n=1,2 分别代入

$$
(5 n - 8) S _ {n + 1} - (5 n + 2) S _ {n} = A n + B,
$$

得 $\\left\\{\\begin{aligned}A+B&=-28,\\\\ 2A+B&=-48,\\end{aligned}\\right.$ 解得，A=-20,B=-8.

(2)由(1)知, $5n(S_{n+1}-S_{n})-8S_{n+1}-2S_{n}=-20n-8,$

即 $5na_{n + 1} - 8S_{n + 1} - 2S_n = -20n - 8.$ ①

又 $5(n + 1)a_{n + 2} - 8S_{n + 2} - 2S_{n + 1} = -20(n + 1) - 8,$ ②

②-①, 得 $5(n+1)a_{n+2}-5na_{n+1}-8a_{n+2}-2a_{n+1}=-20$ ,

即 $(5n-3)a_{n+2}-(5n+2)a_{n+1}=-20.$ ③

又 $(5n+2)a_{n+3}-(5n+7)a_{n+2}=-20.$ ④

④-③，得 $(5n+2)(a_{n+3}-2a_{n+2}+a_{n+1})=0$ ，

消去 $5n+2$ ，得 $a_{n+3}-2a_{n+2}+a_{n+1}=0$ ，

由此，有 $a_{n + 3} - a_{n + 2} = a_{n + 2} - a_{n + 1} = \\dots = a_3 - a_2 = 5$ ，又 $a_2 - a_1 = 5$

因此，数列 $\\{a_{n}\\}$ 是首项为1，公差为5的等差数列.

(3)由(2)知, $a_{n}=5n-4(n\\in\\mathbf{Z}^{+})$ .

证法一 $5a_{mn}=5(5mn-4)=25mn-20.$

$$
(\\sqrt {a _ {m} a _ {n}} + 1) ^ {2} = a _ {m} a _ {n} + 2 \\sqrt {a _ {m} a _ {n}} + 1 \\leqslant a _ {m} a _ {n} + a _ {m} + a _ {n} + 1 = 2 5 m n - 1 5 (m + n) + 9,
$$

故 $5a_{mn} - (\\sqrt{a_m a_n + 1})^2 \\geqslant 15(m + n) - 29 \\geqslant 15 \\times 2 - 29 = 1 > 0.$

即 $5a_{mn} > (\\sqrt{a_m a_n} + 1)^2$ ，所以 $\\sqrt{5a_{mn}} > \\sqrt{a_m a_n} + 1$ .

因此， $\\sqrt{5a_{mn}}-\\sqrt{a_{m}a_{n}}>1.$

证法二 $\\sqrt{5a_{mn}}-\\sqrt{a_{m}a_{n}}>1$ , 即 $5a_{mn}>(\\sqrt{a_{m}a_{n}}+1)^{2}$

将 $a_{n} = 5n - 4(n\\in \\mathbf{Z}^{+})$ 代入，

得 $5(5mn-4) > (\\sqrt{(5m-4)(5n-4)} + 1)^{2}$ ,

展开并整理得,原不等式等价于

$20(m+n)-37>2\\sqrt{(5m-4)(5n-4)}$ ，配方得

$$
(\\sqrt {5 m - 4} - \\sqrt {5 n - 4}) ^ {2} > 2 9 - 1 5 (m + n).
$$

由于 $m+n \\geqslant 2$ ，故 $29-15(m+n) < 0$ ，

因此， $(\\sqrt{5m-4}-\\sqrt{5n-4})^{2}>29-15(m+n)$ 对任何正整数 m, n 都成立，由此得证.

评注 (1)运用了方程的思想,(2)运用了阶差的方法,(3)的两种解法实际上都体现了转化与化归的思想,这也是解决不等式问题的常用策略.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-3-16",
    topicId: "topic-sec-4-3",
    title: `已知定义在 R 上的函数 f_n(x)(n Z^+)`,
    content: `已知定义在 R 上的函数 $f_{n}(x)(n \\in \\mathbf{Z}^{+})$ 具有下列性质：
① $f_{n}(0)=\\frac{1}{2}$ ; ② $n\\left[f_{n}\\left(\\frac{k+1}{n}\\right)-f_{n}\\left(\\frac{k}{n}\\right)\\right]=\\left[f_{n}\\left(\\frac{k}{n}\\right)-1\\right]f_{n}\\left(\\frac{k+1}{n}\\right)(k=0,1,2,\\cdots,n).$

(1) 当 n 为定值时，记 $a_{k}=\\frac{1}{f_{n}\\left(\\frac{k}{n}\\right)}$ ，求 $a_{k}$ 的表达式 $(k=0,1,2,\\cdots,n)$ ;
(2) 对 $n \\in Z^{+}$ ，证明： $\\frac{1}{4} < f_{n}(1) \\leqslant \\frac{1}{3}$ .`,
    preview: `已知定义在 R 上的函数 f_n(x)(n Z^+) 具有下列性质： ① f_n(0)=1/2 ; ② (1) 当 n 为定值时，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-3-16-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 因为 $n\\left[f_n\\left(\\frac{k+1}{n}\\right)-f_n\\left(\\frac{k}{n}\\right)\\right]=\\left[f_n\\left(\\frac{k}{n}\\right)-1\\right]f_n\\left(\\frac{k+1}{n}\\right)$ ,

所以 $(n+1)f_{n}\\left(\\frac{k+1}{n}\\right)-nf_{n}\\left(\\frac{k}{n}\\right)=f_{n}\\left(\\frac{k}{n}\\right)f_{n}\\left(\\frac{k+1}{n}\\right)$

即 $\\frac{n + 1}{f_n\\left(\\frac{k}{n}\\right)} -\\frac{n}{f_n\\left(\\frac{k + 1}{n}\\right)} = 1,$

所以 $(n+1)a_{k}-na_{k+1}=1$ ，所以 $n(a_{k+1}-1)=(n+1)(a_{k}-1)$ ，即 $\\frac{a_{k+1}-1}{a_{k}-1}=1+\\frac{1}{n}$ ，

由 $n$ 为定值，则数列 $\\{a_k - 1\\}$ 是以 $a_0 - 1$ 为首项，以 $1 + \\frac{1}{n}$ 为公比的等比数列，

所以 $a_{k}-1=(a_{0}-1)\\left(1+\\frac{1}{n}\\right)^{k}$ ，由于 $a_{0}=\\frac{1}{f_{n}(0)}=2$ ，所以 $a_{k}=1+\\left(1+\\frac{1}{n}\\right)^{k}(k=0,1,\\cdots,n)$ .

(2) 因为 $a_{k}=\\frac{1}{f_{n}\\left(\\frac{k}{n}\\right)}$ ，所以 $f_{n}(1)=\\frac{1}{a_{n}}=\\frac{1}{1+\\left(1+\\frac{1}{n}\\right)^{n}}$

欲证 $\\frac{1}{4}<f_{n}(1)\\leqslant\\frac{1}{3}$ ，只需证明 $3\\leqslant1+\\left(1+\\frac{1}{n}\\right)^{n}<4$ ，

即只需证明 $2 \\leqslant \\left(1 + \\frac{1}{n}\\right)^{n} < 3$ ,

因为 $\\left(1+\\frac{1}{n}\\right)^{n}=1+C_{n}^{1}\\frac{1}{n}+C_{n}^{2}\\frac{1}{n^{2}}+\\cdots+C_{n}^{n}\\frac{1}{n^{n}}=1+1+\\cdots\\geqslant2,$

又 $\\left(1+\\frac{1}{n}\\right)^{n}=1+C_{n}^{1}\\frac{1}{n}+C_{n}^{2}\\frac{1}{n^{2}}+\\cdots+C_{n}^{n}\\frac{1}{n^{n}}$

$$
\\begin{array}{l} = 1 + 1 + \\frac {n (n - 1)}{2 n ^ {2}} + \\dots + \\frac {n (n - 1) \\cdot \\cdots \\cdot 2 \\cdot 1}{n ! n ^ {n}} \\\\ \\leqslant 1 + 1 + \\frac {1}{2 !} + \\dots + \\frac {1}{n !} \\\\ <   1 + 1 + \\frac {1}{2} + \\frac {1}{2 ^ {2}} + \\dots + \\frac {1}{2 ^ {n}} \\\\ = 2 + \\frac {\\frac {1}{2} \\left[ 1 - \\left(\\frac {1}{2}\\right) ^ {n} \\right]}{1 - \\frac {1}{2}} \\\\ = 3 - \\left(\\frac {1}{2}\\right) ^ {n} <   3. \\\\ \\end{array}
$$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-3-17",
    topicId: "topic-sec-4-3",
    title: `数列 a_n 的各项均为正值, a_1=1,对任意 n∈ Z^+`,
    content: `数列 $\\{a_{n}\\}$ 的各项均为正值, $a_{1}=1$ ,对任意 $n\\in Z^{+}$ ,
$a_{n + 1}^2 - 1 = 4a_n(a_n + 1), b_n = \\log_2(a_n + 1)$ 都成立.

(1)求数列 $\\{a_{n}\\}$ 与 $\\{b_{n}\\}$ 的通项公式；

(2) 当 k > 7 且 $k \\in Z^{+}$ 时，证明对任意 $n \\in Z^{+}$ 都有 $\\frac{1}{b_{n}} + \\frac{1}{b_{n+1}} + \\frac{1}{b_{n+2}} + \\cdots + \\frac{1}{b_{nk-1}} > \\frac{3}{2}$ 成立.`,
    preview: `数列 的各项均为正值, a_1=1 ,对任意 n Z^+ , 都成立. (1)求数列 与 的通项公式； (2) 当 k > 7 且 k Z^+ 时，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-3-17-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)不难得到 $a_{n}=2^{n}-1, b_{n}=n.$

(2)求证的问题即为: 当 k > 7 且 $k \\in Z^{+}$ 时, 对任意 $n \\in Z^{+}$ , 都有

$$
\\frac {1}{n} + \\frac {1}{n + 1} + \\frac {1}{n + 2} + \\dots + \\frac {1}{n k - 1} > \\frac {3}{2}. \\tag {*}
$$

证法一 下面证明(\\*)式.

令 $S=\\frac{1}{n}+\\frac{1}{n+1}+\\frac{1}{n+2}+\\cdots+\\frac{1}{nk-2}+\\frac{1}{nk-1}$ ,

则 $S = \\frac{1}{nk - 1} +\\frac{1}{nk - 2} +\\frac{1}{nk - 3} +\\dots +\\frac{1}{n + 1} +\\frac{1}{n},$

所以 $2S = \\left(\\frac{1}{n} +\\frac{1}{nk - 1}\\right) + \\left(\\frac{1}{n + 1} +\\frac{1}{nk - 2}\\right) + \\left(\\frac{1}{n + 2} +\\frac{1}{nk - 3}\\right) + \\dots +\\left(\\frac{1}{nk - 1} +\\frac{1}{n}\\right).$

当 $x > 0, y > 0$ 时， $(x + y)\\left(\\frac{1}{x} + \\frac{1}{y}\\right) = 2 + \\frac{y}{x} + \\frac{x}{y} \\geqslant 4$ ，当且仅当 $x = y$ 时等号成立.

故 $\\frac{1}{x}+\\frac{1}{y}\\geqslant\\frac{4}{x+y}$ ，当且仅当x=y时等号成立.

在 $2S=\\left(\\frac{1}{n}+\\frac{1}{nk-1}\\right)+\\left(\\frac{1}{n+1}+\\frac{1}{nk-2}\\right)+\\left(\\frac{1}{n+2}+\\frac{1}{nk-3}\\right)+\\cdots+\\left(\\frac{1}{nk-1}+\\frac{1}{n}\\right)$ 中，k>7, n>0，且 $n+1, n+2, \\cdots, nk-1$ 全为正，所以

$$
2 S > \\frac {4}{n + n k - 1} + \\frac {4}{n + 1 + n k - 2} + \\frac {4}{n + 2 + n k - 3} + \\dots + \\frac {4}{n k - 1 + n} = \\frac {4 n (k - 1)}{n + n k - 1},
$$

所以 $S > \\frac{2(k - 1)}{1 + k - \\frac{1}{n}} >\\frac{2(k - 1)}{1 + k} = 2\\left(1 - \\frac{2}{k + 1}\\right) > 2\\left(1 - \\frac{2}{7 + 1}\\right) = \\frac{3}{2}$ ，证毕.

证法二（利用添舍项放缩）因 k>7 且 $k \\in Z^{+}$ ，故对任意 $n \\in Z^{+}$ 有

$$
\\begin{array}{l} \\frac {1}{n} + \\frac {1}{n + 1} + \\frac {1}{n + 2} + \\dots + \\frac {1}{n k - 1} \\\\ \\geqslant \\left(\\frac {1}{n} + \\frac {1}{n + 1} + \\frac {1}{n + 2} + \\dots + \\frac {1}{2 n}\\right) + \\left(\\frac {1}{2 n + 1} + \\frac {1}{2 n + 2} + \\frac {1}{3 n + 3} + \\dots + \\frac {1}{3 n}\\right) + \\dots + \\\\ \\left(\\frac {1}{6 n + 1} + \\frac {1}{6 n + 2} + \\frac {1}{6 n + 3} + \\dots + \\frac {1}{7 n}\\right) + \\left(\\frac {1}{7 n + 1} + \\frac {1}{7 n + 2} + \\frac {1}{7 n + 3} + \\dots + \\frac {1}{8 n - 1}\\right) \\\\ > \\left(\\frac {1}{n + 1} + \\frac {1}{n + 2} + \\dots + \\frac {1}{2 n}\\right) + \\left(\\frac {1}{2 n + 1} + \\frac {1}{2 n + 2} + \\dots + \\frac {1}{3 n}\\right) + \\dots + \\left(\\frac {1}{6 n + 1} + \\frac {1}{6 n + 2} + \\dots + \\frac {1}{7 n}\\right) \\\\ > \\left(\\frac {1}{2 n} + \\frac {1}{2 n} + \\dots + \\frac {1}{2 n}\\right) + \\left(\\frac {1}{3 n} + \\frac {1}{3 n} + \\dots \\frac {1}{3 n}\\right) + \\dots + \\left(\\frac {1}{7 n} + \\frac {1}{7 n} + \\dots + \\frac {1}{7 n}\\right) \\\\ = n \\cdot \\frac {1}{2 n} + n \\cdot \\frac {1}{3 n} + \\dots + n \\cdot \\frac {1}{7 n} = \\frac {1}{2} + \\frac {1}{3} + \\dots + \\frac {1}{7} = \\frac {2 2 3}{1 4 0} > \\frac {3}{2}, \\text {证毕.} \\\\ \\end{array}
$$

证法三（利用平均值不等式放缩）平均值不等式的内容为：设 $x_{1}, x_{2}, \\cdots, x_{n}$ 是 $n$ 个正实数，则 $\\sqrt{\\frac{x_1^2 + x_2^2 + \\cdots + x_n^2}{2}} \\geqslant \\frac{x_1 + x_2 + \\cdots + x_n}{n} \\geqslant \\sqrt[n]{x_1 x_2 \\cdot \\cdots \\cdot x_n} \\geqslant \\frac{n}{\\frac{1}{x_1} + \\frac{1}{x_2} + \\cdots + \\frac{1}{x_n}}$ 当且仅且 $x_{1} = x_{2} = \\cdots = x_{n}$ 时等号成立.

由平均值不等式可得

$$
\\frac {n + (n + 1) + (n + 2) + \\cdots + (n k - 1)}{n k - n} \\geqslant \\frac {n k - n}{\\frac {1}{n} + \\frac {1}{n + 1} + \\frac {1}{n + 2} + \\cdots + \\frac {1}{n k - 1}},
$$

所以对于 $k > 7, k \\in \\mathbf{Z}^{+}$ 且 $n \\in \\mathbf{Z}^{+}$ , 有

$$
\\begin{array}{l} \\frac {1}{n} + \\frac {1}{n + 1} + \\frac {1}{n + 2} + \\dots + \\frac {1}{n k - 1} \\geqslant \\frac {(n k - n) ^ {2}}{n + (n + 1) + (n + 2) + \\cdots + (n k - 1)} \\\\ = \\frac {(n k - n) ^ {2}}{\\frac {(n k - n) (n + n k - 1)}{2}} = \\frac {2 n (k - 1)}{n + n k - 1} = \\frac {2 (k - 1)}{k + 1 - \\frac {1}{n}} \\\\ > \\frac {2 (k - 1)}{k + 1} = 2 - \\frac {4}{k + 1} > 2 - \\frac {4}{7 + 1} = \\frac {3}{2}. \\\\ \\end{array}
$$

证法四（利用定积分放缩）设函数 $f(x) = \\frac{1}{x} (x > 0)$ ，其图像如图4-3-2所示，因函数 $f(x)$ 在 $(0, +\\infty)$ 上是向下凸的，可知，在区间 $[n, nk]$ （其中 $k > 7, k \\in \\mathbf{Z}^{+}$ 且 $n \\in \\mathbf{Z}^{+}$ ）上的所有小矩形的面积之和大于曲边梯形的面积，即

![](images/1591eca8b99e12acf4aec71d292e9151d43d5ad906aea920f2cc8733d38f5573.jpg)
图4-3-2

$$
\\frac {1}{n} + \\frac {1}{n + 1} + \\frac {1}{n + 2} + \\dots + \\frac {1}{n k - 1} > \\int_ {n} ^ {n k} \\frac {1}{x} \\mathrm{d} x = \\ln x | _ {n} ^ {n k} = \\ln n k - \\ln n =
$$

$\\ln k > \\ln 7 > \\frac{3}{2}$ （由于 $\\ln 7^2 > \\ln 3^3 > \\ln e^3 = 3$ ，故 $\\ln 7 > \\frac{3}{2}$ ），证毕.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-3-18",
    topicId: "topic-sec-4-3",
    title: `已知数列 a_n 各项为正且满足 a_1 > a_2, a_n+1 = √(a_n + 1/4) (n ∈ Z^+)`,
    content: `已知数列 $\\{a_{n}\\}$ 各项为正且满足 $a_1 > a_2, a_{n+1} = \\sqrt{\\frac{a_n + 1}{4}} (n \\in \\mathbf{Z}^+)$ .
(1)求证: $a_{n}>a_{n+1}$ .
(2) 令 $b_n = \\frac{n(a_n - a_{n+1})}{a_1 - a_2}$ ，记数列 $\\{b_n\\}$ 的前 $n$ 和为 $S_n$ ，求证： $S_n < \\frac{25}{16}$ .`,
    preview: `已知数列 各项为正且满足 . (1)求证: a_n>a_n+1 . (2) 令 b_n = n(a_n - a_n+1)a_1 - a_2 ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-3-18-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `(1)由 $a_{n} - a_{n + 1} = \\sqrt{\\frac{a_{n - 1} + 1}{4}} -\\sqrt{\\frac{a_{n} + 1}{4}} = \\frac{a_{n - 1} - a_n}{4\\left(\\sqrt{\\frac{a_{n - 1} + 1}{4}} + \\sqrt{\\frac{a_n + 1}{4}}\\right)}$

因为 $\\sqrt{\\frac{a_{n - 1} + 1}{4}} +\\sqrt{\\frac{a_n + 1}{4}} >0$ ，所以 $a_{n} - a_{n + 1}$ 与 $a_1 - a_2$ 同号，由已知 $a_1 > a_2$ ，知 $a_{n} > a_{n + 1}$

(2)由已知及(1)知 $a_1 > a_2 > \\dots > a_n > 0$ ，所以 $a_{n+1}^2 = \\frac{a_n + 1}{4} < a_{n+1}a_n$ ，得 $a_{n+1} > \\frac{a_n + 1}{4a_n}$ 。另一方面，由 $a_{n+1}^2 = \\frac{a_n + 1}{4}$ 得 $4a_{n+1}^2 - a_n = 1$ ，同理 $4a_n^2 - a_{n-1} = 1$ ，

两式相减，得 $4(a_{n}^{2} - a_{n + 1}^{2}) = a_{n - 1} - a_{n}$

所以有 $\\frac{a_n - a_{n + 1}}{a_{n - 1} - a_n} = \\frac{1}{4(a_n + a_{n + 1})} < \\frac{1}{4a_n + \\frac{a_n + 1}{a_n}} = \\frac{1}{4a_n + \\frac{1}{a_n} + 1} \\leqslant \\frac{1}{2\\sqrt{4a_n\\times\\frac{1}{a_n}} + 1} = \\frac{1}{5},$

所以 $a_{n} - a_{n + 1} <   \\frac{1}{5} (a_{n - 1} - a_{n}) <   \\dots <  \\frac{1}{5^{n - 1}} (a_{1} - a_{2}),$

由此得 $b_{n} = \\frac{n(a_{n} - a_{n + 1})}{a_{1} - a_{2}} < \\frac{n}{5^{n - 1}}, S_{n} = b_{1} + b_{2} + \\dots + b_{n} < 1 + \\frac{2}{5} + \\frac{3}{5^{2}} + \\dots + \\frac{n}{5^{n - 1}}.$

由错位相减法，令 $T_{n}=1+\\frac{2}{5}+\\frac{3}{5^{2}}+\\cdots+\\frac{n}{5^{n-1}}$ ，两边同乘 $\\frac{1}{5}$ ，

得 $\\frac{1}{5} T_{n} = \\frac{1}{5} +\\frac{2}{5^{2}} +\\frac{3}{5^{3}} +\\dots +\\frac{n - 1}{5^{n - 1}} +\\frac{n}{5^{n}}.$

两式相减,得

$$
\\begin{array}{l} \\frac {4}{5} T _ {n} = 1 + \\frac {1}{5} + \\frac {1}{5 ^ {2}} + \\frac {1}{5 ^ {3}} + \\dots + \\frac {1}{5 ^ {n - 1}} - \\frac {n}{5 ^ {n}} \\\\ = \\frac {1 - \\frac {1}{5 ^ {n}}}{1 - \\frac {1}{5}} - \\frac {n}{5 ^ {n}} = \\frac {5}{4} - \\left(\\frac {5}{4} + n\\right) \\cdot \\frac {1}{5 ^ {n}}, \\\\ \\end{array}
$$

所以 $T_{n} = \\frac{25}{16} -\\frac{5}{4}\\left(\\frac{5}{4} +n\\right)\\cdot \\frac{1}{5^{n}} <  \\frac{25}{16},$ 所以 $S_{n} <   T_{n} <   \\frac{25}{16}.$`,
      },
      {
        id: "prob-sec-4-3-18-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `(1)由已知,易知 $a_{n + 1}^2 = \\frac{a_n + 1}{4}$ ,

所以 $a_{n} > a_{n + 1}\\Leftrightarrow a_{n}^{2} > a_{n + 1}^{2} = \\frac{a_{n} + 1}{4}\\Leftrightarrow a_{n} > \\frac{1 + \\sqrt{17}}{8},$

以下用数学归纳法,证明 $a_{n}>\\frac{1+\\sqrt{17}}{8}$ .

①当 $n = 1$ 时， $a_1 > a_2, a_2 = \\sqrt{\\frac{a_1 + 1}{4}}$ ，可解得 $a_1 > \\frac{1 + \\sqrt{17}}{8}$ .
②假设 $a_{k} > \\frac{1 + \\sqrt{17}}{8}$ , 当 $n = k + 1$ 时,

$$
a _ {k + 1} = \\sqrt {\\frac {a _ {k} + 1}{4}} > \\sqrt {\\frac {\\frac {1 + \\sqrt {1 7}}{8} + 1}{4}} = \\frac {\\sqrt {1 8 + 2 \\sqrt {1 7}}}{8} = \\frac {1 + \\sqrt {1 7}}{8}.
$$

(2) $b_{n}=\\frac{n(a_{n}-a_{n+1})}{a_{1}-a_{2}}=n\\cdot\\frac{a_{n}-a_{n+1}}{a_{n-1}-a_{n}}\\cdot\\frac{a_{n-1}-a_{n}}{a_{n-2}-a_{n-1}}\\cdot\\cdots\\cdot\\frac{a_{2}-a_{3}}{a_{1}-a_{2}}.$

又由 $a_{n + 1}^2 = \\frac{a_n + 1}{4}$ 得 $4a_{n + 1}^2 -a_n = 1.$ 同理 $4a_{n}^{2} - a_{n - 1} = 1$

两式相减，得 $4(a_{n}^{2} - a_{n + 1}^{2}) = a_{n - 1} - a_{n}$

所以有 $\\frac{a_{n}-a_{n+1}}{a_{n-1}-a_{n}}=\\frac{1}{4(a_{n}+a_{n+1})}$ ,

所以，由(1)知 $a_{n}>\\frac{1+\\sqrt{17}}{8}$ ,

$$
\\begin{array}{l} b _ {n} = n \\cdot \\frac {1}{4 (a _ {n} + a _ {n + 1})} \\cdot \\frac {1}{4 (a _ {n - 1} + a _ {n})} \\cdot \\dots \\cdot \\frac {1}{4 (a _ {2} + a _ {3})} <   n \\cdot \\frac {1}{4 ^ {n - 1} \\left(2 \\times \\frac {1 + \\sqrt {1 7}}{8}\\right) ^ {n - 1}} \\\\ = \\frac {n}{(1 + \\sqrt {1 7}) ^ {n - 1}} <   \\frac {n}{5 ^ {n - 1}}, \\\\ \\end{array}
$$

以下同

评注 本题是笔者给杭州师范大学附属中学2016届高三5月仿真考命制的理科压轴题.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-3-19",
    topicId: "topic-sec-4-3",
    title: `已知正数数列 a_n 满足: 2a_n^2<a_n-a_n+1`,
    content: `已知正数数列 $\\{a_{n}\\}$ 满足: $2a_{n}^{2}<a_{n}-a_{n+1}$ .
(1) 求证: $a_{n} \\in \\left(0, \\frac{1}{2}\\right)$ ;
(2) 求证: 当 $n \\in N, n \\geqslant 2$ 时, $a_{n} < \\frac{1}{2n+4}$ .`,
    preview: `已知正数数列 满足: 2a_n^2<a_n-a_n+1 . (1) 求证: a_n (0, 1/2) ; (2) 求证: 当 n N, n ≥ 2`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-3-19-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 因为 $2a_{n}^{2} < a_{n} - a_{n+1}$ , 所以 $0 < a_{n+1} < a_{n} - 2a_{n}^{2} = a_{n}(1 - 2a_{n})$ ,

所以 $a_{n} \\in \\left(0, \\frac{1}{2}\\right)$ .

(2) 因为 $2a_{n}^{2} < a_{n} - a_{n+1}$ , 所以 $a_{2} < a_{1} - 2a_{1}^{2}$ .

因为 $a_1 \\in \\left(0, \\frac{1}{2}\\right)$ , 所以 $a_1 - 2a_1^2 \\leqslant \\frac{1}{8}$ , 即 $a_2 < \\frac{1}{8}$ ,

因为 $\\frac{1}{a_{n+1}}-\\frac{1}{a_{n}}=\\frac{a_{n}-a_{n+1}}{a_{n}\\cdot a_{n+1}}>$ $\\frac{2a_{n}^{2}}{a_{n}\\cdot a_{n+1}}=\\frac{2a_{n}}{a_{n+1}}$

又由 $2a_{n}^{2} < a_{n} - a_{n + 1}$ ，得 $a_{n + 1} < a_n$ ，所以 $\\frac{1}{a_{n + 1}} -\\frac{1}{a_n} >2.$

当 $n \\geqslant 3$ 时，

$$
\\frac {1}{a _ {n}} = \\frac {1}{a _ {2}} + \\left(\\frac {1}{a _ {3}} - \\frac {1}{a _ {2}}\\right) + \\left(\\frac {1}{a _ {4}} - \\frac {1}{a _ {3}}\\right) + \\dots + \\left(\\frac {1}{a _ {n}} - \\frac {1}{a _ {n - 1}}\\right) > 8 + 2 (n - 2) = 2 n + 4,
$$

所以， $n\\geqslant 2$ 时， $a_{n} <   \\frac{1}{2n + 4}$

评注 本题为杭师大附中 2017 届学生高三最后一次模拟考最后一题,难度中等.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-3-20",
    topicId: "topic-sec-4-3",
    title: `已知数列 a_n 的各项均为正数,且对于任意的 k≥2,k∈ N 均满足:`,
    content: `已知数列 $\\{a_{n}\\}$ 的各项均为正数,且对于任意的 $k\\geqslant2,k\\in N$ 均满足:
① $a_{k+1} + a_{k-1} > 2a_{k}$ ，② $a_{1} + a_{2} + \\cdots + a_{k} < 1$ 。求证：

(1) 对任意的 $m, n \\in Z^{+}, m \\neq n$ ，均有 $a_{n} - a_{m} > (n - m)(a_{m+1} - a_{m})$ ;
(2) 当 $n \\geqslant 2$ 时， $a_{1} - \\frac{2(n-1)}{n} < a_{n} < a_{1}$ .`,
    preview: `已知数列 的各项均为正数,且对于任意的 k≥2,k N 均满足: ① a_k+1 + a_k-1 > 2a_k ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-3-20-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)由①知,对任意 $k\\geqslant 2,k\\in \\mathbf{N}$ ，均有 $a_{k + 1} - a_k > a_k - a_{k - 1}$

所以，当 $n > m$ 时，有

$$
a _ {n} - a _ {m} = (a _ {n} - a _ {n - 1}) + (a _ {n - 1} - a _ {n - 2}) + \\dots + (a _ {m + 1} - a _ {m}) > (n - m) (a _ {m + 1} - a _ {m}).
$$

当 $n < m$ 时，有

$$
a _ {m} - a _ {n} = (a _ {m} - a _ {m - 1}) + (a _ {m - 1} - a _ {m - 2}) + \\dots + (a _ {n - 1} - a _ {n}) <   (m - n) (a _ {m + 1} - a _ {m}).
$$

即 $a_{n} - a_{m} > (n - m)(a_{m + 1} - a_{m}).$

所以对于任意的 $m, n \\in \\mathbf{Z}^{+}, m \\neq n$ ，均有 $a_{n} - a_{m} > (n - m)(a_{m + 1} - a_{m})$ .

(2)先证明 $a_{n}<a_{1}$ . 由②知 $a_{n}<1$ , 又 $a_{n}>0$ ,

所以,对任意 $n \\in Z^{+}, 0 < a_{n} < 1$ ,

又由(1)知 $a_{n} > a_{m} + (n - m)(a_{m + 1} - a_{m}) > (n - m)(a_{m + 1} - a_{m})$

所以 $a_{m + 1} - a_m < \\frac{a_n}{n - m} < \\frac{1}{n - m}$ 对任意 $n\\in \\mathbf{Z}^{+}$ 均成立，

所以当 $n\\to \\infty$ 时，有 $\\frac{1}{n - m}\\rightarrow 0$ ，所以， $a_{m + 1} - a_m <   0$

从而有 $n \\geqslant 2$ 时 $a_{n} < a_{1}$ .

再证明 $a_{n} > a_{1} - \\frac{2(n - 1)}{n}$

由(1)知对任意 $k \\in Z^{+}$ ，均有

$$
\\begin{array}{l} a _ {k} > a _ {m} + (k - m) (a _ {m + 1} - a _ {m}) = a _ {m + 1} + (k - m - 1) (a _ {m + 1} - a _ {m}) \\\\ > (k - m - 1) (a _ {m + 1} - a _ {m}) = (m + 1 - k) (a _ {m} - a _ {m + 1}). \\\\ \\end{array}
$$

令 $k=1,2,3,\\cdots,m$ ，得 m 个不等式，将其相加，利用条件②得

$$
\\begin{array}{l} 1 > a _ {1} + a _ {2} + \\dots + a _ {k} \\\\ > [ m (m + 1) - (1 + 2 + \\dots + m) ] (a _ {m} - a _ {m + 1}) \\\\ = \\frac {m (m + 1)}{2} (a _ {m} - a _ {m + 1}), \\\\ \\end{array}
$$

所以 $a_{m} - a_{m + 1} <   \\frac{2}{m(m + 1)} = 2\\left(\\frac{1}{m} -\\frac{1}{m + 1}\\right).$

令 $m=1,2,3,\\cdots,n-1$ , 得 n-1 个不等式，

相加，得

$a_1 - a_n < 2\\left(1 - \\frac{1}{n}\\right)$ , 化简, 得 $a_n > a_1 - \\frac{2(n - 1)}{n}$ .

综上，可得当 $n \\geqslant 2$ 时， $a_1 - \\frac{2(n-1)}{n} < a_n < a_1$ .

评注 本题是笔者为 2017 届高三命制的原创压轴题,有凸数列的背景.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-3-21",
    topicId: "topic-sec-4-3",
    title: `已知数列 a_n 的各项均为正数`,
    content: `已知数列 $\\{a_{n}\\}$ 的各项均为正数.
(1) 若 $a_{1}=2, a_{n+1}=2-\\frac{1}{a_{n}}$ ，求 $a_{n}$ ;
(2) 若 $a_{n+1} < 2 - \\frac{1}{a_n}$ , 求证: 当 $n \\geqslant 3$ 时, $1 \\leqslant a_n < \\frac{3}{2}$ .`,
    preview: `已知数列 的各项均为正数. (1) 若 a_1=2, a_n+1=2-1/a_n ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-3-21-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)由 $a_{n + 1} = 2 - \\frac{1}{a_n}$ , 得 $a_{n + 1} - 1 = 1 - \\frac{1}{a_n} = \\frac{a_n - 1}{a_n}$ , 两边取倒数, 得

$$
\\frac {1}{a _ {n + 1} - 1} = \\frac {a _ {n}}{a _ {n} - 1} = 1 + \\frac {1}{a _ {n} - 1} = 2 + \\frac {1}{a _ {n - 1} - 1} = \\dots = n + \\frac {1}{a _ {1} - 1} = n + 1,
$$

由此解得 $a_{n} = 1 + \\frac{1}{n}$

(2)先证明 $a_{n} < \\frac{3}{2} (n\\geqslant 3)$ .因为 $a_{n} > 0$ ，所以 $a_{n + 1} <   2 - \\frac{1}{a_n} <  2$ ，得 $0 <   a_{n} <   2(n\\geqslant 2)$

又 $a_{n + 1} <   2 - \\frac{1}{a_n} <  2 - \\frac{1}{2} = \\frac{3}{2}(n\\geqslant 2)$ ，所以 $a_{n} <   \\frac{3}{2} (n\\geqslant 3)$

再证 $a_{n} \\geqslant 1$ ，用反证法. 假设存在 $k \\in \\mathbf{Z}^{+}$ ，使得 $a_{k} < 1$ .

由于 $a_{n + 1} <   2 - \\frac{1}{a_n}$ ，所以 $1 - a_{n + 1} > \\frac{1}{a_n} -1 = \\frac{1 - a_n}{a_n},$

所以 $1 - a_{k + m} > \\frac{1 - a_{k + m - 1}}{a_{k + m - 1}} > \\frac{1 - a_{k + m - 2}}{a_{k + m - 2}a_{k + m - 1}} > \\cdots > \\frac{1 - a_k}{a_k a_{k + 1} \\cdots a_{k + m - 1} a_{k + m}} > 0,$

故 $a_{k + m} < 1$ 对 $m \\in \\mathbf{Z}^{+}$ 成立，即 $a_{n} < 1$ 对 $n \\geqslant k$ 成立.

故由 $1 - a_{n + 1} > \\frac{1 - a_n}{a_n} (n\\geqslant k)$ 可得 $\\frac{1}{1 - a_{n + 1}} <  \\frac{a_n}{1 - a_n} = \\frac{1}{1 - a_n} -1(n\\geqslant k),$

取 $m = \\max \\left\\{k, \\left[\\frac{1}{1 - a_k}\\right] + 1\\right\\}$ , 其中 $[x]$ 表示不超 $x$ 的最大整数，

则 $\\frac{1}{1-a_{k}}>\\frac{1}{1-a_{k+1}}+1>\\frac{1}{1-a_{k+2}}+2>\\cdots>\\frac{1}{1-a_{k+m}}+m>m$ ，这与m的定义矛盾，

所以假设不成立,因此对 $n \\geqslant 1$ 有 $a_{n} \\geqslant 1$ . 综上有 $1 \\leqslant a_{n} < \\frac{3}{2} (n \\geqslant 3)$ .

评注 这是笔者为2017届高三学生最后复习时编制的难题. 两小题既有递推等式, 又有递推不等式, 第(2)问有一定的难度, 颇具“杀伤力”, 能完整解答的寥寥无几. 当然, 在假设存在 $k \\in \\mathbf{Z}^{+}$ , 使得 $a_{k} < 1$ 前提下证明 $a_{n} < 1$ 对 $n \\geqslant k$ 成立时, 也可利用以下更简便的方法: $a_{n+1} - a_{n} < 2 - \\frac{1}{a_{n}} - a_{n} = -\\frac{(a_{n} - 1)^{2}}{a_{n}} \\leqslant 0$ , 即 $a_{n+1} \\leqslant a_{n}$ , 所以 $a_{k+m} < 1$ 对 $m \\in \\mathbf{Z}^{+}$ 成立, 即 $a_{n} < 1$ 对 $n \\geqslant k$ 成立.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-3-22",
    topicId: "topic-sec-4-3",
    title: `已知数列 a_n 满足: 当 n≥2 时, a_n-1+a_n+1≥2a_n`,
    content: `已知数列 $\\{a_{n}\\}$ 满足: 当 $n\\geqslant2$ 时, $a_{n-1}+a_{n+1}\\geqslant2a_{n}$ .
(1) 若 $a_{1}=1, a_{2018}=2018$ ，求证： $a_{2} \\leqslant 2$ ;
(2)若存在 $n_0 \\geqslant 2, n_0 \\in \\mathbf{Z}^+$ 使得 $a_1 + a_2 + \\cdots + a_{n_0} = 1$ , 求证: $a_1 + a_{n_0} \\geqslant \\frac{2}{n_0}$ .

证明 (1) 当 $n \\geqslant 2$ 时, $a_{n+1} - a_n \\geqslant a_n - a_{n-1} \\geqslant \\cdots \\geqslant a_2 - a_1$ , 所以

$$
a _ {2 0 1 8} = (a _ {2 0 1 8} - a _ {2 0 1 7}) + (a _ {2 0 1 7} - a _ {2 0 1 6}) + \\dots + (a _ {2} - a _ {1}) + a _ {1} \\geqslant 2 0 1 7 (a _ {2} - a _ {1}) + a _ {1}.
$$

化简得 $a_2 \\leqslant 2$ .

(2) 先证明: $(k-1)(a_{n_{0}}-a_{1})\\geqslant(n_{0}-1)(a_{k}-a_{1}), k=2,3,\\cdots,n_{0}-1.$

方法一: 当 $n_{0} \\geqslant 2$ 时, 设 $a_{n} - a_{n-1} = d_{n}$ , 则 $d_{n} \\geqslant d_{n-1} \\geqslant \\cdots \\geqslant d_{2}$ .

$$
a _ {n _ {0}} - a _ {k} = (a _ {n _ {0}} - a _ {n _ {0} - 1}) + (a _ {n _ {0} - 1} - a _ {n _ {0} - 2}) + \\dots + (a _ {k + 1} - a _ {k}) \\geqslant (n _ {0} - k) d _ {k + 1},
$$

即 $\\frac{a_{n_0} - a_k}{n_0 - k} \\geqslant d_{k+1}$ .

又 $a_{k} - a_{1} = (a_{k} - a_{k - 1}) + (a_{k - 1} - a_{k - 2}) + \\dots +(a_{2} - a_{1})\\leqslant (k - 1)d_{k}$ ，即 $\\frac{a_k - a_1}{k - 1}\\leqslant d_k,$

所以 $\\frac{a_{n_{0}}-a_{k}}{n_{0}-k}\\geqslant d_{k+1}\\geqslant d_{k}\\geqslant\\frac{a_{k}-a_{1}}{k-1}$ ，即 $\\frac{a_{n_{0}}-a_{k}}{n_{0}-k}\\geqslant\\frac{a_{k}-a_{1}}{k-1}$

所以 $(k-1)(a_{n_{0}}-a_{k})\\geqslant(n_{0}-k)(a_{k}-a_{1})$ ,

而 $a_{n_0} - a_1 = a_{n_0} - a_k + a_k - a_1$

所以 $(k-1)(a_{n_{0}}-a_{k})+(k-1)(a_{k}-a_{1})\\geqslant(n_{0}-k)(a_{k}-a_{1})+(k-1)(a_{k}-a_{1})$ ,

即 $(k-1)(a_{n_{0}}-a_{1})\\geqslant(n_{0}-1)(a_{k}-a_{1}).$

方法二: 注意到 $(k-1)\\left[(a_{n_{0}}-a_{n_{0}-1})+(a_{n_{0}-1}-a_{n_{0}-2})+\\cdots+(a_{2}-a_{1})\\right]$ 与 $(n_{0}-1)\\left[(a_{k}-a_{k-1})+(a_{k-1}-a_{k-2})+\\cdots+(a_{2}-a_{1})\\right]$ 展开式都有 $(k-1)(n_{0}-1)$ 项，且前者各项与后者各项比，总能找到比后者式子中的某一项大，所以

$$
\\begin{array}{l} (k - 1) \\big [ (a _ {n _ {0}} - a _ {n _ {0} - 1}) + (a _ {n _ {0} - 1} - a _ {n _ {0} - 2}) + \\dots + (a _ {2} - a _ {1}) \\big ] \\\\ \\geqslant (n _ {0} - 1) \\left[ (a _ {k} - a _ {k - 1}) + (a _ {k - 1} - a _ {k - 2}) + \\dots + (a _ {2} - a _ {1}) \\right], \\\\ \\end{array}
$$

即 $(k-1)(a_{n_{0}}-a_{1})\\geqslant(n_{0}-1)(a_{k}-a_{1}).$

上式中，k 用 $2,3,\\cdots,n_{0}-1$ 代替，得到 $n_{0}-1$ 个不等式，将其相加，得

$$
[ 1 + 2 + \\dots + (n _ {0} - 1) ] (a _ {n _ {0}} - a _ {1}) \\geqslant (n _ {0} - 1) [ a _ {2} + a _ {3} + \\dots + a _ {n _ {0}} - (n _ {0} - 1) a _ {1} ],
$$

即 $\\frac{n_0(n_0 - 1)}{2} (a_{n_0} - a_1)\\geqslant (n_0 - 1)[(1 - a_1) - (n_0 - 1)a_1]$ ，整理得 $a_1 + a_{n_0}\\geqslant \\frac{2}{n_0}$`,
    preview: `已知数列 满足: 当 n≥2 时, a_n-1+a_n+1≥2a_n . (1) 若 a_1=1, a_2018=2018 ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-3-22-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `评注 本题是笔者为杭州高级中学2018届高三备考提供的原创题,有一定难度.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-3-23",
    topicId: "topic-sec-4-3",
    title: `设点 A_n(x_n,0), P_n(x_n,2^n-1)`,
    content: `设点 $A_{n}(x_{n},0), P_{n}(x_{n},2^{n-1})$ 和抛物线 $C_{n}: y = x^{2} + a_{n}x + b_{n} (n \\in \\mathbf{Z}^{+})$ , 其中 $a_{n} = -2 - 4n - \\frac{1}{2^{n-1}}, x_{n}$ 由以下方法得到: $x_{1} = 1$ , 点 $P_{2}(x_{2},2)$ 在抛物线 $C_{1}: y = x^{2} + a_{1}x + b_{1}$ 上, 点 $A_{1}(x_{1},0)$ 到 $P_{2}$ 的距离是 $A_{1}$ 到 $C_{1}$ 上点的最短距离, $\\cdots$ , 点 $P_{n+1}(x_{n+1},2^{n})$ 在抛物线 $C_{n}: y = x^{2} + a_{n}x + b_{n}$ 上, 点 $A_{n}(x_{n},0)$ 到 $P_{n+1}$ 的距离是 $A_{n}$ 到 $C_{n}$ 上点的最短距离.
(1) 求 $x_{2}$ 及 $C_{1}$ 的方程；
(2) 证明: $\\{x_{n}\\}$ 是等差数列.`,
    preview: `设点 A_n(x_n,0), P_n(x_n,2^n-1) 和抛物线 , 其中 a_n = -2 - 4n - 1/2^n-1, x_n 由以下方法得到: x_`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-3-23-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `（1）由题意得 $A_{1}(1,0)$ , $C_{1}: y = x^{2} - 7x + b_{1}$ ，设点 $P(x, y)$ 是 $C_{1}$ 上任意一点，则

$$
| A _ {1} P | = \\sqrt {(x - 1) ^ {2} + y ^ {2}} = \\sqrt {(x - 1) ^ {2} + (x ^ {2} - 7 x + b _ {1}) ^ {2}},
$$

令 $f(x) = (x - 1)^2 +(x^2 -7x + b_1)^2$

则 $f^{\\prime}(x) = 2(x - 1) + 2(x^{2} - 7x + b_{1})(2x - 7)$

由题意得 $f'(x_{2})=0$ ，即 $2(x_{2}-1)+2(x_{2}^{2}-7x_{2}+b_{1})(2x_{2}-7)=0$ .

又 $P_{2}(x_{2},2)$ 在 $C_{1}$ 上，所以 $2=x_{2}^{2}-7x_{2}+b_{1}$ ，解得 $x_{2}=3, b_{1}=14$ .

因此， $C_1$ 的方程为 $y = x^{2} - 7x + 14.$

(2) 证法一 设点 $P(x, y)$ 是 $C_{n}$ 上任意一点，

则 $|A_{n}P| = \\sqrt{(x - x_{n})^{2} + y^{2}} = \\sqrt{(x - x_{n})^{2} + (x^{2} + a_{n}x + b_{n})^{2}},$

令 $g(x) = (x - x_n)^2 + (x^2 + a_n x + b_n)^2$

则 $g'(x)=2(x-x_{n})+2(x^{2}+a_{n}x+b_{n})(2x+a_{n})$ ，由题意得 $g'(x_{n+1})=0$ ，

即 $2(x_{n + 1} - x_n) + 2(x_{n + 1}^2 +a_nx_{n + 1} + b_n)(2x_{n + 1} + a_n) = 0,$

又由 $2^{n} = x_{n + 1}^{2} + a_{n}x_{n + 1} + b_{n}$

所以 $(x_{n+1}-x_{n})+2^{n}(2x_{n+1}+a_{n})=0(n\\geqslant1)$ ,

即 $(1+2^{n+1})x_{n+1}-x_{n}+2^{n}a_{n}=0.$ (\\*)

下面用数学归纳法证明 $x_{n}=2n-1$ .

① 当 n=1 时, $x_{1}=1$ , 等式成立;
② 假设当 n=k 时，等式成立，即 $x_{k}=2k-1$ ，则当 $n=k+1$ 时，

由（\\*）式知 $(1 + 2^{k + 1})x_{k + 1} - x_k + 2^k a_k = 0$ ，又 $a_k = -2 - 4k - \\frac{1}{2^{k - 1}}$

所以 $x_{k+1}=\\frac{x_{k}-2^{k}a_{k}}{1+2^{k+1}}=2k+1$ ，即 $n=k+1$ 时，等式成立.

由①②知,等式对 $n \\in Z^{+}$ 成立,故 $\\{x_{n}\\}$ 是等差数列.

证法二 由导数的几何意义知曲线 $C_n$ 在点 $P_{n+1}(x_{n+1},2^n)$ 处切线的斜率为 $k_{1} = 2x_{n+1} + a_{n}$ , 直线 $A_{n}P_{n+1}$ 的斜率为 $k_{2} = \\frac{2^{n}}{x_{n+1} - x_{n}}$ ,

因为点 $A_{n}(x_{n},0)$ 到 $P_{n + 1}$ 的距离是 $A_{n}$ 到 $C_n$ 上点的最短距离，

所以有 $k_{1}k_{2} = \\frac{2^{n}}{x_{n + 1} - x_{n}}\\cdot (2x_{n + 1} + a_{n}) = -1$ ，化简得 $(1 + 2^{n + 1})x_{n + 1} - x_n + 2^n a_n = 0$ 将 $a_{n} = -2 - 4n - \\frac{1}{2^{n - 1}}$ 代入并整理，得 $(1 + 2^{n + 1})x_{n + 1} - x_n - 2^{n + 1} - 4n\\cdot 2^n -2 = 0,$

$$
(1 + 2 ^ {n + 1}) [ x _ {n + 1} - (2 n + 1) ] = x _ {n} - (2 n - 1),
$$

即 $[x_{n + 1} - (2n + 1)] = \\frac{1}{1 + 2^{n + 1}} [x_n - (2n - 1)] = \\frac{1}{(1 + 2^{n + 1})(1 + 2^n)} [x_{n - 1} - (2n - 3)]$

$$
= \\dots = \\frac {1}{(2 ^ {n + 1} + 1) (2 ^ {n} + 1) \\cdot \\cdots \\cdot (2 ^ {2} + 1)} (x _ {1} - 1) = 0,
$$

所以， $x_{n} = 2n - 1$ ， $\\{x_{n}\\}$ 是等差数列.

评注 本题以解析几何为背景,以导数的几何意义为依托,通过方程思想建立关系式.其中证法二通过观察、递推,得到通项公式,比用数学归纳法巧妙、简洁.数学归纳法是解决数列问题比较有效的方法,但不是唯一的方法,也未必是最理想的方法.因此,在复习时有必要多掌握一些解决数列综合题的方法,只有这样才能事半功倍,锦上添花.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-3-24",
    topicId: "topic-sec-4-3",
    title: `已知函数 f(x)=x^3+x^2`,
    content: `已知函数 $f(x)=x^{3}+x^{2}$ ，数列 $\\{x_{n}\\}(x_{n}>0)$ 的第一项 $x_{1}=1$ ，以后各项按如下方式取定：曲线 $y=f(x)$ 在 $(x_{n+1},f(x_{n+1}))$ 处的切线与经过 $(0,0)$ 和 $(x_{n},f(x_{n}))$ 两点的直线平行（如图4-3-3所示），求证：当 $n\\in Z^{+}$ 时，
![](images/a668c823a4cc496328040554ac28753ac8b09951a1209e828a7758fba55398d6.jpg)
图4-3-3

(1) $x_{n}^{2}+x_{n}=3x_{n+1}^{2}+2x_{n+1};$
(2) $\\left(\\frac{1}{2}\\right)^{n-1} \\leqslant x_n \\leqslant \\left(\\frac{1}{2}\\right)^{n-2}$ .`,
    preview: `已知函数 f(x)=x^3+x^2 ，数列 的第一项 x_1=1 ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-3-24-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 因为 $f'(x)=3x^{2}+2x$ ,

所以曲线 $y=f(x)$ 在 $(x_{n+1},f(x_{n+1}))$ 处的切线斜率

$$
k _ {n + 1} = 3 x _ {n + 1} ^ {2} + 2 x _ {n + 1}.
$$

因为过(0,0)和 $(x_{n},f(x_{n}))$ 两点的直线斜率是 $x_{n}^{2}+x_{n}$ ，所以

$$
x _ {n} ^ {2} + x _ {n} = 3 x _ {n + 1} ^ {2} + 2 x _ {n + 1}.
$$

(2)因为函数 $h(x)=x^{2}+x$ 当 x>0 时单调递增，

而 $x_{n}^{2} + x_{n} = 3x_{n + 1}^{2} + 2x_{n + 1}$

$$
\\begin{array}{l} \\leqslant 4 x _ {n + 1} ^ {2} + 2 x _ {n + 1} \\\\ = (2 x _ {n + 1}) ^ {2} + 2 x _ {n + 1}, \\\\ \\end{array}
$$

所以 $x_{n}\\leqslant 2x_{n + 1}$ ，即 $\\frac{x_{n + 1}}{x_n}\\geqslant \\frac{1}{2}$

因此 $x_{n} = \\frac{x_{n}}{x_{n - 1}}\\cdot \\frac{x_{n - 1}}{x_{n - 2}}\\cdot \\dots \\cdot \\frac{x_2}{x_1}\\geqslant \\left(\\frac{1}{2}\\right)^{n - 1}.$

又因为 $x_{n}^{2} + x_{n}\\geqslant 2(x_{n + 1}^{2} + x_{n + 1})$

令 $y_{n} = x_{n}^{2} + x_{n}$ ，则 $\\frac{y_{n + 1}}{y_n}\\leqslant \\frac{1}{2}.$

因为 $y_{1}=x_{1}^{2}+x_{1}=2$ ,

所以 $y_{n}\\leqslant \\left(\\frac{1}{2}\\right)^{n - 1}\\cdot y_{1} = \\left(\\frac{1}{2}\\right)^{n - 2}.$

因此 $x_{n}\\leqslant x_{n}^{2} + x_{n}\\leqslant \\left(\\frac{1}{2}\\right)^{n - 2},$

故 $\\left(\\frac{1}{2}\\right)^{n-1}\\leqslant x_{n}\\leqslant\\left(\\frac{1}{2}\\right)^{n-2}.$

评注 本题主要考查函数的导数、数列、不等式等基础知识,以及不等式的证明.解答时首先要将题设中两直线平行转化为斜率相等,从而得到递推关系式,然后充分利用这一关系进行放缩.本题证明长度不大,但思维量很大,对不等式证明的技巧性要求较高.若用数学归纳法证明会发现,证明左边的不等式难度不大,但证明右边部分则困难重重,需要证明其加强命题方可.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-3-25",
    topicId: "topic-sec-4-3",
    title: `如图 4-3-4 所示, 已知动圆与直线 y = -3`,
    content: `如图 4-3-4 所示, 已知动圆与直线 y = -3 相切, 并与定圆 $x^{2} + y^{2} = 1$ 相内切.
(1)求动圆圆心的轨迹 C.
(2)过原点作斜率为1的直线交曲线C于 $P_{1}(P_{1}$ 为第一象限点)，又过 $P_{1}$ 作斜率为 $\\frac{1}{2}$ 的直线交曲线C于 $P_{2}$ ，再过 $P_{2}$ 作斜率为 $\\frac{1}{4}$ 的直线交曲线C于 $P_{3},\\cdots$ ，如此继续，一般地，过 $P_{n}$ 作斜率为 $\\frac{1}{2^{n}}$ 的直线交曲线C于 $P_{n+1}$ ，设 $P_{n}(x_{n},y_{n})$ ，

![](images/5d4fce9476f888c7f31611be808473dc0ec6a604160873def00df0403beb5568.jpg)

图4-3-4

①令 $b_{n} = x_{2n + 1} - x_{2n - 1}$ ，求证：数列 $\\{b_n\\}$ 是等比数列；
②设数列 $\\{b_{n}\\}$ 的前n项和为 $S_{n}$ ，试比较 $\\frac{3}{4}S_{n}+1$ 与 $\\frac{1}{3n+10}$ 的大小.`,
    preview: `如图 4-3-4 所示, 已知动圆与直线 y = -3 相切, 并与定圆 x^2 + y^2 = 1 相内切. (1)求动圆圆心的轨迹 C. (2)过原点作斜率`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-3-25-sol-0",
        title: `解答`,
        method: "creative",
        steps: [],
        explanation: `(1)由题意知, $P$ 点到原点的距离等于 $P$ 点到直线 $y = -2$ 的距离, 由抛物线定义知, $P$ 点轨迹是以坐标原点为焦点, 直线 $y = -2$ 为准线的抛物线, 其轨迹方程为 $x^{2} = 4(y + 1)$ , 表示抛物线.

(2)①设 $P_{n}(x_{n},y_{n}),P_{n + 1}(x_{n + 1},y_{n + 1})$ ，则 $x_{n}^{2} = 4(y_{n} + 1),x_{n + 1}^{2} = 4(y_{n + 1} + 1)$

又由直线 $P_{n}P_{n + 1}$ 的斜率为 $\\frac{1}{2^n}$ ，得 $\\frac{y_{n + 1} - y_n}{x_{n + 1} - x_n} = \\frac{1}{2^n}$ .

因此， $\\frac{1}{4}\\times\\frac{x_{n+1}^{2}-x_{n}^{2}}{x_{n+1}-x_{n}}=\\frac{1}{2^{n}}$ ，即 $x_{n+1}+x_{n}=\\frac{1}{2^{n-2}}$

$$
b _ {n} = x _ {2 n + 1} - x _ {2 n - 1} = (x _ {2 n + 1} + x _ {2 n}) - (x _ {2 n} + x _ {2 n - 1}) = \\frac {1}{2 ^ {2 n - 2}} - \\frac {1}{2 ^ {2 n - 3}} = - \\frac {1}{2 ^ {2 n - 2}}.
$$

所以，数列 $\\{b_n\\}$ 是以 $\\frac{1}{4}$ 为公比的等比数列.

②由①知 $b_{n}=-\\frac{1}{2^{2n-2}}$ ，所以 $S_{n}=-\\left(1+\\frac{1}{2^{2}}+\\cdots+\\frac{1}{2^{2n-2}}\\right)=-\\frac{4}{3}\\left(1-\\frac{1}{4^{n}}\\right)$ .

整理得 $\\frac{3}{4} S_n + 1 = \\frac{1}{4^n}$ ，因此只要比较 $4^n$ 与 $3n + 10$ 的大小.

当 n=1 时，4<13，所以 $4^{n}<3n+10$ ，当 n=2 时，16=16，所以 $4^{n}=3n+10$ ；

当 n=3 时，64>19， $4^{n}>3n+10$ ，

猜测当 $n \\geqslant 3, n \\in Z^{+}$ 时， $4^{n} > 3n + 10$ .

证法一 用数学归纳法证明 $n \\geqslant 3, n \\in \\mathbf{Z}^{+}$ 时， $4^{n} > 3n + 10$ .

(i) 当 $n = 3$ 时, 显然成立;
(ii) 假设当 $n=k(k \\geqslant 3, k \\in \\mathbf{Z}^{+})$ 时， $4^{k} > 3k + 10$ ，则当 $n = k + 1$ 时，

$$
4 ^ {k + 1} = 4 \\times 4 ^ {k} > 4 (3 k + 1 0) = [ 3 (k + 1) + 1 0 ] + 9 k + 2 7 > 3 (k + 1) + 1 0,
$$

即当 $n=k+1$ 时， $4^{n}>3n+10$ 也成立，

由(i)(ii)知 $4^{n} > 3n + 10$ 对 $n\\geqslant 3,n\\in \\mathbf{Z}^{+}$ 都成立.

证法二 利用二项式定理得

$$
\\begin{array}{l} 4 ^ {n} = (1 + 3) ^ {n} = 1 + C _ {n} ^ {1} \\times 3 + C _ {n} ^ {2} \\times 3 ^ {2} + \\dots + C _ {n} ^ {n} \\times 3 ^ {n} \\\\ \\geqslant 1 + 3 n + \\frac {n (n - 1)}{2} \\times 3 ^ {2} > 1 + 3 n + 9 = 3 n + 1 0 (n \\geqslant 3). \\\\ \\end{array}
$$

评注 高考题与竞赛题的最大区别就是前者往往有“梯”可攀，如本题从抛物线定义，斜率公式入手得到递推关系式 $x_{n+1} + x_n = \\frac{1}{2^{n-2}}$ ，根据题设“ $b_n = x_{2n+1} - x_{2n-1}$ ”的提示构造以下关系式实现顺利过渡： $x_{2n+1} - x_{2n-1} = (x_{2n+1} + x_{2n}) - (x_{2n} + x_{2n-1})$ 。如果要增加难度，可舍去此提示，直接让考生求 $x_n$ 。此时则需要运用递推的方法，如可将 $x_{n+1} + x_n = \\frac{1}{2^{n-2}}$ 式子两边同除以 $(-1)^{n+1}$ ，得 $\\frac{x_{n+1}}{(-1)^{n+1}} - \\frac{x_n}{(-1)^n} = \\frac{1}{(-1)^{n+1} \\cdot 2^{n-2}}$ ，令 $a_n = \\frac{x_n}{(-1)^n}$ ，再由累加恒等式 $a_n = (a_n - a_{n-1}) + (a_{n-1} - a_{n-2}) + \\cdots + (a_2 - a_1) + a_1$ 求得。`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-3-26",
    topicId: "topic-sec-4-3",
    title: `过点 P(1,0) 作曲线 C: y = x^k (x ∈ (0, +∈fty), k ∈`,
    content: `过点 $P(1,0)$ 作曲线 $C: y = x^{k} (x \\in (0, +\\infty), k \\in \\mathbf{Z}^{+}, k > 1)$ 的切线切点为 $Q_{1}$ ，设 $Q_{1}$ 点在 x 轴上的投影是点 $P_{1}$ ；又过点 $P_{1}$ 作曲线 C 的切线切点为 $Q_{2}$ ，设 $Q_{2}$ 点在 x 轴上的投影是点 $P_{2}$ ；…；依此下去，得到一系列点 $Q_{1}, Q_{2}, \\cdots, Q_{n}, \\cdots$ ，设点 $Q_{n}$ 的横坐标是 $a_{n}$ .
(1) 求证: $a_{n}=\\left(\\frac{k}{k-1}\\right)^{n}, n\\in\\mathbf{Z}^{+}$ ;
(2) 求证: $a_{n} \\geqslant 1 + \\frac{n}{k - 1}$ ;
(3) 求证: $\\sum_{i=1}^{n}\\frac{i}{a_{i}}<k^{2}-k$ (注: $\\sum_{i=1}^{n}a_{i}=a_{1}+a_{2}+\\cdots+a_{n}$ ).`,
    preview: `过点 P(1,0) 作曲线 的切线切点为 Q_1 ，设 Q_1 点在 x 轴上的投影是点 P_1 ；又过点 P_1 作曲线 C 的切线切点为 Q_2 ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-3-26-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)为了求切线的斜率,只要对 $y=x^{k}$ 求导数,得 $y'=kx^{k-1}$ .

若切点是 $Q_{n}(a_{n}, a_{n}^{k})$ ，则切线方程是 $y - a_{n}^{k} = k a_{n}^{k-1}(x - a_{n})$ .

当 n=1 时, 切线过点 $P(1,0)$ ,

即 $0 - a_{1}^{k} = ka_{1}^{k - 1}(1 - a_{1})$ ，得 $a_1 = \\frac{k}{k - 1}$

当 n>1 时，切线过点 $P_{n-1}(a_{n-1},0)$ ，

即 $0 - a_{n}^{k} = ka_{n}^{k - 1}(a_{n - 1} - a_{n})$ ，得 $\\frac{a_n}{a_{n - 1}} = \\frac{k}{k - 1}$

所以，数列 $\\{a_{n}\\}$ 是首项为 $\\frac{k}{k - 1}$ ，公比为 $\\frac{k}{k - 1}$ 的等比数列， $a_{n} = \\left(\\frac{k}{k - 1}\\right)^{n}, n \\in \\mathbf{Z}^{+}$ .

(2)应用二项式定理,得

$$
\\begin{array}{l} a _ {n} = \\left(\\frac {k}{k - 1}\\right) ^ {n} = \\left(1 + \\frac {1}{k - 1}\\right) ^ {n} \\\\ = \\underbrace {C _ {n} ^ {0} + C _ {n} ^ {1} \\frac {1}{k - 1} + C _ {n} ^ {2} \\left(\\frac {1}{k - 1}\\right) ^ {2} + \\cdots + C _ {n} ^ {n} \\left(\\frac {1}{k - 1}\\right) ^ {n}} _ {\\text {至少2项}} \\geqslant C _ {n} ^ {0} + C _ {n} ^ {1} \\frac {1}{k - 1} = 1 + \\frac {n}{k - 1}. \\\\ \\end{array}
$$

(3)证法一 记 $S_{n}=\\frac{1}{a_{1}}+\\frac{2}{a_{2}}+\\cdots+\\frac{n-1}{a_{n-1}}+\\frac{n}{a_{n}}$ ，则 $\\frac{k-1}{k}\\cdot S_{n}=\\frac{1}{a_{2}}+\\frac{2}{a_{3}}+\\cdots+\\frac{n-1}{a_{n}}+\\frac{n}{a_{n+1}}$

两式错位相减，得 $\\left(1-\\frac{k-1}{k}\\right)S_{n}=\\frac{1}{a_{1}}+\\frac{1}{a_{2}}+\\cdots+\\frac{1}{a_{n}}-\\frac{n}{a_{n+1}}<\\frac{1}{a_{1}}+\\frac{1}{a_{2}}+\\cdots+\\frac{1}{a_{n}}$

$\\frac{1}{k} S_{n}< \\frac{\\frac{k-1}{k}\\left[1-\\left(\\frac{k-1}{k}\\right)^{n}\\right]}{1-\\frac{k-1}{k}}< k-1$ ，故 $S_{n}< k^{2}-k$ .

证法二 令 $f(x) = x + {x}^{2} + {x}^{3} + \\cdots  + {x}^{n}$ ,即 $f\\left( x\\right)  = \\frac{x\\left( {1 - {x}^{n}}\\right) }{1 - x}$ .

$$
f ^ {\\prime} (x) = x ^ {0} + 2 x ^ {1} + 3 x ^ {2} + \\dots + n x ^ {n - 1} = \\left[ \\frac {x}{1 - x} \\cdot (1 - x ^ {n}) \\right] ^ {\\prime} = \\frac {1 - x ^ {n}}{(1 - x) ^ {2}} - \\frac {n x ^ {n}}{1 - x}.
$$

令 $g(x)=xf'(x)=x^{1}+2x^{2}+3x^{3}+\\cdots+nx^{n}=\\frac{x(1-x^{n})}{(1-x)^{2}}-\\frac{nx^{n+1}}{1-x}.$

当 $x = \\frac{k - 1}{k}$ 时， $g\\left(\\frac{k - 1}{k}\\right) = \\frac{\\frac{k - 1}{k} \\cdot \\left[1 - \\left(\\frac{k - 1}{k}\\right)^n\\right]}{\\left[1 - \\left(1 - \\frac{1}{k}\\right)\\right]^2} - \\frac{n\\left(\\frac{k - 1}{k}\\right)^{n + 1}}{1 - \\left(\\frac{k - 1}{k}\\right)}.$

$$
g (x) = k \\cdot (k - 1) \\Big [ 1 - \\Big (\\frac {k - 1}{k} \\Big) ^ {n} - n k \\Big (\\frac {k - 1}{k} \\Big) ^ {n + 1} \\Big ] <   k ^ {2} - k.
$$

故 $S_{n} < k^{2} - k$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-3-27",
    topicId: "topic-sec-4-3",
    title: `已知函数 y=f(x) 的图像是自原点出发的一条折线`,
    content: `已知函数 $y=f(x)$ 的图像是自原点出发的一条折线, 如图 4-3-5 所示.
当 $n \\leqslant y \\leqslant n + 1 (n = 0, 1, 2, \\cdots)$ 时，该图像是斜率为 $b^{n}$ 的线段（其中 b 为正常数， $b \\neq 1$ ），该数列 $\\{x_{n}\\}$ 由 $f(x_{n}) = n (n = 1, 2, \\cdots)$ 定义.

![](images/961349ad3367972272c7ce79e176c0c6214170d4b5a3d012bf3eb6ce1b9eefdb.jpg)
图4-3-5

(1) 求 $x_{1}, x_{2}$ 和 $x_{n}$ 的表达式.
(2) 求 $f(x)$ 的表达式, 并写出其定义域.
(3) 求证: $f(x)$ 的图像与 y = x 的图像没有横坐标大于 1 的交点.`,
    preview: `已知函数 y=f(x) 的图像是自原点出发的一条折线, 如图 4-3-5 所示. 当 时，该图像是斜率为 b^n 的线段（其中 b 为正常数，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-3-27-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `这是一道把数列、函数、解析几何等知识联系起来的综合题,主要考查函数、等比数列及直线方程等基础知识,对归纳推理能力、逻辑思维能力有着较高的要求.

(1)由题意易知, 当 $0 \\leqslant y \\leqslant 1$ 时, 图像为线段 y = x, 且 $f(0) = 0, x_{1} = 1$ .

记 $x_0 = 0$ ，则 $\\frac{f(x_{n + 1}) - f(x_n)}{x_{n + 1} - x_n} = b^n$ ，即 $x_{n + 1} - x_n = b^{-n}(n = 0,1,2,\\dots)$ ，利用累差叠加法有：

$$
x _ {1} - x _ {0} = 1, x _ {2} - x _ {1} = \\frac {1}{b}, x _ {3} - x _ {2} = \\frac {1}{b ^ {2}}, \\dots , x _ {n} - x _ {n - 1} = \\frac {1}{b ^ {n - 1}}.
$$

以上各式相加，得 $x_{n}-x_{0}=1+\\frac{1}{b}+\\frac{1}{b^{2}}+\\cdots+\\frac{1}{b^{n-1}}$

因为 $b \\neq 1, x_0 = 0$ ，所以 $x_n = \\frac{1 - \\frac{1}{b^n}}{1 - \\frac{1}{b}} = \\frac{b - \\frac{1}{b^{n-1}}}{b - 1}$ .

故 $x_{1} = 1, x_{2} = 1 + \\frac{1}{b}, x_{n} = \\frac{1}{b - 1}\\left(b - \\frac{1}{b^{n - 1}}\\right)$ .

(2) 设 $x \\in [x_n, x_{n+1}]$ , 其中 $x_0 = 0$ , 则 $f(x) - f(x_n) = b^n (x - x_n)$ ,

所以 $f(x)=n+b^{n}(x-x_{n})(x_{n}\\leqslant x\\leqslant x_{n+1},n=0,1,2,\\cdots)$ .

考察 $x_{n}=\\frac{b}{b-1}-\\frac{1}{b-1}\\left(\\frac{1}{b}\\right)^{n-1}$ :

当 $b > 1$ 时，因为 $0 < \\left(\\frac{1}{b}\\right)^{n - 1} \\leqslant b$ ，所以 $0 \\leqslant x_{n} < \\frac{b}{b - 1}$
当 $0 < b < 1$ 时，因为 $b \\leqslant \\left(\\frac{1}{b}\\right)^{n-1}$ ，所以 $x_{n} \\geqslant 0 (n \\in \\mathbf{Z}^{+})$ .

综上所述，当 $b > 1$ 时， $y = f(x)$ 的定义域为 $\\left[0, \\frac{b}{b - 1}\\right)$ ;

当 0 < b < 1 时， $y = f(x)$ 的定义域为 $[0, +\\infty)$ .

(3) 当 b > 1 时，对一切 $x \\in \\left(1, \\frac{b}{b-1}\\right)$ ，存在 $x_{n} < x \\leqslant x_{n+1} (n = 1, 2, \\cdots)$ ,

有 $f(x) = n + b^{n}(x - x_{n}) > n + x - x_{n}$

又 $x_{n} = 1 + \\frac{1}{b} +\\frac{1}{b^{2}} +\\dots +\\frac{1}{b^{n - 1}} <   1 + (n - 1) = n,$

所以 $f(x) > x.$

当 0 < b < 1 时，同理可证对一切 $x \\in (1, +\\infty)$ ，有 $f(x) < x$ .

故函数 $f(x)$ 的图像与 y=x 的图像没有横坐标大于 1 的交点.

评注 本题难度较大,但有较高的思维价值,所给条件需进行逆向思维,求解函数的定义域,实质上涉及数列的收敛与发散,体现了初高等数学在思想方法上的衔接,问题通过函数把数列、解析几何等知识有机地结合在一起,体现了在知识网络的交汇点上命题的思想.

本题第(3)小题也可利用数学归纳法进行证明：

先证当 b<1 时，对一切 $x\\in(x_{n},x_{n+1}](n\\geqslant1)$ 恒有 $f(x)>x$ 成立.

①当 n=1 时，在 $x\\in(1,x_{2}]$ 上， $y=f(x)=1+b(x-1)>1+x-1=x$ ，结论成立.

②假设当 n=k 时，结论成立，即对 $x \\in (x_{k}, x_{k+1}]$ ，有 $f(x) > x$ ，

可得 $f(x_{k+1})>x_{k+1}\\Rightarrow x_{k+1}<k+1.$

则当 $n=k+1$ 时，对 $x\\in(x_{k+1},x_{k+2}]$ ， $f(x)-f(x_{k+1})=b^{k+1}(x-x_{k+1})\\Rightarrow$

$f(x) = k + 1 + b^{k + 1}\\cdot (x - x_{k + 1}) > k + 1 + x - x_{k + 1} > x$ ，结论也成立.

由①②知，对一切 $n \\in \\mathbf{Z}^{+}$ ，在 $(x_{n}, x_{n+1})$ 上恒有 $f(x) > x$ 成立.

所以，当 $b > 1, x \\in \\left(1, \\frac{b}{b - 1}\\right)$ 时，恒有 $f(x) > x$ .

当 $0 < b < 1, x \\in (1, +\\infty)$ 时，同理可证恒有 $f(x) < x$ 成立.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-4-1",
    topicId: "topic-sec-4-4",
    title: `如图 4-4-1 所示, 已知 M: x^2 + (y -`,
    content: `如图 4-4-1 所示, 已知 $\\odot M: x^{2} + (y - 2)^{2} = 1$ , Q 是 x 轴上的动点, QA, QB 分别切 $\\odot M$ 于 A, B 两点.
![](images/97024ecfdbfde7ad33767de773574130719eb61f4b7bccef401b062e9c40aaa7.jpg)

图4-4-1

(1)如果 $|AB|=\\frac{4\\sqrt{2}}{3}$ ，求直线MQ的方程；
(2)求动弦 AB 的中点 P 的轨迹方程.`,
    preview: `如图 4-4-1 所示, 已知 M: x^2 + (y - 2)^2 = 1 , Q 是 x 轴上的动点, QA, QB 分别切 M 于 A, B 两点. 图4`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-4-1-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `(1)由 $\\left| {AB}\\right|  = \\frac{4\\sqrt{2}}{3}$ ,可得

$$
| M P | = \\sqrt {| M A | ^ {2} - \\left(\\frac {| A B |}{2}\\right) ^ {2}} = \\sqrt {1 ^ {2} - \\left(\\frac {2 \\sqrt {2}}{3}\\right) ^ {2}} = \\frac {1}{3}.
$$

由射影定理, 得 $\\left|MB\\right|^{2}=\\left|MP\\right|\\cdot\\left|MQ\\right|$ , 得 $\\left|MQ\\right|=3$ ,

在 Rt△MOQ 中， $|OQ|=\\sqrt{|MQ|^{2}-|MO|^{2}}=\\sqrt{3^{2}-2^{2}}=\\sqrt{5}$

所以， $a = \\sqrt{5}$ 或 $a = -\\sqrt{5}$

所以，直线 $MQ$ 的方程是 $2x + \\sqrt{5} y - 2\\sqrt{5} = 0$ 或 $2x - \\sqrt{5} y + 2\\sqrt{5} = 0.$

(2)连接 $MB, MQ$ , 设 $P(x, y), Q(a, 0)$ , 由点 $M, P, Q$ 在一直线上, 得 $\\frac{2}{-a} = \\frac{y - 2}{x}$ . ① 由射影定理得 $|MB|^2 = |MP| \\cdot |MQ|$ , 即 $\\sqrt{x^2 + (y - 2)^2} \\cdot \\sqrt{a^2 + 4} = 1$ . ②

①及②式中消去 $a$ ，并注意到 $y < 2$ ，可得 $x^{2} + \\left(y - \\frac{7}{4}\\right)^{2} = \\frac{1}{16} (y < 2)$ .

评注 应用平面几何知识,这是快速解答本题的要害所在,还请读者品味其中的奥妙.具体可参考本书“3.5 借助平面几何知识妙解解析几何题”.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-4-2",
    topicId: "topic-sec-4-4",
    title: `如图 4-4-2 所示, 在以点 O 为圆心, AB =`,
    content: `如图 4-4-2 所示, 在以点 O 为圆心, $\\vert AB\\vert = 4$ 为直径的半圆 ADB 中, $OD \\perp AB$ , P 是半圆弧上一点, $\\angle POB = 30^{\\circ}$ , 曲线 C 是满足 $\\left|\\left|MA\\right| - \\left|MB\\right|\\right|$ 为定值的动点 M 的轨迹, 且曲线 C 过点 P.
![](images/f35e45496da465968bf0bbf261a459e6a537794d273c75eca294e9df7fae5772.jpg)

图4-4-2

(1)建立适当的平面直角坐标系,求曲线C的方程.

(2) 设过点 D 的直线 l 与曲线 C 相交于不同的两点 E、F，若 $\\triangle OEF$ 的面积不小于 $2\\sqrt{2}$ ，求直线 l 斜率的取值范围.

(1) 解法一 以 O 为原点, AB、OD 所在直线分别为 x 轴、y 轴, 建立平面直角坐标系, 则 $A(-2,0)$ , $B(2,0)$ , $D(0,2)$ , $P(\\sqrt{3},1)$ , 依题意得

$$
\\begin{array}{l} \\left| \\left| M A \\right| - \\left| M B \\right| \\right| = \\left| \\left| P A \\right| - \\left| P B \\right| \\right| = \\left| \\sqrt {(2 + \\sqrt {3}) ^ {2} + 1 ^ {2}} - \\sqrt {(2 - \\sqrt {3}) ^ {2} + 1 ^ {2}} \\right| \\\\ = 2 \\sqrt {2} <   | A B | = 4. \\\\ \\end{array}
$$

所以曲线 C 是以原点为中心, A、B 为焦点的双曲线.

设实半轴长为 a，虚半轴长为 b，半焦距为 c，则 $c=2,2a=2\\sqrt{2}$ ，

所以 $a^2 = 2, b^2 = c^2 - a^2 = 2$ . 所以曲线 $C$ 的方程为 $\\frac{x^2}{2} - \\frac{y^2}{2} = 1$ .`,
    preview: `如图 4-4-2 所示, 在以点 O 为圆心, AB = 4 为直径的半圆 ADB 中, OD AB , P 是半圆弧上一点, ∠ POB = 30° , 曲线`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-4-2-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `建立平面直角坐标系,则依题意可得

$$
\\mid \\left| M A \\right| - \\left| M B \\right| \\mid = \\left| P A \\right| - \\left| P B \\right| <   \\left| A B \\right| = 4,
$$

所以曲线 C 是以原点为中心, A、B 为焦点的双曲线.

设双曲线的方程为 $\\frac{x^{2}}{a^{2}}-\\frac{y^{2}}{b^{2}}=1(a>0,b>0)$ ，则由 $\\left\\{\\begin{aligned}\\frac{(\\sqrt{3})^{2}}{a^{2}}-\\frac{1^{2}}{b^{2}}=1,\\\\ a^{2}+b^{2}=4\\end{aligned}\\right.$ 解得 $a^{2}=b^{2}=2$

所以曲线 C 的方程为 $\\frac{x^{2}}{2}-\\frac{y^{2}}{2}=1$ .

(2)`,
      },
      {
        id: "prob-sec-4-4-2-sol-2",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `依题意, 可设直线 l 的方程为 $y = kx + 2$ ,

代入双曲线 $C$ 的方程并整理得

$$
(1 - k ^ {2}) x ^ {2} - 4 k x - 6 = 0. \\tag {①}
$$

因为直线 l 与双曲线 C 相交于不同的两点 E、F，

所以 $\\left\\{\\begin{aligned}1-k^{2}\\neq0,\\\\ \\Delta=(-4k)^{2}+4\\times6(1-k^{2})>0\\end{aligned}\\right.\\Leftrightarrow\\left\\{\\begin{aligned}k\\neq\\pm1,\\\\ -\\sqrt{3}<k<\\sqrt{3}.\\end{aligned}\\right.$

所以 $k \\in (-\\sqrt{3}, -1) \\cup (-1, 1) \\cup (1, \\sqrt{3})$ . ②

设 $E(x_{1},y_{1}),F(x_{2},y_{2})$ ，则由①式得 $x_{1} + x_{2} = \\frac{4k}{1 - k^{2}},x_{1}x_{2} = -\\frac{6}{1 - k^{2}}$ ，于是

$$
\\begin{array}{l} \\left| E F \\right| = \\sqrt {(x _ {1} - x _ {2}) ^ {2} + (y _ {1} - y _ {2}) ^ {2}} = \\sqrt {(1 + k ^ {2}) (x _ {1} - x _ {2}) ^ {2}} \\\\ = \\sqrt {1 + k ^ {2}} \\cdot \\sqrt {(x _ {1} + x _ {2}) ^ {2} - 4 x _ {1} x _ {2}} = \\sqrt {1 + k ^ {2}} \\cdot \\frac {2 \\sqrt {2} \\cdot \\sqrt {3 - k ^ {2}}}{\\left| 1 - k ^ {2} \\right|}. \\\\ \\end{array}
$$

而原点 O 到直线 l 的距离 $d=\\frac{2}{\\sqrt{1+k^{2}}}$ ,

所以 $S_{\\triangle DEF} = \\frac{1}{2} d\\cdot |EF| = \\frac{1}{2}\\times \\frac{2}{\\sqrt{1 + k^2}}\\times \\sqrt{1 + k^2}\\times \\frac{2\\sqrt{2}\\times\\sqrt{3 - k^2}}{|1 - k^2|} = \\frac{2\\sqrt{2}\\times\\sqrt{3 - k^2}}{|1 - k^2|}.$

若 $\\triangle OEF$ 面积不小于 $2\\sqrt{2}$ ，即 $S_{\\triangle OEF} \\geqslant 2\\sqrt{2}$ ，则有

$\\frac{2\\sqrt{2} \\times \\sqrt{3 - k^2}}{|1 - k^2|} \\geqslant 2\\sqrt{2} \\Leftrightarrow k^4 - k^2 - 2 \\leqslant 0$ ，解得 $-\\sqrt{2} \\leqslant k \\leqslant \\sqrt{2}$ . ③

综合②③知，直线 l 的斜率的取值范围为 $\\left[-\\sqrt{2}, -1\\right) \\cup (-1, 1) \\cup (1, \\sqrt{2}]$`,
      },
      {
        id: "prob-sec-4-4-2-sol-3",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `依题意, 可设直线 l 的方程为 $y = kx + 2$ , 代入双曲线 C 的方程并整理, 得

$(1 - k^{2})x^{2} - 4kx - 6 = 0.$ ①

因为直线 l 与双曲线 C 相交于不同的两点 E、F，

所以 $\\left\\{\\begin{aligned}1-k^{2}\\neq0,\\\\ \\Delta=(-4k)^{2}+4\\times6(1-k^{2})>0\\end{aligned}\\right.\\Leftrightarrow\\left\\{\\begin{aligned}k\\neq\\pm1,\\\\ -\\sqrt{3}<k<\\sqrt{3}.\\end{aligned}\\right.$

所以 $k \\in (-\\sqrt{3}, -1) \\cup (-1, 1) \\cup (1, \\sqrt{3})$ . ②

设 $E(x_{1},y_{1}),F(x_{2},y_{2})$ 则由①式得

$$
| x _ {1} - x _ {2} | = \\sqrt {(x _ {1} + x _ {2}) ^ {2} - 4 x _ {1} x _ {2}} = \\frac {\\sqrt {\\Delta}}{| 1 - k ^ {2} |} = \\frac {2 \\sqrt {2} \\sqrt {3 - k ^ {2}}}{| 1 - k ^ {2} |}. \\tag {③}
$$

当 E、F 在同一支上时(如图 4-4-3 所示)，

$$
S _ {\\triangle O E F} = | S _ {\\triangle O D F} - S _ {\\triangle O D E} | = \\frac {1}{2} | O D | \\cdot | | x _ {1} | - | x _ {2} | | = \\frac {1}{2} | O D | \\cdot | x _ {1} - x _ {2} |;
$$

![](images/7ebb48fec897d6d0bbdaae4bb4215e899c165253969ff8602ccfbe685f2ca126.jpg)

图4-4-3

![](images/3ed65af4f54e257948f2d6cde6ce5c5d1fbc7ed2c8b3028b88db8c58a3f1039a.jpg)

图4-4-4

当 E、F 在不同分支上时(如图 4-4-4 所示)，

$$
S _ {\\triangle O E F} = S _ {\\triangle O D F} + S _ {\\triangle O D E} = \\frac {1}{2} | O D | \\cdot (| x _ {1} | + | x _ {2} |) = \\frac {1}{2} | O D | \\cdot | x _ {1} - x _ {2} |.
$$

综上得 $S_{\\triangle OEF} = \\frac{1}{2} |OD| \\cdot |x_1 - x_2|$ ，于是由 $|OD| = 2$ 及③式，

得 $S_{\\triangle OEF} = \\frac{2\\sqrt{2}\\cdot\\sqrt{3 - k^2}}{|1 - k^2|}.$

若 $\\triangle OEF$ 面积不小于 $2\\sqrt{2}$ ，即 $S_{\\triangle OEF} \\geqslant 2\\sqrt{2}$ ，则有

$\\frac{2\\sqrt{2} \\times \\sqrt{3 - k^2}}{|1 - k^2|} \\geqslant 2\\sqrt{2} \\Leftrightarrow k^4 - k^2 - 2 \\leqslant 0$ ，解得 $-\\sqrt{2} \\leqslant k \\leqslant \\sqrt{2}$ . ④

综合②④知,直线 l 的斜率的取值范围为

$$
[ - \\sqrt {2}, - 1) \\cup (- 1, 1) \\cup (1, \\sqrt {2} ].
$$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-4-3",
    topicId: "topic-sec-4-4",
    title: `如图 4-4-5 所示, 椭圆 M: x^2a^2 + y^2b^2 = 1 (a > b`,
    content: `如图 4-4-5 所示, 椭圆 $M: \\frac{x^{2}}{a^{2}} + \\frac{y^{2}}{b^{2}} = 1 (a > b > 0)$ 的离心率为 $\\frac{\\sqrt{3}}{2}$ , 直线 $x = \\pm a$ 和 $y = \\pm b$ 所围成的矩形 $ABCD$ 的面积为 8.
(1)求椭圆 M 的标准方程；

(2) 设直线 $l: y = x + m (m \\in \\mathbb{R})$ 与椭圆 M 有两个不同的交点 P, Q, l 与矩形 ABCD 有两个不同的交点 S, T. 求 $\\frac{|PQ|}{|ST|}$ 的最大值及取得最大值时 m 的值.

![](images/d75c55ced5dfc3012369ed665a08b6edfdd5af712513b5280b66231902a94216.jpg)

图4-4-5`,
    preview: `如图 4-4-5 所示, 椭圆 的离心率为 √32 , 直线 x = a 和 y = b 所围成的矩形 ABCD 的面积为 8. (1)求椭圆 M 的标准方程；`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-4-3-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) $e=\\frac{c}{a}=\\frac{\\sqrt{3}}{2}\\Rightarrow\\frac{a^{2}-b^{2}}{a^{2}}=\\frac{3}{4}$ ，①

矩形 ABCD 面积为 8, 即 $2a \\cdot 2b = 8$ . ②

由①②解得 a=2, b=1，所以椭圆 M 的标准方程是 $\\frac{x^{2}}{4}+y^{2}=1$ .

(2) $\\left\\{\\begin{aligned}x^{2}+4y^{2}&=4,\\\\ y&=x+m\\end{aligned}\\right.\\Rightarrow5x^{2}+8mx+4m^{2}-4=0,$

设 $P(x_{1},y_{1}),Q(x_{2},y_{2})$ ，则 $x_{1} + x_{2} = -\\frac{8}{5} m,x_{1}x_{2} = \\frac{4m^{2} - 4}{5},$

由 $\\Delta=64m^{2}-20(4m^{2}-4)>0$ 得 $-\\sqrt{5}<m<\\sqrt{5}$ .

$$
| P Q | = \\sqrt {2} \\sqrt {\\left(- \\frac {8}{5} m\\right) ^ {2} - 4 \\frac {4 m ^ {2} - 4}{5}} = \\frac {4 \\sqrt {2}}{5} \\sqrt {5 - m ^ {2}}.
$$

线段 CD 的方程为 $y=1(-2 \\leqslant x \\leqslant 2)$ ，线段 AD 的方程为 $x=-2(-1 \\leqslant y \\leqslant 1)$ .

①不妨设点 S 在 AD 边上，T 在 CD 边上，可知 $1 \\leqslant m < \\sqrt{5}$ ， $S(-2, m-2)$ ， $D(-2, 1)$ .

所以 $|ST| = \\sqrt{2} |SD| = \\sqrt{2}[1 - (m - 2)] = \\sqrt{2}(3 - m)$ ，则 $\\frac{|PQ|}{|ST|} = \\frac{4}{5}\\sqrt{\\frac{5 - m^2}{(3 - m)^2}}$

令 $t = 3 - m(1 \\leqslant m < \\sqrt{5}), m = 3 - t, t \\in (3 - \\sqrt{5}, 2]$ ，则 $\\frac{1}{t} \\in \\left[\\frac{1}{2}, \\frac{3 + \\sqrt{5}}{4}\\right)$ ，

所以 $\\frac{|PQ|}{|ST|} = \\frac{4}{5}\\sqrt{\\frac{5 - (3 - t)^2}{t^2}} = \\frac{4}{5}\\sqrt{-4\\left(\\frac{1}{t} - \\frac{3}{4}\\right)^2 + \\frac{5}{4}}$

当且仅当 $t=\\frac{4}{3}$ 时 $\\frac{|PQ|}{|ST|}$ 取得最大值 $\\frac{2}{5}\\sqrt{5}$ ，此时 $m=\\frac{5}{3}$ .

②不妨设点 S 在 AB 边上, T 在 CD 边上, 此时 $-1 \\leqslant m \\leqslant 1$ ,

因此 $|ST| = \\sqrt{2} |AD| = 2\\sqrt{2}$ ，此时 $\\frac{|PQ|}{|ST|} = \\frac{2}{5}\\sqrt{5 - m^2}$ ，

当 m=0 时， $\\frac{|PQ|}{|ST|}$ 取得最大值 $\\frac{2}{5}\\sqrt{5}$ .

③不妨设点 S 在 AB 边上, T 在 BC 边上, 可知 $-\\sqrt{5} < x \\leqslant 1$ ,

由椭圆和矩形的对称性可知, 当 $m = -\\frac{5}{3}$ 时, $\\frac{|PQ|}{|ST|}$ 取得最大值 $\\frac{2}{5}\\sqrt{5}$ .

综上所述，当 $m=\\pm\\frac{5}{3}$ 和 0 时， $\\frac{|PQ|}{|ST|}$ 取得最大值 $\\frac{2}{5}\\sqrt{5}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-4-4",
    topicId: "topic-sec-4-4",
    title: `如图 4-4-6 所示, 平面直角坐标系 xOy 中`,
    content: `如图 4-4-6 所示, 平面直角坐标系 xOy 中, 过椭圆 $M: \\frac{x^{2}}{a^{2}} + \\frac{y^{2}}{b^{2}} = 1 (a > b > 0)$ 右焦点的直线 $x + y - \\sqrt{3} = 0$ 交椭圆 M 于 A, B 两点, P 为 AB 中点, 且 OP 的斜率为 $\\frac{1}{2}$ .
![](images/4e0e56086a334391417aa52e470fb632e0c00b8b65bc6690830a55bc2de2658a.jpg)

图4-4-6

(1)求椭圆 M 的方程；

(2) C, D 为椭圆 M 上的两点, 若四边形 ACBD 的对角线 $CD \\perp AB$ , 求四边形 CDAB 面积的最大值.`,
    preview: `如图 4-4-6 所示, 平面直角坐标系 xOy 中, 过椭圆 右焦点的直线 x + y - √3 = 0 交椭圆 M 于 A, B 两点, P 为 AB 中点`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-4-4-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 设 $A(x_{1}, y_{1}), B(x_{2}, y_{2}), P(x_{0}, y_{0})$ ，则

$$
\\frac {x _ {1} ^ {2}}{a ^ {2}} + \\frac {y _ {1} ^ {2}}{b ^ {2}} = 1, \\frac {x _ {2} ^ {2}}{a ^ {2}} + \\frac {y _ {2} ^ {2}}{b ^ {2}} = 1, \\frac {y _ {2} - y _ {1}}{x _ {2} - x _ {1}} = - 1.
$$

将上面前两式相减，知 $\\frac{b^{2}(x_{1}+x_{2})}{a^{2}(y_{1}+y_{2})}=-\\frac{y_{2}-y_{1}}{x_{2}-x_{1}}=1$ ，所以 $\\frac{b^{2}}{a^{2}}\\cdot\\frac{2x_{0}}{2y_{0}}=1$ .

又因为 $\\frac{y_{0}}{x_{0}}=\\frac{1}{2}$ ，所以 $a^{2}=2b^{2}$ ，

又由题意知 M 的右焦点为 $(\\sqrt{3},0)$ ，即 $a^{2}-b^{2}=3$ ，

所以 $a^2 = 6, b^2 = 3$ ，所以 $M$ 的方程为

$$
\\frac {x ^ {2}}{6} + \\frac {y ^ {2}}{3} = 1.
$$

(2)由 $\\left\\{\\begin{aligned}x+y-\\sqrt{3}&=0,\\\\ \\frac{x^{2}}{6}+\\frac{y^{2}}{3}&=1\\end{aligned}\\right.$ 知 $3x^{2}-4\\sqrt{3}x=0$ ，解得 $\\left\\{\\begin{aligned}x&=\\frac{4\\sqrt{3}}{3},\\\\ y&=-\\frac{\\sqrt{3}}{3}\\end{aligned}\\right.$ 或 $\\left\\{\\begin{aligned}x&=0,\\\\ y&=\\sqrt{3},\\end{aligned}\\right.$ 所以 $|AB|=\\frac{4\\sqrt{6}}{3}.$

由题知可设直线 CD 方程为 $y = x + n \\left( -\\frac{5\\sqrt{3}}{3} < n < \\sqrt{3} \\right)$ , $C(x_{3}, y_{3})$ , $D(x_{4}, y_{4})$ .

由 $\\left\\{\\begin{aligned}y&=x+n,\\\\ \\frac{x^{2}}{6}+\\frac{y^{2}}{3}&=1\\end{aligned}\\right.$ 知 $3x^{2}+4nx+2n^{2}-6=0$ ，所以 $x_{3}+x_{4}=-\\frac{4n}{3},x_{3}x_{4}=\\frac{2n^{2}-6}{3}$

所以 $|CD| = \\sqrt{2} |x_3 - x_4| = \\frac{4}{3}\\sqrt{(x_3 + x_4)^2 - 4x_3x_4} = \\frac{4}{3}\\sqrt{9 - n^2}$

所以 $S_{ABCD} = \\frac{1}{2} |CD||AB| = \\frac{8\\sqrt{6}}{9}\\sqrt{9 - n^2}$

所以当 n=0 时，S 有最大值 $\\frac{8\\sqrt{6}}{3}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-4-5",
    topicId: "topic-sec-4-4",
    title: `已知双曲线 C: x^2a^2 - y^2b^2 = 1 (a > 0, b > 0)`,
    content: `已知双曲线 $C: \\frac{x^{2}}{a^{2}} - \\frac{y^{2}}{b^{2}} = 1 (a > 0, b > 0)$ 的左、右焦点分别为 $F_{1}, F_{2}$ ，离心率为 3，直线 y = 2 与 C 的两个交点间的距离为 $\\sqrt{6}$ .
(1) 求 $a, b$ ;

(2)设过 $F_{2}$ 的直线 $l$ 与 $C$ 的左、右两支分别交于 $A, B$ 两点，且 $|AF_{1}| = |BF_{1}|$ ，证明： $|AF_{2}|, |AB|, |BF_{2}|$ 成等比数列.`,
    preview: `已知双曲线 的左、右焦点分别为 F_1, F_2 ，离心率为 3，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-4-5-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `(1) 因为 $e=\\frac{c}{a}=3$ ，所以 $c=3a, b=\\sqrt{c^{2}-a^{2}}=2\\sqrt{2}a$ ,

所以双曲线 C 的方程为 $8x^{2}-y^{2}=8a^{2}$ .

又令 $y = 2$ ，则 $x = \\pm \\sqrt{a^2 + \\frac{1}{2}}$

所以 $\\sqrt{6}=2\\sqrt{a^{2}+\\frac{1}{2}}$ ，所以a=1,c=3,b= $2\\sqrt{2}$ .

(2)设直线 l 的方程为 $y=k(x-3)$ , $A(x_{1},y_{1})$ , $B(x_{2},y_{2})(x_{1}>x_{2})$ , 则

$\\left\\{\\begin{aligned}y&=k(x-3),\\\\ x^{2}-\\frac{y^{2}}{8}&=1,\\end{aligned}\\right.$ 知 $(k^{2}-8)x^{2}-6k^{2}x+9k^{2}+8=0,$

所以 $x_{1} + x_{2} = \\frac{6k^{2}}{k^{2} - 8}, x_{1}x_{2} = \\frac{9k^{2} + 8}{k^{2} - 8}$ .

由圆锥曲线第二定义知

$$
| A F _ {2} | = e \\Big (\\frac {a ^ {2}}{c} - x _ {1} \\Big) = - 3 x _ {1} + 1, | B F _ {2} | = 3 x _ {2} - 1.
$$

同理由双曲线第二定义知

$$
| A F _ {1} | = e \\Bigl (- x _ {1} - \\frac {a ^ {2}}{c} \\Bigr) = - 3 x _ {1} - 1, | B F _ {1} | = 3 x _ {2} + 1.
$$

由 $|AF_{1}| = |BF_{1}|$ 知 $-3x_{1} - 1 = 3x_{2} + 1$

所以 $x_{1} + x_{2} = \\frac{6k^{2}}{k^{2} - 8} = -\\frac{2}{3}$ 得 $k^2 = \\frac{4}{5}$ ，所以 $x_{1}x_{2} = -\\frac{19}{9}$ .

因为 $|AB| = |AF_2| - |BF_2| = (-3x_1 + 1) - (3x_2 - 1) = 2 - 3(x_1 + x_2) = 4$

$$
\\left| A F _ {2} \\right| \\cdot \\left| B F _ {2} \\right| = (- 3 x _ {1} + 1) (3 x _ {2} - 1) = - 9 x _ {1} x _ {2} + 3 (x _ {1} + x _ {2}) - 1 = 1 6,
$$

所以 $\\left|AF_{2}\\right|\\left|BF_{2}\\right|=\\left|AB\\right|^{2}=16$

所以 $|AF_{2}|,|AB|,|BF_{2}|$ 成等比数列.

评注 弦长问题中有一类焦半径问题(焦半径指圆锥曲线上任一点到焦点的距离),用焦半径公式进行求解,能起到化繁为简的效果.其中:

①椭圆上任一点 $P(x_0, y_0)$ 到左、右焦点 $F_1, F_2$ （在 $x$ 轴上）的距离为 $|PF_1| = a + ex_0, |PF_2| = a - ex_0$ ;
② 双曲线上任一点 $P(x_{0}, y_{0})$ 到左、右焦点 $F_{1}, F_{2}$ （在 x 轴上）的距离为 $\\left|PF_{1}\\right| = \\left|a + ex_{0}\\right|$ ， $\\left|PF_{2}\\right| = \\left|-a + ex_{0}\\right|$ ;
③抛物线上任一点 $P(x_0, y_0)$ 到焦点 $F$ (在 $x$ 轴正半轴上)的距离为 $|PF| = x_0 + \\frac{p}{2}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-4-6",
    topicId: "topic-sec-4-4",
    title: `如图 4-4-7 所示,已知抛物线 x^2=y , 点`,
    content: `如图 4-4-7 所示,已知抛物线 $x^{2}=y$ , 点 $A\\left(-\\frac{1}{2}, \\frac{1}{4}\\right)$ , $B\\left(\\frac{3}{2}, \\frac{9}{4}\\right)$ , 抛物线上的点 $P(x,y)\\left(-\\frac{1}{2}<x<\\frac{3}{2}\\right)$ . 过点 $B$ 作直线 $AP$ 的垂线, 垂足为 $Q$ .

![](images/3036daaa4b661d93f020e8b7fe38c54c01e552319d36666c08dc83950081aa06.jpg)
(1)求直线 AP 斜率的取值范围；
(2) 求 $\\left|PA\\right|\\cdot\\left|PQ\\right|$ 的最大值.`,
    preview: `如图 4-4-7 所示,已知抛物线 x^2=y , 点 A(-1/2, 1/4) , B(3/2, 9/4) , 抛物线上的点 P(x,y)(-1/2<x<3/`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-4-6-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1) 直线 AP 斜率 $k=\\frac{x^{2}-\\frac{1}{4}}{x+\\frac{1}{2}}=x-\\frac{1}{2}\\in(-1,1)$ .

![](images/3036daaa4b661d93f020e8b7fe38c54c01e552319d36666c08dc83950081aa06.jpg)

图4-4-7

(2)`,
      },
      {
        id: "prob-sec-4-4-6-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `使用勾股定理求线段长度. 设 $A(x_{1}, y_{1}), P(x_{2}, y_{2})$ .

设直线 $AP: y = k \\left( x + \\frac{1}{2} \\right) + \\frac{1}{4}$ ，联立抛物线方程 $x^{2} = y$ 得

$x^{2} - kx - \\frac{1}{2} k - \\frac{1}{4} = 0$ ，得 $\\left\\{ \\begin{array}{l}x_{1} + x_{2} = k,\\\\ x_{1}x_{2} = -\\frac{1}{2} k - \\frac{1}{4}, \\end{array} \\right.$

所以 $\\left|AP\\right|=\\sqrt{1+k^{2}}\\left|x_{1}-x_{2}\\right|=(k+1)\\sqrt{1+k^{2}}$

因为 $|BQ| = d_{B - AP} = \\frac{|8k - 8|}{\\sqrt{16k^2 + 16}} = \\frac{2|k - 1|}{\\sqrt{k^2 + 1}}, |AQ| = \\sqrt{|AB|^2 - |BQ|^2} = \\frac{2(k + 1)}{\\sqrt{k^2 + 1}},$

所以 $|PA|\\cdot|PQ|=|PA|\\cdot(|AQ|-|AP|)$

$$
\\begin{array}{l} = (k + 1) \\sqrt {1 + k ^ {2}} \\left(\\frac {2 (k + 1)}{\\sqrt {k ^ {2} + 1}} - (k + 1) \\sqrt {1 + k ^ {2}}\\right) \\\\ = (1 - k ^ {2}) (1 + k) ^ {2}. \\\\ \\end{array}
$$

记 $f(k) = (1 - k^2)(1 + k)^2$ ，则 $f'(k) = (2 - 4k)(1 + k)^2$ ，所以当 $k = \\frac{1}{2}$ 时 $f(k)_{\\max} = \\frac{27}{16}$ .

所以 $|PA|\\cdot|PQ|$ 的最大值是 $f(k)_{\\max}=\\frac{27}{16}$ .

在上面的解答中,如果我们注意到点 A 坐标是已知的,那么可以把题目中相关点的坐标都求出来,这样问题也就迎刃而解了.`,
      },
      {
        id: "prob-sec-4-4-6-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `使用两点间距离公式求线段长度. 设 $A(x_{1}, y_{1}), P(x_{2}, y_{2}), Q(x_{3}, y_{3})$ .

设直线 $AP: y = k\\left(x + \\frac{1}{2}\\right) + \\frac{1}{4}$ , 联立抛物线方程 $x^2 = y$ 得

$x^{2} - kx - \\frac{1}{2} k - \\frac{1}{4} = 0$ ，所以 $x_{1} + x_{2} = k.$

因为 $x_{1} = -\\frac{1}{2}$ ，所以 $x_{2} = k + \\frac{1}{2}$ ，所以 $y_{2} = k^{2} + k + \\frac{1}{4}$ ，所以 $P\\left(k + \\frac{1}{2},k^2 +k + \\frac{1}{4}\\right)$

所以 $\\left|AP\\right|=\\sqrt{(x_{1}-x_{2})^{2}+(y_{1}-y_{2})^{2}}=(k+1)\\sqrt{1+k^{2}}$

因为点 Q 坐标为 $\\left(x_{3}, k\\left(x_{3}+\\frac{1}{2}\\right)+\\frac{1}{4}\\right)$ ，且 $\\overrightarrow{AQ} \\cdot \\overrightarrow{BQ}=0$ ，

所以 $x_{3}=\\frac{-k^{2}+4k+3}{2(k^{2}+1)}$ ，所以 $y_{3}=\\frac{9k^{2}+8k+1}{4(k^{2}+1)}$

所以 $|PQ| = \\sqrt{(x_3 - x_2)^2 + (y_3 - y_2)^2} = \\frac{(k + 1)(1 - k^2)}{\\sqrt{k^2 + 1}}.$

所以 $|PA|\\cdot |PQ| = (1 - k^2)(1 + k)^2$

以下同`,
      },
      {
        id: "prob-sec-4-4-6-sol-4",
        title: `解法三`,
        method: "standard",
        steps: [],
        explanation: `设 $P(t,t^2)\\left(-\\frac{1}{2} < t < \\frac{3}{2}\\right), Q(x_3,y_3)$

则 $|AP| = \\left|(t + \\frac{1}{2}, t^2 - \\frac{1}{4})\\right| = \\sqrt{\\left(t + \\frac{1}{2}\\right)^2 + \\left(t^2 - \\frac{1}{4}\\right)^2} = \\left(t + \\frac{1}{2}\\right)\\sqrt{t^2 - t + \\frac{5}{4}}.$

因为 $\\overrightarrow{AP},\\overrightarrow{AQ}$ 共线, $\\overrightarrow{BQ},\\overrightarrow{AQ}$ 垂直,所以

$$
\\left\\{ \\begin{array}{l} \\frac {y _ {3} - \\frac {1}{4}}{x _ {3} + \\frac {1}{2}} = \\frac {t ^ {2} - \\frac {1}{4}}{t + \\frac {1}{2}}, \\\\ \\left(x _ {3} + \\frac {1}{2}\\right) \\left(x _ {3} - \\frac {3}{2}\\right) + \\left(y _ {3} - \\frac {1}{4}\\right) \\left(y _ {3} - \\frac {9}{4}\\right) = 0. \\end{array} \\right.
$$

由此，求得点 $Q$ 横坐标为 $x_{3} = \\frac{-4t^{2} + 20t + 3}{2(4t^{2} - 4t + 5)}.$

进一步求出 $|PQ| = \\sqrt{1 + \\left(t - \\frac{1}{2}\\right)^2} |x_3 - t|$ .

所以 $|PA|\\cdot |PQ| = \\left(t + \\frac{1}{2}\\right)\\sqrt{t^2 - t + \\frac{5}{4}}\\cdot \\sqrt{1 + \\left(t - \\frac{1}{2}\\right)^2}\\left|\\frac{-4t^2 + 20t + 3}{2(4t^2 - 4t + 5)} - t\\right|$

$$
= \\frac {1}{1 6} (- 1 6 t ^ {4} + 2 4 t ^ {2} + 1 6 t + 3).
$$

记 $g(t) = \\frac{1}{16} (-16t^4 + 24t^2 + 16t + 3)$ ，则 $g'(t) = (1 - t)(2t + 1)^2$

所以当 t=1 时取得最大值, 此时 $g(t)_{\\max}=\\frac{27}{16}$ .`,
      },
      {
        id: "prob-sec-4-4-6-sol-5",
        title: `解法四`,
        method: "standard",
        steps: [],
        explanation: `使用圆方程来辅助求解. 因为点 $Q$ 在以 $AB$ 为直径的圆上, 所以可得以 $AB$ 为直径的圆 $E: \\left(x - \\frac{1}{2}\\right)^2 + \\left(y - \\frac{5}{4}\\right)^2 = 2$ . 设 $A(x_1, y_1), P(x_2, y_2), Q(x_3, y_3)$ .

设直线 $AP: y = k\\left(x + \\frac{1}{2}\\right) + \\frac{1}{4}$ , 联立圆 $E$ 方程得

$(k^{2} + 1)x^{2} + (k^{2} - 2k - 1)x + \\frac{1}{4} k^{2} - k - \\frac{5}{2} = 0$ ，可得 $Q\\left(\\frac{-k^2 + 4k + 3}{2(k^2 + 1)},\\frac{9k^2 + 8k + 1}{4(k^2 + 1)}\\right)$

所以 $|PQ| = \\sqrt{(x_3 - x_2)^2 + (y_3 - y_2)^2} = \\frac{(k + 1)(1 - k^2)}{\\sqrt{k^2 + 1}}.$

所以 $|PA|\\cdot |PQ| = (1 - k^2)(1 + k)^2.$

以下同`,
      },
      {
        id: "prob-sec-4-4-6-sol-7",
        title: `解法五`,
        method: "standard",
        steps: [],
        explanation: `使用四元均值不等式求解.

当我们求得 $|PA| \\cdot |PQ| = (1 - k^2)(1 + k)^2$ 时，

可采用下面的方法求 $|PA|\\cdot|PQ|$ 最大值.

$$
\\begin{array}{l} (1 - k ^ {2}) (1 + k) ^ {2} = (1 - k) (1 + k) ^ {3} = \\frac {1}{3} (3 - 3 k) (1 + k) ^ {3} \\\\ \\leqslant \\frac {1}{3} \\Big (\\frac {3 - 3 k + 3 (1 + k)}{4} \\Big) ^ {4} = \\frac {2 7}{1 6}, \\\\ \\end{array}
$$

当且仅当 $3-3k=1+k$ ，即 $k=\\frac{1}{2}$ 时， $|PA|\\cdot|PQ|$ 的最大值是 $\\frac{27}{16}$ .`,
      },
      {
        id: "prob-sec-4-4-6-sol-8",
        title: `解法六`,
        method: "geometric",
        steps: [],
        explanation: `使用向量数量积的几何意义求解. 因为 $\\left|PQ\\right|$ 是 $\\overrightarrow{PB}$ 在 $\\overrightarrow{PQ}$ 上的投影, 所以 $\\left|PA\\right|\\cdot\\left|PQ\\right|=-\\overrightarrow{PA}\\cdot\\overrightarrow{PQ}=-\\overrightarrow{PA}\\cdot\\overrightarrow{PB}.$ 设 $P(t,t^{2})\\left(-\\frac{1}{2}<t<\\frac{3}{2}\\right)$ ,

则 $\\overrightarrow{PA} \\cdot \\overrightarrow{PB} = \\left(t + \\frac{1}{2}, t^2 - \\frac{1}{4}\\right) \\cdot \\left(t - \\frac{3}{2}, t^2 - \\frac{9}{4}\\right) = t^4 - \\frac{3}{2} t^2 - t - \\frac{3}{16}$ .

记 $g(t) = t^4 -\\frac{3}{2} t^2 -t - \\frac{3}{16}$ ，则 $g^{\\prime}(t) = (t - 1)(2t + 1)^{2}$ ，所以，当 $t = 1$ 时 $g(t)_{\\mathrm{min}} = -\\frac{27}{16}$

所以 $|PA|\\cdot |PQ|$ 的最大值是 $\\frac{27}{16}$ .`,
      },
      {
        id: "prob-sec-4-4-6-sol-9",
        title: `解法七`,
        method: "standard",
        steps: [],
        explanation: `使用极化恒等式求解. 因为 $\\left|PQ\\right|$ 是 $\\overrightarrow{PB}$ 在 $\\overrightarrow{PQ}$ 上的投影, 所以 $\\left|PA\\right| \\cdot \\left|PQ\\right| = -\\overrightarrow{PA} \\cdot \\overrightarrow{PQ} = -\\overrightarrow{PA} \\cdot \\overrightarrow{PB}$ . 取 AB 中点 M, 则由极化恒等式可得 $\\overrightarrow{PA} \\cdot \\overrightarrow{PB} = \\overrightarrow{PM^{2}} - \\overrightarrow{BM^{2}}$ . 因为 $\\left|\\overrightarrow{BM}\\right|$ 是定值, 所以要求 $\\overrightarrow{PA} \\cdot \\overrightarrow{PB}$ 最小值, 只要求 $\\left|\\overrightarrow{PM}\\right|$ 最小值.

以 M 为圆心作圆 M，使得圆 M 和抛物线相切，此时 $\\left|\\overrightarrow{PM}\\right|$ 最小.

设圆 $M: \\left(x - \\frac{1}{2}\\right)^2 + \\left(y - \\frac{5}{4}\\right)^2 = a (a > 0)$ ，与抛物线方程 $x^2 = y$ 联立得

$\\left(x - \\frac{1}{2}\\right)^2 +\\left(x^2 -\\frac{5}{4}\\right)^2 = a(a > 0)$ .设 $P(x_{2},y_{2})$ ，则抛物线在点 $P$ 处的斜率为

$k_{2} = (x^{2})^{\\prime}|_{x = x_{2}} = 2x_{2}$ .因为 $k_{2}\\cdot k_{MP} = -1$ ，所以 $2x_{2}\\cdot \\frac{y_{2} - \\frac{5}{4}}{x_{2} - \\frac{1}{2}} = -1$ ，得 $x_{2} = 1$

所以可得 $P(1,1)$ ，所以 $\\left|PA\\right|\\cdot\\left|PQ\\right|=\\overrightarrow{PM^{2}}-\\overrightarrow{BM^{2}}=\\frac{27}{16}$ .

说明 以上为周阳锋老师的解法.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-4-7",
    topicId: "topic-sec-4-4",
    title: `已知椭圆 {x^2}25 + {y^2}9 = 1`,
    content: `已知椭圆 $\\frac{{x}^{2}}{25} + \\frac{{y}^{2}}{9} = 1$ 的左右焦点分别是 \${F}_{1},{F}_{2}$ ,椭圆上有不同的三点 $A,B$ , $C$ ,且 $B{F}_{2} \\bot  {Ox},\\left| {{F}_{2}A}\\right| ,\\left| {{F}_{2}B}\\right| ,\\left| {{F}_{2}C}\\right|$ 成等差数列.
(1)求弦 AC 的中点 M 的横坐标；
(2) 设弦 AC 的垂直平分线的方程为 $y = kx + m (k \\neq 0)$ ，求 m 的取值范围.`,
    preview: `已知椭圆 {x^2}25 + {y^2}9 = 1 的左右焦点分别是 F_1,F_2 ,椭圆上有不同的三点 A,B , C ,且 成等差数列. (1)求弦 AC`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-4-7-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)由题意可得, $F_{2}(4,0), |F_{2}B| = \\frac{9}{5}$ , 设 $A(x_{1}, y_{1}), C(x_{2}, y_{2})$ , 由焦半径公式, 得 $|F_{2}A| = 5 - \\frac{4}{5} x_{1}, |F_{2}C| = 5 - \\frac{4}{5} x_{2}$ . 因为 $|F_{2}A|, |F_{2}B|, |F_{2}C|$ 成等差数列, 所以 $\\left(5 - \\frac{4}{5} x_{1}\\right) + \\left(5 - \\frac{4}{5} x_{2}\\right) = 2 \\times \\frac{9}{5}$ , 由此有 $x_{1} + x_{2} = 8$ , 所以, 弦 $AC$ 的中点的横坐标 $x = 4$ .

(2) 将 x=4 代入 $y=kx+m(k\\neq0)$ ，故点 M 的坐标为 $(4,4k+m)$ ，

则 $k_{OM} = \\frac{y_1 + y_2}{x_1 + x_2} = \\frac{4k + m}{4}$ , 又 $k_{AC} = \\frac{y_1 - y_2}{x_1 - x_2} = -\\frac{1}{k}$ .

将 $x_{1}, y_{1}$ 和 $x_{2}, y_{2}$ 分别代入椭圆方程，两式相减得

$$
\\frac {x _ {1} ^ {2} - x _ {2} ^ {2}}{2 5} = - \\frac {y _ {1} ^ {2} - y _ {2} ^ {2}}{9} \\Rightarrow \\frac {y _ {1} - y _ {2}}{x _ {1} - x _ {2}} \\cdot \\frac {y _ {1} + y _ {2}}{x _ {1} + x _ {2}} = - \\frac {9}{2 5}.
$$

即 $-\\frac{1}{k}\\cdot\\frac{4k+m}{4}=-\\frac{9}{25}$ ，解得 $k=-\\frac{25m}{64}$ .

所以， $4k+m=-\\frac{9m}{16}$ ，点 $M(4,-\\frac{9m}{16})$ 。又由点 $M(4,-\\frac{9m}{16})$ 在椭圆 $\\frac{x^{2}}{25}+\\frac{y^{2}}{9}=1$ 内，

故 $\\frac{4^{2}}{25}+\\frac{\\left(-\\frac{9m}{16}\\right)^{2}}{9}<1$ ，解得 $-\\frac{16}{5}<m<\\frac{16}{5}$ ，即 $m\\in\\left(-\\frac{16}{5},\\frac{16}{5}\\right)$ .

评注 此题的难点在于“如何建立参数 m 的不等关系”，利用点差法求出弦 AC 的中点 M 的坐标（坐标中含参数 m），由点 M 必在椭圆内，得关于 m 的不等关系。这是解决二次曲线弦中点问题的通法，大家要认真领会，熟练掌握。`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-4-8",
    topicId: "topic-sec-4-4",
    title: `如图 4-4-8 所示, 已知椭圆 C_1: y^2a^2 + x^2b^2 = 1 (a`,
    content: `如图 4-4-8 所示, 已知椭圆 $C_{1}: \\frac{y^{2}}{a^{2}} + \\frac{x^{2}}{b^{2}} = 1 (a > b > 0)$ 的右顶点为 A(1,0), 过 $C_{1}$ 的焦点且垂直长轴的弦长为 1.
![](images/717dca3457b6e5b963bdbff4693e98fd624cb59c207d1107584bb590cb5665b2.jpg)

图4-4-8

(1)求椭圆 $C_{1}$ 的方程；

(2) 设点 P 在抛物线 $C_{2}: y = x^{2} + h (h \\in \\mathbf{R})$ 上, $C_{2}$ 在点 P 处的切线与 $C_{1}$ 交于点 M, N, 当线段 AP 的中点与 MN 的中点的横坐标相等时, 求 h 的最小值.`,
    preview: `如图 4-4-8 所示, 已知椭圆 的右顶点为 A(1,0), 过 C_1 的焦点且垂直长轴的弦长为 1. 图4-4-8 (1)求椭圆 C_1 的方程； (2)`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-4-8-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1)由题意得 $\\left\\{\\begin{aligned}b&=1,\\\\ 2\\cdot\\frac{b^{2}}{a}&=1,\\end{aligned}\\right.$ 解得 $\\left\\{\\begin{aligned}a&=2,\\\\ b&=1.\\end{aligned}\\right.$ 所以所求的椭圆方程为 $\\frac{y^{2}}{4}+x^{2}=1$ .

(2)`,
      },
      {
        id: "prob-sec-4-4-8-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `不妨设 $M(x_{1},y_{1}), N(x_{2},y_{2}), P(t,t^{2}+h)$ ，则抛物线 $C_{2}$ 在点 P 处的切线斜率为 $y'\\mid_{x=t}=2t$ ，直线 MN 的方程为 $y=2tx-t^{2}+h$ ，

将上式代入椭圆 $C_{1}$ 的方程中，得 $4x^{2}+(2tx-t^{2}+h)^{2}-4=0$ ，

即 $4(1 + t^2)x^2 - 4t(t^2 - h)x + (t^2 - h)^2 - 4 = 0.$

因为直线 MN 与椭圆 $C_{1}$ 有两个不同的交点，

所以有 $\\Delta_{1}=16[-t^{4}+2(h+2)t^{2}-h^{2}+4]>0.$ ①

设线段 $MN$ 的中点的横坐标是 $x_{3}$ , 则 $x_{3} = \\frac{x_{1} + x_{2}}{2} = \\frac{t(t^{2} - h)}{2(1 + t^{2})}$ .

设线段 PA 的中点的横坐标是 $x_{4}$ ，则 $x_{4}=\\frac{t+1}{2}$ ，

由题意得 $x_{3}=x_{4}$ ，即有 $t^{2}+(1+h)t+1=0$ ，

其中的 $\\Delta_{2}=(1+h)^{2}-4\\geqslant0$ , 所以 $h\\geqslant1$ 或 $h\\leqslant-3$

当 $h \\leqslant -3$ 时，有 $h + 2 < 0, 4 - h^2 < 0$ ，所以 $\\Delta_1 = 16[-t^4 + 2(h + 2)t^2 - h^2 + 4] < 0,$

这与①式矛盾,故 $h \\leqslant -3$ 应舍去.

因此 $h \\geqslant 1$ ，当 h = 1 时代入方程 $t^{2} + (1 + h)t + 1 = 0$ ，得 t = -1，

将 h=1, t=-1 代入，不等式 $\\Delta_{1}=16[-t^{4}+2(h+2)t^{2}-h^{2}+4]>0$ 成立.

因此 h 的最小值为 1.`,
      },
      {
        id: "prob-sec-4-4-8-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `设 $P(x_{0}, x_{0}^{2} + h)$ ，易得在点 P 处的切线斜率为 $2x_{0}$ ，

则切线方程为 $y-(x_{0}^{2}+h)=2x_{0}(x-x_{0})$ .

又设 $MN$ 中点 $Q(x_{Q},y_{Q})$ ，则 $x_{Q} = \\frac{x_{0} + 1}{2}$ ，代入切线方程可得 $y_{Q} = x_{0} + h.$

再设 $M(x_{1},y_{1}),N(x_{2},y_{2})$ ，代入椭圆方程，得 $\\frac{y_1^2}{4} +x_1^2 = 1,\\frac{y_2^2}{4} +x_2^2 = 1.$

两式相减，变形，得 $x_{1} + x_{2} = -\\frac{1}{4} (y_{1} + y_{2})\\cdot \\frac{y_1 - y_2}{x_1 - x_2},$

即 $x_{Q}=-\\frac{1}{4}y_{Q}\\cdot2x_{0}$ ，进而得 $\\frac{x_{0}+1}{2}=-\\frac{1}{2}x_{0}(x_{0}+h)$ .

考虑到 $x_{0} \\neq 0$ ，可得 $h = -x_{0} - \\frac{1}{x_{0}} - 1$ ，因为点 Q 在椭圆内，

则 $-1 < x_{Q} = \\frac{x_{0} + 1}{2} < 1$ ，且 $-2 < y = -\\frac{1}{x_{0}} - 1 < 2$ ，解得 $-3 < x_{0} < -\\frac{1}{3}$ ，

故 $h = -x_0 - \\frac{1}{x_0} - 1 \\geqslant 2\\sqrt{(-x_0)(-\\frac{1}{x_0})} - 1 = 1.$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-4-9",
    topicId: "topic-sec-4-4",
    title: `如图 4-4-9, 已知点 P 是 y 轴左侧(不含 y`,
    content: `如图 4-4-9, 已知点 P 是 y 轴左侧(不含 y 轴)一点, 抛物线 $C: y^{2} = 4x$ 上存在不同的两点 A, B 满足 PA, PB 的中点均在 C 上.
![](images/34cb71a297f267b29a5ce99f9335c93b4f5f48ffdfe5df1104549a438faa220b.jpg)

图4-4-9

(1) 设 AB 中点为 M，证明：PM 垂直于 y 轴；

(2) 若 P 是半椭圆 $x^{2} + \\frac{y^{2}}{4} = 1 (x < 0)$ 上的动点，求 $\\triangle PAB$ 面积的取值范围.`,
    preview: `如图 4-4-9, 已知点 P 是 y 轴左侧(不含 y 轴)一点, 抛物线 C: y^2 = 4x 上存在不同的两点 A, B 满足 PA, PB 的中点均在`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-4-9-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `方法一(1)设 $P(x_{0}, y_{0})$ , $A\\left(\\frac{1}{4}y_{1}^{2}, y_{1}\\right)$ , $B\\left(\\frac{1}{4}y_{2}^{2}, y_{2}\\right)$ .

因为 PA, PB 的中点在抛物线上，

所以 $y_{1}, y_{2}$ 为方程 $\\left(\\frac{y+y_{0}}{2}\\right)^{2}=4\\cdot\\frac{\\frac{1}{4}y^{2}+x_{0}}{2}$ 的两根.

即 $y_{1}, y_{2}$ 为 $y^{2}-2y_{0}y+8x_{0}-y_{0}^{2}=0$ 的两个不同的实数根.

所以 $y_{1}+y_{2}=2y_{0}$ ，因此，PM 垂直于 y 轴。

方法二 设 $A\\left(\\frac{y_1^2}{4}, y_1\\right), B\\left(\\frac{y_2^2}{4}, y_2\\right), P(x_0, y_0)$ , 记 $PA, PB$ 的中点分别为 $E, F$ , 则 $E\\left(\\frac{x_0 + \\frac{y_1^2}{4}}{2}, \\frac{y_0 + y_1}{2}\\right), F\\left(\\frac{x_0 + \\frac{y_2^2}{4}}{2}, \\frac{y_0 + y_2}{2}\\right)$ , 由 $E, F$ 在抛物线 $C$ 上, 代入抛物线 $y^2 = 4x$ ,

整理得： $\\left\\{\\begin{aligned}y_{1}^{2}-2y_{0}y_{1}+(8x_{0}-y_{0}^{2})=0,\\\\ y_{2}^{2}-2y_{0}y_{2}+(8x_{0}-y_{0}^{2})=0,\\end{aligned}\\right.$

则 $y_{1}, y_{2}$ 是方程 $y^{2}-2y_{0}y+(8x_{0}-y_{0}^{2})=0$ 的两根，

所以 $y_{1}+y_{2}=2y_{0}$ ，即 $y_{0}=\\frac{y_{1}+y_{2}}{2}$ ，即证 PM 垂直于 y 轴.

方法三 设点方法同方法二, 由 $AB \\parallel EF$ , 所以 $k_{AB} = k_{EF}$ , 则由点差法得 $\\frac{4}{y_1 + y_2} = \\frac{4}{\\frac{y_0 + y_1}{2} + \\frac{y_0 + y_2}{2}}$ , 整理得 $y_1 + y_2 = 2y_0$ , 即证 $PM$ 垂直于 $y$ 轴.

(2) 方法一 由(1)可知 $\\left\\{ \\begin{array}{l} y_1 + y_2 = 2y_0, \\\\ y_1y_2 = 8x_0 - y_0^2. \\end{array} \\right.$

所以 $|PM| = \\frac{1}{8}(y_1^2 + y_2^2) - x_0 = \\frac{3}{4} y_0^2 - 3x_0, |y_1 - y_2| = 2\\sqrt{2(y_0^2 - 4x_0)}.$

因此， $\\triangle PAB$ 的面积 $S_{\\triangle PAB} = \\frac{1}{2} |PM| \\cdot |y_1 - y_2| = \\frac{3\\sqrt{2}}{4}(y_0^2 - 4x_0)^{\\frac{3}{2}}.$

因为 $x_0^2 +\\frac{y_0^2}{4} = 1(x_0 <   0)$ ，所以 $y_0^2 -4x_0 = -4x_0^2 -4x_0 + 4\\in [4,5]$

因此， $\\triangle PAB$ 面积的取值范围是 $\\left[6\\sqrt{2}, \\frac{15\\sqrt{10}}{2}\\right]$ .

方法二 由(1)知, $y_{1},y_{2}$ 是方程 $y^{2}-2y_{0}y+(8x_{0}-y_{0}^{2})=0$ 的两根,

所以 $y_{1}+y_{2}=2y_{0}, y_{1}y_{2}=8x_{0}-y_{0}^{2}$ ,

所以 $x_{M}=\\frac{y_{1}^{2}+y_{2}^{2}}{8}=\\frac{(y_{1}+y_{2})^{2}-2y_{1}y_{2}}{8}=\\frac{3}{4}y_{0}^{2}-2x_{0}.$

所以 $S_{\\triangle PAB}=\\frac{1}{2}|PM||y_{1}-y_{2}|=\\frac{1}{2}|x_{M}-x_{P}|\\sqrt{(y_{1}+y_{2})^{2}-4y_{1}y_{2}}$

$$
= \\frac {1}{2} \\left| \\frac {3}{4} y _ {0} ^ {2} - 3 x _ {0} \\right| \\sqrt {(2 y _ {0}) ^ {2} - 4 (8 x _ {0} - y _ {0} ^ {2})} = 6 \\sqrt {2} (1 - x _ {0} - x _ {0} ^ {2}) ^ {\\frac {3}{2}}.
$$

令 $t = 1 - x_0 - x_0^2 (-1\\leqslant x_0 <   0)\\in \\left[1,\\frac{5}{4}\\right],$

所以 $S = 6\\sqrt{2} t^{\\frac{3}{2}}\\in \\left[6\\sqrt{2},\\frac{15}{4}\\sqrt{10}\\right].$

方法三 如图 4-4-10 所示, 连接 BE, AF 交于点 Q, 记点 P 对应的切点弦 GH, 则 GH 是点 P 对应的极线, 其方程: $y_{0}y=2(x_{0}+x)$ .

$Q$ 在 $GH$ 上， $Q\\left(\\frac{y_0^2}{2} - x_0, y_0\\right)$ ，

又 $AB \\parallel EF \\parallel GH, AB = 2EF,$

所以 $PM = \\frac{3}{2} PQ$ ，得 $M\\left(\\frac{3}{4} y_0^2 - 2x_0, y_0\\right)$

所以直线 AB 的方程：

$$
y _ {0} (y - y _ {0}) = 2 \\left(x - \\frac {3}{4} y _ {0} ^ {2} + 2 x _ {0}\\right),
$$

![](images/ab8529ba1a55806ef8750e7707f44d35445be5482cb0afa45be57fb74dd4dde6.jpg)

图4-4-10

即 $y_0y = 2x - \\frac{1}{2} y_0^2 +4x_0.$

由 $\\left\\{\\begin{aligned}y^{2}&=4x,\\\\ y_{0}y&=2x-\\frac{1}{2}y_{0}^{2}+4x_{0}\\end{aligned}\\right.$ 得 $y^{2}-2y_{0}y+8x_{0}-y_{0}^{2}=0$ ,

所以 $S_{\\triangle PAB} = \\frac{1}{2} |PM||y_1 - y_2|$

$$
\\begin{array}{l} = \\frac {1}{2} \\left| x _ {M} - x _ {P} \\right| \\sqrt {(y _ {1} + y _ {2}) ^ {2} - 4 y _ {1} y _ {2}} \\\\ = \\frac {1}{2} \\left| \\frac {3}{4} y _ {0} ^ {2} - 3 x _ {0} \\right| \\sqrt {\\left(2 y _ {0}\\right) ^ {2} - 4 \\left(8 x _ {0} - y _ {0} ^ {2}\\right)} = 6 \\sqrt {2} \\left(1 - x _ {0} - x _ {0} ^ {2}\\right) ^ {\\frac {3}{2}}. \\\\ \\end{array}
$$

令 $t = 1 - x_0 - x_0^2 (-1\\leqslant x_0 <   0)\\in \\left[1,\\frac{5}{4}\\right],$

所以 $S = 6\\sqrt{2} t^{\\frac{3}{2}}\\in \\left[6\\sqrt{2},\\frac{15}{4}\\sqrt{10}\\right].$

方法四 如图 4-4-11 所示, 连接 BE, AF 交于点 Q, 则点 Q 是 $\\triangle PAB$ 的重心, 且 PQ: QM = 2:1.

故 $x_{Q} = \\frac{x_{0} + x_{1} + x_{2}}{3} = \\frac{x_{0} + \\frac{y_{1}^{2}}{4} + \\frac{y_{2}^{2}}{4}}{3} = \\frac{4x_{0} + y_{1}^{2} + y_{2}^{2}}{12},$

$$
y _ {Q} = \\frac {y _ {0} + y _ {1} + y _ {2}}{3}.
$$

![](images/3c921540d1d76a2cba1f3fb256ac512c8cc21a0cfb109ba8558b4fa66f28a577.jpg)

图4-4-11

又由(1)知: $y_{1},y_{2}$ 是方程 $y^{2}-2y_{0}y+(8x_{0}-y_{0}^{2})=0$ 的两根，

所以 $y_{1} + y_{2} = 2y_{0},y_{1}y_{2} = 8x_{0} - y_{0}^{2}$ ，得 $x_{Q} = \\frac{y_{0}^{2}}{2} -x_{0}$

因为 $PM=\\frac{3}{2}PQ$ ，得 $M\\left(\\frac{3}{4}y_{0}^{2}-2x_{0},y_{0}\\right)$

所以 $S_{\\triangle PAB} = \\frac{1}{2} |PM||y_1 - y_2| = \\frac{1}{2}|x_M - x_P|\\sqrt{(y_1 + y_2)^2 - 4y_1y_2}$

$$
= \\frac {1}{2} \\left| \\frac {3}{4} y _ {0} ^ {2} - 3 x _ {0} \\right| \\sqrt {(2 y _ {0}) ^ {2} - 4 (8 x _ {0} - y _ {0} ^ {2})} = 6 \\sqrt {2} (1 - x _ {0} - x _ {0} ^ {2}) ^ {\\frac {3}{2}}.
$$

令 $t = 1 - x_0 - x_0^2 (-1\\leqslant x_0 <   0)\\in \\left[1,\\frac{5}{4}\\right]$ ，所以 $S = 6\\sqrt{2} t^{\\frac{3}{2}}\\in \\left[6\\sqrt{2},\\frac{15}{4}\\sqrt{10}\\right].$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-4-10",
    topicId: "topic-sec-4-4",
    title: `如图 4-4-12 所示, P 是抛物线 C: y =`,
    content: `如图 4-4-12 所示, P 是抛物线 $C: y = \\frac{1}{2} x^{2}$ 上一点, 直线 l 过点 P 且与抛物线 C 交于另一点 Q.
(1) 若直线 l 与过点 P 的切线垂直, 求线段 PQ 中点 M 的轨迹方程;
(2) 若直线 l 不过原点且与 x 轴交于点 S，与 y 轴交于点 T，试求 $\\frac{|ST|}{|SP|} + \\frac{|ST|}{|SQ|}$ 的取值范围.

![](images/4246ddb99763dd9e9c3c0796a4d46949f3699ec6a3e110366da866f2aae8c846.jpg)

图4-4-12`,
    preview: `如图 4-4-12 所示, P 是抛物线 C: y = 1/2 x^2 上一点, 直线 l 过点 P 且与抛物线 C 交于另一点 Q. (1) 若直线 l 与过`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-4-10-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1) 设 $P(x_{1}, y_{1}), Q(x_{2}, y_{2}), M(x_{0}, y_{0})$ ，依题意 $x_{1} \\neq 0, y_{1} > 0, y_{2} > 0$ .

由 $y = \\frac{1}{2} x^2$ ，得 $y' = x$ . ①

所以，过点 P 的切线的斜率 $k = x_{1}$ ，直线 l 的斜率 $k_{1} = -\\frac{1}{k} = -\\frac{1}{x_{1}}$

因此，直线 $l$ 的方程为 $y - \\frac{1}{2} x_1^2 = -\\frac{1}{x_1}(x - x_1)$ . ②`,
      },
      {
        id: "prob-sec-4-4-10-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `联立①②，消去 $y$ ，得 $x^{2} + \\frac{2}{x_{1}} x - x_{1}^{2} - 2 = 0.$

因为 M 是 PQ 的中点, 所以 $\\left\\{\\begin{aligned} x_{0}&=\\frac{x_{1}+x_{2}}{2=-\\frac{1}{x_{1}},\\\\ y_{0}&=\\frac{1}{2}x_{1}^{2}-\\frac{1}{x_{1}}(x_{0}-x_{1}),\\end{aligned}\\right.$

消去 $x_{1}$ ，得 $y_0 = x_0^2 +\\frac{1}{2x_0^2} +1(x_0\\neq 0)$

所以，PQ 中点 M 的轨迹方程为 $y = x^{2} + \\frac{1}{2x^{2}} + 1 (x \\neq 0)$ .`,
      },
      {
        id: "prob-sec-4-4-10-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `由 $y_{1} = \\frac{1}{2} x_{1}^{2}, y_{2} = \\frac{1}{2} x_{2}^{2}, x_{0} = \\frac{x_{1} + x_{2}}{2}$ ,

得 $y_{1} - y_{2} = \\frac{1}{2} x_{1}^{2} - \\frac{1}{2} x_{2}^{2} = \\frac{1}{2} (x_{1} + x_{2})(x_{1} - x_{2}) = x_{0}(x_{1} - x_{2}),$

则 $x_0 = \\frac{y_1 - y_2}{x_1 - x_2} = k_1 = -\\frac{1}{x_1}$ ，所以， $x_1 = -\\frac{1}{x_0}$ ，

将上式代入②并整理，得 $y_0 = x_0^2 + \\frac{1}{2x_0^2} + 1 (x_0 \\neq 0)$ ，

所以，PQ 中点 M 的轨迹方程为 $y = x^{2} + \\frac{1}{2x^{2}} + 1 (x \\neq 0)$ .

(2)设直线 $l: y = kx + b$ ，依题意 $k \\neq 0, b \\neq 0$ ，则 $T(0, b)$ .

分别过 P、Q 作 $PP' \\perp x$ 轴， $QQ' \\perp x$ 轴，垂足分别为 $P', Q'$ ，

则 $\\frac{|ST|}{|SP|} +\\frac{|ST|}{|SQ|} = \\frac{|OT|}{|P'P|} +\\frac{|OT|}{|Q'Q|} = \\frac{|b|}{|y_1|} +\\frac{|b|}{|y_2|}.$

由 $\\left\\{\\begin{aligned}y&=\\frac{1}{2}x^{2},\\\\ y&=kx+b\\end{aligned}\\right.$ 消去x，得 $y^{2}-2(k^{2}+b)y+b^{2}=0.$ ③

则 $\\left\\{\\begin{aligned}y_{1}+y_{2}&=2(k^{2}+b),\\\\ y_{1}y_{2}&=b^{2}.\\end{aligned}\\right.$

(2)`,
      },
      {
        id: "prob-sec-4-4-10-sol-3",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `$\\frac{|ST|}{|SP|} + \\frac{|ST|}{|SQ|} = |b| \\left( \\frac{1}{y_1} + \\frac{1}{y_2} \\right) \\geqslant 2 |b| \\cdot \\sqrt{\\frac{1}{y_1 y_2}} = 2 |b| \\cdot \\sqrt{\\frac{1}{b^2}} = 2.$

又 $y_{1}, y_{2}$ 可取一切不相等的正数，

所以 $\\frac{|ST|}{|SP|}+\\frac{|ST|}{|SQ|}$ 的取值范围是 $(2,+\\infty)$ .`,
      },
      {
        id: "prob-sec-4-4-10-sol-4",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `$\\frac{|ST|}{|SP|} +\\frac{|ST|}{|SQ|} = |b|\\frac{y_1 + y_2}{y_1y_2} = |b|\\frac{2(k^2 + b)}{b^2}.$

当 $b > 0$ 时， $\\frac{|ST|}{|SP|} +\\frac{|ST|}{|SQ|} = b\\frac{2(k^2 + b)}{b^2} = \\frac{2(k^2 + b)}{b} = \\frac{2k^2}{b} +2 > 2;$

当 b<0 时， $\\frac{|ST|}{|SP|}+\\frac{|ST|}{|SQ|}=-b\\frac{2(k^{2}+b)}{b^{2}}=\\frac{2(k^{2}+b)}{-b}.$

又由方程③有两个相异实根，得 $\\Delta=4(k^{2}+b)^{2}-4b^{2}=4k^{2}(k^{2}+2b)>0$ ，

于是 $k^2 + 2b > 0$ ，即 $k^2 > -2b$ .

所以 $\\frac{|ST|}{|SP|}+\\frac{|ST|}{|SQ|}>\\frac{2(-2b+b)}{-b}=2$ ，因此，当b>0时， $\\frac{2k^{2}}{b}$ 可取一切正数，

所以， $\\frac{|ST|}{|SP|}+\\frac{|ST|}{|SQ|}$ 的取值范围是 $(2,+\\infty)$ .`,
      },
      {
        id: "prob-sec-4-4-10-sol-5",
        title: `解法三`,
        method: "geometric",
        steps: [],
        explanation: `由 P、Q、T 三点共线得 $k_{TQ}=k_{TP}$ ，即 $\\frac{y_{2}-b}{x_{2}}=\\frac{y_{1}-b}{x_{1}}$

则 $x_{1}y_{2} - bx_{1} = x_{2}y_{1} - bx_{2}$ ，即 $b(x_{2} - x_{1}) = (x_{2}y_{1} - x_{1}y_{2}).$

于是 $b = \\frac{x_2 \\cdot \\frac{1}{2} x_1^2 - x_1 \\cdot \\frac{1}{2} x_2^2}{x_2 - x_1} = -\\frac{1}{2} x_1 x_2.$

因此， $\\frac{|ST|}{|SP|} +\\frac{|ST|}{|SQ|} = \\frac{|b|}{|y_1|} +\\frac{|b|}{|y_2|} = \\frac{\\left| - \\frac{1}{2}x_1x_2\\right|}{\\frac{1}{2}x_1^2} +\\frac{\\left| - \\frac{1}{2}x_1x_2\\right|}{\\frac{1}{2}x_2^2} = \\left|\\frac{x_2}{x_1}\\right| + \\left|\\frac{x_1}{x_2}\\right|\\geqslant 2.$

而 $|\\frac{x_2}{x_1}|$ 可取一切不等于1的正数，所以， $\\frac{|ST|}{|SP|} +\\frac{|ST|}{|SQ|}$ 的取值范围是(2， $+\\infty$ ）.

评注 本题综合性强,主要考查直线、抛物线、不等式等基础知识,以及求轨迹方程的方法,解析几何的基本思想和综合解题能力.第(1)问主要运用代换法,第(2)问可先观察图形,只要找到 $\\frac{|ST|}{|SP|}+\\frac{|ST|}{|SQ|}$ 的最小值即可.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-4-11",
    topicId: "topic-sec-4-4",
    title: `已知椭圆 C 的方程为 x^2a^2 + y^2b^2 = 1 (a > b > 0)，双曲`,
    content: `已知椭圆 C 的方程为 $\\frac{x^{2}}{a^{2}} + \\frac{y^{2}}{b^{2}} = 1 (a > b > 0)$ ，双曲线 $\\frac{x^{2}}{a^{2}} - \\frac{y^{2}}{b^{2}} = 1$ 的两条渐近线为 $l_{1}, l_{2}$ ，过椭圆 C 的右焦点 F 作直线 l，使 $l \\perp l_{1}$ ，又 l 与 $l_{2}$ 交于 P 点，设 l 与椭圆 C 的两交点从左到右依次为 B、A（如图 4-4-13 所示）。求： $\\frac{|PB|}{|PA|}$ 的最大值及取得最大值时椭圆 C 的离心率 e 的值。
分析 由题意, $\\frac{|PB|}{|PA|}$ 的值可以用离心率e表示,因此只要找到 $\\frac{|PB|}{|PA|}$ 与a,b,c的关系.直线l过右焦点F且与 $l_{1}$ 垂直,点P的坐标容易用a,b,c表示.又P,A,F,B四点共线,则可借助P,F的坐标来表示A,B的坐标,再利用点A,B在椭圆上就可得到有关a,b,c的等式.

![](images/62c25cc9908b51e381ac1d772745077d57d6a5247029cc585ae62aedf85a5f08.jpg)

图4-4-13`,
    preview: `已知椭圆 C 的方程为 ，双曲线 x^2{a^2} - y^2{b^2} = 1 的两条渐近线为 l_1, l_2 ，过椭圆 C 的右焦点 F 作直线 l，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-4-11-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `设椭圆 C 的半焦距为 c，由对称性，不妨设 $l_{1}: y = -\\frac{b}{a}x, l_{2}: y = \\frac{b}{a}x.$

由 $\\left\\{\\begin{aligned}y&=\\frac{b}{a}x,\\\\ y&=\\frac{a}{b}(x-c)\\end{aligned}\\right.$ 得 $P\\left(\\frac{a^{2}}{c},\\frac{ab}{c}\\right)$ ，故点P在椭圆的右准线 $x=\\frac{a^{2}}{c}$ 上.

设点 A 内分有向线段 $\\overrightarrow{FP}$ 的比为 $\\lambda$ ，由定比分点坐标公式求出点 A 的坐标为 $\\left(\\frac{c+\\lambda\\cdot\\frac{a^{2}}{c}}{1+\\lambda},\\frac{\\lambda\\cdot\\frac{ab}{c}}{1+\\lambda}\\right)$ ，由点 A 在椭圆 C 上，将点 A 的坐标代入椭圆方程化简，整理得

$$
(c ^ {2} + \\lambda a ^ {2}) ^ {2} + \\lambda^ {2} a ^ {4} = a ^ {2} c ^ {2} (1 + \\lambda) ^ {2},
$$

两边同除以 $a^4$ ，由 $e = \\frac{c}{a}$ 得 $(e^{2} + \\lambda)^{2} = e^{2}(1 + \\lambda)^{2}$

$$
\\begin{array}{l} \\lambda^ {2} = \\frac {e ^ {2} - e ^ {4}}{2 - e ^ {2}} = - [ (2 - e ^ {2}) + \\frac {2}{2 - e ^ {2}} ] + 3 \\\\ \\leqslant - 2 \\sqrt {(2 - e ^ {2}) \\cdot \\left(\\frac {2}{2 - e ^ {2}}\\right)} + 3 \\\\ = 3 - 2 \\sqrt {2} = (\\sqrt {2} - 1) ^ {2}. \\\\ \\end{array}
$$

当且仅当 $2 - e^{2} = \\frac{2}{2 - e^{2}}$ ，即 $e^2 = 2 - \\sqrt{2}$ ，所以 $\\lambda_{\\mathrm{max}} = \\sqrt{2} -1.$

分别过 A、B 作椭圆 C 的右准线的垂线，垂足分别为 N、M.

设 $|PB|=t|PA|$ ，可得 $|BM|=t|AN|$ ，

根据定义,有 $\\frac{|BF|}{|BM|}=e$ ,因此, $|BM|=\\frac{|BF|}{e}$ ,同理,有 $|AN|=\\frac{|AF|}{e}$ ,

所以 $|BF| = t|AF|$ . 而 $|AB| = |BF| + |AF| = (t + 1)|AF|$ ,

又 $|AB| = |PB| - |PA| = (t - 1)|PA|$ ，所以 $(t + 1)|AF| = (t - 1)|PA|$ ，

即 $\\frac{|FA|}{|AP|}=\\frac{t-1}{t+1}$ ，又由 $\\frac{|FA|}{|AP|}=\\lambda(A$ 为 $\\overrightarrow{FP}$ 的内分点 $)$ ，得 $\\frac{t-1}{t+1}=\\lambda$ ，

根据 $\\lambda\\leqslant\\sqrt{2}-1$ , 解不等式 $\\frac{t-1}{t+1}\\leqslant\\sqrt{2}-1$ , 可得 $t\\leqslant\\sqrt{2}+1$

因此， $\\frac{|PB|}{|PA|}$ 的最大值为 $\\sqrt{2}+1$ ，此时椭圆C的离心率 $e=\\sqrt{2-\\sqrt{2}}$ .

评注 对于解决圆锥曲线的焦半径有关的问题,主要有两种思考方法:一是利用圆锥曲线的第一定义;二是利用圆锥曲线的统一定义(第二定义),将到焦点的距离转化为到相应准线的距离.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-4-12",
    topicId: "topic-sec-4-4",
    title: `如图 4-4-14 所示`,
    content: `（2019 年高考浙江卷理科）如图 4-4-14 所示，过焦点 $F(1,0)$ 的直线与抛物线 $y^{2}=2px(p>0)$ 交于 A, B 两点，点 C 在抛物线上， $\\triangle ABC$ 的重心 P 在 x 轴上，直线 AC 交 x 轴于点 Q（点 Q 在点 F 右侧）.

![](images/5e42f452944fb1528e5de9ed54b0305115b04fb252f0f528595c443503371323.jpg)
(1)求抛物线的方程及准线方程；
(2) 记 $\\triangle AFP, \\triangle CQP$ 的面积分别为 $S_{1}, S_{2}$ ，求 $\\frac{S_{1}}{S_{2}}$ 的最小值及此时点 P 的坐标.`,
    preview: `如图 4-4-14 所示，过焦点 F(1,0) 的直线与抛物线 y^2=2px(p>0) 交于 A, B 两点，点 C 在抛物线上，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-4-12-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `（1）因为抛物线的焦点为 $F(1,0)$ ，所以 p=2，所以 $y^{2}=4x$ ，准线方程为 x=-1。

(2)`,
      },
      {
        id: "prob-sec-4-4-12-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `设 AB 的直线方程为 $y = k(x - 1)$ , $A(x_{1}, y_{1})$ , $B(x_{2}, y_{2})$ ,

由 $\\left\\{\\begin{aligned}y&=k(x-1),\\\\ y^{2}&=4x\\end{aligned}\\right.$ 得 $k^{2}x^{2}-(2k^{2}+4)x+k^{2}=0,$

所以 $x_{1} + x_{2} = 2 + \\frac{4}{k^{2}}, x_{1}x_{2} = 1.$

因为 $y_{1} + y_{2} = k(x_{1} + x_{2} - 2) = \\frac{4}{k},y_{1}y_{2} = -4,$

所以 $y_{1}-\\frac{4}{y_{1}}=\\frac{4}{k}, k=\\frac{4y_{1}}{y_{1}^{2}-4}.$

不妨设 $C(x_{3}, y_{3})$ ，所以 $x_{P} = \\frac{1}{3}(x_{1} + x_{2} + x_{3}) = \\frac{1}{3}\\left(2 + \\frac{4}{k^{2}} + x_{3}\\right)$ ,

$$
y _ {P} = \\frac {1}{3} (y _ {1} + y _ {2} + y _ {3}) = 0,
$$

所以 $x_{P}=\\frac{1}{3}\\left(2+\\frac{8}{k^{2}}\\right)$ , $k_{AC}=\\frac{y_{1}-y_{3}}{x_{1}-x_{3}}=\\frac{4}{y_{1}+y_{3}}$ , $l_{AC}:y-y_{3}=\\frac{4}{y_{1}+y_{3}}(x-x_{3})$ .

令 $y = 0$ ，得 $x_{Q} = x_{3} - \\frac{1}{4}(y_{3}^{2} + y_{1}y_{3}) = -\\frac{1}{4} y_{1}y_{3} > 1.$

$$
S _ {1} = \\frac {1}{2} | F P | | y _ {1} | = \\frac {1}{2} | y _ {1} | \\cdot \\frac {1}{3} \\cdot \\left| \\frac {8}{k ^ {2}} - 1 \\right|,
$$

$$
S _ {2} = \\frac {1}{2} | Q P | | y _ {3} | = \\frac {1}{2} | y _ {3} | \\cdot \\left| - \\frac {1}{4} y _ {1} y _ {3} - \\frac {8}{3 k ^ {2}} - \\frac {2}{3} \\right| = \\frac {2}{| k |} \\cdot \\left| \\frac {y _ {1}}{k} - \\frac {2}{3} - \\frac {8}{3 k ^ {2}} \\right|,
$$

$$
\\frac {S _ {1}}{S _ {2}} = \\frac {\\left| y _ {1} \\left(\\frac {8}{k ^ {2}} - 1\\right) k \\right|}{\\left| 4 \\left(\\frac {3 y _ {1}}{k} - 2 - \\frac {8}{k ^ {2}}\\right) \\right|} = \\left| \\frac {y _ {1} k (8 - k ^ {2})}{4 (3 y _ {1} k - 2 k ^ {2} - 8)} \\right| = \\frac {2 y _ {1} ^ {2} (y _ {1} ^ {2} - 2)}{(y _ {1} ^ {2} - 4) (y _ {1} ^ {2} + 4)} = 2 - \\frac {4 (y _ {1} ^ {2} - 8)}{y _ {1} ^ {4} - 1 6}.
$$

令 $t = y_{1}^{2} - 8$ ，因为 $x_{Q} > x_{P}$ ，所以 $t > 0$

$$
\\frac {S _ {1}}{S _ {2}} = 2 - \\frac {4 (y _ {1} ^ {2} - 8)}{y _ {1} ^ {4} - 1 6} = 2 - \\frac {4}{t + \\frac {4 8}{t} + 1 6} \\geqslant 2 - \\frac {4}{2 \\sqrt {4 8} + 1 6} = 1 + \\frac {\\sqrt {3}}{2},
$$

当且仅当 $y_{1}^{2}=4(2+\\sqrt{3})$ 时等号成立，解得 $y_{1}=\\sqrt{2}+\\sqrt{6}$ .

因为 $\\frac{4}{k}=y_{1}-\\frac{4}{y_{1}}=2\\sqrt{2}$ ，所以 $\\frac{1}{k^{2}}=\\frac{1}{2}$ ，即 $x_{P}=\\frac{1}{3}\\left(2+\\frac{8}{k^{2}}\\right)=2$ ，得 $P(2,0)$ .`,
      },
      {
        id: "prob-sec-4-4-12-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `因为 $y^{2} = 4x$ ，设 $A(t^{2},2t)$ ，由焦点弦性质得 $x_{A}x_{B} = 1$ ，所以

$$
B \\Big (\\frac {1}{t ^ {2}}, - \\frac {2}{t} \\Big), C \\Big (\\Big (\\frac {1}{t} - t \\Big) ^ {2}, \\frac {2}{t} - 2 t \\Big),
$$

此时 $P\\left(\\frac{2t^2 + \\frac{2}{t^2} - 2}{3},0\\right),|PF| = \\frac{2t^2 + \\frac{2}{t^2} - 5}{3}$

![](images/5e42f452944fb1528e5de9ed54b0305115b04fb252f0f528595c443503371323.jpg)

图4-4-14

利用 A, Q, C 三点共线得 $\\frac{2t-\\left(\\frac{2}{t}-2t\\right)}{t^{2}-\\left(\\frac{1}{t}-t\\right)^{2}}=\\frac{2t-0}{t^{2}-x_{Q}}$ ，解得 $Q(t^{2}-1,0)$ ，

所以 $|PQ| = t^2 - 1 - \\frac{2t^2 + \\frac{2}{t^2} - 2}{3} = \\frac{t^2 - \\frac{2}{t^2} - 1}{3}$ ,

$$
\\frac {S _ {1}}{S _ {2}} = \\frac {\\left| P F \\right|}{\\left| P Q \\right|} \\left| \\frac {y _ {A}}{y _ {C}} \\right| = \\left| \\frac {2 t ^ {2} + \\frac {2}{t ^ {2}} - 5}{t ^ {2} - 1 - \\frac {2}{t ^ {2}}} \\cdot \\frac {2 t}{2 \\left(\\frac {1}{t} - t\\right)} \\right| = \\left| \\frac {(2 t ^ {4} - 5 t ^ {2} + 2) t ^ {2}}{(t ^ {4} - t ^ {2} - 2) (t ^ {2} - 1)} \\right|.
$$

令 $f(x) = \\frac{(2x^2 - 5x + 2)x^2}{(x^2 - x - 2)(x - 1)} = \\frac{(x - 2)(2x - 1)x^2}{(x - 2)(x + 1)(x - 1)} = 2 - \\frac{x - 2}{x^2 - 1}$

$$
= 2 - \\frac {1}{(x - 2) + \\frac {3}{x - 2} + 4} \\geqslant 2 - \\frac {1}{2 \\sqrt {3} + 4} = 2 - \\frac {2 - \\sqrt {3}}{2} = 1 + \\frac {\\sqrt {3}}{2},
$$

当且仅当 $(x-2)^{2}=3$ 时等号成立，解得 $x=\\sqrt{3}+2$ ，即 $t^{2}=\\sqrt{3}+2$ ，

代入得 $\\frac{2t^{2}+\\frac{2}{t^{2}}-2}{3}=2$ ，所以 $P(2,0)$ .`,
      },
      {
        id: "prob-sec-4-4-12-sol-3",
        title: `解法三`,
        method: "standard",
        steps: [],
        explanation: `设 $A\\left(\\frac{y_{1}^{2}}{4}, y_{1}\\right)$ , $B\\left(\\frac{y_{2}^{2}}{4}, y_{2}\\right)$ , $C\\left(\\frac{y_{3}^{2}}{4}, y_{3}\\right)$ ，由重心坐标公式得 $y_{3} = -y_{1} - y_{2}$ ,

所以 $C\\left(\\frac{(y_1 + y_2)^2}{4}, - y_1 - y_2\\right), P\\left(\\frac{(y_1 + y_2)^2 - y_1y_2}{6}, 0\\right)$ .

根据对称性,不妨设 $y_{1}>0$ ,

直线 AC 的方程为 $y - y_{1} = \\frac{4}{y_{1} + y_{3}} \\left( x - \\frac{y_{1}^{2}}{4} \\right)$ ，即 $y = \\frac{4}{y_{1} + y_{3}} x + \\frac{y_{1} y_{3}}{y_{1} + y_{3}}$ .

令 $y = 0$ ，得 $x_{Q} = -\\frac{y_{1}y_{3}}{4} = \\frac{y_{1}^{2} + y_{1}y_{2}}{4}$

设直线 AB 的方程为 $x=my+1(m\\neq0,$ 若 m=0, 则 $y_{3}=0,$ 不符合题意).

由 $\\left\\{\\begin{aligned}x&=my+1,\\\\ y^{2}&=4x\\end{aligned}\\right.$ 得 $y^{2}-4my-4=0$ ,

则 $y_{1} + y_{2} = 4m, y_{1}y_{2} = -4, y_{1} = 2m + 2\\sqrt{m^{2} + 1}$ .

下面重新改写相关点坐标得 $P\\left(\\frac{8m^{2}+2}{3},0\\right)$ , $Q\\left(\\frac{y_{1}^{2}}{4}-1,0\\right)$ , $y_{3}=-4m$ .

由题知点 Q 在点 P 右侧，则 $\\frac{8m^{2}+2}{3}>1$ ，所以 $m^{2}>\\frac{1}{8}$ .

$$
S _ {1} = \\frac {1}{2} \\cdot | P F | \\cdot | y _ {1} | = \\frac {1}{2} \\cdot \\left| \\frac {8 m ^ {2} + 2}{3} - 1 \\right| \\cdot | 2 m + 2 \\sqrt {m ^ {2} + 1} |,
$$

$$
\\begin{array}{l} S _ {2} = \\frac {1}{2} | P Q | \\cdot | y _ {3} | = \\frac {1}{2} \\left| \\frac {y _ {1} ^ {2}}{4} - 1 - \\frac {8 m ^ {2} + 2}{3} \\right| \\cdot 4 | m | \\\\ = 4 \\mid m \\mid \\cdot \\left| m \\sqrt {m ^ {2} + 1} - \\frac {m ^ {2} + 1}{3} \\right|, \\\\ \\end{array}
$$

$$
\\begin{array}{l} \\frac {S _ {1}}{S _ {2}} = \\frac {(8 m ^ {2} - 1) (m + \\sqrt {m ^ {2} + 1})}{4 | m | \\cdot | 3 m \\sqrt {m ^ {2} + 1} - (m ^ {2} + 1) |} = \\frac {(8 m ^ {2} - 1) (m + \\sqrt {m ^ {2} + 1})}{4 | m | \\sqrt {m ^ {2} + 1} \\cdot | 3 m - \\sqrt {m ^ {2} + 1} |} \\\\ = \\frac {4 m ^ {2} + 1 + 4 m \\sqrt {m ^ {2} + 1}}{4 | m | \\sqrt {m ^ {2} + 1}} = 1 + \\frac {4 m ^ {2} + 1}{4 | m | \\sqrt {m ^ {2} + 1}} = \\frac {4 m ^ {2} + 1}{\\frac {4}{\\sqrt {3}} \\cdot \\sqrt {3 m ^ {2} (m ^ {2} + 1)}} + 1 \\\\ \\geqslant \\frac {4 m ^ {2} + 1}{\\frac {4}{\\sqrt {3}} \\cdot \\frac {3 m ^ {2} + (m ^ {2} + 1)}{2}} + 1 = \\frac {\\sqrt {3}}{2} + 1, \\\\ \\end{array}
$$

当且仅当 $3m^{2}=m^{2}+1$ ，即 $m^{2}=\\frac{1}{2}$ 时取等号，此时 $P(2,0)$ ， $\\frac{S_{1}}{S_{2}}$ 的最小值为 $\\frac{\\sqrt{3}}{2}+1$ 。`,
      },
      {
        id: "prob-sec-4-4-12-sol-4",
        title: `解法四`,
        method: "standard",
        steps: [],
        explanation: `设 $A(a^{2},2a)$ , $B(b^{2},2b)$ , $C(c^{2},2c)$ , $Q(t,0)$ ,

由 A, F, B 三点共线得 $\\frac{2a-2b}{a^{2}-b^{2}}=\\frac{2a}{a^{2}-1}$ ,

所以 $ab = -1, y_P = \\frac{2a + 2b + 2c}{3} = 0$ ，即 $a + b + c = 0$ .

由 A, Q, C 三点共线得 $\\frac{2a-2c}{a^{2}-c^{2}}=\\frac{2a}{a^{2}-t}$ ，所以 t=-ac, Q(-ac,0).

因为 $x_{P}=\\frac{a^{2}+b^{2}+c^{2}}{3}<-ac$ ，所以 $a^{2}>2b^{2}-ab$ ，所以 $a^{2}>2$ 。

因为 P 为重心，所以 $S_{\\triangle ABP}=S_{\\triangle APC}$ ，且 $\\frac{S_{\\triangle AFP}}{S_{\\triangle ABP}}=\\frac{|AF|}{|AB|},\\frac{S_{\\triangle CPQ}}{S_{\\triangle ACP}}=\\frac{|CQ|}{|CA|}$ .

$$
\\begin{array}{l} \\frac {S _ {1}}{S _ {2}} = \\frac {| A F |}{| A B |} \\cdot \\frac {| C A |}{| C Q |} = \\frac {| 2 a |}{| 2 a - 2 b |} \\cdot \\frac {| 2 a - 2 c |}{| 2 c |} = \\left| \\frac {a ^ {2} - a c}{a c - b c} \\right| \\\\ = \\frac {\\left| a ^ {2} + a (a + b) \\right|}{\\left| (a + b) (a - b) \\right|} = \\frac {2 a ^ {2} - 1}{a ^ {2} - \\frac {1}{a ^ {2}}} = \\frac {2 a ^ {4} - a ^ {2}}{a ^ {4} - 1} = 2 - \\frac {a ^ {2} - 2}{a ^ {4} - 1}. \\\\ \\end{array}
$$

令 $a^2 - 2 = m > 0$ ，则

$$
\\frac {S _ {1}}{S _ {2}} = 2 - \\frac {m}{m ^ {2} + 4 m + 3} = 2 - \\frac {1}{m + \\frac {3}{m} + 4} \\geqslant 2 - \\frac {1}{2 \\sqrt {3} + 4} = 1 + \\frac {\\sqrt {3}}{2},
$$

当且仅当 $m=\\sqrt{3}$ 时取等号，此时 $a^{2}=2+\\sqrt{3}, b^{2}=2-\\sqrt{3}, c^{2}=2$ ，得点 $P(2,0)$ .`,
      },
      {
        id: "prob-sec-4-4-12-sol-5",
        title: `解法五`,
        method: "standard",
        steps: [],
        explanation: `设 $A(x_{1}, y_{1}), B(x_{2}, y_{2}), C(x_{3}, y_{3})$ ,

易得 $y_{1}y_{2}=-4, y_{1}y_{3}=-4x_{Q}, y_{1}+y_{2}+y_{3}=0.$

因为 $x_{Q}=-\\frac{y_{1}}{4}\\left(-y_{1}+\\frac{4}{y_{1}}\\right)>1$ ，所以 $y_{1}^{2}>8$ ，

且 $\\frac{S_{\\triangle AFP}}{S_{\\triangle ABP}}=\\frac{|AF|}{|AB|}=\\frac{y_{1}}{y_{1}-y_{2}},\\frac{S_{\\triangle CPQ}}{S_{\\triangle ACP}}=\\frac{|CQ|}{|CA|}=\\frac{-y_{3}}{y_{1}-y_{3}},$

$$
\\frac {S _ {1}}{S _ {2}} = \\frac {| A F |}{| A B |} \\cdot \\frac {| C A |}{| C Q |} = \\frac {y _ {1} (y _ {3} - y _ {1})}{(y _ {1} - y _ {2}) y _ {3}} = 2 + \\frac {4 (y _ {1} ^ {2} - 8)}{1 6 - y _ {1} ^ {4}}.
$$

令 $t=y_{1}^{2}-8$ ,

则 $\\frac{S_1}{S_2} = 2 - \\frac{4(y_1^2 - 8)}{y_1^4 - 16} = 2 - \\frac{4}{t + \\frac{48}{t} + 16}\\geqslant 2 - \\frac{4}{2\\sqrt{48} + 16} = 1 + \\frac{\\sqrt{3}}{2},$

当且仅当 $y_{1}^{2} = 4(2 + \\sqrt{3})$ 时等号成立，解得 $y_{1} = \\sqrt{2} +\\sqrt{6}$ ，由`,
      },
      {
        id: "prob-sec-4-4-12-sol-6",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `得

$\\frac{4}{k} = y_{1} - \\frac{4}{y_{1}} = 2\\sqrt{2},\\frac{1}{k^{2}} = \\frac{1}{2}$ 即 $x_{P} = \\frac{1}{3}\\left(2 + \\frac{8}{k^{2}}\\right) = 2$ ，得 $P(2,0)$`,
      },
      {
        id: "prob-sec-4-4-12-sol-7",
        title: `解法六`,
        method: "standard",
        steps: [],
        explanation: `设 $\\overrightarrow{AF} = \\lambda \\overrightarrow{AB},\\overrightarrow{AQ} = \\mu \\overrightarrow{AC}$ ，则 $\\overrightarrow{AP} = \\frac{1}{3}\\overrightarrow{AB} +\\frac{1}{3}\\overrightarrow{AC} = \\frac{1}{3\\lambda}\\overrightarrow{AF} +\\frac{1}{3\\mu}\\overrightarrow{AQ}.$

由 F, P, Q 三点共线得 $\\frac{1}{3\\lambda} + \\frac{1}{3\\mu} = 1$ ，所以 $\\frac{1}{\\lambda} + \\frac{1}{\\mu} = 3, \\lambda, \\mu \\in (0, 1)$ ,

所以 $\\mu=\\frac{\\lambda}{3\\lambda-1}$ ，即 $\\frac{1}{2}<\\lambda<1$ .

$$
\\frac {S _ {1}}{S _ {2}} = \\frac {S _ {\\triangle A F P}}{S _ {\\triangle C P Q}} = \\frac {\\lambda S _ {\\triangle A P B}}{(1 - \\mu) S _ {\\triangle A C P}} = \\frac {\\lambda}{(1 - \\mu)} = \\frac {\\lambda}{1 - \\frac {\\lambda}{3 \\lambda - 1}} = \\frac {\\lambda (3 \\lambda - 1)}{2 \\lambda - 1}.
$$

令 $t=2\\lambda-1\\in(0,1)$ ,

$$
\\frac {S _ {1}}{S _ {2}} = \\frac {\\lambda (3 \\lambda - 1)}{2 \\lambda - 1} = \\frac {1}{4} \\left(3 t + \\frac {1}{t}\\right) + 1 \\geqslant 1 + \\frac {\\sqrt {3}}{2},
$$

当且仅当 $\\lambda=\\frac{1}{2}+\\frac{\\sqrt{3}}{6},\\mu=\\frac{\\sqrt{3}}{3}$ 时取等号.`,
      },
    ],
    tags: [],
    source: `2019 年高考浙江卷理科`,
  },
  {
    id: "prob-sec-4-4-13",
    topicId: "topic-sec-4-4",
    title: `如图 4-4-15 所示`,
    content: `（2021 年浙江省金丽衢三市 5 月联考）如图 4-4-15 所示，已知点 F 是抛物线 $y^{2}=2px(p>0)$ 的焦点，设 $P(0,t)$ ，直线 PF 与抛物线交于 A, B 两点 (AF<BF)，点 C（不同于原点）在抛物线上，PC 不平行于 x 轴，且 PC 与抛物线有且只有一个公共点。当 $t=2\\sqrt{2}$ 时， $\\overrightarrow{AF}=\\frac{1}{2}\\overrightarrow{FB}$ 。
![](images/3113f2640cd1ce27d35fe7ef56449c8d03385924ed2ea63d3ae94fa298bde920.jpg)

图4-4-15

(1) 求 p 的值;

(2) 若 CA, CB 分别与 x 轴交于 D, E, 设 $\\triangle ADF, \\triangle BEF$ 和 $\\triangle ABC$ 的面积分别为 $S_{1}, S_{2}, S$ , 求 $\\frac{S_{1}S_{2}}{S^{2}}$ 的最大值.`,
    preview: `如图 4-4-15 所示，已知点 F 是抛物线 y^2=2px(p>0) 的焦点，设 P(0,t) ，直线 PF 与抛物线交于 A, B 两点 (AF<BF)，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-4-13-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1) 设 $A(x_{1}, y_{1}), B(x_{2}, y_{2})$ ，由题可知 $P(0, 2\\sqrt{2}), F\\left(\\frac{p}{2}, 0\\right)$ ，

所以直线 AB 方程为 $\\frac{2x}{p} + \\frac{y}{2\\sqrt{2}} = 1$ .

联立 $\\left\\{\\begin{aligned}\\frac{2x}{p}+\\frac{y}{2\\sqrt{2}}=1,\\\\ y^{2}=2px,\\end{aligned}\\right.$ 消 x 得 $\\frac{y^{2}}{p^{2}}+\\frac{y}{2\\sqrt{2}}-1=0,$

由韦达定理得 $y_{1} + y_{2} = -\\frac{p^{2}}{2\\sqrt{2}}, y_{1}y_{2} = -p^{2}$ .

又由 $\\overrightarrow{AF}=\\frac{1}{2}\\overrightarrow{BF}$ ，得 $y_{2}=-2y_{1}$ ，解得p=2.

(2)`,
      },
      {
        id: "prob-sec-4-4-13-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `设 $C(x_{3}, y_{3})$ , $P(0, t)$ , 由(1)知 $F(1, 0)$ ,

则直线 AB 方程为 $y = -t(x - 1)$ ,

联立 $\\left\\{\\begin{aligned}y&=-t(x-1),\\\\ y^{2}&=4x,\\end{aligned}\\right.$ 消x得 $ty^{2}+4y-4t=0,$

由韦达定理得 $y_{1} + y_{2} = -\\frac{4}{t}, y_{1}y_{2} = -4.$

所以可得弦长 $|AB| = \\frac{4(1 + t^2)}{t^2}$ .

设直线 $PC$ 方程为 $y = kx + t$ ，联立 $\\left\\{ \\begin{array}{l} y = kx + t, \\\\ y^2 = 4x, \\end{array} \\right.$ 消 $x$ 得 $ky^2 - 4y + 4t = 0$

由直线 PC 与抛物线相切得 $\\Delta=16-16kt=0$ ，即 kt=1。

由韦达定理得 $2y_{3}=\\frac{4}{k}=4t,C(t^{2},2t)$ .

点 C 到直线 AB 的距离为 $d=\\frac{\\left|t^{3}+t\\right|}{\\sqrt{t^{2}+1}}$ ,

直线 $AC$ 方程为 $(y_{1} + y_{3})y = 4x + y_{1}y_{3}$ ，得 $x_{D} = -\\frac{y_{1}y_{3}}{4}$ ，同理可得 $x_{E} = -\\frac{y_{2}y_{3}}{4}$

所以 $S_{1} \\cdot S_{2} = \\frac{1}{2} |DF| \\cdot |y_{1}| \\cdot \\frac{1}{2} |EF| \\cdot |y_{2}|$

$$
= \\frac {1}{6 4} \\left| (4 + y _ {1} y _ {3}) (4 + y _ {2} y _ {3}) y _ {1} y _ {2} \\right| = 1 + t ^ {2},
$$

又 $S = \\frac{1}{2} |AB|\\cdot d = \\frac{2(t^2 + 1)^{\\frac{3}{2}}}{|t|},$

所以 $\\frac{S_1 \\cdot S_2}{S^2} = \\frac{1}{4} \\cdot \\frac{t^2}{(t^2 + 1)^2} = \\frac{1}{4} \\cdot \\frac{1}{\\left(t + \\frac{1}{t}\\right)^2} \\leqslant \\frac{1}{16}$ ,

等号当且仅当 $t=\\pm1$ 成立.`,
      },
      {
        id: "prob-sec-4-4-13-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `如图 4-4-16 所示，

设 $A(a^{2}, 2a), B(b^{2}, 2b), C(c^{2}, 2c)$ ,

则 $k_{AB} = \\frac{2}{a + b} = k_{PF} = -t$ ，即 $a + b = -\\frac{2}{t}$

由 A, F, B 三点共线得

$\\frac{2}{a + b} = \\frac{2a}{a^2 - 1}$ , 化简得 $ab = -1$ ,

同理由 C, A, D 三点共线得

$x_{D}^{2} = x_{A}\\cdot x_{C} = a^{2}c^{2}$ ，所以 $x_{D} = -ac$

同理由 C, E, B 三点共线得

$x_{E}^{2} = x_{B}\\cdot x_{C} = b^{2}c^{2}$ ，所以 $x_{E} = -bc$

所以 $S_{1}=\\frac{1}{2}(1+ac)\\cdot2a=a(1+ac)$ ,

![](images/8ed50b159dab301d4d2b6d7ab994d4918f02cd478dc6ecfdd90fc741655ac668.jpg)

图4-4-16

$$
S _ {2} = \\frac {1}{2} (- b c - 1) \\cdot (- 2 b) = b (1 + b c),
$$

则 $S_{1}S_{2}=ab(1+bc)(1+ac)=-(1+bc)(1+ac)$ .

切线 $PC:cy=x+c^{2}$ ，所以 $ct=c^{2}$ ，所以 c=t.

所以 $S_{1}S_{2}=(-1+ac+bc+abc^{2})=t^{2}+1$

又直线 $AB$ 方程为 $y = -t(x - 1)$ ，联立 $\\left\\{ \\begin{array}{l} y = -t(x - 1), \\\\ y^2 = 4x, \\end{array} \\right.$ 消 $x$ 得 $ty^2 + 4y - 4t = 0$

由韦达定理得 $y_{1} + y_{2} = -\\frac{4}{t}, y_{1}y_{2} = -4.$

所以，点 C 到直线 AB 的距离为 $d=\\frac{\\left|t^{3}+t\\right|}{\\sqrt{t^{2}+1}}$ , $S=\\frac{1}{2}\\left|AB\\right|\\cdot d=\\frac{2(t^{2}+1)^{\\frac{3}{2}}}{\\left|t\\right|}$ ,

所以 $\\frac{S_1 \\cdot S_2}{S^2} = \\frac{1}{4} \\cdot \\frac{t^2}{(t^2 + 1)^2} = \\frac{1}{4} \\cdot \\frac{1}{\\left(t + \\frac{1}{t}\\right)^2} \\leqslant \\frac{1}{16}$ ,

等号当且仅当 $t=\\pm1$ 成立.`,
      },
    ],
    tags: [],
    source: `2021 年浙江省金丽衢三市 5 月联考`,
  },
  {
    id: "prob-sec-4-4-14",
    topicId: "topic-sec-4-4",
    title: `如图 4-4-17 所示, 设椭圆 C: x^2a^2 + y^2b^2 = 1 (a >`,
    content: `如图 4-4-17 所示, 设椭圆 $C: \\frac{x^{2}}{a^{2}} + \\frac{y^{2}}{b^{2}} = 1 (a > b > 0)$ , 动直线 l 与椭圆 C 只有一个公共点 P, 且点 P 在第一象限.
![](images/efb38d7386db57238ad57ee57874ddc9aa90b510529f10c4e1dbfb5edbcdca28.jpg)

图4-4-17

(1)已知直线 l 的斜率为 k，用 a、b、k 表示点 P 的坐标；

(2) 若过原点 O 的直线 $l_{1}$ 与 l 垂直, 证明: 点 P 到直线 $l_{1}$ 距离的最大值为 a - b.

(1)解法一 已知椭圆 $C:\\frac{x^{2}}{a^{2}}+\\frac{y^{2}}{b^{2}}=1$ ,

设 $P(x_{p},y_{p})$ ，则椭圆在点 $P$ 处的切线 $l$ 的方程为 $\\frac{x_px}{a^2} +\\frac{y_py}{b^2} = 1.$

所以 $k = -\\frac{b^2x_p}{a^2y_p}$ ，所以 $\\begin{cases} ka^2 y_p = -b^2 x_p, \\\\ \\frac{x_p^2}{a^2} + \\frac{y_p^2}{b^2} = 1, \\end{cases}$

整理得 $(k^{2}a^{2}+b^{2})y_{p}^{2}=b^{4}$ ,

所以 $y_{p} = \\frac{b^{2}}{\\sqrt{a^{2}k^{2} + b^{2}}}, x_{p} = \\frac{-ka^{2}}{\\sqrt{a^{2}k^{2} + b^{2}}}.$`,
    preview: `如图 4-4-17 所示, 设椭圆 , 动直线 l 与椭圆 C 只有一个公共点 P, 且点 P 在第一象限. 图4-4-17 (1)已知直线 l 的斜率为 k，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-4-14-sol-0",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `令切点 $P(a\\cos \\theta ,b\\sin \\theta)$ ，则 $l$ 的方程为 $\\frac{a\\cos\\theta x}{a^2} +\\frac{b\\sin\\theta y}{b^2} = 1,$

即 $\\frac{\\cos\\theta x}{a}+\\frac{\\sin\\theta y}{b}=1$ ，其斜率为 $-\\frac{b}{a\\tan\\theta}=k<0,\\tan\\theta=-\\frac{b}{ak}$ .

所以 $\\cos\\theta=\\frac{1}{\\sqrt{1+\\tan^{2}\\theta}}=\\frac{-ka}{\\sqrt{k^{2}a^{2}+b^{2}}}$ , $\\sin\\theta=\\frac{b}{\\sqrt{k^{2}a^{2}+b^{2}}}$ .

因此 $P\\left(\\frac{-ka^2}{\\sqrt{k^2a^2 + b^2}}, \\frac{b^2}{\\sqrt{k^2a^2 + b^2}}\\right)$ .`,
      },
      {
        id: "prob-sec-4-4-14-sol-1",
        title: `解法三`,
        method: "standard",
        steps: [],
        explanation: `点 $P$ 在第一象限, 由 $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ 得 $y = \\frac{b}{a}\\sqrt{a^2 - x^2}, y' = \\frac{-bx}{a\\sqrt{a^2 - x^2}} = k.$

由题知 $x > 0, k < 0$ ，解得 $x = \\frac{-ka^2}{\\sqrt{k^2a^2 + b^2}}$ ，代入椭圆方程解得 $y = \\frac{b^2}{\\sqrt{k^2a^2 + b^2}}.$

所以 $P\\left(\\frac{-ka^2}{\\sqrt{k^2a^2 + b^2}}, \\frac{b^2}{\\sqrt{k^2a^2 + b^2}}\\right)$ .

(2)`,
      },
      {
        id: "prob-sec-4-4-14-sol-2",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `设 $P(x_{0}, y_{0})$ ，则切线 $l: \\frac{xx_{0}}{a^{2}} + \\frac{yy_{0}}{b^{2}} = 1$ ，设过 P 且与 l 垂直的直线为 $l_{2}$ ，则 $l_{1} \\parallel l_{2}$ ，所以点 P 到直线 $l_{1}$ 的距离等于点 O 到直线 $l_{2}$ 的距离.

因为 $l \\perp l_{2}$ , 所以直线 $l_{2}$ 的方程为 $\\frac{a^{2}}{x_{0}} x - \\frac{b^{2}}{y_{0}} y = a^{2} - b^{2}$ , 所以点 $O$ 到直线 $l_{2}$ 的距离

$d_{l_2} = \\frac{a^2 - b^2}{\\sqrt{\\frac{a^4}{x_0^2} + \\frac{b^4}{y_0^2}}}$ . 又 $\\frac{x_0^2}{a^2} + \\frac{y_0^2}{b^2} = 1$ ，所以点 $P$ 到直线 $l_1$ 的距离

$$
d _ {l _ {1}} = d _ {l _ {2}} = \\frac {a ^ {2} - b ^ {2}}{\\sqrt {\\frac {a ^ {4}}{x _ {0} ^ {2}} + \\frac {b ^ {4}}{y _ {0} ^ {2}}}} = \\frac {a ^ {2} - b ^ {2}}{\\sqrt {\\left(\\frac {a ^ {4}}{x _ {0} ^ {2}} + \\frac {b ^ {4}}{y _ {0} ^ {2}}\\right) \\left(\\frac {x _ {0} ^ {2}}{a ^ {2}} + \\frac {y _ {0} ^ {2}}{b ^ {2}}\\right)}} \\leqslant \\frac {a ^ {2} - b ^ {2}}{\\sqrt {(a + b) ^ {2}}} = a - b.
$$

当且仅当 $\\frac{x_{0}^{2}}{y_{0}^{2}}=\\frac{a^{3}}{b^{3}}$ 时取到最大值.`,
      },
      {
        id: "prob-sec-4-4-14-sol-3",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `设 $P(a\\cos\\theta, b\\sin\\theta)$ ，则切线 l 的方程为 $\\frac{\\cos\\theta x}{a} + \\frac{b\\sin\\theta y}{b} = 1$ .

因为 $l_{1} \\perp l$ ，所以 $l_{1}$ 的方程为 $a \\sin \\theta x - b \\cos \\theta y = 0$ ，所以点 P 到直线 $l_{1}$ 的距离

$$
\\begin{array}{l} d = \\frac {\\left| a ^ {2} \\sin \\theta \\cos \\theta - b ^ {2} \\sin \\theta \\cos \\theta \\right|}{\\sqrt {a ^ {2} \\sin^ {2} \\theta + b ^ {2} \\cos^ {2} \\theta}} = \\frac {(a ^ {2} - b ^ {2}) \\left| \\sin \\theta \\cos \\theta \\right|}{\\sqrt {a ^ {2} \\sin^ {2} \\theta + b ^ {2} \\cos^ {2} \\theta}} \\\\ = \\frac {a ^ {2} - b ^ {2}}{\\sqrt {\\frac {a ^ {2}}{\\cos^ {2} \\theta} + \\frac {b ^ {2}}{\\sin^ {2} \\theta}}} \\leqslant \\frac {a ^ {2} - b ^ {2}}{\\sqrt {\\frac {(a + b) ^ {2}}{\\cos^ {2} \\theta + \\sin^ {2} \\theta}}} \\\\ = a - b. \\\\ \\end{array}
$$

当且仅当 $\\tan\\theta=\\sqrt{\\frac{b}{a}}$ 时取到最大值.`,
      },
      {
        id: "prob-sec-4-4-14-sol-4",
        title: `解法三`,
        method: "geometric",
        steps: [],
        explanation: `设 $P(x_0, y_0)$ 是椭圆 $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ 上一点，

且 $x_0 > 0, y_0 > 0$ ，则椭圆在点 $P$ 处的切线 $l$ 的方程为 $\\frac{x_0 x}{a^2} + \\frac{y_0 y}{b^2} = 1$ ，所以椭圆在点 $P$ 处的法线 $l_2$ 的方程为 $\\left(\\frac{a^2}{x_0}\\right)x - \\left(\\frac{b^2}{y_0}\\right)y = a^2 - b^2$ .

显然题设中的点 $P$ 到直线 $l_{1}$ 的距离恰等于坐标原点到此法线 $l_{2}$ 的距离, 设它们为 $d$ , 则 $d = \\frac{a^{2} - b^{2}}{\\sqrt{\\frac{a^{4}}{x_{0}^{2}} + \\frac{b^{4}}{y_{0}^{2}}}}$ .

又 $\\frac{x_0^2}{a^2} +\\frac{y_0^2}{b^2} = 1$ ，于是由柯西不等式得 $\\frac{a^4}{x_0^2} +\\frac{b^4}{y_0^2} = \\left(\\frac{a^4}{x_0^2} +\\frac{b^4}{y_0^2}\\right)\\left(\\frac{x_0^2}{a^2} +\\frac{y_0^2}{b^2}\\right)\\geqslant (a + b)^2,$

等号在 $\\frac{a^{2}}{x_{0}}:\\frac{x_{0}}{a}=\\frac{b^{2}}{y_{0}}:\\frac{y_{0}}{b}$ ，即 $\\frac{y_{0}^{2}}{x_{0}^{2}}=\\frac{b^{3}}{a^{3}}$ 时成立.

所以 $d \\leqslant \\frac{a^2 - b^2}{a + b} = a - b$ ，即点 $P$ 到直线 $l_1$ 的距离最大值为 $a - b$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-4-15",
    topicId: "topic-sec-4-4",
    title: `如图 4-4-18 所示, 过抛物线`,
    content: `如图 4-4-18 所示, 过抛物线 $y^{2}=2px(p>0)$ 上一定点 $P(x_{0},y_{0})(y_{0}>0)$ , 作两条直线分别交抛物线于 $A(x_{1},y_{1}), B(x_{2},y_{2})$ .
(1)求该抛物线上纵坐标为 $\\frac{p}{2}$ 的点到其焦点F的距离；
(2) 当 $PA$ 与 $PB$ 的斜率存在且倾斜角互补时, 求 $\\frac{y_1 + y_2}{y_0}$ 的值, 并证明直线 $AB$ 的斜率是非零常数.

![](images/85a390d6f856ccdc03b147bc047f52554a35933ac4e5388309124fb1b0c28953.jpg)

图4-4-18`,
    preview: `如图 4-4-18 所示, 过抛物线 y^2=2px(p>0) 上一定点 P(x_0,y_0)(y_0>0) , 作两条直线分别交抛物线于 A(x_1,y_1)`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-4-15-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `(1)当 $y = \\frac{p}{2}$ 时, $x = \\frac{p}{8}$ .

又抛物线 $y^{2}=2px$ 的准线方程为 $x=-\\frac{p}{2}$ .

由抛物线定义得,所求距离为 $\\frac{p}{8}-\\left(-\\frac{p}{2}\\right)=\\frac{5p}{8}$ .

(2) 设直线 PA 的斜率为 $k_{PA}$ ，直线 PB 的斜率为 $k_{PB}$ ，

由 $y_{1}^{2}=2px_{1}, y_{0}^{2}=2px_{0}$ 相减得 $(y_{1}-y_{0})(y_{1}+y_{0})=2p(x_{1}-x_{0})$ ,

故 $k_{PA} = \\frac{y_1 - y_0}{x_1 - x_0} = \\frac{2p}{y_1 + y_0} (x_1\\neq x_0).$

同理可得 $k_{PB} = \\frac{2p}{y_2 + y_0} (x_2\\neq x_0).$

由 PA, PB 倾斜角互补知 $k_{PA} = -k_{PB}$ ，即 $\\frac{2p}{y_{1} + y_{0}} = -\\frac{2p}{y_{2} + y_{0}}$ ,

所以 $y_{1} + y_{2} = -2y_{0}$ ，故 $\\frac{y_1 + y_2}{y_0} = -2.$

设直线 AB 的斜率为 $k_{AB}$ ，由 $y_{2}^{2}=2px_{2}, y_{1}^{2}=2px_{1}$ ，

相减得 $(y_{2}-y_{1})(y_{2}+y_{1})=2p(x_{2}-x_{1})$ ，所以 $k_{AB}=\\frac{y_{2}-y_{1}}{x_{2}-x_{1}}=\\frac{2p}{y_{1}+y_{2}}(x_{1}\\neq x_{2})$

将 $y_{1} + y_{2} = -2y_{0}(y_{0} > 0)$ 代入得 $k_{AB} = \\frac{2p}{y_1 + y_2} = -\\frac{p}{y_0}$ ，所以 $k_{AB}$ 是非零常数.`,
      },
      {
        id: "prob-sec-4-4-15-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `(1) 显然抛物线上该点的坐标为 $\\left(\\frac{p}{8}, \\frac{p}{2}\\right)$ . 又 $F\\left(\\frac{p}{2}, 0\\right)$ ,

由两点间距离公式得所求距离为 $\\sqrt{\\left(\\frac{p}{2}-\\frac{p}{8}\\right)^{2}+\\left(\\frac{p}{2}\\right)^{2}}=\\frac{5p}{8}$ .

(2)设直线 $PA$ 的斜率为 $k$ , 则直线 $PB$ 的斜率为 $-k$ , 且 $k \\neq 0$ , 所以直线 $PA$ 的方程为 $y - y_0 = k(x - x_0)$ .

由 $\\left\\{\\begin{aligned}y^{2}&=2px,\\\\ y-y_{0}&=k(x-x_{0})\\end{aligned}\\right.$ 消去x整理得 $ky^{2}-2py+2py_{0}-2pkx_{0}=0,$ ①

显然， $y_{1},y_{0}$ 是方程①的两个根，由根与系数的关系得 $y_{1} + y_{0} = \\frac{2p}{k}$ ②

用 $-k$ 替换②式中的 $k$ 得 $y_{2} + y_{0} = -\\frac{2p}{k}$ ③

②+③得 $y_{1}+y_{0}+y_{2}+y_{0}=0$ .

又 $y_0 > 0$ ，所以 $\\frac{y_1 + y_2}{y_0} = -2.$

②-③得 $y_{1} - y_{2} = \\frac{4p}{k}$ ，而 $x_{1} = \\frac{y_{1}^{2}}{2p}, x_{2} = \\frac{y_{2}^{2}}{2p}$ ，所以 $x_{1} - x_{2} = \\frac{y_{1}^{2}}{2p} - \\frac{y_{2}^{2}}{2p} = \\frac{(y_{1} - y_{2})(y_{1} + y_{2})}{2p}$ .

故直线 $AB$ 的斜率为 $\\frac{y_1 - y_2}{x_1 - x_2} = -\\frac{p}{y_0} \\neq 0$ . 即直线 $AB$ 的斜率是非零常数.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-4-16",
    topicId: "topic-sec-4-4",
    title: `设椭圆 C: x^2a^2 + y^2b^2 = 1 (a > b > 0)`,
    content: `设椭圆 $C: \\frac{x^{2}}{a^{2}} + \\frac{y^{2}}{b^{2}} = 1 (a > b > 0)$ 过点 $M(\\sqrt{2}, 1)$ ，且左焦点为 $F_{1}(-\\sqrt{2}, 0)$ .
(1)求椭圆 C 的方程；

(2) 当过点 $P(4,1)$ 的动直线 l 与椭圆 C 相交于两不同点 A, B 时，在线段 AB 上取点 Q，满足 $\\left|\\overrightarrow{AP}\\right| \\cdot \\left|\\overrightarrow{QB}\\right| = \\left|\\overrightarrow{AQ}\\right| \\cdot \\left|\\overrightarrow{PB}\\right|$ ，证明：点 Q 总在某定直线上.`,
    preview: `设椭圆 过点 M(√2, 1) ，且左焦点为 F_1(-√2, 0) . (1)求椭圆 C 的方程； (2) 当过点 P(4,1) 的动直线 l 与椭圆 C 相`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-4-16-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)由题意: $\\left\\{ \\begin{array}{l} c^{2} = 2, \\\\ \\frac{2}{a^{2}} + \\frac{1}{b^{2}} = 1, \\\\ c^{2} = a^{2} - b^{2}, \\end{array} \\right.$ 解得 $a^{2} = 4, b^{2} = 2$ ，所求椭圆方程为 $\\frac{x^{2}}{4} + \\frac{y^{2}}{2} = 1$ .

(2) 证法一 设点 Q、A、B 的坐标分别为 $(x, y)$ , $(x_{1}, y_{1})$ , $(x_{2}, y_{2})$ .

由题设知 $|\\overrightarrow{AP}|, |\\overrightarrow{PB}|, |\\overrightarrow{AQ}|, |\\overrightarrow{QB}|$ 均不为零，记

$\\lambda = \\frac{|\\overrightarrow{AP}|}{|\\overrightarrow{PB}|} = \\frac{|\\overrightarrow{AQ}|}{|\\overrightarrow{QB}|}$ 则 $\\lambda > 0$ 且 $\\lambda \\neq 1$ .

又 A, P, B, Q 四点共线，从而 $\\overrightarrow{AP} = -\\lambda \\overrightarrow{PB}, \\overrightarrow{AQ} = \\lambda \\overrightarrow{QB}$ ,

于是 $4 = \\frac{x_1 - \\lambda x_2}{1 - \\lambda}, 1 = \\frac{y_1 - \\lambda y_2}{1 - \\lambda}, x = \\frac{x_1 + \\lambda x_2}{1 + \\lambda}, y = \\frac{y_1 + \\lambda y_2}{1 + \\lambda}$ ,

从而 $\\frac{x_1^2 - \\lambda^2 x_2^2}{1 - \\lambda^2} = 4x$ ， $①$

$$
\\frac {y _ {1} ^ {2} - \\lambda^ {2} y _ {2} ^ {2}}{1 - \\lambda^ {2}} = y. \\tag {②}
$$

又点 A、B 在椭圆 C 上，即 $x_{1}^{2} + 2y_{1}^{2} = 4$ ，③

$$
x _ {2} ^ {2} + 2 y _ {2} ^ {2} = 4. \\tag {④}
$$

①+②×2并结合③④得 $4x+2y=4$ ，

即点 $Q(x,y)$ 总在定直线 $2x+y-2=0$ 上.

证法二 设点 $Q(x, y), A(x_1, y_1), B(x_2, y_2)$ ，由题设知 $|\\overrightarrow{PA}|, |\\overrightarrow{PB}|, |\\overrightarrow{AQ}|, |\\overrightarrow{QB}|$ 均不为零，且 $\\frac{|\\overrightarrow{PA}|}{|\\overrightarrow{AQ}|} = \\frac{|\\overrightarrow{PB}|}{|\\overrightarrow{QB}|}$ .

又 $P, A, Q, B$ 四点共线，可设 $\\overrightarrow{PA} = -\\lambda \\overrightarrow{AQ}, \\overrightarrow{PB} = \\lambda \\overrightarrow{BQ} (\\lambda \\neq 0, \\pm 1)$ ，于是

$$
x _ {1} = \\frac {4 - \\lambda x}{1 - \\lambda}, y _ {1} = \\frac {1 - \\lambda y}{1 - \\lambda}, \\tag {①}
$$

$$
x _ {2} = \\frac {4 + \\lambda x}{1 + \\lambda}, y _ {2} = \\frac {1 + \\lambda y}{1 + \\lambda}. \\tag {②}
$$

由于 $A(x_{1},y_{1}), B(x_{2},y_{2})$ 在椭圆 C 上，

将①②式分别代入 C 的方程 $x^{2}+2y^{2}=4$ ，整理得

$$
(x ^ {2} + 2 y ^ {2} - 4) \\lambda^ {2} - 4 (2 x + y - 2) \\lambda + 1 4 = 0,
$$

$$
(x ^ {2} + 2 y ^ {2} - 4) \\lambda^ {2} + 4 (2 x + y - 2) \\lambda + 1 4 = 0. \\tag {④}
$$

④-③得 $8(2x + y - 2)\\lambda = 0$

因为 $\\lambda\\neq0$ ，所以 $2x+y-2=0$ ，即点 $Q(x,y)$ 总在定直线 $2x+y-2=0$ 上.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-4-17",
    topicId: "topic-sec-4-4",
    title: `已知 F 是双曲线 x^216-y^29=1 的一个焦点`,
    content: `已知 F 是双曲线 $\\frac{x^{2}}{16}-\\frac{y^{2}}{9}=1$ 的一个焦点，过 F 作一条与坐标轴不垂直，且与渐近线也不平行的直线 l，交双曲线于 A, B 两点，线段 AB 的中垂线 $l'$ 交 x 轴于点 M.
(1) 设 F 为右焦点, l 的斜率为 1, 求 $l'$ 的方程;
(2)试判断 $\\frac{|AB|}{|FM|}$ 是否为定值,说明理由.`,
    preview: `已知 F 是双曲线 x^216-y^29=1 的一个焦点，过 F 作一条与坐标轴不垂直，且与渐近线也不平行的直线 l，交双曲线于 A, B 两点，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-4-17-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1)依题意得 $F(5,0)$ ，所以 l:y=x-5，由方程组 $\\left\\{\\begin{aligned}\\frac{x^{2}}{16}-\\frac{y^{2}}{9}=1,\\\\ y=x-5\\end{aligned}\\right.$ 消去 y 得：

$7x^{2}-160x+544=0$ , 所以线段 AB 中点坐标为 $\\left(\\frac{80}{7},\\frac{45}{7}\\right)$ , 所以 $l'$ 的方程为 $x+y-\\frac{125}{7}=0$ .

(2)`,
      },
      {
        id: "prob-sec-4-4-17-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `不失一般性,F取为(5,0).

设直线 $AB$ 方程为 $y = k(x - 5)(k\\neq 0,k\\neq \\pm \\frac{3}{4}),A(x_{1},y_{1}),B(x_{2},y_{2}).$

由方程组 $\\left\\{\\begin{aligned}\\frac{x^{2}}{16}-\\frac{y^{2}}{9}=1,\\\\ y=k(x-5)\\end{aligned}\\right.$ 得 $(9-16k^{2})x^{2}+160k^{2}x-400k^{2}-144=0,$

则 $x_{1} + x_{2} = \\frac{-160k^{2}}{9 - 16k^{2}}, x_{1}x_{2} = -\\frac{400k^{2} + 144}{9 - 16k^{2}}$

所以 $|AB| = \\sqrt{1 + k^2} |x_1 - x_2| = \\sqrt{1 + k^2} \\cdot \\sqrt{\\left(\\frac{-160k^2}{9 - 16k^2}\\right)^2 + \\frac{16(100k^2 + 36)}{9 - 16k^2}} = \\frac{72(1 + k^2)}{|9 - 16k^2|}$ .

易求得线段 AB 中点坐标为 $\\left(-\\frac{80k^{2}}{9-16k^{2}}, -\\frac{45k}{9-16k^{2}}\\right)$ ,

所以线段 $AB$ 的中垂线方程为

$y + \\frac{45k}{9 - 16k^2} = -\\frac{1}{k}\\left(x + \\frac{80k^2}{9 - 16k^2}\\right)$ ，所以 $M\\left(\\frac{-125k^2}{9 - 16k^2},0\\right)$

$$
| F M | = \\left| - \\frac {1 2 5 k ^ {2}}{9 - 1 6 k ^ {2}} - 5 \\right| = \\frac {4 5 (1 + k ^ {2})}{\\left| 9 - 1 6 k ^ {2} \\right|},
$$

所以 $\\frac{|AB|}{|FM|}=\\frac{72}{45}=\\frac{8}{5}$ 是一个常数.`,
      },
      {
        id: "prob-sec-4-4-17-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `不失一般性， $F$ 取为(5,0)，设直线 $AB$ 方程为 $y = k(x - 5)\\left(k\\neq 0,k\\neq \\pm \\frac{3}{4}\\right)$

由方程组 $\\left\\{\\begin{aligned}\\frac{x^{2}}{16}-\\frac{y^{2}}{9}=1,\\\\ y=k(x-5)\\end{aligned}\\right.$ 得 $(9-16k^{2})x^{2}+160k^{2}-400k^{2}-144=0,$

设 $A(x_{1},y_{1}),B(x_{2},y_{2}),AB$ 中点为 $N(x_0,y_0)$ ，则 $x_{1} + x_{2} = \\frac{-160k^{2}}{9 - 16k^{2}}$

所以 $|AB| = |e(x_1 + x_2) - 2a| = \\frac{72(1 + k^2)}{|9 - 16k^2|}$ ,

$$
y _ {0} = k (x _ {0} - 5) = k \\Big [ \\frac {1}{2} (x _ {1} + x _ {2}) - 5 \\Big ] = - \\frac {4 5 k}{9 - 1 6 k ^ {2}}.
$$

又线段 AB 的中垂线方程为 $y - y_{0} = -\\frac{1}{k}(x - x_{0})$ ，令 y = 0 得 $x_{M} = ky_{0} + x_{0}$ ，

所以 $|FM| = |x_M - 5| = |ky_0 + x_0 - 5| = |ky_0 + \\frac{y_0}{k}| = \\frac{45(1 + k^2)}{|9 - 16k^2|}$

所以 $\\frac{|AB|}{|FM|}=\\frac{72}{45}=\\frac{8}{5}$ 是一个常数.`,
      },
      {
        id: "prob-sec-4-4-17-sol-3",
        title: `解法三`,
        method: "standard",
        steps: [],
        explanation: `（点差法——以斜率 k 为参数）不失一般性，F 取为 $(5,0)$ ，设直线 AB 方程为 $y=k(x-5)\\left(k\\neq0,k\\neq\\pm\\frac{3}{4}\\right)$ ，设 $A(x_{1},y_{1}), B(x_{2},y_{2})$ ，AB 中点 $N(x_{0},y_{0})$ ，则

$$
\\left\\{ \\begin{array}{l} \\frac {x _ {1} ^ {2}}{1 6} - \\frac {y _ {1} ^ {2}}{9} = 1, \\\\ \\frac {x _ {2} ^ {2}}{1 6} - \\frac {y _ {2} ^ {2}}{9} = 1, \\end{array} \\right.
$$

两式相减得 $\\frac{1}{16}(x_{1}-x_{2})(x_{1}+x_{2})=\\frac{1}{9}(y_{1}+y_{2})(y_{1}-y_{2})$ ,

又因为 $x_{1}+x_{2}=2x_{0}, y_{1}+y_{2}=2y_{0}$ ，所以 $\\frac{x_{0}}{16}=\\frac{y_{0}}{9}k$ .

又因为 $N(x_{0}, y_{0})$ 在 l 上，所以 $y_{0} = k(x_{0} - 5)$ .

由上两式解得 $x_{0}=\\frac{80k^{2}}{16k^{2}-9}, y_{0}=\\frac{45k}{16k^{2}-9}$ ,

所以 $l'$ 的方程为 $y - \\frac{45k}{16k^{2} - 9} = -\\frac{1}{k}\\left(x - \\frac{80k^{2}}{16k^{2} - 9}\\right)$ ，令 y = 0 得， $x_{M} = \\frac{125k^{2}}{16k^{2} - 9}$

所以 $|FM| = |x_M - 5| = \\left|\\frac{45k^2 + 45}{16k^2 - 9}\\right|$ .

又 $|AB| = |e(x_1 + x_2) - 2a| = |2ex_0 - 2a| = \\frac{72(1 + k^2)}{|9 - 16k^2|}$ ,

所以 $\\frac{|AB|}{|FM|}=\\frac{72}{45}=\\frac{8}{5}$ 是一个常数.`,
      },
      {
        id: "prob-sec-4-4-17-sol-4",
        title: `解法四`,
        method: "standard",
        steps: [],
        explanation: `（点差法——以中点坐标为参数）由③式知， $k_{AB}=\\frac{9x_{0}}{16y_{0}}$

又线段 AB 的中垂线方程为 $y - y_{0} = -\\frac{1}{k_{AB}}(x - x_{0})$ ,

令 $y = 0$ 得 $x_{M} = k_{AB}\\cdot y_{0} + x_{0} = \\frac{9}{16} x_{0} + x_{0} = \\frac{25}{16} x_{0},|FM| = |x_{M} - 5| = \\frac{5}{16}|5x_{0} - 16|$

又 $|AB| = |2ex_0 - 2a| = \\left|\\frac{5}{2} x_0 - 8\\right| = \\frac{1}{2} |5x_0 - 16|$

所以 $\\frac{|AB|}{|FM|} = \\frac{1}{2} \\times \\frac{16}{5} = \\frac{8}{5}$ 是一个常数.`,
      },
      {
        id: "prob-sec-4-4-17-sol-6",
        title: `解法五`,
        method: "standard",
        steps: [],
        explanation: `不失一般性, $F$ 取为(5,0), 当 $A, B$ 位于双曲线同一支时, 如图4-4-19所示, 设 $F$ 到右准线的距离为 $p$ , $AB$ 与 $x$ 轴夹角为 $\\theta$ $(0 < \\theta \\leqslant \\frac{\\pi}{2})$ , $AH = \\frac{|AF|}{e} = p + |AF| \\cos \\theta$ , 所以 $|AF| = \\frac{ep}{1 - e \\cos \\theta}$ ,

![](images/8ca4d72acfbe7eae7ca8b6273ff16d916af494619fc017f110954e5e2864cec1.jpg)

图4-4-19

同理 $|BF| = \\frac{ep}{1 + e\\cos\\theta}$ ，所以 $|AB| = \\frac{2ep}{1 - e^2\\cos^2\\theta}$ .

$\\left(注: 当 \\theta \\in \\frac{\\pi}{2}, \\pi) 时, |AF| = \\frac{ep}{1 + e\\cos\\theta}, |BF| = \\frac{ep}{1 - e\\cos\\theta}, 所以 |AB| = \\frac{2ep}{1 - e^2\\cos^2\\theta}\\right)$

设 $AB$ 中点为 $N$ ，则 $|NF| = \\frac{1}{2} |AB| - |BF| = \\frac{ep}{1 - e^2\\cos^2\\theta} -\\frac{ep}{1 + e\\cos\\theta} = \\frac{e^2p\\cos\\theta}{1 - e^2\\cos^2\\theta},$

于是 $|FM| = \\frac{|NF|}{\\cos\\theta} = \\frac{e^2p}{1 - e^2\\cos^2\\theta}$ ，所以 $\\frac{|AB|}{|FM|} = \\frac{2ep}{e^2p} = \\frac{2}{e} = \\frac{8}{5}$ 是一个常数.

当 A, B 位于双曲线的两支时, 同理可证.`,
      },
      {
        id: "prob-sec-4-4-17-sol-7",
        title: `解法六`,
        method: "standard",
        steps: [],
        explanation: `不失一般性, $F$ 取为(5,0), 设直线 $AB$ 的参数方程为 $\\begin{cases} x = 5 + t\\cos \\theta \\\\ y = t\\sin \\theta \\end{cases}$ ( $t$ 为参数, $\\theta$ 为倾斜角), 代入双曲线方程整理得 $\\left(\\frac{\\cos^2\\theta}{16} - \\frac{\\sin^2\\theta}{9}\\right)t^2 + \\frac{5}{8} t\\cos \\theta + \\frac{9}{16} = 0$ , 则

$$
| A B | = | t _ {1} - t _ {2} | = \\frac {\\sqrt {\\frac {1}{4} \\cos^ {2} \\theta + \\frac {1}{4} \\sin^ {2} \\theta}}{\\left| \\frac {\\cos^ {2} \\theta}{1 6} - \\frac {\\sin^ {2} \\theta}{9} \\right|} = \\frac {\\frac {1}{2}}{\\left| \\frac {\\cos^ {2} \\theta}{1 6} - \\frac {\\sin^ {2} \\theta}{9} \\right|}.
$$

记 $AB$ 中点为 $N$ ，则 $|MF| = \\frac{|NF|}{|\\cos\\theta|} = \\left|\\frac{t_1 + t_2}{2\\cos\\theta}\\right| = \\frac{\\frac{5}{16}}{\\left|\\frac{\\cos^2\\theta}{16} - \\frac{\\sin^2\\theta}{9}\\right|},$

所以 $\\frac{|AB|}{|FM|}=\\frac{1}{2}\\times\\frac{16}{5}=\\frac{8}{5}$ 为定值.

评注 事实上,本题结论可作如下推广:已知 F 是双曲线 $\\frac{x^{2}}{a^{2}} - \\frac{y^{2}}{b^{2}} = 1 (a > 0, b > 0)$ 的一个焦点,过 F 作一条与坐标轴不垂直,且与渐近线也不平行的直线 l,交双曲线于两点 A, B, 线段 AB 的中垂线 $l'$ 交 x 轴于 M 点,则 $\\frac{|AB|}{|FM|} = \\frac{2}{e}$ 为定值.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-4-18",
    topicId: "topic-sec-4-4",
    title: `如图 4-4-20 所示, 在 △ ABC 中, 已知`,
    content: `如图 4-4-20 所示, 在 $\\triangle ABC$ 中, 已知 $A(-3,0)$ , $B(3,0)$ , $CD \\perp AB$ 于 D, 若 H 为 $\\triangle ABC$ 的垂心, 且 $\\overrightarrow{CD}=9\\overrightarrow{CH}$ .
![](images/ba3cf6a32a8bf468c8c91de585f353c4084a1860fe93cb15d2b08d26a00cf5f2.jpg)

图4-4-20

(1)求点 H 的轨迹方程；

(2) 设 $P(-1,0)$ , $Q(1,0)$ ，是否存在这样的 H 点，使得 $\\frac{1}{|HP|}$ , $\\frac{1}{|PQ|}$ , $\\frac{1}{|QH|}$ 成等差数列？如果存在，求出 H 点坐标，如果不存在，请说明理由；

(3) 设直线 AH, BH 与直线 l: x = 9 分别交于 M, N 点, 请问以 MN 为直径的圆是否经过定点? 并说明理由.`,
    preview: `如图 4-4-20 所示, 在 △ ABC 中, 已知 A(-3,0) , B(3,0) , CD AB 于 D, 若 H 为 △ ABC 的垂心, 且 →CD`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-4-18-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1)设点 $H(x,y)$ , 由题意得 $C\\left(x,\\frac{9}{8}y\\right)$ , 则 $\\overrightarrow{AC} = \\left(x + 3, \\frac{9}{8}y\\right), \\overrightarrow{BH} = (x - 3,y)$ , 由于 $AC \\perp BH$ , 于是 $\\overrightarrow{AC} \\cdot \\overrightarrow{BH} = x^2 - 9 + \\frac{9}{8}y^2 = 0$ .

又 y=0 时 $\\overrightarrow{AC},\\overrightarrow{BH}$ 共线，不合题意。故点 H 的轨迹方程为 $\\frac{x^{2}}{9}+\\frac{y^{2}}{8}=1(y\\neq0)$ 。

(2)`,
      },
      {
        id: "prob-sec-4-4-18-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `$P(-1,0)$ , $Q(1,0)$ 是点 H 的轨迹椭圆 $\\frac{x^{2}}{9} + \\frac{y^{2}}{8} = 1 (y \\neq 0)$ 的两个焦点，所以 $|HP| + |QH| = 6$ ,

如果 $\\frac{1}{|HP|},\\frac{1}{|PQ|},\\frac{1}{|QH|}$ 成等差数列，则 $\\frac{1}{|PH|}+\\frac{1}{|QH|}=\\frac{2}{|PQ|=1.$ ②

由①②可解得 $|HP| = 3 + \\sqrt{3}, |QH| = 3 - \\sqrt{3}$ 或 $|HP| = 3 - \\sqrt{3}, |QH| = 3 + \\sqrt{3}$ 而 $2 \\leqslant |HP| \\leqslant 4, 2 \\leqslant |QH| \\leqslant 4$ ，故 $\\frac{1}{|HP|}, \\frac{1}{|PQ|}, \\frac{1}{|QH|}$ 不能构成等差数列.`,
      },
      {
        id: "prob-sec-4-4-18-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `设 $H(3\\cos\\alpha,2\\sqrt{2}\\sin\\alpha),\\alpha\\in(0,\\pi)\\cup(\\pi,2\\pi)$ ,

则 $\\overrightarrow{PH} = (3\\cos \\alpha + 1, 2\\sqrt{2}\\sin \\alpha), \\overrightarrow{QH} = (3\\cos \\alpha - 1, 2\\sqrt{2}\\sin \\alpha)$ ,

故 $\\frac{1}{|\\overrightarrow{PH}|} +\\frac{1}{|\\overrightarrow{QH}|} = \\frac{1}{3 + \\cos\\alpha} +\\frac{1}{3 - \\cos\\alpha} = \\frac{6}{9 - \\cos^2\\alpha} <  \\frac{6}{8} = \\frac{3}{4} <  1 = \\frac{2}{|PQ|},$

所以 $\\frac{1}{|HP|},\\frac{1}{|PQ|},\\frac{1}{|QH|}$ 不能构成等差数列.

(3)`,
      },
      {
        id: "prob-sec-4-4-18-sol-3",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `设 $H(x_{0}, y_{0})$ ，则 $AH: y = \\frac{y_{0}}{x_{0} + 3}(x + 3)$ ; $BH: y = \\frac{y_{0}}{x_{0} - 3}(x - 3)$ .

当 x=9 时可以求得 $M\\left(9,\\frac{12y_{0}}{x_{0}+3}\\right)$ , $N\\left(9,\\frac{6y_{0}}{x_{0}-3}\\right)$ ,

以 $MN$ 为直径的圆的方程为 $(x - 9)(x - 9) + \\left(y - \\frac{12y_0}{x_0 + 3}\\right)\\left(y - \\frac{6y_0}{x_0 - 3}\\right) = 0,$

即 $(x-9)^{2}+y^{2}-\\left(\\frac{12y_{0}}{x_{0}+3}+\\frac{6y_{0}}{x_{0}-3}\\right)y-64=0$ ，解得 $\\left\\{\\begin{aligned}x&=1,\\\\ y&=0\\end{aligned}\\right.$ （舍）或 $\\left\\{\\begin{aligned}x&=17,\\\\ y&=0.\\end{aligned}\\right.$

故以 MN 为直径的圆必过椭圆外定点(17,0).`,
      },
      {
        id: "prob-sec-4-4-18-sol-4",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `设 $M(9,m)$ , $N(9,n)$ ，则 $A(-3,0)$ , $B(3,0)$ ,

于是 $\\overrightarrow{AM}=(12,m),\\overrightarrow{AH}=(3\\cos\\alpha+3,2\\sqrt{2}\\sin\\alpha)$ ,

由 $A, H, M$ 三点共线得

$$
1 2 \\times 2 \\sqrt {2} \\sin \\alpha - m (3 \\cos \\alpha + 3) = 0
$$

$$
\\Leftrightarrow m = \\frac {8 \\sqrt {2} \\sin \\alpha}{\\cos \\alpha + 1};
$$

由 B, H, N 三点共线得 $n=\\frac{4\\sqrt{2}\\sin\\alpha}{\\cos\\alpha-1}$ ,

又 $M\\big(9,\\frac{8\\sqrt{2}\\sin\\alpha}{\\cos\\alpha + 1}\\big),N\\big(9,\\frac{4\\sqrt{2}\\sin\\alpha}{\\cos\\alpha - 1}\\big),$

以 $MN$ 为直径的圆的方程为

$$
(x - 9) (x - 9) + \\left(y - \\frac {8 \\sqrt {2} \\sin \\alpha}{\\cos \\alpha + 1}\\right) + \\left(y - \\frac {4 \\sqrt {2} \\sin \\alpha}{\\cos \\alpha - 1}\\right) = 0,
$$

即 $(x-9)^{2}+y^{2}-\\left(\\frac{8\\sqrt{2}\\sin\\alpha}{\\cos\\alpha+1}+\\frac{4\\sqrt{2}\\sin\\alpha}{\\cos\\alpha-1}\\right)y-64=0,$

解得 $\\left\\{\\begin{aligned}x=1,\\\\ y=0\\end{aligned}\\right.$ （舍）或 $\\left\\{\\begin{aligned}x=17,\\\\ y=0.\\end{aligned}\\right.$

故以 MN 为直径的圆必过椭圆外定点(17,0).`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-4-19",
    topicId: "topic-sec-4-4",
    title: `已知斜率为 k(k ≠ 0) 的直线 l 交椭圆 C:`,
    content: `已知斜率为 $k(k \\neq 0)$ 的直线 l 交椭圆 $C: \\frac{x^{2}}{4} + y^{2} = 1$ 于 $M(x_{1}, y_{1}), N(x_{2}, y_{2})$ 两点.
(1) 记直线 OM, ON 的斜率分别为 $k_{1}, k_{2}$ ，当 $3(k_{1} + k_{2}) = 8k$ 时，证明：直线 l 过定点；
(2) 若直线 $l$ 过点 $D(1,0)$ , 设 $\\triangle OMD$ 与 $\\triangle OND$ 的面积比为 $t$ , 当 $k^2 < \\frac{5}{12}$ 时, 求 $t$ 的取值范围.

(1) 解法一 依题意可设直线 l 的方程为 $y = kx + n$ ，其中 $k \\neq 0$ ，代入椭圆方程得

$(1 + 4k^{2})x^{2} + 8knx + 4n^{2} - 4 = 0$ ，则有 $\\left\\{ \\begin{array}{l}x_{1} + x_{2} = -\\frac{8kn}{1 + 4k^{2}},\\\\ x_{1}x_{2} = \\frac{4n^{2} - 4}{1 + 4k^{2}}, \\end{array} \\right.$

$$
\\begin{array}{l} = \\frac {x _ {2} (k x _ {1} + n) + x _ {1} (k x _ {2} + n)}{x _ {1} x _ {2}} \\\\ = \\frac {2 k x _ {1} x _ {2} + n (x _ {1} + x _ {2})}{x _ {1} x _ {2}} = - \\frac {8 k}{4 n ^ {2} - 4}, \\\\ \\end{array}
$$

则 $k_{1} + k_{2} = \\frac{y_{1}}{x_{1}} +\\frac{y_{2}}{x_{2}} = \\frac{y_{1}x_{2} + y_{2}x_{1}}{x_{1}x_{2}}$

由条件有 $-\\frac{24k}{4n^{2}-4}=8k$ ，而 $k\\neq0$ ，则有 $n=\\pm\\frac{1}{2}$ ，

从而直线 l 过定点 $\\left(0, \\frac{1}{2}\\right)$ 或 $\\left(0, -\\frac{1}{2}\\right)$ .`,
    preview: `已知斜率为 k(k ≠ 0) 的直线 l 交椭圆 C: x^24 + y^2 = 1 于 M(x_1, y_1), N(x_2, y_2) 两点. (1) 记`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-4-19-sol-0",
        title: `解法二`,
        method: "geometric",
        steps: [],
        explanation: `依题意可设直线 l 的方程为 $x=my+n$ ，代入椭圆方程得

$(m^{2} + 4)y^{2} + 2mny + n^{2} - 4 = 0$ ，则有 $\\left\\{ \\begin{array}{l}y_{1} + y_{2} = -\\frac{2mn}{m^{2} + 4},\\\\ y_{1}y_{2} = \\frac{n^{2} - 4}{m^{2} + 4}, \\end{array} \\right.$

则 $k_{1} + k_{2} = \\frac{y_{1}}{x_{1}} +\\frac{y_{2}}{x_{2}} = \\frac{y_{1}x_{2} + y_{2}x_{1}}{x_{1}x_{2}} = \\frac{y_{1}(my_{2} + n) + y_{2}(my_{1} + n)}{(my_{1} + n)(my_{2} + n)}$

$$
= \\frac {2 m y _ {1} y _ {2} + n (y _ {1} + y _ {2})}{m ^ {2} y _ {1} y _ {2} + m n (y _ {1} + y _ {2}) + n ^ {2}} = \\frac {2 m}{m ^ {2} - n ^ {2}},
$$

由条件有 $\\frac{6m}{m^2 - n^2} = \\frac{8}{m}$ , 得 $n = \\pm \\frac{1}{2} m$ .

则直线 $l$ 的方程为 $x = my \\pm \\frac{1}{2} m$ ，从而直线 $l$ 过定点 $\\left(0, \\frac{1}{2}\\right)$ 或 $\\left(0, -\\frac{1}{2}\\right)$ .

(2)依题意可设直线 l 的方程为 $y=k(x-1)$ ，其中 $k\\neq0$ ，代入椭圆方程得

$(1 + 4k^{2})x^{2} - 8k^{2}x + 4k^{2} - 4 = 0$ ，则有 $\\left\\{ \\begin{array}{l}x_{1} + x_{2} = \\frac{8k^{2}}{1 + 4k^{2}},\\\\ x_{1}x_{2} = \\frac{4k^{2} - 4}{1 + 4k^{2}}, \\end{array} \\right.$ 从而有

$$
y _ {1} + y _ {2} = k (x _ {1} + x _ {2} - 2) = - \\frac {2 k}{1 + 4 k ^ {2}}, \\tag {①}
$$

$$
y _ {1} y _ {2} = k ^ {2} (x _ {1} - 1) (x _ {2} - 1) = k ^ {2} [ x _ {1} x _ {2} - (x _ {1} + x _ {2}) + 1 ] = - \\frac {3 k ^ {2}}{1 + 4 k ^ {2}}. \\tag {②}
$$

由①②得 $\\frac{(y_{1}+y_{2})^{2}}{y_{1}y_{2}}=-\\frac{4}{3(1+4k^{2})}$ ,

由 $0 < k^{2} < \\frac{5}{12}$ , 得 $-\\frac{4}{3} < -\\frac{4}{3(1 + 4k^{2})} < -\\frac{1}{2}$ .

又 $t = \\frac{S_{\\triangle OMD}}{S_{\\triangle OND}} = \\frac{|y_1|}{|y_2|}$ ，因 $y_{1}y_{2} < 0$ ，故 $t = -\\frac{y_1}{y_2}$ ，

又 $\\frac{(y_1 + y_2)^2}{y_1y_2} = \\frac{y_1}{y_2} +\\frac{y_2}{y_1} +2 = -t - \\frac{1}{t} +2,$

从而有 $-\\frac{4}{3} < -t - \\frac{1}{t} + 2 < -\\frac{1}{2}$ , 得 $\\begin{cases} 3t^2 - 10t + 3 < 0, \\\\ 2t^2 - 5t + 2 > 0, \\end{cases}$ 解得 $2 < t < 3$ 或 $\\frac{1}{3} < t < \\frac{1}{2}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-4-20",
    topicId: "topic-sec-4-4",
    title: `已知圆的方程为 x^2 + y^2 = r^2`,
    content: `已知圆的方程为 $x^{2} + y^{2} = r^{2}$ ，圆内有定点 $P(a, b)$ ，圆周上有两个动点 A、B，使 $PA \\perp PB$ ，求矩形 APBQ 的顶点 Q 的轨迹方程.`,
    preview: `已知圆的方程为 x^2 + y^2 = r^2 ，圆内有定点 P(a, b) ，圆周上有两个动点 A、B，使 PA PB ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-4-20-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `如图 4-4-21 所示, 设 AB 中点为 M, 在 Rt△AOM 中, 若设 $Q(x, y)$ , 则 $M\\left(\\frac{x+a}{2}, \\frac{y+b}{2}\\right)$ , 由 $|OM|^{2} + |AM|^{2} = |OA|^{2}$ .

![](images/5992da8dc9702e57ce6cb07a4c98e94ddf6b5df3cafb5f5a78324a3eff19cbda.jpg)

即 $\\left(\\frac{x+a}{2}\\right)^{2}+\\left(\\frac{y+b}{2}\\right)^{2}+\\frac{1}{4}\\left[(x-a)^{2}+(y-b)^{2}\\right]=r^{2}.$

化简可得 $x^{2}+y^{2}=2r^{2}-(a^{2}+b^{2})$ ，此即 Q 点轨迹方程.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-4-21",
    topicId: "topic-sec-4-4",
    title: `已知椭圆 x^2{a^2}+y^2{b^2}=1(a>b>0`,
    content: `已知椭圆 $\\frac{x^{2}}{a^{2}}+\\frac{y^{2}}{b^{2}}=1(a>b>0)$ 的离心率为 $\\frac{\\sqrt{3}}{3}$ ，以原点为圆心，椭圆短半轴长为半径的圆与直线 $y=x+2$ 相切.
(1) 求 a 与 b;

(2) 设该椭圆的左焦点、右焦点分别为 $F_{1}$ 和 $F_{2}$ ，直线 $l_{1}$ 过 $F_{2}$ ，且与 x 轴垂直，动直线 $l_{2}$ 与 y 轴垂直， $l_{2}$ 交 $l_{1}$ 于点 P。求线段 $PF_{1}$ 垂直平分线与 $l_{2}$ 的交点 M 的轨迹方程，并指明曲线类型。`,
    preview: `已知椭圆 x^2{a^2}+y^2{b^2}=1(a>b>0) 的离心率为 √33 ，以原点为圆心，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-4-21-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1) 因为 $e=\\frac{c}{a}=\\frac{\\sqrt{3}}{3}$ ，所以 $e^{2}=\\frac{c^{2}}{a^{2}}=\\frac{a^{2}-b^{2}}{a^{2}}=\\frac{1}{3}$ ，即 $\\frac{b^{2}}{a^{2}}=\\frac{2}{3}$ .

又 $b = \\frac{2}{\\sqrt{1 + 1}} = \\sqrt{2}$ ，所以 $b^{2} = 2,a^{2} = 3$ ，即 $a = \\sqrt{3},b = \\sqrt{2}$

(2)`,
      },
      {
        id: "prob-sec-4-4-21-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `由(1)知 $F_{1}, F_{2}$ 两点坐标分别为 $(-1,0)$ , $(1,0)$ ，由题意可设 $P(1,t)$ .

那么线段 $PF_{1}$ 的中点为 $N\\left(0,\\frac{t}{2}\\right)$ ,

设 $M(x,y)$ ，由于 $\\overrightarrow{MN} = \\left(-x,\\frac{t}{2} -y\\right),\\overrightarrow{PF_1} = (-2, - t)$

则 $\\left\\{\\begin{aligned}y&=t,\\\\ \\overrightarrow{MN}\\cdot\\overrightarrow{PF_{1}}&=2x+t\\left(y-\\frac{t}{2}\\right)=0,\\end{aligned}\\right.$

消去参数 t 得 $y^{2} = -4x$ ，其轨迹为抛物线。`,
      },
      {
        id: "prob-sec-4-4-21-sol-2",
        title: `解法二`,
        method: "geometric",
        steps: [],
        explanation: `如图 4-4-22 所示, 因为 M 是线段 $PF_{1}$ 垂直平分线上的点, 所以 $\\left|MP\\right|=\\left|MF_{1}\\right|$ , 即动点 M 到定点 $F_{1}$ 的距离与定直线 $l_{1}$ 的距离相等. 由抛物线的定义知, 动点 M 的轨迹是以定点 $F_{1}$ 为焦点, 以定直线 $l_{1}$ 为准线的抛物线, 易得其方程是 $y^{2}=-4x$ .

![](images/2325d0e846e9aeb87217bb3a5b696a8ac07a144b9beac2efda2caeab158bc7e5.jpg)

图4-4-22

评注 建立参数关系,再消参是解决这类问题的一种基本思路.分析几何图形,可以发现本题所描述的动点满足抛物线的定义,即到

定点 $F_{1}(-1,0)$ 和到定直线 $l_{1}:x=1$ 的距离相等，因此，利用抛物线定义即可求得动点轨迹为抛物线，且方程为 $y^{2}=-4x$ . 本题第(2)问实际给出了抛物线的几何作图法.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-4-22",
    topicId: "topic-sec-4-4",
    title: `已知椭圆 C: x^2a^2 + y^2b^2 = 1 (a > b > 0)`,
    content: `已知椭圆 $C: \\frac{x^{2}}{a^{2}} + \\frac{y^{2}}{b^{2}} = 1 (a > b > 0)$ 两个焦点分别为 $F_{1}(-1,0)$ , $F_{2}(1,0)$ ，且椭圆 C 经过点 $P\\left(\\frac{4}{3}, \\frac{1}{3}\\right)$ .
(1)求椭圆 C 的离心率；

(2)设过点 $A(0,2)$ 的直线 $l$ 与椭圆 $C$ 交于 $M,N$ 两点，点 $Q$ 是线段 $MN$ 上的点，且 $\\frac{2}{|AQ|^2} = \\frac{1}{|AM|^2} +\\frac{1}{|AN|^2}$ ，求点 $Q$ 的轨迹方程.`,
    preview: `已知椭圆 两个焦点分别为 F_1(-1,0) , F_2(1,0) ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-4-22-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)由椭圆定义知

$$
2 a = | P F _ {1} | + | P F _ {2} | = \\sqrt {\\left(\\frac {4}{3} + 1\\right) ^ {2} + \\left(\\frac {1}{3}\\right) ^ {2}} + \\sqrt {\\left(\\frac {4}{3} - 1\\right) ^ {2} + \\left(\\frac {1}{3}\\right) ^ {2}} = 2 \\sqrt {2},
$$

所以 $a = \\sqrt{2}, c = 1$ ，所以椭圆离心率为 $e = \\frac{c}{a} = \\frac{\\sqrt{2}}{2}$ .

(2)椭圆 C 的方程为 $\\frac{x^{2}}{2} + y^{2} = 1$ ，设点 Q 坐标为 $(x, y)$ ，

①当直线 $l \\perp x$ 轴时，点 Q 坐标为 $(0, 2 - \\frac{3\\sqrt{5}}{5})$ ;
②当直线 l 不垂直 x 轴时, 设直线 l 方程为 $y = kx + 2$ ,
可设 $M, N$ 坐标为 $(x_{1}, kx_{1} + 2), (x_{2}, kx_{2} + 2)$ ，则

$$
| A M | ^ {2} = (1 + k ^ {2}) x _ {1} ^ {2}, | A N | ^ {2} = (1 + k ^ {2}) x _ {2} ^ {2}.
$$

因为 $|AQ|^2 = x^2 + (y - 2)^2 = (1 + k^2)x^2$

所以由 $\\frac{2}{|AQ|^2} = \\frac{1}{|AM|^2} +\\frac{1}{|AN|^2}$ 知 $\\frac{2}{(1 + k^2)x^2} = \\frac{1}{(1 + k^2)x_1^2} +\\frac{1}{(1 + k^2)x_2^2},$

所以 $\\frac{2}{x^2} = \\frac{1}{x_1^2} +\\frac{1}{x_2^2} = \\frac{x_1^2 + x_2^2}{x_1^2x_2^2} = \\frac{(x_1 + x_2)^2 - 2x_1x_2}{(x_1x_2)^2}.$ $①$

又由 $\\left\\{\\begin{aligned}y&=kx+2,\\\\ \\frac{x^{2}}{2}&+y^{2}=1\\end{aligned}\\right.$ 知 $(2k^{2}+1)x^{2}+8kx+6=0$ ，所以 $x_{1}+x_{2}=\\frac{-8k}{2k^{2}+1},x_{1}x_{2}=\\frac{6}{1+2k^{2}}$ .

代入①式中得 $x^{2} = \\frac{18}{10k^{2} - 3}$ ②

又因为点 $Q(x,y)$ 在直线 $y=kx+2$ 上，

所以 $k=\\frac{y-2}{x}$ ,

代入②式得 $10(y-2)^{2}-3x^{2}=18$ . 又因为 $x^{2}=\\frac{18}{10k^{2}-3}>0$ , 所以 $k^{2}>\\frac{3}{2}$ ,

所以 $x^{2}$ 满足 $x^{2} \\in (0, \\frac{3}{2})$ ，即 $x \\in (-\\frac{\\sqrt{6}}{2}, 0) \\cup (0, \\frac{\\sqrt{6}}{2})$ .

综上知点 $Q$ 的轨迹方程为 $10(y - 2)^{2} - 3x^{2} = 18\\left(x\\in \\left(-\\frac{\\sqrt{6}}{2},\\frac{\\sqrt{6}}{2}\\right)\\right)$ .

评注 本题根据条件可将 $Q(x,y)$ 坐标用 k 的参数方程表示, 消参时根据 $y=kx+2$ 的形式灵活地将 k 用 x,y 表示, 继而代入后达到消参的目的.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-4-23",
    topicId: "topic-sec-4-4",
    title: `椭圆 x^216+y^24=1 上有两点P`,
    content: `椭圆 $\\frac{x^{2}}{16}+\\frac{y^{2}}{4}=1$ 上有两点P、Q,O为原点.连OP、OQ,若 $k_{OP}\\cdot k_{OQ}=-\\frac{1}{4}$ ,
(1) 求证: $\\left|OP\\right|^{2}+\\left|OQ\\right|^{2}$ 等于定值;
(2) 求线段 PQ 中点 M 的轨迹方程.`,
    preview: `椭圆 x^216+y^24=1 上有两点P、Q,O为原点.连OP、`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-4-23-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 由 $\\frac{x^2}{16} + \\frac{y^2}{4} = 1$ ，设 $\\begin{cases} x = 4\\cos \\theta, \\\\ y = 2\\sin \\theta, \\end{cases} P(4\\cos \\theta_1, 2\\sin \\theta_1), Q(4\\cos \\theta_2, 2\\sin \\theta_2)$ ，

则 $k_{OP} \\cdot k_{OQ} = \\frac{2\\sin\\theta_1}{4\\cos\\theta_1} \\cdot \\frac{2\\sin\\theta_2}{4\\cos\\theta_2} = -\\frac{1}{4}$ , 整理得

$$
\\cos \\theta_ {1} \\cos \\theta_ {2} + \\sin \\theta_ {1} \\sin \\theta_ {2} = 0, \\text {即} \\cos (\\theta_ {1} - \\theta_ {2}) = 0.
$$

所以 $\\left|OP\\right|^{2}+\\left|OQ\\right|^{2}=16\\cos^{2}\\theta_{1}+4\\sin^{2}\\theta_{1}+16\\cos^{2}\\theta_{2}+4\\sin^{2}\\theta_{2}$

$$
\\begin{array}{l} = 8 + 1 2 \\left(\\cos^ {2} \\theta_ {1} + \\cos^ {2} \\theta_ {2}\\right) = 2 0 + 6 \\left(\\cos 2 \\theta_ {1} + \\cos 2 \\theta_ {2}\\right) \\\\ = 2 0 + 1 2 \\cos \\left(\\theta_ {1} + \\theta_ {2}\\right) \\cos \\left(\\theta_ {1} - \\theta_ {2}\\right) = 2 0, \\\\ \\end{array}
$$

即 $\\left|OP\\right|^{2}+\\left|OQ\\right|^{2}$ 等于定值 20.

(2)由中点坐标公式得到线段 PQ 的中点 M 的坐标为 $\\left\\{\\begin{aligned}x_{M}&=2(\\cos\\theta_{1}+\\cos\\theta_{2}),\\\\ y_{M}&=\\sin\\theta_{1}+\\sin\\theta_{2},\\end{aligned}\\right.$

所以有 $\\left(\\frac{x}{2}\\right)^{2}+y^{2}=2+2(\\cos\\theta_{1}\\cos\\theta_{2}+\\sin\\theta_{1}\\sin\\theta_{2})=2$

即所求线段 PQ 的中点 M 的轨迹方程为 $\\frac{x^{2}}{8} + \\frac{y^{2}}{2} = 1$ .

评注 由椭圆方程,联想到 $a^2 + b^2 = 1$ , 于是进行“三角换元”, 通过换元引入新的参数, 转化成为三角问题进行研究. 本题还要求能够熟练使用三角公式和“平方法”, 在由中点坐标公式求出 $M$ 点的坐标后, 将所得方程组稍作变形, 再平方相加, 即 $(\\cos \\theta_1 + \\cos \\theta_2)^2 + (\\sin \\theta_1 + \\sin \\theta_2)^2$ , 这是求点 $M$ 轨迹方程“消参法”的关键一步. 一般地, 求动点的轨迹方程运用“参数法”时, 我们可以将点的 $x, y$ 坐标分别表示成为一个或几个参数的函数, 再运用“消去法”消去所含的参数, 即得所求的轨迹方程.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-4-24",
    topicId: "topic-sec-4-4",
    title: `过抛物线 x^2=4y 上不同两点 A`,
    content: `过抛物线 $x^{2}=4y$ 上不同两点 A、B 分别作抛物线的切线相交于 P 点， $\\overrightarrow{PA} \\cdot \\overrightarrow{PB}=0$ .
(1)求点 P 的轨迹方程；
(2)已知点 $F(0,1)$ , 是否存在实数 $\\lambda$ 使得 $\\overrightarrow{FA} \\cdot \\overrightarrow{FB} + \\lambda (\\overrightarrow{FP})^2 = 0$ ? 若存在, 求出 $\\lambda$ 的值, 若不存在, 请说明理由.`,
    preview: `过抛物线 x^2=4y 上不同两点 A、B 分别作抛物线的切线相交于 P 点，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-4-24-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `(1) 设 $A\\left(x_{1}, \\frac{x_{1}^{2}}{4}\\right), B\\left(x_{2}, \\frac{x_{2}^{2}}{4}\\right), x_{1} \\neq x_{2}$ , 由 $x^{2} = 4y$ , 得 $y = \\frac{1}{4} x^{2}, y' = \\frac{x}{2}$ ,

所以 $k_{PA} = \\frac{x_1}{2}, k_{PB} = \\frac{x_2}{2}$ . 因为 $\\overrightarrow{PA} \\cdot \\overrightarrow{PB} = 0$ , 所以 $PA \\perp PB$ , 所以 $x_1 x_2 = -4$ .

直线 $PA$ 的方程为 $y - \\frac{x_1^2}{4} = \\frac{x_1}{2} (x - x_1)$ ，即 $y = \\frac{x_1x}{2} -\\frac{x_1^2}{4}$ ①

同理，直线 $PB$ 的方程为 $y = \\frac{x_2x}{2} -\\frac{x_2^2}{4}$ ②

由①②得 $\\left\\{\\begin{aligned}x&=\\frac{x_{1}+x_{2}}{2},\\\\ y&=\\frac{x_{1}x_{2}}{4}=-1\\end{aligned}\\right.$ $(x_{1},x_{2}\\in\\mathbf{R})$ ,

所以点 P 的轨迹方程是 $y = -1 (x \\in \\mathbf{R})$ .

(2)由(1)得 $\\overrightarrow{FA}=\\left(x_{1},\\frac{x_{1}^{2}}{4}-1\\right),\\overrightarrow{FB}=\\left(x_{2},\\frac{x_{2}^{2}}{4}-1\\right),P\\left(\\frac{x_{1}+x_{2}}{2},-1\\right)$

$$
\\overrightarrow {F P} = \\left(\\frac {x _ {1} + x _ {2}}{2}, - 2\\right), x _ {1} x _ {2} = - 4,
$$

$$
\\overrightarrow {F A} \\cdot \\overrightarrow {F B} = x _ {1} x _ {2} + \\left(\\frac {x _ {1} ^ {2}}{4} - 1\\right) \\left(\\frac {x _ {2} ^ {2}}{4} - 1\\right) = - 2 - \\frac {x _ {1} ^ {2} + x _ {2} ^ {2}}{4},
$$

$$
(\\overrightarrow {F P}) ^ {2} = \\frac {(x _ {1} + x _ {2}) ^ {2}}{4} + 4 = \\frac {x _ {1} ^ {2} + x _ {2} ^ {2}}{4} + 2.
$$

所以 $\\overrightarrow{FA} \\cdot \\overrightarrow{FB} + (\\overrightarrow{FP})^2 = 0$ ，故存在 $\\lambda = 1$ 使得 $\\overrightarrow{FA} \\cdot \\overrightarrow{FB} + \\lambda (\\overrightarrow{FP})^2 = 0$ .`,
      },
      {
        id: "prob-sec-4-4-24-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `(1)因为直线 PA、PB 与抛物线相切,且 $\\overrightarrow{PA} \\cdot \\overrightarrow{PB} = 0$ ,

所以直线 PA、PB 的斜率均存在且不为 0，且 $PA \\perp PB$ ，

设 PA 的直线方程为 $y=kx+m(k,m\\in\\mathbf{R},k\\neq0)$ ,

由 $\\left\\{\\begin{aligned}y&=kx+m,\\\\ x^{2}&=4y\\end{aligned}\\right.$ 得 $x^{2}-4kx-4m=0$ ,

所以 $\\Delta=16k^{2}+16m=0$ ，即 $m=-k^{2}$ ，即直线 PA 的方程为 $y=kx-k^{2}$ .

同理可得直线 $PB$ 的方程是： $y = -\\frac{1}{k} x - \\frac{1}{k^2}$ .

由 $\\left\\{\\begin{aligned}y&=kx-k^{2},\\\\ y&=-\\frac{1}{k}x-\\frac{1}{k^{2}}\\end{aligned}\\right.$ 得 $\\left\\{\\begin{aligned}x&=k-\\frac{1}{k}\\in\\mathbf{R},\\\\ y&=-1,\\end{aligned}\\right.$ 故点P的轨迹方程为 $y=-1(x\\in\\mathbf{R})$ .

(2)由(1)得: $A(2k,k^{2})$ , $B\\left(-\\frac{2}{k},\\frac{1}{k^{2}}\\right)$ , $P\\left(k-\\frac{1}{k},-1\\right)$ ,

$$
\\overrightarrow {F A} = (2 k, k ^ {2} - 1), \\overrightarrow {F B} = \\left(- \\frac {2}{k}, \\frac {1}{k ^ {2}} - 1\\right), \\overrightarrow {F P} = \\left(k - \\frac {1}{k}, - 2\\right),
$$

$$
\\overrightarrow {F A} \\cdot \\overrightarrow {F B} = - 4 + (k ^ {2} - 1) \\left(\\frac {1}{k ^ {2}} - 1\\right) = - 2 - \\left(k ^ {2} + \\frac {1}{k ^ {2}}\\right),
$$

$$
(\\overrightarrow {F P}) ^ {2} = \\left(\\frac {1}{k} - k\\right) ^ {2} + 4 = 2 + \\left(k ^ {2} + \\frac {1}{k ^ {2}}\\right),
$$

故存在 $\\lambda = 1$ 使得 $\\overrightarrow{FA} \\cdot \\overrightarrow{FB} + \\lambda (\\overrightarrow{FP})^2 = 0$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-4-25",
    topicId: "topic-sec-4-4",
    title: `如图 4-4-23 所示, 已知椭圆 x^2a^2 + y^2b^2 = 1 (a > b`,
    content: `如图 4-4-23 所示, 已知椭圆 $\\frac{x^{2}}{a^{2}} + \\frac{y^{2}}{b^{2}} = 1 (a > b > 0)$ 的左、右焦点分别是 $F_{1}(-c, 0)$ 、 $F_{2}(c, 0)$ ，Q 是椭圆外的动点，满足 $\\left|\\overrightarrow{F_{1}Q}\\right| = 2a$ 。点 P 是线段 $F_{1}Q$ 与该椭圆的交点，点 T 在线段 $F_{2}Q$ 上，并且满足 $\\overrightarrow{PT} \\cdot \\overrightarrow{TF_{2}} = 0, \\left|\\overrightarrow{TF_{2}}\\right| \\neq 0$ 。
![](images/1257b5cb6449a59457724eea4a2a137d767515f92766af47b7df71205479997a.jpg)

图4-4-23

(1)设 x 为点 P 的横坐标,证明: $\\left|\\overrightarrow{F_{1}P}\\right|=a+\\frac{c}{a}x.$

(2) 求点 T 的轨迹 C 的方程.

(3)试问:在点 T 的轨迹 C 上,是否存在点 M,使 $\\triangle F_{1}MF_{2}$ 的面积 $S=b^{2}$ . 若存在,求 $\\angle F_{1}MF_{2}$ 的正切值;若不存在,请说明理由.

(1)证法一 设点 P 的坐标为 $(x, y)$ . 由 $P(x, y)$ 在椭圆上, 得

$$
| \\overrightarrow {F _ {1} P} | = \\sqrt {(x + c) ^ {2} + y ^ {2}} = \\sqrt {(x + c) ^ {2} + b ^ {2} - \\frac {b ^ {2}}{a ^ {2}} x ^ {2}} = \\sqrt {\\left(a + \\frac {c}{a} x\\right) ^ {2}}.
$$

由 $x \\geqslant -a$ ，知 $a + \\frac{c}{a} x \\geqslant -c + a > 0,$

所以 $|\\overrightarrow{F_1P}| = a + \\frac{c}{a} x.$

证法二 如图 4-4-24 所示, 设点 P 的坐标为 $(x, y)$ ,

记 $|\\overrightarrow{F_1P}| = r_1, |\\overrightarrow{F_2P}| = r_2,$

则 $r_1 = \\sqrt{(x + c)^2 + y^2}, r_2 = \\sqrt{(x - c)^2 + y^2}$ .

由 $r_1 + r_2 = 2a, r_1^2 - r_2^2 = 4cx$ ，得 $|\\overrightarrow{F_1P}| = r_1 = a + \\frac{c}{a} x$ .

![](images/5296a08bc96574feb0ccc715655b3cc056b7d1054eb9f17edaa0830f461bdd2d.jpg)

图4-4-24

证法三 设点 P 的坐标为 $(x, y)$ ，椭圆的左准线方程为 $a + \\frac{c}{a}x = 0$ .

由椭圆第二定义得 $\\frac{|\\overrightarrow{F_1P}|}{\\left|x + \\frac{a^2}{c}\\right|} = \\frac{c}{a},$

即 $|\\overrightarrow{F_1P}| = \\frac{c}{a}\\left|x + \\frac{a^2}{c}\\right| = \\left|a + \\frac{c}{a} x\\right|$

由 $x \\geqslant -a$ ，知 $a + \\frac{c}{a} x \\geqslant -c + a > 0,$

所以 $|\\overrightarrow{F_1P}| = a + \\frac{c}{a} x.$

(2)解法一 设点 T 的坐标为 $(x, y)$ ,

当 $|\\overrightarrow{PT}|=0$ 时，点 $(a,0)$ 和点 $(-a,0)$ 在轨迹上，

当 $|\\overrightarrow{PT} |\\neq 0$ 且 $|\\overrightarrow{TF_2} |\\neq 0$ 时，由 $\\overrightarrow{PT}\\cdot \\overrightarrow{TF_2} = 0$ ，得 $\\overrightarrow{PT}\\bot \\overrightarrow{TF_2}$

又 $|\\overrightarrow{PQ}| = |\\overrightarrow{PF_2}|$ ，所以点 $T$ 为线段 $F_{2}Q$ 的中点.

在 $\\triangle QF_{1}F_{2}$ 中， $|\\overrightarrow{OT}|=\\frac{1}{2}|\\overrightarrow{F_{1}Q}|=a$ ，所以有 $x^{2}+y^{2}=a^{2}$ .

综上所述，点 T 的轨迹 C 的方程是 $x^{2} + y^{2} = a^{2}$ .`,
    preview: `如图 4-4-23 所示, 已知椭圆 的左、右焦点分别是 F_1(-c, 0) 、 F_2(c, 0) ，Q 是椭圆外的动点，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-4-25-sol-0",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `设点 $T$ 的坐标为 $(x, y)$ . 当 $|\\overrightarrow{PT}| = 0$ 时, 点 $(a, 0)$ 和点 $(-a, 0)$ 在轨迹上. 当 $|\\overrightarrow{PT}| \\neq 0$ 且 $|\\overrightarrow{TF_2}| \\neq 0$ 时, 由 $\\overrightarrow{PT} \\cdot \\overrightarrow{TF_2} = 0$ , 得 $\\overrightarrow{PT} \\perp \\overrightarrow{TF_2}$ .

又 $|\\overrightarrow{PQ}| = |\\overrightarrow{PF_2}|$ ，所以点 $T$ 为线段 $F_{2}Q$ 的中点.

设点 Q 的坐标为 $(x', y')$ ，则 $\\left\\{\\begin{aligned} x &= \\frac{x'+c}{2}, \\\\ y &= \\frac{y'}{2}, \\end{aligned}\\right.$ 因此， $\\left\\{\\begin{aligned} x &= 2x - c, \\\\ y &= 2y. \\end{aligned}\\right.$

由 $|\\overrightarrow{F_1Q}| = 2a$ 得 $(x' + c)^2 + y'^2 = 4a^2.$ ②

将①代入②, 可得 $x^{2} + y^{2} = a^{2}$ .

综上所述，点 T 的轨迹 C 的方程是 $x^{2} + y^{2} = a^{2}$ .

(3)`,
      },
      {
        id: "prob-sec-4-4-25-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `圆 C 上存在点 $M(x_{0}, y_{0})$ ，使 $S = b^{2}$ 的充要条件是

$$
\\left\\{ \\begin{array}{l l} x _ {0} ^ {2} + y _ {0} ^ {2} = a ^ {2}, \\\\ \\frac {1}{2} \\times 2 c | y _ {0} | = b ^ {2}. \\end{array} \\right. \\tag {③}
$$

由③得 $|y_{0}|\\leqslant a$ ，由④得 $|y_{0}|=\\frac{b^{2}}{c}$ 。所以，

当 $a \\geqslant \\frac{b^2}{c}$ 时，存在点 $M$ ，使 $S = b^2$ ；当 $a < \\frac{b^2}{c}$ 时，不存在满足条件的点 $M$ .

当 $a \\geqslant \\frac{b^2}{c}$ 时， $\\overrightarrow{MF_1} = (-c - x_0, -y_0)$ ， $\\overrightarrow{MF_2} = (c - x_0, -y_0)$ ，

由 $\\overrightarrow{MF_1} \\cdot \\overrightarrow{MF_2} = x_0^2 - c^2 + y_0^2 = a^2 - c^2 = b^2, \\overrightarrow{MF_1} \\cdot \\overrightarrow{MF_2} = |\\overrightarrow{MF_1}| \\cdot |\\overrightarrow{MF_2}| \\cos \\angle F_1MF_2,$ $S = \\frac{1}{2} |\\overrightarrow{MF_1}| \\cdot |\\overrightarrow{MF_2}| \\sin \\angle F_1MF_2 = b^2$ ，得 $\\tan \\angle F_1MF_2 = 2.$`,
      },
      {
        id: "prob-sec-4-4-25-sol-2",
        title: `解法二`,
        method: "creative",
        steps: [],
        explanation: `圆 $C$ 上存在点 $M(x_0, y_0)$ , 使 $S = b^2$ 的充要条件是

$$
\\left\\{ \\begin{array}{l} x _ {0} ^ {2} + y _ {0} ^ {2} = a ^ {2}, \\\\ \\frac {1}{2} \\cdot 2 c | y _ {0} | = b ^ {2}. \\end{array} \\right. \\tag {⑤}
$$

由⑥得 $|y_0| = \\frac{b^2}{c}$ ，代入⑤得 $x_0^2 = a^2 -\\frac{b^4}{c^2} = \\left(a - \\frac{b^2}{c}\\right)\\left(a + \\frac{b^2}{c}\\right)\\geqslant 0.$

于是，当 $a \\geqslant \\frac{b^2}{c}$ 时，存在点 $M$ ，使 $S = b^2$ ；当 $a < \\frac{b^2}{c}$ 时，不存在满足条件的点 $M$ .

当 $a \\geqslant \\frac{b^2}{c}$ 时，记 $k_1 = k_{F_1M} = \\frac{y_0}{x_0 + c}, k_2 = k_{F_2M} = \\frac{y_0}{x_0 - c},$

由 $|F_{1}F_{2}| < 2a$ ，知 $\\angle F_{1}MF_{2} < 90^{\\circ}$ ，所以 $\\tan \\angle F_1MF_2 = |\\frac{k_1 - k_2}{1 + k_1k_2}| = 2.$

评注 求已知曲线类型的曲线方程问题,可采用“先定形,后定式,再定量”的步骤.

定形——指的是二次曲线的焦点位置与对称轴的位置.

定式——根据“形”设方程的形式,注意曲线系方程的应用,如当椭圆的焦点不确定在哪个坐标轴上时,可设方程为 $mx^{2}+ny^{2}=1(m>0,n>0)$ .

定量——由题设中的条件找到“式”中特定系数的等量关系,通过解方程得到量的大小.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-4-27",
    topicId: "topic-sec-4-4",
    title: `已知抛物线 C: y = 2x^2`,
    content: `已知抛物线 $C: y = 2x^{2}$ ，直线 $y = kx + 2$ 交抛物线 C 于 A，B 两点，M 是线段 AB 的中点，过 M 作 x 轴的垂线交抛物线 C 于点 N.
![](images/c639f2ec4a9fc3fab9d7ed0faab43a7f36cfd07f0cc6c5699414d0a976a66187.jpg)

图4-4-25

(1) 证明: 抛物线 C 在点 N 处的切线与 AB 平行;

(2)是否存在实数 $k$ 使 $\\overrightarrow{NA} \\cdot \\overrightarrow{NB} = 0$ ，若存在，求 $k$ 的值；若不存在，说明理由.

(1)证法一 如图 4-4-25 所示, 设 $A(x_{1}, 2x_{1}^{2})$ , $B(x_{2}, 2x_{2}^{2})$ ,

把 $y=kx+2$ 代入 $y=2x^{2}$ ，得 $2x^{2}-kx-2=0$ 。

由根与系数的关系得 $x_{1}+x_{2}=\\frac{k}{2}, x_{1}x_{2}=-1$ ,

所以 $x_{N}=x_{M}=\\frac{x_{1}+x_{2}}{2}=\\frac{k}{4}$ ，即 N 点的坐标为 $\\left(\\frac{k}{4},\\frac{k^{2}}{8}\\right)$ .

设抛物线在点 N 处的切线 l 的方程为 $y - \\frac{k^{2}}{8} = m \\left( x - \\frac{k}{4} \\right)$ .

将 $y=2x^{2}$ 代入式中得 $2x^{2}-mx+\\frac{mk}{4}-\\frac{k^{2}}{8}=0$ .

因为直线 l 与抛物线 C 相切, 所以 $\\Delta = m^{2} - 8\\left(\\frac{mk}{4} - \\frac{k^{2}}{8}\\right) = m^{2} - 2mk + k^{2} = (m - k)^{2} = 0.$ 所以 m=k，即 $l \\parallel AB$ .

证法二 设 $A(x_{1},2x_{1}^{2})$ , $B(x_{2},2x_{2}^{2})$ , 把 $y=kx+2$ , 代入 $y=2x^{2}$ , 得 $2x^{2}-kx-2=0$ .
由根与系数的关系得 $x_{1} + x_{2} = \\frac{k}{2}, x_{1}x_{2} = -1.$

所以 $x_{N}=x_{M}=\\frac{x_{1}+x_{2}}{2}=\\frac{k}{4}$ ，所以 N 点的坐标为 $\\left(\\frac{k}{4},\\frac{k^{2}}{8}\\right)$ .

因为 $y=2x^{2}$ ，所以 $y'=4x$ ，故抛物线在点 N 处的切线 l 的斜率为 $4\\times\\frac{k}{4}=k$ ，所以 $l\\parallel AB$ .

(2) 解法一 假设存在实数 k，使 $\\overrightarrow{NA} \\cdot \\overrightarrow{NB} = 0$ ，则 $NA \\perp NB$ .

又因为 M 是 AB 的中点, 所以 $\\left|MN\\right|=\\frac{1}{2}\\left|AB\\right|$ .

由(1)知 $y_{M} = \\frac{1}{2}(y_{1} + y_{2}) = \\frac{1}{2}(kx_{1} + 2 + kx_{2} + 2) = \\frac{1}{2}[k(x_{1} + x_{2}) + 4]$

$$
= \\frac {1}{2} \\left(\\frac {k ^ {2}}{2} + 4\\right) = \\frac {k ^ {2}}{4} + 2.
$$

因为 $MN \\perp x$ 轴，所以 $|MN| = |y_{M} - y_{N}| = \\frac{k^{2}}{4} + 2 - \\frac{k^{2}}{8} = \\frac{k^{2} + 16}{8}$ .

又 $|AB| = \\sqrt{1 + k^2} \\cdot |x_1 - x_2| = \\sqrt{1 + k^2} \\cdot \\sqrt{(x_1 + x_2)^2 - 4x_1x_2}$

$$
= \\sqrt {1 + k ^ {2}} \\cdot \\sqrt {\\left(\\frac {k}{2}\\right) ^ {2} - 4 \\times (- 1)} = \\frac {1}{2} \\sqrt {k ^ {2} + 1} \\cdot \\sqrt {k ^ {2} + 1 6}.
$$

所以 $\\frac{k^{2}+16}{8}=\\frac{1}{4}\\sqrt{k^{2}+1}\\cdot\\sqrt{k^{2}+16}$ ，解得 $k=\\pm2$ .

即存在 $k=\\pm2$ ，使 $\\overrightarrow{NA}\\cdot\\overrightarrow{NB}=0$ 。`,
    preview: `已知抛物线 C: y = 2x^2 ，直线 y = kx + 2 交抛物线 C 于 A，B 两点，M 是线段 AB 的中点，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-4-27-sol-0",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `假设存在实数 k，使 $\\overrightarrow{NA} \\cdot \\overrightarrow{NB} = 0$ .

由(1)知 $\\overrightarrow{NA}=\\left(x_{1}-\\frac{k}{4},2x_{1}^{2}-\\frac{k^{2}}{8}\\right),\\overrightarrow{NB}=\\left(x_{2}-\\frac{k}{4},2x_{2}^{2}-\\frac{k^{2}}{8}\\right)$

$$
\\begin{array}{l} = \\left(x _ {1} - \\frac {k}{4}\\right) \\left(x _ {2} - \\frac {k}{4}\\right) + 4 \\left(x _ {1} ^ {2} - \\frac {k ^ {2}}{1 6}\\right) \\left(x _ {2} ^ {2} - \\frac {k ^ {2}}{1 6}\\right) \\\\ = \\left(x _ {1} - \\frac {k}{4}\\right) \\left(x _ {2} - \\frac {k}{4}\\right) \\left[ 1 + 4 \\left(x _ {1} + \\frac {k}{4}\\right) \\left(x _ {2} + \\frac {k}{4}\\right) \\right] \\\\ = \\left[ x _ {1} x _ {2} - \\frac {k}{4} (x _ {1} + x _ {2}) + \\frac {k ^ {2}}{1 6} \\right] \\left[ 1 + 4 x _ {1} x _ {2} + k (x _ {1} + x _ {2}) + \\frac {k _ {2}}{4} \\right] \\\\ = \\left(- 1 - \\frac {k}{4} \\times \\frac {k}{2} + \\frac {k ^ {2}}{1 6}\\right) \\left[ 1 + 4 \\times (- 1) + k \\times \\frac {k}{2} + \\frac {k ^ {2}}{4} \\right] \\\\ = \\left(- 1 - \\frac {k ^ {2}}{1 6}\\right) \\left(- 3 + \\frac {3}{4} k ^ {2}\\right) = 0. \\\\ \\end{array}
$$

则 $\\overrightarrow{NA} \\cdot \\overrightarrow{NB} = \\left(x_1 - \\frac{k}{4}\\right)\\left(x_2 - \\frac{k}{4}\\right) + \\left(2x_1^2 - \\frac{k^2}{8}\\right)\\left(2x_2^2 - \\frac{k^2}{8}\\right)$

因为 $-1-\\frac{k^{2}}{16}<0$ ，所以 $-3+\\frac{3}{4}k^{2}=0$ ，解得 $k=\\pm2$ .

即存在 $k=\\pm2$ ，使 $\\overrightarrow{NA}\\cdot\\overrightarrow{NB}=0$ 。`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-4-27-26",
    topicId: "topic-sec-4-4",
    title: `在平面直角坐标系 xOy 中, 点 B 与点`,
    content: `在平面直角坐标系 xOy 中, 点 B 与点 A(-1,1) 关于原点 O 对称, P 是动点, 且直线 AP 与 BP 的斜率之积等于 $-\\frac{1}{3}$ .
(1)求动点 P 的轨迹方程；

(2)设直线 $AP$ 和 $BP$ 分别与直线 $x = 3$ 交于点 $M, N$ , 问: 是否存在点 $P$ 使得 $\\triangle PAB$ 与 $\\triangle PMN$ 的面积相等? 若存在, 求出点 $P$ 的坐标; 若不存在, 说明理由.`,
    preview: `在平面直角坐标系 xOy 中, 点 B 与点 A(-1,1) 关于原点 O 对称, P 是动点, 且直线 AP 与 BP 的斜率之积等于 -1/3 . (1)求`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-4-27-26-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1) 因为点 $B$ 与点 $A(-1,1)$ 关于原点对称, 所以可得点 $B$ 的坐标为 $(1, -1)$ .

设点 $P(x,y)$ ，则 $k_{AP} \\cdot k_{BP} = -\\frac{1}{3}$ ，即 $\\frac{y-1}{x+1} \\cdot \\frac{y+1}{x-1} = -\\frac{1}{3}$ .

化简得 $\\frac{x^{2}}{4}+\\frac{y^{2}}{\\frac{4}{3}}=1(x\\neq\\pm1)$ （或 $x^{2}+3y^{2}=4(x\\neq\\pm1)$ ）.

所以，动点 P 的轨迹方程为 $\\frac{x^{2}}{4} + \\frac{y^{2}}{\\frac{4}{3}} = 1 (x \\neq \\pm 1)$ (或 $x^{2} + 3y^{2} = 4 (x \\neq \\pm 1)$ ).

(2)`,
      },
      {
        id: "prob-sec-4-4-27-26-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `解析法——从直线方程入手.

设直线 AP 的方程为 $y=k(x+1)+1$ ,

则直线 BP 的方程为 $y = -\\frac{1}{3k}(x-1)-1$ .

由 $\\left\\{\\begin{aligned}\\frac{x^{2}}{4}+\\frac{y^{2}}{4}&=1,\\\\ \\frac{3}{y}&=\\frac{x^{2}}{4}\\\\ y=k(x+1)+1\\end{aligned}\\right.$ 消去 y，整理得 $(1+3k^{2})x^{2}+(6k^{2}+6k)x+3k^{2}+6k-1=0.$

设 $P(x_{1},y_{1})$ ，又 $A(-1,1)$ ，则 $-1 + x_{1} = \\frac{-6k^{2} - 6k}{1 + 3k^{2}}$ ，化简得

$x_{1} = \\frac{-3k^{2} - 6k + 1}{1 + 3k^{2}}$ ，进而 $y_{1} = \\frac{-3k^{2} + 2k + 1}{1 + 3k^{2}}.$

又由 $\\left\\{\\begin{aligned}x=3,\\\\ y=k(x+1)+1\\end{aligned}\\right.$ 可得 $y_{M}=4k+1$ .

由 $\\left\\{\\begin{aligned}x=3,\\\\ y&=-\\frac{1}{3k}(x-1)-1\\end{aligned}\\right.$ 可得 $y_{N}=-\\frac{3k+2}{3k}.$

若存在点 P，使 $S_{\\triangle PAB} = S_{\\triangle PMN}$ ，则 P 必在直线 AB 的右上方，且 $y_{N} > y_{M}$ .

又点 P 到直线 $AB: x + y = 0$ 的距离 $d = \\frac{|x_{1} + y_{1}|}{\\sqrt{2}} = \\frac{x_{1} + y_{1}}{\\sqrt{2}} = \\frac{-6k^{2} - 4k + 2}{\\sqrt{2}(1 + 3k^{2})}$ ,

$$
| M N | = | y _ {N} - y _ {M} | = y _ {N} - y _ {M} = - \\frac {2}{3 k} - 4 k - 2.
$$

故 $\\frac{1}{2}|AB|\\cdot d=\\frac{1}{2}|MN|\\cdot(3-x_{1})$ ,

即 $\\frac{1}{2} \\times 2\\sqrt{2} \\times \\frac{-6k^2 - 4k + 2}{\\sqrt{2}(1 + 3k^2)} = \\frac{1}{2}\\left(-\\frac{2}{3k} - 4k - 2\\right) \\cdot \\frac{12k^2 + 6k + 2}{1 + 3k^2},$

化简得 $(1+3k^{2})(12k^{2}+9k+1)=0.$

因为 $1 + 3k^2 \\neq 0$ ，所以 $12k^2 + 9k + 1 = 0$ ，即 $k^2 = -\\frac{9k + 1}{12}$ .

代入 $x_{1} = \\frac{-3k^{2} - 6k + 1}{1 + 3k^{2}} = \\frac{-3\\left(-\\frac{9k + 1}{12}\\right) - 6k + 1}{1 + 3\\left(-\\frac{9k + 1}{12}\\right)} = \\frac{5}{3},$

将 $x_{1} = \\frac{5}{3}$ 代入 $\\frac{x^2}{4} +\\frac{y^2}{\\frac{4}{3}} = 1(x\\neq 1)$ ，可得 $y_{1} = \\pm \\frac{\\sqrt{33}}{9}$

故存在点 P 使得 $S_{\\triangle PAB} = S_{\\triangle PMN}$ ，此时 P 点坐标为 $\\left(\\frac{5}{3}, \\frac{\\sqrt{33}}{9}\\right)$ 或 $\\left(\\frac{5}{3}, -\\frac{\\sqrt{33}}{9}\\right)$ .`,
      },
      {
        id: "prob-sec-4-4-27-26-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `解析法——从点的坐标入手. 设点 $P(x_{0}, y_{0})$ ，因为直线 AB 的方程为 $x + y = 0$ ，所以点 P 到直线 AB 的距离为 $d = \\frac{|x_{0} + y_{0}|}{\\sqrt{2}}$ ，

则 $S_{\\triangle PAB} = \\frac{1}{2} |AB|\\cdot d = \\frac{1}{2}\\times 2\\sqrt{2}\\times \\frac{|x_0 + y_0|}{\\sqrt{2}} = |x_0 + y_0|$

直线 AP 的方程为 $y-1=\\frac{y_{0}-1}{x_{0}+1}(x+1)$ .

因为 $x_{M} = 3$ ，所以 $y_{M} = 4\\times \\frac{y_{0} - 1}{x_{0} + 1} +1 = \\frac{4y_{0} + x_{0} - 3}{x_{0} + 1}.$

直线 BP 的方程为 $y+1=\\frac{y_{0}+1}{x_{0}-1}(x-1)$ ,

因为 $x_{N} = 3$ ，则 $y_{N} = 2\\times \\frac{y_0 + 1}{x_0 - 1} -1 = \\frac{2y_0 - x_0 + 3}{x_0 - 1}.$

故 $|MN| = |y_M - y_N| = \\left|\\frac{4y_0 + x_0 - 3}{x_0 + 1} -\\frac{2y_0 - x_0 + 3}{x_0 - 1}\\right| = \\left|\\frac{2(x_0 - 3)(x_0 + y_0)}{x_0^2 - 1}\\right|$

则 $S_{\\triangle PMN} = \\frac{1}{2}\\times (3 - x_0)\\times \\left|\\frac{2(x_0 - 3)(x_0 + y_0)}{x_0^2 - 1}\\right| = \\frac{(x_0 - 3)^2}{|x_0^2 - 1|}\\cdot |x_0 + y_0|$

若存在点 P，使得 $S_{\\triangle PAB} = S_{\\triangle PMN}$ ，则有 $\\left|x_{0} + y_{0}\\right| = \\frac{(x_{0} - 3)^{2}}{\\left|x_{0}^{2} - 1\\right|} \\cdot \\left|x_{0} + y_{0}\\right|$ ，

因为 $x_0 + y_0 \\neq 0$ ，所以 $\\frac{(x_0 - 3)^2}{|x_0^2 - 1|} = 1$ ，解得 $x_0 = \\frac{5}{3}$ .

将 $x_{0}=\\frac{5}{3}$ 代入 $\\frac{x^{2}}{4}+\\frac{y^{2}}{\\frac{4}{3}}=1(x\\neq\\pm1)$ ，可得 $y_{0}=\\pm\\frac{\\sqrt{33}}{9}$ .

故存在点 P，使得 $S_{\\triangle PAB} = S_{\\triangle PMN}$ ，此时点 P 的坐标为 $\\left(\\frac{5}{3}, \\frac{\\sqrt{33}}{9}\\right)$ 或 $\\left(\\frac{5}{3}, -\\frac{\\sqrt{33}}{9}\\right)$ .`,
      },
      {
        id: "prob-sec-4-4-27-26-sol-3",
        title: `解法三`,
        method: "standard",
        steps: [],
        explanation: `解析法——从点的坐标入手,参数形式.

设点 P 的坐标为 $\\left(2\\cos\\theta,\\frac{2\\sqrt{3}}{3}\\sin\\theta\\right)$ ，因为 A、P、M 共线，所以 $\\overrightarrow{AP} \\parallel \\overrightarrow{AM}$ ，

故 $\\frac{\\frac{2}{3}\\sqrt{3}\\sin\\theta - 1}{2\\cos\\theta + 1} = \\frac{y_M - 1}{3 + 1}$ , 解得 $y_M = \\frac{\\frac{8}{3}\\sqrt{3}\\sin\\theta + 2\\cos\\theta - 3}{2\\cos\\theta + 1}$ .

同理，可解得 $y_{N} = \\frac{\\frac{4}{3}\\sqrt{3}\\sin\\theta - 2\\cos\\theta + 3}{2\\cos\\theta - 1}$ .

故 $|MN| = |y_M - y_N| = \\frac{\\left|2(2\\cos\\theta - 3)(2\\cos\\theta + \\frac{2}{3}\\sqrt{3}\\sin\\theta)\\right|}{(2\\cos\\theta)^2 - 1}$ ,

所以 $S_{\\triangle PMN}=\\frac{1}{2}\\times(3-2\\cos\\theta)\\times\\frac{\\left|2(2\\cos\\theta-3)\\left(2\\cos\\theta+\\frac{2}{3}\\sqrt{3}\\sin\\theta\\right)\\right|}{(2\\cos\\theta)^{2}-1}$

$$
= \\frac {\\left| (2 \\cos \\theta - 3) ^ {2} \\left(2 \\cos \\theta + \\frac {2}{3} \\sqrt {3} \\sin \\theta\\right) \\right|}{(2 \\cos \\theta) ^ {2} - 1}.
$$

因为直线 AB 的方程为 $x + y = 0$ ,

所以点 P 到直线 AB 的距离为 $d=\\frac{\\left|2\\cos\\theta+\\frac{2}{3}\\sqrt{3}\\sin\\theta\\right|}{\\sqrt{2}}$ ,

得 $S_{\\triangle PAB} = \\frac{1}{2} |AB|\\cdot d = \\left|2\\cos \\theta +\\frac{2}{3}\\sqrt{3}\\sin \\theta \\right|.$

若存在点 P，使得 $S_{\\triangle PAB} = S_{\\triangle PMN}$ ，则有

$$
\\left| \\frac {(2 \\cos \\theta - 3) ^ {2} \\left(2 \\cos \\theta + \\frac {2}{3} \\sqrt {3} \\sin \\theta\\right)}{(2 \\cos \\theta) ^ {2} - 1} \\right| = \\left| 2 \\cos \\theta + \\frac {2}{3} \\sqrt {3} \\sin \\theta \\right|,
$$

因为 $2\\cos\\theta+\\frac{2}{3}\\sqrt{3}\\sin\\theta\\neq0$ ，所以 $(2\\cos\\theta-3)^{2}=|(2\\cos\\theta)^{2}-1|$ ，解得 $\\cos\\theta=\\frac{5}{6}$

所以 $\\sin\\theta=\\pm\\frac{\\sqrt{11}}{6}$ ，所以 $\\frac{2\\sqrt{3}}{3}\\sin\\theta=\\pm\\frac{\\sqrt{33}}{3}$

故存在点 P，使得 $S_{\\triangle PAB} = S_{\\triangle PMN}$ ，此时，P 点的坐标为 $\\left(\\frac{5}{3}, \\frac{\\sqrt{33}}{9}\\right)$ 或 $\\left(\\frac{5}{3}, -\\frac{\\sqrt{33}}{9}\\right)$ .`,
      },
      {
        id: "prob-sec-4-4-27-26-sol-4",
        title: `解法四`,
        method: "geometric",
        steps: [],
        explanation: `解析法——结合平面图形性质. 设直线 AP 的方程为 $y = k(x + 1) + 1$ ，①

则直线 $BP$ 的方程为 $y = -\\frac{1}{3k} (x - 1) - 1.$ ②

又由 $\\left\\{\\begin{aligned}x=3,\\\\ y=k(x+1)+1\\end{aligned}\\right.$ 可得 $y_{M}=4k+1$ .

由 $\\left\\{\\begin{aligned}x=3,\\\\ y&=-\\frac{1}{3k}(x-1)-1\\end{aligned}\\right.$ 可得 $y_{N}=-\\frac{3k+2}{3k}.$

如图 4-4-26 所示, 连接 BM, AN.

![](images/fed740e162d3537e2522321b069ba9ee360a71831d029aa3e0b45c231b13043c.jpg)

若存在点 P，使得 $S_{\\triangle PAB} = S_{\\triangle PMN}$ ，

则 $S_{\\triangle PAB} + S_{\\triangle PBM} = S_{\\triangle PMN} + S_{\\triangle PBM}$ ，即 $S_{\\triangle ABM} = S_{\\triangle NBM}$

故点 A、N 到直线 BM 的距离相等, 所以 $AN \\parallel BM$ ,

即 $k_{BM} = k_{AN}$ ，所以 $\\frac{4k + 1 + 1}{3 - 1} = \\frac{-\\frac{3k + 2}{3k} - 1}{3 + 1},$

化简为 $12k^{2}+9k+1=0$ ，解得 $k=\\frac{-9\\pm\\sqrt{33}}{24}$ .

将 $k = \\frac{-9 + \\sqrt{33}}{24}$ 代入①②得 $\\left\\{ \\begin{array}{l}y - 1 = \\frac{-9 + \\sqrt{33}}{24}(x + 1),\\\\ y + 1 = \\frac{-1}{3\\times\\frac{-9 + \\sqrt{33}}{24}} (x - 1), \\end{array} \\right.$ 解得 $\\left\\{ \\begin{array}{l}x = \\frac{5}{3},\\\\ y = \\frac{\\sqrt{33}}{9}. \\end{array} \\right.$

故 P 点的坐标为 $\\left(\\frac{5}{3}, \\frac{\\sqrt{33}}{9}\\right)$ .

同理将 $k=\\frac{-9-\\sqrt{33}}{24}$ 代入①②，得 P 点的坐标为 $\\left(\\frac{5}{3},-\\frac{\\sqrt{33}}{9}\\right)$ .

故存在点 P，使得 $S_{\\triangle PAB} = S_{\\triangle PMN}$ ，

此时 P 点的坐标为 $\\left(\\frac{5}{3}, \\frac{\\sqrt{33}}{9}\\right)$ 或 $\\left(\\frac{5}{3}, -\\frac{\\sqrt{33}}{9}\\right)$ .`,
      },
      {
        id: "prob-sec-4-4-27-26-sol-5",
        title: `解法五`,
        method: "geometric",
        steps: [],
        explanation: `（解析法——结合平面图形性质）如图 4-4-27 所示，延长直线 AB，交直线 x=3 于点 S.

因为直线 AB 的方程为 $x + y = 0$ ，所以 $S(3, -3)$ .

若存在点 P，使得 $S_{\\triangle PAB} = S_{PMN}$ ，

则 $S_{\\triangle PAB} + S_{四边形PBSM} = S_{\\triangle PMN} + S_{四边形PBSM}$ ，即 $S_{\\triangle SAM} = S_{\\triangle SBN}$ .

因为 $S_{\\triangle SAM}=\\frac{1}{2}|MS|\\cdot(3-x_{A})=2|MS|$ ,

![](images/454cad83d7709d871896803cf7b73a39324814c421c4d10bb2e3f13b54d54500.jpg)

图4-4-26

![](images/fed740e162d3537e2522321b069ba9ee360a71831d029aa3e0b45c231b13043c.jpg)

图4-4-27

$$
S _ {\\triangle S B N} = \\frac {1}{2} | N S | \\cdot (3 - x _ {B}) = | N S |,
$$

所以 $|NS| = 2|MS|$ ，即 $y_{N} + 3 = 2(y_{N} + 3)$ . ①

又因为 $k_{AP} \\cdot k_{BP} = -\\frac{1}{3}$ , 即 $k_{AM} \\cdot k_{BM} = -\\frac{1}{3}$ , 所以 $\\frac{y_N + 1}{3 - 1} \\cdot \\frac{y_M - 1}{3 + 1} = -\\frac{1}{3}$ . ②

由①②可以解得

$$
\\left\\{ \\begin{array}{l} {y _ {N} =  \\frac {6 + \\sqrt {3 3}}{3},} \\\\ {y _ {M} =  \\frac {- 3 + \\sqrt {3 3}}{6}} \\end{array} \\right. \\text {或} \\left\\{ \\begin{array}{l} y _ {N} =  \\frac {6 - \\sqrt {3 3}}{3}, \\\\ y _ {M} =  \\frac {- 3 - \\sqrt {3 3}}{6}. \\end{array} \\right.
$$

可以求得直线 $AP, BP$ 的方程分别为

$$
y - 1 = \\frac {- 9 + \\sqrt {3 3}}{2 4} (x + 1), y + 1 = \\frac {- 1}{3 \\times \\frac {- 9 + \\sqrt {3 3}}{2 4}} (x - 1),
$$

或 $y - 1 = \\frac{-9 - \\sqrt{33}}{24} (x + 1), y + 1 = \\frac{-1}{3 \\times \\frac{-9 - \\sqrt{33}}{24}} (x - 1).$

可以解得点 P 的坐标为 $\\left(\\frac{5}{3}, \\frac{\\sqrt{33}}{9}\\right)$ 或 $\\left(\\frac{5}{3}, -\\frac{\\sqrt{33}}{9}\\right)$ .

故存在点 P，使得 $S_{\\triangle PAB} = S_{\\triangle PMN}$ ，

此时点 P 的坐标为 $\\left(\\frac{5}{3}, \\frac{\\sqrt{33}}{9}\\right)$ 或 $\\left(\\frac{5}{3}, -\\frac{\\sqrt{33}}{9}\\right)$ .`,
      },
      {
        id: "prob-sec-4-4-27-26-sol-6",
        title: `解法六`,
        method: "standard",
        steps: [],
        explanation: `从面积公式入手. 根据三角形的面积公式, 可得

$$
S _ {\\triangle P A B} = \\frac {1}{2} | A P | \\cdot | B P | \\cdot \\sin \\angle A P B,
$$

$$
S _ {\\triangle P M N} = \\frac {1}{2} | M P | \\cdot | N P | \\cdot \\sin \\angle M P N.
$$

又因为 $|AP| = \\sqrt{(x_P - x_A)^2 + (y_P - y_A)^2} = |x_P - x_A|\\cdot \\sqrt{1 + k_{AP}^2}$

同理可得， $|BP| = |x_{P} - x_{B}|\\cdot \\sqrt{1 + k_{BP}^{2}}$

$$
| M P | = | x _ {P} - x _ {M} | \\cdot \\sqrt {1 + k _ {A P} ^ {2}}, | N P | = | x _ {P} - x _ {N} | \\cdot \\sqrt {1 + k _ {B P} ^ {2}}.
$$

若存在点 $P$ ，使 $S_{\\triangle PAB} = S_{\\triangle PMN}$ ，则

$$
\\frac {1}{2} | A P | \\cdot | B P | \\cdot \\sin \\angle A P B = \\frac {1}{2} | M P | \\cdot | N P | \\cdot \\sin \\angle M P N.
$$

因为 $\\angle APB=\\angle MPN$ ，所以 $|x_{P}-x_{A}|\\cdot|x_{P}-x_{B}|=|x_{P}-x_{M}|\\cdot|x_{P}-x_{N}|$ ，

即 $|(x_{P} + 1)(x_{P} - 1)| = |(x_{P} - 3)^{2}|, |x_{P}^{2} - 1| = (x_{P} - 3)^{2}$ , 解得 $x_{P} = \\frac{5}{3}$ .

将 $x_{P} = \\frac{5}{3}$ 代入 $\\frac{x^2}{4} +\\frac{y^2}{\\frac{4}{3}} = 1(x\\neq \\pm 1)$ ，可得 $y_{P} = \\pm \\frac{\\sqrt{33}}{9}$

故存在点 P，使得 $S_{\\triangle PAB} = S_{\\triangle PMN}$ ，

此时 P 点的坐标为 $\\left(\\frac{5}{3}, \\frac{\\sqrt{33}}{9}\\right)$ 或 $\\left(\\frac{5}{3}, -\\frac{\\sqrt{33}}{9}\\right)$ .`,
      },
      {
        id: "prob-sec-4-4-27-26-sol-7",
        title: `解法七`,
        method: "standard",
        steps: [],
        explanation: `从三角形相似入手. 如图 4-4-28 所示, 过 B 作 $BT \\parallel y$ 轴, 交 AP 于 T, 因此 $\\triangle PBT \\sim \\triangle PNM$ .

![](images/90215cf6c11c2fb632129502682cf2874756bf82e4ed3bdd69948a7f21dec6d4.jpg)

所以 $\\frac{S_{\\triangle PNM}}{S_{\\triangle PBT}}=\\left(\\frac{|PN|}{|PB|}\\right)^{2}=\\left(\\frac{x_{N}-x_{P}}{x_{P}-x_{B}}\\right)^{2}$

而 $\\frac{S_{\\triangle PAB}}{S_{\\triangle PBT}}=\\frac{|PA|}{|PT|}=\\frac{x_{P}-x_{A}}{x_{P}-x_{T}}=\\frac{x_{P}-x_{A}}{x_{P}-x_{B}}.$

若存在点 P，使得 $S_{\\triangle PAB} = S_{\\triangle PMN}$ ，则 $\\left(\\frac{x_{N} - x_{P}}{x_{P} - x_{B}}\\right)^{2} = \\frac{x_{P} - x_{A}}{x_{P} - x_{B}}$

即 $(x_{P}-3)^{2}=(x_{P}+1)(x_{P}-1)$ ，解得 $x_{P}=\\frac{5}{3}$ .

以下同`,
      },
      {
        id: "prob-sec-4-4-27-26-sol-9",
        title: `解法八`,
        method: "standard",
        steps: [],
        explanation: `从三角形相似入手. 如图 4-4-29 所示, 连接 BM、AN, 根据三角形的面积公式, 可得

![](images/9e5ba78dd08d6e5f826a0490c2aecb9c779ded100e6dbd44e4b1b45bbe605d7e.jpg)

$$
S _ {\\triangle P A B} = \\frac {1}{2} | A P | \\cdot | B P | \\cdot \\sin \\angle A P B,
$$

$$
S _ {\\triangle P M N} = \\frac {1}{2} | M P | \\cdot | N P | \\cdot \\sin \\angle M P N.
$$

若存在点 P，使得 $S_{\\triangle PAB} = S_{\\triangle PMN}$ ，且由于 $\\angle APB = \\angle MPN$ ，

所以 $|AP|\\cdot |BP| = |MP|\\cdot |NP|$ ，即 $\\frac{|AP|}{|MP|} = \\frac{|NP|}{|BP|}$

可得 $\\triangle PBM\\sim\\triangle PNA$ ，所以 $\\frac{|AP|}{|MP|}=\\frac{|AN|}{|BM|}$ .

故 $\\frac{|x_A - x_P|}{|x_P - x_M|} = \\frac{|x_A - x_N|}{|x_B - x_M|} = 2$ ，解得 $x_{P} = \\frac{5}{3}$

以下同`,
      },
      {
        id: "prob-sec-4-4-27-26-sol-11",
        title: `解法九`,
        method: "standard",
        steps: [],
        explanation: `三角形性质——重心. 如图 4-4-30 所示, 延长直线 AB, 交直线 x=3 于点 S, 连接 AN.

![](images/9e5ba78dd08d6e5f826a0490c2aecb9c779ded100e6dbd44e4b1b45bbe605d7e.jpg)

若存在点 P，使得 $S_{\\triangle PAB} = S_{\\triangle PMN}$ ，

则 $S_{\\triangle PAB} + S_{\\text{四边形}PBSM} = S_{\\triangle PMN} + S_{\\text{四边形}PBSM}$

即 $S_{\\triangle SAM} = S_{\\triangle SBN}$

因为 $S_{\\triangle SAM}=\\frac{1}{2}\\cdot|MS|\\cdot(3-x_{A})=2|MS|$ ,

$S_{\\triangle SBN}=\\frac{1}{2}\\cdot|NS|\\cdot(3-x_{B})=|NS|$ ，所以 $|NS|=2|MS|$ ，M为NS的中点.

又因为 B 为 AS 中点, 所以 BN、AM 为 $\\triangle ASN$ 的两条中线, 故 P 为 $\\triangle ASN$ 的重心,

$$
x _ {P} = \\frac {x _ {A} + x _ {S} + x _ {N}}{3} = \\frac {- 1 + 3 + 3}{3} = \\frac {5}{3}.
$$

以下同

![](images/163f0c01b41b50ed98fcbe3fb90f8045e07ad206da3e62727ca560c2ae632eb8.jpg)

图4-4-28

![](images/90215cf6c11c2fb632129502682cf2874756bf82e4ed3bdd69948a7f21dec6d4.jpg)

图4-4-29

![](images/9e5ba78dd08d6e5f826a0490c2aecb9c779ded100e6dbd44e4b1b45bbe605d7e.jpg)

图4-4-30`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-4-28",
    topicId: "topic-sec-4-4",
    title: `椭圆 C: x^2a^2 + y^2b^2 = 1 (a > b > 0) 的离心率为 √(`,
    content: `椭圆 $C: \\frac{x^{2}}{a^{2}} + \\frac{y^{2}}{b^{2}} = 1 (a > b > 0)$ 的离心率为 $\\frac{\\sqrt{3}}{2}$ ，长轴端点与短轴端点间距离为 $\\sqrt{5}$ .
(1)求椭圆 C 的方程；

(2) 过点 $D(0,4)$ 的直线 $l$ 与椭圆 $C$ 交于两点 $E, F, O$ 为坐标原点，是否存在使 $\\triangle OEF$ 为直角三角形的直线 $l$ ，若存在，求出直线 $l$ 的斜率；若不存在，请说明理由。`,
    preview: `椭圆 的离心率为 √32 ，长轴端点与短轴端点间距离为 √5 . (1)求椭圆 C 的方程； (2) 过点 D(0,4) 的直线 l 与椭圆 C 交于两点 E,`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-4-28-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1)由已知 $\\frac{c}{a}=\\frac{\\sqrt{3}}{2},a^{2}+b^{2}=5$ ，又 $a^{2}=b^{2}+c^{2}$ ，解得 $a^{2}=4,b^{2}=1$ ，

所以椭圆 C 的方程为 $\\frac{x^{2}}{4} + y^{2} = 1$ .

(2)根据题意,满足条件的直线 l 如果存在,则它不垂直于 x 轴,

设其方程为 $y=kx+4$ ，

由 $\\left\\{\\begin{aligned}\\frac{x^{2}}{4}+y^{2}=1,\\\\ y=kx+4\\end{aligned}\\right.$ 消去y，得 $(1+4k^{2})x^{2}+32kx+60=0$ ，

$\\Delta = (32k)^{2} - 240(1 + 4k^{2}) = 64k^{4} - 240$ ，令 $\\Delta >0$ ，解得 $k^2 >\\frac{15}{4}$

设 E、F 两点的坐标分别为 $(x_{1}, y_{1})$ 、 $(x_{2}, y_{2})$ ，

则 $x_{1} + x_{2} = -\\frac{32k}{1 + 4k^{2}}, x_{1}x_{2} = \\frac{60}{1 + 4k^{2}}.$

(i) 当 $\\angle EOF$ 为直角时，有 $\\overrightarrow{OE} \\cdot \\overrightarrow{OF} = 0$ ，即 $x_{1}x_{2} + y_{1}y_{2} = 0$ ，

所以 $(1+k^{2})x_{1}x_{2}+4k(x_{1}+x_{2})+16=0$ ,

即 $\\frac{15\\times(1+k^{2})}{1+4k^{2}}-\\frac{32k^{2}}{1+4k^{2}}+4=0$ ，解得 $k=\\pm\\sqrt{19}$ .

(ii)`,
      },
      {
        id: "prob-sec-4-4-28-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `当 $\\angle OEF$ 或 $\\angle OFE$ 为直角时, 不妨设 $\\angle OEF$ 为直角,

则 $k_{OE} \\cdot k = -1$ ，即 $\\frac{y_1}{x_1} \\cdot \\frac{y_1 - 4}{x_1} = -1$

所以 $x_{1}^{2}=4y_{1}-y_{1}^{2}.$ ①

又 $\\frac{x_{1}^{2}}{4}+y_{1}^{2}=1,$ ②

将①代入②，消去 $x_{1}$ 得 $3y_{1}^{2} + 4y_{1} - 4 = 0$

解得 $y_{1} = \\frac{2}{3}$ 或 $y_{1} = -2$ (舍去).

将 $y_{1}=\\frac{2}{3}$ 代入①，得 $x_{1}=\\pm\\frac{2}{3}\\sqrt{5}$ ，所以 $k=\\frac{y_{1}-4}{x_{1}}=\\pm\\sqrt{5}$ ，

经检验,所求 k 值均符合题意.

综上,满足题设条件的直线 l 存在,其斜率的值为 $\\pm\\sqrt{19}$ 或 $\\pm\\sqrt{5}$ .`,
      },
      {
        id: "prob-sec-4-4-28-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `当 $\\angle OEF$ 或 $\\angle OFE$ 为直角时,不妨设 $\\angle OEF$ 为直角.

则 $\\overrightarrow{OE}\\cdot\\overrightarrow{EF}=0$ ，所以 $(x_{1},y_{1})\\cdot(x_{2}-x_{1},y_{2}-y_{1})=0$ ，

即 $x_{1}x_{2} + y_{1}y_{2} - (x_{1}^{2} + y_{1}^{2}) = 0.$

又 $x_{1}x_{2} + y_{1}y_{2} = \\frac{60 + 16 - 4k^{2}}{4k^{2} + 1}$ 而 $x_{1}^{2} + y_{1}^{2} = |OE|^{2} = \\frac{16}{k^{2} + 1},$

所以 $\\frac{60+16-4k^{2}}{4k^{2}+1}-\\frac{16}{k^{2}+1}=0$ ，所以 $k^{2}=5>\\frac{15}{4}$ ，即 $k=\\pm\\sqrt{5}$ .

经检验,所求 k 值均符合题意.

综上,满足题设条件的直线 l 存在,其斜率的值为 $\\pm\\sqrt{19}$ 或 $\\pm\\sqrt{5}$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-4-29",
    topicId: "topic-sec-4-4",
    title: `已知椭圆 C: x^2a^2 + y^2b^2 = 1 (a > b > 0) 的离心率为`,
    content: `已知椭圆 $C: \\frac{x^{2}}{a^{2}} + \\frac{y^{2}}{b^{2}} = 1 (a > b > 0)$ 的离心率为 $\\frac{\\sqrt{3}}{3}$ ，过右焦点 F 的直线 l 与 C 相交于 A、B 两点，当 l 的斜率为 1 时，坐标原点 O 到 l 的距离为 $\\frac{\\sqrt{2}}{2}$ .
(1) 求 a, b 的值；
(2) $C$ 上是否存在 $P$ , 使得当 $l$ 绕 $F$ 转到某一位置时, 有 $\\overrightarrow{OP} = \\overrightarrow{OA} + \\overrightarrow{OB}$ 成立? 若存在, 求出所有 $P$ 的坐标与 $l$ 的方程; 若不存在, 说明理由.`,
    preview: `已知椭圆 的离心率为 √33 ，过右焦点 F 的直线 l 与 C 相交于 A、B 两点，当 l 的斜率为 1 时，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-4-29-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1) 设 $F\\left( {c,0}\\right)$ ,当 $l$ 的斜率为 1 时,直线 $l$ 的方程为 $x - y - c = 0$ ,坐标原点 $O$ 到 $l$ 的距离为 $\\frac{\\left| {0 - 0 - c}\\right| }{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$ ,解得 $c = 1$ ,又 $e = \\frac{c}{a} = \\frac{\\sqrt{3}}{3}$ ,所以 $a = \\sqrt{3},b = \\sqrt{2}$ .

(2)`,
      },
      {
        id: "prob-sec-4-4-29-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `由(1)知椭圆 C 的方程为 $\\frac{x^{2}}{3}+\\frac{y^{2}}{2}=1$ ，设 $A(x_{1},y_{1})$ 、 $B(x_{2},y_{2})$ .

由题意知 l 的斜率一定不为 0，故不妨设直线 l 的方程为 $x=my+1$ ，代入椭圆方程，整理得 $(2m^{2}+3)y^{2}+4my-4=0$ ，显然 $\\Delta>0$ 。

由韦达定理有 $y_{1} + y_{2} = -\\frac{4m}{2m^{2} + 3}, y_{1}y_{2} = -\\frac{4}{2m^{2} + 3}$ . ①

假设存在点 P, 使 $\\overrightarrow{OP} = \\overrightarrow{OA} + \\overrightarrow{OB}$ 成立, 则其充要条件为

点 P 的坐标为 $(x_{1}+x_{2}, y_{1}+y_{2})$ ，且点 P 在椭圆上，即 $\\frac{(x_{1}+x_{2})^{2}}{3}+\\frac{(y_{1}+y_{2})^{2}}{2}=1$ .

整理得 $2x_{1}^{2} + 3y_{1}^{2} + 2x_{2}^{2} + 3y_{2}^{2} + 4x_{1}x_{2} + 6y_{1}y_{2} = 6.$

又 A、B 在椭圆 C 上，即 $2x_{1}^{2}+3y_{1}^{2}=6,2x_{2}^{2}+3y_{2}^{2}=6$ .

故 $2x_{1}x_{2} + 3y_{1}y_{2} + 3 = 0.$ ②

将 $x_{1}x_{2}=(my_{1}+1)(my_{2}+1)=m^{2}y_{1}y_{2}+m(y_{1}+y_{2})+1$ 及方程①代入方程②，

解得 $m^2 = \\frac{1}{2}$

所以 $y_{1} + y_{2} = \\frac{\\sqrt{2}}{2}$ 或 $-\\frac{\\sqrt{2}}{2}, x_{1} + x_{2} = -\\frac{4m^{2}}{2m^{2} + 3} + 2 = \\frac{3}{2},$

即 $P\\left(\\frac{3}{2}, \\pm\\frac{\\sqrt{2}}{2}\\right)$ .

当 $m = \\frac{\\sqrt{2}}{2}$ 时， $P\\left(\\frac{3}{2}, -\\frac{\\sqrt{2}}{2}\\right)$ ，直线 $l$ 的方程为 $x = \\frac{\\sqrt{2}}{2} y + 1$ ；

当 $m=-\\frac{\\sqrt{2}}{2}$ 时， $P\\left(\\frac{3}{2},\\frac{\\sqrt{2}}{2}\\right)$ ，直线 l 的方程为 $x=-\\frac{\\sqrt{2}}{2}y+1$ .`,
      },
      {
        id: "prob-sec-4-4-29-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `当 $l \\perp x$ 轴时，由 $\\overrightarrow{OA} + \\overrightarrow{OB} = (2,0)$ 知，

C 上不存在点 P，使 $\\overrightarrow{OP} = \\overrightarrow{OA} + \\overrightarrow{OB}$ 成立.

当 $l$ 不垂直于 $x$ 轴时，由(1)可设 $P(\\sqrt{3}\\cos \\theta ,\\sqrt{2}\\sin \\theta),A(x_{1},y_{1}),B(x_{2},y_{2})$ ，直线 $l$ 的方程为 $y = k(x - 1)$ ，所以线段 $AB$ 中点为 $G\\left(\\frac{\\sqrt{3}}{2}\\cos \\theta ,\\frac{\\sqrt{2}}{2}\\sin \\theta\\right)$ ，于是有 $\\frac{\\sqrt{2}}{2}\\sin \\theta = k\\left(\\frac{\\sqrt{3}}{2}\\cos \\theta -1\\right).$ ③

因为 $\\overrightarrow{OP}=\\overrightarrow{OA}+\\overrightarrow{OB}$ ，所以 $x_{1}+x_{2}=\\sqrt{3}\\cos\\theta,y_{1}+y_{2}=\\sqrt{2}\\sin\\theta.$

又 $\\left\\{ \\begin{array}{l} \\frac{x_1^2}{3} + \\frac{y_1^2}{2} = 1, \\\\ \\frac{x_2^2}{3} + \\frac{y_2^2}{2} = 1, \\end{array} \\right.$ 两式相减得 $\\frac{(x_1 + x_2)(x_1 - x_2)}{3} + \\frac{(y_1 + y_2)(y_1 - y_2)}{2} = 0,$

即 $\\frac{x_{1}+x_{2}}{3}=-\\frac{y_{1}+y_{2}}{2}\\cdot\\frac{y_{1}-y_{2}}{x_{1}-x_{2}}$ ，所以 $\\frac{\\sqrt{3}}{3}\\cos\\theta=-\\frac{\\sqrt{2}}{2}k\\sin\\theta.$ ④

由③④消去 k，得 $2\\sqrt{3}\\cos\\theta=3$ ，所以 $\\cos\\theta=\\frac{\\sqrt{3}}{2}$ ， $\\sin\\theta=\\pm\\frac{1}{2}$ ， $k=\\pm\\sqrt{2}$ .

所以 $P\\left(\\frac{3}{2}, \\pm\\frac{\\sqrt{2}}{2}\\right)$ ，直线 l 的方程为 $y = \\pm\\sqrt{2}(x-1)$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-4-30",
    topicId: "topic-sec-4-4",
    title: `过抛物线 y^2=2px(p>0) 的对称轴上一点`,
    content: `过抛物线 $y^{2}=2px(p>0)$ 的对称轴上一点 $A(a,0)(a>0)$ 的直线与抛物线相交于 M、N 两点，自 M、N 向直线 l:x=-a 作垂线，垂足分别为点 $M_{1}$ 、 $N_{1}$ .
(1) 当 $a=\\frac{p}{2}$ 时, 求证: $AM_{1} \\perp AN_{1}$ ;

(2) 记 $\\triangle AMM_{1}$ 、 $\\triangle AM_{1}N_{1}$ 、 $\\triangle ANN_{1}$ 的面积分别为 $S_{1}$ 、 $S_{2}$ 、 $S_{3}$ ，是否存在 $\\lambda$ ，使得对任意的 a > 0，都有 $S_{2}^{2} = \\lambda S_{1} S_{3}$ 成立。若存在，求出 $\\lambda$ 的值；若不存在，说明理由。`,
    preview: `过抛物线 y^2=2px(p>0) 的对称轴上一点 A(a,0)(a>0) 的直线与抛物线相交于 M、N 两点，自 M、N 向直线 l:x=-a 作垂线，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-4-30-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `依题意,可设直线 MN 的方程为 $x=my+a$ , $M(x_{1},y_{1})$ , $N(x_{2},y_{2})$ ,

则有 $M_{1}(-a,y_{1}),N_{1}(-a,y_{2})$

由 $\\left\\{\\begin{aligned}x&=my+a,\\\\ y^{2}&=2px\\end{aligned}\\right.$ 消去x可得 $y^{2}-2mpy-2ap=0$ ，从而有 $\\left\\{\\begin{aligned}y_{1}&+y_{2}=2mp,\\\\ y_{1}y_{2}&=-2ap.\\end{aligned}\\right.$ ①

于是 $x_{1} + x_{2} = m(y_{1} + y_{2}) + 2a = 2(m^{2}p + a)$ ②

又由 $y_{1}^{2}=2px_{1}, y_{1}^{2}=2px_{2}$ ，可得

$x_{1}x_{2} = \\frac{(y_{1}y_{2})^{2}}{4p^{2}} = \\frac{(-2ap)^{2}}{4p^{2}} = a^{2}.$ ③

(1)如图4-4-31所示，当 $a = \\frac{p}{2}$ 时，点 $A\\left(\\frac{p}{2},0\\right)$ 即抛物线的焦点， $l$ 为其准线 $x = -\\frac{p}{2}$ . 此时 $M_{1}\\left(-\\frac{p}{2},y_{1}\\right), N_{1}\\left(-\\frac{p}{2},y_{2}\\right)$ ，并由①可得 $y_{1}y_{2} = -p^{2}$ .

证法一 因为 $\\overrightarrow{AM_{1}}=(-p,y_{1}),\\overrightarrow{AN_{1}}=(-p,y_{2})$ ,

所以 $\\overrightarrow{AM_{1}}\\cdot\\overrightarrow{AN_{1}}=p^{2}+y_{1}y_{2}=p^{2}-p^{2}=0,$

即 $AM_{1} \\perp AN_{1}$ .

![](images/88bb5a8a9f3c5d69d9216c66a2b0202f1464eb950fd7ffa45caf294acf739d2b.jpg)

图4-4-31

证法二 因为 $k_{AM_1} = -\\frac{y_1}{p}, k_{AN_1} = -\\frac{y_2}{p}$ ,

所以 $k_{AM_1} \\cdot k_{AN_1} = \\frac{y_1 y_2}{p^2} = -\\frac{p^2}{p^2} = -1,$

即 $AM_{1} \\perp AN_{1}$ .

证法三 当 $a=\\frac{p}{2}$ 时, A 为抛物线的焦点.

由抛物线的定义知, $MA=MM_{1}$ ,所以 $\\angle MAM_{1}=\\angle MM_{1}A$ .

又 $MM_{1} \\parallel x$ 轴，所以 $\\angle MAM_{1} = \\angle M_{1}AA_{1}$ .

同理 $\\angle NAN_{1}=\\angle N_{1}AA_{1}$ .

所以 $\\angle M_{1}AA_{1} + \\angle N_{1}AA_{1} = \\frac{\\pi}{2}$ 即 $\\angle M_1AN_1 = \\frac{\\pi}{2},AM_1\\bot AN_1$

(2) 存在 $\\lambda=4$ ，使得对任意的 a>0，都有 $S_{2}^{2}=4S_{1}S_{3}$ 成立，证明如下.

证法一 记直线 l 与 x 轴的交点为 $A_{1}$ ，则 $\\left|OA\\right|=\\left|OA_{1}\\right|=a$ .

于是有

$$
S _ {1} = \\frac {1}{2} | M M _ {1} | \\cdot | A _ {1} M _ {1} | = \\frac {1}{2} (x _ {1} + a) | y _ {1} |,
$$

$$
S _ {2} = \\frac {1}{2} | M _ {1} N _ {1} | \\cdot | A A _ {1} | = a | y _ {1} - y _ {2} |,
$$

$$
S _ {3} = \\frac {1}{2} | N N _ {1} | \\cdot | A _ {1} N _ {1} | = \\frac {1}{2} (x _ {2} + a) | y _ {2} |.
$$

所以 $S_{2}^{2} = 4S_{1}S_{3}\\Rightarrow (a|y_{1} - y_{2}|)^{2} = (x_{1} + a)\\cdot |y_{1}|\\cdot (x_{2} + a)\\cdot |y_{2}|$

$$
\\Rightarrow a ^ {2} \\left[ (y _ {1} + y _ {2}) ^ {2} - 4 y _ {1} y _ {2} \\right] = \\left[ x _ {1} x _ {2} + a (x _ {1} + x _ {2}) + a ^ {2} \\right] \\cdot | y _ {1} y _ {2} |.
$$

将①②③代入上式,化简可得

$$
a ^ {2} (4 m ^ {2} p ^ {2} + 8 a p) = 2 a p (2 a m ^ {2} p + 4 a ^ {2}) = 4 a ^ {2} p (m ^ {2} p + 2 a).
$$

上式恒成立, 即对任意 $a > 0, S_{2}^{2} = 4S_{1}S_{3}$ 成立.

证法二 由图 4-4-32, $M_{1}N_{1}^{2} = (y_{1} - y_{2})^{2} = (y_{1} + y_{2})^{2} - 4y_{1}y_{2} = 4p^{2}m^{2} + 8pa$ ,

则 $S_{2}^{2} = \\left(\\frac{1}{2}\\cdot 2a\\cdot |M_{1}N_{1}|\\right)^{2} = a^{2}|M_{1}N_{1}|^{2} = 4pa^{2}(pm^{2} + 2a).$ ④

设 $M_{1}N_{1}$ 与 $x$ 轴的交点为 $A_{1}$

则 $S_{1} = \\frac{1}{2}|MM_{1}|\\cdot |M_{1}A_{1}| = \\left|\\frac{1}{2}(a + x_{1})y_{1}\\right|$

$$
S _ {3} = \\frac {1}{2} | N N _ {1} | \\cdot | N _ {1} A _ {1} | = \\left| \\frac {1}{2} (a + x _ {2}) y _ {2} \\right|,
$$

于是 $S_{1}S_{3} = \\left|\\frac{1}{4} (a + x_{1})(a + x_{2})y_{1}y_{2}\\right|$

化简得到 $S_{1}S_{3} = pa^{2}(pm^{2} + 2a)$ ⑤

比较④⑤两式可以看出 $S_{2}^{2}=4S_{1}S_{3}$

所以存在 $\\lambda=4$ ，使得对任意的 a>0，都有 $S_{2}^{2}=\\lambda S_{1}S_{3}$ 成立.

![](images/cb123e70f79db348f0dc6251f9504c54289b2963ed677152724c87b254b387f3.jpg)

图4-4-32`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-5-1",
    topicId: "topic-sec-4-5",
    title: `设 n 为正整数, 规定: f_n(x)=ff[… f(x)…]_n ≠ f, 已知`,
    content: `设 n 为正整数, 规定: $f_{n}(x)=\\underbrace{f\\{f[\\cdots f(x)\\cdots]\\}}_{n \\neq f}$ , 已知
$$
f (x) = \\left\\{ \\begin{array}{l l} 2 (1 - x), & 0 \\leqslant x \\leqslant 1, \\\\ x - 1, & 1 <   x \\leqslant 2. \\end{array} \\right.
$$

(1)解不等式: $f(x)\\leqslant x;$
(2)设集合 $A=\\{0,1,2\\}$ ，对任意 $x\\in A$ ，证明： $f_{3}(x)=x$ ;
(3) 求 $f_{2026}\\left(\\frac{8}{9}\\right)$ 的值；
(4) 若集合 $B = \\{x \\mid f_{12}(x) = x, x \\in [0, 2]\\}$ , 证明: $B$ 中至少包含有 8 个元素.`,
    preview: `设 n 为正整数, 规定: , 已知 (1)解不等式: f(x)≤ x; (2)设集合 ，对任意 x A ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-1-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)①当 $0 \\leqslant x \\leqslant 1$ 时，由 $2(1 - x) \\leqslant x$ 得， $x \\geqslant \\frac{2}{3}$ ，所以 $\\frac{2}{3} \\leqslant x \\leqslant 1$ .

②当 $1 < x \\leqslant 2$ 时，因 $x - 1 \\leqslant x$ 恒成立，所以 $1 < x \\leqslant 2$ .

由①②得， $f(x)\\leqslant x$ 的解集为 $\\{x\\left|\\frac{2}{3}\\leqslant x\\leqslant 2\\right\\rbrace .$

(2) 因为 $f(0)=2, f(1)=0, f(2)=1$ ,

所以当 x=0 时， $f_{3}(0)=f(f(f(0)))=f(f(2))=f(1)=0$ ;

当 x=1 时， $f_{3}(1)=f(f(f(1)))=f(f(0))=f(2)=1$ ;

当 x=2 时， $f_{3}(2)=f(f(f(2)))=f(f(1))=f(0)=2.$

即对任意 $x \\in A$ ，恒有 $f_{3}(x) = x$ 。

(3) $f_{1}\\left(\\frac{8}{9}\\right)=2\\left(1-\\frac{8}{9}\\right)=\\frac{2}{9},f_{2}\\left(\\frac{8}{9}\\right)=f\\left(f\\left(\\frac{8}{9}\\right)\\right)=f\\left(\\frac{2}{9}\\right)=\\frac{14}{9},$

$$
f _ {3} \\left(\\frac {8}{9}\\right) = f \\left(f _ {2} \\left(\\frac {8}{9}\\right)\\right) = f \\left(\\frac {1 4}{9}\\right) = \\frac {1 4}{9} - 1 = \\frac {5}{9},
$$

$$
f _ {4} \\left(\\frac {8}{9}\\right) = f \\left(f _ {3} \\left(\\frac {8}{9}\\right)\\right) = f \\left(\\frac {5}{9}\\right) = 2 \\left(1 - \\frac {5}{9}\\right) = \\frac {8}{9}, \\dots
$$

一般地， $f_{4k+r}\\left(\\frac{8}{9}\\right)=f_{r}\\left(\\frac{8}{9}\\right)(k,r\\in\\mathbf{N})$

所以 $f_{2026}\\left(\\frac{8}{9}\\right)=f_{2}\\left(\\frac{8}{9}\\right)=\\frac{14}{9}.$

(4)由(1)知, $f\\left(\\frac{2}{3}\\right)=\\frac{2}{3}$ ,所以 $f_{n}\\left(\\frac{2}{3}\\right)=\\frac{2}{3}$ .则 $f_{12}\\left(\\frac{2}{3}\\right)=\\frac{2}{3}$ ,所以 $\\frac{2}{3}\\in B$ .

由(2)知,对x=0或1或2,恒有 $f_{3}(x)=x$ ,

所以 $f_{12}(x) = f_{4\\times 3}(x) = x$ ，则 $0,1,2\\in B.$

由(3)知,对 $x=\\frac{8}{9},\\frac{2}{9},\\frac{14}{9},\\frac{5}{9}$ , 恒有 $f_{12}(x)=f_{4\\times3}(x)=x$ ,

所以 $\\frac{8}{9},\\frac{2}{9},\\frac{14}{9},\\frac{5}{9}\\in B.$

综上所述， $\\frac{2}{3},0,1,2,\\frac{8}{9},\\frac{2}{9},\\frac{14}{9},\\frac{5}{9}\\in B$ ，所以B中至少含有8个元素.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-5-2",
    topicId: "topic-sec-4-5",
    title: `若函数 f(x) 在区间 I 上有定义,且对 x I`,
    content: `若函数 $f(x)$ 在区间 $I$ 上有定义,且对 $\\forall x \\in I, f(x) \\in I$ ,则称 $I$ 是 $f(x)$ 的一个“封闭区间”.
(1)已知函数 $f(x) = x + \\sin x$ ，区间 $I = [0, r] (r > 0)$ 为 $f(x)$ 的一个“封闭区间”，求 $r$ 的取值集合.

(2)已知函数 $g(x) = \\ln (x + 1) + \\frac{3}{4} x^3$ ，设集合 $P = \\{x \\mid g(x) = x\\}$ .

(i)求集合 P 中元素的个数；

(ii)用 $b - a$ 表示区间 $[a, b] (a < b)$ 的长度，设 $m$ 为集合 $P$ 中的最大元素。`,
    preview: `若函数 f(x) 在区间 I 上有定义,且对 x I, f(x) I ,则称 I 是 f(x) 的一个“封闭区间”. (1)已知函数 f(x) = x + x`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-2-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `证明：存在唯一长度为 $m$ 的闭区间 $D$ ，使得 $D$ 是 $g(x)$ 的一个“封闭区间”。

讲解

(1)由题意,对 $\\forall x\\in[0,r]$ , $f(x)\\in[0,r]$ ,

因为 $f'(x)=1+\\cos x\\geqslant0$ 恒成立，所以 $f(x)$ 在 $[0,r]$ 上单调递增，

可得 $f(x)$ 的值域为 $[0, r + \\sin r]$ ，因此只需 $[0, r + \\sin r] \\subseteq [0, r]$ ，

即可得 $r + \\sin r \\leqslant r$ ，即 $\\sin r \\leqslant 0 (r > 0)$ ，

则 r 的取值集合为 $\\left[(2k-1)\\pi,2k\\pi\\right](k\\in\\mathbf{N}^{*})$ .

(2)(i)记函数 $h(x)=g(x)-x=\\ln(x+1)+\\frac{3}{4}x^{3}-x(x>-1)$ ,

则 $h^{\\prime}(x) = \\frac{1}{x + 1} +\\frac{9}{4} x^{2} - 1 = \\frac{4 + 9x^{2}(x + 1) - 4(x + 1)}{4(x + 1)} = \\frac{9x^{2}(x + 1) - 4x}{4(x + 1)}$

$$
= \\frac {x (3 x + 4) (3 x - 1)}{4 (x + 1)} (x > - 1),
$$

若 $h^{\\prime}(x) > 0$ 得 $-1 < x < 0$ 或 $x > \\frac{1}{3}$ ; 若 $h^{\\prime}(x) < 0$ 得 $0 < x < \\frac{1}{3}$ .

所以函数 $h(x)$ 在 $(-1,0)$ 和 $\\left(\\frac{1}{3}, +\\infty\\right)$ 上单调递增，在 $\\left(0, \\frac{1}{3}\\right)$ 上单调递减，

而 $h(0)=0$ ，因此当 $x\\in(-1,0)\\cup\\left(0,\\frac{1}{3}\\right)$ 时， $h(x)<0$ ，不存在零点；

由 $h(x)$ 在 $\\left(0,\\frac{1}{3}\\right)$ 上单调递减，易知 $h\\left(\\frac{1}{3}\\right)<h(0)=0$ ，而 $h(1)=\\ln2-\\frac{1}{4}>0$ ，

由零点存在定理可知存在唯一的 $x_{0}\\in\\left(\\frac{1}{3},1\\right)$ 使得 $h(x_{0})=0$ ;

当 $x \\in (1, +\\infty)$ 时， $h(x) > 0$ ，不存在零点.

综上所述，函数 $h(x)$ 有 0 和 $x_{0}$ 两个零点，即集合 P 中元素的个数为 2.

(ii)由(i)得 $m = x_0$ ，假设长度为 $m$ 的闭区间 $D = [a, a + x_0]$ 是 $g(x)$ 的一个“封闭区间” $(a > -1)$ ，

则对 $\\forall x\\in[a,a+x_{0}],g(x)\\in[a,a+x_{0}]$ ,

当-1<a<0时，由(i)得 $h(x)$ 在 $(-1,0)$ 上单调递增，

所以 $h(a)=g(a)-a<h(0)=0$ ，即 $g(a)<a$ ，不满足要求；

当 a>0 时，由(i)得 $h(x)$ 在 $(x_{0},+\\infty)$ 上单调递增，

所以 $h(a+x_{0})=g(a+x_{0})-(a+x_{0})>h(x_{0})=0,$

即 $g(a+x_{0})>a+x_{0}$ ，也不满足要求；

当 a=0 时，闭区间 $D=[0,x_{0}]$ ，而 $g(x)$ 显然在 $(-1,+\\infty)$ 上单调递增，

所以 $g(0) \\leqslant g(x) \\leqslant g(x_{0})$ ,

由(i)可得 $g(0) = h(0) + 0 = 0, g(x_0) = h(x_0) + x_0 = x_0,$

所以 $g(x) \\in [0, x_{0}] = D$ ，满足要求.

综上,存在唯一长度为 m 的闭区间 $D=[0,m]$ , 使得 D 是 $g(x)$ 的一个“封闭区间”.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-5-3",
    topicId: "topic-sec-4-5",
    title: `对于函数 y = f(x), x D_1 和 y =`,
    content: `对于函数 $y = f(x), x \\in D_1$ 和 $y = g(x), x \\in D_2$ ，设 $D_1 \\cap D_2 = D$ ，若 $x_1, x_2 \\in D$ ，且 $x_1 \\neq x_2$ ，皆有 $|f(x_1) - f(x_2)| \\leqslant t |g(x_1) - g(x_2)| (t > 0)$ 成立，则称函数 $y = f(x)$ 与 $y = g(x)$ “具有性质 $H(t)$ ”.
(1) 判断函数 $f(x) = x^2, x \\in [1, 2]$ 与 $g(x) = 2x$ 是否“具有性质 $H(2)$ ”，并说明理由；

(2) 若函数 $f(x) = 2 + x^2, x \\in (0,1]$ 与 $g(x) = \\frac{1}{x}$ “具有性质 $H(t)$ ”，求 $t$ 的取值范围；

(3) 若函数 $f(x) = \\frac{1}{x^2} + 2\\ln x - 3$ 与 $y = g(x)$ “具有性质 $H(1)$ ”，且函数 $y = g(x)$ 在区间 $(0, +\\infty)$ 上存在两个零点 $x_1, x_2$ ，求证： $x_1^2 + x_2^2 > 2$ .`,
    preview: `对于函数 y = f(x), x D_1 和 y = g(x), x D_2 ，设 D_1 D_2 = D ，若 x_1, x_2 D ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-3-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)由 $x_{1}, x_{2} \\in [1, 2]$ ，且 $x_{1} \\neq x_{2}$ ，得 $2 < x_{1} + x_{2} < 4$ ，即 $\\left|x_{1} + x_{2}\\right| < 4$ ，

则 $|x_{1} + x_{2}| \\cdot |x_{1} - x_{2}| < 4|x_{1} - x_{2}|$ ，即 $|x_1^2 - x_2^2| < 2|2x_1 - 2x_2|$ ，

即 $|f(x_1) - f(x_2)| \\leqslant 2 |g(x_1) - g(x_2)|$

则函数 $f(x)=x^{2}, x\\in[1,2]$ 与 $g(x)=2x$ “具有性质 $H(2)$ ”.

(2)由函数 $f(x) = 2 + x^{2}, x \\in (0,1]$ 与 $g(x) = \\frac{1}{x}$ “具有性质 $H(t)$ ”，

得 $\\left|f(x_{1})-f(x_{2})\\right|\\leqslant t\\left|g(x_{1})-g(x_{2})\\right|,x_{1},x_{2}\\in(0,1]$ ，且 $x_{1}\\neq x_{2}$

即 $|2 + x_1^2 - 2 - x_2^2| \\leqslant t\\left|\\frac{1}{x_1} - \\frac{1}{x_2}\\right|$ ,

整理得 $\\left|(x_1 + x_2)(x_1 - x_2)\\right| \\leqslant t \\left|\\frac{x_2 - x_1}{x_1x_2}\\right|$ ,

则 $t \\geqslant x_{1}x_{2}(x_{1} + x_{2})$ 对 $x_{1}, x_{2} \\in (0, 1]$ 恒成立，

又 $x_{1}, x_{2} \\in (0, 1], x_{1} \\neq x_{2}$ , 则 $0 < x_{1} + x_{2} < 2, 0 < x_{1}x_{2} < 1$ , 即 $0 < x_{1}x_{2}(x_{1} + x_{2}) < 2$ ,

则 $t \\geqslant 2$ ，即所求 t 的取值范围为 $[2, +\\infty)$ .

(3)由函数 $y=g(x)$ 在 $(0,+\\infty)$ 上有两个零点 $x_{1},x_{2}$ ，得 $g(x_{1})=g(x_{2})=0$ ，

又函数 $f(x)=\\frac{1}{x^{2}}+2\\ln x-3$ 与 $y=g(x)$ “具有性质 $H(1)$ ”,

则 $|f(x_1) - f(x_2)| \\leqslant |g(x_1) - g(x_2)| = 0$ ，即 $f(x_1) = f(x_2)$ ，

即 $\\frac{1}{x_1^2} + 2\\ln x_1 - 3 = \\frac{1}{x_2^2} + 2\\ln x_2 - 3$ ，令 $x_1^2 = t_1, x_2^2 = t_2$ ，即 $\\frac{1}{t_1} + \\ln t_1 - 3 = \\frac{1}{t_2} + \\ln t_2 - 3$

记 $h(x) = \\frac{1}{x} +\\ln x - 3$ ，即 $h(t_1) = h(t_2)$ ，因为 $h^{\\prime}(x) = -\\frac{1}{x^{2}} +\\frac{1}{x} = \\frac{x - 1}{x^{2}}$

当 0 < x < 1 时， $h'(x) < 0$ ; 当 x > 1 时， $h'(x) > 0$ .

所以，函数 $y=h(x)$ 在区间 $(0,1)$ 上是减函数，在 $(1,+\\infty)$ 上是增函数.

要证 $x_{1}^{2}+x_{2}^{2}>2$ , 即证 $t_{1}+t_{2}>2$

不妨设 $0 < t_{1} < 1 < t_{2}$ ，即证 $t_{2} > 2 - t_{1} > 1$ ，

只需证 $h(t_{2})>h(2-t_{1})$ ，即证 $h(t_{1})>h(2-t_{1})$ .

设 $H(x)=h(x)-h(2-x)$ ，即 $H(x)=\\frac{1}{x}+\\ln x-\\frac{1}{2-x}-\\ln(2-x)$ ，

因为 $H^{\\prime}(x) = -\\frac{1}{x^{2}} +\\frac{1}{x} -\\frac{1}{(2 - x)^{2}} +\\frac{1}{2 - x} = -\\frac{4(1 - x)^{2}}{x^{2}(2 - x)^{2}}\\leqslant 0,$

所以函数 $y=H(x)$ 在 $(0,+\\infty)$ 上是减函数，且 $H(1)=0$ ，

又 $0 < t_{1} < 1$ ，则 $H(t_{1}) > H(1) = 0$ ，即 $h(t_{1}) - h(2 - t_{1}) > 0$ ，

则 $h(t_{1})>h(2-t_{1})$ ，得证，

故 $x_{1}^{2} + x_{2}^{2} > 2$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-5-4",
    topicId: "topic-sec-4-5",
    title: `若函数 y=f(x) 的图像上的两个不同点处的切线互相重合`,
    content: `若函数 $y=f(x)$ 的图像上的两个不同点处的切线互相重合，则称该切线为函数 $y=f(x)$ 的图像的“自公切线”，称这两点为函数 $y=f(x)$ 的图像的一对“同切点”.
(1) 分别判断函数 $f_{1}(x) = \\sin x$ 与 $f_{2}(x) = \\ln x$ 的图像是否存在“自公切线”，并说明理由；

(2) 若 $a \\in \\mathbb{R}$ , 求证: 函数 $g(x) = \\tan x - x + a \\left( x \\in \\left( -\\frac{\\pi}{2}, \\frac{\\pi}{2} \\right) \\right)$ 有唯一零点且该函数的图像不存在“自公切线”;

(3) 设 $n \\in \\mathbf{N}^*$ , $h(x) = \\tan x - x + n\\pi \\left( x \\in \\left( -\\frac{\\pi}{2}, \\frac{\\pi}{2} \\right) \\right)$ 的零点为 $x_n, t \\in \\left( -\\frac{\\pi}{2}, \\frac{\\pi}{2} \\right)$ , 求证: “存在 $s \\in (2\\pi, +\\infty)$ , 使得点 $(s, \\sin s)$ 与 $(t, \\sin t)$ 是函数 $y = \\sin x$ 的图像的一对‘同切点’”的充要条件是“ $t$ 是数列 $\\{x_n\\}$ 中的项”.`,
    preview: `若函数 y=f(x) 的图像上的两个不同点处的切线互相重合，则称该切线为函数 y=f(x) 的图像的“自公切线”，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-4-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 显然直线 $y = 1$ 切 $y = \\sin x$ 的图像于点 $\\left(\\frac{\\pi}{2}, 1\\right), \\left(\\frac{5\\pi}{2}, 1\\right)$ ,

直线 y=1 是 $y=\\sin x$ 的图像的一条“自公切线”，

因此，函数 $f_{1}(x)$ 的图像存在“自公切线”；

对于 $f_{2}(x)=\\ln x, f'_{2}(x)=\\frac{1}{x}(x>0)$ 是严格减函数，

则 $f_{2}(x)$ 在不同点处的切线斜率不同，

所以函数 $f_{2}(x)$ 的图像不存在“自公切线”.

(2) $g'(x)=\\frac{1}{\\cos^{2}x}-1=\\frac{\\sin^{2}x}{\\cos^{2}x}=\\tan^{2}x\\geqslant0$ 恒成立，当且仅当x=0时 $g'(x)=0$ ，

则 $y=g(x)$ 是在 $\\left(-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right)$ 上的严格增函数, 可得它至多有一个零点,

令 $g_{1}(x) = \\sin x - (x - a)\\cos x\\big(x\\in \\left[-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right]\\big),$

由于 $y = g_{1}(x)$ 的图像是连续曲线，且 $g_{1}\\left(-\\frac{\\pi}{2}\\right)g_{1}\\left(\\frac{\\pi}{2}\\right) = -1 < 0,$

因此 $g_{1}(x)$ 在 $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$ 上存在零点，即在 $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$ 上 $g(x)=\\frac{g_{1}(x)}{\\cos x}$ 存在零点，

所以 $g(x)$ 有唯一零点；

假设 $g(x)$ 的图像存在“自公切线”，则存在 $x_{1}, x_{2} \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$ 且 $x_{1} \\neq x_{2}$ ，

使得 $g(x)$ 的图像在 $x = x_{1}$ 与 $x = x_{2}$ 处的切线重合，即 $\\tan^2 x_1 = \\tan^2 x_2$ ，有 $x_{2} = -x_{1}$ 不妨设 $x_{1}\\in \\left(0,\\frac{\\pi}{2}\\right)$

切线 $l_{1}: y - \\tan x_{1} + x_{1} - a = \\tan^{2} x_{1} \\cdot (x - x_{1})$

与切线 $l_{2}: y - \\tan x_{2} + x_{2} - a = \\tan^{2} x_{2} \\cdot (x - x_{2})$ 有相同截距，

即 $-x_{1}\\tan^{2}x_{1}+\\tan x_{1}-x_{1}+a=-x_{2}\\tan^{2}x_{2}+\\tan x_{2}-x_{2}+a,$

而 $x_{2} = -x_{1}$

则 $-x_{1}\\tan^{2}x_{1}+\\tan x_{1}-x_{1}=x_{1}\\tan^{2}x_{1}-\\tan x_{1}+x_{1}$ ，即 $x_{1}(1+\\tan^{2}x_{1})=\\tan x_{1}$

则有 $x_{1}=\\sin x_{1}\\cos x_{1}$ ，即 $2x_{1}=\\sin 2x_{1}$ ，

令 $\\varphi(x)=x-\\sin x,0<x<\\pi,\\varphi'(x)=1-\\cos x>0,$

即函数 $\\varphi(x)$ 在 $(0,\\pi)$ 上单调递增， $\\varphi(x)>\\varphi(0)=0$ ，因此当 $x\\in(0,\\pi)$ 时， $x>\\sin x$ ，

即 $2x_{1} = \\sin 2x_{1}$ 在 $\\left(0,\\frac{\\pi}{2}\\right)$ 上无解，

所以 $g(x)$ 的图像不存在“自公切线”.

(3)对给定的 $n \\in N^{*}$ ，由(2)知 $h(x)$ 有唯一零点，即 $x_{n}$ 唯一确定，

又 $y=\\sin x$ 在点 $(t,\\sin t)$ 处的切线方程为 $y-\\sin t=\\cos t(x-t)$ ,

即 $y=x\\cos t+\\sin t-t\\cos t,$

$y=\\sin x$ 在点 $(s,\\sin s)$ 处的切线方程为 $y=x\\cos s+\\sin s-s\\cos s$ ,

若存在 $s \\in (2\\pi, +\\infty)$ , 使得点 $(s, \\sin s)$ 与 $(t, \\sin t)$ 是函数 $y = \\sin x$ 图像的一对“同切点”,

则 $\\left\\{\\begin{aligned}\\cos s=\\cos t(s\\neq t),\\\\ \\sin s-s\\cos s=\\sin t-t\\cos t,\\end{aligned}\\right.$

又 $t \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$ , 则 $\\cos t > 0$ ,

所以 $\\left\\{\\begin{aligned}\\cos s&=\\cos t(s\\neq t),\\\\ \\tan s-s&=\\tan t-t,\\end{aligned}\\right.$ $\\cos s=\\cos t$ 且 $\\tan s=-\\tan t$ ，从而存在 $n\\in N^{*}$ ，

使得 $s=2n\\pi-t$ ，代入 $\\tan s-s=\\tan t-t$ ，可得 $\\tan t-t+n\\pi=0$ ，

则 $x_{n}=t$ ，即 t 是数列 $\\{x_{n}\\}$ 中的项.

反之，若 $t$ 是数列 $\\{x_{n}\\}$ 中的项，则存在 $n\\in \\mathbf{N}^{*}$ ，使得 $x_{n} = t$ ，即 $\\tan t - t + n\\pi = 0$

由(2)中的 $g(x)$ 严格增, 可知 $h(x)$ 严格增, 又 $h(0)=n\\pi>0$ 且 $h(t)=0$ , 可知 t<0,

令 $s = 2n\\pi - t$

则 $s \\in (2\\pi, +\\infty)$ 且 $\\cos s = \\cos t, \\tan s - s - (\\tan t - t) = 2(t - \\tan t - n\\pi) = 0,$

即 $\\tan s - s = \\tan t - t$ ，可得 $\\sin s - s \\cos s = \\sin t - t \\cos t$ ，所以存在 $s \\in (2\\pi, +\\infty)$ ，

使得点 $(s,\\sin s)$ 与 $(t,\\sin t)$ 是函数 $y=\\sin x$ 的图像的一对“同切点”.

所以存在 $s \\in (2\\pi, +\\infty)$ , 使得点 $(s, \\sin s)$ 与 $(t, \\sin t)$ 是函数 $y = \\sin x$ 图像的一对“同切点”的充要条件是“ $t$ 是数列 $\\{x_n\\}$ 中的项”.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-5-5",
    topicId: "topic-sec-4-5",
    title: `若函数 α(x) 有且仅有一个极值点 m`,
    content: `若函数 $\\alpha(x)$ 有且仅有一个极值点 m，函数 $\\beta(x)$ 有且仅有一个极值点 n，且 m > n，则称 $\\alpha(x)$ 与 $\\beta(x)$ 具有性质 $\\alpha - \\beta \\parallel m > n$ .
(1) 函数 $\\varphi_{1}(x) = \\sin x - x^{2}$ 与 $\\varphi_{2}(x) = \\mathrm{e}^{x} - x$ 是否具有性质 $\\varphi_{1} - \\varphi_{2} \\| x_{0} > 0$ ? 并说明理由.

(2)已知函数 $f(x)=ae^{x}-\\ln(x+1)$ 与 $g(x)=\\ln(x+a)-e^{x}+1$ 具有性质 $f-g\\parallel x_{1}>x_{2}$

(i) 求 a 的取值范围；

(ii)`,
    preview: `若函数 α(x) 有且仅有一个极值点 m，函数 β(x) 有且仅有一个极值点 n，且 m > n，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-5-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `证明： $\\left|g(x_{1})\\right|>\\left|x_{2}\\right|$ .

讲解

(1) 函数 $\\varphi_{1}(x)=\\sin x-x^{2}$ 与 $\\varphi_{2}(x)=\\mathrm{e}^{x}-x$ 具有性质 $\\varphi_{1}-\\varphi_{2}\\parallel x_{0}>0$ ，理由如下：

$$
\\varphi_ {1} ^ {\\prime} (x) = \\cos x - 2 x, \\text {令} h (x) = \\varphi_ {1} ^ {\\prime} (x) = \\cos x - 2 x,
$$

则 $h'(x) = -\\sin x - 2 < 0$ ，故 $\\varphi_{1}'(x)$ 单调递减，

又 $\\varphi_{1}^{\\prime}(0)=\\cos0-0=1>0,\\varphi_{1}^{\\prime}(1)=\\cos1-2<0,$

故存在 $x_{0}\\in(0,1)$ ，使 $\\varphi_{1}^{\\prime}(x_{0})=0$ ，

则 $\\varphi_{1}(x)$ 在 $(-\\infty, x_{0})$ 上单调递增，在 $(x_{0}, +\\infty)$ 上单调递减，

故 $\\varphi_{1}(x)$ 有且仅有一个极值点 $x_{0}\\in(0,1)$ .

$\\varphi_2'(x) = \\mathrm{e}^x - 1$ ，则当 $x < 0$ 时， $\\varphi_2'(x) < 0$ ，当 $x > 0$ 时， $\\varphi_2'(x) > 0$

故 $\\varphi_{2}(x)$ 在 $(-\\infty,0)$ 上单调递减，在 $(0,+\\infty)$ 上单调递增，又 $\\varphi'(0)=0$ ，

故 $\\varphi_{2}(x)$ 有且仅有一个极值点 0，

故函数 $\\varphi_{1}(x)=\\sin x-x^{2}$ 与 $\\varphi_{2}(x)=\\mathrm{e}^{x}-x$ 具有性质 $\\varphi_{1}-\\varphi_{2}\\parallel x_{0}>0$ .

(2)(i) $f'(x)=ae^{x}-\\frac{1}{x+1}$ ，又 $x+1>0$ ，故x>-1，

当 $a \\leqslant 0$ 时, $f'(x) = ae^{x} - \\frac{1}{x + 1} < 0$ , 此时 $f(x)$ 没有极值点, 故舍去,

当 $a > 0$ 时，令 $m(x) = f'(x) = ae^{x} - \\frac{1}{x + 1}$

则 $m'(x)=ae^{x}+\\frac{1}{(x+1)^{2}}>0$ 恒成立，故 $f'(x)$ 在 $(-1,+\\infty)$ 上单调递增.

$g^{\\prime}(x) = \\frac{1}{x + a} -\\mathrm{e}^{x},x + a > 0$ ，故 $x > - a,$

由 a>0，令 $n(x)=g'(x)=\\frac{1}{x+a}-\\mathrm{e}^{x}$ ，则 $n'(x)=-\\frac{1}{(x+a)^{2}}-\\mathrm{e}^{x}<0$ 恒成立，

故 $g'(x)$ 在 $(-a, +\\infty)$ 上单调递减，

当 $a \\in (0,1)$ 时，有 $f'(0) = a\\mathrm{e}^0 - \\frac{1}{0 + 1} = a - 1 < 0,$

又 $x \\to +\\infty$ 时， $f'(x) \\to +\\infty$ ，故此时存在 $x_{1} \\in (0, +\\infty)$ ，

使 $f(x)$ 在 $(-1, x_1)$ 上单调递减，在 $(x_1, +\\infty)$ 上单调递增，

则 $f(x)$ 有唯一极值点 $x_{1} \\in (0, +\\infty)$ .

另一方面， $g'(0)=\\frac{1}{a}-e^{0}=\\frac{1}{a}-1>0$

又 $x \\to +\\infty$ 时， $g'(x) \\to -\\infty$ ，故此时存在 $x_{2} \\in (0, +\\infty)$ ，

使 $g(x)$ 在 $(-a, x_{2})$ 上单调递增，在 $(x_{2}, +\\infty)$ 上单调递减，

则 $g(x)$ 有唯一极值点 $x_{2} \\in (0, +\\infty)$ ,

即有 $f^{\\prime}(x_{1}) = a\\mathrm{e}^{x_{1}} - \\frac{1}{x_{1} + 1} = 0,g^{\\prime}(x_{2}) = \\frac{1}{x_{2} + a} -\\mathrm{e}^{x_{2}} = 0,$

即 $\\mathrm{e}^{x_{1}}=\\frac{1}{a(x_{1}+1)}$ , $e^{x_{2}}=\\frac{1}{x_{2}+a}$ ，此时需满足 $x_{1}>x_{2}>0$ ，则 $e^{x_{1}}>e^{x_{2}}$

故有 $\\frac{1}{a(x_{1}+1)}>\\frac{1}{x_{2}+a}$ ，即 $x_{2}>ax_{1}$ ，即 $a<\\frac{x_{2}}{x_{1}}<1$ ，故 $a\\in(0,1)$ 符合要求.

当 $a \\in (1, +\\infty)$ 时， $f'(0) = ae^0 - \\frac{1}{0 + 1} = a - 1 > 0,$

又 $x \\rightarrow -1$ 时， $f'(x) \\rightarrow -\\infty$ ，故此时存在 $x_{1} \\in (-1,0)$ ，

使 $f(x)$ 在 $(-1, x_{1})$ 上单调递减，在 $(x_{1}, +\\infty)$ 上单调递增，

则 $f(x)$ 有唯一极值点 $x_{1} \\in (-1,0)$ .

另一方面， $g^{\\prime}(0) = \\frac{1}{a} -\\mathrm{e}^{0} = \\frac{1}{a} -1 <   0,$

又 $x \\rightarrow -a$ 时， $g'(x) \\rightarrow +\\infty$ ，故此时存在 $x_{2} \\in (-a, 0)$ ，

使 $g(x)$ 在 $(-a, x_{2})$ 上单调递增，在 $(x_{2}, +\\infty)$ 上单调递减，

则 $g(x)$ 有唯一极值点 $x_{2} \\in (-a, 0)$ .

同理可得 $\\frac{1}{a(x_{1}+1)}>\\frac{1}{x_{2}+a}$ ，此时需满足 $0>x_{1}>x_{2}$ ，即 $x_{2}>ax_{1}$ ，则 $a>\\frac{x_{2}}{x_{1}}$

由 $\\frac{x_{2}}{x_{1}}>1,a\\in(1,+\\infty)$ ，故该不等式成立，故 $a\\in(1,+\\infty)$ 符合要求.

当 $a = 1$ 时，有 $f^{\\prime}(0) = ae^{0} - \\frac{1}{0 + 1} = a - 1 = 0,g^{\\prime}(0) = \\frac{1}{a} -\\mathrm{e}^{0} = \\frac{1}{a} -1 = 0,$

此时 $x_{1} = x_{2} = 0$ ，即 $f(x), g(x)$ 的极值点都为0，不符合要求，故舍去.

综上，故 $a \\in (0,1) \\cup (1, +\\infty)$ .

(ii) 当 $a \\in (0,1)$ 时，有 $x_{1} > x_{2} > 0$ ，则 $\\mathrm{e}^{x_2} = \\frac{1}{x_2 + a} > \\mathrm{e}^0 = 1$ ，故 $0 < x_{2} + a < 1$

$g(x)$ 在 $(-a,x_2)$ 上单调递增，在 $(x_{2}, + \\infty)$ 上单调递减，

则 $g(x_{1}) < g(x_{2}) = \\ln (x_{2} + a) - \\mathrm{e}^{x_{2}} + 1 = \\ln (x_{2} + a) - \\frac{1}{x_{2} + a} + 1,$

令 $t = x_{2} + a\\in (0,1)$ ，则 $g(x_{2}) = \\ln t - \\frac{1}{t} +1$ ，令 $\\mu (t) = \\ln t - \\frac{1}{t} +1,t\\in (0,1)$

则 $\\mu'(t)=\\frac{1}{t}+\\frac{1}{t^{2}}>0$ , 故 $\\mu(t)$ 在 $(0,1)$ 上单调递增，

则 $g(x_{2}) = \\ln t - \\frac{1}{t} + 1 < \\mu(1) = \\ln 1 - \\frac{1}{1} + 1 = 0,$

故 $\\left|g(x_{1})\\right|>\\left|g(x_{2})\\right|$ ，要证 $\\left|g(x_{1})\\right|>\\left|x_{2}\\right|$ ，只需证 $g(x_{1})+x_{2}<0$ ，

$$
\\begin{array}{l} g (x _ {1}) + x _ {2} <   g (x _ {2}) + x _ {2} = \\ln (x _ {2} + a) - \\mathrm{e} ^ {x _ {2}} + 1 + x _ {2} = \\ln \\frac {1}{\\mathrm{e} ^ {x _ {2}}} - \\mathrm{e} ^ {x _ {2}} + 1 + x _ {2} \\\\ = - x _ {2} - \\mathrm{e} ^ {x _ {2}} + 1 + x _ {2} = 1 - \\mathrm{e} ^ {x _ {2}} <   1 - \\mathrm{e} ^ {0} <   0, \\\\ \\end{array}
$$

即当 $a \\in (0,1)$ 时，有 $|g(x_1)| > |x_2|$ ；

当 $a \\in (1, +\\infty)$ 时，有 $0 > x_1 > x_2$ ，则 $\\mathrm{e}^{x_2} = \\frac{1}{x_2 + a} < \\mathrm{e}^0 = 1$ ，即 $x_2 + a > 1$

$g(x)$ 在 $(-a,x_{2})$ 上单调递增，在 $(x_{2},+\\infty)$ 上单调递减，

则 $g(x_{1})>g(0)=\\ln(0+a)-\\mathrm{e}^{0}+1=\\ln a>0,$

即要证 $|g(x_1)| > |x_2|$ ，只需证 $g(x_1) + x_2 > 0$ ，

$$
\\begin{array}{l} g (x _ {1}) + x _ {2} = \\ln (x _ {1} + a) - \\mathrm{e} ^ {x _ {1}} + 1 + x _ {2} > \\ln (x _ {2} + a) - \\mathrm{e} ^ {x _ {1}} + 1 + x _ {2} \\\\ = \\ln \\frac {1}{\\mathrm{e} ^ {x _ {2}}} - \\mathrm{e} ^ {x _ {1}} + 1 + x _ {2} = - x _ {2} - \\mathrm{e} ^ {x _ {1}} + 1 + x _ {2} \\\\ = 1 - \\mathrm{e} ^ {x _ {1}} > 1 - \\mathrm{e} ^ {0} = 0, \\\\ \\end{array}
$$

即当 $a \\in (1, +\\infty)$ 时，有 $\\left| g(x_{1}) \\right| > \\left| x_{2} \\right|$ .

综上所述， $\\left|g(x_{1})\\right|>\\left|x_{2}\\right|$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-5-6",
    topicId: "topic-sec-4-5",
    title: `在几何学中常常需要考虑曲线的弯曲程度,为此我们需要刻画曲线的`,
    content: `在几何学中常常需要考虑曲线的弯曲程度,为此我们需要刻画曲线的弯曲程度.考察如图4-5-1所示的光滑曲线 $C: y = f(x)$ 上的曲线段 $\\widehat{AB}$ , 其弧长为 $\\Delta s$ , 当动点从 $A$ 沿曲线段 $\\widehat{AB}$ 运动到 $B$ 点时, $A$ 点的切线 $l_{A}$ 也随着转动到 $B$ 点的切线 $l_{B}$ , 记这两条切线之间的夹角为 $\\Delta \\theta$ (它等于 $l_{B}$ 的倾斜角与 $l_{A}$ 的倾斜角之差). 显然, 当弧长固定时, 夹角越大, 曲线的弯曲程度就越大; 当夹角固定时, 弧长越小则弯曲程度越大, 因此可以定义 $\\overline{K} = \\left|\\frac{\\Delta \\theta}{\\Delta s}\\right|$ 为曲线段 $\\widehat{AB}$ 的平均曲率; 显然当 $B$ 越接近 $A$ , 即 $\\Delta s$ 越小, $K$ 就越能精确刻画曲线 $C$ 在点 $A$ 处的弯曲程度, 因此定义 $K = \\lim_{\\Delta s \\to 0} \\left|\\frac{\\Delta \\theta}{\\Delta s}\\right| = \\frac{|y''|}{(1 + y'^2)^{\\frac{3}{2}}}$ (若极限存在) 为曲线 $C$ 在点 $A$ 处的曲率 (其中 $y', y''$ 分别表示 $y = f(x)$ 在点 $A$ 处的一阶、二阶导数).
(1)求单位圆上圆心角为 $60^{\\circ}$ 的圆弧的平均曲率；
(2)求椭圆 $\\frac{x^{2}}{4}+y^{2}=1$ 在点 $\\left(\\sqrt{3},\\frac{1}{2}\\right)$ 处的曲率；
(3) 定义 $\\varphi(y)=\\frac{2\\sqrt{2}|y''|}{(1+y')^{3}}$ 为曲线 $y=f(x)$ 的“柯西曲率”.

已知在曲线 $f(x) = x \\ln x - 2x$ 上存在两点 $P(x_1, f(x_1))$ 和 $Q(x_2, f(x_2))$ ，且 $P, Q$ 处的“柯西曲率”相同，求 $\\sqrt[3]{x_1} + \\sqrt[3]{x_2}$ 的取值范围.

![](images/924f2f601a2d3480ba7a98beee9b4fd8e9867b525c28472ea3bd9782a521aae5.jpg)

图4-5-1`,
    preview: `在几何学中常常需要考虑曲线的弯曲程度,为此我们需要刻画曲线的弯曲程度.考察如图4-5-1所示的光滑曲线 C: y = f(x) 上的曲线段 AB , 其弧长为`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-6-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) $\\overline{K} = \\left|\\frac{\\Delta\\theta}{\\Delta s}\\right| = \\frac{\\frac{\\pi}{3}}{\\frac{\\pi}{3}} = 1.$

(2) $y=\\sqrt{1-\\frac{x^{2}}{4}},y^{\\prime}=-\\frac{x}{4}\\left(1-\\frac{x^{2}}{4}\\right)^{-\\frac{1}{2}},y^{\\prime\\prime}=-\\frac{1}{4}\\left(1-\\frac{x^{2}}{4}\\right)^{-\\frac{1}{2}}-\\frac{x^{2}}{16}\\left(1-\\frac{x^{2}}{4}\\right)^{-\\frac{3}{2}},$

故 $y' \\mid_{x=\\sqrt{3}} = -\\frac{\\sqrt{3}}{2}, y'' \\mid_{x=\\sqrt{3}} = -2$ ，故 $K = \\frac{2}{\\left(1 + \\frac{3}{4}\\right)^{\\frac{3}{2}}} = \\frac{16\\sqrt{7}}{49}$ .

(3) $f'(x)=\\ln x-1,f''(x)=\\frac{1}{x}$ ,

故 $\\varphi (y) = \\frac{2\\sqrt{2}|y''|}{(1 + y')^3} = \\frac{2\\sqrt{2}}{x(\\ln x)^3} = \\frac{2\\sqrt{2}}{(3s\\ln s)^3}$ ，其中 $s = \\sqrt[3]{x}$

令 $t_1 = \\sqrt[3]{x_1}, t_2 = \\sqrt[3]{x_2}$ , 则 $t_1 \\ln t_1 = t_2 \\ln t_2$ ,

则 $\\ln t_{1}=-\\frac{t\\ln t}{t-1}$ ，其中 $t=\\frac{t_{2}}{t_{1}}>1$ （不妨 $t_{2}>t_{1}$ ）.

令 $p(x) = x\\ln x$ ，则 $p^{\\prime}(x) = 1 + \\ln x,$

故 $p(x)$ 在 $\\left(0, \\frac{1}{\\mathrm{e}}\\right)$ 上递减，在 $\\left(\\frac{1}{\\mathrm{e}}, +\\infty\\right)$ 上递增，

当 $x \\to 0^{+}$ 时， $p(x) \\to 0$ ，又 $p(1) = 0$

故 $1 > t_{2} > \\frac{1}{\\mathrm{e}} > t_{1} > 0.$

令 $h(t) = \\ln (t_1 + t_2) = \\ln (t + 1) - \\frac{t\\ln t}{t - 1}, h'(t) = \\frac{1}{(t - 1)^2}\\left[\\ln t - \\frac{2(t - 1)}{t + 1}\\right],$

令 $m(t) = \\ln t - \\frac{2(t - 1)}{t + 1} (t > 1)$ ，则 $m'(t) = \\frac{(t - 1)^2}{t(t + 1)^2}$ ，

当 t>1 时， $m'(t)>0$ 恒成立，故 $m(t)$ 在 $(1,+\\infty)$ 上单调递增，

可得 $m(t)>m(1)=0$ , 即 $\\ln t-\\frac{2(t-1)}{t+1}>0$

故有 $h^{\\prime}(t) = \\frac{1}{(t - 1)^{2}}\\left[\\ln t - \\frac{2(t - 1)}{t + 1}\\right] > 0,$

则 $h(t)$ 在 $(1, +\\infty)$ 上递增，

又 $\\lim_{t\\to 1}h(t) = \\ln 2 - 1,\\lim_{t\\to +\\infty}h(t) = 0$ ，故 $\\ln (t_1 + t_2)\\in (\\ln 2 - 1,0)$

故 $\\sqrt[3]{x_1} +\\sqrt[3]{x_2} = t_1 + t_2\\in \\left(\\frac{2}{\\mathrm{e}},1\\right)$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-5-7",
    topicId: "topic-sec-4-5",
    title: `如图 4-5-2 所示, 对于曲线 , 存在圆 C`,
    content: `如图 4-5-2 所示, 对于曲线 $\\Gamma$ , 存在圆 C 满足如下条件:
![](images/418792a6990484531de2ef5813c652b97a9971df07c6811a585ed10c871dcaff.jpg)

图4-5-2

①圆 C 与曲线 $\\Gamma$ 有公共点 A，且圆心在曲线 $\\Gamma$ 凹的一侧；
②圆 C 与曲线 $\\Gamma$ 在点 A 处有相同的切线；
③曲线 $\\Gamma$ 的导函数在点 A 处的导数（即曲线 $\\Gamma$ 的二阶导数）等于圆 C 在点 A 处的二阶导数（已知圆 $(x-a)^{2}+(y-b)^{2}=r^{2}$ 在点 $A(x_{0},y_{0})$ 处的二阶导数等于 $\\frac{r^{2}}{(b-y_{0})^{3}}$ ），则称圆 C 为曲线 $\\Gamma$ 在 A 点处的曲率圆，其半径 r 称为曲率半径.

(1)求抛物线 $y=x^{2}$ 在原点处的曲率圆的方程；

(2)求曲线 $y=\\frac{1}{x}$ 的曲率半径的最小值；

(3) 若曲线 $y = e^{x}$ 在点 $(x_{1}, e^{x_{1}})$ 和点 $(x_{2}, e^{x_{2}}) (x_{1} \\neq x_{2})$ 处有相同的曲率半径，求证：

$$
x _ {1} + x _ {2} <   - \\ln 2.
$$

讲解

(1) 记 $f(x)=x^{2}$ ，设抛物线 $y=x^{2}$ 在原点处的曲率圆的方程为 $x^{2}+(y-b)^{2}=b^{2}$ ，其中 b 为曲率半径，

则 $f^{\\prime}(x) = 2x, f^{\\prime \\prime}(x) = 2$ ，故 $2 = f^{\\prime \\prime}(0) = \\frac{b^{2}}{(b - 0)^{3}} = \\frac{1}{b}$ ，故 $b = \\frac{1}{2}$ ，

所以抛物线 $y=x^{2}$ 在原点处的曲率圆的方程为 $x^{2}+\\left(y-\\frac{1}{2}\\right)^{2}=\\frac{1}{4}$ .

(2)设曲线 $y=f(x)$ 在点 $(x_{0},y_{0})$ 的曲率半径为 r,`,
    preview: `如图 4-5-2 所示, 对于曲线 , 存在圆 C 满足如下条件: 图4-5-2 ①圆 C 与曲线 有公共点 A，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-7-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `$\\left\\{\\begin{aligned}f^{\\prime}(x_{0})&=-\\frac{x_{0}-a}{y_{0}-b},\\\\ f^{\\prime\\prime}(x_{0})&=\\frac{r^{2}}{(b-y_{0})^{3}},\\end{aligned}\\right.$ 由 $(x_{0}-a)^{2}+(y_{0}-b)^{2}=r^{2}$ 知，

$\\left[f^{\\prime}(x_{0})\\right]^{2} + 1 = \\frac{r^{2}}{(y_{0} - b)^{2}}$ ，所以 $r = \\frac{\\{[f'(x_0)]^2 + 1\\}^{\\frac{3}{2}}}{|f''(x_0)|},$

故曲线 $y=\\frac{1}{x}$ 在点 $(x_{0},y_{0})$ 处的曲率半径 $r=\\frac{\\left\\{\\left(-\\frac{1}{x_{0}^{2}}\\right)^{2}+1\\right\\}^{\\frac{3}{2}}}{\\left|\\frac{2}{x_{0}^{3}}\\right|}$ ,

所以 $r^2 = \\frac{\\left(\\frac{1}{x_0^4} + 1\\right)^3}{\\left|\\frac{2}{x_0^3}\\right|^2} = \\frac{1}{4}\\left(x_0^2 + \\frac{1}{x_0^2}\\right)^3 \\geqslant 2,$

则 $r \\geqslant \\sqrt{2}$ , 当且仅当 $x_0^2 = \\frac{1}{x_0^2}$ , 即 $x_0^2 = 1$ 时取等号,

故曲线 $y=\\frac{1}{x}$ 在点(1,1)处的曲率半径最小, 最小值为 $\\sqrt{2}$ .`,
      },
      {
        id: "prob-sec-4-5-7-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `因为 $\\left\\{\\begin{aligned}-\\frac{1}{x_{0}^{2}}&=-\\frac{x_{0}-a}{y_{0}-b},\\\\ \\frac{2}{x_{0}^{3}}&=\\frac{r^{2}}{(b-y_{0})^{3}},\\end{aligned}\\right.$ $\\frac{|a+bx_{0}^{2}-2x_{0}|}{\\sqrt{x_{0}^{4}+1}}=r,$

所以 $\\left\\{ \\begin{array}{l}y_0 - b = -\\frac{x_0 \\cdot r^{\\frac{2}{3}}}{2^{\\frac{1}{3}}},\\\\ x_0 - a = -\\frac{r^{\\frac{2}{3}}}{2^{\\frac{1}{3}}x_0}, \\end{array} \\right.$

而 $r^2 = (x_0 - a)^2 +(y_0 - b)^2 = \\frac{r^{\\frac{4}{3}}}{2^{\\frac{2}{3}}\\cdot x_0^2} +\\frac{x_0^2\\cdot r^{\\frac{4}{3}}}{2^{\\frac{2}{3}}},$

所以 $r^{\\frac{2}{3}} = 2^{-\\frac{2}{3}}\\left(x_0^2 +\\frac{1}{x_0^2}\\right)$ ，解方程可得 $r = \\frac{1}{2}\\left(x_0^2 +\\frac{1}{x_0^2}\\right)^{\\frac{3}{2}}$

则 $r^2 = \\frac{1}{4}\\left(x_0^2 +\\frac{1}{x_0^2}\\right)^3\\geqslant 2$ ，当且仅当 $x_0^2 = \\frac{1}{x_0^2}$ ，即 $x_0^2 = 1$ 时取等号，

故 $r \\geqslant \\sqrt{2}$ , 曲线 $y = \\frac{1}{x}$ 在点(1,1)处的曲率半径最小, 最小值为 $\\sqrt{2}$ .

(3)`,
      },
      {
        id: "prob-sec-4-5-7-sol-2",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `函数 $y=e^{x}$ 的图像在点 $(x,e^{x})$ 处的曲率半径 $r=\\frac{(e^{2x}+1)^{\\frac{3}{2}}}{e^{x}}$ ,

故 $r^{\\frac{2}{3}} = \\mathrm{e}^{\\frac{4}{3} x} + \\mathrm{e}^{-\\frac{2}{3} x}$ , 由题意知 $\\mathrm{e}^{\\frac{4}{3} x_1} + \\mathrm{e}^{-\\frac{2}{3} x_1} = \\mathrm{e}^{\\frac{4}{3} x_2} + \\mathrm{e}^{-\\frac{2}{3} x_2}$ . 令 $t_1 = \\mathrm{e}^{\\frac{2}{3} x_1}, t_2 = \\mathrm{e}^{\\frac{2}{3} x_2}$ ,

则有 $t_1^2 +\\frac{1}{t_1} = t_2^2 +\\frac{1}{t_2}$ ，所以 $t_1^2 -t_2^2 = \\frac{1}{t_2} -\\frac{1}{t_1}$ 即 $(t_{1} - t_{2})(t_{1} + t_{2}) = \\frac{t_{1} - t_{2}}{t_{1}t_{2}}$ 故 $t_1t_2(t_1 + t_2) = 1.$

因为 $x_{1} \\neq x_{2}$ , 所以 $t_{1} \\neq t_{2}$ , 所以 $1 = t_{1}t_{2}(t_{1} + t_{2}) > t_{1}t_{2} \\cdot 2\\sqrt{t_{1}t_{2}} = 2(t_{1}t_{2})^{\\frac{3}{2}} = 2\\mathrm{e}^{x_{1} + x_{2}}$ , 所以 $x_{1} + x_{2} < -\\ln 2$ .`,
      },
      {
        id: "prob-sec-4-5-7-sol-3",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `函数 $y = \\mathrm{e}^{x}$ 的图像在点 $(x, \\mathrm{e}^{x})$ 处的曲率半径 $r = \\frac{(\\mathrm{e}^{2x} + 1)^{\\frac{3}{2}}}{\\mathrm{e}^{x}}$ ,

有 $r^2 = \\frac{(\\mathrm{e}^{2x} + 1)^3}{\\mathrm{e}^{2x}} = \\mathrm{e}^{4x} + 3\\mathrm{e}^{2x} + 3 + \\mathrm{e}^{-2x}$

令 $t_1 = \\mathrm{e}^{2x_1}, t_2 = \\mathrm{e}^{2x_2}$ ，则有 $t_1^2 + 3t_1 + 3 + \\frac{1}{t_1} = t_2^2 + 3t_2 + 3 + \\frac{1}{t_2}$ ，

则 $(t_1 - t_2)\\left(t_1 + t_2 + 3 - \\frac{1}{t_1t_2}\\right) = 0$ ，故 $t_1 + t_2 + 3 - \\frac{1}{t_1t_2} = 0,$

因为 $x_{1} \\neq x_{2}$ , 所以 $t_{1} \\neq t_{2}$ , 所以有 $0 = t_{1} + t_{2} + 3 - \\frac{1}{t_{1}t_{2}} > 2\\sqrt{t_{1}t_{2}} + 3 - \\frac{1}{t_{1}t_{2}}$ ,

令 $t = \\sqrt{t_1t_2}$ ，则 $2t + 3 - \\frac{1}{t^2} < 0$ ，即 $0 > 2t^{3} + 3t^{2} - 1 = (t + 1)^{2}(2t - 1)$

故 $t < \\frac{1}{2}$ , 所以 $\\mathrm{e}^{x_1 + x_2} = \\sqrt{t_1 t_2} = t < \\frac{1}{2}$ , 即 $x_1 + x_2 < -\\ln 2$ .`,
      },
      {
        id: "prob-sec-4-5-7-sol-4",
        title: `解法三`,
        method: "standard",
        steps: [],
        explanation: `函数 $y = \\mathrm{e}^{x}$ 的图像在点 $(x, \\mathrm{e}^{x})$ 处的曲率半径 $r = \\frac{(\\mathrm{e}^{2x} + 1)^{\\frac{3}{2}}}{\\mathrm{e}^{x}}$ ,

故 $r^{\\frac{2}{3}} = \\mathrm{e}^{\\frac{4}{3} x} + \\mathrm{e}^{-\\frac{2}{3} x}$ , 设 $g(x) = \\mathrm{e}^{\\frac{4}{3} x} + \\mathrm{e}^{-\\frac{2}{3} x}$ , 则 $g'(x) = \\frac{4}{3} \\mathrm{e}^{\\frac{4}{3} x} - \\frac{2}{3} \\mathrm{e}^{-\\frac{2}{3} x} = \\frac{2}{3} \\mathrm{e}^{-\\frac{2}{3} x}(2 \\mathrm{e}^{2x} - 1)$ ,

所以当 $x \\in \\left(-\\infty, -\\frac{1}{2} \\ln 2\\right)$ 时 $g'(x) < 0$ ，当 $x \\in \\left(-\\frac{1}{2} \\ln 2, +\\infty\\right)$ 时 $g'(x) > 0$

所以 $g(x)$ 在 $\\left(-\\infty, -\\frac{1}{2}\\ln 2\\right)$ 上单调递减，在 $\\left(-\\frac{1}{2}\\ln 2, +\\infty\\right)$ 上单调递增，

故有 $x_{1} < -\\frac{1}{2}\\ln 2 < x_{2}$ , 所以 $x_{1}, -\\ln 2 - x_{2} \\in (-\\infty, -\\frac{1}{2}\\ln 2)$ ,

要证 $x_{1} + x_{2} < -\\ln 2$ ，即证 $x_{1} < -\\ln 2 - x_{2}$

即证 $g(x_{2})=g(x_{1})>g(-\\ln2-x_{2})$ .

下证：当 $x \\in \\left(-\\frac{1}{2} \\ln 2, +\\infty\\right)$ 时，有 $g(x) > g(-\\ln 2 - x)$ ，

设函数 $G(x) = g(x) - g(-\\ln 2 - x)\\left(\\text{其中} x > - \\frac{1}{2}\\ln 2\\right),$

则 $G^{\\prime}(x) = g^{\\prime}(x) + g^{\\prime}(-\\ln 2 - x) = \\frac{2}{3} (2\\mathrm{e}^{2x} - 1)(\\mathrm{e}^{\\frac{2}{3} x} - 2^{-\\frac{1}{3}})\\cdot \\mathrm{e}^{-\\frac{4}{3} x} > 0,$

故 $G(x)$ 单调递增， $G(x) > G\\left(-\\frac{1}{2}\\ln 2\\right) = 0$

故 $g(x_{2}) > g(-\\ln 2 - x_{2})$ ，所以 $x_{1} + x_{2} < -\\ln 2.$`,
      },
      {
        id: "prob-sec-4-5-7-sol-5",
        title: `解法四`,
        method: "standard",
        steps: [],
        explanation: `函数 $y = {\\mathrm{e}}^{x}$ 的图像在点 $\\left( {x,{\\mathrm{e}}^{x}}\\right)$ 处的曲率半径 $r = \\frac{{\\left( {\\mathrm{e}}^{2x} + 1\\right) }^{\\frac{3}{2}}}{\\mathrm{e}^{x}}$ ,

有 $r^2 = \\frac{(\\mathrm{e}^{2x} + 1)^3}{\\mathrm{e}^{2x}} = \\mathrm{e}^{4x} + 3\\mathrm{e}^{2x} + 3 + \\mathrm{e}^{-2x}$ ，设 $h(x) = \\mathrm{e}^{4x} + 3\\mathrm{e}^{2x} + 3 + \\mathrm{e}^{-2x}$ .

则有 $h'(x)=4\\mathrm{e}^{4x}+6\\mathrm{e}^{2x}-2\\mathrm{e}^{-2x}=2\\mathrm{e}^{-2x}\\left(\\mathrm{e}^{2x}+1\\right)^{2}(2\\mathrm{e}^{2x}-1)$ ,

所以当 $x \\in \\left(-\\infty, -\\frac{1}{2} \\ln 2\\right)$ 时 $h'(x) < 0$ ，当 $x \\in \\left(-\\frac{1}{2} \\ln 2, +\\infty\\right)$ 时 $h'(x) > 0$

故 $h(x)$ 在 $\\left(-\\infty, -\\frac{1}{2}\\ln 2\\right)$ 上单调递减，在 $\\left(-\\frac{1}{2}\\ln 2, +\\infty\\right)$ 上单调递增.

故有 $x_{1} < -\\frac{1}{2}\\ln 2 < x_{2}$ , 所以 $x_{1}, -\\ln 2 - x_{2} \\in (-\\infty, -\\frac{1}{2}\\ln 2)$ ,

要证 $x_{1}+x_{2}<-\\ln2$ ，即证 $x_{1}<-\\ln2-x_{2}$ ，

即证 $h(x_{2})=h(x_{1})>h(-\\ln2-x_{2})$ .

下证: 当 $x \\in \\left(-\\frac{1}{2} \\ln 2, +\\infty\\right)$ 时, 有 $h(x) > h(-\\ln 2 - x)$ .

设函数 $H(x) = h(x) - h(-\\ln 2 - x)$ （其中 $x > - \\frac{1}{2}\\ln 2$ ）

则 $H^{\\prime}(x) = h^{\\prime}(x) + h^{\\prime}(-\\ln 2 - x) = (2\\mathrm{e}^{2x} - 1)^{2}\\left(1 + \\frac{1}{2}\\mathrm{e}^{-2x} + \\frac{1}{4}\\mathrm{e}^{-4x}\\right) > 0,$

故 $H(x)$ 单调递增, 故 $H(x) > H\\left(-\\frac{1}{2}\\ln2\\right) = 0$ ,

故 $h(x_{2})>h(-\\ln2-x_{2})$ ，所以 $x_{1}+x_{2}<-\\ln2$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-5-8",
    topicId: "topic-sec-4-5",
    title: `对于函数 f(x)`,
    content: `对于函数 $f(x)$ ，若实数 $x_0$ 满足 $f(x_0) = x_0$ ，则称 $x_0$ 为 $f(x)$ 的不动点。已知 $a \\geqslant 0$ ，且 $f(x) = \\frac{1}{2} \\ln x + ax^2 + 1 - a$ 的不动点的集合为 $A$ 。以 $\\min M$ 和 $\\max M$ 分别表示集合 $M$ 中的最小元素和最大元素。
(1) 若 a=0，求 A 的元素个数及 maxA.

(2)当 A 恰有一个元素时,a 的取值集合记为 B.

(i)求B:

(ii) 若 $a = \\min B$ ，数列 $\\{a_n\\}$ 满足 $a_1 = 2, a_{n+1} = \\frac{f(a_n)}{a_n}$ ，集合 $C_n = \\left\\{\\sum_{k=1}^{n} |a_k - 1|, \\frac{4}{3}\\right\\}$ ， $n \\in \\mathbf{N}^*$ . 求证：对 $\\forall n \\in \\mathbf{N}^*$ ， $\\max C_n = \\frac{4}{3}$ .

讲解

(1) 当 a=0 时, $f(x)=\\frac{1}{2}\\ln x+1$ , 其定义域为 $(0,+\\infty)$ .

由 $f(x) = x$ 得 $\\frac{1}{2}\\ln x - x + 1 = 0.$ 设 $g(x) = \\frac{1}{2}\\ln x - x + 1$ ，则 $g^{\\prime}(x) = \\frac{1 - 2x}{2x},$

当 $x \\in \\left(0, \\frac{1}{2}\\right)$ 时， $g'(x) > 0$ ；当 $x \\in \\left(\\frac{1}{2}, +\\infty\\right)$ 时， $g'(x) < 0$ .

所以 $g(x)$ 在 $\\left(0,\\frac{1}{2}\\right)$ 上单调递增；在 $\\left(\\frac{1}{2},+\\infty\\right)$ 上单调递减.

注意到 $g(1) = 0$ ，所以 $g(x)$ 在 $\\left[\\frac{1}{2}, +\\infty\\right)$ 上恰有一个零点 $x = 1$

且 $g\\left(\\frac{1}{2}\\right) > g(1) = 0,$

又 $g(\\mathrm{e}^{-2}) = -\\mathrm{e}^{-2} < 0$ ，所以 $g(\\mathrm{e}^{-2})g\\left(\\frac{1}{2}\\right) < 0,$

所以 $g(x)$ 在 $\\left(0,\\frac{1}{2}\\right)$ 上恰有一个零点 $x_{0}$ ,

即 $f(x)$ 在 $\\left[\\frac{1}{2}, +\\infty\\right)$ 上恰有一个不动点 $x = 1$ ，在 $\\left(0, \\frac{1}{2}\\right)$ 上恰有一个不动点 $x = x_0$ 所以 $A = \\{x_0, 1\\}$ ，所以 $A$ 的元素个数为 2，又因为 $x_0 < 1$ ，所以 $\\max A = 1$

(2)解法一 (i)当a=0时,由(1)知,A有两个元素,不符合题意.

当 $a > 0$ 时， $f(x) = \\frac{1}{2} \\ln x + ax^2 + 1 - a$ ，其定义域为 $(0, +\\infty)$ ，

由 $f(x) = x$ 得 $\\frac{1}{2}\\ln x + ax^2 -x + 1 - a = 0.$

设 $h(x) = \\frac{1}{2}\\ln x + ax^2 -x + 1 - a,x\\in (0, + \\infty),$

则 $h^{\\prime}(x) = \\frac{1}{2x} + 2ax - 1 = \\frac{4ax^{2} - 2x + 1}{2x}$

设 $F(x) = 4ax^{2} - 2x + 1$ ，则 $\\Delta = 4 - 16a$

①当 $a \\geqslant \\frac{1}{4}$ 时， $\\Delta \\leqslant 0, F(x) \\geqslant 0, h'(x) \\geqslant 0$ ，所以 $h(x)$ 在 $(0, +\\infty)$ 上单调递增，

又 $h(1)=0$ ，所以 $h(x)$ 在 $(0,+\\infty)$ 上恰有一个零点 x=1，

即 $f(x)$ 在 $(0, +\\infty)$ 上恰有一个不动点 x = 1，符合题意.

② 当 $0 < a < \\frac{1}{4}$ 时， $\\Delta > 0$ ，故 $F(x)$ 恰有两个零点 $x_{1}, x_{2} (x_{1} < x_{2})$ .

又因为 $F(0)=1>0, F(1)=4a-1<0$ ，所以 $0<x_{1}<1<x_{2}$ ，

当 $x \\in (0, x_{1})$ 时， $F(x) > 0, h'(x) > 0$ ; 当 $x \\in (x_{1}, x_{2})$ 时， $F(x) < 0, h'(x) < 0$ ;

当 $x \\in (x_2, +\\infty)$ 时， $F(x) > 0, h'(x) > 0.$

所以 $h(x)$ 在 $(0,x_1)$ 上单调递增，在 $(x_{1},x_{2})$ 上单调递减，在 $(x_{2}, + \\infty)$ 上单调递增.

注意到 $h(1)=0$ ，所以 $h(x)$ 在 $(x_{1},x_{2})$ 上恰有一个零点 x=1，

且 $h(x_{1})>h(1)=0, h(x_{2})<h(1)=0,$

又 $x \\to 0$ 时， $h(x) \\to -\\infty$ ，所以 $h(x)$ 在 $(0, x_{1})$ 上恰有一个零点 $x'_{0}$ ，

从而 $f(x)$ 至少有两个不动点, 不符合题意.

所以 $a$ 的取值范围为 $\\left[\\frac{1}{4}, +\\infty\\right)$ , 即集合 $B = \\left[\\frac{1}{4}, +\\infty\\right)$ .

(ii)由(i)知, $B=\\left[\\frac{1}{4},+\\infty\\right)$ ,所以 $a=\\min B=\\frac{1}{4}$ ,

此时， $f(x)=\\frac{1}{2}\\ln x+\\frac{1}{4}x^{2}+\\frac{3}{4},h(x)=\\frac{1}{2}\\ln x+\\frac{1}{4}x^{2}-x+\\frac{3}{4},$

由(i)知, $h(x)$ 在 $(0,+\\infty)$ 上单调递增,

所以，当 x>1 时， $h(x)>h(1)=0$ ，所以 $f(x)>x$ ，即 $\\frac{f(x)}{x}>1$ ，

故若 $a_{n}>1$ ，则 $a_{n+1}>1$ ，因此，若存在正整数 N 使得 $a_{N}\\leqslant1$ ，

则 $a_{N-1} \\leqslant 1$ ，从而 $a_{N-2} \\leqslant 1$ ，

重复这一过程有限次后可得 $a_{1} \\leqslant 1$ ，与 $a_{1} = 2$ 矛盾，从而，对 $\\forall n \\in N^{*}, a_{n} > 1$ .

下面我们先证明当 x>1 时， $\\ln x<\\frac{3}{2}(x-1)$ ，

设 $G(x) = \\ln x - \\frac{3}{2} x + \\frac{3}{2}, x \\in (1, +\\infty)$ ，所以 $G'(x) = \\frac{1}{x} - \\frac{3}{2} = \\frac{2 - 3x}{2x} < 0$

所以 $G(x)$ 在 $(1, +\\infty)$ 上单调递减，所以 $G(x) < G(1) = 0$ ，

即当 $x > 1$ 时， $\\ln x < \\frac{3}{2} (x - 1)$ ，从而当 $x > 1$ 时， $\\frac{1}{2}\\ln x + \\frac{1}{4} x^2 + \\frac{3}{4} - x < \\frac{1}{4} x^2 - \\frac{1}{4} x$

从而 $\\frac{\\frac{1}{2}\\ln x + \\frac{1}{4}x^2 + \\frac{3}{4}}{x} - 1 < \\frac{1}{4}(x - 1)$ ，即 $\\frac{f(x)}{x} - 1 < \\frac{1}{4}(x - 1)$ ，

故 $\\frac{f(a_n)}{a_n} - 1 < \\frac{1}{4} (a_n - 1)$ ，即 $a_{n+1} - 1 < \\frac{1}{4} (a_n - 1)$ ，

由于 $a_{n} > 1, a_{n + 1} > 1$ ，所以 $a_{n} - 1 > 0, a_{n + 1} - 1 > 0$ ，故 $\\left|a_{n + 1} - 1\\right| < \\frac{1}{4}\\left|a_{n} - 1\\right|$ ，

故 $n \\geqslant 2$ 时， $\\left|a_{n} - 1\\right| < \\frac{1}{4}\\left|a_{n-1} - 1\\right| < \\frac{1}{4^{2}}\\left|a_{n-2} - 1\\right| < \\cdots < \\frac{1}{4^{n-1}}\\left|a_{1} - 1\\right| = \\frac{1}{4^{n-1}}$

所以 $\\forall n\\in \\mathbf{N}^*$ ， $\\sum_{k = 1}^{n}|a_{k} - 1|\\leqslant \\sum_{k = 1}^{n}\\frac{1}{4^{k - 1}} = \\frac{1 - \\frac{1}{4^n}}{1 - \\frac{1}{4}} = \\frac{4}{3}\\left(1 - \\frac{1}{4^n}\\right) <   \\frac{4}{3},$ 故 $\\max C_n = \\frac{4}{3}$`,
    preview: `对于函数 f(x) ，若实数 x_0 满足 f(x_0) = x_0 ，则称 x_0 为 f(x) 的不动点。已知 a ≥ 0 ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-8-sol-0",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `(i) 当 $x = 1$ 时, $\\frac{1}{2} \\ln x + ax^2 + 1 - a = 1 = x$ , 故 $x = 1$ 是 $f(x)$ 的一个不动点;

当 $x \\neq 1$ 时，由 $\\frac{1}{2} \\ln x + ax^2 + 1 - a = x$ ，得 $a = \\frac{\\frac{1}{2} \\ln x - x + 1}{1 - x^2} (*)$ ，要使得 $A$ 恰有一个元素，即方程 $\\frac{1}{2} \\ln x + ax^2 + 1 - a = x$ 有唯一解，因此方程 (\\*) 无实数解，

即直线 y=a 与曲线 $y=\\frac{\\frac{1}{2}\\ln x-x+1}{1-x^{2}}$ 无公共点.

令 $m(x) = \\frac{\\frac{1}{2}\\ln x - x + 1}{1 - x^2}$ , 则 $m'(x) = \\frac{x\\left(-x + \\ln x + \\frac{1}{2x^2} - \\frac{1}{x} + \\frac{3}{2}\\right)}{(1 - x^2)^2}$ ,

令 $n(x) = -x + \\ln x + \\frac{1}{2x^2} -\\frac{1}{x} +\\frac{3}{2} (x > 0),$

则 $n^{\\prime}(x) = -1 + \\frac{1}{x} -\\frac{1}{x^{3}} +\\frac{1}{x^{2}} = \\frac{-x^{3} + x^{2} + x - 1}{x^{3}} = \\frac{-(x - 1)^{2}(x + 1)}{x^{3}}\\leqslant 0,$

所以 $n(x)$ 在 $(0, +\\infty)$ 上单调递减，又因为 $n(1)=0$ ，

所以当 $x \\in (0,1)$ 时， $n(x) > 0$ ，当 $x \\in (1, +\\infty)$ 时， $n(x) < 0$ ，

所以，当 $x \\in (0,1)$ 时， $m'(x) > 0$ ，当 $x \\in (1, +\\infty)$ 时， $m'(x) < 0$ ，

所以， $m(x)$ 在 $(0,1)$ 上单调递增，在 $(1,+\\infty)$ 上单调递减，

令 $m_{1}(x) = \\frac{x - 1 - \\frac{1}{2}\\ln x}{x + 1}$ , 则 $m_{1}(1) = 0, m_{1}'(x) = \\frac{\\frac{1}{2}\\ln x - \\frac{1}{2x} + \\frac{3}{2}}{(x + 1)^{2}}$ ,

则 $\\lim_{x\\to 1}m(x) = \\lim_{x\\to 1}\\frac{\\frac{1}{2}\\ln x - x + 1}{1 - x^2} = \\lim_{x\\to 1}\\frac{\\frac{x - 1 - \\frac{1}{2}\\ln x}{x + 1}}{x - 1} = \\lim_{x\\to 1}\\frac{m_1(x) - m_1(1)}{x - 1} = m'_1(1) = \\frac{1}{4},$

又因为当 $x \\to 0$ 时， $m(x) \\to -\\infty$ ，当 $x \\to +\\infty$ 时， $m(x) \\to 0$ ，所以，曲线 $y = m(x)$ 的大致图像如图 4-5-3 所示.

由图可知, $a\\geqslant\\frac{1}{4}$ ,所以a的取值范围为 $\\left[\\frac{1}{4},+\\infty\\right)$ ,

即集合 $B=\\left[\\frac{1}{4},+\\infty\\right)$ .

![](images/9ae24387740864879a3ac0ce5a4b8d0be164b0c2de6cae73bfe1dbd40c13bd66.jpg)
图4-5-3

(ii)由(i)知, $B=\\left[\\frac{1}{4},+\\infty\\right)$ ,所以 $a=\\min B=\\frac{1}{4}$ ,

此时， $f(x)=\\frac{1}{2}\\ln x+\\frac{1}{4}x^{2}+\\frac{3}{4}$ ，令 $\\varphi(x)=\\frac{\\frac{1}{2}\\ln x+\\frac{1}{4}x^{2}+\\frac{3}{4}}{x}$

则 $\\varphi'(x)=\\frac{x^{2}-2\\ln x-1}{4x^{2}}$ ,

令 $t(x) = x^{2} - 2\\ln x - 1$ ，当 $x > 1$ 时， $t'(x) = 2x - \\frac{2}{x} = \\frac{2(x^2 - 1)}{x} > 0,$

所以 $t(x)$ 在 $(1, +\\infty)$ 上单调递增，所以当 x > 1 时， $t(x) > t(1) = 0$ ，所以 $\\varphi'(x) > 0$ ，所以， $\\varphi(x)$ 在 $(1, +\\infty)$ 上单调递增，所以 $\\varphi(x) > \\varphi(1) = 1$ ，

故若 $a_{n} > 1$ ，则 $a_{n + 1} > 1$

因此，若存在正整数 N 使得 $a_{N} \\leqslant 1$ ，则 $a_{N-1} \\leqslant 1$ ，从而 $a_{N-2} \\leqslant 1$ 。

重复这一过程有限次后可得 $a_1 \\leqslant 1$ ，与 $a_1 = 2$ 矛盾，从而，对 $\\forall n \\in \\mathbf{N}^*, a_n > 1$ .

下面先证明当 x>1 时， $\\ln x<\\frac{1}{2}\\left(x-\\frac{1}{x}\\right)$ .

令 $g(x) = \\frac{1}{2}\\left(x - \\frac{1}{x}\\right) - \\ln x$ ，则 $g'(x) = \\frac{1}{2}\\left(1 + \\frac{1}{x^2}\\right) - \\frac{1}{x} = \\frac{(x - 1)^2}{2x^2} \\geqslant 0,$

所以， $g(x)$ 在 $(0,+\\infty)$ 上单调递增，所以当x>1时， $g(x)>g(1)=0$ ，

所以，当 x>1 时， $\\ln x<\\frac{1}{2}\\left(x-\\frac{1}{x}\\right)$ ，

所以 $\\frac{f(x)}{x} - 1 = \\frac{\\frac{1}{2}\\ln x + \\frac{1}{4}x^2 + \\frac{3}{4} - x}{x} < \\frac{\\frac{1}{2}\\times\\frac{1}{2}\\left(x - \\frac{1}{x}\\right) + \\frac{1}{4}x^2 + \\frac{3}{4} - x}{x}$

$$
= \\frac {(x - 1) ^ {3}}{4 x ^ {2}} <   \\frac {1}{4} (x - 1),
$$

由于 $a_{n} > 1, a_{n + 1} > 1$ ，所以 $a_{n} - 1 > 0, a_{n + 1} - 1 > 0,$

故 $\\frac{f(a_n)}{a_n} - 1 < \\frac{1}{4} (a_n - 1)$ ，即 $a_{n + 1} - 1 < \\frac{1}{4} (a_n - 1)$ ，故 $|a_{n + 1} - 1| < \\frac{1}{4} |a_n - 1|$ ，

故 $n \\geqslant 2$ 时， $\\left|a_{n} - 1\\right| < \\frac{1}{4}\\left|a_{n-1} - 1\\right| < \\frac{1}{4^{2}}\\left|a_{n-2} - 1\\right| < \\cdots < \\frac{1}{4^{n-1}}\\left|a_{1} - 1\\right| = \\frac{1}{4^{n-1}}.$

所以 $\\forall n\\in \\mathbf{N}^*$ ， $\\sum_{k = 1}^{n}|a_{k} - 1|\\leqslant \\sum_{k = 1}^{n}\\frac{1}{4^{k - 1}} = \\frac{1 - \\frac{1}{4^n}}{1 - \\frac{1}{4}} = \\frac{4}{3}\\left(1 - \\frac{1}{4^n}\\right) <   \\frac{4}{3}$ 故 $\\max C_n = \\frac{4}{3}$

(ii)`,
      },
      {
        id: "prob-sec-4-5-8-sol-2",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `可得, $\\forall n \\in N^{*}, a_{n} > 1$ .

下面我们先证明当 x>1 时, $\\ln x<x-1$ .

设 $G(x) = \\ln x - x + 1$ ，则当 $x > 1$ 时， $G'(x) = \\frac{1}{x} - 1 = \\frac{1 - x}{x} < 0,$

所以 $G(x)$ 在 $(1, +\\infty)$ 上单调递减，所以 $G(x) < G(1) = 0$ ，即 $\\ln x < x - 1$ ，

从而当 x>1 时， $\\frac{1}{2}\\ln x<\\frac{1}{2}(x-1)<\\frac{3}{4}(x-1)$ ，

于是 $\\frac{1}{2}\\ln x + \\frac{1}{4} x^2 +\\frac{3}{4} -x <   \\frac{1}{4} x^2 -\\frac{1}{4} x,$

从而 $\\frac{\\frac{1}{2}\\ln x + \\frac{1}{4}x^2 + \\frac{3}{4}}{x} - 1 < \\frac{1}{4}(x - 1)$ ，即 $\\frac{f(x)}{x} - 1 < \\frac{1}{4}(x - 1)$ ，

故 $\\frac{f(a_n)}{a_n} - 1 < \\frac{1}{4} (a_n - 1)$ ，即 $a_{n+1} - 1 < \\frac{1}{4} (a_n - 1)$ ，

由于 $a_{n} > 1, a_{n + 1} > 1$ ，所以 $a_{n} - 1 > 0, a_{n + 1} - 1 > 0$ ，故 $|a_{n + 1} - 1| < \\frac{1}{4} |a_{n} - 1|$ ，

故 $n \\geqslant 2$ 时， $\\left|a_{n} - 1\\right| < \\frac{1}{4}\\left|a_{n-1} - 1\\right| < \\frac{1}{4^{2}}\\left|a_{n-2} - 1\\right| < \\cdots < \\frac{1}{4^{n-1}}\\left|a_{1} - 1\\right| = \\frac{1}{4^{n-1}}.$

所以对 $\\forall n\\in \\mathbf{N}^*$ ， $\\sum_{k = 1}^{n}|a_k - 1|\\leqslant \\sum_{k = 1}^{n}\\frac{1}{4^{k - 1}} = \\frac{1 - \\frac{1}{4^n}}{1 - \\frac{1}{4}} = \\frac{4}{3}\\left(1 - \\frac{1}{4^n}\\right) <   \\frac{4}{3}.$

故 $\\max C_{n}=\\frac{4}{3}.$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-5-9",
    topicId: "topic-sec-4-5",
    title: `定义: 如果在平面直角坐标系中, 点 A, B`,
    content: `定义: 如果在平面直角坐标系中, 点 A, B 的坐标分别为 $(x_{1}, y_{1})$ , $(x_{2}, y_{2})$ , 那么称 $d(A, B) = |x_{1} - x_{2}| + |y_{1} - y_{2}|$ 为 A, B 两点间的曼哈顿距离.
(1)已知点 $N_{1}, N_{2}$ 分别在直线 $x - 2y = 0, 2x - y = 0$ 上，点 $M(0,2)$ 与点 $N_{1}, N_{2}$ 的曼哈顿距离分别为 $d(M, N_{1}), d(M, N_{2})$ ，求 $d(M, N_{1})$ 和 $d(M, N_{2})$ 的最小值；

(2)已知点 N 是直线 $x + k^{2}y + 2k + 1 = 0 (k > 0)$ 上的动点，点 $M(0, 2)$ 与点 N 的曼哈顿距离 $d(M, N)$ 的最小值记为 $f(k)$ ，求 $f(k)$ 的最大值；

(3)已知点 $M(\\mathrm{e}^k, k\\mathrm{e}^k)$ ，点 $N(m, n)(k, m, n \\in \\mathbf{R}, \\mathrm{e}$ 是自然对数的底），当 $k \\leqslant 1$ 时， $d(M, N)$ 的最大值为 $f(m, n)$ ，求 $f(m, n)$ 的最小值.`,
    preview: `定义: 如果在平面直角坐标系中, 点 A, B 的坐标分别为 (x_1, y_1) , (x_2, y_2) , 那么称 为 A, B 两点间的曼哈顿距离. (`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-9-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) $d(M,N_{1})=|x|+|y-2|=|x|+\\left|\\frac{1}{2}x-2\\right|=\\begin{cases}-\\frac{3}{2}x+2,x<0,\\\\ \\frac{1}{2}x+2,0\\leqslant x<4,\\\\ \\frac{3}{2}x-2,x\\geqslant4,\\end{cases}$

则 $d(M,N_1)\\geqslant 2$ ，即 $d(M,N_1)$ 的最小值为2；

$$
d (M, N _ {2}) = | x | + | y - 2 | = | x | + | 2 x - 2 | = \\left\\{ \\begin{array}{l l} 2 - 3 x, x <   0, \\\\ 2 - x, 0 \\leqslant x <   1, \\\\ 3 x - 2, x \\geqslant 1, \\end{array} \\right.
$$

则 $d(M,N_2)\\geqslant 1$ ，即 $d(M,N_2)$ 的最小值为1.

(2) 当 $k^{2} \\geqslant 1$ 时, $d(M, N) = |x| + |y - 2|$ ,

点 $(x,y)$ 为直线 $x+k^{2}y+2k+1=0(k>0)$ 上一动点，则当 $k^{2}\\geqslant1$ 时，

$$
d (M, N) = | x | + \\left| \\frac {x}{k ^ {2}} + \\frac {2}{k} + \\frac {1}{k ^ {2}} + 2 \\right| \\geqslant \\left| \\frac {x}{k ^ {2}} \\right| + \\left| \\frac {x}{k ^ {2}} + \\frac {2}{k} + \\frac {1}{k ^ {2}} + 2 \\right| \\geqslant \\left| \\frac {2}{k} + \\frac {1}{k ^ {2}} + 2 \\right|,
$$

即 $f(k)=\\left|\\frac{2}{k}+\\frac{1}{k^{2}}+2\\right|$ ;

当 $k^2 < 1$ 时，

$$
d (M, N) = | x | + \\left| \\frac {x}{k ^ {2}} + \\frac {2}{k} + \\frac {1}{k ^ {2}} + 2 \\right| \\geqslant | x | + | x + 2 k + 1 + 2 k ^ {2} | \\geqslant | 2 k ^ {2} + 2 k + 1 |,
$$

即 $f(k)=\\left|2k^{2}+2k+1\\right|$ ;

所以， $f(k) = \\left\\{ \\begin{array}{l}\\left|\\frac{2}{k} +\\frac{1}{k^2} +2\\right|,k\\geqslant 1,\\\\ |2k^2 +2k + 1|,0 <   k <   1, \\end{array} \\right.$ 又当 $k\\geqslant 1$ 时， $\\left|\\frac{2}{k} +\\frac{1}{k^2} +2\\right|\\leqslant 5,$

当 0<k<1 时， $\\left|2k^{2}+2k+1\\right|<5$ ，所以 $f(k)$ 的最大值为 5.

(3)令 $x = \\mathrm{e}^k$ ，则 $ke^{k} = x\\ln x,0 <   x\\leqslant e,$

$$
d (M, N) = | \\mathrm{e} ^ {k} - m | + | k \\mathrm{e} ^ {k} - n | = \\max \\{| x + x \\ln x - m - n |, | x - x \\ln x - m + n | \\},
$$

令 $g(x)=x+x\\ln x,0<x\\leqslant e$ ，则 $g'(x)=2+\\ln x>0$ 在区间 $(e^{-2},e]$ 内成立，

则 $g(x)$ 在区间 $(\\mathrm{e}^{-2},\\mathrm{e}]$ 内单调递增，则 $-\\frac{1}{\\mathrm{e}^2} = g(\\mathrm{e}^{-2})\\leqslant g(x)\\leqslant g(\\mathrm{e}) = 2\\mathrm{e}$

令 $h(x)=x-x\\ln x,0<x\\leqslant e$ ，则 $h'(x)=-\\ln x<0$ 在区间 $(1,e]$ 内成立，

则 $h(x)$ 在区间 $(1, \\mathrm{e}]$ 内单调递减，则 $0 = h(\\mathrm{e}) \\leqslant h(x) \\leqslant g(1) = 1$

所以 $f(m,n) = \\max \\left\\{\\left| - \\frac{1}{\\mathrm{e}^2} - m - n \\right|, |2\\mathrm{e} - m - n|, |-m + n|, |1 - m + n|\\right\\}$ ,

所以 $f(m,n)\\geqslant \\max \\left\\{\\frac{\\left|2\\mathrm{e} - \\left(-\\frac{1}{\\mathrm{e}^2}\\right)\\right|}{2},\\frac{|1 - 0|}{2}\\right\\} = \\mathrm{e} + \\frac{1}{2\\mathrm{e}^2},$

当 $m+n=e-\\frac{1}{2e^{2}}$ 且 $-\\frac{1}{2e^{2}}<n<e-\\frac{1}{2}$ 时，取最小值， $f(m,n)$ 的最小值 $e+\\frac{1}{2e^{2}}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-5-10",
    topicId: "topic-sec-4-5",
    title: `置换是代数的基本模型, 定义域和值域都是集合 A = 1, 2, …, n, n ∈ N_+ 的函数称为 n 次置换`,
    content: `置换是代数的基本模型, 定义域和值域都是集合 $A = \\{1, 2, \\cdots, n\\}$ , $n \\in \\mathbf{N}_{+}$ 的函数称为 $n$ 次置换. 满足对任意 $i \\in A$ , $f(i) = i$ 的置换称作恒等置换. 所有 $n$ 次置换组成的集合记作 $S_{n}$ . 对于 $f(i) \\in S_{n}$ , 我们可用列表法表示此置换:
$$
f (i) = \\left( \\begin{array}{c c c c} 1 & 2 & \\dots & n \\\\ f (1) & f (2) & \\dots & f (n) \\end{array} \\right).
$$

记 $f(i)=f^{1}(i)$ , $f(f(i))=f^{2}(i)$ , $f(f^{2}(i))=f^{3}(i)$ , $\\cdots$ , $f(f^{k-1}(i))=f^{k}(i)$ , $i\\in A$ , $k\\in N_{+}$ .

(1) 若 $f(i) \\in S_{4}$ , $f(i) = \\begin{pmatrix} 1 & 2 & 3 & 4 \\\\ 4 & 2 & 1 & 3 \\end{pmatrix}$ , 计算 $f^{3}(i)$ ;

(2) 证明: 对任意 $f(i) \\in S_{4}$ ，存在 $k \\in N_{+}$ ，使得 $f^{k}(i)$ 为恒等置换；

（3）对编号从1到52的扑克牌进行洗牌，分成上下各26张两部分，互相交错插入，即第1张不动，第27张变为第2张，第2张变为第3张，第28张变为第4张，…，依次类推。这样操作最少重复几次就能恢复原来的牌型？请说明理由。`,
    preview: `置换是代数的基本模型, 定义域和值域都是集合 , n N_+ 的函数称为 n 次置换. 满足对任意 i A , f(i) = i 的置换称作恒等置换. 所有 n`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-10-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1) $f(i)=\\begin{pmatrix}1&2&3&4\\\\4&2&1&3\\end{pmatrix}$ ，由题意可知 $f^{2}(i)=\\begin{pmatrix}1&2&3&4\\\\3&2&4&1\\end{pmatrix}$ ,

$$
f ^ {3} (i) = \\left( \\begin{array}{c c c c} 1 & 2 & 3 & 4 \\\\ 1 & 2 & 3 & 4 \\end{array} \\right).
$$

(2)`,
      },
      {
        id: "prob-sec-4-5-10-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `① 若 $f(i) = \\begin{bmatrix} 1 & 2 & 3 & 4 \\\\ 1 & 2 & 3 & 4 \\end{bmatrix}$ ，则 $f^1(i)$ 为恒等置换；

②若存在两个不同的 $i$ ，使得 $f(i) = i$ ，不妨设 $i = 1,2$ ，则 $f(i) = \\begin{bmatrix} 1 & 2 & 3 & 4 \\\\ 1 & 2 & 4 & 3 \\end{bmatrix}$ .

所以 $f^{2}(i)=\\begin{pmatrix}1&2&3&4\\\\1&2&3&4\\end{pmatrix}$ ，即 $f^{2}(i)$ 为恒等置换；

③若存在唯一的 i，使得 $f(i)=i$ ，不妨设 i=2，

则 $f(i)=\\begin{pmatrix}1&2&3&4\\\\3&2&4&1\\end{pmatrix}$ 或 $f(i)=\\begin{pmatrix}1&2&3&4\\\\4&2&1&3\\end{pmatrix}$ .

当 $f(i)=\\begin{pmatrix}1&2&3&4\\\\4&2&1&3\\end{pmatrix}$ 时，由(1)可知 $f^{3}(i)$ 为恒等置换；

同理可知, 当 $f(i)=\\begin{pmatrix}1&2&3&4\\\\3&2&4&1\\end{pmatrix}$ 时, $f^{3}(i)$ 也是恒等置换;

④若对任意的 $i, f(i) \\neq i$ ,

则情形一： $f(i)=\\begin{pmatrix}1&2&3&4\\\\2&1&4&3\\end{pmatrix}$ 或 $f(i)=\\begin{pmatrix}1&2&3&4\\\\3&4&1&2\\end{pmatrix}$ 或 $f(i)=\\begin{pmatrix}1&2&3&4\\\\4&3&2&1\\end{pmatrix}$ ;

情形二: $f(i)=\\begin{pmatrix}1&2&3&4\\\\2&3&4&1\\end{pmatrix}$ 或 $f(i)=\\begin{pmatrix}1&2&3&4\\\\2&4&1&3\\end{pmatrix}$ 或 $f(i)=\\begin{pmatrix}1&2&3&4\\\\3&1&4&2\\end{pmatrix}$

或 $f(i) = \\begin{bmatrix} 1 & 2 & 3 & 4\\\\ 3 & 4 & 2 & 1 \\end{bmatrix}$ 或 $f(i) = \\begin{bmatrix} 1 & 2 & 3 & 4\\\\ 4 & 1 & 2 & 3 \\end{bmatrix}$ 或 $f(i) = \\begin{bmatrix} 1 & 2 & 3 & 4\\\\ 4 & 3 & 1 & 2 \\end{bmatrix}.$

对于情形一: $f^{2}(i)$ 为恒等置换；

对于情形二: $f^{4}(i)$ 为恒等置换.

综上，对任意 $f(i)\\in S_4$ ，存在 $k\\in \\mathbf{N}_{+}$ ，使得 $f^{k}(i)$ 为恒等置换.`,
      },
      {
        id: "prob-sec-4-5-10-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `对于任意 $i \\in \\{1, 2, 3, 4\\}$ , 都有 $f^{1}(i), f^{2}(i), f^{3}(i), f^{4}(i) \\in \\{1, 2, 3, 4\\}$ ,

所以 $f^{1}(i)$ , $f^{2}(i)$ , $f^{3}(i)$ , $f^{4}(i)$ 中, 至少有一个满足 $f^{k}(i)=i$ ,

即使得 $f^{k}(i)=i$ 的 k 的取值可能为 1,2,3,4.

当 i 分别取 1,2,3,4 时，记使得 $f^{k}(i)=i$ 的 k 值分别为 $k_{1}, k_{2}, k_{3}, k_{4}$ ,

只需取 k 为 $k_{1}, k_{2}, k_{3}, k_{4}$ 的最小公倍数即可.

所以对任意 $f(i)\\in S_4$ ，存在 $k\\in \\mathbf{N}_{+}$ ，使得 $f^{k}(i)$ 为恒等置换.

(3)不妨设原始牌型从上到下依次编号为1到52,则洗牌一次相当于对 $\\{1,2,\\ldots,52\\}$ 作一次如下置换：

$$
f (i) = \\left[ \\begin{array}{c c c c c c c} 1 & 2 & 3 & 4 & 5 & \\dots & 5 2 \\\\ 1 & 2 7 & 2 & 2 8 & 3 & \\dots & 5 2 \\end{array} \\right], \\text {即} f (i) = \\left\\{ \\begin{array}{l l} k, i = 2 k - 1, \\\\ 2 6 + k, i = 2 k, \\end{array} \\right. \\text {其中} k = 1, 2, \\dots , 2 6.
$$

注意到各编号在置换中的如下变化：

$$
1 \\xrightarrow {f} 1, 2 \\xrightarrow {f} 2 7 \\xrightarrow {f} 1 4 \\xrightarrow {f} 3 3 \\xrightarrow {f} 1 7 \\xrightarrow {f} 9 \\xrightarrow {f} 5 \\xrightarrow {f} 3 \\xrightarrow {f} 2,
$$

$$
4 \\xrightarrow {f} 2 8 \\xrightarrow {f} 4 0 \\xrightarrow {f} 4 6 \\xrightarrow {f} 4 9 \\xrightarrow {f} 2 5 \\xrightarrow {f} 1 3 \\xrightarrow {f} 7 \\xrightarrow {f},
$$

$$
6 \\xrightarrow {f} 2 9 \\xrightarrow {f} 1 5 \\xrightarrow {f} 8 \\xrightarrow {f} 3 0 \\xrightarrow {f} 4 1 \\xrightarrow {f} 2 1 \\xrightarrow {f} 1 1 \\xrightarrow {f},
$$

$$
1 0 \\xrightarrow {f} 3 1 \\xrightarrow {f} 1 6 \\xrightarrow {f} 3 4 \\xrightarrow {f} 4 3 \\xrightarrow {f} 2 2 \\xrightarrow {f} 3 7 \\xrightarrow {f} 1 9 \\xrightarrow {f} 1 0,
$$

$$
1 2 \\xrightarrow {f} 3 2 \\xrightarrow {f} 4 2 \\xrightarrow {f} 4 7 \\xrightarrow {f} 2 4 \\xrightarrow {f} 3 8 \\xrightarrow {f} 4 5 \\xrightarrow {f} 2 3 \\xrightarrow {f} 1 2,
$$

$$
1 8 \\xrightarrow {f} 3 5 \\xrightarrow {f} 1 8,
$$

$$
2 0 \\xrightarrow {f} 3 6 \\xrightarrow {f} 4 4 \\xrightarrow {f} 4 8 \\xrightarrow {f} 5 0 \\xrightarrow {f} 5 1 \\xrightarrow {f} 2 6 \\xrightarrow {f} 3 9 \\xrightarrow {f} 2 0,
$$

$$
5 2 \\xrightarrow {f} 5 2,
$$

所有编号在连续置换中只有三种循环:一阶循环2个,二阶循环2个,八阶循环48个,注意到1,2,8的最小公倍数为8,由此可见,最少8次这样的置换即为恒等置换,故这样洗牌最少8次就能恢复原来的牌型.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-5-11",
    topicId: "topic-sec-4-5",
    title: `我们知道通过牛顿莱布尼茨公式,可以求曲线梯形(如图`,
    content: `我们知道通过牛顿莱布尼茨公式,可以求曲线梯形(如图 4-5-4 所示阴影部分)的面积 $A = \\begin{cases} \\int_{a}^{b} f(x) \\mathrm{d}x, & f(x) > 0, \\\\ -\\int_{a}^{b} f(x) \\mathrm{d}x, & f(x) < 0, \\end{cases}$
其中 $\\int_{a}^{b}f(x)\\mathrm{d}x = F(b) - F(a),F'(x) = f(x).$

如果平面图形由两条曲线围成(如图4-5-5所示阴影部分)，曲线 $C_1$ 可以表示为 $y = f_{1}(x)$ ，曲线 $C_2$ 可以表示为 $y = f_{2}(x)$ ，那么阴影区域的面积 $A = \\int_{a}^{b}(f_{2}(x) - f_{1}(x))\\mathrm{d}x$ 其中 $\\int_{a}^{b}(f_{2}(x) - f_{1}(x))\\mathrm{d}x = \\int_{a}^{b}f_{2}(x)\\mathrm{d}x - \\int_{a}^{b}f_{1}(x)\\mathrm{d}x.$

![](images/fcff0f5b5d2a209ea737461a75f83257402832497b837642cd44c3146c122b70.jpg)

图4-5-4

![](images/a2930f4a1de92a49c1c9695442c74004464ec387c1411ce266875b3d6d540cd0.jpg)

图4-5-5

（1）如图4-5-6所示，连续函数 $y = f(x)$ 在区间 $[-3, -2]$ 与[2,3]的图形分别为直径为1的上、下半圆周，在区间 $[-2, 0]$ 与[0,2]的图形分别为直径为2的下、上半圆周，设 $F(x) = \\int_{0}^{x} f(t) \\, \\mathrm{d}t$ . 求 $\\frac{5}{4} F(2) - F(3)$ 的值.

![](images/0c35610945a3a317d542cb1181ccb0889cdfd5b5e4acfb3e932adda1c7f8503c.jpg)
图4-5-6

(2)在曲线 $f(x)=x^{2}(x\\geqslant0)$ 上某一个点处作切线,使之与曲线和 x 轴所围成的图形面积为 $\\frac{1}{12}$ ,求切线方程.
(3)正项数列 $\\{b_{n}\\}$ 是以公差为d(d为常数,d>0)的等差数列, $b_{1}=1$ ,两条抛物线 $y=b_{n}x^{2}+\\frac{1}{b_{n}},y=b_{n+1}x^{2}+\\frac{1}{b_{n+1}}(n\\in\\mathbf{N}_{+})$ ,记它们交点的横坐标的绝对值为 $a_{n}$ ,两条抛物线围成的封闭图形的面积为 $S_{n}$ ,求证: $\\frac{S_{1}}{a_{1}}+\\frac{S_{2}}{a_{2}}+\\cdots+\\frac{S_{n}}{a_{n}}<\\frac{4}{3}$ .`,
    preview: `我们知道通过牛顿莱布尼茨公式,可以求曲线梯形(如图 4-5-4 所示阴影部分)的面积 其中 如果平面图形由两条曲线围成(如图4-5-5所示阴影部分)，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-11-sol-0",
        title: `解答`,
        method: "creative",
        steps: [],
        explanation: `（1）由题意可知 $F(2)=\\int_{0}^{2}f(t)\\mathrm{d}t=\\frac{\\pi}{2},F(3)=\\int_{0}^{3}f(t)\\mathrm{d}t=\\frac{\\pi}{2}-\\frac{\\pi}{8}=\\frac{3}{8}\\pi,$

所以 $\\frac{5}{4}F(2)-F(3)=\\frac{5}{4}\\cdot\\frac{\\pi}{2}-\\frac{3}{8}\\pi=\\frac{\\pi}{4}.$

(2)设切点为 $A(x_{0},x_{0}^{2})$ , $C(x_{0},0)$ ，切线的斜率为 $y' = 2x_{0}$ ,

则切线方程为 $y - x_0^2 = 2x_0(x - x_0)$ ，所以切线与 $x$ 轴的交点为 $B\\left(\\frac{x_0}{2}, 0\\right)$ ，

由题意可知围成的图形面积 $S=\\int_{0}^{x_{0}}x^{2}dx-S_{\\triangle ABC}=\\frac{1}{3}x_{0}^{3}-\\frac{1}{4}x_{0}\\cdot x_{0}^{2}=\\frac{1}{12}\\Rightarrow x_{0}=1$ ，
所以切点坐标为 A(1,1)，切线方程为 y=2x-1.

(3)联立 $\\left\\{\\begin{aligned}y&=b_{n}x^{2}+\\frac{1}{b_{n}}\\\\ y&=b_{n+1}x^{2}+\\frac{1}{b_{n+1}}\\end{aligned}\\right.\\Rightarrow a_{n}=\\left(\\frac{1}{b_{n}b_{n+1}}\\right)^{\\frac{1}{2}},$

由对称性可知,两条抛物线围成的封闭图形的面积为

$$
S _ {n} = 2 \\int_ {0} ^ {a _ {n}} \\left[ b _ {n} x ^ {2} + \\frac {1}{b _ {n}} - \\left(b _ {n + 1} x ^ {2} + \\frac {1}{b _ {n + 1}}\\right) \\right] \\mathrm{d} x = 2 \\int_ {0} ^ {a _ {n}} \\left(- d x ^ {2} + \\frac {d}{b _ {n} b _ {n + 1}}\\right) \\mathrm{d} x,
$$

令 $f(x) = -dx^{2} + \\frac{d}{b_{n}b_{n + 1}},F^{\\prime}(x) = f(x)\\Rightarrow F(x) = -\\frac{d}{3} x^{3} + \\frac{dx}{b_{n}b_{n + 1}} +C(C$ 为常数），

所以 $\\int_0^{a_n}f(x)\\mathrm{d}x = F(a_n) - F(0) = -\\frac{d}{3} a_n^3 +\\frac{da_n}{b_nb_{n + 1}} = \\frac{2d}{3}\\Big(\\frac{1}{b_nb_{n + 1}}\\Big)^{\\frac{3}{2}},$

所以 $S_{n}=\\frac{4d}{3}\\left(\\frac{1}{b_{n}b_{n+1}}\\right)^{\\frac{3}{2}}$ ，所以 $\\frac{S_{n}}{a_{n}}=\\frac{4d}{3}\\cdot\\frac{1}{b_{n}b_{n+1}}=\\frac{4}{3}\\left(\\frac{1}{b_{n}}-\\frac{1}{b_{n+1}}\\right)$

则 $\\frac{S_{1}}{a_{1}}+\\frac{S_{2}}{a_{2}}+\\cdots+\\frac{S_{n}}{a_{n}}=\\frac{4}{3}\\left(\\frac{1}{b_{1}}-\\frac{1}{b_{2}}+\\frac{1}{b_{2}}-\\frac{1}{b_{3}}+\\cdots+\\frac{1}{b_{n}}-\\frac{1}{b_{n+1}}\\right)=\\frac{4}{3}\\left(\\frac{1}{b_{1}}-\\frac{1}{b_{n+1}}\\right)<\\frac{4}{3}.$

小结：

1. 通过举例子的方式, 将抽象的定义转化为具体的简单应用, 从而加深对信息的理解;
2. 能用数学语言清晰描述新信息所表达的内容；
3. 发现新信息与所学知识的联系，并从描述中体会信息的本质特征与规律；
4. 如果新信息是课本知识的推广, 则要关注此信息与课本中概念的不同之处, 以及什么情况下可以使用课本的概念.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-5-1-11",
    topicId: "topic-sec-4-5",
    title: `已知有 N(N>30) 名热心参与问卷的顾客`,
    content: `已知有 $N(N>30)$ 名热心参与问卷的顾客, 某平台决定在直播中专门为他们设置两次抽奖活动, 每次抽奖都是由系统独立、随机地从这 N 名顾客中抽取 20 名顾客, 抽中的顾客会有礼品赠送, 若直播时这 N 名顾客都在线, 记两次抽奖中被抽中的顾客总人数为 X (不重复计数).
(1)若甲是这 N 名顾客中的一人,且甲被抽中的概率为 $\\frac{9}{25}$ , 求 N;

(2) 求使 $P(X=30)$ 取得最大值时的整数 N.`,
    preview: `已知有 N(N>30) 名热心参与问卷的顾客, 某平台决定在直播中专门为他们设置两次抽奖活动, 每次抽奖都是由系统独立、`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-1-11-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 记 A=“甲被抽中”， $A_{i}=$ “甲第 i 次被抽中” $(i=1,2)$ ，

则 $P(\\overline{A})=P(\\overline{A_{1}A_{2}})=\\frac{C_{N-1}^{20}}{C_{N}^{20}}\\cdot\\frac{C_{N-1}^{20}}{C_{N}^{20}}=\\frac{N-20}{N}\\cdot\\frac{N-20}{N}=\\frac{16}{25}$ ，解得 N=100.

(2) 由于 $P(X = 30) = \\frac{C_N^{20} C_{N-20}^{10} C_{20}^{10}}{C_N^{20} C_N^{20}} = \\frac{C_{N-20}^{10} C_{20}^{10}}{C_N^{20}}$ , 记 $f(N) = \\frac{C_{N-20}^{10}}{C_N^{20}}$ , 即求 $f(N)$ 在何时取到最大值, 下面讨论 $f(N)$ 的单调性:

$$
\\begin{array}{l} \\frac {f (N + 1)}{f (N)} = \\frac {C _ {N - 1 9} ^ {1 0} C _ {N} ^ {2 0}}{C _ {N + 1} ^ {2 0} C _ {N - 2 0} ^ {1 0}} = \\frac {\\frac {(N - 1 9) !}{1 0 ! (N - 2 9) !} \\cdot \\frac {N !}{2 0 ! (N - 2 0) !}}{\\frac {(N + 1) ^ {2}}{2 0 ! (N - 1 9) !} \\cdot \\frac {(N - 2 0) !}{1 0 ! (N - 3 0) !}} \\\\ = \\frac {(N - 1 9) (N - 1 9)}{(N + 1) (N - 2 9)} \\leqslant 1 \\Rightarrow N \\geqslant 3 9, \\\\ \\end{array}
$$

$\\frac{f(N - 1)}{f(N)}\\leqslant 1\\Rightarrow N\\leqslant 40$ ，解得 $39\\leqslant N\\leqslant 40$

所以，当 N=39 或 40 时， $P(X=30)$ 取到最大值.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-5-2-12",
    topicId: "topic-sec-4-5",
    title: `现有 2n 个编号为 1,2,·s,2n(n^*,n≥qsl`,
    content: `现有 2n 个编号为 $1,2,\\cdots,2n(n\\in\\mathbb{N}^{*},n\\geqslant2)$ 的小球，随机将它们分成甲、乙两组，每组 n 个。设甲组中小球的最小编号为 $a_{1}$ ，最大编号为 $a_{2}$ ；乙组中小球的最小编号为 $b_{1}$ ，最大编号为 $b_{2}$ ，记 $\\xi=a_{2}-a_{1},\\eta=b_{2}-b_{1}$ 。
(1) 当 n=3 时, 求 $\\xi$ 的分布列和数学期望.

(2)令 A 表示“事件 $\\xi$ 与 $\\eta$ 的取值恰好相等”.

① 求事件 A 发生的概率 $P_{n}(A)$ ;
② 证明： $\\frac{1}{6}<P_{n}(A)\\leqslant\\frac{2}{3}.$`,
    preview: `现有 2n 个编号为 1,2,·s,2n(n^*,n≥2) 的小球，随机将它们分成甲、乙两组，每组 n 个。设甲组中小球的最小编号为 a_1 ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-2-12-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1) $\\xi$ 可取 $2,3,4,5$ , 则 $P(\\xi = 2) = \\frac{4}{C_6^3} = \\frac{1}{5}, P(\\xi = 3) = \\frac{6}{C_6^3} = \\frac{3}{10}$ ,

$P(\\xi = 4) = \\frac{6}{C_6^3} = \\frac{3}{10}, P(\\xi = 5) = \\frac{4}{C_6^3} = \\frac{1}{5}$ , 于是

<table><tr><td>ξ</td><td>2</td><td>3</td><td>4</td><td>5</td></tr><tr><td>P</td><td>1/5</td><td>3/10</td><td>3/10</td><td>1/5</td></tr></table>

$$
E (\\xi) = \\frac {2}{5} + \\frac {9}{1 0} + \\frac {1 2}{1 0} + \\frac {5}{5} = \\frac {7}{2}.
$$

(2)①`,
      },
      {
        id: "prob-sec-4-5-2-12-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `$\\xi$ 和 $\\eta$ 恰好相等的所有可能取值为: $n-1, n, n+1, \\cdots, 2n-2$ .

又 $\\xi$ 和 $\\eta$ 恰好相等且等于 n-1 时, 不同的分组方法有 2 种,

$\\xi$ 和 $\\eta$ 恰好相等且等于 n 时, 不同的分组方法有 2 种,

$\\xi$ 和 $\\eta$ 恰好相等且等于 $n+k(k=1,2,3,\\cdots,n-2)(n\\geqslant3)$ 时，不同的分组方法有 $2C_{2k}^{k}$ 种，

所以当 n=2 时， $P_{2}(A)=\\frac{4}{6}=\\frac{2}{3}$ ;

当 $n \\geqslant 3, n \\in \\mathbf{N}^*$ 时， $P_n(A) = \\frac{2(2 + \\sum_{k=1}^{n-2} C_{2k}^k)}{C_{2n}^n}$ .`,
      },
      {
        id: "prob-sec-4-5-2-12-sol-2",
        title: `解法二`,
        method: "creative",
        steps: [],
        explanation: `$\\xi$ 与 $\\eta$ 的取值恰好相等的情形可以这样构造：

第一类，M从1取到n，或者N从1取到n，共2种分组方法；

第二类, 将 $1,2,\\cdots,2n$ 分成 3 段, 第一段为 $1,2,\\cdots,k$ , 第二段为 $k+1,\\cdots,2n-k$ , 第三段为 $2n-k+1,\\cdots,2n$ , 其中 $k\\leqslant n-1$ . 接下来通过四步完成分配:

第一步，将第一段全部分配给 M，将第三段全部分配给 N；

第二步，将中间一段中的第一个数分配给 N，最后一个数分配给 M；

第三步，将中间一段剩下的 2n-2k-2 个数平均分成两组，分别分配给 M 和 N；

第四步，在前面三步得到的分配方法的基础上，再交换 $M$ 组和 $N$ 组的所有数，得到新的分配方法.

综上，使 $\\xi$ 与 $\\eta$ 的取值恰好相等的所有可能的分配方法数为

$2 + 2\\sum_{k = 1}^{n - 1}\\mathrm{C}_{2n - 2k - 2}^{n - k - 1}$ ，即 $2\\left(1 + \\sum_{k = 0}^{n - 2}\\mathrm{C}_{2k}^{k}\\right)$ ，其中定义 $\\mathrm{C_0^0 = 1}$

因此所求的概率为 $P_{n}(A)=\\left\\{\\begin{aligned}&\\frac{2}{3},&n=2,\\\\ &\\frac{2}{C_{2n}^{n}}\\cdot(2+\\sum_{k=1}^{n-2}C_{2k}^{k}),&n\\geqslant3.\\end{aligned}\\right.$

②先证： $n \\geqslant 3$ 时， $P_{n}(A)$ 单调递减，即证：

$$
\\begin{array}{l} \\frac {1 + 1 + C _ {2} ^ {1} + C _ {4} ^ {2} + \\cdots + C _ {2 n - 4} ^ {n - 2}}{C _ {2 n} ^ {n}} > \\frac {1 + 1 + C _ {2} ^ {1} + C _ {4} ^ {2} + \\cdots + C _ {2 n - 4} ^ {n - 2} + C _ {2 n - 2} ^ {n - 1}}{C _ {2 n + 2} ^ {n + 1}} \\\\ \\Leftrightarrow C _ {2 n + 2} ^ {n + 1} (1 + 1 + C _ {2} ^ {1} + C _ {4} ^ {2} + \\dots + C _ {2 n - 4} ^ {n - 2}) > C _ {2 n} ^ {n} (1 + 1 + C _ {2} ^ {1} + C _ {4} ^ {2} + \\dots + C _ {2 n - 4} ^ {n - 2}) + C _ {2 n} ^ {n} C _ {2 n - 2} ^ {n - 1}. \\\\ \\end{array}
$$

因为 $C_{2n + 2}^{n + 1} = \\frac{(2n + 2)!}{[(n + 1)!]^2} = \\frac{(2n + 2)(2n + 1)}{(n + 1)^2} C_{2n}^n = \\frac{4n + 2}{n + 1} C_{2n}^n,$

同理可得 $C_{2n}^{n} = \\frac{4n - 2}{n} C_{2n - 2}^{n - 1}$

所以原问题即证： $\\frac{3n+1}{n+1}C_{2n}^{n}(1+1+C_{2}^{1}+C_{4}^{2}+\\cdots+C_{2n-4}^{n-2})>C_{2n}^{n}C_{2n-2}^{n-1}$

$$
\\Leftrightarrow 1 + 1 + C _ {2} ^ {1} + C _ {4} ^ {2} + \\dots + C _ {2 n - 4} ^ {n - 2} > \\frac {n + 1}{3 n + 1} C _ {2 n - 2} ^ {n - 1}.
$$

接下来再用数学归纳法证明此结论.

当 n=3 时，结论显然成立.

假设当 n=k 时，结论成立，即 $1+1+C_{2}^{1}+C_{4}^{2}+\\cdots+C_{2k-4}^{k-2}>\\frac{k+1}{3k+1}C_{2k-2}^{k-1}$

则当 $n = k + 1$ 时，

$$
1 + 1 + C _ {2} ^ {1} + C _ {4} ^ {2} + \\dots + C _ {2 k - 4} ^ {k - 2} + C _ {2 k - 2} ^ {k - 1} > \\frac {k + 1}{3 k + 1} C _ {2 k - 2} ^ {k - 1} + C _ {2 k - 2} ^ {k - 1} = \\frac {4 k + 2}{3 k + 1} C _ {2 k - 2} ^ {k - 1}.
$$

这就需要证明 $\\frac{4k + 2}{3k + 1} C_{2k - 2}^{k - 1} > \\frac{k + 2}{3k + 4} C_{2k}^k,$

即证 $\\frac{4k+2}{3k+1}C_{2k-2}^{k-1}>\\frac{k+2}{3k+4}\\cdot\\frac{4k-2}{k}C_{2k-2}^{k-1}$

亦即证 $\\frac{4k+2}{3k+1}>\\frac{k+2}{3k+4}\\cdot\\frac{4k-2}{k}$ ，等价于 $14k+4>0$ ，故显然成立，

于是得到 $1+1+C_{2}^{1}+C_{4}^{2}+\\cdots+C_{2k-2}^{k-1}>\\frac{k+2}{3k+4}C_{2k}^{k}$ 也成立.

由归纳原理知,对任意 $n \\geqslant 3$ ，不等式 $1 + 1 + C_{2}^{1} + C_{4}^{2} + \\cdots + C_{2n-4}^{n-2} > \\frac{n+1}{3n+1}C_{2n-2}^{n-1}$ 都成立.

综上所述，当 $n \\geqslant 3$ 时， $P_{n}(A)$ 单调递减.

又 $P_{3}(A) = \\frac{2}{5} < \\frac{2}{3} = P_{2}(A)$ ，故当 $n \\geqslant 2$ 时， $P_{n}(A)$ 单调递减.

因此， $P_{n}(A)\\leqslant \\frac{2}{3}$

另一方面，由于 $C_{2n}^{n} = \\frac{4n - 2}{n} C_{2n - 2}^{n - 1}$ ，即 $C_{2n - 2}^{n - 1} = \\frac{n}{4n - 2} C_{2n}^{n}$ ，从而 $C_{2n - 2}^{n - 1} > \\frac{1}{4} C_{2n}^{n}$

由此可得 $C_{2n-4}^{n-2} > \\frac{1}{4^{2}} C_{2n}^{n}, C_{2n-6}^{n-3} > \\frac{1}{4^{3}} C_{2n}^{n}, C_{2n-8}^{n-4} > \\frac{1}{4^{4}} C_{2n}^{n}, \\cdots, C_{2}^{1} > \\frac{1}{4^{n-1}} C_{2n}^{n}.$

根据 $P_{n}(A)=2\\cdot\\frac{1+1+C_{2}^{1}+C_{4}^{2}+\\cdots+C_{2n-4}^{n-2}}{C_{2n}^{n}}=\\frac{4}{C_{2n}^{n}}+2\\cdot\\frac{C_{2}^{1}+C_{4}^{2}+\\cdots+C_{2n-4}^{n-2}}{C_{2n}^{n}}$ ，得

$$
P _ {n} (A) > 2 \\cdot \\frac {C _ {2} ^ {1} + C _ {4} ^ {2} + \\cdots + C _ {2 n - 4} ^ {n - 2}}{C _ {2 n} ^ {n}} > 2 \\cdot \\frac {\\left(\\frac {1}{4 ^ {n - 1}} + \\frac {1}{4 ^ {n - 2}} + \\frac {1}{4 ^ {n - 3}} + \\cdots + \\frac {1}{4 ^ {2}}\\right) C _ {2 n} ^ {n}}{C _ {2 n} ^ {n}},
$$

即 $P_{n}(A) > 2\\left(\\frac{1}{4^{n - 1}} +\\frac{1}{4^{n - 2}} +\\frac{1}{4^{n - 3}} +\\dots +\\frac{1}{4^{2}}\\right),$

从而 $\\lim_{n\\to +\\infty}P_n(A) > 2\\lim_{n\\to +\\infty}\\left(\\frac{1}{4^{n - 1}} +\\frac{1}{4^{n - 2}} +\\frac{1}{4^{n - 3}} +\\dots +\\frac{1}{4^2}\\right) = 2\\cdot \\frac{\\frac{1}{4^2}}{1 - \\frac{1}{4}} = \\frac{1}{6}.$

因此， $\\frac{1}{6}<P_{n}(A)\\leqslant\\frac{2}{3}.$

评注 本题是杭州二中2024届高三6月适应性考试的最后一题,将数列与概率等知识点融合在一起.该题的表述简单明了,但对分析问题的能力提出了更高的要求.解决本题需要用到排列组合、算两次、数学归纳法等基本方法,极具综合性与创新性.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-5-3-13",
    topicId: "topic-sec-4-5",
    title: `某校开展科普知识团队接力闯关活动`,
    content: `（2024广州一模）某校开展科普知识团队接力闯关活动，该活动共有两关，每个团队由 $n(n\\geqslant 3,n\\in \\mathbf{N}^*)$ 位成员组成，成员按预先安排的顺序依次上场，具体规则如下：若某成员第一关闯关成功，则该成员继续闯第二关，否则该成员结束闯关并由下一位成员接力去闯第一关；若某成员第二关闯关成功，则该团队接力闯关活动结束，否则该成员结束闯关并由下一位成员接力去闯第二关；当第二关闯关成功或所有成员全部上场参加了闯关，该团队接力闯关活动结束.已知 $A$ 团队每位成员闯过第一关和第二关的概率分别为 $\\frac{3}{4}$ 和 $\\frac{1}{2}$ ，且每位成员闯关是否成功互不影响，每关结果也互不影响.
(1) 若 n=3，用 X 表示 A 团队闯关活动结束时上场闯关的成员人数，求 X 的均值；

(2) 记 $A$ 团队第 $k (1 \\leqslant k \\leqslant n - 1, k \\in \\mathbf{N}^{*})$ 位成员上场且闯过第二关的概率为 $p_{k}$ , 集合 $\\left\\{k \\in \\mathbf{N}^{*} \\mid p_{k} < \\frac{3}{128}\\right\\}$ 中元素的最小值为 $k_{0}$ , 规定团队人数 $n = k_{0} + 1$ , 求 $n$ .`,
    preview: `某校开展科普知识团队接力闯关活动，该活动共有两关，每个团队由 n(n≥ 3,n N^*) 位成员组成，成员按预先安排的顺序依次上场，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-3-13-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)依题意,X的所有可能取值为1,2,3,

$$
P (X = 1) = \\frac {3}{4} \\times \\frac {1}{2} = \\frac {3}{8}, P (X = 2) = \\frac {1}{4} \\times \\frac {3}{8} + \\frac {3}{4} \\times \\frac {1}{2} \\times \\frac {1}{2} = \\frac {9}{3 2},
$$

$$
P (X = 3) = 1 - \\frac {3}{8} - \\frac {9}{3 2} = \\frac {1 1}{3 2},
$$

所以 $X$ 的分布列为：

<table><tr><td>X</td><td>1</td><td>2</td><td>3</td></tr><tr><td>P</td><td>3/8</td><td>9/32</td><td>11/32</td></tr></table>

数学期望 $E(X) = \\frac{3}{8} +\\frac{9}{16} +\\frac{33}{32} = \\frac{63}{32}$

(2)令 $p=\\frac{3}{4}, q=\\frac{1}{2}$ ，若前 $(k-1)$ 位玩家都没有闯过第一关，

其概率为 $(p_{k})_{1}=(1-p)^{k-1}pq=\\left(\\frac{1}{4}\\right)^{k-1}\\cdot\\frac{3}{4}\\cdot\\frac{1}{2}=\\frac{3}{2\\cdot4^{k}}$

若前 $(k-1)$ 位玩家中第 $i(1\\leqslant i\\leqslant k-1)$ 位玩家才闯过第一关，

则前面 $i - 1$ 位玩家无人闯过第一关，其概率为 $(1 - p)^{i - 1}$ ，第 $i$ 位玩家闯过第一关，但没有闯过第二关，其概率为 $p(1 - q)$ ，

第 $i+1$ 位玩家到第 k-1 位玩家都没有闯过第二关，其概率为 $(1-q)^{k-i-1}$ ，

所以前面 $(k-1)$ 位玩家中恰有一人闯过第一关的概率为：

$$
\\begin{array}{l} (p _ {k}) _ {2} = \\sum_ {i = 1} ^ {k - 1} (1 - p) ^ {i - 1} p (1 - q) (1 - q) ^ {k - i - 1} q = p q (1 - q) ^ {k - 1} \\cdot \\sum_ {i = 1} ^ {k - 1} \\left(\\frac {1 - p}{1 - q}\\right) ^ {i - 1} \\\\ = \\frac {3}{8} \\left(\\frac {1}{2}\\right) ^ {k - 1} \\sum_ {i = 1} ^ {k - 1} \\left(\\frac {1}{2}\\right) ^ {i - 1} = \\frac {3}{8} \\cdot \\left(\\frac {1}{2}\\right) ^ {k - 1} \\cdot \\frac {1 \\cdot \\left[ 1 - \\left(\\frac {1}{2}\\right) ^ {k - 1} \\right]}{1 - \\frac {1}{2}} = \\frac {3}{2 ^ {k + 1}} \\left[ 1 - \\left(\\frac {1}{2}\\right) ^ {k - 1} \\right], \\\\ \\end{array}
$$

因此第 $k$ 位成员闯过第二关的概率 $p_k = (p_k)_1 + (p_k)_2 = \\frac{3}{2}\\left[\\left(\\frac{1}{2}\\right)^k -\\left(\\frac{1}{4}\\right)^k\\right]$

由 $\\frac{3}{2}\\left[\\left(\\frac{1}{2}\\right)^{k}-\\left(\\frac{1}{4}\\right)^{k}\\right]<\\frac{3}{128}$ ，得 $\\left(\\frac{1}{2}\\right)^{k}-\\left(\\frac{1}{4}\\right)^{k}<\\frac{1}{64}$ ，解得 $k\\geqslant6$ ，则 $k_{0}=6$ ，所以n=7.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-5-4-14",
    topicId: "topic-sec-4-5",
    title: `设离散型随机变量 X 和 Y 的分布列分别为 P(X = a_k) = x_k, P(Y = a_k) =`,
    content: `设离散型随机变量 X 和 Y 的分布列分别为 $P(X = a_{k}) = x_{k}, P(Y = a_{k}) = y_{k}, x_{k} > 0, y_{k} > 0, k = 0, 1, 2, \\cdots, n, \\sum_{k=0}^{n} x_{k} = \\sum_{k=0}^{n} y_{k} = 1.$ 定义 $D(X \\parallel Y) = \\sum_{k=0}^{n} x_{k} \\ln \\frac{x_{k}}{y_{k}}$ ，用来刻画 X 和 Y 的相似程度，设 $X \\sim B(n, p), 0 < p < 1.$
(1) 若 $n=3, p=\\frac{1}{3}, Y \\sim B\\left(3, \\frac{2}{3}\\right)$ ，求 $D(X \\parallel Y)$ ;

(2) 若 n=2，且 Y 的分布列为

<table><tr><td>Y</td><td>0</td><td>1</td><td>2</td></tr><tr><td>P</td><td>1/6</td><td>2/3</td><td>1/6</td></tr></table>

求 $D(X\\| Y)$ 的最小值；

(3) 对任意与 X 有相同可能取值的随机变量 Y，证明： $D(X \\parallel Y)$ 的值不可能为负数.`,
    preview: `设离散型随机变量 X 和 Y 的分布列分别为 定义 D(X Y) = _k=0^n x_k x_k{y_k} ，用来刻画 X 和 Y 的相似程度，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-4-14-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 因为 $X \\sim B\\left(3, \\frac{1}{3}\\right)$ ,

所以 $x_{k} = P(X = k) = C_{3}^{k}\\left(\\frac{1}{3}\\right)^{k}\\left(\\frac{2}{3}\\right)^{3 - k} = C_{3}^{k}\\frac{2^{3 - k}}{27} (k = 0,1,2,3),$ 因为 $Y \\sim B\\left(3, \\frac{2}{3}\\right)$ , 所以 $y_k = P(Y = k) = C_3^k\\left(\\frac{2}{3}\\right)^k\\left(\\frac{1}{3}\\right)^{3 - k} = C_3^k\\frac{2^k}{27}(k = 0,1,2,3)$ ,

所以 $\\frac{x_{k}}{y_{k}}=\\frac{C_{3}^{k}\\cdot\\frac{2^{3-k}}{27}}{C_{3}^{k}\\cdot\\frac{2^{k}}{27}}=2^{3-2k}(k=0,1,2,3)$ ，所以

$$
\\begin{array}{l} D (X \\parallel Y) = \\sum_ {k = 0} ^ {3} x _ {k} \\ln \\frac {x _ {k}}{y _ {k}} \\\\ = C _ {3} ^ {0} \\times \\frac {2 ^ {3}}{2 7} \\times \\ln 2 ^ {3} + C _ {3} ^ {1} \\times \\frac {2 ^ {2}}{2 7} \\times \\ln 2 + C _ {3} ^ {2} \\times \\frac {2 ^ {1}}{2 7} \\times \\ln 2 ^ {- 1} + C _ {3} ^ {3} \\times \\frac {2 ^ {0}}{2 7} \\times \\ln 2 ^ {- 3} \\\\ = \\ln 2. \\\\ \\end{array}
$$

(2) 因为 $x_{k}=P(X=k)=C_{2}^{k}p^{k}(1-p)^{2-k}(k=0,1,2)$ ,

所以 $D(X\\parallel Y) = \\sum_{k = 0}^{2}x_{k}\\ln \\frac{x_{k}}{y_{k}} = x_{0}\\ln \\frac{x_{0}}{y_{0}} +x_{1}\\ln \\frac{x_{1}}{y_{1}} +x_{2}\\ln \\frac{x_{2}}{y_{2}}$

$$
= (1 - p) ^ {2} \\ln [ 6 (1 - p) ^ {2} ] + 2 p (1 - p) \\ln [ 3 p (1 - p) ] + p ^ {2} \\ln (6 p ^ {2}).
$$

令 $f(p) = (1 - p)^2\\ln [6(1 - p)^2] + 2p(1 - p)\\ln [3p(1 - p)] + p^2\\ln (6p^2),$

则 $f'(p)=-2(1-p)\\ln[6(1-p)^{2}]-2(1-p)+(2-4p)\\ln[3p(1-p)]+$

$$
\\begin{array}{l} 2 - 4 p + 2 p \\ln (6 p ^ {2}) + 2 p \\\\ = (- 2 + 4 p) \\ln 6 - 2 \\ln (1 - p) + 2 \\ln p + (2 - 4 p) \\ln 3 \\\\ = 2 \\ln p - 2 \\ln (1 - p) + (4 p - 2) \\ln 2, \\\\ \\end{array}
$$

令 $g(p) = 2\\ln p - 2\\ln (1 - p) + (4p - 2)\\ln 2$ ，则 $g'(p) = \\frac{2}{p} + \\frac{2}{1 - p} + 4\\ln 2,$

因为 0 < p < 1，所以 $g'(p) > 0$ ，故 $g(p)$ 在 $(0,1)$ 上单调递增，

又 $g\\left(\\frac{1}{2}\\right) = 0$ ，所以当 $0 < p < \\frac{1}{2}$ 时， $g(p) < 0$ ，即 $f'(p) < 0$ ，当 $\\frac{1}{2} < p < 1$ 时， $g(p) > 0$ 即 $f'(p) > 0$ ，所以 $f(p)$ 在 $\\left(0, \\frac{1}{2}\\right)$ 上单调递减，在 $\\left(\\frac{1}{2}, 1\\right)$ 上单调递增，

所以 $f(p)_{\\mathrm{min}} = f\\left(\\frac{1}{2}\\right) = \\frac{1}{2}\\ln \\frac{9}{8}.$

(3)令 $\\varphi (x) = \\ln x - x + 1$ ，则 $\\varphi^{\\prime}(x) = \\frac{1}{x} -1 = \\frac{1 - x}{x}$ 易得当 $x\\in (0,1)$ 时， $\\varphi^{\\prime}(x) > 0$ 当 $x\\in (1, + \\infty)$ 时， $\\varphi^{\\prime}(x) <   0$ ，故 $\\varphi (x)$ 在(0,1)上单调递增，在 $(1, + \\infty)$ 上单调递减，所以 $\\forall x\\in (0, + \\infty),\\varphi (x)\\leqslant \\varphi (1) = 0$ ，所以 $\\ln x\\leqslant x - 1$ ，所以 $\\ln \\frac{1}{x}\\leqslant \\frac{1}{x} -1,$

所以 $\\ln x \\geqslant 1 - \\frac{1}{x}$ ,

所以 $D(X\\parallel Y) = \\sum_{k = 0}^{n}x_{k}\\ln \\frac{x_{k}}{y_{k}}\\geqslant \\sum_{k = 0}^{n}x_{k}\\left(1 - \\frac{y_{k}}{x_{k}}\\right) = \\sum_{k = 0}^{n}(x_{k} - y_{k})$

$$
= \\sum_ {k = 0} ^ {n} x _ {k} - \\sum_ {k = 0} ^ {n} y _ {k} = 1 - 1 = 0,
$$

即 $D(X \\parallel Y)$ 的值不可能为负.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-5-5-15",
    topicId: "topic-sec-4-5",
    title: `从一副扑克牌中挑出 4 张 Q 和 4 张 K, 将其中`,
    content: `从一副扑克牌中挑出 4 张 Q 和 4 张 K, 将其中 2 张 Q 和 2 张 K 装在一个不透明的袋中, 剩余的 2 张 Q 和 2 张 K 放在外面. 现从袋中随机抽出一张扑克牌, 若抽出 Q, 则把它放回袋中: 若抽出 K, 则该扑克牌不再放回, 并将袋外的一张 Q 放入袋中. 如此操作若干次, 直到将袋中的 K 全部置换为 Q.
(1)在操作2次后,袋中K的张数记为随机变量X,求X的分布列及数学期望.
(2)记事件“在操作 $n+1(n\\in\\mathbf{N}^{*})$ 次后,恰好将袋中的 K 全部置换为 Q”为 $A_{n}$ ,记 $P_{n}=P(A_{n})$ .
(i)在第1次取到Q的条件下,求总共4次操作恰好完成置换的概率;
(ii) 试探究 $P_{n+1}$ 与 $P_n$ 的递推关系, 并说明理由.`,
    preview: `从一副扑克牌中挑出 4 张 Q 和 4 张 K, 将其中 2 张 Q 和 2 张 K 装在一个不透明的袋中, 剩余的 2 张 Q 和 2 张 K 放在外面. 现`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-5-15-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)由题意可知,X的所有取值为0,1,2,

则 $P(X=0)=\\frac{2}{4}\\times\\frac{1}{4}=\\frac{1}{8}, P(X=1)=\\frac{2}{4}\\times\\frac{2}{4}+\\frac{2}{4}\\times\\frac{3}{4}=\\frac{5}{8}, P(X=2)=\\frac{2}{4}\\times\\frac{2}{4}=\\frac{1}{4}$ ,

所以 $X$ 的分布列为：

<table><tr><td>X</td><td>0</td><td>1</td><td>2</td></tr><tr><td>P</td><td>1/8</td><td>5/8</td><td>1/4</td></tr></table>

所以 $E(X)=0\\times\\frac{1}{8}+1\\times\\frac{5}{8}+2\\times\\frac{1}{4}=\\frac{9}{8}.$

(2)(i)记事件 E 表示“第 1 次取到 Q”，事件 F 表示“总共 4 次操作恰好完成置换”，则 $P(E)=\\frac{1}{2}$ ，

依题意,若第一次取到 Q, 则剩余的 3 次操作, 须将袋中 K 全部置换为 Q.

①若第二次也取出 Q, 则第三次和第四次均须取出 K,

其概率为 $\\frac{1}{2}\\times\\frac{2}{4}\\times\\frac{2}{4}\\times\\frac{1}{4}=\\frac{1}{32}$ .

②若第二次取出 K, 则第三次取出 Q, 第四次取出 K,

其概率为 $\\frac{1}{2}\\times\\frac{2}{4}\\times\\frac{3}{4}\\times\\frac{1}{4}=\\frac{3}{64}$ .

综上所述， $P(EF)=\\frac{1}{32}+\\frac{3}{64}=\\frac{5}{64}$ ，所以 $P(F|E)=\\frac{P(EF)}{P(E)}=\\frac{\\frac{5}{64}}{\\frac{1}{2}}=\\frac{5}{32}$

即在第1次取到Q的条件下，总共4次操作恰好完成置换的概率为 $\\frac{5}{32}$ .

(ii) $P_{n+1}=\\frac{1}{2^{n+3}}+\\frac{3}{4}P_{n}$ ，理由如下：

设事件 B 表示“n 次操作后袋中还剩 1 张 K”，

依题意, $P_{n}$ 为 $n+1$ 次操作后,恰好将袋中的K全部置换为Q,而发生这样的情况需n次操作后袋中还剩1张K,且第 $n+1$ 次抽中K,

则 $P_{n} = \\frac{1}{4} P(B)$ ，即 $P(B) = 4P_{n}$

$P_{n+1}$ 为 $n+2$ 次操作后, 恰好将袋中的 K 全部置换为 Q 的概率, 分 2 种情况:

① n 次操作后袋中还剩 2 张 K（即前 n 次全取 Q，概率为 $\\frac{1}{2^{n}}$ ），并且第 $n+1$ 次和第 $n+2$ 次全取 K，

②n次操作后袋中还剩1张K,第 $n+1$ 次取Q,第 $n+2$ 次取K,

所以 $P_{n + 1} = \\frac{1}{2^n}\\times \\frac{2}{4}\\times \\frac{1}{4} +P(B)\\times \\frac{3}{4}\\times \\frac{1}{4} = \\frac{1}{2^{n + 3}} +P(B)\\times \\frac{3}{16},$

又因为 $P(B)=4P_{n}$ ，所以 $P_{n+1}=\\frac{1}{2^{n+3}}+\\frac{3}{4}P_{n}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-5-6-16",
    topicId: "topic-sec-4-5",
    title: `已知常数 p (0,1)`,
    content: `（2024年武汉四调）已知常数 $p \\in (0,1)$ ，在成功的概率为 $p$ 的伯努利试验中，记 $X$ 为首次成功时所需的试验次数， $X$ 的取值为所有正整数，此时称离散型随机变量 $X$ 的概率分布为几何分布.
(1) 对于正整数 $k$ , 求 $P(X = k)$ , 并根据 $E(X) = \\sum_{k=1}^{\\infty} kP(X = k) = \\lim_{n \\to \\infty} \\left(\\sum_{k=1}^{n} kP(X = k)\\right)$ , 求 $E(X)$ ;

(2)对于几何分布的拓展问题,在成功的概率为 p 的伯努利试验中,记首次出现连续两次成功时所需的试验次数的期望为 $E_{2}$ , 现提供一种求 $E_{2}$ 的方式: 先进行第一次试验, 若第一次试验失败, 因为出现试验失败对出现连续两次成功毫无帮助, 可以认为后续期望仍是 $E_{2}$ , 即总的试验次数为 $(E_{2}+1)$ ; 若第一次试验成功, 则进行第二次试验, 当第二次试验成功时, 试验停止, 此时试验次数为 2, 若第二次试验失败, 相当于重新试验, 此时总的试验次数为 $(E_{2}+2)$ .

(i) 求 $E_{2}$ ;

(ii) 记首次出现连续 n 次成功时所需的试验次数的期望为 $E_{n}$ ，求 $E_{n}$ .`,
    preview: `已知常数 p (0,1) ，在成功的概率为 p 的伯努利试验中，记 X 为首次成功时所需的试验次数， X 的取值为所有正整数，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-6-16-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `## 讲解

(1)由题可知 $P(X=k)=(1-p)^{k-1}p,$

$$
\\sum_ {k = 1} ^ {n} k (1 - p) ^ {k - 1} p = p [ 1 + 2 (1 - p) + 3 (1 - p) ^ {2} + \\dots + n (1 - p) ^ {n - 1} ],
$$

记 $S_{n}=1+2(1-p)+3(1-p)^{2}+\\cdots+n(1-p)^{n-1}$ ,

则 $(1-p)S_{n}=(1-p)+2(1-p)^{2}+\\cdots+(n-1)(1-p)^{n-1}+n(1-p)^{n}$

相减得 $pS_{n}=1+(1-p)+(1-p)^{2}+\\cdots+(1-p)^{n-1}-n(1-p)^{n}$

$$
= \\frac {1 - (1 - p) ^ {n}}{1 - (1 - p)} - n (1 - p) ^ {n} = \\frac {1 - (1 - p) ^ {n}}{p} - n (1 - p) ^ {n};
$$

由题意得 $E(X) = \\lim_{n\\to \\infty}(pS_n) = \\lim_{n\\to \\infty}\\left[\\frac{1 - (1 - p)^n}{p} -n(1 - p)^n\\right] = \\frac{1}{p}.$

(2)(i) $E_{2}=(1-p)\\cdot(E_{2}+1)+p^{2}\\cdot2+p(1-p)\\cdot(E_{2}+2).$

解得 $E_{2} = \\frac{1 + p}{p^{2}}.$

(ii)期待在 $E_{n - 1}$ 次试验后，首次出现连续 $(n - 1)$ 次成功，若下一次试验成功，则试验停止，此时试验次数为 $(E_{n - 1} + 1)$ ；若下一次试验失败，相当于重新试验，后续期望仍是 $E_{n}$ ，此时总的试验次数为 $(E_{n - 1} + 1 + E_n)$

即 $E_{n}=p\\cdot(E_{n-1}+1)+(1-p)\\cdot(E_{n-1}+1+E_{n})$ .

整理得 $E_{n} = \\frac{1}{p} (E_{n - 1} + 1)$ ，即 $E_{n} + \\frac{1}{1 - p} = \\frac{1}{p}\\left(E_{n - 1} + \\frac{1}{1 - p}\\right),$

$\\left\\{E_n + \\frac{1}{1 - p}\\right\\}$ 是公比为 $\\frac{1}{p}$ 的等比数列，所以 $E_{n} + \\frac{1}{1 - p} = \\frac{1}{p^{n - 1}}\\left(E_{1} + \\frac{1}{1 - p}\\right)$ .

由(1)知 $E_{1}=\\frac{1}{p}$ ，代入得 $E_{n}=\\frac{1-p^{n}}{(1-p)p^{n}}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-5-7-17",
    topicId: "topic-sec-4-5",
    title: `如图 4-5-7 所示, 在平面直角坐标系 xOy`,
    content: `如图 4-5-7 所示, 在平面直角坐标系 xOy 中有一个点
阵，点阵中所有点的集合为 $M = \\left\\{(x,y)\\left|\\begin{array}{l}x\\leqslant n,n\\in \\mathbf{N}^{*},\\\\ y\\leqslant n,n\\in \\mathbf{N}^{*},\\\\ x\\in \\mathbf{N},\\\\ y\\in \\mathbf{N}\\end{array} \\right.\\right\\}$ ，从集合 $M$

中任取两个不同的点,用随机变量 X 表示它们之间的距离.

![](images/69d2882e0771dd2859161d76f583ac370cac58819faa8e37467ccb40d3d662e4.jpg)

图4-5-7

(1) 当 n=2 时, 求 X 的分布列.
(2) 对给定的正整数 $n(n \\geqslant 4)$ .
(i)求随机变量 X 的所有可能取值的个数；(用含有 n 的式子表示)
(ii)求概率 $P(X<\\sqrt{2}(n-1))$ .(用含有 n 的式子表示)`,
    preview: `如图 4-5-7 所示, 在平面直角坐标系 xOy 中有一个点 阵，点阵中所有点的集合为 ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-7-17-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `## 讲解

(1) 当 n=2 时, 集合 M 中共有 9 个点,

则 X 的所有可能取值为 $1, \\sqrt{2}, 2, \\sqrt{5}, 2\\sqrt{2}$ .

所以 $P(X=1)=\\frac{12}{C_{9}^{2}}=\\frac{12}{36}=\\frac{1}{3}, P(X=\\sqrt{2})=\\frac{8}{C_{9}^{2}}=\\frac{8}{36}=\\frac{2}{9},$

$$
P (X = 2) = \\frac {6}{C _ {9} ^ {2}} = \\frac {6}{3 6} = \\frac {1}{6}, P (X = \\sqrt {5}) = \\frac {8}{C _ {9} ^ {2}} = \\frac {8}{3 6} = \\frac {2}{9}, P (X = 2 \\sqrt {2}) = \\frac {2}{C _ {9} ^ {2}} = \\frac {2}{3 6} = \\frac {1}{1 8}.
$$

所以 $X$ 的分布列为

<table><tr><td>X</td><td>1</td><td> $\\sqrt{2}$ </td><td>2</td><td> $\\sqrt{5}$ </td><td> $2\\sqrt{2}$ </td></tr><tr><td>P</td><td> $\\frac{1}{3}$ </td><td> $\\frac{2}{9}$ </td><td> $\\frac{1}{6}$ </td><td> $\\frac{2}{9}$ </td><td> $\\frac{1}{18}$ </td></tr></table>

(2)(i)由题意得,集合 M 中任取两个不同的点之间的不同距离的总数可以转化成边长为 $i(i=1,2,3,\\cdots,n)$ 的正方形边界上任取两个不同的点之间的不同距离的个数的总和,

在边长为 1 的正方形中,有 2 个不同的距离,

在边长为 2 的正方形中, 有 $2+3$ 个不同的距离,

在边长为 n 的正方形中, 有 $2+3+\\cdots+(n+1)$ 个不同的距离,

由各正方形大小不同,距离大小各不相同,

得 X 的所有可能取值的个数为 $2+3+4+\\cdots+(n+1)=\\frac{n(2+n+1)}{2}=\\frac{n(n+3)}{2}$ .

(ii)由对立事件,不妨考虑 $X \\geqslant \\sqrt{2}(n-1)$ 的情况,

①当 $X=\\sqrt{2}(n-1)$ 时，取出的两点为边长为 n-1 的正方形的顶点，

此时,这种正方形共有4个,每个正方形中距离等于 $\\sqrt{2}(n-1)$ 的情形有2种,

所以，事件 $\\left\\{X=\\sqrt{2}(n-1)\\right\\}$ 包含的样本点个数为 $4\\times2=8$ ;

②当 $X > \\sqrt{2} (n - 1)$ 时，不妨设 $X = \\sqrt{n^2 + d^2}, d \\leqslant n$ 且 $d \\in \\mathbf{N}^*$ ，

由 $\\sqrt{n^2 + d^2} >\\sqrt{2} (n - 1)$ ，得 $d^2 >n^2 -4n + 2 = (n - 2)^2 -2$

因为 $n \\geqslant 4$ ，所以 $(n-2)^{2}-2>(n-3)^{2}$ ，

所以 d>n-3，即 d=n-2,n-1,n，

a) 当 d=n-2，即 $X=\\sqrt{n^{2}+(n-2)^{2}}$ 时，

取出的两点为边长分别为 n, n-2 的矩形的顶点，

此时,这种矩形共有6个,每个矩形中距离等于 $\\sqrt{n^{2}+(n-2)^{2}}$ 的情形有2种,

所以，事件 $\\left\\{X=\\sqrt{n^{2}+(n-2)^{2}}\\right\\}$ 包含的样本点个数为 $6\\times2=12$ ;

b) 当 $d = n - 1$ ，即 $X = \\sqrt{n^2 + (n - 1)^2}$ 时，取出的两点为边长分别为 $n, n - 1$ 的矩形的顶点，此时，这种矩形共有4个，每个矩形中距离等于 $\\sqrt{n^2 + (n - 1)^2}$ 的情形有2种，

所以,事件 $\\left\\{X=\\sqrt{n^{2}+(n-1)^{2}}\\right\\}$ 包含的样本点个数为 $4\\times2=8$ ;

c) 当 d=n，即 $X=\\sqrt{2}n$ 时，取出的两点为边长为 n 的正方形的顶点，

此时,这种正方形共有1个,每个正方形中距离等于 $\\sqrt{2}n$ 的情形有2种,

所以,事件 $\\{X=\\sqrt{2}n\\}$ 包含的样本点个数为 $1\\times2=2$ ;

由题知样本空间包含的所有样本点的个数为 $C_{(n+1)^{2}}^{2}$ ,

所以由古典概型得 $P(X \\geqslant \\sqrt{2}(n-1)) = \\frac{8 + 12 + 8 + 2}{C_{(n+1)^{2}}^{2}} = \\frac{30}{C_{(n+1)^{2}}^{2}}$ ,

所以由对立事件的概率公式得

$$
P (X <   \\sqrt {2} (n - 1)) = 1 - P (X \\geqslant \\sqrt {2} (n - 1)) = 1 - \\frac {3 0}{C _ {(n + 1) ^ {2}} ^ {2}} = 1 - \\frac {6 0}{n (n + 2) (n + 1) ^ {2}}.
$$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-5-8-18",
    topicId: "topic-sec-4-5",
    title: `频率估计概率与二项分布参数估计`,
    content: `（2024 年杭州市二模）在概率统计中，常常用频率估计概率。已知袋中有若干个红球和白球，有放回地随机摸球 n 次，红球出现 m 次。假设每次摸出红球的概率为 p，根据频率估计概率的思想，则每次摸出红球的概率 p 的估计值为 $\\hat{p} = \\frac{m}{n}$ 。
(1)若袋中这两种颜色球的个数之比为 $1:3$ ，不知道哪种颜色的球多.有放回地随机摸取3个球，设摸出的球为红球的次数为 $Y$ ，则 $Y\\sim B(3,p)$

注： $P_{p}(Y=k)$ 表示当每次摸出红球的概率为 p 时，摸出红球次数为 k 的概率.

(i) 完成下表：

<table><tr><td>k</td><td>0</td><td>1</td><td>2</td><td>3</td></tr><tr><td> $P_{\\frac{1}{4}}(Y=k)$ </td><td> $\\frac{27}{64}$ </td><td></td><td></td><td> $\\frac{1}{64}$ </td></tr><tr><td> $P_{\\frac{3}{4}}(Y=k)$ </td><td></td><td> $\\frac{9}{64}$ </td><td></td><td> $\\frac{27}{64}$ </td></tr></table>

(ii)在统计理论中,把使得 $P_{p}(Y=k)$ 的取值达到最大时的p,作为p的估计值,记为 $\\hat{p}$ ,请写出 $\\hat{p}$ 的值.
(2) 把(1)中“使得 $P_{p}(Y=k)$ 的取值达到最大时的 p 作为 p 的估计值 $\\hat{p}$ ”的思想称为最大似然原理. 基于最大似然原理的最大似然参数估计方法称为最大似然估计.

具体步骤: 先对参数 $\\theta$ 构建对数似然函数 $l(\\theta)$ ，再对其关于参数 $\\theta$ 求导，得到似然方程 $l'(\\theta)=0$ ，最后求解参数 $\\theta$ 的估计值。已知 $Y\\sim B(n,p)$ 的参数 p 的对数似然函数为 $l(p)=\\sum_{i=1}^{n}X_{i}\\ln p+\\sum_{i=1}^{n}(1-X_{i})\\ln(1-p)$ ，其中 $X_{i}=\\left\\{\\begin{aligned}&0,\\text{第 }i\\text{ 次摸出白球,}\\\\ &1,\\text{第 }i\\text{ 次摸出红球,}\\end{aligned}\\right.$ 求参数 p 的估计值，并且说明频率估计概率的合理性。`,
    preview: `在概率统计中，常常用频率估计概率。已知袋中有若干个红球和白球，有放回地随机摸球 n 次，红球出现 m 次。假设每次摸出红球的概率为 p，根据频率估计概率的思想，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-8-18-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `## 讲解

(1)因为袋中这两种颜色球的个数之比为 $1:3$ ，且 $Y\\sim B(3,p)$

所以 $p$ 的值为 $\\frac{1}{4}$ 或 $\\frac{3}{4}$ .

(i) 当 $p = \\frac{1}{4}$ 时， $P_{\\frac{1}{4}}(Y = 1) = C_3^1 p^1 (1 - p)^2 = \\frac{27}{64}, P_{\\frac{1}{4}}(Y = 2) = C_3^2 p^2 (1 - p) = \\frac{9}{64}$ ，

当 $p = \\frac{3}{4}$ 时， $P_{\\frac{3}{4}}(Y = 0) = \\mathrm{C}_3^0 p^0 (1 - p)^3 = \\frac{1}{64}, P_{\\frac{3}{4}}(Y = 2) = \\mathrm{C}_3^2 p^2 (1 - p) = \\frac{27}{64}$ ，

表格如下：

<table><tr><td>k</td><td>0</td><td>1</td><td>2</td><td>3</td></tr><tr><td>P1/4(Y=k)</td><td>27/64</td><td>27/64</td><td>9/64</td><td>1/64</td></tr><tr><td>P3/4(Y=k)</td><td>1/64</td><td>9/64</td><td>27/64</td><td>27/64</td></tr></table>

(ii)由上表可知 $P_{p}(Y = k) = C_{3}^{k}p^{k}(1 - p)^{3 - k}$

当 $Y = 0$ 或1时，参数 $p = \\frac{1}{4}$ 的概率最大；当 $Y = 2$ 或3时，参数 $p = \\frac{3}{4}$ 的概率最大.

所以 $\\hat{p} = \\left\\{ \\begin{array}{l}\\frac{1}{4}, Y = 0, 1, \\\\ \\frac{3}{4}, Y = 2, 3. \\end{array} \\right.$

(2) 由 $l(p) = \\sum_{i=1}^{n} X_i \\ln p + \\sum_{i=1}^{n} (1 - X_i) \\ln (1 - p)$ ,

则 $l^{\\prime}(p) = \\frac{1}{p}\\sum_{i = 1}^{n}X_{i} - \\frac{1}{1 - p}\\sum_{i = 1}^{n}(1 - X_{i})$ ，令 $\\frac{1}{p}\\sum_{i = 1}^{n}X_{i} - \\frac{1}{1 - p}\\sum_{i = 1}^{n}(1 - X_{i}) = 0,$

即 $\\frac{1 - p}{p} = \\frac{\\sum_{i=1}^{n}(1 - X_i)}{\\sum_{i=1}^{n}X_i} = \\frac{n - \\sum_{i=1}^{n}X_i}{\\sum_{i=1}^{n}X_i} = \\frac{n}{\\sum_{i=1}^{n}X_i} - 1,$

故 $p = \\frac{1}{n}\\sum_{i = 1}^{n}X_{i}$ ，即当 $p\\in \\left(0,\\frac{1}{n}\\sum_{i = 1}^{n}X_{i}\\right)$ 时， $l^{\\prime}(p) > 0$

当 $p \\in \\left(\\frac{1}{n} \\sum_{i=1}^{n} X_i, 1\\right)$ 时， $l'(p) < 0$

故 $l(p)$ 在 $\\left(0, \\frac{1}{n} \\sum_{i=1}^{n} X_i\\right)$ 上单调递增，在 $\\left(\\frac{1}{n} \\sum_{i=1}^{n} X_i, 1\\right)$ 上单调递减，

即当 $p = \\frac{1}{n}\\sum_{i=1}^{n}X_i$ 时， $l(p)$ 取最大值，故 $\\hat{p} = \\frac{1}{n}\\sum_{i=1}^{n}X_i,$

因此,用最大似然估计的参数 $\\hat{p}$ 与频率估计概率的 $\\hat{p}$ 是一致的,故用频率估计概率是合理的.

在随机试验中,许多事件都有可能发生,概率大的事件发生的可能性也大,若在一次试验中,某事件 A 发生了,则有理由认为事件 A 比其他事件发生的概率大,这就是所谓的极大似然原理,极大似然估计法就是依据这一原理得到的一种参数估计方法。`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-5-9-19",
    topicId: "topic-sec-4-5",
    title: `有一位老师叫他的学生到麦田里`,
    content: `有一位老师叫他的学生到麦田里，摘一颗全麦田里最大的麦穗，期间只能摘一次，并且只可以向前走，不能回头。结果，他的学生两手空空走出麦田，因为他不知前面是否有更好的，所以没有摘，走到前面时，又发觉总不及之前见到的，最后什么也没摘到。假设该学生在麦田中一共会遇到 $n$ 颗麦穗（假设 $n$ 颗麦穗的大小均不相同），最大的那颗麦穗出现在各个位置上的概率相等，为了使他能在这些麦穗中摘到那颗最大的麦穗，现有如下策略：不摘前 $k(1 \\leqslant k < n)$ 颗麦穗，自第 $k + 1$ 颗开始，只要发现比他前面见过的麦穗都大的，就摘这颗麦穗，否则就摘最后一颗。设 $k = tn$ ，该学生摘到那颗最大的麦穗的概率为 $P$ 。（取 $\\frac{k}{n} \\sum_{j=k}^{n-1} \\frac{1}{j} = \\frac{k}{n} \\ln \\frac{n}{k}$ ）
(1) 若 n=4, k=2, 求 P;

(2) 若 n 取无穷大, 从理论的角度, 求 P 的最大值及 P 取最大值时 t 的值.`,
    preview: `有一位老师叫他的学生到麦田里，摘一颗全麦田里最大的麦穗，期间只能摘一次，并且只可以向前走，不能回头。结果，他的学生两手空空走出麦田，因为他不知前面是否有更好的，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-9-19-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `## 讲解

(1) 这 4 颗麦穗的位置从第 1 颗到第 4 颗排序, 有 $A_{4}^{4}=24$ 种情况.

要摘到那颗最大的麦穗,有以下两种情况:

①最大的麦穗是第3颗,其他的麦穗随意在哪个位置,有 $A_{3}^{3}=6$ 种情况.
②最大的麦穗是最后1颗,第二大的麦穗是第1颗或第2颗,其他的麦穗随意在哪个位置,有 $2A_{2}^{2}=4$ 种情况.

故所求概率为 $\\frac{6+4}{24}=\\frac{5}{12}$ .

(2) 记事件 A 表示最大的麦穗被摘到, 事件 $B_{j}$ 表示最大的麦穗在麦穗中排在第 j 颗.

因为最大的那颗麦穗出现在各个位置上的概率相等,所以 $P(B_{j})=\\frac{1}{n}$ .

以给定所在位置的序号作为条件， $P(A) = \\sum_{j = 1}^{n}P(A\\mid B_{j})P(B_{j}) = \\frac{1}{n}\\sum_{j = 1}^{n}P(A\\mid B_{j}).$

当 $1 \\leqslant j \\leqslant k$ 时，最大的麦穗在前 k 颗麦穗之中，不会被摘到，此时 $P(A \\mid B_{j}) = 0$ .

当 $k + 1 \\leqslant j \\leqslant n$ 时，最大的麦穗被摘到，当且仅当前 $j - 1$ 颗麦穗中的最大的一颗在前 $k$ 颗麦穗中时，

此时 $P(A|B_{j})=\\frac{k}{j-1}.$

由全概率公式知 $P(A) = \\frac{1}{n}\\sum_{j = k + 1}^{n}\\frac{k}{j - 1} = \\frac{k}{n}\\sum_{j = k}^{n - 1}\\frac{1}{j} = \\frac{k}{n}\\ln \\frac{n}{k},$

令函数 $g(x) = \\frac{x}{n}\\ln \\frac{n}{x} (x > 0), g'(x) = \\frac{1}{n}\\ln \\frac{n}{x} -\\frac{1}{n},$

令 $g^{\\prime}(x) = 0$ ，则 $x = \\frac{n}{\\mathrm{e}}$ ，当 $x\\in \\left(0,\\frac{n}{\\mathrm{e}}\\right)$ 时， $g^{\\prime}(x) > 0$

当 $x \\in \\left(\\frac{n}{\\mathrm{e}}, n\\right)$ 时， $g'(x) < 0$

所以 $g(x)$ 在 $\\left(0,\\frac{n}{\\mathrm{e}}\\right)$ 上单调递增，在 $\\left(\\frac{n}{\\mathrm{e}},n\\right)$ 上单调递减.

所以 $g(x)_{\\max}=g\\left(\\frac{n}{\\mathrm{e}}\\right)=\\frac{1}{\\mathrm{e}}.$

所以当 $k=\\frac{n}{e}$ 时， $P(A)=\\frac{k}{n}\\ln\\frac{n}{k}$ 取得最大值，最大值为 $\\frac{1}{e}$ ，此时 $t=\\frac{1}{e}$ ，

即 P 的最大值为 $\\frac{1}{e}$ ，此时 t 的值为 $\\frac{1}{e}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-5-1-20",
    topicId: "topic-sec-4-5",
    title: `（2024 杭州市余杭高级中学）数列 a_n 满足： a_n+1 + a_n = 2n + 7 (n ∈ N^*)`,
    content: `（2024 杭州市余杭高级中学）数列 $\\{a_{n}\\}$ 满足： $a_{n+1} + a_{n} = 2n + 7 (n \\in \\mathbf{N}^{*})$ ，且 $a_{1} = 4$ .
(1)求数列 $\\{a_{n}\\}$ 的通项公式；
(2)已知数列 $\\{b_n\\}$ 满足 $b_{n} = \\left\\{ \\begin{array}{l}1, n = 1, \\\\ \\log_{(n + 2)}a_{n}, n \\geqslant 2, n \\in \\mathbf{N}^{*}, \\end{array} \\right.$ 定义使 $b_{1} \\cdot b_{2} \\cdot b_{3} \\cdot \\dots \\cdot b_{k}$ （ $k \\in \\mathbf{N}^{*}$ ）为整数的 $k$ 叫做“幸福数”，求区间[1,2025]内所有“幸福数”的和.`,
    preview: `数列 满足： a_n+1 + a_n = 2n + 7 (n N^*) ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-1-20-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `## 讲解

(1) 因为 $a_{n+1} + a_{n} = 2n + 7 (n \\in \\mathbf{N}^{*})$ ，所以当 $n \\geqslant 2$ 时， $a_{n} + a_{n-1} = 2n + 5$ ，

故两式相减得： $a_{n + 1} - a_{n - 1} = 2$ ，即 $\\{a_{n}\\}$ 的奇数项和偶数项各自成等差数列，且公差为

2, 且 $a_1 = 4, a_2 = 2 \\times 1 + 7 - a_1 = 5$ ，所以奇数项 $a_{2k-1} = 4 + 2 (k-1) = 2k + 2 = (2k-1) + 3$ 则 $n$ 为奇数时， $a_n = n + 3$ ，偶数项 $a_{2k} = 5 + 2 (k-1) = 2k + 3$ ，则 $n$ 为偶数时， $a_n = n + 3$ 故数列 $\\{a_n\\}$ 的通项公式为 $a_n = n + 3$ .

(2)由(1)可得, $b_{n}=\\left\\{\\begin{aligned}&1,n=1,\\\\&\\log_{(n+2)}a_{n},n\\geqslant2,n\\in\\mathbf{N}^{*}\\end{aligned}\\right.=\\left\\{\\begin{aligned}&1,n=1,\\\\&\\log_{(n+2)}(n+3),n\\geqslant2,n\\in\\mathbf{N}^{*},\\end{aligned}\\right.$

所以 $b_{1} \\cdot b_{2} \\cdot b_{3} \\cdot \\cdots \\cdot b_{k} = 1 \\times \\log_{4} 5 \\cdot \\log_{5} 6 \\cdot \\cdots \\cdot \\log_{(k+2)} (k+3) = \\log_{4}(k+3)$ ，设 $\\log_{4}(k+3) = m, m \\in \\mathbf{Z}$ ，故 $k = 4^{m} - 3$ ，

令 $1 \\leqslant 4^{m} - 3 \\leqslant 2025$ ，则 $1 \\leqslant m \\leqslant 5$ ，由于 $m$ 是整数，故 $m$ 的值取 $1, 2, 3, 4, 5$

故区间[1,2025]内所有“幸福数”的和为

$$
(4 ^ {1} - 3) + (4 ^ {2} - 3) + (4 ^ {3} - 3) + (4 ^ {4} - 3) + (4 ^ {5} - 3) = \\frac {4 (1 - 4 ^ {5})}{1 - 4} - 3 \\times 5 = 1 3 4 9.
$$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-5-2-21",
    topicId: "topic-sec-4-5",
    title: `数列 a_n 为等差数列, 公差为 d, 前 n 项和为 S_n`,
    content: `数列 $\\{a_{n}\\}$ 为等差数列, 公差为 d, 前 n 项和为 $S_{n}$ .
(1) 若 $a_{1}=0, d=2$ ，求 $S_{100}$ 的值；

(2)若首项 $a_1 = -1, \\{a_n\\}$ 中恰有6项在区间 $\\left(\\frac{1}{2}, 8\\right)$ 内，求 $d$ 的范围；

(3)若首项 $a_1 = 1$ ，公差 $d = 1$ ，集合 $A = \\{a_{n} | n \\in \\mathbf{N}, n \\geqslant 1\\}$ ，是否存在一个新数列 $\\{b_{n}\\}$ ，满足：①此新数列 $\\{b_{n}\\}$ 不是常数列；②此新数列 $\\{b_{n}\\}$ 中任意一项 $b_{n} \\in A$ ；③此新数列 $\\{b_{n}\\}$ 从第二项开始，每一项都等于它的前一项和后一项的调和平均数。若能，请举例说明；若不能，请说明理由。（注：数 $\\frac{2}{\\frac{1}{a} + \\frac{1}{b}}$ 叫做数 $a$ 和数 $b$ 的调和平均数）。

讲解

(1) 因为 $a_{1}=0, d=2$ ，又因为 $S_{n}=na_{1}+\\frac{n(n-1)}{2}\\cdot d$

所以 $S_{100}=100\\times0+\\frac{1}{2}\\times100\\times99\\times2=9900.$

(2)由题可得 $\\{a_{n}\\}$ 为递增等差数列,设 $\\{a_{n}\\}$ 在 $\\left(\\frac{1}{2},8\\right)$ 中的6项为 $a_{m},a_{m+1},\\cdots,a_{m+5}$ ,

则 $\\left\\{ \\begin{array}{l}a_{m - 1}\\leqslant \\frac{1}{2},\\\\ a_m > \\frac{1}{2},\\end{array} \\right.\\Rightarrow \\left\\{ \\begin{array}{l} - 1 + (m - 2)d\\leqslant \\frac{1}{2},\\\\ -1 + (m - 1)d > \\frac{1}{2},\\\\ -1 + (m + 4)d <   8,\\\\ -1 + (m + 5)d\\geqslant 8. \\end{array} \\right.$

若 $m = 2$ ，则 $\\left\\{ \\begin{array}{l}-1\\leqslant \\frac{1}{2},\\\\ -1 + d > \\frac{1}{2},\\\\ -1 + 6d <   8,\\\\ -1 + 7d\\geqslant 8, \\end{array} \\right.$ 得 $d$ 不存在.

若 $m \\neq 2$ ，则 $\\left\\{ \\begin{array}{l} \\frac{3}{2(m-1)} < d \\leqslant \\frac{3}{2(m-2)}, \\\\ \\frac{9}{m+5} \\leqslant d < \\frac{9}{m+4}, \\end{array} \\right.$ 则 $\\left\\{ \\begin{array}{l} \\frac{3}{2(m-1)} < \\frac{9}{m+4}, \\\\ \\frac{9}{m+5} \\leqslant \\frac{3}{2(m-2)}, \\end{array} \\right.$ 解得 $m \\in \\left(2, \\frac{17}{5}\\right]$ ，

因 $m \\in \\mathbf{N}^*$ , 则 $m = 3$ , 得 $\\begin{cases} \\frac{3}{4} < d \\leqslant \\frac{3}{2} \\\\ \\frac{9}{8} \\leqslant d < \\frac{9}{7} \\end{cases} \\Rightarrow d \\in \\left[\\frac{9}{8}, \\frac{9}{7}\\right)$ .

(3)由题可得 $a_{n} = n, n \\in \\mathbf{N}^{*}$ . 假设 $\\{b_{n}\\}$ 存在，因 $\\{b_{n}\\}$ 从第二项开始，每一项都等于它的前一项和后一项的调和平均数，则 $\\{b_{n}\\}$ 为无穷数列，又由③，当 $n \\geqslant 2, n \\in \\mathbf{N}^{*}$ ，

$$
b _ {n} = \\frac {2}{\\frac {1}{b _ {n - 1}} + \\frac {1}{b _ {n + 1}}} \\Rightarrow \\frac {2}{b _ {n}} = \\frac {1}{b _ {n + 1}} + \\frac {1}{b _ {n - 1}} \\Rightarrow \\frac {1}{b _ {n}} - \\frac {1}{b _ {n - 1}} = \\frac {1}{b _ {n + 1}} - \\frac {1}{b _ {n}},
$$

得 $\\left\\{\\frac{1}{b_{n}}\\right\\}$ 为等差数列，又 $b_{n}\\in A$ ，则 $\\frac{1}{b_{n}}\\in(0,1]$ .

若 $\\frac{1}{b_{1}}=\\frac{1}{b_{2}}=\\frac{1}{m}$ ，其中 $m\\in N^{*}$ ，

则此时 $\\left\\{\\frac{1}{b_n}\\right\\}$ 为常数列，得 $\\{b_n\\}$ 是常数列.

这与 $\\{b_{n}\\}$ 不是常数列矛盾，则 $\\frac{1}{b_{1}}=\\frac{1}{b_{2}}$ 时，不存在这样的数列 $\\{b_{n}\\}$ .

若 $\\frac{1}{b_{1}}=\\frac{1}{m},\\frac{1}{b_{2}}=\\frac{1}{t},\\frac{1}{m}\\neq\\frac{1}{t}$ ，其中 $m,t\\in N^{*}$ .

则 $\\frac{1}{b_n} = \\frac{1}{m} + (n - 1)\\left(\\frac{1}{t} - \\frac{1}{m}\\right) = \\frac{1}{m} + (n - 1) \\cdot \\frac{m - t}{mt}$ .

若 $\\frac{1}{m}<\\frac{1}{t}$ ，可得m>t，又 $m,t\\in N^{*}$ ，则 $m-t\\geqslant1$ .

则 $\\frac{1}{b_{mt+1}}=\\frac{1}{m}+m-t>1$ ，这与 $\\frac{1}{b_{n}}\\in(0,1]$ 矛盾，

故 $\\frac{1}{m}<\\frac{1}{t}$ 时,不存在这样的数列 $\\{b_{n}\\}$ ;

若 $\\frac{1}{m}>\\frac{1}{t}$ ，可得m<t，又 $m,t\\in N^{*}$ ，则 $m-t\\leqslant-1$ .

则 $\\frac{1}{b_{mt+1}}=\\frac{1}{m}+m-t\\leqslant0$ ，这与 $\\frac{1}{b_{n}}\\in(0,1]$ 矛盾，

故 $\\frac{1}{m}>\\frac{1}{t}$ 时，不存在这样的数列 $\\{b_{n}\\}$ .

综上,不存在这样的数列 $\\{b_{n}\\}$ .`,
    preview: `数列 为等差数列, 公差为 d, 前 n 项和为 S_n . (1) 若 a_1=0, d=2 ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-2-21-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `评注 本题涉及等差数列与数列新定义,难度较大.第1问较为基础;第2问关键在于由题目条件找到关于m与d的不等式;第3问首先由题目定义确定 $\\{b_{n}\\}$ 为无穷数列及 $\\left\\{\\frac{1}{b_{n}}\\right\\}$ 为等差数列,再结合 $\\{b_{n}\\}$ 不是常数列与 $\\frac{1}{b_{n}}\\in(0,1]$ 导出矛盾.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-5-3-22",
    topicId: "topic-sec-4-5",
    title: `若无穷数列 a_n 满足 a_1 = 0, |a_n+1 - a_n| = f(n)，则称数列 a_n 为 β 数列`,
    content: `若无穷数列 $\\{a_{n}\\}$ 满足 $a_1 = 0, |a_{n+1} - a_n| = f(n)$ ，则称数列 $\\{a_{n}\\}$ 为 $\\beta$ 数列，若 $\\beta$ 数列 $\\{a_{n}\\}$ 同时满足 $a_{n} \\leqslant \\frac{n-1}{2}$ ，则称数列 $\\{a_{n}\\}$ 为 $\\gamma$ 数列.
(1) 若数列 $\\{a_{n}\\}$ 为 $\\beta$ 数列, $f(n)=1, n\\in\\mathbf{N}^{*}$ , 证明: 当 $n\\leqslant2025$ 时, 数列 $\\{a_{n}\\}$ 为递增数列的充要条件是 $a_{2025}=2024$ ;
(2) 若数列 $\\{b_{n}\\}$ 为 $\\gamma$ 数列, $f(n)=n$ , 记 $c_{n}=b_{2n}$ , 且对任意的 $n\\in N^{*}$ , 都有 $c_{n}<c_{n+1}$ , 求数列 $\\{c_{n}\\}$ 的通项公式.`,
    preview: `若无穷数列 满足 a_1 = 0, |a_n+1 - a_n| = f(n) ，则称数列 为 β 数列，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-3-22-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)充分性:因为 $\\left|a_{n+1}-a_{n}\\right|=1$ ,所以 $a_{n+1}-a_{n}\\leqslant1$ ,

所以 $a_{2025}=(a_{2025}-a_{2024})+(a_{2024}-a_{2023})+\\cdots+(a_{2}-a_{1})+a_{1}\\leqslant2024$

当且仅当 $a_{n + 1} - a_n = 1$ 时，等号成立，

又因为 $a_{2025}=2024$ ，故 $a_{n+1}-a_{n}=1$ ，所以数列 $\\{a_{n}\\}$ 是递增数列.

必要性: 因为 $\\left|a_{n+1}-a_{n}\\right|=1$ ，数列 $\\{a_{n}\\}$ 是递增数列，所以 $a_{n+1}-a_{n}=1$ ，

所以数列 $\\{a_{n}\\}$ 是以0为首项,公差为1的等差数列,

所以 $a_{2025}=0+(2025-1)\\times1=2024.$

(2) 因为 $c_{n}=b_{2n}$ ，由 $c_{n}<c_{n+1}$ ，得数列 $\\{c_{n}\\}$ 是单调递增数列，

所以数列 $\\{b_{n}\\}$ 的偶数项构成单调递增数列，

由题意得 $b_{2}=-1, b_{4}=0$ ，所以当 $b_{2n}\\geqslant0$ 时，有 $n\\geqslant2$ .

下面证明数列 $\\{b_{n}\\}$ 中相邻两项不可能同时为非负数.

假设数列 $\\{b_{n}\\}$ 中存在 $b_{i},b_{i+1}$ 同时为非负数，因为 $|b_{i+1}-b_{i}|=i,i\\in N^{*}$ ，

若 $b_{i + 1} - b_i = i$ ，则 $b_{i + 1} = b_i + i\\geqslant i > \\frac{i + 1 - 1}{2}$ ，与条件矛盾；

若 $b_{i + 1} - b_i = -i$ ，则 $b_{i} = b_{i + 1} + i\\geqslant i > \\frac{i - 1}{2}$ ，与条件矛盾，

即假设不成立, 即对任意正整数 $n, b_{n}$ 和 $b_{n+1}$ 中至少有一个小于 0;

由 $b_{2n} \\geqslant 0$ 对 $n \\geqslant 2$ 成立，所以当 $n \\geqslant 2$ 时， $b_{2n-1} \\leqslant 0, b_{2n+1} \\leqslant 0$ ，即 $b_{2n} > b_{2n-1}, b_{2n} > b_{2n+1}$ ，故 $b_{2n} - b_{2n-1} = 2n - 1, b_{2n-1} - b_{2n-2} = -(2n - 2)$ ，

故 $(b_{2n}-b_{2n-1})+(b_{2n-1}-b_{2n-2})=1$ ，即 $b_{2n}-b_{2n-2}=1,n\\geqslant2$ ，即 $c_{n}-c_{n-1}=1,n\\geqslant2$ ，

又 $c_{1} = b_{2} = -1, c_{2} = b_{4} = 0,$

所以，数列 $\\{c_{n}\\}$ 是 $c_{1}=-1$ ，公差为1的等差数列，所以 $c_{n}=-1+(n-1)=n-2$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-5-4-23",
    topicId: "topic-sec-4-5",
    title: `对于无穷数列 a_n，“若存在 a_m - a_k = t(m,k∈ N^*,m > k)，必有 a_m + 1 -`,
    content: `对于无穷数列 $\\{a_{n}\\}$ ，“若存在 $a_{m} - a_{k} = t(m,k\\in \\mathbf{N}^{*},m > k)$ ，必有 $a_{m + 1} - a_{k + 1}$ $= t$ ”，则称数列 $\\{a_n\\}$ 具有 $P(t)$ 性质.
(1) 若数列 $\\{a_{n}\\}$ 满足 $a_{n}=\\left\\{\\begin{aligned}&2n,n=1,2,\\\\ &2n-5,n\\geqslant3,n\\in\\mathbf{N}^{*},\\end{aligned}\\right.$ 判断数列 $\\{a_{n}\\}$ 是否具有 P(1) 性质？是否具有 P(4) 性质？
(2)对于无穷数列 $\\{a_{n}\\}$ ，设 $T=\\{x\\mid x=a_{j}-a_{i},i<j\\}$ ，求证：若数列 $\\{a_{n}\\}$ 具有 $P(0)$ 性质，则T必为有限集.
(3)已知 $\\{a_{n}\\}$ 是各项均为正整数的数列，且 $\\{a_{n}\\}$ 既具有P(2)性质，又具有P(3)性质，则是否存在正整数N,k，使得 $a_{N},a_{N+1},a_{N+2},\\cdots,a_{N+k},\\cdots$ 成等差数列？若存在，请加以`,
    preview: `对于无穷数列 ，“若存在 a_m - a_k = t(m,k N^*,m > k) ，必有 a_m + 1 - a_k + 1 = t ”，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-4-23-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `证明；若不存在，说明理由.

讲解

(1)由 $a_{n}=\\left\\{\\begin{aligned}&2n,n=1,2,\\\\ &2n-5,n\\geqslant3,n\\in\\mathbf{N}^{*},\\end{aligned}\\right.$

得 $a_{1}=2, a_{2}=4, a_{3}=1, a_{4}=3, a_{5}=5, a_{6}=7, \\cdots$ ，往后各项组成公差为 2 的等差数列，

因为 $a_5 - a_2 = 1$ ，但是 $a_6 - a_3 = 6 \\neq 1$ ，所以数列 $\\{a_n\\}$ 不具有 $P(1)$ 性质，

因为 $a_5 - a_3 = 4$ ，且 $a_6 - a_4 = 4$ ，所以数列 $\\{a_n\\}$ 具有 $P(4)$ 性质.

(2)因为数列 $\\{a_{n}\\}$ 具有P(0)性质，

所以一定存在一组最小的 m, k，且 m > k，满足 $a_{m} - a_{k} = 0$ ，即 $a_{m} = a_{k}$ ，

由性质 $P(0)$ 的含义可得 $a_{m+1}=a_{k+1}, a_{m+2}=a_{k+2}, \\cdots, a_{2m-k-1}=a_{m-1}, a_{2m-k}=a_{m}, \\cdots,$

所以数列 $\\{a_{n}\\}$ 中，从第k项开始的各项出现周期性规律：

$a_{k},a_{k+1},\\cdots,a_{m-1}$ 为一个周期中的各项，

所以数列 $\\{a_{n}\\}$ 中最多有m-1个不同的项，

所以 T 最多有 $C_{m-1}^{2}$ 个元素, 即 T 是有限集.

(3) 证明 因为 $\\{a_{n}\\}$ 既具有 P(2) 性质, 又具有 P(3) 性质,

所以存在 $M', N'$ ，使得 $a_{M'+p} - a_{M'} = 2, a_{N'+q} - a_{N'} = 3$ ，

其中 p, q 分别是满足上述关系式的最小的正整数，

由 $P(2)$ ， $P(3)$ 的含义可得 $a_{M' + p + k} - a_{M' + k} = 2, a_{N' + q + k} - a_{N' + k} = 3,$

若 $M' < N'$ ，则取 $k = N' - M'$ ，可得 $a_{N'+p} - a_{N'} = 2$ ;

若 $M^{\\prime} > N^{\\prime}$ ，则取 $k = M^{\\prime} - N^{\\prime}$ ，可得 $a_{M' + q} - a_{M'} = 3.$

记 $M=\\max\\{M',N'\\}$ ，则对于 $a_{M}$ ，

有 $a_{M + p} - a_M = 2, a_{M + q} - a_M = 3$ ，显然 $p \\neq q$

由 $P(2)$ , $P(3)$ 的含义可得 $a_{M+p+k}-a_{M+k}=2$ , $a_{N+q+k}-a_{N+k}=3$ ,

所以

$$
a _ {M + q p} - a _ {M} = (a _ {M + q p} - a _ {M + (q - 1) p}) + (a _ {M + (q - 1) p} - a _ {M + (q - 2) p}) + \\dots + a _ {M + p} - a _ {M} = 2 q,
$$

$$
a _ {M + p q} - a _ {M} = (a _ {M + p q} - a _ {M + (p - 1) q}) + (a _ {M + (p - 1) q} - a _ {M + (p - 2) q}) + \\dots + a _ {M + q} - a _ {M} = 3 p,
$$

所以 $a_{M+pq}=a_{M}+2q=a_{M}+3p,$

所以 2q = 3p.

又 p, q 是满足 $a_{M+p}-a_{M}=2, a_{M+q}-a_{M}=3$ 的最小正整数，

所以 q=3, p=2, $a_{M+2}-a_{M}=2$ , $a_{M+3}-a_{M}=3$ ,

所以 $a_{M + 2 + k} - a_{M + k} = 2, a_{M + 3 + k} - a_{M + k} = 3,$

$$
a _ {M + 2 k} = a _ {M + 2 (k - 1)} + 2 = \\dots = a _ {M} + 2 k,
$$

$$
a _ {M + 3 k} = a _ {M + 3 (k - 1)} + 3 = \\dots = a _ {M} + 3 k,
$$

取 $N=M+3$ ,

若 k 是偶数，则 $a_{N+k}=a_{N}+k$ ;

若 k 是奇数，则 $a_{N+k}=a_{N+3+(k-3)}=a_{N+3}+(k-3)=a_{N}+3+(k-3)=a_{N}+k$

所以 $a_{N+k}=a_{N}+k,$

所以 $a_{N}, a_{N+1}, a_{N+2}, \\cdots, a_{N+k}, \\cdots$ 是公差为 1 的等差数列.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-5-5-24",
    topicId: "topic-sec-4-5",
    title: `素数进位权重函数与组合计数`,
    content: `设 $p$ 为素数，对任意的非负整数 $n$ ，记 $n = a_0p^0 +a_1p^1 +\\dots +a_kp^k,W_p(n) =$ $a_0 + a_1 + a_2 + \\dots +a_k$ ，其中 $a_i\\in \\{0,1,2,\\dots ,p - 1\\} (0\\leqslant i\\leqslant k)$ ，如果非负整数 $n$ 满足 $W_{p}(n)$ 能被 $p$ 整除，则称 $n$ 对 $p$ “协调”.
(1) 分别判断 194, 195, 196 这三个数是否对 3“协调”，并说明理由；

(2) 判断并证明在 $p^{2}n, p^{2}n+1, p^{2}n+2, \\cdots, p^{2}n+(p^{2}-1)$ 这 $p^{2}$ 个数中，有多少个数对 p“协调”；

(3) 计算前 $p^{2}$ 个对 p“协调”的非负整数之和.`,
    preview: `设 p 为素数，对任意的非负整数 n ，记 a_0 + a_1 + a_2 + +a_k ，其中 ，如果非负整数 n 满足 W_p(n) 能被 p 整除，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-5-24-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 因为 $194 = 2 \\times 3^{0} + 1 \\times 3^{1} + 0 \\times 3^{2} + 1 \\times 3^{3} + 2 \\times 3^{4}$ ,

所以 $W_{3}(194)=2+1+0+1+2=6$ ,

因为 $195=0\\times3^{0}+2\\times3^{1}+0\\times3^{2}+1\\times3^{3}+2\\times3^{4}$

所以 $W_{3}(195)=0+2+0+1+2=5$ ,

因为 $196=1\\times3^{0}+2\\times3^{1}+0\\times3^{2}+1\\times3^{3}+2\\times3^{4}$

所以 $W_{3}(196)=1+2+0+1+2=6$ ，所以 194,196 对 3“协调”，195 对 3 不“协调”.

(2) 先证引理: 对于任意的非负整数 t, 在 $pt, pt + 1, pt + 2, \\cdots, pt + (p - 1)$ 中有且仅有一个数对 p“协调”.

证明如下: 设 $pt=b_{0}p^{0}+b_{1}p^{1}+b_{2}p^{2}+\\cdots+b_{k}p^{k}$ ,

由于 pt 是 p 的倍数, 所以 $b_{0}=0$ , 所以 $pt+j=jp^{0}+b_{1}p^{1}+b_{2}p^{2}+\\cdots+b_{k}p^{k}$ ,

即 $pt+j$ 对于 $p^{0}$ 这一项的系数为 $j(0 \\leqslant j \\leqslant p-1)$ ,

所以， $W_{p}(pt+j)=(b_{1}+b_{2}+\\cdots+b_{k})+j(0\\leqslant j\\leqslant p-1)$

根据整除原理可知，在 $W_{p}(pt + j)(0\\leqslant j\\leqslant p - 1)$ 中有且仅有一个数能被 $p$ 整除，

所以，在 $pt, pt+1, pt+2, \\cdots, pt+(p-1)$ 中有且仅有一个数对 p“协调”.

接下来把以上 $p^{2}$ 个数进行分组, 分成以下 p 组(每组 p 个数):

$$
\\begin{array}{c c c c} p ^ {2} n & p ^ {2} n + 1 & p ^ {2} n + 2 & p ^ {2} n + (p - 1) \\\\ p ^ {2} n + p & p ^ {2} n + p + 1 & p ^ {2} n + p + 2 & p ^ {2} n + (2 p - 1) \\\\ \\dots & \\dots & \\dots & \\dots \\end{array}
$$

$$
p ^ {2} n + (p - 1) p \\quad p ^ {2} n + (p - 1) p + 1 \\quad p ^ {2} n + (p - 1) p + 2 \\quad p ^ {2} n + (p ^ {2} - 1)
$$

根据引理可知，在以上每组里恰有1个数对 $p$ “协调”，所以共有 $p$ 个数对 $p$ “协调”.

(3)继续考虑 $p^{2}n, p^{2}n+1, p^{2}n+2, \\cdots, p^{2}n+(p^{2}-1)$ 这 $p^{2}$ 个数（分成 p 组，每组 p 个数）：

$$
\\begin{array}{c c c c c} p ^ {2} n & p ^ {2} n + 1 & p ^ {2} n + 2 & \\dots & p ^ {2} n + (p - 1) \\\\ p ^ {2} n + p & p ^ {2} n + p + 1 & p ^ {2} n + p + 2 & \\dots & p ^ {2} n + (2 p - 1) \\\\ \\dots & \\dots & \\dots & \\dots & \\dots \\end{array}
$$

$$
p ^ {2} n + (p - 1) p \\quad p ^ {2} n + (p - 1) p + 1 \\quad p ^ {2} n + (p - 1) p + 2 \\quad \\dots \\quad p ^ {2} n + (p ^ {2} - 1)
$$

由(2)的引理可知每一行里有且只有一个数对 $p$ “协调”，下面证明每一列里有且仅有一个数对 $p$ “协调”. 证明如下：

设某一列第一个数为 $p^{2}n+t(0\\leqslant n\\leqslant p-1,0\\leqslant t\\leqslant p-1)$ ,

则 $p^{2}n+t=tp^{0}+0p^{1}+np^{2}$ ，所以 $W_{p}(p^{2}n+t)=n+t$ ，

同理当 $0 \\leqslant s \\leqslant p - 1$ 时， $W_{p}(p^{2}n + sp + t) = n + s + t$ ，所以当 $0 \\leqslant s \\leqslant p - 1$ 时，

集合 $\\{p^{2}n+sp+t\\mid0\\leqslant s\\leqslant p-1\\}$ 中的p个数中有且只有1个数对p“协调”.

注意到数阵中每一个数向右一个数增加1, 向下一个数增加 p,

所以 p 个数对 p“协调”的数之和为：

$$
(p ^ {2} n) \\cdot p + (1 + 2 + \\dots + p - 1) + (1 + 2 + \\dots + p - 1) \\cdot p = n p ^ {3} + \\frac {1}{2} p (p ^ {2} - 1),
$$

进一步,前 $p^{2}$ 个对 p“协调”的非负整数之和为:

$$
\\sum_ {n = 0} ^ {p - 1} \\left[ n p ^ {3} + \\frac {1}{2} p (p ^ {2} - 1) \\right] = \\frac {p (p - 1)}{2} \\cdot p ^ {3} + \\frac {p ^ {2} (p ^ {2} - 1)}{2} = \\frac {p ^ {5} - p ^ {2}}{2}.
$$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-5-6-25",
    topicId: "topic-sec-4-5",
    title: `无穷数列 a_1, a_2, ·s, a_n, ·s`,
    content: `无穷数列 $a_{1}, a_{2}, \\cdots, a_{n}, \\cdots$ 的定义如下: 如果 n 是偶数, 就对 n 尽可能多次地除以 2, 直到得出一个奇数, 这个奇数就是 $a_{n}$ ; 如果 n 是奇数, 就对 $3n+1$ 尽可能多次地除以 2, 直到得出一个奇数, 这个奇数就是 $a_{n}$ .
(1) 写出这个数列的前 7 项；
(2)如果 $a_{n}=m$ 且 $a_{m}=n$ ，求 m,n 的值；
(3) 记 $a_{n}=f(n), n \\in \\mathbf{N}^{*}$ ，求一个正整数 n，满足

$$
n <   f (n) <   f (f (n)) <   \\dots <   \\underbrace {f (f (\\cdots f (n) \\cdots))} _ {2 0 2 4 \\text {个} f}.
$$`,
    preview: `无穷数列 a_1, a_2, ·s, a_n, ·s 的定义如下: 如果 n 是偶数, 就对 n 尽可能多次地除以 2, 直到得出一个奇数, 这个奇数就是 a_`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-6-25-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `## 讲解

(1)根据题意, $a_{1}=(3\\times1+1)\\div2\\div2=1,a_{2}=2\\div2=1$ ,

$$
a _ {3} = (3 \\times 3 + 1) \\div 2 = 5, a _ {4} = 4 \\div 2 \\div 2 = 1, a _ {5} = (3 \\times 5 + 1) \\div 2 ^ {4} = 1,
$$

$$
a _ {6} = 6 \\div 2 = 3, a _ {7} = (3 \\times 7 + 1) \\div 2 = 1 1.
$$

(2)由已知,m,n均为奇数,不妨设 $n\\leqslant m$ .

当 n=1 时, 因为 $a_{1}=1$ , 所以 m=1, 故 m=n=1;

当 $n > 1$ 时，因为 $\\frac{3n + 1}{4} < n \\leqslant m$ ，而 $n$ 为奇数， $a_{n} = m$ ，所以 $m = \\frac{3n + 1}{2}$ .

又 $m$ 为奇数， $a_{m} = n$ ，所以存在 $k \\in \\mathbf{N}^{*}$ ，使得 $n = \\frac{3m + 1}{2^{k}}$ 为奇数。

所以 $2^{k}n = 3m + 1 = \\frac{3(3n + 1)}{2} +1 = \\frac{9n + 5}{2}$

而 $4n < \\frac{9n + 5}{2} < 6n$ ，所以 $4n < 2^k n < 6n$ ，即 $4 < 2^k < 6, k \\in \\mathbf{N}^*$ ，无解.

所以 m=n=1.

(3) 显然, n 不能为偶数, 否则 $f(n) \\leqslant \\frac{n}{2} < n$ , 不满足 $n < f(n)$ .

所以，n 为正奇数.

又 $f(1)=a_{1}=1$ ，所以 $n\\geqslant3$ .

设 $n=4k+1$ 或 $n=4k-1, k\\in N^{*}$ .

当 $n = 4k + 1$ 时， $f(n) = \\frac{3(4k + 1) + 1}{4} = 3k + 1 < 4k + 1 = n$ ，不满足 $n < f(n)$ ；

当 $n = 4k - 1$ 时， $f(n) = \\frac{3(4k - 1) + 1}{2} = 6k - 1 > 4k - 1 = n$ ，即 $n < f(n)$ .
所以，取 $n = 2^{2025}k - 1, k \\in \\mathbf{N}^*$ 时，

$$
\\begin{array}{l} f (n) = \\frac {3 (2 ^ {2 0 2 5} k - 1) + 1}{2} = 3 \\times 2 ^ {2 0 2 4} k - 1 <   f (f (n)) = \\frac {3 (3 \\times 2 ^ {2 0 2 4} k - 1) + 1}{2} = 3 ^ {2} \\times 2 ^ {2 0 0 3} k - 1 \\\\ <   \\dots <  \\underbrace {f (f (\\cdots f (n) \\cdots))} _ {2 0 2 3 \\text {个} f} = \\frac {3 \\left(3 ^ {2 0 2 2} \\times 2 ^ {3} k - 1\\right) + 1}{2} = 3 ^ {2 0 2 3} \\times 2 ^ {2} k - 1 \\\\ <   \\underbrace {f (f (\\cdots f (n) \\cdots))} _ {2 0 2 4 \\text {个} f} = \\frac {3 \\left(3 ^ {2 0 2 3} \\times 2 ^ {2} k - 1\\right) + 1}{2} = 3 ^ {2 0 2 4} \\times 2 k - 1, \\\\ \\end{array}
$$

即 $n<f(n)<f(f(n))<\\cdots<\\underbrace{f(f(\\cdots f(n)\\cdots))}_{2024个f}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-5-7-26",
    topicId: "topic-sec-4-5",
    title: `已知集合 A = sum_i=1^m 2^a_i mid 0 ≤ a_1 < a_2 < … < a_m, a_i`,
    content: `已知集合 $A = \\left\\{\\sum_{i=1}^{m} 2^{a_i} \\mid 0 \\leqslant a_1 < a_2 < \\cdots < a_m, a_i \\in \\mathbb{N}\\right\\}$ , 定义: 当 $m = t$ 时, 把集合 $A$ 中所有的数从小到大排列成数列 $\\{b(t)_n\\}$ , 数列 $\\{b(t)_n\\}$ 的前 $n$ 项和为 $S(t)_n$ . 例如: $t = 2$ 时, $b(2)_1 = 2^0 + 2^1 = 3, b(2)_2 = 2^0 + 2^2 = 5, b(2)_3 = 2^1 + 2^2 = 6, b(2)_4 = 2^0 + 2^3 = 9, \\cdots, S(2)_4 = b(2)_1 + b(2)_2 + b(2)_3 + b(2)_4 = 23$ .
(1) 写出 $b(2)_{5}$ , $b(2)_{6}$ ，并求 $S(2)_{10}$ .
(2) 判断 88 是否为数列 $\\{b(3)_{n}\\}$ 中的项. 若是, 求出是第几项; 若不是, 请说明理由.
(3) 若 2024 是数列 $\\{b(t)_{n}\\}$ 中的某一项 $b(t_{0})_{n_{0}}$ ，求 $t_{0}, n_{0}$ 及 $S(t_{0})_{n_{0}}$ 的值.`,
    preview: `已知集合 , 定义: 当 m = t 时, 把集合 A 中所有的数从小到大排列成数列 , 数列 的前 n 项和为 S(t)_n . 例如: t = 2 时, .`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-7-26-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `## 讲解

(1) 因为 m=2，此时 $A=\\{2^{a_{1}}+2^{a_{2}}\\mid0\\leqslant a_{1}<a_{2},a_{1},a_{2}\\in\\mathbf{N}\\}$

$$
b (2) _ {5} = 2 ^ {3} + 2 ^ {1} = 1 0, b (2) _ {6} = 2 ^ {3} + 2 ^ {2} = 1 2,
$$

所以 $S(2)_{10} = 4(2^0 + 2^1 + 2^2 + 2^3 + 2^4) = 124.$

(2) 当 m=3 时， $A=\\{2^{a_{1}}+2^{a_{2}}+2^{a_{3}}\\mid0\\leqslant a_{1}<a_{2}<a_{3},a_{1},a_{2},a_{3}\\in\\mathbf{N}\\}$

因为 $88 = 2^{6} + 2^{4} + 2^{3}$ ，所以88是数列 $\\{b(3)_n\\}$ 中的项，比它小的项分别有

$$
2 ^ {a _ {1}} + 2 ^ {a _ {2}} + 2 ^ {a _ {3}}, 0 \\leqslant a _ {1} <   a _ {2} <   a _ {3} \\leqslant 5, a _ {1}, a _ {2}, a _ {3} \\in \\mathbf {N}, C _ {6} ^ {3} \\text {个},
$$

有 $2^{a_1} + 2^{a_2} + 2^6, 0 \\leqslant a_1 < a_2 \\leqslant 3, a_1, a_2 \\in \\mathbf{N}, C_4^2$ 个，

有 $2^{a_1} + 2^4 + 2^6, 0 \\leqslant a_1 \\leqslant 2, a_1 \\in \\mathbf{N}, C_3^1$ 个，

所以比88小的项共有 $C_6^3 + C_4^2 + C_3^1 = 29$ 个，故88是数列 $\\{b(3)_n\\}$ 的第30项.

(3) 因为 $2024 = 2^{10} + 2^{9} + 2^{8} + 2^{7} + 2^{6} + 2^{5} + 2^{3}$ ,

所以 2024 是数列 $\\{b(7)_{n}\\}$ 中的项, 故 $t_{0}=7$ ,

则当 m=7 时， $A=\\{2^{a_{1}}+2^{a_{2}}+\\cdots+2^{a_{7}}\\mid0\\leqslant a_{1}<a_{2}<\\cdots<a_{7},a_{1},a_{2},\\cdots,a_{7}\\in\\mathbf{N}\\}$

方法一:比它小的项分别有以下7种情况:

① $2^{a_{1}}+2^{a_{2}}+\\cdots+2^{a_{7}},0\\leqslant a_{1}<a_{2}<\\cdots<a_{7}\\leqslant9,a_{1},a_{2},\\cdots,a_{7}\\in\\mathbf{N},10$ 个数字任取7个得 $C_{10}^{7}$ 个，
② $2^{a_{1}}+2^{a_{2}}+\\cdots+2^{a_{6}}+2^{10},0\\leqslant a_{1}<a_{2}<\\cdots<a_{6}\\leqslant8,a_{1},a_{2},\\cdots,a_{6}\\in N$ ，得 $C_{9}^{6}$ 个，
③ $2^{a_{1}}+2^{a_{2}}+\\cdots+2^{a_{5}}+2^{9}+2^{10},0\\leqslant a_{1}<a_{2}<\\cdots<a_{5}\\leqslant7,a_{1},a_{2},\\cdots,a_{5}\\in N$ ，得 $C_{8}^{5}$ 个，
④ $2^{a_{1}}+2^{a_{2}}+2^{a_{3}}+2^{a_{4}}+2^{8}+2^{9}+2^{10},0\\leqslant a_{1}<a_{2}<a_{3}<a_{4}\\leqslant6,a_{1},a_{2},\\cdots,a_{4}\\in\\mathbf{N}$ ，得 $C_{7}^{4}$ 个，
⑤ $2^{a_{1}}+2^{a_{2}}+2^{a_{3}}+2^{7}+2^{8}+2^{9}+2^{10},0\\leqslant a_{1}<a_{2}<a_{3}\\leqslant5,a_{1},a_{2},a_{3}\\in\\mathbf{N}$ ，得 $C_{6}^{3}$ 个，

⑥ $2^{a_{1}}+2^{a_{2}}+2^{6}+2^{7}+2^{8}+2^{9}+2^{10},0\\leqslant a_{1}<a_{2}\\leqslant4,a_{1},a_{2}\\in N,$ 得 $C_{5}^{2}$ 个，
⑦ $2^{a_{1}}+2^{5}+2^{6}+2^{7}+2^{8}+2^{9}+2^{10},0\\leqslant a_{1}\\leqslant2,a_{1}\\in N,$ 得 $C_{3}^{1}$ 个，

所以比 2024 小的项共有 $C_{10}^{7} + C_{9}^{6} + C_{8}^{5} + C_{7}^{4} + C_{6}^{3} + C_{5}^{2} + C_{3}^{1}$ 个，

其中 $C_{10}^{7} + C_{9}^{6} + C_{8}^{5} + C_{7}^{4} + C_{6}^{3} + C_{5}^{2} + C_{3}^{1} = C_{10}^{3} + C_{9}^{3} + C_{8}^{3} + C_{7}^{3} + C_{6}^{3} + C_{5}^{3} + 3$

$$
= C _ {1 0} ^ {3} + C _ {9} ^ {3} + C _ {8} ^ {3} + C _ {7} ^ {3} + C _ {6} ^ {3} + C _ {5} ^ {3} + C _ {5} ^ {4} + 3 - C _ {5} ^ {4} = C _ {1 1} ^ {4} - 2 = 3 2 8,
$$

故 2024 是数列 $\\{b(7)_{n}\\}$ 的第 329 项，即 $n_{0}=329$ .

方法二： $A=\\{2^{a_{1}}+2^{a_{2}}+\\cdots+2^{a_{7}}\\mid0\\leqslant a_{1}<a_{2}<\\cdots<a_{7}\\leqslant10,a_{1},a_{2},\\cdots,a_{7}\\in\\mathbf{N}\\}$ 共有元素 $C_{11}^{7}$ 个，最大的是 $2^{10}+2^{9}+2^{8}+2^{7}+2^{6}+2^{5}+2^{4}$ ，其次为 $2^{10}+2^{9}+2^{8}+2^{7}+2^{6}+2^{5}+2^{3}=2024$ ，

所以 2024 是数列 $\\{b(7)_{n}\\}$ 的第 $C_{11}^{7}-1=329$ 项，即 $n_{0}=329$ .

在总共 $C_{11}^{7}=330$ 项中，含有 $2^{0}$ 的项共有 $C_{10}^{6}$ 个，同理 $2^{1}, 2^{2}, \\cdots, 2^{10}$ 都各有 $C_{10}^{6}$ 个，

所以 $S(7)_{330}=C_{10}^{6}\\cdot(2^{0}+2^{1}+\\cdots+2^{10})=210\\times2047=429870,$

则 $S(t_0)_{n_0} = S(7)_{329} = S(7)_{330} - b(7)_{330} = 429870 - 2032 = 427838.$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-5-1-27",
    topicId: "topic-sec-4-5",
    title: `在平面直角坐标系 xOy 中, 已知椭圆 Gamma: x^2a^2 + y^2b^2 =`,
    content: `在平面直角坐标系 $xOy$ 中, 已知椭圆 $\\Gamma: \\frac{x^{2}}{a^{2}} + \\frac{y^{2}}{b^{2}} = 1 (a > b > 0)$ 的离心率为 $\\frac{\\sqrt{6}}{3}$ , 直线 $l$ 与 $\\Gamma$ 相切, 与圆 $O: x^{2} + y^{2} = 3a^{2}$ 相交于 $A, B$ 两点. 当 $l$ 垂直于 $x$ 轴时, $|AB| = 2\\sqrt{6}$ .
(1) 求 $\\Gamma$ 的方程；
(2)对于给定的点集 M, N，若 M 中的每个点在 N 中都存在距离最小的点，且所有最小距离的最大值存在，则记此最大值为 $d(M, N)$ .
(i) 若 M, N 分别为线段 AB 与圆 O 上任意一点，P 为圆 O 上一点，当 $\\triangle PAB$ 的面积最大时，求 $d(M, N)$ ;
(ii) 若 $d(M, N), d(N, M)$ 均存在，记两者中的较大者为 $H(M, N)$ . 已知 $H(X, Y)$ ， $H(Y, Z), H(X, Z)$ 均存在，证明： $H(X, Z) + H(Y, Z) \\geqslant H(X, Y)$ .`,
    preview: `在平面直角坐标系 xOy 中, 已知椭圆 的离心率为 √63 , 直线 l 与 相切, 与圆 O: x^2 + y^2 = 3a^2 相交于 A, B 两点.`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-1-27-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 因为当 l 垂直于 x 轴时， $\\left|AB\\right|=2\\sqrt{6}$ ，而直线 $l: x=\\pm a$ 与 $\\Gamma$ 相切，

则 $2\\sqrt{3a^{2}-a^{2}}=2\\sqrt{6}$ ，解得 $a=\\sqrt{3}$ ，又椭圆 $\\Gamma$ 的离心率为 $\\frac{\\sqrt{6}}{3}$ ，

则椭圆 $\\Gamma$ 的半焦距 $c=\\sqrt{2}, b=\\sqrt{a^{2}-c^{2}}=1$ ,

所以 $\\Gamma$ 的方程为 $\\frac{x^{2}}{3} + y^{2} = 1$ .

(2)(i)当 l 的斜率存在时, 设 l 的方程为 $y=kx+m$ ,

由 $\\left\\{\\begin{aligned}y&=kx+m,\\\\ x^{2}&+3y^{2}=3,\\end{aligned}\\right.$ 消去y得 $(3k^{2}+1)x^{2}+6kmx+3m^{2}-3=0,$

由直线 l 与椭圆 $\\Gamma$ 相切，得 $\\Delta=(6km)^{2}-4(3k^{2}+1)(3m^{2}-3)=0$ ，

整理得 $m^{2}=3k^{2}+1$ ，

于是圆心 O 到直线 l 的距离 $d=\\frac{|m|}{\\sqrt{k^{2}+1}}=\\sqrt{\\frac{3k^{2}+1}{k^{2}+1}}=\\sqrt{3-\\frac{2}{k^{2}+1}}\\in\\left[1,\\sqrt{3}\\right)$ ,

则 $\\triangle PAB$ 的面积为 $S_{\\triangle PAB} \\leqslant \\frac{1}{2}(d + 3) \\cdot |AB| = \\frac{1}{2}(d + 3) \\cdot 2\\sqrt{9 - d^2}$

$$
= \\sqrt {(3 - d) (d + 3) ^ {3}},
$$

设 $f(d) = (3 - d)(d + 3)^{3}, 1 \\leqslant d < \\sqrt{3}$ , 求导得 $f'(d) = 2(d + 3)^{2}(3 - 2d)$ ,

当 $1 \\leqslant d < \\frac{3}{2}$ 时， $f'(d) > 0$ ，函数 $f(d)$ 单调递增，

当 $\\frac{3}{2}<d<\\sqrt{3}$ 时， $f'(d)<0$ ，函数 $f(d)$ 单调递减，

因此，当 $d=\\frac{3}{2}$ 时， $f(d)$ 取得最大值，此时 $(S_{\\triangle PAB})_{\\max}=\\frac{27\\sqrt{3}}{4}$ .

当 $l$ 的斜率不存在时，由(1)知， $S \\leqslant \\frac{1}{2} \\times (\\sqrt{3} + 3) \\times 2\\sqrt{6} = 3\\sqrt{2} + 3\\sqrt{6}$ ，

由 $\\left(\\frac{9\\sqrt{3}}{4}\\right)^{2}-\\left(\\sqrt{2}+\\sqrt{6}\\right)^{2}=\\frac{115}{16}-4\\sqrt{3}>7-4\\sqrt{3}>0$ ，得 $\\frac{27\\sqrt{3}}{4}>3\\sqrt{2}+3\\sqrt{6}$ ，则 $d=\\frac{3}{2}$ .

如图 4-5-8 所示, 对于线段 AB 上任意点 E, 连接 OE 并延长与圆 O 交于点 F, 则 F 是圆上与 E 最近的点, 当 E 为线段 AB 的中点时, EF 取得最大值 $\\frac{3}{2}$ , 所以 $d(M, N) = \\frac{3}{2}$ .

![](images/6c0d4614db4a5ab38a696e443dc01dbccbc015f41e8358afd70575427791e3e2.jpg)

图4-5-8

(ii) 因为 $H(X,Y)$ , $H(Y,Z)$ , $H(X,Z)$ 均存在,

设点 $X_{1}, X_{2} \\in X, Y_{1}, Y_{2} \\in Y, Z_{1}, Z_{2} \\in Z,$

且 $H(X,Z)=\\left|X_{1}Z_{1}\\right|$ , $H(Y,Z)=\\left|Y_{1}Z_{2}\\right|$ ,

$$
H (X, Y) = \\left| X _ {2} Y _ {2} \\right|.
$$

设 $Y_{2}$ 是集合 $Y$ 中到 $X_{2}$ 的最近点，根据对称性，

不妨设 $H(X,Y)=d(X,Y)=\\left|X_{2}Y_{2}\\right|$ ,

令点 $X_{2}$ 到集合 $Z$ 的最近点为 $Z_{3}$ ，点 $Z_{3}$ 到集合 $Y$ 的最近点为 $Y_{3}$ ，

因为 $|X_1Z_1|$ 是集合 $X$ 中所有点到集合 $Z$ 最近点距离的最大值，

则 $|X_1Z_1| \\geqslant |X_2Z_3|$ ，因为 $|Y_1Z_2|$ 是集合 $Y$ 中所有点到集合 $Z$ 最近点距离的最大值，则 $|Y_1Z_2| \\geqslant |Y_3Z_3|$ ，

因此， $H(X,Z)+H(Y,Z)=\\left|X_{1}Z_{1}\\right|+\\left|Y_{1}Z_{2}\\right|\\geqslant\\left|X_{2}Z_{3}\\right|+\\left|Y_{3}Z_{3}\\right|$

而在坐标平面中， $\\left|X_{2}Z_{3}\\right|+\\left|Y_{3}Z_{3}\\right|\\geqslant\\left|X_{2}Y_{3}\\right|$

又点 $Y_{2}$ 是集合 Y 中到点 $X_{2}$ 的最近点，

则 $\\left|X_{2}Y_{3}\\right|\\geqslant\\left|X_{2}Y_{2}\\right|$ ，所以 $H(X,Z)+H(Y,Z)\\geqslant H(X,Y)$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-5-2-28",
    topicId: "topic-sec-4-5",
    title: `直线族是指具有某种共同性质的直线的全体,例如 x=ty+1`,
    content: `直线族是指具有某种共同性质的直线的全体,例如 $x=ty+1$ 表示过点 (1,0) 的直线,直线的包络曲线定义为: 直线族中的每一条直线都是该曲线上某点处的切线,且该曲线上的每一点处的切线都是该直线族中的某条直线.
(1) 若圆 $C_{1}: x^{2} + y^{2} = 1$ 是直线族 $mx + ny = 1 (m, n \\in \\mathbb{R})$ 的包络曲线，求 m, n 满足的关系式.
(2) 若点 $P(x_0, y_0)$ 不在直线族 $\\Omega: (2a - 4)x + 4y + (a - 2)^2 = 0 (a \\in \\mathbf{R})$ 的任意一条直线上，求 $y_0$ 的取值范围和直线族 $\\Omega$ 的包络曲线 $E$ .
(3)在(2)的条件下,过曲线E上A,B两点作曲线E的切线 $l_{1},l_{2}$ ,其交点为P.已知点 $C(0,1)$ ,若A,B,C三点不共线,探究 $\\angle PCA=\\angle PCB$ 是否成立,请说明理由.`,
    preview: `直线族是指具有某种共同性质的直线的全体,例如 x=ty+1 表示过点 (1,0) 的直线,直线的包络曲线定义为: 直线族中的每一条直线都是该曲线上某点处的切线,`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-2-28-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1)由定义可知, $mx+ny=1$ 与 $x^{2}+y^{2}=1$ 相切,

则圆 $C_{1}$ 的圆心 $(0,0)$ 到直线 $mx+ny=1$ 的距离等于 1，

则 $d=\\frac{1}{\\sqrt{m^{2}+n^{2}}}=1$ ，即 $m^{2}+n^{2}=1$ 。

(2) 点 $P(x_0, y_0)$ 不在直线族 $\\Omega: (2a - 4)x + 4y + (a - 2)^2 = 0 (a \\in \\mathbf{R})$ 的任意一条直线上，

所以无论 a 取何值， $(2a-4)x_{0}+4y_{0}+(a-2)^{2}=0$ 无解.

将 $(2a-4)x_{0}+4y_{0}+(a-2)^{2}=0$ 整理成关于a的一元二次方程，

即 $a^2 + (2x_0 - 4)a + (4 + 4y_0 - 4x_0) = 0.$

若该方程无解，则 $\\Delta = (2x_0 - 4)^2 - 4(4 + 4y_0 - 4x_0) < 0$ ，即 $y_0 > \\frac{x_0^2}{4}$ .

证明 在 $y=\\frac{x^{2}}{4}$ 上任取一点 $Q\\left(x_{1},\\frac{x_{1}^{2}}{4}\\right)$ , $y=\\frac{x^{2}}{4}$ 在该点处的切线斜率为 $k=\\frac{x_{1}}{2}$ ,

于是可以得到 $y = \\frac{x^2}{4}$ 在点 $Q\\left(x_1, \\frac{x_1^2}{4}\\right)$ 处的切线方程为 $y = \\frac{x_1}{2} x - \\frac{x_1^2}{4}$ ，

即 $-2x_{1}x + 4y + x_{1}^{2} = 0.$

令直线族 $\\Omega:(2a-4)x+4y+(a-2)^{2}=0$ 中 $2a-4=-2x_{1}$

则直线为 $-2x_{1}x+4y+x_{1}^{2}=0$ ，

所以,该曲线上的每一点处的切线都是该直线族中的某条直线,而对任意 $a \\in R$ , $(2a - 4)x + 4y + (a - 2)^{2} = 0$ 都是抛物线在点 $\\left(2 - a, \\frac{(2 - a)^{2}}{4}\\right)$ 处的切线.

所以直线族 $\\Omega$ 的包络曲线 E 为 $y=\\frac{x^{2}}{4}$ .

(3)`,
      },
      {
        id: "prob-sec-4-5-2-28-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `已知 $C(0,1)$ ，设 $A(x_{1},y_{1})$ ， $B(x_{2},y_{2})$ ，

则 $\\overrightarrow{CA} = (x_1, y_1 - 1), \\overrightarrow{CB} = (x_2, y_2 - 1), |\\overrightarrow{CA}| = \\frac{x_1^2}{4} + 1, |\\overrightarrow{CB}| = \\frac{x_2^2}{4} + 1;$

由(2)知 $y = \\frac{x^2}{4}$ 在点 $A(x_1, y_1)$ 处的切线方程为 $y = \\frac{x_1}{2} x - \\frac{x_1^2}{4}$ ;

同理 $y = \\frac{x^2}{4}$ 在点 $B(x_2, y_2)$ 处的切线方程为 $y = \\frac{x_2}{2} x - \\frac{x_2^2}{4}$ ;

联立 $\\left\\{\\begin{aligned}y&=\\frac{x_{1}}{2}x-\\frac{x_{1}^{2}}{4},\\\\ y&=\\frac{x_{2}}{2}x-\\frac{x_{2}^{2}}{4},\\end{aligned}\\right.$ 可得 $P\\left(\\frac{x_{1}+x_{2}}{2},\\frac{x_{1}x_{2}}{4}\\right)$ ，所以 $\\overrightarrow{CP}=\\left(\\frac{x_{1}+x_{2}}{2},\\frac{x_{1}x_{2}}{4}-1\\right)$ .

因此 $\\overrightarrow{CA} \\cdot \\overrightarrow{CP} = x_1 \\cdot \\left(\\frac{x_1 + x_2}{2}\\right) + \\left(\\frac{x_1 x_2}{4} - 1\\right)\\left(\\frac{x_1^2}{4} - 1\\right)$

$$
= \\frac {x _ {1} ^ {2}}{4} + \\frac {x _ {1} x _ {2}}{4} + \\frac {x _ {1} ^ {3} x _ {2}}{1 6} + 1 = \\left(\\frac {x _ {1} ^ {2}}{4} + 1\\right) \\left(\\frac {x _ {1} x _ {2}}{4} + 1\\right),
$$

同理 $\\overrightarrow{CB} \\cdot \\overrightarrow{CP} = \\left(\\frac{x_2^2}{4} + 1\\right)\\left(\\frac{x_1x_2}{4} + 1\\right)$ .

所以 $\\frac{\\overrightarrow{CA} \\cdot \\overrightarrow{CP}}{|\\overrightarrow{CA}| |\\overrightarrow{CP}|} = \\frac{\\left(\\frac{x_1^2}{4} + 1\\right)\\left(\\frac{x_1x_2}{4} + 1\\right)}{|\\overrightarrow{CP}| \\left(\\frac{x_1^2}{4} + 1\\right)} = \\frac{\\left(\\frac{x_1x_2}{4} + 1\\right)}{|\\overrightarrow{CP}|},$

$\\frac{\\overrightarrow{CB}\\cdot\\overrightarrow{CP}}{|\\overrightarrow{CB}||\\overrightarrow{CP}|} = \\frac{\\left(\\frac{x_2^2}{4} + 1\\right)\\left(\\frac{x_1x_2}{4} + 1\\right)}{|\\overrightarrow{CP}| \\left(\\frac{x_2^2}{4} + 1\\right)} = \\frac{\\left(\\frac{x_1x_2}{4} + 1\\right)}{|\\overrightarrow{CP}|},$ 即 $\\frac{\\overrightarrow{CA}\\cdot\\overrightarrow{CP}}{|\\overrightarrow{CA}||\\overrightarrow{CP}|} = \\frac{\\overrightarrow{CB}\\cdot\\overrightarrow{CP}}{|\\overrightarrow{CB}||\\overrightarrow{CP}|},$

可得 $\\cos\\angle PCA=\\cos\\angle PCB$ ，所以 $\\angle PCA=\\angle PCB$ 成立.`,
      },
      {
        id: "prob-sec-4-5-2-28-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `如图 4-5-9 所示, 过 A, B 分别作准线的垂线 $AA'$ , $BB'$ , 连接 $A'P$ , $B'P$ , $A'(x_A, -1)$ ,

因为 $k_{PA} = y' \\mid_{x=x_A} = \\frac{x_A}{2}, k_{A'C} = \\frac{-1-1}{x_A} = \\frac{-2}{x_A}$ ,

显然 $k_{PA} \\cdot k_{A'C} = -1$ .

又由抛物线定义得 $|AA'|=|AC|$ ,

故 PA 为线段 $A^{\\prime}C$ 的中垂线, 得到 $\\left|PA^{\\prime}\\right|=\\left|PC\\right|$ ,

即 $\\angle PA'A=\\angle PCA.$

同理可知 $\\angle PB^{\\prime}B=\\angle PCB,|PB^{\\prime}|=|PC|$ ,

所以 $PA' = PC = PB'$ ，即 $\\angle PA'B' = \\angle PB'A'$ .

则 $\\angle PA'A=\\angle PA'B'+90^{\\circ}=\\angle PB'A'+90^{\\circ}=\\angle PB'B.$

所以 $\\angle PCA=\\angle PCB$ 成立.

![](images/6cf15880f22caebe9ba4d68c3ee09cb28909d248e01b8c4e1b103eb2319dda60.jpg)

图4-5-9`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-5-3-29",
    topicId: "topic-sec-4-5",
    title: `蜂房是自然界最神奇的“建筑”之一`,
    content: `蜂房是自然界最神奇的“建筑”之一，如图4-5-10甲所示，蜂房结构是正六棱柱截去三个相等的三棱锥 $H - ABC, J - CDE, K - EFA$ ，再分别以 $AC, CE, EA$ 为轴将 $\\triangle ACH, \\triangle CEJ, \\triangle EAK$ 分别向上翻转 $180^{\\circ}$ ，使 $H, J, K$ 三点重合为点 $S$ 所围成的曲顶多面体(下底面开口)，如图乙所示.蜂房曲顶空间的弯曲度可用曲率来刻画，定义其度量值等于蜂房顶端三个菱形的各个顶点的曲率之和，而每一顶点的曲率规定等于 $2\\pi$ 减去蜂房多面体在该点的各个面角之和（多面体的面角是多面体的面的内角，用弧度制表示).例如：正四面体在每个顶点有3个面角，每个面角是 $\\frac{\\pi}{3}$ ，所以正四面体在各顶点的曲率为 $2\\pi - 3 \\times \\frac{\\pi}{3} = \\pi$ .
![](images/f68cf9d9f3ba007796a320fe07fe0d49783069a92b8e75ebbfa564a36340b04a.jpg)
甲

![](images/fb8753caceb87c3c4e0f76c539f19e3d2eff483ed65809395663afdca1a0a4ef.jpg)

乙
图4-5-10

(1)求蜂房曲顶空间的弯曲度.
(2)若正六棱柱底面边长为1,侧棱长为2,设BH=x.
(i)用 x 表示蜂房(图乙右侧多面体)的表面积 $S(x)$ ;
(ii) 当蜂房表面积最小时, 求其顶点 S 的曲率的余弦值.`,
    preview: `蜂房是自然界最神奇的“建筑”之一，如图4-5-10甲所示，蜂房结构是正六棱柱截去三个相等的三棱锥 H - ABC, J - CDE, K - EFA ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-3-29-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)蜂房曲顶空间的弯曲度为顶端三个菱形的7个顶点的曲率之和,根据定义其度量值等于 $7\\times2\\pi$ 减去三个菱形的内角和 $3\\times2\\pi$ ,再减去6个直角梯形中的两个非直角内角和 $6\\times\\pi$ ,即蜂房曲顶空间的弯曲度为 $7\\times2\\pi-3\\times2\\pi-6\\pi=2\\pi$ .

(2)(i)如图4-5-11所示,连接AC,SH,则 $AC=\\sqrt{3}$ .

设点 S 在平面 ACE 的射影为 O，则 OB=1，

则 $SH = 2\\sqrt{AB^2 + BH^2 - \\left(\\frac{AC}{2}\\right)^2} = \\sqrt{1 + 4x^2}$

菱形 SAHC 的面积为 $S=\\frac{\\sqrt{3}}{2}\\cdot\\sqrt{1+4x^{2}}$ ,

侧面积 $= 6 \\times \\frac{2 + (2 - x)}{2} \\times 1 = 3(4 - x) = 12 - 3x,$

![](images/c38bf73497b92c62d664cc6a1aa17ba2a9ccca2ce49dbc6fefed165946ff7f13.jpg)

图4-5-11

所以蜂房的表面积为 $S(x)=\\frac{3\\sqrt{3}}{2}\\cdot\\sqrt{1+4x^{2}}-3x+12, x\\in(0,2)$ .

(ii) $S^{\\prime}(x) = \\frac{6\\sqrt{3}x}{\\sqrt{1 + 4x^{2}}} - 3 = \\frac{6\\sqrt{3}}{\\sqrt{\\frac{1}{x^{2}} + 4}} - 3 = \\frac{3}{\\sqrt{\\frac{1}{x^{2}} + 4}}\\left(2\\sqrt{3} - \\sqrt{4 + \\frac{1}{x^{2}}}\\right),$

令 $S^{\\prime}(x) = 0$ 得到 $x = \\frac{\\sqrt{2}}{4}$ , 所以 $S(x)$ 在 $\\left(0, \\frac{\\sqrt{2}}{4}\\right)$ 上, $S^{\\prime}(x) < 0$ , $S(x)$ 递增; 在 $\\left(\\frac{\\sqrt{2}}{4}, 2\\right)$ 上, $S^{\\prime}(x) > 0$ , $S(x)$ 递增. 所以 $S(x)$ 在 $x = \\frac{\\sqrt{2}}{4}$ 处取得极小值, 也就是最小值.

此时 $SA = SC = \\sqrt{1 + x^2} = \\frac{3\\sqrt{2}}{4}$ ，在 $\\triangle SAC$ 中，令 $\\angle ASC = \\theta$

由余弦定理得 $\\cos\\theta=\\frac{SA^{2}+SC^{2}-AC^{2}}{2\\times SA\\times SC}=-\\frac{1}{3}$ ，又顶点 S 的曲率为 $2\\pi-3\\theta$ ，所以

$$
\\begin{array}{l} \\cos (2 \\pi - 3 \\theta) = \\cos 3 \\theta = \\cos (2 \\theta + \\theta) = \\cos 2 \\theta \\cos \\theta - \\sin 2 \\theta \\sin \\theta \\\\ = (2 \\cos^ {2} \\theta - 1) \\cos \\theta - 2 \\sin^ {2} \\theta \\cos \\theta = (2 \\cos^ {2} \\theta - 1) \\cos \\theta - 2 (1 - \\cos^ {2} \\theta) \\cos \\theta \\\\ = 4 \\cos^ {3} \\theta - 3 \\cos \\theta = 4 \\times \\left(- \\frac {1}{3}\\right) ^ {3} - 3 \\times \\left(- \\frac {1}{3}\\right) = \\frac {2 3}{2 7}. \\\\ \\end{array}
$$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-5-4-30",
    topicId: "topic-sec-4-5",
    title: `类似平面解析几何中的曲线与方程`,
    content: `类似平面解析几何中的曲线与方程，在空间直角坐标系中，可以定义曲面（含平面） $S$ 的方程，若曲面 $S$ 和三元方程 $F(x,y,z) = 0$ 之间满足：(1)曲面 $S$ 上任意一点的坐标均为三元方程 $F(x,y,z) = 0$ 的解；(2)以三元方程 $F(x,y,z) = 0$ 的任意解 $(x_0,y_0,z_0)$ 为坐标的点均在曲面 $S$ 上，则称曲面 $S$ 的方程为 $F(x,y,z) = 0$ ，方程 $F(x,y,z) = 0$ 表示的曲面为 $S.$ 已知曲面 $C$ 的方程为 $\\frac{x^2}{1} +\\frac{y^2}{1} -\\frac{z^2}{4} = 1.$
(1) 写出坐标平面 xOy 的方程(无需说明理由), 指出 xOy 平面截曲面 C 所得交线是什么曲线, 说明理由.

(2)已知直线 l 过曲面 C 上一点 $Q(1,1,2)$ ，以 $\\boldsymbol{d}=(-2,0,-4)$ 为方向向量.

(i)求证：直线 $l$ 在曲面 $C$ 上（即 $l$ 上任意一点均在曲面 $C$ 上）.

(ii)已知曲面 C 可视为平面 xOz 中某双曲线的一支绕 z 轴旋转一周所得的旋转面如图 4-5-12 所示, 同时, 过曲面 C 上任意一点, 有且仅

![](images/c4176e606093bc6da9dd4867ff373f682304591ea327aa183d1987acf6e49e9b.jpg)
图4-5-12

有两条直线,使得它们均在曲面 C 上.设直线 $l'$ 在曲面 C 上,且过点 $T(\\sqrt{2},0,2)$ ,求异面直线 l 与 $l'$ 所成角的余弦值.`,
    preview: `类似平面解析几何中的曲线与方程，在空间直角坐标系中，可以定义曲面（含平面） S 的方程，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-4-30-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)由坐标平面 xOy 内点的坐标的特征可知, 坐标平面 xOy 的方程为 z=0, 已知曲面 C 的方程为 $\\frac{x^{2}}{1}+\\frac{y^{2}}{1}-\\frac{z^{2}}{4}=1$ ,

当 $z = 0$ 时， $xOy$ 平面截曲面 $C$ 所得交线上的点 $M(x, y, 0)$ 满足

$$
x ^ {2} + y ^ {2} = 1 \\text {, 即} \\sqrt {(x - 0) ^ {2} + (y - 0) ^ {2} + (z - 0) ^ {2}} = 1,
$$

也即 M 在平面 xOy 上到原点距离为定值 1，从而 xOy 平面截曲面 C 所得交线是在平面 xOy 上，以原点 O 为圆心，1 为半径的圆.

(2)(i)设 $P(x_{0},y_{0},z_{0})$ 是直线 l 上任意一点，

由 $\\boldsymbol{d}=(-2,0,-4)$ , $\\overrightarrow{QP}$ 均为直线 l 的方向向量, 有 $\\overrightarrow{QP} \\parallel d$ ,

从而存在实数 $\\lambda$ ，使得 $\\overrightarrow{QP} = \\lambda d$ ，即 $(x_{0} - 1, y_{0} - 1, z_{0} - 2) = \\lambda (-2, 0, -4)$ ，

则 $\\left\\{\\begin{aligned}x_{0}-1&=-2\\lambda,\\\\ y_{0}-1&=0,\\end{aligned}\\right.$ 解得 $x_{0}=1-2\\lambda,y_{0}=1,z_{0}=2-4\\lambda,$ $z_{0}-2=-4\\lambda,$

所以，点 P 的坐标为 $(1-2\\lambda,1,2-4\\lambda)$ ，

于是 $\\frac{(1 - 2\\lambda)^2}{1} +\\frac{1^2}{1} -\\frac{(2 - 4\\lambda)^2}{4} = 1 - 4\\lambda +4\\lambda^2 +1 - (1 - 4\\lambda +4\\lambda^2) = 1,$

因此点 P 的坐标总是满足曲面 C 的方程, 从而直线 l 在曲面 C 上.

(ii) 直线 $l'$ 在曲面 C 上，且过点 $T(\\sqrt{2}, 0, 2)$ ,

设 $M(x_{1},y_{1},z_{1})$ 是直线 $l^{\\prime}$ 上任意一点，直线 $l^{\\prime}$ 的方向向量为 $\\pmb{d}^{\\prime} = (a,b,c)$ ，由 $\\pmb{d}^{\\prime},\\overrightarrow{TM}$ 均为直线 $l^{\\prime}$ 的方向向量，有 $\\overrightarrow{TM} // d'$ ，

从而存在实数 $t$ ，使得 $\\overrightarrow{TM} = t\\mathbf{d}'$ ，即 $(x_{1} - \\sqrt{2},y_{1},z_{1} - 2) = t(a,b,c)$

则 $\\left\\{\\begin{aligned}x_{1}-\\sqrt{2}&=at,\\\\ y_{1}&=bt,\\end{aligned}\\right.$ 解得 $x_{1}=\\sqrt{2}+at,y_{1}=bt,z_{1}=2+ct,$ $z_{1}-2=ct,$

所以，点 M 的坐标为 $(\\sqrt{2} + at, bt, 2 + ct)$ ,

因为 $M(x_{1}, y_{1}, z_{1})$ 在曲面 C 上，

所以 $\\frac{(\\sqrt{2}+at)^{2}}{1}+\\frac{(bt)^{2}}{1}-\\frac{(2+ct)^{2}}{4}=1,$

整理得 $\\left(a^{2}+b^{2}-\\frac{c^{2}}{4}\\right)t^{2}+(2\\sqrt{2}a-c)t=0,$

由题意,对任意的 t,有 $\\left(a^{2}+b^{2}-\\frac{c^{2}}{4}\\right)t^{2}+(2\\sqrt{2}a-c)t=0$ 恒成立,

所以 $a^{2}+b^{2}-\\frac{c^{2}}{4}=0$ ，且 $2\\sqrt{2}a-c=0$ ，

所以 $c=2\\sqrt{2}a, b=a$ ，或 $c=2\\sqrt{2}a, b=-a$ ，

不妨取 $a=-\\sqrt{2}$ ，则 $c=-4, b=-\\sqrt{2}$ ，或 $c=-4, b=\\sqrt{2}$ ，

所以 $\\boldsymbol{d}^{\\prime}=(-\\sqrt{2},-\\sqrt{2},-4)$ ，或 $\\boldsymbol{d}^{\\prime}=(-\\sqrt{2},\\sqrt{2},-4)$ ，

又直线 l 的方向向量为 $\\boldsymbol{d}=(-2,0,-4)$ ,

则异面直线 l 与 $l'$ 所成角的余弦值均为 $\\frac{\\left|d \\cdot d'\\right|}{\\left|d\\right|\\left|d'\\right|} = \\frac{2\\sqrt{2} + 16}{2\\sqrt{5} \\times 2\\sqrt{5}} = \\frac{8 + \\sqrt{2}}{10}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-5-5-31",
    topicId: "topic-sec-4-5",
    title: `已知椭圆 C: x^2a^2 + y^2b^2 = 1 (a > 0, b > 0)`,
    content: `已知椭圆 $C: \\frac{x^{2}}{a^{2}} + \\frac{y^{2}}{b^{2}} = 1 (a > 0, b > 0)$ 的左、右焦点分别为 $F_{1}, F_{2}$ ，离心率为 $\\frac{1}{2}$ ，经过点 $F_{1}$ 且倾斜角为 $\\theta (0 < \\theta < \\frac{\\pi}{2})$ 的直线 l 与椭圆交于 A，B 两点（其中点 A 在 x 轴上方）， $\\triangle ABF_{2}$ 的周长为 8.
(1)求椭圆 C 的标准方程；

(2)如图4-5-13所示,将平面xOy沿x轴折叠,使y轴正半轴和x轴所确定的半平面(平面 $AF_{1}F_{2}$ )与y轴负半轴和x轴所确定的半平面(平面 $BF_{1}F_{2}$ )互相垂直.

![](images/ae4de0bd4952376f82509acf7b954b28dea6b34db3aab487262d52a03dd9be7b.jpg)
图4-5-13

(i) 若 $\\theta=\\frac{\\pi}{3}$ ，求三棱锥 $A-BF_{1}F_{2}$ 的体积；

(ii) 若 $\\theta=\\frac{\\pi}{3}$ ，求异面直线 $AF_{1}$ 和 $BF_{2}$ 所成角的余弦值；

(iii)是否存在 $\\theta (0 < \\theta < \\frac{\\pi}{2})$ ，使得 $\\triangle ABF_{2}$ 折叠后的周长与折叠前的周长之比为 $\\frac{15}{16}$ ? 若存在，求 $\\tan \\theta$ 的值；若不存在，请说明理由.`,
    preview: `已知椭圆 的左、右焦点分别为 F_1, F_2 ，离心率为 1/2 ，经过点 F_1 且倾斜角为 θ (0 < θ < π/2) 的直线 l 与椭圆交于 A，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-5-31-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `## 讲解

(1)由椭圆的定义知： $\\left|AF_{1}\\right|+\\left|AF_{2}\\right|=2a,\\left|BF_{1}\\right|+\\left|BF_{2}\\right|=2a,$

所以 $\\triangle ABF_{2}$ 的周长L=4a=8，所以a=2，

又椭圆离心率为 $\\frac{1}{2}$ ，所以 $\\frac{c}{a}=\\frac{1}{2}$ ，所以c=1， $b^{2}=a^{2}-c^{2}=3$ ，

由题意,椭圆的焦点在x轴上,

所以椭圆的标准方程为 $\\frac{x^{2}}{4}+\\frac{y^{2}}{3}=1$ .

(2)(i)由直线 $l: y - 0 = \\sqrt{3}(x + 1)$ 与 $\\frac{x^{2}}{4} + \\frac{y^{2}}{3} = 1$ 联立，

$$
\\left\\{ \\begin{array}{l l} y - 0 = \\sqrt {3} (x + 1), \\\\ \\frac {x ^ {2}}{4} + \\frac {y ^ {2}}{3} = 1 \\end{array} \\right. \\text {得} \\left\\{ \\begin{array}{l l} x = 0, \\\\ y = \\sqrt {3} \\end{array} \\right. \\text {或} \\left\\{ \\begin{array}{l l} x = - \\frac {8}{5}, \\\\ y = - \\frac {3}{5} \\sqrt {3}, \\end{array} \\right.
$$

所以 $A(0,\\sqrt{3})$ (因为点 A 在 x 轴上方), $B\\left(-\\frac{8}{5}, -\\frac{3}{5}\\sqrt{3}\\right)$ , $|AF_{1}| = 2$ , $|BF_{1}| = \\frac{6}{5}$ , 三棱锥 $A - BF_{1}F_{2}$ 的体积为 $V = \\frac{1}{3} \\times \\frac{1}{2} |BF_{1}| \\cdot |F_{1}F_{2}| \\cdot \\sin 120^{\\circ} \\cdot |AF_{1}| \\cdot \\sin 60^{\\circ} = \\frac{3}{5}$ .

(ii) 以 O 为坐标原点, 折叠后原 y 轴负半轴, 原 x 轴, 原 y 轴正半轴所在直线为 x, y, z 轴建立空间直角坐标系, 如图 4-5-14 所示, 则

$$
F _ {1} (0, - 1, 0), A (0, 0, \\sqrt {3}), B \\left(\\frac {3}{5} \\sqrt {3}, - \\frac {8}{5}, 0\\right), F _ {2} (0, 1, 0),
$$

$$
\\overrightarrow {F _ {1} A} = (0, 1, \\sqrt {3}), \\overrightarrow {B F _ {2}} = \\left(- \\frac {3}{5} \\sqrt {3}, \\frac {1 3}{5}, 0\\right).
$$

记异面直线 $AF_{1}$ 和 $BF_{2}$ 所成角为 $\\varphi$ ,

则 $\\cos\\varphi=|\\cos\\langle\\overrightarrow{F_{1}A},\\overrightarrow{BF_{2}}\\rangle|=\\frac{|\\overrightarrow{F_{1}A}\\cdot\\overrightarrow{BF_{2}}|}{|\\overrightarrow{F_{1}A}||\\overrightarrow{BF_{2}}|}=\\frac{13}{28}.$

![](images/064907ab9efce407779c45ab9e5a34fb722d3df29c20f2786f7def83d86dcb94.jpg)

图4-5-14

(iii)设折叠前 $A(x_{1},y_{1}),B(x_{2},y_{2})$ ，折叠后 $A,B$ 在新图形中对应点记为 $A^{\\prime},B^{\\prime}$ $A^{\\prime}(x_{1},y_{1},0),B^{\\prime}(x_{2},0, - y_{2})$ ，折叠前 $\\triangle ABF_2$ 周长是8，则折叠后 $\\triangle A'B'F_2$ 周长是 $\\frac{15}{2}$

由于 $|A^{\\prime}F_{2}| + |B^{\\prime}F_{2}| + |A^{\\prime}B^{\\prime}| = \\frac{15}{2},|AF_{2}| + |BF_{2}| + |AB| = 8,$

故 $|AB|-|A'B'|=\\frac{1}{2}$ ，设l的方程为 $my=x+1$ ，

由 $\\left\\{\\begin{aligned}my&=x+1,\\\\ \\frac{x^{2}}{4}+\\frac{y^{2}}{3}&=1\\end{aligned}\\right.$ 得 $(3m^{2}+4)y^{2}-6my-9=0,$

$$
y _ {1} + y _ {2} = \\frac {6 m}{3 m ^ {2} + 4}, y _ {1} y _ {2} = \\frac {- 9}{3 m ^ {2} + 4},
$$

在折叠后的图形中建立如图 4-5-15 所示的空间直角坐标系（原 x 轴仍然为 x 轴，原 y 轴正半轴为 y 轴，原 y 轴负半轴为 z 轴），

![](images/8e570fa6f663de6a043627e0aaf1ae1c4823b807794be15b9b9525a4a243bcdb.jpg)

图4-5-15

$$
\\left| A ^ {\\prime} B ^ {\\prime} \\right| = \\sqrt {(x _ {1} - x _ {2}) ^ {2} + y _ {1} ^ {2} + y _ {2} ^ {2}}, \\left| A B \\right| = \\sqrt {(x _ {1} - x _ {2}) ^ {2} + (y _ {1} - y _ {2}) ^ {2}},
$$

所以

$$
| A B | - | A ^ {\\prime} B ^ {\\prime} | = \\sqrt {(x _ {1} - x _ {2}) ^ {2} + (y _ {1} - y _ {2}) ^ {2}} - \\sqrt {(x _ {1} - x _ {2}) ^ {2} + y _ {1} ^ {2} + y _ {2} ^ {2}} = \\frac {1}{2}, \\tag {①}
$$

又 $\\frac{-2y_1y_2}{\\sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2} + \\sqrt{(x_1 - x_2)^2 + y_1^2 + y_2^2}} = \\frac{1}{2},$

故 $\\sqrt{(x_1 - x_1)^2 + (y_1 - y_2)^2} +\\sqrt{(x_1 - x_2)^2 + y_1^2 + y_2^2} = -4y_1y_2,$ ②

由①②可得 $\\sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2} = \\frac{1}{4} - 2y_1y_2$

因为 $(x_{1} - x_{2})^{2} + (y_{1} - y_{2})^{2} = (1 + m^{2})(y_{1} - y_{2})^{2} = \\left(\\frac{1}{4} -2y_{1}y_{2}\\right)^{2},$

所以 $(1 + m^{2})\\left[\\left(\\frac{6m}{3m^{2} + 4}\\right)^{2} + \\frac{36}{3m^{2} + 4}\\right] = \\left(\\frac{1}{4} +\\frac{18}{3m^{2} + 4}\\right)^{2},$

即 $144\\left(\\frac{1+m}{3m^{2}+4}\\right)^{2}=\\left(\\frac{1}{4}+\\frac{18}{3m^{2}+4}\\right)^{2}$ ,

所以 $\\frac{12+12m^{2}}{3m^{2}+4}=\\frac{1}{4}+\\frac{18}{3m^{2}+4}$ ，解得 $m^{2}=\\frac{28}{45}$

因为 $0 < \\theta < \\frac{\\pi}{2}$ , 所以 $\\tan \\theta = \\sqrt{\\frac{1}{m^2}} = \\frac{3\\sqrt{35}}{14}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-5-6-32",
    topicId: "topic-sec-4-5",
    title: `如图 4-5-16 所示, 已知顶点为 S`,
    content: `如图 4-5-16 所示, 已知顶点为 S 的圆锥面(以下简称圆锥 S)与不经过顶点 S 的平面 $\\alpha$ 相交, 记交线为 C, 圆锥 S 的轴线 l 与平面 $\\alpha$ 所成角 $\\theta$ 是圆锥 S 顶角(圆锥 S 轴截面上两条母线所成角 $\\theta$ ) 的一半, 为探究曲线 C 的形状, 我们构建球 T, 使球 T 与圆锥 S 和平面 $\\alpha$ 都相切, 记球 T 与平面 $\\alpha$ 的切点为 F, 直线 l 与平面 $\\alpha$ 的交点为 A, 直线 AF 与圆锥 S 的交点为 O, 圆锥 S 的母线 OS 与球 T 的切点为 M, $|OM|=a, |MS|=b$ .
![](images/fa14871498e45a40183dcba0fd49e898dad576fa9d6c0e352229a2aac715fbbf.jpg)

图4-5-16

(1)求证：平面 $SOA \\perp$ 平面 $\\alpha$ ，并写出 $a, b, \\theta$ 的关系式；
(2)求证：曲线 C 是抛物线.`,
    preview: `如图 4-5-16 所示, 已知顶点为 S 的圆锥面(以下简称圆锥 S)与不经过顶点 S 的平面 α 相交, 记交线为 C, 圆锥 S 的轴线 l 与平面 α`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-6-32-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)因为平面 AOS 截球 T 的截面圆与直线 AO 相切于 F, 所以 $TF \\perp OA$ ,

记 P 是平面 $\\alpha$ 内不在直线 OA 上的点，

平面 TFP 截球 T 的截面圆与直线 FP 相切于点 F，所以 $TF \\perp FP$ ，

因为平面 $\\alpha$ 内直线 AO, FP 相交于点 F, 所以 $TF \\perp$ 平面 $\\alpha$ ,

因为直线 $TF \\subset$ 平面 AOS, 所以平面 $AOS \\perp$ 平面 $\\alpha$ ,

所以 $\\angle SAD=\\angle ASO=\\theta$ 。连接TO,TM,所以 $OT\\perp SA,TA\\perp SO,$

所以球 T 的半径 $TM = \\sqrt{ab}$ 且 $\\tan\\theta = \\frac{\\sqrt{ab}}{b}$ ，所以 $a = b\\tan^{2}\\theta$ .

(2)在平面 AOS 内圆锥的另一条母线与球 T 的切点记为 N 点.

因为 $\\angle NSA=\\angle SAO=\\theta$ , 所以 $NS \\parallel AO$ ,

如图 4-5-17 所示, 以 O 为坐标原点, OA 所在直线为 x 轴, 过 O 与 TF 平行的直线为 z 轴建立空间直角坐标系.

因为 OM, OF 与球 T 相切，

所以 OF=OM=a，

所以 $F(a,0,0)$ , $S(a-b,0,2\\sqrt{ab})$ ,

设交线 C 上任意点 $P(x, y, 0)$ ，记圆锥 S 的母线 SP 与球 T 相切于 E.

![](images/1dc74ac0773b922ef5210c3a44965cf073222c22b079ce996058ceebc90db911.jpg)

图4-5-17

因为 PF 与球 T 相切于点 F，

所以 PE=PF, SE=SM=b, 所以 $PS=PF+b$ ,

即 $\\sqrt{(x - a + b)^2 + y^2 + 4ab} = \\sqrt{(x - a)^2 + y^2} + b,$ ①

两边平方整理得： $x + a = \\sqrt{(x - a)^2 + y^2}$ ， ②

两边平方整理得： $y^{2}=4ax$ ，③

易知：③⇒②⇒①，

所以交线 C 在坐标平面 xOy 中方程为 $y^{2}=4ax$ ,

所以交线 C 是以 F 为焦点, O 为顶点的抛物线.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-5-1-33",
    topicId: "topic-sec-4-5",
    title: `)离散对数在密码学中有重要的应用.设 p 是素数`,
    content: `（2024年1月普通高等学校招生全国统一考试适应性测试(九省联考))离散对数在密码学中有重要的应用.设 $p$ 是素数，集合 $X = \\{1,2,\\dots ,p - 1\\}$ ，若 $u,v\\in X,m$ $\\in \\mathbf{N}$ ，记 $u\\otimes v$ 为 $uv$ 除以 $p$ 的余数， $u^{m,\\otimes}$ 为 $u^{m}$ 除以 $p$ 的余数；设 $a\\in X,1,a,a^{2,\\otimes},\\dots ,$ $a^{p - 2,\\otimes}$ 两两不同，若 $a^{n,\\otimes} = b(n\\in \\{0,1,\\dots ,p - 2\\})$ ，则称 $n$ 是以 $a$ 为底 $b$ 的离散对数，记为 $n = \\log (p)_ab.$
(1) 若 p=11, a=2, 求 $a^{p-1,\\otimes}$ ;
(2) 对 $m_{1}, m_{2} \\in \\{0, 1, \\cdots, p-2\\}$ ，记 $m_{1} \\oplus m_{2}$ 为 $m_{1} + m_{2}$ 除以 p-1 的余数（当 $m_{1} + m_{2}$ 能被 p-1 整除时， $m_{1} \\oplus m_{2} = 0$ ）。证明： $\\log(p)_{a}(b \\otimes c) = \\log(p)_{a} b \\oplus \\log(p)_{a} c$ ，其中 $b, c \\in X$ ;
(3)已知 $n=\\log(p)_{a}b$ . 对 $x\\in X, k\\in\\{1,2,\\cdots,p-2\\}$ ，令 $y_{1}=a^{k,\\otimes}, y_{2}=x\\otimes b^{k,\\otimes}$ . 证明： $x=y_{2}\\otimes y_{1}^{n(p-2),\\otimes}$ .`,
    preview: `)离散对数在密码学中有重要的应用.设 p 是素数，集合 ，若 u,v X,m N ，记 u v 为 uv 除以 p 的余数，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-1-33-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 若 $p = 11, a = 2$ ，又注意到 $2^{10} = 1024 = 93 \\times 11 + 1$ ，所以 $a^{p - 1, \\otimes} = 2^{10, \\otimes} = 1$ .

(2) 当 p=2 时, $X=\\{1\\}$ , 此时 $b=c=1, b \\otimes c=1$ ,

故 $\\log(p)_{a}(b\\otimes c)=0,\\log(p)_{a}b=0,\\log(p)_{a}c=0,$

此时 $\\log(p)_{a}(b\\otimes c)=\\log(p)_{a}b\\oplus\\log(p)_{a}c.$

当 p>2 时，因 $1, a, a^{2,\\otimes}, \\cdots, a^{p-2,\\otimes}$ 相异，故 $a \\geqslant 2$ ，而 $a \\in X$ ，故 a, p 互质.

记 $n = \\log (p)_a(b\\otimes c),n_1 = \\log (p)_ab,n_2 = \\log (p)_ac$

则 $\\exists m_{1}, m_{2} \\in N$ ，使得 $a^{n_{1}} = pm_{1} + b, a^{n_{2}} = pm_{2} + c$ ，

故 $a^{n_1 + n_2} = (pm_1 + b)(pm_2 + c)$ ，故 $a^{n_1 + n_2} \\equiv bc (\\bmod p)$ ，

设 $n_1 + n_2 = t(p - 1) + s, 0 \\leqslant s \\leqslant p - 2$ ，则 $n_1 \\oplus n_2 = s$

因为 $1,2,3,\\cdots p-1$ 除以 p 的余数两两相异，且 $a,2a,3a,\\cdots,(p-1)a$ 除以 p 的余数两两相异，

故 $(p-1)! \\equiv [a \\times 2a \\times 3a \\times \\cdots \\times (p-1)a] (\\bmod p)$ ,

故 $a^{p - 1}\\equiv 1(\\mathrm{mod}p)$ ，故 $a^{n_1 + n_2}\\equiv a^s\\equiv bc(\\mathrm{mod}p)$

而 $a^{n} \\equiv b \\otimes c (\\bmod p) = bc (\\bmod p)$ ，其中 $0 \\leqslant n \\leqslant p - 2$ ，

故 s=n，即 $\\log(p)_{a}(b\\otimes c)=\\log(p)_{a}b\\oplus\\log(p)_{a}c.$

(3) 当 $b \\geqslant 2$ 时，由 (2) 可得 $b^{p-1} \\equiv 1 (\\bmod p)$ ，若 b = 1，则 $b^{p-1} \\equiv 1 (\\bmod p)$ 也成立.

因为 $n=\\log(p)_{a}b$ ，所以 $a^{n}\\equiv b\\pmod{p}$ .

另一方面，

$$
\\begin{array}{l} y _ {2} \\otimes y _ {1} ^ {n (p - 2), \\otimes} \\equiv y _ {2} y _ {1} ^ {n (p - 2), \\otimes} \\equiv (x \\otimes b ^ {k, \\otimes}) (a ^ {k, \\otimes}) ^ {n (p - 2)} \\\\ \\equiv (x b ^ {k}) a ^ {k n (p - 2)} \\equiv (x b ^ {k}) b ^ {k (p - 2)} \\equiv x (b ^ {p - 1}) ^ {k - 1} \\equiv x (1) ^ {k - 1} (\\mathrm{mod} p) \\equiv x (\\mathrm{mod} p). \\\\ \\end{array}
$$

由于 $x \\in X$ ，所以 $x = y_{2} \\otimes y_{1}^{n(p-2),\\otimes}$ .`,
      },
    ],
    tags: [],
    source: `2024年1月普通高等学校招生全国统一考试适应性测试(九省联考`,
  },
  {
    id: "prob-sec-4-5-2-34",
    topicId: "topic-sec-4-5",
    title: `欧拉函数互素计数与 RSA 背景应用`,
    content: `（2024·河南省开封市·模拟题）在密码学领域，欧拉函数是非常重要的，其中最著名的应用就是在 RSA 加密算法中的应用。设 p, q 是两个正整数，若 p, q 的最大公约数是 1，则称 p, q 互素。对于任意正整数 n，欧拉函数是不超过 n 且与 n 互素的正整数的个数，记为 $\\varphi(n)$ 。
(1)试求 $\\varphi(3)$ , $\\varphi(9)$ , $\\varphi(7)$ , $\\varphi(21)$ 的值；
(2) 设 $n$ 是一个正整数, $p, q$ 是两个不同的素数, 试求 $\\varphi(3^n)$ , 并说明 $\\varphi(pq)$ 与 $\\varphi(p)$ 和 $\\varphi(q)$ 的关系;
(3) RSA 算法是一种非对称加密算法, 它使用了两个不同的密钥: 公钥和私钥. 具体而言:

①准备两个不同的、足够大的素数 p, q;

②计算 n=pq，欧拉函数 $\\varphi(n)$ ;

③求正整数 k，使得 kq 除以 $\\varphi(n)$ 的余数是 1；

④其中 $(n,q)$ 称为公钥， $(n,k)$ 称为私钥.

已知计算机工程师在某 RSA 加密算法中公布的公钥是(187,17). 若满足题意的正整数 $k$ 从小到大排列得到一列数记为数列 $\\{b_n\\}$ , 数列 $\\{c_n\\}$ 满足 $80c_n = b_n + 47$ , 求数列 $\\{\\tan c_n \\cdot \\tan c_{n+1}\\}$ 的前 $n$ 项和 $T_n$ .`,
    preview: `在密码学领域，欧拉函数是非常重要的，其中最著名的应用就是在 RSA 加密算法中的应用。设 p, q 是两个正整数，若 p, q 的最大公约数是 1，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-2-34-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) $\\varphi(3)=2,\\varphi(9)=6,\\varphi(7)=6,\\varphi(21)=12.$

(2)在不大于 $3^{n}$ 的正整数中,只有3的倍数不与 $3^{n}$ 互素,而3的倍数有 $3^{n-1}$ 个,

故 $\\varphi(3^n) = 3^n - 3^{n-1} = 2 \\cdot 3^{n-1}$ ,

因为 p, q 是两个不同的素数, 所以, $\\varphi(p)=p-1$ , $\\varphi(q)=q-1$ ,

在不超过 $pq - 1$ 的正整数中， $p$ 的倍数有 $q - 1$ 个， $q$ 的倍数有 $p - 1$ 个，

所以， $\\varphi(pq)=pq-1-(p-1)-(q-1)=pq-p-q+1=(p-1)(q-1)$

所以 $\\varphi(pq)=\\varphi(p)\\cdot\\varphi(q)$ .

(3)计算机工程师在某 RSA 加密算法中公布的公钥是(187,17),

所以 n=187, q=17, 从而 p=11.

$$
\\varphi (n) = \\varphi (1 8 7) = \\varphi (1 1 \\times 1 7) = \\varphi (1 1) \\varphi (1 7) = 1 0 \\times 1 6 = 1 6 0,
$$

所以正整数 k 满足的条件为: $17k = 160x + 1, x \\in N, k = 9x + \\frac{1}{17}(7x + 1)$ ,

令 $y=\\frac{1}{17}(7x+1)$ ，则 $17y=7x+1, x=2y+\\frac{1}{7}(3y-1)$ ,

令 $z = \\frac{1}{7} (3y - 1)$ ，则 $7z = 3y - 1,y = 2z + \\frac{1}{3} (z + 1)$ ，取 $z = 3n - 1$

则 y=7n-2, x=17n-5, k=160n-47,

所以， $80c_{n}=b_{n}+47=160n$ ，

所以 $c_{n} = 2n, \\tan c_{n} \\cdot \\tan c_{n + 1} = \\tan 2n \\cdot \\tan (2n + 2) = \\frac{\\tan(2n + 2) - \\tan 2n}{\\tan 2} - 1,$

$$
\\begin{array}{l} T _ {n} = \\tan c _ {1} \\cdot \\tan c _ {2} + \\tan c _ {2} \\cdot \\tan c _ {3} + \\dots + \\tan c _ {n} \\cdot \\tan c _ {n + 1} \\\\ = \\tan 2 \\cdot \\tan 4 + \\tan 4 \\cdot \\tan 6 + \\dots + \\tan 2 n \\cdot \\tan (2 n + 2) \\\\ = \\frac {\\tan 4 - \\tan 2 + \\tan 6 - \\tan 4 + \\cdots + \\tan (2 n + 2) - \\tan 2 n}{\\tan 2} - n \\\\ = \\frac {\\tan (2 n + 2)}{\\tan 2} - n - 1. \\\\ \\end{array}
$$`,
      },
    ],
    tags: [],
    source: `2024·河南省开封市·模拟题`,
  },
  {
    id: "prob-sec-4-5-3-35",
    topicId: "topic-sec-4-5",
    title: `二元 0-1 序列集合的相邻约束计数`,
    content: `（2024 年福建省联考题）已知集合
$S_{n}=\\{X\\mid X=(x_{1},x_{2},\\cdots,x_{n}),x_{i}\\in\\{0,1\\},i=1,2,\\cdots,n\\}$ ，其中 $n\\geqslant2$ .

对于 $A = (a_{1}, a_{2}, \\cdots, a_{n})$ , $B = (b_{1}, b_{2}, \\cdots, b_{n}) \\in S_{n}$ ，定义 A 与 B 之间的距离为

$$
d (A, B) = \\sum_ {i = 1} ^ {n} \\left| a _ {i} - b _ {i} \\right|.
$$

(1) 记 $I = (1,1,1,1) \\in S_{4}$ ，写出所有 $A \\in S_{4}$ 使得 $d(I,A) = 3$ ;
(2) 记 $I = (1, 1, \\cdots, 1) \\in S_{n}, A, B \\in S_{n}$ ，并且 $d(I, A) = d(I, B) = p \\leqslant n$ ，求 $d(A, B)$ 的最大值；
(3) 设 $P \\subseteq S_{n}$ ，P 中所有不同元素间的距离的最小值为 k，记满足条件的集合 P 的元素个数的最大值为 m，求证： $m \\geqslant \\frac{2^{n}}{C_{n}^{0} + C_{n}^{1} + \\cdots + C_{n}^{k-1}}$ .`,
    preview: `已知集合 ，其中 n≥2 . 对于 A = (a_1, a_2, ·s, a_n) , B = (b_1, b_2, ·s, b_n) S_n ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-3-35-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 已知 $I = (1,1,1,1) \\in S_4, A \\in S_4$ ，且 $d(I,A) = 3$ ，所以， $A$ 的所有情形有 $(1,0,0,0),(0,1,0,0),(0,0,1,0),(0,0,0,1)$ .

(2) 设 $A = (a_{1}, a_{2}, \\cdots, a_{n})$ , $B = (b_{1}, b_{2}, \\cdots, b_{n})$ ,

因为 $d(I,A)=\\sum_{i=1}^{n}|a_{i}-1|=\\sum_{i=1}^{n}(1-a_{i})=p$ ，则 $a_{1}+a_{2}+\\cdots+a_{n}=n-p$ ，

同理可得 $b_{1} + b_{2} + \\dots + b_{n} = n - p,$

当 $n \\geqslant 2p$ 时, $d(A, B) = \\sum_{i=1}^{n} |a_i - b_i| = \\sum_{i=1}^{n} |a_i - 1 + 1 - b_i|$

$$
\\leqslant \\sum_ {i = 1} ^ {n} | 1 - a _ {i} | + \\sum_ {i = 1} ^ {n} | 1 - b _ {i} | = 2 p;
$$

当 $n < 2p$ 时， $d(A, B) = \\sum_{i=1}^{n} |a_i - b_i| \\leqslant \\sum_{i=1}^{n} a_i + \\sum_{i=1}^{n} b_i = 2n - 2p.$

当 $A=(\\underbrace{1,1,\\cdots,1}_{p个1},0,0,\\cdots,0)$ , $B=(0,0,\\cdots,0,\\underbrace{1,1,\\cdots,1}_{p个1})$ 时，上式等号成立.

综上所述, $d(A,B)_{\\max}=\\begin{cases}2p,2p\\leqslant n,\\\\2(n-p),2p>n.\\end{cases}$

(3)设 P 是满足条件的最大集合, 即 P 中的元素个数为 m,

所以 $\\forall A, B \\in P$ 且 $A \\neq B, d(A, B) \\geqslant k, \\forall C \\in P,$

记集合 $S(C, k - 1) = \\{X \\in S_n \\mid d(X, C) \\leqslant k - 1\\}$ ,

那么 $S(C,k-1)$ 中的元素个数为 $C_{n}^{0}+C_{n}^{1}+\\cdots+C_{n}^{k-1}$

对于 $S_{n}$ 中的任意元素 X，都存在 $C \\in P$ ，使得 $d(X, C) \\leqslant k - 1$ ，

若不然，假设存在 $X_{0} \\in S_{n}, \\forall C \\in P$ 都有 $d(X_{0}, C) \\geqslant k$ ，

那么集合 $P' = P \\cup \\{X_0\\}$ 中所有不同元素间的距离的最小值为 $k$ ，且 $P'$ 中有 $m + 1$ 个元素，这与 $m$ 的最大性矛盾.

所以 $S_{n}$ 中的每个元素必与 $P$ 中某个元素间的距离不超过 $k - 1$ .

从而 $S_{n}=\\bigcup_{C\\in P}S(C,k-1)$ ，所以 $2^{n}\\leqslant m(C_{n}^{0}+C_{n}^{1}+\\cdots+C_{n}^{k-1})$ .`,
      },
    ],
    tags: [],
    source: `2024 年福建省联考题`,
  },
  {
    id: "prob-sec-4-5-4-36",
    topicId: "topic-sec-4-5",
    title: `取整函数被广泛应用于数论、函数绘图和计算机领域`,
    content: `（2024 年安徽省黄山市模拟题）取整函数被广泛应用于数论、函数绘图和计算机领域，其定义如下：设 $x \\in R$ ，不超过 x 的最大整数称为 x 的整数部分，记作 [x]，函数 $y = [x]$ 称为取整函数。另外也称 [x] 是 x 的整数部分，称 $\\{x\\} = x - [x]$ 为 x 的小数部分。
(1) 直接写出 $\\left[\\ln\\pi\\right]$ 和 $\\left\\{-\\frac{3}{4}\\right\\}$ 的值；

(2) 设 $a, b \\in \\mathbf{N}^*$ ,`,
    preview: `取整函数被广泛应用于数论、函数绘图和计算机领域，其定义如下：设 x R ，不超过 x 的最大整数称为 x 的整数部分，记作 [x]，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-4-36-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `证明: $a = b\\left[\\frac{a}{b}\\right] + b\\left\\{\\frac{a}{b}\\right\\}$ , 且 $0 \\leqslant b\\left\\{\\frac{a}{b}\\right\\} \\leqslant b - 1$ , 并求在 $b$ 的倍数中不大于 $a$ 的正整数的个数;

(3)对于任意一个大于1的整数 a, a 能唯一写为 $a = p_{1}^{a_{1}} \\times p_{2}^{a_{2}} \\times \\cdots \\times p_{k}^{a_{k}}$ ，其中 $p_{i}$ 为质数， $a_{i}$ 为正整数，且对任意的 i < j，都有 $p_{i} < p_{j}, i, j \\in \\{1, 2, 3, \\cdots, k\\}$ ，称该式为 a 的标准分解式，例如 100 的标准分解式为 $100 = 2^{2} \\times 5^{2}$ 。证明：在 n! 的标准分解式中，质因数 $p_{i} (p_{i} \\leqslant n, n > 1, n \\in \\mathbf{N}^{*})$ 的指数 $a_{i} = \\left[\\frac{n}{p_{i}}\\right] + \\left[\\frac{n}{p_{i}^{2}}\\right] + \\left[\\frac{n}{p_{i}^{3}}\\right] + \\cdots = \\sum_{r=1}^{\\infty} \\left[\\frac{n}{p_{i}^{r}}\\right]$ .

讲解

(1) $\\left[\\ln\\pi\\right]=1,\\left\\{-\\frac{3}{4}\\right\\}=0.25.$

(2)证明:因为 $\\frac{a}{b}=\\left[\\frac{a}{b}\\right]+\\left\\{\\frac{a}{b}\\right\\}$ ，等式两边同时乘b，得 $a=b\\left[\\frac{a}{b}\\right]+b\\left\\{\\frac{a}{b}\\right\\}$ .

因为 a, b 都为整数，所以 $b\\left\\{\\frac{a}{b}\\right\\}=a-b\\left[\\frac{a}{b}\\right]$ 也为整数，

又 $0 \\leqslant \\left\\{\\frac{a}{b}\\right\\} < 1$ ，所以 $0 \\leqslant b\\left\\{\\frac{a}{b}\\right\\} < b$

所以 $0 \\leqslant b \\left\\{ \\frac{a}{b} \\right\\} \\leqslant b - 1$ ，得证.

假设 $b,2b,\\cdots,nb$ 都小于等于 a，因为 $a=b\\left[\\frac{a}{b}\\right]+b\\left\\{\\frac{a}{b}\\right\\}$ ,

所以 $nb \\leqslant a = b\\left[\\frac{a}{b}\\right] + b\\left\\{\\frac{a}{b}\\right\\}$ , 所以 $n \\leqslant \\left[\\frac{a}{b}\\right] + \\left\\{\\frac{a}{b}\\right\\}$ .

因为 $0 \\leqslant \\left\\{\\frac{a}{b}\\right\\} \\leqslant 1$ ，所以 $n \\leqslant \\left[\\frac{a}{b}\\right]$ ，所以 $b$ 的倍数中不大于 $a$ 的正整数的个数为 $\\left[\\frac{a}{b}\\right]$ .

(3) $n!=1\\times2\\times3\\times\\cdots\\times n$ , 将 $2,3,\\cdots,n$ 每一个数都分解为质因数的乘积.

对于质因数 $p_i$ ，利用(2)中结论， $p_i$ 的倍数中不大于 $n$ 的正整数的个数为 $\\left[\\frac{n}{p_i}\\right]$ ，记为 $n_1$ ，

将这些数都提取 $p_{i}$ 出来, 此时 $p_{i}$ 的倍数中还有可以提取出 $p_{i}$ 的数,

注意到 $p_i^2$ 的倍数中不大于 $n$ 的正整数的个数为 $\\left[\\frac{n}{p_i^2}\\right]$ ，记为 $n_2$ ，将这些数提取 $p_i$ 出来；

同理， $p_{i}^{3}$ 的倍数中不大于 n 的正整数的个数为 $\\left[\\frac{n}{p_{i}^{3}}\\right]$ ，记为 $n_{3}$ ，

依此这样进行下去,则质因数 $p_{i}$ 的指数

$$
a _ {i} = n _ {1} + n _ {2} + n _ {3} + \\dots = \\left[ \\frac {n}{p _ {i}} \\right] + \\left[ \\frac {n}{p _ {i} ^ {2}} \\right] + \\left[ \\frac {n}{p _ {i} ^ {3}} \\right] + \\dots = \\sum_ {r = 1} ^ {\\infty} \\left[ \\frac {n}{p _ {i} ^ {r}} \\right], \\text {得证.}
$$`,
      },
    ],
    tags: [],
    source: `2024 年安徽省黄山市模拟题`,
  },
  {
    id: "prob-sec-4-5-5-37",
    topicId: "topic-sec-4-5",
    title: `每个大于 1 的自然数 n 均可写成素数乘积的形式`,
    content: `（2024 年湖南省张家界市模拟题）每个大于 1 的自然数 n 均可写成素数乘积的形式 $n = p_{1}^{k_{1}} p_{2}^{k_{2}} \\cdots p_{m}^{k_{m}}$ ，其中 $m \\in N^{*}, k_{1}, k_{2}, \\cdots, k_{m} \\in N, p_{1}, p_{2}, \\cdots, p_{m}$ 是互不相同的素因数，若存在 $k_{i} \\geqslant 2 (1 \\leqslant i \\leqslant m)$ ，则称 n 有素数平方因子。定义在 $N^{*}$ 上的莫比乌斯函数 $\\mu(m) = \\begin{cases} 0, & \\text{若 } m \\text{ 有素数平方因子}, \\\\ 1, & \\text{若 } m = 1, \\\\ (-1)^{r}, & \\text{若 } m \\text{ 是 } r \\text{ 个不同素数之积}, \\end{cases}$
例如 $\\mu(15)=\\mu(3\\times5)=(-1)^{2}=1,\\mu(50)=\\mu(2\\times5^{2})=0.$

$\\sum_{d|n}g(d)$ 表示 d 取遍 n 的所有正整数因子时对 $g(d)$ 求和，例如当 $g(n)=n$ 时，

$$
\\sum_ {d \\mid 6} g (d) = \\sum_ {d \\mid 6} d = 1 + 2 + 3 + 6 = 1 2.
$$

(1) 求 $\\mu(2025)$ , $\\mu(105)$ .
(2) 当 $n \\in N^{*}$ 且 $n \\geqslant 2$ 时, 求 $\\sum_{d \\mid n} \\mu(d)$ .
(3) 假设 $f(x)$ 和 $g(x)$ 是定义在 $N^{*}$ 上的函数, 满足

$$
f (n) = \\sum_ {d \\mid n} g (d) = \\sum_ {d \\mid n} g \\Big (\\frac {n}{d} \\Big).
$$

求证: $g(n)=\\sum_{d|n}\\mu(d)f\\left(\\frac{n}{d}\\right)$ .`,
    preview: `每个大于 1 的自然数 n 均可写成素数乘积的形式 ，其中 是互不相同的素因数，若存在 ，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-5-37-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 因为 $2025 = 3^{4} \\times 5^{2}$ 含平方因子, 故 $\\mu(2025) = 0$ .

因为 $105=3\\times5\\times7$ ，

所以 105 是 3 个不同素数之积, 故 $\\mu(105)=(-1)^{3}=-1$ .

(2) 设 $n = p_{1}^{k_{1}} p_{2}^{k_{2}} \\cdots p_{m}^{k_{m}}$ ，其中 $p_{1}, p_{2}, \\cdots, p_{m}$ 是互不相同的素因数，则

$$
\\begin{array}{l} \\sum_ {d \\mid n} \\mu (d) = \\mu (1) + \\mu (p _ {1}) + \\mu (p _ {2}) + \\dots + \\mu (p _ {m}) + \\mu (p _ {1} p _ {2}) + \\dots + \\mu (p _ {1} p _ {2} \\dots p _ {m}) \\\\ = 1 + C _ {m} ^ {1} (- 1) + C _ {m} ^ {2} (- 1) ^ {2} + \\dots + C _ {m} ^ {m} (- 1) ^ {m} = (1 - 1) ^ {m} = 0. \\\\ \\end{array}
$$

(3) 设 $T = \\sum_{d \\mid n} \\left[ \\mu(d) f\\left(\\frac{n}{d}\\right) \\right]$ .

因为 $f(n) = \\sum_{d|n}g(d)$ ，所以 $f\\left(\\frac{n}{d}\\right) = \\sum_{d'|\\frac{n}{d}}g(d')$

代入可得： $T = \\sum_{d|n}\\left[\\mu (d)f\\left(\\frac{n}{d}\\right)\\right] = \\sum_{d|n}\\left[\\mu (d)\\sum_{d'|\\frac{n}{d}}g(d')\\right],$

对于每一个 $d, \\frac{n}{d}$ 固定，在 $\\sum_{d' \\mid \\frac{n}{d}} g(d')$ 中 $d'$ 的变化与 $d$ 无关，与 $\\mu(d)$ 无关，

因此由乘法分配律得 $\\mu(d)\\sum_{d'\\mid\\frac{n}{d}}g(d')=\\sum_{d'\\mid\\frac{n}{d}}[\\mu(d)g(d')]$ ,

同理，在 $\\sum_{d' \\mid \\frac{n}{d}} [\\mu(d)g(d')]$ 中 $d$ 的变化与 $g(d')$ 无关，

提取公因式得 $\\sum_{d'|\\frac{n}{d}}[\\mu(d)g(d')] = g(d')\\sum_{d'| \\frac{n}{d}}\\mu(d)$ ,

$$
\\begin{array}{l} = \\sum_ {d \\mid n} \\sum_ {d ^ {\\prime} \\mid \\frac {n}{d}} [ \\mu (d) g (d ^ {\\prime}) ] = \\sum_ {d d ^ {\\prime} \\mid n} [ \\mu (d) g (d ^ {\\prime}) ] \\\\ = \\sum_ {d ^ {\\prime} | n} \\sum_ {d | \\frac {n}{d ^ {\\prime}}} [ \\mu (d) g (d ^ {\\prime}) ] = \\sum_ {d ^ {\\prime} | n} [ g (d ^ {\\prime}) \\sum_ {d | \\frac {n}{d ^ {\\prime}}} \\mu (d) ] = [ \\sum_ {d ^ {\\prime} | n} g (d ^ {\\prime}) [ \\sum_ {d | \\frac {n}{d ^ {\\prime}}} \\mu (d) ], \\\\ \\end{array}
$$

于是 $\\sum_{d|n}[\\mu (d)\\sum_{d^{\\prime}| \\frac{n}{d}}g(d^{\\prime})] = \\sum_{d|n}\\left[\\sum_{d^{\\prime}| \\frac{n}{d}}\\mu (d)g(d^{\\prime})\\right]$

即 $T = \\big[\\sum_{d'|n}g(d')\\big[\\sum_{d|\\frac{n}{d'}}\\mu (d)\\big],$

由(2)可知, 当 $\\frac{n}{d'}\\geqslant2$ 时, 则 $\\sum_{d|\\frac{n}{d'}}\\mu(d)=0$ ; 当 $\\frac{n}{d'}=1$ 时, 则 $\\sum_{d|\\frac{n}{d'}}\\mu(d)=1$ ,

因此 $\\left[\\sum_{d'|n} g(d')\\left[\\sum_{d|\\frac{n}{d'}} \\mu(d)\\right] = \\left[\\sum_{d'|n} g(d')\\right] \\times 1 = \\sum_{d'|n} g(d') = g(n)\\right.$ ,

故原命题得证.`,
      },
    ],
    tags: [],
    source: `2024 年湖南省张家界市模拟题`,
  },
  {
    id: "prob-sec-4-5-6-38",
    topicId: "topic-sec-4-5",
    title: `设整数 n, k 满足 1 ≤ k`,
    content: `设整数 n, k 满足 $1 \\leqslant k \\leqslant n$ ，集合 $A = \\{2^{m} \\mid 0 \\leqslant m \\leqslant n - 1, m \\in Z\\}$ 。从 A 中选取 k 个不同的元素并取它们的乘积，这样的乘积有 $C_{n}^{k}$ 个，设它们的和为 $a_{n,k}$ 。例如 $a_{3,2} = 2^{0} \\times 2^{1} + 2^{0} \\times 2^{2} + 2^{1} \\times 2^{2} = 14$ 。
(1) 若 $n \\geqslant 2$ ，求 $a_{n,2}$ ;
(2) 记 $f_{n}(x)=1+a_{n,1}x+a_{n,2}x^{2}+\\cdots+a_{n,n}x^{n}$ ，求 $\\frac{f_{n+1}(x)}{f_{n}(x)}$ 和 $\\frac{f_{n+1}(x)}{f_{n}(2x)}$ 的整式表达式；
(3)用含 n, k 的式子来表示 $\\frac{a_{n+1,k+1}}{a_{n,k}}$ .`,
    preview: `设整数 n, k 满足 1 ≤ k ≤ n ，集合 。从 A 中选取 k 个不同的元素并取它们的乘积，这样的乘积有 C_n^k 个，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-6-38-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)由题意 $a_{n,2}$ 表示从 $\\{2^0, 2^1, \\dots, 2^{n-1}\\}$ 中任取2个数的乘积之和，故

$$
\\begin{array}{l} a _ {n, 2} = 2 ^ {0} \\left(2 ^ {1} + 2 ^ {2} + \\dots + 2 ^ {n - 1}\\right) + 2 ^ {1} \\left(2 ^ {2} + \\dots + 2 ^ {n - 1}\\right) + \\dots + 2 ^ {n - 2} 2 ^ {n - 1} \\\\ = 2 ^ {0} (2 ^ {n} - 2) + 2 ^ {1} (2 ^ {n} - 2 ^ {2}) + \\dots + 2 ^ {n - 2} (2 ^ {n} - 2 ^ {n - 1}) \\\\ = 2 ^ {n} \\left(2 ^ {0} + 2 ^ {1} + \\dots + 2 ^ {n - 2}\\right) - \\left(2 ^ {1} + 2 ^ {3} + \\dots + 2 ^ {2 n - 3}\\right) \\\\ = \\frac {2 ^ {2 n} + 2}{3} - 2 ^ {n}. \\\\ \\end{array}
$$

(2)由题意 $a_{n+1,k}$ 表示从 $\\{2^0, 2^1, \\dots, 2^n\\}$ 中任取 $k$ 个数的乘积之和，故

$a_{n + 1,k} = a_{n,k} + 2^{n}a_{n,k - 1}(2\\leqslant k\\leqslant n)$ ，并且有 $a_{n + 1,1} = a_{n,1} + 2^n,a_{n + 1,n + 1} = 2^n a_{n,n}.$

又 $f_{n + 1}(x) = 1 + a_{n + 1,1}x + a_{n + 1,2}x^2 +\\dots +a_{n + 1,n + 1}x^{n + 1}$

$$
\\begin{array}{l} = 1 + (a _ {n, 1} + 2 ^ {n}) x + (a _ {n, 2} + 2 ^ {n} a _ {n, 1}) x ^ {2} + \\dots + (2 ^ {n} a _ {n, n}) x ^ {n + 1} \\\\ = (1 + a _ {n, 1} x + a _ {n, 2} x ^ {2} + \\dots + a _ {n, n} x ^ {n}) + 2 ^ {n} (x + a _ {n, 1} x ^ {2} + \\dots + a _ {n, n} x ^ {n + 1}) \\\\ = f _ {n} (x) + 2 ^ {n} x \\cdot f _ {n} (x), \\\\ \\end{array}
$$

于是， $\\frac{f_{n + 1}(x)}{f_n(x)} = 1 + 2^n x,\\frac{f_2(x)}{f_1(x)} = 1 + 2x,$

因此， $f_{n+1}(x)=(1+2^{n}x)\\cdots(1+2x)(1+x)$ ,

$$
f _ {n} (2 x) = (1 + 2 ^ {n - 1} \\cdot 2 x) \\dots (1 + 2 \\cdot 2 x) (1 + 2 x) = (1 + 2 ^ {n} x) \\dots (1 + 2 x),
$$

则 $\\frac{f_{n + 1}(x)}{f_n(2x)} = 1 + x.$

(3)由题意 $a_{n + 1,k + 1} = a_{n,k + 1} + 2^{n}a_{n,k}$ ，

由(2)知 $f_{n + 1}(x) = (1 + x)f_n(2x)$ ，比较两边的系数，得

$$
a _ {n + 1, k + 1} = 2 ^ {k + 1} a _ {n, k + 1} + 2 ^ {k} a _ {n, k}, \\tag {②}
$$

由①②解得 $\\frac{a_{n+1,k+1}}{a_{n,k}}=\\frac{2^{k}(2^{n+1}-1)}{2^{k+1}-1}.$

评注 本题是杭州二中2024届高三开学检测的最后一题，将集合、函数、数列、组合等知识点融合在一起。该题的表述简单、考查新颖、背景深刻，解题上可以从特殊到一般，先猜后证，强调了算两次等重要的数学方法。`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-5-7-39",
    topicId: "topic-sec-4-5",
    title: `设某台函数计算器上有一个显示屏和两个操作键`,
    content: `设某台函数计算器上有一个显示屏和两个操作键. 如果按下第一个操作键, 则将原显示屏上的数 x 变为 $\\left[\\frac{x}{2}\\right]$ (其中 [x] 表示不超过 x 的最大整数); 如果按下第二个操作键, 则将原显示屏上的数 x 变为 $4x+1$ . 按下任意一个操作键称为一次操作, 现在显示屏上的数为 1.
(1) 求经过三次操作, 此时显示屏上可能出现的数组成的集合 A.
(2) 判断 1024 和 2024 是否可以经过有限次操作在显示屏上出现？请说明理由.
(3) 小于 2024 的整数中有多少个数可以经过有限次操作在显示屏上出现?`,
    preview: `设某台函数计算器上有一个显示屏和两个操作键. 如果按下第一个操作键, 则将原显示屏上的数 x 变为 [x/2] (其中 [x] 表示不超过 x 的最大整数);`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-7-39-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) $A=\\{0,1,5,9,10,85\\}$ .

(2)将数化成二进制,那么按第一个操作键表示将显示屏上的数的最后一位去掉.按第二个操作键表示将显示屏上的数后面加上01.当初始数为1时,经过以上两种操作后得到的数没有两个1相邻.

因为 1024 化成二进制为 $(10000000000)_{2}$ ，2024 化成二进制为 $(11111101000)_{2}$ ，其中

有两个1相邻，所以显示屏上能显示1024，但不能显示2024.

(3)另一方面,如果先进行第二种操作,后进行第一种操作,则等于在原数后加1个0,所以任意一个二进制中没有两个1相邻的数都可以经过有限次操作得到.

故在显示屏上可以出现的小于2024的整数的个数等价于计算：

“不大于(10101010101) $_{2}$ ，且没有两个1相邻的自然数的个数。”

下面按含1的个数进行讨论：

不含1的自然数只有1；

含有 1 个 1 且不大于 $(10101010101)_{2}$ 的自然数有 $C_{11}^{1}=11$ ;

含有 2 个 1 且不大于 $(10101010101)_{2}$ 的自然数有 $C_{10}^{2}=45$ ;

含有 3 个 1 且不大于 $(10101010101)_{2}$ 的自然数有 $C_{9}^{3}=84$ ;

含有 4 个 1 且不大于 $(10101010101)_{2}$ 的自然数有 $C_{8}^{4}=70$ ;

含有 5 个 1 且不大于 $(10101010101)_{2}$ 的自然数有 $C_{7}^{5}=21$ ;

含有 6 个 1 且不大于 $(10101010101)_{2}$ 的自然数有 1.

综上所述，满足条件的自然数有： $1 + 11 + 45 + 84 + 70 + 21 + 1 = 233$

评注 本题以二进制为背景设计新颖,思维含量大.解决问题可以从简单的情况开始分析,得出操作按键一、二的数学意义就是将数化成二进制后,按第一个操作键表示将显示屏上的数的最后一位去掉,按第二个操作键表示将显示屏上的数后面加上01,这样的思考方式需要读者仔细体会.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-5-8-40",
    topicId: "topic-sec-4-5",
    title: `在平面直角坐标系 xOy 中`,
    content: `在平面直角坐标系 $xOy$ 中，我们把点 $(x,y), x, y \\in \\mathbf{N}^*$ 称为自然点. 按如图4-5-18所示的规则，将每个自然点 $(x,y)$ 进行赋值记为 $P(x,y)$ ，例如 $P(2,3) = 8, P(4,2) = 14, P(2,5) = 17$ .
![](images/aa14b880e0ddfb75ec279cae9f2edfa4046d2450f4dbc7441268b8d4cca11a29.jpg)
图4-5-18

(1) 求 $P(x,1)$ ;
(2) 求证: $2P(x,y)=P(x-1,y)+P(x,y+1)$ ;
(3)如果 $P(x,y)$ 满足方程

$$
P (x + 1, y - 1) + P (x, y + 1) + P (x + 1, y) +
$$

$$
P (x + 1, y + 1) = 2 0 2 4,
$$

求 $P(x,y)$ 的值.`,
    preview: `在平面直角坐标系 xOy 中，我们把点 (x,y), x, y N^* 称为自然点. 按如图4-5-18所示的规则，`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-8-40-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `(1)根据图形可知 $P(x,1)=1+2+3+\\cdots+x=\\frac{x(x+1)}{2}$ .

(2) 固定 $x$ , 则 $P(x, y)$ 为一个高阶等差数列, 且满足

$$
P (x, y + 1) - P (x, y) = x + y - 1, P (x + 1, y) - P (x, y) = x + y,
$$

所以， $P(x,y+1)-P(x,1)=1+2+\\cdots+y+y(x-1)=\\frac{y(y+1)}{2}+y(x-1)$ ,

$$
P (x, y + 1) = \\frac {y (y + 1)}{2} + y (x - 1) + \\frac {x (x + 1)}{2},
$$

所以， $P(x,y) = \\frac{x(x + 1)}{2} +\\frac{y(y - 1)}{2} +(x + 1)(y - 1),$

$$
P (x - 1, y) = \\frac {x (x - 1)}{2} + \\frac {y (y - 1)}{2} + (x - 2) (y - 1),
$$

所以 $P(x,y+1)+P(x-1,y)=x^{2}+y^{2}+2xy-3y-x+2=2P(x,y)$ .

(3) $P(x+1,y-1)+P(x,y+1)+P(x+1,y)+P(x+1,y+1)=2024,$

等价于 $P(x,y)+P(x,y+1)+P(x+1,y)+P(x+1,y+1)=2023$ ,

等价于 $P(x,y+1)+3P(x+1,y)=2023$ ,

即 $\\frac{1}{2} [x(x + 1) + y(y + 2x - 1)] + \\frac{3}{2} [(x + 1)(x + 2) + (y - 1)(y + 2x)] = 2023,$

化简得 $y^{2}+2xy+x^{2}-y+x=1010\\Leftrightarrow(x+y-1)(x+y)+2x=1010,$

由于 $x+y$ 增大， $(x+y-1)(x+y)$ 也增大，

当 $x+y=31$ 时， $(x+y-1)(x+y)+2x<992<1010$ ，

当 $x+y=33$ 时， $(x+y-1)(x+y)+2x>1056>1010$

故当 $x+y=32$ 时， $(x+y-1)(x+y)+2x=1010\\Rightarrow x=9,y=23$

即 $P(9,23)=\\frac{9\\times10}{2}+\\frac{23\\times22}{2}+8\\times22=474.$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-4-5-9-41",
    topicId: "topic-sec-4-5",
    title: `欧拉函数在密码学中有重要的应用. 设 n 为正整数, 集合`,
    content: `欧拉函数在密码学中有重要的应用. 设 n 为正整数, 集合 $X_{n}=\\{1,2,\\cdots,n-1\\}$ , 欧拉函数 $\\varphi(n)$ 的值等于集合 $X_{n}$ 中与 n 互质的正整数的个数; 记 $M(x,y)$ 表示 x 除以 y 的余数 (x 和 y 均为正整数),
(1) 求 $\\varphi(6)$ 和 $\\varphi(15)$ ;

(2) 现有三个素数 $p, q, e (p < q < e), n = pq$ ，存在正整数 $d$ 满足 $M(de, \\varphi(n)) = 1$ ；已知对素数 $a$ 和 $x \\in X_a$ ，均有 $M(x^{a-1}, a) = 1$ ，证明：若 $x \\in X_n$ ，则 $x = M([M(x^c, n)]^d, n)$ ；

(3) 设 $n$ 为两个未知素数的乘积, $e_1, e_2$ 为另两个更大的已知素数, 且 $2e_1 = 3e_2 + 1$ ; 又 $c_1 = M(x^{e_1}, n), c_2 = M(x^{e_2}, n), x \\in X_n$ , 试用 $c_1, c_2$ 和 $n$ 求出 $x$ 的值.`,
    preview: `欧拉函数在密码学中有重要的应用. 设 n 为正整数, 集合 , 欧拉函数 (n) 的值等于集合 X_n 中与 n 互质的正整数的个数; 记 M(x,y) 表示`,
    difficulty: "hard",
    solutions: [
      {
        id: "prob-sec-4-5-9-41-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) $X_{6}$ 中,与6互质的数有1和5,则 $\\varphi(6)=2$ ;

$X_{15}$ 中，与15互质的数有1,2,4,7,8,11,13和14，则 $\\varphi(15)=8$ .

(2) 因为 n = pq, p 和 q 为素数，

则对 $x \\in X_{n}$ , 仅当 $\\frac{x}{p} \\in \\mathbf{N}_{+}$ 或 $\\frac{x}{q} \\in \\mathbf{N}_{+}$ 时, $x$ 和 $n$ 不互质,

又 x<n，则 $x=p,2p,\\cdots,(q-1)p$ ，或 $x=q,2q,\\cdots,(p-1)q$ 时，x 与 n 不互质，

则 $\\varphi(n)=n-1-(p-1)-(q-1)=(p-1)(q-1)$ ,

设 $M(x,p)=s, M(x,q)=t$ ，可知 s,t 不全为 0.

下证当 $st \\neq 0$ 时， $M(x^{\\varphi(n)}, n) = 1$ .

由题知， $M(s^{p-1}, p) = M(t^{q-1}, q) = 1$ ，

又 $x^{p - 1} = (kp + s)^{p - 1} = (kp)^{p - 1} + C_{p - 1}^{1}(kp)^{p - 2}s + \\dots +C_{p - 1}^{p - 2}kp s^{p - 2} + s^{p - 1}$

$$
= N _ {0} p + s ^ {p - 1} (k, N _ {0} \\in \\mathbf {N} _ {+}),
$$

所以 $M(x^{p-1}, p) = M(s^{p-1}, p) = 1$ . 同理有 $M(x^{q-1}, q) = 1$ .

于是记 $x^{q - 1} = kq + 1(k\\in \\mathbf{N}_{+}),x^{\\varphi (n)} = (kq + 1)^{p - 1} = N_{1}q + 1(N_{1}\\in \\mathbf{N}_{+})$

即 $M(x^{\\varphi(n)}, q)=1.$

同理 $M(x^{\\varphi (n)},p) = 1$ ，记 $x^{\\varphi (n)} = N_2p + 1(N_2\\in \\mathbb{N}_+)$ ，于是 $N_{2}p + 1 = N_{1}q + 1,$ 则 $N_{2} = N_{1}\\cdot \\frac{q}{p}$ ，因为 $\\frac{q}{p}\\notin \\mathbf{N}_{+}$ ，所以 $\\frac{N_1}{p}\\in \\mathbf{N}_+$ ，所以 $x^{\\varphi (n)} = \\frac{N_1}{p}\\cdot pq + 1 = \\frac{N_1}{p}\\cdot n + 1$ 即 $M(x^{\\varphi (n)},n) = 1.$

(i) $st \\neq 0$ 时，记 $M(x^{c}, n) = c$ ，则 $M(c^{d}, n) = M(x^{dc}, n) = M(x^{k\\varphi(n)+1}, n)$ ，

记 $\\frac{N_{1}}{p}=k_{0}$ ，又 $M(x^{k\\varphi(n)},n)=M([M(x^{\\varphi(n)},n)]^{k},n)=1$ ，

而 $x < n$ ，则 $M(x^{k\\varphi (n) + 1},n) = x,$

即 $M(c^{d},n)=x$ ，即 $M([M(x^{c},n)]^{d},n)=x.$

(ii) 若 $st = 0$ ，不妨设 $s = 0$ ，于是 $x = k_1 p (k_1 \\in X_q)$ ，

所以 $M(c^{d},n)=M(x^{dc},n)=M(k_{1}^{dc}p^{dc},n)$ ，又 $M(k_{1}^{dc},n)=k_{1},M(p^{q-1},q)=1$ ，

所以 $M(c^{d},n)=M(p^{dc}k_{1}^{de},n)=pk_{1}M(p^{k\\varphi(n)},q)$

$$
= x M ([ M (p ^ {q - 1}, q) ] ^ {k (p - 1)}, q) = x M (1, q) = x.
$$

综上， $M([M(x^{c},n)]^{d},n)=x$ ，得证.

(3)因为 $2e_{1}=3e_{2}+1$ ，所以 $x^{2e_{1}}=x^{3e_{2}+1}$ ，则 $M(x^{2e_{1}},n)=M(x^{3e_{2}+1},n)$ ，

则 $M(c_{1}^{2},n)=M(xc_{2}^{3},n)$ ,

假设存在 $a_{0}, a_{1} \\in N_{+}$ ，使得 $a_{0} \\cdot c_{2}^{3} = a_{1}n + 1$ ; 记 $n_{1} = c_{2}^{3}, n_{0} = n$ ,

令 $n_{k + 1} = M(n_{k - 1},n_k)$ ，那么 $n_k\\in \\mathbf{N}_+$ ，且 $n_k > n_{k + 1}$

于是 $\\exists k_{0}\\in N_{+}$ ，使 $n_{k_{0}}=1$ ，则 $n_{k_{0}+1}=0$ ，

从而数列 $\\{n_{k}\\}$ 有且仅有 $k_{0}+1$ 项，

考虑使 $a_{k}n_{k+1}-a_{k+1}n_{k}=(-1)^{k}(k\\in\\mathbf{N}_{+},k\\leqslant k_{0})$ 成立，

则对于相邻项有 $\\left\\{\\begin{aligned}a_{k}n_{k+1}-a_{k+1}n_{k}&=(-1)^{k},\\\\ a_{k-1}n_{k}-a_{k}n_{k-1}&=(-1)^{k-1},\\end{aligned}\\right.$

将两式相加并整理得: $a_{k-1}=\\frac{n_{k-1}-n_{k+1}}{n_{k}}\\cdot a_{k}+a_{k+1}$

令 $k=k_{0}$ ，得 $a_{k_{0}+1}=(-1)^{k_{0}-1}$ ，又由于 $n_{2}, n_{3}, \\cdots, n_{k_{0}}$ 及 $k_{0}$ 均由 $n_{0}=n$ 和 $n_{1}=c_{2}^{3}$ 确定，则数列 $\\{a_{k}\\}$ 的各项也可根据 n 和 $c_{2}^{3}$ 确定，

由上知 $M(a_{0}c_{2}^{3},n)=1, M(c_{1}^{2},n)=M(xc_{2}^{3},n)$ ,

则 $M(a_0c_1^2,n) = M(xa_0c_2^3,n) = M([M(x,n)\\cdot M(a_0c_2^3,n)],n) = M(1\\cdot x,n) = x,$

即 $x=M(a_{0}c_{1}^{2},n)$ ，其中 $a_{0}$ 是根据 n 和 $c_{2}^{3}$ 唯一确定的.`,
      },
    ],
    tags: [],
  },
]
