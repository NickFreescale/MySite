import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Home } from 'lucide-react'

export default function AlgorithmNotFound() {
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
          <div className="flex flex-col items-center justify-center py-12">
            {/* 占位图 */}
            <div className="relative w-full max-w-2xl aspect-video mb-8">
              <Image
                src="/images/projects/To_be_continue.jpg"
                alt="内容整理中"
                fill
                className="object-contain"
              />
            </div>

            {/* 提示信息 */}
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              技术笔记未找到
            </h1>
            <p className="text-gray-600 text-center max-w-md mb-8">
              抱歉，您访问的技术笔记不存在或正在整理中。
            </p>

            {/* 操作按钮 */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/algorithms"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>返回技术笔记</span>
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Home className="w-4 h-4" />
                <span>返回首页</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

