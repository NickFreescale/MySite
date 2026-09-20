'use client'

import { useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { siteConfig } from '@/config/site'

export default function LocalizedPageTitle({ title }: { title: string }) {
  const { language, text } = useLanguage()

  useEffect(() => {
    const siteName = language === 'en' ? `${siteConfig.name}'s Portfolio` : `${siteConfig.name}的作品集`
    document.title = `${text(title)} | ${siteName}`
  }, [language, text, title])

  return null
}
