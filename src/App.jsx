import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import DehydrationCycle from './components/DehydrationCycle.jsx'
import FormulaSection from './components/FormulaSection.jsx'
import AudienceSection from './components/AudienceSection.jsx'
import ScienceCarousel from './components/ScienceCarousel.jsx'
import ComparisonSection from './components/ComparisonSection.jsx'
import OfferSection from './components/OfferSection.jsx'
import EventProofSection from './components/EventProofSection.jsx'
import TestimonialsSection from './components/TestimonialsSection.jsx'
import HowToUseSection from './components/HowToUseSection.jsx'
import SupportSection from './components/SupportSection.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <main id="top" className="min-h-screen bg-[#f7f7f8] text-zinc-950">
      <Header />
      <HeroSection />
      <DehydrationCycle />
      <FormulaSection />
      <AudienceSection />
      <ScienceCarousel />
      <ComparisonSection />
      <OfferSection />
      <EventProofSection />
      <TestimonialsSection />
      <HowToUseSection />
      <SupportSection />
      <Footer />
    </main>
  )
}

export default App