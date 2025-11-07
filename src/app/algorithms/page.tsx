import { Metadata } from 'next'
import AlgorithmsHero from '@/components/algorithms/AlgorithmsHero'
import AlgorithmsGrid from '@/components/algorithms/AlgorithmsGrid'
import AlgorithmCategories from '@/components/algorithms/AlgorithmCategories'

export const metadata: Metadata = {
  title: '技术笔记',
  description: '记录开发过程中的技术心得、算法优化、性能调优和工程实践经验。',
  keywords: ['技术笔记', '开发心得', '算法优化', 'C++', 'Qt', '计算机图形学']
}

export default function AlgorithmsPage() {
  return (
    <div className="min-h-screen pt-16">
      <AlgorithmsHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AlgorithmCategories />
        <AlgorithmsGrid />
      </div>
    </div>
  )
}






