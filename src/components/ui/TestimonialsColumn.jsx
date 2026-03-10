import React from 'react'
import { motion } from 'framer-motion'

export default function TestimonialsColumn({ className = '', testimonials, duration = 10 }) {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: '-50%' }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[0, 1].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map((review, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-border bg-white shadow-sm max-w-xs w-full"
              >
                <p className="text-[14px] md:text-[15px] leading-relaxed text-text-light">
                  {review.text}
                </p>
                <div className="flex items-center gap-3 mt-5">
                  <div
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ring-2 ring-primary/10"
                    style={{ backgroundColor: review.color }}
                  >
                    {review.initials}
                  </div>
                  <div className="flex flex-col">
                    <div className="font-heading font-semibold text-text tracking-tight leading-5">
                      {review.name}
                    </div>
                    <div className="leading-5 text-text-muted tracking-tight text-xs">
                      {review.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  )
}
