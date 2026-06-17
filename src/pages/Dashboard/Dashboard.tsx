import { motion } from 'framer-motion'

export default function Dashboard() {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="p-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
    </motion.div>
  )
}
