import type { Problem } from "./types"

export const problems_chthoughts: Problem[] = [
  {
    id: "prob-sec-2-1-1",
    topicId: "topic-sec-2-1",
    title: `等差数列前 n 项和符号条件下求最大项`,
    content: `设等差数列 $\\{a_{n}\\}$ 的前 n 项和为 $S_{n}$ ，已知 $a_{3}=12, S_{12}>0, S_{13}<0$ ，求 $S_{1}, S_{2}, S_{3}, \\cdots, S_{12}$ 中的最大项.`,
    preview: `设等差数列 的前 n 项和为 S_n ，已知 a_3=12, S_12>0, S_13<0 ，求 S_1, S_2, S_3, ·s, S_12 中的最大项.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-1-1-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `由 $a_{3}=12$ 得 $a_{1}=12-2d$ ，所以 $S_{12}=144+42d>0$ .

$S_{13} = 13a_{1} + 78d = 156 + 52d <   0$ ，所以 $-\\frac{24}{7} < d < -3.$

$$
S _ {n} = n a _ {1} + \\frac {n (n - 1)}{2} d = \\frac {1}{2} d n ^ {2} + \\left(1 2 - \\frac {5}{2} d\\right) n,
$$

由 $d < 0, S_{n}$ 是关于 $n$ 的二次函数，知对称轴方程为 $n = \\frac{5}{2} - \\frac{12}{d}$ .

又由 $-\\frac{24}{7}<d<-3$ ，得 $6<\\frac{5}{2}-\\frac{12}{d}<\\frac{13}{2}$ ，所以当n=6时， $S_{n}$ 最大.

评注 数列是定义在正整数集上的特殊函数,等差、等比数列的通项公式,前 n 项和公式都具有隐含的函数关系,都可以看成关于 n 的函数.在解等差数列、等比数列问题时,有意识地凸显其函数关系,从而用函数思想或函数方法研究、解决问题,不仅能获得简便的解法,且能促进科学思维的培养,提高发散思维的水平.当然,本题也可利用等差数列的性质,得 $S_{12}=6(a_{6}+a_{7})>0,S_{13}=13a_{7}<0$ ,从而得 $a_{6}>0,a_{7}<0$ ,由此推测 $S_{6}$ 最大.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-1-2",
    topicId: "topic-sec-2-1",
    title: `设 a_1, d 为实数`,
    content: `设 $a_{1}, d$ 为实数，首项为 $a_{1}$ ，公差为 d 的等差数列 $\\{a_{n}\\}$ 的前 n 项和为 $S_{n}$ ，满足 $S_{5}S_{6}+15=0$ ，则 d 的取值范围是 \\_\\_\\_\\_.`,
    preview: `设 a_1, d 为实数，首项为 a_1 ，公差为 d 的等差数列 的前 n 项和为 S_n ，满足 S_5S_6+15=0 ，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-1-2-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `本题考查等差数列的前 n 项和公式及方程有根的判定,体现了函数与方程的思想.

由 $S_{5}S_{6}+15=0$ 得 $(5a_{1}+10d)(6a_{1}+15d)+15=0$

即 $2a_{1}^{2}+9a_{1}d+10d^{2}+1=0$ . 关于 $a_{1}$ 的一元二次方程有解，

$\\Delta = 81d^{2} - 8(10d^{2} + 1)\\geqslant 0$ ，解得 $d\\leqslant -2\\sqrt{2}$ 或 $d\\geqslant 2\\sqrt{2}$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-1-3",
    topicId: "topic-sec-2-1",
    title: `满足条件 AB=2, AC=√2BC 的 △ ABC`,
    content: `满足条件 AB=2, $AC=\\sqrt{2}BC$ 的 $\\triangle ABC$ 的面积的最大值是 \\_\\_\\_\\_.`,
    preview: `满足条件 AB=2, AC=√2BC 的 △ ABC 的面积的最大值是 \\_\\_\\_\\_.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-1-3-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `可设 BC = x，则 $AC = \\sqrt{2}x$ ，

根据面积公式得 $S_{\\triangle ABC}=x\\sqrt{1-\\cos^{2}B}$ .

由余弦定理计算得 $\\cos B=\\frac{4-x^{2}}{4x}$ .

由上两式得 $S_{\\triangle ABC} = x\\sqrt{1 - \\left(\\frac{4 - x^2}{4x}\\right)^2} = \\sqrt{\\frac{128 - (x^2 - 12)^2}{16}}.$

由 $\\left\\{\\begin{aligned}\\sqrt{2}x+x&>2,\\\\ x+2&>\\sqrt{2}x\\end{aligned}\\right.$ 得 $2\\sqrt{2}-2<x<2\\sqrt{2}+2.$

故当 $x = 2\\sqrt{3}$ 时， $S_{\\triangle ABC}$ 的最大值为 $2\\sqrt{2}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-1-4",
    topicId: "topic-sec-2-1",
    title: `已知函数 f(x) = lg 1 + 2^x + 4^x a/a^2 - a + 1，其中 a 为常数，若当 x ∈`,
    content: `已知函数 $f(x) = \\lg \\frac{1 + 2^x + 4^x a}{a^2 - a + 1}$ ，其中 $a$ 为常数，若当 $x \\in (-\\infty, 1]$ 时， $f(x)$ 有意义，求实数 $a$ 的取值范围.`,
    preview: `已知函数 ，其中 a 为常数，若当 x (-∞, 1] 时， f(x) 有意义，求实数 a 的取值范围.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-1-4-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `参数 $a$ 深含在一个复杂的复合函数的表达式中, 欲直接建立关于 $a$ 的不等式 (组) 非常困难, 故应转换思维角度, 设法从原式中把 $a$ 分离出来, 重新认识 $a$ 与其他变元 $x$ 的依存关系, 利用新的函数关系, 使原问题“柳暗花明”.

由 $\\frac{1+2^{x}+4^{x}a}{a^{2}-a+1}>0$ ，且 $a^{2}-a+1=\\left(a-\\frac{1}{2}\\right)^{2}+\\frac{3}{4}>0$ ，

得 $1 + 2^{x} + 4^{x}a > 0$ ，故 $a > -\\left(\\frac{1}{4^x} +\\frac{1}{2^x}\\right)$

当 $x \\in (-\\infty, 1]$ 时， $y = \\frac{1}{4^x}$ 与 $y = \\frac{1}{2^x}$ 都是减函数，

因此，函数 $y=-\\left(\\frac{1}{4^{x}}+\\frac{1}{2^{x}}\\right)$ 在 $(-∞,1]$ 上是增函数，

所以 $-\\left(\\frac{1}{4^{x}}+\\frac{1}{2^{x}}\\right)_{\\max}=-\\frac{3}{4},a>-\\frac{3}{4}$ ，故a的取值范围是 $\\left(-\\frac{3}{4},+\\infty\\right)$ .

评注 发掘、提炼多变元问题中变元间的相互依存、相互制约的关系, 反客为主, 主客换位, 创设新的函数, 并利用新函数的性质创造性地使原问题获解, 是解题人思维品质高的表现. 本题主客换位后, 利用新建函数 $y = -\\left(\\frac{1}{4^x} + \\frac{1}{2^x}\\right)$ 的单调性巧妙地求出实数 $a$ 的取值范围. 此法也叫主元法.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-1-5",
    topicId: "topic-sec-2-1",
    title: `已知抛物线 x^2=4y 的焦点为 F, A, B`,
    content: `已知抛物线 $x^{2}=4y$ 的焦点为 F, A, B 是抛物线上的两动点，且 $\\overrightarrow{AF}=\\lambda\\overrightarrow{FB}$ ( $\\lambda>0$ ). 过 A、B 两点分别作抛物线的切线，设其交点为 M.
(1) 证明: $\\overrightarrow{FM} \\cdot \\overrightarrow{AB}$ 为定值;
(2) 设 $\\triangle ABM$ 的面积为 S，写出 $S = f(\\lambda)$ 的表达式，并求 S 的最小值.`,
    preview: `已知抛物线 x^2=4y 的焦点为 F, A, B 是抛物线上的两动点，且 →AF=λ→FB ( λ>0 ). 过 A、B 两点分别作抛物线的切线，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-1-5-sol-0",
        title: `解答`,
        method: "creative",
        steps: [],
        explanation: `(1) 证明 由已知条件, 得 $F(0,1), \\lambda > 0$ . 设 $A(x_1, y_1), B(x_2, y_2)$ .

由 $\\overrightarrow{AF}=\\lambda\\overrightarrow{FB}$ ，得 $(-x_{1},1-y_{1})=\\lambda(x_{2},y_{2}-1)$ ，

即 $\\left\\{\\begin{aligned}-x_{1}&=\\lambda x_{2},\\\\ 1-y_{1}&=\\lambda(y_{2}-1),\\end{aligned}\\right.$ ①

②

将①式两边平方并把 $y_{1} = \\frac{1}{4} x_{1}^{2}, y_{2} = \\frac{1}{4} x_{2}^{2}$ 代入，得 $y_{1} = \\lambda^{2}y_{2}$ ，

解②③式得 $y_{1}=\\lambda, y_{2}=\\frac{1}{\\lambda}$ ，且有 $x_{1}x_{2}=-\\lambda x_{2}^{2}=-4\\lambda y_{2}=-4$ ，

抛物线方程为 $y=\\frac{1}{4}x^{2}$ ，求导得 $y'=\\frac{1}{2}x$ .

所以过抛物线上 $A, B$ 两点的切线方程分别是

$$
y = \\frac {1}{2} x _ {1} (x - x _ {1}) + y _ {1}, y = \\frac {1}{2} x _ {2} (x - x _ {2}) + y _ {2},
$$

即 $y = \\frac{1}{2} x_1x - \\frac{1}{4} x_1^2, y = \\frac{1}{2} x_2x - \\frac{1}{4} x_2^2.$

解出两条切线的交点 M 的坐标为 $\\left(\\frac{x_{1}+x_{2}}{2},\\frac{x_{1}x_{2}}{4}\\right)=\\left(\\frac{x_{1}+x_{2}}{2},-1\\right)$ ,

所以 $\\overrightarrow{FM} \\cdot \\overrightarrow{AB} = \\left(\\frac{x_1 + x_2}{2}, -2\\right) \\cdot (x_2 - x_1, y_2 - y_1)$

$$
= \\frac {1}{2} (x _ {2} ^ {2} - x _ {1} ^ {2}) - 2 \\left(\\frac {1}{4} x _ {2} ^ {2} - \\frac {1}{4} x _ {1} ^ {2}\\right) = 0,
$$

所以 $\\overrightarrow{FM}\\cdot\\overrightarrow{AB}$ 为定值,其值为0.

(2)由(1)知在 $\\triangle ABM$ 中, $FM\\perp AB$ ,

因而 $S=\\frac{1}{2}|AB|\\cdot|FM|$ .

$$
\\begin{array}{l} | F M | = \\sqrt {\\left(\\frac {x _ {1} + x _ {2}}{2}\\right) ^ {2} + (- 2) ^ {2}} = \\sqrt {\\frac {1}{4} x _ {1} ^ {2} + \\frac {1}{4} x _ {2} ^ {2} + \\frac {1}{2} x _ {1} x _ {2} + 4} \\\\ = \\sqrt {y _ {1} + y _ {2} + \\frac {1}{2} \\times (- 4) + 4} = \\sqrt {\\lambda + \\frac {1}{\\lambda} + 2} = \\sqrt {\\lambda} + \\frac {1}{\\sqrt {\\lambda}}. \\\\ \\end{array}
$$

因为 $|AF|$ 、 $|BF|$ 分别等于A、B到抛物线准线y=-1的距离，

所以 $|AB| = |AF| + |BF| = y_1 + y_2 + 2 = \\lambda +\\frac{1}{\\lambda} +2 = \\left(\\sqrt{\\lambda} +\\frac{1}{\\sqrt{\\lambda}}\\right)^2.$

于是 $S = \\frac{1}{2} |AB|\\cdot |FM| = \\frac{1}{2}\\left(\\sqrt{\\lambda} +\\frac{1}{\\sqrt{\\lambda}}\\right)^3,$

由 $\\sqrt{\\lambda} +\\frac{1}{\\sqrt{\\lambda}}\\geqslant 2$ 知 $S\\geqslant 4$ ，且当 $\\lambda = 1$ 时， $S$ 取得最小值4.

评注 在解析几何中考查三角形面积的最值问题是高考的重点和热点,求解的关键是建立面积的目标函数,再求函数最值,至于如何求最值,应视函数式的特点而定,本题运用的方法是利用均值定理放缩.

本题的背景是阿基米德三角形的性质3的推论,说明如下:

如图 2-1-1 所示, 抛物线 $x^{2}=2py$ 上两个不同的点 A, B 的坐标为分别 $A(x_{1}, y_{1}), B(x_{2}, y_{2})$ , 以 A, B 为切点的切线 PA, PB 相交于点 P, 我们称弦 AB 为阿基米德 $\\triangle PAB$ 的底边.

![](images/4654d7529be45346ad9c645b98f5bdb45a7f916b305924922925d695ee601a63.jpg)

图2-1-1

性质 1:

(1) 点 P 的坐标为 $\\left(\\frac{x_{1}+x_{2}}{2},\\frac{x_{1}x_{2}}{2p}\\right)$ ;
(2)底边 \${AB}$ 所在的直线方程为

$$
(x _ {1} + x _ {2}) x - 2 p y - x _ {1} x _ {2} = 0;
$$

(3) $\\triangle PAB$ 的面积 $S_{\\triangle PAB}=\\frac{\\left|x_{1}-x_{2}\\right|^{3}}{8p}$ .

推论：

1. 阿基米德三角形底边上的中线平行(或重合)于抛物线的对称轴.
2. 设点 P 的坐标为 $(x_{0}, y_{0})$ ，则底边 AB 所在直线的方程为 $x_{0}x - p(y + y_{0}) = 0$ .

性质 2: 在 $\\triangle ABP$ 中, 若 F 为抛物线的焦点, 则 $\\left|AF\\right| \\cdot \\left|BF\\right| = \\left|PF\\right|^{2}$ .

性质 3: 在 $\\triangle ABP$ 中, 若 F 为抛物线的焦点, 则

$$
\\angle P F A = \\angle P F B.
$$

推论:如图 2-1-2 所示,在阿基米德 $\\triangle ABP$ 中,若弦 AB 过抛物线的焦点 F,则

![](images/afc762c32754b6d20a0d07fc23f8488c22b93ef8595105283375f540dd5dd4a2.jpg)

图2-1-2

① $PF \\perp AB;$

②PA⊥PB;

③ $\\triangle PAB$ 的面积的最小值为 $p^{2}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-1-6",
    topicId: "topic-sec-2-1",
    title: `设 a=3^33+13^34+1, b=3^34+13^35+1，比较 a、b 的大小关系`,
    content: `设 $a=\\frac{3^{33}+1}{3^{34}+1}, b=\\frac{3^{34}+1}{3^{35}+1}$ ，比较 a、b 的大小关系.`,
    preview: `设 ，比较 a、b 的大小关系.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-1-6-sol-0",
        title: `解答`,
        method: "creative",
        steps: [],
        explanation: `如果比较 $a - b$ 与0或 $\\frac{a}{b}$ 与1的大小，即用作差法、作商法来解，会较繁杂，不易判断.根据 $a, b$ 两数的结构特点可构造函数 $f(x) = \\frac{3^x + 1}{3^{x + 1} + 1}$ ，则 $a = f(33), b = f(34)$ ，若能判断出此函数的单调性，那么就可简洁地比较出 $a, b$ 的大小.

$$
\\begin{array}{l} f (x) = \\frac {3 ^ {x} + 1}{3 ^ {x + 1} + 1} = \\frac {3 ^ {x + 1} + 3}{3 (3 ^ {x + 1} + 1)} \\\\ = \\frac {(3 ^ {x + 1} + 1) + 2}{3 (3 ^ {x + 1} + 1)} = \\frac {1}{3} + \\frac {2}{3 (3 ^ {x + 1} + 1)}. \\\\ \\end{array}
$$

因为 $3^{x + 1}$ 在 $\\mathbf{R}$ 上单调递增，所以 $\\frac{2}{3(3^{x + 1} + 1)}$ 在 $\\mathbf{R}$ 上单调递减.

由此得 $f(x)=\\frac{1}{3}+\\frac{2}{3(3^{x+1}+1)}$ 在 R 上单调递减，故 $f(33)>f(34)$ ，即 a>b.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-1-7",
    topicId: "topic-sec-2-1",
    title: `求方程 x^2+2^x+2°-x=7/2 的解`,
    content: `求方程 $x^{2}+2^{x}+2^{-x}=\\frac{7}{2}$ 的解.`,
    preview: `求方程 x^2+2^x+2°-x=7/2 的解.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-1-7-sol-0",
        title: `解答`,
        method: "creative",
        steps: [],
        explanation: `显然 x=1 是方程的一个解, 记 $f(x)=x^{2}+2^{x}+2^{-x}$ , 易证 $f(x)$ 是偶函数.

下面探讨 $f(x)$ 在 $(0, +\\infty)$ 上的单调性，先考察在 $(0, +\\infty)$ 上（除去 $x = 1$ 外） $f(x) = \\frac{7}{2}$ 是否还有其他解.因为 $g(x) = x^{2}$ 在 $(0, +\\infty)$ 上是增函数，只需考察 $h(x) = 2^{x} + 2^{-x}$ 在 $(0, +\\infty)$ 上是否是增函数.

任取 $x_{1}, x_{2} \\in (0, +\\infty)$ , 且 $x_{2} > x_{1}$ , 则

$$
h (x _ {2}) - h (x _ {1}) = \\left(2 ^ {x _ {2}} + \\frac {1}{2 ^ {x _ {2}}}\\right) - \\left(2 ^ {x _ {1}} + \\frac {1}{2 ^ {x _ {1}}}\\right) = (2 ^ {x _ {2}} - 2 ^ {x _ {1}}) \\left(1 - \\frac {1}{2 ^ {x _ {1} + x _ {2}}}\\right).
$$

因为 $x_{1} + x_{2} > 0$ ，所以 $2^{x_1 + x_2} > 2^0 = 1$ ，由此得 $1 - \\frac{1}{2^{x_1 + x_2}} > 0.$

又 $x_{2} > x_{1}$ ，所以 $2^{x_2} > 2^{x_1}$ ，即 $2^{x_2} - 2^{x_1} > 0$ ，所以 $h(x_{2}) - h(x_{1}) > 0$ ，即 $h(x_{2}) > h(x_{1})$ 因此 $h(x)$ 在 $(0, +\\infty)$ 上为增函数.

故 $f(x) = g(x) + h(x)$ 在 $(0, +\\infty)$ 上为增函数.

而 $f(1)=\\frac{7}{2}$ ，所以 $f(x)=\\frac{7}{2}$ 在 $(0,+\\infty)$ 上只有一解 x=1.

又 $f(x)$ 为偶函数， $f(x)$ 在 $(-\\infty,0)$ 上只有一解 x=-1.

所以原方程的解集为 $\\{-1,1\\}$ .

评注 $x^{2} + 2^{x} + 2^{-x} = \\frac{7}{2}$ 是超越方程，此类方程在中学阶段没有一般解法，通过构造函数 $f(x) = x^{2} + 2^{x} + 2^{-x}$ ，然后从函数性质的研究中得出结论是本题的巧妙之处.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-1-8",
    topicId: "topic-sec-2-1",
    title: `设数列 a_n,b_n 满足 a_1=a>0,a_n+1=n+1/2na_n`,
    content: `设数列 $\\{a_{n}\\},\\{b_{n}\\}$ 满足 $a_{1}=a>0,a_{n+1}=\\frac{n+1}{2n}a_{n}$ ,
且 $b_{n} = \\ln (1 + a_{n}) + \\frac{1}{2} a_{n}^{2}, n \\in \\mathbf{Z}^{+}$ . 证明: $\\frac{2}{a_n + 2} < \\frac{a_n}{b_n} < 1$ ;`,
    preview: `设数列 满足 a_1=a>0,a_n+1=n+1/2na_n , 且 . 证明: 2/a_n + 2 < a_n/b_n < 1 ;`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-1-8-sol-0",
        title: `解答`,
        method: "creative",
        steps: [],
        explanation: `由 $a_1 = a > 0, a_{n+1} = \\frac{n+1}{2n} a_n$ 知 $a_n > 0 (n \\in \\mathbf{Z}^+)$ , 故 $b_n > 0 (n \\in \\mathbf{Z}^+)$ .

$$
\\frac {a _ {n}}{b _ {n}} <   1 \\Longleftrightarrow b _ {n} - a _ {n} > 0,
$$

构造函数 $f(x) = \\ln (1 + x) + \\frac{1}{2} x^2 - x (x \\geqslant 0)$ ，则其导函数为

$$
f ^ {\\prime} (x) = \\frac {1}{1 + x} + x - 1 = \\frac {x ^ {2}}{x + 1},
$$

当 x>0 时， $f'(x)>0$ ，故 $f(x)$ 在 $(0,+\\infty)$ 上为增函数，

所以 $f(x) > f(0) = 0$ ，即 $b_{n} - a_{n} > 0$ ，所以 $\\frac{a_n}{b_n} < 1.$

$$
\\frac {2}{a _ {n} + 2} <   \\frac {a _ {n}}{b _ {n}} \\Longleftrightarrow \\ln (1 + a _ {n}) - a _ {n} <   0,
$$

构造函数 $g(x) = \\ln (1 + x) - x (x \\geqslant 0)$ ，则导函数为 $g'(x) = \\frac{1}{1 + x} - 1 = \\frac{-x}{1 + x}$ ，

当 x>0 时， $g'(x)<0$ ，即 $g(x)$ 在 $(0,+\\infty)$ 上为减函数，故 $g(x)<g(0)=0$ ，

所以 $\\ln (1 + a_n) - a_n < 0, \\ln (1 + a_n) + \\frac{1}{2} a_n^2 < a_n + \\frac{1}{2} a_n^2,$

即 $b_{n} < a_{n} + \\frac{1}{2} a_{n}^{2}$ . 故 $\\frac{a_n}{b_n} > \\frac{2}{a_n + 2}$ . 综上所述, $\\frac{2}{a_n + 2} < \\frac{a_n}{b_n} < 1$ .

评注 通过构造函数 $f(x) = \\ln (1 + x) + \\frac{1}{2} x^2 - x$ 证明不等式 $x - \\frac{1}{2} x^2 < \\ln (x + 1) < x (x > 0)$ . 本题综合考查了函数、数列、不等式及导数的有关内容.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-1-9",
    topicId: "topic-sec-2-1",
    title: `直线 y=x-3 与抛物线 y^2=4x 交于 A, B`,
    content: `直线 y=x-3 与抛物线 $y^{2}=4x$ 交于 A, B 两点，过 A, B 两点向抛物线的准线作垂线，垂足分别为 P, Q，求梯形 APQB 的面积.`,
    preview: `直线 y=x-3 与抛物线 y^2=4x 交于 A, B 两点，过 A, B 两点向抛物线的准线作垂线，垂足分别为 P, Q，求梯形 APQB 的面积.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-1-9-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `直线 y=x-3 与抛物线 $y^{2}=4x$ 交于 A, B 两点，过 A, B 两点向抛物线的准线作垂线，垂足分别为 P, Q，联立方程组得 $\\left\\{\\begin{aligned}y^{2}&=4x,\\\\ y&=x-3,\\end{aligned}\\right.$

消元得 $x^{2}-10x+9=0$ ，

解得 $\\left\\{\\begin{aligned}x=1,\\\\ y=-2\\end{aligned}\\right.$ 和 $\\left\\{\\begin{aligned}x=9,\\\\ y=6.\\end{aligned}\\right.$

所以 $\\left|AP\\right|=10,\\left|BQ\\right|=2,\\left|PQ\\right|=8$ ，梯形 APQB 的面积为 48.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-1-10",
    topicId: "topic-sec-2-1",
    title: `已知函数 f(x) 满足条件 f(x)+2f(1/x)=x`,
    content: `已知函数 $f(x)$ 满足条件 $f(x)+2f\\left(\\frac{1}{x}\\right)=x$ ，求 $f(x)$ .`,
    preview: `已知函数 f(x) 满足条件 f(x)+2f(1/x)=x ，求 f(x) .`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-1-10-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `用 $\\frac{1}{x}$ 代换条件式中的x得 $f\\left(\\frac{1}{x}\\right)+2f(x)=\\frac{1}{x}$ ,

因此， $f(x)$ 与 $f\\left(\\frac{1}{x}\\right)$ 满足方程组：

$$
\\left\\{ \\begin{array}{l l} f (x) + 2 f \\Big (\\frac {1}{x} \\Big) = x, & \\\\ f \\Big (\\frac {1}{x} \\Big) + 2 f (x) = \\frac {1}{x}, & \\end{array} \\right. \\tag {①}
$$

②×2-①得 $3f(x)=\\frac{2-x^{2}}{x}$ ,

解得 $f(x) = \\frac{2 - x^2}{3x}$ .

评注 本例实际上是把 $f(x), f\\left(\\frac{1}{x}\\right)$ 看作未知数，通过解方程组求得 $f(x)$ ，是方程思想的具体应用.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-1-11",
    topicId: "topic-sec-2-1",
    title: `已知 (α+β)=2/3,(α-β)=1/5`,
    content: `已知 $\\sin(\\alpha+\\beta)=\\frac{2}{3},\\sin(\\alpha-\\beta)=\\frac{1}{5}$ ，求 $\\frac{\\tan\\alpha}{\\tan\\beta}$ 的值.`,
    preview: `已知 (α+β)=2/3,(α-β)=1/5 ，求 α/β 的值.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-1-11-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `由已知条件及正弦的和(差)角公式, 得

$$
\\left\\{ \\begin{array}{l} \\sin \\alpha \\cos \\beta + \\cos \\alpha \\sin \\beta = \\frac {2}{3}, \\\\ \\sin \\alpha \\cos \\beta - \\cos \\alpha \\sin \\beta = \\frac {1}{5}, \\end{array} \\right.
$$

所以 $\\sin\\alpha\\cos\\beta=\\frac{13}{30},\\cos\\alpha\\sin\\beta=\\frac{7}{30}$ ,

从而 $\\frac{\\tan\\alpha}{\\tan\\beta}=\\frac{\\sin\\alpha\\cos\\beta}{\\cos\\alpha\\sin\\beta}=\\frac{13}{7}.$`,
      },
      {
        id: "prob-sec-2-1-11-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `令 $x = \\frac{\\tan\\alpha}{\\tan\\beta}$ . 因为 $\\frac{\\sin(\\alpha + \\beta)}{\\sin(\\alpha - \\beta)} = \\frac{10}{3}$ ,

且 $\\frac{\\sin(\\alpha + \\beta)}{\\sin(\\alpha - \\beta)} = \\frac{\\frac{\\sin(a + \\beta)}{\\cos\\alpha\\cos\\beta}}{\\frac{\\sin(\\alpha - \\beta)}{\\cos\\alpha\\cos\\beta}} = \\frac{\\tan\\alpha + \\tan\\beta}{\\tan\\alpha - \\tan\\beta} = \\frac{\\frac{\\tan\\alpha}{\\tan\\beta} + 1}{\\frac{\\tan\\alpha}{\\tan\\beta} - 1} = \\frac{x + 1}{x - 1},$

所以得到方程 $\\frac{x+1}{x-1}=\\frac{10}{3}$ . 解这个方程得 $\\frac{\\tan\\alpha}{\\tan\\beta}=x=\\frac{13}{7}$ .

评注 上述`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-1-12",
    topicId: "topic-sec-2-1",
    title: `已知函数 f(x)=_{√3}(3x-a)`,
    content: `已知函数 $f(x)=\\log_{\\sqrt{3}}(3x-a)$ ，当点 $P(x,y)$ 在函数 $y=f(x)$ 图像上时，点 $Q\\left(3x,\\frac{y}{2}\\right)$ 在函数 $y=g(x)$ 图像上.
(1) 求 $y = g(x)$ 的表达式；

(2) 若 $A(x + a, y_1), B(x, y_2), C(3 + a, y_3)$ 为 $y = g(x)$ 图像上的三点，且满足 $2y_2 = y_1 + y_3$ 的实数 $x$ 有且只有两个不同的值，求实数 $a$ 的取值范围.`,
    preview: `已知函数 f(x)=_{√3}(3x-a) ，当点 P(x,y) 在函数 y=f(x) 图像上时，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-1-12-sol-0",
        title: `解答`,
        method: "creative",
        steps: [],
        explanation: `易求出 $y=g(x)$ 的解析式, 问题可转化为一元二次方程 $\\varphi(x)=0$ 的根的分布问题, 利用图像可获解.

(1)由题意, 得 $\\left\\{\\begin{aligned} y &= \\log_{\\sqrt{3}}(3x - a), \\\\ \\frac{y}{2} &= g(3x) \\end{aligned}\\right. \\Rightarrow g(3x) = \\frac{1}{2} \\log_{\\sqrt{3}}(3x - a)$ ,

令 $t = 3x$ ，则 $t > a$ ，并且 $g(t) = \\frac{1}{2}\\log_{\\sqrt{3}}(t - a)$

所以 $g(x)=\\frac{1}{2}\\log_{\\sqrt{3}}(x-a)(x>a)$ .

(2)由 $g(x) = \\frac{1}{2}\\log_{\\sqrt{3}}(x - a)(x > a)$ ,

得 $y_{1} = \\frac{1}{2}\\log_{\\sqrt{3}}x,y_{2} = \\frac{1}{2}\\log_{\\sqrt{3}}(x - a),y_{3} = \\frac{1}{2}\\log_{\\sqrt{3}}3 = 1.$

于是， $2y_{2} = y_{1} + y_{3}\\Rightarrow \\log_{\\sqrt{3}}(x - a) = \\frac{1}{2}\\log_{\\sqrt{3}}x + 1$ ，上式可化为

$$
\\left\\{ \\begin{array}{l} x > a, \\\\ x > 0, \\\\ (x - a) ^ {2} = 3 x \\end{array} \\Rightarrow \\left\\{ \\begin{array}{l} x > a, \\\\ x ^ {2} - (2 a + 3) x + a ^ {2} = 0. \\end{array} \\right. \\right.
$$

问题等价于方程 $x^{2}-(2a+3)x+a^{2}=0(x>a)$ 有且仅有两个不等的实根.

记 $\\varphi (x) = x^{2} - (2a + 3)x + a^{2}$ ，则 $\\varphi (x) = 0$ 在 $(a, +\\infty)$ 上有两个不等实根的充要条件为

$\\left\\{ \\begin{array}{l} \\Delta > 0, \\\\ \\varphi(a) > 0, \\\\ \\frac{2a + 3}{2} > a, \\end{array} \\right. \\Rightarrow \\left\\{ \\begin{array}{l} 12a + 9 > 0, \\\\ -3a > 0, \\\\ 2a + 3 > 2a. \\end{array} \\right.$ 解得 $-\\frac{3}{4} < a < 0.$

评注 本题利用图像法及根与系数关系也可获解,一般涉及一元二次方程的根的分布问题,要结合二次函数的图像进行分析转化,并且要具体问题具体分析.常见的一元二次方程根的分布规律有:

设 $ax^2 + bx + c = 0 (a > 0)$ 的两根为 $x_1, x_2 (x_1 \\leqslant x_2)$ , 记 $f(x) = ax^2 + bx + c$ .

(1) 若 $x_{1}<p<x_{2}$ ，则等价条件为 $f(p)<0$ .

一般地，若 $x_{1}<m<n<x_{2}$ ，则等价条件为 $\\left\\{\\begin{aligned}f(m)&<0,\\\\ f(n)&<0.\\end{aligned}\\right.$

(2) 若 $m < x_{1} \\leqslant x_{2} < n$ ，则等价条件为 $\\left\\{\\begin{aligned}\\Delta &\\geqslant 0,\\\\ m &<-\\frac{b}{2a}<n,\\\\ f(m) &>0,\\\\ f(n) &>0.\\end{aligned}\\right.$

特别地，若 $x_{1} \\leqslant x_{2} < p$ ，则等价条件为 $\\left\\{\\begin{aligned}\\Delta &\\geqslant 0,\\\\ -\\frac{b}{2a} &< p,\\\\ f(p) &>0.\\end{aligned}\\right.$

若 $p < x_{1} \\leqslant x_{2}$ ，则等价条件为 $\\left\\{\\begin{aligned}\\Delta &\\geqslant 0,\\\\ -\\frac{b}{2a} &>p,\\\\ f(p) &>0.\\end{aligned}\\right.$

(3)若二次方程在 $(m,n)$ 上有且只有一根,则等价条件为 $f(m)\\cdot f(n)<0$ ,

或 $\\left\\{\\begin{aligned}f(m)=0,\\\\ f(n)>0,\\\\ m<-\\frac{b}{2a}<n\\end{aligned}\\right.$ 或 $\\left\\{\\begin{aligned}f(m)>0,\\\\ f(n)=0,\\\\ m<-\\frac{b}{2a}<n\\end{aligned}\\right.$ 或 $\\left\\{\\begin{aligned}\\Delta=0,\\\\ m<-\\frac{b}{2a}<n.\\end{aligned}\\right.$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-1-13",
    topicId: "topic-sec-2-1",
    title: `已知 |a| = 2 |b| ≠ 0`,
    content: `已知 $|a| = 2 |b| \\neq 0$ ，且关于 $x$ 的方程 $x^2 + |a|x + a \\cdot b = 0$ 有实根，求 $a$ 与 $b$ 夹角的取值范围.`,
    preview: `已知 |a| = 2 |b| ≠ 0 ，且关于 x 的方程 x^2 + |a|x + a · b = 0 有实根，求 a 与 b 夹角的取值范围.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-1-13-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `$|a| = 2 |b| \\neq 0$ ，且关于 $x$ 的方程 $x^2 + |a|x + a \\cdot b = 0$ 有实根，

则 $|a|^2 - 4a \\cdot b \\geqslant 0$

设向量a,b的夹角为 $\\theta,\\cos\\theta=\\frac{a\\cdot b}{|a|\\cdot|b|}\\leqslant\\frac{\\frac{1}{4}|a|^{2}}{\\frac{1}{2}|a|^{2}}=\\frac{1}{2}.$

所以a与b的夹角 $\\theta$ 的范围为 $\\left[\\frac{\\pi}{3},\\pi\\right]$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-1-14",
    topicId: "topic-sec-2-1",
    title: `已知 x [1/2, 2]`,
    content: `已知 $x \\in \\left[\\frac{1}{2}, 2\\right]$ ，求函数 $y = \\frac{\\sqrt{5x - 2}}{x}$ 的最小值.`,
    preview: `已知 x [1/2, 2] ，求函数 y = √5x - 2x 的最小值.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-1-14-sol-0",
        title: `解答`,
        method: "creative",
        steps: [],
        explanation: `将原函数变形为 $y^{2}x^{2}-5x+2=0, x\\in\\left[\\frac{1}{2},2\\right]$ .

设 $f(x) = y^{2}x^{2} - 5x + 2$ ，该方程有解的充要条件为

(1) $f\\left(\\frac{1}{2}\\right) \\cdot f(2) \\leqslant 0,$ 或(2) $\\begin{cases} \\frac{1}{2} \\leqslant \\frac{5}{2y^2} \\leqslant 2, \\\\ \\Delta = 25 - 8y^2 \\geqslant 0, \\\\ f\\left(\\frac{1}{2}\\right) \\geqslant 0 \\text{且} f(2) \\geqslant 0. \\end{cases}$

解得 $\\sqrt{2} \\leqslant y \\leqslant \\frac{5\\sqrt{2}}{4}$ ，所以 $y_{\\min} = \\sqrt{2}$ ，此时 $x = \\frac{1}{2}$ 或 $x = 2$

评注 本例体现了函数与方程思想的相互转化,相互补充,提供了构造方程(或函数)解题的又一途径,扩展了解题思维的空间.应用方程思想解题时,易误认为方程有两个实根,而从判别式考虑,未注意到是在区间 $\\left[\\frac{1}{2},2\\right]$ 上有实根,必须用区间上的根的原理解决,审题时应注意两类情况的区别,不可混为一谈.

当然,本题也可利用配方法来解: $y=\\sqrt{-2\\left(\\frac{1}{x}-\\frac{5}{4}\\right)^{2}+\\frac{25}{8}}$ ,其中 $\\frac{1}{x}\\in\\left[\\frac{1}{2},2\\right]$ ,根据二次函数性质,当 $x=\\frac{1}{2}$ 时, $y_{\\min}=\\sqrt{2}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-1-15",
    topicId: "topic-sec-2-1",
    title: `已知直线 l: y = k(x + 1) 与抛物线 C:`,
    content: `已知直线 $l: y = k(x + 1)$ 与抛物线 $C: y^2 = 4x$ 交于不同的两点 $A, B$ , 问: 是否存在 $k$ , 使以 $AB$ 为直径的圆过抛物线 $C$ 的焦点 $F$ ?`,
    preview: `已知直线 l: y = k(x + 1) 与抛物线 C: y^2 = 4x 交于不同的两点 A, B , 问: 是否存在 k , 使以 AB 为直径的圆过抛物线`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-1-15-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `显然 $F$ 的坐标为 $(1,0)$ ，设 $A(x_{1},y_{1}), B(x_{2},y_{2})$

则 $y_{1}=k(x_{1}+1)$ , $y_{2}=k(x_{2}+1)$ .

当 k=0 时，l 与 C 只有一个交点不合题意，因此， $k\\neq0$ .

将 $y = k(x + 1)$ 代入 $y^{2} = 4x$ ，得 $k^2 x^2 +2(k^2 -2)x + k^2 = 0.$ ①

依题意, $x_{1},x_{2}$ 是①的不相等的两个根.

则 $\\Delta = 4(k^2 - 2)^2 - 4k^2 \\cdot k^2 > 0, x_1 + x_2 = \\frac{2(2 - k^2)}{k^2}, x_1x_2 = 1.$ ②

以 $AB$ 为直径的圆过 $F \\Leftrightarrow AF \\perp BF \\Leftrightarrow k_{AF} \\cdot k_{BF} = -1 \\Leftrightarrow \\frac{y_1}{x_1 - 1} \\cdot \\frac{y_2}{x_2 - 1} = -1$

$$
\\begin{array}{l} \\Leftrightarrow x _ {1} x _ {2} + y _ {1} y _ {2} - (x _ {1} + x _ {2}) + 1 = 0 \\\\ \\Leftrightarrow x _ {1} x _ {2} + k ^ {2} (x _ {1} + 1) (x _ {2} + 1) - (x _ {1} + x _ {2}) + 1 = 0 \\\\ \\Leftrightarrow (1 + k ^ {2}) x _ {1} x _ {2} + (k ^ {2} - 1) (x _ {1} + x _ {2}) + 1 + k ^ {2} = 0. \\tag {③} \\\\ \\end{array}
$$

把 $x_{1} + x_{2} = \\frac{2(2 - k^{2})}{k^{2}}, x_{1}x_{2} = 1$ 代入③，得 $4k^{2} - 2 = 0.$

所以 $k=\\pm\\frac{\\sqrt{2}}{2}$ ，经检验， $k=\\pm\\frac{\\sqrt{2}}{2}$ 适合②式.

综上所述, $k=\\pm\\frac{\\sqrt{2}}{2}$ 为所求.`,
      },
      {
        id: "prob-sec-2-1-15-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `由 $\\left\\{\\begin{aligned}y^{2}&=4x,\\\\ y&=k(x+1)\\end{aligned}\\right.$ 消去y，得 $k^{2}x^{2}+2(k^{2}-2)x+k^{2}=0$ ，①

$\\Delta = 4(k^{2} - 2)^{2} - 4k^{2}\\cdot k^{2} = 16(1 - k^{2}) > 0$ ，即 $k^2 < 1$

由 $\\left\\{\\begin{aligned}y^{2}&=4x,\\\\ y=k(x+1)\\end{aligned}\\right.$ 消去x，得 $k^{2}y^{2}-4ky+4k^{2}=0.$ ②

①+②得以 AB 为直径的圆的方程为 $k^{2}x^{2}+k^{2}y^{2}+2(k^{2}-2)x-4ky+5k^{2}=0$

将 $x = 1, y = 0$ 代入方程，得 $k^2 + 2(k^2 - 2) + 5k^2 = 0$ ，所以 $k^2 = \\frac{1}{2}$

故存在 $k=\\pm\\frac{\\sqrt{2}}{2}$ ，满足题意.

评注 “是否存在符合题意的 k”，按思路的自然流向应变为“关于 k 的方程是否有解”。另外，解得 $k=\\pm\\frac{\\sqrt{2}}{2}$ 后，必须经过②式的检验，就是说， $k=\\pm\\frac{\\sqrt{2}}{2}$ 时，l 与 C 要确实有两个不同的交点。`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-1-16",
    topicId: "topic-sec-2-1",
    title: `已知 √5b - c5a = 1(a,b,c R)`,
    content: `已知 $\\frac{\\sqrt{5}b - c}{5a} = 1(a,b,c\\in \\mathbf{R})$ ，则有 （）
A. \${b}^{2} > {4ac}$

B. $b^{2} \\geqslant 4ac$

C. $b^{2} < 4ac$

D. $b^{2} \\leqslant 4ac$`,
    preview: `已知 √5b - c5a = 1(a,b,c R) ，则有 （） A. b^2 > 4ac B. b^2 ≥ 4ac C. b^2 < 4ac D.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-1-16-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `依题设条件有 $a \\cdot 5 - b \\cdot \\sqrt{5} + c = 0$ .

则 $-\\sqrt{5}$ 是实系数一元二次方程 $ax^{2}+bx+c=0$ 的一个实根.

得 $\\Delta=b^{2}-4ac\\geqslant0$ , 所以 $b^{2}\\geqslant4ac$ , 故选 B.`,
      },
      {
        id: "prob-sec-2-1-16-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `去分母, 移项, 两边平方, 得 $5b^{2} = 25a^{2} + 10ac + c^{2} \\geqslant 10ac + 2 \\times 5ac = 20ac$ , 则 $b^{2} \\geqslant 4ac$ , 故选 B.`,
      },
      {
        id: "prob-sec-2-1-16-sol-3",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `转化为 $b^{2}$ 是 a、c 的函数,运用重要不等式,思路清晰,水到渠成.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-1-17",
    topicId: "topic-sec-2-1",
    title: `对数方程覆盖条件下的参数集合`,
    content: `设 a>1，若仅有一个常数 c，使得对于任意的 $x\\in[a,2a]$ ，都有 $y\\in[a,a^{2}]$ 满足方程 $\\log_{a}x+\\log_{a}y=c$ ，这时，a 的取值的集合为 \\_\\_\\_\\_.`,
    preview: `设 a>1，若仅有一个常数 c，使得对于任意的 x[a,2a] ，都有 y[a,a^2] 满足方程 _ax+_ay=c ，这时，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-1-17-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `方程 $\\log_{a}x + \\log_{a}y = c$ 是一个不定方程, 可视为函数加以分析解决.

由已知得 $y=\\frac{a^{c}}{x}$ ，单调递减，所以当 $x\\in[a,2a]$ 时， $y\\in\\left[\\frac{a^{c-1}}{2},a^{c-1}\\right]$ ，

所以 $\\left\\{\\begin{aligned}\\frac{a^{c-1}}{2}&\\geqslant a,\\\\ a^{c-1}&\\leqslant a^{2}\\end{aligned}\\right.\\Rightarrow\\left\\{\\begin{aligned}c&\\geqslant2+\\log_{a}2,\\\\ c&\\leqslant3,\\end{aligned}\\right.$

因为有且只有一个常数 c 符合题意, 所以 $2 + \\log_{a}2 = 3$ , 解得 a = 2,

所以 a 的取值的集合为 $\\{2\\}$ .

评注 主要是综合考查数学素养.“对于任意的 $x \\in [a, 2a]$ ，都有 $y \\in [a, a^{2}]$ ”的意义是“函数 $y = \\frac{a^{c}}{x}$ 在 $[a, 2a]$ 上的值域是 $[a, a^{2}]$ 的子集”，由不等式“夹逼原则”求出唯一的常数 a.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-1-18",
    topicId: "topic-sec-2-1",
    title: `已知函数 f(x)=x^2+ax+b 在区间 [0,2]`,
    content: `已知函数 $f(x)=x^{2}+ax+b$ 在区间 $[0,2]$ 上有两个零点，则 $2a+b$ 的范围是 \\_\\_\\_\\_.`,
    preview: `已知函数 f(x)=x^2+ax+b 在区间 [0,2] 上有两个零点，则 2a+b 的范围是 \\_\\_\\_\\_.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-1-18-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `设两个零点分别为 $x_{1}, x_{2}$ ，则 $x_{1} + x_{2} = -a, x_{1}x_{2} = b$ ，

所以 $2a+b=-2(x_{1}+x_{2})+x_{1}x_{2}=(2-x_{1})(2-x_{2})-4,$

根据零点的已知范围易得,所求范围为 $[-4,0)$ .

变式 求 $a^{2}-2b$ 的范围.

讲解 $a=-\\left(x_{1}+x_{2}\\right),b=x_{1}x_{2},a^{2}-2b=x_{1}^{2}+x_{2}^{2}\\in(0,8).$

评注 本题若用根的分布列不等式组来做会比较麻烦,以上解法简洁明了.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-1-19",
    topicId: "topic-sec-2-1",
    title: `已知直线 l 过点 A(1, -2) 和点 B(4, 1)`,
    content: `已知直线 l 过点 A(1, -2) 和点 B(4, 1).
(1) 若直线 $l$ 与双曲线 $C: \\frac{x^2}{a^2} - y^2 = 1 (a > 0)$ 相交于 $E, F$ 两点，且线段 $EF$ 的中点坐标为 (4,1)，求 $a$ 的值；

(2)对于平面上任一点 P，当点 Q 在线段 AB 上运动时，称 $\\left|PQ\\right|$ 的最小值为 P 与线段 AB 的距离。已知点 P 在 x 轴上运动，写出点 $P(t,0)$ 到线段 AB 的距离 h 关于 t 的函数关系式。`,
    preview: `已知直线 l 过点 A(1, -2) 和点 B(4, 1). (1) 若直线 l 与双曲线 C: x^2/a^2 - y^2 = 1 (a > 0) 相交于 E`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-1-19-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `（1）由 $\\left\\{\\begin{aligned} y &= x - 3, \\\\ \\frac{x^{2}}{a^{2}} - y^{2} &= 1 \\end{aligned}\\right.$ 得 $\\left(\\frac{1}{a^{2}} - 1\\right)x^{2} + 6x - 10 = 0$ ,

设 $E(x_{1},y_{1}),F(x_{2},y_{2})$

则 $x_{1}+x_{2}=-\\frac{6a^{2}}{1-a^{2}}=8$ , 得 a=2.

(2)`,
      },
      {
        id: "prob-sec-2-1-19-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `设线段 AB 上任意一点 $Q(x, x-3)$ ,

$$
| P Q | = \\sqrt {(t - x) ^ {2} + (x - 3) ^ {2}},
$$

记 $f(x) = \\sqrt{(t - x)^2 + (x - 3)^2} = \\sqrt{2\\left(x - \\frac{t + 3}{2}\\right)^2 + \\frac{(t - 3)^2}{2}} (1\\leqslant x\\leqslant 4),$

①当 $1 \\leqslant \\frac{t + 3}{2} \\leqslant 4$ 即 $-1 \\leqslant t \\leqslant 5$ 时， $|PQ|_{\\min} = f\\left(\\frac{t + 3}{2}\\right) = \\frac{\\sqrt{2}|t - 3|}{2}$ ;

②当 $\\frac{t+3}{2}>4$ 即 t>5 时， $f(x)$ 在 $[1,4]$ 上单调递减，

$$
\\left| P Q \\right| _ {\\min} = f (4) = \\sqrt {(t - 4) ^ {2} + 1};
$$

③当 $\\frac{t+3}{2}<1$ 即 t<-1 时， $f(x)$ 在 $[1,4]$ 上单调递增，

$$
\\left| P Q \\right| _ {\\min} = f (1) = \\sqrt {(t - 1) ^ {2} + 4}.
$$

综上所述， $h(t) = \\left\\{ \\begin{array}{l}\\sqrt{(t - 1)^2 + 4}, t < -1, \\\\ \\frac{\\sqrt{2} |t - 3|}{2}, -1 \\leqslant t \\leqslant 5, \\\\ \\sqrt{(t - 4)^2 + 1}, t > 5. \\end{array} \\right.$`,
      },
      {
        id: "prob-sec-2-1-19-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `过 A, B 两点分别作线段 AB 的垂线, 交 x 轴于 $A_{1}(-1,0)$ , $B_{1}(5,0)$ , 如图 2-1-3 所示.

①当点 P 在线段 $A_{1}B_{1}$ 上，即 $-1 \\leqslant t \\leqslant 5$ 时，

由点到直线的距离公式得 $|PQ|_{\\min}=\\frac{|t-3|}{\\sqrt{2}}$ ;

②当点 P 在点 $A_{1}$ 的左边, t<-1 时,

$$
\\left| P Q \\right| _ {\\min} = \\left| P A \\right| = \\sqrt {(t - 1) ^ {2} + 4};
$$

③当点 P 在点 $B_{1}$ 的右边, t > 5 时,

$$
\\left| P Q \\right| _ {\\min} = \\left| P B \\right| = \\sqrt {(t - 4) ^ {2} + 1}.
$$

综上所述， $h(t) = \\left\\{ \\begin{array}{l}\\sqrt{(t - 1)^2 + 4}, t < -1; \\\\ \\frac{\\sqrt{2} |t - 3|}{2}, -1 \\leqslant t \\leqslant 5; \\\\ \\sqrt{(t - 4)^2 + 1}, t > 5. \\end{array} \\right.$

![](images/e0ab54fcc21dc3a398ae1c4d91b32da8981868606da50607e250384d75440164.jpg)
图2-1-3

评注 第(1)问是运用了方程的思想,解方程组即可,第(2)问实质上是二次函数在限定区间上的最值问题,注意分类求解.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-1-20",
    topicId: "topic-sec-2-1",
    title: `已知 f(x)=x^2+(m+1)x+|m+2(m≠-2`,
    content: `已知 $f(x)=x^{2}+(m+1)x+\\lg|m+2\\mid(m\\neq-2,m\\in\\mathbf{R})$ .
(1) 若 $f(x)$ 能表示成一个奇函数 $g(x)$ 和一个偶函数 $h(x)$ 的和，求 $g(x)$ 和 $h(x)$ 的解析表达式.

(2) 若 $f(x)$ 和 $g(x)$ 在区间 $\\left[\\lg |m+2|, (m+1)^{2}\\right]$ 上都是减函数，求 m 的取值范围.

(3)在(2)的条件下,比较 $f(1)$ 和 $\\frac{1}{6}$ 的大小.`,
    preview: `已知 f(x)=x^2+(m+1)x+|m+2(m≠-2,m) . (1) 若 f(x) 能表示成一个奇函数 g(x) 和一个偶函数 h(x) 的和，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-1-20-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `第(1)小题可从方程的观点解出 $g(x)$ 和 $h(x)$ ; 在第(2)小题中, 由 $f(x)$ 和 $g(x)$ 的单调性可得到关于 m 的一个不等式组; 第(3)小题则可借助于函数的单调性进行灵活转化.

由题意得 $f(x)=g(x)+h(x)$ ，①

所以 $f(-x)=g(-x)+h(-x)=-g(x)+h(x).$ ②

由①②得 $g(x)=\\frac{1}{2}[f(x)-f(-x)]=(m+1)x.$

$$
h (x) = f (x) - g (x) = x ^ {2} + \\lg | m + 2 |.
$$

(2)由 $g(x)=(m+1)x$ 为减函数得 $m+1<0$ ，即 m<-1.

又由 $f(x)$ 在 $\\left[\\lg\\left|m+2\\right|,(m+1)^{2}\\right]$ 上为减函数，

得 $(m+1)^{2}\\leqslant-\\frac{m+1}{2}$ ,

所以 $-\\frac{3}{2}\\leqslant m\\leqslant-1.$ ④

由③④得 $-\\frac{3}{2}\\leqslant m<-1$ ，此时 $\\lg|m+2|<(m+1)^{2}$ .

故 m 的取值范围是 $\\left[-\\frac{3}{2}, -1\\right)$ .

(3) $f(1)=m+2+\\lg|m+2|$ ,

易证 $\\varphi(m) = m + 2 + \\lg |m + 2|$ 在 $\\left[-\\frac{3}{2}, -1\\right)$ 上为增函数，

故 $f(1) = \\varphi (m)\\geqslant \\varphi \\left(-\\frac{3}{2}\\right) = \\frac{1}{2} +\\lg \\frac{1}{2}.$

又 $\\frac{1}{2} +\\lg \\frac{1}{2} -\\frac{1}{6} = \\frac{1}{3} +\\lg \\frac{1}{2} >0$ ，故 $f(1) > \\frac{1}{6}$

评注 一般地, 定义在对称区间 $(-l, l)$ 上的函数 $f(x)$ 总能表示成一个奇函数和一个偶函数之和. 实际上, $f(x) = \\frac{1}{2} [f(x) + f(-x)] + \\frac{1}{2} [f(x) - f(-x)]$ .

易证 $g(x) = \\frac{1}{2} [f(x) - f(-x)]$ 为奇函数， $h(x) = \\frac{1}{2} [f(x) + f(-x)]$ 为偶函数.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-2-1",
    topicId: "topic-sec-2-2",
    title: `设集合 I = 1,2,3,4,5 .选择 I 的两个非空子集 A 和 B，要使 B 中最小的数大于 A 中最大的数`,
    content: `设集合 $I = \\{1,2,3,4,5\\}$ .选择 $I$ 的两个非空子集 $A$ 和 $B$ ，要使 $B$ 中最小的数大于 $A$ 中最大的数，则不同的选择方法共有 （）
A. 50 种

B. 49 种

C. 48 种

D. 47 种`,
    preview: `设集合 .选择 I 的两个非空子集 A 和 B ，要使 B 中最小的数大于 A 中最大的数，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-2-1-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `这是一个计数问题,关键在于对题目的条件如何思考,(1)A 和 B 是非空子集,(2)B 中最小的数大于 A 中最大的数,怎样实现这两个条件?最好的方法是分类讨论. 从条件(2)上的“B 中最小的数”入手, 显然有四种情形:

① B 中最小的数为 2. 此时 A 仅有 1 种选法, 即 $A=\\{1\\}$ , 而 B 可以有 8 种选法, 即 3, 4, 5 三个元素可以在 B 中, 也可以不在 B 中.

② B 中最小的数为 3，此时 A 有 3 种选法，即 $A=\\{1\\},\\{2\\},\\{1,2\\}$ ，而 B 有 4 种选法，即 4,5 两个元素可以在 B 中，也可以不在 B 中.

③ $B$ 中最小的数为4，此时 $A$ 有7种选法，即 $A$ 为 $\\{1,2,3\\}$ 的非空子集，而 $B$ 有2种选法，即5可以在 $B$ 中，也可以不在 $B$ 中.

④ $B$ 中最小的数为5，此时 $A$ 有15种选法，即 $A$ 为 $\\{1,2,3,4\\}$ 的非空子集，而 $B$ 仅有1种选法，即5在 $B$ 中.

由以上分析，不同的选择方法共有 $1 \\times 8 + 3 \\times 4 + 7 \\times 2 + 15 \\times 1 = 49$ 种.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-2-2",
    topicId: "topic-sec-2-2",
    title: `“渐升数”是指每个数字比其左边的数字大的正整数(如`,
    content: `“渐升数”是指每个数字比其左边的数字大的正整数(如 34689)，则五位“渐升数”共有 126 个，若把这些数按从小到大的顺序排列，则第 100 个数为 \\_\\_\\_\\_。`,
    preview: `“渐升数”是指每个数字比其左边的数字大的正整数(如 34689)，则五位“渐升数”共有 126 个，若把这些数按从小到大的顺序排列，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-2-2-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `按首位来分类:(1)首位是1的五位“渐升数”有 $C_{8}^{4}=70$ 个;(2)首位是2的五位“渐升数”有 $C_{7}^{4}=35$ 个,其中首位是2,第2位是3的有 $C_{6}^{3}=20$ 个,首位是2,第2位是4的有 $C_{5}^{3}=10$ 个,故第100个数应是首位是2,第2位是4的五位“渐升数”中最大的一个,即为24789.

评注 本题定义了一个新概念“渐升数”. 从这一概念可知, 0 不能成为“渐升数”中的数码. 因此, 只需考虑 $1 \\sim 9$ 这九个数. 按首位从小到大分类, 注意到首位是 1 的有 $C_8^4 = 70$ 个, 首位是 2 的有 $C_7^4 = 35$ 个, 两者相加已超过 100 个, 因此, 可以确定第 100 个数应是首位为 2 的, 于是再按第 2 位来分类, 从而求得结果.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-2-3",
    topicId: "topic-sec-2-2",
    title: `对有 n(n ≥ 4) 个元素的总体 1,2,…,n 进行抽样, 先将总体分成两个子总体 1,2,…,m 和 m+1`,
    content: `对有 $n(n \\geqslant 4)$ 个元素的总体 $\\{1,2,\\cdots,n\\}$ 进行抽样, 先将总体分成两个子总体 $\\{1,2,\\cdots,m\\}$ 和 $\\{m+1,m+2,\\cdots,n\\}$ ( $m$ 是给定的正整数, 且 $2 \\leqslant m \\leqslant n-2$ ), 再从每个子总体中各随机抽取 2 个元素组成样本. 用 $P_{ij}$ 表示元素 $i$ 和 $j$ 同时出现在样本中的概率, 则 $P_{1n} =$ \\_\\_\\_\\_; 所有 $P_{ij} (1 \\leqslant i < j \\leqslant n)$ 的和等于 \\_\\_\\_\\_.`,
    preview: `对有 n(n ≥ 4) 个元素的总体 进行抽样, 先将总体分成两个子总体 和 ( m 是给定的正整数, 且 2 ≤ m ≤`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-2-3-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `$P_{1n} = \\frac{C_{m - 1}^1\\cdot C_{n - m - 1}^1}{C_m^2\\cdot C_{n - m}^2} = \\frac{4(m - 1)(n - m - 1)}{m(m - 1)(n - m)(n - m - 1)} = \\frac{4}{m(n - m)}.$

第二空格可分以下情况讨论：

①当 $i,j\\in\\{1,2,\\cdots,m\\}$ 时， $P_{ij}=1$ ;
②当 $i,j\\in\\{m+1,m+2,\\cdots,n\\}$ 时， $P_{ij}=1$ ;
③当 $i \\in \\{1, 2, \\cdots, m\\}$ , $j \\in \\{m+1, m+2, \\cdots, n\\}$ 时，

$$
P _ {i j} = m (n - m) \\times \\frac {4}{m (n - m)} = 4,
$$

所以 $P_{ij}=1+1+4=6.$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-2-4",
    topicId: "topic-sec-2-2",
    title: `已知函数 y = f(x) 的图像与函数 y = a^x`,
    content: `已知函数 $y = f(x)$ 的图像与函数 $y = a^x (a > 0 \\text{且} a \\neq 1)$ 的图像关于直线 $y = x$ 对称，记 $g(x) = f(x)[f(x) + f(2) - 1]$ . 若 $y = g(x)$ 在区间 $\\left[\\frac{1}{2}, 2\\right]$ 上是增函数，则实数 $a$ 的取值范围是 （）
A. $[2,+\\infty)$

B. $(0,1)\\cup(1,2)$

C. $\\left[\\frac{1}{2},1\\right)$

D. $\\left(0,\\frac{1}{2}\\right]$`,
    preview: `已知函数 y = f(x) 的图像与函数 y = a^x (a > 0 且 a ≠ 1) 的图像关于直线 y = x 对称，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-2-4-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `已知函数 $y = f(x)$ 的图像与函数 $y = a^x (a > 0$ 且 $a \\neq 1$ ) 的图像关于直线 $y = x$ 对称，则 $f(x) = \\log_a x$ ，

记 $g(x) = f(x)[f(x) + f(2) - 1] = (\\log_a x)^2 + (\\log_a 2 - 1)\\log_a x.$

(1) 当 $a > 1$ 时, $y = g(x)$ 在区间 $\\left[\\frac{1}{2}, 2\\right]$ 上是增函数, $y = \\log_a x$ 为增函数,

令 $t = \\log_a x, t \\in \\left[\\log_a \\frac{1}{2}, \\log_a 2\\right]$ , 要求对称轴 $-\\frac{\\log_a 2 - 1}{2} \\leqslant \\log_a \\frac{1}{2}$ , 矛盾;

(2) 当 $0 < a < 1$ 时, $y = g(x)$ 在区间 $\\left[\\frac{1}{2}, 2\\right]$ 上是增函数, $y = \\log_a x$ 为减函数,

令 $t = \\log_a x, t \\in \\left[\\log_a 2, \\log_a \\frac{1}{2}\\right]$ , 要求对称轴 $-\\frac{\\log_a 2 - 1}{2} \\geqslant \\log_a \\frac{1}{2}$ , 解得 $a \\leqslant \\frac{1}{2}$ ,

所以实数 a 的取值范围是 $\\left(0, \\frac{1}{2}\\right]$ ，选 D.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-2-5",
    topicId: "topic-sec-2-2",
    title: `数列 a_n 的前 n 项和 S_n=10n-n^2(n∈Z^+)，又 b_n=|a_n|，求 b_n 的前 n 项`,
    content: `数列 $\\{a_{n}\\}$ 的前 n 项和 $S_{n}=10n-n^{2}(n\\in\\mathbf{Z}^{+})$ ，又 $b_{n}=|a_{n}|$ ，求 $\\{b_{n}\\}$ 的前 n 项和 $T_{n}$ .`,
    preview: `数列 的前 n 项和 S_n=10n-n^2(n^+) ，又 b_n=|a_n| ，求 的前 n 项和 T_n .`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-2-5-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `当 n=1 时, $a_{1}=S_{1}=9$ ;

当 $n \\geqslant 2$ 时， $a_{n} = S_{n} - S_{n-1} = 10n - n^{2} - 10(n-1) + (n-1)^{2} = 11 - 2n.$

所以 $a_{n}=11-2n, n\\in Z^{+}$ .

当 $n \\leqslant 5$ 时， $T_{n} = 10n - n^{2}$ ，当 n > 5 时， $T_{n} = n^{2} - 10n + 50$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-2-6",
    topicId: "topic-sec-2-2",
    title: `已知 a_n 是首项为2，公比为 1/2 的等比数列， S_n 为它的前 n 项和`,
    content: `已知 $\\{a_{n}\\}$ 是首项为2，公比为 $\\frac{1}{2}$ 的等比数列， $S_{n}$ 为它的前 $n$ 项和.
(1) 用 $S_{n}$ 表示 $S_{n+1}$ ;

(2)是否存在正整数 c 和 k，使得 $\\frac{S_{k+1}-c}{S_{k}-c}>2$ 成立？`,
    preview: `已知 是首项为2，公比为 1/2 的等比数列， S_n 为它的前 n 项和. (1) 用 S_n 表示 S_n+1 ; (2)是否存在正整数 c 和 k，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-2-6-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 由 $S_{n} = 4\\left(1 - \\frac{1}{2^{n}}\\right)$ , 得 $S_{n+1} = 4\\left(1 - \\frac{1}{2^{n+1}}\\right) = \\frac{1}{2} S_{n} + 2 (n \\in \\mathbf{Z}^{+})$ .

(2)要使 $\\frac{S_{k+1}-c}{S_{k}-c}>2$ ，只要 $\\frac{c-\\left(\\frac{3}{2}S_{k}-2\\right)}{c-S_{k}}<0.$

因为 $S_{k} = 4\\left(1 - \\frac{1}{2^{k}}\\right) < 4$ ，所以 $S_{k} - \\left(\\frac{3}{2} S_{k} - 2\\right) = 2 - \\frac{1}{2} S_{k} > 0 (k \\in \\mathbf{Z}^{+})$

故只要 $\\frac{3}{2} S_k - 2 < c < S_k (k \\in \\mathbf{Z}^+)$ . ①

因为 $S_{k + 1} > S_k (k \\in \\mathbf{Z}^+)$ , 所以 $\\frac{3}{2} S_k - 2 \\geqslant \\frac{3}{2} S_1 - 2 = 1$ .

又 $S_{k}<4$ ，故要使①成立，c 只能取 2 或 3.

当 c=2 时，因为 $S_{1}=2$ ，所以当 k=1 时， $c<S_{k}$ 不成立，从而①不成立.

当 $k \\geqslant 2$ 时，因为 $\\frac{3}{2} S_2 - 2 = \\frac{5}{2} > c$ ，由 $S_k < S_{k+1} (k \\in \\mathbf{Z}^+)$ 得 $\\frac{3}{2} S_k - 2 < \\frac{3}{2} S_{k+1} - 2,$

故当 $k \\geqslant 2$ 时， $\\frac{3}{2} S_{k} - 2 > c$ ，从而①不成立.

当 c=3 时，因为 $S_{1}=2, S_{2}=3$ ，所以当 k=1, k=2 时， $c<S_{k}$ 不成立，从而①不成立.

因为 $\\frac{3}{2} S_3 - 2 = \\frac{13}{4} > c$ ，又 $\\frac{3}{2} S_k - 2 < \\frac{3}{2} S_{k+1} - 2$

所以当 $k \\geqslant 3$ 时， $\\frac{3}{2} S_{k} - 2 > c$ ，从而①成立.

综上所述，不存在正整数 $c, k$ ，使 $\\frac{S_{k+1} - c}{S_k - c} > 2$ 成立.

评注 本题属于探索性题型,是高考试题的热点题型.在探讨第2问的解法时,采取优化结论的策略,并灵活运用分类讨论的思想,即对双参数k,c轮流分类讨论,从而获得答案.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-2-7",
    topicId: "topic-sec-2-2",
    title: `已知函数 f(x)=1+x/1-xe^-ax`,
    content: `已知函数 $f(x)=\\frac{1+x}{1-x}\\mathrm{e}^{-ax}$ .
(1) 设 a > 0，讨论 $y = f(x)$ 的单调性；
(2)若对任意 $x \\in (0,1)$ 恒有 $f(x) > 1$ ，求 a 的取值范围.`,
    preview: `已知函数 f(x)=1+x/1-xe^-ax . (1) 设 a > 0，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-2-7-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) $f(x)$ 的定义域为 $(-∞,1)∪(1,+∞)$ .

对 $f(x)$ 求导数得 $f^{\\prime}(x) = \\frac{ax^{2} + 2 - a}{(1 - x)^{2}}\\mathrm{e}^{-ax}$

①当 a=2 时， $f'(x)=\\frac{2x^{2}}{(1-x)^{2}}\\mathrm{e}^{-2x}$

$f'(x)$ 在 $(-∞,0)$ ， $(0,1)$ 和 $(1,+∞)$ 均大于0，

所以 $f(x)$ 在 $(-∞,1),(1,+∞)$ 上为增函数；

②当 0 < a < 2 时， $f'(x) > 0$ ， $f(x)$ 在 $(-∞, 1)$ ， $(1, +∞)$ 上为增函数；
③ 当 $a > 2$ 时， $0 < \\frac{a - 2}{a} < 1$ . 令 $f'(x) = 0$ ，解得 $x_1 = -\\sqrt{\\frac{a - 2}{a}}$ ， $x_2 = \\sqrt{\\frac{a - 2}{a}}$ .

当 x 变化时， $f'(x)$ 和 $f(x)$ 的变化情况如下表：

<table><tr><td>x</td><td> $\\left(-\\infty,-\\sqrt{\\frac{a-2}{a}}\\right)$ </td><td> $\\left(-\\sqrt{\\frac{a-2}{a}},\\sqrt{\\frac{a-2}{a}}\\right)$ </td><td> $\\left(\\sqrt{\\frac{a-2}{a}},1\\right)$ </td><td> $(1,+\\infty)$ </td></tr><tr><td> $f'(x)$ </td><td>+</td><td>-</td><td>+</td><td>+</td></tr><tr><td> $f(x)$ </td><td>↗</td><td>↘</td><td>↗</td><td>↗</td></tr></table>

$f(x)$ 在 $\\left(-\\infty, -\\sqrt{\\frac{a - 2}{a}}\\right), \\left(\\sqrt{\\frac{a - 2}{a}}, 1\\right), (1, +\\infty)$ 上为增函数，

$f(x)$ 在 $\\left(-\\sqrt{\\frac{a - 2}{a}},\\sqrt{\\frac{a - 2}{a}}\\right)$ 上为减函数.

(2)① 当 $0 < a \\leqslant 2$ 时，由(1)知：对任意 $x \\in (0,1)$ 恒有 $f(x) > f(0) = 1$ .
② 当 a > 2 时，取 $x_{0} = \\frac{1}{2}\\sqrt{\\frac{a - 2}{a}} \\in (0, 1)$ ，则由(1)知 $f(x_{0}) < f(0) = 1$ .
③ 当 $a \\leqslant 0$ 时，对任意 $x \\in (0,1)$ ，恒有 $\\frac{1 + x}{1 - x} > 1$ 且 $\\mathrm{e}^{-ax} \\geqslant 1$ ，得

$$
f (x) = \\frac {1 + x}{1 - x} \\mathrm{e} ^ {- a x} \\geqslant \\frac {1 + x}{1 - x} > 1.
$$

综上，当且仅当 $a \\in (-\\infty, 2]$ 时，对任意 $x \\in (0,1)$ 恒有 $f(x) > 1$ .

评注 含参数的不等式的求解,含参数的二次函数在某区间的最值问题(要考虑开口方向和二次项系数为0这一特殊情形,有时还要讨论对称轴的位置)等,这类由参数值的变化引起的分类讨论问题,一直是高考的热点.导数内容进入高考以来,每年都有多个高考题需要就参数的变化讨论函数的单调性.另外, $y=f(x)$ 的单调性的讨论可归结为解不等式 $ax^{2}>a-2$ ,若去掉 $a>0$ 这一条件,则首先要考虑不等式两边同乘以(除以)正数与负数对不等号方向的影响,按 $a>0,a=0,a<0$ 三类考虑.当 $a>0$ 时,解不等式 $x^{2}>\\frac{a-2}{a}$ ,又要考虑 $\\frac{a-2}{a}\\leqslant0,\\frac{a-2}{a}>0$ 两类.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-2-8",
    topicId: "topic-sec-2-2",
    title: `已知点 M(-2,0), N(2,0)`,
    content: `已知点 $M(-2,0), N(2,0)$ ，动点 $P$ 满足条件 $|PM| - |PN| = 2\\sqrt{2}$ ，记动点 $P$ 的轨迹为 $W$ .
(1) 求 W 的方程；

(2) 若 A、B 是 W 上的不同两点，O 是坐标原点，求 $\\overrightarrow{OA} \\cdot \\overrightarrow{OB}$ 的最小值.`,
    preview: `已知点 M(-2,0), N(2,0) ，动点 P 满足条件 |PM| - |PN| = 2√2 ，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-2-8-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)由 $|PM|-|PN|=2\\sqrt{2}$ 知,动点P的轨迹是以M、N为焦点的双曲线的右支,实半轴长 $a=\\sqrt{2}$ .又半焦距c=2,故虚半轴长 $b=\\sqrt{2}$ ,

所以 W 的方程为 $x^{2}-y^{2}=2(x\\geqslant\\sqrt{2})$ .

(2) 设 A、B 坐标分别为 $(x_{1}, y_{1})$ 、 $(x_{2}, y_{2})$ 。通常需要对 AB 与 x 轴垂直、AB 与 x 轴不垂直进行分类讨论。根据本题特点，我们可从整体上把握曲线方程，进而进行适当放缩，避免分类。

由已知可得 $x_{1}^{2}-y_{1}^{2}=2, x_{2}^{2}-y_{2}^{2}=2$ ，两式相乘，得 $(x_{1}^{2}-y_{1}^{2})(x_{2}^{2}-y_{2}^{2})=4$ ，

展开并配方，得 $(x_{1}x_{2}+y_{1}y_{2})^{2}=(x_{1}y_{2}+x_{2}y_{1})^{2}+4$ ，

于是 $\\overrightarrow{OA}\\cdot\\overrightarrow{OB}=x_{1}x_{2}+y_{1}y_{2}=\\sqrt{(x_{1}y_{2}+x_{2}y_{1})^{2}+4}\\geqslant2.$

当且仅当 $x_{1}y_{2}+x_{2}y_{1}=0$ 即 $k_{OA}+k_{OB}=0$ 时，

也即 $AB \\perp x$ 轴时， $\\overrightarrow{OA} \\cdot \\overrightarrow{OB}$ 的最小值为 2.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-2-9",
    topicId: "topic-sec-2-2",
    title: `已知 a, b 是实数`,
    content: `已知 $a, b$ 是实数，函数 $f(x) = x^3 + ax, g(x) = x^2 + bx, f'(x)$ 和 $g'(x)$ 是 $f(x), g(x)$ 的导函数，若 $f'(x)g'(x) \\geqslant 0$ 在区间 $I$ 上恒成立，则称 $f(x)$ 和 $g(x)$ 在区间 $I$ 上单调性一致.
(1) 设 a > 0，若函数 $f(x)$ 和 $g(x)$ 在 $[-1, +\\infty)$ 上单调性一致，求实数 b 的取值范围；
(2) 设 $a < 0$ 且 $a \\neq b$ , 若函数 $f(x)$ 和 $g(x)$ 在以 $a, b$ 为端点的开区间上单调性一致, 求 $|a - b|$ 的最大值.`,
    preview: `已知 a, b 是实数，函数 和 g'(x) 是 f(x), g(x) 的导函数，若 f'(x)g'(x) ≥ 0 在区间 I 上恒成立，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-2-9-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)因函数 $f(x)$ 和 $g(x)$ 在区间 $[-1, +\\infty)$ 上单调性一致，

所以， $f'(x)g'(x)\\geqslant0$ 在区间 $[-1,+\\infty)$ 上恒成立，

即 $(3x^{2}+a)(2x+b)\\geqslant0$ 在区间 $[-1,+\\infty)$ 上恒成立，

因 a>0，所以 $b \\geqslant -2x$ 在区间 $[-1, +\\infty)$ 上恒成立，所以 $b \\geqslant 2$ .

(2)因函数 $f(x)$ 和 $g(x)$ 在以 a, b 为端点的开区间上单调性一致，

所以 $f'(x)$ $g'(x) \\geqslant 0$ 在区间 I 上恒成立，这里 $I = (a, b)$ 或 $I = (b, a)$ .

令 $h(x)=f'(x)g'(x)=6x^{3}+3bx^{2}+2ax+ab$ ，则 $h'(x)=18x^{2}+6bx+2a$ .

因 a<0，所以 $h'(x)=0$ 有两个符号相异的实根 $x_{1}, x_{2}$ ，

不妨设 $x_{1}<0, x_{2}>0.$

若 b>0，由 a<0 知此时 $I=(a,b)$ ，

因 $h(0) = ab < 0$ ，而 $0 \\in (a, b)$ ，这与 $h(x) \\geqslant 0$ 在 $(a, b)$ 上恒成立相矛盾，故 $b \\leqslant 0$ .

所以开区间 I 应在 $x_{2}$ 左侧，在 I 内 $h(x)$ 的单调性要么递增，要么递减，要么先增后减.

从整体上看,不管哪种情形,只需 $h(a)\\geqslant0$ 且 $h(b)\\geqslant0$ 即可.

由 $h(a) \\geqslant 0$ 且 $h(b) \\geqslant 0$ ，并结合 $a < 0, b \\leqslant 0$ ，

解得 $-\\frac{1}{3} \\leqslant a < 0, -\\frac{1}{3} \\leqslant b \\leqslant 0$ ，所以 $|a - b| \\leqslant \\frac{1}{3}$ ，故 $|a - b|$ 的最大值为 $\\frac{1}{3}$ .

评注 本题由于区间端点不确定,通常需要分三类进行讨论,由于涉及的字母较多,计算量较大.这里提供的解法,是从整体上把握问题,有效地避免了繁杂的分类.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-2-10",
    topicId: "topic-sec-2-2",
    title: `已知函数 f(x)=3ax^4-2(3a+1)x^2+4x`,
    content: `已知函数 $f(x)=3ax^{4}-2(3a+1)x^{2}+4x$ .
(1) 当 $a=\\frac{1}{6}$ 时, 求 $f(x)$ 的极值;

(2) 若 $f(x)$ 在 $(-1,1)$ 上是增函数, 求 a 的取值范围.`,
    preview: `已知函数 f(x)=3ax^4-2(3a+1)x^2+4x . (1) 当 a=1/6 时, 求 f(x) 的极值; (2) 若 f(x) 在 (-1,1) 上`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-2-10-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 当 $a=\\frac{1}{6}$ 时, $f'(x)=2x^{3}-6x+4=2(x-1)^{2}(x+2)$ ,

所以 $f(x)$ 在 $(-\\infty, -2)$ 上递减，在 $(-2, +\\infty)$ 上递增.

故当 x=-2 时， $f(x)_{\\text{极小值}}=-12$ ，函数 $f(x)$ 无极大值.

(2)因 $f'(x)=12ax^{3}-4(3a+1)x+4=4(x-1)(3ax^{2}+3ax-1)$ ,

要使 $f(x)$ 在 $(-1,1)$ 上是增函数，只需 $f'(x) \\geqslant 0$ 在 $(-1,1)$ 上恒成立，也即 $3ax^2 + 3ax - 1 \\leqslant 0$ 在 $(-1,1)$ 上恒成立。接下来，如果用二次函数来处理，需对 $a$ 进行分类讨论，如果分离参数，就需要对 $x$ 进行分类讨论。如果能从整体上的最值来把握，则可避免分类。

令 $h(x) = 3ax^{2} + 3ax - 1$ ，则 $h^{\\prime}(x) = 3a(2x + 1), x = -\\frac{1}{2}$ 为可能极值点，

所以 $h(x)$ 在 $[-1, 1]$ 上的最大值为 $h(-1), h(1), h\\left(-\\frac{1}{2}\\right)$ 中的较大者.

由 $h(-1) \\leqslant 0, h(1) \\leqslant 0, h\\left(-\\frac{1}{2}\\right) \\leqslant 0$ ，解得 $-\\frac{4}{3} \\leqslant a \\leqslant \\frac{1}{6}$ .

故当 $f(x)$ 在 $(-1,1)$ 上是增函数时， $a$ 的取值范围是 $-\\frac{4}{3} \\leqslant a \\leqslant \\frac{1}{6}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-2-11",
    topicId: "topic-sec-2-2",
    title: `设 a ∈ R, 函数 f(x) = ax^2 + x - a (-1 ≤ x ≤ 1), 求当 |a| ≤ 1 时`,
    content: `设 $a \\in \\mathbb{R}$ , 函数 $f(x) = ax^2 + x - a (-1 \\leqslant x \\leqslant 1)$ , 求当 $|a| \\leqslant 1$ 时, $|f(x)|$ 的取值范围.`,
    preview: `设 a R , 函数 , 求当 |a| ≤ 1 时, |f(x)| 的取值范围.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-2-11-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `绝对值问题常需分类,如能利用绝对值的性质,整体把握,就能避免分类.

因为 $|x|\\leqslant 1,|a|\\leqslant 1$ ，所以

$$
\\begin{array}{l} \\(| f (x) | = | a x ^ {2} + x - a | = | a (x ^ {2} - 1) + x | \\leqslant | a (x ^ {2} - 1) | + | x | = | a | \\cdot | x ^ {2} - 1 | + | x |\\) \\\\ \\leqslant | x ^ {2} - 1 | + | x | = - x ^ {2} + 1 + | x | = - \\left(| x | - \\frac {1}{2}\\right) ^ {2} + \\frac {5}{4} \\leqslant \\frac {5}{4}. \\\\ \\end{array}
$$

当且仅当 $a(x^{2} - 1)\\cdot x\\geqslant 0,|x| = \\frac{1}{2}$ 及 $|a| = 1$ 时， $|f(x)| = \\frac{5}{4}$

故 $|f(x)|$ 的取值范围为 $\\left[0, \\frac{5}{4}\\right]$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-2-12",
    topicId: "topic-sec-2-2",
    title: `已知椭圆 C: x^2/a^2 + y^2/b^2 = 1 (a > b > 0) 的离心率`,
    content: `已知椭圆 $C: \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1 (a > b > 0)$ 的离心率为 $\\frac{\\sqrt{3}}{3}$ , 过右焦点 $F$ 的直线 $l$ 与 $C$ 相交于 $A, B$ 两点. 当 $l$ 的斜率为 1 时, 坐标原点 $O$ 到 $l$ 的距离为 $\\frac{\\sqrt{2}}{2}$ .
(1) 求 a、b 的值；

(2) C 上是否存在点 P，使得当 l 绕 F 转到某一位置时，有 $\\overrightarrow{OP} = \\overrightarrow{OA} + \\overrightarrow{OB}$ 成立？若存在，求出所有的 P 的坐标与 l 的方程；若不存在，说明理由.`,
    preview: `已知椭圆 的离心率为 √33 , 过右焦点 F 的直线 l 与 C 相交于 A, B 两点. 当 l 的斜率为 1 时, 坐标原点 O 到 l 的距离为 √22`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-2-12-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)因为椭圆的离心率为 $\\frac{\\sqrt{3}}{3}$ ，故可设 $c=m$ 、 $a=\\sqrt{3}m(m>0)$ 。此时直线l的方程为y=x-m，由点到直线的距离公式，得m=1。故 $a=\\sqrt{3}$ ， $b=\\sqrt{2}$ 。

(2) 设 A、B 坐标分别为 $(x_{1}, y_{1}), (x_{2}, y_{2})$ . 注意到直线过 x 轴上的定点 $F(1,0)$ ，故设直线 l 的方程为 $x = my + 1$ ，代入椭圆方程中并化简，得 $(2m^{2} + 3)y^{2} + 4my - 4 = 0$ ，因 $\\Delta > 0$ 恒成立，所以 $y_{1} + y_{2} = -\\frac{4m}{2m^{2} + 3}, y_{1}y_{2} = -\\frac{4}{2m^{2} + 3}$ .

假设符合条件的 P 点存在，则 $P(x_{1}+x_{2},y_{1}+y_{2})$ 在椭圆 $2x^{2}+3y^{2}=6$ 上，代入整理得

$$
(2 x _ {1} ^ {2} + 3 y _ {1} ^ {2}) + (2 x _ {2} ^ {2} + 3 y _ {2} ^ {2}) + 4 x _ {1} x _ {2} + 6 y _ {1} y _ {2} = 6.
$$

因 $A(x_{1},y_{1})$ 、 $B(x_{2},y_{2})$ 也在椭圆上，故 $2x_{1}x_{2}+3y_{1}y_{2}+3=0$ ，

即 $2(my_{1}+1)(my_{2}+1)+3y_{1}y_{2}+3=0,$

整理得 $(2m^{2}+3)y_{1}y_{2}+2m(y_{1}+y_{2})+5=0.$

将 $y_{1}y_{2}, y_{1} + y_{2}$ 的值代入，解得 $m = \\pm \\frac{\\sqrt{2}}{2}$ .

当 $m = \\frac{\\sqrt{2}}{2}$ 时， $y_{1} + y_{2} = -\\frac{\\sqrt{2}}{2}, x_{1} + x_{2} = m(y_{1} + y_{2}) + 2 = \\frac{3}{2}$ ，

得 $P\\left(\\frac{3}{2}, - \\frac{\\sqrt{2}}{2}\\right)$ ，直线 $l$ 的方程为 $\\sqrt{2} x - y - \\sqrt{2} = 0.$

当 $m=-\\frac{\\sqrt{2}}{2}$ 时，得 $P\\left(\\frac{3}{2},\\frac{\\sqrt{2}}{2}\\right)$ ，直线 l 的方程为 $\\sqrt{2}x+y-\\sqrt{2}=0$ .

评注 当直线过一定点时,设直线方程时很容易利用点斜式或斜截式进行,而忽略斜率不存在的情况或是运算较繁,需要分类讨论.如果我们知道直线的斜率不可能为零,可将直线方程设为 $x = my + n$ , 这样, 不仅避免或简化了讨论的步骤, 且可以大大减少计算量, 提高解题速度.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-2-13",
    topicId: "topic-sec-2-2",
    title: `已知一条曲线 C 在 y 轴右边`,
    content: `已知一条曲线 $C$ 在 $y$ 轴右边， $C$ 上每一点到点 $F(1,0)$ 的距离减去它到 $y$ 轴距离的差都是1.
(1)求曲线 C 的方程;

(2) 是否存在正数 $m$ , 对于过点 $M(m,0)$ 且与曲线 $C$ 有两个交点 $A、B$ 的任一直线, 都有 $\\overrightarrow{FA} \\cdot \\overrightarrow{FB}<0$ ? 若存在, 求出 $m$ 的取值范围; 若不存在, 请说明理由.`,
    preview: `已知一条曲线 C 在 y 轴右边， C 上每一点到点 F(1,0) 的距离减去它到 y 轴距离的差都是1. (1)求曲线 C 的方程; (2) 是否存在正数 m`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-2-13-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)由抛物线的定义,可得曲线 C 的方程为 $y^{2}=4x$ .

(2) 显然, 过点 M 的直线存在着垂直 x 轴的情况但又不含垂直 y 轴的情况, 因此为避免分类, 可设直线方程为 $x = ty + m$ , 并设 A、B 两点的坐标分别为 $(x_{1}, y_{1})$ 、 $(x_{2}, y_{2})$ .

将直线方程与抛物线方程联立, 得 $y^{2}-4ty-4m=0$ ,

因 $\\Delta>0$ 恒成立，故 $y_{1}+y_{2}=4t, y_{1}y_{2}=-4m.$

所以 $x_{1}x_{2}=\\frac{y_{1}^{2}}{4}\\cdot\\frac{y_{2}^{2}}{4}=m^{2},x_{1}+x_{2}=(ty_{1}+m)+(ty_{2}+m)=4t^{2}+2m.$

由 $\\overrightarrow{FA}\\cdot\\overrightarrow{FB}<0$ ，得 $x_{1}x_{2}-(x_{1}+x_{2})+1+y_{1}y_{2}<0$ ，所以 $m^{2}-6m+1<4t^{2}$ .

因对任一直线，都有 $\\overrightarrow{FA}\\cdot\\overrightarrow{FB}<0$ ，故 $m^{2}-6m+1<4t^{2}$ 在 $t\\in R$ 上恒成立，

所以 $m^{2}-6m+1<0$ ，即 $3-2\\sqrt{2}<m<3+2\\sqrt{2}$

可见,存在正数 m,对于过点 $M(m,0)$ 且与曲线 C 有两个交点 A、B 的任一直线,

都有 $\\overrightarrow{FA}\\cdot\\overrightarrow{FB}<0.m$ 的取值范围为 $3-2\\sqrt{2}<m<3+2\\sqrt{2}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-2-14",
    topicId: "topic-sec-2-2",
    title: `已知点 A(x_0,2) 在曲线 C: y^2=4x 上`,
    content: `已知点 $A(x_{0},2)$ 在曲线 C: $y^{2}=4x$ 上，过点 A 作 C 的两条弦 AD、AE，且 AD、AE 的斜率分别为 $k_{1}$ 、 $k_{2}$ ，且 $k_{1}k_{2}=2$ ，试判断直线 DE 是否过定点，并证明你的结论.`,
    preview: `已知点 A(x_0,2) 在曲线 C: y^2=4x 上，过点 A 作 C 的两条弦 AD、AE，且 AD、AE 的斜率分别为 k_1 、 k_2 ，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-2-14-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `因动直线 DE 的斜率不可能为 0, 故设直线 DE 的方程为 $x=my+n$ .

又 $D\\left(\\frac{y_1^2}{4}, y_1\\right), E\\left(\\frac{y_2^2}{4}, y_2\\right)$ ，易知 $A(1, 2)$ ，则 $k_1 = \\frac{y_1 - 2}{\\frac{y_1^2}{4} - 1} = \\frac{4}{y_1 + 2}$ ，

同理可得 $k_{2} = \\frac{4}{y_{2} + 2}$ ，代入 $k_{1}k_{2} = 2$ 中，得 $y_{1}y_{2} + 2(y_{1} + y_{2}) - 4 = 0$ .

联立 $x = my + n$ 与 $y^{2} = 4x$ 得 $y^{2} - 4my - 4n = 0$ ，当 $\\Delta > 0$ 时，有

$y_{1}+y_{2}=4m,y_{1}y_{2}=-4n$ ,代入 $y_{1}y_{2}+2(y_{1}+y_{2})-4=0$ ,得n=2m-1,

因此直线 DE 的方程为 $x+1=m(y+2)$ ,

所以直线 DE 过定点 $(-1, -2)$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-2-15",
    topicId: "topic-sec-2-2",
    title: `设函数 f(x)=a/3x^3-3/2x^2+(a+1)x+`,
    content: `设函数 $f(x)=\\frac{a}{3}x^{3}-\\frac{3}{2}x^{2}+(a+1)x+1$ ，其中 a 为实数.
(1)已知函数 $f(x)$ 在 x=1 处取得极值, 求 a 的值;

(2)已知不等式 $f^{\\prime}(x) > x^{2} - x - a + 1$ 对任意的 $a\\in (0, + \\infty)$ 都成立，求实数 $x$ 的取值范围.`,
    preview: `设函数 f(x)=a/3x^3-3/2x^2+(a+1)x+1 ，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-2-15-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)因 $f'(x)=ax^{2}-3x+a+1$ ,

由 $f'(1)=0$ 及 $\\Delta=3-4a(a+1)>0$ 得 a=1.

(2)因 $f'(x) > x^{2} - x - a + 1$ 对任意的 $a \\in (0, +\\infty)$ 都成立，

习惯上,我们往往把它整理成关于 x 的二次不等式:

$(a-1)x^{2}-2x+2a>0$ 对任意的 $a\\in(0,+\\infty)$ 都成立，

这样,就需要对二次项系数进行分类讨论.

如以 a 为主元,问题就非常简单了.

令 $g(a)=(x^{2}+2)a-x^{2}-2x(a>0)$ ，显然， $g(a)$ 为增函数，于是，

对任意的 $a \\in (0, +\\infty)$ , $g(a) \\geqslant 0$ 的充要条件是 $g(0) = -x^{2} - 2x \\geqslant 0$ ,

解得 $-2\\leqslant x\\leqslant0.$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-2-16",
    topicId: "topic-sec-2-2",
    title: `如图 2-2-1 所示, P 是抛物线 C: y =`,
    content: `如图 2-2-1 所示, P 是抛物线 C: y = $\\frac{1}{2}x^{2}$ 上一点, 直线 l 过点 P 且与抛物线 C 交于另一点 Q.
![](images/cd479af10e407f3e3e3c9de024324e14612eb020223f4d079e96519bb3cf13fe.jpg)

图2-2-1

(1) 若直线 l 与过点 P 的切线垂直, 求线段 PQ 的中点 M 的轨迹方程;
(2) 若直线 $l$ 不过原点且与 $x$ 轴交于点 $S$ , 与 $y$ 轴交于点 $T$ , 试求 $\\frac{|ST|}{|SP|} + \\frac{|ST|}{|SQ|}$ 的取值范围.`,
    preview: `如图 2-2-1 所示, P 是抛物线 C: y = 1/2x^2 上一点, 直线 l 过点 P 且与抛物线 C 交于另一点 Q. 图2-2-1 (1) 若直线`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-2-16-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `(1)见本书“4.4 解析几何综合问题”.

(2)有关线段或线段比的问题,通常要把它转化为坐标问题.如图2-2-1所示,过P、Q分别作x轴的垂线PB、QA,垂足分别为B、A,则由平面几何知识得

![](images/cd479af10e407f3e3e3c9de024324e14612eb020223f4d079e96519bb3cf13fe.jpg)

$$
\\frac {| S T |}{| S P |} + \\frac {| S T |}{| S Q |} = \\frac {| O T |}{| P B |} + \\frac {| O T |}{| Q A |} = | y _ {T} | \\cdot \\frac {y _ {P} + y _ {Q}}{y _ {P} \\cdot y _ {Q}},
$$

这自然使人想到韦达定理.

故设直线 l 为 $y=kx+b(k\\neq0,b\\neq0)$ ,

与 $y=\\frac{1}{2}x^{2}$ 联立得 $y^{2}-2(k^{2}+b)y+b^{2}=0$ ,

由韦达定理得 $y_{P}+y_{Q}=2(k^{2}+b),y_{P}\\cdot y_{Q}=b^{2}$

而 $y_{T}=b$ ，故由均值不等式得

$$
\\frac {| S T |}{| S P |} + \\frac {| S T |}{| S Q |} = | b | \\cdot \\frac {y _ {P} + y _ {Q}}{y _ {P} \\cdot y _ {Q}} \\geqslant 2 | b | \\frac {\\sqrt {y _ {P} y _ {Q}}}{y _ {P} y _ {Q}} = 2,
$$

因 $y_{P}$ 、 $y_{Q}$ 是不相等的正数，故

$$
\\frac {| S T |}{| S P |} + \\frac {| S T |}{| S Q |} > 2.
$$

评注 本题求 $\\frac{|ST|}{|SP|}+\\frac{|ST|}{|SQ|}$ 的取值范围,通常方法是以b为主元,然后对b进行分类讨论,解题过程较为烦琐,这里正确选用了基本不等式,视b为一个常量,无须讨论,很简明地得出了问题的结论.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-2-17",
    topicId: "topic-sec-2-2",
    title: `设集合 A = (x, y) mid m/2 ≤ (x - 2)^2 + y^2 ≤ m^2, x, y ∈ R`,
    content: `设集合 $A = \\{(x, y) \\mid \\frac{m}{2} \\leqslant (x - 2)^2 + y^2 \\leqslant m^2, x, y \\in \\mathbf{R}\\}$ , $B = \\{(x, y) \\mid 2m \\leqslant x + y \\leqslant 2m + 1, x, y \\in \\mathbf{R}\\}$ . 若 $A \\cap B \\neq \\emptyset$ , 则实数 $m$ 的取值范围是 \\_\\_\\_\\_.`,
    preview: `设集合 , . 若 A B ≠ , 则实数 m 的取值范围是 \\_\\_\\_\\_.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-2-17-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `利用数形结合, 对区间端点进行分类较繁. 从反面入手可避免分类. 注意到 A 不可能为空集, 故 $\\frac{m}{2} \\leqslant m^{2}$ , 所以 $m \\leqslant 0$ 或 $m \\geqslant \\frac{1}{2}$ . 当 $A 
eq \\varnothing$ 且 $A \\cap B = \\varnothing$ 时, 只需满足圆 $(x - 2)^{2} + y^{2} = m^{2}$ 与两直线 $x + y = 2m$ 和 $x + y = 2m + 1$ 都没有公共点即可. 由 $\\left\\{\\begin{aligned}\\frac{|2-2m|}{\\sqrt{2}}&>|m|,\\ \\frac{|1-2m|}{\\sqrt{2}}&>|m|,\\end{aligned}
ight.$ 得 $m<\\frac{2-\\sqrt{2}}{2}$ 或 $m>2+\\sqrt{2}$ . 再在 $m \\leqslant 0$ 或 $m \\geqslant \\frac{1}{2}$ 范围内取补集, 得 $\\frac{1}{2} \\leqslant m \\leqslant 2 + \\sqrt{2}$ .`,
      },

    ],
    tags: [],
  },
  {
    id: "prob-sec-2-2-18",
    topicId: "topic-sec-2-2",
    title: `已知函数 f(x)=x^3-3ax^2+3x+1`,
    content: `已知函数 $f(x)=x^{3}-3ax^{2}+3x+1$ .
(1) 设 a=2，求 $f(x)$ 的单调区间；

(2) 设 $f(x)$ 在区间 (2,3) 上至少有一个极值点, 求 a 的取值范围.`,
    preview: `已知函数 f(x)=x^3-3ax^2+3x+1 . (1) 设 a=2，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-2-18-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 当 a=2 时, $f'(x)=3x^{2}-12x+3$ , $f'(x)=0$ 的根为 $x=2\\pm\\sqrt{3}$ ,

所以 $f(x)$ 的单调增区间为 $(-∞,2-\\sqrt{3})$ , $(2+\\sqrt{3},+\\infty)$ ;

$f(x)$ 的单调减区间为 $(2-\\sqrt{3},2+\\sqrt{3})$ .

(2)要使函数 $f(x)$ 在区间(2,3)上至少有一个极值点，只需函数 $f^{\\prime}(x) = 3x^{2} - 6ax + 3$ 的图像在区间(2,3)上与 $x$ 轴有交点，且在(2,3)上方程 $f^{\\prime}(x) = 0$ 无等根.

为避免分类,考虑问题的反面.

$f'(x)=3x^{2}-6ax+3$ 的图像在区间(2,3)上与x轴无交点时，

有 $f'(2)f'(3) \\geqslant 0$ 并解得 $a \\geqslant \\frac{5}{3}$ 或 $a \\leqslant \\frac{5}{4}$ ，取其补集，得 $\\frac{5}{4} < a < \\frac{5}{3}$ .

当 $\\frac{5}{4}<a<\\frac{5}{3}$ ，方程 $f'(x)=0$ 在区间(2,3)上无等根.

所以，a 的取值范围为 $\\frac{5}{4} < a < \\frac{5}{3}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-2-19",
    topicId: "topic-sec-2-2",
    title: `甲、乙两人参加普法知识竞答,共有 10`,
    content: `甲、乙两人参加普法知识竞答,共有 10 道不同的题目,其中选择题 6 道,判断题 4 道,甲、乙两人依次各抽一题.甲、乙两人至少有一人抽到选择题的概率是多少?`,
    preview: `甲、乙两人参加普法知识竞答,共有 10 道不同的题目,其中选择题 6 道,判断题 4 道,甲、乙两人依次各抽一题.甲、乙两人至少有一人抽到选择题的概率是多少?`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-2-19-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `正面求解,显然要分类.可以先从问题的反面思考,即甲、乙都没有抽到选择题的概率是 $\\frac{4}{10}\\times\\frac{3}{9}=\\frac{2}{15}$ ,再用对立事件的性质可求得甲、乙两人至少有一人抽到选择题的概率为 $1-\\frac{2}{15}=\\frac{13}{15}$ .

5. 数形结合, 简化或避免分类`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-2-20",
    topicId: "topic-sec-2-2",
    title: `设 f(x) 是定义在区间 (1, +∞) 上的函数`,
    content: `设 $f(x)$ 是定义在区间 $(1, +\\infty)$ 上的函数，其导函数为 $f'(x)$ . 如果存在实数 $a$ 和函数 $h(x)$ ，其中 $h(x)$ 对任意的 $x \\in (1, +\\infty)$ 都有 $h(x) > 0$ ，使得 $f'(x) = h(x)(x^2 - ax + 1)$ ，则称函数 $f(x)$ 具有性质 $P(a)$ .
(1) 设函数 $f(x)=\\ln x+\\frac{b+2}{x+1}(x>1)$ ，其中 b 为实数.

(i)求证:函数 $f(x)$ 具有性质 $P(b)$ ; (ii)求函数 $f(x)$ 的单调区间.

(2)已知函数 $g(x)$ 具有性质 $P(2)$ . 给定 $x_{1}, x_{2} \\in (1, +\\infty), x_{1} < x_{2}$ , 设 $m$ 为实数, $\\alpha = mx_{1} + (1 - m)x_{2}, \\beta = (1 - m)x_{1} + mx_{2}$ , 且 $\\alpha > 1, \\beta > 1$ , 若 $|g(\\alpha) - g(\\beta)| < |g(x_{1}) - g(x_{2})|$ , 求 $m$ 的取值范围.`,
    preview: `设 f(x) 是定义在区间 (1, +∞) 上的函数，其导函数为 f'(x) . 如果存在实数 a 和函数 h(x) ，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-2-20-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `(1)(i) $f'(x)=\\frac{1}{x}-\\frac{b+2}{(x+1)^2}=\\frac{1}{x(x+1)^2}(x^2-bx+1)$ .

因为 x>1 时， $h(x)=\\frac{1}{x(x+1)^{2}}>0$ 恒成立，

所以函数 $f(x)$ 具有性质 $P(b)$ ;

(ii)本小题关键是借助二次函数图像分析,以简化分类.

设 $\\varphi (x) = x^{2} - bx + 1 = \\left(x - \\frac{b}{2}\\right)^{2} + 1 - \\frac{b^{2}}{4},\\varphi (x)$ 与 $f^{\\prime}(x)$ 的符号相同.

由二次函数图像分析可知：

当 $1 - \\frac{b^2}{4} \\geqslant 0, -2 \\leqslant b \\leqslant 2$ 时， $\\varphi(x) > 0, f'(x) > 0,$

故此时 $f(x)$ 在区间 $(1, +\\infty)$ 上递增；

当 $b < -2$ 时， $\\varphi(x)$ 图像开口向上，对称轴 $x = \\frac{b}{2} < -1$ ，而 $\\varphi(0) = 1$ ，对于 $x > 1$ ，总有 $\\varphi(x) > 0, f'(x) > 0$ ，故此时 $f(x)$ 在区间 $(1, +\\infty)$ 上递增；

当 $b > 2$ 时， $\\varphi(x)$ 图像开口向上，对称轴 $x = \\frac{b}{2} > 1$ ，方程 $\\varphi(x) = 0$ 的两根为：

$$
\\frac {b + \\sqrt {b ^ {2} - 4}}{2}, \\frac {b - \\sqrt {b ^ {2} - 4}}{2}, \\text {而} \\frac {b + \\sqrt {b ^ {2} - 4}}{2} > 1, \\frac {b - \\sqrt {b ^ {2} - 4}}{2} = \\frac {2}{b + \\sqrt {b ^ {2} - 4}} \\in (0, 1).
$$

当 $x \\in \\left(1, \\frac{b + \\sqrt{b^2 - 4}}{2}\\right)$ 时， $\\varphi(x) < 0, f'(x) < 0$

故此时 $f(x)$ 在区间 $\\left(1, \\frac{b + \\sqrt{b^{2} - 4}}{2}\\right)$ 上递减.

同理得： $f(x)$ 在区间 $\\left[\\frac{b+\\sqrt{b^{2}-4}}{2},+\\infty\\right)$ 上递增.

综上所述, 当 $b \\leqslant 2$ 时, $f(x)$ 在区间 $(1, +\\infty)$ 上递增;

当 $b > 2$ 时， $f(x)$ 在 $\\left(1, \\frac{b + \\sqrt{b^2 - 4}}{2}\\right)$ 上递减；

$f(x)$ 在 $\\left[\\frac{b + \\sqrt{b^2 - 4}}{2}, +\\infty\\right)$ 上递增.

(2)本小题如能借助图形分析,不仅可避免烦琐的分类,而且答案显而易见.

由已知可知， $\\alpha + \\beta = x_1 + x_2$ ，且 $\\alpha, \\beta, x_1, x_2$ 都在定义域内， $x_1 < x_2$ 。所以 $\\frac{\\alpha + \\beta}{2} = \\frac{x_1 + x_2}{2}$ ，即中点相同，所以 $\\alpha, \\beta$ 要么在区间 $(x_1, x_2)$ 上，要么在区间 $(x_1, x_2)$ 外。因 $g(x)$ 具有性质 $P(2)$ ，即第(1)题中 $b = 2$ 的情形，所以 $g(x)$ 在 $(1, +\\infty)$ 上递增。又因为 $|g(\\alpha) - g(\\beta)| < |g(x_1) - g(x_2)|$ ，如图2-2-2所示。由图形可见 $|DF| > |CE|$ ，所以 $\\alpha, \\beta$ 只能在区间 $(x_1, x_2)$ 上。

![](images/89797938e5dbb859e97be1a60345f052cf9f125deff5dee58aef8c0c750555c4.jpg)

图2-2-2

故 $\\left\\{\\begin{aligned}x_{1}&<\\alpha<x_{2},\\\\ x_{1}&<\\beta<x_{2},\\end{aligned}\\right.$

$$
\\alpha = m x _ {1} + (1 - m) x _ {2}, \\beta = (1 - m) x _ {1} + m x _ {2},
$$

代入解得 0<m<1.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-2-21",
    topicId: "topic-sec-2-2",
    title: `已知函数 f(x) = -1/2 x^2 + x`,
    content: `已知函数 $f(x) = -\\frac{1}{2} x^2 + x$ ，问：是否存在 $m, n \\in \\mathbb{R}$ ，使 $f(x)$ 的定义域和值域分别是 $[m, n]$ 和 $[2m, 2n]$ ？若存在，求出 $m, n$ 的值；若不存在，说明理由。`,
    preview: `已知函数 f(x) = -1/2 x^2 + x ，问：是否存在 m, n R ，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-2-21-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `$f(x) = -\\frac{1}{2} x^2 + x = -\\frac{1}{2} (x - 1)^2 + \\frac{1}{2}$ .

一般分 $m < 1 < n, m < n \\leqslant 1, 1 \\leqslant m < n$ 三种情况讨论.

借助图像分析, 可知 $f(x)_{\\max} = \\frac{1}{2}$ , 所以 $2n \\leqslant \\frac{1}{2}$ , 即 $n \\leqslant \\frac{1}{4}$ . 由图像可发现,

$f(x)$ 在区间 $[m, n]$ 上是增函数，于是 $\\left\\{ \\begin{array}{l} f(m) = 2m, \\\\ f(n) = 2n, \\\\ m < n \\leqslant \\frac{1}{4}, \\end{array} \\right.$ 得 $\\left\\{ \\begin{array}{l} m = -2, \\\\ n = 0. \\end{array} \\right.$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-2-22",
    topicId: "topic-sec-2-2",
    title: `已知二次函数 f(x)=ax^2+(2a-1)x+1`,
    content: `已知二次函数 $f(x)=ax^{2}+(2a-1)x+1$ 在区间 $[- \\frac{3}{2}, 2]$ 上的最大值为 3，求实数 a 的值.`,
    preview: `已知二次函数 f(x)=ax^2+(2a-1)x+1 在区间 [- 3/2, 2] 上的最大值为 3，求实数 a 的值.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-2-22-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `按常规求解,应分 a>0 和 a<0 两种情况,再考虑对称轴与区间的相对位置关系,共分 6 种情况讨论,但若借助二次函数的图像特征,则可简化分类步骤.根据二次函数的图像特征可知, $f(x)$ 的最大值只能在 $x=-\\frac{3}{2},x=2$ 或对称轴 $x=\\frac{1-2a}{2a}$ 处取得.

若 $f(-\\frac{3}{2}) = 3$ ，则 $a = -\\frac{2}{3}$ ，这时， $f(x) = -\\frac{2}{3} x^2 - \\frac{7}{3} x + 1$ ，对称轴为 $x = -\\frac{7}{4}$ ，由图像可知， $a = -\\frac{2}{3}$ 符合题意.

若 $f(2)=3$ ，则 $a=\\frac{1}{2}$ ，经检验，符合题意。

若 $f\\left(\\frac{1 - 2a}{2a}\\right) = 3$ ，则 $a = -\\frac{1}{2}$ ，经检验，不符合题意.

综上可知, $a=-\\frac{2}{3}$ 或 $a=\\frac{1}{2}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-2-23",
    topicId: "topic-sec-2-2",
    title: `已知 a 是实数, 函数`,
    content: `已知 a 是实数, 函数 $f(x)=2ax^{2}+2x-3-a$ , 如果函数 $y=f(x)$ 在区间 $[-1,1]$ 上有零点, 求 a 的取值范围.`,
    preview: `已知 a 是实数, 函数 f(x)=2ax^2+2x-3-a , 如果函数 y=f(x) 在区间 [-1,1] 上有零点, 求 a 的取值范围.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-2-23-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `如果用分类讨论处理该题,则不仅分类情况较多,且过程烦琐.如能结合图像分析,则能避免分类.

$f(x)$ 在区间 $[-1,1]$ 上有零点，等价于：

关于 $x$ 的方程 $2ax^{2} + 2x - 3 - a = 0$ 在 $[-1,1]$ 上有解.

若 $a = 0$ ，则 $x = \\frac{3}{2}$ ，不符题意，所以 $a \\neq 0$

方程 $2ax^{2} + 2x - 3 - a = 0$ 可化为

$$
2 x ^ {2} - 1 = - \\frac {2}{a} \\Big (x - \\frac {3}{2} \\Big).
$$

在同一坐标系内，作抛物线弧 $C: y = 2x^{2} - 1 (-1 \\leqslant x \\leqslant 1)$ 和过定点 $P\\left(\\frac{3}{2}, 0\\right)$ 的直线 $l: y = -\\frac{2}{a}\\left(x - \\frac{3}{2}\\right)$ ，如图2-2-3所示，

只需 $k_{PA} \\leqslant -\\frac{2}{a} \\leqslant k_{切}$ 即可.

由 $\\left\\{\\begin{aligned}y&=2x^{2}-1,\\\\ y&=k\\left(x-\\frac{3}{2}\\right)\\end{aligned}\\right.$ 得 $2x^{2}-kx+\\frac{3}{2}k-1=0,$

由 $\\Delta=0$ 解得 $k=6\\pm2\\sqrt{7}$ ,

当 $x \\in [-1,1]$ 时，k 的值取 $6 - 2\\sqrt{7}$ ，即切线斜率为 $6 - 2\\sqrt{7}$ .

又 $k_{PA} = -2$ ，所以 $-2\\leqslant -\\frac{2}{a}\\leqslant 6 - 2\\sqrt{7}$ ，解得 $a\\leqslant -\\frac{3 + \\sqrt{7}}{2}$ 或 $a\\geqslant 1.$

![](images/ef2347b46092ea459fc1d8521ef00215deb6a14c71c763e0d435ce9261639c88.jpg)
图2-2-3

评注 本题也可从反面入手,或参变量分离,来达到避免分类的目的.

6. 洞察本质, 简化或避免分类`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-2-24",
    topicId: "topic-sec-2-2",
    title: `已知直线 l_1: ax - 3y + 2 = 0 和`,
    content: `已知直线 $l_{1}: ax - 3y + 2 = 0$ 和 $l_{2}: x + (2 - a)y + a - 1 = 0$ .
(1) 若 $l_{1} \\perp l_{2}$ ，求实数 a；

(2) 若 $l_{1} \\parallel l_{2}$ ，求实数 a.`,
    preview: `已知直线 l_1: ax - 3y + 2 = 0 和 l_2: x + (2 - a)y + a - 1 = 0 . (1) 若 l_1 l_2 ，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-2-24-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `一些同学总喜欢把直线方程化为斜截式,利用斜率来判定,却往往忽视斜率不存在的情况.

事实上，对于直线 $l_{1}: A_{1}x + B_{1}y + C_{1} = 0 (A_{1}^{2} + B_{1}^{2} \\neq 0)$ ,

直线 $l_{2}: A_{2}x + B_{2}y + C_{2} = 0 (A_{2}^{2} + B_{2}^{2} \\neq 0)$ ，有

$l_{1} \\parallel l_{2} \\Leftrightarrow A_{1}B_{2}-B_{1}A_{2}=0$ 且 $A_{1}C_{2}-C_{1}A_{2}\\neq0$ (或 $B_{1}C_{2}-C_{1}B_{2}\\neq0$ );

$$
l _ {1} \\perp l _ {2} \\Leftrightarrow A _ {1} A _ {2} + B _ {1} B _ {2} = 0;
$$

$l_{1}$ 与 $l_{2}$ 重合 $\\Leftrightarrow A_{1}B_{2} - B_{1}A_{2} = 0$ 且 $A_{1}C_{2} - C_{1}A_{2} = 0$ （或 $B_{1}C_{2} - C_{1}B_{2} = 0$ ）；

$l_{1}$ 与 $l_{2}$ 相交 $\\Leftrightarrow A_{1}B_{2}-B_{1}A_{2}\\neq0.$

如能理解这一本质,我们就能避免分类,快速求解.第(1)小题答案为 $a=\\frac{3}{2}$ ;第(2)小题的答案为a=3(一定要注意a=-1时,两直线重合而不平行).`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-2-25",
    topicId: "topic-sec-2-2",
    title: `设函数 f(x)=a^2 x-x^2+ax,a>0`,
    content: `设函数 $f(x)=a^{2}\\ln x-x^{2}+ax,a>0.$
(1) 求 $f(x)$ 的单调区间；

(2)求所有实数 a，使 $e-1 \\leqslant f(x) \\leqslant e^{2}$ 对 $x \\in [1, e]$ 恒成立.`,
    preview: `设函数 f(x)=a^2 x-x^2+ax,a>0. (1) 求 f(x) 的单调区间； (2)求所有实数 a，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-2-25-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) $f'(x)=\\frac{-(2x+a)(x-a)}{x}$ ，因 x>0, a>0.

所以 $f(x)$ 的单调增区间是 $(0, a]$ ，单调减区间是 $[a, +\\infty)$ .

(2) 显然, 要根据单调性求函数 $f(x)$ 在 $[1, \\mathrm{e}]$ 上的最值. 由 $f'(x) = 0$ , 得 $x_1 = -\\frac{a}{2} < 0$ , $x_2 = a > 0$ , 从而, $f(x)$ 在 $[1, \\mathrm{e}]$ 上的单调性与 $a$ 的取值有关, 通常分三种情况: ① $a \\leqslant 1$ ; ② $1 < a < \\mathrm{e}$ ; ③ $a \\geqslant \\mathrm{e}$ . 但如能注意到 $\\mathrm{e} - 1 \\leqslant f(x) \\leqslant \\mathrm{e}^2$ 对 $x \\in [1, \\mathrm{e}]$ 恒成立, 则 $\\mathrm{e} - 1 \\leqslant f(1) = a - 1 \\leqslant \\mathrm{e}^2$ 得 $a \\geqslant \\mathrm{e}$ , 则可回避对 $a < \\mathrm{e}$ 的讨论.

由(1)可知， $f(x)$ 在 $[1,e]$ 上递增，所以 $e-1\\leqslant f(1),f(e)\\leqslant e^{2}$ ，又 $a\\geqslant e$ ，联立解得a=e.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-2-26",
    topicId: "topic-sec-2-2",
    title: `等比数列 a_n 的前 n 项和为 S_n，若 S_3+S_6=2S_9，求公比 q`,
    content: `等比数列 $\\{a_{n}\\}$ 的前 n 项和为 $S_{n}$ ，若 $S_{3}+S_{6}=2S_{9}$ ，求公比 q.`,
    preview: `等比数列 的前 n 项和为 S_n ，若 S_3+S_6=2S_9 ，求公比 q.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-2-26-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `通常是分 $q = 1$ 和 $q \\neq 1$ 两种情况来讨论, 如能注意到 $S_{6} = S_{3} + q^{3}S_{3}, S_{9} = S_{6} + q^{6}S_{3}$ 这一本质, 则将其代入 $S_{3} + S_{6} = 2S_{9}$ 中, 化简, 得 $(2q^{6} + q^{3})S_{3} = 0$ . 因 $S_{3} = a_{1} + a_{2} + a_{3} = a_{1}(1 + q + q^{2}) = a_{1}\\left[\\left(q + \\frac{1}{2}\\right)^{2} + \\frac{3}{4}\\right] \\neq 0$ , 所以 $2q^{6} + q^{3} = 0$ , 又因 $q \\neq 0$ , 所以 $q^{3} = -\\frac{1}{2}$ , 即 $q = -\\frac{\\sqrt[3]{4}}{2}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-2-27",
    topicId: "topic-sec-2-2",
    title: `设 a_n 是由正数组成的等比数列, S_n 是其前 n 项和,求证:`,
    content: `设 $\\{a_{n}\\}$ 是由正数组成的等比数列, $S_{n}$ 是其前 n 项和,求证:
$$
\\frac {1}{2} (\\log_ {0. 5} S _ {n} + \\log_ {0. 5} S _ {n + 2}) > \\log_ {0. 5} S _ {n + 1}.
$$`,
    preview: `设 是由正数组成的等比数列, S_n 是其前 n 项和,求证:`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-2-27-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `若能洞察到 $S_{n}, S_{n+1}, S_{n+2}$ 的内在关系，则可绕开求和公式，回避分类讨论. 其内在关系是 $S_{n+1} = a_{1} + qS_{n}, S_{n+2} = a_{1} + qS_{n+1}$ ，所以 $S_{n}S_{n+2} - S_{n+1}^{2} = S_{n}(a_{1} + qS_{n+1}) - (a_{1} + qS_{n})S_{n+1} = a_{1}(S_{n} - S_{n+1}) = -a_{1}a_{n+1} < 0$ ，所以 $S_{n}S_{n+2} < S_{n+1}^{2}$ ，即结论成立.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-2-28",
    topicId: "topic-sec-2-2",
    title: `已知 f(x) 是定义在 [-1, 1] 上的偶函数`,
    content: `已知 $f(x)$ 是定义在 $[-1, 1]$ 上的偶函数，且在 $[0, 1]$ 上递增，若 $f(1 + m) < f(2m)$ ，求 $m$ 的取值范围.`,
    preview: `已知 f(x) 是定义在 [-1, 1] 上的偶函数，且在 [0, 1] 上递增，若 f(1 + m) < f(2m) ，求 m 的取值范围.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-2-28-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `本题通常分四种情况讨论求解,如果注意到偶函数的对称性,把握偶函数 $f(x)$ 满足 $f(x)=f(-x)=f(|x|)$ 这一本质,则可避免分类讨论.

已知不等式可转化为 $f(|1 + m|) < f(|2m|)$ ，因 $f(x)$ 在 $[0,1]$ 上递增，有

$$
\\left\\{ \\begin{array}{l l} {- 1 \\leqslant 1 + m \\leqslant 1,} \\\\ {- 1 \\leqslant 2 m \\leqslant 1,} & {\\text {解得} - \\frac {1}{2} \\leqslant m <   - \\frac {1}{3}.} \\\\ {| 1 + m | <   | 2 m |,} \\end{array} \\right.
$$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-2-29",
    topicId: "topic-sec-2-2",
    title: `函数 f(x)=x^2-2ax-4a 在 [-1,1]`,
    content: `函数 $f(x)=x^{2}-2ax-4a$ 在 $[-1,1]$ 上恒大于零，求实数 a 的取值范围.`,
    preview: `函数 f(x)=x^2-2ax-4a 在 [-1,1] 上恒大于零，求实数 a 的取值范围.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-2-29-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `若是直接利用二次函数知识,需要考察对称轴与区间相对的位置关系,要分类讨论.要避免分类,可将参数 a 分离出来,问题即等价于 $a < \\frac{x^{2}}{2x+4}$ 在 $[-1,1]$ 上恒成立.令 $h(x)=\\frac{x^{2}}{2x+4}(-1\\leqslant x\\leqslant1)$ ,通过求导得 $h(x)_{\\min}=h(0)=0$ ,故 a<0.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-2-30",
    topicId: "topic-sec-2-2",
    title: `已知函数 f(x)=(x+1) x-x+1`,
    content: `已知函数 $f(x)=(x+1)\\ln x-x+1$ .
(1) 若 $xf'(x) \\leqslant x^{2} + ax + 1$ ，求 a 的取值范围；

(2) 证明: $(x-1)f(x)\\geqslant0.$`,
    preview: `已知函数 f(x)=(x+1) x-x+1 . (1) 若 xf'(x) ≤ x^2 + ax + 1 ，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-2-30-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 把 $xf'(x) \\leqslant x^{2} + ax + 1$ 化简, 得 $a \\geqslant \\ln x - x$ ,

令 $g(x)=\\ln x-x(x>0)$ ,

通过求导求得 $g(x)_{\\max} = -1$ ，所以 $a \\geqslant -1$ 。

(2)常规解法是把 $(x-1)f(x)$ 进行化简,然后对x进行分类讨论,有一定的难度.

事实上，要证 $(x-1)f(x)\\geqslant0$ ，只需证x-1与 $f(x)$ 同号即可.

依题意 $f'(x)=\\ln x+\\frac{1}{x}(x>0)$ , $f''(x)=\\frac{1}{x}-\\frac{1}{x^{2}}(x>0)$ ,

可得 $f'(x)_{\\min}=f'(1)=1$ ，所以 $f'(x)>0$ ，

所以 $f(x)$ 在 $(0, +\\infty)$ 上是增函数，

又 $f(1)=0$ ，所以 x-1 与 $f(x)$ 同号，即有 $(x-1)f(x)\\geqslant0$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-2-31",
    topicId: "topic-sec-2-2",
    title: `已知函数 f(x) = ax + b/x + c (a >`,
    content: `已知函数 $f(x) = ax + \\frac{b}{x} + c (a > 0)$ 的图像在点(1, $f(1)$ )处的切线方程为 $y = x - 1$ .
(1)用 a 表示 b、c;

(2) 若 $f(x) \\geqslant \\ln x$ 在 $[1, +\\infty)$ 上恒成立，求 a 的取值范围.`,
    preview: `已知函数 f(x) = ax + b/x + c (a > 0) 的图像在点(1, f(1) )处的切线方程为 y = x - 1 . (1)用 a 表示 b、`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-2-31-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)因(1,f(1))在直线 y=x-1 上,所以 $f(1)=0$ , 又 $f'(x)=a-\\frac{b}{x^{2}}$ ,

所以由 $f(1)=0$ 及 $f'(1)=1$ 得 b=a-1, c=1-2a.

(2)其通常解法是令 $M(x) = f(x) - \\ln x$ ，对其求导，再对 $a$ 进行分类，判断 $M^{\\prime}(x)$ 的符号.为了避开分类，我们可对式子进行适当的变形，通过二次求导来达到目的.

由(1)可知 $f(x) = ax + \\frac{a - 1}{x} -2a + 1,$

所以 $f(x) \\geqslant \\ln x$ 在 $[1, +\\infty)$ 上恒成立，

可变形为 $a(x-1)^{2} \\geqslant x \\ln x - x + 1$ 在 $[1, +\\infty)$ 上恒成立.

设 $h(x)=a(x-1)^{2}(x\\geqslant1)$ , $g(x)=x\\ln x-x+1(x\\geqslant1)$ .

则 $g^{\\prime}(x) = \\ln x, g^{\\prime \\prime}(x) = \\frac{1}{x}$ .

因 $g''(x)>0$ ，所以 $g(x)$ 在 $[1,+\\infty)$ 上是凹函数，

显然 $h(x)$ 在 $[1,+\\infty)$ 上也是凹函数.

由 $h(1)=0, h'(1)=0, g(1)=0, g'(1)=0$ 知

$y=h(x)$ 与 $y=g(x)$ 在x=1处切线重合，

因此要使 $h(x) \\geqslant g(x)$ 在 $[1, +\\infty)$ 上恒成立，

只需 $h''(x) \\geqslant g''(x)$ 在 $[1, +\\infty)$ 上恒成立，

也即 $2a \\geqslant \\frac{1}{x}$ 在 $x \\in [1, +\\infty)$ 上恒成立，得 $a \\geqslant \\frac{1}{2}$ .

9. 适当换元,避免分类`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-2-32",
    topicId: "topic-sec-2-2",
    title: `已知函数 f(x)=_ax`,
    content: `已知函数 $f(x)=\\log_{a}x$ ，记 $g(x)=f(x)\\cdot[f(x)+f(2)-1]$ ，若 $y=g(x)$ 在区间 $\\left[\\frac{1}{2},2\\right]$ 上是增函数，则实数 a 的取值范围是（）
A. $[2,+\\infty)$

B. $(0,1)\\cup(1,2)$

C. $\\left[\\frac{1}{2}, 1\\right)$

D. $\\left(0,\\frac{1}{2}\\right]$`,
    preview: `已知函数 f(x)=_ax ，记 g(x)=f(x)·[f(x)+f(2)-1] ，若 y=g(x) 在区间 [1/2,2] 上是增函数，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-2-32-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `一般地,需对对数的底数 a 进行分类,作为选择题来讲,显得烦琐些.如果运用对数函数的性质,进行适当换元,就可以避免分类讨论.

$$
g (x) = \\log_ {a} x (\\log_ {a} x + \\log_ {a} 2 - 1) = \\frac {1}{\\lg^ {2} a} [ \\lg^ {2} x - (\\lg a - \\lg 2) \\lg x ].
$$

设 $t = \\lg x$ ，则 $t\\in [-\\lg 2,\\lg 2]$ ，令 $h(t) = \\frac{1}{\\lg^2a}\\big[t^2 -(\\lg a - \\lg 2)t\\big].$

因 $y = g(x)$ 在区间 $\\left[\\frac{1}{2}, 2\\right]$ 上是增函数，

所以 $h(t)$ 在 $t \\in [-\\lg 2, \\lg 2]$ 上也是增函数，

所以 $\\frac{\\lg a-\\lg2}{2}\\leqslant-\\lg2$ ，得 $0<a\\leqslant\\frac{1}{2}$ .故选D.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-3-1",
    topicId: "topic-sec-2-3",
    title: `设 A = xmid -2≤ x≤ a， B = y|y = 2x + 3，且 x∈ A， C = z|z = x^`,
    content: `设 $A = \\{x\\mid -2\\leqslant x\\leqslant a\\}$ ， $B = \\{y|y = 2x + 3$ ，且 $x\\in A\\}$ ， $C = \\{z|z = x^2$ ，且 $x\\in$ $A\\rbrace$ ，若 $C\\subseteq B$ ，求实数 $a$ 的取值范围.`,
    preview: `设 ， ，且 ， ，且 x A ，若 C B ，求实数 a 的取值范围.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-3-1-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `由 $y=2x+3$ 在 $[-2, a]$ 上是增函数，

得 $-1\\leqslant y\\leqslant2a+3$ ，即 $B=\\{y\\mid-1\\leqslant y\\leqslant2a+3\\}$ .

作出 $z=x^{2}$ 的图像,该函数定义域右端点 x=a 有三种不同情况,如图 2-3-1 所示:

![](images/f2d7b206e7d84e3a1ee4d1d6076d7ce81ffbdc5ec20c84568edc997ddd4143dd.jpg)
![](images/e6194d7e6058516cfc980028366241723f22ef0f2398f48efde7ce5a62856fe1.jpg)
![](images/9b01883b2677f99b2b94882659fc0a73c0573cf3ea90d852c86ad04c00e14629.jpg)
图2-3-1

①当 $-2\\leqslant a\\leqslant0$ 时， $a^{2}\\leqslant z\\leqslant4$ ，即 $C=\\{z\\mid a^{2}\\leqslant z\\leqslant4\\}$ ，

要使 $C \\subseteq B$ ，必须且只需 $2a + 3 \\geqslant 4$ ，得 $a \\geqslant \\frac{1}{2}$ ，与 $-2 \\leqslant a < 0$ 矛盾。

②当 $0 \\leqslant a \\leqslant 2$ 时， $0 \\leqslant z \\leqslant 4$ ，即 $C = \\{z \\mid 0 \\leqslant z \\leqslant 4\\}$ ，

要使 $C \\subseteq B$ ，由图可知：必须且只需 $\\left\\{\\begin{aligned}2a+3 &\\geqslant4,\\\\ 0 &\\leqslant a &\\leqslant2,\\end{aligned}\\right.$ 解得 $\\frac{1}{2} \\leqslant a \\leqslant 2$ .

③当a>2时， $0\\leqslant z\\leqslant a^{2}$ ，即 $C=\\{z\\mid0\\leqslant z\\leqslant a^{2}\\}$

要使 $C \\subseteq B$ ，必须且只需 $\\left\\{\\begin{aligned}a^{2} &\\leqslant 2a+3,\\\\ a &>2,\\end{aligned}\\right.$ 解得 $2 < a \\leqslant 3$ .

④当 a<-2 时， $A=\\varnothing$ ，此时 $B=C=\\varnothing$ ，则 $C\\subseteq B$ 成立.

综上所述， $a$ 的取值范围是 $(- \\infty, -2) \\cup \\left[\\frac{1}{2}, 3\\right]$ .

评注 本题借助数形结合,考查有关集合关系运算的题目,解决本题的关键是依靠一元二次函数在区间上的值域求法(结合二次函数的图像)确定集合C.利用函数的图像来处理问题,简洁明了,大大减少了出错的机会.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-3-2",
    topicId: "topic-sec-2-3",
    title: `某班有 50 名学生报名参加 A`,
    content: `某班有 50 名学生报名参加 A、B 两项比赛, 参加 A 项的有 30 人, 参加 B 项的有 33 人, 且 A、B 都不参加的同学比 A、B 都参加的同学的三分之一多一人. 问: 只参加 A 不参加 B 的同学有多少人?`,
    preview: `某班有 50 名学生报名参加 A、B 两项比赛, 参加 A 项的有 30 人, 参加 B 项的有 33 人, 且 A、B 都不参加的同学比 A、`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-3-2-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `借助韦恩图解. 设两项比赛都参加的同学组成集合 $A \\cap B$ ，并设其中有 x 个元素，则各部分人数分布如图 2-3-2 所示，由题意知：

![](images/aee84084c416aab0ca9a44e43af27a4ea6dd8888153349241d4bfb3cab5380b7.jpg)

图2-3-2

$(30-x)+x+(33-x)+\\frac{x}{3}+1=50$ , 解得 x=21, 30-x=9, 即所问人数有 9 人.

评注 利用数形结合的思想可以避开复杂的运算过程,从而提高解题速度与准确性.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-3-3",
    topicId: "topic-sec-2-3",
    title: `若集合 M = (x,y)|begincases x = 3cos θ, y = 3sin θ endcases (`,
    content: `若集合 $M = \\{(x,y)\\left|\\begin{cases} x = 3\\cos \\theta, \\\\ y = 3\\sin \\theta \\end{cases} (0 < \\theta < \\pi)\\right\\}, N = \\{(x,y) | y = x + b\\}$ ，且 $M \\cap N \\neq \\emptyset$ ，则 $b$ 的取值范围为 \\_\\_\\_\\_.`,
    preview: `若集合 ，且 M N ≠ ，则 b 的取值范围为 \\_\\_\\_\\_.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-3-3-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `若 $(x, y)$ 满足集合 $\\{(x, y) \\mid \\left\\{ \\begin{array}{l} x = 3 \\cos \\theta, \\\\ y = 3 \\sin \\theta \\end{array} (0 < \\theta < \\pi) \\right\\}$ , 则赋予几何意义后可知, 点 $(x, y)$ 在半圆 $x^{2} + y^{2} = 9 (0 < y \\leqslant 1)$ 上移动, 问题转化为: 直线 $y = x + b$ 与半圆 $x^{2} + y^{2} = 9 (0 < y \\leqslant 1)$ 有公共点.

以3为半径的圆在 $x$ 轴上方的部分，如图2-3-3所示，而 $N$ 则表示一条直线，其斜率 $k = 1$ ，纵截距为 $b$ ，由图形可知，欲使 $M\\cap N\\neq$

![](images/1907caa941957bc0fe9770e48ec744f48fd8e583fab2a48c56314c8462a8238a.jpg)

图2-3-3

$\\varnothing$ ，即直线 $y = x + b$ 与半圆有公共点，由图形可知： $b$ 的最小逼近值为-3，最大值为 $3\\sqrt{2}$ 即 $-3 < b \\leqslant 3\\sqrt{2}$ .

评注 对代数形式的解析式赋予几何意义,利用所学的几何知识来解决代数问题,这是数形结合法的一个重要方面,在解题时应注意适当使用.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-3-4",
    topicId: "topic-sec-2-3",
    title: `（2010 年高考浙江卷试题）设函数集合 P = f(x) = log_2 (x + a) + b mid a =`,
    content: `（2010 年高考浙江卷试题）设函数集合 $P = \\{ f(x) = \\log_2 (x + a) + b \\mid a = -\\frac{1}{2}, 0, \\frac{1}{2}, 1; b = -1, 0, 1 \\}$ ，平面上点的集合 $Q = \\{(x, y) \\mid x = -\\frac{1}{2}, 0, \\frac{1}{2}, 1; y = -1, 0, 1\\}$ ，则在同一平面直角坐标系中， $P$ 中函数 $f(x)$ 的图像恰好经过 $Q$ 中两个点的函数的个数为
A. 4

B. 6

C. 8

D. 10`,
    preview: `设函数集合 ，平面上点的集合 ，则在同一平面直角坐标系中， P 中函数 f(x) 的图像恰好经过 Q 中两个点的函数的个数为 A. 4 B. 6 C. 8 D.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-3-4-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `集合 $P$ 中有12个函数：

$$
\\begin{array}{l} y _ {1} = \\log_ {2} \\left(x - \\frac {1}{2}\\right) - 1, y _ {2} = \\log_ {2} \\left(x - \\frac {1}{2}\\right), \\\\ y _ {3} = \\log_ {2} \\left(x - \\frac {1}{2}\\right) + 1, y _ {4} = \\log_ {2} x - 1, \\\\ y _ {5} = \\log_ {2} x, y _ {6} = \\log_ {2} x + 1, \\\\ y _ {7} = \\log_ {2} \\left(x + \\frac {1}{2}\\right) - 1, y _ {8} = \\log_ {2} \\left(x + \\frac {1}{2}\\right), \\\\ y _ {9} = \\log_ {2} \\left(x + \\frac {1}{2}\\right) + 1, y _ {1 0} = \\log_ {2} (x + 1) - 1, \\\\ y _ {1 1} = \\log_ {2} (x + 1), y _ {1 2} = \\log_ {2} (x + 1) + 1. \\\\ \\end{array}
$$

集合 $Q$ 有12个点： $Q_{1}\\left(-\\frac{1}{2}, -1\\right), Q_{2}\\left(-\\frac{1}{2}, 0\\right), Q_{3}\\left(-\\frac{1}{2}, 1\\right); Q_{4}(0, -1), Q_{5}(0, 0), Q_{6}(0, 1); Q_{7}\\left(\\frac{1}{2}, -1\\right), Q_{8}\\left(\\frac{1}{2}, 0\\right), Q_{9}\\left(\\frac{1}{2}, 1\\right); Q_{10}(1, -1), Q_{11}(1, 0), Q_{12}(1, 1)$ .`,
      },
      {
        id: "prob-sec-2-3-4-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `（代入检验排除法）将点的坐标代入函数检验，满足条件的只有

$$
y _ {5} = \\log_ {2} x, y _ {8} = \\log_ {2} \\left(x + \\frac {1}{2}\\right), y _ {6} = \\log_ {2} x + 1, y _ {9} = \\log_ {2} \\left(x + \\frac {1}{2}\\right) + 1,
$$

$y_{10} = \\log_2(x + 1) - 1, y_{12} = \\log_2(x + 1) + 1$ 满足.`,
      },
      {
        id: "prob-sec-2-3-4-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `（平移变换判断法）如图2-3-4所示，抓住一个基本函数进行平移： $y_{5}=\\log_{2}x$ 经过 $(1,0)$ ， $\\left(\\frac{1}{2},-1\\right)$ ，向左平移 $\\frac{1}{2}$ ，得 $y_{8}=\\log_{2}\\left(x+\\frac{1}{2}\\right)$ 过 $(0,-1)$ ， $\\left(\\frac{1}{2},0\\right)$ ；向上平移1，得 $y_{6}=\\log_{2}x+1$ 也过这两点；

$y_{8}=\\log_{2}\\left(x+\\frac{1}{2}\\right)$ 向上平移1，

得 $y_{9}=\\log_{2}\\left(x+\\frac{1}{2}\\right)+1$ 过 $(0,0)$ , $\\left(\\frac{1}{2},1\\right)$ ;

$y_{5}=\\log_{2}x$ 向左平移 1, 再向上平移 1,

得 $y_{12}=\\log_{2}(x+1)+1$ 过点 $\\left(-\\frac{1}{2},0\\right),(0,1)$ ;

![](images/dbd89449e5027418f66147b0360194296afa2a82dac1c8e13aa1d028c568d0c6.jpg)

图2-3-4

$y_{5}=\\log_{2}x$ 向左平移 1, 再向下平移 1, 得 $y_{10}=\\log_{2}(x+1)-1$ 过点 $(0,-1),(1,0)$ .

这一解法是命题者设计的基本想法,而平移变换不仅仅对于三角函数,一般的函数也是非常重要的,思维借助于图像,数与形相结合,可以较快地达到目标.`,
      },
      {
        id: "prob-sec-2-3-4-sol-3",
        title: `解法三`,
        method: "standard",
        steps: [],
        explanation: `（定义域排除法）定义域为 $\\left(\\frac{1}{2},+\\infty\\right)$ 的 $y_{1},y_{2},y_{3}$ ，不可能过 $Q_{10},Q_{11},Q_{12}$ 中的任两个；

定义域为 $(0,+\\infty)$ 的 $y_{4},y_{5},y_{6}$ ，有2个函数 $y_{5},y_{6}$ 过 $Q_{7},Q_{11}$ 或 $Q_{8},Q_{12}$ ;

定义域为 $\\left(-\\frac{1}{2},+\\infty\\right)$ 的 $y_{7},y_{8},y_{9}$ ，有2个函数 $y_{8},y_{9}$ 过 $Q_{4},Q_{8}$ 或 $Q_{5},Q_{9}$ ;

定义域为 $(-1,+\\infty)$ 的 $y_{10},y_{11},y_{12}$ ，有2个函数 $y_{10},y_{12}$ 过 $Q_{4},Q_{11}$ 或 $Q_{2},Q_{6}$ .

对于对数函数,其定义域是非常重要而特殊的,定义域优先意识是函数的重要内容.`,
      },
      {
        id: "prob-sec-2-3-4-sol-4",
        title: `解法四`,
        method: "geometric",
        steps: [],
        explanation: `(分类列举法)

当 $a = -\\frac{1}{2}$ 时， $x$ 只能取1，函数 $f(x)$ 的图像不可能经过 $Q$ 中两个点；

当 $a = 0, b = 0$ 时， $f(x) = \\log_2 x$ 经过点 $(1,0)$ ， $\\left(\\frac{1}{2}, -1\\right)$ ；

当 $a = 0, b = 1$ 时， $f(x) = \\log_2 x + 1$ 经过点 $(1,1), \\left(\\frac{1}{2}, 0\\right)$ ;

当 $a=\\frac{1}{2}, b=0$ 时， $f(x)=\\log_{2}\\left(x+\\frac{1}{2}\\right)$ 经过点 $(0,-1),\\left(\\frac{1}{2},1\\right)$ ;

当 a=1, b=-1 时， $f(x)=\\log_{2}(x+1)-1$ 经过点 $(0,-1)$ , $(1,0)$ ;

当 $a=\\frac{1}{2}, b=1$ 时， $f(x)=\\log_{2}\\left(x+\\frac{1}{2}\\right)+1$ 经过点 $(0,0),\\left(\\frac{1}{2},1\\right)$ ;

当 $a = 1, b = 1$ 时， $f(x) = \\log_2(x + 1) + 1$ 经过点 $\\left(-\\frac{1}{2}, 0\\right), (0, 1)$ .

函数的图像是函数关系的一种表示,它是从“形”的方面来刻画函数的变化规律的.函数图像形象地显示了函数的性质,为研究数量关系问题提供了“形”的直观性,它是探求解题途径、获得问题结果的重要工具.函数的图像和解析式是函数关系的主要表现形式,实质是相同的,在解题时经常要相互转化,在解决函数问题,尤其是较为烦琐的问题(如分类讨论、求参数的范围等)时要充分发挥图像的直观作用,如:解决函数的值域时,可给一些代数式赋予一定的几何意义,如直线的斜率、线段的长度(两点间的距离)等,把代数中的最值问题转化为几何问题,实现数形转换.又如方程 $f(x)=g(x)$ 的解的个数可

以转换为函数 $y = f(x), y = g(x)$ 的图像的交点个数问题.`,
      },
    ],
    tags: [],
    source: `2010 年高考浙江卷试题`,
  },
  {
    id: "prob-sec-2-3-5",
    topicId: "topic-sec-2-3",
    title: `设 f(x)=|2-x^2|`,
    content: `设 $f(x)=|2-x^{2}|$ ，若 0<a<b，且 $f(a)=f(b)$ ，则 ab 的取值范围是（）
![](images/209405f18cc497c8e4811cafd23ecf6edfcbc2578286496c96e12aea35ff893e.jpg)
图2-3-5

A. $(0,2)$

B. $(0,2]$

C. $(0,4]$

D. $(0,4)$`,
    preview: `设 f(x)=|2-x^2| ，若 0<a<b，且 f(a)=f(b) ，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-3-5-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `直接观察函数的图像,如图2-3-5所示,

![](images/78595f5049604b4b848c86a572a15694cfb7b4ff5110fde5f510f9575c4fcdd2.jpg)

由图中可得 $2-a^{2}=b^{2}-2$ ，

即 $a^{2}+b^{2}=4>2ab>0$ , 故选 A.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-3-6",
    topicId: "topic-sec-2-3",
    title: `对 a, b R`,
    content: `对 $a, b \\in R$ ，记 $\\max\\{a, b\\} = \\begin{cases} a, a \\geqslant b, \\\\ b, a < b, \\end{cases}$ 函数 $f(x) = \\max\\{|x + 1|, |x - 2|\\} (x \\in \\mathbb{R})$ 的最小值是 \\_\\_\\_\\_.`,
    preview: `对 a, b R ，记 函数 的最小值是 \\_\\_\\_\\_.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-3-6-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `根据题意画出函数 $f(x)$ 的图像(图2-3-6).

由图可知:函数 $f(x)$ 在 A 点取最小值, A 点可看成两直线的交点,

![](images/78595f5049604b4b848c86a572a15694cfb7b4ff5110fde5f510f9575c4fcdd2.jpg)
图2-3-6

由方程组 $\\left\\{\\begin{aligned}y&=-x+2,\\\\ y&=x+1\\end{aligned}\\right.$ 解得A点的坐标为 $\\left(\\frac{1}{2},\\frac{3}{2}\\right)$ ,

所以函数 $f(x)$ 的最小值为 $\\frac{3}{2}$ .

评注 通过数与形的转化分析,根据图形直观,将求函数最小值问题转化为求方程组的解.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-3-7",
    topicId: "topic-sec-2-3",
    title: `求函数 y=√{x^2-2x+2}+√{x^2-6x+13}`,
    content: `求函数 $y=\\sqrt{x^{2}-2x+2}+\\sqrt{x^{2}-6x+13}$ 的最小值.`,
    preview: `求函数 y=√{x^2-2x+2}+√{x^2-6x+13} 的最小值.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-3-7-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `此类问题直接用代数方法求解, 困难较大, 我们注意到 $\\sqrt{x^{2}-2x+2}$ 和 $\\sqrt{x^{2}-6x+13}$ 分别可变形为 $\\sqrt{(x-1)^{2}+(0-1)^{2}}$ 和 $\\sqrt{(x-3)^{2}+(0-2)^{2}}$ , 便可分别看成是点 $(x,0)$ 到另两点 $(1,1)$ 和 $(3,2)$ 的距离, 即问题化为 x 轴上一动点 $(x,0)$ 到另两定点 $(1,1)$ 和 $(3,2)$ 的距离之和的最小值. 结合图形, 易得 $y_{\\min}=\\sqrt{13}$ .

评注 此类问题直接用代数方法求解,困难较大,我们往往对解析式通过变形赋予一定的几何意义,利用数到形的转变解决这类问题.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-3-8",
    topicId: "topic-sec-2-3",
    title: `关于 x 的方程 (x^2-1)^2-|x^2-1|+k=0`,
    content: `关于 x 的方程 $(x^{2}-1)^{2}-|x^{2}-1|+k=0$ ，给出下列四个命题：
①存在实数 k，使得方程恰有 2 个不同的实根；
②存在实数 k，使得方程恰有 4 个不同的实根；
③存在实数 k，使得方程恰有 5 个不同的实根；
④存在实数 k，使得方程恰有 8 个不同的实根.

其中假命题的个数是

( )

A. 0

B. 1

C. 2

D. 4`,
    preview: `关于 x 的方程 (x^2-1)^2-|x^2-1|+k=0 ，给出下列四个命题： ①存在实数 k，使得方程恰有 2 个不同的实根； ②存在实数 k，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-3-8-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `本题是关于函数、方程解的选择题,考查换元法及方程根的讨论,属一题多选型试题,要求考生具有较强的分析问题和解决问题的能力.`,
      },
      {
        id: "prob-sec-2-3-8-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `令 $t=|x^{2}-1|$ ，则 $t^{2}-t+k=0$ ，

因此方程 $(x^{2}-1)^{2}-\\left|x^{2}-1\\right|+k=0(*)$ 分解为

$$
\\left\\{ \\begin{array}{l} t = | x ^ {2} - 1 |, \\\\ t ^ {2} - t = - k. \\end{array} \\right. \\tag {①}
$$

对方程①,结合函数 $y=|x^{2}-1|$ 的图像可知:

当 t<0 时, 方程①无解; 当 t=0 或 t>1 时, 方程①有 2 个根;

当 0<t<1 时,方程①有 4 个根;

当 t=1 时, 方程①有 3 个根.

对方程②,结合函数 $y=t^{2}-t$ 的图像可知:

当 $k > \\frac{1}{4}$ 时, 方程②无解, 对应 (\\*) 无解;

当 $k=\\frac{1}{4}$ 时，方程②有 1 个根为 $t=\\frac{1}{2}$ ，对应 (\\*) 式有 4 个根；

当 $0 < k < \\frac{1}{4}$ 时，方程②在 $(0,1)$ 内有 2 个根，对应 (\\*) 式有 8 个根；

当 k=0 时, t=0 或 t=1, 对应 (\\*) 式有 5 个根;

当 k<0 时, 方程②有一正一负两个根, 且正根大于 1, 对应 (\\*) 式有 2 个根.

故选 A.`,
      },
      {
        id: "prob-sec-2-3-8-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `由函数 $f(x) = (x^{2} - 1)^{2} - |x^{2} - 1|$ 的图像（如图2-3-7

![](images/f8b1715c0e9fcc2707f78f40552b43b0a78c8b95d87ef9cbd6b20d1544fffca4.jpg)所示）及动直线 $g(x) = k$ 可得出答案为A.`,
      },
      {
        id: "prob-sec-2-3-8-sol-3",
        title: `解法三`,
        method: "standard",
        steps: [],
        explanation: `设 $t=|x^{2}-1|(t\\geqslant0)$ ,

方程 $t^{2}-t+k=0$ 的判别式为 $\\Delta=1-4k$ ，

由 k 的取值依据 $\\Delta > 0, \\Delta = 0, \\Delta < 0$ 得出解的个数.

![](images/f8b1715c0e9fcc2707f78f40552b43b0a78c8b95d87ef9cbd6b20d1544fffca4.jpg)

图2-3-7`,
      },
      {
        id: "prob-sec-2-3-8-sol-4",
        title: `解法四`,
        method: "standard",
        steps: [],
        explanation: `设函数

$$
f (x) = \\left\\{ \\begin{array}{l l} (x - 1) (x + 1) (x - \\sqrt {2}) (x + \\sqrt {2}), x \\geqslant 1 \\text {或} x \\leqslant - 1, \\\\ x ^ {2} \\cdot (x - 1) \\cdot (x + 1), - 1 <   x <   1. \\end{array} \\right.
$$

利用数轴标根法得出函数与 x 轴的交点个数为 5 个, 同时考虑到函数的单调性, 大体上画出函数的图像, 从而得出答案 A.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-3-9",
    topicId: "topic-sec-2-3",
    title: `已知函数 f(x)=|x^2+3x| , x R`,
    content: `已知函数 $f(x)=|x^{2}+3x|$ , $x \\in R$ . 若方程 $f(x)-a|x-1|=0$ 恰有4个互异的实数根，则实数 a 的取值范围为 \\_\\_\\_\\_.
讲解 解法一

(1)如图2-3-8所示,当 $y=-a(x-1)$ 与 $y=-x^{2}-3x$ 相切时,

a=1, 此时 $f(x)-a|x-1|=0$ 恰有 3 个互异的实数根.

(2)如图 2-3-9 所示, 当直线 $y=a(x-1)$ 与函数 $y=x^{2}+3x$ 相切时, a=9, 此时 $f(x)-a|x-1|=0$ 恰有 2 个互异的实数根.

![](images/8732657aff777964e88e8abd528de56efda6972e1dae704f35b6ff1599d71508.jpg)
图2-3-8

![](images/9c4cb66de71ccb49d0d1bca5500979d544e660f865bedc0e7a0f8418b03f9d9e.jpg)
图2-3-9

![](images/11c957c9ec47a7372587d0fbf1f8a5f3800518b6995f16bff18610ab167ba7f3.jpg)
图2-3-10

结合图像可知 0 < a < 1 或 a > 9.`,
    preview: `已知函数 f(x)=|x^2+3x| , x R . 若方程 f(x)-a|x-1|=0 恰有4个互异的实数根，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-3-9-sol-0",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `显然 $a \\neq 1$ ，所以 $a = \\left| \\frac{x^{2} + 3x}{x - 1} \\right|$ .

令 t=x-1，则 $a=\\left|t+\\frac{4}{t}+5\\right|$ .

因为 $t + \\frac{4}{t} \\in (-\\infty, -4] \\cup [4, +\\infty)$ ，所以 $t + \\frac{4}{t} + 5 \\in (-\\infty, 1] \\cup [9, +\\infty)$ .

结合图 2-3-10

![](images/bdd596901bef440253d1f9de67a2bb97867a659acab081c0f3aa7d2dd8fb9a60.jpg) 可得 0 < a < 1 或 a > 9.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-3-10",
    topicId: "topic-sec-2-3",
    title: `已知实数 x, y 同时满足下列条件: 2x + y -`,
    content: `已知实数 x, y 同时满足下列条件: $2x + y - 2 \\geqslant 0$ , $x - 2y + 4 \\geqslant 0$ , $3x - y - 3 \\leqslant 0$ . 那么 $x^{2} + y^{2}$ 在 x, y 取何值时取得最大值、最小值？最大值、最小值各是多少？`,
    preview: `已知实数 x, y 同时满足下列条件: 2x + y - 2 ≥ 0 , x - 2y + 4 ≥ 0 , 3x - y - 3 ≤qs`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-3-10-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `在线性约束条件下确定可行域, 设 $P(x, y)$ , 利用几何意义知 $x^{2} + y^{2} = |OP|^{2}$ , 数形结合, 不难求出 $x^{2} + y^{2}$ 的最大(小)值.

不等式组 $\\left\\{\\begin{aligned}&2x+y-2\\geqslant0,\\\\ &x-2y+4\\geqslant0,\\end{aligned}\\right.$ 表示的可行域如图2-3-11所示. $3x-y-3\\leqslant0$

以原点为圆心作圆. 显然, 当圆过点 A 时, 圆的半径最大; 当圆与直线 $y=2x+y-2$ 相切时, 圆的半径最小.

![](images/bdd596901bef440253d1f9de67a2bb97867a659acab081c0f3aa7d2dd8fb9a60.jpg)

图2-3-11

解方程组 $\\left\\{\\begin{aligned}3x-y-3&=0,\\\\ x-2y+4&=0,\\end{aligned}\\right.$ 得A点坐标为(2,3);易得原点
到直线 $y=2x+y-2$ 的距离 $d=\\frac{2}{\\sqrt{5}}$ ，并可求得切点 B 的坐标为 $\\left(\\frac{4}{5},\\frac{2}{5}\\right)$ .

故当 x=2, y=3 时， $x^{2}+y^{2}$ 有最大值，并且最大值为 $\\left|OA\\right|^{2}=13$ ;

当 $x=\\frac{4}{5}$ , $y=\\frac{2}{5}$ 时, $x^{2}+y^{2}$ 取最小值, 并且最小值为 $d^{2}=\\frac{4}{5}$ .

评注 本题若约束条件不变, 结论改为求 $\\mu=2x+3y$ 的最大值, 那么实际上就是线性规划问题, 把它化为 $y=-\\frac{2}{3}x+\\frac{\\mu}{3}$ , 易知过 A 点时, 动直线在 y 轴上的截距最大; 过 C(1,0) 时最小, 故 $\\mu_{max}=13, \\mu_{min}=2$ .

数列可看成以 n 为自变量的函数: 等差数列可看成正整数 n 的“一次函数”, 前 n 项和可看成正整数 n 的缺常数项的“二次函数”, 等比数列可看成正整数 n 的“指数函数”. 在解决数列问题时可借助相应的函数图像来解决.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-3-11",
    topicId: "topic-sec-2-3",
    title: `若数列 a_n 为等差数列, a_p=q,a_q=p,求 a_p+q`,
    content: `若数列 $\\{a_{n}\\}$ 为等差数列, $a_{p}=q,a_{q}=p$ ,求 $a_{p+q}$ .`,
    preview: `若数列 为等差数列, a_p=q,a_q=p ,求 a_p+q .`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-3-11-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `不妨设 $p < q$ ，由于等差数列中， $a_{n}$ 关于 $n$ 的图像是一条直线上均匀排开的一群孤立的点，故三点 $(p, q), (q, p), (p + q, m)$ 共线，如图2-3-12所示.

设 $a_{p + q} = m$ ，由已知，得三点 $(p,a_p),(q,a_q),(p + q,a_{p + q})$ 共线，

![](images/f7b83e15b6f53a68511721fec6189124f038327d0b762633bc5e144500cdb014.jpg)
图2-3-12

则 $k_{AB} = k_{BC}$ ，即 $\\frac{p - q}{q - p} = \\frac{m - p}{p + q - q}$ 得 $m = 0$ ，即 $a_{p + q} = 0.$

向量是近代数学中一个重要而基本的数学概念, 是沟通代数、几何与三角函数的一种工具, 有着极其丰富的实际背景. 向量既是代数的对象, 又是几何的对象, 更是数形结合的重要载体, 因此, 数形结合思想在向量中得到了充分的体现.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-3-12",
    topicId: "topic-sec-2-3",
    title: `已知向量 a ≠ e, |e| = 1`,
    content: `已知向量 $a \\neq e, |e| = 1$ ，对任意 $t \\in R$ ，恒有 $|a - te| \\geqslant |a - e|$ ，则（）
![](images/2e900e9fad7b02399c60679562c6bba621cab3960935d5e5636ee730e9f202d3.jpg)

图2-3-13

A. $a \\perp e$

B. $a \\perp (a - e)$

C. $e \\perp (a - e)$

D. $(\\boldsymbol{a}+\\boldsymbol{e})\\perp(\\boldsymbol{a}-\\boldsymbol{e})$`,
    preview: `已知向量 a ≠ e, |e| = 1 ，对任意 t R ，恒有 |a - te| ≥ |a - e| ，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-3-12-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `如图 2-3-13 所示, 设 $e=\\overrightarrow{OA}, te=\\overrightarrow{OC}, a=\\overrightarrow{OB}$ ,

![](images/de6926ea38dd812a0a14b256493accabbaa43063a582eea30dbd0015f81e783f.jpg)

则题意即为不论 C 点在 OC 上何处都有 $\\left|\\overrightarrow{CB}\\right|\\geqslant\\left|\\overrightarrow{AB}\\right|$ ,

故 $\\overrightarrow{AB}\\perp\\overrightarrow{OA}$ ，即 $e\\perp(a-e)$ ，选C.

评注 本题也可直接进行代数运算,但显然没有以上解法直观、简便.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-3-13",
    topicId: "topic-sec-2-3",
    title: `设 θ 为两个非零向量 a, b 的夹角`,
    content: `设 $\\theta$ 为两个非零向量 a, b 的夹角，已知对任意实数 t, $|b + ta|$ 的最小值为 1，则（）
A. 若 $\\theta$ 确定, 则 $|a|$ 唯一确定
B. 若 $\\theta$ 确定, 则 $|b|$ 唯一确定
C. 若 $\\left|a\\right|$ 确定, 则 $\\theta$ 唯一确定
D. 若 $\\left|b\\right|$ 确定, 则 $\\theta$ 唯一确定`,
    preview: `设 θ 为两个非零向量 a, b 的夹角，已知对任意实数 t, |b + ta| 的最小值为 1，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-3-13-sol-0",
        title: `解答`,
        method: "creative",
        steps: [],
        explanation: `如图 2-3-14 所示，

构造 $\\overrightarrow{OA}=a,\\overrightarrow{OB}=b$ ，且 $\\langle a,b\\rangle=\\theta.$

则 $\\overrightarrow{OA_{t}}=ta$ ，

根据平行四边形法则, $\\overrightarrow{OC_{t}}=b+ta$ ,

当 $OC \\perp l$ 时， $|\\overrightarrow{OC_{t}}|$ 取到最小值 1，

此时， $\\sin\\theta=\\frac{|\\overrightarrow{OC}|}{|\\overrightarrow{OB}|}=\\frac{1}{|\\boldsymbol{b}|}$ ，故若 $\\theta$ 确定，

则 $|b|$ 唯一确定,选B.

![](images/de6926ea38dd812a0a14b256493accabbaa43063a582eea30dbd0015f81e783f.jpg)

图2-3-14`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-3-14",
    topicId: "topic-sec-2-3",
    title: `在平面内,定点 A, B, C, D 满足 |→DA| =`,
    content: `在平面内,定点 A, B, C, D 满足 $\\left|\\overrightarrow{DA}\\right| = \\left|\\overrightarrow{DB}\\right| = \\left|\\overrightarrow{DC}\\right|$ , $\\overrightarrow{DA} \\cdot \\overrightarrow{DB} = \\overrightarrow{DB} \\cdot \\overrightarrow{DC} = \\overrightarrow{DC} \\cdot \\overrightarrow{DA} = -2$ , 动点 P, M 满足 $\\left|\\overrightarrow{AP}\\right| = 1$ , $\\overrightarrow{PM} = \\overrightarrow{MC}$ , 则 $\\left|\\overrightarrow{BM}\\right|^{2}$ 的最大值是（）
A. $\\frac{43}{4}$

B. $\\frac{49}{4}$

C. $\\frac{37 + 6\\sqrt{3}}{4}$

D. $\\frac{37 + 2\\sqrt{33}}{4}$`,
    preview: `在平面内,定点 A, B, C, D 满足 |→DA| = |→DB| = |→DC| , , 动点 P, M 满足 |→AP| = 1 , →PM = →MC`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-3-14-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `由题意， $|\\overrightarrow{DA}| = |\\overrightarrow{DB}| = |\\overrightarrow{DC}|$ ，所以 $D$ 到 $A, B, C$ 三点的距离相等， $D$ 是 $\\triangle ABC$ 的外心.

$$
\\begin{array}{l} \\overrightarrow {D A} \\cdot \\overrightarrow {D B} = \\overrightarrow {D B} \\cdot \\overrightarrow {D C} = \\overrightarrow {D C} \\cdot \\overrightarrow {D A} = - 2 \\\\ \\Rightarrow \\overrightarrow {D A} \\cdot \\overrightarrow {D B} - \\overrightarrow {D B} \\cdot \\overrightarrow {D C} = \\overrightarrow {D B} \\cdot (\\overrightarrow {D A} - \\overrightarrow {D C}) = \\overrightarrow {D B} \\cdot \\overrightarrow {C A} = 0, \\text {所以} D B \\perp A C. \\\\ \\end{array}
$$

同理可得， $DA \\perp BC, DC \\perp AB$ ，

从而 D 是 $\\triangle ABC$ 的垂心.

所以 $\\triangle ABC$ 的外心与垂心重合, 因此 $\\triangle ABC$ 是正三角形, 且 D 是 $\\triangle ABC$ 的中心.

$$
\\overrightarrow {D A} \\cdot \\overrightarrow {D B} = | \\overrightarrow {D A} | | \\overrightarrow {D B} | \\cos \\angle A D B = | \\overrightarrow {D A} | | \\overrightarrow {D B} | \\times \\left(- \\frac {1}{2}\\right) = - 2 \\Rightarrow | \\overrightarrow {D A} | = 2,
$$

所以正 $\\triangle ABC$ 的边长为 $2\\sqrt{3}$ .

我们以 A 为原点建立直角坐标系，B, C, D 三点坐标分别为 $B(3, -\\sqrt{3})$ , $C(3, \\sqrt{3})$ , $D(2, 0)$ ，如图 2-3-15 所示.

由 $\\left|\\overrightarrow{AP}\\right|=1$ ，设 P 点的坐标为 $(\\cos\\theta,\\sin\\theta)$ ，其中 $\\theta\\in[0,2\\pi)$

而 $\\overrightarrow{PM} = \\overrightarrow{MC}$ ，即 M 是 PC 的中点，

![](images/30bbe7d1821df3857ae7da24fe77ebccfa24feef8ca3e5d5454142badfa32b9d.jpg)

图2-3-15

可以写出 M 的坐标为 $M\\left(\\frac{3+\\cos\\theta}{2},\\frac{\\sqrt{3}+\\sin\\theta}{2}\\right)$ ,

则 $|\\overrightarrow{BM}|^2 = \\left(\\frac{\\cos\\theta - 3}{2}\\right)^2 + \\left(\\frac{3\\sqrt{3} + \\sin\\theta}{2}\\right)^2 = \\frac{37 + 12\\sin\\left(\\theta - \\frac{\\pi}{6}\\right)}{4} \\leqslant \\frac{37 + 12}{4} = \\frac{49}{4}$ .

当 $\\theta=\\frac{2}{3}\\pi$ 时， $\\left|\\overrightarrow{BM}\\right|^{2}$ 取得最大值 $\\frac{49}{4}$ . 故选 B.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-3-15",
    topicId: "topic-sec-2-3",
    title: `直线 y=2k 与曲线`,
    content: `直线 y=2k 与曲线 $9k^{2}x^{2}+y^{2}=18k^{2}|x|(k\\in\\mathbb{R} \\text{ 且 } k\\neq0)$ 的公共点的个数为 \\_\\_\\_\\_.`,
    preview: `直线 y=2k 与曲线 9k^2x^2+y^2=18k^2|x|(k 且 k≠0) 的公共点的个数为 \\_\\_\\_\\_.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-3-15-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `不妨取 k=1，有 $9x^{2}+y^{2}=18|x|$ ，

即 $(|x|-1)^{2}+\\frac{y^{2}}{9}=1.$

如图 2-3-16 所示, 直线 y=2 与双椭圆有 4 个不同的交点.

![](images/5c748daca3e7fedf3b6bb87b968944a3bb442694cd799b50385e4da4c649e0d7.jpg)

图2-3-16`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-3-16",
    topicId: "topic-sec-2-3",
    title: `如果实数满足 (x+2)^2+y^2=3`,
    content: `如果实数满足 $(x+2)^{2}+y^{2}=3$ ，则 $\\frac{y}{x}$ 的最大值为\\_\\_\\_\\_，2x-y的最小值为\\_\\_\\_\\_。`,
    preview: `如果实数满足 (x+2)^2+y^2=3 ，则 y/x 的最大值为\\_\\_\\_\\_，2x-y的最小值为\\_\\_\\_\\_。`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-3-16-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)问题转化为求圆 $(x+2)^{2}+y^{2}=3$ 上一点与原点的连线的斜率 $k=\\frac{y}{x}$ 的最大值.

如图 2-3-17 所示, 由原点向圆 $(x+2)^{2}+y^{2}=3$ 作切线, 其中切线斜率的最大值即为 $\\frac{y}{x}$ 的最大值. 设过原点的直线为 y=kx, 即

![](images/fbe5e110b4b71fd89c8481210770da5f23e0c5b5b0ea7e0a0d4175bbeaf90a76.jpg)

图2-3-17

$kx - y = 0$ ，由 $\\frac{| - 2k - 0|}{\\sqrt{k^2 + 1}} = \\sqrt{3}$ 解得 $k = \\sqrt{3}$ ，或 $k = -\\sqrt{3}$ ，所以 $\\frac{y}{x}$ 的最大值为 $\\sqrt{3}$

(2)由圆的参数方程, 得 $\\left\\{\\begin{aligned} x &= -2 + \\sqrt{3} \\cos\\theta, \\\\ y &= \\sqrt{3} \\sin\\theta, \\end{aligned}\\right.$

所以 $2x - y = -4 + 2\\sqrt{3}\\cos\\theta - \\sqrt{3}\\sin\\theta = -4 + \\sqrt{15}\\sin(\\theta + \\varphi)$ ,

故 2x-y 的最小值为 $-4-\\sqrt{15}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-3-17",
    topicId: "topic-sec-2-3",
    title: `如图 2-3-18 所示, 点 P(-3,1) 在椭圆`,
    content: `如图 2-3-18 所示, 点 $P(-3,1)$ 在椭圆 $\\frac{x^{2}}{a^{2}} + \\frac{y^{2}}{b^{2}} = 1 (a > b > 0)$ 的左准线上. 过点 P 且方向为 $a = (2, -5)$ 的光线, 经直线 y = -2 反射后通过椭圆的左焦点, 则这个椭圆的离心率为 ( )
![](images/9fd81675d0d70908f5c10950a98f18a27d9ed826418608edbf4fa4df0ba620ec.jpg)

图2-3-18

A. $\\frac{\\sqrt{3}}{3}$

B. $\\frac{1}{3}$

C. $\\frac{\\sqrt{2}}{2}$

D. $\\frac{1}{2}$`,
    preview: `如图 2-3-18 所示, 点 P(-3,1) 在椭圆 的左准线上. 过点 P 且方向为 a = (2, -5) 的光线, 经直线 y = -2 反射后通过椭圆`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-3-17-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `过点 $P(-3,1)$ 的方向向量 $\\boldsymbol{a}=(2,-5)$ ，所以 $k_{PQ}=-\\frac{5}{2}$ ，则 $l_{PQ}:y-1=-\\frac{5}{2}(x+3)$ ，即 $l_{PQ}:5x+2y=-13$ ，

联立 $\\left\\{\\begin{aligned}5x+2y&=-13,\\\\ y&=-2\\end{aligned}\\right.$ 得 $Q\\left(-\\frac{9}{5},-2\\right)$ ，由光线反射的对称性知 $k_{QF_{1}}=\\frac{5}{2}$

所以 $l_{QF_{1}}:y+2=\\frac{5}{2}\\left(x+\\frac{9}{5}\\right)$ ，即 $l_{QF_{1}}:5x-2y+5=0$ ，令 y=0，得 $F_{1}(-1,0)$ .

综上所述，得 $c = 1, \\frac{a^2}{c} = 3$ ，则 $a = \\sqrt{3}$ ，所以椭圆的离心率 $e = \\frac{c}{a} = \\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$ . 故选A.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-3-18",
    topicId: "topic-sec-2-3",
    title: `如图 2-3-19 所示, 点 M 是椭圆 x^225 +`,
    content: `如图 2-3-19 所示, 点 M 是椭圆 $\\frac{x^{2}}{25} + \\frac{y^{2}}{16} = 1$ 上一点, 它到其中一个焦点 $F_{1}$ 的距离为 4, N 为 $MF_{1}$ 的中点, O 表示原点, 则 $|ON| =$ \\_\\_\\_\\_ .
![](images/d0bc4cb565effc34bb27a46b90c22fc00d4c8d5247b427be790661b33d23cfb9.jpg)

图2-3-19`,
    preview: `如图 2-3-19 所示, 点 M 是椭圆 x^225 + y^216 = 1 上一点, 它到其中一个焦点 F_1 的距离为 4, N 为 MF_1 的中点,`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-3-18-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `设椭圆的另一焦点为 $F_{2}$ ，则 $\\left|MF_{1}\\right|+\\left|MF_{2}\\right|=2a$ ，

而 $a=5, \\left|MF_{1}\\right|=4$ ，所以 $\\left|MF_{2}\\right|=6$ 。

又注意到 N、O 各为 $MF_{1}$ 、 $F_{1}F_{2}$ 的中点，

所以 ON 是 $\\triangle MF_{1}F_{2}$ 的中位线，所以 $|ON|=\\frac{1}{2}|MF_{2}|=\\frac{1}{2}\\times6=3$ .`,
      },
      {
        id: "prob-sec-2-3-18-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `联想到第二定义,可以确定点 M 的坐标,进而求 $MF_{1}$ 中点的坐标,最后利用两点间的距离公式求出 $|ON|$ ,但这样就增加了计算量,较之解法一显得有些复杂.`
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-3-19",
    topicId: "topic-sec-2-3",
    title: `如图 2-3-20 所示, 正四面体 ABCD 的棱长为`,
    content: `如图 2-3-20 所示, 正四面体 ABCD 的棱长为 1, 棱 AB // 平面 $\\alpha$ , 则正四面体上的所有点在平面 $\\alpha$ 内的射影构成的图形面积的取值范围是 \\_\\_\\_\\_.
![](images/5e6465213622b5ee8ba5398c14a8b5cb02433b7bab4eda0278714046c9e97473.jpg)

图2-3-20`,
    preview: `如图 2-3-20 所示, 正四面体 ABCD 的棱长为 1, 棱 AB // 平面 α , 则正四面体上的所有点在平面 α 内的射影构成的图形面积的取值范围是`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-3-19-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `分析投影图形, 当 $CD \\parallel \\alpha$ 时, $S_{max} = \\frac{1}{2}$ ,

当 $CD \\perp \\alpha$ 时， $S_{\\min} = \\frac{\\sqrt{2}}{4}$ ，所以 $S \\in \\left[\\frac{\\sqrt{2}}{4}, \\frac{1}{2}\\right]$ .

评注 本题考查立体几何中的计算问题和空间想象能力. 几何最值问题在高考中时有出现, 应引起足够重视和深入探讨.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-3-20",
    topicId: "topic-sec-2-3",
    title: `如图 2-3-21 所示, 在直三棱柱`,
    content: `如图 2-3-21 所示, 在直三棱柱 $ABC-A_{1}B_{1}C_{1}$ 中, 底面为直角三角形, $\\angle ACB=90^{\\circ}, AC=6, BC=CC_{1}=\\sqrt{2}, P$ 是 $BC_{1}$ 上一动点, 则 $CP+PA_{1}$ 的最小值是 \\_\\_\\_\\_.
![](images/f764ff5b7ea8f63ae130e1ed71bad4e7267dc15f796514424f17e966ae12ab49.jpg)

图2-3-21

![](images/e9c803dc793936e34e94a9c277b490df9a8c92ca291a4c01874fbc25d93a39b1.jpg)

图2-3-22`,
    preview: `如图 2-3-21 所示, 在直三棱柱 ABC-A_1B_1C_1 中, 底面为直角三角形, ∠ ACB=90°, AC=6, BC=CC_1=√2, P 是`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-3-20-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `连 $A_{1}B$ ，沿 $BC_{1}$ 将 $\\triangle CBC_{1}$ 展开与 $\\triangle A_{1}BC_{1}$ 在同一个平面内，如图2-3-22

![](images/5cde19b613d16de7aeeb4d20285ef06615d48cbabbf68f41c7b91a4b0a97a2c7.jpg)所示.连 $A_{1}C$ ，则 $A_{1}C$ 的长度就是所求的最小值.通过计算可得 $AB = A_{1}B_{1} = \\sqrt{38},A_{1}B =$ $\\sqrt{40},A_1C_1 = 6,BC_1 = 2,$ 所以 $\\angle A_1C_1B = 90^\\circ$ ，又 $\\angle BC_{1}C = 45^{\\circ}$ ，故 $\\angle A_1C_1C = 135^\\circ$ ，由余弦定理可求得 $A_{1}C = 5\\sqrt{2}$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-3-21",
    topicId: "topic-sec-2-3",
    title: `如图 2-3-23, 在长方形 ABCD 中, AB=2`,
    content: `如图 2-3-23, 在长方形 ABCD 中, AB=2, BC=1, E 为 DC 的中点, F 为线段 EC(端点除外)上一动点, 现将 $\\triangle AFD$ 沿 AF 折起, 使平面 $ABD \\perp$ 平面 ABC, 在平面 ABD 内过点 D 作 $DK \\perp AB$ , K 为垂足, 设 AK=t, 则 t 的取值范围是 \\_\\_\\_\\_.
![](images/5cde19b613d16de7aeeb4d20285ef06615d48cbabbf68f41c7b91a4b0a97a2c7.jpg)

图2-3-23`,
    preview: `如图 2-3-23, 在长方形 ABCD 中, AB=2, BC=1, E 为 DC 的中点, F 为线段 EC(端点除外)上一动点, 现将 △ AFD 沿 A`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-3-21-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `可以用极端法加以解决. 即此题的破解可利用两个极端位置, 当点 F 位于 DC 的中点时, t=1; 随着 F 点到 C 点时, 由 $CB \\perp AB, CB \\perp DK$ , 得 $CB \\perp$ 平面 ADB, 即有 $CB \\perp BD$ , 由于 CD=2, BC=1, 所以 $BD=\\sqrt{3}$ .

又 $AD = 1,AB = 2$ ，因此有 $AD\\bot BD$ ，可得 $t = \\frac{1}{2}$ ，因此 $t$ 的取值范围为 $\\left(\\frac{1}{2},1\\right)$`,
      },
      {
        id: "prob-sec-2-3-21-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `如图 2-3-24 所示, 作 $KG \\perp AF$ 于 G 点,

连接 DG，则 $DG \\perp AF$ ，设 $DF = l (1 < l < 2)$ ，

在 Rt△ADF 中由射影定理可以求出 $AG=\\frac{1}{\\sqrt{1+l^{2}}}$ ,

在 Rt△AKG 中, 利用面积公式可得

$$
G K = \\frac {A K}{A F} = \\frac {A K}{\\sqrt {1 + l ^ {2}}},
$$

而 $AK^2 = AG^2 + GK^2$

解得 $t = AK = \\frac{1}{l}$ , 由 $1 < l < 2$ 可得 $t \\in \\left(\\frac{1}{2}, 1\\right)$ .

![](images/dd628c6023c3a8671aa32ca56a0bb4242fd6a5f2f3c952333424b80bb490925f.jpg)

图2-3-24`,
      },
      {
        id: "prob-sec-2-3-21-sol-2",
        title: `解法三`,
        method: "geometric",
        steps: [],
        explanation: `空间问题平面化是解决立体几何问题的常用方法,所以此题可以回归到平面状态加以分析.如图2-3-25所示,将此立体图形进行展开处理.利用三角形相似, $\\cdots$ ,可以得到 $t=\\frac{1}{l}$ ,从而也得到了问题的答案.

![](images/51a774918a5bacd0b8bb68bbcfc9c4549d6aee96e0c46beba1113cbc6bcb6d14.jpg)
图2-3-25`,
      },
      {
        id: "prob-sec-2-3-21-sol-3",
        title: `解法四`,
        method: "standard",
        steps: [],
        explanation: `设点 A 为坐标原点, 直线 AB 为 x 轴建立平面直角坐标系. 从而得到点 K, D, F 的坐标分别为 $(t,0)$ , $(0,1)$ , $(l,1)$ , 则直线 DK, AF 的斜率分别为 $-\\frac{1}{t}$ , $\\frac{1}{l}$ , 再由 $DK \\perp AF$ 可得 $t = \\frac{1}{l}$ , 故而此题得以解决.`,
      },
      {
        id: "prob-sec-2-3-21-sol-4",
        title: `解法五`,
        method: "standard",
        steps: [],
        explanation: `如图 2-3-26 所示, 原问题等价于: 点 D 在以 A 为圆心, 1 为半径的圆弧上移动, 若 $DF = D_{1}F$ 时, 求 AK 的取值范围. 但是然后就没有思路了!

过点 F 作 $FH \\perp AB$ 于点 H，则可得 $DF^{2} = DK^{2} + KF^{2} = DK^{2} + KH^{2} + FH^{2}$ ，于是有 $l^{2} = 1 - t^{2} + (l - t)^{2} + 1$ ，则 $t = \\frac{1}{l}$ ，仿上，问题得解.

![](images/0a2a386cea145852513495e6a739a9e6245eb53adb459b5f454a3ca870526dbd.jpg)

图2-3-26`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-3-22",
    topicId: "topic-sec-2-3",
    title: `已知以 T=4 为周期的函数`,
    content: `已知以 T=4 为周期的函数
$f(x) = \\left\\{ \\begin{array}{l}m\\sqrt{1 - x^2},x\\in (-1,1],\\\\ 1 - |x - 2|,x\\in (1,3], \\end{array} \\right.$ 其中 $m > 0$

若方程 $3f(x) = x$ 恰有5个实数解，则 $m$ 的取值范围是 （）

A. $\\left(\\frac{\\sqrt{15}}{3},\\frac{8}{3}\\right)$

B. $\\left(\\frac{\\sqrt{15}}{3},\\sqrt{7}\\right)$

C. $\\left(\\frac{4}{3},\\frac{8}{3}\\right)$

D. $\\left(\\frac{4}{3},\\sqrt{7}\\right)$`,
    preview: `已知以 T=4 为周期的函数 其中 m > 0 若方程 3f(x) = x 恰有5个实数解，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-3-22-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `将函数 $f\\left( x\\right)$ 整理得：

当 $x \\in (-1, 1]$ 时， $x^2 + \\frac{y^2}{m^2} = 1 (y \\geqslant 0)$ 表示 $x$ 轴上面的半圆或半椭圆；

当 $x \\in (1,3]$ 时， $f(x) = \\begin{cases} x - 1, & 1 < x \\leqslant 2, \\\\ -x + 3, & 2 < x \\leqslant 3, \\end{cases}$ 它表示 $x$ 轴上面的折线段.

在同一直角坐标系里画 $y=f(x)$ 、 $y=\\frac{x}{3}$ 的图像(注意周期 T=4).

通过对 $0 < m < 1, m = 1, m > 1$ 三种情况画图分析，可知只有当 $m > 1$ 时， $y = f(x)$ 和 $y = \\frac{x}{3}$ 的图像才可能有5个交点，如图2-3-27所示.

![](images/347a2aa576d64222f8000827789b261b353fa58c1744e7630839517886101bdd.jpg)
图2-3-27

由图形可见, 只需 $y=\\frac{x}{3}$ 与 $y=f(x)(3\\leqslant x\\leqslant5)$ 有两个交点且与 $y=f(x)(7\\leqslant x\\leqslant9)$ 无交点, 于是有 $f(4)>\\frac{4}{3}$ 且 $f(8)<\\frac{8}{3}$ , 所以选 C.

遗憾的是,选项 C 是错误的答案.其根源在于凭对图形的直觉,简单地认为两个函数图像的位置关系等价于函数最大值之间的关系,这显然是一种不可靠的直觉.

由 $y = \\frac{x}{3}$ 与 $y = f(x) = m\\sqrt{1 - (x - 4)^2} (3 \\leqslant x \\leqslant 5)$ 有两个交点，

把它们联立，得 $(1+9m^{2})x^{2}-72m^{2}x+135m^{2}=0$ ，

所以 $\\Delta_{1}=108m^{2}(3m^{2}-5)$ .

由 $y = \\frac{x}{3}$ 与 $y = f(x) = m\\sqrt{1 - (x - 8)^2} (7 \\leqslant x \\leqslant 9)$ 无交点，联立方程，

由 $(1+9m^{2})x^{2}-144m^{2}x+567m^{2}=0$ ，

所以其 $\\Delta_{2}=324m^{2}(m^{2}-7)$ .

由 $\\Delta_{1}>0,\\Delta_{2}<0,m>1$ , 得 $\\frac{\\sqrt{15}}{3}<m<\\sqrt{7}$ . 正确答案为 B.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-3-23",
    topicId: "topic-sec-2-3",
    title: `方程 2^x=x^2 解的个数是 ( )`,
    content: `方程 $2^{x}=x^{2}$ 解的个数是 ( )
A. 1

B. 2

C. 3

D. 4`,
    preview: `方程 2^x=x^2 解的个数是 ( ) A. 1 B. 2 C. 3 D. 4`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-3-23-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `在同一直角坐标系里, 作 $y = x^2$ 与 $y = 2^x$ 的图像, 如图 2-3-28 所示. 可见方程解的个数有 2 个, 从而选 B.

![](images/aacd6929d6ce7637b3ca8997d36a0a58c18e70cd7859607e299bc0ed94dc1c7f.jpg)
图2-3-28

![](images/dc1ea60583bbd8b815f1d61707d3477c17f391c130d75cd27e9e5d3a4935a6e8.jpg)
图2-3-29

这是典型的图形不完整导致的失误.有些同学在用图形解题时,喜欢把图形画得过小,以至于不能整体地把握图形的性质,导致错解.

把图形放大、画完整,如图2-3-29所示,可发现方程有3个解.事实上,如果我们能知道:对于 $y=a^{x}(a>1)$ 及 $y=x^{a}(a>1)$ ,总存在一个正数 $x_{0}$ ,使得当 $x>x_{0}$ 时,有 $a^{x}>x^{a}$ .也能够发现图2-3-28的不完整性.另一方面,观察 $2^{x}=x^{2}$ 的特点,可看出方程的两根x=2或x=4,再画图确定x<0时有1个根.因此本题正确答案应选C.当然,本题也可用“零点存在定理”逐一验证.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-3-24",
    topicId: "topic-sec-2-3",
    title: `直线 y=1/10x+1 与曲线 y=|x^2-1| 有`,
    content: `直线 $y=\\frac{1}{10}x+1$ 与曲线 $y=|x^{2}-1|$ 有 \\_\\_\\_\\_ 个公共点.`,
    preview: `直线 y=1/10x+1 与曲线 y=|x^2-1| 有 \\_\\_\\_\\_ 个公共点.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-3-24-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `两函数的图像如图 2-3-30 所示, 观察图形, 不少同学可能认为它们有 3 个交点.

由于 $y=|x^{2}-1|$ 在 $x\\in[-1,0]$ 上图像是上凸的，这部分图像的处理就需要借助“数”的严谨来规范“形”的属性.

![](images/e573ac633b0b8d23087157a7eef94acdf2cdbf7930d84940ba48dc75013e7f35.jpg)
图2-3-30

当 $x \\in [-1, 0]$ 时，联立

$y=\\frac{1}{10}x+1$ 与 $y=1-x^{2}$ ，得 x=0 或 x=-0.1。

可见，当 $x \\in (-1,0)$ ，两函数图像还有一交点。因此，两函数图像共有4交点。

或令 $f(x) = \\frac{1}{10} x + 1 - |x^2 - 1|$ ，

则 $f(-1)=0.9>0, f(-0.01)=-0.001+0.0001<0,$

于是可判断当 $x \\in (-1,0)$ , 函数 $f(x)$ 还有一零点.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-3-25",
    topicId: "topic-sec-2-3",
    title: `求方程 x^1/3=2 x 的解的个数`,
    content: `求方程 $x^{\\frac{1}{3}}=2\\sin x$ 的解的个数.`,
    preview: `求方程 x^1/3=2 x 的解的个数.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-3-25-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `因 $\\sin x \\in [-1,1]$ ，所以 $x^{\\frac{1}{3}} \\in [-2,2]$ ，所以 $x \\in [-8,8]$ ，

令 $y=x^{\\frac{1}{3}}$ , $y=2\\sin x$ , 它们都是奇函数,

故只需画出 $x \\in [0, 3\\pi]$ 的图像即可.

在同一直角坐标系里画出它们的图像,如图 2-3-31 所示.

观察图像,第一象限有3个交点,因此方程的解共有7个.

![](images/50cee6b41f74cb39348d1d6e60356c8e7d0832c30cb9357c7b68cfdd383c0fbd.jpg)
图2-3-31

![](images/76eccb0c3333188a0e272e18431100d5d91666a8d0965f38aca907587223bfc4.jpg)
图2-3-32

当 $x = \\frac{5\\pi}{2}$ 时，不少同学认为两曲线是相切的.稍加分析即可知道，

只有 y=2 与 $y=2\\sin x$ 才在 $x=\\frac{5\\pi}{2}$ 处相切.

注意到 $y=x^{\\frac{1}{3}}$ 是单调递增的，

因此当 $x=\\frac{5\\pi}{2}$ 时，一定有 $\\left(\\frac{5\\pi}{2}\\right)^{\\frac{1}{3}}<2.$

把这部分图像放大,如草图 2-3-32 所示,可清楚地发现,

在 $x=\\frac{5\\pi}{2}$ 的左右附近各有一个交点.

因此方程 $x^{\\frac{1}{3}}=2\\sin x$ 的解的个数应该是 9 个.

4. 图形过“草”不精确`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-3-26",
    topicId: "topic-sec-2-3",
    title: `方程 x = x 在区间 (-3π/2, 3π/2)`,
    content: `方程 $\\sin x = \\tan x$ 在区间 $\\left(-\\frac{3\\pi}{2}, \\frac{3\\pi}{2}\\right)$ 上解的个数是（）
A. 2 个

B. 3 个

C. 4 个

D. 5 个`,
    preview: `方程 x = x 在区间 (-3π/2, 3π/2) 上解的个数是（） A. 2 个 B. 3 个 C. 4 个 D. 5 个`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-3-26-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `当 $x \\in \\left(-\\frac{3\\pi}{2}, \\frac{3\\pi}{2}\\right)$ 在同一直角坐标系里，作 $y = \\sin x$ 与 $y = \\tan x$ 的图像，如图2-3-33所示，故选D.

当 $x \\in \\left(0, \\frac{\\pi}{2}\\right)$ 时，有 $\\sin x < x < \\tan x$ ，图 2-3-33 没有正确反映出这一性质，导致错解。正确答案应选 B.

![](images/81db13d9d165fc2b7b84285f67af9c04ac92732c1d5e9ea2b79c34a8e554869a.jpg)
图2-3-33`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-3-27",
    topicId: "topic-sec-2-3",
    title: `若 a=2/2, b=3/3, c=5/5 ，则（）`,
    content: `若 $a=\\frac{\\ln2}{2}, b=\\frac{\\ln3}{3}, c=\\frac{\\ln5}{5}$ ，则（）
A. $a < b < c$

B. $c < b < a$

C. $c <   a <   b$

D. $b < a < c$`,
    preview: `若 a=2/2, b=3/3, c=5/5 ，则（） A. a < b < c B. c < b < a C. c < a < b D. b < a < c`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-3-27-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `观察式子结构, 设 $f(x)=\\ln x$ , 则 $k=\\frac{f(x)}{x}$ 表示曲线 $f(x)=\\ln x$ 上的点到原点连线的斜率, 如图 2-3-34 所示, 直观观察可得 $k_{OA}<k_{OB}<k_{OC}$ , 于是选 A.

这是画图太随意导致的直觉错误. 正确作图, 可发现应选 C.

如令 $g(x) = \\frac{\\ln x}{x}$ ，则 $g'(x) = \\frac{1 - \\ln x}{x^2}$ .

![](images/2554e31c1f78889b6e300c7e8c1ca6025a735df3d7d6c5a0b071789d20d747d8.jpg)

图2-3-34

可见 $g(x)$ 在 $(0,\\mathrm{e})$ 上递增，在 $(\\mathrm{e}, + \\infty)$ 上递减.

由单调性可确定 b > c，淘汰 A、D。作差比较 a, b。`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-3-28",
    topicId: "topic-sec-2-3",
    title: `设线段 AB 两端点在抛物线 y^2=x 上移动`,
    content: `设线段 AB 两端点在抛物线 $y^{2}=x$ 上移动，M 为线段 AB 的中点， $|AB|=a$ (a 为大于零的常数)，求 M 到 y 轴的最短距离.`,
    preview: `设线段 AB 两端点在抛物线 y^2=x 上移动，M 为线段 AB 的中点， |AB|=a (a 为大于零的常数)，求 M 到 y 轴的最短距离.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-3-28-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `设 F 为抛物线的焦点, 分别过 A、B、M 向抛物线的准线引垂线, 垂足分别为 $A_{1}$ 、 $B_{1}$ 、 $M_{1}$ , 如图 2-3-35 所示. 由 $\\left|AF\\right| + \\left|BF\\right| \\geqslant \\left|AB\\right|$ , 结合抛物线定义及梯形中位线性质, 得 $\\left|MM_{1}\\right| \\geqslant \\frac{1}{2} \\left|AB\\right|$ , 所以 $\\left|MM_{1}\\right|$ 的最小值为 $\\frac{a}{2}$ , 从而 M 到 y 轴的最短距离为 $\\frac{a}{2} - \\frac{1}{4}$ .

![](images/df765c0940f3b447c8ef63ec2c2e01f1574fa96b31dfe66ef0c4c3a6cfa8474e.jpg)

图2-3-35

这种解法是错误的,所给的图形并不能反映问题的本质.我们知道,过抛物线焦点的最短弦是抛物线的通径.只有在 $a\\geqslant1$ 时,才符合以上的解法.而当0<a<1时,结合图形已无法判断,需用方程知识来解决.

设 $l_{AB}: x = my + n$ ，与 $y^{2} = x$ 联立，得 $y^{2} - my - n = 0$ ，

当 $\\Delta=m^{2}+4n>0$ 时， $y_{1}+y_{2}=m$ ，所以 $x_{1}+x_{2}=(my_{1}+n)+(my_{2}+n)=m^{2}+2n.$

设 M 到 y 轴的距离为 d，则 $d=\\frac{x_{1}+x_{2}}{2}=\\frac{m^{2}}{2}+n$ .

又 $|AB| = a$ ，所以 $(m^2 + 1)(m^2 + 4n) = a^2$ ，得 $n = \\frac{1}{4}\\left(\\frac{a^2}{m^2 + 1} - m^2\\right)$ ，

所以 $d = \\frac{1}{4}\\left(\\frac{a^2}{m^2 + 1} + m^2\\right) = \\frac{1}{4}\\left(\\frac{a^2}{m^2 + 1} + m^2 + 1 - 1\\right)$ ,

设 $t = m^2 + 1 \\geqslant 1$ ，则 $d = \\frac{1}{4} \\left(\\frac{a^2}{t} + t - 1\\right)$ .

因 0 < a < 1，得 $d = \\frac{1}{4} \\left( \\frac{a^{2}}{t} + t - 1 \\right)$ 在 $t \\in [1, +\\infty)$ 上是增函数，

所以当 t=1 时, $d_{\\min}=\\frac{a^{2}}{4}$ .

故当 $0 < a < 1$ 时， $M$ 到 $y$ 轴的最短距离为 $\\frac{a^2}{4}$ ；当 $a \\geqslant 1$ 时，最短距离为 $\\frac{a}{2} - \\frac{1}{4}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-3-29",
    topicId: "topic-sec-2-3",
    title: `方程 (x+4)=10^x 的根的情况是`,
    content: `方程 $\\lg(x+4)=10^{x}$ 的根的情况是
( )

A. 仅有一根

B. 有一正根和一负根

C. 有两个负根

D. 没有实数根`,
    preview: `方程 (x+4)=10^x 的根的情况是 ( ) A. 仅有一根 B. 有一正根和一负根 C. 有两个负根 D. 没有实数根`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-3-29-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `令 $y=\\lg(x+4)$ 、 $y=10^{x}$ ，在同一直角坐标系里画出它们的图像，如图 2-3-36 所示。观察图形可选 B.

![](images/128085bde2644dc0c607a7aaa6b66d7af387c6d226190acc6ba2ccb8c711b335.jpg)

这个图形画得太不正确了. 稍加计算可发现, 当 x=0 时, $\\lg(x+4)=\\lg4<1$ , 该图没有体现这一特性. 画出正确图形, 可知正确答案为 C.

6. 图形选择不合理`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-3-30",
    topicId: "topic-sec-2-3",
    title: `已知 4^x + 4^y = 2^x+1 + 2^y+1`,
    content: `已知 $4^{x} + 4^{y} = 2^{x+1} + 2^{y+1}$ ，则 $p = 2^{x} + 2^{y}$ 的取值范围是 \\_\\_\\_\\_.
![](images/128085bde2644dc0c607a7aaa6b66d7af387c6d226190acc6ba2ccb8c711b335.jpg)
图2-3-36`,
    preview: `已知 4^x + 4^y = 2^x+1 + 2^y+1，求 p = 2^x + 2^y 的取值范围。`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-3-30-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `已知等式可化为 $(2^{x}-1)^{2}+(2^{y}-1)^{2}=2$ ,

令 $2^{x} = m, 2^{y} = n,$

于是 $(m-1)^{2}+(n-1)^{2}=2$ ，

所以题目等价于直线 $m+n=p$ 与圆 $(m-1)^{2}+(n-1)^{2}=2$ 有公共点，

结合图形分析, 得 $p \\in [0,4]$ .

本题有一个隐含的条件： $m > 0, n > 0$ 。上述解法忽视了这一条件，导致了点 $(m, n)$ 在整个圆 $(m - 1)^2 + (n - 1)^2 = 2$ 上移动。实际上，点 $(m, n)$ 是在优弧： $(m - 1)^2 + (n - 1)^2 = 2, m > 0, n > 0$ 上移动的。同样，结合正确图形，得 $p \\in (2, 4]$ 。`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-3-31",
    topicId: "topic-sec-2-3",
    title: `已知 A(-4,0), B(4,0), C(6,5)`,
    content: `已知 $A(-4,0), B(4,0), C(6,5)$ ，求点 $M$ ，使 $\\angle AMB$ 的正切值为 $\\frac{4}{3}$ ，且使 $|MC|$ 最大.`,
    preview: `已知 A(-4,0), B(4,0), C(6,5) ，求点 M ，使 ∠ AMB 的正切值为 4/3 ，且使 |MC| 最大.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-3-31-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `因 $\\angle AMB$ 为定值,所以点 $M$ 的轨迹是以 $AB$ 为弦的一个圆,其圆心在 $y$ 轴上.由圆心角和圆周角的度数关系,可得圆心 $D(0,3)$ ,半径 $r=|BD|=5$ ,于是点 $M$ 的轨迹方程为 $x^{2}+(y-3)^{2}=25$ .要使 $|MC|$ 最大,则直线 $MC$ 过圆心 $D$ ,此直线与圆的两个交点中离圆心较远的一个点即为点 $M$ ,这时直线 $MC$ 方程为 $y=\\frac{1}{3}x+3$ ,与圆方程联立,得 $M\\left(-\\frac{3\\sqrt{10}}{2},\\frac{3-\\sqrt{10}}{2}\\right)$ .

实际上，点 $M$ 的轨迹并不是完整的一个圆，它是 $x^{2} + (y - 3)^{2} = 25(y\\geqslant 0)$ 及 $x^{2} + (y+$ $3)^{2} = 25(y\\leqslant 0)$ 的两段优弧，当 $y\\leqslant 0$ 时，同理求得 $M^{\\prime}(-3, - 7)$ .比较 $\\mid M^{\\prime}C\\mid$ 与 $\\mid MC\\mid$ 的大小，可知 $\\mid M^{\\prime}C\\mid >\\mid MC\\mid$ .因此符合条件的点为 $M(-3, - 7)$

借助图形解决问题,我们应注意点、线位置的可变性,充分挖掘题目中的隐含条件,不仅要把图形画正确、画完整,而且还要把图形画得大,这样利于观察.不仅观察要仔细,而且要进行动态观察,正确把握临界位置,一定要与计算相结合.真正做到“数一形一数”的和谐统一.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-4-1",
    topicId: "topic-sec-2-4",
    title: `设不等式 2x - 1 > m(x^2 - 1) 对满足`,
    content: `设不等式 $2x - 1 > m(x^{2} - 1)$ 对满足 $|m|\\leqslant 2$ 的一切实数 $m$ 都成立，求实数 $x$ 的取值范围.`,
    preview: `设不等式 2x - 1 > m(x^2 - 1) 对满足 |m|≤ 2 的一切实数 m 都成立，求实数 x 的取值范围.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-4-1-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `令 $f(m) = -(x^{2} - 1)m + 2x - 1, m \\in [-2, 2]$ ,

则原不等式等价于 $f(m) > 0, m \\in [-2, 2]$ 恒成立.

由于 $f(m)$ 是关于 m 的一次函数或常数函数，

故有 $\\left\\{\\begin{aligned}2(1-x^{2})+2x-1&>0,\\\\ -2(1-x^{2})+2x-1&>0,\\end{aligned}\\right.$ 解得 $\\frac{\\sqrt{7}-1}{2}<x<\\frac{\\sqrt{3}+1}{2},$

从而实数的取值范围是 $\\{x\\left|\\frac{\\sqrt{7} - 1}{2} < x < \\frac{\\sqrt{3} + 1}{2}\\right.\\}$

评注 本题通过变更主元转化为关于 $m$ 的一次函数. 有些含参变量的方程或不等式, 参变量不易分离, 或者分离出来以后求解比较困难, 这时我们可以重新审视问题, 将主元与参变量进行换位思考, 从而简化问题的解法.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-4-2",
    topicId: "topic-sec-2-4",
    title: `已知 k R ,求方程 x^4 - 2kx^2 + k^2`,
    content: `已知 $k \\in  \\mathbf{R}$ ,求方程 \${x}^{4} - {2k}{x}^{2} + {k}^{2} + {2k} - 3 = 0$ 的实数 $x$ 的取值范围.`,
    preview: `已知 k R ,求方程 x^4 - 2kx^2 + k^2 + 2k - 3 = 0 的实数 x 的取值范围.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-4-2-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `把原方程化为关于 $k$ 的方程为：

$$
k ^ {2} + 2 (1 - x ^ {2}) k + x ^ {4} - 3 = 0,
$$

由 $k \\in R$ ，知 $\\Delta \\geqslant 0$ ，即 $4(1 - x^{2})^{2} - 4(x^{4} - 3) \\geqslant 0$ ，

解得 $-\\sqrt{2} \\leqslant x \\leqslant \\sqrt{2}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-4-3",
    topicId: "topic-sec-2-4",
    title: `如图 2-4-1 所示, 在直三棱柱`,
    content: `如图 2-4-1

![](images/48c0dd7dcb0b02999c3f0c1b1c2806b9d7bc1d873910a86b959b7f37092556dc.jpg) 所示, 在直三棱柱 $ABC-A_{1}B_{1}C_{1}$ 中, 底面为直角三角形, $\\angle ACB=90^{\\circ}, AC=6, BC=CC_{1}=\\sqrt{2}, P$ 是 $BC_{1}$ 上一动点, 则 $CP+PA_{1}$ 的最小值是 \\_\\_\\_\\_.`,
    preview: `如图 2-4-1 所示, 在直三棱柱 ABC-A_1B_1C_1 中, 底面为直角三角形, ∠ ACB=90°, AC=6, BC=CC_1=√2, P 是 B`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-4-3-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `连 $A_{1}B$ ，沿 $BC_{1}$ 将 $\\triangle CBC_{1}$ 展开，与 $\\triangle A_{1}BC_{1}$ 在同一个平面内，如图2-4-2所示，连 $A_{1}C$ ，则 $A_{1}C$ 的长度就是所求的最小值．通过计算可得

![](images/da49e4176b20d4c3057c6a2c98f6d06fa64bc5887194b126fc0366749cbf5012.jpg)

图2-4-1

$$
A B = A _ {1} B _ {1} = \\sqrt {3 8}, A _ {1} B = \\sqrt {4 0}, A _ {1} C _ {1} = 6, B C _ {1} = 2,
$$

所以 $\\angle A_{1}C_{1}B=90^{\\circ}$ , 又 $\\angle BC_{1}C=45^{\\circ}$ ,

所以 $\\angle A_{1}C_{1}C=135^{\\circ}$ .

![](images/48c0dd7dcb0b02999c3f0c1b1c2806b9d7bc1d873910a86b959b7f37092556dc.jpg)

图2-4-2

由余弦定理可求得 $A_{1}C=5\\sqrt{2}$ .

评注 本题把立体几何问题转化为平面几何问题,把沿表面两点的距离问题转化为平面上两点间的距离问题.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-4-4",
    topicId: "topic-sec-2-4",
    title: `如图 2-4-3 所示, 在正三棱柱`,
    content: `如图 2-4-3

![](images/d7ac7d5aaaa95476823a97c8c3bd108b656715686bf2f49c6574c1b912c11c1f.jpg) 所示, 在正三棱柱 $ABC-A_{1}B_{1}C_{1}$ 中, AB=1, 若二面角 $C-AB-C_{1}$ 的大小为 $60^{\\circ}$ , 则点 C 到平面 $ABC_{1}$ 的距离为 \\_\\_\\_\\_.`,
    preview: `如图 2-4-3 所示, 在正三棱柱 ABC-A_1B_1C_1 中, AB=1, 若二面角 C-AB-C_1 的大小为 60° , 则点 C 到平面 ABC_`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-4-4-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `设所求距离为 d，两次计算三棱锥 $C_{1}-ABC$ （即三棱锥 $C-ABC_{1}$ ）的体积，得

![](images/d7ac7d5aaaa95476823a97c8c3bd108b656715686bf2f49c6574c1b912c11c1f.jpg)

图2-4-3

$\\frac{1}{3} \\times \\frac{\\sqrt{3}}{4} \\times \\frac{3}{2} = \\frac{1}{3} \\times \\frac{1}{2} \\times 1 \\times \\sqrt{3} \\times h$ ，解得 $h = \\frac{3}{4}$ .

评注 本题将点到平面的距离问题转化为三棱锥的体积问题.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-4-5",
    topicId: "topic-sec-2-4",
    title: `已知数列 a_n,b_n 都是公差为1的等差数列，其首项分别为 a_1,b_1，且 a_1+ b_1 = 5,a_1`,
    content: `已知数列 $\\{a_{n}\\} ,\\{b_{n}\\}$ 都是公差为1的等差数列，其首项分别为 $a_1,b_1$ ，且 $a_1+$ $b_{1} = 5,a_{1},b_{1}\\in \\mathbf{Z}^{+}$ ，设 $c_{n} = a_{b_{n}}(n\\in \\mathbf{Z}^{+})$ ，则数列 $\\{c_n\\}$ 的前10项和等于 （）
A. 55

B. 70

C. 85

D. 100`,
    preview: `已知数列 都是公差为1的等差数列，其首项分别为 a_1,b_1 ，且 a_1+ b_1 = 5,a_1,b_1 Z^+ ，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-4-5-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `用特殊化策略. 设 $b_{1} = 1$ ，则 $a_{1} = a_{b_{1}} = 4$ . 从而 $b_{n} = n$ ，于是有

$$
c _ {n} = a _ {b _ {n}} = a _ {b _ {1}} + (b _ {n} - 1) \\cdot 1 = 4 + n - 1 = n + 3.
$$

$$
c _ {1} + c _ {2} + \\dots + c _ {1 0} = (1 + 2 + \\dots + 1 0) + 3 0 = 8 5.
$$

评注 本题根据选择题的特点,对 $b_{1}$ 赋予特殊值,求出数列 $\\{c_n\\}$ 的前10项和,从而排除错误的结果,选出符合题目要求的选项.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-4-6",
    topicId: "topic-sec-2-4",
    title: `记 maxa,b 为 a,b 两数的最大值, 当正数 x,y 变化时`,
    content: `记 $\\max\\{a,b\\}$ 为 a,b 两数的最大值, 当正数 x,y 变化时,
$t=\\max\\left\\{\\frac{1}{x},\\frac{1}{y},x^{2}+y^{2}\\right\\}$ 的最小值为\\_\\_\\_\\_.`,
    preview: `记 为 a,b 两数的最大值, 当正数 x,y 变化时, 的最小值为\\_\\_\\_\\_.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-4-6-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `由题意知: $t\\geqslant\\frac{1}{x},t\\geqslant\\frac{1}{y},t\\geqslant x^{2}+y^{2}$

所以 $3t \\geqslant \\frac{1}{x} + \\frac{1}{y} + x^2 + y^2$ .

又因为 $\\frac{1}{x}+\\frac{1}{y}+x^{2}+y^{2}\\geqslant\\frac{1}{x}+\\frac{1}{y}+2xy\\geqslant3\\sqrt[3]{\\frac{1}{x}\\cdot\\frac{1}{y}\\cdot2xy}=3\\sqrt[3]{2}$

所以 $3t \\geqslant 3\\sqrt[3]{2}$ , 即 $t \\geqslant \\sqrt[3]{2}$ .

所以，当正数 x, y 变化时， $t = \\max\\left\\{\\frac{1}{x}, \\frac{1}{y}, x^{2} + y^{2}\\right\\}$ 的最小值为 $\\sqrt[3]{2}$ .`,
      },
      {
        id: "prob-sec-2-4-6-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `由题意知: $t\\geqslant\\frac{1}{x},t\\geqslant\\frac{1}{y},t\\geqslant x^{2}+y^{2}$ ，所以 $t^{3}\\geqslant\\frac{1}{x}\\cdot\\frac{1}{y}\\cdot(x^{2}+y^{2})$ .

又 $\\frac{1}{x}\\cdot\\frac{1}{y}\\cdot(x^{2}+y^{2})\\geqslant\\frac{1}{x}\\cdot\\frac{1}{y}\\cdot2xy=2$ ，所以 $t^{3}\\geqslant2$ ，即 $t\\geqslant\\sqrt[3]{2}$ .

所以，当正数 x, y 变化时， $t = \\max\\left\\{\\frac{1}{x}, \\frac{1}{y}, x^{2} + y^{2}\\right\\}$ 的最小值为 $\\sqrt[3]{2}$ .`,
      },
      {
        id: "prob-sec-2-4-6-sol-2",
        title: `解法三`,
        method: "standard",
        steps: [],
        explanation: `由题意知 $t \\geqslant \\frac{1}{x}, t \\geqslant \\frac{1}{y}, t \\geqslant x^2 + y^2$ ，所以 $x \\geqslant \\frac{1}{t}, y \\geqslant \\frac{1}{t}, t \\geqslant x^2 + y^2$

所以 $t \\geqslant \\left(\\frac{1}{t}\\right)^2 + \\left(\\frac{1}{t}\\right)^2$ ，所以 $t^3 \\geqslant 2$ ，即 $t \\geqslant \\sqrt[3]{2}$ .

所以，当正数 x, y 变化时， $t = \\max\\left\\{\\frac{1}{x}, \\frac{1}{y}, x^{2} + y^{2}\\right\\}$ 的最小值为 $\\sqrt[3]{2}$ .

一般地，求 $t=\\max\\{x^{\\alpha_{1}},y^{\\alpha_{1}},x^{\\beta_{1}}+y^{\\beta_{2}}\\}$ 的最小值问题，我们通常有三种解决思路：

思路一 由题意知， $t \\geqslant x^{\\alpha_1}, t \\geqslant y^{\\alpha_1}, t \\geqslant x^{\\beta_1} + y^{\\beta_2}$ ，然后将三式相加，再利用基本不等式求解；

思路二 由题意知， $t \\geqslant x^{\\alpha_{1}}, t \\geqslant y^{\\alpha_{1}}, t \\geqslant x^{\\beta_{1}} + x^{\\beta_{2}}$ ，然后将三式相乘，再利用基本不等式求解；

思路三 由题意知， $t \\geqslant x^{\\alpha_1}, t \\geqslant y^{\\alpha_1}, t \\geqslant x^{\\beta_1} + y^{\\beta_2}$ ，由上述三式消去 $x$ 和 $y$ ，得到关于 $t$ 的不等式，再解出 $t$ 的范围.

如遇到求 $t=\\min\\{x^{\\alpha_{1}},y^{\\alpha_{1}},x^{\\beta_{1}}+y^{\\beta_{2}}\\}$ 的最大值问题,同样可以有类似的三种思路.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-4-7",
    topicId: "topic-sec-2-4",
    title: `如图 2-4-4 所示, 椭圆 E: x^2a^2 + y^2b^2 = 1 (a > b`,
    content: `如图 2-4-4 所示, 椭圆 $E: \\frac{x^{2}}{a^{2}} + \\frac{y^{2}}{b^{2}} = 1 (a > b > 0)$ 的左焦点为 $F_{1}$ , 右焦点为 $F_{2}$ , 离心率 $e = \\frac{1}{2}$ . 过点 $F_{1}$ 的直线交椭圆于 A、B 两点, 且 $\\triangle ABF_{2}$ 的周长为 8.
![](images/faee27d0d1b1155d34a81368033566a25c432d454e80a4d08adbe10635d7723f.jpg)

图2-4-4

(1)求椭圆 E 的方程.

(2)设动直线 $l: y = kx + m$ 与椭圆 E 有且只有一个公共点 P，且

与直线 $x = 4$ 相交于点 $Q$ . 试探究: 在坐标平面内是否存在定点 $M$ , 使得以 $PQ$ 为直径的圆恒过点 $M$ ? 若存在, 求出点 $M$ 的坐标; 若不存在, 说明理由.`,
    preview: `如图 2-4-4 所示, 椭圆 的左焦点为 F_1 , 右焦点为 F_2 , 离心率 e = 1/2 . 过点 F_1 的直线交椭圆于 A、`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-4-7-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1)只需根据 $\\triangle ABF_{2}$ 的周长为8的条件,结合椭圆定义即可求得椭圆方程为 $\\frac{x^{2}}{4}+\\frac{y^{2}}{3}=1$ .

(2)通过联立直线与椭圆方程，

即由 $\\left\\{\\begin{aligned}y&=kx+m,\\\\ \\frac{x^{2}}{4}+\\frac{y^{2}}{3}&=1\\end{aligned}\\right.$ 得 $(4k^{2}+3)x^{2}+8kmx+4m^{2}-12=0.$

因为动直线 l 与椭圆 E 有且只有一个公共点 $P(x_{0}, y_{0})$ ,

所以 $m \\neq 0, \\Delta = 0$ ，即 $64k^{2}m^{2} - 4(4k^{2} + 3)(4m^{2} - 12) = 0$ ，

化简得 $4k^{2}-m^{2}+3=0.$ ①

此时 $x_{0}=-\\frac{4km}{4k^{2}+3}=-\\frac{4k}{m}, y_{0}=kx_{0}+m=\\frac{3}{m}$ ，所以 $P\\left(-\\frac{4k}{m},\\frac{3}{m}\\right)$ .

由 $\\left\\{\\begin{aligned}x=4,\\\\ y=kx+m\\end{aligned}\\right.$ 得 $Q(4,4k+m).$

探求点 M 的存在性,有如下几种解法:`,
      },
      {
        id: "prob-sec-2-4-7-sol-1",
        title: `解法一`,
        method: "geometric",
        steps: [],
        explanation: `假设平面内存在点 M 满足条件, 由图形对称性知, 点 M 必在 x 轴上.

设 $M(x_{1},0)$ ，则 $\\overrightarrow{MP} \\cdot \\overrightarrow{MQ} = 0$ 对满足①式的 m, k 恒成立.

因为 $\\overrightarrow{MP} = \\left(-\\frac{4k}{m} -x_1,\\frac{3}{m}\\right),\\overrightarrow{MQ} = (4 - x_1,4k + m)$

由 $\\overrightarrow{MP}\\cdot\\overrightarrow{MQ}=0$ ，得 $-\\frac{16k}{m}+\\frac{4kx_{1}}{m}-4x_{1}+x_{1}^{2}+\\frac{12k}{m}+3=0$

整理得 $(4x_{1}-4)\\frac{k}{m}+x_{1}^{2}-4x_{1}+3=0.$ ②

由于②式对满足①式的 m, k 恒成立，

所以 $4x_{1}-4=0$ 且 $x_{1}^{2}-4x_{1}+3=0$ ，解得 $x_{1}=1$

故存在定义 $M(1,0)$ ，使得以 PQ 为直径的圆恒过点 M.`,
      },
      {
        id: "prob-sec-2-4-7-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `以 PQ 为直径的圆中, 圆心为 $\\left(\\frac{4-\\frac{4k}{m}}{2}, \\frac{\\frac{3}{m}+4k+m}{2}\\right)$ ,

半径 $r = \\frac{|PQ|}{2} = \\frac{1}{2}\\sqrt{\\left(-\\frac{4k}{m} - 4\\right)^2 + \\left[\\frac{3}{m} - (4k + m)\\right]^2},$

所以圆方程为 $\\left(x-\\frac{4-\\frac{4k}{m}}{2}\\right)^{2}+\\left(y-\\frac{\\frac{3}{m}+4k+m}{2}\\right)^{2}=\\frac{1}{4}\\times\\left\\{\\left(4+\\frac{4k}{m}\\right)^{2}+\\left[\\frac{3}{m}-(4k+m)\\right]^{2}\\right\\}$

令 $y = 0$ ，得 $x^{2} - \\left(4 - \\frac{4k}{m}\\right)x + 3 - \\frac{4k}{m} = 0\\Rightarrow \\left[x - \\left(3 - \\frac{4k}{m}\\right)\\right](x - 1) = 0,$

所以 $x = 1$ 或 $x = 3 - \\frac{4k}{m}$ , 所以存在定点 $M(1,0)$ , 使得以 $PQ$ 为直径的圆恒过点 $M$ .`,
      },
      {
        id: "prob-sec-2-4-7-sol-3",
        title: `解法三`,
        method: "geometric",
        steps: [],
        explanation: `假设平面内存在点 M 满足条件, 由图形对称性知, 点 M 必在 x 轴上.

取 $k = 0, m = \\sqrt{3}$ , 此时 $P(0, \\sqrt{3}), Q(4, \\sqrt{3})$ , 以 $PQ$ 为直径的圆为

$(x-2)^{2}+(y-\\sqrt{3})^{2}=4$ , 交 x 轴于点 $M_{1}(1,0)$ , $M_{2}(3,0)$ ,

取 $k = -\\frac{1}{2}, m = 2$ ，此时 $P\\left(1, \\frac{3}{2}\\right), Q(4,0)$ ，

以 PQ 为直径的圆为 $\\left(x-\\frac{5}{2}\\right)^{2}+\\left(y-\\frac{3}{4}\\right)^{2}=\\frac{45}{16}$ ，交 x 轴于点 $M_{1}(1,0)$ ， $M_{2}(4,0)$ .

所以若符合条件的点 M 存在, 则点 M 的坐标必为 $(1,0)$ .

以下证明 $M(1,0)$ 就是满足条件的点.

因为点 M 的坐标为 $(1,0)$ ,

所以 $\\overrightarrow{MP}=\\left(-\\frac{4k}{m}-1,\\frac{3}{m}\\right),\\overrightarrow{MQ}=(3,4k+m)$ ,

从而 $\\overrightarrow{MP}\\cdot\\overrightarrow{MQ}=-\\frac{12k}{m}-3+\\frac{12k}{m}+3=0,$

故恒有 $\\overrightarrow{MP}\\perp\\overrightarrow{MQ}$ ，即存在定点 $M(1,0)$ ，使得以PQ为直径的圆恒过定点M.`,
      },
      {
        id: "prob-sec-2-4-7-sol-5",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `直接假设点 $P$ 存在,依据条件得出点 $P$ 的坐标.但在动直线有两个参变量的前提下进行推理运算,显然需要较强的技巧,很多学生是无法完成的.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-4-8",
    topicId: "topic-sec-2-4",
    title: `设 A、B、C、D 是半径为 r 的球面上的四点`,
    content: `设 A、B、C、D 是半径为 r 的球面上的四点，且满足 $AB \\perp AC, AD \\perp AC, AB \\perp AD$ ，则 $S_{\\triangle ABC} + S_{\\triangle ABD} + S_{\\triangle ACD}$ 的最大值是（）
A. $r^2$

B. $2r^{2}$

C. $3r^{2}$

D. $4{r}^{2}$`,
    preview: `设 A、B、C、D 是半径为 r 的球面上的四点，且满足 AB AC, AD AC, AB AD ，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-4-8-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `把三棱锥补成一个球内接长方体, 则 $AB^{2} + AC^{2} + AD^{2} = (2r)^{2}$ ,

所以 $(AB^{2}+AC^{2})+(AB^{2}+AD^{2})+(AC^{2}+AD^{2})=8r^{2}$

即 $2AB \\cdot AC + 2AB \\cdot AD + 2AC \\cdot AD \\leqslant 8r^{2}$ ,

化简得 $\\frac{1}{2}AB\\cdot AC+\\frac{1}{2}AB\\cdot AD+\\frac{1}{2}AC\\cdot AD\\leqslant2r^{2}$

由面积公式, 得 $S_{\\triangle ABC} + S_{\\triangle ABD} + S_{\\triangle ACD} \\leqslant 2r^{2}$ , 故选 B.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-4-9",
    topicId: "topic-sec-2-4",
    title: `如图 2-4-5 所示, 在多面体 ABCDEF 中`,
    content: `如图 2-4-5 所示, 在多面体 ABCDEF 中, 已知面 ABCD 是边长为 3 的正方形, $EF \\parallel AB$ , $EF = \\frac{3}{2}$ , EF 与面 AC 的距离为 2, 则该多面体的体积是 ( )
![](images/346ba67d705ff9d0f7c48ff62e5e3ff28092a92197be4add23ef6c3e4fc17acf.jpg)

图2-4-5

A. $\\frac{9}{2}$

B. 5

C. 6

D. $\\frac{15}{2}$`,
    preview: `如图 2-4-5 所示, 在多面体 ABCDEF 中, 已知面 ABCD 是边长为 3 的正方形, EF AB , EF = 3/2 , EF 与面 AC 的距`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-4-9-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `将图形特殊化,如图 2-4-6 所示,使 $ED \\perp$ 平面 ABCD,且使 ED=2. 连 AF、DF. 则 $EF \\perp$ 面 ADE, $\\triangle ADE$ 为直角三角形.

$$
S _ {\\triangle A D E} = \\frac {1}{2} \\cdot A D \\cdot D E = \\frac {1}{2} \\times 3 \\times 2 = 3.
$$

于是 $V_{F-ADE}=\\frac{1}{3}EF\\cdot S_{\\triangle ADE}=\\frac{1}{3}\\times\\frac{3}{2}\\times3=\\frac{3}{2}$ ,

$$
V _ {F - A B C D} = \\frac {1}{3} D E \\cdot S _ {\\mathrm{正方形} A B C D} = \\frac {1}{3} \\times 2 \\times 3 ^ {2} = 6.
$$

所以 $V_{多面体ABCDEF}=\\frac{3}{2}+6=\\frac{15}{2}$ .

![](images/2d71cc31df58d2d97dcb3f597c48f1cebfb6337563f6170a525cb7a72863bb58.jpg)

图2-4-6

答案选D.

评注 题目提供的图形,除底面是正方形以外,其他没有任何特殊之处.如果直接用割补法求解,难度和计算量会增加好几倍.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-4-10",
    topicId: "topic-sec-2-4",
    title: `设 AB 是椭圆 x^2a^2 + y^2b^2 = 1 (a > b > 0) 的长轴，若`,
    content: `设 AB 是椭圆 $\\frac{x^{2}}{a^{2}} + \\frac{y^{2}}{b^{2}} = 1 (a > b > 0)$ 的长轴，若把 AB 100 等分，过每个分点作 AB 的垂线，交椭圆的上半部分于 $P_{1}, P_{2}, \\cdots, P_{99}, F_{1}$ 为椭圆的左焦点，则 $|F_{1}A| + |F_{1}P_{1}| + |F_{1}P_{2}| + \\cdots + |F_{1}P_{99}| + |F_{1}B|$ 的值是（）
A. \${98a}$

B. $99a$

C. \${100a}$

D. \${101a}$`,
    preview: `设 AB 是椭圆 的长轴，若把 AB 100 等分，过每个分点作 AB 的垂线，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-4-10-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `由椭圆的定义知 $\\left|F_{1}P_{i}\\right|+\\left|F_{2}P_{i}\\right|=2a(i=1,2,\\cdots,99)$ ,

所以 $\\sum_{i=1}^{99} (|F_1 P_i| + |F_2 P_i|) = 2a \\times 99 = 198a$ .

由题意知 $P_{1}, P_{2}, \\cdots, P_{99}$ 关于 y 轴呈对称分布，

所以 $\\sum_{i=1}^{99} (|F_1P_i|) = \\frac{1}{2}\\sum_{i=1}^{99} (|F_1P_i| + |F_2P_i|) = 99a$ .

又因为 $|F_{1}A|+|F_{1}B|=2a$ ，故所求的值为101a.`,
      },
      {
        id: "prob-sec-2-4-10-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `$\\left|F_{1}A\\right|+\\left|F_{1}P_{1}\\right|+\\left|F_{1}P_{2}\\right|+\\cdots+\\left|F_{1}P_{99}\\right|+\\left|F_{1}B\\right|$

$$
\\begin{array}{l} = (a + e x _ {A}) + (a + e x _ {1}) + \\dots + (a + e x _ {9 9}) + (a + e x _ {B}) \\\\ = 1 0 1 a + e (x _ {A} + x _ {1} + x _ {2} \\dots + x _ {9 9} + x _ {B}) \\\\ = 1 0 1 a. (A, P _ {1}, P _ {2}, \\dots , P _ {9 9}, B \\text {关于} y \\text {轴呈对称分布}) \\\\ \\end{array}
$$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-4-11",
    topicId: "topic-sec-2-4",
    title: `已知正项数列 a_n 满足: a_1=1`,
    content: `已知正项数列 $\\{a_{n}\\}$ 满足: $a_{1}=1$ ，且 $a_{n+1}=\\frac{a_{n}}{2^{n}\\cdot a_{n}+1}(n\\in\\mathbf{Z}^{+})$ ， $a_{k}$ 是数列 $\\{a_{n}\\}$ 的第 k 项，则 $\\sum_{k=1}^{n}\\frac{2^{k}-1}{k^{2}+k}\\cdot a_{k}=$ \\_\\_\\_\\_.`,
    preview: `已知正项数列 满足: a_1=1 ，且 a_n+1=a_n{2^n· a_n+1}(n^+) ， a_k 是数列 的第 k 项，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-4-11-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `由 $a_{n+1} = \\frac{a_n}{2^n \\cdot a_n + 1}$ 得 $\\frac{1}{a_{n+1}} = \\frac{1}{a_n} + 2^n$ , 即 $\\frac{1}{a_{n+1}} - \\frac{1}{a_n} = 2^n$ ,

因此，有 $\\frac{1}{a_n} = \\left(\\frac{1}{a_n} -\\frac{1}{a_{n - 1}}\\right) + \\left(\\frac{1}{a_{n - 1}} -\\frac{1}{a_{n - 2}}\\right) + \\dots +\\left(\\frac{1}{a_2} -\\frac{1}{a_1}\\right) + \\frac{1}{a_1}$

$$
\\begin{array}{l} = 2 ^ {n - 1} + 2 ^ {n - 2} + \\dots + 2 ^ {1} + 1 \\\\ = \\frac {2 ^ {n} - 1}{2 - 1} = 2 ^ {n} - 1, \\\\ \\end{array}
$$

即 $a_{n}=\\frac{1}{2^{n}-1}.$

所以 $\\sum_{k=1}^{n} \\frac{2^k - 1}{k^2 + k} \\cdot \\frac{1}{2^k - 1} = \\sum_{k=1}^{n} \\frac{1}{k(k+1)} = \\sum_{k=1}^{n} \\left( \\frac{1}{k} - \\frac{1}{k+1} \\right) = 1 - \\frac{1}{n+1} = \\frac{n}{n+1}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-4-12",
    topicId: "topic-sec-2-4",
    title: `三个同学对问题“关于 x 的不等式 x^2 + 25 + |x^3 - 5x^2| ≥ ax 在[1,12]上恒成立`,
    content: `三个同学对问题“关于 $x$ 的不等式 $x^{2} + 25 + |x^{3} - 5x^{2}| \\geqslant ax$ 在[1,12]上恒成立，求实数 $a$ 的取值范围”提出各自的解题思路.
甲说：“只需不等式左边的最小值不小于右边的最大值”.

乙说：“把不等式变形为左边含变量 x 的函数，右边仅含常数，求函数的最值”.

丙说：“把不等式两边看成关于 x 的函数，作出函数图像”.

参考上述解题思路,你认为他们所讨论的问题的正确结论,即 a 的取值范围是\\_\\_\\_\\_.`,
    preview: `三个同学对问题“关于 x 的不等式 在[1,12]上恒成立，求实数 a 的取值范围”提出各自的解题思路. 甲说：“只需不等式左边的最小值不小于右边的最大值”.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-4-12-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `由 $x^{2} + 25 + |x^{3} - 5x^{2}| \\geqslant ax, 1 \\leqslant x \\leqslant 12$ 得

$$
a \\leqslant x + \\frac {2 5}{x} + | x ^ {2} - 5 x |,
$$

而 $x - 2\\sqrt{x\\cdot\\frac{25}{x}} +\\frac{25}{x}\\geqslant 0,x + \\frac{25}{x}\\geqslant 2\\sqrt{x\\cdot\\frac{25}{x}} = 10,$

等号当且仅当 $x=5\\in[1,12]$ 时成立，

所以， $a \\leqslant \\left[x + \\frac{25}{x} + |x^2 - 5x|\\right]_{\\min} = 10$ ，等号当且仅当 $x = 5 \\in [1, 12]$ 时成立，

故填 $(-∞,10]$ .

评注 恒成立问题是高考考试的热点问题,常将其转化为最值问题去处理.不等式有解、无解与恒成立的关系如下 $(f(x)$ 有最大值或最小值):

$a>f(x)$ 有解 $\\Leftrightarrow a>f_{\\min}(x)$ ; $a<f(x)$ 有解 $\\Leftrightarrow a<f_{\\max}(x)$ .

$a > f(x)$ 无解 $\\Leftrightarrow a\\leqslant f_{\\min}(x);a <   f(x)$ 无解 $\\Leftrightarrow a\\geqslant f_{\\max}(x)$

$a > f(x)$ 恒成立 $\\Leftrightarrow a > f_{\\max}(x); a < f(x)$ 恒成立 $\\Leftrightarrow a < f_{\\min}(x)$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-4-13",
    topicId: "topic-sec-2-4",
    title: `设椭圆方程为 x^2+y^24=1`,
    content: `设椭圆方程为 $x^{2}+\\frac{y^{2}}{4}=1$ ，过点 $M(0,1)$ 的直线 l 交椭圆于点 A、B，O 是坐标原点，点 P 满足 $\\overrightarrow{OP}=\\frac{1}{2}(\\overrightarrow{OA}+\\overrightarrow{OB})$ ，点 N 的坐标为 $\\left(\\frac{1}{2},\\frac{1}{2}\\right)$ ，当 l 绕点 M 旋转时，求：
(1) 动点 P 的轨迹方程；

(2) $|\\overrightarrow{NP}|$ 的最小值与最大值.

(1)解法一 当直线 l 的斜率存在时, 可设直线 l 的方程为 $y = kx + 1$ .

记 $A(x_{1},y_{1})$ 、 $B(x_{2},y_{2})$ ，由题设可得点 A、B 的坐标 $(x_{1},y_{1})$ 、 $(x_{2},y_{2})$ 是以下方程组的解.

$$
\\left\\{ \\begin{array}{l} y = k x + 1, \\\\ x ^ {2} + \\frac {y ^ {2}}{4} = 1. \\end{array} \\right. \\tag {①}
$$

将①代入②并化简,得

$$
(4 + k ^ {2}) x ^ {2} + 2 k x - 3 = 0,
$$

所以 $\\left\\{\\begin{aligned}x_{1}+x_{2}&=-\\frac{2k}{4+k^{2}},\\\\ y_{1}+y_{2}&=\\frac{8}{4+k^{2}}.\\end{aligned}\\right.$

于是 $\\overrightarrow{OP} = \\frac{1}{2} (\\overrightarrow{OA} +\\overrightarrow{OB}) = \\left(\\frac{x_1 + x_2}{2},\\frac{y_1 + y_2}{2}\\right) = \\left(\\frac{-k}{4 + k^2},\\frac{4}{4 + k^2}\\right).$

设点 P 的坐标为 $(x, y)$ ，则 $\\left\\{\\begin{aligned} x &= \\frac{-k}{4 + k^{2}}, \\\\ y &= \\frac{4}{4 + k^{2}}.\\end{aligned}\\right.$

消去参数 k，得 $4x^{2} + y^{2} - y = 0$ .
③

当 k 不存在时，A、B 中点为坐标原点 $(0,0)$ ，也满足方程③，

所以点 P 的轨迹方程为 $4x^{2}+y^{2}-y=0$ .`,
    preview: `设椭圆方程为 x^2+y^24=1 ，过点 M(0,1) 的直线 l 交椭圆于点 A、B，O 是坐标原点，点 P 满足 →OP=1/2(→OA+→OB) ，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-4-13-sol-0",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `设点 $P$ 的坐标为 $(x, y)$ ，因 $A(x_1, y_1), B(x_2, y_2)$ 在椭圆上，所以

$$
x _ {1} ^ {2} + \\frac {y _ {1} ^ {2}}{4} = 1, \\tag {④}
$$

$$
x _ {2} ^ {2} + \\frac {y _ {2} ^ {2}}{4} = 1. \\tag {⑤}
$$

④-⑤得 $x_{1}^{2} - x_{2}^{2} + \\frac{1}{4} (y_{1}^{2} - y_{2}^{2}) = 0,$

所以 $(x_{1} - x_{2})(x_{1} + x_{2}) + \\frac{1}{4} (y_{1} - y_{2})(y_{1} + y_{2}) = 0.$

当 $x_{1}\\neq x_{2}$ 时，有 $x_{1} + x_{2} + \\frac{1}{4} (y_{1} + y_{2})\\cdot \\frac{y_1 - y_2}{x_1 - x_2} = 0.$ ⑥

并且 $\\left\\{\\begin{aligned}x&=\\frac{x_{1}+x_{2}}{2},\\\\ y&=\\frac{y_{1}+y_{2}}{2},\\\\ \\frac{y-1}{x}&=\\frac{y_{1}-y_{2}}{x_{1}-x_{2}}.\\end{aligned}\\right.$ ⑦

将⑦代入⑥并整理，得 $4x^{2} + y^{2} - y = 0.$ ⑧

当 $x_{1} = x_{2}$ 时，点 $A, B$ 的坐标为 $(0,2), (0,-2)$ ，

这时点 P 的坐标为 $(0,0)$ ，也满足⑧，

所以点 P 的轨迹方程为 $\\frac{x^{2}}{\\frac{1}{16}} + \\frac{\\left(y - \\frac{1}{2}\\right)^{2}}{\\frac{1}{4}} = 1.$

(2)由点 P 的轨迹方程知 $x^{2} \\leqslant \\frac{1}{16}$ ，即 $-\\frac{1}{4} \\leqslant x \\leqslant \\frac{1}{4}$ ，

$$
| \\overrightarrow {N P} | ^ {2} = \\left(x - \\frac {1}{2}\\right) ^ {2} + \\left(y - \\frac {1}{2}\\right) ^ {2} = \\left(x - \\frac {1}{2}\\right) ^ {2} + \\frac {1}{4} - 4 x ^ {2} = - 3 \\left(x + \\frac {1}{6}\\right) ^ {2} + \\frac {7}{1 2},
$$

所以，当 $x = \\frac{1}{4}$ 时， $|\\overrightarrow{NP}|$ 取得最小值，最小值为 $\\frac{1}{4}$ ，

当 $x = -\\frac{1}{6}$ 时， $\\mid \\overrightarrow{NP}\\mid$ 取得最大值，最大值为 $\\frac{\\sqrt{21}}{6}$

评注 第(1)小题中的则是巧用“点差法”,将求 $|\overrightarrow{NP}|$ 的最值问题转化为二次函数在限定区间上的最值问题.有必要提醒的是,不要忽略直线斜率不存在的情形.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-5-1",
    topicId: "topic-sec-2-5",
    title: `已知函数 f(x)=ax^2+2ax+4(a>0)`,
    content: `已知函数 $f(x)=ax^{2}+2ax+4(a>0)$ ，若 $x_{1}<x_{2}, x_{1}+x_{2}=0$ ，则（）
A. $f(x_{1}) <   f(x_{2})$

B. $f(x_{1}) = f(x_{2})$

C. $f(x_{1}) > f(x_{2})$

D. $f(x_{1})$ 与 $f(x_{2})$ 的大小不能确定`,
    preview: `已知函数 f(x)=ax^2+2ax+4(a>0) ，若 x_1<x_2, x_1+x_2=0 ，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-5-1-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `$f(x_{1}) - f(x_{2}) = (ax_{1}^{2} + 2ax_{1} + 4) - (ax_{2}^{2} + 2ax_{2} + 4)$

$$
= a (x _ {1} ^ {2} - x _ {2} ^ {2}) + 2 a (x _ {1} - x _ {2}) = a (x _ {1} - x _ {2}) (x _ {1} + x _ {2} + 2)
$$

$$
= 2 a (x _ {1} - x _ {2}) <   0,
$$

故 $f(x_{1}) < f(x_{2})$`,
      },
      {
        id: "prob-sec-2-5-1-sol-1",
        title: `解法二`,
        method: "geometric",
        steps: [],
        explanation: `函数 $f(x) = ax^{2} + 2ax + 4 (a > 0)$ ，二次函数的图像开口向上，对称轴为 $x = -1, a > 0$ ，故 $x_{1} + x_{2} = 0, x_{1}$ 与 $x_{2}$ 的中点为 $0, x_{1} < x_{2}$ ，所以 $x_{2}$ 到对称轴的距离大于 $x_{1}$ 到对称轴的距离，所以 $f(x_{1}) < f(x_{2})$ ，选A.

评注 在比较实数大小的过程中,要遵循异中求同,即先将这些数的部分因式化成相同的部分,再去比较它们剩余部分的规律.一般地,在数的大小比较中,常用的方法有:(1)作差比较法和作商比较法,前者和零比较,后者和1比较大小;(2)找中间量,往往是1,在这些数中,有的比1大,有的比1小;(3)计算所有数的值;(4)选用数形结合的方法,画出相应的图形;(5)利用函数的单调性;等等.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-5-2",
    topicId: "topic-sec-2-5",
    title: `如图 2-5-1 所示, 已知圆 O 的半径为 1`,
    content: `如图 2-5-1 所示, 已知圆 O 的半径为 1, PA, PB 为该圆的两条切线, A, B 为两切点, 那么 $\\overrightarrow{PA} \\cdot \\overrightarrow{PB}$ 的最小值为 ( )

![](images/1b983c00070bdb91756c5081c0f8416d9d8a615acb3fa2d0bef2be21d726d2c4.jpg)
A. $-4+\\sqrt{2}$

B. $-3+\\sqrt{2}$

C. $-4+2\\sqrt{2}$

D. $-3+2\\sqrt{2}$`,
    preview: `如图 2-5-1 所示, 已知圆 O 的半径为 1, PA, PB 为该圆的两条切线, A, B 为两切点, 那么 →PA · →PB 的最小值为 ( ) A.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-5-2-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `建立距离的目标函数, 设 $\\angle APO = \\theta, |\\overrightarrow{OP}| = d$ ,

则 $|\\overrightarrow{PA}|^2 = d^2 -1,\\sin \\theta = \\frac{1}{d} (d > 1).$

所以 $\\overrightarrow{PA} \\cdot \\overrightarrow{PB} = |\\overrightarrow{PA}| |\\overrightarrow{PB}|\\cos 2\\theta = |\\overrightarrow{PA}|^2 (1 - 2\\sin^2\\theta)$

$$
= (d ^ {2} - 1) \\left(1 - \\frac {2}{d ^ {2}}\\right) = d ^ {2} + \\frac {2}{d ^ {2}} - 3 \\geqslant 2 \\sqrt {2} - 3.
$$

答案选 D.`,
      },
      {
        id: "prob-sec-2-5-2-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `如图 2-5-2 所示, 建立坐标的目标函数, 以原点为圆心建立直角坐标系, 设 P 点在 x 轴正半轴上, 设坐标 $P(x_{0}, 0)(x_{0} > 1)$ , 又 $A(x, y)$ , 则由对称性和 $B(x, -y)$ , 可得

![](images/184641c2507549ca13f382a6f0a804393f40ebbb8e24edb5cf58a60513adb00d.jpg)

图2-5-1

![](images/1b983c00070bdb91756c5081c0f8416d9d8a615acb3fa2d0bef2be21d726d2c4.jpg)

图2-5-2

$$
\\overrightarrow {P A} = (x - x _ {0}, y), \\overrightarrow {P B} = (x - x _ {0}, - y), \\overrightarrow {O A} = (x, y).
$$

又因为 $\\overrightarrow{OA}\\perp\\overrightarrow{PA}$ ，所以 $\\overrightarrow{OA}\\cdot\\overrightarrow{PA}=0,(x-x_{0})x+y^{2}=0.$

结合 $x^{2}+y^{2}=1$ ，可得 $x_{0}x=1$ 。

所以 $\\overrightarrow{PA} \\cdot \\overrightarrow{PB} = (x - x_0)^2 - y^2 = 2x^2 + \\frac{1}{x^2} - 3 \\geqslant 2\\sqrt{2} - 3.$`,
      },
      {
        id: "prob-sec-2-5-2-sol-2",
        title: `解法三`,
        method: "standard",
        steps: [],
        explanation: `建立角的目标函数, 设 $\\left|\\overrightarrow{PA}\\right|=x,\\angle APO=\\theta$ , 则 $x=\\frac{1}{\\tan\\theta}$ .

$$
\\overrightarrow {P A} \\cdot \\overrightarrow {P B} = x ^ {2} \\cos 2 \\theta = \\frac {\\cos 2 \\theta}{\\tan^ {2} \\theta} = \\frac {(1 - 2 \\sin^ {2} \\theta) (1 - \\sin^ {2} \\theta)}{\\sin^ {2} \\theta}
$$

$$
= 2 \\sin^ {2} \\theta + \\frac {1}{\\sin^ {2} \\theta} - 3 \\geqslant 2 \\sqrt {2} - 3.
$$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-5-3",
    topicId: "topic-sec-2-5",
    title: `函数 f(x) = √x - 3 + √12 - 3x`,
    content: `函数 $f(x) = \\sqrt{x - 3} + \\sqrt{12 - 3x}$ 的值域为 （）
A. $[1, \\sqrt{2}]$

B. $[1, \\sqrt{3}]$

C. $\\left[1,\\frac{3}{2}\\right]$

D. $[1,2]$`,
    preview: `函数 f(x) = √x - 3 + √12 - 3x 的值域为 （） A. [1, √2] B. [1, √3] C. [1,3/2] D. [1,2]`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-5-3-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `$f(x)$ 的定义域为 $3 \\leqslant x \\leqslant 4$ ，则 $0 \\leqslant x - 3 \\leqslant 1$ ，令 $x - 3 = \\sin^{2}\\theta, 0 \\leqslant \\theta \\leqslant \\frac{\\pi}{2}$

则 $f(x)=\\sin\\theta+\\sqrt{3(1-\\sin^{2}\\theta)}=\\sin\\theta+\\sqrt{3}\\cos\\theta=2\\sin\\left(\\theta+\\frac{\\pi}{3}\\right)$ .

因 $\\frac{\\pi}{3}\\leqslant\\theta+\\frac{\\pi}{3}\\leqslant\\frac{5\\pi}{6}$ ，则 $\\frac{1}{2}\\leqslant\\sin\\left(\\theta+\\frac{\\pi}{3}\\right)\\leqslant1,1\\leqslant2\\sin\\left(\\theta+\\frac{\\pi}{3}\\right)\\leqslant2.$

故选 D.

评注 本题也可由柯西不等式得最大值2.

$$
f ^ {2} (x) = (\\sqrt {x - 3} + \\sqrt {3} \\times \\sqrt {4 - x}) ^ {2} \\leqslant (1 + 3) [ (x - 3) + (4 - x) ] = 4,
$$

所以 $f(x) \\leqslant 2$ ，当 $x = \\frac{13}{4}$ 时取等号.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-5-4",
    topicId: "topic-sec-2-5",
    title: `已知椭圆 C_1:x^2{m^2}+y^2=1(m>1)`,
    content: `已知椭圆 $C_{1}:\\frac{x^{2}}{m^{2}}+y^{2}=1(m>1)$ 与双曲线 $C_{2}:\\frac{x^{2}}{n^{2}}-y^{2}=1(n>0)$ 的焦点重合， $e_{1},e_{2}$ 分别为 $C_{1},C_{2}$ 的离心率，则
A. $m > n$ 且 $e_1e_2 > 1$

B. m > n 且 $e_{1}e_{2} < 1$

C. m<n 且 $e_{1}e_{2}>1$

D. m<n 且 $e_{1}e_{2}<1$`,
    preview: `已知椭圆 C_1:x^2{m^2}+y^2=1(m>1) 与双曲线 C_2:x^2{n^2}-y^2=1(n>0) 的焦点重合，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-5-4-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `步骤一:首先探究 m, n 的大小关系.`,
      },
      {
        id: "prob-sec-2-5-4-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `因为两曲线焦点重合,所以它们的半焦距相等,故 $m^{2}-1=n^{2}+1$ , 即 $m^{2}=n^{2}+2$ , 解得 m>n.`,
      },
      {
        id: "prob-sec-2-5-4-sol-2",
        title: `解法二`,
        method: "geometric",
        steps: [],
        explanation: `设椭圆与双曲线的公共半焦距为 c. 则: m 的几何意义是椭圆的长半轴, 故 m >c; n 的几何意义是双曲线的实半轴, 故 c >n. 于是 m >n.`,
      },
      {
        id: "prob-sec-2-5-4-sol-3",
        title: `解法三`,
        method: "standard",
        steps: [],
        explanation: `设 P 为椭圆与双曲线在第一象限的公共点, $F_{1}, F_{2}$ 为它们的公共焦点.

则 $2m = |PF_{1}| + |PF_{2}| > |PF_{1}|$ , $2n = |PF_{1}| - |PF_{2}| < |PF_{1}|$ , 故 m > n.`,
      },
      {
        id: "prob-sec-2-5-4-sol-5",
        title: `解法二`,
        method: "geometric",
        steps: [],
        explanation: `是几何角度,它是数学本质化的体现,侧重于数学概念的“本质理解”.

步骤二:探究 $e_{1}e_{2}$ 与 1 的大小关系.`,
      },
      {
        id: "prob-sec-2-5-4-sol-6",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `由离心率的定义知: $e_{1}^{2}=1-\\frac{1}{m^{2}},e_{2}^{2}=1+\\frac{1}{n^{2}}$ ，所以 $m^{2}=\\frac{1}{1-e_{1}^{2}},n^{2}=\\frac{1}{e_{2}^{2}-1}$ .

由 $m^2 = n^2 + 2$ 知 $\\frac{1}{1 - e_1^2} = \\frac{1}{e_2^2 - 1} + 2$ ，即 $2e_1^2 e_2^2 = e_2^2 + e_1^2 > 2e_1e_2$ ，所以 $e_1e_2 > 1$ ，得证.

评注 本解法运用方程思想,从两曲线共焦点出发,先得到 m,n 的一个等量关系,然后利用此等式穿针引线得到关于 $e_{1},e_{2}$ 的等量关系式,再利用均值不等式实现了等与不等之间的转化,得到 $e_{1}e_{2}$ 的一元二次不等式,化简后便可得到目标问题的解.`,
      },
      {
        id: "prob-sec-2-5-4-sol-8",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `知, $m^{2}=\\frac{1}{1-e_{1}^{2}},n^{2}=\\frac{1}{e_{2}^{2}-1}$ ，结合m>n得 $\\frac{1}{1-e_{1}^{2}}>\\frac{1}{e_{2}^{2}-1}$

即 $e_{1}^{2}+e_{2}^{2}>2$ ，此不等式对满足条件的任意 $e_{1}, e_{2}$ 都成立，

所以 $(e_{1}^{2}+e_{2}^{2})_{\\min}=2e_{1}e_{2}>2$ ，即 $e_{1}e_{2}>1$ ，得证.

评注 本解法建立在 m, n 不等关系的基础上, 利用此不等式为载体得到关于 $e_{1}, e_{2}$ 的不等量关系, 最后利用“此不等式具备恒成立的意义”的数学背景求得问题的解.`,
      },
      {
        id: "prob-sec-2-5-4-sol-10",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `知, $m^{2}=\\frac{1}{1-e_{1}^{2}},n^{2}=\\frac{1}{e_{2}^{2}-1}$ .结合 $m^{2}=n^{2}+2>n^{2}+1$ ,得

$\\frac{1}{1 - e_1^2} >\\frac{1}{e_2^2 - 1} +1 = \\frac{e_2^2}{e_2^2 - 1}$ ，即 $e_2^2 -1 > e_2^2 (1 - e_1^2)$ .所以 $e_1^2 e_2^2 > 1$ ，即 $e_1e_2 > 1$

评注 本解法是从 m, n 的等量关系出发, 合理构建 m, n 的不等关系, 进而推理 $e_{1}e_{2}$ 与 1 的不等关系, 这里需要注意一个放缩度的把握.`,
      },
      {
        id: "prob-sec-2-5-4-sol-11",
        title: `解法四`,
        method: "standard",
        steps: [],
        explanation: `由 $m^2 = n^2 + 2$ 知, $e_1^2 = \\frac{m^2 - 1}{m^2} = \\frac{n^2 + 1}{n^2 + 2}, e_2^2 = \\frac{n^2 + 1}{n^2}$ ,

所以 $e_{1}^{2}e_{2}^{2}=\\frac{(n^{2}+1)^{2}}{(n^{2}+2)n^{2}}>1$ , 即 $e_{1}e_{2}>1$`,
      },
      {
        id: "prob-sec-2-5-4-sol-12",
        title: `解法五`,
        method: "geometric",
        steps: [],
        explanation: `由椭圆的几何性质知 m > c.

所以 $(e_{1}e_{2})^{2}=\\frac{(m^{2}-1)(n^{2}+1)}{m^{2}n^{2}}=1+\\frac{m^{2}-n^{2}-1}{m^{2}n^{2}}=1+\\frac{m^{2}-c^{2}}{m^{2}n^{2}}>1$

即 $e_{1}e_{2}>1$ .`,
      },
      {
        id: "prob-sec-2-5-4-sol-13",
        title: `解法六`,
        method: "standard",
        steps: [],
        explanation: `由离心率的定义可知, $e_{1}=\\frac{c}{m},e_{2}=\\frac{c}{n}.$

所以 $e_1e_2 = \\frac{c^2}{mn} = \\frac{c^2}{\\sqrt{c^2 + 1}\\cdot\\sqrt{c^2 - 1}} = \\sqrt{1 + \\frac{1}{c^4 - 1}} >1.$`,
      },
      {
        id: "prob-sec-2-5-4-sol-14",
        title: `解法四`,
        method: "standard",
        steps: [],
        explanation: `、五、六是从函数思想的视角，分别将 $e_1e_2$ 表示成关于 $n$ ，或 $m$ ，或 $m,n$ 或 $c$ 的函数，然后比较函数值与1的大小关系得到问题的解.`,
      },
      {
        id: "prob-sec-2-5-4-sol-15",
        title: `解法七`,
        method: "standard",
        steps: [],
        explanation: `令 m=2，则 $e_{1}=\\frac{\\sqrt{3}}{2}, c=\\sqrt{3}$ ，所以 $n=\\sqrt{2}$ ，

故 $e_2 = \\frac{\\sqrt{3}}{\\sqrt{2}}$ ，于是 $e_1e_2 = \\frac{3}{2\\sqrt{2}} >1$ ，得证.`,
      },
      {
        id: "prob-sec-2-5-4-sol-16",
        title: `解法七`,
        method: "standard",
        steps: [],
        explanation: `是采用一般与特殊的思维策略, 利用赋值法将问题特殊化, 直接求得 $e_{1}, e_{2}$ 的大小, 然后得到问题的解.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-5-5",
    topicId: "topic-sec-2-5",
    title: `三棱锥 O-ABC 中`,
    content: `三棱锥 O-ABC 中，OA, OB, OC 两两垂直且相等，点 P, Q 分别是 BC 和 OA 上的动点，且满足 $\\frac{1}{3}BC \\leqslant BP \\leqslant \\frac{2}{3}BC, \\frac{1}{3}OA \\leqslant OQ \\leqslant \\frac{2}{3}OA$ ，则 PQ 和 OB 所成角余弦值的取值范围是 \\_\\_\\_\\_.`,
    preview: `三棱锥 O-ABC 中，OA, OB, OC 两两垂直且相等，点 P, Q 分别是 BC 和 OA 上的动点，且满足 ，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-5-5-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `过点 O 作 PQ 的平行线 $OP'$ ，则点 P, Q 的运动相当于点 $P'$ 在如图 2-5-3 所示的四边形 MNGH 上运动.

显然， $\\angle HOB$ 最大， $\\angle NOB$ 最小.

以 OB, OA 和 OC 为 x 轴、y 轴和 z 轴建立空间直角坐标系，

$O(0,0,0)$ ，设点 $B(3,0,0)$ ，

则点 H 为 $(1,-2,2)$ ，点 $N(2,-1,1)$ ，可得.

![](images/55c8529c20e7534512e7298a7eeef029db7bf9889b06b4c4355c26299f8697e8.jpg)

图2-5-3`,
      },
      {
        id: "prob-sec-2-5-5-sol-1",
        title: `解法二`,
        method: "geometric",
        steps: [],
        explanation: `以 OA, OB, OC 为 x 轴、y 轴和 z 轴建立空间直角坐标系，

设 OA 为三个单位长度，

则 $O(0,0,0)$ , $B(0,3,0)$ , $Q(m,0,0)$ , $P(0,n,3-n)$ ( $1 \\leqslant m, n \\leqslant 2$ ),

$$
\\overrightarrow {P Q} = (- m, n, 3 - n), \\overrightarrow {O B} = (0, 3, 0),
$$

$$
| \\cos \\langle \\overrightarrow {P Q}, \\overrightarrow {O B} \\rangle | = \\frac {n}{\\sqrt {m ^ {2} + n ^ {2} + (3 - n) ^ {2}}} = \\frac {n}{\\sqrt {m ^ {2} + 2 n ^ {2} - 6 n + 9}},
$$

则 $\\frac{1}{|\\cos\\langle\\overrightarrow{PQ},\\overrightarrow{OB}\\rangle|} = \\sqrt{\\frac{2n^2 - 6n + 9 + m^2}{n^2}}$

由 $(1\\leqslant m,n\\leqslant 2)$ ，得

$$
\\begin{array}{l} \\sqrt {\\frac {3}{2}} \\leqslant \\sqrt {\\frac {2 n ^ {2} - 6 n + 1 0}{n ^ {2}}} \\\\ \\leqslant \\frac {1}{| \\cos \\langle \\overrightarrow {P Q} , \\overrightarrow {O B} \\rangle |} = \\sqrt {\\frac {2 n ^ {2} - 6 n + 9 + m ^ {2}}{n ^ {2}}} \\\\ \\leqslant \\sqrt {\\frac {2 n ^ {2} - 6 n + 1 3}{n ^ {2}}} \\leqslant 3, \\\\ \\end{array}
$$

则 $\\frac{1}{3}\\leqslant\\left|\\cos\\langle\\overrightarrow{PQ},\\overrightarrow{OB}\\rangle\\right|\\leqslant\\frac{\\sqrt{6}}{3}$ ，取最小值时m=2,n=1，取最大值时m=1,n=2.

评注 作为客观题,本题也可以从图形的极端情况入手得到答案.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-5-6",
    topicId: "topic-sec-2-5",
    title: `双曲线 C: y^23 - x^2 = 1 的下焦点为 F`,
    content: `双曲线 $C: \\frac{y^{2}}{3} - x^{2} = 1$ 的下焦点为 F，过 F 的直线 l 与 C 交于 A, B 两点，若过 A, B 和点 $M(0, \\sqrt{7})$ 的圆的圆心在 x 轴上，则直线 l 的斜率为（）
A. $\\pm\\frac{\\sqrt{10}}{2}$

B. $\\pm  \\sqrt{2}$

C. ±1

D. $\\pm \\frac{3}{2}$`,
    preview: `双曲线 C: y^23 - x^2 = 1 的下焦点为 F，过 F 的直线 l 与 C 交于 A, B 两点，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-5-6-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `设直线 AB: y = kx - 2, A( $x_{1}, y_{1}$ ), B( $x_{2}, y_{2}$ ), F(0, -2),

则由 $\\left\\{\\begin{aligned}\\frac{y^{2}}{3}-x^{2}&=1\\\\ y&=kx-2\\end{aligned}\\right.\\Rightarrow(k^{2}-3)x^{2}-4kx+1=0,$

所以 $x_{1} + x_{2} = \\frac{4k}{k^{2} - 3}, x_{1} \\cdot x_{2} = \\frac{1}{k^{2} - 3}$ ,`,
      },
      {
        id: "prob-sec-2-5-6-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `如图 2-5-4 所示, 记 AB 的中点为 D,

![](images/76ace95ca1ac6d7ae7e1332fc10feabc32ecc1fd9dec9f9192efff1e39fca52a.jpg)

所以 $x_{D}=\\frac{2k}{k^{2}-3}, y_{D}=\\frac{6}{k^{2}-3}$ . 即 $D\\left(\\frac{2k}{k^{2}-3}, \\frac{6}{k^{2}-3}\\right)$ ,

所以直线 AB 的中垂线方程 $CD: y = -\\frac{1}{k}x + \\frac{8}{k^{2}-3}$ .

故圆心 $C\\left(\\frac{8k}{k^{2}-3},0\\right)$ .

又 $|CD|^2 = \\left(\\frac{2k}{k^2 - 3} -\\frac{8k}{k^2 - 3}\\right)^2 +\\left(\\frac{6}{k^2 - 3}\\right)^2$

$$
= \\left(\\frac {6 k}{k ^ {2} - 3}\\right) ^ {2} + \\left(\\frac {6}{k ^ {2} - 3}\\right) ^ {2},
$$

$$
| A B | = \\sqrt {1 + k ^ {2}} | x _ {1} - x _ {2} | = \\frac {2 \\sqrt {3} (1 + k ^ {2})}{| k ^ {2} - 3 |}.
$$

于是由 $\\frac{1}{4} |AB|^2 + |CD|^2 = |MC|^2$

$$
\\Rightarrow \\frac {1}{4} \\cdot \\frac {1 2 (1 + k ^ {2}) ^ {2}}{(k ^ {2} - 3) ^ {2}} + \\left(\\frac {6}{k ^ {2} - 3}\\right) ^ {2} + \\left(\\frac {6 k}{k ^ {2} - 3}\\right) ^ {2} = \\left(\\frac {8 k}{k ^ {2} - 3}\\right) ^ {2} + 7,
$$

整理得: $k^{4}-5k^{2}+6=0$ , 所以 $k^{2}=2$ 或 $k^{2}=3$ (舍), 故 $k=\\pm\\sqrt{2}$ . 选 B.`,
      },
      {
        id: "prob-sec-2-5-6-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `记圆心 $C(x_{0},0)$ ，则 $\\left\\{\\begin{array}{l}|CM|=|CA|,\\\\ |CM|=|CB|\\end{array}\\Rightarrow\\left\\{\\begin{aligned}x_{0}^{2}+7=(x_{1}-x_{0})^{2}+y_{1}^{2},\\\\ x_{0}^{2}+7=(x_{2}-x_{0})^{2}+y_{2}^{2},\\end{aligned}\\right.\\right.$ 其中

$$
y _ {1} ^ {2} = 3 + 3 x _ {1} ^ {2}, y _ {2} ^ {2} = 3 + 3 x _ {2} ^ {2},
$$

故 $\\left\\{\\begin{aligned}&2x_{1}^{2}-x_{0}x_{1}-2=0,\\\\ &2x_{2}^{2}-x_{0}x_{2}-2=0,\\end{aligned}\\right.$ 所以 $x_{1},x_{2}$ 是方程 $2x^{2}-x_{0}x-2=0$ 的两个解，

故 $x_{1} + x_{2} = \\frac{x_{0}}{2}, x_{1}x_{2} = -1$ ，而 $x_{1} \\cdot x_{2} = \\frac{1}{k^{2} - 3}$ ，则 $\\frac{1}{k^2 - 3} = -1$

所以 $k^2 = 2$ ，得 $k = \\pm \\sqrt{2}$`,
      },
      {
        id: "prob-sec-2-5-6-sol-3",
        title: `解法三`,
        method: "standard",
        steps: [],
        explanation: `设圆的方程: $x^{2} + y^{2} + Dx + F = 0$ , 由点 $M(0, \\sqrt{7})$ 在圆上, 可得 $F = -7$ , 所以圆的方程为 $x^{2} + y^{2} + Dx - 7 = 0$ , 因为 $A(x_{1}, y_{1}), B(x_{2}, y_{2})$ 两点既在圆上, 又在双曲线上, 故 $y^{2} = 3 + 3x^{2}$ , 代入圆的方程得 $4x^{2} + Dx - 4 = 0$ , 得 $x_{1}x_{2} = -1$ , 而 $x_{1} \\cdot x_{2} = \\frac{1}{k^{2} - 3}$ ,

故 $\\frac{1}{k^{2}-3}=-1$ , 所以 $k^{2}=2$ , 得 $k=\\pm\\sqrt{2}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-5-7",
    topicId: "topic-sec-2-5",
    title: `已知函数 f(x)=(√x+√2)^2(x>0)`,
    content: `已知函数 $f(x)=(\\sqrt{x}+\\sqrt{2})^{2}(x>0)$ ，设正项数列 $\\{a_{n}\\}$ 的首项 $a_{1}=2$ ，前 n 项和 $S_{n}$ 满足 $S_{n}=f(S_{n-1})(n>1$ 且 $n\\in Z^{+}$ .
(1) 求 $a_{n}$ 的表达式；
(2)在平面直角坐标系内,直线 $L_{n}$ 的斜率为 $a_{n}$ ,且 $L_{n}$ 与曲线 $y=x^{2}$ 有且仅有一个公共点, $L_{n}$ 又与y轴交于点 $D_{n}(0,b_{n})$ ,当 $n\\in Z^{+}$ 时,记 $d_{n}=\\frac{1}{4}\\mid\\overrightarrow{D_{n+1}D_{n}}\\mid-1$ ,若 $C_{n}=\\frac{d_{n+1}^{2}+d_{n}^{2}}{2d_{n+1}\\cdot d_{n}}$ ,求证: $C_{1}+C_{2}+C_{3}+\\cdots+C_{n}-n<1$ .

![](images/76ace95ca1ac6d7ae7e1332fc10feabc32ecc1fd9dec9f9192efff1e39fca52a.jpg)

图2-5-4`,
    preview: `已知函数 f(x)=(√x+√2)^2(x>0) ，设正项数列 的首项 a_1=2 ，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-5-7-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) $S_{n}=(\\sqrt{S_{n-1}}+\\sqrt{2})^{2}$ 得 $\\sqrt{S_{n}}-\\sqrt{S_{n-1}}=\\sqrt{2}$ ,

所以数列 $\\{\\sqrt{S_{n}}\\}$ 是以 $\\sqrt{2}$ 为首项，以 $\\sqrt{2}$ 为公差的等差数列，

所以 $\\sqrt{S_{n}}=\\sqrt{2}n, S_{n}=2n^{2}, a_{n}=S_{n}-S_{n-1}=4n-2(n\\geqslant2).$

又 $a_{1}=2$ ，所以 $a_{n}=4n-2(n\\in\\mathbf{Z}^{+})$ .

(2) 设 $L_{n}: y = a_{n}x + b_{n}$ ，由 $\\left\\{\\begin{aligned} y &= a_{n}x + b_{n}, \\\\ y &= x^{2} \\end{aligned}\\right. \\Rightarrow x^{2} - a_{n}x - b_{n} = 0,$

据题意知方程有相等实根，

即 $\\Delta=a_{n}^{2}+4b_{n}=0,$

得 $b_{n} = -\\frac{1}{4} a_{n}^{2} = -\\frac{1}{4} (4n - 2)^{2} = -(2n - 1)^{2}$

当 $n\\in \\mathbf{Z}^{+}$ 时 $d_{n} = \\frac{1}{4}|b_{n} - b_{n + 1}| - 1 = \\frac{1}{4}| - (2n - 1)^{2} + (2n + 1)^{2}| - 1 = 2n - 1,$

得 $C_n = \\frac{(2n + 1)^2 + (2n - 1)^2}{2(4n^2 - 1)} = \\frac{8n^2 + 2}{2(4n^2 - 1)}$

$$
= \\frac {4 n ^ {2} + 1}{4 n ^ {2} - 1} = 1 + \\left(\\frac {1}{2 n - 1} - \\frac {1}{2 n + 1}\\right),
$$

所以 $C_{1}+C_{2}+C_{3}+\\cdots+C_{n}-n$

$$
= n + \\left(1 - \\frac {1}{3}\\right) + \\left(\\frac {1}{3} - \\frac {1}{5}\\right) + \\left(\\frac {1}{5} - \\frac {1}{7}\\right) + \\dots + \\left(\\frac {1}{2 n - 1} - \\frac {1}{2 n + 1}\\right) - n = 1 - \\frac {1}{2 n + 1} <   1.
$$

评注 本题也可借助导数解答如下:

设 $L_{n}$ 与 $y=x^{2}$ 的公共点为 $P(x_{0},y_{0})$ ，则点 P 处的切线斜率

$a_{n} = y^{\\prime}|_{x = x_{0}} = 2x_{0}$ ，所以 $a_{n} = 2x_{0}$ ，即 $x_0 = \\frac{1}{2} a_n$ .同理 $y_0 = \\frac{1}{4} a_n^2.$

所以 $L_{n}: y - \\frac{1}{4} a_{n}^{2} = a_{n} \\left( x - \\frac{1}{2} a_{n} \\right)$ .

令 $x = 0$ ，得 $b_{n} = -\\frac{1}{4} a_{n}^{2} = -\\frac{1}{4} (4n - 2)^{2} = -(2n - 1)^{2}$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-5-8",
    topicId: "topic-sec-2-5",
    title: `椭圆 E 经过点 A(2,3)`,
    content: `椭圆 E 经过点 A(2,3)，对称轴为坐标轴，焦点 $F_{1}$ 、 $F_{2}$ 在 x 轴上，离心率 $e=\\frac{1}{2}$ .
(1)求椭圆 E 的方程;

(2) 求 $\\angle F_{1}AF_{2}$ 的角平分线所在直线的方程.`,
    preview: `椭圆 E 经过点 A(2,3)，对称轴为坐标轴，焦点 F_1 、 F_2 在 x 轴上，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-5-8-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `设所求角平分线所在的直线为 $l$ ，斜率为 $k, l$ 与 $x$ 轴交于 $B(x_0, 0)$ （注：下同）。显然 $-2 < x_0 < 2$ 。因为 $F_2(2, 0), A(2, 3)$ ，所以 $AF_2 \\perp F_1F_2$ ，

易求得直线 $AF_{1}$ 的方程为 $y=\\frac{3}{4}(x+2)$ ,

即 $3x-4y+6=0$ . 直线 $AF_{2}$ 的方程为 x=2.

如图 2-5-5 所示, 可知点 B 到直线 $AF_{1}$ 的距离等于它到直线 $AF_{2}$ 的距离, 即 $\\frac{|3x_{0}+6|}{5}=2-x_{0}$ ,

![](images/c9c4a575f2fee4d1bf2e72ab1531f1621d763b2184d4098e6b63790582b0b5fd.jpg)

解得 $x_{0}=\\frac{1}{2}$ ，即 $B(\\frac{1}{2},0)$ ，则可得 k=2，

于是直线 l 的方程为 y=2x-1.`,
      },
      {
        id: "prob-sec-2-5-8-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `过 $B(x_{0},0)$ 作 $BH \\perp AF_{1}$ 于 H,

则由角平分线性质可知 $BH = BF_{2}$ ，

则 $S_{\\triangle BAF_1} = \\frac{1}{2}|BF_1|\\cdot |AF_2| = \\frac{1}{2}|AF_1|\\cdot |BH| = \\frac{1}{2}|AF_1|\\cdot |BF_2|$

故 $(x_{0}+2)\\times3=5\\times(2-x_{0})$ ，则可解得 $x_{0}=\\frac{1}{2}$ .以下过程略.`,
      },
      {
        id: "prob-sec-2-5-8-sol-3",
        title: `解法三`,
        method: "standard",
        steps: [],
        explanation: `设 $Q(x,y)$ 是直线 l 上任意一点.

由直线 $AF_{1}$ 的方程 $3x-4y+6=0$ ，直线 $AF_{2}$ 的方程 x=2，

得 $\\frac{|3x - 4y + 6|}{5} = 2 - x,$

所以 $x+2y-8=0$ (舍) 或 2x-y-1=0 (即为所求直线方程).`,
      },
      {
        id: "prob-sec-2-5-8-sol-4",
        title: `解法四`,
        method: "standard",
        steps: [],
        explanation: `由角平分线可知, $F_{1}$ 关于角平分线的对称点P必在直线 $AF_{2}$ 上(如图2-5-6所示),且 $|AP|=|AF_{1}|=5$ .

![](images/fefe72604de2a0acd871c09b57eb53cf2e31350c7b5ac26172751d1f30f2bfd2.jpg)

由 $AF_{2} \\perp Ox$ ，得 $P(2, -2)$ ，于是 $k_{F_{1}P} = -\\frac{1}{2}$ ，

则所求直线的斜率为2.故直线l的方程为y=2x-1.`,
      },
      {
        id: "prob-sec-2-5-8-sol-5",
        title: `解法五`,
        method: "standard",
        steps: [],
        explanation: `设直线 l 的方程为 $y-3=k(x-2)$ ， $F_{1}$ 关于直线 l 的对称点 P 在直线 $AF_{2}$ 上，可设 $P(2,y_{0})$ ，则 $\\left\\{\\begin{aligned}\\frac{y_{0}-0}{2-(-2)}&=-\\frac{1}{k},\\\\ \\frac{y_{0}}{2}-3&=k(0-2).\\end{aligned}\\right.$

解得 k=2 或 $k=-\\frac{1}{2}$ （舍去），则直线 l 的方程为 2x-y-1=0.`,
      },
      {
        id: "prob-sec-2-5-8-sol-6",
        title: `解法六`,
        method: "standard",
        steps: [],
        explanation: `设 $\\angle F_{1}AF_{2} = \\alpha, \\angle AF_{1}F_{2} = \\beta.$ 在 Rt△ $AF_{1}F_{2}$ 中，可得 $\\tan \\alpha = \\frac{4}{3}, \\tan \\beta = \\frac{3}{4}$ ，

从而 $\\tan\\frac{\\alpha}{2}=\\frac{1}{2}$ ，直线 AB 的斜率 $k=\\tan\\left(\\beta+\\frac{\\alpha}{2}\\right)=2$ ，

可得直线 l 的方程为 2x-y-1=0.`,
      },
      {
        id: "prob-sec-2-5-8-sol-7",
        title: `解法七`,
        method: "standard",
        steps: [],
        explanation: `注意到 $\\angle AF_{2}F_{1}=90^{\\circ}$ ，易得 $\\cos\\angle F_{1}AF_{2}=\\frac{3}{5}$

则 $\\cos\\angle BAF_{2}=\\sqrt{\\frac{1+\\frac{3}{5}}{2}}=\\frac{2\\sqrt{5}}{5}$ ，故 $\\sin\\angle ABF_{2}=\\frac{2\\sqrt{5}}{5}$

于是 $\\tan\\angle ABF_{2}=2$ ，

所以直线 l 的方程为 2x-y-1=0.

![](images/16bfe75c5503c619cb2e9f0918c9870169de90765cf509e62c34a4310ce46eec.jpg)

图2-5-5

![](images/c9c4a575f2fee4d1bf2e72ab1531f1621d763b2184d4098e6b63790582b0b5fd.jpg)

图2-5-6`,
      },
      {
        id: "prob-sec-2-5-8-sol-8",
        title: `解法八`,
        method: "standard",
        steps: [],
        explanation: `易得 $\\left|AF_{2}\\right|=3,\\left|AF_{1}\\right|=2a-\\left|AF_{2}\\right|=5,$

则由角平分线性质定理有 $\\frac{|AF_{1}|}{|AF_{2}|}=\\frac{|F_{1}B|}{|BF_{2}|}$

即 $\\frac{5}{3}=\\frac{x_{0}+2}{2-x_{0}}$ ，则 $x_{0}=\\frac{1}{2}$ .

以下过程略.`,
      },
      {
        id: "prob-sec-2-5-8-sol-9",
        title: `解法九`,
        method: "standard",
        steps: [],
        explanation: `易得 $AF_{2} \\perp F_{1}F_{2}$ ，即 $\\triangle AF_{1}F_{2}$ 是直角三角形，且三边分别为 3, 4, 5，故其内切圆半径为 r = 1。所以内切圆圆心为 $I(1, 1)$ 。

如图 2-5-7

![](images/fefe72604de2a0acd871c09b57eb53cf2e31350c7b5ac26172751d1f30f2bfd2.jpg) 所示, 由内切圆圆心的特征, 得直线 AI 是 $\\angle F_{1}AF_{2}$ 的角平分线, 所以 k=2.`,
      },
      {
        id: "prob-sec-2-5-8-sol-10",
        title: `解法十`,
        method: "standard",
        steps: [],
        explanation: `由向量知识得 $\\frac{\\overrightarrow{AF_1}}{|\\overrightarrow{AF_1}|} +\\frac{\\overrightarrow{AF_2}}{|\\overrightarrow{AF_2}|}$ ，所得结果是 $\\angle F_{1}AF_{2}$ 的角平分线的方向向量，求得

![](images/fefe72604de2a0acd871c09b57eb53cf2e31350c7b5ac26172751d1f30f2bfd2.jpg)

图2-5-7

$\\frac{\\overrightarrow{AF_1}}{|\\overrightarrow{AF_1}|} + \\frac{\\overrightarrow{AF_2}}{|\\overrightarrow{AF_2}|} = \\frac{1}{5} (-4,3) + \\frac{1}{3} (0, -3) = \\left(-\\frac{4}{5}, -\\frac{8}{5}\\right)$ , 则 $k = 2$ . 以下过程略.`,
      },
      {
        id: "prob-sec-2-5-8-sol-11",
        title: `解法十一`,
        method: "standard",
        steps: [],
        explanation: `由角平分线及向量知识可知 $\\frac{\\overrightarrow{AF_1} \\cdot \\overrightarrow{AB}}{|\\overrightarrow{AF_1}| \\cdot |\\overrightarrow{AB}|} = \\frac{\\overrightarrow{AF_2} \\cdot \\overrightarrow{AB}}{|\\overrightarrow{AF_2}| \\cdot |\\overrightarrow{AB}|}$ ,

可得点 B 的坐标为 $\\left(\\frac{1}{2},0\\right)$ ，以下过程略.`,
      },
      {
        id: "prob-sec-2-5-8-sol-12",
        title: `解法十二`,
        method: "standard",
        steps: [],
        explanation: `因为点 A(2,3) 在椭圆上, 易得该椭圆在 A 处的切线方程为 $\\frac{2x}{16} + \\frac{3y}{12} = 1$ , 即 $x + 2y - 8 = 0$ .

又由光学性质(从椭圆的一个焦点发出的光线经椭圆反射后,反射光线过椭圆的另一个焦点)可得直线 l 与切线垂直,故其斜率 k=2.

以下过程略.`,
      },
      {
        id: "prob-sec-2-5-8-sol-13",
        title: `解法十三`,
        method: "standard",
        steps: [],
        explanation: `易得 Rt△AF₁F₂, 设∠F₁AF₂=2α∈(0°, 90°),

则 $\\tan2\\alpha=\\frac{4}{3}=\\frac{2\\tan\\alpha}{1-\\tan^{2}\\alpha}$ ，解得 $\\tan\\alpha=\\frac{1}{2}$ 或 $\\tan\\alpha=-2$ （舍去）.

在 Rt△AF₂B 中， $k=\\tan\\angle ABF_{2}=\\tan(90^{\\circ}-\\alpha)=\\cot\\alpha=2$

以下过程略.`,
      },
      {
        id: "prob-sec-2-5-8-sol-14",
        title: `解法十四`,
        method: "standard",
        steps: [],
        explanation: `由椭圆“焦点三角形”的性质可得

$$
S _ {\\triangle A F _ {1} F _ {2}} = b ^ {2} \\tan \\frac {1}{2} \\angle F _ {1} A F _ {2} = \\frac {1}{2} | F _ {1} F _ {2} | \\cdot | A F _ {2} | = 6,
$$

所以 $\\tan\\frac{1}{2}\\angle F_{1}AF_{2}=\\frac{1}{2}$ ，所以 $k=\\cot\\frac{1}{2}\\angle F_{1}AF_{2}=2$ .

以下过程略.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-5-1-8",
    topicId: "topic-sec-2-5",
    title: `已知 m, n 是正整数`,
    content: `已知 $m, n$ 是正整数，且 $1 < m < n$ . 求证： $(1 + m)^n > (1 + n)^m$ .`,
    preview: `已知 m, n 是正整数，且 1 < m < n . 求证： (1 + m)^n > (1 + n)^m .`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-5-1-8-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `$$
(1 + n) ^ {m} = \\underbrace {(1 + n) (1 + n) \\cdots (1 + n)} _ {m \\text {个括号}} \\cdot \\underbrace {1 \\cdot \\cdots \\cdot 1} _ {n - m \\text {个} 1} <   [ \\frac {m (1 + n) + n - m}{n} ] ^ {n} = (1 + m) ^ {n}.
$$

2. 运用柯西(Cauchy) 不等式巧解高考题

柯西不等式: 设 $a_{i}, b_{i} \\in \\mathbf{R}(i = 1, 2, \\cdots, n)$ ，则 $\\left(\\sum_{i=1}^{n} a_{i} b_{i}\\right)^{2} \\leqslant \\left(\\sum_{i=1}^{n} a_{i}^{2}\\right) \\cdot \\left(\\sum_{i=1}^{n} b_{i}^{2}\\right)$ ，当且仅当 $\\lambda a_{i} = \\mu b_{i} (i = 1, 2, \\cdots, n)$ 时取等号，其中 $\\lambda, \\mu$ 是不全为零的实数.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-5-2-9",
    topicId: "topic-sec-2-5",
    title: `点 P 在直径为 2 的球面上, 过 P`,
    content: `点 P 在直径为 2 的球面上, 过 P 点作两两垂直的三条弦, 若其中一条弦长是另一条弦长的 2 倍, 则这 3 条弦长之和的最大值是 \\_\\_\\_\\_.`,
    preview: `点 P 在直径为 2 的球面上, 过 P 点作两两垂直的三条弦, 若其中一条弦长是另一条弦长的 2 倍, 则这 3 条弦长之和的最大值是 \\_\\_\\_\\_.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-5-2-9-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `以这三条弦为相邻边可构成一个长方体,设其三边长为 a,2a,b,

则 $a^{2}+(2a)^{2}+b^{2}=4$ ，即 $5a^{2}+b^{2}=4$ ，由柯西不等式，

得 $(5a^{2} + b^{2})\\left(\\frac{9}{5} +1\\right)\\geqslant (3a + b)^{2}$ ，整理，得 $3a + b\\leqslant \\sqrt{\\frac{14}{5}\\times 4} = \\frac{2}{5}\\sqrt{70}.$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-5-3-10",
    topicId: "topic-sec-2-5",
    title: `给定两个长度为 1 的平面向量 →OA 和 →OB`,
    content: `给定两个长度为 1 的平面向量 $\\overrightarrow{OA}$ 和 $\\overrightarrow{OB}$ ，它们的夹角为 $120^{\\circ}$ ，点 C 在以 O 为圆心的圆弧 AB 上移动，若 $\\overrightarrow{OC} = x \\overrightarrow{OA} + y \\overrightarrow{OB}$ ，其中 $x, y \\in R$ ，则 $x + y$ 的最大值为 \\_\\_\\_\\_.`,
    preview: `给定两个长度为 1 的平面向量 →OA 和 →OB ，它们的夹角为 120° ，点 C 在以 O 为圆心的圆弧 AB 上移动，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-5-3-10-sol-0",
        title: `解答`,
        method: "creative",
        steps: [],
        explanation: `依题意 $\\overrightarrow{OC} = x\\overrightarrow{OA} +y\\overrightarrow{OB}$ ，两边平方得 $x^{2} + y^{2} - xy = 1$ ，再配方得

$$
\\left(x - \\frac {y}{2}\\right) ^ {2} + \\left(\\frac {\\sqrt {3}}{2} y\\right) ^ {2} = 1.
$$

构造柯西不等式

$\\left[\\left(x - \\frac{y}{2}\\right)^2 +\\left(\\frac{\\sqrt{3}}{2} y\\right)^2\\right]\\left[1^2 +(\\sqrt{3})^2\\right] \\geqslant (x + y)^2$ ，得 $(x + y)^2\\leqslant 4,x + y\\leqslant 2,$

当且仅当 $\\frac{x - \\frac{y}{2}}{1} = \\frac{\\frac{\\sqrt{3}}{2}y}{\\sqrt{3}}$ 即 $x = y = 1$ 时，等号成立.

3. 运用权方和不等式巧解高考题

二维权方和不等式:对于正数 a, b, x, y, 有

(1) $\\frac{a^{2}}{x}+\\frac{b^{2}}{y}\\geqslant\\frac{(a+b)^{2}}{x+y}$ ，等号成立的条件为a:b=x:y;
(2) $\\frac{a}{x}+\\frac{b}{y}\\geqslant\\frac{(a+b)^{2}}{ax+by}$ 等号成立的条件为x=y.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-5-4-11",
    topicId: "topic-sec-2-5",
    title: `已知 α 为锐角, 求 1/α + 3√3α 的最小值`,
    content: `已知 $\\alpha$ 为锐角, 求 $\\frac{1}{\\sin\\alpha} + \\frac{3\\sqrt{3}}{\\cos\\alpha}$ 的最小值.`,
    preview: `已知 α 为锐角, 求 1/α + 3√3α 的最小值.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-5-4-11-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `由柯西不等式, 得 $\\left(\\frac{1}{\\sin\\alpha} + \\frac{3\\sqrt{3}}{\\cos\\alpha}\\right) (\\sin\\alpha + \\sqrt{3}\\cos\\alpha) \\geqslant 16$ ,

所以 $\\frac{1}{\\sin\\alpha} +\\frac{3\\sqrt{3}}{\\cos\\alpha}\\geqslant \\frac{16}{\\sin\\alpha + \\sqrt{3}\\cos\\alpha} = \\frac{8}{\\sin\\left(\\alpha + \\frac{\\pi}{3}\\right)}\\geqslant 8.$`,
      },
      {
        id: "prob-sec-2-5-4-11-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `由权方和不等式 $\\frac{1}{\\sin\\alpha} + \\frac{3\\sqrt{3}}{\\cos\\alpha} = \\frac{1^{\\frac{3}{2}}}{(\\sin^2\\alpha)^{\\frac{1}{2}}} + \\frac{3^{\\frac{3}{2}}}{(\\cos^2\\alpha)^{\\frac{1}{2}}} \\geqslant \\frac{(1 + 3)^{\\frac{3}{2}}}{(\\sin^2\\alpha + \\cos^2\\alpha)^{\\frac{1}{2}}} = 8,$ 等号当且仅当 $\\alpha = \\frac{\\pi}{6}$ 时取得.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-5-5-12",
    topicId: "topic-sec-2-5",
    title: `已知 x + y = 1`,
    content: `已知 $x + y = 1$ ，求 $\\frac{x^{2}}{x + 2} + \\frac{y^{2}}{y + 1}$ 的最小值.
$$
\\begin{array}{l} = \\frac {4}{x + 2} + \\frac {1}{y + 1} - 2 = \\frac {1}{4} \\left(\\frac {4}{x + 2} + \\frac {1}{y + 1}\\right) [ (x + 2) + (y + 1) ] - 2 \\\\ \\geqslant \\frac {1}{4}. \\\\ \\end{array}
$$`,
    preview: `已知 x + y = 1 ，求 x^2x + 2 + y^2y + 1 的最小值.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-5-5-12-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `$\\frac{x^2}{x + 2} +\\frac{y^2}{y + 1} = \\frac{x^2 - 4 + 4}{x + 2} +\\frac{y^2 - 1 + 1}{y + 1} = x - 2 + \\frac{4}{x + 2} +y - 1 + \\frac{1}{y + 1}$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-5-6-13",
    topicId: "topic-sec-2-5",
    title: `（1）设函数 f(x) = xlog_2x + (1 - x)log_2(1 - x)(0 < x < 1)，求 f`,
    content: `（1）设函数 $f(x) = x\\log_2x + (1 - x)\\log_2(1 - x)(0 < x < 1)$ ，求 $f(x)$ 的最小值；
(2)设正数 $p_{1}, p_{2}, p_{3}, \\cdots, p_{2^{n}}$ 满足 $p_{1} + p_{2} + p_{3} + \\cdots + p_{2^{n}} = 1$ ,

证明： $p_{1}\\log_{2}p_{1}+p_{2}\\log_{2}p_{2}+p_{3}\\log_{2}p_{3}+\\cdots+p_{2^{n}}\\log_{2}p_{2^{n}}\\geqslant-n.$`,
    preview: `设函数 ，求 f(x) 的最小值； (2)设正数 p_1, p_2, p_3, ·s, p_{2^n} 满足 , 证明：`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-5-6-13-sol-0",
        title: `解答`,
        method: "creative",
        steps: [],
        explanation: `(1)构造函数 $g(x)=x\\log_{2}x, x\\in(0,1)$ , $g''(x)=\\frac{1}{x\\ln2}>0$ ,

由琴生不等式得 $g\\left(\\frac{x+1-x}{2}\\right) \\leqslant \\frac{1}{2}[g(x) + g(1-x)]$ ,

得 $g(x) + g(1 - x)\\geqslant 2g\\left(\\frac{1}{2}\\right) = -1,$

即 $x\\log_{2}x+(1-x)\\log_{2}(1-x)\\geqslant-1$ ，故当 $x=\\frac{1}{2}$ 时， $f(x)$ 取得最小值 -1.

(2) 直接利用琴生不等式可得 $g\\left(\\frac{\\sum_{i=1}^{2^{n}}P_{i}}{2^{n}}\\right) \\leqslant \\frac{1}{2^{n}}\\left[\\sum_{i=1}^{2^{n}}g(P_{i})\\right]$ ，又 $\\sum_{i=1}^{2^{n}}p_{i}=1$ ，

所以 $g\\left(\\frac{1}{2^n}\\right) \\leqslant \\frac{1}{2^n} \\left[\\sum_{i=1}^{2^n} g(P_i)\\right] \\Leftrightarrow \\left[\\sum_{i=1}^{2^n} g(P_i)\\right] \\geqslant 2^n \\cdot g\\left(\\frac{1}{2^n}\\right) = -n,$

即 $p_{1}\\log_{2}p_{1}+p_{2}\\log_{2}p_{2}+p_{3}\\log_{2}p_{3}+\\cdots+p_{2^{n}}\\log_{2}p_{2^{n}}\\geqslant-n.$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-5-7-14",
    topicId: "topic-sec-2-5",
    title: `已知函数 f(x) = x + 3/x + 1 (x ≠`,
    content: `已知函数 $f(x) = \\frac{x + 3}{x + 1} (x \\neq -1)$ . 设数列 $\\{a_n\\}$ 满足 $a_1 = 1, a_{n+1} = f(a_n)$ ，数列 $\\{b_n\\}$ 满足 $b_n = |a_n - \\sqrt{3}|, S_n = b_1 + b_2 + \\dots + b_n (n \\in \\mathbf{Z}^+)$ . 证明： $b_n \\leqslant \\frac{(\\sqrt{3} - 1)^n}{2^{n-1}}$ .`,
    preview: `已知函数 f(x) = x + 3/x + 1 (x ≠ -1) . 设数列 满足 a_1 = 1, a_n+1 = f(a_n) ，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-5-7-14-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `由 $f(x) = x$ 得 $f(x)$ 的两个不动点为 $\\pm \\sqrt{3}$ . 因为 $a_{n+1} = f(a_n) = \\frac{a_n + 3}{a_n + 1}$ ,

所以 $a_{n + 1} - \\sqrt{3} = \\frac{a_n + 3}{a_n + 1} -\\sqrt{3} = \\frac{(1 - \\sqrt{3})(a_n - \\sqrt{3})}{a_n + 1},$

$$
a _ {n + 1} + \\sqrt {3} = \\frac {a _ {n} + 3}{a _ {n} + 1} + \\sqrt {3} = \\frac {(1 + \\sqrt {3}) (a _ {n} + \\sqrt {3})}{a _ {n} + 1},
$$

两式相除，得 $\\frac{a_{n+1}-\\sqrt{3}}{a_{n+1}+\\sqrt{3}}=\\frac{1-\\sqrt{3}}{1+\\sqrt{3}}\\cdot\\frac{a_{n}-\\sqrt{3}}{a_{n}+\\sqrt{3}}$ ，所以

$$
\\frac {a _ {n} - \\sqrt {3}}{a _ {n} + \\sqrt {3}} = \\frac {1 - \\sqrt {3}}{1 + \\sqrt {3}} \\cdot \\frac {a _ {n - 1} - \\sqrt {3}}{a _ {n - 1} + \\sqrt {3}} = \\left(\\frac {1 - \\sqrt {3}}{1 + \\sqrt {3}}\\right) ^ {2} \\cdot \\frac {a _ {n - 2} - \\sqrt {3}}{a _ {n - 2} + \\sqrt {3}} = \\dots = \\left(\\frac {1 - \\sqrt {3}}{1 + \\sqrt {3}}\\right) ^ {n - 1} \\cdot \\frac {a _ {1} - \\sqrt {3}}{a _ {1} + \\sqrt {3}}.
$$

即 $\\frac{a_n - \\sqrt{3}}{a_n + \\sqrt{3}} = \\left(\\frac{1 - \\sqrt{3}}{1 + \\sqrt{3}}\\right)^n$ ，由此可得 $b_{n} = |a_{n} - \\sqrt{3}| = \\frac{2\\sqrt{3}\\cdot(\\sqrt{3} - 1)^{n}}{(1 + \\sqrt{3})^{n} - (1 - \\sqrt{3})^{n}}.$

因此，只要证明 $\\frac{\\sqrt{3}}{(1 + \\sqrt{3})^n - (1 - \\sqrt{3})^n} \\leqslant \\frac{1}{2^n}$ ，即证： $2^n \\cdot \\sqrt{3} \\leqslant (1 + \\sqrt{3})^n - (1 - \\sqrt{3})^n$ .

注意到 $(1+\\sqrt{3})^{n}-(1-\\sqrt{3})^{n}=2\\left[C_{n}^{1}\\cdot\\sqrt{3}+C_{n}^{3}\\cdot(\\sqrt{3})^{3}+C_{n}^{5}\\cdot(\\sqrt{3})^{5}\\cdots\\right]$

$$
= 2 \\sqrt {3} (C _ {n} ^ {1} + C _ {n} ^ {3} \\cdot 3 + C _ {n} ^ {5} \\cdot 3 ^ {2} \\dots)
$$

$$
= \\sqrt {3} \\left[ (C _ {n} ^ {0} + C _ {n} ^ {1} + C _ {n} ^ {2} + \\dots + C _ {n} ^ {n}) + 2 (C _ {n} ^ {3} \\cdot 2 + C _ {n} ^ {5} \\cdot 8 + \\dots) \\right]
$$

$= \\sqrt{3} [2^{n} + 2(C_{n}^{3}\\cdot 2 + C_{n}^{5}\\cdot 8 + \\dots)]\\geqslant 2^{n}\\cdot \\sqrt{3}$ ，得证.

6. 运用排序原理巧解高考题

排序原理:设有两个有序组 $a_{1} \\leqslant a_{2} \\leqslant \\cdots \\leqslant a_{n}, b_{1} \\leqslant b_{2} \\leqslant \\cdots \\leqslant b_{n}$ ,

则 $a_{1}b_{n}+a_{2}b_{n-2}+\\cdots+a_{n}b_{1}$ (反序和) $\\leqslant a_{1}b_{j1}+a_{2}b_{j2}+\\cdots+a_{n}b_{jn}$ (乱序和) $\\leqslant a_{1}b_{1}+a_{2}b_{2}+\\cdots+a_{n}b_{n}$ (顺序和)，即反序和 $\\leqslant$ 乱序和 $\\leqslant$ 顺序和，其中 $j_{1}, j_{2}, \\cdots, j_{n}$ 是自然数 1, 2, 3, $\\cdots, n$ 的任一排列，当且仅当 $a_{1}=a_{2}=\\cdots=a_{n}$ 或 $b_{1}=b_{2}=\\cdots=b_{n}$ 时等号成立.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-5-8-15",
    topicId: "topic-sec-2-5",
    title: `有五位同学每人拿一只桶同时到一只公用的水龙头去灌水,灌水所需`,
    content: `有五位同学每人拿一只桶同时到一只公用的水龙头去灌水,灌水所需的时间分别为 4,5,6,7,8 分钟,若只能逐个地灌水,未轮到的同学需等待,灌完的同学立即离开,只要我们适当地安排这五位同学的灌水顺序,就能使每个人花费的时间(包括等待时间)的总和尽可能小,但至少需要 ( )
A. 58 分钟

B. 80 分钟

C. 81 分钟

D. 93 分钟`,
    preview: `有五位同学每人拿一只桶同时到一只公用的水龙头去灌水,灌水所需的时间分别为 4,5,6,7,8 分钟,若只能逐个地灌水,未轮到的同学需等待,灌完的同学立即离开,只`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-5-8-15-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `根据排序原理, 可知至少需要 $1 \\times 8 + 2 \\times 7 + 3 \\times 6 + 4 \\times 5 + 5 \\times 4 = 80$ 分钟.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-5-9",
    topicId: "topic-sec-2-5",
    title: `将数字 1,2,3,4 填入标号为 1,2,3,4`,
    content: `将数字 1,2,3,4 填入标号为 1,2,3,4 的四个方格里,每格填 1 个数字,则每个方格的标号与所填数字均不相同的填法有多少种?`,
    preview: `将数字 1,2,3,4 填入标号为 1,2,3,4 的四个方格里,每格填 1 个数字,则每个方格的标号与所填数字均不相同的填法有多少种?`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-5-9-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `本题即是当 $n = 4$ 时的错位排列情形, 因此, 将 $n = 4$ 代入以上公式得不相同的填法有 $4! \\left(1 - \\frac{1}{1!} + \\frac{1}{2!} - \\frac{1}{3!} + \\frac{1}{4!}\\right) = 9$ 种.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-5-10",
    topicId: "topic-sec-2-5",
    title: `非等边 △ ABC 的外接圆的圆心为 O`,
    content: `非等边 $\\triangle ABC$ 的外接圆的圆心为 O，两条边上的高的交点为 H， $\\overrightarrow{OH}=m(\\overrightarrow{OA}+\\overrightarrow{OB}+\\overrightarrow{OC})$ ，则实数 m= \\_\\_\\_\\_.`,
    preview: `非等边 △ ABC 的外接圆的圆心为 O，两条边上的高的交点为 H， →OH=m(→OA+→OB+→OC) ，则实数 m= \\_\\_\\_\\_.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-5-10-sol-0",
        title: `解答`,
        method: "geometric",
        steps: [],
        explanation: `如图 3-1 所示, 设 D 为线段 BC 的中点, 则由平面几何的知识“三角形顶点到垂心的距离等于外心到该顶点所对边距离的两倍”, 得 $\\overrightarrow{OH} = \\overrightarrow{OA} + \\overrightarrow{AH} = \\overrightarrow{OA} + 2\\overrightarrow{OD} = \\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC}$ , 所以, 有 m = 1.

![](images/e8ff178814422c06f682325f14b30ba07b6883ba1e4e291aac4122c30f3e0fc5.jpg)

图3-1

评注 当然,本题也可利用极端原理处理,取 $\\triangle ABC$ 为直角三角形,不妨设AC为斜边,则有 $\\overrightarrow{OH}=\\overrightarrow{OB}$ ,而 $\\overrightarrow{OA}+\\overrightarrow{OB}+\\overrightarrow{OC}=\\overrightarrow{OB}$ ,因此, $\\overrightarrow{OB}=m\\overrightarrow{OB}$ ,故m=1.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-5-11",
    topicId: "topic-sec-2-5",
    title: `已知函数 f(x) = x^3 - x^2 + x/2 +`,
    content: `已知函数 $f(x) = x^{3} - x^{2} + \\frac{x}{2} + \\frac{1}{4}$ ，且存在 $x_0 \\in \\left(0, \\frac{1}{2}\\right)$ ，使 $f(x_0) = x_0$ .
(1) 证明: $f(x)$ 是 R 上的单调增函数;
(2) 设 $x_{1}=0, x_{n+1}=f(x_{n}), y_{1}=\\frac{1}{2}, y_{n+1}=f(y_{n})$ ，其中 $n=1,2,\\cdots,$

证明： $x_{n} <   x_{n + 1} <   x_{0} <   y_{n + 1} <   y_{n};$

(3) 证明: $\\frac{y_{n+1} - x_{n+1}}{y_n - x_n} < \\frac{1}{2}$ .`,
    preview: `已知函数 f(x) = x^3 - x^2 + x/2 + 1/4 ，且存在 x_0 (0, 1/2) ，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-5-11-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1) $f'(x)=3x^{2}-2x+\\frac{1}{2}=3\\left(x-\\frac{1}{3}\\right)^{2}+\\frac{1}{6}>0,$

所以 $f(x)$ 是 R 上的单调增函数.

(2)由 $0 < x_0 < \\frac{1}{2}$ , 得 $x_1 < x_0 < y_1$ , 又 $f(x)$ 是增函数, 故 $f(x_1) < f(x_0) < f(y_1)$ , 即 $x_2 < x_0 < y_2$ . 又 $x_2 = f(x_1) = f(0) = \\frac{1}{4} > x_1$ , $y_2 = f(y_1) = f\\left(\\frac{1}{2}\\right) = \\frac{3}{8} < \\frac{1}{2} = y_1$ ,

综上，有 $x_{1} < x_{2} < x_{0} < y_{2} < y_{1}$

用数学归纳法证明如下:①当n=1时,上面已证明成立.

②假设当 $n=k(k\\geqslant1)$ 时，有 $x_{k}<x_{k+1}<x_{0}<y_{k+1}<y_{k}$

当 $n=k+1$ 时，由 $f(x)$ 是单调增函数，有

$$
f (x _ {k}) <   f (x _ {k + 1}) <   f (x _ {0}) <   f (y _ {k + 1}) <   f (y _ {k}),
$$

因此， $x_{k + 1} <   x_{k + 2} <   x_0 <   y_{k + 2} <   y_{k + 1}$

由①②可知，对一切 $n=1,2,\\cdots$ ，都有 $x_{n}<x_{n+1}<x_{0}<y_{n+1}<y_{n}$ .

(3)`,
      },
      {
        id: "prob-sec-2-5-11-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `$\\frac{y_{n+1}-x_{n+1}}{y_{n}-x_{n}}=\\frac{f(y_{n})-f(x_{n})}{y_{n}-x_{n}}=y_{n}^{2}+x_{n}y_{n}+x_{n}^{2}-(y_{n}+x_{n})+\\frac{1}{2}$

$$
\\leqslant (y _ {n} + x _ {n}) ^ {2} - (y _ {n} + x _ {n}) + \\frac {1}{2} = \\left[ (y _ {n} + x _ {n}) - \\frac {1}{2} \\right] ^ {2} + \\frac {1}{4}.
$$

由(2)知 $0 < y_{n} + x_{n} < 1$ ，所以 $-\\frac{1}{2} < y_{n} + x_{n} - \\frac{1}{2} < \\frac{1}{2},$

故 $\\frac{y_{n + 1} - x_{n + 1}}{y_n - x_n} < \\left(\\frac{1}{2}\\right)^2 +\\frac{1}{4} = \\frac{1}{2}.$`,
      },
      {
        id: "prob-sec-2-5-11-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `根据 $\\frac{y_{n+1} - x_{n+1}}{y_n - x_n} = \\frac{f(y_n) - f(x_n)}{y_n - x_n}$ 及拉格朗日中值定理, 知存在一点 $\\xi \\in (x_n, y_n)$ , 使得 $\\frac{y_{n+1} - x_{n+1}}{y_n - x_n} = f'(\\xi)$ , 注意到 $\\xi \\in (x_n, y_n) \\subseteq \\left[0, \\frac{1}{2}\\right]$ , 又 $f'(x) = 3x^2 - 2x + \\frac{1}{2}$ 在 $\\left[0, \\frac{1}{2}\\right]$ 上的最大值为 $f(0) = \\frac{1}{2}$ , 因此, $f'(\\xi) < \\frac{1}{2}$ , 即 $\\frac{y_{n+1} - x_{n+1}}{y_n - x_n} < \\frac{1}{2}$ .

评注 本题是以高等数学知识为背景而用初等数学语言表述的综合题，涉及的有函数、导数、数列、不等式等知识，综合考查了迭代、递推、归纳、放缩等方面的能力。事实上，题目中的条件“ $x_{0}\\in\\left(0,\\frac{1}{2}\\right)$ ，使 $f(x_{0})=x_{0}$ ”可以省略，因为若设 $g(x)=f(x)-x$ ，则 $g(x)$ 在 $\\left[0,\\frac{1}{2}\\right]$ 上连续，且 $g(0)>0,g\\left(\\frac{1}{2}\\right)<0$ ，因此，必存在 $x_{0}\\in\\left(0,\\frac{1}{2}\\right)$ ，使 $g(x_{0})=0$ ，即有 $f(x_{0})=x_{0}$ 。

10. 借助极坐标巧解高考题`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-2-5-12",
    topicId: "topic-sec-2-5",
    title: `如图 3-2 所示, 中心在原点 O 的椭圆的右焦点为`,
    content: `如图 3-2 所示, 中心在原点 O 的椭圆的右焦点为 $F(3,0)$ , 右准线 l 的方程为: x=12.
(1)求椭圆的方程.
(2)在椭圆上任取三个不同点 $P_{1},P_{2},P_{3}$ ，使

$$
\\angle P _ {1} F P _ {2} = \\angle P _ {2} F P _ {3} = \\angle P _ {3} F P _ {1}.
$$

证明： $\\frac{1}{|FP_{1}|}+\\frac{1}{|FP_{2}|}+\\frac{1}{|FP_{3}|}$ 为定值，并求此定值.

![](images/7559900b80ebf7433e93f06a67457b2ffb89cddd568a8a7d92a50566e0401b87.jpg)

图3-2`,
    preview: `如图 3-2 所示, 中心在原点 O 的椭圆的右焦点为 F(3,0) , 右准线 l 的方程为: x=12. (1)求椭圆的方程. (2)在椭圆上任取三个不同点`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-2-5-12-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)略

(2)由(1)知椭圆的方程为 $\\frac{x^{2}}{36}+\\frac{y^{2}}{27}=1$ ，得 $e=\\frac{c}{a}=\\frac{1}{2},p=12-3=9$

则椭圆的极坐标方程为： $\\rho=\\frac{ep}{1-e\\cos\\theta}=\\frac{\\frac{1}{2}\\times9}{1-\\frac{1}{2}\\cos\\theta}=\\frac{9}{2-\\cos\\theta}$

同样，记椭圆的右顶点为 A，并设 $\\angle AFP_{1} = \\theta$ ，

则 $\\angle AFP_{2} = \\frac{2}{3}\\pi -\\theta ,\\angle AFP_{3} = \\frac{2\\pi}{3} +\\theta ,$

$$
\\rho_ {1} = \\frac {9}{2 - \\cos \\theta}, \\rho_ {2} = \\frac {9}{2 - \\cos \\left(\\frac {2 \\pi}{3} - \\theta\\right)}, \\rho_ {3} = \\frac {9}{2 - \\cos \\left(\\frac {2 \\pi}{3} + \\theta\\right)},
$$

$$
\\begin{array}{l} \\frac {1}{| F P _ {1} |} + \\frac {1}{| F P _ {2} |} + \\frac {1}{| F P _ {3} |} = \\frac {1}{\\rho_ {1}} + \\frac {1}{\\rho_ {2}} + \\frac {1}{\\rho_ {3}} \\\\ = \\frac {2 - \\cos \\theta}{9} + \\frac {2 - \\cos \\left(\\frac {2 \\pi}{3} - \\theta\\right)}{9} + \\frac {2 - \\cos \\left(\\frac {2 \\pi}{3} + \\theta\\right)}{9} = \\frac {2}{3}. \\\\ \\end{array}
$$

对于一个学有余力的同学来说,适当参加一些竞赛学习,掌握一些竞赛知识对高考肯定是大有裨益的,古人云“会当凌绝顶,一览众山小”.

当然,数学竞赛涉及的内容很广,从高考来看,也未必有必要全面深入,我们可以走捷径,抓大放小,何谓“大”,笔者觉得递推方法与放缩技巧在高考压轴题中频频亮相,因此,本章以此为突破,抛砖引玉.`,
      },
    ],
    tags: [],
  },
]
