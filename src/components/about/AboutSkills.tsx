'use client'

import { motion } from 'framer-motion'
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Server, 
  Palette,
  GitBranch,
  Cloud
} from 'lucide-react'

const skillCategories = [
  {
    title: '前端技术',
    icon: Globe,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React', level: 95, experience: '2年' },
      { name: 'Next.js', level: 90, experience: '1.5年' },
      { name: 'TypeScript', level: 85, experience: '2年' },
      { name: 'Vue.js', level: 80, experience: '1年' },
      { name: 'Tailwind CSS', level: 95, experience: '2年' }
    ]
  },
  {
    title: '后端技术',
    icon: Server,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Node.js', level: 85, experience: '2年' },
      { name: 'Python', level: 80, experience: '1.5年' },
      { name: 'Express.js', level: 85, experience: '1.5年' },
      { name: 'RESTful API', level: 90, experience: '2年' }
    ]
  },
  {
    title: '数据库',
    icon: Database,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'MongoDB', level: 85, experience: '1.5年' },
      { name: 'PostgreSQL', level: 80, experience: '1年' },
      { name: 'Redis', level: 75, experience: '1年' },
      { name: 'Firebase', level: 80, experience: '1年' }
    ]
  },
  {
    title: '移动开发',
    icon: Smartphone,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'React Native', level: 75, experience: '1年' },
      { name: 'Flutter', level: 70, experience: '6个月' },
      { name: 'PWA', level: 85, experience: '1年' }
    ]
  },
  {
    title: '开发工具',
    icon: GitBranch,
    color: 'from-indigo-500 to-purple-500',
    skills: [
      { name: 'Git/GitHub', level: 90, experience: '2年' },
      { name: 'Docker', level: 75, experience: '1年' },
      { name: 'VS Code', level: 95, experience: '2年' },
      { name: 'Webpack', level: 80, experience: '1.5年' }
    ]
  },
  {
    title: '云服务',
    icon: Cloud,
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'Vercel', level: 90, experience: '1.5年' },
      { name: 'Netlify', level: 85, experience: '1年' },
      { name: 'AWS', level: 70, experience: '6个月' },
      { name: 'Firebase', level: 80, experience: '1年' }
    ]
  }
]

const SkillBar = ({ skill, delay }: { skill: { name: string; level: number; experience: string }, delay: number }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-500">{skill.experience}</span>
          <span className="text-sm text-gray-500">{skill.level}%</span>
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-500 to-blue-500 h-2.5 rounded-full relative"
        >
          <div className="absolute right-0 top-0 w-1 h-full bg-white rounded-full opacity-50"></div>
        </motion.div>
      </div>
    </div>
  )
}

export default function AboutSkills() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题 */}
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
            经过不断的学习和实践，我在以下技术领域积累了丰富的经验
          </p>
        </motion.div>

        {/* 技能网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
              >
                {/* 分类标题 */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
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

        {/* 认证和成就 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            认证与成就
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="text-3xl mb-2">🏆</div>
              <h4 className="font-medium text-gray-900 mb-1">技术竞赛</h4>
              <p className="text-sm text-gray-600">算法竞赛二等奖</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="text-3xl mb-2">📜</div>
              <h4 className="font-medium text-gray-900 mb-1">专业认证</h4>
              <p className="text-sm text-gray-600">React开发者认证</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="text-3xl mb-2">⭐</div>
              <h4 className="font-medium text-gray-900 mb-1">开源贡献</h4>
              <p className="text-sm text-gray-600">50+ GitHub Stars</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="text-3xl mb-2">📚</div>
              <h4 className="font-medium text-gray-900 mb-1">技术分享</h4>
              <p className="text-sm text-gray-600">25+ 算法教程</p>
            </div>
          </div>
        </motion.div>

        {/* 学习计划 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            2024年学习计划
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'GraphQL', 
              'Kubernetes', 
              'Machine Learning', 
              'Blockchain', 
              'WebAssembly', 
              'Rust',
              'Three.js',
              'Microservices'
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium hover:bg-primary-200 transition-colors cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            技术永无止境，我始终保持学习的热情，不断探索新的技术领域和解决方案
          </p>
        </motion.div>
      </div>
    </section>
  )
}





