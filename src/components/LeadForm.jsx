import { useState } from 'react'
import { Send } from 'lucide-react'
import { FadeInUp } from './ui/AnimatedSection'
import { Button } from './ui/Button'

const BITRIX_WEBHOOK = 'https://fun2go.bitrix24.ru/rest/20587/mxjldwhp5oneq7gk'
const CONTACT_OPTIONS = ['Звонок', 'Telegram', 'MAX']

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
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [contact, setContact] = useState('Telegram')
  const [personalConsent, setPersonalConsent] = useState(true)
  const [marketingConsent, setMarketingConsent] = useState(true)
  const [submitting, setSubmitting] = useState(false)


  const handlePhoneChange = (e) => {
    let value = e.target.value
    if (!value.startsWith('+7')) {
      value = '+7' + value.replace(/\D/g, '').replace(/^7?8?/, '')
    }
    setPhone(formatPhone(value))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const params = new URLSearchParams()
      params.append('fields[TITLE]', `Заявка с лендинга: ${name}`)
      params.append('fields[NAME]', name)
      params.append('fields[PHONE][0][VALUE]', phone)
      params.append('fields[PHONE][0][VALUE_TYPE]', 'WORK')
      params.append('fields[SOURCE_ID]', 'WEB')
      params.append('fields[COMMENTS]', `Предпочтительный способ связи: ${contact}`)

      await fetch(`${BITRIX_WEBHOOK}/crm.lead.add`, {
        method: 'POST',
        body: params,
      })
    } catch {
      // Если Bitrix недоступен — не блокируем пользователя
    }

    setSubmitting(false)
    window.location.href = 'https://fun2go.ru/thanks-osetiya'
  }

  return (
    <section id="lead-form" className="bg-white py-10 md:py-16">
      <div className="max-w-container mx-auto px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[540px]">
          <FadeInUp>
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Ваше путешествие начинается здесь
              </p>

              <div className="mt-4 flex justify-center">
                <a
                  href="https://t.me/managerf2g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-primary-light px-5 py-3 text-sm font-semibold text-text no-underline transition-all hover:bg-primary-medium"
                >
                  <Send size={16} className="text-primary" />
                  Telegram: @managerf2g
                </a>
              </div>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="rounded-[24px] bg-bg-alt p-5 shadow-md-ds md:p-6">
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-text">
                    Имя
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ваше имя"
                    required
                    className="min-h-[46px] w-full rounded-[14px] border border-border bg-white px-4 py-3 text-base text-text outline-none transition focus:border-primary focus:shadow-[0_0_0_4px_rgba(176,72,113,0.08)]"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-text">
                    Телефон для связи
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="+7 (___) ___-__-__"
                    required
                    className="min-h-[46px] w-full rounded-[14px] border border-border bg-white px-4 py-3 text-base tracking-wider text-text outline-none transition focus:border-primary focus:shadow-[0_0_0_4px_rgba(176,72,113,0.08)]"
                  />
                </div>


                <fieldset>
                  <legend className="mb-2 block text-xs font-semibold uppercase tracking-wide text-text">
                    Предпочитаемый способ связи
                  </legend>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {CONTACT_OPTIONS.map((option) => (
                      <label
                        key={option}
                        className={`flex cursor-pointer items-center justify-center rounded-[12px] border px-3 py-3 text-sm font-semibold transition ${
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

                <label className="flex items-start gap-3 rounded-[14px] bg-white px-3 py-3 text-xs leading-relaxed text-text">
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

                <label className="flex items-start gap-3 rounded-[14px] bg-white px-3 py-3 text-xs leading-relaxed text-text">
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

                <Button variant="primary" type="submit" fullWidth disabled={submitting}>
                  {submitting ? 'Отправляем...' : 'Начать путешествие'}
                </Button>
              </form>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  )
}
