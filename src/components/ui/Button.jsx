import { cn } from '@/utils/helpers'

const VARIANTS = {
  primary: 'bg-white text-gray-900 hover:bg-gray-100',
  secondary: 'bg-gray-700/60 text-gray-100 hover:bg-gray-700',
}

export default function Button({ variant = 'primary', className, children, ...props }) {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded-full text-sm font-medium transition-colors',
        VARIANTS[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
