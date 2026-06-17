import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { User, Eye, Search, Star, CreditCard, FileText } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import type { Benefit, ProfileData } from '@/types/profile'

const BENEFITS: Benefit[] = [
  { icon: Eye, label: 'View unlimited players' },
  { icon: Search, label: 'Unlimited Search by Country Results' },
  { icon: Star, label: 'Create collections of your favorite players' },
]

function useProfile() {
  const [data, setData] = useState<ProfileData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setData({
        name: 'Joline Williams',
        email: 'joline@dualnationals.com',
        avatarUrl: null,
        plan: { name: 'Free Plan', registeredAt: '23 May 2024' },
        paymentMethod: null,
        paymentHistory: [],
      })
      setLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return { data, loading }
}

export default function Profile() {
  const { data, loading } = useProfile()

  if (loading || !data) {
    return (
      <div className="p-6">
        <p className="text-gray-500 dark:text-gray-400">Loading profile...</p>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start"
    >
      <Card className="lg:col-span-1 flex flex-col items-start  gap-3">
        <div className="w-20 h-20 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
          {data.avatarUrl ? (
            <img src={data.avatarUrl} alt={data.name} className="w-full h-full object-cover" />
          ) : (
            <User size={36} className="text-gray-300" />
          )}
        </div>
        <div>
          <h2 className="font-bold text-white lg:text-2xl text-lg">{data.name}</h2>
          <p className="text-white">{data.email}</p>
        </div>
        <div className="flex gap-2">
          <Button className='border-[#FFFFFF33] bg-transparent' variant="secondary">Edit Profile</Button>
          <Button className='border-[#FFFFFF33] bg-transparent'  variant="secondary">Reset Password</Button>
        </div>
      </Card>

      <div className="lg:col-span-2 flex flex-col gap-4">
        <div>
          <h3 className="text-xl font-medium text-white mb-2">Your plan</h3>
          <Card>
            <p className="font-semibold text-gray-100">{data.plan.name}</p>
            <p className="text-xs text-gray-400">Registered {data.plan.registeredAt}</p>
          </Card>
        </div>

        <Card className="border-t-2 border-primary-500">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-200">Upgrade to a paid plan for additional benefits</p>
            <Button className='bg-white' as={Link} to="/profile/upgrade-plan">
              Upgrade Plan
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {BENEFITS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center gap-2 rounded-lg bg-gray-900/40 p-3"
              >
                <Icon size={20} className="text-primary-500" />
                <p className="text-xs text-gray-300">{label}</p>
              </div>
            ))}
          </div>
        </Card>

        <div>
          <h3 className="text-sm text-gray-400 mb-2">Payment Method</h3>
          <Card className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CreditCard size={20} className="text-gray-400" />
              <p className="text-sm text-gray-300">
                {data.paymentMethod
                  ? data.paymentMethod
                  : 'You have not chosen any payment method yet'}
              </p>
            </div>
            <Button className='bg-white'>Add Payment Method</Button>
          </Card>
        </div>

        <div>
          <h3 className="text-sm text-gray-400 mb-2">Payment History</h3>
          <Card className="flex items-center gap-3">
            <FileText size={20} className="text-gray-400" />
            <p className="text-sm text-gray-300">
              {data.paymentHistory.length === 0
                ? 'You have no payment history'
                : `${data.paymentHistory.length} transactions`}
            </p>
          </Card>
        </div>
      </div>
    </motion.div>
  )
}
