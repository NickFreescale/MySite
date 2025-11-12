'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Clock, 
  TrendingUp, 
  Code, 
  BookOpen, 
  ArrowRight,
  BarChart3,
  Zap
} from 'lucide-react'
import { algorithms } from '@/config/site'

const difficultyColors = {
  '简单': 'bg-green-100 text-green-800',
  '中等': 'bg-yellow-100 text-yellow-800',
  '困难': 'bg-red-100 text-red-800'
}

const categoryIcons = {
  algorithm: BarChart3,
  control: TrendingUp,
  robotics: Code,
  geometry: Zap
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
              
              {/* 难度标签 */}
              <div className="absolute top-4 left-4 flex space-x-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[algorithm.difficulty as keyof typeof difficultyColors]}`}>
                  {algorithm.difficulty}
                </span>
              </div>

            </div>

            {/* 内容区域 */}
            <div className="p-6">
              {/* 分类和阅读时间 */}
              <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                <div className="flex items-center space-x-2">
                  <CategoryIcon className="w-4 h-4" />
                  <span className="font-medium text-primary-600">
                    {algorithm.category === 'algorithm' && '算法优化'}
                    {algorithm.category === 'control' && '控制算法'}
                    {algorithm.category === 'robotics' && '机器人学'}
                    {algorithm.category === 'geometry' && '计算几何'}
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
              <div className="flex items-center justify-end pt-4 border-t border-gray-100">
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



