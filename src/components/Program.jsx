import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeInUp } from './ui/AnimatedSection'
import { Button } from './ui/Button'

const DAYS = [
  {
    day: 1,
    title: 'Горная перезагрузка',
    intro: 'Встречаем в аэропорту Владикавказа. Дальше — только горы, еда и тишина.',
    items: [
      'Кармадонское ущелье — первый «ого» уже через час после прилёта',
      'Город мертвых Даргавс — средневековый некрополь, который запомнится надолго',
      'Обед — осетинские пироги, шашлык, горный чай. Вы сразу поймёте, зачем прилетели в Осетию',
      'Конная прогулка в горах — лошади спокойные, опыт не нужен',
      'Мастер-класс осетинских пирогов — рецепт увезёте домой',
      'Дружеский ужин — знакомство с группой за вином и видами',
    ],
    note: 'Заселение в горный SPA-отель с видом на горы.',
    image: 'https://static.tildacdn.com/tild6131-6430-4561-b233-643339343232/IMG_1840.jpeg',
    alt: 'Горный пейзаж Осетии — день 1 тура',
  },
  {
    day: 2,
    title: 'Горы, которые захватывают дух',
    intro: 'Самый насыщенный день. Каньон, водопады, парящая лавочка — и горячие источники в финале.',
    items: [
      'Куртатинское ущелье и Секретная тропа чудес — тропа, про которую не пишут в путеводителях',
      'Кадаргаванский каньон — тропа над пропастью, адреналин без экстрима',
      'Горные качели и арт-объект «Буква AE» — тот самый кадр, который останется с вами надолго',
      'Дзивгисская пещерная крепость — 700-летняя крепость в скале',
      'Аланский Свято-Успенский монастырь — тишина и горный воздух',
      'Мидаграбинские водопады — одни из высочайших в Европе',
      'Парящая лавочка на 2560 м — сесть, выдохнуть и просто смотреть на горы',
      'Термальные источники — горячая вода под открытым небом, идеальный финал дня',
    ],
    note: 'Возвращение в SPA-отель.',
    image: 'https://static.tildacdn.com/tild6335-3731-4766-b161-353632656139/IMG_2553.JPG',
    alt: 'Кадаргаванский каньон — день 2 тура',
  },
  {
    day: 3,
    title: 'Загадочная Ингушетия',
    intro: 'Закрытая территория. Два горных перевала. Пикник с местным вином на высоте, где не ловит телефон.',
    items: [
      'Перевалы Цей-Лоам и Суагомский — горный серпантин с видами, от которых замолкаешь',
      'Пикник в горах — горные чаи, местное вино, чурчхела, осетинские пироги',
      'Природный заповедник Эрзи — дикая природа без фильтров',
      'Башни Вовнушки — средневековые башни-крепости, добраться до которых — уже приключение',
    ],
    note: 'Переезд во Владикавказ. Заселение в городской отель — рейтинг 9.4-9.8.',
    image: 'https://static.tildacdn.com/tild6331-3936-4832-a265-353037383539/3274_1747921064.webp',
    alt: 'Башни Вовнушки в Ингушетии — день 3 тура',
  },
  {
    day: 4,
    title: 'Цветущая Дигория',
    intro: 'Горные сёла, шахтёрские поселения, обед в осетинской семье и средневековый замок.',
    items: [
      'Цветущая Дигория — горная долина, от красоты которой хочется молчать',
      'Шахтёрские поселения: Садон, Галон, Курайта — заброшенные города, застывшие во времени',
      'Село Верхний Згид — обед в осетинской семье. Настоящая еда, настоящие люди',
      'Замок Фрегат и город Галиат — средневековая архитектура на высоте 2000+ м',
      'Каньон Ахсинта и река Урух — природный грандканьон Осетии',
    ],
    note: 'Возвращение в городской отель.',
    image: 'https://static.tildacdn.com/tild3237-3130-4033-b733-303364613864/_1.jpg',
    alt: 'Цветущая Дигория — день 4 тура',
  },
  {
    day: 5,
    title: 'Мягкое приземление',
    intro: 'Никакой спешки. Бассейн, шезлонги, завтрак. Финальные фото. Трансфер в аэропорт.',
    items: [],
    note: 'Вы уезжаете другими. Не уставшими от отпуска — а перезагруженными.',
    image: 'https://static.tildacdn.com/stor6665-6435-4332-b939-636262323463/53495661.jpg',
    alt: 'Отель с бассейном — день 5 тура, релакс',
  },
]

