import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Button } from './ui/Button'
import heroImage from '../assets/hero-fun2go-osetia.jpg'

const SHORT_DATES = ['1 мая - 3 мая', '9 мая - 11 мая']
const LONG_DATES = ['22 апреля - 26 апреля', '13 мая - 17 мая']

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

      <div className="relative z-10 mx-auto flex max-w-container flex-col px-6 py-10 md:min-h-[calc(100vh-72px)] md:justify-center md:px-10 md:py-16 lg:px-12">
        <div className="mx-auto max-w-[860px] text-center">
          <motion.div
            className="relative mx-auto mb-6 max-w-[320px] overflow-hidden rounded-[28px] border border-white/10 shadow-[0_24px_60px_rgba(17,4,12,0.32)] md:hidden"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <img
              src={heroImage}
              alt="Гости тура Fun2Go в Осетии с бокалами на фоне гор"
              className="aspect-[4/3] w-full object-cover object-center"
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

        <motion.div
          className="mx-auto mt-10 grid max-w-[1040px] gap-4 rounded-[28px] border border-white/15 bg-[rgba(41,11,27,0.72)] p-5 shadow-[0_20px_50px_rgba(41,11,27,0.16)] backdrop-blur-[12px] md:mt-12 md:bg-[rgba(41,11,27,0.28)] md:grid-cols-[1.25fr_0.75fr] md:shadow-none"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="rounded-[20px] border border-white/10 bg-[rgba(255,255,255,0.06)] p-5">
            <h3 className="mb-4 font-heading text-[28px] font-semibold text-accent">
              Ближайшие даты
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/70">
                  3 дня
                </p>
                <div className="space-y-2">
                  {SHORT_DATES.map((date) => (
                    <div key={date} className="rounded-[14px] border border-accent/60 px-4 py-3 text-center text-sm font-semibold text-text-on-dark">
                      {date}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/70">
                  5 дней
                </p>
                <div className="space-y-2">
                  {LONG_DATES.map((date) => (
                    <div key={date} className="rounded-[14px] border border-accent/60 px-4 py-3 text-center text-sm font-semibold text-text-on-dark">
                      {date}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
            <div className="rounded-[20px] border border-accent/60 bg-[rgba(255,255,255,0.06)] p-5 text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-white/70">
                Стоимость
              </p>
              <p className="mt-2 font-heading text-4xl font-bold text-accent">
                от 49 500 ₽
              </p>
              <p className="mt-2 text-sm text-text-on-dark-muted">
                бронирование по предоплате 30%
              </p>
            </div>
            <div className="rounded-[20px] border border-accent/60 bg-[rgba(255,255,255,0.06)] p-5 text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-white/70">
                Формат
              </p>
              <p className="mt-2 font-heading text-4xl font-bold text-accent">
                до 12
              </p>
              <p className="mt-2 text-sm text-text-on-dark-muted">
                человек в мини-группе
              </p>
            </div>
          </div>
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
