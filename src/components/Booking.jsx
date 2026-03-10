import { Users } from 'lucide-react'
import { FadeInUp } from './ui/AnimatedSection'
import { Button } from './ui/Button'

const DATES = [
  { dates: '22-26 апреля', seats: 12 },
  { dates: '13-17 мая', seats: 12 },
  { dates: '20-24 мая', seats: 12 },
  { dates: '3-7 июня', seats: 12 },
  { dates: '17-21 июня', seats: 12 },
]

export default function Booking() {
  const handleBook = (selectedDate) => {
    window.dispatchEvent(new CustomEvent('fun2go:set-date', { detail: selectedDate }))
    document.querySelector('#lead-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="booking" className="bg-bg-alt py-14 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-10 lg:px-12">
        <FadeInUp>
          <h2 className="font-heading font-bold text-[32px] md:text-[48px] text-text text-center mb-4 tracking-tight leading-tight">
            12 мест в группе. Какие даты вам подходят?
          </h2>
          <p className="text-text-light text-base md:text-[17px] text-center mb-12 md:mb-16 max-w-text mx-auto">
            Предоплата 30 000 руб. бронирует ваше место. Остаток — в первый день тура. Рассрочка до 24 месяцев от Т-Банк.
          </p>
        </FadeInUp>

        <div className="hidden md:grid md:grid-cols-3 gap-5 mb-10">
          {DATES.map((date, i) => (
            <FadeInUp key={date.dates} delay={i * 0.1}>
              <DateCard date={date} onBook={() => handleBook(date.dates)} />
            </FadeInUp>
          ))}
        </div>

        <div className="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4 mb-8">
          {DATES.map((date) => (
            <div key={date.dates} className="min-w-[260px] snap-start shrink-0">
              <DateCard date={date} onBook={() => handleBook(date.dates)} />
            </div>
          ))}
        </div>

        <FadeInUp delay={0.2}>
          <div className="text-center space-y-2">
            <p className="text-text text-base">
              В карточках оставили только даты и кнопку «Забронировать», как было указано в документе.
            </p>
            <p className="text-text-light text-sm">
              После выбора даты вы перейдёте к финальной форме заявки.
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}

function DateCard({ date, onBook }) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-[22px] border-2 border-border bg-white p-7 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:shadow-lg-ds">
      <h3 className="font-heading text-xl font-semibold text-text md:text-2xl">
        {date.dates}
      </h3>

      <div className="flex items-center justify-center gap-2 text-sm text-text-light">
        <Users size={16} />
        <span>{date.seats} мест</span>
      </div>

      <Button variant="primary" fullWidth onClick={onBook} className="!min-w-0 mt-auto">
        Забронировать
      </Button>
    </div>
  )
}
