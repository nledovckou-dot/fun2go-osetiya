import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const CARDS = [
  {
    text: 'Для тех, кто забыл, как смотреть на закат в горах и наслаждаться жизнью по-настоящему',
    image: 'https://static.tildacdn.com/tild6131-6430-4561-b233-643339343232/IMG_1840.jpeg',
    alt: 'Горный пейзаж Осетии на закате',
    direction: 'left',
  },
  {
    text: 'Для тех, на кого свалились все проблемы этого мира, и кто мечтает о тотальной перезагрузке',
    image: 'https://static.tildacdn.com/tild6162-6661-4661-b762-363839373731/IMG_2338_1.jpeg',
    alt: 'Группа путешественников на горном маршруте в Осетии',
    direction: 'right',
  },
  {
    text: 'Для мужчин и женщин, которые вздрагивают от телефонных звонков, переговоров и слова «надо»',
    image: 'https://static.tildacdn.com/tild3730-3462-4935-b236-623135353738/IMG_2457.jpeg',
    alt: 'Тишина и покой в горах Осетии',
    direction: 'left',
  },
  {
    text: 'Для тех, кто привык к хорошему уровню путешествий — где идеальный баланс между ценой, качеством и незабываемыми впечатлениями',
    image: 'https://static.tildacdn.com/tild6430-3065-4537-b266-376539653263/IMG_2054.JPG',
    alt: 'Премиальный горный вид в Осетии',
    direction: 'right',
  },
]

function ForWhomCard({ text, image, alt, direction, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' })

  const isLeft = direction === 'left'
  const tiltClass = isLeft ? 'lg:rotate-[-2deg]' : 'lg:rotate-[2deg]'

  return (
    <motion.div
      ref={ref}
      className={`relative rounded-[24px] overflow-hidden aspect-[4/3] md:aspect-[4/3] cursor-default group transition-transform duration-400 ${tiltClass} lg:hover:rotate-0 lg:hover:scale-[1.02]`}
      initial={{
        opacity: 0,
        x: isLeft ? -80 : 80,
      }}
      animate={isInView ? {
        opacity: 1,
        x: 0,
      } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      {/* Photo */}
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.03]"
        loading="lazy"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(41,11,27,0.35)]" />

      {/* Text at bottom with gradient */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-[rgba(41,11,27,0.5)] to-transparent">
        <p className="font-heading font-semibold text-lg md:text-2xl text-text-on-dark leading-snug">
          {text}
        </p>
      </div>
    </motion.div>
  )
}

export default function ForWhom() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px 0px' })

  return (
    <section className="bg-bg-alt py-14 md:py-24" ref={ref}>
      <div className="max-w-container mx-auto px-6 md:px-10 lg:px-12">
        <motion.h2
          className="font-heading font-bold text-[32px] md:text-[48px] text-text text-center mb-12 md:mb-16 tracking-tight leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          Этот тур — для тебя, если...
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {CARDS.map((card, i) => (
            <ForWhomCard key={i} {...card} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
