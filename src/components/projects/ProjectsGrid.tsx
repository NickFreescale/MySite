'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Calendar, Star, ArrowRight } from 'lucide-react'
import { projects } from '@/config/site'

export default function ProjectsGrid() {
  const [filteredProjects] = useState(projects)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProjects.map((project, index) => (
        <Link
          key={project.id}
          href={`/projects/${project.id}`}
          className="block"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="card overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer h-full"
          >
          {/* 项目图片 */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={project.detailImage || project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index === 0}
            />
            
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
                {project.demo && project.demo !== '#' && (
                  <a
                    href={project.demo}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full text-gray-900 hover:bg-primary-600 hover:text-white transition-colors"
                    aria-label="查看演示"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* 项目信息 */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full font-medium">
                {project.category === 'algorithm' && '算法项目'}
                {project.category === 'tool' && '工具软件'}
              </span>
              {project.featured && (
                <div className="flex items-center space-x-1 text-yellow-600 text-sm">
                  <Star className="w-4 h-4 fill-current" />
                  <span>精选</span>
                </div>
              )}
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
                {project.demo && project.demo !== '#' && (
                  <a
                    href={project.demo}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                    aria-label="演示"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <div className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center space-x-1">
                  <span className="text-sm">了解更多</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        </Link>
      ))}
    </div>
  )
}






