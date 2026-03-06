import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FadeInUp } from './ui/AnimatedSection'

const LOCATIONS = [
  {
    title: 'Город мертвых Даргавс',
    description: 'Средневековый некрополь в горах. Тишина, от которой перехватывает дыхание.',
    image: 'https://static.tildacdn.com/tild6261-6433-4662-b538-643765326436/IMG_7865.jpeg',
    alt: 'Город мертвых Даргавс — средневековый некрополь в горах Осетии',
    tall: false,
  },
  {
    title: 'Парящая лавочка «Счастье»',
    description: 'Сесть на высоте 2560 м, замолчать и почувствовать масштаб.',
    image: 'https://static.tildacdn.com/tild3531-3935-4561-b736-363630316635/IMG_6916_1.JPG',
    alt: 'Парящая лавочка на высоте 2560 метров в Осетии — тур Fun2Go',
    wide: true,
  },
  {
    title: 'Башни Вовнушки',
    description: 'Средневековая крепость в закрытой Ингушетии. Сюда пускают не всех.',
    image: 'https://static.tildacdn.com/tild6331-3936-4832-a265-353037383539/3274_1747921064.webp',
    alt: 'Башни Вовнушки в закрытой Ингушетии',
    tall: false,
  },
  {
    title: 'Кадаргаванский каньон',
    description: 'Тропа над пропастью. В животе — холодок. В телефоне — лучшее фото года.',
    image: 'https://static.tildacdn.com/tild6335-3731-4766-b161-353632656139/IMG_2553.JPG',
    alt: 'Кадаргаванский каньон — тропа над пропастью',
    tall: true,
  },
  {
    title: 'Мидаграбинские водопады',
    description: 'Одни из высочайших в Европе. Рядом с ними чувствуешь себя маленьким — и это хорошо.',
    image: 'https://static.tildacdn.com/tild6563-3435-4265-b934-656566656263/IMG_2550.jpg',
    alt: 'Мидаграбинские водопады — одни из высочайших в Европе',
    tall: true,
  },
  {
    title: 'Термальные источники',
    description: 'Горячая вода под открытым небом. После целого дня в горах — лучшее, что можно себе подарить.',
    image: 'https://static.tildacdn.com/tild3366-3137-4436-b931-303538663930/IMG_2505.JPG',
    alt: 'Термальные источники под открытым небом в горах',
    tall: false,
  },
  {
    title: 'Конная прогулка в горах',
    description: 'Лошади спокойные, опыт не нужен. Виды — бесценные.',
    image: 'https://static.tildacdn.com/tild6637-3838-4331-b464-633238643838/IMG_2489.JPG',
    alt: 'Конная прогулка в горах Осетии — авторский тур Fun2Go',
    tall: false,
  },
]

function LocationCard({ title, description, image, alt, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px 0px' })

  return (
    <motion.div
      ref={ref}
      className="relative rounded-[16px] overflow-hidden group cursor-default break-inside-avoid mb-4"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
    >
      <img
        src={image}
        alt={alt}
        className="w-full block transition-transform duration-600 group-hover:scale-[1.03]"
        loading="lazy"
      />

      {/* Caption — hidden on desktop, visible on hover; always visible on mobile */}
      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[rgba(41,11,27,0.7)] to-transparent translate-y-full group-hover:translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-400 max-md:translate-y-0">
        <h3 className="font-heading font-bold text-lg text-text-on-dark mb-1">
          {title}
        </h3>
        <p className="text-sm text-white/70 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

export default function Impressions() {
  const handleProgramClick = (e) => {
    e.preventDefault()
    const el = document.querySelector('#program')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="highlights" className="bg-bg py-14 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-10 lg:px-12">
        <FadeInUp>
          <h2 className="font-heading font-bold text-[32px] md:text-[48px] text-text text-center mb-4 tracking-tight leading-tight">
            15+ локаций за 5 дней. Каждая — отдельная история
          </h2>
          <p className="text-text-light text-base md:text-[17px] text-center mb-12 md:mb-16 max-w-text mx-auto">
            Горы, каньоны, средневековые крепости, горячие источники — и закрытая Ингушетия, куда пускают не всех.
          </p>
        </FadeInUp>

        {/* Masonry grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
          {LOCATIONS.map((loc, i) => (
            <LocationCard key={i} {...loc} index={i} />
          ))}
        </div>

        {/* CTA link */}
        <FadeInUp delay={0.3}>
          <div className="text-center mt-10">
            <a
              href="#program"
              onClick={handleProgramClick}
              className="inline-flex items-center gap-2 font-heading font-medium text-[17px] text-primary no-underline hover:underline transition-all"
            >
              Посмотреть программу по дням
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
