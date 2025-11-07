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
            {/* 职业目标 */}
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                💡 我的职业目标
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                专注于<strong>工业软件</strong>与<strong>3D可视化</strong>领域，
                致力于开发高性能、用户友好的专业软件系统。
                希望能够将计算机图形学、算法优化和工程实践结合，
                为制造业和医疗行业提供创新的数字化解决方案。
              </p>
            </div>

            {/* 我的故事 */}
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              我的编程之路始于大学时期对智能车竞赛的热爱。从车道线识别算法到PID控制，
              每一行代码都让我体会到算法的力量。两次全国竞赛的获奖经历，不仅锻炼了我的技术能力，
              更让我学会了如何在硬件限制下追求极致性能。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              毕业后，我进入工业软件领域，从3D打印切片软件到正畸设计系统，
              我深深体会到<strong>技术不仅仅是工具，更是连接创意与现实的桥梁</strong>。
              在开发中，我始终追求代码的优雅性和系统的健壮性，用C++/Qt构建专业级应用。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              现在的我，专注于计算机图形学、几何算法和GPU加速技术，
              希望能够通过技术创新，为工业制造和医疗健康带来更高效的数字化解决方案。
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






