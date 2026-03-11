import { ArrowUpRight, Check, Plane, Wallet, UtensilsCrossed } from 'lucide-react'
import { FadeInUp } from './ui/AnimatedSection'

const INCLUDED = [
  '2-местное проживание',
  'Вкусные европейские завтраки',
  'Индивидуальный трансфер в аэропорт',
  'Внедорожник с водителем по указанному в программе маршруту',
  'Приветственный обед и ужин',
  'Обед в Дигории',
  'Входные билеты и экскурсии в указанные в программе места',
  'Пикник-обед в Ингушетии с вином и горными чаями (5 дней)',
  'Подарки и маленькие сюрпризы от компании',
  'Вода каждый день по маршруту',
  'Конная прогулка',
  'Мастер-класс по приготовлению осетинских пирогов (5 дней)',
  'Встреча в аэропорту или на ж/д вокзале',
  'Сопровождение организаторами тура 24/7',
]

const EXCLUDED = [
  'Обеды и ужины',
  'Личные расходы',
  'Чаевые водителям и гидам',
  'Авиаперелёты',
]

export default function Included() {
  return (
    <section id="included" className="bg-white py-10 md:py-[72px]">
      <div className="max-w-container mx-auto px-4 md:px-10 lg:px-12">
        <div className="overflow-hidden rounded-[20px] md:rounded-[32px] md:bg-[url('https://static.tildacdn.com/tild3266-3537-4965-a162-353764356233/322.jpg')] bg-cover bg-center p-0 md:p-6">
          <div className="grid gap-3 md:gap-4 lg:grid-cols-[280px_1fr]">
            <FadeInUp>
              <div className="rounded-[20px] md:rounded-[28px] bg-primary p-6 md:p-8 text-text-on-dark">
                <img
                  src="https://static.tildacdn.com/tild6265-3533-4936-b031-616437356530/logo_footer.svg"
                  alt="Fun2Go"
                  className="mb-6 md:mb-10 h-8 w-auto brightness-0 invert"
                />
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                  Стоимость тура
                </p>
                <div className="mt-4 grid gap-4 min-[430px]:grid-cols-2 md:mt-8 md:block md:space-y-8">
                  <div>
                    <p className="inline-flex items-start gap-1 whitespace-nowrap font-heading text-[32px] md:text-[44px] font-bold leading-none text-accent sm:text-5xl">
                      <span>49 500</span>
                      <span className="translate-y-[2px] text-[0.72em]">₽</span>
                    </p>
                    <p className="mt-1 md:mt-2 text-sm md:text-lg font-semibold uppercase tracking-wide">3-дневный тур</p>
                  </div>
                  <div>
                    <p className="inline-flex items-start gap-1 whitespace-nowrap font-heading text-[32px] md:text-[44px] font-bold leading-none text-accent sm:text-5xl">
                      <span>84 900</span>
                      <span className="translate-y-[2px] text-[0.72em]">₽</span>
                    </p>
                    <p className="mt-1 md:mt-2 text-sm md:text-lg font-semibold uppercase tracking-wide">5-дневный тур</p>
                  </div>
                </div>
                <div className="mt-6 md:mt-12 flex items-center justify-between gap-4">
                  <p className="max-w-[150px] text-sm font-semibold leading-relaxed text-white/80">
                    *бронирование по предоплате 30 %
                  </p>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/25">
                    <ArrowUpRight className="text-accent" size={30} strokeWidth={1.8} />
                  </div>
                </div>
              </div>
            </FadeInUp>

            <div className="rounded-[20px] md:rounded-[28px] bg-white/95 p-4 md:p-10 shadow-lg-ds backdrop-blur-[6px]">
              <div className="grid gap-8 md:gap-10 lg:grid-cols-[1fr_280px]">
                <div>
                  <FadeInUp>
                    <h2 className="font-heading text-[24px] md:text-[42px] font-bold uppercase tracking-tight text-text">
                      Включено в стоимость:
                    </h2>
                  </FadeInUp>

                  <div className="mt-8 grid gap-x-10 gap-y-3 md:grid-cols-2">
                    {INCLUDED.map((item, i) => (
                      <FadeInUp key={item} delay={i * 0.03}>
                        <div className="flex items-start gap-3 text-base leading-relaxed text-text md:text-[17px]">
                          <Check size={18} className="mt-1 shrink-0 text-primary" strokeWidth={2.8} />
                          <span>{item}</span>
                        </div>
                      </FadeInUp>
                    ))}
                  </div>
                </div>

                <div>
                  <FadeInUp delay={0.2}>
                    <h3 className="font-heading text-[28px] font-bold uppercase tracking-tight text-text md:text-[32px]">
                      Не входит в стоимость:
                    </h3>
                  </FadeInUp>

                  <div className="mt-8 space-y-4">
                    {EXCLUDED.map((item, i) => (
                      <FadeInUp key={item} delay={0.25 + i * 0.04}>
                        <div className="flex items-start gap-3 text-base leading-relaxed text-text md:text-[17px]">
                          {i === 0 && <UtensilsCrossed size={18} className="mt-1 shrink-0 text-primary" />}
                          {i === 1 && <Wallet size={18} className="mt-1 shrink-0 text-primary" />}
                          {i === 2 && <Check size={18} className="mt-1 shrink-0 text-primary" strokeWidth={2.8} />}
                          {i === 3 && <Plane size={18} className="mt-1 shrink-0 text-primary" />}
                          <span>{item}</span>
                        </div>
                      </FadeInUp>
                    ))}
                  </div>

                  <FadeInUp delay={0.45}>
                    <div className="mt-8 rounded-[24px] bg-bg-warm p-5">
                      <p className="text-base font-semibold text-primary md:text-[17px]">
                        Но мы поможем в подборе рейса!
                      </p>
                    </div>
                  </FadeInUp>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
