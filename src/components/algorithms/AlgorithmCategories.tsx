'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  BarChart3, 
  Search, 
  TreePine, 
  Shuffle, 
  Network, 
  Target, 
  Code, 
  Zap 
} from 'lucide-react'

const categories = [
  {
    id: 'all',
    name: '全部算法',
    icon: Code,
    count: 25,
    color: 'from-gray-500 to-gray-700',
    description: '所有算法类别'
  },
  {
    id: 'sorting',
    name: '排序算法',
    icon: BarChart3,
    count: 6,
    color: 'from-blue-500 to-cyan-500',
    description: '冒泡、快排、归并等'
  },
  {
    id: 'searching',
    name: '搜索算法',
    icon: Search,
    count: 4,
    color: 'from-green-500 to-emerald-500',
    description: '二分搜索、深度优先等'
  },
  {
    id: 'tree',
    name: '树算法',
    icon: TreePine,
    count: 5,
    color: 'from-purple-500 to-pink-500',
    description: '二叉树、红黑树等'
  },
  {
    id: 'dp',
    name: '动态规划',
    icon: Target,
    count: 4,
    color: 'from-orange-500 to-red-500',
    description: 'DP经典问题'
  },
  {
    id: 'graph',
    name: '图算法',
    icon: Network,
    count: 3,
    color: 'from-indigo-500 to-purple-500',
    description: '最短路径、最小生成树'
  },
  {
    id: 'greedy',
    name: '贪心算法',
    icon: Zap,
    count: 2,
    color: 'from-yellow-500 to-orange-500',
    description: '贪心策略问题'
  },
  {
    id: 'string',
    name: '字符串算法',
    icon: Shuffle,
    count: 1,
    color: 'from-pink-500 to-rose-500',
    description: 'KMP、字符串匹配'
  }
]

interface AlgorithmCategoriesProps {
  onCategoryChange?: (category: string) => void
}

export default function AlgorithmCategories({ onCategoryChange }: AlgorithmCategoriesProps) {
  const [activeCategory, setActiveCategory] = useState('all')

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)
    onCategoryChange?.(categoryId)
  }

  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          算法分类
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          按照不同的算法类型组织，从基础到高级，系统性学习
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {categories.map((category, index) => {
          const Icon = category.icon
          const isActive = activeCategory === category.id
          
          return (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => handleCategoryChange(category.id)}
              className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                isActive
                  ? 'border-primary-500 bg-primary-50 shadow-lg scale-105'
                  : 'border-gray-200 bg-white hover:border-primary-300 hover:shadow-md hover:scale-102'
              }`}
            >
              {/* 背景渐变 */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 ${isActive ? 'opacity-10' : ''} rounded-2xl transition-opacity duration-300`} />
              
              {/* 图标 */}
              <div className={`relative mb-4 p-3 rounded-xl bg-gradient-to-r ${category.color} inline-block`}>
                <Icon className="w-6 h-6 text-white" />
              </div>

              {/* 内容 */}
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`font-semibold transition-colors ${
                    isActive ? 'text-primary-700' : 'text-gray-900 group-hover:text-primary-600'
                  }`}>
                    {category.name}
                  </h3>
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    isActive 
                      ? 'bg-primary-100 text-primary-700' 
                      : 'bg-gray-100 text-gray-600 group-hover:bg-primary-100 group-hover:text-primary-700'
                  }`}>
                    {category.count}
                  </span>
                </div>
                <p className={`text-sm transition-colors ${
                  isActive ? 'text-primary-600' : 'text-gray-500 group-hover:text-primary-500'
                }`}>
                  {category.description}
                </p>
              </div>

              {/* 选中指示器 */}
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute top-4 right-4 w-3 h-3 bg-primary-500 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          )
        })}
      </div>

      {/* 分类描述 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12 text-center"
      >
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {categories.find(c => c.id === activeCategory)?.name || '全部算法'}
          </h3>
          <p className="text-gray-600 mb-6">
            {activeCategory === 'all' && '探索所有算法类别，从基础概念到高级应用'}
            {activeCategory === 'sorting' && '学习各种排序算法的原理、实现和性能分析'}
            {activeCategory === 'searching' && '掌握高效的搜索策略和查找技术'}
            {activeCategory === 'tree' && '深入理解树结构和相关算法应用'}
            {activeCategory === 'dp' && '掌握动态规划思想，解决复杂优化问题'}
            {activeCategory === 'graph' && '学习图论算法，处理复杂网络问题'}
            {activeCategory === 'greedy' && '理解贪心策略，解决局部最优问题'}
            {activeCategory === 'string' && '掌握字符串处理和模式匹配算法'}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm">
              可视化演示
            </span>
            <span className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm">
              代码实现
            </span>
            <span className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm">
              复杂度分析
            </span>
            <span className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm">
              应用场景
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}







