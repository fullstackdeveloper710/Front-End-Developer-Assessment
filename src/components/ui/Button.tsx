import type { ElementType, ComponentPropsWithoutRef } from 'react'
import { cn } from '@/utils/helpers'
import type { ButtonVariant } from '@/types/ui'

const VARIANTS: Record<ButtonVariant, string> = {
  primary: 'bg-white text-gray-900 hover:bg-gray-100',
  secondary: 'bg-gray-700/60 text-gray-100 hover:bg-gray-700',
}

type Props<T extends ElementType> = {
  as?: T
  variant?: ButtonVariant
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'variant'>

export default function Button<T extends ElementType = 'button'>({
  as,
  variant = 'primary',
  className,
  children,
  ...props
}: Props<T>) {
  const Component = as || 'button'

  return (
    <Component
      className={cn(
        'px-4 py-2 border  rounded-full text-sm font-semibold  transition-colors',
        VARIANTS[variant],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
