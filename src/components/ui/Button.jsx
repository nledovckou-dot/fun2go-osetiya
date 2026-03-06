import { motion } from 'framer-motion'

export function Button({ children, variant = 'primary', className = '', onClick, type = 'button', fullWidth = false, ...props }) {
  const base = 'inline-flex items-center justify-center font-semibold uppercase tracking-widest cursor-pointer border-none transition-all duration-300 ease-out font-heading'

  const variants = {
    primary: `bg-primary text-text-on-dark rounded-[14px] px-10 py-[18px] min-h-[56px] min-w-[200px] text-base hover:bg-primary-hover hover:shadow-primary-ds hover:scale-[1.02] active:scale-[0.98]`,
    secondary: `bg-transparent text-primary rounded-[14px] px-8 py-4 min-h-[52px] border-2 border-primary text-base hover:bg-primary-light hover:scale-[1.02] active:scale-[0.98]`,
    onDark: `bg-primary text-text-on-dark rounded-[14px] px-10 py-[18px] min-h-[56px] min-w-[200px] text-base border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-[4px] hover:bg-primary-hover hover:scale-[1.02] active:scale-[0.98]`,
    stickySmall: `bg-primary text-text-on-dark rounded-[14px] px-5 py-3.5 min-h-[48px] text-sm hover:bg-primary-hover active:scale-[0.98] shrink-0`,
  }

  return (
    <motion.button
      type={type}
      className={`${base} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
