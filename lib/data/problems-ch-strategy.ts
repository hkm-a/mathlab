import type { Problem } from "./types"

export const problems_chstrategy: Problem[] = [
  {
    id: "prob-sec-1-1-1",
    topicId: "topic-sec-1-1",
    title: `正方形 ABCD 的边长是 2, E 是 AB 的中点`,
    content: `（2023 年高考全国乙卷文科第 6 题）正方形 ABCD 的边长是 2, E 是 AB 的中点，则 $\\overrightarrow{EC} \\cdot \\overrightarrow{ED}=$ （）
A. $\\sqrt{5}$

B. 3

C. $2\\sqrt{5}$

D. 5`,
    preview: `正方形 ABCD 的边长是 2, E 是 AB 的中点，则 →EC · →ED= （） A. √5 B. 3 C. 2√5 D. 5`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-1-1-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `基底法.

以 $\\{\\overrightarrow{AB},\\overrightarrow{AD}\\}$ 为基底向量，可知 $|\\overrightarrow{AB}|=|\\overrightarrow{AD}|=2,\\overrightarrow{AB}\\cdot\\overrightarrow{AD}=0$ ，则

$$
\\overrightarrow {E C} = \\overrightarrow {E B} + \\overrightarrow {B C} = \\frac {1}{2} \\overrightarrow {A B} + \\overrightarrow {A D}, \\overrightarrow {E D} = \\overrightarrow {E A} + \\overrightarrow {A D} = - \\frac {1}{2} \\overrightarrow {A B} + \\overrightarrow {A D},
$$

所以 $\\overrightarrow{EC}\\cdot\\overrightarrow{ED}=\\left(\\frac{1}{2}\\overrightarrow{AB}+\\overrightarrow{AD}\\right)\\cdot\\left(-\\frac{1}{2}\\overrightarrow{AB}+\\overrightarrow{AD}\\right)=-\\frac{1}{4}\\overrightarrow{AB^{2}}+\\overrightarrow{AD^{2}}=-1+4=3.$`,
      },
      {
        id: "prob-sec-1-1-1-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `建系法.

如图 1-1-1 所示, 以 A 为坐标原点建立平面直角坐标系, 则

![](images/7743da94abf8cfa5200bde90d80ab3770dd3fe8aa980cbf8444716d69c8c8374.jpg)

$$
E (1, 0), C (2, 2), D (0, 2),
$$

可得 $\\overrightarrow{EC}=(1,2),\\overrightarrow{ED}=(-1,2)$ ,

所以 $\\overrightarrow{EC}\\cdot\\overrightarrow{ED}=-1+4=3.$`,
      },
      {
        id: "prob-sec-1-1-1-sol-2",
        title: `解法三`,
        method: "standard",
        steps: [],
        explanation: `定义法.

![](images/7743da94abf8cfa5200bde90d80ab3770dd3fe8aa980cbf8444716d69c8c8374.jpg)

图1-1-1

由题意可得: $ED=EC=\\sqrt{5},CD=2,$

在 $\\triangle CDE$ 中,由余弦定理可得

$$
\\cos \\angle D E C = \\frac {D E ^ {2} + C E ^ {2} - D C ^ {2}}{2 D E \\cdot C E} = \\frac {5 + 5 - 4}{2 \\times \\sqrt {5} \\times \\sqrt {5}} = \\frac {3}{5},
$$

所以 $\\overrightarrow{EC} \\cdot \\overrightarrow{ED} = |\\overrightarrow{EC}| |\\overrightarrow{ED}| \\cos \\angle DEC = \\sqrt{5} \\times \\sqrt{5} \\times \\frac{3}{5} = 3.$

故选 B.`,
      },
    ],
    tags: [],
    source: `2023 年高考全国乙卷文科第 6 题`,
  },
  {
    id: "prob-sec-1-1-2",
    topicId: "topic-sec-1-1",
    title: `已知正方形 ABCD 的边长为 1. 当每个`,
    content: `已知正方形 ABCD 的边长为 1. 当每个 $\\lambda_{i}(i=1,2,3,4,5,6)$ 取遍 ±1 时， $\\left|\\lambda_{1}\\overrightarrow{AB}+\\lambda_{2}\\overrightarrow{BC}+\\lambda_{3}\\overrightarrow{CD}+\\lambda_{4}\\overrightarrow{DA}+\\lambda_{5}\\overrightarrow{AC}+\\lambda_{6}\\overrightarrow{BD}\\right|$ 的最小值是 \\_\\_\\_\\_ ，最大值是 \\_\\_\\_\\_ 。`,
    preview: `已知正方形 ABCD 的边长为 1. 当每个 λ_i(i=1,2,3,4,5,6) 取遍 ±1 时， 的最小值是 \\_\\_\\_\\_ ，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-1-2-sol-8",
        title: `解法八`,
        method: "geometric",
        steps: [],
        explanation: `几何法——位移——绕来绕去的向量,从物理角度建立数学模型.

$\\lambda_{1} \\overrightarrow{AB} + \\lambda_{2} \\overrightarrow{BC} + \\lambda_{3} \\overrightarrow{CD} + \\lambda_{4} \\overrightarrow{DA} + \\lambda_{5} \\overrightarrow{AC} + \\lambda_{6} \\overrightarrow{BD}$ , 向量的加减可看成位置的移动, 假设移动一步为一个单位长度, 那么本题可以转化为从起点 $A$ 出发, 左右移动 4 步, 上下移动 4 步, 其中左右或者上下之中必有两步要相反, 所以位移最小是 0 , 不妨设左右中有两步相反, 那么位移的最大值是向右两步, 向上四步, 长度为 $\\sqrt{2^{2} + 4^{2}} = 2\\sqrt{5}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-1-3",
    topicId: "topic-sec-1-1",
    title: `如图 1-1-5 所示, 已知椭圆 C: x^2 +`,
    content: `如图 1-1-5 所示, 已知椭圆 $C: x^{2} + 4y^{2} = 4$ , 过椭圆 C 上第一象限的点 M 作椭圆的切线与 y 轴相交于点 P, O 是坐标原点, 作 $PN \\perp OM$ 于 N, 则 $|OM| \\cdot |ON|$ ( )

![](images/d818aafd972a4698e7f948cf5a6c13debd5c6537560eda5f0058f93e2e15a068.jpg)
A. 恒为定值

B. 有最小值没最大值

C. 有最大值没最小值

D. 既没最大值也没最小值`,
    preview: `如图 1-1-5 所示, 已知椭圆 C: x^2 + 4y^2 = 4 , 过椭圆 C 上第一象限的点 M 作椭圆的切线与 y 轴相交于点 P, O 是坐标原点`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-1-3-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `设 $M(x_{0}, y_{0})$ , $l_{PM}: x_{0}x + 4y_{0}y = 4$ ,

所以 $P\\left(0,\\frac{1}{y_{0}}\\right)$ ,

$l_{OM}, y=\\frac{y_{0}}{x_{0}}x$ , 因为 $PN \\perp OM$ ,

所以 $\\left\\{\\begin{aligned}l_{PN:y}&=-\\frac{x_{0}}{y_{0}}x+\\frac{1}{y_{0}}\\\\ l_{OM:y}&=\\frac{y_{0}}{x_{0}}x\\end{aligned}\\right.\\Rightarrow N\\left(\\frac{x_{0}}{x_{0}^{2}+y_{0}^{2}},\\frac{y_{0}}{x_{0}^{2}+y_{0}^{2}}\\right)$

所以 $|OM|\\cdot |ON| = \\left(1 + \\frac{y_0^2}{x_0^2}\\right)\\cdot \\frac{x_0^2}{x_0^2 + y_0^2} = 1.$

![](images/d818aafd972a4698e7f948cf5a6c13debd5c6537560eda5f0058f93e2e15a068.jpg)

图1-1-5`,
      },
      {
        id: "prob-sec-1-1-3-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `$\\overrightarrow{ON}=\\lambda\\overrightarrow{OM}=(\\lambda x_{0},\\lambda y_{0})$ ,

$$
\\left\\{ \\begin{array}{l} \\overrightarrow {P N} = \\left(\\lambda x _ {0}, \\lambda y _ {0} - \\frac {1}{y _ {0}}\\right), \\overrightarrow {P N} \\cdot \\overrightarrow {O M} = 0, \\\\ \\overrightarrow {O M} = (x _ {0}, y _ {0}), \\end{array} \\right.
$$

所以 $\\lambda x_{0}^{2} + \\lambda y_{0}^{2} - 1 = 0 \\Rightarrow x_{0}^{2} + y_{0}^{2} = \\frac{1}{\\lambda}$ ,

所以 $|OM|\\cdot |ON| = \\lambda \\overrightarrow{OM^2} = \\lambda (x_0^2 +y_0^2) = \\lambda \\cdot \\frac{1}{\\lambda} = 1.$`,
      },
      {
        id: "prob-sec-1-1-3-sol-2",
        title: `解法三`,
        method: "standard",
        steps: [],
        explanation: `$\\left|OM\\right|\\cdot\\left|ON\\right|=\\overrightarrow{OM}\\cdot\\overrightarrow{ON}=\\overrightarrow{OP}\\cdot\\overrightarrow{OM}=\\left(0,\\frac{1}{y_{0}}\\right)\\cdot(x_{0},y_{0})=1.$

评注 当两向量同向时, 逆用 $a \\cdot b = |a||b|$ , 将线段长的乘积问题转化为数量积问题, 从而可以坐标化处理.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-1-4",
    topicId: "topic-sec-1-1",
    title: `如图 1-1-6 所示`,
    content: `（多选题）如图 1-1-6 所示，已知双曲线 $C: \\frac{x^{2}}{a^{2}} - \\frac{y^{2}}{4} = 1 (a > 0)$ 的左焦点为 F，右顶点为 A，过 F 作 C 的一条渐近线的垂线，垂足为 H，且交 C 的左半支于点 P，若 $\\triangle AFH$ 是等腰三角形，则（）
![](images/5bd231feede6f63accba664536287bb69c2b5382db7d4ca48ec360d0d99d9890.jpg)

图1-1-6

A. C 的渐近线方程为 $y = \\pm \\frac{\\sqrt{3}}{3} x$

B. $C$ 的离心率为2

C. $\\triangle AFH$ 的面积为 $\\sqrt{3}$

D. $|FP| = 3 - \\sqrt{3}$`,
    preview: `如图 1-1-6 所示，已知双曲线 C: x^2{a^2} - y^24 = 1 (a > 0) 的左焦点为 F，右顶点为 A，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-1-4-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `由渐近线方程 $y=-\\frac{b}{a}x$ ，得 $k_{FH}=\\frac{a}{2}$ ，所以 $l_{FH}:x=\\frac{2}{a}y-c$ ，

联立 $\\left\\{\\begin{aligned}x&=\\frac{2}{a}y-c,\\\\ y&=-\\frac{2}{a}x,\\end{aligned}\\right.$ 得 $H\\left(-\\frac{a^{2}}{c},\\frac{2a}{c}\\right)$

因为 $\\triangle AFH$ 是等腰三角形,所以 $|FH|=|AH|$ ,

所以 $x_{H}=\\frac{x_{F}+x_{A}}{2}$ ，即 $-\\frac{a^{2}}{c}=\\frac{a-c}{2}$ ，所以 c=2a 或 c=-a（舍），

又因为 $a^{2}+4=c^{2}$ ，所以 $a=\\frac{2\\sqrt{3}}{3}, b=2, c=\\frac{4\\sqrt{3}}{3}$ .

对于 A, $y=\\pm\\frac{2}{a}x$ , 即 $y=\\pm\\sqrt{3}x$ , 所以 A 错.

对于 B, $e=\\frac{c}{a}=2$ , 所以 B 对.

对于 C, $S_{\\triangle AFH} = \\frac{1}{2} |AF| \\cdot |y_{H}| = \\frac{1}{2}(a + c) \\cdot \\frac{2a}{c} = \\frac{1}{2} \\cdot 3a \\cdot 1 = \\sqrt{3}$ ，所以 C 对.

对于 D, 联立 $\\left\\{\\begin{aligned} x &= \\sqrt{3}y - \\frac{4\\sqrt{3}}{3}, \\\\ 3x^{2} - y^{2} &= 4, \\end{aligned}\\right.$ 得 $y_{P} = \\frac{3}{2} - \\frac{\\sqrt{3}}{2}$ 或 $y_{P} = \\frac{3}{2} + \\frac{\\sqrt{3}}{2}$ (舍),

易知 $\\angle HFO=30^{\\circ}$ ,可得 $|PF|=2y_{P}=3-\\sqrt{3}$ ,所以D对.

故答案选 BCD.`,
      },
      {
        id: "prob-sec-1-1-4-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `因为 $\\triangle AFH$ 是等腰三角形,所以 $\\angle HFA=\\angle OAH$ ,

易知一条渐近线垂直平分 HA，由相似三角形可得 $\\frac{2}{c} = \\frac{1}{a}$ ，所以 c = 2a, $e = \\frac{c}{a} = 2$ ，所以 B 对.

对于 A, $e^{2}=1+\\frac{b^{2}}{a^{2}}=4$ ,所以 $\\frac{b^{2}}{a^{2}}=3$ ,

所以渐近线为 $y=\\pm\\sqrt{3}x$ ，所以 A 错.

因为 $a=\\frac{2\\sqrt{3}}{3}, b=2, c=\\frac{4\\sqrt{3}}{3}$ ，所以 $y_{H}=\\sqrt{4-(\\sqrt{3})^{2}}=1$ ，

所以 $S_{\\triangle AFH}=\\frac{1}{2}\\times2\\sqrt{3}\\times1=\\sqrt{3}$ ，所以 C 对.

对于 D, 如图 1-1-7 所示, 因为渐近线为 $y = \\pm \\sqrt{3} x$ ,

所以 $\\angle PFF'=\\frac{\\pi}{6}$ ,

令 $|PF|=m$ ，设双曲线的右焦点为 $F'$ ，在 $\\triangle PFF'$ 中，

由余弦定理得： $(m+2a)^{2}=m^{2}+(2c)^{2}-2m\\cdot2c\\cdot\\cos\\frac{\\pi}{6}$

$$
\\left(m + \\frac {4 \\sqrt {3}}{3}\\right) ^ {2} = m ^ {2} + \\left(\\frac {8 \\sqrt {3}}{3}\\right) ^ {2} - 2 m \\cdot \\frac {8 \\sqrt {3}}{3} \\cdot \\cos \\frac {\\pi}{6},
$$

![](images/1c6dd017fa91a7e853189a94a28ff45ae026bdff8f4406dfb1fa17a9008f0eef.jpg)

图1-1-7

所以 $m=3-\\sqrt{3}$ ，所以 D 对。故答案选 BCD。

评注 在利用等腰三角形这个条件时, 采取主动选择构造焦点三角形,利用定义用 $|PF|$ 表示 $|PF'|$ ,再结合余弦定理求出 $|PF|$ 的长,避免了联立方程、韦达定理等一系列小题大做手段,解法上更优化了,大大提高了解题效率.在处理焦半径长度问题时,`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-1-5",
    topicId: "topic-sec-1-1",
    title: `在 △ ABC 中, ∠ BCA = 90° , 点 M`,
    content: `在 $\\triangle ABC$ 中, $\\angle BCA = 90^{\\circ}$ , 点 M 是边 BC 的中点. 若 $\\sin\\angle BAM = \\frac{1}{3}$ , 则 $\\sin\\angle BAC =$ \\_\\_\\_\\_.`,
    preview: `在 △ ABC 中, ∠ BCA = 90° , 点 M 是边 BC 的中点. 若 ∠ BAM = 1/3 , 则 ∠ BAC = \\_\\_\\_\\_.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-1-5-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `建立如图 1-1-8 所示的直角坐标系.

设 $A(a,0), B(0,2), M(0,1)$ ，则 $k_{AB} = -\\frac{2}{a}, k_{MA} = -\\frac{1}{a}$

$$
\\tan \\angle B A M = \\frac {- \\frac {1}{a} + \\frac {2}{a}}{1 + \\frac {2}{a ^ {2}}} = \\frac {a}{a ^ {2} + 2},
$$

因为 $\\sin\\angle BAM=\\frac{1}{3}$ ，所以 $\\tan\\angle BAM=\\frac{1}{2\\sqrt{2}}$ ，

所以 $\\frac{a}{a^{2}+2}=\\frac{1}{2\\sqrt{2}}$ ，即 $a^{2}-2\\sqrt{2}a+2=0$ ，解得 $a=\\sqrt{2}$ ，

所以 $\\tan\\angle BAC=\\frac{2}{a}=\\sqrt{2}$ ，由此易得 $\\sin\\angle BAC=\\frac{\\sqrt{6}}{3}$ .

![](images/2869e5882eba0972082d16dd032b3b76d4a7c4f2310b014ba0f22035b8497e14.jpg)

图1-1-8`,
      },
      {
        id: "prob-sec-1-1-5-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `如图 1-1-9 所示，

![](images/5ba82050eb89fdae9e792487f941c90dfbf6a249761f2fa513d3c38197cea14d.jpg)

过点 B 作 $BD \\perp AM$ 交 AM 延长线于点 D，

令 BD=1, BM=x, AC=y(x>0, y>0).

因为 $\\sin\\angle BAM=\\frac{1}{3}$ ，所以 AB=3。

由 $\\triangle BDM\\sim\\triangle ACM$ 知，

$\\frac{AC}{AM} = \\frac{1}{x} = \\frac{y}{\\sqrt{x^2 + y^2}}$ 所以 $x^{2}y^{2} = x^{2} + y^{2}$

又因为在 Rt△ABC 中, 可得 $4x^{2} + y^{2} = 9$ , 两式消去 y, 得

$x^{2}(9 - 4x^{2}) = x^{2} + 9 - 4x^{2}$ ，可解得 $x^{2} = \\frac{3}{2}$ ，即 $x = \\frac{\\sqrt{6}}{2}$

所以 $\\sin\\angle BAC=\\frac{2x}{3}=\\frac{\\sqrt{6}}{3}.$`,
      },
      {
        id: "prob-sec-1-1-5-sol-2",
        title: `解法三`,
        method: "standard",
        steps: [],
        explanation: `如图 1-1-10 所示, 记 $\\angle BAC = \\alpha, \\angle BAM = \\beta,$

![](images/809a11c66a4ac704b346c7b30938b1ac6f3721bf90c4cad2d97e247b017e3fa3.jpg)

由 $S_{\\triangle ABM} = \\frac{1}{2} S_{\\triangle ABC}$ 得

$$
A B \\cdot A M \\cdot \\sin \\beta = \\frac {1}{2} A B \\cdot A C \\cdot \\sin \\alpha ,
$$

$AC = AM\\cdot \\cos (\\alpha -\\beta)$ ，代入化简可得 $\\sin \\alpha \\cdot \\cos (\\alpha -\\beta) = \\frac{2}{3}.$

同理，由 $S_{\\triangle ABM} = S_{\\triangle ACM}$ 化简可得 $\\cos \\alpha \\cdot \\sin (\\alpha -\\beta) = \\frac{1}{3}$

将上两式相加得 $\\sin (2\\alpha -\\beta) = 1$ ，注意到 $\\alpha ,\\beta$ 的范围，

可得 $2\\alpha - \\beta = \\frac{\\pi}{2}$ , 即 $2\\alpha = \\beta + \\frac{\\pi}{2}$ ,

所以 $\\cos2\\alpha=-\\sin\\beta=-\\frac{1}{3}.$

由此解得 $\\sin \\alpha = \\frac{\\sqrt{6}}{3}$ 即 $\\sin \\angle BAC = \\frac{\\sqrt{6}}{3}$ .`,
      },
      {
        id: "prob-sec-1-1-5-sol-3",
        title: `解法四`,
        method: "standard",
        steps: [],
        explanation: `如图 1-1-11 所示, 过点 M 作 $MD \\perp AB$ 交 AB 于 D 点,

令 MD=1，则 $AM=3, AD=2\\sqrt{2}$ .

又令 $CM = MB = x$ ，则 $BD = \\sqrt{x^2 - 1}, AC = \\sqrt{9 - x^2}$ .

因为 $AB^{2} = AC^{2} + BC^{2}$

所以 $(2\\sqrt{2}+\\sqrt{x^{2}-1})^{2}=(9-x^{2})+4x^{2}$ ，解得 $x=\\sqrt{3}$ .

所以 $\\sin \\angle BAC = \\frac{BC}{AB} = \\frac{2x}{2\\sqrt{2} + \\sqrt{x^2 - 1}} = \\frac{2\\sqrt{3}}{2\\sqrt{2} + \\sqrt{2}} = \\frac{\\sqrt{6}}{3}$

另解 $\\sin \\angle BAC = \\cos B = \\frac{BD}{BM} = \\frac{\\sqrt{x^2 - 1}}{x} = \\frac{\\sqrt{6}}{3}$

![](images/4bd7a764e72897e89774f9e4c089f090c136939e0328aad7955f54cf1ed86417.jpg)
图1-1-9

![](images/5ba82050eb89fdae9e792487f941c90dfbf6a249761f2fa513d3c38197cea14d.jpg)
图1-1-10

![](images/809a11c66a4ac704b346c7b30938b1ac6f3721bf90c4cad2d97e247b017e3fa3.jpg)

图1-1-11`,
      },
      {
        id: "prob-sec-1-1-5-sol-4",
        title: `解法五`,
        method: "standard",
        steps: [],
        explanation: `如图 1-1-12 所示, 过 B 作 $BD \\perp AB$ 交 AM 的延长线于 D 点, 令 BD = 1, 则 AD = 3. 设 BM = x, AM = y.

![](images/12359aac1cb7a5b5ceee4cb9e7ae5479cd8d20fc4590e27e14a8d8437a357c40.jpg)

$$
\\begin{array}{l} \\sin \\angle B M D = \\sin \\angle A M C = \\frac {A C}{y} = \\frac {\\sqrt {8 - 4 x ^ {2}}}{y}, \\\\ \\sin D = \\frac {2 \\sqrt {2}}{3}, \\\\ \\end{array}
$$

所以在 $\\triangle BDM$ 中,由正弦定理知 $\\frac{1}{\\sin\\angle BMD}=\\frac{x}{\\sin D}$ ,

即 $\\frac{y}{\\sqrt{8 - 4x^2}} = \\frac{x}{\\frac{2\\sqrt{2}}{3}}$ 得 $\\frac{y^2}{8 - 4x^2} = \\frac{9x^2}{8}$ . ①

又因为在 Rt△ACM 中， $y^{2}=x^{2}+8-4x^{2}=8-3x^{2}$

代入①式，得 $\\frac{8}{9}(8-3x^{2})=x^{2}(8-4x^{2})$ ，解得 $x^{2}=\\frac{4}{3}$ .

所以 $\\sin\\angle BAC=\\frac{2x}{2\\sqrt{2}}=\\frac{\\sqrt{6}}{3}.$`,
      },
      {
        id: "prob-sec-1-1-5-sol-5",
        title: `解法六`,
        method: "standard",
        steps: [],
        explanation: `如图 1-1-13 所示, 设 AM=1, $\\sin\\angle CAM=k(0<k<1)$ ,

![](images/12359aac1cb7a5b5ceee4cb9e7ae5479cd8d20fc4590e27e14a8d8437a357c40.jpg)

则 CM=BM=k, $AC=\\sqrt{1-k^{2}}$ ,

$$
AB = \\sqrt{AC^2 + CB^2} = \\sqrt{1 + 3k^2},
$$

在 $\\triangle ABM$ 中,由余弦定理,得

$\\cos \\angle BAM = \\frac{(1 + 3k^2) + 1 - k^2}{2\\sqrt{1 + 3k^2}} = \\frac{2\\sqrt{2}}{3}$ , 可解得 $k^2 = \\frac{1}{3}$ ,

即 $k = \\frac{\\sqrt{3}}{3}$ , 所以 $\\sin \\angle BAC = \\frac{BC}{AB} = \\frac{\\frac{2\\sqrt{3}}{3}}{\\sqrt{2}} = \\frac{\\sqrt{6}}{3}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-1-6",
    topicId: "topic-sec-1-1",
    title: `（2008年高考浙江卷)已知数列 a_n, a_n ≥ 0, a_1 = 0, a_n+1^2 + a_n+1 -`,
    content: `（2008年高考浙江卷)已知数列 $\\{a_{n}\\}, a_{n} \\geqslant 0, a_{1} = 0, a_{n+1}^{2} + a_{n+1} - 1 = a_{n}^{2} (n \\in \\mathbf{Z}^{+})$ . 记
$$
S _ {n} = a _ {1} + a _ {2} + \\dots + a _ {n}, T _ {n} = \\frac {1}{1 + a _ {1}} + \\frac {1}{(1 + a _ {1}) (1 + a _ {2})} + \\dots + \\frac {1}{(1 + a _ {1}) (1 + a _ {2}) \\cdots (1 + a _ {n})}.
$$

求证: 当 $n \\in Z^{+}$ 时,

(1) $a_{n}<a_{n+1}$ ;

(2) $S_{n}>n-2;$

(3) $T_{n}<3.$`,
    preview: `已知数列 . 记 求证: 当 n Z^+ 时, (1) a_n<a_n+1 ; (2) S_n>n-2; (3) T_n<3.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-1-6-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `第(1)小题要证明 $a_{n}<a_{n+1}$ ，实质上是比较两数大小，教材中关于比较两数大小的思路最典型的是：作差比较与作商比较，对于本题两种方法都可顺利实现.

(1)证法一（作差比较）由于 $a_{n}\\geqslant0$ ，因此，只要证明 $a_{n}^{2}<a_{n+1}^{2}$ ，即 $a_{n+1}^{2}-a_{n}^{2}>0$ .

而由已知条件知 $a_{n+1}^{2}-a_{n}^{2}=1-a_{n+1}$ ，所以只要证明 $a_{n+1}<1$ 。

注意到 $a_{n + 1}^2 +a_{n + 1} - 1 = a_n^2\\Leftrightarrow a_{n + 1}^2 +a_{n + 1} - 2 = a_n^2 -1$

$$
\\Leftrightarrow (a _ {n + 1} + 2) (a _ {n + 1} - 1) = (a _ {n} - 1) (a _ {n} + 1),
$$

因此， $a_{n+1}-1$ 与 $a_{n}-1$ 同号，也与 $a_{1}-1=-1$ 同号，

因此， $a_{n+1}<1$ ，得证.

证法二（作商比较）因为 $a_{n} \\geqslant 0$ ，所以要证明 $a_{n} < a_{n+1}$ ，只要证 $\\frac{a_n}{a_{n+1}} < 1$ .

注意到 $a_{n + 1}^2 +a_{n + 1} - 1 = a_n^2\\Leftrightarrow \\frac{a_n^2}{a_{n + 1}^2} = 1 + \\frac{1}{a_{n + 1}} -\\frac{1}{a_{n + 1}^2} = 1 + \\frac{1}{a_{n + 1}}\\left(1 - \\frac{1}{a_{n + 1}}\\right),$

因此，也只要证明 $a_{n + 1} < 1$ ，由证法一可知成立.

如果以上两种方法都想不到,运用数学归纳法也可大功告成.

证法三 （数学归纳法）用数学归纳法证明.

①当 n=1 时，因为 $a_{2}$ 是方程 $x^{2}+x-1=0$ 的正根，所以 $a_{1}<a_{2}$ .

②假设当 $n=k(k\\in\\mathbf{Z}^{+})$ 时， $a_{k}<a_{k+1}$

因为 $a_{k + 1}^2 -a_k^2 = (a_{k + 2}^2 +a_{k + 2} - 1) - (a_{k + 1}^2 +a_{k + 1} - 1) = (a_{k + 2} - a_{k + 1})(a_{k + 2} + a_{k + 1} + 1),$

所以 $a_{k + 1} < a_{k + 2}$

即当 $n=k+1$ 时， $a_{n}<a_{n+1}$ 也成立.

根据①和②, 可知 $a_{n} < a_{n+1}$ 对任何 $n \\in Z^{+}$ 都成立.

有了第(1)小题作为基础,第(2)小题只要反复运用已知的递推关系式即可.

(2)证法一 欲证 $S_{n}>n-2$ ，只需证 $(a_{1}-1)+(a_{2}-1)+\\cdots+(a_{n}-1)>-2$ .

而由已知条件知 $a_{n + 1} - 1 = a_n^2 -a_{n + 1}^2$

所以 $(a_{1} - 1) + (a_{2} - 1) + \\dots +(a_{n} - 1) = -1 + a_{1}^{2} - a_{2}^{2} + a_{2}^{2} - a_{3}^{2} + \\dots +a_{n - 1}^{2} - a_{n}^{2}$

$$
= - 1 - a _ {n} ^ {2},
$$

由(1)知 $a_{n}<1$ ，从而 $-a_{n}^{2}>-1$ ，所以 $S_{n}>n-2$ ，得证.

证法二 由 $a_{k+1}^{2} + a_{k+1} - 1 = a_{k}^{2}, k = 1, 2, \\cdots, n - 1 (n \\geqslant 2)$ ，得

$$
a _ {n} ^ {2} + (a _ {2} + a _ {3} + \\dots + a _ {n}) - (n - 1) = a _ {1} ^ {2}.
$$

因为 $a_{1}=0$ ，所以 $S_{n}=n-1-a_{n}^{2}$ 。由以上(1)中证法一可知 $a_{n}<1, S_{n}>n-2$ 。

当然,有了(1), $a_{n}<1$ 也可用以下方法证得:

因为 $a_{n} < a_{n + 1}$ 及 $a_{n + 1} = 1 + a_n^2 -a_{n + 1}^2 < 1$ ，因此， $a_{n} <   1$

(3)标准答案中提供的方法看起来简洁,实际上难以想到.原解答如下:

由 $a_{k + 1}^2 +a_{k + 1} = 1 + a_k^2\\geqslant 2a_k$ 得

$$
\\frac {1}{1 + a _ {k + 1}} \\leqslant \\frac {a _ {k + 1}}{2 a _ {k}} (k = 2, 3, \\dots , n - 1, n \\geqslant 3),
$$

所以 $\\frac{1}{(1 + a_3)(1 + a_4)\\cdots(1 + a_n)}\\leqslant \\frac{a_n}{2^{n - 2}a_2}(n\\geqslant 3),$

于是 $\\frac{1}{(1 + a_2)(1 + a_3)\\cdots(1 + a_n)}\\leqslant \\frac{a_n}{2^{n - 2}(a_2^2 + a_2)} = \\frac{a_n}{2^{n - 2}} <   \\frac{1}{2^{n - 2}} (n\\geqslant 3),$

故当 $n \\geqslant 3$ 时, $T_{n} < 1 + 1 + \\frac{1}{2} + \\cdots + \\frac{1}{2^{n-2}} = 3 - \\frac{1}{2^{n-2}} < 3$ ,

又因为 $T_{1}<T_{2}<T_{3}$ ，所以 $T_{n}<3$ 。

事实上,根本无须如此“兴师动众”.

要证明 $T_{n}<3$ ，肯定要对

$$
T _ {n} = \\frac {1}{1 + a _ {1}} + \\frac {1}{(1 + a _ {1}) (1 + a _ {2})} + \\dots + \\frac {1}{(1 + a _ {1}) (1 + a _ {2}) \\cdots (1 + a _ {n})}
$$

进行求和化简放缩或放缩求和化简. 中学教材中, 对于数列求和, 最主要的策略就是转化, 化归为等差或等比数列来处理. 而从已知式的结构特征来看, 转化为等比数列是首选, 因此, 不妨对通项 $\\frac{1}{(1+a_{2})(1+a_{3})\\cdots(1+a_{n})}$ 进行放缩.

由 $a_{n} < a_{n + 1}$ 及 $a_{n}\\geqslant 0$ ，显然有 $\\frac{1}{(1 + a_2)(1 + a_3)\\cdots(1 + a_n)}\\leqslant \\frac{1}{(1 + a_2)^{n - 1}}$

因此， $T_{n}\\leqslant \\frac{1}{1 + a_{1}} +\\frac{1}{1 + a_{2}} +\\frac{1}{(1 + a_2)^2} +\\dots +\\frac{1}{(1 + a_2)^{n - 1}} = \\frac{1 - \\left(\\frac{1}{1 + a_2}\\right)^n}{1 - \\frac{1}{1 + a_2}} <   \\frac{1}{1 - \\frac{1}{1 + a_2}}.$

只要证明 $\\frac{1}{1-\\frac{1}{1+a_{2}}}<3$ ，化简可知只要证明 $a_{2}>\\frac{1}{2}$ ，

不难从已知条件解得 $a_{2}=\\frac{\\sqrt{5}-1}{2}>\\frac{1}{2}$ .

至此，原问题圆满解决。`,
      },
    ],
    tags: [],
    source: `2008年高考浙江卷`,
  },
  {
    id: "prob-sec-1-1-7",
    topicId: "topic-sec-1-1",
    title: `如图 1-1-14 所示, 已知椭圆的两个焦点`,
    content: `如图 1-1-14 所示, 已知椭圆的两个焦点 $F_{1}(-1,0)$ , $F_{2}(1,0)$ , 且椭圆与直线 $y=x-\\sqrt{3}$ 相切.

![](images/870525a73e7da1b18487fc3282fe1cd8b17a0c595f8269e83b21b688d6b8c545.jpg)
(1)求椭圆的方程；
(2) 过 $F_{1}$ 作两条互相垂直的直线 $l_{1}, l_{2}$ ，与椭圆分别交于 P, Q 及 M, N，求四边形 PMQN 面积的最大值与最小值.`,
    preview: `如图 1-1-14 所示, 已知椭圆的两个焦点 F_1(-1,0) , F_2(1,0) , 且椭圆与直线 y=x-√3 相切. (1)求椭圆的方程； (2)`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-1-7-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1) $\\frac{x^{2}}{2}+y^{2}=1.$ (过程略)

(2)`,
      },
      {
        id: "prob-sec-1-1-7-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `(i) 若直线 PQ 的斜率不存在, 即 x = -1, 可得 $\\left|PQ\\right| = \\sqrt{2}$ ,

![](images/870525a73e7da1b18487fc3282fe1cd8b17a0c595f8269e83b21b688d6b8c545.jpg)

图1-1-14

而此时直线 MN 方程为 $y=0, |MN|=2\\sqrt{2}$ ,

故 $S = \\frac{1}{2} PQ\\cdot MN = \\frac{1}{2}\\times \\sqrt{2}\\times 2\\sqrt{2} = 2.$

(ii)若直线 PQ 的斜率存在且不为零,设为 k.

将直线方程 $y = k(x + 1)$ 与 $\\frac{x^2}{2} + y^2 = 1$ 联立，

消元得 $(2k^{2}+1)x^{2}+4k^{2}x+2k^{2}-2=0$ ，

则 $x_{1} + x_{2} = \\frac{-4k^{2}}{2k^{2} + 1},x_{1}x_{2} = \\frac{2k^{2} - 2}{2k^{2} + 1},$

故 $|PQ| = \\sqrt{1 + k^2}\\sqrt{\\frac{16k^4}{(2k^2 + 1)^2} - \\frac{8k^2 - 8}{2k^2 + 1}} = \\frac{2\\sqrt{2}(k^2 + 1)}{2k^2 + 1}.$

而直线 $MN$ 的方程为 $y = -\\frac{1}{k} (x + 1)$ ，利用整体代换，可得

$$
| M N | = \\frac {2 \\sqrt {2} \\left(\\frac {1}{k ^ {2}} + 1\\right)}{2 \\left(\\frac {1}{k ^ {2}}\\right) + 1} = \\frac {2 \\sqrt {2} (1 + k ^ {2})}{2 + k ^ {2}},
$$

故 $S = \\frac{1}{2} |PQ|\\cdot |MN| = \\frac{4(1 + k^2)^2}{(2k^2 + 1)(2 + k^2)}.$

令 $t = k^2, t > 0$ ，则

$$
S = \\frac {4 (1 + t) ^ {2}}{(2 t + 1) (2 + t)} = \\frac {4 (t ^ {2} + 2 t + 1)}{2 t ^ {2} + 5 t + 2} = 2 \\left(1 - \\frac {t}{2 t ^ {2} + 5 t + 2}\\right) = 2 \\left(1 - \\frac {1}{2 t + \\frac {2}{t} + 5}\\right),
$$

因 $t > 0,2t + \\frac{2}{t}\\geqslant 4$ ，故 $S\\in \\left[\\frac{16}{9},2\\right)$

综上(i)(ii)得 $S \\in \\left[\\frac{16}{9}, 2\\right]$ , 故最大值为 2, 最小值为 $\\frac{16}{9}$ .`,
      },
      {
        id: "prob-sec-1-1-7-sol-3",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `的基础上， $|PQ| = 2\\sqrt{2} + \\frac{\\sqrt{2}}{2} \\cdot \\frac{-4k^2}{2k^2 + 1} = \\frac{2\\sqrt{2}(k^2 + 1)}{2k^2 + 1}$ ，以下同`,
      },
      {
        id: "prob-sec-1-1-7-sol-4",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `.

另解 以 $F_{1}$ 为极点, 垂直于左准线的方向为极轴的正方向, 建立极坐标系, 则椭圆的方程为 $\\rho=\\frac{ep}{1-e\\cos\\alpha}$ .

又 $l_{1} \\perp l_{2}$ , 则 $|F_{1}P| = \\frac{ep}{1 - e\\cos\\alpha}, |F_{1}M| = \\frac{ep}{1 - e\\cos\\left(\\alpha + \\frac{\\pi}{2}\\right)} = \\frac{ep}{1 + e\\sin\\alpha}$ ,

$$
| F _ {1} Q | = \\frac {e p}{1 - e \\cos (\\alpha + \\pi)} = \\frac {e p}{1 + e \\cos \\alpha},
$$

$$
| F _ {1} N | = \\frac {e p}{1 - e \\cos \\left(\\alpha + \\frac {3 \\pi}{2}\\right)} = \\frac {e p}{1 - e \\sin \\alpha}.
$$

$$
\\begin{array}{l} = \\frac {1}{2} \\cdot \\frac {2 e p}{1 - e ^ {2} \\cos^ {2} \\alpha} \\cdot \\frac {2 e p}{1 - e ^ {2} \\sin^ {2} \\alpha} \\\\ = \\frac {8 e ^ {2} p ^ {2}}{4 - 4 e ^ {2} + e ^ {4} \\sin^ {2} 2 \\alpha}. \\\\ \\end{array}
$$

则 $S_{PMQN} = \\frac{1}{2} |PQ|\\cdot |MN| = \\frac{1}{2} (|F_1P| + |F_1Q|)(|F_1M| + |F_1N|)$

由 $\\frac{x^{2}}{2}+y^{2}=1$ 得 $e=\\frac{\\sqrt{2}}{2},p=1$ ，代入得 $S_{PMQN}=\\frac{16}{8+\\sin^{2}2\\alpha}$

故 $S_{PMQN}$ 的最大值为 $\\frac{16}{8} = 2$ ，最小值为 $\\frac{16}{8 + 1} = \\frac{16}{9}$

在求出椭圆方程后,第(2)小题通常的做法是设直线的方程,然后与椭圆方程联立方程组,利用弦长公式可分别求出 PQ,MN 的长度.此方法思路自然,但计算显烦琐,耗时长,易出错,即易忽视斜率不存在的特殊情形.`,
      },
      {
        id: "prob-sec-1-1-7-sol-5",
        title: `解法二`,
        method: "geometric",
        steps: [],
        explanation: `结合椭圆的第二定义,巧用焦半径公式,在一定程度上简化了运算.而仔细审视条件,妙用选修知识,借助椭圆的极坐标方程,可得焦半径公式的另外一种形式,可大大简化运算,问题快速获解.

解析几何问题着重考查解析几何的基本思想,利用代数的方法研究几何问题的特点和性质.因此,在解题的过程中,计算占了很大的比例,但计算要根据题目中曲线的特点和相互之间的关系进行,所以曲线的定义和性质是解题的基础,而在计算过程中,将某一个“因式”作为一个整体处理,可以简化运算.

在另解的基础上,可得一般情形:过椭圆 $\\frac{x^{2}}{a^{2}}+\\frac{y^{2}}{b^{2}}=1(a>b>0)$ 的左焦点 $F_{1}$ 作两条互相垂直的直线 $l_{1},l_{2}$ ，与椭圆分别交于P,Q及M,N，则四边形PMQN的面积的最大值为 $\\frac{2e^{2}p^{2}}{1-e^{2}}=2b^{2}$ ，最小值为 $\\frac{8e^{2}p^{2}}{4-4e^{2}+e^{4}}=\\frac{8a^{2}b^{4}}{(a^{2}+b^{2})^{2}}$ .

“喝牛奶能品出青草的芳香”，学数学做数学题也是一样，只有真正将基础知识了然于胸，遇到难题时，你才能抓住根本，巧妙得解。`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-2-1",
    topicId: "topic-sec-1-2",
    title: `如图 1-2-1 所示, 在 △ ABC 中, AB =`,
    content: `如图 1-2-1 所示, 在 $\\triangle ABC$ 中, $AB = 2\\sqrt{3}$ , AC = 4, $AD = \\sqrt{13}$ , D 为线段 BC 中点, 则 $\\angle B$ 的余弦值为 \\_\\_\\_\\_.
![](images/1bb807cff93f3f60abe33acff0899b45d0a4e81a6ab4553c4af7bb416d355193.jpg)

图1-2-1`,
    preview: `如图 1-2-1 所示, 在 △ ABC 中, AB = 2√3 , AC = 4, AD = √13 , D 为线段 BC 中点, 则 ∠ B 的余弦值为 \\`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-2-1-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `设 $\\angle C=\\theta,BD=a$ ，由余弦定理得

$$
a ^ {2} + 4 ^ {2} - 2 \\times 4 a \\times \\cos \\theta = 1 3, (2 a) ^ {2} + 4 ^ {2} - 2 \\times 8 a \\times \\cos \\theta = 1 2,
$$

解得 a=1，则 BC=2.

因为 $BC^{2}+AB^{2}=AC^{2}$ ，所以 $\\angle B=90^{\\circ}$ ，所以 $\\cos B=0$ 。`,
      },
      {
        id: "prob-sec-1-2-1-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `设 BD=a，则 $\\triangle ABC$ 的半周长 $p=\\frac{4+2\\sqrt{3}+2a}{2}=2+\\sqrt{3}+a$ ，

$\\triangle ABD$ 的半周长 $p^{\\prime} = \\frac{2\\sqrt{3} + \\sqrt{13} + a}{2}$

由海伦公式可得

$$
S _ {\\triangle A B C} = \\sqrt {p (p - 2 a) (p - 2 \\sqrt {3}) (p - 4)},
$$

$$
S _ {\\triangle A B D} = \\sqrt {p ^ {\\prime} (p ^ {\\prime} - a) (p ^ {\\prime} - 2 \\sqrt {3}) (p ^ {\\prime} - \\sqrt {1 3})},
$$

又 $S_{\\triangle ABC} = 2S_{\\triangle ABD}$

则 $\\sqrt{p(p - 2a)(p - 2\\sqrt{3})(p - 4)} = 2\\sqrt{p'(p' - a)(p' - 2\\sqrt{3})(p' - \\sqrt{13})}$

即 $4(2+\\sqrt{3}+a)(2+\\sqrt{3}-a)(2+a-\\sqrt{3})(\\sqrt{3}+a-2)$

$$
= (2 \\sqrt {3} + \\sqrt {1 3} + a) (2 \\sqrt {3} + \\sqrt {1 3} - a) (\\sqrt {1 3} + a - 2 \\sqrt {3}) (2 \\sqrt {3} + a - \\sqrt {1 3}),
$$

化解得 $a^{4}-2a^{2}+1=0$ ，解得 a=1，则易得 $\\cos B=0$ 。`,
      },
      {
        id: "prob-sec-1-2-1-sol-2",
        title: `解法三`,
        method: "geometric",
        steps: [],
        explanation: `令 $\\overrightarrow{AD}=(\\sqrt{13},0),\\overrightarrow{DC}=(m,n)$ ，则 $\\overrightarrow{DB}=(-m,-n)$ .

因为 $\\overrightarrow{AD}+\\overrightarrow{DC}=\\overrightarrow{AC},\\overrightarrow{AD}+\\overrightarrow{DB}=\\overrightarrow{AB}$

所以 $(\\sqrt{13}+m)^{2}+n^{2}=4^{2},(\\sqrt{13}-m)^{2}+n^{2}=(2\\sqrt{3})^{2}$

所以 $m=\\frac{1}{\\sqrt{13}}, n=\\frac{\\sqrt{12}}{\\sqrt{13}}$ ,

所以 $\\left|\\overrightarrow{BD}\\right|=\\sqrt{m^{2}+n^{2}}=1$ , 所以 BC=2.

则易得 $\\cos B=0$ .

评注 此题来源于一道立体几何题常规解法中的一步。解法一使用了余弦定理, 较为常规; 解法二使用了海伦公式, 此公式在初中竞赛中已引入介绍, 但会使用的人不多, 方程看似烦琐且有四次方, 实际求解并不复杂, 因此考验了学生的魄力;`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-2-2",
    topicId: "topic-sec-1-2",
    title: `在 △ ABC 中`,
    content: `在 $\\triangle ABC$ 中，M, N 是边 BC 上的点，且 $BM = MN = NC$ ，若 $\\overrightarrow{AB} \\cdot \\overrightarrow{AM} = 2\\overrightarrow{AC} \\cdot \\overrightarrow{AN}$ ，则 $\\cos \\angle AMN$ 的最小值 ( )
A. $\\frac{1}{7}$

B. $\\frac{2\\sqrt{2}}{7}$

C. $\\frac{\\sqrt{3}}{7}$

D. $\\frac{4}{7}$`,
    preview: `在 △ ABC 中，M, N 是边 BC 上的点，且 BM = MN = NC ，若 →AB · →AM = 2→AC · →AN ，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-2-2-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `如图 1-2-2 所示, 以 M 为 $(0,0)$ , 以 BC 所在直线为 x 轴建立坐标系, 不妨令 MN=1, $B(-1,0)$ , $N(1,0)$ , $C(2,0)$ , $A(x,y)$ ,

因为 $\\overrightarrow{AB}\\cdot\\overrightarrow{AM}=2\\overrightarrow{AC}\\cdot\\overrightarrow{AN}$ ,

所以， $\\left(x-\\frac{7}{2}\\right)^{2}+y^{2}=\\frac{33}{4}$

即 A 的轨迹是以 $G\\left(\\frac{7}{2},0\\right)$ 为圆心， $\\frac{\\sqrt{33}}{2}$ 为半径的圆.

![](images/5ceb8ac501488ad37a21f61470d986bd29d1e0f5338ed55de28b477c7a5a07ee.jpg)

图1-2-2

要使 $\\cos\\angle AMN$ 最小, 则 MA 与圆 G 相切时,

$\\cos \\angle AMN = \\frac{AM}{MG} = \\frac{2}{\\frac{7}{2}} = \\frac{4}{7}$ , 所以答案选 D.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-2-3",
    topicId: "topic-sec-1-2",
    title: `在 (1 + x)^6 (1 + y)^4 的展开式中`,
    content: `在 $(1 + x)^6 (1 + y)^4$ 的展开式中，记 $x^{m}y^{n}$ 项的系数为 $f(m,n)$ ，则 $f(3,0) + f(2,1) + f(1,2) + f(0,3) =$ （）
A. 45

B. 60

C. 120

D. 210`,
    preview: `在 (1 + x)^6 (1 + y)^4 的展开式中，记 x^my^n 项的系数为 f(m,n) ，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-2-3-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `按一般思路是这样解的：

$$
f (3, 0) + f (2, 1) + f (1, 2) + f (0, 3) = C _ {6} ^ {3} C _ {4} ^ {0} + C _ {6} ^ {2} C _ {4} ^ {1} + C _ {6} ^ {1} C _ {4} ^ {2} + C _ {6} ^ {0} C _ {4} ^ {3} = 1 2 0.
$$

如果能利用组合数学中算两次的思想,则能“秒杀”,原问题等价于从6名男生4名女生中选出3人,共有几种选法,因此,答案为 $C_{10}^{3}=120$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-2-4",
    topicId: "topic-sec-1-2",
    title: `已知函数 f(x) = x^3 + ax^2 + bx +`,
    content: `已知函数 $f(x) = x^{3} + ax^{2} + bx + c$ ，且 $0 < f(-1) = f(-2) = f(-3) \\leqslant 3$ ，则（）
A. $c \\leqslant 3$

B. $3 < c \\leq 6$

C. $6 < c \\leqslant 9$

D. $c > 9$`,
    preview: `已知函数 f(x) = x^3 + ax^2 + bx + c ，且 ，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-2-4-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `按常规的想法是解方程组,由 $f(-1)=f(-2)=f(-3)$ 得

$\\left\\{ \\begin{array}{l} -1 + a - b + c = -8 + 4a - 2b + c, \\\\ -1 + a - b + c = -27 + 9a - 3b + c, \\end{array} \\right.$ 解得 $\\left\\{ \\begin{array}{l}a = 6,\\\\ b = 11, \\end{array} \\right.$

所以 $f(x)=x^{3}+6x^{2}+11x+c.$

又由 $0 < f(-1) \\leqslant 3$ ，得 $0 < -1 + 6 - 11 + c \\leqslant 3$ ，即 $6 < c \\leqslant 9$ ，故选 C.

如果能借助一元三次方程的韦达定理,也可“秒杀”该题.

令 $f(-1) = f(-2) = f(-3) = t$ ，则 $f(x) - t = 0$ 的三根为-1，-2，-3，

利用韦达定理, 得 $(-1)(-2)(-3)=t-c$ ,

所以 $c=t+6\\in(6,9]$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-2-5",
    topicId: "topic-sec-1-2",
    title: `已知函数 f(x)=e^x-kx, x R`,
    content: `已知函数 $f(x)=\\mathrm{e}^{x}-kx, x \\in \\mathbb{R}$ ,
(1) 若 k = e，试确定函数 $f(x)$ 的单调区间；

(2) 若 k > 0，且对于任意 $x \\in R, f(|x|) > 0$ 恒成立，试确定实数 k 的取值范围；

(3)设函数 $F(x)=f(x)+f(-x)$ ，求证：

$$
F (1) F (2) \\dots F (n) > (\\mathrm{e} ^ {n + 1} + 2) ^ {\\frac {n}{2}} (n \\in \\mathbf {Z} ^ {+}).
$$`,
    preview: `已知函数 f(x)=e^x-kx, x R , (1) 若 k = e，试确定函数 f(x) 的单调区间； (2) 若 k > 0，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-2-5-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `本题的三个小题之间联系不密切,其中(1)(2)借助导数不难解得,具体解答略;第(3)小题受思维定式的影响,一般会先将 $F(x)$ 具体化,再代入所求证不等式左边,从而将原不等式转化为 $(\\mathrm{e} + \\mathrm{e}^{-1})(\\mathrm{e}^{2} + \\mathrm{e}^{-2})(\\mathrm{e}^{3} + \\mathrm{e}^{-3})\\cdots (\\mathrm{e}^{n} + \\mathrm{e}^{-n}) > (\\mathrm{e}^{n + 1} + 2)^{\\frac{n}{2}} (n \\in \\mathbf{Z}^{+})$ .

注意到不等式左右两边均含有 $n$ ，因此可运用数学归纳法进行证明，为此，从 $k$ 到 $k + 1$ 时需要证明 $(\\mathrm{e}^{k + 1} + \\mathrm{e}^{-(k + 1)})(\\mathrm{e}^{k + 1} + 2)^{\\frac{k}{2}}\\geqslant (\\mathrm{e}^{k + 2} + 2)^{\\frac{k + 1}{2}}$ ，而该不等式的证明既要用到放缩技巧又要用到多元柯西不等式，而这些都属于竞赛中的高层次要求.因此，解答时必须另辟蹊径

注意到 $n+1=(n-1)+2=\\cdots=1+n$ ，于是可借鉴课本中推导等差数列前 n 项和公式时运用的“倒序相加法”，进行“倒序相乘”，并统一放缩。简解如下：

设 $m, n \\in \\mathbf{Z}^{+}$ , 则

$$
F (m) F (n) = \\mathrm{e} ^ {m + n} + \\mathrm{e} ^ {- (m + n)} + \\mathrm{e} ^ {m - n} + \\mathrm{e} ^ {- m + n} > \\mathrm{e} ^ {m + n} + \\mathrm{e} ^ {- (m + n)} + 2 > \\mathrm{e} ^ {m + n} + 2,
$$

因此， $F(1)F(n) > \\mathrm{e}^{n+1} + 2, F(2)F(n-1) > \\mathrm{e}^{n+1} + 2, \\cdots, F(n)F(1) > \\mathrm{e}^{n+1} + 2.$

由此得 $\\left[F(1)F(2)\\cdots F(n)\\right]^{2}=\\left[F(1)F(n)\\right]\\left[F(2)F(n-1)\\right]\\cdots\\left[F(n)F(1)\\right]$

$$
> (\\mathrm{e} ^ {n + 1} + 2) ^ {n},
$$

故 $F(1)F(2)\\dots F(n) > (\\mathrm{e}^{n + 1} + 2)^{\\frac{n}{2}},n\\in \\mathbf{Z}^{+}$

另外,我们经常会遇到有多个变量的问题,这些综合性问题中常常有一个变元处于主要地位,我们称之为主元,由于受思维定式的影响,解决该类问题时,我们往往对“主元”穷追猛打,当然,这在很多情况下是正确的.但在某些特定条件下,此路往往不畅,这时若能变更主元,转移变元在问题中的地位,就能使问题迎刃而解.如下题:

若不等式 $x^{2} + px > 4x + p - 3$ 对一切 $0 \\leqslant p \\leqslant 4$ 均成立，试求实数 $x$ 的取值范围.

若视 $x$ 为主元来处理，既烦琐且易出错，而实行主元的转化，使问题变成关于 $p$ 的一次不等式，则会峰回路转，解答如下：
由于 $x^{2}+px>4x+p-3$ ，因此 $(x-1)p+x^{2}-4x+3>0$ 。

令 $g(p)=(x-1)p+x^{2}-4x+3,$

则要使它对 $0 \\leqslant p \\leqslant 4$ 均有 $g(p) > 0$ , 只要有 $\\left\\{ \\begin{array}{l} g(0) > 0, \\\\ g(4) > 0, \\end{array} \\right.$ 解得 $x > 3$ 或 $x < -1$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-2-6",
    topicId: "topic-sec-1-2",
    title: `已知抛物线 C: y^2=4x 的焦点为 F`,
    content: `已知抛物线 $C: y^{2}=4x$ 的焦点为 F，过点 $K(-1,0)$ 的直线 l 与 C 相交于 A、B 两点，点 A 关于 x 轴的对称点为 D.
(1) 证明: 点 F 在直线 BD 上;

(2)设 $\\overrightarrow{FA}\\cdot\\overrightarrow{FB}=\\frac{8}{9}$ ，求 $\\triangle BDK$ 的内切圆M的方程.`,
    preview: `已知抛物线 C: y^2=4x 的焦点为 F，过点 K(-1,0) 的直线 l 与 C 相交于 A、B 两点，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-2-6-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `证法一 （1）证明“点 F 在直线 BD 上”，常规思路是将点 F 的坐标代入直线 BD 的方程中检验，可做以下解答：

设 $A(x_{1},y_{1}), B(x_{2},y_{2}), D(x_{1},-y_{1}), l$ 的方程为 $x=my-1(m\\neq0)$ ,

将 x=my-1 代入 $y^{2}=4x$ 并整理得 $y^{2}-4my+4=0$ ，从而 $y_{1}+y_{2}=4m, y_{1}y_{2}=4$ ，

直线 BD 的方程为: $y - y_{2} = \\frac{y_{2} + y_{1}}{x_{2} - x_{1}} \\cdot (x - x_{2})$ ，即 $y - y_{2} = \\frac{4}{y_{2} - y_{1}} \\cdot \\left(x - \\frac{y_{2}^{2}}{4}\\right)$ ,

令 y=0，得 $x=\\frac{y_{1}y_{2}}{4}=1$ ，所以点 $F(1,0)$ 在直线 BD 上.

由于题目条件的原因,本题求点与求直线方程都不难.如果换一个情境,换一组数据,以上解答就不一定值得提倡了.我们若能突破思维定式,充分挖掘问题的内涵,还能得到许多“更高更妙”的解法.

证法二 设直线 $KB$ 的方程为 $x = my - 1 (m \\neq 0)$ , 直线 $FB$ 的方程为 $x = ny + 1$ , $A(x_1, y_1), B(x_2, y_2)$ , 其中 $x_1 \\neq x_2, y_1 \\neq y_2$ , 直线 $FB$ 与抛物线的另一交点为 $E(x_3, y_3)$ .

由 $\\left\\{\\begin{aligned}x&=my-1,\\\\ y^{2}&=4x\\end{aligned}\\right.$ 得 $y^{2}-4my+4=0$ ，所以 $y_{1}y_{2}=4;$ ①

由 $\\left\\{\\begin{aligned}x&=ny+1,\\\\ y^{2}&=4x\\end{aligned}\\right.$ 得 $y^{2}-4ny-4=0$ ，所以 $y_{3}y_{2}=-4.$ ②

对比①②可得 $y_{3} = -y_{1}$ ，结合抛物线的对称性可知，点 E 与点 A 关于 x 轴对称，故点 D 即点 E，从而点 F、D、B 共线，点 F 在直线 BD 上.

证法三 设直线 AB 的方程为 $x=ny-1, A(x_{1},y_{1}), B(x_{2},y_{2})$ ，则 $D(x_{1},-y_{1})$ .

由 $\\left\\{\\begin{aligned}y^{2}&=4x,\\\\ x&=ny-1\\end{aligned}\\right.$ 有 $y^{2}-4ny+4=0$ ，则 $\\left\\{\\begin{aligned}y_{1}&+y_{2}=4n,\\\\ y_{1}y_{2}&=4,\\\\\\Delta&=16(n^{2}-1)>0,\\end{aligned}\\right.$ 易知 $F(1,0)$ .

所以 $k_{BF} = \\frac{y_2}{x_2 - 1} = \\frac{y_2}{ny_2 - 2}, k_{DF} = \\frac{-y_1}{x_1 - 1} = \\frac{-y_1}{ny_1 - 2}.$

又由 $y_{2}(ny_{1} - 2) + y_{1}(ny_{2} - 2) = 2ny_{1}y_{2} - 2(y_{1} + y_{2}) = 8n - 8n = 0$ 得 $k_{BF} = k_{DF}$

对 $x_{1}=x_{2}=1$ ，上述结论仍成立。故点 F 在直线 BD 上。

证法四 设 $A(x_{1}, y_{1})$ , $B(x_{2}, y_{2})$ , 则 $D(x_{1}, -y_{1})$ .

又易知 $F(1,0)$ ，则 $\\overrightarrow{BF}=(1-x_{2},-y_{2}),\\overrightarrow{DF}=(1-x_{1},y_{1})$

设直线 AB 的方程为 x=ny-1，由 $\\left\\{\\begin{aligned}y^{2}=4x,\\\\ x=ny-1\\end{aligned}\\right.$ 得 $y^{2}-4ny+4=0$ ，

则 $y_{1}+y_{2}=4n, y_{1}y_{2}=4, \\Delta=16(n^{2}-1)>0.$

由 $y_{1}(1 - x_{2}) + y_{2}(1 - x_{1}) = y_{1}(2 - ny_{2}) + y_{2}(2 - ny_{1})$

$$
= - 2 n y _ {1} y _ {2} + 2 (y _ {1} + y _ {2}) = - 8 n + 8 n = 0,
$$

得 $\\overrightarrow{BF}\\parallel\\overrightarrow{DF}$ ，即点F在直线BD上.

证法五 如图 1-2-3 所示, 过点 A、B 分别作抛物线 C 的准线的垂线, 垂足分别为点 E、G, EA 的延长线与 BF 交于点 H.

由 $EH \\parallel FK \\parallel GB$ ，得 $\\frac{KA}{KB} = \\frac{FH}{FB}, \\frac{KA}{KB} = \\frac{AE}{GB}$ ，所以 $\\frac{FH}{FB} = \\frac{AE}{GB}$ .

又 $AE = AF, BG = BF$ ，故 $\\frac{FH}{BF} = \\frac{AF}{BF}$ 即 $AF = FH$

所以 $\\angle FAH=\\angle AHF=\\angle FBG.$

又因 A、D 关于直线 KF 对称, 所以 $\\angle AFK = \\angle KFD$ .

又 $EH \\parallel KF$ ，故 $\\angle AFK = \\angle FAH, \\angle KFD = \\angle FBG,$

从而 $\\angle KFD+\\angle KFB=180^{\\circ}$ ，因此F在直线BD上.

![](images/be4722c84eb0cf88a65662a475f3dc20a934f28c36cf34a884f18e983624a230.jpg)

图1-2-3

证法六 设 $A(x_{1},y_{1}), B(x_{2},y_{2})$ ，则 $D(x_{1}, - y_{1})$ ，易知 $|BF| = x_2 + 1$ ， $|DF| = x_1 + 1$ ，于是 $|BF| + |DF| = x_1 + x_2 + 2$ ，设直线 $AB$ 的方程为 $x = ny - 1$ .

由 $\\left\\{\\begin{aligned}y^{2}&=4x,\\\\ x&=ny-1\\end{aligned}\\right.$ 得 $y^{2}-4ny+4=0$ ，则 $\\left\\{\\begin{aligned}y_{1}&+y_{2}=4n,\\\\ y_{1}y_{2}&=4,\\\\\\Delta&=16(n^{2}-1)>0,\\end{aligned}\\right.$

则 $BF + DF = n(y_{1} + y_{2}) = 4n^{2}$

$$
\\begin{array}{l} B D = \\sqrt {(x _ {2} - x _ {1}) ^ {2} + (y _ {2} + y _ {1}) ^ {2}} = \\sqrt {n ^ {2} (y _ {2} - y _ {1}) ^ {2} + (y _ {2} + y _ {1}) ^ {2}} \\\\ = \\sqrt {n ^ {2} \\left[ (y _ {2} + y _ {1}) ^ {2} - 4 y _ {1} y _ {2} \\right] + (y _ {2} + y _ {1}) ^ {2}} = \\sqrt {n ^ {2} (1 6 n ^ {2} - 1 6) + 1 6 n ^ {2}} = 4 n ^ {2}. \\\\ \\end{array}
$$

因此 $BD=BF+FD$ ，即点 F 在直线 BD 上.

证法七 连接 KD, 并延长交抛物线 C 于点 J, 则由对称性知点 B 与点 J 关于 x 轴对称, 直线 AJ 与直线 BD 的交点必在 x 轴上, 下证直线 AJ 与直线 BD 的交点为 F.

设点 $A(x_{1},y_{1}),B(x_{2},y_{2})$ ，则 $D(x_{1}, - y_{1})$ ，易知 $F(1,0),J(x_2, - y_2)$

设直线 AB 的方程为 x = ny - 1，

由 $\\left\\{\\begin{aligned}y^{2}&=4x,\\\\ x&=ny-1\\end{aligned}\\right.$ 得 $y^{2}-4ny+4=0$ ，则 $\\left\\{\\begin{aligned}y_{1}&+y_{2}=4n,\\\\ y_{1}y_{2}&=4,\\\\ \\Delta&=16(n^{2}-1)>0,\\end{aligned}\\right.$

直线 $AJ$ 的方程为 $y - y_{1} = \\frac{-y_{2} - y_{1}}{x_{2} - x_{1}} (x - x_{1})$ ，即 $y - y_{1} = -\\frac{4}{y_{2} - y_{1}} (x - x_{1})$ ， ①

直线 $BD$ 的方程为 $y + y_{1} = \\frac{y_{2} + y_{1}}{x_{2} - x_{1}} (x - x_{1})$ ，即 $y + y_{1} = \\frac{4}{y_{2} - y_{1}} (x - x_{1})$ ， ②

联立①②式解得 x=1, y=0,

所以直线 AJ 与直线 BD 的交点为 $F(1,0)$ ，即点 F 在直线 BD 上.

证法八 假设直线 BD 与 x 轴的交点为 $F'$ (不同于点 F). 由题知点 K 为准线与 x 轴的交点, 过点 B、D 分别作准线的垂线, 垂足为点 M、N.

因为点 A 关于 x 轴的对称点为点 D，所以 $\\angle BKF = \\angle DKF$ ，则 $\\angle BKM = \\angle DKN$ ，

故 Rt△BKM∽Rt△DKN，得 $\\frac{BK}{DK}=\\frac{BM}{DN}.$ ①

在 $\\triangle BKD$ 中,根据角平分线的性质得 $\\frac{BK}{DK}=\\frac{BF'}{DF'}$ . ②

由抛物线的定义知 $\\frac{BF}{BM}=\\frac{DF}{DN}$ ，即 $\\frac{BF}{DF}=\\frac{BM}{DN}$ . ③

据①②③知 $\\frac{BF}{DF}=\\frac{BF'}{DF'}$ ,

所以在 $\\triangle FBD$ 中， $FF'$ 为 $\\angle BFD$ 的角平分线，即 $\\angle BFK=\\angle DFK$ .

又 $\\angle BKF=\\angle DKF,KF=KF$ , 得 $\\triangle BKF\\cong\\triangle DKF$ , 则DK=BK.

又 DK=AK，故 BK=AK，这与 A、B 为不同点矛盾.

综上知 $F'$ 与 F 为同一点, 即点 F 在直线 BD 上.

证法九 由于 A、B 两点在抛物线 C: $y^{2}=4x$ 上, 不妨设 A、B 两点均在 x 轴上方, $A(x_{1},2\\sqrt{x_{1}}), B(x_{2},2\\sqrt{x_{2}})$ , 且 $x_{1}>0, x_{2}>0, x_{1}\\neq x_{2}$ .

则 A 关于 x 轴的对称点 D 的坐标为 $(x_{1}, -2\\sqrt{x_{1}})$ ,

$$
\\overrightarrow {K A} = (x _ {1} + 1, 2 \\sqrt {x _ {1}}), \\overrightarrow {K B} = (x _ {2} + 1, 2 \\sqrt {x _ {2}}).
$$

由 $\\overrightarrow{KA}$ 与 $\\overrightarrow{KB}$ 共线，得 $(x_{1}+1)\\sqrt{x_{2}}=(x_{2}+1)\\sqrt{x_{1}}$ ，即 $x_{1}\\sqrt{x_{2}}-x_{2}\\sqrt{x_{1}}=\\sqrt{x_{1}}-\\sqrt{x_{2}}$ ，得 $\\sqrt{x_{1}x_{2}}(\\sqrt{x_{1}}-\\sqrt{x_{2}})=\\sqrt{x_{1}}-\\sqrt{x_{2}}$ ，得 $\\sqrt{x_{1}x_{2}}=1$ ，即 $x_{1}x_{2}=1$ 。①

又由 $F(1,0)$ ，得 $\\overrightarrow{FB}=(x_{2}-1,2\\sqrt{x_{2}})$ ， $\\overrightarrow{FD}=(x_{1}-1,-2\\sqrt{x_{1}})$ .

欲证点 F 在直线 BD 上, 只需证 $\\overrightarrow{FB}$ 与 $\\overrightarrow{FD}$ 共线,

只需证 $(x_{1}-1)\\sqrt{x_{2}}=-\\left(x_{2}-1\\right)\\sqrt{x_{1}}$ ,

即 $x_{1}\\sqrt{x_{2}} + x_{2}\\sqrt{x_{1}} = \\sqrt{x_{1}} + \\sqrt{x_{2}}$ ，即 $\\sqrt{x_1x_2}\\cdot (\\sqrt{x_1} +\\sqrt{x_2}) = \\sqrt{x_1} +\\sqrt{x_2},$

有 $\\sqrt{x_{1}x_{2}}=1$ ，即 $x_{1}x_{2}=1$ 。由①式知 $x_{1}x_{2}=1$ 成立。

所以点 F 在直线 BD 上.

证法十 过点 A、B 分别作准线的垂线 $AA_{1}$ 、 $BB_{1}$ ，垂足分别为点 $A_{1}$ 、 $B_{1}$ ，过点 A、B 分别作 x 轴的垂线，垂足分别为 $A_{2}$ 、 $B_{2}$ ，连接 AF、BF、DF。

因为 $AA_{1} \\parallel BB_{1}$ ，所以 $\\frac{KA_{1}}{AA_{1}} = \\frac{KB_{1}}{BB_{1}}$ .

又因为 $KA_{1}=AA_{2}, KB_{1}=BB_{2}$ ，由抛物线的定义得 $AA_{1}=AF, BB_{1}=BF$ ，

所以 $\\frac{AA_{2}}{AF}=\\frac{BB_{2}}{BF}.$

在 $Rt\\triangle AA_{2}F$ 、 $Rt\\triangle BB_{2}F$ 中，有 $\\sin\\angle AFA_{2}=\\sin\\angle BFB_{2}$

由于 $\\angle AFA_{2},\\angle BFB_{2}$ 都是锐角，所以 $\\angle AFA_{2}=\\angle BFB_{2}$ .

又 A、D 关于 x 轴对称，所以 $\\angle AFA_{2} = \\angle DFA_{2}$ ，所以 $\\angle BFB_{2} = \\angle DFA_{3}$ .

这就证明了点 F 在直线 BD 上.

(2)高考答案中提供的解法如下:`,
      },
      {
        id: "prob-sec-1-2-6-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `由(1)知 $x_{1}+x_{2}=(my_{1}-1)+(my_{2}-1)=4m^{2}-2$ ,

$$
x _ {1} x _ {2} = (m y _ {1} - 1) (m y _ {2} - 1) = 1.
$$

因为 $\\overrightarrow{FA}=(x_{1}-1,y_{1}),\\overrightarrow{FB}=(x_{2}-1,y_{2})$ ,

所以 $\\overrightarrow{FA} \\cdot \\overrightarrow{FB} = (x_1 - 1)(x_2 - 1) + y_1y_2$

$$
= x _ {1} x _ {2} - (x _ {1} + x _ {2}) + 1 + 4 = 8 - 4 m ^ {2},
$$

故 $8 - 4m^{2} = \\frac{8}{9}$ ，解得 $m = \\pm \\frac{4}{3}$

所以 l 的方程为 $3x+4y+3=0,3x-4y+3=0.$

又由(1)知 $y_{2} - y_{1} = \\pm \\sqrt{(4m)^{2} - 4\\times 4} = \\pm \\frac{4}{3}\\sqrt{7},$

故直线 BD 的斜率为 $\\frac{4}{y_{2}-y_{1}}=\\pm\\frac{3}{\\sqrt{7}}$ ,

因而直线 BD 的方程为 $3x+\\sqrt{7}y-3=0,3x-\\sqrt{7}y-3=0.$

因为 KF 为 $\\angle BKD$ 的平分线, 故可设圆心 $M(t,0)(-1<t<1)$ ,

$M(t,0)$ 到 l 及 BD 的距离分别为 $\\frac{3|t+1|}{5}$ , $\\frac{3|t-1|}{4}$ ,

由 $\\frac{3|t+1|}{5}=\\frac{3|t-1|}{4}$ 得 $t=\\frac{1}{9}$ 或t=9(舍去)，

故圆 M 的半径 $r=\\frac{3|t+1|}{5}=\\frac{2}{3}$ ,

所以圆 M 的方程为 $\\left(x-\\frac{1}{9}\\right)^{2}+y^{2}=\\frac{4}{9}$ .`,
      },
      {
        id: "prob-sec-1-2-6-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `设 $A\\left(\\frac{y_{1}^{2}}{4}, y_{1}\\right)$ , $B\\left(\\frac{y_{2}^{2}}{4}, y_{2}\\right)$ ，则 $\\overrightarrow{FA} \\cdot \\overrightarrow{FB} = \\left(\\frac{y_{1}^{2}}{4} - 1, y_{1}\\right)\\left(\\frac{y_{2}^{2}}{4} - 1, y_{2}\\right) = \\frac{8}{9}$ ,

故 $\\left(\\frac{y_{1}y_{2}}{4}\\right)^{2}-\\frac{y_{1}^{2}+y_{2}^{2}}{4}+1+y_{1}y_{2}=\\frac{8}{9}.$

由(1)得 $y_{1}y_{2}=4$ ，所以 $\\frac{y_{1}^{2}+y_{2}^{2}}{4}=\\frac{46}{9}$ .

又 $\\left\\{\\begin{aligned}y_{1}y_{2}&=4,\\\\ y_{1}^{2}+y_{2}^{2}&=\\frac{184}{9},\\end{aligned}\\right.$ 所以 $y_{1}+y_{2}=\\pm\\frac{16}{3}.$

不妨取 $y_{1}+y_{2}=\\frac{16}{3}$ ，则 AB 的中点坐标是 $\\left(\\frac{23}{9},\\frac{8}{3}\\right)$ ，

得 $k_{AB} = \\frac{3}{4} = \\tan \\angle BKF,$

所以 $\\cos\\angle BKF=\\frac{4}{5}$ ， $\\sin\\angle BKF=\\frac{3}{5}$ .

过点 B 作 $\\angle KBF$ 平分线交 x 轴于点 E，作 BH 垂直准线于点 H，如图 1-2-4 所示，

![](images/55ed3c3b3f6b181794ba0752e33c97e5e09b5753cbc4b00c018213405585f4ea.jpg)

图1-2-4

则 $\\cos\\angle BKF=\\cos\\angle HBK=\\frac{4}{5}=\\frac{|BH|}{|BK|}=\\frac{|BF|}{|BK|}.$

由 $\\triangle KBF$ 的内角平分线性质得 $\\frac{|BF|}{|BK|}=\\frac{|FE|}{|EK|}=\\frac{4}{5}$ ,

所以 $|KE|=\\frac{10}{9}$ ，点E的坐标为 $\\left(\\frac{1}{9},0\\right)$ ，

所以点 E 到直线 AB 的距离为 $\\frac{10}{9} \\times \\frac{3}{5} = \\frac{2}{3}$ .

又点 A 关于 x 轴的对称点为 D，所以 $\\angle BKD$ 的平分线为 x 轴，故点 E 为 $\\triangle BDK$ 的内切圆的圆心，从而 $\\triangle BDK$ 的内切圆的方程为 $\\left(x - \\frac{1}{9}\\right)^{2} + y^{2} = \\frac{4}{9}$ .`,
      },
      {
        id: "prob-sec-1-2-6-sol-3",
        title: `解法三`,
        method: "standard",
        steps: [],
        explanation: `设点 $A\\left(\\frac{y_{1}^{2}}{4}, y_{1}\\right)$ ，点 $B\\left(\\frac{y_{2}^{2}}{4}, y_{2}\\right)$ .

由 $\\overrightarrow{FA} \\cdot \\overrightarrow{FB} = \\left(\\frac{y_1^2}{4} - 1, y_1\\right)\\left(\\frac{y_2^2}{4} - 1, y_2\\right) = \\frac{y_1^2 y_2^2}{16} - \\frac{y_1^2 + y_2^2}{4} + 1 + y_1 y_2 = 6 - \\frac{y_1^2 + y_2^2}{4} = \\frac{8}{9}$ ,

得 $y_{1}^{2} + y_{2}^{2} = \\frac{184}{9}$

联立 $y_{1}y_{2}=4$ ，由对称性，不妨取 $y_{1}=\\frac{8-2\\sqrt{7}}{3}$ ， $y_{2}=\\frac{8+2\\sqrt{7}}{3}$ ，

则 $D\\left(\\frac{23 - 8\\sqrt{7}}{9},\\frac{2\\sqrt{7} - 8}{3}\\right)$

故直线 KD 的方程为 $\\frac{y}{\\frac{2\\sqrt{7}-8}{3}}=\\frac{x+1}{\\frac{23-8\\sqrt{7}}{9}+1}$ ，即 $3x+4y+3=0$ .

直线 FD 的方程为 $\\frac{y}{\\frac{2\\sqrt{7}-8}{3}}=\\frac{x-1}{\\frac{23-8\\sqrt{7}}{9}-1}$ ，即 $3x-\\sqrt{7}y-3=0$ ，

由点到直线距离公式得 $\\angle KDB$ 的内角平分线所在直线的方程 $x$ 为

$\\frac{3x - \\sqrt{7}y - 3}{4} = -\\frac{3x + 4y + 3}{5}$ 即 $27x + (16 - 5\\sqrt{7})y - 3 = 0.$

令 y=0 , 得 $x=\\frac{1}{9}$ .

故 $\\triangle BDK$ 的内切圆的圆心为 $M\\left(\\frac{1}{9},0\\right)$ ，半径 $r=\\frac{3\\times\\frac{1}{9}+4\\times0+3}{5}=\\frac{2}{3}$

故 $\\triangle BDK$ 的内切圆M的方程为 $\\left(x-\\frac{1}{9}\\right)^{2}+y^{2}=\\frac{4}{9}$ .

思维定式还表现在解答策略上,大多数同学在做能力题时,都是从第一小题做到最后一小题,当第一小题解答思路受阻时,就直接将整题放弃.这是不可取的.面对难题,我们不仅可以缺步解答,还可以跳步解答,满分拿不到,则争取获得部分分数,况且,第一小题不会做,仍可利用第一小题结论解决后面的问题,只要解答正确,照样给分.因此,根据需要,调整题干设问顺序进行解答,也是一种值得借鉴的方法.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-3-1",
    topicId: "topic-sec-1-3",
    title: `已知函数 f(x) 与函数 y=√a(x-1)(a>0)`,
    content: `已知函数 $f(x)$ 与函数 $y=\\sqrt{a(x-1)}(a>0)$ 的图像关于直线 y=x 对称.
(1)在数列 $\\{a_{n}\\}$ 中, $a_{1}=1$ ,当 $n\\geqslant2$ 时, $a_{n}>a_{1}$ .在数列 $\\{b_{n}\\}$ 中, $b_{1}=2,S_{n}=b_{1}+b_{2}+\\cdots+b_{n}$ .若点 $P_{n}\\left(a_{n},\\frac{S_{n}}{n}\\right)(n\\in\\mathbf{Z}^{+})$ 在函数 $f(x)$ 的图像上,求a的值;

(2)在(1)的条件下,过点 $P_{n}$ 作倾斜角为 $\\frac{\\pi}{4}$ 的直线 $l_{n}$ , 若 $l_{n}$ 在y轴上的截距为 $\\frac{1}{3}(b_{n}+1)$ , 求数列 $\\{a_{n}\\}$ 的通项公式.`,
    preview: `已知函数 f(x) 与函数 y=√a(x-1)(a>0) 的图像关于直线 y=x 对称. (1)在数列 中, a_1=1 ,当 n≥2 时, a_n`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-3-1-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 函数 $f(x)$ 是 $y = \\sqrt{a(x - 1)} (a > 0)$ 的反函数，则 $f(x) = \\frac{x^2}{a} + 1 (x \\geqslant 0)$ .

因为点 $P_{n}\\left(a_{n},\\frac{S_{n}}{n}\\right)(n\\in \\mathbf{Z}^{+})$ 在函数 $f(x)$ 的图像上，则 $\\frac{S_n}{n} = \\frac{a_n^2}{a} +1.$ （\\*）

令 $n = 1$ ，得 $S_{1} = \\frac{a_{1}^{2}}{a} + 1, a_{1} = 1, S_{1} = b_{1} = 2$ ，则 $a = 1$ .

(2)由(1)得 $a = 1, (*)$ 式可化为 $\\frac{S_n}{n} = a_n^2 + 1$ . ①

直线 $l_{n}$ 的方程为 $y - \\frac{S_{n}}{n} = x - a_{n}$ ,

因为 $l_{n}$ 在 y 轴上的截距为 $\\frac{1}{3}(b_{n}+1)$ ,

所以 $\\frac{S_{n}}{n}-a_{n}=\\frac{1}{3}(b_{n}+1)$ ，结合①式可得 $b_{n}=3a_{n}^{2}-3a_{n}+2.$ ②

由①式可知:当正整数 $n \\geqslant 2$ 时, $S_{n} = na_{n}^{2} + n$ , $S_{n-1} = (n-1)a_{n-1}^{2} + n - 1$ .

两式作差得 $b_{n}=na_{n}^{2}-(n-1)a_{n-1}^{2}+1$ .

结合②式得 $(n-3)a_{n}^{2}+3a_{n}=(n-1)a_{n-1}^{2}+1(n\\geqslant2,n\\in\\mathbf{Z}^{+})$ . ③

在③式中，令 $n = 2$ ，结合 $a_1 = 1$ ，可解得 $a_2 = 1$ 或2，又当 $n\\geqslant 2$ 时， $a_{n} > a_{1}$ ，所以取 $a_2 = 2.$ 同理，在③式中，依次令 $n = 3,n = 4$ ，可解得 $a_3 = 3,a_4 = 4$

由此猜想: $a_{n}=n$ .然后可以用数学归纳法证明.

(i) 当 n=1,2,3 时, 已证成立.
(ii) 假设 $n = k$ 时命题成立，即 $a_{k} = k (k \\in \\mathbf{Z}^{+}$ ，且 $k \\geqslant 3$ . 当 $n = k + 1$ 时，由③式可得
$(k - 2)a_{k + 1}^2 +3a_{k + 1} = ka_k^2 +1$ ，把 $a_{k} = k$ 代入，解得 $a_{k + 1} = -\\frac{k^2 - k + 1}{k - 2}$ 或 $k + 1$

由于 $k\\geqslant3$ ，则 $-\\frac{k^{2}-k+1}{k-2}=\\frac{k(k-1)+1}{2-k}<0,$

所以 $a_{k+1}=-\\frac{k^{2}-k+1}{k-2}$ 不符合题意, 应舍去,

故只有 $a_{k + 1} = k + 1$ ，则当 $n = k + 1$ 时命题也成立.

综上可知，数列 $\\{a_{n}\\}$ 的通项公式为 $a_{n}=n$ .

评注 正如《考试大纲》所指出的那样,对数学问题进行“观察、猜测、抽象、概括、证明”,是发现问题和解决问题的重要途径.第(2)小题的难点也正是在观察归纳、猜测证明的过程中得以突破的.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-3-2",
    topicId: "topic-sec-1-3",
    title: `已知 (x + 2)^9 = a_0 + a_1x + a_2x^2 + dots +a_9x^9，求 (a_1 +`,
    content: `已知 $(x + 2)^{9} = a_{0} + a_{1}x + a_{2}x^{2} + \\dots +a_{9}x^{9}$ ，求 $(a_{1} + 3a_{3} + 5a_{5} + 7a_{7} + 9a_{9})^{2}- (2a_{2} + 4a_{4} + 6a_{6} + 8a_{8})^{2}$ 的值.`,
    preview: `已知 ，求 的值.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-3-2-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `将已知等式左右求导, 得 $9(x+2)^{8}=a_{1}+2a_{2}x+3a_{3}x^{2}+\\cdots+9a_{9}x^{8}$ ,

$$
\\begin{array}{l} = (a _ {1} + 2 a _ {2} + 3 a _ {3} + \\dots + 9 a _ {9}) (a _ {1} - 2 a _ {2} + 3 a _ {3} - \\dots + 9 a _ {9}) \\\\ = 9 \\times (1 + 2) ^ {8} \\times 9 (- 1 + 2) ^ {8} = 3 ^ {1 2}. \\\\ \\end{array}
$$

所以 $(a_{1}+3a_{3}+5a_{5}+7a_{7}+9a_{9})^{2}-(2a_{2}+4a_{4}+6a_{6}+8a_{8})^{2}$

评注 此处借助导数知识使原问题得以快速解决.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-3-3",
    topicId: "topic-sec-1-3",
    title: `设 a, b (0, +∞) , b ≠ 0 , α`,
    content: `设 $a, b \\in (0, +\\infty)$ , $b \\neq 0$ , $\\alpha, \\beta, \\gamma$ 是三次方程 $x^{3} + ax + b = 0$ 的 3 个根，则以 $\\frac{1}{\\alpha} + \\frac{1}{\\beta}, \\frac{1}{\\alpha} + \\frac{1}{\\gamma}, \\frac{1}{\\beta} + \\frac{1}{\\gamma}$ 为根的三次方程为（）
A. $a^2 x^3 + 2abx^2 + b^2 x - a = 0$

B. $b^{2}x^{3} + 2abx^{2} + a^{2}x - b = 0$

C. $a^2 x^3 + 2ab^2 x^2 + bx - a = 0$

D. \${b}^{2}{x}^{3} + 2{a}^{2}b{x}^{2} + {ax} - b = 0$`,
    preview: `设 a, b (0, +∞) , b ≠ 0 , α, β, γ 是三次方程 x^3 + ax + b = 0 的 3 个根，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-3-3-sol-0",
        title: `解答`,
        method: "creative",
        steps: [],
        explanation: `因为 $\\alpha,\\beta,\\gamma$ 是三次方程 $x^{3}+ax+b=0$ 的根，

所以 $\\alpha+\\beta+\\gamma=0,\\alpha\\beta+\\alpha\\gamma+\\beta\\gamma=a,\\alpha\\beta\\gamma=-b,$ 所以 $\\frac{1}{\\alpha} +\\frac{1}{\\beta} +\\frac{1}{\\alpha} +\\frac{1}{\\gamma} +\\frac{1}{\\beta} +\\frac{1}{\\beta} +\\frac{1}{\\gamma} = 2\\left(\\frac{1}{\\alpha} +\\frac{1}{\\beta} +\\frac{1}{\\gamma}\\right) = 2\\times \\frac{\\alpha\\beta + \\alpha\\gamma + \\beta\\gamma}{\\alpha\\beta\\gamma} = -\\frac{2a}{b}.$

由韦达定理知,方程 $b^{2}x^{3}+2abx^{2}+a^{2}x-b=0$ 符合要求,选 B.

评注 此题为2011年复旦大学自主招生题,考查了对一元n次方程韦达定理的理解.一般地,若 $ax^{3}+bx^{2}+cx+d=0(a\\neq0)$ 的3个根分别是 $x_{1},x_{2},x_{3}$ ,则 $x_{1}+x_{2}+x_{3}=-\\frac{b}{a},x_{1}x_{2}+x_{1}x_{3}+x_{2}x_{3}=\\frac{c}{a},x_{1}x_{2}x_{3}=-\\frac{d}{a}$ .猜测由一元二次方程韦达定理到一元n次方程韦达定理的迁移可能是今后创新性命题的一个热点.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-3-4",
    topicId: "topic-sec-1-3",
    title: `设 P_1(x_1,y_1), P_2(x_2,y_2)`,
    content: `设 $P_{1}(x_{1},y_{1}), P_{2}(x_{2},y_{2})$ 是函数 $f(x) = \\frac{2^{x}}{2^{x} + \\sqrt{2}}$ 图像上的两点，且
$$
\\overrightarrow {O P} = \\frac {1}{2} (\\overrightarrow {O P _ {1}} + \\overrightarrow {O P _ {2}}).
$$

(1) 若点 P 的横坐标为 $\\frac{1}{2}$ ，求证：P 点的纵坐标为定值，并求出这个定值；

(2) 若 $S_{n} = \\sum_{i=1}^{n} f\\left(\\frac{i}{n}\\right), n \\in \\mathbf{Z}^{+}$ , 求 $S_{n}$ ;

(3) 记 $T_{n}$ 为数列 $\\left\\{\\frac{1}{(S_{n} + \\sqrt{2})(S_{n+1} + \\sqrt{2})}\\right\\}$ 的前 $n$ 项和, 若 $T_{n} < a(S_{n+1} + \\sqrt{2})$ 对一切 $n \\in \\mathbf{Z}^{+}$ 都成立, 试求 $a$ 的取值范围.`,
    preview: `设 P_1(x_1,y_1), P_2(x_2,y_2) 是函数 f(x) = 2^x{2^x + √2} 图像上的两点，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-3-4-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)由 $\\overrightarrow{OP}=\\frac{1}{2}(\\overrightarrow{OP_{1}}+\\overrightarrow{OP_{2}})$ ，得P是 $P_{1}P_{2}$ 的中点，从而有 $x_{1}+x_{2}=1$ .

所以 $y_{1} + y_{2} = f(x_{1}) + f(x_{2}) = \\frac{2^{x_{1}}}{2^{x_{1}} + \\sqrt{2}} +\\frac{2^{x_{2}}}{2^{x_{2}} + \\sqrt{2}}$

$$
= \\frac {2 ^ {x _ {1}}}{2 ^ {x _ {1}} + \\sqrt {2}} + \\frac {2 ^ {1 - x _ {1}}}{2 ^ {1 - x _ {1}} + \\sqrt {2}} = \\frac {2 ^ {x _ {1}}}{2 ^ {x _ {1}} + \\sqrt {2}} + \\frac {2}{2 + \\sqrt {2} \\times 2 ^ {x _ {1}}}
$$

$$
= \\frac {2 ^ {x _ {1}}}{2 ^ {x _ {1}} + \\sqrt {2}} + \\frac {\\sqrt {2}}{2 ^ {x _ {1}} + \\sqrt {2}} = 1.
$$

由此得 $y_{p} = \\frac{1}{2}(y_{1} + y_{2}) = \\frac{1}{2}$ .

(2)由(1)知 $x_{1} + x_{2} = 1, f(x_{1}) + f(x_{2}) = y_{1} + y_{2} = 1, f(1) = 2 - \\sqrt{2}$ ,

$$
S _ {n} = f \\Big (\\frac {1}{n} \\Big) + f \\Big (\\frac {2}{n} \\Big) + \\dots + f \\Big (\\frac {n - 1}{n} \\Big) + f \\Big (\\frac {n}{n} \\Big),
$$

$$
S _ {n} = f \\Big (\\frac {n}{n} \\Big) + f \\Big (\\frac {n - 1}{n} \\Big) + \\dots + f \\Big (\\frac {2}{n} \\Big) + f \\Big (\\frac {1}{n} \\Big).
$$

相加得 $2S_{n} = f(1) + \\left[f\\left(\\frac{1}{n}\\right) + f\\left(\\frac{n - 1}{n}\\right)\\right] + \\left[f\\left(\\frac{2}{n}\\right) + f\\left(\\frac{n - 2}{n}\\right)\\right] + \\dots +$

$$
\\left[ f \\Big (\\frac {n - 1}{n} \\Big) + f \\Big (\\frac {1}{n} \\Big) \\right] + f (1)
$$

$$
= 2 f (1) + \\underbrace {1 + 1 + \\cdots + 1} _ {(n - 1 \\text {个} 1)} = n + 3 - 2 \\sqrt {2}.
$$

故 $S_{n} = \\frac{n + 3 - 2\\sqrt{2}}{2}$

(3) $\\frac{1}{(S_n + \\sqrt{2})(S_{n+1} + \\sqrt{2})} = \\frac{1}{\\frac{n+3}{2} \\cdot \\frac{n+4}{2}} = \\frac{4}{(n+3)(n+4)} = 4\\left(\\frac{1}{n+3} - \\frac{1}{n+4}\\right),$

$$
T _ {n} = 4 \\left[ \\left(\\frac {1}{4} - \\frac {1}{5}\\right) + \\left(\\frac {1}{5} - \\frac {1}{6}\\right) + \\dots + \\left(\\frac {1}{n + 3} - \\frac {1}{n + 4}\\right) \\right] = \\frac {n}{n + 4}.
$$

$$
T _ {n} <   a (S _ {n + 1} + \\sqrt {2}) \\Leftrightarrow a > \\frac {T _ {n}}{S _ {n + 1} + \\sqrt {2}} = \\frac {2 n}{(n + 4) ^ {2}} = \\frac {2}{n + \\frac {1 6}{n} + 8}.
$$

因为 $n+\\frac{16}{n}\\geqslant8$ ，当且仅当 n=4 时，取“=”，所以 $\\frac{2}{n+\\frac{16}{n}+8}\\leqslant\\frac{2}{8+8}=\\frac{1}{8}$ ，得 $a>\\frac{1}{8}$ .

评注 以上三个小题层层递进,解答关键是运用了课本中推导等差数列前 n 项和的方法,即“倒序相加法”,也称“高斯法”,事实上,(1)的结论也为这种方法的类比迁移提供了线索.(3)上运用的是“裂项相消法”,这也是课本中所介绍方法的类比推广.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-3-5",
    topicId: "topic-sec-1-3",
    title: `设数列 a_n 的前 n 项和为 S_n，且方程 x^2 - a_nx - a_n = 0 有一根为 S_n - 1`,
    content: `设数列 $\\{a_{n}\\}$ 的前 $n$ 项和为 $S_{n}$ ，且方程 $x^{2} - a_{n}x - a_{n} = 0$ 有一根为 $S_{n} - 1$ ，求 $a_{1}, a_{2}$ 及 $a_{n}$ .`,
    preview: `设数列 的前 n 项和为 S_n ，且方程 x^2 - a_nx - a_n = 0 有一根为 S_n - 1 ，求 a_1, a_2 及 a_n .`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-3-5-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `当 n=1 时， $x^{2}-a_{1}x-a_{1}=0$ 有一根为 $S_{1}-1=a_{1}-1$ ，于是由

$(a_{1} - 1)^{2} - a_{1}(a_{1} - 1) - a_{1} = 0$ ，解得 $a_1 = \\frac{1}{2}$

当 $n = 2$ 时， $x^{2} - a_{2}x - a_{2} = 0$ 有一根为 $S_{2} - 1 = a_{2} - \\frac{1}{2}$ ，

于是由 $\\left(a_{2}-\\frac{1}{2}\\right)^{2}-a_{2}\\left(a_{2}-\\frac{1}{2}\\right)-a_{2}=0$ ，解得 $a_{2}=\\frac{1}{6}$ .

为了求通项 $a_{n}$ ，先从题设得 $(S_{n}-1)^{2}-a_{n}(S_{n}-1)-a_{n}=0.$ ①

当 $n \\geqslant 2$ 时， $a_{n} = S_{n} - S_{n-1}$ ，代入上式得 $S_{n-1}S_{n} - 2S_{n} + 1 = 0$ ，

因此,要求得 $a_{n}$ , 只需求出 $S_{n}$ . 于是问题便转化为如何求 $S_{n}$ .

先看特殊情况，将 $S_{1} = a_{1} = \\frac{1}{2}, S_{2} = a_{1} + a_{2} = \\frac{2}{3}$ 代入 $S_{n-1}S_n - 2S_n + 1 = 0$ ，可得 $S_{3} = \\frac{3}{4}$ .

在此基础上进一步,从特殊到一般,猜想 $S_{n}=\\frac{n}{n+1}$ ,并用数学归纳法证明:

(i) 当 n=1 时已知结论成立.

(ii) 假设 n=k 时结论成立，即 $S_{k}=\\frac{k}{k+1}$ ,

当 $n=k+1$ 时，由①得 $S_{k+1}=\\frac{1}{2-S_{k}}$ ,

即 $S_{k + 1} = \\frac{k + 1}{k + 2}$ ，故 $n = k + 1$ 时结论也成立.

综上，由(i)(ii)可知 $S_{n} = \\frac{n}{n + 1}$ 对所有正整数 $n$ 都成立.

于是当 $n \\geqslant 2$ 时， $a_{n} = S_{n} - S_{n-1} = \\frac{n}{n+1} - \\frac{n-1}{n} = \\frac{1}{n(n+1)}$ ,

又当 $n = 1$ 时， $a_{1} = \\frac{1}{2} = \\frac{1}{1 \\times (1 + 1)}$

所以 $\\{a_{n}\\}$ 的通项公式为 $a_{n}=\\frac{1}{n(n+1)}$ .

提炼升华 进退互化是分析解题思路时最常用的手段,可以起到直接解答问题(举反例)、探索问题结论、寻找解题途径等作用.当然,单纯从解题的角度,本题还可利用不动点原理,由“ $S_{n-1}S_{n}-2S_{n}+1=0$ ”求出 $S_{n}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-3-6",
    topicId: "topic-sec-1-3",
    title: `将 A、B、C、D、E、F 六个字母排成一排`,
    content: `（2013 年高考浙江卷理科）将 A、B、C、D、E、F 六个字母排成一排，且 A、B 均在 C 的同侧，则不同的排法有 \\_\\_\\_\\_ 种.`,
    preview: `将 A、B、C、D、E、F 六个字母排成一排，且 A、B 均在 C 的同侧，则不同的排法有 \\_\\_\\_\\_ 种.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-3-6-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `先排 A、B、C，则有 ABC、ACB、BAC、BCA、CAB、CBA 六种排法，其中 A、B 均在 C 的同侧的排法有 4 种，即概率为 $\\frac{4}{6} = \\frac{2}{3}$ . 然后将六个字母排成一排，则有 $A_{6}^{6} = 720$ 种，由普遍性寓于特殊性，得 A、B 均在 C 的同侧的排法有 $720 \\times \\frac{2}{3} = 480$ 种.

评注 此解法运用了哲学(理科生的文科情怀)上矛盾的普遍性与特殊性的辩证关系,省去了复杂的分类讨论,化繁为简,颇有味道.但解题时须注意防止出现A在C左边的概率为 $\\frac{1}{2}$ ,B在C左边的概率为 $\\frac{1}{2}$ ,故A、B均在C同侧的概率为 $2\\times\\frac{1}{2}\\times\\frac{1}{2}=\\frac{1}{2}$ 的错误.`,
      },
    ],
    tags: [],
    source: `2013 年高考浙江卷理科`,
  },
  {
    id: "prob-sec-1-3-7",
    topicId: "topic-sec-1-3",
    title: `(2024 年湛江市普通高考测试)已知 P(4,3) 为双曲线 C: x^2a^2 - y^`,
    content: `(2024 年湛江市普通高考测试)已知 $P\\left( {4,3}\\right)$ 为双曲线 $C : \\frac{{x}^{2}}{{a}^{2}} - \\frac{{y}^{2}}{{b}^{2}} = 1\\left( {a > 0,}\\right.$ $b > 0)$ 上一点, $M,N$ 分别为双曲线 $C$ 的左、右顶点,且直线 \${PM}$ 与 \${PN}$ 的斜率之和为 2.
(1)求双曲线 C 的方程；

(2) 不过点 P 的直线 $l: y = kx + t$ 与双曲线 C 交于 A, B 两点, 若直线 PA, PB 的倾斜角分别为 $\\alpha$ 和 $\\beta$ , 且 $\\alpha + \\beta = \\frac{3\\pi}{4}$ , 证明: 直线 l 过定点.`,
    preview: `已知 P( 4,3) 为双曲线 b > 0) 上一点, M,N 分别为双曲线 C 的左、`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-3-7-sol-0",
        title: `解法1`,
        method: "standard",
        steps: [],
        explanation: `(1)由题意得 $\\frac{4^{2}}{a^{2}}-\\frac{3^{2}}{b^{2}}=1$ ，又 $k_{PM}+k_{PN}=\\frac{3}{4+a}+\\frac{3}{4-a}=2,a>0$ ，故得a=2，

所以 $b^{2}=3$ ，所以双曲线 C 的标准方程为 $\\frac{x^{2}}{4}-\\frac{y^{2}}{3}=1$ .

(2)`,
      },
      {
        id: "prob-sec-1-3-7-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `当直线 PA, PB 的斜率均存在时，

设直线 PA, PB 的斜率分别为 $k_{PA}, k_{PB}$ ,

则 $\\tan\\alpha=k_{PA},\\tan\\beta=k_{PB}$ . 又 $\\tan(\\alpha+\\beta)=\\frac{\\tan\\alpha+\\tan\\beta}{1-\\tan\\alpha\\tan\\beta}=\\frac{k_{PA}+k_{PB}}{1-k_{PA}\\cdot k_{PB}}=-1,$

故 $k_{PA} + k_{PB} - k_{PA}\\cdot k_{PB} + 1 = 0.$

设 A, B 的坐标分别为 $(x_{1}, y_{1})$ , $(x_{2}, y_{2})$ ,

联立 $\\left\\{\\begin{aligned}y&=kx+t,\\\\ \\frac{x^{2}}{4}-\\frac{y^{2}}{3}&=1,\\end{aligned}\\right.$ 消去y得 $(3-4k^{2})x^{2}-8ktx-4t^{2}-12=0,$

$\\Delta = (8kt)^{2} - 4(3 - 4k^{2})(-4t^{2} - 12) > 0$ ，得 $t^2 +3 - 4k^2 >0$

则有 $\\left\\{\\begin{aligned}x_{1}+x_{2&=\\frac{8kt}{3-4k^{2}},\\\\ x_{1}x_{2}&=\\frac{-4t^{2}-12}{3-4k^{2}}\\end{aligned}\\right.$

$$
k _ {P A} + k _ {P B} - k _ {P A} \\cdot k _ {P B} + 1 = \\frac {k x _ {1} + t - 3}{x _ {1} - 4} + \\frac {k x _ {2} + t - 3}{x _ {2} - 4} - \\frac {k x _ {1} + t - 3}{x _ {1} - 4} \\cdot \\frac {k x _ {2} + t - 3}{x _ {2} - 4} + 1 = 0,
$$

所以 $(kx_{1}+t-3)(x_{2}-4)+(kx_{2}+t-3)(x_{1}-4)-(kx_{1}+t-3)(kx_{2}+t-3)+(x_{1}-4)(x_{2}-4)=0,$

整理得 $(-k^{2}+2k+1)x_{1}x_{2}+(t-k-tk-7)(x_{1}+x_{2})+31-t^{2}-2t=0,$

所以 $(-k^{2}+2k+1)\\cdot\\frac{-4t^{2}-12}{3-4k^{2}}+(t-k-tk-7)\\cdot\\frac{8kt}{3-4k^{2}}+31-t^{2}-2t=0,$

得 $(k^{2}-2k-1)(4t^{2}+12)+(t-k-tk-7)\\cdot8kt+(31-t^{2}-2t)(3-4k^{2})=0$

化简得: $7t^{2}+112k^{2}+56tk+24k+6t-81=0.$

$$
7 t ^ {2} + 1 1 2 k ^ {2} + 5 6 t k + 2 4 k + 6 t - 8 1 = (7 t + 2 8 k + 2 7) (t + 4 k - 3) = 0.
$$

当 $t = -4k + 3$ 时，直线 l 过点 P，故舍去，

故当 7t=-28k-27，且满足 $\\Delta>0$ 恒成立时，

直线 $l$ 的方程为 $y = kx - 4k - \\frac{27}{7} = k(x - 4) - \\frac{27}{7}$ , 所以直线 $l$ 过定点 $\\left(4, -\\frac{27}{7}\\right)$ .

当 $\\alpha=\\frac{\\pi}{2}$ 时, $\\beta=\\frac{\\pi}{4}$ , 这时直线 PA 的斜率不存在,

点 P 与点 A 关于 x 轴对称, 所以 A(4,-3).

易知直线 PB 的方程为 y = x - 1.

由 $\\left\\{\\begin{aligned}y&=x-1,\\\\ \\frac{x^{2}}{4}-\\frac{y^{2}}{3}&=1\\end{aligned}\\right.$ 得 $-x^{2}+8x-16=0,$

即 $-(x-4)^{2}=0$ ，点B与点P重合，与直线l不过点P矛盾；

同理，当 $\\beta=\\frac{\\pi}{2}$ 时， $\\alpha=\\frac{\\pi}{4}$ ，点 A 与点 P 重合，与直线 l 不过点 P 矛盾.

综上, 直线 l 过定点 $\\left(4, -\\frac{27}{7}\\right)$ .`,
      },
      {
        id: "prob-sec-1-3-7-sol-2",
        title: `解法二`,
        method: "geometric",
        steps: [],
        explanation: `设 $A(x_{1}, y_{1}), B(x_{2}, y_{2})$ ，直线 PA, PB 的斜率分别为 $k_{1}, k_{2}, P(4, 3)$ ,

设 $l:m(x-4)+n(y-3)=1$ ,

由 $\\frac{x^{2}}{4}-\\frac{y^{2}}{3}=1$ 得 $\\frac{(x-4+4)^{2}}{4}-\\frac{(y-3+3)^{2}}{3}=1$ ,

得 $3[(x - 4)^2 +8(x - 4) + 16] - 4[(y - 3)^2 +6(y - 3) + 9] = 12,$

得 $4(y-3)^{2}+24[(y-3)-(x-4)]-3(x-4)^{2}=0,$

所以 $4(y-3)^{2}+24[(y-3)-(x-4)][m(x-4)+n(y-3)]-3(x-4)^{2}=0,$

所以 $4(y - 3)^2 + 24[n(y - 3)^2 + m(x - 4)(y - 3) - n(x - 4)(y - 3) - m(x - 4)^2] - 3(x - 4)^2 = 0$

所以 $(24n+4)(y-3)^{2}+24(m-n)(x-4)(y-3)-(24m+3)(x-4)^{2}=0$

即 $(24n+4)\\left(\\frac{y-3}{x-4}\\right)^{2}+24(m-n)\\frac{y-3}{x-4}-(24m+3)=0,$

所以 $k_{1} + k_{2} = \\frac{6(n - m)}{6n + 1}, k_{1}k_{2} = \\frac{-(24m + 3)}{24n + 4}.$

因为 $k_{1} + k_{2} - k_{1}k_{2} + 1 = 0$ ，所以 $\\frac{6(n - m)}{6n + 1} +\\frac{24m + 3}{24n + 4} +1 = 0,$

即 $24(n-m)+24m+3+24n+4=0$ ，即 $48n+7=0$ ，所以 $n=-\\frac{7}{48}$ .

所以，直线 $l: m(x - 4) - \\frac{7}{48} (y - 3) = 1$ ，所以直线 $l$ 过定点 $\\left(4, -\\frac{27}{7}\\right)$ .

评注 此处采用“设而不求”法。“设而不求”是处理解析几何能力题的基本思路。利用问题中整体与部分的关系，通过整体代入、整体运算、整体消元、整体合并等方法，常常可以简化运算，找到解题的突破口。双斜率之和、之积为定值问题，`,
      },
    ],
    tags: [],
    source: `2024 年湛江市普通高考测试`,
  },
  {
    id: "prob-sec-1-3-8",
    topicId: "topic-sec-1-3",
    title: `已知 f(x) 为二次函数`,
    content: `已知 $f(x)$ 为二次函数，且 $a, f(a), f(f(a)), f(f(f(a)))$ 成正项等比数列，求证： $f(a) = a$ .`,
    preview: `已知 f(x) 为二次函数，且 a, f(a), f(f(a)), f(f(f(a))) 成正项等比数列，求证： f(a) = a .`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-3-8-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `假设 $f(a) \\neq a$ ，由 $a, f(a), f(f(a)), f(f(f(a)))$ 成正项等比数列，得

$$
\\frac {f (a)}{a} = \\frac {f (f (a))}{f (a)} = \\frac {f (f (f (a)))}{f (f (a))}.
$$

根据比例性质有 $\\frac{f(f(a))-f(a)}{f(a)-a}=\\frac{f(f(f(a)))-f(f(a))}{f(f(a))-f(a)}$ ,

所以三点 $A(a, f(a)), B(f(a), f(f(a))), C(f(f(a)), f(f(f(a))))$ 满足 $k_{AB} = k_{BC}$ ，即 $A, B, C$ 三点共线，这与 $A, B, C$ 在二次函数的图像抛物线上矛盾.

因此，假设不成立，所以有 $f(a)=a$ ，得证。

评注 本题也可直接设二次函数证. 设 $f(x)=mx^{2}+nx+t(m\\neq0)$ ,

数列 $a, f(a), f(f(a)), f(f(f(a)))$ 的公比为 $q(q>0)$ ,

则 $f(a)=aq, f(f(a))=f(aq)=aq^{2}, f(f(f(a)))=f(aq^{2})=aq^{3}$ ,

所以 $ma^{2}+na+t=aq,$ ①

$$
m (a q) ^ {2} + n a q + t = a q ^ {2}, \\tag {②}
$$

$$
m (a q ^ {2}) ^ {2} + n a q ^ {2} + t = a q ^ {3}. \\tag {③}
$$

①-②得 $ma^{2}(1-q^{2})+na(1-q)=aq(1-q)$ ,

②-③得 $ma^{2}q^{2}(1-q^{2})+naq(1-q)=aq^{2}(1-q)$ .

若 q=1，则 $f(a)=a$ ;

若 $q \\neq 1$ ，则 $ma^{2}(1 + q) + na = aq$ ，与 $ma^{2}q(1 + q) + na = aq$ 矛盾。

所以 $f(a)=a.$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-3-9",
    topicId: "topic-sec-1-3",
    title: `椭圆焦点延长构造与切线唯一性`,
    content: `设 $F_{1}$ 、 $F_{2}$ 为椭圆 $\\frac{x^{2}}{a^{2}}+\\frac{y^{2}}{b^{2}}=1$ 的两个焦点，P 为椭圆上任一点，延长 $F_{1}P$ 至 E，使 $\\left|PE\\right|=\\left|PF_{2}\\right|$ ，l 为 $EF_{2}$ 的垂直平分线，求证：l 与椭圆只有唯一的公共点.`,
    preview: `设 F_1 、 F_2 为椭圆 x^2{a^2}+y^2{b^2}=1 的两个焦点，P 为椭圆上任一点，延长 F_1P 至 E，使 |PE|=|PF_2| ，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-3-9-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `点 P 显然是 l 与椭圆的公共点, 要证明 l 与椭圆只有这个唯一的公共点, 自然想到利用反证法.

因为 $|PE| = |PF_2|$ ，所以 $P$ 点在 $l$ 上，即 $P$ 是 $l$ 与椭圆的一个公共点.

假设 $P'$ 是 l 与椭圆的另一个异于 P 的公共点.

如图 1-3-1 所示, 连接 $P^{\\prime}F_{1}$ 、 $P^{\\prime}F_{2}$ 、 $P^{\\prime}E$ .

因为 l 是 $EF_{2}$ 的垂直平分线, 所以 $\\left|P^{\\prime}E\\right|=\\left|P^{\\prime}F_{2}\\right|$ ,

所以 $|P^{\\prime}F_{1}| + |P^{\\prime}F_{2}| = |P^{\\prime}F_{1}| + |P^{\\prime}E| > |EF_{1}|$ .

而 $|EF_{1}| = |PF_{1}| + |PF_{2}| = |P^{\\prime}F_{1}| + |P^{\\prime}F_{2}|$ ，矛盾.

故假设错误, 即 l 与椭圆只有唯一的公共点.

![](images/1da8cfb0713d2b4ddc5c8082f4dc156add2dc44fd904494d63e3913fcc6ebc89.jpg)

图1-3-1

评注 反证法是“正难则反”转化思想的一种常见表现形式,它的一般步骤是:(1)否定结论;(2)推出矛盾;(3)肯定命题为真,利用反证法证明的命题,有时常会在语句的陈述上带一些明显的特征,如至少、至多、唯一等字眼.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-3-10",
    topicId: "topic-sec-1-3",
    title: `A 是定义在 [2,4] 上且满足如下条件的函数 (x)`,
    content: `A 是定义在 $[2,4]$ 上且满足如下条件的函数 $\\varphi(x)$ 组成的集合：
①对任意的 $x \\in [1,2]$ ，都有 $\\varphi(2x) \\in (1,2)$ ;

②存在常数 $L(0<L<1)$ ，使得对任意的 $x_{1}, x_{2} \\in [1,2]$ ，都有

$$
\\mid \\varphi (2 x _ {1}) - \\varphi (2 x _ {2}) \\mid \\leqslant L \\mid x _ {1} - x _ {2} \\mid .
$$

试求解：

(1) 设 $\\varphi(x) \\in A$ ，如果存在 $x_{0} \\in (1,2)$ ，使得 $x_{0} = \\varphi(2x_{0})$ ，那么这样的 $x_{0}$ 是唯一的；
(2) 设 $\\varphi(x)\\in A$ ，任取 $x_{1}\\in(1,2)$ ，令 $x_{n+1}=\\varphi(2x_{n}), n=1,2,\\cdots$ ，证明：给定正整数 k，对任意的正整数 p，成立不等式 $\\left|x_{k+p}-x_{k}\\right|\\leqslant\\frac{L^{k-1}}{1-L}\\left|x_{2}-x_{1}\\right|$ .`,
    preview: `A 是定义在 [2,4] 上且满足如下条件的函数 (x) 组成的集合： ①对任意的 x [1,2] ，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-3-10-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)证法一 设存在两个 $x_0, x_0' \\in (1,2), x_0 \\neq x_0'$ ,

使得 $x_0 = \\varphi (2x_0), x_0' = \\varphi (2x_0')$ ，则由 $\\varphi (x) \\in A$

有 $|\\varphi (2x_0) - \\varphi (2x_0')|\\leqslant L|x_0 - x_0'|$

所以 $|x_0 - x_0'|\\leqslant L|x_0 - x_0'$ ，所以 $L\\geqslant 1$ ，但与 $0 <   L <   1$ 相矛盾，

所以这样的 $x_{0}$ 是唯一的.

(2) 因为 $x_{n+1}=\\varphi(2x_{n}),\\varphi(x)\\in A.$

所以 $|x_{3} - x_{2}| = |\\varphi (2x_{2}) - \\varphi (2x_{1})|\\leqslant L|x_{2} - x_{1}|$

$$
\\left| x _ {4} - x _ {3} \\right| = \\left| \\varphi (2 x _ {3}) - \\varphi (2 x _ {2}) \\right| \\leqslant L \\left| x _ {3} - x _ {2} \\right| \\leqslant L ^ {2} \\left| x _ {2} - x _ {1} \\right|,
$$

...

$$
\\left| x _ {n + 1} - x _ {n} \\right| \\leqslant L \\left| x _ {n} - x _ {n - 1} \\right| \\leqslant L ^ {2} \\left| x _ {n - 1} - x _ {n - 2} \\right| \\leqslant \\dots \\leqslant L ^ {n - 1} \\left| x _ {2} - x _ {1} \\right|,
$$

所以 $|x_{k+p} - x_k| = |(x_{k+p} - x_{k+p-1}) + (x_{k+p-1} - x_{k+p-2}) + \\cdots (x_{k+1} - x_k)|$

$$
\\begin{array}{l} \\leqslant \\left| x _ {k + p} - x _ {k + p - 1} \\right| + \\left| x _ {k + p - 1} - x _ {k + p - 2} \\right| + \\dots + \\left| x _ {k + 1} - x _ {k} \\right| \\\\ \\leqslant L ^ {k + p - 2} \\left| x _ {2} - x _ {1} \\right| + L ^ {k + p - 3} \\left| x _ {2} - x _ {1} \\right| + \\dots + L ^ {k - 1} \\left| x _ {2} - x _ {1} \\right| \\\\ = \\frac {L ^ {k - 1}}{1 - L} \\left| x _ {2} - x _ {1} \\right| \\cdot (1 - L ^ {p}) \\leqslant \\frac {L ^ {k - 1}}{1 - L} \\left| x _ {2} - x _ {1} \\right|. \\\\ \\end{array}
$$

数学考试大纲明确指出高考命题要与高等数学相关联,要为进入高校学习作准备.近几年高考数学试题中出现了大量与高等数学衔接紧密的问题,主要表现为它们或以高等数学符号、概念直接出现,或以高等数学的概念、定理作为依托融于初等数学知识中,或体现高等数学中常用的数学思想方法和推理方法.此类题目的设计虽来源于高等数学,但一般起点高、落点低,其解决方法还是中学所学的初等数学知识,较易突破.它能宽角度、多观点地考查学生基本的数学素养,有层次地深入了解学生数学理性思维和进一步深造的潜能.本题第(2)小题求解的关键在于将 $x_{n+1}=\\varphi(2x_n)$ 与 $\\varphi(x)\\in A$ 具体化并加以推广后,采取叠加求和.明确起止项和项数是求解本例的难点.对于第(1)小题也可以采用以下两种方法:

证法二 若有 $x_{1}, x_{2} \\in (1, 2)$ 且 $x_{1} \\neq x_{2}$ , 使 $x_{1} = \\varphi(2x_{1}), x_{2} = \\varphi(2x_{2})$ , 则两点 $(x_{1}, \\varphi(2x_{1}))$ 与 $(x_{2}, \\varphi(2x_{2}))$ 的连线的斜率 $k = \\frac{\\varphi(2x_{2}) - \\varphi(2x_{1})}{x_{2} - x_{1}} = \\frac{x_{2} - x_{1}}{x_{2} - x_{1}} = 1$ , 但由条件② $|\\varphi(2x_{1}) - \\varphi(2x_{2})| \\leqslant L |x_{1} - x_{2}| (0 < L < 1)$ 可得 $\\frac{\\varphi(2x_{2}) - \\varphi(2x_{1})}{x_{2} - x_{1}} \\leqslant L < 1$ . 故如果存在 $x_{0} \\in (1, 2)$ , 使得 $x_{0} = \\varphi(2x_{0})$ , 那么这样的 $x_{0}$ 是唯一的.

证法三 要证明 $x_0 = \\varphi(2x_0)$ 时 $x_0$ 的唯一性, $x_0 \\in (1,2)$ , 令函数 $f(x) = \\varphi(2x) - x$ , 只需证明 $f(x)$ 在区间 $(1,2)$ 上是严格单调的便可. 因 $f'(x) = \\varphi_x'(2x) - 1$ , 而 $\\varphi_x'(2x) = \\lim_{x_1 \\to x_2} \\frac{\\varphi(2x_2) - \\varphi(2x_1)}{x_2 - x_1} \\leqslant L < 1, x_1, x_2 \\in (1,2)$ , 所以 $f'(x) \\leqslant L - 1 < 0$ , 即 $f(x)$ 在 $(1,2)$ 上严格单调. 故如果存在 $x_0 \\in (1,2)$ , 使得 $x_0 = \\varphi(2x_0)$ , 那么这样的 $x_0$ 是唯一的.

在第(1)小题的三种证法中,证法一、证法二都属于传统的反证法,其中证法二是从数形结合的角度导出矛盾,证法三是用高等数学的观点处理证明问题.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-4-1",
    topicId: "topic-sec-1-4",
    title: `在 △ ABC 中, 角 A`,
    content: `在 $\\triangle ABC$ 中, 角 A、B、C 所对应的边分别为 a、b、c, 已知 $b\\cos C + c\\cos B = 2b$ , 则 $\\frac{a}{b} =$ \\_\\_\\_\\_.`,
    preview: `在 △ ABC 中, 角 A、B、C 所对应的边分别为 a、b、c, 已知 b C + c B = 2b , 则 a/b = \\_\\_\\_\\_.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-4-1-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `由 $b\\cos C + c\\cos B = 2b$ 边角互化得

$$
\\sin B \\cos C + \\sin C \\cos B = 2 \\sin B,
$$

即 $\\sin(B+C)=2\\sin B$ ，即 $\\sin A=2\\sin B$ ，所以 $a=2b\\Rightarrow\\frac{a}{b}=2$ .`,
      },
      {
        id: "prob-sec-1-4-1-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `由射影定理知, $b\\cos C + c\\cos B = a$ ,则 $a=2b\\Rightarrow\\frac{a}{b}=2$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-4-2",
    topicId: "topic-sec-1-4",
    title: `二次型约束下线性最值与分式最小值`,
    content: `对于 c>0，当非零实数 a, b 满足 $4a^{2}-2ab+4b^{2}-c=0$ ，且使 $\\left|2a+b\\right|$ 最大时， $\\frac{3}{a}-\\frac{4}{b}+\\frac{5}{c}$ 的最小值为 \\_\\_\\_\\_.`,
    preview: `对于 c>0，当非零实数 a, b 满足 4a^2-2ab+4b^2-c=0 ，且使 |2a+b| 最大时，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-4-2-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `令 $2a+b=t$ ，则 b=t-2a，代入 $4a^{2}-2ab+4b^{2}-c=0$ 中，

得 $4a^{2} - 2a(t - 2a) + 4(t - 2a)^{2} - c = 0$ ，即 $24a^{2} - 18ta + 4t^{2} - c = 0.$ ①

因为关于 a 的二次方程①有实根，

所以 $\\Delta = 18^{2}t^{2} - 4\\times 24(4t^{2} - c)\\geqslant 0$ ，可得 $t^2\\leqslant \\frac{8c}{5}$

$|2a+b|$ 取最大值时， $\\left\\{\\begin{aligned}a&=\\frac{3}{2}\\sqrt{\\frac{c}{10}},\\\\ b&=\\sqrt{\\frac{c}{10}}\\end{aligned}\\right.$ 或 $\\left\\{\\begin{aligned}a&=-\\frac{3}{2}\\sqrt{\\frac{c}{10}},\\\\ b&=-\\sqrt{\\frac{c}{10}}.\\end{aligned}\\right.$

当 $\\left\\{\\begin{aligned}a&=\\frac{3}{2}\\sqrt{\\frac{c}{10}},\\\\ b&=\\sqrt{\\frac{c}{10}}\\end{aligned}\\right.$ 时， $\\frac{3}{a}-\\frac{4}{b}+\\frac{5}{c}==-2\\sqrt{\\frac{10}{c}}+\\left(\\sqrt{\\frac{5}{c}}\\right)^{2}=\\left(\\sqrt{\\frac{5}{c}}-\\sqrt{2}\\right)^{2}-2\\geqslant-2,$

当 $\\left\\{\\begin{aligned}a&=-\\frac{3}{2}\\sqrt{\\frac{c}{10}},\\\\ b&=-\\sqrt{\\frac{c}{10}}\\end{aligned}\\right.$ 时， $\\frac{3}{a}-\\frac{4}{b}+\\frac{5}{c}=-\\frac{2\\sqrt{10}}{\\sqrt{c}}+\\frac{4\\sqrt{10}}{\\sqrt{c}}+\\frac{5}{c}=\\frac{2\\sqrt{10}}{\\sqrt{c}}+\\frac{5}{c}>0.$

综上可知，当 $c = \\frac{5}{2}, a = \\frac{3}{4}, b = \\frac{1}{2}$ 时， $\\left(\\frac{3}{a} - \\frac{4}{b} + \\frac{5}{c}\\right)_{\\min} = -2.$`,
      },
      {
        id: "prob-sec-1-4-2-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `借助柯西不等式，由 $4a^{2}-2ab+4b^{2}-c=0$ 可得 $2c=3(a+b)^{2}+5(a-b)^{2}$

$$
\\begin{array}{l} (2 a + b) ^ {2} = \\left[ \\frac {\\sqrt {3}}{2} \\times \\sqrt {3} (a + b) + \\frac {\\sqrt {5}}{1 0} \\times \\sqrt {5} (a - b) \\right] ^ {2} \\\\ \\leqslant \\left[ \\left(\\frac {\\sqrt {3}}{2}\\right) ^ {2} + \\left(\\frac {\\sqrt {5}}{1 0}\\right) ^ {2} \\right] \\left[ (\\sqrt {3} (a + b)) ^ {2} + (\\sqrt {5} (a - b)) ^ {2} \\right] \\\\ \\leqslant 2 c \\left(\\frac {3}{4} + \\frac {1}{2 0}\\right) = \\frac {8 c}{5}. \\\\ \\end{array}
$$

由柯西不等式取等条件,可算得,当 $c=\\frac{5}{2}, a=\\frac{3}{4}, b=\\frac{1}{2}$ 时, $\\frac{3}{a}-\\frac{4}{b}+\\frac{5}{c}$ 的最小值为 -2.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-4-3",
    topicId: "topic-sec-1-4",
    title: `定义平面向量之间的一种运算“⊙”如下: 对任意的`,
    content: `定义平面向量之间的一种运算“⊙”如下: 对任意的 $\\boldsymbol{a}=(m,n)$ , $\\boldsymbol{b}=(p,q)$ ，令 $a\\odot b=mq-np$ . 下面说法错误的是 ( )
A. 若 a 与 b 共线, 则 $a \\odot b = 0$

B. $a \\odot  b = b \\odot  a$

C. 对任意的 $\\lambda \\in R$ ，有 $(\\lambda a) \\odot b = \\lambda (a \\odot b)$

D. $(\\boldsymbol{a} \\odot \\boldsymbol{b})^2 + (\\boldsymbol{a} \\cdot \\boldsymbol{b})^2 = |\\boldsymbol{a}|^2 |\\boldsymbol{b}|^2$`,
    preview: `定义平面向量之间的一种运算“⊙”如下: 对任意的 a=(m,n) , b=(p,q) ，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-4-3-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `根据 $a \\odot b = mq - np$ ，得 $a \\odot b$ 与 $b \\odot a$ 互为相反数，B 错误；

由平面向量共线的坐标表示知 A 正确；

根据向量数乘运算， $(\\lambda\\boldsymbol{a})\\odot\\boldsymbol{b}=\\lambda mq-\\lambda np=\\lambda(\\boldsymbol{a}\\odot\\boldsymbol{b})$ ，C正确；

由 $(\\boldsymbol{a}\\odot\\boldsymbol{b})^{2}=(mq-np)^{2}$ ，又 $(\\boldsymbol{a}\\cdot\\boldsymbol{b})^{2}=(mp+nq)^{2}$ ，得

$$
(\\boldsymbol {a} \\odot \\boldsymbol {b}) + (\\boldsymbol {a} \\cdot \\boldsymbol {b}) ^ {2} = m ^ {2} q ^ {2} + n ^ {2} p ^ {2} + m ^ {2} p ^ {2} + n ^ {2} q ^ {2} = (m ^ {2} + n ^ {2}) (p ^ {2} + q ^ {2}) = | \\boldsymbol {a} | ^ {2} | \\boldsymbol {b} | ^ {2},
$$

D 正确. 所以选 B.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-4-4",
    topicId: "topic-sec-1-4",
    title: `记实数 x_1, x_2, ·s, x_n 中的最大数为`,
    content: `记实数 $x_{1}, x_{2}, \\cdots, x_{n}$ 中的最大数为 $\\max\\{x_{1}, x_{2}, \\cdots, x_{n}\\}$ , 最小数为 $\\min\\{x_{1}, x_{2}, \\cdots, x_{n}\\}$ . 已知 $\\triangle ABC$ 的三边长为 $a, b, c (a \\leqslant b \\leqslant c)$ , 定义它的倾斜度为 $l = \\max \\left\\{\\frac{a}{b}, \\frac{b}{c}, \\frac{c}{a}\\right\\} \\cdot \\min \\left\\{\\frac{a}{b}, \\frac{b}{c}, \\frac{c}{a}\\right\\}$ , 则“ $l = 1$ ”是“ $\\triangle ABC$ 为等边三角形”的 ( )
A. 必要而不充分的条件

B. 充分而不必要的条件

C. 充要条件

D.既不充分也不必要的条件`,
    preview: `记实数 x_1, x_2, ·s, x_n 中的最大数为 , 最小数为 . 已知 △ ABC 的三边长为 , 定义它的倾斜度为 , 则“ l = 1 ”是“ △`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-4-4-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `由倾斜度的定义知, 若 $\\triangle ABC$ 为等边三角形, 则 l=1. 反之, 则不一定成立, 例如 $\\triangle ABC$ 为边长分别为 1、2、2 的等腰三角形, 则 $l=\\frac{1}{2}\\times2=1$ , 所以选 A.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-4-5",
    topicId: "topic-sec-1-4",
    title: `在平面直角坐标系中, 当 P(x, y) 不是原点时`,
    content: `在平面直角坐标系中, 当 $P(x, y)$ 不是原点时, 定义 P 的“伴随点”为 $P'\\left(\\frac{y}{x^{2}+y^{2}}, \\frac{-x}{x^{2}+y^{2}}\\right)$ ; 当 P 是原点时, 定义 P 的“伴随点”为它自身, 平面曲线 C 上所有点的“伴随点”所构成的曲线 $C'$ 定义为曲线 C 的“伴随曲线”. 现有下列命题:
①若点 A 的“伴随点”是点 $A'$ ，则点 $A'$ 的“伴随点”是点 A；
②若曲线 C 关于 x 轴对称, 则其“伴随曲线” $C'$ 关于 y 轴对称;
③单位圆的“伴随曲线”是它自身；
④一条直线的“伴随曲线”是一条直线.

其中的真命题是\\_\\_\\_\\_（写出所有真命题的序列）.`,
    preview: `在平面直角坐标系中, 当 P(x, y) 不是原点时, 定义 P 的“伴随点”为 P'(y/x^{2+y^2}, -x/x^{2+y^2}) ; 当 P 是原点`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-4-5-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `对于①, 若令 $P(1,1)$ , 则其伴随点为 $P'\\left(\\frac{1}{2}, -\\frac{1}{2}\\right)$ , 而 $P'\\left(\\frac{1}{2}, -\\frac{1}{2}\\right)$ 的伴随点为 $(-1, -1)$ , 而不是 $P$ , 故①错误; 对于②, 设曲线 $f(x,y)=0$ 关于 $x$ 轴对称, 则 $f(x,-y)=0$ 与 $f(x,y)=0$ 表示同一曲线, 它们的伴随曲线分别为 $f\\left(\\frac{y}{x^2+y^2}, \\frac{-x}{x^2+y^2}\\right)=0$ 与 $f\\left(\\frac{-y}{x^2+y^2}, \\frac{-x}{x^2+y^2}\\right)=0$ , 也表示同一曲线, 又因为伴随曲线 $f\\left(\\frac{y}{x^2+y^2}, \\frac{-x}{x^2+y^2}\\right)=0$ 与 $f\\left(\\frac{-y}{x^2+y^2}, \\frac{-x}{x^2+y^2}\\right)=0$ 的图像关于 $y$ 轴对称, 所以②正确; 对于③, 令单位圆上点的坐标为 $P(\\cos x, \\sin x)$ , 其伴随点 $P'\\left(\\sin x, -\\cos x\\right)$ 仍在单位圆上, 故③正确; 对于④, 直线 $y=kx+b$ 上取点 $P(x,y)$ 后得其伴随点 $\\left(\\frac{y}{x^2+y^2}, \\frac{-x}{x^2+y^2}\\right)$ , 消参后轨迹是圆, 故④错误. 所以正确的序号为②③.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-4-6",
    topicId: "topic-sec-1-4",
    title: `某学校要召开学生代表大会, 规定各班每 10`,
    content: `某学校要召开学生代表大会, 规定各班每 10 人推选一名代表, 当各班人数除以 10 的余数大于 6 时再增选一名代表. 那么, 各班可推选代表人数 y 与该班人数 x 之间的函数关系用取整函数 $y = [x]$ ([x] 表示不大于 x 的最大整数) 可以表示为 ( )
A. $y = \\left[\\frac{x}{10}\\right]$

B. $y = \\left[\\frac{x + 3}{10}\\right]$

C. $y = \\left[\\frac{x + 4}{10}\\right]$

D. $y = \\left[\\frac{x + 5}{10}\\right]$`,
    preview: `某学校要召开学生代表大会, 规定各班每 10 人推选一名代表, 当各班人数除以 10 的余数大于 6 时再增选一名代表. 那么, 各班可推选代表人数 y 与该班`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-4-6-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `根据题意,若班级人数个位数为7、8、9时需要增加一人,x最多需加3,保证十位进一,才能满足要求;若为0、1、2、3、4、5、6时不需要增加,直接取整即可.所以选B.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-4-7",
    topicId: "topic-sec-1-4",
    title: `若数列 a_n 满足: 对任意的 n∈Z^+, 只有有限个正整数 m 使得 a_m<n 成立, 记这样的 m 的个数`,
    content: `若数列 $\\{a_{n}\\}$ 满足: 对任意的 $n\\in\\mathbf{Z}^{+}$ , 只有有限个正整数 m 使得 $a_{m}<n$ 成立, 记这样的 m 的个数为 $(a_{n})^{*}$ , 则得到一个新数列 $\\{(a_{n})^{*}\\}$ . 例如, 若数列 $\\{a_{n}\\}$ 是 1,2,3,…, $n,\\cdots$ , 则数列 $\\{(a_{n})^{*}\\}$ 是 0,1,2,…, $n-1,\\cdots$ . 已知对任意的 $n\\in\\mathbf{Z}^{+},a_{n}=n^{2}$ , 则 $(a_{5})^{*}=$ \\_\\_\\_\\_, $((a_{n})^{*})^{*}=$ \\_\\_\\_\\_.`,
    preview: `若数列 满足: 对任意的 n^+ , 只有有限个正整数 m 使得 a_m<n 成立, 记这样的 m 的个数为 (a_n)^* , 则得到一个新数列 . 例如,`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-4-7-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `因为 $a_{m}<5$ ，而 $a_{n}=n^{2}$ ，所以 m=1,2，所以 $(a_{5})^{*}=2$ .

因为 $(a_{1})^{*}=0,(a_{2})^{*}=1,(a_{3})^{*}=1,(a_{4})^{*}=1,$

$$
(a _ {5}) ^ {*} = 2, (a _ {6}) ^ {*} = 2, (a _ {7}) ^ {*} = 2, (a _ {8}) ^ {*} = 2, (a _ {9}) ^ {*} = 2,
$$

$$
(a _ {1 0}) ^ {*} = 3, (a _ {1 1}) ^ {*} = 3, (a _ {1 2}) ^ {*} = 3, (a _ {1 3}) ^ {*} = 3, (a _ {1 4}) ^ {3} = 3, (a _ {1 5}) ^ {*} = 3, (a _ {1 6}) ^ {*} = 3,
$$

所以 $((a_{1})^{*})^{*}=1,((a_{2})^{*})^{*}=4,((a_{3})^{*})^{*}=9,((a_{4})^{*})^{*}=16,$

猜想 $\\left(\\left(a_{n}\\right)^{*}\\right)^{*}=n^{2}$ .(证明留给读者)`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-4-8",
    topicId: "topic-sec-1-4",
    title: `设 [x] 表示不大于 x 的最大整数`,
    content: `设 $[x]$ 表示不大于 x 的最大整数，则对任意实数 x, y，有（）
A. $[-x] = -[x]$

B. $[2x] = 2[x]$

C. $[x + y] \\leqslant [x] + [y]$

D. $[x - y] \\leqslant [x] - [y]$`,
    preview: `设 [x] 表示不大于 x 的最大整数，则对任意实数 x, y，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-4-8-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `本题直接考查高斯函数的性质, 熟悉的同学可直接秒杀. 不熟悉的同学可借助特殊值, 如令 x=1.5, 代入四个选项, 可淘汰 A, B, C, 选择 D.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-4-9",
    topicId: "topic-sec-1-4",
    title: `已知 S_n 为等差数列 a_n 的前 n 项和，且 a_1=1, S_7=28 . 记 b_n=[lg a_n]`,
    content: `已知 $S_{n}$ 为等差数列 $\\{a_{n}\\}$ 的前 n 项和，且 $a_{1}=1, S_{7}=28$ . 记 $b_{n}=[\\lg a_{n}]$ ，其中 [x] 表示不超过 x 的最大整数，如 [0.9]=0，[lg99]=1. 求：
(1) $b_{1},b_{11},b_{101}$ ;

(2) 数列 $\\{b_{n}\\}$ 的前 1000 项之和.`,
    preview: `已知 S_n 为等差数列 的前 n 项和，且 a_1=1, S_7=28 . 记 b_n=[ a_n] ，其中 [x] 表示不超过 x 的最大整数，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-4-9-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 设 $\\{a_{n}\\}$ 的公差为 d，据已知有 $7+21d=28$ ，解得 d=1.

所以 $\\{a_{n}\\}$ 的通项公式为 $a_{n}=n$ .

$$
b _ {1} = [ \\lg 1 ] = 0, b _ {1 1} = [ \\lg 1 1 ] = 1, b _ {1 0 1} = [ \\lg 1 0 1 ] = 2.
$$

(2)因为 $b_{n} = \\left\\{ \\begin{array}{ll}0, & 1\\leqslant n <   10,\\\\ 1, & 10\\leqslant n <   100,\\\\ 2, & 100\\leqslant n <   1000,\\\\ 3, & n = 1000, \\end{array} \\right.$

所以数列 $\\{b_{n}\\}$ 的前1000项之和为 $1\\times90+2\\times900+3\\times1=1893$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-4-10",
    topicId: "topic-sec-1-4",
    title: `已知不等式 1/2 +1/3 + +1/n >1/2`,
    content: `已知不等式 $\\frac{1}{2} +\\frac{1}{3} +\\dots +\\frac{1}{n} >\\frac{1}{2} [\\log_2n]$ ，其中 $n$ 为大于2的整数， $[\\log_2n]$ 表示不超过 $\\log_2n$ 的最大整数.设数列 $\\{a_{n}\\}$ 的各项为正，且满足 $a_1 = b(b > 0),a_n\\leqslant$ $\\frac{na_{n - 1}}{n + a_{n - 1}},n = 2,3,4,\\dots .$
(1) 证明: $a_{n} < \\frac{2b}{2 + b[\\log_{2}n]}, n = 3,4,5,\\dots$ .

(2)猜测数列 $\\{a_{n}\\}$ 是否有极限,如果有,写出极限的值.(不必证明)

(3)试确定一个正整数 N，使得当 n > N 时，对任意 b > 0，都有 $a_{n} < \\frac{1}{5}$ .`,
    preview: `已知不等式 1/2 +1/3 + +1/n >1/2 [_2n] ，其中 n 为大于2的整数， [_2n] 表示不超过 _2n 的最大整数.设数列 的各项为正，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-4-10-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `本题实际上是以高等数学中的调和级数与高斯函数为背景编制的一道综合题. 解答时,无须用到高等数学的知识,只需先用递推思想证明 $\\frac{1}{a_{n}}-\\frac{1}{a_{1}}\\geqslant\\frac{1}{2}+\\frac{1}{3}+\\cdots+\\frac{1}{n}$ 或运用数学归纳法证明 $a_{n}\\leqslant\\frac{b}{1+f(n)b},n\\geqslant3$ ,其中 $f(n)=\\frac{1}{2}+\\frac{1}{3}+\\cdots+\\frac{1}{n}$ ,便可顺利解决原问题.

(1)证法一 因为当 $n \\geqslant 2$ 时, $0 < a_{n} \\leqslant \\frac{na_{n-1}}{n + a_{n-1}}$ ,

所以 $\\frac{1}{a_{n}}\\geqslant\\frac{n+a_{n-1}}{na_{n-1}}=\\frac{1}{a_{n-1}}+\\frac{1}{n}$ ，即 $\\frac{1}{a_{n}}-\\frac{1}{a_{n-1}}\\geqslant\\frac{1}{n}$

于是有 $\\frac{1}{a_{2}}-\\frac{1}{a_{1}}\\geqslant\\frac{1}{2},\\frac{1}{a_{3}}-\\frac{1}{a_{2}}\\geqslant\\frac{1}{3},\\cdots,\\frac{1}{a_{n}}-\\frac{1}{a_{n-1}}\\geqslant\\frac{1}{n}.$

所有不等式两边相加可得 $\\frac{1}{a_{n}}-\\frac{1}{a_{1}}\\geqslant\\frac{1}{2}+\\frac{1}{3}+\\cdots+\\frac{1}{n}.$

由已知不等式知，当 $n \\geqslant 3$ 时，有 $\\frac{1}{a_n} - \\frac{1}{a_1} > \\frac{1}{2}[\\log_2 n]$ .

因为 $a_1 = b$ ，所以 $\\frac{1}{a_n} >\\frac{1}{b} +\\frac{1}{2} [\\log_2n] = \\frac{2 + b[\\log_2n]}{2b}$ ，所以 $a_{n} <   \\frac{2b}{2 + b[\\log_{2}n]}$

证法二 设 $f(n)=\\frac{1}{2}+\\frac{1}{3}+\\cdots+\\frac{1}{n}$ ，首先利用数学归纳法证不等式

$$
a _ {n} \\leqslant \\frac {b}{1 + f (n) b}, n = 3, 4, 5, \\dots .
$$

(i) 当 $n = 3$ 时, 由 $a_{3} \\leqslant \\frac{3a_{2}}{3 + a_{2}} = \\frac{3}{\\frac{3}{a_{2}} + 1} \\leqslant \\frac{3}{3 \\cdot \\frac{2 + a_{1}}{2a_{1}} + 1} = \\frac{b}{1 + f(3)b}$ , 知不等式成立.

(ii) 假设当 $n=k(k \\geqslant 3)$ 时，不等式成立，即 $a_{k} \\leqslant \\frac{b}{1 + f(k)b}$ ,

则 $a_{k + 1}\\leqslant \\frac{(k + 1)a_k}{(k + 1) + a_k} = \\frac{k + 1}{\\frac{(k + 1)}{a_k} + 1}\\leqslant \\frac{k + 1}{(k + 1)\\cdot\\frac{1 + f(k)b}{b} + 1}$

$$
\\begin{array}{l} = \\frac {(k + 1) b}{(k + 1) + (k + 1) f (k) b + b} \\\\ = \\frac {b}{1 + \\left(f (k) + \\frac {1}{k + 1}\\right) b} \\\\ = \\frac {b}{1 + f (k + 1) b}, \\\\ \\end{array}
$$

即当 $n=k+1$ 时, 不等式也成立.

由(i)(ii)知, $a_{n}\\leqslant\\frac{b}{1+f(n)b},n=3,4,5,\\cdots.$

又由已知不等式得 $a_{n}<\\frac{b}{1+\\frac{1}{2}[\\log_{2}n]b}=\\frac{2b}{2+b[\\log_{2}n]},n=3,4,5,\\cdots.$

(2)有极限,且 $\\lim_{n\\to\\infty}a_{n}=0$ .

(3)由 $\\frac{2b}{2+b[\\log_{2}n]}<\\frac{2}{[\\log_{2}n]}$ ，令 $\\frac{2}{[\\log_{2}n]}<\\frac{1}{5}$

得 $\\log_{2}n\\geqslant[\\log_{2}n]>10$ ,

所以 $n>2^{10}=1024$ ，故取 N=1024，可使当 n>N 时，都有 $a_{n}<\\frac{1}{5}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-4-11",
    topicId: "topic-sec-1-4",
    title: `若函数 y= x 在区间 (0,π) 上是上凸函数`,
    content: `若函数 $y=\\sin x$ 在区间 $(0,\\pi)$ 上是上凸函数，那么在 $\\triangle ABC$ 中，求 $\\sin A+\\sin B+\\sin C$ 的最大值.`,
    preview: `若函数 y= x 在区间 (0,π) 上是上凸函数，那么在 △ ABC 中，求 A+ B+ C 的最大值.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-4-11-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `因为 $y=\\sin x$ 在 $(0,\\pi)$ 上是上凸函数，则

$$
\\frac {1}{3} (\\sin A + \\sin B + \\sin C) \\leqslant \\sin \\left(\\frac {A + B + C}{3}\\right) = \\sin 6 0 ^ {\\circ} = \\frac {\\sqrt {3}}{2},
$$

即 $\\sin A + \\sin B + \\sin C \\leqslant \\frac{3\\sqrt{3}}{2}$ ,

当且仅当 $\\sin A = \\sin B = \\sin C$ 时，即 $\\angle A = \\angle B = \\angle C = \\frac{\\pi}{3}$ 时，取等号.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-4-12",
    topicId: "topic-sec-1-4",
    title: `定义在 R 上的函数 f(x) 满足：如果对任意 x_1`,
    content: `定义在 $\\mathbf{R}$ 上的函数 $f(x)$ 满足：如果对任意 $x_{1}, x_{2} \\in \\mathbf{R}$ ，都有 $f\\left(\\frac{x_1 + x_2}{2}\\right) \\leqslant \\frac{1}{2}[f(x_1) + f(x_2)]$ ，则称函数 $f(x)$ 是 $\\mathbf{R}$ 上的下凸函数。已知二次函数 $f(x) = ax^2 + x (a \\in \\mathbf{R}, a \\neq 0)$ 。
(1) 求证: 当 a > 0 时, 函数 $f(x)$ 是下凸函数;
(2) 如果 $x \\in [0,1]$ , $|f(x)| \\leqslant 1$ , 试求实数 a 的范围.`,
    preview: `定义在 R 上的函数 f(x) 满足：如果对任意 x_1, x_2 R ，都有 ，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-4-12-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 对任意 $x_{1}, x_{2} \\in R$ ，由 a > 0 得

$$
\\begin{array}{l} \\left[ f (x _ {1}) + f (x _ {2}) \\right] - 2 f \\left(\\frac {x _ {1} + x _ {2}}{2}\\right) = a x _ {1} ^ {2} + x _ {1} + a x _ {2} ^ {2} + x _ {2} - 2 \\left[ a \\left(\\frac {x _ {1} + x _ {2}}{2}\\right) ^ {2} + \\frac {x _ {1} + x _ {2}}{2} \\right] \\\\ = a x _ {1} ^ {2} + a x _ {2} ^ {2} - \\frac {1}{2} a (x _ {1} ^ {2} + x _ {2} ^ {2} + 2 x _ {1} x _ {2}) = \\frac {1}{2} a (x _ {1} - x _ {2}) ^ {2} \\geqslant 0. \\\\ \\end{array}
$$

所以 $f\\left(\\frac{x_1 + x_2}{2}\\right) \\leqslant \\frac{1}{2} [f(x_1) + f(x_2)]$ ，所以函数 $f(x)$ 是下凸函数.

(2)由 $|f(x)| \\leqslant 1 \\Leftrightarrow -1 \\leqslant f(x) \\leqslant 1 \\Leftrightarrow -1 \\leqslant ax^2 + x \\leqslant 1.$ （\\*）

当 $x = 0$ 时， $a \\in \\mathbf{R}$ ；当 $x \\in (0,1]$ 时， $(*)$ 式即 $\\begin{cases} ax^2 \\geqslant -x - 1, \\\\ ax^2 \\leqslant -x + 1 \\end{cases}$ 恒成立，

即 $\\left\\{ \\begin{array}{l} a \\geqslant -\\frac{1}{x^2} - \\frac{1}{x} = -\\left(\\frac{1}{x} + \\frac{1}{2}\\right)^2 + \\frac{1}{4}, \\\\ a \\leqslant \\frac{1}{x^2} - \\frac{1}{x} = \\left(\\frac{1}{x} - \\frac{1}{2}\\right)^2 - \\frac{1}{4} \\end{array} \\right.$ 恒成立.

因为 $x \\in (0,1]$ ，得 $\\frac{1}{x} \\geqslant 1$ .

所以，当 $\\frac{1}{x}=1$ 时， $-\\left(\\frac{1}{x}+\\frac{1}{2}\\right)^{2}+\\frac{1}{4}$ 取得最大值-2；

$\\left(\\frac{1}{x} - \\frac{1}{2}\\right)^2 - \\frac{1}{4}$ 取得最小值0.

所以 $-2\\leqslant a\\leqslant0$ ，结合 $a\\neq0$ ，得 $-2\\leqslant a<0$ 。

综上，a 的范围是 $[-2,0)$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-4-13",
    topicId: "topic-sec-1-4",
    title: `已知函数 f(x) = a x/x + 1 +b/x`,
    content: `已知函数 $f(x) = \\frac{a\\ln x}{x + 1} +\\frac{b}{x}$ ，曲线 $y = f(x)$ 在点(1, $f(1)$ )处的切线方程为 $x + 2y - 3 = 0$ .
(1) 求 a, b 的值;
(2)如果当 $x > 0$ 且 $x\\neq 1$ 时， $f(x) > \\frac{\\ln x}{x - 1} +\\frac{k}{x}$ ，求 $k$ 的取值范围.`,
    preview: `已知函数 f(x) = a x/x + 1 +b/x ，曲线 y = f(x) 在点(1, f(1) )处的切线方程为 x + 2y - 3 = 0 . (1)`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-4-13-sol-0",
        title: `解答`,
        method: "creative",
        steps: [],
        explanation: `(1) 易知 $a = b = 1$ (过程略).

(2)由(1)有 $f(x)=\\frac{\\ln x}{x+1}+\\frac{1}{x}>\\frac{\\ln x}{x-1}+\\frac{k}{x}$ ，即 $k<\\frac{2x\\ln x}{1-x^{2}}+1$

从而 $k<\\left(\\frac{2x\\ln x}{1-x^{2}}+1\\right)_{\\min}(0<x\\neq1)$ .

设 $F(x) = \\frac{2x\\ln x}{1 - x^2} + 1$ ，则 $F'(x) = \\frac{2(\\ln x + x^2\\ln x + 1 - x^2)}{(1 - x^2)^2}$ .

设 $g(x) = 2(\\ln x + x^2\\ln x + 1 - x^2)$ ，则 $g(1) = 0$

$$
g ^ {\\prime} (x) = 2 \\left(\\frac {1}{x} + 2 x \\ln x - x\\right), g ^ {\\prime} (1) = 0.
$$

$$
g ^ {\\prime \\prime} (x) = 2 \\left(1 + 2 \\ln x - \\frac {1}{x ^ {2}}\\right), g ^ {\\prime \\prime} (1) = 0. g ^ {\\prime \\prime \\prime} (x) = \\frac {4}{x} + \\frac {4}{x ^ {3}}.
$$

当 $x \\in (0,1)$ 时， $g'''(x) > 0$ ，则 $g''(x)$ 在 $(0,1)$ 上是增函数，

则 $g''(x) < g''(1) = 0$ ，则 $g'(x)$ 在 $(0,1)$ 上是减函数，

则 $g'(x) > g'(1) = 0$ ，则 $g(x)$ 在 $(0,1)$ 上是增函数，所以 $g(x) < g(1) = 0$ ，

所以 $F'(x)<0$ ，即 $F(x)$ 在 $(0,1)$ 上是减函数.

同理可得，当 $x \\in (1, +\\infty)$ 时， $F(x)$ 在 $(1, +\\infty)$ 上是增函数。由洛比达法则可得

$$
\\lim _ {x \\to 1} F (x) = \\lim _ {x \\to 1} \\frac {2 x \\ln x}{1 - x ^ {2}} + 1 = \\lim _ {x \\to 1} \\frac {2 (\\ln x + 1)}{- 2 x} + 1 = 0.
$$

因此，可补充定义：令 $F(1) = 0$ ，从而 $F(x)$ 在 $(0, +\\infty)$ 上连续，且当 $x = 1$ 时， $F(x)$ 有最小值0，故 $k \\in (-\\infty, 0]$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-4-14",
    topicId: "topic-sec-1-4",
    title: `已知数列 a_n 中， a_1=2, a_n+1=(√(2)-1)(a_n+2)`,
    content: `已知数列 $\\{a_{n}\\}$ 中， $a_{1}=2, a_{n+1}=(\\sqrt{2}-1)(a_{n}+2)$ .
(1) 求 $\\{a_{n}\\}$ 的通项公式；
(2) 若数列 $\\{b_{n}\\}$ 中 $b_{1}=2, b_{n+1}=\\frac{3b_{n}+4}{2b_{n}+3}, n=1,2,3,\\cdots$ ，证明： $\\sqrt{2}<b_{n}\\leqslant a_{4n-3}$`,
    preview: `已知数列 中， a_1=2, a_n+1=(√2-1)(a_n+2) . (1) 求 的通项公式； (2) 若数列 中 ，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-4-14-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)对于本题来说,数列 $\\{a_{n}\\}$ 对应的递推函数为 $f(x)=(\\sqrt{2}-1)(x+2)$ ,由 $f(x)=x$ 解得不动点为 $\\sqrt{2}$ ,在等式 $a_{n+1}=(\\sqrt{2}-1)(a_{n}+2)$ 两边分别减去 $\\sqrt{2}$ ,化简可得 $a_{n+1}-\\sqrt{2}=(\\sqrt{2}-1)(a_{n}-\\sqrt{2})$ ,从而数列 $\\{a_{n}-\\sqrt{2}\\}$ 是首项为 $2-\\sqrt{2}$ ,公比为 $\\sqrt{2}-1$ 的等比数列,易得 $a_{n}=\\sqrt{2}\\left[(\\sqrt{2}-1)^{n}+1\\right],n=1,2,3,\\cdots$ .

(2)数列 $\\{b_{n}\\}$ 对应的递推函数为 $g(x)=\\frac{3x+4}{2x+3}$ ，由 $g(x)=x$ 解得不动点为 $\\pm\\sqrt{2}$ ，分别在 $b_{n+1}=\\frac{3b_{n}+4}{2b_{n}+3}$ 两边同时减去 $\\sqrt{2}$ 与 $-\\sqrt{2}$ ，化简可得

$$
b _ {n + 1} - \\sqrt {2} = \\frac {3 b _ {n} + 4}{2 b _ {n} + 3} - \\sqrt {2} = \\frac {(3 - 2 \\sqrt {2}) b _ {n} + (4 - 3 \\sqrt {2})}{2 b _ {n} + 3} = \\frac {(3 - 2 \\sqrt {2}) (b _ {n} - \\sqrt {2})}{2 b _ {n} + 3},
$$

$$
b _ {n + 1} + \\sqrt {2} = \\frac {3 b _ {n} + 4}{2 b _ {n} + 3} + \\sqrt {2} = \\frac {(3 + 2 \\sqrt {2}) b _ {n} + (4 + 3 \\sqrt {2})}{2 b _ {n} + 3} = \\frac {(3 + 2 \\sqrt {2}) (b _ {n} + \\sqrt {2})}{2 b _ {n} + 3},
$$

两式相除，得 $\\frac{b_{n + 1} - \\sqrt{2}}{b_{n + 1} + \\sqrt{2}} = \\frac{3 - 2\\sqrt{2}}{3 + 2\\sqrt{2}}\\times \\frac{b_n - \\sqrt{2}}{b_n + \\sqrt{2}} = (\\sqrt{2} -1)^4\\times \\frac{b_n - \\sqrt{2}}{b_n + \\sqrt{2}},$

因此，数列 $\\left\\{\\frac{b_{n}-\\sqrt{2}}{b_{n}+\\sqrt{2}}\\right\\}$ 是以 $3-2\\sqrt{2}$ 为首项， $(\\sqrt{2}-1)^{4}$ 为公比的等比数列.

由此可解得 $b_{n} = \\sqrt{2}\\times \\frac{(\\sqrt{2} - 1)^{4n - 2} + 1}{1 - (\\sqrt{2} - 1)^{4n - 2}}.$ 用分析法易证 $\\sqrt{2} < b_n\\leqslant a_{4n - 3}$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-4-15",
    topicId: "topic-sec-1-4",
    title: `如图 1-4-2 所示, 已知椭圆 E 经过点`,
    content: `如图 1-4-2 所示, 已知椭圆 E 经过点 A(2,3), 对称轴为坐标轴, 焦点 $F_{1}, F_{2}$ 在 x 轴上, 离心率 $e=\\frac{1}{2}$ . 求:
![](images/da1a042446331f0f1fcd49479becf6b04d5822176beabb2d87dc8afb4e1acb41.jpg)

图1-4-2

(1)椭圆E的方程；
(2) $\\angle F_{1}AF_{2}$ 的平分线l所在的直线方程.`,
    preview: `如图 1-4-2 所示, 已知椭圆 E 经过点 A(2,3), 对称轴为坐标轴, 焦点 F_1, F_2 在 x 轴上, 离心率 e=1/2 . 求: 图1-4`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-4-15-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1) 易求得椭圆 E 的方程为 $\\frac{x^{2}}{16} + \\frac{y^{2}}{12} = 1$ .

(2)如图所示,设椭圆 E 在点 A 处的切线为 $l'$ ,由于直线 l 为 $\\angle F_{1}AF_{2}$ 的平分线,所以,由椭圆的光学性质知 $l \\perp l'$ .

$l'$ 的方程为 $\\frac{2x}{16}+\\frac{3y}{12}=1$ ,

即 $x+2y-8=0$ ,

所以 l 的方程为 $y-3=2(x-2)$ ,

即 2x-y-1=0.

故 $\\angle F_{1}AF_{2}$ 的平分线l所在的直线方程为2x-y-1=0.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-4-16",
    topicId: "topic-sec-1-4",
    title: `椭圆 C: x^2a^2 + y^2b^2 = 1 (a > b > 0)`,
    content: `椭圆 $C: \\frac{x^{2}}{a^{2}} + \\frac{y^{2}}{b^{2}} = 1 (a > b > 0)$ 的左、右焦点分别是 $F_{1}, F_{2}$ , 离心率为 $\\frac{\\sqrt{3}}{2}$ , 过 $F_{1}$ 且垂直于 $x$ 轴的直线被椭圆 $C$ 截得的线段长为 1.
(1)求椭圆 C 的方程；
(2) 点 P 是椭圆 C 上除长轴端点外的任一点, 连接 $PF_{1}, PF_{2}$ , 设 $\\angle F_{1}PF_{2}$ 的角平分线 PM 交 C 的长轴于点 $M(m,0)$ , 求 m 的取值范围;
(3)在(2)的条件下,过P点作斜率为k的直线l,使得l与椭圆C有且只有一个公共点,设直线 $PF_{1},PF_{2}$ 的斜率分别为 $k_{1},k_{2}$ ,若 $k\\neq0$ ,试证明: $\\frac{1}{kk_{1}}+\\frac{1}{kk_{2}}$ 为定值,并求出这个定值.`,
    preview: `椭圆 的左、右焦点分别是 F_1, F_2 , 离心率为 √32 , 过 F_1 且垂直于 x 轴的直线被椭圆 C 截得的线段长为 1. (1)求椭圆 C 的方`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-4-16-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)由题意, 得 $\\frac{c}{a}=\\frac{\\sqrt{3}}{2}, \\frac{2b^{2}}{a}=1, a^{2}=b^{2}+c^{2}$ , 解得 $a^{2}=4, b^{2}=1$ ,

所以椭圆方程为 $\\frac{x^{2}}{4}+y^{2}=1$ .

(2) 设 $P(x_{0}, y_{0})$ ，则 l 为椭圆的在 P 点处的切线，其切线方程为

$$
\\frac {x _ {0} x}{4} + y _ {0} y = 1, k _ {l} = - \\frac {x _ {0}}{4 y _ {0}}.
$$

由圆锥曲线的光学性质, 可知 $PM \\perp l$ , 所以 $k_{PM} = \\frac{4y_{0}}{x_{0}}$ ,

故直线 PM 的方程为 $y - y_{0} = \\frac{4y_{0}}{x_{0}} (x - x_{0})$ .

令 $y = 0$ ，得 $x = \\frac{3}{4} x_0$ ，即 $m = \\frac{3}{4} x_0$

又因为 $x_0 \\in (-2, 2)$ ，所以 $m \\in \\left(-\\frac{3}{2}, \\frac{3}{2}\\right)$ ，故 $m$ 的取值范围为 $\\left(-\\frac{3}{2}, \\frac{3}{2}\\right)$ .

(3)由(2)得, $k=-\\frac{x_{0}}{4y_{0}}$ ,而 $k_{1}=\\frac{y_{0}}{x_{0}+\\sqrt{3}},k_{2}=\\frac{y_{0}}{x_{0}-\\sqrt{3}}$

所以 $\\frac{1}{kk_{1}}+\\frac{1}{kk_{2}}=\\frac{1}{k}\\left(\\frac{1}{k_{1}}+\\frac{1}{k_{2}}\\right)=-\\frac{4y_{0}}{x_{0}}\\left(\\frac{x_{0}+\\sqrt{3}}{y_{0}}+\\frac{x_{0}-\\sqrt{3}}{y_{0}}\\right)=-8$ 为定值.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-4-17",
    topicId: "topic-sec-1-4",
    title: `计算机中常用的十六进制是逢 16 进 1`,
    content: `计算机中常用的十六进制是逢 16 进 1 的计数制,采用数字 0\\~9 和字母 A\\~F 共 16 个计数符号,这些符号与十进制数的对应关系如下表:
<table><tr><td>16进制</td><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td></tr><tr><td>10进制</td><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td></tr></table>

例如，用十六进制表示： $E+D=1B$ ，则 $A\\times B=$ （）

A. $6\\mathrm{E}$

B. 7

C. $5\\mathrm{F}$

D. B0`,
    preview: `计算机中常用的十六进制是逢 16 进 1 的计数制,采用数字 0\\~9 和字母 A\\~F 共 16 个计数符号,这些符号与十进制数的对应关系如下表: <tabl`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-4-17-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `本题是数学与信息学的综合题,考查计数法及信息处理等基础知识.要求考生要有较强的类比应用的能力和研究问题的能力,是一道区分度较好的试题.

本题相当于十进制 $10 \\times 11 = 110$ ，结果是十六进制的 6E，所以答案为 A.

对于以上所说的诸多临界问题,我们平时应该如何复习备考呢?笔者认为,教师要学会“眼观六路,耳听八方”,为此,我们要加强学习,注意收集与积累素材,如一些杂志或全国各地地市级的模拟试卷上都会有些让你眼睛为之一亮的好题、新题,对这些素材进行归纳、筛选、深加工后巧妙地融入课堂,定会使你的复习课更加魅力十足.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-4-18",
    topicId: "topic-sec-1-4",
    title: `已知等差数列 a_n 满足： a_3 = 7, a_5 + a_7 = 26, a_n 的前 n 项和为 S_n`,
    content: `已知等差数列 $\\{a_{n}\\}$ 满足： $a_3 = 7, a_5 + a_7 = 26, \\{a_n\\}$ 的前 $n$ 项和为 $S_{n}$ .
(1) 求 $a_{n}$ 及 $S_{n}$ ;
(2) 令 $b_n = \\frac{1}{a_n^2 - 1} (n \\in \\mathbf{Z}^+)$ ，求数列 $\\{b_n\\}$ 的前 $n$ 项和 $T_n$ .`,
    preview: `已知等差数列 满足： 的前 n 项和为 S_n . (1) 求 a_n 及 S_n ; (2) 令 b_n = 1/a_n^2 - 1 (n Z^+) ，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-4-18-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `(1)设等差数列 $\\{a_{n}\\}$ 的公差为d,

因为 $a_{3}=7, a_{5}+a_{7}=26$ ,

所以有 $\\left\\{\\begin{aligned}a_{1}+2d=7,\\\\ 2a_{1}+10d=26,\\end{aligned}\\right.$ 解得 $a_{1}=3,d=2$

所以 $a_{n}=3+2(n-1)=2n+1; S_{n}=3n+\\frac{n(n-1)}{2}\\times2=n^{2}+2n.$

(2)由(1)知 $a_{n}=2n+1$ ,所以

$$
\\begin{array}{l} b _ {n} = \\frac {1}{a _ {n} ^ {2} - 1} = \\frac {1}{(2 n + 1) ^ {2} - 1} \\\\ = \\frac {1}{4} \\times \\frac {1}{n (n + 1)} = \\frac {1}{4} \\times \\left(\\frac {1}{n} - \\frac {1}{n + 1}\\right), \\\\ \\end{array}
$$

所以 $T_{n}=\\frac{1}{4}\\times\\left(1-\\frac{1}{2}+\\frac{1}{2}-\\frac{1}{3}+\\cdots+\\frac{1}{n}-\\frac{1}{n+1}\\right)$

$$
= \\frac {1}{4} \\times \\left(1 - \\frac {1}{n + 1}\\right) = \\frac {n}{4 (n + 1)},
$$

即数列 $\\{b_{n}\\}$ 的前n项和 $T_{n}=\\frac{n}{4(n+1)}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-4-19",
    topicId: "topic-sec-1-4",
    title: `数列 a_n 定义如下: a_1=2,a_n+1=a_n^2-a_n+1`,
    content: `数列 $\\{a_{n}\\}$ 定义如下: $a_{1}=2,a_{n+1}=a_{n}^{2}-a_{n}+1$ .
求证： $\\frac{1}{a_{1}}+\\frac{1}{a_{2}}+\\cdots+\\frac{1}{a_{2015}}<1.$`,
    preview: `数列 定义如下: a_1=2,a_n+1=a_n^2-a_n+1 . 求证： 1/a_1+1/a_2+·s+1/a_2015<1.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-4-19-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `由已知条件得 $a_{n+1} - 1 = a_n(a_n - 1)$ ,

对此进行分拆变形,得

$$
\\frac {1}{a _ {n + 1} - 1} = \\frac {1}{a _ {n} - 1} - \\frac {1}{a _ {n}},
$$

因此， $\\frac{1}{a_{1}}+\\frac{1}{a_{2}}+\\cdots+\\frac{1}{a_{2015}}$

$$
\\begin{array}{l} = \\left(\\frac {1}{a _ {1} - 1} - \\frac {1}{a _ {2} - 1}\\right) + \\left(\\frac {1}{a _ {2} - 1} - \\frac {1}{a _ {3} - 1}\\right) + \\dots + \\left(\\frac {1}{a _ {2 0 1 5} - 1} - \\frac {1}{a _ {2 0 1 6} - 1}\\right) \\\\ = \\frac {1}{a _ {1} - 1} - \\frac {1}{a _ {2 0 1 6} - 1} = 1 - \\frac {1}{a _ {2 0 1 6} - 1}. \\\\ \\end{array}
$$

注意到 $a_{n+1}-a_{n}=a_{n}^{2}-2a_{n}+1=(a_{n}-1)^{2}>0$

因此 $a_{2016}>1$ ,

故有 $\\frac{1}{a_{1}}+\\frac{1}{a_{2}}+\\cdots+\\frac{1}{a_{2015}}<1$ 成立.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-4-20",
    topicId: "topic-sec-1-4",
    title: `已知数列 a_n 中的相邻两项 a_2k-1, a_2k 是关于 x 的方程 x^2-(2^k+3k)x+3kcdo`,
    content: `已知数列 $\\{a_{n}\\}$ 中的相邻两项 $a_{2k-1}, a_{2k}$ 是关于 x 的方程 $x^{2}-(2^{k}+3k)x+3k\\cdot2^{k}=0$ 的两个根，且 $a_{2k-1}\\leqslant a_{2k}(k=1,2,3,\\cdots)$ .
(1) 求 $a_{1}, a_{3}, a_{5}, a_{7}$ ;
(2)求数列 $\\{a_{n}\\}$ 的前2n项的和 $S_{2n}$ ;
(3) 记 $f(n)=\\frac{1}{2}\\left(\\frac{|\\sin n|}{\\sin n}+3\\right)$ ,

$$
T _ {n} = \\frac {(- 1) ^ {f (2)}}{a _ {1} a _ {2}} + \\frac {(- 1) ^ {f (3)}}{a _ {3} a _ {4}} + \\frac {(- 1) ^ {f (4)}}{a _ {5} a _ {6}} + \\dots + \\frac {(- 1) ^ {f (n + 1)}}{a _ {2 n - 1} a _ {2 n}},
$$

求证： $\\frac{1}{6}\\leqslant T_{n}\\leqslant\\frac{5}{24}(n\\in\\mathbf{Z}^{+})$`,
    preview: `已知数列 中的相邻两项 a_2k-1, a_2k 是关于 x 的方程 x^2-(2^k+3k)x+3k·2^k=0 的两个根，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-4-20-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `考生中能顺利解答本题第三问的寥寥无几. 主要原因是 $T_{n}$ 中各项的符号很难确定, 因此, 很难找到放缩的途径. 正确解答的主要步骤是:

当 $n\\geqslant 3$ 时， $T_{n} = \\frac{1}{6} +\\frac{1}{a_{3}a_{4}} -\\frac{1}{a_{5}a_{6}} +\\dots +\\frac{(-1)^{f(n + 1)}}{a_{2n - 1}a_{2n}}$

$$
\\begin{array}{l} \\geqslant \\frac {1}{6} + \\frac {1}{a _ {3} a _ {4}} - \\left(\\frac {1}{a _ {5} a _ {6}} + \\dots + \\frac {1}{a _ {2 n - 1} a _ {2 n}}\\right) \\\\ \\geqslant \\frac {1}{6} + \\frac {1}{6 \\times 2 ^ {2}} - \\frac {1}{6} \\left(\\frac {1}{2 ^ {3}} + \\frac {1}{2 ^ {4}} + \\dots + \\frac {1}{2 ^ {n}}\\right) = \\frac {1}{6} + \\frac {1}{6 \\times 2 ^ {n}} > \\frac {1}{6}, \\\\ \\end{array}
$$

同时， $T_{n} = \\frac{5}{24} -\\frac{1}{a_{5}a_{6}} -\\frac{1}{a_{7}a_{8}} +\\dots +\\frac{(-1)^{f(n + 1)}}{a_{2n - 1}a_{2n}}$

$$
\\begin{array}{l} \\leqslant \\frac {5}{2 4} - \\frac {1}{a _ {5} a _ {6}} + \\left(\\frac {1}{a _ {7} a _ {8}} + \\frac {1}{a _ {9} a _ {1 0}} + \\dots + \\frac {1}{a _ {2 n - 1} a _ {2 n}}\\right) \\\\ \\leqslant \\frac {5}{2 4} - \\frac {1}{9 \\times 2 ^ {3}} + \\frac {1}{9} \\left(\\frac {1}{2 ^ {4}} + \\frac {1}{2 ^ {5}} + \\dots + \\frac {1}{2 ^ {n}}\\right) = \\frac {5}{2 4} - \\frac {1}{9 \\times 2 ^ {n}} <   \\frac {5}{2 4}. \\\\ \\end{array}
$$

从以上解答可以发现,正确解决该题的核心技术是运用并项的方法,即不论符号如何,应根据目标进行整体并项处理.这种技巧在竞赛中用得较多.详见本书“3.2.5 并项放缩”.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-4-21",
    topicId: "topic-sec-1-4",
    title: `已知数列 a_n 满足 a_1 = 1, a_n+1 = 2a_n + 1 (n ∈ Z^+)`,
    content: `已知数列 $\\{a_{n}\\}$ 满足 $a_1 = 1, a_{n+1} = 2a_n + 1 (n \\in \\mathbf{Z}^+)$ .
(1)求数列 $\\{a_{n}\\}$ 的通项公式；
(2) 数列 $\\{b_{n}\\}$ 满足 $4^{b_{1}-1}4^{b_{2}-1}\\cdots4^{b_{n}-1}=(a_{n}+1)^{b_{n}}, n\\in\\mathbf{Z}^{+}$ ，证明： $\\{b_{n}\\}$ 是等差数列；
(3) 证明: $\\frac{n}{2} - \\frac{1}{3} < \\frac{a_1}{a_2} + \\frac{a_2}{a_3} + \\cdots + \\frac{a_n}{a_{n+1}} < \\frac{n}{2} (n \\in \\mathbf{Z}^+)$ .`,
    preview: `已知数列 满足 . (1)求数列 的通项公式； (2) 数列 满足 ，证明： 是等差数列； (3) 证明: .`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-4-21-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `本题所给的递推公式, 其一般形式为“ $a_{n+1}=ca_{n}+d(c\\neq1,d\\neq0,c,d\\in\\mathbf{R})$ ”. 在数学竞赛中, 将该类递推公式称为一阶线性递推公式. 其通项公式可根据不动点原理求得, 也可运用待定系数法、阶差法或数学归纳法等多种方法求得. 第二小题, 经化简得到的递推公式为 $(n-1)b_{n+1}-nb_{n}+2=0$ , 除了可用数学归纳法或阶差法得到 $b_{n+2}-2b_{n+1}+b_{n}=0$ 外, 还可直接求出通项公式 $b_{n}$ . 为此, 可先将原递推式两边同除以 $n(n-1)$ 并整理, 得 $\\frac{b_{n+1}}{n}-\\frac{b_{n}}{n-1}=-\\frac{2}{n(n-1)}$ , 若令 $c_{n}=\\frac{b_{n}}{n-1}$ , 则 $c_{n+1}-c_{n}=-\\frac{2}{n(n-1)}$ , 再利用累加法得通项公式 $c_{n}$ , 从而求得 $b_{n}$ . 第三小题主要是灵活运用放缩法. 具体解答略.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-4-22",
    topicId: "topic-sec-1-4",
    title: `4 个人互相传球,要求接球后马上传给别人,由甲先传球,并作第`,
    content: `4 个人互相传球,要求接球后马上传给别人,由甲先传球,并作第一次传球,求经过 10 次传球仍回到发球人甲手中的传球方式的种数.`,
    preview: `4 个人互相传球,要求接球后马上传给别人,由甲先传球,并作第一次传球,求经过 10 次传球仍回到发球人甲手中的传球方式的种数.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-4-22-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `先将问题一般化, 考虑经过 $n$ 次传球仍回到发球人甲手中的传球方式的种数 $a_{n}$ , 首先由甲发球, 球传出后自然不能在他手中, 故 $a_{1} = 0$ , 再考虑经两次传球的情形, 先由甲发球给其他三人中的一位, 再由此人回传给甲, 故 $a_{2} = 3$ , 由上述分析可知, 经 $n - 1$ 次传球后, 不同传球方式共有 $3^{n - 1}$ 种. 这些方式中既包括再经第 $n$ 次传球, 由他人将球回传到甲手中的 $a_{n}$ 种不同的传球方式; 也包括球经第 $n - 1$ 次传球正好入甲手中, 第 $n$ 次传球又将是甲把球传给他人的传球方式. 而且仅有上面两种情形, 故有 $a_{n} + a_{n - 1} = 3^{n - 1}$ , 从而有 $a_{n} = -a_{n - 1} + 3^{n - 1}$ , 即有 $\\frac{a_{n}}{(-1)^{n}} = \\frac{a_{n - 1}}{(-1)^{n - 1}} - (-3)^{n - 1}$ , 解得 $a_{n} = \\frac{3}{4} [3^{n - 1} + (-1)^{n}]$ , 取 $n = 10$ , 得 $a_{10} = 14763$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-4-23",
    topicId: "topic-sec-1-4",
    title: `函数 f_n(x) = n^2x^2(1 - x)^n, x ∈ [0,1], n ∈ Z^+，若将 f_n(x)`,
    content: `函数 $f_{n}(x) = n^{2}x^{2}(1 - x)^{n}, x \\in [0,1], n \\in \\mathbf{Z}^{+}$ ，若将 $f_{n}(x)$ 的最大值记为 $a_{n}$ ，求数列 $\\{a_{n}\\}$ 的最小值项.`,
    preview: `函数 ，若将 f_n(x) 的最大值记为 a_n ，求数列 的最小值项.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-4-23-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `$f_{n}(0) = f_{n}(1) = 0$ ，当 $x\\in (0,1)$ 时，通过配凑可得

$$
\\begin{array}{l} f _ {n} (x) = n ^ {2} x ^ {2} (1 - x) ^ {n} = 4 \\times \\frac {n x}{2} \\times \\frac {n x}{2} \\cdot \\underbrace {(1 - x) (1 - x) \\cdots (1 - x)} _ {n \\text {个}} \\\\ \\leqslant 4 \\times \\left[ \\frac {\\frac {n x}{2} + \\frac {n x}{2} + (1 - x) n}{n + 2} \\right] ^ {n + 2} = 4 \\left(\\frac {n}{n + 2}\\right) ^ {n + 2}, \\\\ \\end{array}
$$

仅当 $\\frac{nx}{2}=1-x$ ，即 $x=\\frac{2}{n+2}$ 时， $f_{n}(x)$ 取得最大值 $4\\left(\\frac{n}{n+2}\\right)^{n+2}$ ，所以 $a_{n}=4\\left(\\frac{n}{n+2}\\right)^{n+2}$ ，

$$
\\begin{array}{l} \\frac {a _ {n + 1}}{a _ {n}} = \\frac {4 \\left(\\frac {n + 1}{n + 3}\\right) ^ {n + 3}}{4 \\left(\\frac {n}{n + 2}\\right) ^ {n + 2}} = \\frac {n + 1}{n + 3} \\left[ \\frac {(n + 1) (n + 2)}{n (n + 3)} \\right] ^ {n + 2} = \\frac {n + 1}{n + 3} \\left[ 1 + \\frac {2}{n (n + 3)} \\right] ^ {n + 2} \\\\ = \\frac {n + 1}{n + 3} \\left[ 1 + C _ {n + 2} ^ {1} \\frac {2}{n (n + 3)} + C _ {n + 2} ^ {2} \\left(\\frac {2}{n (n + 3)}\\right) ^ {2} + \\dots \\right] \\\\ > \\frac {n + 1}{n + 3} \\left[ 1 + C _ {n + 2} ^ {1} \\cdot \\frac {2}{n (n + 3)} \\right] = \\frac {n + 1}{n + 3} \\left[ 1 + \\frac {2 (n + 2)}{n (n + 3)} \\right] \\\\ = \\frac {n + 1}{n + 3} + \\frac {2}{n + 3} \\cdot \\frac {(n + 1) (n + 2)}{n (n + 3)} > \\frac {n + 1}{n + 3} + \\frac {2}{n + 3} = 1, \\\\ \\end{array}
$$

因此， $a_{n + 1} > a_n$ ，即数列 $\\{a_{n}\\}$ 为递增数列.

从而，数列 $\\{a_{n}\\}$ 的最小值项为 $a_1 = \\frac{4}{27}$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-4-24",
    topicId: "topic-sec-1-4",
    title: `设 a 为给定的正实数, n 为大于 4 的整数`,
    content: `设 a 为给定的正实数, n 为大于 4 的整数,
求满足方程组 $\\left\\{\\begin{aligned}x_{1}x_{2}(3a-2x_{3})&=a^{3},\\\\ x_{2}x_{3}(3a-2x_{4})&=a^{3},\\\\ \\cdots\\cdots\\\\ x_{n-2}x_{n-1}(3a-2x_{n})&=a^{3},\\\\ x_{n-1}x_{n}(3a-2x_{1})&=a^{3},\\\\ x_{n}x_{1}(3a-2x_{2})&=a^{3}\\end{aligned}\\right.$ 的所有 n 元正实数组 $(x_{1},x_{2},\\cdots,x_{n})$ .`,
    preview: `设 a 为给定的正实数, n 为大于 4 的整数, 求满足方程组 的所有 n 元正实数组 (x_1,x_2,·s,x_n) .`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-4-24-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `$3a - 2x_{i} > 0$ ，将 $n$ 个方程左右两边分别相乘，得

$$
\\prod_ {i = 1} ^ {n} x _ {i} ^ {2} (3 a - 2 x _ {i}) = a ^ {3 n}.
$$

通过配凑并由均值不等式,有

$$
x _ {i} ^ {2} (3 a - 2 x _ {i}) \\leqslant \\left(\\frac {x _ {i} + x _ {i} + 3 a - 2 x _ {i}}{3}\\right) ^ {3} = a ^ {3}.
$$

因此，上式成立的条件是 $x_{i} = 3a - 2x_{i}$ ，即 $x_{i} = a$

于是，原方程组有唯一 n 元正实数解 $(a, a, \\cdots, a)$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-4-25",
    topicId: "topic-sec-1-4",
    title: `1-1/2C_n^1+1/3C_n^2-…+(-1)^k1/k+1C_n^k+…+(-1)^n1/n+1C_n^n=`,
    content: `$1-\\frac{1}{2}C_{n}^{1}+\\frac{1}{3}C_{n}^{2}-\\cdots+(-1)^{k}\\frac{1}{k+1}C_{n}^{k}+\\cdots+(-1)^{n}\\frac{1}{n+1}C_{n}^{n}=$ \\_\\_\\_\\_ .`,
    preview: `\\_\\_\\_\\_ .`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-4-25-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `考虑到 $(1-x)^{n}=C_{n}^{0}-C_{n}^{1}x+C_{n}^{2}x^{2}+\\cdots+(-1)^{k}C_{n}^{k}x^{k}+\\cdots+(-1)^{n}C_{n}^{n}x^{n}$

两边在 $[0,1]$ 上求定积分得

$$
\\int_ {0} ^ {1} (1 - x) ^ {n} \\mathrm{d} x = \\int_ {0} ^ {1} [ C _ {n} ^ {0} - C _ {n} ^ {1} x + C _ {n} ^ {2} x ^ {2} + \\dots + (- 1) ^ {k} C _ {n} ^ {k} x ^ {k} + \\dots + (- 1) ^ {n} C _ {n} ^ {n} x ^ {n} ] \\mathrm{d} x.
$$

两边分别运算得

$$
\\begin{array}{l} \\left. - \\frac {(1 - x) ^ {n + 1}}{n + 1} \\right| _ {0} ^ {1} = \\left[ C _ {n} ^ {0} x - \\frac {1}{2} C _ {n} ^ {1} x ^ {2} + \\frac {1}{3} C _ {n} ^ {2} x ^ {3} + \\dots + (- 1) ^ {k} \\frac {1}{k + 1} C _ {n} ^ {k} x ^ {k + 1} + \\dots + \\right. \\\\ (- 1) ^ {n} \\left. \\frac {1}{n + 1} C _ {n} ^ {n} x ^ {n + 1} \\right] \\Big | _ {0} ^ {1}, \\\\ \\end{array}
$$

即得 $1 - \\frac{1}{2} C_n^1 +\\frac{1}{3} C_n^2 -\\dots +(-1)^k\\frac{1}{k + 1} C_n^k +\\dots +(-1)^n\\frac{1}{n + 1} C_n^n = \\frac{1}{n + 1}.$

类似还可以解决下题: 求 $S=\\frac{C_{n}^{0}}{1}+\\frac{C_{n}^{1}}{2}+\\frac{C_{n}^{2}}{3}+\\cdots+\\frac{C_{n}^{k-1}}{k}+\\cdots+\\frac{C_{n}^{n}}{n+1}$ .

(答案: $S=\\frac{2^{n+1}-1}{n+1}$ )`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-4-26",
    topicId: "topic-sec-1-4",
    title: `单位圆 x^2 + y^2 = 1 上有三点 A(x_1,y_1),B(x_2,y_2),C(x_3,y_3`,
    content: `单位圆 $x^{2} + y^{2} = 1$ 上有三点 $A(x_{1},y_{1}),B(x_{2},y_{2}),C(x_{3},y_{3})$ ，若 $x_{1} + x_{2}+$ $x_{3} = y_{1} + y_{2} + y_{3} = 0$ ，求证： $x_{1}^{2} + x_{2}^{2} + x_{3}^{2} = y_{1}^{2} + y_{2}^{2} + y_{3}^{2} = \\frac{3}{2}$`,
    preview: `单位圆 x^2 + y^2 = 1 上有三点 ，若 x_1 + x_2+ x_3 = y_1 + y_2 + y_3 = 0 ，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-4-26-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `证明 设 $z_{j} = x_{j} + y_{j}\\mathrm{i},x_{j},y_{j}\\in \\mathbf{R},z_{j}\\cdot \\overline{z_{j}} = 1(j = 1,2,3)$

则 $z_{1} + z_{2} + z_{3} = 0, \\overline{z_{1}} + \\overline{z_{2}} + \\overline{z_{3}} = 0,$

所以 $\\frac{1}{z_{1}}+\\frac{1}{z_{2}}+\\frac{1}{z_{3}}=0,z_{1}z_{2}+z_{1}z_{3}+z_{2}z_{3}=0,\\overline{z_{1}z_{2}}+\\overline{z_{1}z_{3}}+\\overline{z_{2}z_{3}}=0.$

又 $x_{j} = \\frac{z_{j} + \\overline{z_{j}}}{2}$ 故

$$
\\begin{array}{l} x _ {1} ^ {2} + x _ {2} ^ {2} + x _ {3} ^ {2} \\\\ = \\frac {1}{4} (z _ {1} ^ {2} + z _ {2} ^ {2} + z _ {3} ^ {2} + \\overline {{z _ {1}}} ^ {2} + \\overline {{z _ {2}}} ^ {2} + \\overline {{z _ {3}}} ^ {2}) + \\frac {3}{2} \\\\ = \\frac {1}{4} \\left[ (z _ {1} + z _ {2} + z _ {3}) ^ {2} - 2 z _ {1} z _ {2} - 2 z _ {1} z _ {3} - 2 z _ {2} z _ {3} + (\\overline {{z _ {1}}} + \\overline {{z _ {2}}} + \\overline {{z _ {3}}}) ^ {2} - 2 \\overline {{z _ {1} z _ {2}}} - 2 \\overline {{z _ {1} z _ {3}}} - \\right. \\\\ 2 \\overline {{z _ {2} z _ {3}}} ] + \\frac {3}{2} \\\\ = \\frac {3}{2}, \\\\ \\end{array}
$$

又 $y_{1}^{2} + y_{2}^{2} + y_{3}^{2} = 3 - (x_{1}^{2} + x_{2}^{2} + x_{3}^{2}) = \\frac{3}{2},$

即原式成立.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-4-27",
    topicId: "topic-sec-1-4",
    title: `若正数 a, b 满足 2a + b = 1`,
    content: `若正数 a, b 满足 $2a + b = 1$ ，则 $\\frac{a}{2 - 2a} + \\frac{b}{2 - b}$ 的最小值为 \\_\\_\\_\\_.`,
    preview: `若正数 a, b 满足 2a + b = 1 ，则 a/2 - 2a + b/2 - b 的最小值为 \\_\\_\\_\\_.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-4-27-sol-0",
        title: `解答`,
        method: "creative",
        steps: [],
        explanation: `构造拉格朗日函数 $L(a,b,\\lambda)=\\frac{a}{2-2a}+\\frac{b}{2-b}-\\lambda(2a+b-1)$ .

令 $L_{a} = \\frac{1}{2(1 - a)^{2}} - 2\\lambda = 0, L_{b} = \\frac{2}{(2 - b)^{2}} - \\lambda = 0, L_{\\lambda} = -(2a + b - 1) = 0.$

联立上述三个方程,解得

$$
a = \\frac {5 - 3 \\sqrt {2}}{2}, b = 3 \\sqrt {2} - 4, \\lambda = \\frac {1}{2 7 - 1 8 \\sqrt {2}},
$$

从而 $\\frac{a}{2 - 2a} +\\frac{b}{2 - b} = \\frac{2\\sqrt{2}}{3} -\\frac{1}{2}.$

此即为所求的最小值.

“以数学知识为载体，从问题入手，把握学科的整体意义，用统一的数学观点组织材料，侧重体现对知识的理解和应用，尤其是综合和灵活的应用，以此来检测考生将知识迁移到不同情境中去的能力，从而检测出考生个体理性思维的广度和深度以及进一步学习的潜能。”这是考试大纲对“能力立意”的解析。认真解读这段话，我们更能深刻地体会到高考复习单靠简单地拼时间、拼精力是不行的；随意地拓宽和加深知识范围，刻意地追求某些特殊技巧与方法也是不行的。只有精读教材、关注大纲、研究高考、分析规律，才能把握重点、事半功倍。`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-5-1",
    topicId: "topic-sec-1-5",
    title: `已知数列 a_n 各项都是正数，且满足 a_0 = 1, a_n + 1 = 1/2 a_n(4 - a_n), n`,
    content: `已知数列 $\\{a_{n}\\}$ 各项都是正数，且满足 $a_0 = 1, a_{n + 1} = \\frac{1}{2} a_n(4 - a_n), n \\in \\mathbf{N}$ .
(1) 证明: $a_{n} < a_{n+1} < 2, n \\in \\mathbf{N}$ ; (2) 求数列 $\\{a_{n}\\}$ 的通项公式 $a_{n}$ .`,
    preview: `已知数列 各项都是正数，且满足 . (1) 证明: a_n < a_n+1 < 2, n N ; (2) 求数列 的通项公式 a_n .`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-5-1-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `按常规解法当然是先解第一小题再完成第二小题. 但本题也可先求通项, 即先解第二小题再“顺手牵羊”解决第一小题.

由于 $a_{n + 1} = \\frac{1}{2} a_n(4 - a_n) = \\frac{1}{2}[-(a_n - 2)^2 +4]$

因此， $2(2-a_{n+1})=(2-a_{n})^{2}$

令 $b_{n} = 2 - a_{n}$ ，则

$$
b _ {n} = \\frac {1}{2} b _ {n - 1} ^ {2} = \\frac {1}{2} \\left(\\frac {1}{2} b _ {n - 2} ^ {2}\\right) ^ {2} = \\frac {1}{2} \\times \\left(\\frac {1}{2}\\right) ^ {2} b _ {n - 2} ^ {2 ^ {2}} = \\dots = \\left(\\frac {1}{2}\\right) ^ {1 + 2 + \\dots + 2 ^ {n - 1}} b _ {0} ^ {2 ^ {n}}.
$$

又 $b_{0} = 1$ ，所以 $b_{n} = \\left(\\frac{1}{2}\\right)^{2^{n} - 1}$ ，即 $a_{n} = 2 - b_{n} = 2 - \\left(\\frac{1}{2}\\right)^{2^{n} - 1}$

由此易得 $a_{n}<a_{n+1}<2$ .

(3)退步解答

“以退求进”是一个重要的解题策略. 对于一个较一般的问题, 如果你一时不能解决所提出的问题, 那么, 你可以从一般退到特殊, 从抽象退到具体, 从复杂退到简单, 从整体退到部分, 从参变量退到常量, 从较强的结论退到较弱的结论. 总之, 退到一个你能够解决的问题, 通过对“特殊”的思考与解决, 启发思维, 达到对“一般”的解决. 为了不产生“以偏概全”的误解, 应开门见山写上“本题分几种情况”.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-5-2",
    topicId: "topic-sec-1-5",
    title: `一张三角形纸片内有 99 个点, 连同原三角形的顶点共`,
    content: `一张三角形纸片内有 99 个点, 连同原三角形的顶点共 102 个点, 无任何三点共线, 若以这些点为三角形顶点, 把三角形纸片剪成小三角形, 则这样的小三角形共有多少个? ( )
A. 300

B. 156849

C. 201

D. 199`,
    preview: `一张三角形纸片内有 99 个点, 连同原三角形的顶点共 102 个点, 无任何三点共线, 若以这些点为三角形顶点, 把三角形纸片剪成小三角形, 则这样的小三角形`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-5-2-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `直接解答有困难,后退到三角形内点比较少的情况分析.设三角形为 $\\triangle ABC$ ,在其内部增加一个点 $D$ ,可剪成小三角形个数为 $f(1)=3$ ;若再增加一个点 $E$ ,则点 $E$ 必定在已经得到的某个三角形内,否则与“无任何三点共线”矛盾,不妨设在 $\\triangle ABD$ 内部,则 $\\triangle ABD$ 又被从一个剪成三个(增加两个),即 $f(2)=f(1)+2=5$ ;以此类推,不难得到在 $\\triangle ABC$ 内增加 $n$ 个点时可以得到的小三角形的个数满足 $f(n)=f(n-1)+2$ ;将上述 $n$ 个关系式累加,得 $f(n)=2n+1$ ,可得 $f(99)=2\\times99+1=199$ ,故选D.

评注 本题属于较难的排列组合题,运用的方法可称为递推法.递推法是解决一些较复杂计数问题的典型方法,其解题的一般步骤是:先将原问题一般化,再寻找 $f(n)$ 与 $f(n-1)$ 之间的关系式,转化为数列求通项问题,从而得以解决.

(4)逆向解答

对一个问题正向思考受阻时,用逆向思维的方法去探求新的解题途径,往往能得到突破性的进展.顺向推有困难就逆推,直接证有困难就反证.如用分析法,从肯定结论或中间步骤入手,找充分条件;用反证法,从否定结论入手找必要条件.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-5-3",
    topicId: "topic-sec-1-5",
    title: `从正方体的 6 个面中选取 3 个面, 其中有 2`,
    content: `从正方体的 6 个面中选取 3 个面, 其中有 2 个面不相邻的选法共有（）
A. 8 种

B. 12 种

C. 16 种

D. 20 种`,
    preview: `从正方体的 6 个面中选取 3 个面, 其中有 2 个面不相邻的选法共有（） A. 8 种 B. 12 种 C. 16 种 D. 20 种`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-5-3-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `运用补集思想求解. 从 6 个面中任取 3 个面的取法共有 $C_{6}^{3}$ 种方法, 其中三个面交于一点共有 8 种可能, 从而满足题意的取法共有 $C_{6}^{3}-8=12$ 种, 故应选 B.`,
      },

    ],
    tags: [],
  },
  {
    id: "prob-sec-1-5-4",
    topicId: "topic-sec-1-5",
    title: `设 a 为实数, 函数 f(x)=x^2+|x-a|+1`,
    content: `设 a 为实数, 函数 $f(x)=x^{2}+|x-a|+1, x \\in \\mathbb{R}$ , 讨论 $f(x)$ 的奇偶性.`,
    preview: `设 a 为实数, 函数 f(x)=x^2+|x-a|+1, x R , 讨论 f(x) 的奇偶性.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-5-4-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `由题意知,其结论可能有三种:奇函数、偶函数或非奇非偶函数.注意到 $f(0)\\geqslant1$ ,故 $f(x)$ 不是奇函数.若 $f(-1)=f(1)$ ,则 $2+|1-a|=2+|-1-a|$ ,解得a=0,又a=0时,可验证 $f(x)$ 是偶函数.综上所述,当a=0时, $f(x)$ 是偶函数;当 $a\\neq0$ 时, $f(x)$ 既不是奇函数,也不是偶函数.

另外，在平时学习中应尽量从多角度思考问题，从一题多解中复习多方面知识，发散思维，举一反三.波利亚曾说：“认为解题纯粹是一种智能活动是错误的，决心与情绪所起的作用很重要.”他强调指出：“教学生解题是意志的教育，当学生求解那些对他来说并不容易的题目时,他学会了败而不妥,学会了赞赏微小的进展,学会了等待主要的念头,学会了当主要念头出现后全力以赴.如果学生在学校里没有机会尝尽为求解而奋斗的喜怒哀乐,那么他的数学教育就在最重要的地方失败了."因此,有必要提醒的是,高考不仅是对学生掌握知识的考查,也是对心理素质的挑战.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-5-5",
    topicId: "topic-sec-1-5",
    title: `已知 x, y R, 4x^2 + y^2 + xy =`,
    content: `已知 $x, y \\in \\mathbf{R}, 4x^{2} + y^{2} + xy = 1$ ，则 $2x + y$ 的最大值为 \\_\\_\\_\\_.`,
    preview: `已知 x, y R, 4x^2 + y^2 + xy = 1 ，则 2x + y 的最大值为 \\_\\_\\_\\_.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-5-5-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `设 $2x + y = t$ ，则 y = t - 2x，代入 $4x^{2} + y^{2} + xy = 1$ ，

得 $6x^{2} - 3tx + t^{2} - 1 = 0$

由 $\\Delta \\geqslant 0$ 得 $t^{2} \\leqslant \\frac{8}{5}$ ，因此， $2x + y \\leqslant \\frac{2}{5}\\sqrt{10}$ .`,
      },
      {
        id: "prob-sec-1-5-5-sol-1",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `设 $2x + y = t$ ,

则 $2xy=\\frac{2}{3}(t^{2}-1)$ ,

则 $2x, y$ 可看成关于 $m$ 的二次方程 $m^2 - tm + \\frac{2}{3} (t^2 - 1) = 0$ 的两个实根，

由 $\\Delta \\geqslant 0$ 得 $t^2 \\leqslant \\frac{8}{5}$ , 故 $2x + y \\leqslant \\frac{2}{5} \\sqrt{10}$ .`,
      },
      {
        id: "prob-sec-1-5-5-sol-2",
        title: `解法三`,
        method: "standard",
        steps: [],
        explanation: `令 $\\left\\{\\begin{aligned}x&=\\frac{a+b}{2},\\\\ y&a-b,\\end{aligned}\\right.$ 则 $\\left\\{\\begin{aligned}a&=\\frac{2x+y}{2},\\\\ b&=\\frac{2x-y}{2},\\end{aligned}\\right.$ 则原题等价于：

已知 $5a^{2}+3b^{2}=2$ ，求 2a 的最大值.

由 $a^2 \\leqslant \\frac{2}{5}$ 得 $2a \\leqslant \\frac{2}{5}\\sqrt{10}$ , 即 $2x + y \\leqslant \\frac{2}{5}\\sqrt{10}$ .`,
      },
      {
        id: "prob-sec-1-5-5-sol-3",
        title: `解法四`,
        method: "standard",
        steps: [],
        explanation: `令 $2x+y=2a$ ，则可设 $\\left\\{\\begin{aligned}2x=a+b,\\\\ y=a-b,\\end{aligned}\\right.$

以下同`,
      },
      {
        id: "prob-sec-1-5-5-sol-5",
        title: `解法五`,
        method: "standard",
        steps: [],
        explanation: `令 $\\left\\{\\begin{aligned}&2x=m,\\\\ &y=n,\\end{aligned}\\right.$ 则原题等价于:已知 $m^{2}+n^{2}+\\frac{1}{2}mn=1$ ,求 $m+n$ 的最大值.再
令 $\\left\\{\\begin{aligned}m=a+b,\\\\ n=a-b,\\end{aligned}\\right.$ 则原题等价于:已知 $5a^{2}+3b^{2}=2$ ,求2a的最大值.

以下同`,
      },
      {
        id: "prob-sec-1-5-5-sol-7",
        title: `解法六`,
        method: "standard",
        steps: [],
        explanation: `令 $4x^{2} + y^{2} + xy = m(2x + y)^{2} + n(x - ty)^{2}, t > 0,$

则 $\\left\\{\\begin{aligned}4m+n=4,\\\\ m+nt^{2}=1,\\\\ 4m-2nt=1,\\end{aligned}\\right.$ 解得 $\\left\\{\\begin{aligned}m=\\frac{5}{8},\\\\ n=\\frac{3}{2},\\\\ t=\\frac{1}{2},\\end{aligned}\\right.$

故 $\\frac{5}{8}(2x+y)^{2}\\leqslant1$ ，化简得 $2x+y\\leqslant\\frac{2}{5}\\sqrt{10}$ .`,
      },
      {
        id: "prob-sec-1-5-5-sol-8",
        title: `解法七`,
        method: "standard",
        steps: [],
        explanation: `令 $\\boldsymbol{a}=\\left(\\frac{1}{2}x+y,\\frac{\\sqrt{15}}{2}x\\right)$ , $\\boldsymbol{b}=\\left(1,\\frac{3}{\\sqrt{15}}\\right)$ ,

则 $2x + y = a \\cdot b \\leqslant |a||b| = \\sqrt{\\left(\\frac{1}{2} x + y\\right)^2 + \\frac{15}{4} x^2} \\times \\sqrt{\\frac{8}{5}} = \\frac{2\\sqrt{10}}{5}$

(也可设 $\\boldsymbol{a}=\\left(2x+\\frac{1}{4}y,\\frac{\\sqrt{15}}{4}y\\right)$ , $\\boldsymbol{b}=\\left(1,\\frac{3}{\\sqrt{15}}\\right)$ ).`,
      },
      {
        id: "prob-sec-1-5-5-sol-9",
        title: `解法八`,
        method: "standard",
        steps: [],
        explanation: `$\\left\\{\\begin{aligned}x=r\\cos q,\\\\ y=r\\sin q,\\end{aligned}\\right.$ 则 $r^{2}(4\\cos^{2}q+\\sin^{2}q+\\cos q\\sin q)=1,$

$$
\\begin{array}{l} = 1 + \\frac {3 \\sin q \\cos q}{4 \\cos^ {2} q + \\sin^ {2} q + \\cos q \\sin q} \\\\ = 1 + \\frac {3}{4 \\left(\\frac {\\cos q}{\\sin q}\\right) + \\left(\\frac {\\sin q}{\\cos q}\\right) + 1} \\leqslant 1 + \\frac {3}{5} = \\frac {8}{5}, \\\\ \\end{array}
$$

则 $(2x + y)^{2} = r^{2}(4\\cos^{2}q + \\sin^{2}q + 4\\sin q\\cos q)$

故 $2x + y \\leqslant \\frac{2}{5} \\sqrt{10}$ .`,
      },
      {
        id: "prob-sec-1-5-5-sol-10",
        title: `解法九`,
        method: "standard",
        steps: [],
        explanation: `$\\left\\{\\begin{aligned}x&=r\\cos q,\\\\ y&=2r\\sin q,\\end{aligned}\\right.$ 则 $4r^{2}\\cos^{2}q+4r^{2}\\sin^{2}q+2r^{2}\\cos q\\sin q=1$ ,

即 $r^{2}(4+2\\sin q\\cos q)=1$ ,

$$
\\begin{array}{l} = \\frac {4 + 8 \\sin q \\cos q}{4 + 2 \\sin q \\cos q} = \\frac {4 + 4 \\sin 2 q}{4 + \\sin 2 q} \\\\ = 4 - \\frac {1 2}{4 + \\sin 2 q} \\leqslant 4 - \\frac {1 2}{4 + 1} = \\frac {8}{5}, \\\\ \\end{array}
$$

则 $(2x+y)^{2}=4r^{2}+8r^{2}\\sin q\\cos q$

故 $2x + y \\leqslant \\frac{2}{5} \\sqrt{10}$ .`,
      },
      {
        id: "prob-sec-1-5-5-sol-11",
        title: `解法十`,
        method: "standard",
        steps: [],
        explanation: `$\\left\\{\\begin{aligned}x&=r\\cos q,\\\\ y&=2r\\sin q,\\end{aligned}\\right.$ 则 $\\frac{1}{r^{2}}-4=\\sin2q\\in[-1,1]$ ，则 $r^{2}\\leqslant\\frac{1}{5}$

$$
(2 x + y) ^ {2} = 4 r ^ {2} (1 + \\sin 2 q) = 4 r ^ {2} \\left(\\frac {1}{r ^ {2}} - 3\\right) = 4 - 1 2 r ^ {2} \\leqslant 4 - \\frac {1 2}{5} = \\frac {8}{5},
$$

故 $2x + y \\leqslant \\frac{2}{5} \\sqrt{10}$ .

若将上题条件方程的右侧“1”换成 $c$ ，即可改编为2014年高考辽宁卷第16题.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-6-1",
    topicId: "topic-sec-1-6",
    title: `已知正方形 ABCD 的边长为 2, E 为 CD`,
    content: `已知正方形 ABCD 的边长为 2, E 为 CD 的中点, 则 $\\overrightarrow{AE} \\cdot \\overrightarrow{BD}=$ \\_\\_\\_\\_.`,
    preview: `已知正方形 ABCD 的边长为 2, E 为 CD 的中点, 则 →AE · →BD= \\_\\_\\_\\_.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-6-1-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `由平面向量基本定理知,以 $\\overrightarrow{AB},\\overrightarrow{AD}$ 为基底,将 $\\overrightarrow{AE}$ 和 $\\overrightarrow{BD}$ 进行正交分解:

$$
\\overrightarrow {A E} = \\overrightarrow {A D} + \\overrightarrow {D E} = \\overrightarrow {A D} + \\frac {1}{2} \\overrightarrow {A B}, \\overrightarrow {B D} = \\overrightarrow {A D} - \\overrightarrow {A B},
$$

所以 $\\overrightarrow{AE}\\cdot\\overrightarrow{BD}=(\\overrightarrow{AD}+\\frac{1}{2}\\overrightarrow{AB})\\cdot(\\overrightarrow{AD}-\\overrightarrow{AB})=\\overrightarrow{AD^{2}}-\\frac{1}{2}\\overrightarrow{AB^{2}}=2.$

利用类似的知识求解数量积的高考试题还有：

变式 1 已知正方形 ABCD 的边长为 1, E 为 AB 边上的点, 则 $\\overrightarrow{DE} \\cdot \\overrightarrow{DC}$ 的最大值是 \\_\\_\\_\\_.

同理,可对所求向量进行分解,

$$
\\begin{array}{l} \\overrightarrow {D E} \\cdot \\overrightarrow {D C} = (- \\overrightarrow {A D} + \\overrightarrow {A E}) \\cdot \\overrightarrow {A B} \\\\ = \\overrightarrow {A E} \\cdot \\overrightarrow {A B} = | \\overrightarrow {A E} | \\cdot | \\overrightarrow {A B} | = | \\overrightarrow {A E} |, \\\\ \\end{array}
$$

所以当 E 点位于 B 点位置时,有最大值 1.

变式 2 在平行四边形 ABCD 中, $AD=1, \\angle BAD=60^{\\circ}, E$ 为 CD 的中点, 若 $\\overrightarrow{AC} \\cdot \\overrightarrow{BE}=1$ , 则 AB 的长为 \\_\\_\\_\\_.

以 $\\overrightarrow{AB},\\overrightarrow{AD}$ 为基底，则 $\\overrightarrow{AC}\\cdot \\overrightarrow{BE} = (\\overrightarrow{AB} +\\overrightarrow{AD})\\cdot (\\overrightarrow{AD} -\\frac{1}{2}\\overrightarrow{AB}) = \\overrightarrow{AD^2} -\\frac{1}{2}\\overrightarrow{AB^2} +$ $\\frac{1}{2}\\overrightarrow{AB}\\cdot \\overrightarrow{AD} = 1 - \\frac{1}{2} |\\overrightarrow{AB}|^2 +\\frac{1}{2} |\\overrightarrow{AB}|\\cos 60^\\circ = 1$ ，解得 $|\\overrightarrow{AB}| = \\frac{1}{2}$ ，即 $AB$ 的长为 $\\frac{1}{2}$

变式 3 设 $\\triangle ABC, P_{0}$ 是边 AB 上一定点，满足 $P_{0}B=\\frac{1}{4}AB$ ，且对于 AB 边上任一点 P，恒有 $\\overrightarrow{PB}\\cdot\\overrightarrow{PC}\\geqslant\\overrightarrow{P_{0}B}\\cdot\\overrightarrow{P_{0}C}$ ，则 ( )

A. $\\angle {ABC} = {90}^{ \\circ  }$

B. $\\angle {BAC} = {90}^{ \\circ  }$

C. \${AB} = {AC}$

D. \${AC} = {BC}$

设 \${PB} = \\lambda {AB}\\left( {0 < \\lambda  < 1}\\right)$ ,以 $\\overrightarrow{AB},\\overrightarrow{BC}$ 为基底, $\\overrightarrow{PB} \\cdot  \\overrightarrow{PC} = \\overrightarrow{PB} \\cdot  \\left( {\\overrightarrow{PB} + \\overrightarrow{BC}}\\right)  = \\overrightarrow{AB}{}^{2}{\\lambda }^{2} +$ $\\lambda  \\left( {\\overrightarrow{AB} \\cdot  \\overrightarrow{BC}}\\right)$ ,因为 $\\overrightarrow{A{B}^{2}},\\overrightarrow{AB} \\cdot  \\overrightarrow{BC}$ 都为定值,所以 $\\overrightarrow{PB} \\cdot  \\overrightarrow{PC}$ 是关于 $\\lambda$ 的二次函数,该二次函数当且仅当 $\\lambda  =  - \\frac{\\overrightarrow{AB} \\cdot  \\overrightarrow{BC}}{2\\overrightarrow{A{B}^{2}}}$ 时取得最小值,又由已知,当 $P$ 位于 \${P}_{0}$ 位置时有最小值,所以 $- \\frac{\\overrightarrow{AB} \\cdot  \\overrightarrow{BC}}{2\\overrightarrow{A{B}^{2}}} = \\frac{1}{4}$ ,即 $|\\overrightarrow{BC}| \\cos B = \\frac{1}{2} |\\overrightarrow{AB}|$ ,所以 \${AB}$ 的高线与 \${AB}$ 的中线重合,即 \${BC} = {AC}$ ,选D.`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-6-2",
    topicId: "topic-sec-1-6",
    title: `设 e_1,e_2 为单位向量,非零向量 b=x e_1+y e_2,x,y∈R,若 e_1,e_2 的夹角为 π/`,
    content: `设 $e_{1},e_{2}$ 为单位向量,非零向量 $b=x\\ e_{1}+y\\ e_{2},x,y\\in\\mathbb{R}$ ,若 $e_{1},e_{2}$ 的夹角为 $\\frac{\\pi}{6}$ ,则 $\\frac{|x|}{|b|}$ 的最大值等于\\_\\_\\_\\_.`,
    preview: `设 e_1,e_2 为单位向量,非零向量 ,若 e_1,e_2 的夹角为 π/6 ,则 |x|/|b| 的最大值等于\\_\\_\\_\\_.`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-6-2-sol-0",
        title: `解法1`,
        method: "geometric",
        steps: [],
        explanation: `本题表述简洁清晰,灵活考查了平面向量基本定理、平面向量坐标表示、平面向量的数量积、平面向量的几何意义等知识,渗透了多种数学思想方法,我们可以从多个视角来解决.`,
      },
      {
        id: "prob-sec-1-6-2-sol-1",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `从坐标入手,借助配方法求最值.

设 $e_1 = (1,0), e_2 = \\left(\\frac{\\sqrt{3}}{2}, \\frac{1}{2}\\right)$ ，则 $b = \\left(x + \\frac{\\sqrt{3}}{2} y, \\frac{1}{2} y\\right)$ ，当 $x = 0$ 时， $\\frac{|x|}{|\\boldsymbol{b}|} = 0$ .

当 $x \\neq 0$ 时， $\\frac{|x|}{|\\boldsymbol{b}|} = \\sqrt{\\frac{x^2}{x^2 + y^2 + \\sqrt{3}xy}} = \\sqrt{\\frac{1}{\\left(\\frac{y}{x}\\right)^2 + \\sqrt{3}\\left(\\frac{y}{x}\\right) + 1}}$

$$
= \\sqrt {\\frac {1}{t ^ {2} + \\sqrt {3} t + 1}} = \\sqrt {\\frac {1}{\\left(t + \\frac {\\sqrt {3}}{2}\\right) ^ {2} + \\frac {1}{4}}} \\leqslant \\sqrt {\\frac {1}{\\frac {1}{4}}} = 2.
$$`,
      },
      {
        id: "prob-sec-1-6-2-sol-2",
        title: `解法二`,
        method: "standard",
        steps: [],
        explanation: `从方程的角度,运用判别式法.

设 $\\frac{|x|}{|\\boldsymbol{b}|} = t, |\\boldsymbol{b}| = |x\\boldsymbol{e}_1 + y\\boldsymbol{e}_2|$ ，可得 $|\\boldsymbol{b}|^2 = x^2 + y^2 + \\sqrt{3}xy, x^2 = t^2(x^2 + y^2 + \\sqrt{3}xy)$ .

当 $x \\neq 0$ 时， $t^2\\left(\\frac{y}{x}\\right)^2 + \\sqrt{3} t^2\\left(\\frac{y}{x}\\right) + (t^2 - 1) = 0,$

有 $\\Delta = (\\sqrt{3} t^2)^2 - 4t^2 (t^2 - 1) \\geqslant 0$ ，解得 $t \\in [0, 2]$ .`,
      },
      {
        id: "prob-sec-1-6-2-sol-3",
        title: `解法三`,
        method: "standard",
        steps: [],
        explanation: `如图 1-6-1 所示, 不妨设 $x e_{1} = \\overrightarrow{OA}, y e_{2} = \\overrightarrow{AB}$ , 则 $b = x e_{1} + y e_{2} = \\overrightarrow{OB}$ .

在△OAB中， $\\frac{|x|}{|b|}=\\frac{|\\overrightarrow{OA}|}{|\\overrightarrow{OB}|}=\\frac{\\sin\\angle OBA}{\\sin\\angle OAB}$

又 $\\langle e_{1},e_{2}\\rangle=\\frac{\\pi}{6}$ ，所以 $\\angle OAB=\\frac{\\pi}{6}$ 或 $\\frac{5\\pi}{6}$ ，即 $\\sin\\angle OAB=\\frac{1}{2}$ .

所以 $\\frac{|x|}{|b|}=2\\sin\\angle OBA\\leqslant2.$

![](images/ac24e71b9bff5056cb8b29223f5e976ff3571d8f9dfd9611240054f927cf916a.jpg)
图1-6-1`,
      },
      {
        id: "prob-sec-1-6-2-sol-4",
        title: `解法四`,
        method: "creative",
        steps: [],
        explanation: `从点到直线的距离这一角度入手.

要求 $\\frac{|x|}{|b|}$ 的最大值, 只要求 $\\frac{|b|}{|x|}=|e_{1}+\\frac{y}{x}e_{2}|$ 的最小值. 构造共起点 O 的两个向量 $e_{1}$ , $\\frac{y}{x}e_{2}$ , 设 $e_{1}$ 的终点为 A, 则 $\\frac{y}{x}e_{2}$ 的终点 P 的轨迹为一条经过点 O 的直线, 记为 l. 由题意知, OA 与 l 的夹角为 $\\frac{\\pi}{6}$ , 则 A 到 l 的距离为 $1\\cdot\\sin\\frac{\\pi}{6}=\\frac{1}{2}$ , 又由向量加法的平行四边形法则可知 $e_{1}+\\frac{y}{x}e_{2}$ 的终点在过 A 且与 l 平行的直线 m 上, 则 $\\left|e_{1}+\\frac{y}{x}e_{2}\\right|$ 就是 m 上的一动点与 O 点的距离, 其最小值为 O 到直线 m 的距离, 也就是点 A 到 l 的距离 $\\left(\\frac{1}{2}\\right)$ . 此即为 $\\frac{|b|}{|x|}$ 的最小值, 因此 $\\frac{|x|}{|b|}$ 的最大值为 2.`,
      },
      {
        id: "prob-sec-1-6-2-sol-5",
        title: `解法五`,
        method: "standard",
        steps: [],
        explanation: `直接求解.

因为 $e_{1},e_{2}$ 为单位向量且 $e_{1},e_{2}$ 的夹角为 $\\frac{\\pi}{6},b=x\\boldsymbol{e}_{1}+y\\boldsymbol{e}_{2}$ ，则 $|b|=\\sqrt{x^{2}+y^{2}+\\sqrt{3}xy}$ .

当 $x \\neq 0$ 时，有 $\\frac{|x|}{|\\boldsymbol{b}|} = \\sqrt{\\frac{x^2}{x^2 + y^2 + \\sqrt{3}xy}} = \\sqrt{\\frac{1}{\\left(\\frac{y}{x}\\right)^2 + \\sqrt{3}\\left(\\frac{y}{x}\\right) + 1}} \\leqslant 2.$`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-6-3",
    topicId: "topic-sec-1-6",
    title: `如图 1-6-2 所示, 在平面直角坐标系 xOy 中`,
    content: `如图 1-6-2 所示, 在平面直角坐标系 xOy 中, M、N 分别是椭圆 $\\frac{x^{2}}{4} + \\frac{y^{2}}{2} = 1$ 的顶点, 过坐标原点的直线交椭圆于 P、A 两点, 其中 P 在第一象限, 过 P 作 x 轴的垂线, 垂足为 C, 连接 AC, 并延长交椭圆于点 B. 设直线 PA 的斜率为 k.
![](images/a1c9bf35f49aba866c1c14ab345e01576739146d9b1a59bde56338b973cb68af.jpg)

图1-6-2

(1) 当直线 PA 平分线段 MN 时, 求 k 的值;
(2) 当 k=2 时, 求点 P 到直线 AB 的距离 d;
(3)对任意 k>0, 求证: $PA \\perp PB$ .`,
    preview: `如图 1-6-2 所示, 在平面直角坐标系 xOy 中, M、N 分别是椭圆 x^24 + y^22 = 1 的顶点, 过坐标原点的直线交椭圆于 P、`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-6-3-sol-0",
        title: `解答`,
        method: "standard",
        steps: [],
        explanation: `本题第(3)小题(第(1)(2)问的解答略)的命题源于课本上的一道例题:

设点 A, B 的坐标分别为 $(-5,0)$ , $(5,0)$ ，直线 AM, BM 相交于点 M，且它们的斜率之积是 $-\\frac{4}{9}$ ，求动点 M 的轨迹方程.

本题的本质是揭示生成椭圆的一种途径,即有一般性的结论:与两定点 $A(-a,0)$ , $B(a,0)$ 的斜率之积为定值 $-\\frac{b^2}{a^2}$ 的动点 $M$ 的轨迹方程为 $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1 (x \\neq \\pm a)$ . 该结论从两直线斜率之积为定值的角度剖析了椭圆的生成方式. 对该结论进行引申、拓展, 可得到更为一般的结论: 椭圆 $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1 (a > b > 0)$ 上任意一条经过原点的弦的两个端点与椭圆上任一点(除弦的两个端点)连接直线的斜率之积是 $-\\frac{b^2}{a^2}$ .

证明如下:设椭圆上任一点为 $M(x_{1}, y_{1})$ ，任意一条经过原点的弦的两个端点为

$A(x_0,y_0),B(-x_0, - y_0)$ ，则 $k_{MA} = \\frac{y_1 - y_0}{x_1 - x_0},k_{MB} = \\frac{y_1 + y_0}{x_1 + x_0}.$

又因为 $\\frac{x_{1}^{2}}{a^{2}}+\\frac{y_{1}^{2}}{b^{2}}=1,\\frac{x_{0}^{2}}{a^{2}}+\\frac{y_{0}^{2}}{b^{2}}=1$ ，两式相减得 $\\frac{x_{1}^{2}-x_{0}^{2}}{a^{2}}=-\\frac{y_{1}^{2}-y_{0}^{2}}{b^{2}}$

所以 $k_{MA} \\cdot k_{MB} = \\frac{y_1^2 - y_0^2}{x_1^2 - x_0^2} = -\\frac{b^2}{a^2}$ .

利用该结论不难证明第(3)题:设点 $P(x_{0},y_{0})$ , $A(-x_{0},-y_{0})$ , $B(x_{1},y_{1})$ , $C(x_{0},0)$ ,

则 $k_{PA}=\\frac{y_{0}}{x_{0}}=k, k_{BA}=k_{AC}=\\frac{y_{0}}{2x_{0}}=\\frac{k}{2}.$

由上述结论知 $k_{BA} \\cdot k_{BP} = -\\frac{1}{2}$ , 所以 $k_{BP} = -\\frac{1}{k}$ ,

因此由 $k_{PA} \\cdot k_{PB} = k \\cdot \\left(-\\frac{1}{k}\\right) = -1$ ，可证 $PA \\perp PB$ .`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-6-4",
    topicId: "topic-sec-1-6",
    title: `如图 1-6-3 所示, 已知椭圆 x^2{a^2} +`,
    content: `如图 1-6-3 所示, 已知椭圆 $\\frac{x^{2}}{a^{2}} + \\frac{y^{2}}{b^{2}} = 1$ 的左、右顶点分别为 A, B, 右焦点为 F, M 是椭圆上异于 A, B 的任一点, AM, MB 分别交右准线于 P, Q 两点, 则
![](images/ddaa08f8ed25b0214305431c521d526ebe8e06e77b7773d4c13f24c987ab99fb.jpg)

图1-6-3

探究一 (定点)以 $PQ$ 为直径的圆过定点 $F$ .`,
    preview: `如图 1-6-3 所示, 已知椭圆 x^2{a^2} + y^2{b^2} = 1 的左、`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-6-4-sol-0",
        title: `解法一`,
        method: "standard",
        steps: [],
        explanation: `设 $M(x_{1}, y_{1})$ ，直线 $AM: y = \\frac{y_{1}}{x_{1} + a}(x + a)$ ,

直线 $MB: y = \\frac{y_{1}}{x_{1} - a}(x - a)$ .

令 $x = \\frac{a^2}{c}$ 得 $P\\left(\\frac{a^2}{c},\\frac{a(a + c)y_1}{c(x_1 + a)}\\right),Q\\left(\\frac{a^2}{c},\\frac{a(a - c)y_1}{c(x_1 - a)}\\right)$ .

以 $PQ$ 为直径的圆的方程为 $\\left(x - \\frac{a^2}{c}\\right)^2 +\\left[y - \\frac{a(a + c)y_1}{c(x_1 + a)}\\right]\\left[y - \\frac{a(a - c)y_1}{c(x_1 - a)}\\right] = 0.$

令 y=0，注意到 $\\frac{y_{1}^{2}}{x_{1}^{2}-a^{2}}=-\\frac{b^{2}}{a^{2}}$ ，可解得 $x=\\frac{a^{2}+b^{2}}{c}$ 或 x=c，

所以，以 PQ 为直径的圆过 $F(c,0)$ 点.`,
      },
      {
        id: "prob-sec-1-6-4-sol-1",
        title: `解法二`,
        method: "creative",
        steps: [],
        explanation: `设 $M(a\\cos \\theta ,b\\sin \\theta),P\\left(\\frac{a^2}{c},y_1\\right),Q\\left(\\frac{a^2}{c},y_2\\right)$

利用 A, M, P 三点共线，得 $y_{1}=\\frac{b(a+c)\\sin\\theta}{c(\\cos\\theta+1)}$ .

同理 $y_{2} = \\frac{b(a - c)\\sin\\theta}{c(\\cos\\theta - 1)}$ .

所以 $k_{PF} \\cdot k_{QF} = \\frac{y_1 y_2}{\\left(\\frac{a^2}{c} - c\\right)^2} = \\frac{b^2 \\sin^2 \\theta}{c^2 (\\cos^2 \\theta - 1)} \\cdot \\frac{c^2}{(a^2 - c^2)} = -1$ ，由此也可得结论.

推广 1: 将问题中的椭圆推广为圆锥曲线, 结论仍成立.

推广 2: 将准线改为动直线 $l: x = x_{0} (|x_{0}| > a)$ ，则以 PQ 为直径的圆过定点

$$
\\left(x _ {0} \\pm \\frac {b}{a} \\sqrt {x _ {0} ^ {2} - a ^ {2}}, 0\\right).
$$

探究二 （定值）(1) $y_{P}y_{Q}=-\\frac{b^{4}}{c^{2}}$ （或可表示为 $-p^{2}$ ）；(2) $k_{AP}k_{AQ}=-(e-1)^{2}$ .

探究三 （点共线）设 MF 交椭圆于 N 点，则 A, N, Q 三点共线.

探究四（平分角）(1) $PF$ 平分 $\\angle MFB$ ; (2)设 $PQ$ 与 $x$ 轴交于 $A_{1}$ 点，则 $FA_{1}$ 平分 $\\angle MA_{1}N$ .

探究五 （恒等式）将 A 点改为 x 轴上任一动点，则有 $\\frac{1}{y_{P}} + \\frac{1}{y_{Q}} = \\frac{1}{y_{M}} + \\frac{1}{y_{N}}$ .

推广1: 将焦点、准线分别推广为更一般的点与线: $F(m,0)(|m|<a)$ , $x=\\frac{a^{2}}{m}$ , 仍有 $\\frac{1}{y_{P}}+\\frac{1}{y_{Q}}=\\frac{1}{y_{M}}+\\frac{1}{y_{N}}.$

推广 2: 将椭圆推广为圆锥曲线, 等式 $\\frac{1}{y_{P}} + \\frac{1}{y_{Q}} = \\frac{1}{y_{M}} + \\frac{1}{y_{N}}$ 仍成立.

探究六 （面积关系）设 $M_{1}, N_{1}$ 分别是 M, N 在右准线的投影，则

$$
S _ {\\triangle F M _ {1} N _ {1}} ^ {2} = 4 S _ {\\triangle F M M _ {1}} S _ {\\triangle F N N _ {1}}.
$$

圆锥曲线中蕴含着复杂多变的关系,对其进行分析与研究,往往收获良多,其乐无穷!`,
      },
    ],
    tags: [],
  },
  {
    id: "prob-sec-1-6-5",
    topicId: "topic-sec-1-6",
    title: `已知椭圆 E 的两个焦点坐标分别为`,
    content: `已知椭圆 $E$ 的两个焦点坐标分别为 $(-1,0),(1,0)$ ，并且经过点 $\\left(\\frac{\\sqrt{2}}{2},\\frac{\\sqrt{3}}{2}\\right)$
(1)求椭圆 E 的标准方程；

(2) 设 M, N 为椭圆 E 上关于 x 轴对称的不同两点, $A(x_{1}, 0)$ , $B(x_{2}, 0)$ 为 x 轴上两点, 且 $x_{1}x_{2}=2$ , 证明: 直线 MA, NB 的交点 P 仍在椭圆 E 上.

(1)解法一 (定义法)根据题意,椭圆的长轴长

$$
2 a = \\sqrt {\\left(\\frac {\\sqrt {2}}{2} - 1\\right) ^ {2} + \\left(\\frac {\\sqrt {3}}{2}\\right) ^ {2}} + \\sqrt {\\left(\\frac {\\sqrt {2}}{2} + 1\\right) ^ {2} + \\left(\\frac {\\sqrt {3}}{2}\\right) ^ {2}},
$$

解得 $4a^{2} = 8$ ，即 $a^2 = 2$

又 $b^{2} = a^{2} - 1 = 1$ ，得所求椭圆标准方程为 $\\frac{x^2}{2} +y^2 = 1.$`,
    preview: `已知椭圆 E 的两个焦点坐标分别为 (-1,0),(1,0) ，`,
    difficulty: "medium",
    solutions: [
      {
        id: "prob-sec-1-6-5-sol-0",
        title: `解法二`,
        method: "creative",
        steps: [],
        explanation: `（待定系数法）根据题意，设椭圆的标准方程为 $\\frac{x^{2}}{a^{2}}+\\frac{y^{2}}{b^{2}}=1(a>b>0)$ .

$\\left\\{ \\begin{array}{l} \\frac{1}{2a^2} + \\frac{3}{4b^2} = 1, \\\\ a^2 - b^2 = 1 \\end{array} \\right. \\Rightarrow (b^2 - 1)^2 = 0 \\Rightarrow b^2 = 1, a^2 = 2$ ，得所求椭圆标准方程为 $\\frac{x^2}{2} + y^2 = 1.$

(2)证法一（通性通法，少思多算）设 $M(m,n),N(m, - n)$ ，则

直线 MA 的方程为 $y(m-x_{1})=n(x-x_{1})$ ，①

直线 $BN$ 的方程为 $y(m - x_2) = -n(x - x_2)$ . ②

由 $\\left\\{\\begin{aligned}y(m-x_{1})&=n(x-x_{1}),\\\\ y(m-x_{2})&=-n(x-x_{2})\\end{aligned}\\right.\\Rightarrow\\left\\{\\begin{aligned}x&=\\frac{m(x_{1}+x_{2})-4}{2m-(x_{1}+x_{2})},\\\\ y&=\\frac{n(x_{2}-x_{1})}{2m-(x_{1}+x_{2})}.\\end{aligned}\\right.$

又 $2n^{2} = 2 - m^{2},x_{1}x_{2} = 2$ ，所以

$$
\\begin{array}{l} x ^ {2} + 2 y ^ {2} = \\left[ \\frac {m (x _ {1} + x _ {2}) - 4}{2 m - (x _ {1} + x _ {2})} \\right] ^ {2} + 2 \\left[ \\frac {n (x _ {2} - x _ {1})}{2 m - (x _ {1} + x _ {2})} \\right] ^ {2} \\\\ = \\frac {m ^ {2} (x _ {1} + x _ {2}) ^ {2} - 8 m (x _ {1} + x _ {2}) + 1 6 + 2 n ^ {2} (x _ {2} - x _ {1}) ^ {2}}{\\left[ 2 m - (x _ {1} + x _ {2}) \\right] ^ {2}} \\\\ = \\frac {8 m ^ {2} - 8 m (x _ {1} + x _ {2}) + 2 (x _ {1} + x _ {2}) ^ {2}}{\\left[ 2 m - (x _ {1} + x _ {2}) \\right] ^ {2}} = 2, \\\\ \\end{array}
$$

故直线 MA 与直线 BN 的交点 P 仍在椭圆上.

证法二（构造转化，多思少算）如果我们注意分析题目的条件“ $x_{1}x_{2}=2$ ”的结构特征，联想“韦达定理”就会有下面的解法，设交点 $P(x_{0},y_{0})$ ，代入①②，并两边平方得

$$
y _ {0} ^ {2} (m - x _ {1}) ^ {2} = n ^ {2} (x _ {0} - x _ {1}) ^ {2}, \\tag {③}
$$

$$
y _ {0} ^ {2} (m - x _ {2}) ^ {2} = n ^ {2} (x _ {0} - x _ {2}) ^ {2}. \\tag {④}
$$

由此可知③④中的 $x_{1}, x_{2}$ 是方程 $y_{0}^{2}(m-x)^{2}=n^{2}(x_{0}-x)^{2}$ 的两个根，

所以 $x_{1}x_{2} = \\frac{y_{0}^{2}m^{2} - x_{0}^{2}n^{2}}{y_{0}^{2} - n^{2}} = 2.$ 又 $m^2 = 2 - 2n^2$

故 $x_0^2 + 2y_0^2 = 2$ ，所以直线 $MA$ 与直线 $BN$ 的交点 $P$ 仍在椭圆 $E$ 上.

证法三 （大道至简，深思妙算）设交点 $P(x_{0}, y_{0})$ ，代入①②并整理得

$$
(y _ {0} - n) x _ {1} = m y _ {0} - n x _ {0}, \\tag {⑤}
$$

$$
(y _ {0} + n) x _ {2} = m y _ {0} + n x _ {0}. \\tag {6}
$$

⑤与⑥两边分别相乘得

$$
(y _ {0} ^ {2} - n ^ {2}) x _ {1} x _ {2} = m ^ {2} y _ {0} ^ {2} - n ^ {2} x _ {0} ^ {2}, \\tag {*}.
$$

又 $x_{1}x_{2}=2, m^{2}=2-2n^{2}$ ，所以 $x_{0}^{2}+2y_{0}^{2}=2$ .

所以直线 MA 与直线 BN 的交点 P 仍在椭圆上.

探究一 （拓展）题目的条件为什么要假设 $x_{1}x_{2}=2$ ，这个 2 与椭圆中的参数有什么关系？

猜想命题1：“若 $M, N$ 为椭圆 $E: \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1 (a > b > 0)$ 上关于 $x$ 轴对称的不同两点， $A(x_1, 0), B(x_2, 0)$ 为 $x$ 轴上两点，且 $x_1 x_2 = a^2$ ，则直线 $MA, NB$ 的交点 $P$ 仍在椭圆 $E$ 上。”

证明: 设 $M(m,n)$ , $N(m,-n)$ , 交点 $P(x_{0},y_{0})$ .

由`,
      },
    ],
    tags: [],
  },
]