export default function Program() {
  const [activeDay, setActiveDay] = useState(0)

  const handleBookingClick = (e) => {
    e.preventDefault()
    const el = document.querySelector('#booking')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="program" className="bg-white py-14 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-10 lg:px-12">
        <FadeInUp>
          <h2 className="font-heading font-bold text-[32px] md:text-[48px] text-text text-center mb-4 tracking-tight leading-tight">
            5 дней. 5 совершенно разных приключений
          </h2>
          <p className="text-text-light text-base md:text-[17px] text-center mb-12 md:mb-16 max-w-text mx-auto">
            Без спешки, без «галопа по Европам». Вы здесь, чтобы проживать, а не пробегать.
          </p>
        </FadeInUp>

        {/* Desktop: Tabs */}
        <div className="hidden md:block">
          {/* Tab buttons */}
          <div className="flex gap-0 border-b border-border mb-10">
            {DAYS.map((day, i) => (
              <button
                key={i}
                className={`flex-1 py-4 px-2 text-center font-heading font-semibold text-base transition-all duration-300 border-b-2 cursor-pointer bg-transparent ${
                  activeDay === i
                    ? 'text-primary border-primary'
                    : 'text-text-light border-transparent hover:text-text hover:border-border'
                }`}
                onClick={() => setActiveDay(i)}
              >
                День {day.day}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-5 gap-10"
            >
              {/* Photo */}
              <div className="col-span-2">
                <img
                  src={DAYS[activeDay].image}
                  alt={DAYS[activeDay].alt}
                  className="w-full aspect-[3/4] object-cover rounded-[20px]"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="col-span-3">
                <h3 className="font-heading font-semibold text-2xl text-text mb-3">
                  День {DAYS[activeDay].day} — {DAYS[activeDay].title}
                </h3>
                <p className="text-text-light text-[17px] mb-6 leading-relaxed">
                  {DAYS[activeDay].intro}
                </p>

                {DAYS[activeDay].items.length > 0 && (
                  <ul className="space-y-3 mb-6">
                    {DAYS[activeDay].items.map((item, j) => (
                      <li key={j} className="flex gap-3 text-[17px] text-text leading-relaxed">
                        <span className="text-primary mt-1 shrink-0 font-bold">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <p className="text-sm italic text-text-light mt-4">
                  {DAYS[activeDay].note}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile: Accordion */}
        <div className="md:hidden space-y-3">
          {DAYS.map((day, i) => (
            <MobileDay key={i} day={day} defaultOpen={i === 0} />
          ))}
        </div>

        {/* CTA after program */}
        <FadeInUp delay={0.2}>
          <div className="text-center mt-12 md:mt-16">
            <Button variant="primary" onClick={handleBookingClick}>
              Хочу в это путешествие
            </Button>
            <p className="text-sm text-text-light mt-3">
              Мини-группа — всего 12 мест
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}

function MobileDay({ day, defaultOpen }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border border-border rounded-[16px] overflow-hidden bg-white">
      <button
        className="w-full flex items-center justify-between p-5 bg-transparent border-none cursor-pointer text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-heading font-semibold text-lg text-text">
          День {day.day} — {day.title}
        </span>
        <span className="text-primary text-2xl shrink-0 ml-2 transition-transform duration-300" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5">
              <img
                src={day.image}
                alt={day.alt}
                className="w-full aspect-video object-cover rounded-[12px] mb-4"
                loading="lazy"
              />
              <p className="text-text-light text-base mb-4">{day.intro}</p>
              {day.items.length > 0 && (
                <ul className="space-y-2 mb-4">
                  {day.items.map((item, j) => (
                    <li key={j} className="flex gap-2 text-base text-text leading-relaxed">
                      <span className="text-primary mt-0.5 shrink-0 font-bold">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              <p className="text-sm italic text-text-light">{day.note}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
