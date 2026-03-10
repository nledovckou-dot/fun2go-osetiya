import { ExternalLink } from 'lucide-react'
import { FadeInUp } from './ui/AnimatedSection'

const REVIEWS = [
  {
    quote: 'На январских праздниках побывала в Северной Осетии. Вторая моя поездка на Кавказ с @fun2go. Объездили на джипах всю республику и заехали в соседнюю Ингушетию. Было невероятное количество горных видов, дороги разной степени непроходимости, башни, горячие источники, пикники. Было весело, интересно, и очень вкусно. Осетинские пироги и горный глинтвейн на домашнем вине вспоминаю до сих пор. Спасибо за чудесную компанию и хорошую организацию @maria_retz и все ребята-гиды.',
    className: 'lg:col-span-3',
  },
  {
    quote: 'Эта поездка точно останется в моем сердце и памяти надолго) тур очень классный, уровень организации 🔥 Сослан, Святослав, вы очень крутые, спасибо вам большое за профессионализм, за ваши умения делать классный контент) хочется теперь попасть во все туры F2Go 🫶 Сердце разрывалось, не хотелось уезжать 💔 классные ребята собрались 😍 огромная благодарность всей команде 🙏',
    className: 'lg:col-span-3',
  },
  {
    quote: 'Ребята, я, наконец-то, дома, хочу сказать, это было круто, вы все крутые, за любой кипиш! Сослан и Святослав вы лучшие, благодаря вам мы все полюбили Осетию 🔥 F2GO отдельная любовь, я не ожидала, если честно, теперь только авторские беззаботные туры 💕',
    className: 'lg:col-span-3',
  },
  {
    quote: '100 из 100 повторяю слова отзыва и благодарности за этот тур, эмоции переполняют! Катя за меня всё сказала! Святослав, ты супер! Желаю успехов вашей команде! 😘😘😘',
    className: 'lg:col-span-1',
  },
]

export default function Reviews() {
  return (
    <section id="reviews" className="bg-primary py-14 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-10 lg:px-12">
        <FadeInUp>
          <h2 className="max-w-[320px] font-heading font-bold uppercase text-[26px] leading-[0.94] tracking-[-0.03em] text-text-on-dark sm:max-w-none sm:text-[42px] sm:tracking-tight md:text-[72px]">
            Отзывы наших
            <br />
            путешественников
          </h2>
          <p className="mt-5 max-w-[720px] text-base leading-relaxed text-white/75 md:text-[17px]">
            Взяли отзывы в подаче основного сайта: живые сообщения, настоящие эмоции и без вычищенных формулировок.
          </p>
        </FadeInUp>

        <div className="mt-10 grid gap-5 lg:grid-cols-6">
          <ReviewCard review={REVIEWS[0]} />
          <ReviewCard review={REVIEWS[1]} />
          <ReviewCard review={REVIEWS[2]} />

          <FadeInUp delay={0.15}>
            <div className="overflow-hidden rounded-[24px] bg-white/10 lg:col-span-2">
              <img
                src="https://static.tildacdn.com/tild3063-6663-4531-b034-333266656464/IMG_0596.png"
                alt="Группа путешественников Fun2Go в Осетии"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </FadeInUp>

          <ReviewCard review={REVIEWS[3]} />
        </div>
      </div>
    </section>
  )
}

function ReviewCard({ review }) {
  return (
    <FadeInUp>
      <article className={`rounded-[24px] bg-[rgba(255,255,255,0.18)] p-6 text-text-on-dark backdrop-blur-[3px] ${review.className}`}>
        <p className="text-base leading-relaxed md:text-[17px]">
          {review.quote}
        </p>

        <a
          href="https://fun2go.ru/tur_v_osetiyu_3_5_dnej"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/18 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white no-underline transition-colors hover:bg-white/24"
        >
          Оригинал
          <ExternalLink size={14} />
        </a>
      </article>
    </FadeInUp>
  )
}
