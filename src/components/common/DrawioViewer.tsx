'use client'

import React from 'react'
import dynamic from 'next/dynamic'

// 动态导入 react-drawio，禁用 SSR
const DrawioEmbed = dynamic(
  () => import('react-drawio').then((mod) => mod.DrawioEmbed),
  { ssr: false }
)

interface DrawioViewerProps {
  /** drawio 文件的 URL 路径 */
  fileUrl: string
  /** 容器类名 */
  className?: string
  /** 是否显示工具栏 */
  toolbar?: boolean
  /** 是否只读模式 */
  readOnly?: boolean
  /** 高度 */
  height?: string
}

/**
 * Drawio 文件查看器组件
 * 用于在网页中显示 .drawio 文件，保持矢量清晰度
 */
export default function DrawioViewer({
  fileUrl,
  className = '',
  toolbar = false,
  readOnly = true,
  height = '600px'
}: DrawioViewerProps) {
  // 构建 draw.io viewer 的 URL
  const viewerUrl = `https://viewer.diagrams.net/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&page-id=0${
    toolbar ? '&toolbar=1' : ''
  }${readOnly ? '&readonly=1' : ''}&url=${encodeURIComponent(fileUrl)}`

  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`} style={{ height }}>
      <iframe
        src={viewerUrl}
        className="w-full h-full border-0"
        title="Drawio Diagram Viewer"
        style={{
          border: 'none',
          width: '100%',
          height: '100%'
        }}
      />
    </div>
  )
}




