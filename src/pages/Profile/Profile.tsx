import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { User } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import type { Benefit, ProfileData } from '@/types/profile'
import bookmark from '@/assets/icons/Bookmark.svg'
import change from '@/assets/icons/Change.svg'
import globe from '@/assets/icons/Globe.svg'
import bill from '@/assets/icons/Bill.svg'
import creditCard from '@/assets/icons/CreditCard.svg'
import user from '../../assets/images/user1.png'
// import {
//   bookmark,
//   change,
//   globe,
//   bill,
//   creditCard,
// } from '@/assets/icons';

const BENEFITS: Benefit[] = [
  { icon: <img className='w-10 h-10' src={change} alt="Change" />, label: 'View unlimited players' },
  { icon: <img className='w-10 h-10' src={globe} alt="Globe" />, label: 'Unlimited Search by Country Results' },
  { icon: <img className='w-10 h-10' src={bookmark} alt="Bookmark" />, label: 'Create collections of your favorite players' },
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
    <main className="bg-[#1A1E2C]  py-6">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-3 items-start"
        >
          <Card className="lg:col-span-1 flex flex-col items-start  gap-3">
            <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
              {/* {data.avatarUrl ? (
                <img src={data.avatarUrl} alt={data.name} className="w-full h-full object-cover" />
              ) : (
                <User size={36} className="text-gray-300" />
              )} */}
              <img src={user} alt="User" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="font-bold text-white lg:text-2xl text-lg">{data.name}</h2>
              <p className="text-white">{data.email}</p>
            </div>
            <div className="flex gap-2">
              <Button className='border-[#FFFFFF33] bg-transparent' variant="secondary">Edit Profile</Button>
              <Button className='border-[#FFFFFF33] bg-transparent' variant="secondary">Reset Password</Button>
            </div>
          </Card>

          <div className="lg:col-span-2 flex flex-col gap-8">
            <div>
              <h3 className="md:text-xl text-lg font-medium text-white mb-2">Your plan</h3>
              <Card className="px-6 py-4">
                <p className="font-semibold text-xl">{data.plan.name}</p>
                <p className="md:text-xs md:text-white/70 text-white">Registered {data.plan.registeredAt}</p>
              </Card>
            </div>

            <Card className=" !rounded-none relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-[linear-gradient(90deg,#26BFE1_0%,#2687E1_100%)]">
              <div className="flex items-center flex-wrap justify-between gap-3 mb-4">
                <p className="text-lg text-white font-semibold">Upgrade to a paid plan for additional benefits</p>
                <Button className='bg-white text-[#1A1E2C]' as={Link} to="/profile/upgrade-plan">
                  Upgrade Plan
                </Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 md:gap-3 gap-4">
                {BENEFITS.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex md:flex-col items-center md:text-center gap-2 rounded-md border border-[#FFFFFF08] p-4"
                  >
                    {Icon}
                    <p className="text-white font-medium md:mt-4">{label}</p>
                  </div>
                ))}
              </div>
            </Card>

            <div>
              <h3 className="md:text-xl text-lg font-medium text-white mb-2">Payment Method</h3>
              <Card className="flex items-center flex-wrap md:gap-0 gap-3 justify-between border-[#FFFFFF08] border bg-transparent px-6 py-4">
                <div className="flex items-center gap-3">
                  <img src={creditCard} alt="Credit Card" className=" " />
                  <p className="text-lg font-medium">
                    {data.paymentMethod
                      ? data.paymentMethod
                      : 'You have not chosen any payment method yet'}
                  </p>
                </div>
                <Button className='bg-white text-[#1A1E2C]'>Add Payment Method</Button>
              </Card>
            </div>

            <div>
              <h3 className="md:text-xl text-lg font-medium text-white mb-2">Payment History</h3>
              <Card className="flex items-center gap-3 border-[#FFFFFF08] border bg-transparent px-6 py-4">
                <img src={bill} alt="Bill" className=" " />
                <p className="text-lg font-medium">
                  {data.paymentHistory.length === 0
                    ? 'You have no payment history'
                    : `${data.paymentHistory.length} transactions`}
                </p>
              </Card>
            </div>
          </div>
        </motion.div>
      </div >
    </main >
  )
}
