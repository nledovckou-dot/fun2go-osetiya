import { Mail, MessageCircleMore, Phone, Send } from 'lucide-react'

const FOOTER_LINKS = [
  { label: 'На главную', href: '#about' },
  { label: 'О туре', href: '#highlights' },
  { label: 'Программа', href: '#program' },
  { label: 'Фото', href: '#gallery' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Что включено?', href: '#included' },
]

const POLICY_LINKS = [
  { label: 'Политика персональных данных', href: 'https://fun2go.ru/privacy' },
  { label: 'Политика возврата денежных средств', href: 'https://fun2go.ru/refund' },
  { label: 'Согласие на получение рекламной информации', href: 'https://fun2go.ru/soglasie_na_poluchenie_reklamy' },
  { label: 'Согласие на обработку персональных данных', href: 'https://fun2go.ru/personal_data' },
]

export default function Footer() {
  const handleNavClick = (e, href) => {
    if (!href.startsWith('#')) return
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-primary py-14 text-text-on-dark md:py-16">
      <div className="max-w-container mx-auto px-6 md:px-10 lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-wrap items-center gap-3 rounded-full border border-white/55 px-4 py-3">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white no-underline transition-colors hover:bg-white/10 md:text-[13px]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="https://fun2go.ru/calendar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-4 font-heading text-sm font-semibold uppercase tracking-wide text-text no-underline transition-colors hover:bg-accent-hover"
          >
            Календарь туров
          </a>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[300px_1fr_220px]">
          <div>
            <img
              src="https://static.tildacdn.com/tild6265-3533-4936-b031-616437356530/logo_footer.svg"
              alt="Fun2Go"
              className="h-20 w-auto brightness-0 invert"
            />
          </div>

          <div className="space-y-4">
            <a
              href="tel:+79011328656"
              className="inline-flex items-center gap-3 text-[24px] font-semibold text-text-on-dark no-underline transition-colors hover:text-accent md:text-[32px]"
            >
              <Phone size={24} />
              +7 901 132 86 56
            </a>
            <br />
            <a
              href="mailto:info@fun2go.ru"
              className="inline-flex items-center gap-3 text-[24px] font-semibold text-text-on-dark no-underline transition-colors hover:text-accent md:text-[32px]"
            >
              <Mail size={24} />
              info@fun2go.ru
            </a>
          </div>

          <div className="flex items-start gap-4 lg:justify-end">
            <a
              href="https://t.me/managerf2g"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary transition-transform hover:scale-105"
              aria-label="Telegram"
            >
              <Send size={18} />
            </a>
            <a
              href="https://vk.com/fun_2go"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary transition-transform hover:scale-105"
              aria-label="VK"
            >
              <img
                src="https://static.tildacdn.com/tild3832-6466-4966-a630-663730336636/vk.png"
                alt=""
                className="h-[18px] w-[18px]"
              />
            </a>
            <a
              href="https://max.ru/join/JKdIWwh_WjHRDlnE7dIZCnpduxtLCEjdBWMfoaQiE4Y"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary transition-transform hover:scale-105"
              aria-label="MAX"
            >
              <MessageCircleMore size={18} />
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-8 border-t border-white/15 pt-8 md:grid-cols-2">
          <div className="space-y-3 text-sm leading-relaxed text-white/70">
            <p>
              Данная услуга не является туроператорской деятельностью. Под туром или путешествием подразумевается разовая помощь в организации поездки от имени заказчика согласно договору поручения.
            </p>
            <p>
              ИП Рец Мария Сергеевна, ИНН 781409416955, ОГРНИП 318784700272568.
            </p>
            <p>© Все права защищены</p>
            <p>*Meta, которой принадлежат Instagram и Facebook, признана экстремистской в России</p>
          </div>

          <div className="space-y-3 text-sm leading-relaxed text-white/80 md:text-right">
            {POLICY_LINKS.map((link) => (
              <div key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 no-underline transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
