import { Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-text py-16 md:py-16">
      <div className="max-w-container mx-auto px-6 md:px-10 lg:px-12">
        {/* Top: Logo + description */}
        <div className="text-center mb-10">
          <img
            src="https://static.tildacdn.com/tild6265-3533-4936-b031-616437356530/logo_footer.svg"
            alt="Fun2Go"
            className="h-8 mx-auto mb-4 brightness-0 invert"
          />
          <p className="text-text-on-dark text-base leading-relaxed">
            Fun2Go — авторские туры по миру и России
          </p>
          <p className="text-text-on-dark-muted text-sm mt-1">
            800+ путешественников · 22 направления · С 2022 года
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-10" />

        {/* Contacts */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-8">
          <a
            href="tel:+79011328656"
            className="inline-flex items-center gap-2 text-text-on-dark font-medium text-base no-underline hover:text-accent transition-colors"
          >
            <Phone size={18} className="text-text-on-dark-muted" />
            +7 901 132 86 56
          </a>
          <a
            href="mailto:info@fun2go.ru"
            className="inline-flex items-center gap-2 text-text-on-dark font-medium text-base no-underline hover:text-accent transition-colors"
          >
            <Mail size={18} className="text-text-on-dark-muted" />
            info@fun2go.ru
          </a>
          <a
            href="https://t.me/managerf2g"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-text-on-dark font-medium text-base no-underline hover:text-accent transition-colors"
          >
            <img
              src="https://static.tildacdn.com/tild6637-3462-4466-b764-366131623831/telegram.png"
              alt="Telegram"
              className="w-[18px] h-[18px] opacity-70"
            />
            @managerf2g
          </a>
          <a
            href="https://vk.com/fun2go"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-text-on-dark font-medium text-base no-underline hover:text-accent transition-colors"
          >
            <img
              src="https://static.tildacdn.com/tild3832-6466-4966-a630-663730336636/vk.png"
              alt="VK"
              className="w-[18px] h-[18px] opacity-70"
            />
            VK
          </a>
        </div>

        {/* Bonuses */}
        <div className="text-center mb-8">
          <p className="text-accent text-sm">
            Рассрочка до 24 мес. от Т-Банк
          </p>
          <p className="text-accent text-sm">
            Кэшбэк 5% + 1 500 бонусов за друга
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8" />

        {/* Legal */}
        <p className="text-center text-[12px] text-white/50">
          ИП Рец Мария Сергеевна, ИНН 781409416955
        </p>
      </div>
    </footer>
  )
}
