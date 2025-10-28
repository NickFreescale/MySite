'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Download, Mail } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* 头像/Logo区域 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary-500 to-blue-600 rounded-full flex items-center justify-center mb-6 shadow-xl">
              <span className="text-4xl font-bold text-white">&lt;/&gt;</span>
            </div>
          </motion.div>

          {/* 主标题 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-gray-900">你好，我是</span>
            <br />
            <span className="text-gradient">{siteConfig.name}</span>
          </motion.h1>

          {/* 副标题 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            {siteConfig.title}
            <br />
            {siteConfig.description}
          </motion.p>

          {/* 统计数据 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">{siteConfig.stats.projects}+</div>
              <div className="text-gray-600">完成项目</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">{siteConfig.stats.algorithms}+</div>
              <div className="text-gray-600">算法经验</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">{siteConfig.stats.experience}+</div>
              <div className="text-gray-600">年经验</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">{siteConfig.stats.competitions}</div>
              <div className="text-gray-600">竞赛获奖</div>
            </div>
          </motion.div>

          {/* 行动按钮 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link
              href="/projects"
              className="btn-primary inline-flex items-center space-x-2 group"
            >
              <span>查看我的项目</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/about"
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>下载简历</span>
            </Link>
          </motion.div>

          {/* 社交链接 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex justify-center space-x-6"
          >
            <a
              href={`mailto:${siteConfig.email}`}
              className="p-3 text-gray-600 hover:text-primary-600 hover:bg-white rounded-full transition-all duration-200 hover:shadow-md"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>

        {/* 滚动提示 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center space-y-2 text-gray-500">
            <span className="text-sm">向下滚动探索更多</span>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-300 rounded-full animate-bounce mt-2"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}



