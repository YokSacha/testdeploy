import Navbar    from '../components/Navbar'
import Hero       from '../components/Hero'
import Features   from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Showcase   from '../components/Showcase'
import Reviews    from '../components/Reviews'
import Pricing    from '../components/Pricing'
import Community  from '../components/Community'
import OurStory   from '../components/OurStory'
import FAQ        from '../components/FAQ'
import Contact    from '../components/Contact'
import CTA        from '../components/CTA'
import Footer     from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-dark font-sora overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Showcase />
        <Reviews />
        <Pricing />
        <Community />
        <OurStory />
        <FAQ />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
