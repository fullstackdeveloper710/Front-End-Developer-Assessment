import { cn } from '@/utils/helpers'

export default function Card({ className, children, ...props }) {
  return (
    <div
      className={cn('rounded-xl bg-gray-800/60 border border-gray-700/60 p-4', className)}
      {...props}
    >
      {children}
    </div>
  )
}
