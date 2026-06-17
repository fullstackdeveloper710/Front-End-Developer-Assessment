import type { ReactNode } from 'react'

export interface Benefit {
  icon: ReactNode
  label: string
}

export interface ProfilePlanSummary {
  name: string
  registeredAt: string
}

export interface ProfileData {
  name: string
  email: string
  avatarUrl: string | null
  plan: ProfilePlanSummary
  paymentMethod: string | null
  paymentHistory: string[]
}
