import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'
import { FadeInUp } from './ui/AnimatedSection'

const STATS = [
  { value: 800, suffix: '+', label: 'путешественников за 2 года' },
  { value: 22, suffix: '', label: 'направления по миру' },
  { value: 50, suffix: '', label: 'индивидуальных туров' },
  { value: 18, suffix: '', label: 'человек в команде' },
]

function CountUp({ target, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const started = useRef(false)

  useEffect(() => {
    if (!isInView || started.current) return
    started.current = true

    const start = performance.now()

    const animate = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setCount(Math.floor(eased * target))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, target, duration])

  return (
    <span ref={ref} className="font-heading font-bold text-4xl md:text-[48px] text-primary leading-none tabular-nums">
      {count.toLocaleString('ru-RU')}{suffix}
    </span>
  )
}

export default function Team() {
  return (
    <section className="bg-bg py-14 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-10 lg:px-12">
        <FadeInUp>
          <h2 className="font-heading font-bold text-[32px] md:text-[48px] text-text text-center mb-12 md:mb-16 tracking-tight leading-tight">
            Кто стоит за твоим туром
          </h2>
        </FadeInUp>

        {/* Founder card */}
        <FadeInUp delay={0.1}>
          <div className="max-w-[800px] mx-auto mb-16">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
              {/* Photo */}
              <div className="shrink-0">
                <img
                  src="https://thb.tildacdn.com/tild3437-3162-4331-a465-643461376262/-/empty/photo-1718671460791-.jpeg"
                  alt="Мария Рец — основатель Fun2Go"
                  className="w-40 h-40 md:w-[200px] md:h-[200px] rounded-full object-cover border-4 border-accent shadow-lg-ds"
                  loading="lazy"
                />
              </div>

              {/* Text */}
              <div className="text-center md:text-left">
                <h3 className="font-heading font-semibold text-2xl md:text-4xl text-text mb-1">
                  Мария Рец
                </h3>
                <p className="font-heading font-medium text-[17px] text-text-light mb-4">
                  Основатель Fun2Go
                </p>
                <p className="text-text text-base md:text-[17px] leading-relaxed mb-4">
                  Создала Fun2Go, чтобы показать людям Россию и мир такими, какими их видит сама — через вкусы, запахи, истории и настоящие эмоции. Каждый маршрут проверен лично.
                </p>
                <p className="font-heading font-semibold text-xl md:text-2xl text-primary italic">
                  «Стираем границы и открываем сердца»
                </p>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {STATS.map((stat, i) => (
            <FadeInUp key={i} delay={0.2 + i * 0.1}>
              <div className="text-center">
                <CountUp target={stat.value} suffix={stat.suffix} />
                <p className="text-sm text-text-light mt-2">{stat.label}</p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  )
}
