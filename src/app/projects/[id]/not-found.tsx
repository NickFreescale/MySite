import Link from 'next/link'
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen pt-16 flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-blue-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gradient mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            项目未找到
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            抱歉，您要查找的项目不存在或已被移除。
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            href="/projects"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>返回项目列表</span>
          </Link>
          
          <Link
            href="/"
            className="btn-secondary inline-flex items-center space-x-2"
          >
            <Home className="w-5 h-5" />
            <span>返回首页</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

















