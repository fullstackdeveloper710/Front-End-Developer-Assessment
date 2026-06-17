import { Link } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center gap-6">
        <Link to="/" className="font-semibold">
          Dashboard
        </Link>
        <Link to="/pricing" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
          Pricing
        </Link>
      </div>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
      </button>
    </nav>
  )
}
