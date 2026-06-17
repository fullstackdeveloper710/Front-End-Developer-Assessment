import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/utils/helpers'

type Props = ComponentPropsWithoutRef<'div'>

export default function Card({ className, children, ...props }: Props) {
  return (
    <div
      className={cn('rounded-xl bg-[#22273B]  p-6', className)}
      {...props}
    >
      {children}
    </div>
  )
}
