import { Link } from 'react-router-dom'
import { Globe, Moon, Sun, User } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import type { NavLink } from '@/types/navbar'

const NAV_LINKS: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '#' },
  { label: 'How It Works', to: '#' },
  { label: 'FAQs', to: '#' },
  { label: 'Contact Us', to: '#' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-gray-900 border-b border-gray-800">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="w-6 h-6 rounded bg-gradient-to-br from-primary-500 to-primary-700" />
          <span className="font-bold tracking-wide text-white text-sm">DUAL NATIONALS</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ label, to }) => (
            <Link key={label} to={to} className="text-sm text-gray-300 hover:text-white">
              {label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-800 text-gray-300"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
        </button>
        <button className="p-2 rounded-full hover:bg-gray-800 text-gray-300" aria-label="Language">
          <Globe size={16} />
        </button>
        <Link
          to="/profile"
          className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center"
          aria-label="Profile"
        >
          <User size={16} className="text-gray-200" />
        </Link>
      </div>
    </nav>
  )
}
