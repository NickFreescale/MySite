import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { algorithms } from '@/config/site'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const algorithm = algorithms.find(a => a.id.toString() === params.id)
  
  if (!algorithm) {
    return {
      title: '算法未找到',
    }
  }

  return {
    title: algorithm.title,
    description: algorithm.description,
  }
}

export default function AlgorithmDetailPage({ params }: { params: { id: string } }) {
  const algorithm = algorithms.find(a => a.id.toString() === params.id)

  if (!algorithm) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* 返回按钮 */}
      <div className="bg-white py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/algorithms"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>返回技术笔记列表</span>
          </Link>
        </div>
      </div>

      {/* 主要内容 */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          {/* 标题 */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {algorithm.title}
          </h1>

          {/* 元信息 */}
          <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-gray-600">
            <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full font-medium">
              {algorithm.category === 'algorithm' && '算法优化'}
              {algorithm.category === 'control' && '控制算法'}
              {algorithm.category === 'robotics' && '机器人学'}
              {algorithm.category === 'geometry' && '计算几何'}
            </span>
            <span className={`px-3 py-1 rounded-full font-medium ${
              algorithm.difficulty === '简单' ? 'bg-green-100 text-green-800' :
              algorithm.difficulty === '中等' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {algorithm.difficulty}
            </span>
            <span>{algorithm.readTime}</span>
            <span>{new Date(algorithm.publishDate).toLocaleDateString('zh-CN')}</span>
          </div>

          {/* 描述 */}
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            {algorithm.description}
          </p>

          {/* 标签 */}
          <div className="flex flex-wrap gap-2 mb-8">
            {algorithm.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* 内容整理中占位图 */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col items-center justify-center py-12">
              <div className="relative w-full max-w-2xl aspect-video mb-6">
                <Image
                  src="/images/projects/To_be_continue.jpg"
                  alt="内容整理中"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                内容正在整理中
              </h3>
              <p className="text-gray-600 text-center max-w-md">
                这篇技术笔记的详细内容正在精心整理中，敬请期待！ ✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

