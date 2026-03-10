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

      setVisible(pastHero && !inBookingZone)
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
          className="fixed bottom-0 left-0 right-0 z-[90] lg:hidden"
          style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
          <div className="flex items-center justify-between gap-3 px-6 py-3 bg-[rgba(255,250,239,0.95)] backdrop-blur-[12px] border-t border-border shadow-[0_-2px_20px_rgba(41,11,27,0.05)]">
            <span className="text-sm text-text-light whitespace-nowrap">
              от 49 500 руб. · 3 и 5 дней · до 12 мест
            </span>
            <Button variant="stickySmall" onClick={handleClick}>
              Оставить заявку
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
