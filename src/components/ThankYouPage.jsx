import { motion } from 'framer-motion'
import { Send, Heart, CheckCircle } from 'lucide-react'

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-bg-alt flex flex-col">
      {/* Header */}
      <header className="bg-[rgba(255,250,239,0.95)] border-b border-[rgba(41,11,27,0.05)]">
        <div className="max-w-container mx-auto px-6 md:px-10 lg:px-12">
          <nav className="flex items-center justify-center h-[72px]">
            <a href="../">
              <img
                src="https://static.tildacdn.com/tild6265-3533-4936-b031-616437356530/logo_footer.svg"
                alt="Fun2Go"
                className="h-8"
              />
            </a>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 flex items-center justify-center py-16 px-6">
        <div className="max-w-[600px] text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10"
          >
            <CheckCircle size={40} className="text-primary" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-heading text-[32px] font-bold uppercase tracking-tight text-text md:text-[48px]"
          >
            Благодарим за ваш выбор
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-4 text-lg text-text-light md:text-xl"
          >
            В ближайшее время с вами свяжется менеджер
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 rounded-[20px] bg-white/70 p-6 text-center shadow-sm"
          >
            <p className="text-sm leading-relaxed text-text-light md:text-base">
              Подпишитесь на наш Telegram-канал, чтобы первыми узнавать об анонсах туров,
              интересных фактах о путешествиях и специальных предложениях
            </p>
            <a
              href="https://t.me/fun2goru"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white no-underline transition-all hover:bg-primary-dark hover:shadow-lg"
            >
              <Send size={16} />
              Подписаться
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-6 flex items-center justify-center gap-1.5 text-sm text-text-muted"
          >
            Сделано с <Heart size={14} className="text-primary" fill="currentColor" /> командой Fun2Go
          </motion.p>
        </div>
      </main>
    </div>
  )
}
