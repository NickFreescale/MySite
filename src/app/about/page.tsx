import { Metadata } from 'next'
import AboutHero from '@/components/about/AboutHero'
import AboutStory from '@/components/about/AboutStory'
import AboutSkills from '@/components/about/AboutSkills'
import AboutTimeline from '@/components/about/AboutTimeline'
import AboutContact from '@/components/about/AboutContact'

export const metadata: Metadata = {
  title: '关于我',
  description: '了解我的技术背景、工作经历和个人故事。我是一名热爱编程的全栈开发者，专注于创造优秀的用户体验。',
  keywords: ['个人简介', '技术背景', '工作经历', '全栈开发', '编程经验']
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      <AboutHero />
      <AboutStory />
      <AboutSkills />
      <AboutTimeline />
      <AboutContact />
    </div>
  )
}

