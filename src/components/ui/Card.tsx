import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/utils/helpers'

type Props = ComponentPropsWithoutRef<'div'>

export default function Card({ className, children, ...props }: Props) {
  return (
    <div
      className={cn('rounded-xl bg-gray-800/60 border border-gray-700/60 p-4', className)}
      {...props}
    >
      {children}
    </div>
  )
}
