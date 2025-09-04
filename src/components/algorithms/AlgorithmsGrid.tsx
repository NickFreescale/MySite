'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Clock, 
  TrendingUp, 
  Play, 
  Code, 
  BookOpen, 
  ArrowRight,
  BarChart3,
  Zap
} from 'lucide-react'

const algorithms = [
  {
    id: 1,
    title: '快速排序算法详解',
    description: '深入理解快速排序的原理、实现和优化策略，包含可视化演示和性能分析。通过动画展示分治思想的精髓。',
    category: 'sorting',
    difficulty: '中等',
    readTime: '8 分钟',
    publishDate: '2024-01-15',
    tags: ['排序', '分治', '递归'],
    thumbnail: '/images/algorithms/quicksort.gif',
    complexity: {
      time: 'O(n log n)',
      space: 'O(log n)'
    },
    views: 1245,
    featured: true
  },
  {
    id: 2,
    title: '动态规划入门指南',
    description: '从斐波那契数列开始，逐步掌握动态规划的思想和经典应用场景。包含状态转移方程推导过程。',
    category: 'dp',
    difficulty: '困难',
    readTime: '12 分钟',
    publishDate: '2024-01-10',
    tags: ['DP', '优化', '状态转移'],
    thumbnail: '/images/algorithms/dp.gif',
    complexity: {
      time: 'O(n)',
      space: 'O(n)'
    },
    views: 987,
    featured: true
  },
  {
    id: 3,
    title: '二叉树遍历全解析',
    description: '前序、中序、后序遍历的递归与迭代实现，以及层序遍历的应用。配合动画演示遍历过程。',
    category: 'tree',
    difficulty: '简单',
    readTime: '6 分钟',
    publishDate: '2024-01-08',
    tags: ['二叉树', '遍历', '递归'],
    thumbnail: '/images/algorithms/tree-traversal.gif',
    complexity: {
      time: 'O(n)',
      space: 'O(h)'
    },
    views: 1567,
    featured: true
  },
  {
    id: 4,
    title: '二分查找及其变种',
    description: '掌握二分查找的核心思想，以及在各种场景下的变种应用。包含边界处理和常见陷阱。',
    category: 'searching',
    difficulty: '中等',
    readTime: '7 分钟',
    publishDate: '2024-01-05',
    tags: ['二分查找', '搜索', '边界'],
    thumbnail: '/images/algorithms/binary-search.gif',
    complexity: {
      time: 'O(log n)',
      space: 'O(1)'
    },
    views: 823,
    featured: false
  },
  {
    id: 5,
    title: 'Dijkstra最短路径算法',
    description: '学习Dijkstra算法的原理和实现，理解贪心策略在图论中的应用。包含优先队列优化。',
    category: 'graph',
    difficulty: '困难',
    readTime: '10 分钟',
    publishDate: '2024-01-03',
    tags: ['图论', '最短路径', '贪心'],
    thumbnail: '/images/algorithms/dijkstra.gif',
    complexity: {
      time: 'O(V²)',
      space: 'O(V)'
    },
    views: 654,
    featured: false
  },
  {
    id: 6,
    title: '归并排序与分治思想',
    description: '通过归并排序理解分治算法的精髓，学习如何将复杂问题分解为子问题。',
    category: 'sorting',
    difficulty: '中等',
    readTime: '9 分钟',
    publishDate: '2024-01-01',
    tags: ['归并排序', '分治', '稳定排序'],
    thumbnail: '/images/algorithms/merge-sort.gif',
    complexity: {
      time: 'O(n log n)',
      space: 'O(n)'
    },
    views: 756,
    featured: false
  }
]

const difficultyColors = {
  '简单': 'bg-green-100 text-green-800',
  '中等': 'bg-yellow-100 text-yellow-800',
  '困难': 'bg-red-100 text-red-800'
}

const categoryIcons = {
  sorting: BarChart3,
  searching: TrendingUp,
  tree: Code,
  dp: Zap,
  graph: TrendingUp,
  greedy: Zap
}

export default function AlgorithmsGrid() {
  const [filteredAlgorithms] = useState(algorithms)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredAlgorithms.map((algorithm, index) => {
        const CategoryIcon = categoryIcons[algorithm.category as keyof typeof categoryIcons] || Code
        
        return (
          <motion.article
            key={algorithm.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="card overflow-hidden group hover:shadow-xl transition-all duration-300"
          >
            {/* 缩略图区域 */}
            <div className="relative h-48 bg-gradient-to-br from-primary-100 to-blue-100 overflow-hidden">
              {/* 临时占位符 - 实际使用时替换为算法可视化GIF */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CategoryIcon className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-gray-600 text-sm">算法可视化</p>
                </div>
              </div>
              
              {/* 难度和特色标签 */}
              <div className="absolute top-4 left-4 flex space-x-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[algorithm.difficulty as keyof typeof difficultyColors]}`}>
                  {algorithm.difficulty}
                </span>
                {algorithm.featured && (
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    精选
                  </span>
                )}
              </div>

              {/* 播放按钮 */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <button className="p-4 bg-white rounded-full text-primary-600 hover:bg-primary-600 hover:text-white transition-colors">
                  <Play className="w-8 h-8 fill-current" />
                </button>
              </div>
            </div>

            {/* 内容区域 */}
            <div className="p-6">
              {/* 分类和阅读时间 */}
              <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                <div className="flex items-center space-x-2">
                  <CategoryIcon className="w-4 h-4" />
                  <span className="font-medium text-primary-600">
                    {algorithm.category === 'sorting' && '排序算法'}
                    {algorithm.category === 'searching' && '搜索算法'}
                    {algorithm.category === 'tree' && '树算法'}
                    {algorithm.category === 'dp' && '动态规划'}
                    {algorithm.category === 'graph' && '图算法'}
                    {algorithm.category === 'greedy' && '贪心算法'}
                  </span>
                </div>
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
              <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                {algorithm.description}
              </p>

              {/* 复杂度信息 */}
              <div className="flex items-center space-x-4 mb-4 text-xs">
                <div className="flex items-center space-x-1">
                  <span className="text-gray-500">时间:</span>
                  <code className="bg-gray-100 px-2 py-1 rounded text-gray-700">
                    {algorithm.complexity.time}
                  </code>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-gray-500">空间:</span>
                  <code className="bg-gray-100 px-2 py-1 rounded text-gray-700">
                    {algorithm.complexity.space}
                  </code>
                </div>
              </div>

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
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <span>{new Date(algorithm.publishDate).toLocaleDateString('zh-CN')}</span>
                  <div className="flex items-center space-x-1">
                    <BookOpen className="w-3 h-3" />
                    <span>{algorithm.views} 阅读</span>
                  </div>
                </div>
                <Link
                  href={`/algorithms/${algorithm.id}`}
                  className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center space-x-1 group/link"
                >
                  <span className="text-sm">学习</span>
                  <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.article>
        )
      })}
    </div>
  )
}

