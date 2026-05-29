import Link from "next/link"
import Layout from "@/components/ui/Layout"
import Card from "@/components/ui/Card"
import ProblemCard from "@/components/problems/ProblemCard"
import { getProblemDisplayTitle } from "@/lib/data/problemDisplay"
import { topics } from "@/lib/data/topics"
import { getProblemsByTopic } from "@/lib/data/problems"

interface TopicPageProps {
  params: Promise<{ topicId: string }>
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { topicId } = await params
  const topic = topics.find((t) => t.id === topicId)

  if (!topic) {
    return (
      <Layout>
        <div className="text-center py-16">
          <h1 className="text-2xl font-bold mb-4">专题未找到</h1>
          <Link href="/topics" className="text-primary hover:underline">
            返回专题列表
          </Link>
        </div>
      </Layout>
    )
  }

  const problems = getProblemsByTopic(topic.id)

  return (
    <Layout>
      <div className="mb-6">
        <Link href="/topics" className="mb-4 inline-block text-sm font-medium text-blue-600 hover:text-blue-700">
          ← 返回专题列表
        </Link>
        <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm shadow-slate-200/70">
          <div
            className="bg-slate-950 px-5 py-8 text-white sm:px-8"
            style={{
              backgroundImage:
                "radial-gradient(circle at 18% 16%, rgba(59,130,246,0.36), transparent 30%), radial-gradient(circle at 82% 0%, rgba(16,185,129,0.22), transparent 28%)",
            }}
          >
            <div className="mb-3 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-slate-200">
              开始专题训练 · {problems.length} 个训练节点
            </div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{topic.name}</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">{topic.description}</p>
          </div>
          <div className="grid gap-0 md:grid-cols-3">
            {[
              ["训练路线", "概念 → 基础题 → 迁移题"],
              ["推荐题组", problems.map((item) => getProblemDisplayTitle(item, topic.name)).slice(0, 2).join("、")],
              ["原书题图", "题目中的图片直接使用书籍原图，保持一一对应"],
            ].map(([title, detail]) => (
              <div key={title} className="border-t border-slate-200 p-5 md:border-r md:last:border-r-0">
                <h2 className="text-sm font-semibold text-slate-950">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-950">推荐题组</h2>
            <p className="text-sm text-slate-500">按难度递进完成专题训练。</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {problems.map((problem) => (
            <ProblemCard key={problem.id} problem={problem} topicName={topic.name} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export async function generateStaticParams() {
  return topics.map((topic) => ({
    topicId: topic.id,
  }))
}
