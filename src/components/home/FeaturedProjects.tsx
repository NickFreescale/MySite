'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { projects } from '@/config/site'
import { useLanguage } from '@/contexts/LanguageContext'

const featuredProjects = projects.filter(project => project.featured)

export default function FeaturedProjects() {
  const { language, t } = useLanguage()
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题区域 - 统一风格 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">{t.projects.title}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {language === 'zh' 
              ? '每个项目都专注于解决实际问题，从性能优化到用户体验，展现完整的工程实践能力' 
              : 'Each project focuses on solving real-world problems, demonstrating complete engineering practices from performance optimization to user experience'}
          </p>
        </motion.div>

        {/* 项目网格 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              {/* 媒体区域：优先使用视频，其次图片 */}
              <div className="relative h-48 overflow-hidden">
                {/** 如果在 site.ts 为该项目配置了 video，则优先播放视频 */}
                {/** 建议视频放在 /public/videos/projects 下，字段为 /videos/projects/xxx.mp4 */}
                {/** 为了在部分浏览器自动播放，需 muted + playsInline */}
                {project.video ? (
                  <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src={project.video}
                    poster={project.image}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                  />
                )}
                
                {/* 悬浮操作按钮 */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-3">
                    {project.demo && project.demo !== '#' && (
                      <a
                        href={project.demo}
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* 技术标签 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* 项目链接 */}
                <div className="flex items-center justify-between">
                  <Link
                    href={`/projects/${project.id}`}
                    className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center space-x-1 group/link"
                  >
                    <span>了解更多</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                  
                  <div className="flex space-x-3">
                    {project.demo && project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                        aria-label="演示"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 查看更多按钮 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/projects"
            className="btn-primary inline-flex items-center space-x-2 group"
          >
            <span>查看所有项目</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}



