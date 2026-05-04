import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const LINKS = [
  { to: '/', label: 'Calculator' },
  { to: '/about', label: 'Sleep Science' },
  { to: '/sleep-tips', label: 'Tips' },
  { to: '/best-mattresses', label: 'Mattresses' },
  { to: '/best-sleep-trackers', label: 'Trackers' },
  { to: '/blog', label: 'Blog' },
]

export default function Nav() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="border-b border-sleep-border bg-sleep-bg/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setMenuOpen(false)}>
          <div className="w-7 h-7 rounded-lg bg-sleep-accent/10 border border-sleep-accent/20 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sleep-accent">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </div>
          <span className="text-sm font-bold text-sleep-text tracking-tight">
            Sleep<span className="text-sleep-accent">Cycler</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {LINKS.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                pathname === link.to
                  ? 'text-sleep-accent bg-sleep-accent-dim'
                  : 'text-sleep-muted hover:text-sleep-text hover:bg-white/[0.03]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden flex flex-col items-center justify-center w-9 h-9 rounded-lg hover:bg-white/[0.03] transition-colors"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
        >
          <span className={`block w-4 h-0.5 bg-sleep-muted rounded-full transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
          <span className={`block w-4 h-0.5 bg-sleep-muted rounded-full mt-1 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-4 h-0.5 bg-sleep-muted rounded-full mt-1 transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-sleep-border bg-sleep-bg/95 backdrop-blur-xl">
          <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col gap-1">
            {LINKS.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  pathname === link.to
                    ? 'text-sleep-accent bg-sleep-accent-dim'
                    : 'text-sleep-muted hover:text-sleep-text hover:bg-white/[0.03]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
