import Link from "next/link"
import Layout from "@/components/ui/Layout"
import Card from "@/components/ui/Card"
import ProblemViewer from "@/components/problems/ProblemViewer"
import SolutionViewer from "@/components/problems/SolutionViewer"
import ProblemVisualization from "@/components/visualizers/ProblemVisualization"
import { getProblemById, getProblemsByTopic, problems } from "@/lib/data/problems"
import { topics } from "@/lib/data/topics"

interface ProblemPageProps {
  params: Promise<{ problemId: string }>
}

export default async function ProblemPage({ params }: ProblemPageProps) {
  const { problemId } = await params
  const problem = getProblemById(problemId)

  if (!problem) {
    return (
      <Layout>
        <div className="text-center py-16">
          <h1 className="text-2xl font-bold mb-4">题目未找到</h1>
          <Link href="/topics" className="text-primary hover:underline">
            返回专题列表
          </Link>
        </div>
      </Layout>
    )
  }

  const topic = topics.find((t) => t.id === problem.topicId)
  const topicProblems = topic ? getProblemsByTopic(topic.id) : []
  const currentIndex = topicProblems.findIndex((p) => p.id === problem.id)
  const nextProblemId = currentIndex >= 0 && currentIndex < topicProblems.length - 1
    ? topicProblems[currentIndex + 1].id
    : undefined

  return (
    <Layout>
      <div className="mb-6">
        <Link
          href="/topics"
          className="text-primary hover:underline mb-2 inline-block"
        >
          ← 专题列表
        </Link>
        {topic && (
          <Link
            href={`/topics/${topic.id}`}
            className="text-primary hover:underline mb-4 block"
          >
            ← {topic.name}
          </Link>
        )}
      </div>

      <ProblemViewer problem={problem} />

      {problem.visualization && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">可视化演示</h2>
          <Card>
            <ProblemVisualization problemId={problem.id} visualization={problem.visualization} />
          </Card>
        </div>
      )}

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">解法</h2>
        <SolutionViewer solutions={problem.solutions} problemId={problem.id} nextProblemId={nextProblemId} />
      </div>
    </Layout>
  )
}

export async function generateStaticParams() {
  return problems.map((problem) => ({
    problemId: problem.id,
  }))
}
