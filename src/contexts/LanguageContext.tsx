'use client'

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react'
import { zh, Translations } from '@/locales/zh'
import { en } from '@/locales/en'
import { Language, translateContent } from '@/locales/content'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
  text: (source: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')
  const translations = language === 'zh' ? zh : en
  const text = useCallback((source: string) => translateContent(source, language), [language])

  // 初始化时从 localStorage 读取语言设置
  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem('language')
      if (savedLanguage === 'zh' || savedLanguage === 'en') setLanguageState(savedLanguage)
    } catch {
      // Language switching remains available when browser storage is disabled.
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN'
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    try {
      localStorage.setItem('language', lang)
    } catch {
      // Saving the preference is optional; the current page still updates.
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations, text }}>
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













