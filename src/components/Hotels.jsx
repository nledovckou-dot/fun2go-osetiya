import { FadeInUp } from './ui/AnimatedSection'

const HOTELS = [
  {
    name: 'Горный SPA-отель',
    days: 'Дни 1-2',
    description: 'Вид на горы прямо из окна. Рассвет здесь стоит того, чтобы встать в 6 утра.',
    badge: 'SPA включено',
    image: 'https://static.tildacdn.com/stor6162-3966-4432-b934-393565383632/10593807.jpg',
    alt: 'Горный SPA-отель с видом на горы Осетии',
  },
  {
    name: 'Olimp Plaza',
    days: 'Дни 3-4',
    rating: '9.8',
    reviews: '1 124 отзыва',
    description: 'SPA-комплекс с бассейном и хамамом. Местные называют его «Малые Сандуны».',
    badge: 'Бассейн + хамам',
    image: 'https://static.tildacdn.com/stor6665-6435-4332-b939-636262323463/53495661.jpg',
    alt: 'Olimp Plaza — отель с бассейном и хамамом во Владикавказе',
  },
  {
    name: 'Гостиница Владикавказ',
    days: 'Дни 3-4',
    rating: '9.4',
    reviews: '3 351 отзыв',
    description: 'В самом сердце города. Набережная Терека за углом.',
    image: 'https://static.tildacdn.com/stor3861-3062-4964-a635-393836633230/31674765.png',
    alt: 'Гостиница Владикавказ — в центре города',
  },
]

export default function Hotels() {
  return (
    <section id="hotels" className="bg-bg py-14 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-10 lg:px-12">
        <FadeInUp>
          <h2 className="font-heading font-bold text-[32px] md:text-[48px] text-text text-center mb-4 tracking-tight leading-tight">
            Отели — это часть впечатления, а не «просто переночевать»
          </h2>
          <p className="text-text-light text-base md:text-[17px] text-center mb-12 md:mb-16 max-w-text mx-auto">
            Мы выбрали отели, из которых не хочется уходить. Но придётся — горы ждут.
          </p>
        </FadeInUp>

        {/* Desktop: grid, Mobile: horizontal scroll */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {HOTELS.map((hotel, i) => (
            <FadeInUp key={i} delay={i * 0.1}>
              <HotelCard hotel={hotel} />
            </FadeInUp>
          ))}
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4 -mx-6 px-6">
          {HOTELS.map((hotel, i) => (
            <div key={i} className="min-w-[280px] snap-start shrink-0">
              <HotelCard hotel={hotel} />
            </div>
          ))}
        </div>

        {/* Footnote */}
        <FadeInUp delay={0.3}>
          <p className="text-sm text-text-muted text-center mt-8 italic">
            Конкретный отель зависит от дат заезда. Все варианты — рейтинг 9.2+.
          </p>
        </FadeInUp>
      </div>
    </section>
  )
}

function HotelCard({ hotel }) {
  return (
    <div className="bg-white rounded-[20px] overflow-hidden shadow-md-ds transition-all duration-300 hover:-translate-y-1 hover:shadow-lg-ds h-full">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={hotel.image}
          alt={hotel.alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Badge */}
        <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-semibold uppercase tracking-wide bg-accent text-text">
          {hotel.badge || hotel.rating}
        </span>
      </div>

      {/* Info */}
      <div className="p-5 md:p-6">
        <div className="flex items-baseline gap-2 mb-2">
          <h3 className="font-heading font-semibold text-xl text-text">
            {hotel.name}
          </h3>
          {hotel.rating && (
            <span className="text-accent font-bold text-[17px]">
              {hotel.rating}
            </span>
          )}
        </div>

        {hotel.reviews && (
          <p className="text-sm text-text-light mb-2">{hotel.reviews}</p>
        )}

        <p className="text-text-light text-base leading-relaxed">
          {hotel.description}
        </p>

        <p className="text-sm text-text-muted mt-3 font-medium">
          {hotel.days}
        </p>
      </div>
    </div>
  )
}
