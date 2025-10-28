'use client'

import { motion } from 'framer-motion'
import { Mail, MessageCircle, Github, Linkedin, MapPin, Phone } from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    title: '邮箱联系',
    description: '商务合作或技术交流',
    contact: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Github,
    title: 'GitHub',
    description: '查看我的开源项目',
    contact: '@yourusername',
    href: 'https://github.com/yourusername',
    color: 'from-gray-700 to-gray-900'
  },
  {
    icon: MessageCircle,
    title: '微信',
    description: '扫码添加微信好友',
    contact: 'your-wechat-id',
    href: '#',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    description: '职业社交网络',
    contact: '/in/yourprofile',
    href: 'https://linkedin.com/in/yourprofile',
    color: 'from-blue-600 to-blue-800'
  }
]

export default function ContactSection() {
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
            联系我
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            有项目合作想法？对我的作品感兴趣？或者只是想聊聊技术？随时欢迎联系我！
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 联系方式 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              联系方式
            </h3>
            
            <div className="space-y-6">
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
                    className="flex items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
                  >
                    <div className={`p-4 rounded-lg bg-gradient-to-r ${method.color} mr-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {method.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-1">
                        {method.description}
                      </p>
                      <p className="text-primary-600 font-medium">
                        {method.contact}
                      </p>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* 额外信息 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-primary-50 rounded-xl"
            >
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    位置信息
                  </h4>
                  <p className="text-gray-600">
                    📍 中国，北京/上海/深圳
                    <br />
                    🌏 支持远程工作
                    <br />
                    ⏰ 工作时间：周一至周五 9:00-18:00 (GMT+8)
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* 快速联系表单 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-sm p-8"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              快速留言
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    姓名
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="您的姓名"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    邮箱
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  主题
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="邮件主题"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  留言内容
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                  placeholder="请描述您的项目需求或想要交流的内容..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary inline-flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>发送消息</span>
              </button>
            </form>
            
            <p className="text-sm text-gray-500 mt-4 text-center">
              通常在24小时内回复 📧
            </p>
          </motion.div>
        </div>

        {/* 响应时间说明 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-8 bg-white rounded-full px-8 py-4 shadow-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">现在在线</span>
            </div>
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-4 h-4 text-primary-600" />
              <span className="text-sm text-gray-600">平均回复时间: 2-4小时</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}




