import { motion } from 'framer-motion'
import TestimonialsColumn from './ui/TestimonialsColumn'

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
    text: 'Эта поездка точно останется в моем сердце и памяти надолго) тур очень классный, уровень организации \u{1F525} Сослан, Святослав, вы очень крутые, спасибо вам большое за профессионализм, за ваши умения делать классный контент) хочется теперь попасть во все туры F2Go \u{1FAF6}',
  },
  {
    id: 3,
    name: 'Катя',
    initials: 'К',
    color: '#85C7F2',
    date: 'ноябрь 2024',
    text: 'Ребята, я, наконец-то, дома, хочу сказать, это было круто, вы все крутые, за любой кипиш! Сослан и Святослав вы лучшие, благодаря вам мы все полюбили Осетию \u{1F525} F2GO отдельная любовь, я не ожидала, если честно, теперь только авторские беззаботные туры \u{1F495}',
  },
  {
    id: 4,
    name: 'Лена',
    initials: 'Л',
    color: '#A8D8B9',
    date: 'ноябрь 2024',
    text: '100 из 100 повторяю слова отзыва и благодарности за этот тур, эмоции переполняют! Катя за меня всё сказала! Святослав, ты супер! Желаю успехов вашей команде! \u{1F618}\u{1F618}\u{1F618}',
  },
]

const firstColumn = REVIEWS.slice(0, 2)
const secondColumn = REVIEWS.slice(2, 4)

export default function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-24 bg-bg-alt py-14 md:scroll-mt-32 md:py-24 px-6 md:px-10 lg:px-12 relative">
      <div className="max-w-container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Отзывы участников
          </p>
          <h2 className="mt-3 font-heading text-[32px] md:text-[56px] font-bold text-text leading-tight tracking-tight text-center">
            Что пишут после возвращения домой
          </h2>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
        </div>

      </div>
    </section>
  )
}
