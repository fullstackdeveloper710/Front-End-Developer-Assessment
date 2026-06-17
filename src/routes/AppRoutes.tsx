import { Routes, Route } from 'react-router-dom'
import Dashboard from '@/pages/Dashboard/Dashboard'
import Pricing from '@/pages/Pricing/Pricing'
import Profile from '@/pages/Profile/Profile'
import UpgradePlan from '@/pages/UpgradePlan/UpgradePlan'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/upgrade-plan" element={<UpgradePlan />} />
    </Routes>
  )
}
