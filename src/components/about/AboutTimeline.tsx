'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building, GraduationCap, Briefcase, Award } from 'lucide-react'
import { timeline } from '@/config/site'
import { useLanguage } from '@/contexts/LanguageContext'

const getIcon = (type: string) => {
  switch (type) {
    case 'education':
      return GraduationCap
    case 'work':
      return Briefcase
    case 'achievement':
      return Award
    default:
      return Building
  }
}

const getColor = (type: string) => {
  switch (type) {
    case 'education':
      return 'from-blue-500 to-cyan-500'
    case 'work':
      return 'from-purple-500 to-pink-500'
    case 'achievement':
      return 'from-yellow-500 to-orange-500'
    default:
      return 'from-green-500 to-emerald-500'
  }
}

const typeLabelsZh = {
  education: '教育经历',
  work: '工作经历',
  achievement: '荣誉成就'
}

const typeLabelsEn = {
  education: 'Education',
  work: 'Work Experience',
  achievement: 'Achievement'
}

export default function AboutTimeline() {
  const { language } = useLanguage()
  const typeLabels = language === 'zh' ? typeLabelsZh : typeLabelsEn
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'zh' ? '我的经历' : 'My Journey'}
          </h2>
          <p className="text-xl text-gray-600">
            {language === 'zh' ? '从学生到专业工程师的成长历程' : 'From student to professional engineer'}
          </p>
        </motion.div>

        {/* 时间线 */}
        <div className="relative">
          {/* 中央线条 */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-200"></div>

          {/* 时间线事件 */}
          <div className="space-y-12">
            {timeline.map((event, index) => {
              const Icon = getIcon(event.type)
              const color = getColor(event.type)
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* 时间线节点 */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${color} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* 内容卡片 */}
                  <div className={`ml-20 md:ml-0 md:w-5/12 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                      {/* 类型标签 */}
                      <div className="mb-3">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${color} text-white`}>
                          {typeLabels[event.type as keyof typeof typeLabels]}
                        </span>
                      </div>

                      {/* 标题和机构 */}
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {event.title}
                      </h3>
                      <div className="flex items-center text-primary-600 font-medium mb-3">
                        <Building className="w-4 h-4 mr-2" />
                        <span>{event.organization}</span>
                      </div>

                      {/* 时间和地点 */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{event.period}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{event.location}</span>
                        </div>
                      </div>

                      {/* 描述 */}
                      <p className="text-gray-600 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* 空白区域（保持布局平衡） */}
                  <div className="hidden md:block md:w-5/12"></div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* 未来规划 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {language === 'zh' ? '未来规划' : 'Future Plans'}
            </h3>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              {language === 'zh' 
                ? '继续深耕计算机图形学和算法开发领域，探索更多工业软件的应用场景。希望能够开发出更多有价值的技术产品，用专业技能解决实际问题。'
                : 'Continue to deepen my expertise in computer graphics and algorithm development, exploring more application scenarios in industrial software. Hope to develop more valuable technical products and solve real-world problems with professional skills.'}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium">
                {language === 'zh' ? '技术专家' : 'Technical Expert'}
              </span>
              <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium">
                {language === 'zh' ? '算法优化' : 'Algorithm Optimization'}
              </span>
              <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium">
                {language === 'zh' ? '工业软件' : 'Industrial Software'}
              </span>
              <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium">
                {language === 'zh' ? '持续学习' : 'Continuous Learning'}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}







