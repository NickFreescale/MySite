'use client'

import { motion } from 'framer-motion'
import { Heart, Lightbulb, Target, Rocket } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function AboutStory() {
  const { language, t } = useLanguage()
  
  const values = [
    {
      icon: Heart,
      title: t.about.values.passion.title,
      description: t.about.values.passion.description,
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Lightbulb,
      title: t.about.values.learning.title,
      description: t.about.values.learning.description,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Target,
      title: t.about.values.excellence.title,
      description: t.about.values.excellence.description,
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Rocket,
      title: t.about.values.innovation.title,
      description: t.about.values.innovation.description,
      color: 'from-blue-500 to-purple-500'
    }
  ]
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 职业定位 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {t.about.career.title}
          </h2>
          <div className="max-w-4xl mx-auto">
            {/* 职业目标 */}
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                {t.about.career.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* 价值观和理念 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            {t.about.values.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${value.color} flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* 兴趣爱好 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            {t.about.beyondWork.title}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">☕</div>
              <div className="text-sm font-medium text-gray-700">{t.about.beyondWork.coffee}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">📚</div>
              <div className="text-sm font-medium text-gray-700">{t.about.beyondWork.reading}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🎵</div>
              <div className="text-sm font-medium text-gray-700">{t.about.beyondWork.music}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🏃</div>
              <div className="text-sm font-medium text-gray-700">{t.about.beyondWork.fitness}</div>
            </div>
          </div>
          <p className="text-gray-600 mt-6">
            {t.about.beyondWork.inspiration}
          </p>
        </motion.div>
      </div>
    </section>
  )
}






