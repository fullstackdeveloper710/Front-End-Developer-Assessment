import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/utils/helpers'
import type { Plan, PlanId, PlanAccent } from '@/types/plan'
import PlanCard from './PlanCard'

const ACCENTS: Record<PlanId, PlanAccent> = {
  free: { border: 'border-t-4 border-[#ECEDEF]', check: 'text-gray-400' },
  premium: { border: 'bordergredientBlue', check: 'text-primary-500' },
  player: { border: 'bordergredientLightBlue', check: 'text-primary-500' },
  admin: { border: 'bordergredientGreen', check: 'text-green-500' },
}

function usePlans() {
  const [plans, setPlans] = useState<Plan[]>([])
  const [currentPlanId, setCurrentPlanId] = useState<PlanId | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setPlans([
        {
          id: 'free',
          name: 'Free Plan',
          priceMonthly: 0,
          priceYearly: 0,
          features: ['Only view basic country & player information'],
        },
        {
          id: 'premium',
          name: 'Premium Plan',
          priceMonthly: 2.99,
          priceYearly: 26.99,
          features: ['View unlimited player profiles', 'View unlimited Search by Country results'],
        },
        {
          id: 'player',
          name: 'Player Plan',
          priceMonthly: 8.99,
          priceYearly: 80.99,
          features: [
            'Claim and update details on your personal profiles',
            'View unlimited player profiles',
            'View unlimited Search by Country results',
            'Create your own player watchlist',
          ],
        },
        {
          id: 'admin',
          name: 'Administrator Plan',
          priceMonthly: 28.99,
          priceYearly: 260.99,
          features: [
            'View unlimited player profiles details',
            'Manage unlimited player profiles (ID Validation required)',
            'Download & Share player lists',
            'Contact Eligible Players (Coming Soon)',
          ],
        },
      ])
      setCurrentPlanId('free')
      setLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return { plans, currentPlanId, setCurrentPlanId, loading }
}

export default function UpgradePlan() {
  const { plans, currentPlanId, setCurrentPlanId, loading } = usePlans()
  const [isYearly, setIsYearly] = useState(false)

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="">
      <main className="bg-[#1A1E2C]  pb-6">
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-4 px-6 py-5">
          <Link to="/profile" className="hover:text-white">
            Profile
          </Link>
          <ChevronRight size={14} />
          <span className="text-gray-200">Upgrade Plan</span>
        </div>


        <div className="container">

          <div className="flex items-center justify-between md:flex-nowrap flex-wrap gap-4 mb-6">
            <h1 className="text-2xl font-semibold text-gray-100">Upgrade Plan</h1>

            <div className="flex md:w-auto w-full items-center gap-1 bg-[#272B3F] rounded-full p-2">
              <button
                onClick={() => setIsYearly(false)}
                className={cn(
                  'px-4 py-1.5 rounded-full flex-1 text-center font-semibold transition-colors',
                  !isYearly ? 'bg-white text-gray-900' : 'text-gray-300'
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={cn(
                  'px-4 py-1.5 rounded-full flex-1 justify-center font-semibold transition-colors flex items-center gap-1',
                  isYearly ? 'bg-white text-gray-900' : 'text-white'
                )}
              >
                Yearly
                <span className={cn('font-normal whitespace-nowrap', isYearly ? 'text-[#00C8BC]' : 'text-[#00C8BC]')}>
                  Save 25%
                </span>
              </button>
            </div>
          </div>

          {loading ? (
            <p className="text-gray-400">Loading plans...</p>
          ) : plans.length === 0 ? (
            <p className="text-gray-400">No plans available.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
              {plans.map((plan) => {
                const accent = ACCENTS[plan.id]
                const isCurrent = plan.id === currentPlanId
                const price = isYearly ? plan.priceYearly : plan.priceMonthly

                return (
                  <PlanCard
                    key={plan.id}
                    plan={plan}
                    accent={accent}
                    price={price}
                    isCurrent={isCurrent}
                    onChoose={() => setCurrentPlanId(plan.id)}
                  />
                )
              })}
            </div>
          )}
        </div>
      </main>

    </motion.div>
  )
}
