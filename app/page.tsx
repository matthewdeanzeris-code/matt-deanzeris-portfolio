import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ProjectsSection } from '@/components/projects-section'
import { ExperienceSection } from '@/components/experience-section'
import { AboutSection } from '@/components/about-section'
import { ContactSection, SiteFooter } from '@/components/contact-section'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
