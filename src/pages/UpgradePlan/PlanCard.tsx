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
    <Card className={cn('flex flex-col !rounded-[4px] justify-between', accent.border)}>
      <div>
        <div className="md:block flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg">{plan.name}</h2>
          <p className="text-lg font-semibold mb-3">
            {price === 0 ? '$0.00' : `$${price.toFixed(2)}`}
          </p>
        </div>
        <ul className="flex flex-col gap-2 lg:min-h-[204px] ">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-white/95">
              <Check size={16} className={cn('mt-0.5 shrink-0', accent.check)} />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex md:flex-col items-center justify-between gap-2 mt-6 lg:min-h-20">
        {isCurrent ? (
          <>
            <Button variant="secondary" disabled className="py-3 px-6 text-white text-base bg-white/10 border-none opacity-70 cursor-not-allowed">
              Current Plan
            </Button>
            <button className="font-medium text-[#267FE1] underline">Cancel Plan</button>
          </>
        ) : (
          <Button className="py-3 px-6 text-base text-[#1A1E2C] font-semibold" onClick={onChoose}>
            Choose Plan
          </Button>
        )}
      </div>
    </Card>
  )
}
