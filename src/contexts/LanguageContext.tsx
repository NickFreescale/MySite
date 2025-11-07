'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { zh, Translations } from '@/locales/zh'
import { en } from '@/locales/en'

type Language = 'zh' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('zh')
  const [translations, setTranslations] = useState<Translations>(zh)

  // 初始化时从 localStorage 读取语言设置
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'zh' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage)
      setTranslations(savedLanguage === 'zh' ? zh : en)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    setTranslations(lang === 'zh' ? zh : en)
    localStorage.setItem('language', lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

