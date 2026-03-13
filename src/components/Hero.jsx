import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Button } from './ui/Button'
import heroImage from '../assets/hero-fun2go-osetia.jpg'

import { Calendar, Users, Sparkles } from 'lucide-react'

const TOURS = [
  { date: '1 — 3 мая', duration: '3 дня', price: '49 500 ₽', badge: 'Майские' },
  { date: '9 — 11 мая', duration: '3 дня', price: '49 500 ₽', badge: 'Майские' },
  { date: '22 — 26 апреля', duration: '5 дней', price: '79 900 ₽', badge: 'Полный тур' },
  { date: '13 — 17 мая', duration: '5 дней', price: '79 900 ₽', badge: 'Полный тур' },
]

export default function Hero() {
  const bgRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCTAClick = (e) => {
    e.preventDefault()
    const el = document.querySelector('#lead-form')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#2d1725] pt-[72px] md:min-h-screen md:bg-transparent"
    >
      <div
        ref={bgRef}
        className="absolute inset-0 hidden will-change-transform md:block"
        style={{ top: '-10%', bottom: '-10%' }}
      >
        <motion.img
          src={heroImage}
          alt="Гости тура Fun2Go в Осетии с бокалами на фоне гор"
          className="h-full w-full object-cover object-[center_62%] md:object-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          loading="eager"
        />
      </div>

      <div className="absolute inset-0 hidden bg-[rgba(41,11,27,0.56)] md:block" />

      <div className="relative z-10 mx-auto flex max-w-container flex-col px-4 py-10 md:min-h-[calc(100vh-72px)] md:justify-center md:px-10 md:py-16 lg:px-12">
        <div className="mx-auto max-w-[860px] text-center">
          <motion.div
            className="relative -mx-4 mb-6 overflow-hidden md:hidden"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <img
              src={heroImage}
              alt="Гости тура Fun2Go в Осетии с бокалами на фоне гор"
              className="aspect-[5/4] w-full object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(41,11,27,0.08)_0%,rgba(41,11,27,0.2)_100%)]" />
          </motion.div>

          <motion.div
            className="mb-6 flex flex-wrap items-center justify-center gap-3 md:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/15 px-4 py-2 text-[13px] font-semibold uppercase tracking-wide text-text-on-dark backdrop-blur-[8px]">
              5 дней / 4 ночи
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/15 px-4 py-2 text-[13px] font-semibold uppercase tracking-wide text-text-on-dark backdrop-blur-[8px]">
              Мини-группа до 12 человек
            </span>
          </motion.div>

          <motion.h1
            className="mb-5 font-heading text-[clamp(2.6rem,7vw,4rem)] font-bold tracking-tight text-text-on-dark md:mb-6 md:text-[56px] md:leading-[1.1]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            5 дней в Осетии,
            <br />
            которые заменят вам психолога!
          </motion.h1>

          <motion.p
            className="mx-auto mb-8 max-w-[640px] text-base leading-relaxed text-text-on-dark-muted md:mb-10 md:text-[17px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            Тур для взрослых девочек и мальчиков, которые устали и жаждут новых ярких ощущений!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <Button variant="onDark" onClick={handleCTAClick}>
              Получить программу
            </Button>
          </motion.div>
        </div>

        {/* Stats banner */}
        <motion.div
          className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-4 md:mt-12 md:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="flex items-center gap-2 rounded-full border border-accent/40 bg-[rgba(41,11,27,0.5)] px-5 py-2.5 backdrop-blur-[12px]">
            <Sparkles size={16} className="text-accent" />
            <span className="text-sm font-semibold text-accent">от 49 500 ₽</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-[rgba(41,11,27,0.5)] px-5 py-2.5 backdrop-blur-[12px]">
            <Users size={16} className="text-white/70" />
            <span className="text-sm font-semibold text-white/80">мини-группа до 12 чел.</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-[rgba(41,11,27,0.5)] px-5 py-2.5 backdrop-blur-[12px]">
            <span className="text-sm font-semibold text-white/80">предоплата 30%</span>
          </div>
        </motion.div>

        {/* Tour date cards */}
        <motion.div
          className="mx-auto mt-6 grid max-w-[1040px] gap-4 sm:grid-cols-2 md:mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          {TOURS.map((tour) => (
            <div
              key={tour.date}
              className="group relative overflow-hidden rounded-[24px] border border-white/15 bg-[rgba(41,11,27,0.6)] p-6 backdrop-blur-[16px] transition-all duration-300 hover:border-accent/40 hover:bg-[rgba(41,11,27,0.7)] md:bg-[rgba(41,11,27,0.3)]"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-accent/20 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-accent">
                  {tour.badge}
                </span>
                <span className="rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white/70">
                  {tour.duration}
                </span>
              </div>

              <div className="mb-2 flex items-center gap-2.5">
                <Calendar size={18} className="text-accent/80" />
                <p className="font-heading text-2xl font-bold text-text-on-dark md:text-[28px]">
                  {tour.date}
                </p>
              </div>

              <p className="mb-5 font-heading text-3xl font-black text-accent md:text-4xl">
                {tour.price}
              </p>

              <button
                onClick={handleCTAClick}
                className="w-full rounded-[14px] bg-primary py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all duration-200 hover:bg-primary-hover hover:shadow-[0_8px_24px_rgba(176,72,113,0.35)]"
              >
                Оставить заявку
              </button>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
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
