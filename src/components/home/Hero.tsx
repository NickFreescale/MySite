'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Download, Mail } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
  const { language, t } = useLanguage()
  
  return (
    <section className="relative py-20 md:py-32 gradient-bg overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* 头像/Logo区域 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="w-28 h-28 mx-auto bg-gradient-to-br from-primary-500 to-blue-600 rounded-full flex items-center justify-center mb-4 shadow-xl">
              <span className="text-3xl font-bold text-white">&lt;/&gt;</span>
            </div>
          </motion.div>

          {/* 主标题 - 电梯演讲式 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            <span className="text-gray-900">{t.home.greeting}</span>
            <span className="text-gradient ml-3">{language === 'zh' ? siteConfig.name : 'Bill'}</span>
          </motion.h1>

          {/* 副标题 - 一句话定位 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl font-semibold text-gray-700 mb-3"
          >
            {language === 'zh' ? siteConfig.title : 'Graphics Algorithm Engineer'}
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base md:text-lg text-gray-600 mb-6 max-w-3xl mx-auto"
          >
            {language === 'zh' 
              ? siteConfig.description 
              : 'Programming in C++ since middle school, focusing on algorithms and system design across graphics, control algorithms, and embedded applications.'
            }
          </motion.p>

          {/* 获奖经历 - 紧凑展示 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-8 max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-full border border-yellow-200 shadow-sm hover:shadow-md transition-all">
              <span className="text-xl mr-2">🥇</span>
              <span className="text-sm font-semibold text-gray-800">{t.home.awards.first}</span>
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-50 to-slate-50 rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-all">
              <span className="text-xl mr-2">🥈</span>
              <span className="text-sm font-semibold text-gray-800">{t.home.awards.second}</span>
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-full border border-amber-200 shadow-sm hover:shadow-md transition-all">
              <span className="text-xl mr-2">🏆</span>
              <span className="text-sm font-semibold text-gray-800">{t.home.awards.provincial}</span>
            </div>
          </motion.div>


          {/* 哲理名言 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <blockquote className="relative">
              <div className="absolute -left-4 top-0 text-6xl text-primary-200 font-serif leading-none">"</div>
              <p className="text-lg md:text-xl text-gray-700 italic font-light leading-relaxed px-8 py-4">
                {language === 'zh' ? (
                  <>
                    人生是一道<span className="font-mono font-semibold italic text-primary-600">NP-hard</span>，
                    我们难以找到全局最优解，但只要方向正确，每一步都有意义。
                  </>
                ) : (
                  <>
                    Life is an <span className="font-mono font-semibold italic text-primary-600">NP-hard</span> problem. 
                    We may never find the global optimum, but as long as the direction is right, every step counts.
                  </>
                )}
              </p>
              <div className="absolute -right-4 bottom-0 text-6xl text-primary-200 font-serif leading-none">"</div>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  )
}



