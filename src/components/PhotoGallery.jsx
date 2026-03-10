import { useRef, useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, X } from 'lucide-react'
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
]

const GALLERY_IMAGES = GALLERY_SOURCES.map((src, index) => ({
  src,
  alt: `Фото тура Fun2Go в Осетии ${index + 1}`,
}))

const CARD_WIDTH = 340
const CARD_GAP = 20

export default function PhotoGallery() {
  const scrollRef = useRef(null)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const selectedImage = selectedIndex !== null ? GALLERY_IMAGES[selectedIndex] : null

  const updateScrollState = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', updateScrollState, { passive: true })
    updateScrollState()
    return () => el.removeEventListener('scroll', updateScrollState)
  }, [])

  const scroll = (direction) => {
    const el = scrollRef.current
    if (!el) return
    const amount = (CARD_WIDTH + CARD_GAP) * 2
    el.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  useEffect(() => {
    if (selectedIndex === null) return undefined
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') setSelectedIndex(null)
      if (e.key === 'ArrowRight') setSelectedIndex((c) => (c + 1) % GALLERY_IMAGES.length)
      if (e.key === 'ArrowLeft') setSelectedIndex((c) => (c - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)
    }
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey) }
  }, [selectedIndex])

  return (
    <section id="gallery" className="scroll-mt-24 bg-bg-alt py-14 md:scroll-mt-32 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-10 lg:px-12">
        <FadeInUp>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                Фото из туров
              </p>
              <h2 className="mt-3 max-w-[600px] font-heading text-[32px] font-bold leading-[0.94] tracking-tight text-text md:text-[56px]">
                Как это выглядит вживую
              </h2>
              <p className="mt-4 max-w-[520px] text-base leading-relaxed text-text-light md:text-[17px]">
                Горы, башни, термальные источники и та самая атмосфера беззаботного тура — всё настоящее, снято участниками и гидами.
              </p>
            </div>

            {/* Desktop arrows */}
            <div className="hidden items-center gap-3 md:flex">
              <button
                type="button"
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary/15 bg-white text-text transition-all hover:border-primary/30 hover:shadow-md disabled:opacity-30 disabled:hover:border-primary/15 disabled:hover:shadow-none"
                aria-label="Листать влево"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary/15 bg-white text-text transition-all hover:border-primary/30 hover:shadow-md disabled:opacity-30 disabled:hover:border-primary/15 disabled:hover:shadow-none"
                aria-label="Листать вправо"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </FadeInUp>
      </div>

      {/* Carousel */}
      <div className="relative mt-10">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-bg-alt to-transparent md:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-bg-alt to-transparent md:w-16" />

        <div
          ref={scrollRef}
          className="hide-scrollbar flex gap-5 overflow-x-auto scroll-smooth px-6 md:px-10 lg:px-12"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {GALLERY_IMAGES.map((image, index) => (
            <motion.button
              key={image.src}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className="group relative flex-none cursor-pointer overflow-hidden rounded-[24px] border border-white/60 bg-white p-2 shadow-md transition-shadow hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              style={{ width: CARD_WIDTH, scrollSnapAlign: 'start' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5% 0px' }}
              transition={{ duration: 0.5, delay: Math.min(index, 6) * 0.05, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="overflow-hidden rounded-[18px]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  loading="lazy"
                />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Counter */}
      <div className="max-w-container mx-auto mt-6 flex items-center justify-between px-6 md:px-10 lg:px-12">
        <p className="text-sm text-text-muted">
          {GALLERY_IMAGES.length} фото из реальных туров
        </p>
        <p className="text-sm text-text-muted">
          Листай или кликни для просмотра →
        </p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[160] bg-[rgba(21,6,15,0.92)] backdrop-blur-md"
            onClick={() => setSelectedIndex(null)}
          >
            <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-4 py-4 md:px-6">
              <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                {selectedIndex + 1} / {GALLERY_IMAGES.length}
              </div>
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="Закрыть"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex h-full items-center justify-center p-4 pt-20 md:p-8 md:pt-20">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
                className="relative"
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-h-[80vh] max-w-[90vw] rounded-[20px] object-contain md:max-h-[85vh]"
                />

                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setSelectedIndex((c) => (c - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length) }}
                  className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[rgba(21,6,15,0.5)] text-white transition-colors hover:bg-[rgba(255,255,255,0.15)] md:left-5"
                  aria-label="Предыдущее фото"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setSelectedIndex((c) => (c + 1) % GALLERY_IMAGES.length) }}
                  className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[rgba(21,6,15,0.5)] text-white transition-colors hover:bg-[rgba(255,255,255,0.15)] md:right-5"
                  aria-label="Следующее фото"
                >
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
