import { Send } from 'lucide-react'
import { motion } from 'framer-motion'
import { FadeInUp } from './ui/AnimatedSection'
import { Button } from './ui/Button'

const BG_IMAGE = 'https://static.tildacdn.com/tild6536-6132-4062-b839-386462353739/2022-01-12_14-41-44_.webp'

export default function FinalCTA() {
  const handleBookingClick = (e) => {
    e.preventDefault()
    const el = document.querySelector('#lead-form')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <img
        src={BG_IMAGE}
        alt="Горы Осетии — финальный призыв забронировать тур"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(41,11,27,0.45)]" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-[700px] mx-auto px-6 py-20">
        <FadeInUp>
          <h2 className="font-heading font-bold text-[28px] md:text-[48px] text-text-on-dark mb-6 tracking-tight leading-tight">
            Сидеть на парящей лавочке на высоте 2560 метров или на рабочем стуле? Выбирайте.
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <p className="text-text-on-dark-muted text-base md:text-[17px] leading-relaxed mb-10 max-w-[600px] mx-auto">
            Жизнь слишком коротка, чтобы откладывать перезагрузку на потом. 12 мест. 5 дней. Осетия + Ингушетия. Всё продумано - осталось только забронировать.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.4}>
          <Button variant="onDark" onClick={handleBookingClick}>
            Оставить заявку
          </Button>

          <div className="mt-6 flex flex-col items-center gap-3">
            <a
              href="https://t.me/managerf2g"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-text-on-dark no-underline transition-all hover:bg-white/15"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary">
                <Send size={18} />
              </span>
              <span className="text-left">
                <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-white/65">
                  Telegram
                </span>
                <span className="block text-base font-semibold">
                  @managerf2g
                </span>
              </span>
            </a>
            <a
              href="tel:+79011328656"
              className="text-base text-text-on-dark-muted hover:underline no-underline"
            >
              +7 901 132 86 56
            </a>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
