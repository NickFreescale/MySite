import { Metadata } from 'next'
import ProjectsGrid from '@/components/projects/ProjectsGrid'
import ProjectsHero from '@/components/projects/ProjectsHero'
import ProjectsFilter from '@/components/projects/ProjectsFilter'

export const metadata: Metadata = {
  title: '项目展示',
  description: '浏览我的所有编程项目，包含Web应用、移动应用、算法可视化工具等。每个项目都包含详细介绍、技术栈和源码链接。',
  keywords: ['项目展示', 'Web应用', '移动应用', '开源项目', '编程作品']
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-16">
      <ProjectsHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ProjectsFilter />
        <ProjectsGrid />
      </div>
    </div>
  )
}





