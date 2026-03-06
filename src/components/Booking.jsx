import { useState, useRef } from 'react'
import { Calendar, Users } from 'lucide-react'
import { FadeInUp } from './ui/AnimatedSection'
import { Button } from './ui/Button'

const DATES = [
  { dates: '22-26 апреля', seats: 12, price: '79 900' },
  { dates: '13-17 мая', seats: 12, price: '79 900' },
  { dates: '20-24 мая', seats: 12, price: '79 900' },
  { dates: '3-7 июня', seats: 12, price: '79 900' },
  { dates: '17-21 июня', seats: 12, price: '79 900' },
]

export default function Booking() {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const formRef = useRef(null)

  const formatPhone = (value) => {
    const digits = value.replace(/\D/g, '')
    let formatted = '+7'
    if (digits.length > 1) formatted += ' (' + digits.slice(1, 4)
    if (digits.length > 4) formatted += ') ' + digits.slice(4, 7)
    if (digits.length > 7) formatted += '-' + digits.slice(7, 9)
    if (digits.length > 9) formatted += '-' + digits.slice(9, 11)
    return formatted
  }

  const handlePhoneChange = (e) => {
    let value = e.target.value
    if (!value.startsWith('+7')) {
      value = '+7' + value.replace(/\D/g, '').replace(/^7?8?/, '')
    }
    setPhone(formatPhone(value))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="booking" className="bg-bg-alt py-14 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-10 lg:px-12">
        <FadeInUp>
          <h2 className="font-heading font-bold text-[32px] md:text-[48px] text-text text-center mb-4 tracking-tight leading-tight">
            12 мест в группе. Какие даты твои?
          </h2>
          <p className="text-text-light text-base md:text-[17px] text-center mb-12 md:mb-16 max-w-text mx-auto">
            Предоплата 30 000 руб. бронирует твоё место. Остаток — в первый день тура. Рассрочка до 24 месяцев от Т-Банк.
          </p>
        </FadeInUp>

        {/* Desktop: grid, Mobile: horizontal scroll */}
        <div className="hidden md:grid md:grid-cols-3 gap-5 mb-10">
          {DATES.map((d, i) => (
            <FadeInUp key={i} delay={i * 0.1}>
              <DateCard date={d} onBook={() => {
                formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
              }} />
            </FadeInUp>
          ))}
        </div>

        <div className="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4 -mx-6 px-6 mb-8">
          {DATES.map((d, i) => (
            <div key={i} className="min-w-[260px] snap-start shrink-0">
              <DateCard date={d} onBook={() => {
                formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
              }} />
            </div>
          ))}
        </div>

        {/* Info under cards */}
        <FadeInUp delay={0.2}>
          <div className="text-center space-y-2 mb-12">
            <p className="text-text text-base">
              Предоплата 30 000 руб. — бронирует место. Остаток — в первый день.
            </p>
            <p className="text-text-light text-sm">
              Рассрочка до 24 мес. от Т-Банк — от 3 329 руб./мес.
            </p>
            <div className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-lg bg-accent text-text text-sm font-semibold">
              Кэшбэк 5% + 1 500 бонусов за рекомендацию друзьям
            </div>
          </div>
        </FadeInUp>

        {/* Booking form */}
        <FadeInUp delay={0.3}>
          <div ref={formRef} className="max-w-[480px] mx-auto">
            {submitted ? (
              <div className="bg-white rounded-[20px] p-8 md:p-10 shadow-md-ds text-center">
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-text mb-4">
                  Горы уже ждут тебя!
                </h3>
                <p className="text-text-light text-base md:text-[17px] leading-relaxed mb-4">
                  Заявка получена. Мы свяжемся с тобой в течение 2 часов — расскажем детали и ответим на вопросы.
                </p>
                <p className="text-text-light text-base leading-relaxed mb-6">
                  А пока можешь начать собирать чемодан. Удобная обувь, тёплая куртка и купальник — обязательно.
                </p>
                <a
                  href="https://t.me/managerf2g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline"
                >
                  Есть вопросы? Пиши в Telegram — @managerf2g
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-[20px] p-8 md:p-10 shadow-md-ds">
                <h3 className="font-heading font-semibold text-xl text-text mb-6 text-center">
                  Забронировать место
                </h3>

                <div className="space-y-4 mb-6">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-5 py-4 text-base text-text bg-white border-[1.5px] border-border rounded-[12px] outline-none transition-all duration-300 focus:border-primary focus:shadow-[0_0_0_4px_rgba(176,72,113,0.08)] placeholder:text-text-muted min-h-[56px] font-body"
                  />
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={phone}
                    onChange={handlePhoneChange}
                    required
                    className="w-full px-5 py-4 text-base text-text bg-white border-[1.5px] border-border rounded-[12px] outline-none transition-all duration-300 focus:border-primary focus:shadow-[0_0_0_4px_rgba(176,72,113,0.08)] placeholder:text-text-muted min-h-[56px] font-body tracking-wider"
                  />
                </div>

                <Button variant="primary" type="submit" fullWidth>
                  Забронировать за 30 000 руб.
                </Button>

                <div className="text-center mt-4">
                  <a
                    href="https://t.me/managerf2g"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium text-base hover:underline no-underline"
                  >
                    Задать вопрос в Telegram
                  </a>
                </div>
              </form>
            )}
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}

function DateCard({ date, onBook }) {
  return (
    <div className="bg-white rounded-[20px] p-7 border-2 border-border text-center transition-all duration-300 hover:border-primary hover:shadow-lg-ds hover:-translate-y-0.5 flex flex-col gap-4 h-full">
      <h3 className="font-heading font-semibold text-xl md:text-2xl text-text">
        {date.dates}
      </h3>

      <div className="flex items-center justify-center gap-2 text-text-light text-sm">
        <Users size={16} />
        <span>{date.seats} мест</span>
      </div>

      <p className="font-heading font-bold text-2xl md:text-3xl text-primary">
        {date.price} руб.
      </p>

      <Button variant="primary" fullWidth onClick={onBook} className="!min-w-0 mt-auto">
        Забронировать
      </Button>
    </div>
  )
}
