import Layout from "@/components/ui/Layout"
import TopicSearch from "@/components/topics/TopicSearch"
import { topics, categories } from "@/lib/data/topics"
import { problems } from "@/lib/data/problems"

export default function TopicsPage() {
  return (
    <Layout>
      <section className="mb-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm shadow-slate-200/70">
        <div className="bg-slate-950 px-5 py-8 text-white sm:px-8">
          <div className="mb-3 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-slate-200">
            专题训练 · {topics.length} 个模块
          </div>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">数学专题</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">按知识模块、难度和可视化类型筛选训练内容，找到最适合当前阶段的练习路径。</p>
        </div>
        <div className="grid gap-0 sm:grid-cols-3">
          {[
            [topics.length, "专题模块"],
            [problems.length, "训练题目"],
            [categories.length, "章节分类"],
          ].map(([value, label]) => (
            <div key={label} className="border-t border-slate-200 p-5 sm:border-r sm:last:border-r-0">
              <div className="text-2xl font-semibold tracking-tight text-slate-950">{value}</div>
              <div className="mt-1 text-sm font-medium text-slate-600">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <TopicSearch topics={topics} problems={problems} categories={categories} />
    </Layout>
  )
}
