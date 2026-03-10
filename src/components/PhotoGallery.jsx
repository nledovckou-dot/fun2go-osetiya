import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Expand, X } from 'lucide-react'
import { FadeInUp } from './ui/AnimatedSection'

const GALLERY_SOURCES = [
  'https://static.tildacdn.com/tild6430-6338-4264-b333-316438333764/IMG_2338_1.jpg',
  'https://static.tildacdn.com/tild3535-3164-4837-b535-666531366665/Rectangle_1110.jpg',
  'https://static.tildacdn.com/tild3035-3665-4531-b338-616131633464/IMG_6906.JPG',
  'https://static.tildacdn.com/tild3933-3436-4038-a362-313430383062/PHOTO-2021-09-11-11-.jpg',
  'https://static.tildacdn.com/tild6432-3861-4634-b130-346662353866/77a4714901741358a893.jpg',
  'https://static.tildacdn.com/tild3431-6264-4039-b564-623163333561/IMG_7865.jpeg',
  'https://static.tildacdn.com/tild6139-3232-4765-a263-393165333166/IMG_2457.jpeg',
  'https://static.tildacdn.com/tild6631-6635-4136-b033-633663346566/IMG_2054.jpg',
  'https://static.tildacdn.com/tild6339-6333-4538-a638-373638323964/photo_2022-11-28_19-.jpg',
  'https://static.tildacdn.com/tild6136-3663-4033-b637-663038353538/Rectangle_1082.jpg',
  'https://static.tildacdn.com/tild6136-6266-4834-b133-666461373061/Rectangle_1145_1.jpg',
  'https://static.tildacdn.com/tild6165-6662-4265-b634-303965613838/Rectangle_1145_13.png',
  'https://static.tildacdn.com/tild3563-6133-4438-b566-393362393133/Rectangle_1146.jpg',
  'https://static.tildacdn.com/tild3939-6661-4133-b665-303436623232/IMG_1762.JPG',
  'https://static.tildacdn.com/tild3230-3438-4838-b738-373938663361/Rectangle_1146_6.png',
  'https://static.tildacdn.com/tild3637-6336-4639-b866-643965613865/IMG_7845_1.jpg',
  'https://static.tildacdn.com/tild6335-3836-4436-b165-306331636338/14.jpg',
  'https://static.tildacdn.com/tild6432-6565-4033-b536-333036633135/10.jpg',
  'https://static.tildacdn.com/tild3733-3238-4439-b664-666138333335/DSC02204.jpg',
  'https://static.tildacdn.com/tild3263-6638-4131-b765-393934396166/IMG_2550.jpg',
  'https://static.tildacdn.com/tild6366-3430-4764-b235-383736333338/18_1.jpg',
  'https://static.tildacdn.com/tild3332-3032-4163-b939-386430343161/dc98aa9s-1920.jpg',
  'https://static.tildacdn.com/tild3965-3636-4964-b035-376534636164/IMG_1760.JPG',
  'https://static.tildacdn.com/tild6430-3938-4262-a132-646336623837/IMG_6990.JPG',
  'https://static.tildacdn.com/tild3662-3762-4239-b734-663665346163/7lnliexgz5ztfo0kz4u7.jpg',
  'https://static.tildacdn.com/tild3766-3831-4134-a436-626432363166/DSC02048.JPG',
  'https://static.tildacdn.com/tild3538-3634-4437-b062-386637383130/IMG_2007.JPG',
  'https://static.tildacdn.com/tild3637-6664-4731-b235-306137633538/1679125197_c5e0f9.jpg',
  'https://static.tildacdn.com/tild3733-3335-4038-b033-656232373434/IMG_2051.jpg',
  'https://static.tildacdn.com/tild6266-3665-4034-a464-623666313863/IMG_6999.JPG',
  'https://static.tildacdn.com/tild3838-6335-4164-b965-333736343764/IMG_2774.JPG',
  'https://static.tildacdn.com/tild3436-6637-4335-a632-396335313564/1667574931_77-sporti.jpg',
  'https://static.tildacdn.com/tild6132-3933-4061-a531-613334653361/photo-output_1_1.JPG',
  'https://static.tildacdn.com/tild6138-3538-4964-b531-623835346532/IMG_0378.JPG',
  'https://static.tildacdn.com/tild6136-6335-4336-b031-343137656135/IMG_0678.png',
  'https://static.tildacdn.com/tild3065-3362-4165-a365-366637346233/IMG_1025_1.JPG',
]

const GALLERY_IMAGES = GALLERY_SOURCES.map((src, index) => ({
  src,
  alt: `Фото тура Fun2Go в Осетии ${index + 1}`,
}))

const FEATURE_LABELS = ['Главный вайб тура', 'Горы и воздух', 'Башни и древности', 'Команда и эмоции']

