'use client'

import { motion } from 'framer-motion'
import { Heart, Lightbulb, Target, Rocket } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: '热爱编程',
    description: '从第一行代码开始，我就深深被编程的魅力所吸引。每一个问题都是一个待解的谜题，每一行代码都承载着创造的喜悦。',
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: Lightbulb,
    title: '持续学习',
    description: '技术日新月异，我始终保持好奇心和学习的热情。从新框架到设计模式，从算法优化到用户体验，每天都在成长。',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Target,
    title: '追求完美',
    description: '优雅的代码、流畅的用户体验、高效的性能——我相信细节决定成败，每一个项目都力求做到最好。',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Rocket,
    title: '创新思维',
    description: '不满足于现状，总是在寻找更好的解决方案。用技术改变世界，用创新驱动进步，这是我的信念。',
    color: 'from-blue-500 to-purple-500'
  }
]

export default function AboutStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 个人故事 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            我的故事
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              我的编程之路始于大学时期的一门计算机课程。那时的我被代码的逻辑性和创造性深深震撼，
              从简单的Hello World到复杂的算法实现，每一步都充满了探索的乐趣。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              毕业后，我投身于软件开发行业，从前端到后端，从移动端到全栈，不断拓宽自己的技术边界。
              在这个过程中，我深深体会到技术不仅仅是工具，更是连接想法与现实的桥梁。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              现在的我，不仅专注于技术的深度，更关注如何用技术解决真实世界的问题，
              如何通过优雅的代码和设计为用户带来更好的体验。这就是我创建这个作品集的初衷——
              分享知识，展示创造，与更多志同道合的人交流学习。
            </p>
          </div>
        </motion.div>

        {/* 价值观和理念 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            我的价值观
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${value.color} flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* 兴趣爱好 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            工作之外的我
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">☕</div>
              <div className="text-sm font-medium text-gray-700">咖啡品鉴</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">📚</div>
              <div className="text-sm font-medium text-gray-700">技术阅读</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🎵</div>
              <div className="text-sm font-medium text-gray-700">音乐欣赏</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🏃</div>
              <div className="text-sm font-medium text-gray-700">跑步健身</div>
            </div>
          </div>
          <p className="text-gray-600 mt-6">
            我相信生活的丰富性能够为工作带来更多的灵感和创意
          </p>
        </motion.div>
      </div>
    </section>
  )
}

