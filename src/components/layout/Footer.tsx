import Link from 'next/link'
import { Github, Mail, Linkedin, Heart, ExternalLink } from 'lucide-react'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/yourusername',
    icon: Github,
    color: 'hover:text-gray-900'
  },
  {
    name: 'Email',
    href: 'mailto:your.email@example.com',
    icon: Mail,
    color: 'hover:text-blue-600'
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/yourusername',
    icon: Linkedin,
    color: 'hover:text-blue-700'
  }
]

const quickLinks = [
  { name: '首页', href: '/' },
  { name: '项目展示', href: '/projects' },
  { name: '算法讲解', href: '/algorithms' },
  { name: '关于我', href: '/about' }
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

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
              <span className="text-xl font-bold text-gray-900">我的作品集</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              分享我的编程项目、算法讲解和技术心得。持续学习，持续创造，用代码改变世界。
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((link) => {
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
              快速导航
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
              联系方式
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a 
                  href="mailto:your.email@example.com"
                  className="hover:text-primary-600 transition-colors duration-200"
                >
                  your.email@example.com
                </a>
              </li>
              <li>位置：中国</li>
              <li>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-600 transition-colors duration-200 inline-flex items-center space-x-1"
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <span>© {currentYear} 我的作品集. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>using Next.js & Tailwind CSS</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <span>Powered by Vercel</span>
              <Link 
                href="/sitemap.xml"
                className="hover:text-primary-600 transition-colors duration-200"
              >
                网站地图
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

