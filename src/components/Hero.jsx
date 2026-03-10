import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Button } from './ui/Button'

const HERO_IMAGE = 'https://static.tildacdn.com/tild3237-6335-4834-a364-363435336235/IMG_0260_1.JPG'

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
    <section id="about" className="relative min-h-screen overflow-hidden pt-[72px]">
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
        style={{ top: '-10%', bottom: '-10%' }}
      >
        <motion.img
          src={HERO_IMAGE}
          alt="Панорама горного ущелья в Осетии — авторский тур Fun2Go"
          className="h-full w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          loading="eager"
        />
      </div>

      <div className="absolute inset-0 bg-[rgba(41,11,27,0.48)]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-72px)] max-w-container flex-col justify-center px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[860px] text-center">
          <motion.div
            className="mb-8 flex flex-wrap items-center justify-center gap-3"
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
            className="mb-6 font-heading text-4xl font-bold tracking-tight text-text-on-dark md:text-[56px] md:leading-[1.1]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            5 дней в Осетии,
            <br />
            которые заменят вам психолога!
          </motion.h1>

          <motion.p
            className="mx-auto mb-10 max-w-[640px] text-base leading-relaxed text-text-on-dark-muted md:text-[17px]"
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
          className="mx-auto mt-12 grid max-w-[1040px] gap-4 rounded-[28px] border border-white/15 bg-[rgba(41,11,27,0.28)] p-5 backdrop-blur-[12px] md:grid-cols-[1.25fr_0.75fr]"
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
