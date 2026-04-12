import { Link, useLocation } from 'react-router-dom'

const LINKS = [
  { to: '/', label: 'Calculator' },
  { to: '/about', label: 'Sleep Science' },
  { to: '/sleep-tips', label: 'Tips' },
  { to: '/best-mattresses', label: 'Mattresses' },
  { to: '/shift-worker-sleep-calculator', label: 'Shift Work' },
  { to: '/blog', label: 'Blog' },
]

export default function Nav() {
  const { pathname } = useLocation()

  return (
    <nav className="border-b border-sleep-border bg-sleep-bg/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-lg bg-sleep-accent/10 border border-sleep-accent/20 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sleep-accent">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </div>
          <span className="text-sm font-bold text-sleep-text tracking-tight">
            Sleep<span className="text-sleep-accent">Cycler</span>
          </span>
        </Link>

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

        {/* Mobile menu — simplified */}
        <div className="md:hidden flex items-center gap-1">
          <Link to="/" className={`p-2 rounded-lg text-xs ${pathname === '/' ? 'text-sleep-accent' : 'text-sleep-muted'}`}>Calc</Link>
          <Link to="/sleep-tips" className={`p-2 rounded-lg text-xs ${pathname === '/sleep-tips' ? 'text-sleep-accent' : 'text-sleep-muted'}`}>Tips</Link>
          <Link to="/best-mattresses" className={`p-2 rounded-lg text-xs ${pathname === '/best-mattresses' ? 'text-sleep-accent' : 'text-sleep-muted'}`}>Shop</Link>
        </div>
      </div>
    </nav>
  )
}
