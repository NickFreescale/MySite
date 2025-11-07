import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Providers } from '@/components/providers/Providers'

export const metadata: Metadata = {
  title: {
    default: '我的作品集 | 项目展示与算法分享',
    template: '%s | 我的作品集'
  },
  description: '分享我的编程项目、算法讲解和技术心得。包含Web应用、算法可视化、技术文章等内容。',
  keywords: ['作品集', '项目展示', '算法', '编程', 'Web开发', '前端', '后端'],
  authors: [{ name: '你的名字' }],
  creator: '你的名字',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://yourname.vercel.app',
    title: '我的作品集 | 项目展示与算法分享',
    description: '分享我的编程项目、算法讲解和技术心得',
    siteName: '我的作品集',
  },
  twitter: {
    card: 'summary_large_image',
    title: '我的作品集 | 项目展示与算法分享',
    description: '分享我的编程项目、算法讲解和技术心得',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen flex flex-col">
        <Providers>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}




