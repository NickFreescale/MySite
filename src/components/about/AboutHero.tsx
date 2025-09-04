'use client'

import { motion } from 'framer-motion'
import { Download, MapPin, Calendar, Coffee } from 'lucide-react'

export default function AboutHero() {
  return (
    <section className="relative py-20 gradient-bg overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 左侧内容 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              你好，我是
              <br />
              <span className="text-gradient">张三</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              一名充满热情的全栈开发者，专注于创造优雅的用户体验和高效的解决方案。
              热爱学习新技术，享受解决复杂问题的过程。
            </p>

            {/* 基本信息 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="w-5 h-5 text-primary-600" />
                <span>北京，中国</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Calendar className="w-5 h-5 text-primary-600" />
                <span>2+ 年经验</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Coffee className="w-5 h-5 text-primary-600" />
                <span>咖啡爱好者</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Download className="w-5 h-5 text-primary-600" />
                <span>可远程工作</span>
              </div>
            </div>

            {/* 行动按钮 */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/resume.pdf"
                download
                className="btn-primary inline-flex items-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>下载简历</span>
              </a>
              <a
                href="mailto:your.email@example.com"
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <span>联系我</span>
              </a>
            </div>
          </motion.div>

          {/* 右侧头像/图片 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* 头像背景 */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 via-blue-500 to-purple-600 rounded-full"></div>
              
              {/* 头像占位符 */}
              <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                <div className="w-40 h-40 bg-gradient-to-br from-primary-100 to-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-primary-600">张</span>
                </div>
              </div>

              {/* 装饰元素 */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-80 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-pink-400 rounded-full opacity-80 animate-ping"></div>
            </div>
          </motion.div>
        </div>

        {/* 快速统计 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">15+</div>
            <div className="text-gray-600">完成项目</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">25+</div>
            <div className="text-gray-600">算法讲解</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">8+</div>
            <div className="text-gray-600">技术栈</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">100+</div>
            <div className="text-gray-600">GitHub提交</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

