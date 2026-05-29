import Link from "next/link"
import Layout from "@/components/ui/Layout"
import Card from "@/components/ui/Card"
import Button from "@/components/ui/Button"
import KaTeX from "@/components/ui/KaTeX"
import { topics, categories } from "@/lib/data/topics"
import { problems, getProblemsByTopic } from "@/lib/data/problems"

export default function Home() {
  const totalProblems = problems.length
  const totalTopics = topics.length
  const featuredTopics = topics.slice(0, 6)

  return (
    <Layout>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm shadow-slate-200/70">
          <div className="relative bg-slate-950 px-5 py-8 text-white sm:px-8 sm:py-10">
            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(59,130,246,.55), transparent 28%), radial-gradient(circle at 80% 10%, rgba(168,85,247,.45), transparent 24%), linear-gradient(135deg, rgba(255,255,255,.08) 0 1px, transparent 1px)", backgroundSize: "auto, auto, 28px 28px" }} />
            <div className="relative max-w-3xl">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">MathLab 学习工作台</h1>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                将《更高更妙的高中数学思想与方法》做成书籍电子化学习台：可检索、可练习、可阅读，并保留原书题图与章节脉络。
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/topics">
                  <Button size="lg">开始学习</Button>
                </Link>
                <Link href="/topics">
                  <Button variant="outline" size="lg" className="border-white/15 bg-white/10 text-white hover:bg-white/15">
                    浏览专题
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="grid gap-0 md:grid-cols-3">
            {[
              [String(totalProblems), "电子化题目", `覆盖 ${totalTopics} 个章节专题`],
              [String(categories.length), "章节分类", categories.map(c => c.name).join("、")],
              ["3", "可视化类型", "函数、几何与不等式"],
            ].map(([value, label, detail]) => (
              <div key={label} className="border-t border-slate-200 p-5 md:border-r md:last:border-r-0">
                <div className="text-2xl font-semibold tracking-tight text-slate-950">{value}</div>
                <div className="mt-1 text-sm font-medium text-slate-700">{label}</div>
                <div className="mt-1 text-xs text-slate-500">{detail}</div>
              </div>
            ))}
          </div>
        </section>

        <aside className="space-y-6">
          <Card>
            <h2 className="text-lg font-semibold tracking-tight text-slate-950">章节分类</h2>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {categories.map((cat) => {
                const catTopics = topics.filter(t => t.category === cat.id)
                return (
                  <Link key={cat.id} href="/topics" className="rounded-2xl border border-slate-200 bg-slate-50 p-3 transition hover:border-blue-300 hover:shadow-sm">
                    <div className="text-lg">{cat.icon}</div>
                    <div className="mt-1 text-sm font-medium text-slate-700">{cat.name}</div>
                    <div className="text-xs text-slate-500">{catTopics.length} 个专题</div>
                  </Link>
                )
              })}
            </div>
          </Card>
        </aside>
      </div>

      <div className="mt-6">
        <section>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-slate-950">全部专题</h2>
              <p className="text-sm text-slate-500">按分类和难度选择你的学习路径。</p>
            </div>
            <Link href="/topics" className="text-sm font-medium text-blue-600 hover:text-blue-700">查看全部</Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featuredTopics.map((topic) => {
              const cat = categories.find(c => c.id === topic.category)
              const topicProblemCount = getProblemsByTopic(topic.id).length
              return (
                <Link key={topic.id} href={`/topics/${topic.id}`}>
                  <Card className="h-full transition hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100">
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                      <span>{cat?.icon}</span>
                      <span>{cat?.name}</span>
                      <span className="rounded-full bg-slate-100 px-2 py-0.5">{topic.difficulty}</span>
                    </div>
                    <h3 className="mt-2 font-semibold tracking-tight text-slate-950">{topic.name}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{topic.description}</p>
                    <div className="mt-3 text-xs text-slate-500">{topicProblemCount} 道题目</div>
                  </Card>
                </Link>
              )
            })}
          </div>
        </section>
      </div>
    </Layout>
  )
}
