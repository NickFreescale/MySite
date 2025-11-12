import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { algorithms } from '@/config/site'
import fs from 'fs'
import path from 'path'
import { remark } from 'remark'
import html from 'remark-html'

// 读取并处理Markdown文件
async function getMarkdownContent(filename: string): Promise<string> {
  try {
    // filename 是相对于 public 目录的路径
    const filePath = path.join(process.cwd(), 'public', filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    
    // 使用 remark 将 markdown 转换为 HTML
    const processedContent = await remark()
      .use(html, { sanitize: false })
      .process(fileContents)
    
    return processedContent.toString()
  } catch (error) {
    console.error('Error reading markdown file:', error)
    return ''
  }
}

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

export default async function AlgorithmDetailPage({ params }: { params: { id: string } }) {
  const algorithm = algorithms.find(a => a.id.toString() === params.id)

  if (!algorithm) {
    notFound()
  }

  // 读取Markdown内容（如果有）
  let markdownContent = ''
  const algorithmWithFile = algorithm as any
  if (algorithmWithFile.contentFile) {
    markdownContent = await getMarkdownContent(algorithmWithFile.contentFile)
  }

  // OpenGL渲染引擎的特殊布局
  if (algorithm.id === 0) {
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            {/* 标题 */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {algorithm.title}
            </h1>

            {/* 元信息 */}
            <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-gray-600">
              <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full font-medium">
                计算几何
              </span>
              <span className="px-3 py-1 rounded-full font-medium bg-red-100 text-red-800">
                {algorithm.difficulty}
              </span>
              <span>{algorithm.readTime}</span>
            </div>

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

            {/* 介绍 */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">渲染引擎简介</h2>
              <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  当前渲染引擎是搭建在 <strong>Qt 框架</strong>下的 <strong>OpenGL 渲染系统</strong>，具备完整的3D可视化能力。
                  该引擎实现了以下核心功能：
                </p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span><strong>三维模型管理：</strong>支持三维模型的增删改查操作</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span><strong>交互操作：</strong>实现模型的选取、平移、旋转等交互功能</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span><strong>相机控制：</strong>支持相机的自由移动、缩放和视角切换</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span><strong>渲染效果：</strong>提供多种渲染模式的实时切换（如线框、实体、光照等）</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 渲染流程图 */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">渲染流程架构</h2>
              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                <div className="relative w-full" style={{ minHeight: '600px' }}>
                  <Image
                    src="/images/algorithms/renderSystem/opengl-rendering-pipeline.svg"
                    alt="OpenGL渲染流程图"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm text-gray-500 text-center mt-4">
                  渲染引擎流程架构图（SVG矢量格式，支持无损放大）
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // 其他算法的默认布局
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

          {/* Markdown内容或占位图 */}
          <div className="border-t border-gray-200 pt-8">
            {markdownContent ? (
              <div 
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-primary-600 prose-strong:text-gray-900 prose-code:text-primary-600 prose-code:bg-primary-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-img:rounded-lg prose-img:shadow-md"
                dangerouslySetInnerHTML={{ __html: markdownContent }}
              />
            ) : (
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
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

