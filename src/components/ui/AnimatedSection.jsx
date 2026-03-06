import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function AnimatedSection({ children, className = '', delay = 0, direction = 'up', once = true }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-80px 0px' })

  const variants = {
    up: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    },
    left: {
      hidden: { opacity: 0, x: -80, rotate: -3 },
      visible: { opacity: 1, x: 0, rotate: -2 },
    },
    right: {
      hidden: { opacity: 0, x: 80, rotate: 3 },
      visible: { opacity: 1, x: 0, rotate: 2 },
    },
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  }

  const selected = variants[direction] || variants.up

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={selected}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

export function FadeInUp({ children, className = '', delay = 0 }) {
  return (
    <AnimatedSection direction="up" delay={delay} className={className}>
      {children}
    </AnimatedSection>
  )
}
