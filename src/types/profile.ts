import type { LucideIcon } from 'lucide-react'

export interface Benefit {
  icon: LucideIcon
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
