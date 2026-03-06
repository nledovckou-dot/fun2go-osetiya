import { Check, X } from 'lucide-react'
import { FadeInUp } from './ui/AnimatedSection'

const INCLUDED = [
  'Проживание в горном SPA-отеле и городском отеле 9.2-9.8',
  'Европейские завтраки каждый день',
  'Транспорт по маршруту — внедорожник, доедем туда, куда такси не повезёт',
  'Приветственный обед и дружеский ужин',
  'Обед в осетинской семье в Дигории',
  'Пикник в Ингушетии — вино, чай, чурчхела, пироги',
  'Конная прогулка в горах',
  'Мастер-класс осетинских пирогов — увезёшь рецепт домой',
  'Вода каждый день',
  'Встреча и трансфер аэропорт / вокзал',
  'Организатор 24/7 — тебе не нужно думать ни о чём',
  'Гид по всем локациям',
  'Подарки и сюрпризы — не скажем какие, но будет приятно',
]

const EXCLUDED = [
  'Авиабилеты — подскажем лучшие рейсы',
  'Обеды и ужины вне программы — порекомендуем проверенные места',
  'Входные билеты в локации — обычно 100-300 руб.',
  'Личные расходы',
]

export default function Included() {
  return (
    <section className="bg-white py-10 md:py-[72px]">
      <div className="max-w-container mx-auto px-6 md:px-10 lg:px-12">
        <FadeInUp>
          <h2 className="font-heading font-bold text-[32px] md:text-[48px] text-text text-center mb-4 tracking-tight leading-tight">
            Что входит в 79 900 руб.
          </h2>
          <p className="text-text-light text-base md:text-[17px] text-center mb-10 md:mb-14 max-w-text mx-auto">
            Конная прогулка, мастер-класс пирогов, пикник с вином, SPA-отель — да, это всё уже в цене.
          </p>
        </FadeInUp>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Included */}
          <div className="lg:col-span-3 bg-bg-warm rounded-[20px] p-8 md:p-10">
            <h3 className="font-heading font-semibold text-xl md:text-2xl text-text mb-6">
              Включено
            </h3>
            <ul className="space-y-3">
              {INCLUDED.map((item, i) => (
                <FadeInUp key={i} delay={i * 0.05}>
                  <li className="flex items-start gap-3 text-text text-base md:text-[17px] leading-relaxed">
                    <Check size={20} className="text-primary shrink-0 mt-1" strokeWidth={2.5} />
                    <span>{item}</span>
                  </li>
                </FadeInUp>
              ))}
            </ul>
          </div>

          {/* Excluded */}
          <div className="lg:col-span-2">
            <h3 className="font-heading font-semibold text-lg md:text-xl text-text-light mb-6">
              Не включено
            </h3>
            <ul className="space-y-3">
              {EXCLUDED.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-text-muted text-sm leading-relaxed">
                  <X size={18} className="text-muted shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
