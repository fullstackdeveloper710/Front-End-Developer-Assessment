import { Routes, Route } from 'react-router-dom'
import Dashboard from '@/pages/Dashboard/Dashboard'
import Pricing from '@/pages/Pricing/Pricing'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  )
}
