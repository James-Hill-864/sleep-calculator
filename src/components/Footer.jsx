import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-sleep-border mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-xs font-bold text-sleep-faint uppercase tracking-widest mb-3">Tool</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-sleep-muted hover:text-sleep-text transition-colors">Sleep Calculator</Link>
              <Link to="/shift-worker-sleep-calculator" className="block text-sm text-sleep-muted hover:text-sleep-text transition-colors">Shift Worker Calculator</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold text-sleep-faint uppercase tracking-widest mb-3">Learn</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm text-sleep-muted hover:text-sleep-text transition-colors">Sleep Cycles</Link>
              <Link to="/sleep-tips" className="block text-sm text-sleep-muted hover:text-sleep-text transition-colors">Sleep Tips</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold text-sleep-faint uppercase tracking-widest mb-3">Recommended</h4>
            <div className="space-y-2">
              <Link to="/best-mattresses" className="block text-sm text-sleep-muted hover:text-sleep-text transition-colors">Best Mattresses</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold text-sleep-faint uppercase tracking-widest mb-3">About</h4>
            <div className="space-y-2">
              <span className="block text-sm text-sleep-faint">Built for better sleep.</span>
            </div>
          </div>
        </div>
        <div className="border-t border-sleep-border pt-6 text-center">
          <p className="text-xs text-sleep-faint">
            &copy; {new Date().getFullYear()} SleepCycler. Not medical advice. Consult a healthcare professional for sleep disorders.
          </p>
        </div>
      </div>
    </footer>
  )
}
