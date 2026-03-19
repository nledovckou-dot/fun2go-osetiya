import Header from './components/Header'
import Hero from './components/Hero'
import ForWhom from './components/ForWhom'
import Impressions from './components/Impressions'
import PhotoGallery from './components/PhotoGallery'
import Program from './components/Program'
import WhyUs from './components/WhyUs'
import Included from './components/Included'
import Booking from './components/Booking'
import Reviews from './components/Reviews'
import FinalCTA from './components/FinalCTA'
import LeadForm from './components/LeadForm'
import Footer from './components/Footer'
import StickyCTA from './components/StickyCTA'

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <ForWhom />
        <Impressions />
        <PhotoGallery />
        <Reviews />
        <Program />
        <WhyUs />
        <Included />
        <Booking />
        <FinalCTA />
        <LeadForm />
      </main>

      <Footer />
      <StickyCTA />
    </>
  )
}
