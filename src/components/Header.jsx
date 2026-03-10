import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/Button'

const NAV_ITEMS = [
  { label: 'О туре', href: '#about' },
  { label: 'Программа', href: '#program' },
  { label: 'Фото', href: '#gallery' },
  { label: 'Что включено', href: '#included' },
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
          <a href="#" className="shrink-0">
            <img
              src="https://static.tildacdn.com/tild6265-3533-4936-b031-616437356530/logo_footer.svg"
              alt="Fun2Go"
              className={`h-8 transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'}`}
            />
          </a>

          <div className="hidden lg:flex items-center gap-2 rounded-full border border-white/20 px-3 py-2 backdrop-blur-[12px]">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`rounded-full px-3 py-2 font-heading text-[13px] font-semibold uppercase tracking-wide no-underline transition-colors ${
                  scrolled
                    ? 'text-text hover:bg-primary-light'
                    : 'text-text-on-dark hover:bg-white/10'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#lead-form"
              onClick={(e) => handleNavClick(e, '#lead-form')}
            >
              <Button variant="primary" className="!py-3 !px-6 !min-h-[44px] !min-w-0 !text-sm">
                Оставить заявку
              </Button>
            </a>
          </div>

          <button
            className="lg:hidden p-2 -mr-2 min-w-[48px] min-h-[48px] flex items-center justify-center"
            onClick={() => setMobileOpen(true)}
            aria-label="Открыть меню"
          >
            <Menu size={24} className={scrolled ? 'text-text' : 'text-text-on-dark'} />
          </button>
        </nav>
      </div>

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
              <a href="#lead-form" onClick={(e) => handleNavClick(e, '#lead-form')}>
                <Button variant="primary" fullWidth>
                  Оставить заявку
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
