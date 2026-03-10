import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import ForWhom from './components/ForWhom'
import Impressions from './components/Impressions'
import PhotoGallery from './components/PhotoGallery'
import Program from './components/Program'
import WhyUs from './components/WhyUs'
import Included from './components/Included'
import Booking from './components/Booking'
import FinalCTA from './components/FinalCTA'
import LeadForm from './components/LeadForm'
import Footer from './components/Footer'
import StickyCTA from './components/StickyCTA'

function Preloader({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish()
    }, 2500)

    const handleLoad = () => {
      setTimeout(onFinish, 500)
    }

    if (document.readyState === 'complete') {
      setTimeout(onFinish, 500)
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      clearTimeout(timer)
      window.removeEventListener('load', handleLoad)
    }
  }, [onFinish])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-bg flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src="https://static.tildacdn.com/tild6265-3533-4936-b031-616437356530/logo_footer.svg"
        alt="Fun2Go"
        className="w-32 h-auto"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      <Header />

      <main>
        <Hero />
        <ForWhom />
        <Impressions />
        <PhotoGallery />
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
