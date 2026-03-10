import { motion } from 'framer-motion'
import { FadeInUp } from './ui/AnimatedSection'

const REVIEWS = [
  {
    name: 'Мария',
    initials: 'М',
    color: '#E8A87C',
    date: 'январь 2025',
    platform: 'telegram',
    quote: 'На январских праздниках побывала в Северной Осетии. Вторая моя поездка на Кавказ с @fun2go. Объездили на джипах всю республику и заехали в соседнюю Ингушетию. Было невероятное количество горных видов, дороги разной степени непроходимости, башни, горячие источники, пикники. Было весело, интересно, и очень вкусно. Осетинские пироги и горный глинтвейн на домашнем вине вспоминаю до сих пор. Спасибо за чудесную компанию и хорошую организацию @maria_retz и все ребята-гиды.',
  },
  {
    name: 'Алина',
    initials: 'А',
    color: '#D4A5E5',
    date: 'декабрь 2024',
    platform: 'telegram',
    quote: 'Эта поездка точно останется в моем сердце и памяти надолго) тур очень классный, уровень организации 🔥 Сослан, Святослав, вы очень крутые, спасибо вам большое за профессионализм, за ваши умения делать классный контент) хочется теперь попасть во все туры F2Go 🫶 Сердце разрывалось, не хотелось уезжать 💔 классные ребята собрались 😍 огромная благодарность всей команде 🙏',
  },
  {
    name: 'Катя',
    initials: 'К',
    color: '#85C7F2',
    date: 'ноябрь 2024',
    platform: 'telegram',
    quote: 'Ребята, я, наконец-то, дома, хочу сказать, это было круто, вы все крутые, за любой кипиш! Сослан и Святослав вы лучшие, благодаря вам мы все полюбили Осетию 🔥 F2GO отдельная любовь, я не ожидала, если честно, теперь только авторские беззаботные туры 💕',
  },
  {
    name: 'Лена',
    initials: 'Л',
    color: '#A8D8B9',
    date: 'ноябрь 2024',
    platform: 'telegram',
    quote: '100 из 100 повторяю слова отзыва и благодарности за этот тур, эмоции переполняют! Катя за меня всё сказала! Святослав, ты супер! Желаю успехов вашей команде! 😘😘😘',
  },
]

function TelegramIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  )
}

function CheckIcon({ className }) {
  return (
    <svg viewBox="0 0 16 11" fill="none" className={className}>
      <path d="M1 5.5L5.5 10L15 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ReadIcon({ className }) {
  return (
    <svg viewBox="0 0 20 11" fill="none" className={className}>
      <path d="M1 5.5L5.5 10L15 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 5.5L9.5 10L19 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ReviewBubble({ review, index }) {
  return (
    <FadeInUp delay={index * 0.08}>
      <div className="group flex items-start gap-3">
        {/* Avatar */}
        <div
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-md md:h-11 md:w-11"
          style={{ backgroundColor: review.color }}
        >
          {review.initials}
        </div>

        {/* Message bubble */}
        <div className="relative min-w-0 max-w-[calc(100%-56px)] flex-1">
          {/* Tail */}
          <div
            className="absolute -left-[6px] top-0 h-4 w-4 rounded-bl-[12px]"
            style={{
              background: 'rgba(255,255,255,0.22)',
              clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
            }}
          />

          <div className="rounded-[18px] rounded-tl-[4px] bg-[rgba(255,255,255,0.22)] px-4 pb-3 pt-2.5 backdrop-blur-sm transition-colors duration-300 group-hover:bg-[rgba(255,255,255,0.28)]">
            {/* Header */}
            <div className="mb-1.5 flex items-center gap-2">
              <span className="text-[13px] font-semibold" style={{ color: review.color }}>
                {review.name}
              </span>
              <TelegramIcon className="h-3.5 w-3.5 text-white/40" />
            </div>

            {/* Message text */}
            <p className="text-[14px] leading-[1.55] text-white/92 md:text-[15px]">
              {review.quote}
            </p>

            {/* Footer: time + read status */}
            <div className="mt-2 flex items-center justify-end gap-1.5">
              <span className="text-[11px] text-white/40">{review.date}</span>
              <ReadIcon className="h-2.5 w-4 text-[#5EB5F7]" />
            </div>
          </div>
        </div>
      </div>
    </FadeInUp>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-primary py-14 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-10 lg:px-12">
        <FadeInUp>
          <div className="flex items-center gap-3">
            <TelegramIcon className="h-7 w-7 text-white/60 md:h-8 md:w-8" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/50">
              Настоящие отзывы из Telegram
            </p>
          </div>
          <h2 className="mt-4 max-w-[620px] font-heading text-[28px] font-bold leading-[0.94] tracking-tight text-text-on-dark sm:text-[42px] md:text-[60px]">
            Что пишут после
            <br className="hidden sm:block" />
            возвращения домой
          </h2>
          <p className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-white/65 md:text-base">
            Без редактуры и вычищенных формулировок — живые сообщения из общего чата тура, где люди делятся впечатлениями сразу после поездки.
          </p>
        </FadeInUp>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-8">
          {/* Left column: chat bubbles */}
          <div className="flex flex-col gap-5">
            {REVIEWS.map((review, index) => (
              <ReviewBubble key={review.name} review={review} index={index} />
            ))}
          </div>

          {/* Right column: stats */}
          <div className="flex flex-col gap-5">
            <FadeInUp delay={0.2}>
              <div className="rounded-[20px] border border-white/10 bg-[rgba(255,255,255,0.1)] p-5 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="font-heading text-[28px] font-bold leading-none text-white">50+</div>
                    <div className="mt-1.5 text-[12px] leading-snug text-white/50">отзывов в чате тура</div>
                  </div>
                  <div>
                    <div className="font-heading text-[28px] font-bold leading-none text-white">4.9</div>
                    <div className="mt-1.5 text-[12px] leading-snug text-white/50">средняя оценка</div>
                  </div>
                </div>

                <div className="mt-5 border-t border-white/10 pt-4">
                  <a
                    href="https://fun2go.ru/tur_v_osetiyu_3_5_dnej"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[13px] font-medium text-white/60 no-underline transition-colors hover:text-white/90"
                  >
                    Оригиналы на fun2go.ru
                    <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
                      <path d="M6 3h7v7M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  )
}
