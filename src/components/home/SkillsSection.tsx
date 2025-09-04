'use client'

import { motion } from 'framer-motion'
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react'

const skillCategories = [
  {
    title: '前端开发',
    icon: Globe,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React/Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Vue.js', level: 80 },
      { name: 'Tailwind CSS', level: 95 }
    ]
  },
  {
    title: '后端开发',
    icon: Server,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Express.js', level: 85 },
      { name: 'RESTful API', level: 90 }
    ]
  },
  {
    title: '数据库',
    icon: Database,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'Redis', level: 75 },
      { name: 'Firebase', level: 80 }
    ]
  },
  {
    title: '移动开发',
    icon: Smartphone,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'React Native', level: 75 },
      { name: 'Flutter', level: 70 },
      { name: 'PWA', level: 85 },
      { name: 'Responsive Design', level: 95 }
    ]
  },
  {
    title: '开发工具',
    icon: Code,
    color: 'from-indigo-500 to-purple-500',
    skills: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'Vercel/Netlify', level: 85 },
      { name: 'VS Code', level: 95 }
    ]
  },
  {
    title: 'UI/UX设计',
    icon: Palette,
    color: 'from-pink-500 to-rose-500',
    skills: [
      { name: 'Figma', level: 80 },
      { name: 'Adobe XD', level: 75 },
      { name: '用户体验设计', level: 85 },
      { name: '原型设计', level: 80 }
    ]
  }
]

const SkillBar = ({ skill, delay }: { skill: { name: string; level: number }, delay: number }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
        <span className="text-sm text-gray-500">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-500 to-blue-500 h-2 rounded-full"
        />
      </div>
    </div>
  )
}

export default function SkillsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题区域 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            技能专长
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            从前端到后端，从设计到部署，我在全栈开发的各个环节都有丰富经验
          </p>
        </motion.div>

        {/* 技能网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                {/* 分类标题 */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                {/* 技能列表 */}
                <div>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      delay={categoryIndex * 0.1 + skillIndex * 0.1}
                    />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* 额外信息 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              持续学习中的技术
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['GraphQL', 'Kubernetes', 'Machine Learning', 'Blockchain', 'WebAssembly', 'Rust'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-600 mt-4">
              技术日新月异，我始终保持学习的热情，不断探索新的技术和工具
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

