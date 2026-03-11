import { Send } from 'lucide-react'
import { motion } from 'framer-motion'
import { FadeInUp } from './ui/AnimatedSection'
import { Button } from './ui/Button'

const BG_IMAGE = 'https://static.tildacdn.com/tild3766-3831-4134-a436-626432363166/DSC02048.JPG'

export default function FinalCTA() {
  const handleBookingClick = (e) => {
    e.preventDefault()
    const el = document.querySelector('#lead-form')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="final-cta" className="relative overflow-hidden bg-[#23101b] md:min-h-[80vh] md:flex md:items-center md:justify-center">
      {/* Background */}
      <img
        src={BG_IMAGE}
        alt="Горы Осетии — финальный призыв забронировать тур"
        className="absolute inset-0 hidden h-full w-full object-cover object-[center_40%] md:block"
        loading="lazy"
      />

      {/* Overlay */}
      <div className="absolute inset-0 hidden bg-[linear-gradient(180deg,rgba(41,11,27,0.18)_0%,rgba(41,11,27,0.52)_55%,rgba(41,11,27,0.72)_100%)] md:block" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[700px] px-6 py-14 text-center md:py-20">
        <motion.div
          className="relative mx-auto mb-8 max-w-[320px] overflow-hidden rounded-[28px] border border-white/10 shadow-[0_24px_60px_rgba(17,4,12,0.32)] md:hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px 0px' }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <img
            src={BG_IMAGE}
            alt="Горы Осетии — финальный призыв забронировать тур"
            className="aspect-[4/3] w-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(41,11,27,0.08)_0%,rgba(41,11,27,0.22)_100%)]" />
        </motion.div>

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
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
