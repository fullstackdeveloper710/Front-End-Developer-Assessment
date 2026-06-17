import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Search, X } from 'lucide-react'
import type { NavLink } from '@/types/navbar'
import fav from "../../assets/icons/fav.svg"
import uk from "../../assets/icons/UnitedKingdom.svg"
import user from "../../assets/images/user1.png"
const NAV_LINKS: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '#' },
  { label: 'How It Works', to: '#' },
  { label: 'FAQs', to: '#' },
  { label: 'Contact Us', to: '#' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchScope, setSearchScope] = useState<'player' | 'country'>('player')

  return (
    <nav className="relative flex items-center justify-between px-2 py-3 bg-[#292E41]  lg:px-6">
      <div className="flex items-center gap-2 lg:gap-8">
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-200 transition-colors hover:bg-gray-800 lg:hidden"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="navbar-mobile-menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <Link to="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
          <img src={fav} alt="fav" />
          <span className="font-bold tracking-[-0.02em] text-white text-base md:text-xl lg:text-base xl:text-xl">DUAL NATIONALS</span>
        </Link>
        <div className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map(({ label, to }) => (
            <Link key={label} to={to} className="text-sm xl:text-base font-medium hover:text-gray-300 text-white">
              {label}
            </Link>
          ))}
        </div>
      </div>
      <div
        className={`hidden min-w-0 items-center mx-2 sm:mx-4 md:flex md:max-w-md transition-all duration-300 ease-out origin-left lg:flex-1 lg:!w-auto lg:scale-x-100 lg:opacity-100 ${isSearchOpen ? 'flex-1 scale-x-100 opacity-100' : 'flex-none w-0 scale-x-0 opacity-0 overflow-hidden'
          }`}
      >
        <div className="flex w-full min-w-0 items-center gap-2 rounded-lg border border-white/10 bg-gray-800/60 px-2 py-1">
          <Search size={16} className="ml-1 shrink-0 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full min-w-0 truncate bg-transparent text-sm text-gray-200 placeholder:text-gray-400 focus:outline-none"
          />
          <div className="flex shrink-0 items-center gap-0.5 rounded-full bg-white/10 p-0.5">
            <button
              type="button"
              onClick={() => setSearchScope('player')}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${searchScope === 'player' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'
                }`}
            >
              Player
            </button>
            <button
              type="button"
              onClick={() => setSearchScope('country')}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${searchScope === 'country' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'
                }`}
            >
              Country
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={() => setIsSearchOpen((open) => !open)}
          className="rounded-full p-2 text-gray-300 transition-colors hover:bg-gray-800 lg:hidden"
          aria-label={isSearchOpen ? 'Close search' : 'Open search'}
          aria-expanded={isSearchOpen}
        >
          {isSearchOpen ? <X size={18} /> : <Search size={18} />}
        </button>
        <button className="rounded-full p-2 text-gray-300 transition-colors hover:bg-gray-800" aria-label="Language">
          <img src={uk} alt="Language" className="w-6 h-6" />
        </button>
        <Link
          to="/profile"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-700"
          aria-label="Profile"
        >
          <img src={user} alt="Profile" className="w-full h-full" />
        </Link>
      </div>
      <div
        id="navbar-mobile-menu"
        className={`absolute left-0 right-0 top-full z-50 border-b border-gray-800 bg-[#1A1E2C] px-4 py-4 shadow-2xl backdrop-blur-sm transition-all duration-300 ease-out lg:hidden ${isMenuOpen ? 'pointer-events-auto visible translate-y-0 opacity-100' : 'pointer-events-none invisible -translate-y-2 opacity-0'
          }`}
      >
        <div className="flex flex-col gap-3">
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 hover:text-gray-200"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
      <div
        className={`absolute left-0 right-0 top-full z-50 border-b border-gray-800 bg-[#1A1E2C] px-4 py-4 shadow-2xl backdrop-blur-sm transition-all duration-300 ease-out md:hidden ${isSearchOpen ? 'pointer-events-auto visible translate-y-0 opacity-100' : 'pointer-events-none invisible -translate-y-2 opacity-0'
          }`}
      >
        <div className="flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800/60 px-2 py-1">
          <Search size={16} className="ml-1 shrink-0 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full min-w-0 bg-transparent text-sm text-gray-200 placeholder:text-gray-400 focus:outline-none"
          />
          <div className="flex shrink-0 items-center gap-0.5 rounded-full bg-white/10 p-0.5">
            <button
              type="button"
              onClick={() => setSearchScope('player')}
              className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${searchScope === 'player' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'
                }`}
            >
              Player
            </button>
            <button
              type="button"
              onClick={() => setSearchScope('country')}
              className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${searchScope === 'country' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'
                }`}
            >
              Country
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
