'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building, GraduationCap, Briefcase, Award } from 'lucide-react'

const timelineEvents = [
  {
    id: 1,
    type: 'education',
    title: '计算机科学与技术学士',
    organization: '北京理工大学',
    location: '北京',
    period: '2019 - 2023',
    description: '主修计算机科学与技术，专注于软件工程和算法设计。参与多个校园项目，获得优秀毕业生称号。',
    icon: GraduationCap,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    type: 'internship',
    title: '前端开发实习生',
    organization: '腾讯科技',
    location: '深圳',
    period: '2022.06 - 2022.09',
    description: '参与微信小程序开发，负责用户界面设计和交互逻辑实现。学习了React和现代前端开发工作流。',
    icon: Briefcase,
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 3,
    type: 'work',
    title: '全栈开发工程师',
    organization: '字节跳动',
    location: '北京',
    period: '2023.07 - 至今',
    description: '负责公司内部管理系统的全栈开发，使用Next.js和Node.js构建高性能Web应用。带领小团队完成多个重要项目。',
    icon: Building,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 4,
    type: 'achievement',
    title: '技术博客获奖',
    organization: '掘金社区',
    location: '线上',
    period: '2023.12',
    description: '算法系列文章获得掘金年度优秀技术文章奖，累计阅读量超过10万，帮助众多开发者理解复杂算法。',
    icon: Award,
    color: 'from-yellow-500 to-orange-500'
  }
]

const typeLabels = {
  education: '教育经历',
  internship: '实习经历',
  work: '工作经历',
  achievement: '荣誉成就'
}

export default function AboutTimeline() {
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
            我的经历
          </h2>
          <p className="text-xl text-gray-600">
            从学生到专业开发者的成长历程
          </p>
        </motion.div>

        {/* 时间线 */}
        <div className="relative">
          {/* 中央线条 */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-200"></div>

          {/* 时间线事件 */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon
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
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* 内容卡片 */}
                  <div className={`ml-20 md:ml-0 md:w-5/12 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                      {/* 类型标签 */}
                      <div className="mb-3">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${event.color} text-white`}>
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
              未来规划
            </h3>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              继续深耕全栈开发技术，探索人工智能和Web3.0领域。
              希望能够创立自己的技术团队，开发出真正有价值的产品，
              同时继续通过技术分享帮助更多的开发者成长。
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium">
                技术专家
              </span>
              <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium">
                团队领导
              </span>
              <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium">
                产品创新
              </span>
              <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium">
                知识分享
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

