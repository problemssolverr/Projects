
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import PestControlSection from '../components/PestControl'
import PestCoverage from '../components/PestCoverage'
import QuoteForm from '../components/QuoteForm'
import SafeguardSection from '../components/SafeguardSection'
import TestimonialsSection from '../components/TestimonialsSection'

const Homes = () => {
  return (
    <div>
      <HeroSection/>
      <PestControlSection/>
      <TestimonialsSection/>
      <SafeguardSection/>
      <PestCoverage/>
      <QuoteForm/>
    </div>
  )
}

export default Homes