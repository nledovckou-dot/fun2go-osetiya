import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './ui/Button'

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight

      // Show after scrolling past hero
      const pastHero = scrollY > viewportHeight

      const bookingEl = document.querySelector('#lead-form')
      let inBookingZone = false
      if (bookingEl) {
        const rect = bookingEl.getBoundingClientRect()
        inBookingZone = rect.top < viewportHeight && rect.bottom > 0
      }

      const finalCtaEl = document.querySelector('#final-cta')
      let inFinalCtaZone = false
      if (finalCtaEl) {
        const rect = finalCtaEl.getBoundingClientRect()
        inFinalCtaZone = rect.top < viewportHeight * 0.85 && rect.bottom > viewportHeight * 0.15
      }

      setVisible(pastHero && !inBookingZone && !inFinalCtaZone)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    const el = document.querySelector('#lead-form')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="pointer-events-none fixed bottom-4 left-4 right-4 z-[90] lg:hidden"
          style={{ bottom: 'calc(1rem + env(safe-area-inset-bottom))' }}
        >
          <div className="pointer-events-auto mx-auto max-w-[420px]">
            <Button
              variant="stickySmall"
              onClick={handleClick}
              className="w-full !min-w-0 !rounded-[18px] !py-4 shadow-[0_18px_40px_rgba(176,72,113,0.34)]"
            >
              Оставить заявку
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
