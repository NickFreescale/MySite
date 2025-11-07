import Hero from '@/components/home/Hero'
import TechStack from '@/components/home/TechStack'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import QuickContact from '@/components/home/QuickContact'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <TechStack />
      <FeaturedProjects />
      <QuickContact />
    </div>
  )
}




