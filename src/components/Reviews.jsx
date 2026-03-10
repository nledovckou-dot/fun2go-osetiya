import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const REVIEWS = [
  {
    id: 1,
    name: 'Мария',
    initials: 'М',
    color: '#E8A87C',
    date: 'январь 2025',
    text: 'На январских праздниках побывала в Северной Осетии. Вторая моя поездка на Кавказ с @fun2go. Объездили на джипах всю республику и заехали в соседнюю Ингушетию. Было невероятное количество горных видов, дороги разной степени непроходимости, башни, горячие источники, пикники. Было весело, интересно, и очень вкусно. Осетинские пироги и горный глинтвейн на домашнем вине вспоминаю до сих пор.',
  },
  {
    id: 2,
    name: 'Алина',
    initials: 'А',
    color: '#D4A5E5',
    date: 'декабрь 2024',
    text: 'Эта поездка точно останется в моем сердце и памяти надолго) тур очень классный, уровень организации 🔥 Сослан, Святослав, вы очень крутые, спасибо вам большое за профессионализм, за ваши умения делать классный контент) хочется теперь попасть во все туры F2Go 🫶',
  },
  {
    id: 3,
    name: 'Катя',
    initials: 'К',
    color: '#85C7F2',
    date: 'ноябрь 2024',
    text: 'Ребята, я, наконец-то, дома, хочу сказать, это было круто, вы все крутые, за любой кипиш! Сослан и Святослав вы лучшие, благодаря вам мы все полюбили Осетию 🔥 F2GO отдельная любовь, я не ожидала, если честно, теперь только авторские беззаботные туры 💕',
  },
  {
    id: 4,
    name: 'Лена',
    initials: 'Л',
    color: '#A8D8B9',
    date: 'ноябрь 2024',
    text: '100 из 100 повторяю слова отзыва и благодарности за этот тур, эмоции переполняют! Катя за меня всё сказала! Святослав, ты супер! Желаю успехов вашей команде! 😘😘😘',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-24 bg-bg-alt py-14 md:scroll-mt-32 md:py-24 px-6 md:px-10 lg:px-12">
      <div className="max-w-container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Отзывы участников
          </p>
          <h2 className="mt-3 font-heading text-[32px] md:text-[56px] font-bold text-text leading-tight tracking-tight">
            Что пишут после возвращения домой
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {REVIEWS.map((review) => (
            <motion.div
              key={review.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col border border-border"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ring-2 ring-primary/10"
                    style={{ backgroundColor: review.color }}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-text">
                      {review.name}
                    </h3>
                    <p className="text-xs text-text-muted">
                      {review.date}
                    </p>
                  </div>
                </div>
                <Quote className="w-6 h-6 text-primary/20 flex-shrink-0" />
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-amber-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              <p className="text-[14px] md:text-[15px] leading-relaxed text-text-light flex-grow">
                {review.text}
              </p>

              <div className="pt-4 mt-4 border-t border-border">
                <p className="text-[11px] font-medium text-text-muted uppercase tracking-wide">
                  Тур в Осетию и Ингушетию
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
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
        </motion.div>
      </div>
    </section>
  )
}
