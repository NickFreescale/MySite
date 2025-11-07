import { Metadata } from 'next'
import AboutHero from '@/components/about/AboutHero'
import AboutStory from '@/components/about/AboutStory'
import AboutSkills from '@/components/about/AboutSkills'
import AboutTimeline from '@/components/about/AboutTimeline'
import AboutContact from '@/components/about/AboutContact'

export const metadata: Metadata = {
  title: '关于我',
  description: '了解我的技术背景、职业目标和项目经历。专注于C++/Qt开发、计算机图形学和工业软件领域。',
  keywords: ['个人简介', 'C++开发', 'Qt', '计算机图形学', '工业软件', '3D可视化']
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      <AboutHero />
      <AboutStory />
      <AboutTimeline />
      <AboutSkills />
      <AboutContact />
    </div>
  )
}






