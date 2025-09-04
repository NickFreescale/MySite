'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Mail, 
  Github, 
  Linkedin, 
  MessageCircle, 
  ArrowRight,
  Download,
  ExternalLink
} from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    title: '邮箱',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
    description: '商务合作或技术交流',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Github,
    title: 'GitHub',
    value: '@yourusername',
    href: 'https://github.com/yourusername',
    description: '查看我的开源项目',
    color: 'from-gray-700 to-gray-900'
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    value: '/in/yourprofile',
    href: 'https://linkedin.com/in/yourprofile',
    description: '职业社交网络',
    color: 'from-blue-600 to-blue-800'
  },
  {
    icon: MessageCircle,
    title: '微信',
    value: 'your-wechat-id',
    href: '#',
    description: '扫码添加微信好友',
    color: 'from-green-500 to-emerald-500'
  }
]

const quickLinks = [
  {
    title: '查看我的项目',
    description: '浏览我的作品集',
    href: '/projects',
    icon: ArrowRight
  },
  {
    title: '学习算法',
    description: '探索算法教程',
    href: '/algorithms',
    icon: ArrowRight
  },
  {
    title: '下载简历',
    description: 'PDF格式简历',
    href: '/resume.pdf',
    icon: Download,
    external: true
  }
]

export default function AboutContact() {
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
            让我们联系
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            有项目合作想法？想要技术交流？或者只是想打个招呼？
            我很乐意与你交流！
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* 联系方式 */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                联系方式
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon
                  return (
                    <motion.a
                      key={method.title}
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${method.color} group-hover:scale-110 transition-transform`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors mb-1">
                            {method.title}
                          </h4>
                          <p className="text-primary-600 font-medium mb-2">
                            {method.value}
                          </p>
                          <p className="text-sm text-gray-600">
                            {method.description}
                          </p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary-600 transition-colors" />
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* 可用性状态 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                当前状态
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-700">开放远程工作机会</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-700">项目合作咨询中</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">技术交流随时欢迎</span>
                </div>
              </div>
              <div className="mt-4 p-4 bg-primary-50 rounded-lg">
                <p className="text-sm text-primary-700">
                  <strong>响应时间:</strong> 通常在24小时内回复邮件和消息
                </p>
              </div>
            </motion.div>
          </div>

          {/* 快速链接 */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                快速导航
              </h3>
              <div className="space-y-4">
                {quickLinks.map((link, index) => {
                  const Icon = link.icon
                  return (
                    <motion.div
                      key={link.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {link.external ? (
                        <a
                          href={link.href}
                          download
                          className="group flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-primary-300 transition-all duration-300"
                        >
                          <div>
                            <h4 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                              {link.title}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {link.description}
                            </p>
                          </div>
                          <Icon className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="group flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-primary-300 transition-all duration-300"
                        >
                          <div>
                            <h4 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                              {link.title}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {link.description}
                            </p>
                          </div>
                          <Icon className="w-5 h-5 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all duration-200" />
                        </Link>
                      )}
                    </motion.div>
                  )
                })}
              </div>

              {/* 工作时间 */}
              <div className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl">
                <h4 className="font-semibold text-gray-900 mb-3">
                  工作时间
                </h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>周一 - 周五</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>周末</span>
                    <span>10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>时区</span>
                    <span>GMT+8</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  * 紧急项目可以灵活安排时间
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 底部行动号召 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">
              准备开始你的项目了吗？
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              无论是Web应用开发、算法优化，还是技术咨询，
              我都很乐意为你提供专业的帮助。让我们一起创造些精彩的东西！
            </p>
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center space-x-2 bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>立即联系我</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

