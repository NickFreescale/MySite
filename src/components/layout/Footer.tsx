'use client'

import Link from 'next/link'
import { Mail, Linkedin, Heart, ExternalLink } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { language, t } = useLanguage()
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    {
      name: 'Email',
      href: `mailto:${siteConfig.email}`,
      icon: Mail,
      color: 'hover:text-blue-600'
    },
    {
      name: 'LinkedIn',
      href: siteConfig.linkedin,
      icon: Linkedin,
      color: 'hover:text-blue-700'
    }
  ]
  
  const quickLinks = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.projects, href: '/projects' },
    { name: t.nav.blog, href: '/algorithms' },
    { name: t.nav.about, href: '/about' }
  ]
  
  const visibleSocialLinks = socialLinks.filter(link => !!link.href)

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-primary-600 rounded-lg">
                <span className="text-white font-bold text-lg">&lt;/&gt;</span>
              </div>
              <span className="text-xl font-bold text-gray-900">{language === 'zh' ? `${siteConfig.name}的作品集` : `${siteConfig.name}'s Portfolio`}</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              {language === 'zh' 
                ? '分享我的编程项目、算法讲解和技术心得。持续学习，持续创造，用代码改变世界。' 
                : 'Sharing my programming projects, algorithm tutorials, and technical insights. Continuous learning, continuous creation.'}
            </p>
            <div className="flex items-center space-x-4">
              {visibleSocialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 text-gray-500 ${link.color} transition-colors duration-200 hover:bg-white rounded-lg`}
                    aria-label={link.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              {language === 'zh' ? '快速导航' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary-600 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              {language === 'zh' ? '联系方式' : 'Contact'}
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a 
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-primary-600 transition-colors duration-200"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>{language === 'zh' ? '位置' : 'Location'}: {language === 'zh' ? siteConfig.location : 'China'}</li>
              {siteConfig.linkedin && (
                <li>
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-600 transition-colors duration-200 inline-flex items-center space-x-1"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <span>© {currentYear} {language === 'zh' ? `${siteConfig.name}的作品集` : `${siteConfig.name}'s Portfolio`}. {language === 'zh' ? '使用' : 'Made with'}</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>{language === 'zh' ? '构建，采用' : 'using'} Next.js & Tailwind CSS</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <span>Powered by Vercel</span>
              <Link 
                href="/sitemap.xml"
                className="hover:text-primary-600 transition-colors duration-200"
              >
                {language === 'zh' ? '网站地图' : 'Sitemap'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}



