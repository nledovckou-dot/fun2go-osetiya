import { FadeInUp } from './ui/AnimatedSection'

const REVIEWS = [
  {
    name: 'Мария',
    initials: 'М',
    color: '#E8A87C',
    date: 'январь 2025',
    quote:
      'На январских праздниках побывала в Северной Осетии. Вторая моя поездка на Кавказ с @fun2go. Объездили на джипах всю республику и заехали в соседнюю Ингушетию. Было невероятное количество горных видов, дороги разной степени непроходимости, башни, горячие источники, пикники. Было весело, интересно, и очень вкусно. Осетинские пироги и горный глинтвейн на домашнем вине вспоминаю до сих пор.',
  },
  {
    name: 'Алина',
    initials: 'А',
    color: '#D4A5E5',
    date: 'декабрь 2024',
    quote:
      'Эта поездка точно останется в моем сердце и памяти надолго) тур очень классный, уровень организации 🔥 Сослан, Святослав, вы очень крутые, спасибо вам большое за профессионализм, за ваши умения делать классный контент) хочется теперь попасть во все туры F2Go 🫶',
  },
  {
    name: 'Катя',
    initials: 'К',
    color: '#85C7F2',
    date: 'ноябрь 2024',
    quote:
      'Ребята, я, наконец-то, дома, хочу сказать, это было круто, вы все крутые, за любой кипиш! Сослан и Святослав вы лучшие, благодаря вам мы все полюбили Осетию 🔥 F2GO отдельная любовь, я не ожидала, если честно, теперь только авторские беззаботные туры 💕',
  },
  {
    name: 'Лена',
    initials: 'Л',
    color: '#A8D8B9',
    date: 'ноябрь 2024',
    quote:
      '100 из 100 повторяю слова отзыва и благодарности за этот тур, эмоции переполняют! Катя за меня всё сказала! Святослав, ты супер! Желаю успехов вашей команде! 😘😘😘',
  },
]

export default function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-24 bg-bg-alt py-14 md:scroll-mt-32 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-10 lg:px-12">
        <FadeInUp>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Отзывы участников
            </p>
            <h2 className="mt-3 font-heading text-[32px] font-bold leading-tight tracking-tight text-text md:text-[56px]">
              Что пишут после возвращения домой
            </h2>
          </div>
        </FadeInUp>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((review, index) => (
            <FadeInUp key={review.name} delay={index * 0.08}>
              <div className="flex h-full flex-col rounded-[22px] border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                <blockquote className="flex-1 text-[14px] leading-relaxed text-text-light md:text-[15px]">
                  &laquo;{review.quote}&raquo;
                </blockquote>

                <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <div
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: review.color }}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-text">{review.name}</div>
                    <div className="text-xs text-text-muted">{review.date}</div>
                  </div>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>

        <FadeInUp delay={0.4}>
          <div className="mt-8 text-center">
            <a
              href="https://fun2go.ru/tur_v_osetiyu_3_5_dnej"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-text-muted no-underline transition-colors hover:text-primary"
            >
              Все отзывы на fun2go.ru
              <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
                <path d="M6 3h7v7M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
