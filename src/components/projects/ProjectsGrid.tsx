'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ExternalLink, Github, Calendar, Star, ArrowRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: '电商平台',
    description: '基于Next.js和Node.js构建的全栈电商平台，支持用户注册、商品管理、订单处理、支付集成等完整功能。采用现代化的设计和响应式布局。',
    image: '/images/projects/ecommerce.jpg',
    category: 'web',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/ecommerce',
    demo: 'https://your-ecommerce-demo.vercel.app',
    featured: true,
    createdAt: '2024-01-15',
    stars: 42
  },
  {
    id: 2,
    title: '算法可视化工具',
    description: '交互式算法可视化平台，帮助用户理解排序、搜索、图论等经典算法的执行过程。支持自定义数据和步进调试。',
    image: '/images/projects/algorithm-visualizer.jpg',
    category: 'algorithm',
    technologies: ['React', 'TypeScript', 'Canvas API', 'Framer Motion'],
    github: 'https://github.com/yourusername/algorithm-visualizer',
    demo: 'https://your-algo-viz.vercel.app',
    featured: true,
    createdAt: '2024-01-10',
    stars: 38
  },
  {
    id: 3,
    title: '任务管理应用',
    description: '现代化的任务管理工具，支持项目分组、进度追踪、团队协作、文件共享等功能。提供直观的看板视图和甘特图。',
    image: '/images/projects/task-manager.jpg',
    category: 'web',
    technologies: ['Vue.js', 'Express.js', 'PostgreSQL', 'Socket.io'],
    github: 'https://github.com/yourusername/task-manager',
    demo: 'https://your-task-app.vercel.app',
    featured: true,
    createdAt: '2024-01-08',
    stars: 29
  },
  {
    id: 4,
    title: '天气预报App',
    description: '基于React Native开发的跨平台天气应用，提供实时天气、7天预报、空气质量指数等信息。支持多城市管理和个性化主题。',
    image: '/images/projects/weather-app.jpg',
    category: 'mobile',
    technologies: ['React Native', 'TypeScript', 'Redux', 'OpenWeather API'],
    github: 'https://github.com/yourusername/weather-app',
    demo: 'https://expo.dev/@yourusername/weather-app',
    featured: false,
    createdAt: '2023-12-20',
    stars: 15
  },
  {
    id: 5,
    title: '代码片段管理器',
    description: '开发者工具，用于管理和分享代码片段。支持语法高亮、标签分类、搜索功能和团队协作。',
    image: '/images/projects/snippet-manager.jpg',
    category: 'tool',
    technologies: ['React', 'Node.js', 'MongoDB', 'Prism.js'],
    github: 'https://github.com/yourusername/snippet-manager',
    demo: 'https://your-snippets.vercel.app',
    featured: false,
    createdAt: '2023-12-15',
    stars: 23
  },
  {
    id: 6,
    title: '在线绘图工具',
    description: '基于Canvas的在线绘图应用，支持多种绘图工具、图层管理、实时协作等功能。适用于设计草图和思维导图。',
    image: '/images/projects/drawing-tool.jpg',
    category: 'web',
    technologies: ['React', 'Canvas API', 'Socket.io', 'WebRTC'],
    github: 'https://github.com/yourusername/drawing-tool',
    demo: 'https://your-draw-app.vercel.app',
    featured: false,
    createdAt: '2023-12-10',
    stars: 31
  }
]

export default function ProjectsGrid() {
  const [filteredProjects] = useState(projects)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProjects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="card overflow-hidden group hover:shadow-xl transition-all duration-300"
        >
          {/* 项目图片 */}
          <div className="relative h-48 bg-gradient-to-br from-primary-100 to-blue-100 overflow-hidden">
            {/* 临时占位符 */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-white text-2xl font-bold">{project.id}</span>
                </div>
                <p className="text-gray-600 text-sm">项目截图占位</p>
              </div>
            </div>
            
            {/* 特色标签 */}
            {project.featured && (
              <div className="absolute top-4 left-4">
                <div className="flex items-center space-x-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                  <Star className="w-3 h-3 fill-current" />
                  <span>精选</span>
                </div>
              </div>
            )}

            {/* 悬浮操作按钮 */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="flex space-x-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full text-gray-900 hover:bg-primary-600 hover:text-white transition-colors"
                  aria-label="查看演示"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full text-gray-900 hover:bg-primary-600 hover:text-white transition-colors"
                  aria-label="查看源码"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* 项目信息 */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full font-medium">
                {project.category === 'web' && 'Web应用'}
                {project.category === 'mobile' && '移动应用'}
                {project.category === 'algorithm' && '算法可视化'}
                {project.category === 'tool' && '工具软件'}
              </span>
              <div className="flex items-center space-x-1 text-gray-500 text-sm">
                <Github className="w-4 h-4" />
                <span>{project.stars}</span>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
              {project.title}
            </h3>

            <p className="text-gray-600 mb-4 text-sm line-clamp-3">
              {project.description}
            </p>

            {/* 技术标签 */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>

            {/* 底部信息 */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-1 text-gray-500 text-sm">
                <Calendar className="w-4 h-4" />
                <span>{new Date(project.createdAt).toLocaleDateString('zh-CN')}</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="演示"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <Link
                  href={`/projects/${project.id}`}
                  className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center space-x-1 group/link"
                >
                  <span className="text-sm">详情</span>
                  <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

