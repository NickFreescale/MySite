import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProjectDetail from '@/components/projects/ProjectDetail'
import { projects } from '@/config/site'

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find(p => p.id === parseInt(params.id))
  
  if (!project) {
    return {
      title: '项目未找到'
    }
  }

  return {
    title: project.title,
    description: project.description,
    keywords: project.technologies
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }))
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find(p => p.id === parseInt(params.id))

  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}
















