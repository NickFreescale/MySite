'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Clock, TrendingUp, BookOpen, ArrowRight } from 'lucide-react'

const recentAlgorithms = [
  {
    id: 1,
    title: '快速排序算法详解',
    description: '深入理解快速排序的原理、实现和优化策略，包含可视化演示和性能分析。',
    category: '排序算法',
    difficulty: '中等',
    readTime: '8 分钟',
    publishDate: '2024-01-15',
    tags: ['排序', '分治', '递归'],
    thumbnail: '/images/algorithms/quicksort.gif'
  },
  {
    id: 2,
    title: '动态规划入门指南',
    description: '从斐波那契数列开始，逐步掌握动态规划的思想和经典应用场景。',
    category: '动态规划',
    difficulty: '困难',
    readTime: '12 分钟',
    publishDate: '2024-01-10',
    tags: ['DP', '优化', '状态转移'],
    thumbnail: '/images/algorithms/dp.gif'
  },
  {
    id: 3,
    title: '二叉树遍历全解析',
    description: '前序、中序、后序遍历的递归与迭代实现，以及层序遍历的应用。',
    category: '数据结构',
    difficulty: '简单',
    readTime: '6 分钟',
    publishDate: '2024-01-08',
    tags: ['二叉树', '遍历', '递归'],
    thumbnail: '/images/algorithms/tree-traversal.gif'
  }
]

const difficultyColors = {
  '简单': 'bg-green-100 text-green-800',
  '中等': 'bg-yellow-100 text-yellow-800',
  '困难': 'bg-red-100 text-red-800'
}

export default function RecentAlgorithms() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题区域 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            最新算法讲解
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            深入浅出地讲解经典算法，配合可视化演示，让复杂的概念变得简单易懂
          </p>
        </motion.div>

        {/* 算法卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recentAlgorithms.map((algorithm, index) => (
            <motion.article
              key={algorithm.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              {/* 缩略图区域 */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-blue-100 overflow-hidden">
                {/* 临时占位符 - 实际使用时替换为算法可视化GIF */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-gray-600 text-sm">算法可视化</p>
                  </div>
                </div>
                
                {/* 难度标签 */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[algorithm.difficulty as keyof typeof difficultyColors]}`}>
                    {algorithm.difficulty}
                  </span>
                </div>
              </div>

              {/* 内容区域 */}
              <div className="p-6">
                {/* 分类和阅读时间 */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <span className="font-medium text-primary-600">{algorithm.category}</span>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{algorithm.readTime}</span>
                  </div>
                </div>

                {/* 标题 */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  <Link href={`/algorithms/${algorithm.id}`}>
                    {algorithm.title}
                  </Link>
                </h3>

                {/* 描述 */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {algorithm.description}
                </p>

                {/* 标签 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {algorithm.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 底部信息 */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">
                    {new Date(algorithm.publishDate).toLocaleDateString('zh-CN')}
                  </span>
                  <Link
                    href={`/algorithms/${algorithm.id}`}
                    className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center space-x-1 group/link"
                  >
                    <span>阅读详情</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* 统计信息 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">25+</div>
              <div className="text-gray-600">算法讲解</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">8</div>
              <div className="text-gray-600">算法分类</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-gray-600">可视化演示</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">1000+</div>
              <div className="text-gray-600">代码示例</div>
            </div>
          </div>
        </motion.div>

        {/* 查看更多按钮 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/algorithms"
            className="btn-primary inline-flex items-center space-x-2 group"
          >
            <BookOpen className="w-5 h-5" />
            <span>探索所有算法</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

