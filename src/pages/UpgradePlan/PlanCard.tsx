import { Check } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { cn } from '@/utils/helpers'
import type { Plan, PlanAccent } from '@/types/plan'

interface Props {
  plan: Plan
  accent: PlanAccent
  price: number
  isCurrent: boolean
  onChoose: () => void
}

export default function PlanCard({ plan, accent, price, isCurrent, onChoose }: Props) {
  return (
    <Card className={cn('flex flex-col justify-between', accent.border)}>
      <div>
        <h2 className="font-semibold text-gray-100">{plan.name}</h2>
        <p className="text-lg font-bold text-gray-100 mb-3">
          {price === 0 ? '$0.00' : `$${price.toFixed(2)}`}
        </p>
        <ul className="flex flex-col gap-2">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-gray-300">
              <Check size={16} className={cn('mt-0.5 shrink-0', accent.check)} />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-center gap-2 mt-6">
        {isCurrent ? (
          <>
            <Button variant="secondary" disabled className="w-full opacity-70 cursor-not-allowed">
              Current Plan
            </Button>
            <button className="text-xs text-primary-500 hover:underline">Cancel Plan</button>
          </>
        ) : (
          <Button className="w-full" onClick={onChoose}>
            Choose Plan
          </Button>
        )}
      </div>
    </Card>
  )
}