const SPOTLIGHT_COPY = [
  'Тёплые остановки и очень красивый ритм поездки',
  'Башни, крепости и визуальный характер маршрута',
  'Компания, высота и тот самый беззаботный тур',
]

const CAPTION_POOL = [
  'Горы, ради которых открывают этот маршрут снова и снова',
  'Тёплые остановки, красивые отели и медленный отдых без суеты',
  'Старинные башни, крепости и весь визуальный характер Осетии',
  'Компания, столы на высоте и та самая энергия авторского тура',
  'Дорога, каньоны, перевалы и очень кинематографичный воздух',
  'Кадры, которые на основном сайте лучше всего продают настроение поездки',
]

function getGridClasses(index) {
  const cycle = index % 10
  if (cycle === 0) return 'md:col-span-2 md:row-span-2'
  if (cycle === 3) return 'lg:col-span-2'
  if (cycle === 5) return 'md:row-span-2'
  if (cycle === 7) return 'md:col-span-2'
  return ''
}

function getFrameClasses(index) {
  const cycle = index % 10
  if (cycle === 0 || cycle === 5) {
    return 'aspect-[4/5] md:h-full md:aspect-auto'
  }
  if (cycle === 3 || cycle === 7) {
    return 'aspect-[16/11] md:h-full md:aspect-auto'
  }
  return 'aspect-[4/5] md:h-full md:aspect-auto'
}

function getCaption(index) {
  return CAPTION_POOL[index % CAPTION_POOL.length]
}

function getVisibleThumbs(selectedIndex) {
  const maxThumbs = 6
  const start = Math.max(
    0,
    Math.min(selectedIndex - 2, GALLERY_IMAGES.length - maxThumbs),
  )
  return GALLERY_IMAGES.slice(start, start + maxThumbs).map((image, offset) => ({
    ...image,
    index: start + offset,
  }))
}

