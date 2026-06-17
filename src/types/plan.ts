export type PlanId = 'free' | 'premium' | 'player' | 'admin'

export interface Plan {
  id: PlanId
  name: string
  priceMonthly: number
  priceYearly: number
  features: string[]
}

export interface PlanAccent {
  border: string
  check: string
}
