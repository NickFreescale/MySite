import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { algorithms } from '@/config/site'
import AlgorithmDetail from '@/components/algorithms/AlgorithmDetail'
import fs from 'fs'
import path from 'path'
import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'
import LocalizedPageTitle from '@/components/layout/LocalizedPageTitle'

// 读取并处理Markdown文件
async function getMarkdownContent(filename: string): Promise<string> {
  try {
    // filename 是相对于 public 目录的路径
    const filePath = path.join(process.cwd(), 'public', filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    
    // 使用 remark 将 markdown 转换为 HTML
    const processedContent = await remark()
      .use(remarkGfm)
      .use(html, { sanitize: false })
      .process(fileContents)
    
    return processedContent.toString()
  } catch (error) {
    console.error('Error reading markdown file:', error)
    return ''
  }
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const algorithm = algorithms.find(a => a.id.toString() === params.id)
  
  if (!algorithm) {
    return {
      title: '算法未找到',
    }
  }

  return {
    title: algorithm.title,
    description: algorithm.description,
  }
}

export default async function AlgorithmDetailPage({ params }: { params: { id: string } }) {
  const algorithm = algorithms.find(item => item.id.toString() === params.id)
  if (!algorithm) notFound()
  const markdown = { zh: '', en: '' }
  if (algorithm.contentFile) {
    [markdown.zh, markdown.en] = await Promise.all([
      getMarkdownContent(algorithm.contentFile),
      getMarkdownContent(algorithm.contentFileEn),
    ])
  }
  return <>
    <LocalizedPageTitle title={algorithm.title} />
    <AlgorithmDetail algorithm={algorithm} markdown={markdown} />
  </>
}
