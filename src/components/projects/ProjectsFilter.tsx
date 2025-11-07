'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Filter, Search, X } from 'lucide-react'

const categories = [
  { id: 'all', name: '全部项目', count: 15 },
  { id: 'web', name: 'Web应用', count: 8 },
  { id: 'mobile', name: '移动应用', count: 3 },
  { id: 'algorithm', name: '算法可视化', count: 2 },
  { id: 'tool', name: '工具软件', count: 2 }
]

const technologies = [
  'React', 'Next.js', 'Vue.js', 'Node.js', 'TypeScript', 
  'Python', 'React Native', 'Flutter', 'MongoDB', 'PostgreSQL'
]

interface ProjectsFilterProps {
  onCategoryChange?: (category: string) => void
  onTechChange?: (techs: string[]) => void
  onSearchChange?: (search: string) => void
}

export default function ProjectsFilter({ 
  onCategoryChange, 
  onTechChange, 
  onSearchChange 
}: ProjectsFilterProps) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedTechs, setSelectedTechs] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [showTechFilter, setShowTechFilter] = useState(false)

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)
    onCategoryChange?.(categoryId)
  }

  const handleTechToggle = (tech: string) => {
    const newSelectedTechs = selectedTechs.includes(tech)
      ? selectedTechs.filter(t => t !== tech)
      : [...selectedTechs, tech]
    
    setSelectedTechs(newSelectedTechs)
    onTechChange?.(newSelectedTechs)
  }

  const handleSearchChange = (value: string) => {
    setSearchTerm(value)
    onSearchChange?.(value)
  }

  const clearFilters = () => {
    setActiveCategory('all')
    setSelectedTechs([])
    setSearchTerm('')
    setShowTechFilter(false)
    onCategoryChange?.('all')
    onTechChange?.([])
    onSearchChange?.('')
  }

  return (
    <div className="mb-12">
      {/* 搜索栏 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mb-8"
      >
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="搜索项目..."
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
          />
          {searchTerm && (
            <button
              onClick={() => handleSearchChange('')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </motion.div>

      {/* 分类筛选 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-6"
      >
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 border border-gray-200'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* 技术栈筛选 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center"
      >
        <button
          onClick={() => setShowTechFilter(!showTechFilter)}
          className="inline-flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-primary-600 transition-colors"
        >
          <Filter className="w-4 h-4" />
          <span>技术栈筛选</span>
          {selectedTechs.length > 0 && (
            <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-xs">
              {selectedTechs.length}
            </span>
          )}
        </button>

        {showTechFilter && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 p-6 bg-gray-50 rounded-lg"
          >
            <div className="flex flex-wrap justify-center gap-2">
              {technologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => handleTechToggle(tech)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    selectedTechs.includes(tech)
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 border border-gray-200'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* 清除筛选按钮 */}
      {(activeCategory !== 'all' || selectedTechs.length > 0 || searchTerm) && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-6"
        >
          <button
            onClick={clearFilters}
            className="inline-flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-primary-600 transition-colors"
          >
            <X className="w-4 h-4" />
            <span>清除所有筛选</span>
          </button>
        </motion.div>
      )}
    </div>
  )
}







