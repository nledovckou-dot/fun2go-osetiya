import { motion } from 'framer-motion'

export function Card({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      className={`bg-white rounded-[20px] p-8 shadow-md-ds border border-border ${hover ? 'transition-all duration-400 hover:-translate-y-1 hover:shadow-lg-ds' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function PhotoCard({ children, className = '', tilted = false, tiltDirection = 'left', ...props }) {
  const tiltClass = tilted
    ? tiltDirection === 'left'
      ? 'rotate-[-2deg] hover:rotate-0 hover:scale-[1.02]'
      : 'rotate-[2deg] hover:rotate-0 hover:scale-[1.02]'
    : ''

  return (
    <motion.div
      className={`rounded-[24px] overflow-hidden relative transition-transform duration-400 ${tiltClass} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}