export default function PhotoGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null)

  const featuredImage = GALLERY_IMAGES[0]
  const topRailImages = GALLERY_IMAGES.slice(1, 4)
  const galleryGridImages = GALLERY_IMAGES.slice(4)
  const selectedImage = selectedIndex === null ? null : GALLERY_IMAGES[selectedIndex]

  useEffect(() => {
    if (selectedIndex === null) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedIndex(null)
      }
      if (event.key === 'ArrowRight') {
        setSelectedIndex((current) => (
          current === null ? 0 : (current + 1) % GALLERY_IMAGES.length
        ))
      }
      if (event.key === 'ArrowLeft') {
        setSelectedIndex((current) => (
          current === null
            ? GALLERY_IMAGES.length - 1
            : (current - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
        ))
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedIndex])

  const showPrev = () => {
    setSelectedIndex((current) => (
      current === null
        ? GALLERY_IMAGES.length - 1
        : (current - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
    ))
  }

  const showNext = () => {
    setSelectedIndex((current) => (
      current === null ? 0 : (current + 1) % GALLERY_IMAGES.length
    ))
  }

  return (
    <section id="gallery" className="scroll-mt-24 bg-bg-alt py-14 md:scroll-mt-32 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-10 lg:px-12">
        <div className="overflow-hidden rounded-[30px] border border-white/40 bg-[linear-gradient(180deg,rgba(255,255,255,0.65),rgba(255,249,236,0.88))] p-5 shadow-lg-ds backdrop-blur-xl md:rounded-[38px] md:p-8">
          <FadeInUp>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Фото из туров
            </p>
            <h2 className="mt-3 max-w-[800px] font-heading text-[32px] font-bold leading-[0.94] tracking-tight text-text md:text-[56px]">
              Как это выглядит вживую
            </h2>
            <p className="mt-4 max-w-[600px] text-base leading-relaxed text-text-light md:text-[17px]">
              Горы, башни, термальные источники, осетинские застолья и та самая атмосфера беззаботного тура — всё настоящее, снято участниками и гидами.
            </p>
          </FadeInUp>

          <div className="mt-8 grid gap-4 xl:grid-cols-[minmax(0,1.35fr)_360px]">
            <motion.button
              type="button"
              onClick={() => setSelectedIndex(0)}
              className="group relative min-h-[360px] overflow-hidden rounded-[28px] border border-white/40 bg-[#1f0815] text-left shadow-lg-ds focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 md:min-h-[480px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
            >
              <img
                src={featuredImage.src}
                alt={featuredImage.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(34,10,21,0.12),rgba(34,10,21,0.12)_35%,rgba(34,10,21,0.84))]" />

              <div className="relative flex h-full flex-col justify-between p-5 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                    {FEATURE_LABELS[0]}
                  </span>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-transform duration-300 group-hover:scale-110">
                    <Expand size={18} />
                  </span>
                </div>

                <div className="max-w-[560px]">
                  <h3 className="font-heading text-[30px] font-bold leading-[0.96] tracking-tight text-white md:text-[48px]">
                    Горы, от которых перехватывает дыхание
                  </h3>
                  <p className="mt-4 max-w-[480px] text-sm leading-relaxed text-white/75 md:text-base">
                    Каждый тур — это новые виды, новые люди и новые истории. Кликни на любое фото, чтобы рассмотреть ближе.
                  </p>
                </div>
              </div>
            </motion.button>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
              {topRailImages.map((image, index) => (
                <motion.button
                  key={image.src}
                  type="button"
                  onClick={() => setSelectedIndex(index + 1)}
                  className={`gallery-float-${index % 3} group relative overflow-hidden rounded-[24px] border border-white/40 bg-white p-2 text-left shadow-md-ds focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${index === 0 ? 'sm:col-span-2 xl:col-span-2' : ''}`}
                  initial={{ opacity: 0, y: 28, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-8% 0px' }}
                  transition={{ duration: 0.55, delay: index * 0.06, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="relative overflow-hidden rounded-[18px]">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] ${index === 0 ? 'aspect-[16/10]' : 'aspect-[4/5]'}`}
                      loading="lazy"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(25,8,18,0.82))] p-4">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
                        {FEATURE_LABELS[index + 1]}
                      </div>
                      <div className="mt-1 max-w-[18ch] text-sm font-medium leading-snug text-white">
                        {SPOTLIGHT_COPY[index]}
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 md:auto-rows-[140px] md:grid-cols-4 lg:auto-rows-[150px] lg:grid-cols-6">
            {galleryGridImages.map((image, index) => (
              <motion.button
                key={image.src}
                type="button"
                onClick={() => setSelectedIndex(index + 4)}
                className={`group relative overflow-hidden rounded-[24px] border border-white/45 bg-white p-2 text-left shadow-sm-ds focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${getGridClasses(index)}`}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8% 0px' }}
                transition={{ duration: 0.55, delay: (index % 8) * 0.04, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className={`overflow-hidden rounded-[18px] ${getFrameClasses(index)}`}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
                <div className="pointer-events-none absolute right-5 top-5">
                  <span className="rounded-full border border-white/20 bg-[rgba(25,8,18,0.52)] p-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Expand size={14} />
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[160] bg-[rgba(21,6,15,0.88)] backdrop-blur-md"
              onClick={() => setSelectedIndex(null)}
            >
              <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-4 py-4 md:px-6 md:py-6">
                <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                  {selectedIndex + 1} / {GALLERY_IMAGES.length}
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedIndex(null)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/15"
                  aria-label="Закрыть галерею"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex h-full items-center justify-center p-4 pt-20 md:p-8 md:pt-24">
                <motion.div
                  initial={{ opacity: 0, y: 24, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 24, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  onClick={(event) => event.stopPropagation()}
                  className="grid w-full max-w-6xl gap-4 lg:grid-cols-[minmax(0,1fr)_320px]"
                >
                  <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[rgba(255,255,255,0.06)] shadow-xl-ds">
                    <img
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      className="max-h-[72vh] w-full object-contain md:max-h-[78vh]"
                    />

                    <button
                      type="button"
                      onClick={showPrev}
                      className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[rgba(21,6,15,0.42)] text-white transition-colors hover:bg-[rgba(255,255,255,0.16)] md:left-5"
                      aria-label="Предыдущее фото"
                    >
                      <ArrowLeft size={18} />
                    </button>
                    <button
                      type="button"
                      onClick={showNext}
                      className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[rgba(21,6,15,0.42)] text-white transition-colors hover:bg-[rgba(255,255,255,0.16)] md:right-5"
                      aria-label="Следующее фото"
                    >
                      <ArrowRight size={18} />
                    </button>
                  </div>

                  <div className="flex flex-col justify-between rounded-[28px] border border-white/10 bg-[rgba(255,255,255,0.08)] p-4 text-white md:p-5">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55">
                        {selectedIndex + 1} из {GALLERY_IMAGES.length}
                      </p>
                      <h3 className="mt-3 font-heading text-[28px] font-bold leading-[0.96] tracking-tight md:text-[34px]">
                        {getCaption(selectedIndex)}
                      </h3>
                    </div>

                    <div className="mt-6">
                      <div className="mb-3 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
                        <span>Быстрый выбор</span>
                        <span>{GALLERY_IMAGES.length} фото</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 sm:grid-cols-6 lg:grid-cols-3">
                        {getVisibleThumbs(selectedIndex).map((image) => (
                          <button
                            key={image.src}
                            type="button"
                            onClick={() => setSelectedIndex(image.index)}
                            className={`overflow-hidden rounded-[16px] border p-1 transition-all ${image.index === selectedIndex ? 'border-white bg-white/18' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}
                            aria-label={`Открыть фото ${image.index + 1}`}
                          >
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="aspect-square w-full rounded-[12px] object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
