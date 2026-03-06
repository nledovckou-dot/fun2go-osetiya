import { WifiOff, MountainSnow, Users, Compass } from 'lucide-react'
import { FadeInUp } from './ui/AnimatedSection'

const REASONS = [
  {
    Icon: WifiOff,
    title: 'Мы знаем, где не ловит связь',
    text: 'И как сделать так, чтобы в горах тебя никто не побеспокоил. Здесь нет рабочих чатов, звонков и слова «срочно».',
  },
  {
    Icon: MountainSnow,
    title: 'Выбираем видовые отели',
    text: 'Закаты и рассветы в горах станут твоей новой реальностью. Не из ленты Instagram — из окна номера.',
  },
  {
    Icon: Users,
    title: 'Подбираем группу по эмоциям и настроению',
    text: 'Здесь не бывает случайных людей. 12 человек, которые на одной волне.',
  },
  {
    Icon: Compass,
    title: 'Наши гиды — лучшие психологи',
    text: 'Эмпаты, которые знают, как открыть тебе мир другими глазами. Не лекция, не экскурсия — разговор.',
  },
]

export default function WhyUs() {
  return (
    <section className="bg-bg-alt py-14 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-10 lg:px-12">
        <FadeInUp>
          <h2 className="font-heading font-bold text-[32px] md:text-[48px] text-text text-center mb-12 md:mb-16 tracking-tight leading-tight">
            Почему мы точно вернём тебя новым и заряженным
          </h2>
        </FadeInUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map((reason, i) => (
            <FadeInUp key={i} delay={i * 0.1}>
              <div className="bg-white rounded-[20px] p-8 md:p-8 shadow-md-ds border border-border transition-all duration-400 hover:-translate-y-1 hover:shadow-lg-ds h-full">
                {/* Icon */}
                <div className="w-[72px] h-[72px] rounded-full bg-primary-light flex items-center justify-center mb-6">
                  <reason.Icon size={32} strokeWidth={1.5} className="text-primary" />
                </div>

                {/* Title */}
                <h3 className="font-heading font-semibold text-xl md:text-2xl text-text mb-3 leading-snug">
                  {reason.title}
                </h3>

                {/* Text */}
                <p className="text-text-light text-base md:text-[17px] leading-relaxed">
                  {reason.text}
                </p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  )
}
