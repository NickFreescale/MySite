import { Metadata } from 'next'
import AlgorithmsHero from '@/components/algorithms/AlgorithmsHero'
import AlgorithmsGrid from '@/components/algorithms/AlgorithmsGrid'
import AlgorithmCategories from '@/components/algorithms/AlgorithmCategories'

export const metadata: Metadata = {
  title: '算法讲解',
  description: '深入浅出的算法教程，包含排序、搜索、动态规划、图论等经典算法的详细讲解和可视化演示。',
  keywords: ['算法教程', '数据结构', '算法可视化', '编程学习', '计算机科学']
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





