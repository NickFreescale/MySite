'use client'

import { motion } from 'framer-motion'
import { Code2, Cpu, Layers, Monitor } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

// 核心专精技能
const coreSkillsData = {
  zh: [
    { name: "C/C++", icon: "💻", color: "from-blue-500 to-blue-600" },
    { name: "Qt", icon: "🎨", color: "from-green-500 to-green-600" },
    { name: "OpenGL", icon: "🔺", color: "from-red-500 to-red-600" },
    { name: "渲染引擎", icon: "🎲", color: "from-purple-500 to-purple-600" },
    { name: "GPU编程", icon: "⚡", color: "from-yellow-500 to-yellow-600" }
  ],
  en: [
    { name: "C/C++", icon: "💻", color: "from-blue-500 to-blue-600" },
    { name: "Qt", icon: "🎨", color: "from-green-500 to-green-600" },
    { name: "OpenGL", icon: "🔺", color: "from-red-500 to-red-600" },
    { name: "Rendering Engine", icon: "🎲", color: "from-purple-500 to-purple-600" },
    { name: "GPU Programming", icon: "⚡", color: "from-yellow-500 to-yellow-600" }
  ]
}

// 算法能力
const algorithmsData = {
  zh: [
    { name: "计算几何", icon: "📐" },
    { name: "碰撞检测", icon: "💥" },
    { name: "运动学算法", icon: "🎯" },
    { name: "控制算法", icon: "🎮" },
    { name: "规划算法", icon: "🗺️" }
  ],
  en: [
    { name: "Computational Geometry", icon: "📐" },
    { name: "Collision Detection", icon: "💥" },
    { name: "Kinematics", icon: "🎯" },
    { name: "Control Algorithms", icon: "🎮" },
    { name: "Planning Algorithms", icon: "🗺️" }
  ]
}

// 开发经验（次要技能）
const secondarySkillsData = {
  zh: [
    { name: "Python", icon: "🐍" },
    { name: "人工智能", icon: "🤖" },
    { name: "嵌入式开发", icon: "🔌" },
    { name: "Android", icon: "📱" },
    { name: "PCB设计", icon: "🔧" }
  ],
  en: [
    { name: "Python", icon: "🐍" },
    { name: "AI", icon: "🤖" },
    { name: "Embedded Dev", icon: "🔌" },
    { name: "Android", icon: "📱" },
    { name: "PCB Design", icon: "🔧" }
  ]
}

// 开发平台
const platformsData = {
  zh: [
    { name: "Windows", icon: "🪟" },
    { name: "Linux", icon: "🐧" },
    { name: "Android", icon: "📱" }
  ],
  en: [
    { name: "Windows", icon: "🪟" },
    { name: "Linux", icon: "🐧" },
    { name: "Android", icon: "📱" }
  ]
}

export default function TechStack() {
  const { language, t } = useLanguage()
  
  const coreSkills = coreSkillsData[language]
  const algorithms = algorithmsData[language]
  const secondarySkills = secondarySkillsData[language]
  const platforms = platformsData[language]
  
  return (
    <section className="py-24 bg-white">
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
            <span className="text-gradient">{t.techStack.title}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'zh' ? '专注图形学与系统开发，跨平台全栈能力' : 'Focused on graphics and system development with cross-platform capabilities'}
          </p>
        </motion.div>

        {/* 核心专精 - 最突出的横向展示 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-2">
              <Cpu className="w-6 h-6 text-primary-600" />
              <h3 className="text-2xl font-bold text-gray-900">{t.techStack.coreExpertise}</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {coreSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.15 + index * 0.08 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-transparent transition-all duration-300 hover:-translate-y-2">
                  {/* 悬停时的渐变边框效果 */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm`}></div>
                  
                  <div className="text-center">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <div className="text-base font-bold text-gray-800">
                      {skill.name}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 三栏布局：算法能力 + 开发经验 + 开发平台 */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {/* 算法能力 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-orange-50 via-white to-orange-50 rounded-2xl p-6 border border-orange-100 shadow-md h-full">
              <div className="flex items-center mb-5">
                <Layers className="w-5 h-5 text-orange-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">{t.techStack.algorithmSkills}</h3>
              </div>
              
              <div className="space-y-3">
                {algorithms.map((algo, index) => (
                  <motion.div
                    key={algo.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.25 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center p-3 bg-white rounded-xl hover:shadow-md transition-all border border-orange-50 hover:border-orange-200 group"
                  >
                    <span className="text-2xl mr-3 group-hover:scale-110 transition-transform">{algo.icon}</span>
                    <span className="text-sm font-semibold text-gray-800">
                      {algo.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 开发经验 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-2xl p-6 border border-blue-100 shadow-md h-full">
              <div className="flex items-center mb-5">
                <Code2 className="w-5 h-5 text-blue-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">{t.techStack.devExperience}</h3>
              </div>
              
              <div className="space-y-3">
                {secondarySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center p-3 bg-white rounded-xl hover:shadow-md transition-all border border-blue-50 hover:border-blue-200 group"
                  >
                    <span className="text-2xl mr-3 group-hover:scale-110 transition-transform">{skill.icon}</span>
                    <span className="text-sm font-semibold text-gray-800">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 开发平台 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-lg h-full">
              <div className="flex items-center mb-5">
                <Monitor className="w-5 h-5 text-white mr-2" />
                <h3 className="text-xl font-bold text-white">{t.techStack.platforms}</h3>
              </div>
              
              <div className="space-y-3">
                {platforms.map((platform, index) => (
                  <motion.div
                    key={platform.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all border border-white/10 group"
                  >
                    <span className="text-2xl mr-3 group-hover:scale-110 transition-transform">{platform.icon}</span>
                    <span className="text-sm font-semibold text-white">
                      {platform.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
