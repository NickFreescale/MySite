'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Mail, 
  MessageCircle, 
  ArrowRight,
  Download,
  ExternalLink
} from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function AboutContact() {
  const { language, t } = useLanguage()
  
  const contactMethods = [
    {
      icon: Mail,
      title: t.about.contact.email,
      value: '19854814168@163.com',
      href: 'mailto:19854814168@163.com',
      description: t.about.contact.businessCooperation,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MessageCircle,
      title: t.about.contact.wechat,
      value: '19854814168',
      href: '#',
      description: t.about.contact.addWechat,
      color: 'from-green-500 to-emerald-500'
    }
  ]

  const quickLinks = [
    {
      title: t.about.contact.viewProjects,
      description: t.about.contact.browsePortfolio,
      href: '/projects',
      icon: ArrowRight
    },
    {
      title: t.about.contact.learnAlgorithms,
      description: t.about.contact.exploreAlgorithms,
      href: '/algorithms',
      icon: ArrowRight
    },
    {
      title: t.about.contact.downloadResume,
      description: t.about.contact.resumePdf,
      href: '/resume.pdf',
      icon: Download,
      external: true
    }
  ]
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
            {t.about.contact.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.about.contact.subtitle}
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
                {t.about.contact.contactMethods}
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
                {t.about.contact.currentStatus}
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-700">{t.about.contact.remoteWork}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-700">{t.about.contact.projectConsulting}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">{t.about.contact.techExchange}</span>
                </div>
              </div>
              <div className="mt-4 p-4 bg-primary-50 rounded-lg">
                <p className="text-sm text-primary-700">
                  <strong>{t.about.contact.responseTime}</strong> {t.about.contact.responseDetail}
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
                {t.about.contact.quickNav}
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
                  {t.about.contact.workingHours}
                </h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>{t.about.contact.weekdays}</span>
                    <span>{t.about.contact.weekdaysTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.about.contact.weekend}</span>
                    <span>{t.about.contact.weekendTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.about.contact.timezone}</span>
                    <span>{t.about.contact.timezoneValue}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  {t.about.contact.urgentNote}
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
              {t.about.contact.readyToStart}
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              {t.about.contact.ctaDescription}
            </p>
            <a
              href="mailto:19854814168@163.com"
              className="inline-flex items-center space-x-2 bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>{t.about.contact.contactNow}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}








