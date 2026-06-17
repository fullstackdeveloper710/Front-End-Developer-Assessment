import Navbar from '@/components/layout/Navbar'
import AppRoutes from '@/routes/AppRoutes'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#1A1E2C] text-gray-900 dark:text-gray-100">
      <Navbar />
      <AppRoutes />
    </div>
  )
}

export default App
