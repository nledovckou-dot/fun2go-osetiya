import { useEffect, useState } from 'react'
import { PhoneCall, Send } from 'lucide-react'
import { FadeInUp } from './ui/AnimatedSection'
import { Button } from './ui/Button'

const CONTACT_OPTIONS = ['Звонок', 'WhatsApp', 'Telegram']

function formatPhone(value) {
  const digits = value.replace(/\D/g, '')
  let formatted = '+7'
  if (digits.length > 1) formatted += ' (' + digits.slice(1, 4)
  if (digits.length > 4) formatted += ') ' + digits.slice(4, 7)
  if (digits.length > 7) formatted += '-' + digits.slice(7, 9)
  if (digits.length > 9) formatted += '-' + digits.slice(9, 11)
  return formatted
}

export default function LeadForm() {
  const [selectedDate, setSelectedDate] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [contact, setContact] = useState('Telegram')
  const [personalConsent, setPersonalConsent] = useState(true)
  const [marketingConsent, setMarketingConsent] = useState(true)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const handler = (event) => {
      setSelectedDate(event.detail || '')
    }

    window.addEventListener('fun2go:set-date', handler)
    return () => window.removeEventListener('fun2go:set-date', handler)
  }, [])

  const handlePhoneChange = (e) => {
    let value = e.target.value
    if (!value.startsWith('+7')) {
      value = '+7' + value.replace(/\D/g, '').replace(/^7?8?/, '')
    }
    setPhone(formatPhone(value))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = [
      'Новая заявка с лендинга Fun2Go',
      selectedDate ? `Даты: ${selectedDate}` : 'Даты: не выбраны',
      `Имя: ${name}`,
      `Телефон: ${phone}`,
      `Предпочтительный способ связи: ${contact}`,
    ].join('\n')

    const telegramUrl = `https://t.me/managerf2g?text=${encodeURIComponent(message)}`
    window.open(telegramUrl, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  return (
    <section id="lead-form" className="bg-white py-14 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <FadeInUp>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Ваше путешествие начинается здесь
              </p>
              <h2 className="mt-4 font-heading text-[36px] font-bold leading-tight text-text md:text-[56px]">
                Оставьте контакты — мы пришлём программу тура и ответим на все вопросы
              </h2>
              <p className="mt-5 max-w-[540px] text-base leading-relaxed text-text-light md:text-[17px]">
                Финальный блок и форма собраны по логике основного сайта: удобный способ связи, юридические согласия и быстрый переход в диалог с менеджером.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:max-w-[360px]">
                <a
                  href="tel:+79011328656"
                  className="flex items-center gap-3 rounded-full bg-primary-light px-5 py-3 text-sm font-semibold text-text no-underline transition-all hover:bg-primary-medium"
                >
                  <PhoneCall size={16} className="text-primary" />
                  +7 901 132 86 56
                </a>
                <a
                  href="https://t.me/managerf2g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-full bg-primary-light px-5 py-3 text-sm font-semibold text-text no-underline transition-all hover:bg-primary-medium"
                >
                  <Send size={16} className="text-primary" />
                  Telegram: @managerf2g
                </a>
              </div>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="rounded-[28px] bg-bg-alt p-6 shadow-md-ds md:p-8">
              {submitted ? (
                <div className="rounded-[24px] bg-white p-8 text-center">
                  <h3 className="font-heading text-3xl font-bold text-text">
                    Заявка подготовлена
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-text-light md:text-[17px]">
                    Мы открыли черновик сообщения в Telegram с вашими данными. Если мессенджер не открылся автоматически, напишите нам вручную в @{`managerf2g`}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-text">
                      Имя
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ваше имя"
                      required
                      className="min-h-[56px] w-full rounded-[16px] border border-border bg-white px-5 py-4 text-base text-text outline-none transition focus:border-primary focus:shadow-[0_0_0_4px_rgba(176,72,113,0.08)]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-text">
                      Телефон для связи
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={handlePhoneChange}
                      placeholder="+7 (___) ___-__-__"
                      required
                      className="min-h-[56px] w-full rounded-[16px] border border-border bg-white px-5 py-4 text-base tracking-wider text-text outline-none transition focus:border-primary focus:shadow-[0_0_0_4px_rgba(176,72,113,0.08)]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-text">
                      Выбранные даты
                    </label>
                    <input
                      type="text"
                      value={selectedDate}
                      readOnly
                      placeholder="Выберите даты в блоке выше или оставьте поле пустым"
                      className="min-h-[56px] w-full rounded-[16px] border border-border bg-white px-5 py-4 text-base text-text outline-none"
                    />
                  </div>

                  <fieldset>
                    <legend className="mb-3 block text-sm font-semibold uppercase tracking-wide text-text">
                      Предпочитаемый способ связи
                    </legend>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {CONTACT_OPTIONS.map((option) => (
                        <label
                          key={option}
                          className={`flex cursor-pointer items-center justify-center rounded-[16px] border px-4 py-4 text-sm font-semibold transition ${
                            contact === option
                              ? 'border-primary bg-primary text-white'
                              : 'border-border bg-white text-text'
                          }`}
                        >
                          <input
                            type="radio"
                            name="contact"
                            value={option}
                            checked={contact === option}
                            onChange={(e) => setContact(e.target.value)}
                            className="sr-only"
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <label className="flex items-start gap-3 rounded-[18px] bg-white px-4 py-4 text-sm leading-relaxed text-text">
                    <input
                      type="checkbox"
                      checked={personalConsent}
                      onChange={(e) => setPersonalConsent(e.target.checked)}
                      required
                      className="mt-1 h-4 w-4 accent-primary"
                    />
                    <span>
                      Я подтверждаю ознакомление и даю согласие на обработку моих персональных данных в порядке и на условиях, указанных в{' '}
                      <a
                        href="https://fun2go.ru/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text underline underline-offset-2"
                      >
                        Политике обработки персональных данных
                      </a>
                      .
                    </span>
                  </label>

                  <label className="flex items-start gap-3 rounded-[18px] bg-white px-4 py-4 text-sm leading-relaxed text-text">
                    <input
                      type="checkbox"
                      checked={marketingConsent}
                      onChange={(e) => setMarketingConsent(e.target.checked)}
                      className="mt-1 h-4 w-4 accent-primary"
                    />
                    <span>
                      Я подтверждаю своё согласие на получение{' '}
                      <a
                        href="https://fun2go.ru/soglasie_na_poluchenie_reklamy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text underline underline-offset-2"
                      >
                        информационной рассылки
                      </a>
                      .
                    </span>
                  </label>

                  <Button variant="primary" type="submit" fullWidth>
                    Начать путешествие
                  </Button>
                </form>
              )}
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  )
}
