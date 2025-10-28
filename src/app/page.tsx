import Hero from '@/components/home/Hero'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import SkillsSection from '@/components/home/SkillsSection'
import RecentAlgorithms from '@/components/home/RecentAlgorithms'
import ContactSection from '@/components/home/ContactSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedProjects />
      <SkillsSection />
      <RecentAlgorithms />
      <ContactSection />
    </div>
  )
}




