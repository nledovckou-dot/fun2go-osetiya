import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/Button'

const NAV_ITEMS = [
  { label: 'Маршрут', href: '#highlights' },
  { label: 'Программа', href: '#program' },
  { label: 'Отели', href: '#hotels' },
  { label: 'Цена', href: '#booking' },
  { label: 'Отзывы', href: '#reviews' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(255,250,239,0.95)] backdrop-blur-[12px] shadow-sm-ds border-b border-[rgba(41,11,27,0.05)]'
          : 'bg-[rgba(0,0,0,0.1)] backdrop-blur-[8px] border-b border-white/10'
      }`}
    >
      <div className="max-w-container mx-auto px-6 md:px-10 lg:px-12">
        <nav className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="#" className="shrink-0">
            <img
              src="https://static.tildacdn.com/tild6265-3533-4936-b031-616437356530/logo_footer.svg"
              alt="Fun2Go"
              className={`h-8 transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'}`}
            />
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`font-heading font-medium text-[15px] transition-colors duration-200 hover:text-primary no-underline ${
                    scrolled ? 'text-text' : 'text-text-on-dark'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="#booking"
              onClick={(e) => handleNavClick(e, '#booking')}
            >
              <Button variant="primary" className="!py-3 !px-6 !min-h-[44px] !min-w-0 !text-sm">
                Забронировать
              </Button>
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden p-2 -mr-2 min-w-[48px] min-h-[48px] flex items-center justify-center"
            onClick={() => setMobileOpen(true)}
            aria-label="Открыть меню"
          >
            <Menu size={24} className={scrolled ? 'text-text' : 'text-text-on-dark'} />
          </button>
        </nav>
      </div>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-bg flex flex-col"
          >
            <div className="flex items-center justify-between h-[72px] px-6">
              <img
                src="https://static.tildacdn.com/tild6265-3533-4936-b031-616437356530/logo_footer.svg"
                alt="Fun2Go"
                className="h-8"
              />
              <button
                className="p-2 -mr-2 min-w-[48px] min-h-[48px] flex items-center justify-center"
                onClick={() => setMobileOpen(false)}
                aria-label="Закрыть меню"
              >
                <X size={24} className="text-text" />
              </button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center gap-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-heading font-semibold text-2xl text-text no-underline hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="px-6 pb-8 pb-[calc(2rem+env(safe-area-inset-bottom))]">
              <a href="#booking" onClick={(e) => handleNavClick(e, '#booking')}>
                <Button variant="primary" fullWidth>
                  Забронировать
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
