import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Showcase from '../components/Showcase'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-dark font-sora overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
