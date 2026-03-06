import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Button } from './ui/Button'

const HERO_IMAGE = 'https://static.tildacdn.com/tild3237-6335-4834-a364-363435336235/IMG_0260_1.JPG'

export default function Hero() {
  const bgRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const scrollY = window.scrollY
        bgRef.current.style.transform = `translateY(${scrollY * 0.3}px)`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCTAClick = (e) => {
    e.preventDefault()
    const el = document.querySelector('#booking')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background photo with parallax */}
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
        style={{ top: '-10%', bottom: '-10%' }}
      >
        <motion.img
          src={HERO_IMAGE}
          alt="Панорама горного ущелья в Осетии — авторский тур Fun2Go"
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          loading="eager"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(41,11,27,0.45)]" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-[800px] mx-auto px-6 py-20">
        {/* Badges */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-semibold uppercase tracking-wide bg-white/15 text-text-on-dark backdrop-blur-[8px] border border-white/20">
            5 дней / 4 ночи
          </span>
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-semibold uppercase tracking-wide bg-white/15 text-text-on-dark backdrop-blur-[8px] border border-white/20">
            Мини-группа 12 человек
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="font-heading font-bold text-4xl md:text-[56px] md:leading-[1.1] text-text-on-dark mb-6 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          Осетия. 5 дней, которые заменят тебе психолога
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-text-on-dark-muted text-base md:text-[17px] leading-relaxed mb-10 max-w-[600px] mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          Авторский тур для мини-группы из 12 человек. 79 900 руб. Ближайший — 22 апреля.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <Button variant="onDark" onClick={handleCTAClick}>
            Забронировать место
          </Button>
          <p className="text-text-on-dark-muted text-sm mt-4">
            Предоплата 30 000 руб. Рассрочка от Т-Банк.
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={32} className="text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
