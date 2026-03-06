import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

export function AccordionItem({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-border">
      <button
        className="flex justify-between items-center w-full bg-transparent border-none cursor-pointer text-left py-6 px-0 min-h-[48px] gap-4"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-heading font-semibold text-xl md:text-2xl text-text leading-snug">
          {title}
        </span>
        <span className="shrink-0 w-6 h-6 text-primary transition-transform duration-300">
          {isOpen ? <Minus size={24} /> : <Plus size={24} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-text-light text-base md:text-[17px] leading-relaxed max-w-text">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
