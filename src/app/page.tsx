import Header from '@/components/Header'
import Hero from '@/components/Hero'
import PainPoints from '@/components/PainPoints'
import SolutionOverview from '@/components/SolutionOverview'
import MentorSection from '@/components/MentorSection'
import VideoSection from '@/components/VideoSection'
import LeadMagnet from '@/components/LeadMagnet'
import Testimonials from '@/components/Testimonials'
import CourseBreakdown from '@/components/CourseBreakdown'
import Certification from '@/components/Certification'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import ScrollAnimations from '@/components/ScrollAnimations'

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] text-white antialiased selection:bg-[#22d3ee]/20 selection:text-white">
      {/* Background Accents */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-32 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#22d3ee]/10 to-[#10b981]/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-32 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-[#10b981]/10 to-[#22d3ee]/10 blur-3xl"></div>
        <div className="absolute inset-0 opacity-[0.08] [background:radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      <Header />
      <Hero />
      <PainPoints />
      <SolutionOverview />
      <MentorSection />
      <VideoSection />
      <LeadMagnet />
      <Testimonials />
      <CourseBreakdown />
      <Certification />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
      <ScrollAnimations />
    </div>
  )
}