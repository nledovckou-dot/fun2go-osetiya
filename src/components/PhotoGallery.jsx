import { motion } from 'framer-motion'
import { FadeInUp } from './ui/AnimatedSection'

const GALLERY_IMAGES = [
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

export default function PhotoGallery() {
  return (
    <section id="gallery" className="scroll-mt-24 bg-bg-alt py-14 md:scroll-mt-32 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-10 lg:px-12">
        <FadeInUp>
          <div className="mb-10 md:mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Фотогалерея тура
            </p>
            <h2 className="mt-3 max-w-[900px] font-heading text-[32px] font-bold leading-[0.95] tracking-tight text-text md:text-[56px]">
              Все ключевые кадры с основного лендинга Fun2Go теперь собраны прямо здесь
            </h2>
            <p className="mt-4 max-w-[760px] text-base leading-relaxed text-text-light md:text-[17px]">
              Добавил насыщенную фотоленту с оригинальной страницы, чтобы лендинг выглядел живым и убедительным и на desktop, и на mobile.
            </p>
          </div>
        </FadeInUp>

        <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
          {GALLERY_IMAGES.map((image, index) => (
            <motion.figure
              key={image}
              className={`gallery-float-${index % 3} mb-4 break-inside-avoid overflow-hidden rounded-[22px] border border-white/30 bg-white p-2 shadow-md-ds`}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-10% 0px -5% 0px' }}
              transition={{ duration: 0.55, delay: (index % 8) * 0.04, ease: [0.4, 0, 0.2, 1] }}
            >
              <motion.img
                src={image}
                alt={`Фото тура в Осетию Fun2Go ${index + 1}`}
                className="w-full rounded-[16px] object-cover"
                loading="lazy"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.35 }}
              />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
