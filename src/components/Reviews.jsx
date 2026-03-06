import { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { FadeInUp } from './ui/AnimatedSection'

const REVIEWS = [
  {
    quote: 'Мидаграбинские водопады — ради них одних стоило ехать. А парящая лавочка... Я просто сидела и плакала от красоты. Молча.',
    author: 'Анна',
    date: 'апрель 2025',
  },
  {
    quote: 'Обед в горном селе. Бабушка месила тесто, дети бегали вокруг, вино из подвала. Это не экскурсия — это жизнь.',
    author: 'Дмитрий',
    date: 'май 2025',
  },
  {
    quote: 'Я ехала одна и боялась. К концу первого дня мы уже были друзьями. К концу пятого — не хотели расставаться.',
    author: 'Елена',
    date: 'июнь 2025',
  },
  {
    quote: 'Башни Вовнушки — это нереально. Как в фильме. Добраться до них — отдельное приключение, и оно того стоит.',
    author: 'Сергей',
    date: 'май 2025',
  },
  {
    quote: 'Термальные источники после целого дня в горах — это было как награда. Лежишь в горячей воде, смотришь на звёзды и понимаешь: вот оно, счастье.',
    author: 'Мария',
    date: 'апрель 2025',
  },
]

export default function Reviews() {
  const scrollRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scroll = (direction) => {
    const container = scrollRef.current
    if (!container) return
    const cardWidth = container.children[0]?.offsetWidth || 360
    const gap = 24
    const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap)
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }

  const handleScroll = () => {
    const container = scrollRef.current
    if (!container || !container.children[0]) return
    const cardWidth = container.children[0].offsetWidth + 24
    const index = Math.round(container.scrollLeft / cardWidth)
    setActiveIndex(index)
  }

  return (
    <section id="reviews" className="bg-white py-14 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-10 lg:px-12">
        <FadeInUp>
          <h2 className="font-heading font-bold text-[32px] md:text-[48px] text-text text-center mb-4 tracking-tight leading-tight">
            Они уже вернулись. Вот что говорят
          </h2>
          <p className="text-text-light text-base md:text-[17px] text-center mb-12 md:mb-16 max-w-text mx-auto">
            Реальные сообщения из Telegram и WhatsApp. Без редактуры, без причёсывания.
          </p>
        </FadeInUp>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation arrows — desktop only */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md-ds items-center justify-center hover:bg-primary-light transition-colors min-w-[48px] min-h-[48px] cursor-pointer border-none"
            aria-label="Предыдущий отзыв"
          >
            <ChevronLeft size={20} className="text-text" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md-ds items-center justify-center hover:bg-primary-light transition-colors min-w-[48px] min-h-[48px] cursor-pointer border-none"
            aria-label="Следующий отзыв"
          >
            <ChevronRight size={20} className="text-text" />
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4"
          >
            {REVIEWS.map((review, i) => (
              <div
                key={i}
                className="min-w-[300px] md:min-w-[360px] max-w-[400px] snap-start shrink-0"
              >
                <div className="bg-bg rounded-[20px] p-8 h-full flex flex-col">
                  {/* Decorative quote */}
                  <span className="text-accent text-6xl leading-none font-serif -mb-4 -ml-1 select-none" aria-hidden="true">
                    &ldquo;
                  </span>

                  <p className="text-text text-base md:text-[17px] leading-relaxed italic flex-1 mb-5">
                    {review.quote}
                  </p>

                  <p className="font-heading font-medium text-text-light text-base">
                    — {review.author}, {review.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {REVIEWS.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'bg-primary w-6' : 'bg-border'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
