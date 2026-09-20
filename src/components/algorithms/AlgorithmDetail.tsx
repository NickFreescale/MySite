'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { algorithms } from '@/config/site'
import { useLanguage } from '@/contexts/LanguageContext'

type Algorithm = (typeof algorithms)[number]

export default function AlgorithmDetail({ algorithm, markdown }: { algorithm: Algorithm; markdown: { zh: string; en: string } }) {
  const { language, text } = useLanguage()
  const markdownContent = markdown[language]
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
              <span>{text("返回技术笔记列表")}</span>
            </Link>
          </div>
        </div>

        {/* 主要内容 */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            {/* 标题 */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {text(algorithm.title)}
            </h1>

            {/* 元信息 */}
            <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-gray-600">
              <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full font-medium">{text("计算几何")}</span>
              <span className="px-3 py-1 rounded-full font-medium bg-red-100 text-red-800">
                {text(algorithm.difficulty)}
              </span>
              <span>{text(algorithm.readTime)}</span>
            </div>

            {/* 标签 */}
            <div className="flex flex-wrap gap-2 mb-8">
              {algorithm.tags.map((tag) => (
                <span
                  key={text(tag)}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md"
                >
                  {text(tag)}
                </span>
              ))}
            </div>

            {/* 介绍 */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{text("渲染引擎简介")}</h2>
              <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-6">
                <p className="text-gray-700 text-lg leading-relaxed">{text("当前渲染引擎是搭建在")}<strong>{text("Qt 框架")}</strong>{text("下的")}<strong>{text("OpenGL 渲染系统")}</strong>{text("，具备完整的3D可视化能力。 该引擎实现了以下核心功能：")}</p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span><strong>{text("三维模型管理：")}</strong>{text("支持三维模型的增删改查操作")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span><strong>{text("交互操作：")}</strong>{text("实现模型的选取、平移、旋转等交互功能")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span><strong>{text("相机控制：")}</strong>{text("支持相机的自由移动、缩放和视角切换")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span><strong>{text("渲染效果：")}</strong>{text("提供多种渲染模式的实时切换（如线框、实体、光照等）")}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 渲染流程图 */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{text("渲染流程架构")}</h2>
              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                <div className="relative w-full" style={{ minHeight: '600px' }}>
                  <Image
                    src={language === 'en' ? '/images/algorithms/renderSystem/opengl-rendering-pipeline.en.svg' : '/images/algorithms/renderSystem/opengl-rendering-pipeline.svg'}
                    alt={text("OpenGL渲染流程图")}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm text-gray-500 text-center mt-4">{text("渲染引擎流程架构图（SVG矢量格式，支持无损放大）")}</p>
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
            <span>{text("返回技术笔记列表")}</span>
          </Link>
        </div>
      </div>

      {/* 主要内容 */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          {/* 标题 */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {text(algorithm.title)}
          </h1>

          {/* 元信息 */}
          <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-gray-600">
            <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full font-medium">
              {algorithm.category === 'algorithm' && text("算法优化")}
              {algorithm.category === 'control' && text("控制算法")}
              {algorithm.category === 'robotics' && text("机器人学")}
              {algorithm.category === 'geometry' && text("计算几何")}
            </span>
            <span className={`px-3 py-1 rounded-full font-medium ${
              algorithm.difficulty === '简单' ? 'bg-green-100 text-green-800' :
              algorithm.difficulty === '中等' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {text(algorithm.difficulty)}
            </span>
            <span>{text(algorithm.readTime)}</span>
          </div>

          {/* 描述 */}
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            {text(algorithm.description)}
          </p>

          {/* 标签 */}
          <div className="flex flex-wrap gap-2 mb-8">
            {algorithm.tags.map((tag) => (
              <span
                key={text(tag)}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md"
              >
                {text(tag)}
              </span>
            ))}
          </div>

          {/* Markdown内容或占位图 */}
          <div className="border-t border-gray-200 pt-8">
            {markdownContent ? (
              <div
                className="note-content prose max-w-none"
                dangerouslySetInnerHTML={{ __html: markdownContent }}
              />
            ) : (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="relative w-full max-w-2xl aspect-video mb-6">
                  <Image
                    src="/images/projects/To_be_continue.jpg"
                    alt={text("内容整理中")}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{text("内容正在整理中")}</h3>
                <p className="text-gray-600 text-center max-w-md">{text("这篇技术笔记的详细内容正在精心整理中，敬请期待！ ✨")}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
