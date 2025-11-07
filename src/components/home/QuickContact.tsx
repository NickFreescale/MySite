'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, Linkedin, ArrowRight, MessageCircle } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { useLanguage } from '@/contexts/LanguageContext'

export default function QuickContact() {
  const { language, t } = useLanguage()
  
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-gradient">{t.contact.title}</span>
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>

          {/* 联系按钮 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href={`mailto:${siteConfig.email}`}
              className="btn-primary inline-flex items-center space-x-2 group px-8 py-4"
            >
              <Mail className="w-5 h-5" />
              <span>{t.contact.sendMessage}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <Link
              href="/about#contact"
              className="btn-secondary inline-flex items-center space-x-2 px-8 py-4"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{language === 'zh' ? '更多联系方式' : 'More Contact Options'}</span>
            </Link>
          </div>

          {/* 社交链接 */}
          <div className="flex justify-center space-x-6">
            <a
              href={`mailto:${siteConfig.email}`}
              className="p-3 bg-white text-gray-600 hover:text-primary-600 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            {siteConfig.linkedin && (
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white text-gray-600 hover:text-blue-600 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            )}
          </div>

          {/* 响应时间提示 */}
          <p className="text-sm text-gray-500 mt-8">
            {language === 'zh' ? '⚡ 通常在24小时内回复' : '⚡ Usually reply within 24 hours'}
          </p>
        </motion.div>
      </div>
    </section>
  )
}







